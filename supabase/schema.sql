-- SAT ScoreBoost -- core schema: questions + profiles
--
-- Run this in the Supabase SQL editor (Project -> SQL Editor -> New query).
-- Safe to run on a fresh project or to re-run: `questions` is dropped and
-- recreated (it was empty/unused), `profiles` is created if missing.
--
-- This supersedes the old ad-hoc `questions` shape from the first version
-- of import_questions.sql (template_id/section/question_text/...). That
-- table was never populated, so there is no data migration to do -- this
-- file just replaces it with a shape that matches the app's question
-- objects (js/questions.js) field-for-field, so the client can read a row
-- and use it directly with no translation step.

-- ---------------------------------------------------------------------
-- questions
-- ---------------------------------------------------------------------
drop table if exists public.questions cascade;

create table public.questions (
  id text primary key,
  module text not null check (module in ('rw', 'math')),
  domain text not null,
  skill text not null,
  difficulty smallint not null check (difficulty between 1 and 3),
  passage text,
  prompt text not null,
  choices jsonb not null,
  answer smallint not null,
  explanation text not null,
  created_at timestamptz not null default now()
);

alter table public.questions enable row level security;

create policy "Public can read questions"
  on public.questions
  for select
  to anon, authenticated
  using (true);

-- No insert/update/delete policy is defined for anon or authenticated, so
-- those are denied by default -- writes go through the SQL editor or a
-- service_role key (import_questions.sql), never through the browser app.

-- ---------------------------------------------------------------------
-- profiles
-- ---------------------------------------------------------------------
-- One row per Supabase-authenticated user (Google or email/password --
-- both are real auth.users rows now, see js/auth.js), auto-created by the
-- trigger below regardless of which provider created the auth.users row.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  name text,
  plan text not null default 'free' check (plan in ('free', 'premium')),
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Re-running this file on a project whose `profiles` table predates the
-- Profile tab: add the column it's missing without touching existing rows.
alter table public.profiles add column if not exists avatar_url text;

alter table public.profiles enable row level security;

create policy "Users can read their own profile"
  on public.profiles
  for select
  to authenticated
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles
  for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Auto-create a profile row the moment someone signs in with Google for
-- the first time, so the app never has to (and never gets an insert
-- policy that would let a signed-in user create rows for other ids).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name', split_part(new.email, '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_profiles_updated_at on public.profiles;

create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------
-- avatars (Storage) -- profile pictures for Google-authenticated users
-- ---------------------------------------------------------------------
-- Public bucket: anyone can view an avatar (they're profile pictures, not
-- sensitive), but a user can only write to the folder named after their
-- own auth uid -- js/auth.js uploads to `${user.id}/avatar.jpg`, so this
-- policy shape keeps users from overwriting each other's files.
-- Email/password demo accounts store their photo as a data URL directly
-- in localStorage instead (see js/auth.js) -- they never touch this bucket.

insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do nothing;

drop policy if exists "Public can view avatars" on storage.objects;
create policy "Public can view avatars"
  on storage.objects
  for select
  to public
  using (bucket_id = 'avatars');

drop policy if exists "Users can upload their own avatar" on storage.objects;
create policy "Users can upload their own avatar"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "Users can update their own avatar" on storage.objects;
create policy "Users can update their own avatar"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "Users can delete their own avatar" on storage.objects;
create policy "Users can delete their own avatar"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

-- ---------------------------------------------------------------------
-- classrooms
-- ---------------------------------------------------------------------
-- A lightweight roster, not a role system: any signed-in user can create
-- a classroom (becoming its owner) and share its join code with
-- students, who join from their own account. This tracks who's enrolled
-- and when -- it does NOT aggregate student practice stats (accuracy,
-- streaks, mistakes, pacing all still live client-side per browser; see
-- js/app.js), so the classroom view in the app shows a roster, not a
-- progress dashboard, until that sync exists.

create table if not exists public.classrooms (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  join_code text not null unique,
  created_at timestamptz not null default now()
);

-- student_id references profiles (not auth.users directly) so PostgREST's
-- embed syntax (classroom_members.select("profiles(name,email)")) can
-- follow a direct foreign key for the roster view -- profiles.id is
-- already 1:1 with auth.users.id, so this changes nothing about identity.
--
-- Created right after classrooms and before any policies on either table:
-- classrooms' own RLS below references classroom_members in a subquery,
-- so that table has to exist first or the policy creation fails with
-- "relation does not exist".
create table if not exists public.classroom_members (
  classroom_id uuid not null references public.classrooms (id) on delete cascade,
  student_id uuid not null references public.profiles (id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (classroom_id, student_id)
);

alter table public.classrooms enable row level security;
alter table public.classroom_members enable row level security;

drop policy if exists "Owners can read their own classrooms" on public.classrooms;
create policy "Owners can read their own classrooms"
  on public.classrooms
  for select
  to authenticated
  using (auth.uid() = owner_id);

drop policy if exists "Members can read classrooms they belong to" on public.classrooms;
create policy "Members can read classrooms they belong to"
  on public.classrooms
  for select
  to authenticated
  using (exists (
    select 1 from public.classroom_members m
    where m.classroom_id = classrooms.id and m.student_id = auth.uid()
  ));

drop policy if exists "Users can create their own classroom" on public.classrooms;
create policy "Users can create their own classroom"
  on public.classrooms
  for insert
  to authenticated
  with check (auth.uid() = owner_id);

drop policy if exists "Owners can update their own classroom" on public.classrooms;
create policy "Owners can update their own classroom"
  on public.classrooms
  for update
  to authenticated
  using (auth.uid() = owner_id)
  with check (auth.uid() = owner_id);

drop policy if exists "Owners can delete their own classroom" on public.classrooms;
create policy "Owners can delete their own classroom"
  on public.classrooms
  for delete
  to authenticated
  using (auth.uid() = owner_id);

drop policy if exists "Owners can read their classroom's roster" on public.classroom_members;
create policy "Owners can read their classroom's roster"
  on public.classroom_members
  for select
  to authenticated
  using (exists (
    select 1 from public.classrooms c
    where c.id = classroom_members.classroom_id and c.owner_id = auth.uid()
  ));

drop policy if exists "Students can read their own membership rows" on public.classroom_members;
create policy "Students can read their own membership rows"
  on public.classroom_members
  for select
  to authenticated
  using (auth.uid() = student_id);

drop policy if exists "Students can join a classroom themselves" on public.classroom_members;
create policy "Students can join a classroom themselves"
  on public.classroom_members
  for insert
  to authenticated
  with check (auth.uid() = student_id);

drop policy if exists "Students can leave a classroom themselves" on public.classroom_members;
create policy "Students can leave a classroom themselves"
  on public.classroom_members
  for delete
  to authenticated
  using (auth.uid() = student_id);

-- Lets a classroom owner see the name/email of students on their own
-- roster -- the base "Users can read their own profile" policy above
-- only covers auth.uid() = id, which wouldn't otherwise let a teacher
-- read anyone else's profile row.
drop policy if exists "Classroom owners can read their roster's profiles" on public.profiles;
create policy "Classroom owners can read their roster's profiles"
  on public.profiles
  for select
  to authenticated
  using (exists (
    select 1 from public.classroom_members m
    join public.classrooms c on c.id = m.classroom_id
    where m.student_id = profiles.id and c.owner_id = auth.uid()
  ));
