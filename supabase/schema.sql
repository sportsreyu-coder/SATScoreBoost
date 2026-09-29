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
-- One row per Supabase-authenticated (Google) user, keyed to auth.users.
-- The app's local email/password sign-in is a client-only demo (see
-- js/auth.js) and does not get a row here -- there's no real backend
-- identity to attach it to.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  name text,
  plan text not null default 'free' check (plan in ('free', 'premium')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

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
