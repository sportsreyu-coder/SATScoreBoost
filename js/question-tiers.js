// SAT ScoreBoost — Extra Hard tier
//
// Difficulty 4 ("Extra Hard") holds questions that are harder than anything
// on the real digital SAT: out-of-scope topics (quadratic inequalities,
// exponential equations solved by substitution, two-draw probability) or
// extra steps beyond a real Hard item. They're pulled out of QUESTIONS so
// practice tests, lesson drills, games, and the daily set stay true to SAT
// difficulty; the Question Bank's "Extra Hard" filter is the only way in.
//
// Loaded after js/questions/*.js; questions-remote.js calls
// partitionQuestionTiers() again after swapping in the Supabase bank.
const EXTRA_HARD_QUESTIONS = [];

// Deprecated questions (garbled answer choices), parked in
// js/questions/deprecated.js. Their Supabase rows are kept so students'
// attempt history isn't cascade-deleted; they're just dropped here.
const DEPRECATED_QUESTION_IDS = new Set([
  "adv-h38", "adv-h58", "adv-h98", "adv-h118", "adv-h138", "adv-h158",
  "adv-h178", "adv-h218", "adv-h238", "adv-h258", "adv-h278",
]);

function partitionQuestionTiers() {
  const all = QUESTIONS.splice(0);
  EXTRA_HARD_QUESTIONS.length = 0;
  all.forEach((q) => {
    if (DEPRECATED_QUESTION_IDS.has(q.id)) return;
    (q.difficulty === 4 ? EXTRA_HARD_QUESTIONS : QUESTIONS).push(q);
  });
}

partitionQuestionTiers();
