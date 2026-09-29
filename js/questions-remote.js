// SAT ScoreBoost — remote question bank
//
// The static QUESTIONS array (populated by js/questions.js and
// js/questions/*.js, loaded just before this file) is the offline/default
// bank. On load, this tries to replace it with the version stored in
// Supabase's public.questions table, so the bank can be updated or
// expanded server-side without shipping a new build. If Supabase is
// unreachable, empty, or errors, QUESTIONS is left exactly as the static
// files built it — this is a best-effort upgrade, never a hard dependency.
(function () {
  "use strict";

  async function loadRemoteQuestions() {
    if (!window.supabaseClient || !window.QUESTIONS) return;
    try {
      const { data, error } = await window.supabaseClient
        .from("questions")
        .select("id, module, domain, skill, difficulty, passage, prompt, choices, answer, explanation");
      if (error || !data || !data.length) return;
      QUESTIONS.length = 0;
      QUESTIONS.push(...data);
    } catch (e) {
      // Offline, CORS, or the table isn't set up yet — keep the static bank.
    }
  }

  loadRemoteQuestions();
})();
