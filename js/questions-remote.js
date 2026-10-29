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
    // QUESTIONS is a top-level `const`, so it's a shared global but never a
    // property of window — check it directly.
    if (!window.supabaseClient || typeof QUESTIONS === "undefined") return;
    try {
      // Supabase caps each response at 1,000 rows, so page through the
      // table; swap the bank in only once every page has arrived.
      const PAGE_SIZE = 1000;
      const BASE_COLUMNS = "id, module, domain, skill, difficulty, passage, prompt, choices, answer, explanation";
      // choice_explanations is a later column; if the live table predates
      // it, the select errors, so retry once without it.
      const fetchAll = async (columns) => {
        const rows = [];
        for (let from = 0; ; from += PAGE_SIZE) {
          const { data, error } = await window.supabaseClient
            .from("questions")
            .select(columns)
            .order("id")
            .range(from, from + PAGE_SIZE - 1);
          if (error || !data) return null;
          rows.push(...data);
          if (data.length < PAGE_SIZE) break;
        }
        return rows;
      };
      const rows = (await fetchAll(BASE_COLUMNS + ", choice_explanations")) || (await fetchAll(BASE_COLUMNS));
      if (!rows || !rows.length) return;
      QUESTIONS.length = 0;
      QUESTIONS.push(
        ...rows.map(({ choice_explanations, ...q }) => ({ ...q, choiceExplanations: choice_explanations || null }))
      );
      // Re-split off the Extra Hard tier (js/question-tiers.js).
      if (typeof partitionQuestionTiers === "function") partitionQuestionTiers();
    } catch (e) {
      // Offline, CORS, or the table isn't set up yet — keep the static bank.
    }
  }

  loadRemoteQuestions();
})();
