-- SAT ScoreBoost -- student answer history: question_attempts + missed_question_review
--
-- Run in the Supabase SQL editor AFTER schema.sql and the question import
-- (supabase/import/*.sql). Safe to re-run. Kept separate from schema.sql
-- because that file drops and recreates public.questions; if you ever
-- re-run schema.sql, re-run the import and then this file too so the
-- foreign key and view below are restored.

-- ---------------------------------------------------------------------
-- question_attempts
-- ---------------------------------------------------------------------
-- One row per answered question in a finished session (practice,
-- question bank, redo queue, or a full-length test), written by
-- recordSessionProgress() in js/app.js. Holds the choice the student
-- picked and, for a miss, the reason they tagged under "Why did you miss
-- this?" (keys match MISTAKE_REASONS in js/app.js). The question text,
-- choices, correct answer, and explanation stay in public.questions --
-- join on question_id, or read the missed_question_review view below.
--
-- Signed-out/guest sessions are not synced; their history stays in
-- localStorage only.

create table if not exists public.question_attempts (
  id bigint generated always as identity primary key,
  user_id uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  question_id text not null,
  selected_choice smallint not null,
  is_correct boolean not null,
  miss_reason text check (miss_reason in ('misread', 'careless', 'concept', 'time', 'guess')),
  time_sec numeric,
  created_at timestamptz not null default now()
);

-- Added separately so a re-run restores it after schema.sql's
-- `drop table questions cascade` has removed it.
alter table public.question_attempts
  drop constraint if exists question_attempts_question_id_fkey;
alter table public.question_attempts
  add constraint question_attempts_question_id_fkey
  foreign key (question_id) references public.questions (id) on delete cascade;

create index if not exists question_attempts_user_created_idx
  on public.question_attempts (user_id, created_at desc);

alter table public.question_attempts enable row level security;

drop policy if exists "Users can record their own attempts" on public.question_attempts;
create policy "Users can record their own attempts"
  on public.question_attempts
  for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can read their own attempts" on public.question_attempts;
create policy "Users can read their own attempts"
  on public.question_attempts
  for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Classroom owners can read their roster's attempts" on public.question_attempts;
create policy "Classroom owners can read their roster's attempts"
  on public.question_attempts
  for select
  to authenticated
  using (exists (
    select 1 from public.classroom_members m
    join public.classrooms c on c.id = m.classroom_id
    where m.student_id = question_attempts.user_id and c.owner_id = auth.uid()
  ));

-- Every miss with everything needed to review it in one row: the
-- question, the choice the student picked, the correct choice, the
-- explanation, the tagged miss reason, and why the picked choice is wrong. security_invoker makes the
-- view obey question_attempts' RLS for whoever queries it.
create or replace view public.missed_question_review
  with (security_invoker = true)
as
select
  a.id as attempt_id,
  a.user_id,
  a.created_at,
  q.id as question_id,
  q.module,
  q.domain,
  q.skill,
  q.difficulty,
  q.passage,
  q.prompt,
  q.choices,
  a.selected_choice,
  q.choices ->> a.selected_choice as selected_choice_text,
  q.answer as correct_choice,
  q.choices ->> q.answer as correct_choice_text,
  q.explanation,
  a.miss_reason,
  a.time_sec,
  q.choice_explanations,
  q.choice_explanations ->> a.selected_choice as selected_choice_explanation
from public.question_attempts a
join public.questions q on q.id = a.question_id
where not a.is_correct;
