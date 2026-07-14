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

// Full-length diagnostics — a true clone of the real digital SAT's structure:
// RW Module 1 (27 questions) + RW Module 2 (27 questions), a 10-minute break,
// then Math Module 1 (22 questions) + Math Module 2 (22 questions), 98
// questions total. Domain mix within each module roughly matches the real
// test's published weighting (RW: Information and Ideas / Craft and
// Structure / Standard English Conventions / Expression of Ideas; Math:
// Algebra / Advanced Math / Problem-Solving and Data Analysis / Geometry
// and Trigonometry).
//
// Between the two full diagnostics, every Reading & Writing question in the
// bank is used exactly once (54 + 54 = 108) and roughly half the Math bank
// (44 + 44 = 88 of 112) — there's currently not enough distinct content for
// two full-length runs without dipping into ids also used by the shorter
// DIAGNOSTICS above, so some of that overlap is unavoidable until the bank
// grows. The two full diagnostics never repeat a question against each
// other, though.

const FULL_DIAGNOSTICS = [
  {
    id: "full1",
    label: "Full Diagnostic 1",
    modules: {
      rw1: [
        "ii-1", "ii-2", "ii-3", "ii-4", "ii-5", "ii-6", "ii-7",
        "cs-1", "cs-2", "cs-3", "cs-4", "cs-5", "cs-6", "cs-7",
        "conv-1", "conv-2", "conv-3", "conv-4", "conv-5", "conv-6", "conv-7",
        "ei-1", "ei-2", "ei-3", "ei-4", "ei-5", "ei-6",
      ],
      rw2: [
        "ii-8", "ii-9", "ii-10", "ii-11", "ii-12", "ii-13", "ii-14",
        "cs-8", "cs-9", "cs-10", "cs-11", "cs-12", "cs-13",
        "conv-8", "conv-9", "conv-10", "conv-11", "conv-12", "conv-13", "conv-14",
        "ei-7", "ei-8", "ei-9", "ei-10", "ei-11", "ei-12", "ei-13",
      ],
      math1: [
        "alg-1", "alg-2", "alg-3", "alg-4", "alg-5", "alg-6", "alg-7",
        "adv-1", "adv-2", "adv-3", "adv-4", "adv-5", "adv-6", "adv-7",
        "m-2", "m-3", "m-9", "pd-1",
        "geo-1", "geo-2", "geo-3", "geo-4",
      ],
      math2: [
        "alg-8", "alg-9", "alg-10", "alg-11", "alg-12", "alg-13", "alg-14",
        "adv-8", "adv-9", "adv-10", "adv-11", "adv-12", "adv-13", "adv-14",
        "pd-2", "pd-3", "pd-4", "pd-5",
        "geo-5", "geo-6", "geo-7", "geo-8",
      ],
    },
  },
  {
    id: "full2",
    label: "Full Diagnostic 2",
    modules: {
      rw1: [
        "ii-15", "ii-16", "ii-17", "ii-18", "ii-19", "ii-20", "ii-21",
        "cs-14", "cs-15", "cs-16", "cs-17", "cs-18", "cs-19", "cs-20",
        "conv-15", "conv-16", "conv-17", "conv-18", "conv-19", "conv-20", "conv-21",
        "ei-14", "ei-15", "ei-16", "ei-17", "ei-18", "ei-19",
      ],
      rw2: [
        "ii-22", "ii-23", "ii-24", "ii-25", "rw-2", "rw-6",
        "cs-21", "cs-22", "cs-23", "cs-24", "cs-25", "rw-1", "rw-7",
        "conv-22", "conv-23", "conv-24", "conv-25", "rw-3", "rw-4", "rw-8",
        "ei-20", "ei-21", "ei-22", "ei-23", "ei-24", "ei-25", "rw-5",
      ],
      math1: [
        "alg-15", "alg-16", "alg-17", "alg-18", "alg-19", "alg-20", "alg-21",
        "adv-15", "adv-16", "adv-17", "adv-18", "adv-19", "adv-20", "adv-21",
        "pd-6", "pd-7", "pd-8", "pd-9",
        "geo-9", "geo-10", "geo-11", "geo-12",
      ],
      math2: [
        "alg-22", "alg-23", "alg-24", "alg-25", "m-1", "m-4", "m-6",
        "adv-22", "adv-23", "adv-24", "adv-25", "m-5", "m-7", "m-10",
        "pd-10", "pd-11", "pd-12", "pd-13",
        "geo-13", "geo-14", "geo-15", "geo-16",
      ],
    },
  },
];
