-- SAT ScoreBoost — Row Level Security for `templates` and `questions`
--
-- Access model: public read, admin-only write.
-- Anyone (including the anonymous/public API key used by the app) can
-- SELECT rows. No INSERT/UPDATE/DELETE policy is defined for anon or
-- authenticated roles, so those operations are denied by default once RLS
-- is enabled. Writes must go through the `service_role` key (Supabase
-- dashboard, SQL editor, or a trusted server-side/admin script) — never
-- through the browser app, since service_role bypasses RLS entirely.
--
-- Run this in the Supabase SQL editor (Project → SQL Editor → New query).

alter table public.templates enable row level security;
alter table public.questions enable row level security;

create policy "Public can read templates"
  on public.templates
  for select
  to anon, authenticated
  using (true);

create policy "Public can read questions"
  on public.questions
  for select
  to anon, authenticated
  using (true);
