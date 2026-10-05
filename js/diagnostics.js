// Short Diagnostic — a true clone of the real digital SAT's structure:
// RW Module 1 (27 questions) + RW Module 2 (27 questions), a 10-minute break,
// then Math Module 1 (22 questions) + Math Module 2 (22 questions), 98
// questions total. Domain mix within each module roughly matches the real
// test's published weighting (RW: Information and Ideas / Craft and
// Structure / Standard English Conventions / Expression of Ideas; Math:
// Algebra / Advanced Math / Problem-Solving and Data Analysis / Geometry
// and Trigonometry). This is the free entry point — no account or upgrade
// needed.
//
// Between the two sets, every Reading & Writing question in the bank is
// used exactly once (54 + 54 = 108) and roughly half the Math bank
// (44 + 44 = 88 of 112) — there's currently not enough distinct content for
// two full-length runs without dipping into ids also used elsewhere, so
// some overlap with the Full Scale Test below is unavoidable until the
// bank grows. The two sets never repeat a question against each other,
// though.

const PRACTICE_SAT = [
  {
    id: "practice1",
    label: "Short Diagnostic 1",
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
    id: "practice2",
    label: "Short Diagnostic 2",
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

// Full Scale Test — a bigger, adaptive, ScoreBoost-Pro-only test: 100
// Reading & Writing questions + 100 Math questions (200 total), each
// subject split into two 50-question modules. Module 1 of each subject
// draws from a College-Board-like domain mix at a medium difficulty
// spread; Module 2 is then routed adaptively — harder if Module 1 went
// well, easier if it didn't — exactly like the real adaptive digital SAT,
// just scaled up and covering more of the question bank per attempt.
//
// Unlike PRACTICE_SAT above, this isn't a fixed set of question ids: it's
// assembled at run time (see buildAdaptiveModule() in app.js) so every
// attempt pulls a fresh, non-repeating mix and the routing can actually
// react to how the student did on Module 1.

const FULL_SCALE_MODULE_SIZE = 50; // questions per module -> 100 per subject, 200 total

// Question counts per 50-question module, approximating the real digital
// SAT's published domain weighting for each subject.
const FULL_SCALE_DOMAIN_MIX = {
  rw: [
    ["Information and Ideas", 13],
    ["Craft and Structure", 14],
    ["Standard English Conventions", 13],
    ["Expression of Ideas", 10],
  ],
  math: [
    ["Algebra", 17],
    ["Advanced Math", 17],
    ["Problem-Solving and Data Analysis", 8],
    ["Geometry and Trigonometry", 8],
  ],
};

// Relative difficulty weights (1 = easiest, 3 = hardest) used when
// sampling each module. "medium" is Module 1's natural spread; "harder"
// and "easier" are where Module 2 gets routed adaptively.
const FULL_SCALE_TIER_WEIGHTS = {
  medium: { 1: 0.3, 2: 0.4, 3: 0.3 },
  harder: { 1: 0.1, 2: 0.3, 3: 0.6 },
  easier: { 1: 0.5, 2: 0.35, 3: 0.15 },
};
