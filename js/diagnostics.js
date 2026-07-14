// Fixed mini-SAT diagnostics — 10 Reading & Writing + 10 Math questions each,
// mirroring the real digital SAT's per-module structure so a "Start Diagnostic"
// run gives a meaningful projected score rather than a random grab-bag.
//
// Each diagnostic pulls a distinct, non-overlapping set of question ids so
// retaking gives genuinely different content, with a College-Board-like
// domain mix per subject (roughly 3/3/2/2 across the four domains in each
// subject) and a spread of difficulty within each domain.

const DIAGNOSTICS = [
  {
    id: "diag1",
    label: "Diagnostic 1",
    questionIds: [
      // Reading & Writing (10)
      "ii-1", "ii-4", "ii-7",
      "cs-1", "cs-4", "cs-20",
      "conv-1", "conv-12",
      "ei-1", "ei-10",
      // Math (10)
      "alg-1", "alg-7", "alg-11",
      "adv-1", "adv-4", "adv-7",
      "pd-1", "pd-9",
      "geo-1", "geo-22",
    ],
  },
  {
    id: "diag2",
    label: "Diagnostic 2",
    questionIds: [
      // Reading & Writing (10)
      "ii-2", "ii-5", "ii-8",
      "cs-2", "cs-5", "cs-22",
      "conv-2", "conv-17",
      "ei-2", "ei-18",
      // Math (10)
      "alg-2", "alg-8", "alg-19",
      "adv-3", "adv-8", "adv-9",
      "pd-2", "pd-16",
      "geo-2", "geo-25",
    ],
  },
  {
    id: "diag3",
    label: "Diagnostic 3",
    questionIds: [
      // Reading & Writing (10)
      "ii-3", "ii-6", "ii-9",
      "cs-3", "cs-6", "cs-23",
      "conv-4", "conv-21",
      "ei-3", "ei-22",
      // Math (10)
      "alg-3", "alg-9", "alg-22",
      "adv-5", "adv-11", "adv-10",
      "pd-3", "pd-6",
      "geo-3", "geo-5",
    ],
  },
];
