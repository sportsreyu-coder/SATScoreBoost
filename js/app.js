// SAT ScoreBoost — practice engine
(function () {
  "use strict";

  // ---- State ----
  const state = {
    module: null,      // "rw" | "math" | "mixed" | "diagnostic" | "full-diagnostic"
    diagnosticIndex: null,     // which entry of PRACTICE_SAT is active (state.module === "diagnostic")
    fullDiagnosticIndex: null, // unused — kept for storage-key compatibility
    diagKind: null,     // "practice" | "full-scale" — which multi-module engine is driving diagnostic/full-diagnostic
    questions: [],     // active question set (just the current module, for diagnostic/full-diagnostic)
    answers: {},       // qIndex -> choiceIndex
    checked: {},       // qIndex -> bool, true once "Check Answer" has revealed it
    missReasons: {},   // qIndex -> reason key (see MISTAKE_REASONS), tagged after a wrong answer
    questionStartTimes: {}, // qIndex -> ms timestamp when first shown unanswered (pacing)
    questionTimes: {}, // qIndex -> seconds elapsed to the first answer (pacing)
    eliminated: {},    // qIndex -> Set of choiceIndex
    marked: {},        // qIndex -> bool
    current: 0,
    eliminating: false,
    timer: null,
    secondsLeft: 0,
    timerHidden: false,   // user's "hide timer" preference, overridden once time is low
    timeWarningShown: false, // whether the 5-minute toast has fired for this module
    breakTimer: null,
    breakSecondsLeft: 0,
    pillWindowStart: 0, // first index shown in the footer's question-pill strip
    fdModules: null,      // diagnostic/full-diagnostic: the 4 modules' shuffled question arrays (Module 2 of each subject may be null until adaptively built)
    fdModuleIndex: 0,     // diagnostic/full-diagnostic: which of the 4 modules is active
    fdResults: [],        // diagnostic/full-diagnostic: flattened {q, selected} across completed modules
    fdUsedIds: null,       // full-scale test only: Set of question ids already used this attempt, so Module 2 never repeats Module 1
    fdTier: {},            // full-scale test only: { rw: "harder"|"easier", math: "harder"|"easier" } — which way Module 2 was adaptively routed
    reviewMode: false,    // true once viewing a finished attempt's review-all-questions list
    categoryLabel: null,  // set when practicing a single Question Bank category
    categoryDomain: null, // the domain string, so "retry" can restart the same category
    bankTab: "math",      // "math" | "rw" — which Question Bank subject tab is showing
    lessonsTab: "rw",     // "rw" | "math" — which Lessons subject tab is showing
    lessonsFreeOnly: false, // true = Lessons list is filtered down to free-tier lessons only
    bankDifficulty: new Set(), // selected difficulty filters (1/2/3); empty = show all
    domainFilter: null,   // set when practicing a single domain from the Study Plan
    skillFilter: null,    // set when practicing a single skill from a Lesson
    activeLesson: null,   // { domain, index } of the lesson currently open, or null for the list view
    lessonChatLog: [],    // transient {from, text} messages for the active lesson's AI Tutor panel
    game: null,           // "math-blitz" | "vocab-rush" | "word-match" | "dungeon-quest" | "study-tycoon" | null (which game is on screen)
    rpgScreen: null,       // "overworld" | "zone" | "battle" | "victory" | "defeat" | "shop" (dungeon quest sub-screen)
    rpgZoneKey: null,      // domain key of the zone currently open on the zone screen / just battled in
    rpgBattle: null,       // { zoneKey, floorIndex, isBoss, enemyName, enemyHp, enemyMaxHp, pool, qIndex, log, locked, reward }
    idlePool: null,        // Study Tycoon: shuffled question pool for the current session
    idleQIndex: 0,         // Study Tycoon: index into idlePool of the question on screen
    idleLocked: false,     // Study Tycoon: true while an answer's correct/incorrect flash is showing
  };

  // ---- Question Bank categories ----
  // `key` matches the `domain` value on QUESTIONS (for filtering/counting);
  // `label` is our own display name, distinct from the raw CB domain string.
  // Every entry here has real, original questions — no reserved/placeholder
  // slots for outside content.
  const BANK_CATEGORIES = {
    math: [
      { key: "Algebra", label: "Linear Algebra" },
      { key: "Advanced Math", label: "Nonlinear & Advanced Math" },
      { key: "Problem-Solving and Data Analysis", label: "Data & Problem Solving" },
      { key: "Geometry and Trigonometry", label: "Geometry & Trigonometry" },
    ],
    rw: [
      { key: "Information and Ideas", label: "Reading Comprehension" },
      { key: "Craft and Structure", label: "Vocabulary & Text Craft" },
      { key: "Standard English Conventions", label: "Grammar & Punctuation" },
      { key: "Expression of Ideas", label: "Rhetoric & Transitions" },
    ],
  };

  const SECONDS_PER_Q = 90;
  const TIME_WARNING_SECONDS = 300; // shows the red "5 minutes remaining" warning
  const PILL_WINDOW = 10; // how many question pills are visible at once
  const SAVED_SESSION_KEY = "sat_saved_session"; // snapshot of an exam left mid-way, so it can be resumed
  const DIAG_INDEX_KEY = "sat_diag_index"; // last diagnostic index, for rotation
  const STREAK_KEY = "sat_streaks";
  const STREAK_HISTORY_DAYS = 60; // how many activity dates to keep per streak
  const LIFETIME_KEY = "sat_lifetime_answers";
  const STATS_KEY = "sat_stats";
  const CORRECT_STREAK_KEY = "sat_correct_streak"; // longest run of consecutive correct answers
  const STUDY_PLAN_KEY = "sat_last_diagnostic"; // most recent diagnostic's category breakdown
  const GOAL_KEY = "sat_goal"; // user's target SAT score, shown on the Dashboard
  const DEFAULT_GOAL = 1600;
  const TEST_DATE_KEY = "sat_test_date"; // chosen exam date (YYYY-MM-DD), for the Study Plan's daily plan
  const MINUTES_PER_DAY_KEY = "sat_minutes_per_day"; // minutes/day the student said they can study
  const DEFAULT_MINUTES_PER_DAY = 30;
  const DOMAIN_TODAY_KEY = "sat_domain_today"; // per-domain answered-question counts, today only
  const MISTAKE_BANK_KEY = "sat_mistake_bank"; // missed questions on the redo queue, with their spaced-repetition box/due date
  const MISTAKES_REVIEWED_KEY = "sat_mistakes_reviewed_today"; // count of mistakes reviewed today
  const MISTAKE_REASON_TALLY_KEY = "sat_mistake_reason_tally"; // lifetime counts per tagged miss reason, for the Study Plan insight
  const TIMED_MODULE_KEY = "sat_timed_module_today"; // whether a timed session was completed today
  const MISTAKE_BANK_LIMIT = 50;
  const DAY_MS = 24 * 60 * 60 * 1000;
  const THEME_KEY = "sat_theme"; // explicit light/dark override; unset means "follow the OS"
  // Leitner-style spaced repetition: index = the box a mistake is in, value
  // = days to wait before it's due again after being answered correctly
  // from that box. Reaching an index past the end of this array means it's
  // been answered correctly that many times in a row and is mastered —
  // it drops out of the redo queue entirely instead of getting a 4th wait.
  const MISTAKE_REDO_INTERVALS_DAYS = [0, 1, 3];
  const MISTAKE_MASTERY_BOX = MISTAKE_REDO_INTERVALS_DAYS.length;
  // Why a question was missed, tagged right after a wrong answer — powers
  // the "why you're missing points" breakdown on the Study Plan page.
  const MISTAKE_REASONS = {
    misread: "Misread the question",
    careless: "Careless slip",
    concept: "Didn't know it",
    time: "Ran out of time",
    guess: "Guessed",
  };
  const PACING_LOG_KEY = "sat_pacing_log"; // rolling {domain, module, correct, timeSec} samples, for the pacing insight
  const PACING_LOG_LIMIT = 300;
  const PACE_RUSHED_SECONDS = 20; // under this and a miss reads as "rushed it" rather than "didn't know it"
  const PACE_STALLED_SECONDS = 120;
  const PACE_MIN_DOMAIN_SAMPLES = 5; // don't call a domain "slow" off one or two questions
  const XP_KEY = "sat_xp"; // lifetime XP earned from completed quests
  const QUEST_XP_AWARDED_KEY = "sat_quest_xp_awarded"; // which quests have already paid out XP today
  const RPG_KEY = "sat_rpg_state"; // Dungeon Quest save: level, xp, hp, gold, gear tiers, zone progress
  const IDLE_KEY = "sat_idle_state"; // Study Tycoon save: Brainpower, lifetime stats, owned generators
  const IDLE_OFFLINE_CAP_MS = 4 * 60 * 60 * 1000; // offline earnings cap out at 4 hours away
  const IDLE_TICK_MS = 1000;

  // ---- Progress storage ----
  // Guests get their progress tracked in sessionStorage (gone once the tab
  // closes); logging in switches to localStorage under a per-account key so
  // it survives across visits. This is what "log in to save your progress"
  // actually means here.
  function progressStore() {
    return window.Auth && window.Auth.getCurrentUser() ? localStorage : sessionStorage;
  }

  function progressKey(base) {
    const user = window.Auth && window.Auth.getCurrentUser();
    return user ? `${base}::${user.email}` : base;
  }

  // ---- Theme ----
  // Light/dark is a per-browser display preference, not study progress —
  // always plain localStorage, never scoped to the signed-in user or
  // reset by progressStore()'s guest/sessionStorage split.
  function getTheme() {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "dark" || attr === "light") return attr;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) { /* localStorage unavailable */ }
  }

  // ---- Badges ----
  const TIER_META = [
    { name: "Bronze", color: "#c9793d" },
    { name: "Silver", color: "#b7c1cb" },
    { name: "Gold", color: "#e8c14d" },
    { name: "Platinum", color: "#9fcbd6" },
    { name: "Diamond", color: "#7dd3f0" },
  ];
  const QUESTION_TIERS = [10, 50, 100, 500, 1000];
  const STREAK_TIERS = [3, 7, 30, 100, 365];

  // ---- Battle Pass ----
  // Brawl Stars-style two-lane pass: spends the same lifetime XP that
  // quests already pay into (see XP_KEY below) as levels on a reward
  // track. Every level costs the same amount of XP and unlocks a Free
  // reward automatically; the Premium lane needs both the level AND a
  // Pro upgrade to actually claim. Rewards below are placeholders until
  // real ones are set up.
  const BATTLE_PASS_XP_PER_LEVEL = 100;
  const BATTLE_PASS_FREE_REWARDS = [
    "Rising Scholar title",
    "Streak sticker",
    "Dashboard theme: Slate",
    "Answer-review flair",
    { milestone: true, label: "Bronze profile frame" },
    "Focused Learner title",
    "Math whiz sticker",
    "Grammar guardian sticker",
    "Reading ace sticker",
    { milestone: true, label: "Silver profile frame" },
    "Consistent Closer title",
    "Data cruncher sticker",
    "Speedrunner sticker",
    "Dashboard theme: Forest",
    { milestone: true, label: "Gold profile frame" },
    "Top of the Class title",
    "Perfect streak sticker",
    "Vocabulary victor sticker",
    "Dashboard theme: Midnight",
    { milestone: true, label: "Platinum profile frame" },
    "Marathon Mind title",
    "Precision player sticker",
    "Early bird sticker",
    "Dashboard theme: Sunrise",
    { milestone: true, label: "Diamond profile frame" },
    "Night owl title",
    "Comeback kid sticker",
    "Century club sticker",
    "Dashboard theme: Chalkboard",
    { milestone: true, label: "Champion profile frame" },
  ];
  const BATTLE_PASS_PREMIUM_REWARDS = [
    "Exclusive title: Pass Starter",
    "Gold streak sticker",
    "Premium dashboard theme: Aurora",
    "Bonus XP token",
    { milestone: true, label: "Exclusive frame: Vanguard" },
    "Exclusive title: Overachiever",
    "Premium sticker pack: Math Elite",
    "Premium sticker pack: Verbal Elite",
    "Bonus XP token",
    { milestone: true, label: "Exclusive frame: Luminary" },
    "Exclusive title: Relentless",
    "Premium sticker: Iron Focus",
    "Premium dashboard theme: Nebula",
    "Bonus XP token",
    { milestone: true, label: "Exclusive frame: Paragon" },
    "Exclusive title: Score Chaser",
    "Premium sticker: Flawless Run",
    "Premium dashboard theme: Ember",
    "Bonus XP token",
    { milestone: true, label: "Exclusive frame: Sovereign" },
    "Exclusive title: Elite Scholar",
    "Premium sticker: Unstoppable",
    "Premium dashboard theme: Glacier",
    "Bonus XP token",
    { milestone: true, label: "Exclusive frame: Mythic" },
    "Exclusive title: Grandmaster",
    "Premium sticker: Perfectionist",
    "Premium dashboard theme: Solstice",
    "Bonus XP token",
    { milestone: true, label: "Exclusive frame: Legend" },
  ];
  const BATTLE_PASS_MAX_LEVEL = BATTLE_PASS_FREE_REWARDS.length;

  const BREAK_SECONDS = 600; // 10-minute break between RW and Math, like the real SAT
  // Both the free Full-Length Practice Test (state.module === "diagnostic") and the
  // Pro Full Scale Test (state.module === "full-diagnostic") run the same
  // 4-module shape — RW Module 1/2, a break, then Math Module 1/2 — just at
  // different sizes and timings. See diagModuleDurations()/diagModuleLabels().
  const DIAG_MODULE_KEYS = ["rw1", "rw2", "math1", "math2"];

  // Free Full-Length Practice Test: real digital SAT per-module structure and timing.
  const PRACTICE_SAT_MODULE_DURATIONS = [32 * 60, 32 * 60, 35 * 60, 35 * 60];
  const PRACTICE_SAT_MODULE_LABELS = [
    "Reading & Writing — Module 1",
    "Reading & Writing — Module 2",
    "Math — Module 1",
    "Math — Module 2",
  ];

  // Pro Full Scale Test: 50 questions/module (100/subject, 200 total), so
  // modules run longer — scaled from the real test's per-question pacing.
  const FULL_SCALE_MODULE_DURATIONS = [60 * 60, 60 * 60, 80 * 60, 80 * 60];
  const FULL_SCALE_MODULE_LABELS = [
    "Reading & Writing — Module 1",
    "Reading & Writing — Module 2 (Adaptive)",
    "Math — Module 1",
    "Math — Module 2 (Adaptive)",
  ];

  // ---- Question-pill window helpers ----
  function clampWindowStart(start) {
    const maxStart = Math.max(0, state.questions.length - PILL_WINDOW);
    return Math.min(Math.max(0, start), maxStart);
  }

  // Re-centers the visible pill window so the current question is always
  // shown, paging forward a full window once current reaches its last slot.
  function ensureCurrentVisible() {
    const start = state.pillWindowStart;
    const end = start + PILL_WINDOW - 1;
    if (state.current < start || state.current >= end) {
      state.pillWindowStart = clampWindowStart(state.current);
    }
  }

  // ---- Screen elements ----
  const screens = {
    landing: document.getElementById("landing"),
    dashboard: document.getElementById("dashboard"),
    bank: document.getElementById("bank"),
    exam: document.getElementById("exam"),
    break: document.getElementById("break"),
    results: document.getElementById("results"),
    social: document.getElementById("social"),
    badges: document.getElementById("badges"),
    battlepass: document.getElementById("battlepass"),
    profile: document.getElementById("profile"),
    studyPlan: document.getElementById("studyPlan"),
    lessons: document.getElementById("lessons"),
    games: document.getElementById("games"),
    classroom: document.getElementById("classroom"),
  };

  function show(name) {
    Object.values(screens).forEach((s) => s.classList.add("hidden"));
    screens[name].classList.remove("hidden");
    // The exam screen hides the top bar for extra vertical space; the exam
    // header's own Home button covers navigating back out in that case.
    document.getElementById("topbar").classList.toggle("hidden", name === "exam");
    document.getElementById("siteFooter").classList.toggle("hidden", name === "exam");
    document.getElementById("bottomTabBar")?.classList.toggle("hidden", name === "exam");
    document.getElementById("bankNavBtn").classList.toggle("active", name === "bank");
    document.getElementById("dashboardNavBtn").classList.toggle("active", name === "dashboard");
    document.getElementById("lessonsNavBtn").classList.toggle("active", name === "lessons");
    document.getElementById("gamesNavBtn").classList.toggle("active", name === "games");
    document.getElementById("bottomTabBank")?.classList.toggle("active", name === "bank");
    document.getElementById("bottomTabDashboard")?.classList.toggle("active", name === "dashboard");
    document.getElementById("bottomTabLessons")?.classList.toggle("active", name === "lessons");
    document.getElementById("bottomTabGames")?.classList.toggle("active", name === "games");
    if (name !== "exam") closeCalculatorPanel();
    if (name !== "games") stopActiveGame();
    document.getElementById("topbarCenter")?.classList.remove("open");
    document.getElementById("navToggle")?.setAttribute("aria-expanded", "false");
    if (name === "landing") renderResumeBanner();
    window.scrollTo(0, 0);
  }

  function closeCalculatorPanel() {
    document.getElementById("calcPanel").classList.add("hidden");
    document.getElementById("calculatorBtn")?.classList.remove("active");
    document.getElementById("exam")?.classList.remove("calc-open");
  }

  // ---- Build question set ----
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Return a copy of the question with its answer choices shuffled and the
  // correct-answer index remapped, so the correct option isn't always "A".
  function shuffleChoices(q) {
    const order = shuffle(q.choices.map((_, i) => i));
    return {
      ...q,
      choices: order.map((i) => q.choices[i]),
      answer: order.indexOf(q.answer),
    };
  }

  // Shared by every single-module practice entry point (mixed/rw/math,
  // a Question Bank category, a Study Plan domain, or a Lessons skill):
  // takes an already-filtered pool, optionally caps it to `count`
  // questions, then shuffles/sorts/starts it. `count` of null/undefined
  // means "use the whole pool" — only the Dashboard's open-ended "mixed"
  // practice does that; every filtered entry point asks the student first
  // via openSessionSizePicker so a single bank category doesn't silently
  // start a multi-hour, whole-bank timer.
  function beginPracticeSession(fullPool, count, meta) {
    let pool = shuffle(fullPool);
    if (count && count < pool.length) pool = pool.slice(0, count);
    pool.sort((a, b) => a.difficulty - b.difficulty);
    pool = pool.map(shuffleChoices);

    state.module = meta.module;
    state.diagnosticIndex = null;
    state.domainFilter = meta.domainFilter || null;
    state.skillFilter = meta.skillFilter || null;
    state.categoryLabel = meta.categoryLabel || null;
    state.categoryDomain = meta.categoryDomain || null;
    state.reviewMode = false;
    state.questions = pool;
    state.answers = {};
    state.eliminated = {};
    state.checked = {};
    state.missReasons = {};
    state.questionStartTimes = {};
    state.questionTimes = {};
    state.marked = {};
    state.current = 0;
    state.eliminating = false;
    state.pillWindowStart = 0;
    state.secondsLeft = pool.length * SECONDS_PER_Q;
    state.timerHidden = false;

    startTimer();
    show("exam");
    renderQuestion();
    renderFooter();
    updateModuleName();
  }

  // Lets the student choose a set size instead of always starting the
  // entire filtered pool (e.g. all 351 questions in a domain, with a
  // multi-hour timer to match). Presets below the pool size plus "All".
  function openSessionSizePicker(poolLength, label, onPick) {
    const modal = document.getElementById("sessionSizeModal");
    const sub = document.getElementById("sessionSizeSub");
    const optionsEl = document.getElementById("sessionSizeOptions");
    sub.textContent = `${label ? label + " — " : ""}${poolLength} question${poolLength === 1 ? "" : "s"} available. Choose how many to practice.`;

    const presets = [10, 20, 40].filter((n) => n < poolLength);
    presets.push(poolLength);
    optionsEl.innerHTML = presets
      .map(
        (n) =>
          `<button type="button" class="session-size-btn" data-size="${n}">${n === poolLength ? `All (${n})` : n}</button>`
      )
      .join("");

    function handleClick(e) {
      const btn = e.target.closest("[data-size]");
      if (!btn) return;
      cleanup();
      onPick(Number(btn.dataset.size));
    }
    function cleanup() {
      modal.classList.add("hidden");
      optionsEl.removeEventListener("click", handleClick);
    }
    optionsEl.addEventListener("click", handleClick);
    document.getElementById("sessionSizeCancel").onclick = cleanup;
    modal.classList.remove("hidden");
  }

  function startModule(module, domain) {
    if (domain) {
      const pool = QUESTIONS.filter((q) => q.module === module && q.domain === domain);
      if (!pool.length) return;
      openSessionSizePicker(pool.length, domain, (count) => {
        beginPracticeSession(pool, count, { module, domainFilter: domain });
      });
      return;
    }
    const pool = module === "mixed" ? QUESTIONS : QUESTIONS.filter((q) => q.module === module);
    beginPracticeSession(pool, null, { module });
  }

  // ---- Question Bank: practice a single category on its own ----
  function startBankCategory(mod, domain, label) {
    let pool = QUESTIONS.filter((q) => q.module === mod && q.domain === domain);
    if (state.bankDifficulty.size) {
      pool = pool.filter((q) => state.bankDifficulty.has(q.difficulty));
    }
    if (!pool.length) return; // filters excluded every question — nothing to start

    openSessionSizePicker(pool.length, label || domain, (count) => {
      beginPracticeSession(pool, count, { module: mod, categoryLabel: label || domain, categoryDomain: domain });
    });
  }

  // ---- Lessons: practice just the questions matching one specific skill ----
  function startSkillPractice(mod, domain, skill) {
    const pool = QUESTIONS.filter((q) => q.module === mod && q.domain === domain && q.skill === skill);
    if (!pool.length) return;

    openSessionSizePicker(pool.length, skill, (count) => {
      beginPracticeSession(pool, count, { module: mod, categoryLabel: skill, categoryDomain: domain, skillFilter: skill });
    });
  }

  // Counts questions in a domain by difficulty, ignoring the active filter —
  // used for the always-visible tier bar on each bank card.
  function bankDomainCounts(mod, domain) {
    const qs = QUESTIONS.filter((q) => q.module === mod && q.domain === domain);
    return {
      easy: qs.filter((q) => q.difficulty === 1).length,
      med: qs.filter((q) => q.difficulty === 2).length,
      hard: qs.filter((q) => q.difficulty === 3).length,
      total: qs.length,
    };
  }

  // Same count, but respecting the current difficulty filter — this is the
  // number of questions a click on the card would actually start.
  function bankFilteredCount(mod, domain) {
    let qs = QUESTIONS.filter((q) => q.module === mod && q.domain === domain);
    if (state.bankDifficulty.size) qs = qs.filter((q) => state.bankDifficulty.has(q.difficulty));
    return qs.length;
  }

  function renderBank() {
    const tab = state.bankTab;
    const cats = BANK_CATEGORIES[tab];

    const tabsHTML = `
      <div class="bank-tabs">
        <button class="bank-tab ${tab === "math" ? "active" : ""}" data-bank-tab="math">
          ${ICON_CALCULATOR} Math
        </button>
        <button class="bank-tab ${tab === "rw" ? "active" : ""}" data-bank-tab="rw">
          ${ICON_BOOK} Reading &amp; Writing
        </button>
      </div>`;

    const cardsHTML = cats
      .map((c) => {
        const { easy, med, hard, total } = bankDomainCounts(tab, c.key);
        const shown = bankFilteredCount(tab, c.key);
        const empty = shown === 0;
        const pct = (n) => (total ? (n / total) * 100 : 0);
        return `
          <div class="bank-card ${empty ? "disabled" : ""}" ${empty ? "" : `data-bank-cat="${tab}::${c.key}" data-bank-label="${c.label}"`}>
            <div class="bank-card-main">
              <div class="bank-card-title">${c.label}</div>
              <div class="bank-card-sub">${shown} question${shown === 1 ? "" : "s"} ready to practice</div>
              <div class="tier-bar">
                <span class="tier-seg foundational" style="width:${pct(easy)}%"></span>
                <span class="tier-seg core" style="width:${pct(med)}%"></span>
                <span class="tier-seg challenge" style="width:${pct(hard)}%"></span>
              </div>
              <div class="tier-legend">
                <span><i class="tier-dot foundational"></i>${easy} Easy</span>
                <span><i class="tier-dot core"></i>${med} Medium</span>
                <span><i class="tier-dot challenge"></i>${hard} Hard</span>
              </div>
            </div>
            ${empty ? `<span class="bank-soon">No questions yet</span>` : `<span class="bank-cta">Practice →</span>`}
          </div>`;
      })
      .join("");

    const diffChip = (val, label) => `
      <button class="filter-chip ${state.bankDifficulty.has(val) ? "active" : ""}" data-bank-diff="${val}">${label}</button>`;

    document.getElementById("bank").innerHTML = `
      <span class="eyebrow">Practice, your way</span>
      <h1 class="section-title">Question Bank</h1>
      <p class="section-sub">Pick a topic, dial in the difficulty, and drill just that.</p>
      ${tabsHTML}
      <div class="bank-layout">
        <div class="bank-list">${cardsHTML}</div>
        <aside class="bank-filters">
          <span class="eyebrow">Fine-tune</span>
          <div class="filter-label">Difficulty</div>
          <div class="filter-chips">
            ${diffChip(1, "Easy")}
            ${diffChip(2, "Medium")}
            ${diffChip(3, "Hard")}
          </div>
          <p class="filter-hint">Leave all unselected to include every difficulty.</p>
        </aside>
      </div>
    `;

    document.querySelectorAll("[data-bank-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.bankTab = btn.dataset.bankTab;
        renderBank();
      });
    });
    document.querySelectorAll("[data-bank-diff]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const v = Number(btn.dataset.bankDiff);
        if (state.bankDifficulty.has(v)) state.bankDifficulty.delete(v);
        else state.bankDifficulty.add(v);
        renderBank();
      });
    });
    document.querySelectorAll("[data-bank-cat]").forEach((card) => {
      card.addEventListener("click", () => {
        const [mod, domain] = card.dataset.bankCat.split("::");
        startBankCategory(mod, domain, card.dataset.bankLabel);
      });
    });
  }

  // ---- Full-Length Practice Test (free): all four real-SAT modules, with a mid-test break ----
  function loadLastDiagnosticIndex() {
    try {
      const raw = localStorage.getItem(DIAG_INDEX_KEY);
      return raw !== null ? parseInt(raw, 10) : -1;
    } catch (e) {
      return -1;
    }
  }

  function saveLastDiagnosticIndex(i) {
    try {
      localStorage.setItem(DIAG_INDEX_KEY, String(i));
    } catch (e) { /* localStorage unavailable */ }
  }

  // Starts the next Full-Length Practice Test in rotation: RW Module 1, RW Module 2,
  // a real break, then Math Module 1, Math Module 2 — each module its own
  // timed session, exactly like the real digital SAT. Free, no upgrade needed.
  function startDiagnostic() {
    const nextIndex = (loadLastDiagnosticIndex() + 1) % PRACTICE_SAT.length;
    saveLastDiagnosticIndex(nextIndex);

    const set = PRACTICE_SAT[nextIndex];
    state.fdModules = DIAG_MODULE_KEYS.map((key) =>
      set.modules[key]
        .map((id) => QUESTIONS.find((q) => q.id === id))
        .filter(Boolean)
        .map(shuffleChoices)
    );
    state.fdResults = [];
    state.fdTier = {};
    state.diagnosticIndex = nextIndex;
    state.diagKind = "practice";
    state.module = "diagnostic";
    state.domainFilter = null;
    state.reviewMode = false;
    state.categoryLabel = null;
    state.categoryDomain = null;
    state.timerHidden = false;

    loadDiagModule(0);
  }

  // ---- Full Scale Test (ScoreBoost Pro): 100 RW + 100 Math, adaptive ----
  // Domain mix, tier weights, and FULL_SCALE_MODULE_SIZE live in diagnostics.js.

  // Picks `count` questions for one domain at the given difficulty tier,
  // excluding ids already used elsewhere in this attempt. Falls back to
  // any remaining difficulty within the domain, then to whatever's left in
  // the domain, so a thin difficulty bucket never comes up short.
  function pickDomainQuestions(subjectModule, domain, count, tier, usedIds) {
    const candidates = QUESTIONS.filter(
      (q) => q.module === subjectModule && q.domain === domain && !usedIds.has(q.id)
    );
    const buckets = { 1: [], 2: [], 3: [] };
    candidates.forEach((q) => {
      if (buckets[q.difficulty]) buckets[q.difficulty].push(q);
    });
    [1, 2, 3].forEach((d) => {
      buckets[d] = shuffle(buckets[d]);
    });

    const weights = FULL_SCALE_TIER_WEIGHTS[tier];
    const w1 = Math.round(count * weights[1]);
    const w2 = Math.round(count * weights[2]);
    const wanted = { 1: w1, 2: w2, 3: count - w1 - w2 };

    const picked = [];
    [1, 2, 3].forEach((d) => {
      picked.push(...buckets[d].splice(0, wanted[d]));
    });
    if (picked.length < count) {
      const leftover = shuffle([].concat(buckets[1], buckets[2], buckets[3]));
      picked.push(...leftover.slice(0, count - picked.length));
    }
    return picked.slice(0, count);
  }

  // Builds one 50-question Full Scale Test module: a College-Board-like
  // domain mix within the given subject, sampled at the requested
  // difficulty tier, never repeating a question already used earlier in
  // this attempt (usedIds is shared and mutated across the whole test).
  function buildAdaptiveModule(subjectModule, tier, usedIds, totalCount) {
    const mix = FULL_SCALE_DOMAIN_MIX[subjectModule];
    let questions = [];
    mix.forEach(([domain, count]) => {
      questions = questions.concat(pickDomainQuestions(subjectModule, domain, count, tier, usedIds));
    });
    // Top up from the whole subject pool if any domain came up short.
    if (questions.length < totalCount) {
      const have = new Set(questions.map((q) => q.id));
      const rest = shuffle(
        QUESTIONS.filter((q) => q.module === subjectModule && !usedIds.has(q.id) && !have.has(q.id))
      );
      questions = questions.concat(rest.slice(0, totalCount - questions.length));
    }
    questions = shuffle(questions).slice(0, totalCount);
    questions.forEach((q) => usedIds.add(q.id));
    return questions.map(shuffleChoices);
  }

  // Shows a locked-card upsell in place of the exam, mirroring the Pro
  // lesson lock pattern — the Full Scale Test never starts for a
  // non-Premium account.
  function showFullScaleTestPaywall() {
    const user = window.Auth && window.Auth.getCurrentUser();
    const el = document.getElementById("break");
    el.innerHTML = `
      <div class="break-content">
        <span class="eyebrow">ScoreBoost Pro</span>
        <h2>The Full Scale Test is part of ScoreBoost Pro</h2>
        <p>200 questions across two full, adaptive sections — 100 Reading &amp; Writing and 100 Math. Module 2 of each section gets harder or easier based on how you did on Module 1, just like the real adaptive digital SAT, but with a deeper question set and a sharper score estimate.</p>
        <div class="break-actions">
          ${
            user
              ? `<button class="btn btn-primary" data-action="upgrade-premium-fst">Upgrade to Premium →</button>`
              : `<button class="btn btn-primary" data-action="open-auth">Log in to upgrade →</button>`
          }
          <button class="btn btn-ghost" id="breakHomeBtn">Exit to Home</button>
        </div>
        ${user ? `<p class="lessons-paywall-note">Demo upgrade — no payment required. Real billing is coming soon.</p>` : ""}
      </div>`;
    document.getElementById("breakHomeBtn").addEventListener("click", goHome);
    show("break");
  }

  // Starts a Full Scale Test attempt: Module 1 of each subject is built
  // immediately (medium difficulty spread); Module 2 of each subject is
  // built adaptively, right after its Module 1 is scored, in finishDiagModule().
  function startFullDiagnostic() {
    const premium = !!(window.Auth && window.Auth.isPremium());
    if (!premium) {
      showFullScaleTestPaywall();
      return;
    }

    state.fdUsedIds = new Set();
    state.fdTier = {};
    const rw1 = buildAdaptiveModule("rw", "medium", state.fdUsedIds, FULL_SCALE_MODULE_SIZE);
    const math1 = buildAdaptiveModule("math", "medium", state.fdUsedIds, FULL_SCALE_MODULE_SIZE);
    state.fdModules = [rw1, null, math1, null];
    state.fdResults = [];
    state.diagnosticIndex = null;
    state.fullDiagnosticIndex = null;
    state.diagKind = "full-scale";
    state.module = "full-diagnostic";
    state.domainFilter = null;
    state.reviewMode = false;
    state.categoryLabel = null;
    state.categoryDomain = null;
    state.timerHidden = false;

    loadDiagModule(0);
  }

  function diagModuleDurations() {
    return state.diagKind === "full-scale" ? FULL_SCALE_MODULE_DURATIONS : PRACTICE_SAT_MODULE_DURATIONS;
  }

  function diagModuleLabels() {
    return state.diagKind === "full-scale" ? FULL_SCALE_MODULE_LABELS : PRACTICE_SAT_MODULE_LABELS;
  }

  // Loads one module of the active diagnostic (Full-Length Practice Test or Full
  // Scale Test) as its own timed session.
  function loadDiagModule(moduleIndex) {
    state.fdModuleIndex = moduleIndex;
    state.questions = state.fdModules[moduleIndex];
    state.answers = {};
    state.eliminated = {};
    state.checked = {};
    state.missReasons = {};
    state.questionStartTimes = {};
    state.questionTimes = {};
    state.marked = {};
    state.current = 0;
    state.eliminating = false;
    state.pillWindowStart = 0;
    state.secondsLeft = diagModuleDurations()[moduleIndex];

    startTimer();
    show("exam");
    renderQuestion();
    renderFooter();
    updateModuleName();
  }

  // Records the module just finished, adaptively builds the next module's
  // content for the Full Scale Test (Module 2 of a subject is routed
  // harder/easier based on Module 1's accuracy), then either moves to a
  // quick module-to-module checkpoint, the real break, or final scoring.
  function finishDiagModule() {
    clearInterval(state.timer);
    state.questions.forEach((q, i) => {
      state.fdResults.push({ q, selected: state.answers[i], reason: state.missReasons[i], timeSec: state.questionTimes[i] });
    });

    const idx = state.fdModuleIndex;

    if (state.diagKind === "full-scale" && (idx === 0 || idx === 2)) {
      const justFinished = state.fdModules[idx];
      const correct = justFinished.reduce((n, q, i) => n + (state.answers[i] === q.answer ? 1 : 0), 0);
      const pct = justFinished.length ? correct / justFinished.length : 0;
      const tier = pct >= 0.6 ? "harder" : "easier";
      const subject = idx === 0 ? "rw" : "math";
      state.fdTier[subject] = tier;
      state.fdModules[idx + 1] = buildAdaptiveModule(subject, tier, state.fdUsedIds, FULL_SCALE_MODULE_SIZE);
    }

    if (idx === DIAG_MODULE_KEYS.length - 1) {
      finishFullDiagnostic();
    } else {
      showModuleTransition(idx + 1);
    }
  }

  // Shows the interstitial between modules: a real 10-minute break between
  // the RW and Math sections, or a brief no-timer checkpoint between the
  // two modules of the same section.
  function showModuleTransition(nextModuleIndex) {
    const isBreak = nextModuleIndex === 2; // finished RW2, heading into Math1
    const nextLabel = diagModuleLabels()[nextModuleIndex];
    const el = document.getElementById("break");

    el.innerHTML = isBreak
      ? `
        <div class="break-content">
          <span class="eyebrow">Section break</span>
          <h2>Nice work finishing Reading &amp; Writing.</h2>
          <p>Take a short break before moving on to the Math section. It'll continue automatically when the timer runs out, or you can continue whenever you're ready.</p>
          <div class="break-timer" id="breakTimer">10:00</div>
          <div class="break-actions">
            <button class="btn btn-primary" id="continueBreakBtn">Continue to ${nextLabel} →</button>
            <button class="btn btn-ghost" id="breakHomeBtn">Exit to Home</button>
          </div>
        </div>`
      : `
        <div class="break-content">
          <span class="eyebrow">Module complete</span>
          <h2>You've finished this module.</h2>
          <p>Once you continue, you won't be able to return to questions in this module — just like the real test.</p>
          <div class="break-actions">
            <button class="btn btn-primary" id="continueBreakBtn">Continue to ${nextLabel} →</button>
            <button class="btn btn-ghost" id="breakHomeBtn">Exit to Home</button>
          </div>
        </div>`;

    document.getElementById("continueBreakBtn").addEventListener("click", () => {
      clearInterval(state.breakTimer);
      loadDiagModule(nextModuleIndex);
    });
    document.getElementById("breakHomeBtn").addEventListener("click", goHome);

    show("break");

    if (isBreak) {
      state.breakSecondsLeft = BREAK_SECONDS;
      renderBreakTimer();
      clearInterval(state.breakTimer);
      state.breakTimer = setInterval(() => {
        state.breakSecondsLeft--;
        renderBreakTimer();
        if (state.breakSecondsLeft <= 0) {
          clearInterval(state.breakTimer);
          loadDiagModule(nextModuleIndex);
        }
      }, 1000);
    }
  }

  function renderBreakTimer() {
    const el = document.getElementById("breakTimer");
    if (!el) return;
    const m = Math.floor(state.breakSecondsLeft / 60);
    const s = state.breakSecondsLeft % 60;
    el.textContent = `${m}:${String(s).padStart(2, "0")}`;
  }

  // Maps a subject's accuracy to a section score. For the Full Scale Test,
  // this also folds in which way Module 2 was adaptively routed — reaching
  // the harder Module 2 nudges the score up, being routed to the easier one
  // nudges it down — the same way the real adaptive SAT's routing affects
  // your score ceiling/floor, not just raw accuracy.
  function scoreSectionForDiag(subject, pct) {
    if (state.diagKind !== "full-scale") return toSectionScore(pct);
    const tier = state.fdTier && state.fdTier[subject];
    const bonus = tier === "harder" ? 0.05 : tier === "easier" ? -0.05 : 0;
    return toSectionScore(Math.min(1, Math.max(0, pct + bonus)));
  }

  // Scores the full attempt from every module's recorded answers, then
  // rebuilds a flat question/answer view (all 4 modules, in order) purely
  // so the results screen's review-and-jump-back feature works across the
  // whole test.
  function finishFullDiagnostic() {
    const items = state.fdResults;
    const total = items.length;
    let correct = 0;
    let rwTotal = 0, rwCorrect = 0, mathTotal = 0, mathCorrect = 0;
    items.forEach(({ q, selected }) => {
      const ok = selected === q.answer;
      if (ok) correct++;
      if (q.module === "rw") {
        rwTotal++;
        if (ok) rwCorrect++;
      } else {
        mathTotal++;
        if (ok) mathCorrect++;
      }
    });
    const pct = total ? correct / total : 0;
    const rwScore = scoreSectionForDiag("rw", rwTotal ? rwCorrect / rwTotal : 0);
    const mathScore = scoreSectionForDiag("math", mathTotal ? mathCorrect / mathTotal : 0);
    const overall = rwScore + mathScore;

    state.questions = items.map(({ q }) => q);
    state.answers = {};
    state.checked = {};
    items.forEach(({ selected }, i) => {
      if (selected !== undefined) state.answers[i] = selected;
    });
    state.current = 0;
    state.pillWindowStart = 0;
    state.reviewMode = true;

    showScoringTransition(() => {
      recordSessionProgress(items);
      renderResults({ total, correct, wrong: total - correct, pct, overall, rwScore, mathScore });
      saveStats(correct, total);
      show("results");
    });
  }

  // Brief in-context "scoring" transition shown between finishing an attempt
  // and seeing results — a slim progress bar inside the same card-style
  // interface used for module breaks, not a full-page loading screen, so it
  // reads as "your results are already here, just settling in" rather than
  // a stall.
  const SCORING_STEPS = ["Grading your answers…", "Calculating section scores…", "Finding your focus areas…"];
  const SCORING_STEP_MS = 380;

  function showScoringTransition(onDone) {
    const el = document.getElementById("break");
    el.innerHTML = `
      <div class="break-content scoring-content">
        <span class="eyebrow">Scoring</span>
        <h2 id="scoringStatus">${SCORING_STEPS[0]}</h2>
        <div class="scoring-bar-track"><div class="scoring-bar-fill" id="scoringBarFill"></div></div>
      </div>`;
    show("break");

    const fill = document.getElementById("scoringBarFill");
    requestAnimationFrame(() => requestAnimationFrame(() => { fill.style.width = "100%"; }));
    SCORING_STEPS.forEach((text, i) => {
      if (i === 0) return;
      setTimeout(() => {
        const status = document.getElementById("scoringStatus");
        if (status) status.textContent = text;
      }, SCORING_STEP_MS * i);
    });
    setTimeout(onDone, SCORING_STEP_MS * SCORING_STEPS.length);
  }

  function moduleLabel(m) {
    if (m === "rw") return "Reading & Writing";
    if (m === "math") return "Math";
    if (m === "diagnostic") {
      if (state.reviewMode) {
        return state.diagnosticIndex !== null ? PRACTICE_SAT[state.diagnosticIndex].label : "Full-Length Practice Test";
      }
      const key = DIAG_MODULE_KEYS[state.fdModuleIndex] || "";
      return key.startsWith("math") ? "Math" : "Reading & Writing";
    }
    if (m === "full-diagnostic") {
      if (state.reviewMode) return "Full Scale Test";
      const key = DIAG_MODULE_KEYS[state.fdModuleIndex] || "";
      return key.startsWith("math") ? "Math" : "Reading & Writing";
    }
    return "Full Practice";
  }

  function updateModuleName() {
    const label = state.categoryLabel
      ? state.categoryLabel
      : state.domainFilter
      ? `${moduleLabel(state.module)} — ${state.domainFilter}`
      : moduleLabel(state.module);
    document.getElementById("moduleName").innerHTML =
      `${label} <span>· ${state.questions.length} questions</span>`;
  }

  // ---- Timer ----
  function startTimer() {
    clearInterval(state.timer);
    state.timeWarningShown = false;
    document.getElementById("timeWarningToast").classList.remove("show");
    state.timer = setInterval(() => {
      state.secondsLeft--;
      renderTimer();
      if (state.secondsLeft <= 0) {
        clearInterval(state.timer);
        finishExam();
      }
    }, 1000);
    renderTimer();
  }

  function renderTimer() {
    const h = Math.floor(state.secondsLeft / 3600);
    const m = Math.floor((state.secondsLeft % 3600) / 60);
    const s = state.secondsLeft % 60;
    const el = document.getElementById("timer");
    const text = h > 0
      ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      : `${m}:${String(s).padStart(2, "0")}`;

    const urgent = state.secondsLeft <= TIME_WARNING_SECONDS;
    const concealed = state.timerHidden && !urgent;
    el.textContent = concealed ? "⏱" : text;
    el.classList.toggle("low", urgent);
    el.classList.toggle("timer-concealed", concealed);

    const hideBtn = document.getElementById("timerHideBtn");
    hideBtn.disabled = urgent;
    hideBtn.textContent = concealed ? "Show" : "Hide";
    hideBtn.title = urgent ? "Timer shown automatically inside 5 minutes" : (concealed ? "Show timer" : "Hide timer");

    if (urgent && !state.timeWarningShown) {
      state.timeWarningShown = true;
      showTimeWarningToast();
    }
  }

  function showTimeWarningToast() {
    const toast = document.getElementById("timeWarningToast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 5000);
  }

  // ---- Render current question ----
  function renderQuestion() {
    const i = state.current;
    const q = state.questions[i];
    const body = document.getElementById("examBody");

    // Pacing: stamp the first moment this question is seen unanswered, so
    // selectChoice() can derive how long it took once it's picked.
    if (state.answers[i] === undefined && !state.questionStartTimes[i]) {
      state.questionStartTimes[i] = Date.now();
    }

    const passageHTML = q.passage
      ? `<div class="passage">${q.passage}</div>`
      : "";

    const selected = state.answers[i];
    const elimSet = state.eliminated[i] || new Set();
    const answered = selected !== undefined;
    const checked = !!state.checked[i];

    const letters = ["A", "B", "C", "D"];
    const choicesHTML = q.choices
      .map((c, ci) => {
        const classes = ["choice"];
        if (elimSet.has(ci)) classes.push("eliminated");
        if (checked) {
          if (ci === q.answer) classes.push("correct");
          else if (ci === selected) classes.push("incorrect");
        } else if (ci === selected) {
          classes.push("selected");
        }
        return `
          <div class="choice-row">
            <button class="${classes.join(" ")}" data-choice="${ci}" aria-label="Choice ${letters[ci]}: ${escapeHtml(c)}">
              <span class="letter">${letters[ci]}</span>
              <span class="ctext">${formatMathText(c)}</span>
            </button>
            <button class="choice-cross" data-cross="${ci}" title="Cross out" aria-label="Cross out choice ${letters[ci]}">✕</button>
          </div>`;
      })
      .join("");

    const checkButtonHTML = !checked
      ? `<button class="btn btn-primary check-answer-btn" id="checkAnswerBtn" ${answered ? "" : "disabled"}>Check Answer</button>`
      : "";

    let explanationHTML = "";
    if (checked) {
      const correct = selected === q.answer;
      const tag = correct
        ? "✓ Correct"
        : `✕ Incorrect — Correct answer: ${letters[q.answer]}`;
      const reasonHTML = correct || state.reviewMode
        ? ""
        : `
        <div class="miss-reason">
          <span class="miss-reason-label">Why did you miss this?</span>
          <div class="miss-reason-chips">
            ${Object.entries(MISTAKE_REASONS)
              .map(
                ([key, label]) =>
                  `<button type="button" class="chip-reason ${state.missReasons[i] === key ? "active" : ""}" data-reason="${key}">${label}</button>`
              )
              .join("")}
          </div>
        </div>`;
      explanationHTML = `
        <div class="explanation ${correct ? "" : "wrong"}">
          <span class="tag">${tag}</span>
          ${formatMathText(q.explanation)}
          ${reasonHTML}
        </div>`;
    }

    body.innerHTML = `
      <div class="q-meta">
        <span class="q-num">${i + 1}</span>
        <span class="q-skill">${q.skill} · ${["Easy", "Medium", "Hard"][q.difficulty - 1]}</span>
        <button class="mark-flag ${state.marked[i] ? "marked" : ""}" id="markBtn">
          ${state.marked[i] ? "★" : "☆"} Mark for Review
        </button>
      </div>
      ${passageHTML}
      <div class="prompt">${formatMathText(q.prompt)}</div>
      <div class="choices ${state.eliminating ? "eliminating" : ""}" id="choices">
        ${choicesHTML}
      </div>
      ${checkButtonHTML}
      ${explanationHTML}
    `;

    // wire choices
    body.querySelectorAll(".choice").forEach((btn) => {
      const ci = Number(btn.dataset.choice);
      btn.addEventListener("click", () => {
        if (elimSet.has(ci)) return; // can't select eliminated
        if (checked) return; // locked after checking
        selectChoice(ci);
      });
    });
    body.querySelectorAll(".chip-reason").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.missReasons[i] = btn.dataset.reason;
        renderQuestion();
      });
    });
    body.querySelectorAll(".choice-cross").forEach((x) => {
      x.addEventListener("click", () => {
        toggleEliminate(Number(x.dataset.cross));
      });
    });
    document.getElementById("markBtn").addEventListener("click", toggleMark);
    document.getElementById("checkAnswerBtn")?.addEventListener("click", checkAnswer);

    document.getElementById("calculatorBtn").classList.toggle("hidden", q.module !== "math");

    // nav buttons
    document.getElementById("prevBtn").disabled = i === 0;
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.textContent = i === state.questions.length - 1 ? "Finish ▸" : "Next ▸";
  }

  function selectChoice(ci) {
    const i = state.current;
    const firstAnswer = state.answers[i] === undefined;
    state.answers[i] = ci;
    if (firstAnswer && state.questionStartTimes[i]) {
      state.questionTimes[i] = Math.round((Date.now() - state.questionStartTimes[i]) / 1000);
    }
    renderQuestion();
    renderFooter();
    if (firstAnswer) {
      recordQuestionAnswered();
      recordCorrectStreak(ci === state.questions[i].answer);
    }
  }

  function checkAnswer() {
    const i = state.current;
    if (state.answers[i] === undefined || state.checked[i]) return;
    state.checked[i] = true;
    renderQuestion();
    renderFooter();
  }

  function toggleEliminate(ci) {
    const i = state.current;
    if (!state.eliminated[i]) state.eliminated[i] = new Set();
    const set = state.eliminated[i];
    if (set.has(ci)) set.delete(ci);
    else {
      set.add(ci);
      if (state.answers[i] === ci) delete state.answers[i]; // unselect if eliminated
    }
    renderQuestion();
    renderFooter();
  }

  function toggleMark() {
    state.marked[state.current] = !state.marked[state.current];
    renderQuestion();
    renderFooter();
  }

  // ---- Footer progress ----
  function renderFooter() {
    const total = state.questions.length;
    const start = state.pillWindowStart;
    const end = Math.min(start + PILL_WINDOW, total);

    const pills = document.getElementById("progressPills");
    pills.innerHTML = state.questions
      .slice(start, end)
      .map((_, offset) => {
        const i = start + offset;
        const classes = ["pill"];
        const answered = state.answers[i] !== undefined;
        const checked = !!state.checked[i];
        const correct = checked && state.answers[i] === state.questions[i].answer;

        if (i === state.current) classes.push("current");
        else if (checked) classes.push(correct ? "correct" : "wrong");
        else if (answered) classes.push("answered");
        if (state.marked[i]) classes.push("marked");
        return `<button class="${classes.join(" ")}" data-goto="${i}">${i + 1}</button>`;
      })
      .join("");
    pills.querySelectorAll(".pill").forEach((p) => {
      p.addEventListener("click", () => {
        state.current = Number(p.dataset.goto);
        ensureCurrentVisible();
        renderQuestion();
        renderFooter();
      });
    });

    document.getElementById("pillJumpBack").disabled = start === 0;
    document.getElementById("pillStepBack").disabled = start === 0;
    document.getElementById("pillStepFwd").disabled = end >= total;
    document.getElementById("pillJumpFwd").disabled = end >= total;
    document.getElementById("pillGotoInput").max = String(total);
  }

  // Pans the pill window without changing the current question.
  function shiftPillWindow(delta) {
    state.pillWindowStart = clampWindowStart(state.pillWindowStart + delta);
    renderFooter();
  }

  // Jumps directly to a 1-indexed question number typed by the user.
  function goToQuestionNumber(n) {
    if (!Number.isInteger(n) || n < 1 || n > state.questions.length) return;
    state.current = n - 1;
    ensureCurrentVisible();
    renderQuestion();
    renderFooter();
  }

  // ---- Navigation ----
  function next() {
    // Once viewing a finished attempt's full review list, Next just pages
    // through it — no module transitions or re-scoring.
    if (state.reviewMode) {
      if (state.current < state.questions.length - 1) {
        state.current++;
        ensureCurrentVisible();
        renderQuestion();
        renderFooter();
      }
      return;
    }
    // The Full-Length Practice Test and Full Scale Test run one module at a time;
    // finishing the last question of a module hands off to the next module
    // (or scores the whole attempt after Math Module 2), rather than ending
    // the exam here.
    if (
      (state.module === "diagnostic" || state.module === "full-diagnostic") &&
      state.current === state.questions.length - 1
    ) {
      finishDiagModule();
      return;
    }
    if (state.current === state.questions.length - 1) {
      finishExam();
      return;
    }
    state.current++;
    ensureCurrentVisible();
    renderQuestion();
    renderFooter();
  }
  function prev() {
    if (state.current === 0) return;
    state.current--;
    ensureCurrentVisible();
    renderQuestion();
    renderFooter();
  }

  // ---- Finish + score ----
  // Maps an accuracy fraction to a single SAT section band (200-800).
  function toSectionScore(p) {
    return Math.round((200 + p * 600) / 10) * 10;
  }

  // Used by every single-module practice session (rw/math/mixed/mistake
  // review/question-bank category). The Full-Length Practice Test and Full Scale
  // Test never reach this — they score across all 4 modules in
  // finishFullDiagnostic() instead.
  function finishExam() {
    clearInterval(state.timer);
    clearSavedSession();
    const total = state.questions.length;
    let correct = 0;
    state.questions.forEach((q, i) => {
      if (state.answers[i] === q.answer) correct++;
    });
    const pct = total ? correct / total : 0;

    const overall =
      state.module === "mixed" || state.module === "mistakeReview"
        ? toSectionScore(pct) * 2 // rough two-section estimate
        : toSectionScore(pct); // single section

    showScoringTransition(() => {
      recordSessionProgress(state.questions.map((q, i) => ({ q, selected: state.answers[i], reason: state.missReasons[i], timeSec: state.questionTimes[i] })));
      if (state.module === "mistakeReview") {
        const reviewed = state.questions.filter((q, i) => state.answers[i] !== undefined).length;
        bumpMistakesReviewedToday(reviewed);
      }

      renderResults({ total, correct, wrong: total - correct, pct, overall });
      saveStats(correct, total);
      recordLifetimeAnswers();
      show("results");
    });
  }

  // Official College Board digital SAT domain taxonomy, in display order —
  // matches the `domain` field used throughout js/questions/*.js.
  const CATEGORY_ORDER = [
    "Information and Ideas",
    "Craft and Structure",
    "Standard English Conventions",
    "Expression of Ideas",
    "Algebra",
    "Advanced Math",
    "Problem-Solving and Data Analysis",
    "Geometry and Trigonometry",
  ];

  // Groups the just-completed attempt's questions by domain (category) so
  // results can show what a student did well vs. poorly on, not just an
  // overall score.
  function computeCategoryBreakdown() {
    const byDomain = {};
    state.questions.forEach((q, i) => {
      if (!byDomain[q.domain]) {
        byDomain[q.domain] = { domain: q.domain, module: q.module, correct: 0, total: 0, missedSkills: [] };
      }
      const bucket = byDomain[q.domain];
      bucket.total++;
      if (state.answers[i] === q.answer) bucket.correct++;
      else if (!bucket.missedSkills.includes(q.skill)) bucket.missedSkills.push(q.skill);
    });
    return CATEGORY_ORDER.map((d) => byDomain[d]).filter(Boolean);
  }

  // Persists the most recent diagnostic's category breakdown so the Study
  // Plan tab can build a plan from it at any time, not just right after
  // finishing — same storage rules as everything else in progressStore().
  function saveDiagnosticSummary(cats) {
    try {
      const data = {
        timestamp: Date.now(),
        label: moduleLabel(state.module),
        categories: cats,
      };
      progressStore().setItem(progressKey(STUDY_PLAN_KEY), JSON.stringify(data));
    } catch (e) { /* storage unavailable */ }
  }

  function loadDiagnosticSummary() {
    try {
      const raw = progressStore().getItem(progressKey(STUDY_PLAN_KEY));
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function timeAgo(ts) {
    const mins = Math.round((Date.now() - ts) / 60000);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins} min ago`;
    const hours = Math.round(mins / 60);
    if (hours < 24) return `${hours} hr ago`;
    const days = Math.round(hours / 24);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  }

  // Short, actionable guidance per College Board domain — shown on the
  // Study Plan for whichever categories a student is weakest in.
  const DOMAIN_TIPS = {
    "Information and Ideas":
      "Summarize each passage's central claim in one sentence before looking at the choices, and trace command-of-evidence questions back to the exact line that supports (or contradicts) the claim.",
    "Craft and Structure":
      "For words-in-context, cover the choices and predict your own word first. For structure/purpose questions, outline what each paragraph is doing before you answer.",
    "Standard English Conventions":
      "Review the core rules for boundaries (commas, semicolons, colons, periods) and subject-verb / pronoun agreement — these are pattern-based and improve fast with targeted rule review.",
    "Expression of Ideas":
      "For transitions, state the logical relationship between the two sentences in your own words before picking a choice. For synthesis questions, reread exactly what the prompt is asking for.",
    "Algebra":
      "Rebuild fluency with linear equations, systems of equations, and inequalities — practice translating word problems into equations before solving.",
    "Advanced Math":
      "Focus on factoring and quadratics, exponent rules, and function notation — practice recognizing which method (factoring, completing the square, quadratic formula) fits a given problem.",
    "Problem-Solving and Data Analysis":
      "Work on ratios, percentages, and reading data from tables and graphs — practice setting up a proportion or equation before solving.",
    "Geometry and Trigonometry":
      "Review core formulas (area, volume, the Pythagorean theorem, basic trig ratios) and practice labeling diagrams before solving.",
  };

  // Builds the Study Plan screen from the most recently saved diagnostic
  // breakdown: weakest categories first, each with a fraction, the specific
  // skills missed, and a one-tap link into focused practice on that domain.
  // Finds the Lesson topic a Study Plan card should link to for a given
  // domain — the specific skill the student missed when it has a lesson,
  // otherwise that domain's first available lesson.
  function findLessonTopic(domain, preferredSkill) {
    const group = LESSONS.find((g) => g.domain === domain);
    if (!group || !group.lessons.length) return null;
    const premium = !!(window.Auth && window.Auth.isPremium());
    const accessible = (l) => l.tier === "free" || premium;
    if (preferredSkill) {
      const matches = group.lessons.filter((l) => l.skill === preferredSkill);
      const best = matches.find(accessible) || matches[0];
      if (best) return { domain, index: group.lessons.indexOf(best) };
    }
    const freeIdx = group.lessons.findIndex((l) => l.tier === "free");
    return { domain, index: freeIdx >= 0 ? freeIdx : 0 };
  }

  // How long until a redo-queue question is due again, in plain English —
  // used by the Study Plan's "all caught up" state.
  function formatDueIn(ms) {
    if (ms <= 0) return "now";
    const days = Math.round(ms / DAY_MS);
    if (days <= 0) return "later today";
    if (days === 1) return "tomorrow";
    return `in ${days} days`;
  }

  // The redo-queue status card: what's due right now, or when the next
  // review opens up if everything's caught up. Omitted entirely once the
  // queue is empty (nothing's ever been missed, or it's all been mastered).
  function redoQueueCardHTML() {
    const bank = loadMistakeBank();
    if (!bank.length) return "";
    const due = dueMistakes();
    const body = due.length
      ? `
        <p>${due.length} question${due.length === 1 ? "" : "s"} ready to redo — spaced out from your past mistakes so they stick.</p>
        <button type="button" class="btn btn-primary btn-small" data-start="mistakeReview">Start redo queue →</button>`
      : `<p>All caught up — ${bank.length} question${bank.length === 1 ? "" : "s"} on the queue, next one due ${formatDueIn(
          Math.min(...bank.map((m) => m.dueAt || 0)) - Date.now()
        )}.</p>`;
    return `<div class="plan-section redo-queue-card"><h3>Redo queue</h3>${body}</div>`;
  }

  // "Why you're missing points" — a breakdown of tagged miss reasons
  // (see MISTAKE_REASONS), lifetime, regardless of whether those
  // questions have since been mastered off the redo queue. Omitted until
  // there's at least one tagged mistake to show a pattern from.
  function missReasonInsightHTML() {
    const tally = loadMistakeReasonTally();
    const reasonEntries = Object.keys(MISTAKE_REASONS)
      .map((key) => ({ key, label: MISTAKE_REASONS[key], count: tally[key] || 0 }))
      .filter((r) => r.count > 0)
      .sort((a, b) => b.count - a.count);
    const taggedSum = reasonEntries.reduce((n, r) => n + r.count, 0);
    if (!taggedSum) return "";
    const rows = reasonEntries
      .map((r) => {
        const pct = Math.round((r.count / taggedSum) * 100);
        return `
          <div class="reason-row">
            <div class="reason-row-top"><span>${r.label}</span><span>${pct}%</span></div>
            <div class="reason-bar"><div class="reason-bar-fill" style="width:${pct}%"></div></div>
          </div>`;
      })
      .join("");
    return `
      <div class="plan-section">
        <h3>Why you're missing points</h3>
        <p class="plan-section-blurb">Based on ${taggedSum} tagged mistake${taggedSum === 1 ? "" : "s"}.</p>
        ${rows}
      </div>`;
  }

  // Turns a test date + a daily time budget into a short, concrete list of
  // what to do today — not a fake score-to-question-count formula (that's
  // not something we can honestly compute), just the redo queue plus a
  // sized block of the weakest domain, sized from the minutes available.
  function dailyPlanCardHTML() {
    const testDate = loadTestDate();
    const minutesPerDay = loadMinutesPerDay();

    if (!testDate || dailyPlanEditing) {
      return `
        <div class="plan-section daily-plan-card">
          <h3>${testDate ? "Update your plan" : "Build a daily plan"}</h3>
          <p class="plan-section-blurb">Tell us your test date and how much time you've got, and we'll turn it into a daily target.</p>
          <form class="daily-plan-form" id="dailyPlanForm">
            <label>Test date<input type="date" id="dailyPlanDate" required min="${todayStr()}" value="${testDate || ""}" /></label>
            <label>Minutes per day<input type="number" id="dailyPlanMinutes" min="10" max="240" step="5" value="${minutesPerDay}" /></label>
            <button type="submit" class="btn btn-primary btn-small">${testDate ? "Save" : "Build my plan →"}</button>
          </form>
        </div>`;
    }

    const days = daysUntilTestDate();
    const daysLabel =
      days === null
        ? ""
        : days < 0
        ? "Your test date has passed — set a new one below."
        : days === 0
        ? "Test day is today — good luck!"
        : `${days} day${days === 1 ? "" : "s"} until your test`;
    const weakest = weakestDomains(1)[0];
    const questionsPerDay = Math.max(5, Math.round((minutesPerDay * 60) / SECONDS_PER_Q));
    const due = dueMistakes().length;
    const goal = loadGoal();

    const items = [];
    if (due) {
      items.push(
        `<li>${due} question${due === 1 ? "" : "s"} on your redo queue <button type="button" class="btn btn-ghost btn-small" data-start="mistakeReview">Go →</button></li>`
      );
    }
    items.push(
      weakest
        ? `<li>${questionsPerDay} questions in ${weakest.domain}, your lowest-scoring area <button type="button" class="btn btn-ghost btn-small" data-domain-practice="${weakest.domain}" data-domain-module="${weakest.module}">Go →</button></li>`
        : `<li>${questionsPerDay} questions of mixed practice <button type="button" class="btn btn-ghost btn-small" data-start="mixed">Go →</button></li>`
    );

    return `
      <div class="plan-section daily-plan-card">
        <div class="daily-plan-top">
          <div>
            <h3>Today's plan</h3>
            <p class="plan-section-blurb">${daysLabel}${daysLabel ? " · " : ""}aiming for ${goal} · about ${minutesPerDay} min today</p>
          </div>
          <button type="button" class="daily-plan-edit" data-action="edit-daily-plan" title="Change test date or time budget">✎</button>
        </div>
        <ul class="daily-plan-list">${items.join("")}</ul>
      </div>`;
  }

  function renderStudyPlan() {
    const data = loadDiagnosticSummary();
    const el = document.getElementById("studyPlan");
    const premium = !!(window.Auth && window.Auth.isPremium());
    const planHTML = dailyPlanCardHTML();
    const queueHTML = redoQueueCardHTML();
    const reasonHTML = missReasonInsightHTML();

    if (!data || !data.categories || !data.categories.length) {
      el.innerHTML = `
        <div class="study-empty">
          <span class="eyebrow">Study Plan</span>
          <h2>Take a diagnostic to build your plan</h2>
          <p>Your study plan is generated from your diagnostic results — finish one to see exactly which categories to focus on first.</p>
          <div class="diag-choice-grid">
            <div class="diag-choice-card">
              <div class="diag-choice-title">Full-Length Practice Test</div>
              <p class="diag-choice-meta">4 modules · 98 questions · ~2h 15m · free</p>
              <button class="btn btn-primary" data-start="diagnostic">Start Full-Length Test →</button>
            </div>
            <div class="diag-choice-card">
              <div class="diag-choice-title">Full Scale Test</div>
              <p class="diag-choice-meta">4 modules · 200 questions · ~4h · adaptive Module 2${premium ? "" : " · Pro"}</p>
              <button class="btn btn-ghost" data-start="full-diagnostic">Start Full Scale Test${premium ? "" : " (Pro)"} →</button>
            </div>
          </div>
        </div>
        ${planHTML}
        ${queueHTML}
        ${reasonHTML}`;
      return;
    }

    const cats = data.categories.map((c) => ({ ...c, pct: c.total ? c.correct / c.total : 0 }));
    const sorted = cats.slice().sort((a, b) => a.pct - b.pct);
    const tierOf = (pct) => (pct < 0.75 ? "weak" : pct < 0.9 ? "mid" : "strong");

    const card = (c) => {
      const tier = tierOf(c.pct);
      const tip = DOMAIN_TIPS[c.domain] || "";
      const skillsHTML =
        c.missedSkills && c.missedSkills.length
          ? `<div class="plan-skills">Missed: ${c.missedSkills.join(", ")}</div>`
          : "";
      const lesson = findLessonTopic(c.domain, c.missedSkills && c.missedSkills[0]);
      const learnBtn = lesson
        ? `<button class="btn btn-ghost btn-small" data-lesson-domain="${escapeHtml(lesson.domain)}" data-lesson-index="${lesson.index}">Learn →</button>`
        : "";
      return `
        <div class="plan-card ${tier}">
          <div class="plan-card-top">
            <div>
              <div class="plan-domain">${c.domain}</div>
              <div class="plan-frac">${c.correct}/${c.total} correct · ${Math.round(c.pct * 100)}%</div>
            </div>
            <div class="plan-card-actions">
              ${learnBtn}
              <button class="btn btn-ghost btn-small" data-domain-practice="${c.domain}" data-domain-module="${c.module}">Practice →</button>
            </div>
          </div>
          ${skillsHTML}
          <p class="plan-tip">${tip}</p>
        </div>`;
    };

    const section = (title, blurb, list) =>
      list.length
        ? `
        <div class="plan-section">
          <h3>${title}</h3>
          <p class="plan-section-blurb">${blurb}</p>
          <div class="plan-list">${list.map(card).join("")}</div>
        </div>`
        : "";

    el.innerHTML = `
      <div class="study-plan-header">
        <span class="eyebrow">Study Plan</span>
        <h2>Here's what to focus on next</h2>
        <p class="tagline">Built from your ${data.label} · ${timeAgo(data.timestamp)}</p>
      </div>

      ${planHTML}
      ${queueHTML}
      ${reasonHTML}

      ${section(
        "Priority focus",
        "Spend most of your study time here — these categories are costing you the most points.",
        sorted.filter((c) => tierOf(c.pct) === "weak")
      )}
      ${section(
        "Keep building",
        "You're partway there — a bit more targeted practice will lock these in.",
        sorted.filter((c) => tierOf(c.pct) === "mid")
      )}
      ${section(
        "Strengths — maintain",
        "Solid work. A light review keeps these sharp without eating into priority time.",
        sorted.filter((c) => tierOf(c.pct) === "strong")
      )}

      <div class="results-actions">
        <button class="btn btn-primary" data-start="diagnostic">Retake Full-Length Test →</button>
        <button class="btn btn-ghost" data-nav="lessons">Browse Lessons →</button>
        <button class="btn btn-ghost" data-home>Back to Home</button>
      </div>
    `;
  }

  // ---- Lessons ----
  // Counts how many bank questions exist for one specific skill — a lesson's
  // "Practice this skill" link is only shown when this is > 0, and every
  // lesson topic is generated from real skill values so it always is.
  function skillQuestionCount(mod, domain, skill) {
    return QUESTIONS.filter((q) => q.module === mod && q.domain === domain && q.skill === skill).length;
  }

  function openLesson(domain, index) {
    state.activeLesson = { domain, index };
    state.lessonChatLog = [];
    renderLessons();
  }

  // Every skill has a free foundations lesson plus two Pro deep-dive
  // sub-lessons — the tab itself is always open (no full-page paywall);
  // individual Pro lessons show a locked card with an upgrade prompt
  // instead of their content.
  // Small, high-value content the review called out specifically: what to
  // actually do the week before, how Bluebook's own controls work, a few
  // Desmos tricks, and a plan for blanking on a question — none of it
  // skill-specific, so it lives once at the bottom of Lessons rather than
  // under any one domain.
  function testDayReadinessHTML() {
    const card = (title, items) => `
      <div class="readiness-card">
        <h3>${title}</h3>
        <ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>
      </div>`;
    return `
      <div class="readiness-section">
        <span class="eyebrow">Test-day readiness</span>
        <h2>Small things that make a real difference</h2>
        <div class="readiness-grid">
          ${card("The week before", [
            "Charge your laptop or tablet the night before, and bring the charger anyway.",
            "Install the Bluebook app ahead of time and finish any setup it asks for — don't leave it for test morning.",
            "Run at least one full timed module in Bluebook itself so the real interface isn't a surprise.",
            "Confirm your test center and check-in time, and plan to arrive with time to spare.",
          ])}
          ${card("Bluebook basics", [
            '"Mark for Review" flags a question in the navigator — use it instead of stalling on one item.',
            "The strikethrough tool hides a choice without changing your answer, so crossing out is reversible.",
            "The timer can be hidden, but a 5-minute warning still appears near the end of a module.",
            "Once you submit a module you can't go back to it, even if time remains — review before you submit.",
          ])}
          ${card("Desmos tricks", [
            "Type an equation straight in — y = 2x + 3 — and it graphs immediately, no setup needed.",
            "For a system of equations, graph both lines and read off the intersection instead of solving by hand.",
            'A slider (drag a number in your typed equation) is fast for "find the value that makes this true" questions.',
            "Use it to check your algebra, not to replace reading the question carefully in the first place.",
          ])}
          ${card("When you blank", [
            "Mark it and move on — a fresh question resets your focus, and you can return with time left.",
            "Eliminate anything clearly wrong even without knowing the right answer; a narrowed guess beats a blind one.",
            "Reread the question itself, not just the passage — the actual ask is sometimes narrower than it first seems.",
            "Never leave a question blank at the end — there's no penalty for a wrong guess.",
          ])}
        </div>
      </div>`;
  }

  function renderLessons() {
    const user = window.Auth && window.Auth.getCurrentUser();
    const premium = !!(window.Auth && window.Auth.isPremium());
    const el = document.getElementById("lessons");

    if (state.activeLesson) {
      renderLessonDetail(state.activeLesson.domain, state.activeLesson.index);
      return;
    }

    const beginnerHTML = `
      <div class="beginner-banner">
        <div class="beginner-banner-text">
          <div class="beginner-banner-title">New to the SAT? Start with the basics.</div>
          <div class="beginner-banner-sub">Every skill below has a free foundations lesson — core algebra, grammar rules, and reading strategy, no prior SAT experience assumed.</div>
        </div>
        <button type="button" class="btn btn-ghost btn-sm lessons-free-toggle" data-lessons-free-toggle>Show foundations only</button>
      </div>`;

    const upsellHTML = premium
      ? ""
      : `
        <div class="lessons-upsell-banner">
          ${ICON_GRADCAP}
          <div class="lessons-upsell-text">
            <div class="lessons-upsell-title">Every skill includes a free foundations lesson</div>
            <div class="lessons-upsell-sub">Premium unlocks the deep-dive sub-lessons — advanced strategies, edge cases, and harder examples for every skill.</div>
          </div>
          ${
            user
              ? `<button class="btn btn-primary btn-sm" data-action="upgrade-premium">Upgrade →</button>`
              : `<button class="btn btn-primary btn-sm" data-action="open-auth">Log in →</button>`
          }
        </div>`;

    const freeOnly = state.lessonsFreeOnly;

    const domainGroup = (group) => {
      const lessons = freeOnly ? group.lessons.filter((l) => l.tier === "free") : group.lessons;
      if (!lessons.length) return "";
      const chips = lessons
        .map((l) => {
          const i = group.lessons.indexOf(l);
          const locked = l.tier === "pro" && !premium;
          const tagHTML =
            l.tier === "free"
              ? `<span class="lesson-chip-tag free">Free</span>`
              : `<span class="lesson-chip-tag pro ${locked ? "locked" : ""}">${locked ? ICON_LOCK_SM : ""}Pro</span>`;
          return `<button class="lesson-chip ${locked ? "locked" : "ready"}" data-lesson-domain="${escapeHtml(group.domain)}" data-lesson-index="${i}">
            <span>${escapeHtml(l.title)}</span>
            <span class="lesson-chip-right">${tagHTML}${locked ? "" : `<span class="lesson-chip-cta">Open lesson →</span>`}</span>
          </button>`;
        })
        .join("");
      return `
        <div class="lesson-domain-group">
          <h3>${group.domain}</h3>
          <div class="lesson-chip-list">${chips}</div>
        </div>`;
    };

    const groups = LESSONS.filter((g) => g.module === state.lessonsTab);

    el.innerHTML = `
      <span class="eyebrow">Lessons</span>
      <h1 class="section-title">Learn every topic on the digital SAT</h1>
      <p class="section-sub">Pick a lesson to read it, then jump straight into matching practice questions.</p>

      ${beginnerHTML}
      ${upsellHTML}

      <div class="lessons-toolbar">
        <div class="bank-tabs">
          <button class="bank-tab ${state.lessonsTab === "rw" ? "active" : ""}" data-lessons-tab="rw">
            ${ICON_BOOK} Reading &amp; Writing
          </button>
          <button class="bank-tab ${state.lessonsTab === "math" ? "active" : ""}" data-lessons-tab="math">
            ${ICON_CALCULATOR} Math
          </button>
        </div>
        <button class="btn btn-ghost btn-sm lessons-free-toggle ${freeOnly ? "active" : ""}" data-lessons-free-toggle>
          ${freeOnly ? "Show all lessons" : "Show all free lessons"}
        </button>
      </div>

      <div class="lessons-domains">${groups.map(domainGroup).join("")}</div>

      ${testDayReadinessHTML()}
    `;

    document.querySelectorAll("[data-lessons-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.lessonsTab = btn.dataset.lessonsTab;
        renderLessons();
      });
    });

    document.querySelectorAll("[data-lessons-free-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.lessonsFreeOnly = !state.lessonsFreeOnly;
        renderLessons();
      });
    });
  }

  function renderLessonDetail(domain, index) {
    const group = LESSONS.find((g) => g.domain === domain);
    const lesson = group && group.lessons[index];
    const el = document.getElementById("lessons");
    if (!group || !lesson) {
      state.activeLesson = null;
      renderLessons();
      return;
    }

    const premium = !!(window.Auth && window.Auth.isPremium());
    const user = window.Auth && window.Auth.getCurrentUser();
    const locked = lesson.tier === "pro" && !premium;
    const skill = lesson.skill;
    const count = skillQuestionCount(group.module, domain, skill);

    if (locked) {
      el.innerHTML = `
        <button class="lesson-back" data-lesson-back>← Back to Lessons</button>
        <span class="eyebrow">${domain}</span>
        <h1 class="section-title">${escapeHtml(lesson.title)}</h1>
        <div class="lesson-locked-card">
          ${ICON_GRADCAP}
          <h2>This lesson is part of ScoreBoost Pro</h2>
          <p>Unlock this deep-dive sub-lesson plus every other Pro lesson — advanced strategies, edge cases, and harder practice beyond the free foundations lesson for this skill.</p>
          ${
            user
              ? `<button class="btn btn-primary" data-action="upgrade-premium">Upgrade to Premium →</button>
                 <p class="lessons-paywall-note">Demo upgrade — no payment required. Real billing is coming soon.</p>`
              : `<button class="btn btn-primary" data-action="open-auth">Log in to upgrade →</button>`
          }
        </div>
      `;
      return;
    }

    const practiceBtnHTML = count
      ? `<button class="btn btn-primary" data-practice-skill="${escapeHtml(skill)}" data-practice-domain="${escapeHtml(domain)}" data-practice-module="${group.module}">Practice this skill (${count}) →</button>`
      : "";

    const c = lesson.content;
    const conceptsHTML = c.concepts.map((x) => `<li>${x}</li>`).join("");
    const mistakesHTML = c.mistakes.map((x) => `<li>${x}</li>`).join("");
    const letters = ["A", "B", "C", "D"];
    const choicesHTML = c.example.choices
      .map(
        (choice, i) =>
          `<li class="${i === c.example.correctIndex ? "correct" : ""}">
            <span class="ex-letter">${letters[i]}</span>${choice}${i === c.example.correctIndex ? " ✓" : ""}
          </li>`
      )
      .join("");
    const deepDiveHTML =
      c.deepDive && c.deepDive.length
        ? `<h3>Going deeper</h3>
           <div class="lesson-deepdive">${c.deepDive.map((p) => `<p>${p}</p>`).join("")}</div>`
        : "";
    const bodyHTML = `
      <p class="lesson-summary">${c.summary}</p>

      <h3>Key concepts</h3>
      <ul class="lesson-list">${conceptsHTML}</ul>

      ${deepDiveHTML}

      <h3>Worked example</h3>
      <div class="lesson-example">
        <p class="ex-prompt">${c.example.prompt.replace(/\n/g, "<br>")}</p>
        <ul class="ex-choices">${choicesHTML}</ul>
        <p class="ex-walkthrough">${c.example.walkthrough}</p>
      </div>

      <h3>Common mistakes</h3>
      <ul class="lesson-list">${mistakesHTML}</ul>
    `;

    el.innerHTML = `
      <button class="lesson-back" data-lesson-back>← Back to Lessons</button>
      <span class="eyebrow">${domain}${lesson.tier === "pro" ? ` · <span class="lesson-pro-tag">Pro</span>` : ""}</span>
      <h1 class="section-title">${escapeHtml(lesson.title)}</h1>
      ${bodyHTML}
      <div class="results-actions lesson-actions">${practiceBtnHTML}</div>
      ${lessonChatHTML()}
    `;

    const chatLog = document.getElementById("lessonChatLog");
    if (chatLog) chatLog.scrollTop = chatLog.scrollHeight;
  }

  // ---- Lessons: AI Tutor (UI only for now — no model is wired up yet, so
  // every reply is a canned placeholder rather than a real API call) ----
  function lessonChatHTML() {
    const bubbles = state.lessonChatLog
      .map(
        (m) =>
          `<div class="chat-bubble ${m.from}">${m.from === "bot" ? ICON_CHAT : ""}<span>${escapeHtml(m.text)}</span></div>`
      )
      .join("");
    return `
      <div class="lesson-chat">
        <div class="lesson-chat-header">${ICON_CHAT} AI Tutor <span class="lesson-chat-beta">Preview</span></div>
        <div class="lesson-chat-log" id="lessonChatLog">
          ${bubbles || `<div class="chat-bubble bot">${ICON_CHAT}<span>Ask me anything about this topic — I'm still in early preview, so I can't reason about your exact question yet, but I'll point you to the right part of the lesson.</span></div>`}
        </div>
        <form class="lesson-chat-form" id="lessonChatForm">
          <input type="text" id="lessonChatInput" placeholder="Ask about this topic…" autocomplete="off" />
          <button type="submit" class="btn btn-primary btn-sm">Send</button>
        </form>
      </div>`;
  }

  function sendLessonChatMessage(text) {
    text = text.trim();
    if (!text || !state.activeLesson) return;
    state.lessonChatLog.push({ from: "user", text });
    renderLessons();
    setTimeout(() => {
      state.lessonChatLog.push({
        from: "bot",
        text: `The AI Tutor isn't fully set up yet, so I can't answer that directly — for now, check the Key Concepts and Common Mistakes above for "${state.activeLesson.skill}," or try a practice question and read its explanation.`,
      });
      renderLessons();
    }, 500);
  }

  // ---- Games ----
  const GAME_BLITZ_SECONDS = 60;
  const GAME_BEST_KEY = "sat_game_best"; // {mathBlitz, vocabRush, wordMatchMoves}

  // A small curated SAT-vocabulary list for the Word Match memory game —
  // standalone word/definition pairs, distinct from the question bank.
  const VOCAB_WORDS = [
    { word: "Ambiguous", def: "Open to more than one interpretation" },
    { word: "Candid", def: "Direct and honest, even if blunt" },
    { word: "Diligent", def: "Showing careful, persistent effort" },
    { word: "Eloquent", def: "Fluent and persuasive in speech or writing" },
    { word: "Frugal", def: "Careful with money; not wasteful" },
    { word: "Gregarious", def: "Fond of company; sociable" },
    { word: "Impartial", def: "Treating all sides equally; unbiased" },
    { word: "Meticulous", def: "Showing great attention to detail" },
    { word: "Novel", def: "New and original; not seen before" },
    { word: "Pragmatic", def: "Dealing with things sensibly and realistically" },
    { word: "Skeptical", def: "Not easily convinced; having doubts" },
    { word: "Tenacious", def: "Persistent; not easily giving up" },
  ];

  function loadGameBest() {
    try {
      const raw = progressStore().getItem(progressKey(GAME_BEST_KEY));
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveGameBest(key, value, higherIsBetter) {
    try {
      const best = loadGameBest();
      const current = best[key];
      const better = current === undefined || (higherIsBetter ? value > current : value < current);
      if (better) {
        best[key] = value;
        progressStore().setItem(progressKey(GAME_BEST_KEY), JSON.stringify(best));
      }
      return better;
    } catch (e) {
      return false;
    }
  }

  // Stops any running game timer — called whenever navigation leaves the
  // Games screen (or switches between games) so intervals never leak.
  function stopActiveGame() {
    if (state.gameTimer) clearInterval(state.gameTimer);
    state.gameTimer = null;
    state.game = null;
  }

  function renderGamesHub() {
    const best = loadGameBest();
    const rpg = loadRpgState();
    const rpgStats = rpgComputedStats(rpg);
    const idle = loadIdleState();
    const idleRate = idleTotalRate(idle);
    const idleGenCount = IDLE_GENERATORS.filter((g) => (idle.owned[g.key] || 0) > 0).length;
    const el = document.getElementById("games");
    const card = (id, icon, title, blurb, bestLabel) => `
      <div class="game-card" data-game-start="${id}">
        <div class="game-card-icon">${icon}</div>
        <h3>${title}</h3>
        <p>${blurb}</p>
        <div class="game-card-foot">
          <span class="game-card-best">${bestLabel}</span>
          <span class="game-card-play">Play →</span>
        </div>
      </div>`;

    const zonesCleared = RPG_ZONES.filter((z) => (rpg.cleared[z.key] || 0) >= rpgZoneFloorCount(z)).length;

    el.innerHTML = `
      <span class="eyebrow">Games</span>
      <h1 class="section-title">Take a break, keep sharpening</h1>
      <p class="section-sub">Quick, replayable games built from real SAT content — good for a five-minute study break.</p>

      <div class="rpg-feature-card" data-game-start="dungeon-quest">
        <div class="rpg-feature-icon">${ICON_SWORD}</div>
        <div class="rpg-feature-body">
          <span class="rpg-feature-tag">Flagship RPG</span>
          <h3>Dungeon Quest</h3>
          <p>Battle your way through 8 dungeons — one per SAT skill domain — by answering practice questions to land hits. Level up, earn gold, and gear up between fights.</p>
          <div class="rpg-feature-stats">
            <span class="game-stat">${ICON_GRADCAP} Lv. ${rpg.level}</span>
            <span class="game-stat">${rpgStats.maxHp} HP</span>
            <span class="game-stat">${ICON_COIN} ${rpg.gold} gold</span>
            <span class="game-stat">${zonesCleared}/${RPG_ZONES.length} dungeons cleared</span>
          </div>
        </div>
        <span class="rpg-feature-play">Enter →</span>
      </div>

      <div class="rpg-feature-card idle-feature-card" data-game-start="study-tycoon">
        <div class="rpg-feature-icon idle-feature-icon">${ICON_COIN}</div>
        <div class="rpg-feature-body">
          <span class="rpg-feature-tag">Idle game</span>
          <h3>Study Tycoon</h3>
          <p>Answer SAT-format practice questions to earn Brainpower, then spend it on tutors, workbooks, and study halls that keep producing even after you close the tab.</p>
          <div class="rpg-feature-stats">
            <span class="game-stat">${ICON_COIN} ${formatIdleNumber(idle.bp)} BP</span>
            <span class="game-stat">${formatIdleNumber(idleRate)} BP/sec</span>
            <span class="game-stat">${idleGenCount}/${IDLE_GENERATORS.length} generators</span>
          </div>
        </div>
        <span class="rpg-feature-play">Enter →</span>
      </div>

      <div class="game-grid">
        ${card(
          "math-blitz",
          ICON_CALCULATOR,
          "Math Blitz",
          "Answer as many math questions as you can before the clock runs out. Chain correct answers for a combo bonus.",
          best.mathBlitz ? `Best: ${best.mathBlitz} pts` : "No best score yet"
        )}
        ${card(
          "vocab-rush",
          ICON_BOOK,
          "Vocab Rush",
          "A 60-second sprint through Words-in-Context blanks. Same combo scoring, all vocabulary.",
          best.vocabRush ? `Best: ${best.vocabRush} pts` : "No best score yet"
        )}
        ${card(
          "word-match",
          ICON_GRADCAP,
          "Word Match",
          "A memory game pairing SAT vocabulary words with their definitions. Fewer moves is better.",
          best.wordMatchMoves ? `Best: ${best.wordMatchMoves} moves` : "No best score yet"
        )}
      </div>
    `;
  }

  // ---- Games: Math Blitz / Vocab Rush (shared timed multiple-choice engine) ----
  function startBlitzGame(kind) {
    const filter =
      kind === "math-blitz"
        ? (q) => q.module === "math"
        : (q) => q.module === "rw" && q.skill === "Words in Context";
    let pool = shuffle(QUESTIONS.filter(filter)).map(shuffleChoices);
    if (!pool.length) return;

    state.game = kind;
    state.gamePool = pool;
    state.gameQIndex = 0;
    state.gameScore = 0;
    state.gameCombo = 0;
    state.gameBestCombo = 0;
    state.gameCorrect = 0;
    state.gameTotal = 0;
    state.gameLocked = false;
    state.gameTimeLeft = GAME_BLITZ_SECONDS;

    renderBlitzQuestion();
    clearInterval(state.gameTimer);
    state.gameTimer = setInterval(() => {
      state.gameTimeLeft--;
      const timeEl = document.getElementById("gameTimeLeft");
      if (timeEl) {
        timeEl.textContent = state.gameTimeLeft;
        timeEl.classList.toggle("low", state.gameTimeLeft <= 10);
      }
      if (state.gameTimeLeft <= 0) endBlitzGame();
    }, 1000);
  }

  function blitzTitle(kind) {
    return kind === "math-blitz" ? "Math Blitz" : "Vocab Rush";
  }

  function renderBlitzQuestion() {
    const el = document.getElementById("games");
    if (state.gameQIndex >= state.gamePool.length) {
      state.gamePool = shuffle(state.gamePool).map(shuffleChoices);
      state.gameQIndex = 0;
    }
    const q = state.gamePool[state.gameQIndex];
    const letters = ["A", "B", "C", "D"];
    const choicesHTML = q.choices
      .map(
        (c, ci) =>
          `<div class="choice-row">
            <button class="choice" data-game-choice="${ci}">
              <span class="letter">${letters[ci]}</span>
              <span class="ctext">${c}</span>
            </button>
          </div>`
      )
      .join("");

    el.innerHTML = `
      <div class="game-hud">
        <button class="game-quit" data-game-quit>← Quit</button>
        <div class="game-hud-stats">
          <span class="game-stat">${ICON_FLAME} <span id="gameCombo">${state.gameCombo}</span> combo</span>
          <span class="game-stat">${state.gameScore} pts</span>
          <span class="game-stat game-timer" id="gameTimeLeft">${state.gameTimeLeft}</span>
        </div>
      </div>
      <div class="game-title">${blitzTitle(state.game)}</div>
      ${q.passage ? `<div class="passage">${q.passage}</div>` : ""}
      <div class="prompt game-prompt">${q.prompt.replace(/\n/g, "<br>")}</div>
      <div class="choices" id="gameChoices">${choicesHTML}</div>
    `;
  }

  function answerBlitz(choiceIndex) {
    if (state.gameLocked || !state.game) return;
    const q = state.gamePool[state.gameQIndex];
    const ok = choiceIndex === q.answer;
    state.gameLocked = true;
    state.gameTotal++;

    const buttons = document.querySelectorAll("#gameChoices .choice");
    buttons.forEach((b) => {
      const ci = Number(b.dataset.gameChoice);
      if (ci === q.answer) b.classList.add("correct");
      else if (ci === choiceIndex) b.classList.add("incorrect");
    });

    if (ok) {
      state.gameCorrect++;
      state.gameCombo++;
      state.gameBestCombo = Math.max(state.gameBestCombo, state.gameCombo);
      state.gameScore += 10 + Math.min(state.gameCombo - 1, 5) * 5;
    } else {
      state.gameCombo = 0;
    }

    setTimeout(() => {
      if (!state.game) return; // quit or timer ended mid-flash
      state.gameQIndex++;
      state.gameLocked = false;
      renderBlitzQuestion();
    }, 500);
  }

  function endBlitzGame() {
    clearInterval(state.gameTimer);
    state.gameTimer = null;
    const kind = state.game;
    const key = kind === "math-blitz" ? "mathBlitz" : "vocabRush";
    const isBest = saveGameBest(key, state.gameScore, true);
    state.game = null;

    const el = document.getElementById("games");
    el.innerHTML = `
      <div class="game-result">
        <span class="eyebrow">${blitzTitle(kind)} — time's up</span>
        <h2>${state.gameScore} points</h2>
        ${isBest ? `<p class="game-result-best">New best score! ${ICON_FLAME}</p>` : ""}
        <div class="game-result-stats">
          <div class="bd-card"><div class="v">${state.gameCorrect}</div><div class="l">Correct</div></div>
          <div class="bd-card"><div class="v">${state.gameTotal - state.gameCorrect}</div><div class="l">Missed</div></div>
          <div class="bd-card"><div class="v">${state.gameBestCombo}</div><div class="l">Best combo</div></div>
        </div>
        <div class="results-actions">
          <button class="btn btn-primary" data-game-start="${kind}">Play again →</button>
          <button class="btn btn-ghost" data-nav="games">Back to Games</button>
        </div>
      </div>
    `;
  }

  // ---- Games: Word Match (memory game) ----
  function startWordMatch() {
    state.game = "word-match";
    const pairs = shuffle(VOCAB_WORDS).slice(0, 8);
    const cards = [];
    pairs.forEach((p, i) => {
      cards.push({ pairId: i, kind: "word", text: p.word, flipped: false, matched: false });
      cards.push({ pairId: i, kind: "def", text: p.def, flipped: false, matched: false });
    });
    state.memoryCards = shuffle(cards);
    state.memoryFirstIndex = null;
    state.memoryMoves = 0;
    state.memoryBusy = false;
    renderWordMatch();
  }

  function renderWordMatch() {
    const el = document.getElementById("games");
    const matchedCount = state.memoryCards.filter((c) => c.matched).length;
    const won = matchedCount === state.memoryCards.length;

    const cardsHTML = state.memoryCards
      .map((c, i) => {
        const classes = ["memory-card"];
        if (c.flipped || c.matched) classes.push("flipped");
        if (c.matched) classes.push("matched");
        return `
          <button class="${classes.join(" ")}" data-memory-card="${i}" ${c.matched ? "disabled" : ""}>
            <span class="memory-card-face memory-card-back">?</span>
            <span class="memory-card-face memory-card-front ${c.kind}">${c.text}</span>
          </button>`;
      })
      .join("");

    const moveLabel = `${state.memoryMoves} move${state.memoryMoves === 1 ? "" : "s"}`;
    const wonBanner = won
      ? `<div class="game-result-best game-result-inline">You matched every pair in ${moveLabel}! ${ICON_FLAME}</div>`
      : "";

    el.innerHTML = `
      <div class="game-hud">
        <button class="game-quit" data-game-quit>← Quit</button>
        <div class="game-hud-stats">
          <span class="game-stat">${moveLabel}</span>
          <span class="game-stat">${matchedCount / 2}/${state.memoryCards.length / 2} pairs</span>
        </div>
      </div>
      <div class="game-title">Word Match</div>
      ${wonBanner}
      <div class="memory-grid">${cardsHTML}</div>
      <div class="results-actions">
        <button class="btn btn-ghost" data-game-start="word-match">New game</button>
      </div>
    `;

    if (won) saveGameBest("wordMatchMoves", state.memoryMoves, false);
  }

  function flipMemoryCard(index) {
    if (state.memoryBusy) return;
    const card = state.memoryCards[index];
    if (!card || card.flipped || card.matched) return;

    card.flipped = true;

    if (state.memoryFirstIndex === null) {
      state.memoryFirstIndex = index;
      renderWordMatch();
      return;
    }

    state.memoryMoves++;
    const first = state.memoryCards[state.memoryFirstIndex];
    if (first.pairId === card.pairId && first.kind !== card.kind) {
      first.matched = true;
      card.matched = true;
      state.memoryFirstIndex = null;
      renderWordMatch();
    } else {
      state.memoryBusy = true;
      renderWordMatch();
      setTimeout(() => {
        first.flipped = false;
        card.flipped = false;
        state.memoryFirstIndex = null;
        state.memoryBusy = false;
        renderWordMatch();
      }, 700);
    }
  }

  // ---- Games: Dungeon Quest (RPG) ----
  // A persistent turn-based RPG: 8 dungeons, one per SAT skill domain.
  // Answering a question correctly attacks the monster; missing lets it
  // attack back. Clearing a dungeon's boss unlocks the next one. Gold
  // earned in battle buys permanent weapon/armor upgrades in the Shop.
  const RPG_BASE_MAX_HP = 50;
  const RPG_BASE_ATK = 8;
  const RPG_WEAPON_NAMES = ["Practice Pencil", "Sharpened No. 2", "Graphite Blade", "Mechanical Edge", "Steel Stylus", "Golden Quill", "Ascended Pen"];
  const RPG_ARMOR_NAMES = ["Hoodie", "Letter Jacket", "Lab Coat", "Honor Robe", "Scholar's Mail", "Valedictorian Plate", "Ascended Cap"];
  const RPG_MAX_TIER = RPG_WEAPON_NAMES.length - 1;

  const RPG_ZONES = [
    { key: "Algebra", module: "math", name: "Linear Woods", blurb: "A tangled forest where every path is an equation.",
      enemies: ["Variable Wisp", "Coefficient Crawler", "Slope Serpent", "Inequality Imp", "Equation Ent"], boss: "The Balance Keeper" },
    { key: "Advanced Math", module: "math", name: "Quadratic Caverns", blurb: "Twisting tunnels shaped like parabolas.",
      enemies: ["Exponent Bat", "Radical Rat", "Polynomial Golem", "Function Phantom", "Root Reaper"], boss: "The Nonlinear Dragon" },
    { key: "Problem-Solving and Data Analysis", module: "math", name: "Data Marsh", blurb: "A foggy swamp of scatterplots and percentages.",
      enemies: ["Ratio Leech", "Percent Piranha", "Outlier Ooze", "Sample Sprite", "Mean Mudcrawler"], boss: "The Statistics Siren" },
    { key: "Geometry and Trigonometry", module: "math", name: "Geometry Peaks", blurb: "Jagged summits built from triangles and circles.",
      enemies: ["Angle Gargoyle", "Circle Golem", "Tangent Harpy", "Vertex Vulture", "Hypotenuse Hydra"], boss: "The Pythagorean Titan" },
    { key: "Information and Ideas", module: "rw", name: "Reading Ruins", blurb: "Crumbling halls of half-buried arguments.",
      enemies: ["Inference Wraith", "Evidence Eel", "Claim Crawler", "Detail Demon", "Summary Specter"], boss: "The Central Idea Colossus" },
    { key: "Craft and Structure", module: "rw", name: "Vocabulary Vale", blurb: "A shifting valley where every word has a double meaning.",
      enemies: ["Synonym Sprite", "Context Ghoul", "Tone Troll", "Nuance Nymph", "Diction Djinn"], boss: "The Lexicon Leviathan" },
    { key: "Standard English Conventions", module: "rw", name: "Grammar Gorge", blurb: "A canyon littered with stray commas and dangling clauses.",
      enemies: ["Comma Kobold", "Fragment Fiend", "Apostrophe Asp", "Modifier Mite", "Punctuation Phantom"], boss: "The Syntax Sovereign" },
    { key: "Expression of Ideas", module: "rw", name: "Rhetoric Reach", blurb: "A windswept bluff of transitions and topic sentences.",
      enemies: ["Transition Troll", "Redundancy Rat", "Tone Shifter", "Structure Siren", "Clarity Cultist"], boss: "The Rhetoric Warden" },
  ];

  // Per-dungeon accent color, used to tint that zone's boss icon/glow so each
  // of the 8 bosses reads as visually distinct at a glance.
  const RPG_ZONE_ACCENT = {
    "Algebra": "#6366f1",
    "Advanced Math": "#dc2626",
    "Problem-Solving and Data Analysis": "#0891b2",
    "Geometry and Trigonometry": "#d97706",
    "Information and Ideas": "#78716c",
    "Craft and Structure": "#9333ea",
    "Standard English Conventions": "#ca8a04",
    "Expression of Ideas": "#e11d48",
  };

  // Boss/monster artwork credit: icons by Lorc, Delapouite & Cathelineau,
  // via game-icons.net (CC BY 3.0) — see the site footer for attribution.
  function rpgArtIcon(d) {
    return `<svg class="boss-icon-svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="${d}"/></svg>`;
  }

  // One illustrated portrait per boss (keyed by zone key), so every
  // dungeon's final fight has a distinct, recognizable monster.
  const RPG_BOSS_ICONS = {
    "Algebra": rpgArtIcon("M254.47 53.094s-4.808 37.12-49.5 49.5c-44.695 12.38-129.282 0-129.282 0L61.343 115.78l8.187 9.157-1.093 2.876-51.843 137.312L16 266.72v1.717c0 18.897 8.253 34.243 20.344 44 12.09 9.758 27.563 14.31 42.937 14.313 15.376.003 30.878-4.556 42.97-14.313 12.092-9.756 20.344-25.094 20.344-44v-1.843l-.688-1.688L86.97 130.28c23.946-3.003 80.866-8.54 115.5 1.532 23.064 6.71 36.151 20.345 43.436 31.97L210.78 354.468l21.407 30.31c-17.75 7.75-32.593 24.84-37.562 51.345-56.076 6.195-95.47 20.74-95.47 37.688h311.876c0-16.947-39.392-31.493-95.467-37.688-4.91-26.6-19.57-44.112-37.188-51.906l21-29.75L264 162.28c7.457-11.275 20.388-24.045 42.47-30.468 34.955-10.167 92.615-4.42 116.155-1.437l-50.875 134.75-.625 1.594v1.717c0 18.897 8.253 34.243 20.344 44 12.09 9.758 27.593 14.31 42.967 14.313 15.375.003 30.877-4.556 42.97-14.313 12.09-9.756 20.343-25.094 20.343-44v-1.843l-.688-1.688L441 127.562l-.938-2.28 8.782-8.438-15.594-14.25s-84.556 12.38-129.25 0-49.53-49.5-49.53-49.5zM77.53 156.656l44.22 108.375H36.594L77.53 156.657zm355.158 0l44.218 108.375H391.72l40.967-108.374z"),
    "Advanced Math": rpgArtIcon("M200.947 18.686c-6.98.087-14.64.774-22.85 1.9 27.57 20.468 51.098 45.25 67.594 70.527 1.66 0 3.312.012 4.958.047 18.066.39 35.487 2.906 53.217 7.2-15.695-28.457-29.935-50.19-47.45-63.22-13.817-10.278-30.063-16.168-52.52-16.454-.967-.013-1.95-.013-2.948 0zm-91.66 22.96c-.73-.002-1.46.006-2.195.022-14.045.31-29.36 3.92-46.86 11.13 56.18 18.807 106.985 50.468 133.907 83.585 18.377-5.13 29.44-14.72 36.454-28.817C195.84 78.18 168.118 56.19 140.65 46.96c-10.168-3.418-20.433-5.306-31.363-5.315zm-.203 52.786c-39.42 6.758-74.73 31.854-87.822 74.19v322.345h212.73C100.352 442.58 61.19 206.49 187.115 230.104c5.838-14.164 9.92-28.027 11.018-41.465l18.627 1.522c-1.684 20.592-8.828 40.49-18.033 59.943-.732 2.035-1.472 4.12-2.186 6.063 32.842 85.24 113.77 160.69 169.495 168.197.915.033 1.905-.002 2.953-.09 17.016 1.035 35.86-4.222 52.21-22.304l7.984-8.83-10.473-5.658c-6.507-3.515-14.29-7.094-18.167-10.925-1.938-1.916-2.793-3.47-3.074-5.194-.282-1.725-.13-4.227 2.23-8.578l10.673-19.656-21.484 6.222c-6.304 1.825-17.305-3.032-23.224-10.71-2.96-3.84-4.408-7.907-4.387-10.843.02-2.938.72-5.125 4.747-8.05l19.453-14.125-23.884-2.72c-9.974-1.137-16.37-6.658-19.17-12.294-2.802-5.634-2.312-10.084 1.375-13.31l12.204-10.677-15.358-5.205c-6.717-2.276-10.296-7.555-10.357-10.633-.028-1.373.238-2.666 1.843-4.476 10.93-2.39 21.258-.45 28.088 6.374 6.154 6.146 8.35 15.128 6.977 24.832 8.55-2.254 16.985-1.616 24.112 2.494 9.34 5.387 14.647 15.692 15.67 27.965 15.212-10.132 32.152-12.725 45.262-5.164 15.467 8.92 21.36 29.513 16.805 51.75 23.992-33.355 34.588-75.717 5.617-120.43-46.726-4.442-81.693-30.676-93.293-67.64-5.026-16.016-21.284-28.67-42-37.904l-.08.217c-29.74-10.823-55.575-17.35-82.604-18.733l.08.155c-2.294-.093-4.56-.16-6.762-.172-9.537 22.874-28.662 39.9-57.436 46.054l-5.906 1.262-3.576-4.864c-14.216-19.33-41.23-40.452-74.002-58.074zm156.215 65.26c27.927-.073 44.874 11.617 42.09 44.45-35.844 3.39-51.933-16.683-63.074-42.632 7.507-1.155 14.538-1.8 20.983-1.817zm48.407 66.363c3.708.07 7.14.994 10.014 2.812-1.51 1.102-2.898 2.28-4.16 3.543-5.246 5.24-8.087 12.122-7.956 18.742.183 9.322 5.27 17.184 12.68 22.56-3.14 8.103-2.452 17.455 1.407 25.22 3.813 7.668 10.54 14.273 19.302 18.398-1.445 3.366-2.375 6.862-2.4 10.33-.062 8.407 3.38 16.042 8.273 22.39 6.792 8.81 16.862 15.936 28.026 17.91-.183 2.18-.204 4.333.133 6.407 1.05 6.444 4.515 11.66 8.38 15.48 3.41 3.37 7.19 5.892 10.798 7.993-6.345 4.792-12.414 7.056-18.618 7.79-6.515-7.937-9.71-19.084-9.41-31.454-11.767 6.177-24.21 7.156-34.12 1.44-14.668-8.46-19.393-29.036-13.187-50.33-11.336 2.77-22.13.92-29.187-6.132-8.875-8.865-9.535-23.626-3.094-37.95-3.676-.615-6.963-2.166-9.525-4.725-8.808-8.798-5.773-26.09 6.776-38.626 7.843-7.835 17.546-11.957 25.87-11.8z"),
    "Problem-Solving and Data Analysis": rpgArtIcon("M193.469 28.412c-17.378 4.426-17.777 17.713-24.166 28.545 15.713 3.49 31.499 5.431 47.31 6.824-19.026 2.612-37.99 5.671-57.69 3.434-3.78 2.08-8.637 3.668-15.062 4.521-38.245 5.079-85.586-7.08-85.586-7.08C73 78.528 89.938 89.776 108.242 98.553c20.597 2.879 41.542 4.01 62.596 4.605-14.231 1.502-28.446 3.14-42.775 3.756 32.652 11.983 65.808 17.573 100.643 15.921-6.721 12.789-23.731 33.608-33.272 39.397-31.955-3.837-47.598-15.35-68.774-31.885l-11.078 14.184c25.514 18.283 58.257 33.97 83.658 36.12 12.047-5.934 21.5-16.053 29.97-26.266l-.044 1.138c19.632 8.81 23.686 9.035 41.809.64 12.495 8.096 28.717 9.24 32.097-6.782 17.973 16.734 25.381 23.735 43.123 32.507 28.711-11.692 55.616-30.207 76.448-46.279l-11.014-14.234c-21.06 15.793-43.916 32.285-64.316 40.746-17.586-9.322-21.863-16.197-34.504-28.453-4.613-9.585-14.124-13.605-22.29-14.487-6.373 5.265-14.388 8.419-22.765 7.182-10.082-1.488-17.546-8.862-21.58-17.723-4.034-8.86-5.23-19.638-3.299-30.898 1.932-11.26 6.675-21.16 13.475-28.422 6.8-7.261 16.363-12.121 26.445-10.633 10.082 1.489 17.55 8.862 21.584 17.723 1.473 3.235 2.563 6.728 3.266 10.404a87.625 87.625 0 0 0 2.601-6.926c7.034-29.675-21.68-38.714-54.35-39.08-20.574.29-43.074 2.777-62.427 7.604zm187.578 7.5c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zM269.453 61.375c-3.875 4.138-7.39 10.945-8.771 18.996-1.382 8.05-.317 15.534 1.982 20.584 2.3 5.05 5.24 7.239 8.135 7.666 2.895.427 6.421-.807 10.297-4.945 3.875-4.139 7.392-10.944 8.773-18.995 1.381-8.05.317-15.535-1.982-20.585-2.3-5.05-5.24-7.237-8.135-7.665-4.243-.231-8.269 2.82-10.299 4.944zm80.23 22.79a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-79.222 91.854c-14.977 6.472-25.22 5.696-39.422.01 1.657 6.73 4.533 13.244 9.236 19.672-7.69 7.912-9.967 15.823-12.443 23.735 9.483-6.672 20.662-11.111 31.904-13.77 11.493-2.718 23.226-3.79 34.174-3.5 6.357.169 12.435.81 18.06 1.842-4.633-6.1-10.807-12.073-19.199-16.899a90.853 90.853 0 0 0 2.631-6.26c-8.403 1.84-18.083-1.48-24.941-4.83zm16.525 43.493c-19.483.122-39.377 5.801-53.25 17.898-10.861 9.47-16.423 26.89-13.629 41.027 11.581 58.596 119.687 76.114 116.93 135.78-1.093 23.664-27.954 44.51-51.144 49.345-24.584 5.126-70.604-26.283-70.604-26.283 28.785-55.458-.113-92.09-25.201-113.807-2.41 30.637-14.38 61.716-5.627 91.172-38.792-3.27-54.86 4.952-98.57-3.873 18.825 25.928 63.62 59.958 116.382 40.276 0 0 40.045 37.29 65.422 39.492 45.336 3.934 105.162-9.596 127.28-49.365 29.11-52.343-3.15-124.766-33.178-176.588-10.785-18.612-28.317-36.327-49.1-41.88-8.083-2.158-16.854-3.25-25.71-3.194zM72.008 237.058c-8.284 0-15 6.716-15 15 0 8.285 6.716 15 15 15 8.284 0 15-6.715 15-15 0-8.284-6.716-15-15-15zm-15.682 76.297a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm36.381 39.02a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"),
    "Geometry and Trigonometry": rpgArtIcon("M257.943 19.56c-48.746 0-93.137 25.71-125.85 68.436C101.82 127.54 81.96 181.56 79.167 241.744c4.252-7.944 11.468-13.637 21.397-13.637-14.08 20.83-16.54 41.658 0 62.487-9.812 0-16.714-4.63-20.91-11.365 4.14 56.884 23.546 107.807 52.44 145.547 32.713 42.728 77.104 68.44 125.85 68.44 48.747 0 93.137-25.712 125.85-68.44 28.806-37.625 48.187-88.35 52.406-145.027-4.225 6.453-11.028 10.844-20.587 10.844 16.54-20.83 14.08-41.658 0-62.487 9.685 0 16.79 5.416 21.078 13.055-2.892-59.95-22.72-113.75-52.897-153.166C351.08 45.27 306.69 19.56 257.943 19.56zm.057 80.944c69.594 0 128.227 46.16 149.412 109.76C317.6 99.23 196.635 100.256 107.318 213.05 127.71 148.043 187.42 100.503 258 100.503zm3.053 49.658c53.01 0 104.59 36.343 142.87 105.04.65 1.066.575.917.768 1.198l1.624 1.473v6.533l-2.177 3.983-.016.026c-38.297 68.92-89.963 105.374-143.06 105.373-53.096-.002-104.763-36.455-143.064-105.37l.295.494c-.437-.685-.244-.513-.444-.955l-4.475-3.972 4.605-8.418.013-.03c38.3-68.92 89.968-105.377 143.065-105.378zm0 18.69c-43.918 0-89.205 29.812-125.182 93.123 16.145 28.407 34.167 50.05 53.095 65.302-9.445-13.807-14.977-30.503-14.977-48.494 0-47.502 38.51-86.01 86.012-86.01 10.01 0 19.62 1.716 28.555 4.86-19.658 2.195-34.944 18.86-34.944 39.103 0 .963.05 1.914.117 2.86-25.64 4.19-45.354 26.554-45.354 53.336 0 29.742 24.312 54.054 54.055 54.054s54.054-24.312 54.054-54.054c0-7.705-1.643-15.04-4.578-21.688 12.173-6.693 20.424-19.635 20.424-34.508 0-1.687-.12-3.346-.326-4.978 8.846 13.517 14.008 29.664 14.008 47.025 0 19.657-6.607 37.763-17.703 52.248 20.696-15.367 40.42-38.227 57.935-69.05-35.977-63.316-81.27-93.13-125.19-93.128zm1.375 88.718c19.642 0 35.365 15.72 35.365 35.362 0 19.642-15.723 35.365-35.365 35.365-19.642 0-35.365-15.723-35.365-35.365 0-19.642 15.722-35.362 35.365-35.362zm-155.742 52.426c89.507 113.245 211.43 113.973 301.36 2.23C387.327 376.658 328.18 423.097 258 423.097c-71.007 0-131.28-47.486-151.314-113.102z"),
    "Information and Ideas": rpgArtIcon("M177.682 25.404L78.695 81.97l53.743 53.74 77.328 15.465-3.532 17.652-64.79-12.959 27.095 81.287-17.078 5.692-31.328-93.985-44.908-44.91 5.38 58.899-38.287 137.638 59.082 44.313-10.8 14.398-45.157-33.867 26.147 130.73 73.678 11.334L128.308 425H128v-.77l-8.355-20.888 16.71-6.684L140.492 407h18.766L256 390.875 352.742 407h17.479l4.953-24.766 17.652 3.532-14.375 71.873 62.096-16.936 30.086-120.344-30.283-90.847-58.668-44.002-92.202 15.367-2.96-17.754 90.654-15.11 14.287-42.859 17.078 5.692-13.95 41.847 46.405 34.803 13.285-106.293-89.097-44.549-88.104-14.683-29.027 58.054-16.102-8.05L258.5 38.873l-80.818-13.469zm236.634 221.754l3.368 17.684-35.952 6.847c4.658 3.159 8.472 7.518 10.64 13.006 3.624 9.18 1.752 19.208-3.19 27.246-4.943 8.039-12.91 14.59-22.827 18.504-9.915 3.915-20.212 4.574-29.312 2.08-6.576-1.802-12.68-5.465-16.934-10.818l-8.716 47.94-110.89-9.24-7.921-39.602c-4.267 5.846-10.686 9.819-17.625 11.72-9.1 2.494-19.397 1.835-29.312-2.08-9.916-3.915-17.884-10.465-22.827-18.504-4.942-8.038-6.814-18.067-3.19-27.248 2.042-5.17 5.54-9.344 9.833-12.45l-35.315-7.436 3.708-17.614 150.234 31.63 166.228-31.665zM151 283.553c-2.047.051-3.967.318-5.672.785-4.862 1.332-7.714 3.818-8.957 6.967-1.243 3.148-.86 6.914 1.781 11.209 2.469 4.014 6.947 8.05 12.848 10.664v-29.625zm210 .004v29.62c5.901-2.612 10.38-6.65 12.848-10.665 2.64-4.295 3.024-8.059 1.78-11.207-1.242-3.149-4.094-5.637-8.956-6.97-1.704-.466-3.626-.727-5.672-.778zm-52.633 2.107l-60.455 11.514-43.531-9.164 11.115 55.58 81.111 6.76 11.76-64.69zM169 288.762v26.674c.405-.086.817-.165 1.201-.27 4.862-1.332 7.712-3.82 8.955-6.969 1.243-3.148.861-6.912-1.78-11.207-1.795-2.92-4.677-5.84-8.376-8.228zm174 0c-3.699 2.387-6.581 5.307-8.377 8.228-2.64 4.295-3.022 8.059-1.78 11.207 1.244 3.149 4.094 5.637 8.956 6.969.384.105.796.184 1.201.27v-26.674zM147.691 425l18.23 45.574 105.558 16.24 89.095-24.3-1.4-.28L366.62 425h-13.879L256 441.125 159.258 425H147.69z"),
    "Craft and Structure": rpgArtIcon("M220 16.125l12.688 39.438-75.75-31.157 22.843 35.5-62.31-8.062 20.25 18.375C85.836 87.854 40.9 132.144 31.47 182.5c-13.072 69.79 13.156 136.212 83.56 174.344 28.93 15.672 67.963 44.2 69.626 74.625 1.576 28.818-16.452 47.193-38.437 62.25h141.5c10.595-26.14 15.644-50.77 12.81-74.5-7.014-58.812-61.562-108.4-122.56-133.126-31.615-12.813-67.4-25.374-59.595-84.125 7.474-56.25 65.42-77.176 104.78-65.126l175.064 174.47 11.217-11.283.125.158 29.75-27.032-46.812 6.094-11.344-11.344 27.188-24.656-45.938 5.97-13-12.97 27.75-25.22-46.906 6.095.25.313-13.844-13.813L341 181.562l-41.156 5.313-32.906-32.813c-9.38-17.193-4.68-25.8 5.468-28.28 3.945 12.708 14.1 23.23 27.813 26.906 14.044 3.763 28.41-.562 38.186-10.063l10.938 29.438 6.72-26.094 21.405 5.718 14.155 38.093 8.28-32.06 20.908 5.593L436.5 205.53l9.188-35.56 16 4.28 15.656 42.156 9.156-35.5.22.063 5.28-19.782-23.97-27.47-119.56-32.03c-4.09-12.39-14.137-22.582-27.595-26.188-2.65-.71-5.294-1.127-7.938-1.28-4.957-.29-9.84.372-14.437 1.843L220 16.124zm89.938 76.688c.612-.015 1.223-.008 1.843.03 1.418.09 2.85.336 4.283.72 11.452 3.068 18.1 14.578 15.03 26.03-3.067 11.45-14.61 18.1-26.062 15.032-11.452-3.07-18.098-14.58-15.03-26.03 2.517-9.394 10.746-15.563 19.938-15.782z"),
    "Standard English Conventions": rpgArtIcon("M92.406 13.02l-.164 156.353c3.064.507 6.208 1.38 9.39 2.627 36.496 14.306 74.214 22.435 111.864 25.473l43.402-60.416 42.317 58.906c36.808-4.127 72.566-12.502 105.967-24.09 3.754-1.302 7.368-2.18 10.818-2.6l1.523-156.252-75.82 95.552-34.084-95.55-53.724 103.74-53.722-103.74-35.442 95.55-72.32-95.55h-.006zm164.492 156.07l-28.636 39.86 28.634 39.86 28.637-39.86-28.635-39.86zM86.762 187.55c-2.173-.08-3.84.274-5.012.762-2.345.977-3.173 2.19-3.496 4.196-.645 4.01 2.825 14.35 23.03 21.36 41.7 14.468 84.262 23.748 126.778 26.833l-17.75-24.704c-38.773-3.285-77.69-11.775-115.5-26.596-3.197-1.253-5.877-1.77-8.05-1.85zm333.275.19c-2.156.052-5.048.512-8.728 1.79-33.582 11.65-69.487 20.215-106.523 24.646l-19.264 26.818c40.427-2.602 80.433-11.287 119.22-26.96 15.913-6.43 21.46-17.81 21.36-22.362-.052-2.276-.278-2.566-1.753-3.274-.738-.353-2.157-.71-4.313-.658zm-18.117 47.438c-42.5 15.87-86.26 23.856-130.262 25.117l-14.76 20.547-14.878-20.71c-44.985-1.745-89.98-10.23-133.905-24.306-12.78 28.51-18.94 61.14-19.603 93.44 37.52 17.497 62.135 39.817 75.556 64.63C177 417.8 179.282 443.62 174.184 467.98c7.72 5.007 16.126 9.144 24.98 12.432l5.557-47.89 18.563 2.154-5.935 51.156c9.57 2.21 19.443 3.53 29.377 3.982v-54.67h18.69v54.49c9.903-.638 19.705-2.128 29.155-4.484l-5.857-50.474 18.564-2.155 5.436 46.852c8.747-3.422 17.004-7.643 24.506-12.69-5.758-24.413-3.77-49.666 9.01-72.988 13.28-24.234 37.718-46 74.803-64.29-.62-33.526-6.687-66.122-19.113-94.23zm-266.733 47.006c34.602.23 68.407 12.236 101.358 36.867-46.604 33.147-129.794 34.372-108.29-36.755 2.315-.09 4.626-.127 6.933-.11zm242.825 0c2.307-.016 4.617.022 6.93.11 21.506 71.128-61.684 69.903-108.288 36.757 32.95-24.63 66.756-36.637 101.358-36.866zM255.164 332.14c11.77 21.725 19.193 43.452 25.367 65.178h-50.737c4.57-21.726 13.77-43.45 25.37-65.18z"),
    "Expression of Ideas": rpgArtIcon("M253.714 20.358c-8.79.075-17.448.82-25.89 2.308-46.55 8.208-89.423 26.157-121.225 52.065-31.803 25.908-52.572 59.39-56.316 100.053l-.004.04-.004.04c-8.45 83.885 39.397 152.37 65.604 181.553 5.21 5.804 7.064 13.574 6.533 20.862-.53 7.288-3.04 14.494-6.598 21.838-7.114 14.688-18.703 30.06-31.03 44.457-13.957 16.303-27.375 29.703-37.75 39.627 7.203-1.214 14.764-4.37 22.67-9.368 14.66-9.265 29.554-24.475 42.097-41.298 12.543-16.824 22.807-35.28 28.802-50.586 2.998-7.654 4.912-14.54 5.614-19.72.7-5.178-.177-8.39-.354-8.687-15.34-25.73-31.257-52.027-40.687-79.112-9.43-27.085-12.2-55.565-.073-83.35 25.223-57.79 78.02-85.085 130.772-89.605 52.61-4.508 105.963 12.396 136.545 44.71l23.292 22.474 69.254-41.47c-20.34-26.314-55.49-55.33-96.24-76.257-33.546-17.226-70.702-28.978-106.18-30.428-2.957-.12-5.902-.17-8.832-.144zM372.42 146.184l-.058-.057.31.313c-.083-.087-.17-.17-.25-.256zM244.814 118.95c-2.468.102-4.935.245-7.4.457-3.562.305-7.11.73-10.64 1.255l9.628 45.077c5.76-1.637 11.657-2.823 17.646-3.564l-9.233-43.226zm43.85 3.658c-4.866 12.845-7.33 25.916-6.978 39.04 6.034.48 12.086 1.335 18.12 2.557-.868-12.19 1.306-24.43 6.362-36.98-5.66-1.82-11.515-3.363-17.504-4.617zm-106.672 11.79c-6.112 3.028-12 6.54-17.612 10.532 17.55 8.862 29.7 22.763 34.715 39.594 4.936-3.84 10.145-7.183 15.564-10.063-6.122-16.257-17.577-30.086-32.666-40.063zm88.136 44.796c-1.156-.002-2.308.014-3.457.047-2.675.076-5.328.242-7.952.502-41.993 4.176-77.31 30.258-87.475 90.07-2.198 12.94 4.293 42.822 12.246 67.66 7.952 24.836 16.634 45.517 16.634 45.517l.504 1.198.143 1.295c1.96 17.7-9.11 34.967-21.212 52.26-8.036 11.486-16.43 22.104-23.97 31.72 24-1.35 45.963-11.985 67.177-30.947-.124-.5-.17-.71-.313-1.297-.866-3.594-1.955-8.697-1.687-14.68.446-9.983 5.674-21.958 18.818-31.868-24.577-35.02-28.898-78.757-24.06-115.027l.886-6.65 6.626-1.05c58.715-9.29 97.246-28.81 139.34-54.593-27.566-21.88-61.198-34.115-92.25-34.158zm120.197 37.84c-48.424 30.517-91.56 55.67-157.556 67.35-3.253 33.408 2.427 71.84 25.226 100.798 12.607.61 23.264 6.977 29.904 16.184 6.747 9.353 9.946 21.162 10.83 33.628 23.288 21.426 62.97 39.024 97.764 56.655-3.17-39.444-.296-76.34-14.538-114.11l-62.842-25.3-.062-.027c-14.313-6.018-23.332-13.792-26.512-24.03-3.18-10.236-.874-19.966 1.188-31.064l2.2-11.852 10.74 5.476c23.407 11.94 51.394 20.52 77.548 20.065l6.582-.116 2.103 6.238c10.593 31.436 12.912 56.612 15.752 82.203l7.787 3.113c4.126-29.38 1.912-68.686-3.862-104.425-5.463-33.817-14.72-65.03-22.252-80.788zM223.397 441.148c-.01.444.094.455.01.04-.002-.008-.01-.033-.01-.04z"),
  };

  // Shared "regular enemy" portrait (every floor that isn't the boss) and
  // the player's own portrait — same illustrated style as the bosses above.
  const RPG_ENEMY_ICON = rpgArtIcon("M373.688 22.063c-1.245-.014-2.498 0-3.75.03-31.364.748-65.528 15.414-96.938 47.313-88.264 89.642-154.092 171.18-242.938 174.03 23.65 18.21 54.87 31.21 85.25 36.783-24.375 29.26-50.877 47.65-93.437 64.842 37.915 9.124 74.452 6.5 109.813-2.343-27.29 34.35-62.118 65.85-107.47 95.78 60.376-.392 136.226-12.138 181.626-47.906-4.842 30.69-16.186 65.125-43.22 100.47 70.74-18.73 117.115-42.386 146.595-83.533 2.905 27.513-.94 45.098-11.095 80.595 78.006-66.3 150.857-164.775 182.78-270.97C513.44 108.94 452.066 22.89 373.69 22.063zM371.03 96.47c5.76 0 11.1 1.732 15.564 4.686-7.706.283-13.875 6.6-13.875 14.375 0 7.956 6.45 14.407 14.405 14.407 5.118 0 9.6-2.665 12.156-6.687.028.503.033 1.022.033 1.53 0 15.633-12.648 28.314-28.282 28.314-15.632 0-28.31-12.68-28.31-28.313 0-15.63 12.678-28.31 28.31-28.31zm67.376 34.874c4.462 0 8.683 1.035 12.438 2.875-5.734 1.9-9.875 7.284-9.875 13.655 0 7.955 6.45 14.406 14.405 14.406 4.54 0 8.547-2.093 11.188-5.374.086.902.156 1.826.156 2.75 0 15.632-12.68 28.313-28.314 28.313-15.633 0-28.312-12.682-28.312-28.314s12.68-28.312 28.312-28.312zm-111.5 32.47l4.906 45.155 29.782-25.032 4.625 42.53 31.31-26.343 4.314 39.75 30.312-25.47 5.97 55.032-43.938 36.938-4.313-39.75-30.313 25.47-4.625-42.533-31.312 26.344-4.906-45.156-29.783 25.03-5.968-55.03 43.936-36.938z");
  const RPG_PLAYER_ICON = rpgArtIcon("M467.838 35.848c-53.208 3.518-101.284 8.091-139.14 50.18 9.869 29.563 26.168 65.884 46.613 95.234 20.504 29.436 44.758 50.59 68.61 53.297 35.265-33.057 53.699-112.599 23.917-198.711zM189.8 46.02a70.936 54.43 66.039 0 0-15.987 3.638 70.936 54.43 66.039 0 0-20.931 86.928 70.936 54.43 66.039 0 0 51.62 45.443c2.392 57.507-19.428 43.883-70.534 73.606l15.888 31.69c35.566-13.731 51.844-19.703 69.27-44.317 32.586 93.92-1.874 157.236-23.688 247.078l33.711 4.916c23.698-57.247 55.114-122.355 62.438-181.422 48.937 51.134 77.498 114.641 114.65 169.143l35.82-14.75c-45.81-80.724-65.633-128.371-150.591-262.19 26.819-.194 49.826-6.592 70.683-15.422-7.036-10.105-13.565-20.882-19.529-31.886-28.223 12.083-59.028 16.997-90.14.855a70.936 54.43 66.039 0 0-.118-66.955 70.936 54.43 66.039 0 0-62.562-46.355zM15.47 87.309l3.287 34.09 52.6 107.77 21.568-10.526-52.383-107.325-25.072-24.01zm97.066 139.566l-46.756 22.822 3.137 18.496 56.271-27.464-12.652-13.854zm2.318 36.701l-21.568 10.528 16.668 34.15 21.568-10.527-16.668-34.15z");

  function rpgZoneFloorCount(zone) { return zone.enemies.length + 1; } // 5 regular floors + 1 boss

  function defaultRpgState() {
    return { level: 1, xp: 0, hp: RPG_BASE_MAX_HP, gold: 0, weaponTier: 0, armorTier: 0, cleared: {} };
  }

  function loadRpgState() {
    try {
      const raw = progressStore().getItem(progressKey(RPG_KEY));
      if (raw) {
        const parsed = JSON.parse(raw);
        return { ...defaultRpgState(), ...parsed, cleared: parsed.cleared || {} };
      }
    } catch (e) { /* storage unavailable */ }
    return defaultRpgState();
  }

  function saveRpgState(rpg) {
    try {
      progressStore().setItem(progressKey(RPG_KEY), JSON.stringify(rpg));
    } catch (e) { /* storage unavailable */ }
  }

  function rpgComputedStats(rpg) {
    return {
      maxHp: RPG_BASE_MAX_HP + (rpg.level - 1) * 8 + rpg.armorTier * 12,
      atk: RPG_BASE_ATK + (rpg.level - 1) * 2 + rpg.weaponTier * 3,
    };
  }

  function rpgXpToNext(level) { return level * 50; }

  // Applies XP, rolling over multiple level-ups if earned at once; a
  // level-up fully heals the player. Returns whether any level was gained.
  function rpgGainXp(rpg, amount) {
    rpg.xp += amount;
    let leveled = false;
    while (rpg.xp >= rpgXpToNext(rpg.level)) {
      rpg.xp -= rpgXpToNext(rpg.level);
      rpg.level++;
      leveled = true;
    }
    if (leveled) rpg.hp = rpgComputedStats(rpg).maxHp;
    return leveled;
  }

  function rpgUpgradeCost(tier) { return 50 + tier * 40; }

  function rpgZoneUnlocked(rpg, zoneIndex) {
    if (zoneIndex === 0) return true;
    const prev = RPG_ZONES[zoneIndex - 1];
    return (rpg.cleared[prev.key] || 0) >= rpgZoneFloorCount(prev);
  }

  // A floor is reachable once the previous one in its zone is cleared;
  // already-cleared floors stay reachable too, so players can replay them.
  function rpgFloorUnlocked(rpg, zone, floorIndex) {
    return floorIndex <= (rpg.cleared[zone.key] || 0);
  }

  function rpgEnemyStats(zoneIndex, floorIndex, isBoss) {
    let hp = 24 + zoneIndex * 10 + floorIndex * 6;
    let atk = 3 + zoneIndex * 1.5 + floorIndex * 0.8;
    if (isBoss) { hp *= 1.7; atk += 3; }
    return { hp: Math.round(hp), atk: Math.round(atk) };
  }

  function rpgFloorReward(zoneIndex, floorIndex, isBoss) {
    let xp = 15 + zoneIndex * 5 + floorIndex * 3;
    let gold = 10 + zoneIndex * 4 + floorIndex * 2;
    if (isBoss) { xp *= 1.6; gold *= 1.8; }
    return { xp: Math.round(xp), gold: Math.round(gold) };
  }

  function startDungeonQuest() {
    state.game = "dungeon-quest";
    state.rpgZoneKey = null;
    state.rpgBattle = null;
    state.rpgScreen = "overworld";
    renderRpgOverworld();
  }

  function renderRpgOverworld() {
    state.rpgScreen = "overworld";
    const rpg = loadRpgState();
    const stats = rpgComputedStats(rpg);
    const xpNeed = rpgXpToNext(rpg.level);
    const el = document.getElementById("games");

    const nodesHTML = RPG_ZONES.map((zone, i) => {
      const unlocked = rpgZoneUnlocked(rpg, i);
      const cleared = rpg.cleared[zone.key] || 0;
      const total = rpgZoneFloorCount(zone);
      const done = cleared >= total;
      const classes = ["rpg-node"];
      if (!unlocked) classes.push("locked");
      if (done) classes.push("done");
      const accent = RPG_ZONE_ACCENT[zone.key];
      const nodeIcon = !unlocked ? ICON_LOCK_SM : done ? "&#10003;" : RPG_BOSS_ICONS[zone.key];
      return `
        <div class="${classes.join(" ")}" ${unlocked ? `data-rpg-nav="zone" data-rpg-zone="${zone.key}"` : ""}>
          <div class="rpg-node-icon" ${unlocked && !done ? `style="color:${accent}"` : ""}>${nodeIcon}</div>
          <div class="rpg-node-name">${zone.name}</div>
          <div class="rpg-node-progress">${unlocked ? `${cleared}/${total} floors` : "Locked"}</div>
        </div>`;
    }).join("");

    el.innerHTML = `
      <div class="rpg-topbar">
        <button class="game-quit" data-game-quit>← Exit Dungeon</button>
        <div class="rpg-topbar-stats">
          <span class="game-stat">${ICON_GRADCAP} Lv. ${rpg.level}</span>
          <span class="game-stat">${ICON_COIN} ${rpg.gold}</span>
          <button class="btn btn-ghost rpg-shop-btn" data-rpg-nav="shop">${ICON_SHIELD} Shop</button>
        </div>
      </div>
      <div class="rpg-player-card">
        <div class="rpg-bar-row">
          <span class="rpg-bar-label">HP</span>
          <div class="rpg-bar"><div class="rpg-bar-fill rpg-bar-hp" style="width:${Math.max(0, (rpg.hp / stats.maxHp) * 100)}%"></div></div>
          <span class="rpg-bar-value">${Math.max(0, rpg.hp)}/${stats.maxHp}</span>
        </div>
        <div class="rpg-bar-row">
          <span class="rpg-bar-label">XP</span>
          <div class="rpg-bar"><div class="rpg-bar-fill rpg-bar-xp" style="width:${Math.min(100, (rpg.xp / xpNeed) * 100)}%"></div></div>
          <span class="rpg-bar-value">${rpg.xp}/${xpNeed}</span>
        </div>
        <div class="rpg-player-meta">
          <span>${ICON_SWORD} ${RPG_WEAPON_NAMES[rpg.weaponTier]} &middot; ATK ${stats.atk}</span>
          <span>${ICON_SHIELD} ${RPG_ARMOR_NAMES[rpg.armorTier]}</span>
        </div>
      </div>
      <span class="eyebrow">Dungeon Quest</span>
      <h1 class="section-title rpg-title">Choose your dungeon</h1>
      <p class="section-sub">Eight dungeons, one per SAT skill domain. Answer correctly to attack — miss, and the monster strikes back. Beat a dungeon's boss to unlock the next.</p>
      <div class="rpg-map">${nodesHTML}</div>
    `;
  }

  function renderRpgZone(zoneKey) {
    const zone = RPG_ZONES.find((z) => z.key === zoneKey);
    if (!zone) { renderRpgOverworld(); return; }
    state.rpgScreen = "zone";
    state.rpgZoneKey = zoneKey;
    const rpg = loadRpgState();
    const cleared = rpg.cleared[zone.key] || 0;
    const total = rpgZoneFloorCount(zone);
    const el = document.getElementById("games");

    const floorsHTML = Array.from({ length: total }).map((_, i) => {
      const isBoss = i === total - 1;
      const unlocked = rpgFloorUnlocked(rpg, zone, i);
      const done = i < cleared;
      const classes = ["rpg-floor-node"];
      if (isBoss) classes.push("boss");
      if (!unlocked) classes.push("locked");
      if (done) classes.push("done");
      const enemyName = isBoss ? zone.boss : zone.enemies[i];
      const floorIcon = !unlocked ? ICON_LOCK_SM : isBoss ? RPG_BOSS_ICONS[zone.key] : RPG_ENEMY_ICON;
      const iconStyle = isBoss && unlocked ? ` style="color:${RPG_ZONE_ACCENT[zone.key]}"` : "";
      return `
        <button class="${classes.join(" ")}" ${unlocked ? `data-rpg-floor="${i}"` : "disabled"}>
          <span class="rpg-floor-icon"${iconStyle}>${floorIcon}</span>
          <span class="rpg-floor-label">${isBoss ? "Boss" : `Floor ${i + 1}`}</span>
          <span class="rpg-floor-enemy">${enemyName}</span>
          ${done ? `<span class="rpg-floor-done">${ICON_FLAME}</span>` : ""}
        </button>`;
    }).join("");

    el.innerHTML = `
      <div class="rpg-topbar">
        <button class="game-quit" data-rpg-nav="overworld">← Map</button>
      </div>
      <span class="eyebrow">${zone.module === "math" ? "Math" : "Reading &amp; Writing"} dungeon</span>
      <h1 class="section-title rpg-title">${zone.name}</h1>
      <p class="section-sub">${zone.blurb}</p>
      <div class="rpg-floor-list">${floorsHTML}</div>
    `;
  }

  function startRpgBattle(zoneKey, floorIndex) {
    const zoneIndex = RPG_ZONES.findIndex((z) => z.key === zoneKey);
    const zone = RPG_ZONES[zoneIndex];
    if (!zone) return;
    const rpg = loadRpgState();
    if (!rpgFloorUnlocked(rpg, zone, floorIndex)) return;
    const total = rpgZoneFloorCount(zone);
    const isBoss = floorIndex === total - 1;
    const enemyName = isBoss ? zone.boss : zone.enemies[floorIndex];
    const enemyStats = rpgEnemyStats(zoneIndex, floorIndex, isBoss);

    const pool = shuffle(QUESTIONS.filter((q) => q.domain === zone.key && q.module === zone.module)).map(shuffleChoices);
    if (!pool.length) return;

    state.game = "dungeon-quest";
    state.rpgScreen = "battle";
    state.rpgZoneKey = zoneKey;
    state.rpgBattle = {
      zoneIndex, zoneKey, floorIndex, isBoss, enemyName,
      enemyHp: enemyStats.hp, enemyMaxHp: enemyStats.hp, enemyAtk: enemyStats.atk,
      pool, qIndex: 0, log: isBoss ? `${enemyName} rises to block your path!` : `A wild ${enemyName} blocks your path!`, locked: false,
    };
    renderRpgBattle();
  }

  function renderRpgBattle() {
    const b = state.rpgBattle;
    if (!b) return;
    const rpg = loadRpgState();
    const stats = rpgComputedStats(rpg);
    if (b.qIndex >= b.pool.length) {
      b.pool = shuffle(b.pool).map(shuffleChoices);
      b.qIndex = 0;
    }
    const q = b.pool[b.qIndex];
    const letters = ["A", "B", "C", "D"];
    const choicesHTML = q.choices
      .map(
        (c, ci) =>
          `<div class="choice-row">
            <button class="choice" data-rpg-choice="${ci}" ${b.locked ? "disabled" : ""}>
              <span class="letter">${letters[ci]}</span>
              <span class="ctext">${c}</span>
            </button>
          </div>`
      )
      .join("");

    const zone = RPG_ZONES[b.zoneIndex];
    const accent = RPG_ZONE_ACCENT[zone.key];
    const enemyIcon = b.isBoss ? RPG_BOSS_ICONS[zone.key] : RPG_ENEMY_ICON;

    const el = document.getElementById("games");
    el.innerHTML = `
      <div class="rpg-topbar">
        <button class="game-quit" data-rpg-flee>← Flee</button>
      </div>
      <div class="rpg-battlefield">
        <div class="rpg-combatant">
          <div class="rpg-combatant-portrait player">${RPG_PLAYER_ICON}</div>
          <div class="rpg-combatant-name">You</div>
          <div class="rpg-bar"><div class="rpg-bar-fill rpg-bar-hp" style="width:${Math.max(0, (rpg.hp / stats.maxHp) * 100)}%"></div></div>
          <div class="rpg-bar-value">${Math.max(0, rpg.hp)}/${stats.maxHp}</div>
        </div>
        <div class="rpg-vs">VS</div>
        <div class="rpg-combatant">
          <div class="rpg-combatant-portrait enemy${b.isBoss ? " boss" : ""}" style="color:${accent}; --rpg-accent:${accent}">${enemyIcon}</div>
          <div class="rpg-combatant-name">${b.enemyName}${b.isBoss ? ` <span class="rpg-boss-tag">Boss</span>` : ""}</div>
          <div class="rpg-bar"><div class="rpg-bar-fill rpg-bar-enemy" style="width:${Math.max(0, (b.enemyHp / b.enemyMaxHp) * 100)}%"></div></div>
          <div class="rpg-bar-value">${Math.max(0, b.enemyHp)}/${b.enemyMaxHp}</div>
        </div>
      </div>
      <div class="rpg-log">${b.log}</div>
      ${q.passage ? `<div class="passage">${q.passage}</div>` : ""}
      <div class="prompt game-prompt">${q.prompt.replace(/\n/g, "<br>")}</div>
      <div class="choices" id="rpgChoices">${choicesHTML}</div>
    `;
  }

  function answerRpgQuestion(choiceIndex) {
    const b = state.rpgBattle;
    if (!b || b.locked || state.rpgScreen !== "battle") return;
    const rpg = loadRpgState();
    const stats = rpgComputedStats(rpg);
    const q = b.pool[b.qIndex];
    const ok = choiceIndex === q.answer;
    b.locked = true;

    const buttons = document.querySelectorAll("#rpgChoices .choice");
    buttons.forEach((btn) => {
      const ci = Number(btn.dataset.rpgChoice);
      if (ci === q.answer) btn.classList.add("correct");
      else if (ci === choiceIndex) btn.classList.add("incorrect");
    });

    if (ok) {
      const dmg = stats.atk + Math.floor(Math.random() * 3);
      b.enemyHp = Math.max(0, b.enemyHp - dmg);
      b.log = `You hit ${b.enemyName} for ${dmg} damage!`;
      document.querySelector(".rpg-combatant-portrait.enemy")?.classList.add("hit-flash");
    } else {
      const dmg = b.enemyAtk + Math.floor(Math.random() * 2);
      rpg.hp = Math.max(0, rpg.hp - dmg);
      saveRpgState(rpg);
      b.log = `${b.enemyName} hits you for ${dmg} damage!`;
      document.querySelector(".rpg-combatant-portrait.player")?.classList.add("hit-flash");
    }

    setTimeout(() => {
      if (state.rpgScreen !== "battle" || state.rpgBattle !== b) return; // fled, or left mid-flash
      if (b.enemyHp <= 0) { resolveRpgVictory(); return; }
      if (rpg.hp <= 0) { resolveRpgDefeat(); return; }
      b.qIndex++;
      b.locked = false;
      renderRpgBattle();
    }, 600);
  }

  function resolveRpgVictory() {
    const b = state.rpgBattle;
    const rpg = loadRpgState();
    const reward = rpgFloorReward(b.zoneIndex, b.floorIndex, b.isBoss);
    rpg.gold += reward.gold;
    const leveled = rpgGainXp(rpg, reward.xp);
    const zone = RPG_ZONES[b.zoneIndex];
    rpg.cleared[zone.key] = Math.max(rpg.cleared[zone.key] || 0, b.floorIndex + 1);
    saveRpgState(rpg);
    b.reward = reward;
    b.leveled = leveled;
    state.rpgScreen = "victory";
    renderRpgVictoryScreen();
  }

  function renderRpgVictoryScreen() {
    const b = state.rpgBattle;
    const zone = RPG_ZONES[b.zoneIndex];
    const total = rpgZoneFloorCount(zone);
    const nextFloorIndex = b.floorIndex + 1;
    const hasNext = nextFloorIndex < total;
    const enemyIcon = b.isBoss ? RPG_BOSS_ICONS[zone.key] : RPG_ENEMY_ICON;
    const el = document.getElementById("games");
    el.innerHTML = `
      <div class="game-result">
        <div class="rpg-combatant-portrait enemy defeated${b.isBoss ? " boss" : ""}" style="color:${RPG_ZONE_ACCENT[zone.key]}; --rpg-accent:${RPG_ZONE_ACCENT[zone.key]}">${enemyIcon}</div>
        <span class="eyebrow">${b.isBoss ? "Boss defeated!" : "Floor cleared"}</span>
        <h2>${b.enemyName} is defeated!</h2>
        ${b.leveled ? `<p class="game-result-best">Level up! You're now level ${loadRpgState().level}. ${ICON_FLAME}</p>` : ""}
        <div class="game-result-stats">
          <div class="bd-card"><div class="v">+${b.reward.xp}</div><div class="l">XP</div></div>
          <div class="bd-card"><div class="v">+${b.reward.gold}</div><div class="l">Gold</div></div>
        </div>
        ${b.isBoss ? `<p class="section-sub">${zone.name} cleared! A new dungeon has opened on the map.</p>` : ""}
        <div class="results-actions">
          ${hasNext ? `<button class="btn btn-primary" data-rpg-floor="${nextFloorIndex}">Next floor →</button>` : ""}
          <button class="btn btn-ghost" data-rpg-nav="zone" data-rpg-zone="${zone.key}">Back to dungeon map</button>
        </div>
      </div>
    `;
  }

  function resolveRpgDefeat() {
    const rpg = loadRpgState();
    rpg.hp = rpgComputedStats(rpg).maxHp; // full heal — no permanent penalty, just try again
    saveRpgState(rpg);
    state.rpgScreen = "defeat";
    renderRpgDefeatScreen();
  }

  function renderRpgDefeatScreen() {
    const b = state.rpgBattle;
    const zone = RPG_ZONES[b.zoneIndex];
    const enemyIcon = b.isBoss ? RPG_BOSS_ICONS[zone.key] : RPG_ENEMY_ICON;
    const el = document.getElementById("games");
    el.innerHTML = `
      <div class="game-result">
        <div class="rpg-combatant-portrait enemy victor${b.isBoss ? " boss" : ""}" style="color:${RPG_ZONE_ACCENT[zone.key]}; --rpg-accent:${RPG_ZONE_ACCENT[zone.key]}">${enemyIcon}</div>
        <span class="eyebrow">Defeated...</span>
        <h2>${b.enemyName} was too strong</h2>
        <p class="section-sub">You've been healed back to full HP. Study up and try again — or grab better gear at the Shop first.</p>
        <div class="results-actions">
          <button class="btn btn-primary" data-rpg-floor="${b.floorIndex}">Try again →</button>
          <button class="btn btn-ghost" data-rpg-nav="shop">Visit shop</button>
          <button class="btn btn-ghost" data-rpg-nav="zone" data-rpg-zone="${zone.key}">Back to dungeon map</button>
        </div>
      </div>
    `;
  }

  function rpgFlee() {
    const zoneKey = state.rpgZoneKey;
    state.rpgBattle = null;
    renderRpgZone(zoneKey);
  }

  function renderRpgShop() {
    state.rpgScreen = "shop";
    const rpg = loadRpgState();
    const stats = rpgComputedStats(rpg);
    const el = document.getElementById("games");

    const weaponMaxed = rpg.weaponTier >= RPG_MAX_TIER;
    const armorMaxed = rpg.armorTier >= RPG_MAX_TIER;
    const weaponCost = rpgUpgradeCost(rpg.weaponTier);
    const armorCost = rpgUpgradeCost(rpg.armorTier);

    el.innerHTML = `
      <div class="rpg-topbar">
        <button class="game-quit" data-rpg-nav="overworld">← Map</button>
        <div class="rpg-topbar-stats"><span class="game-stat">${ICON_COIN} ${rpg.gold} gold</span></div>
      </div>
      <span class="eyebrow">Shop</span>
      <h1 class="section-title rpg-title">Gear up</h1>
      <p class="section-sub">Spend gold earned in battle on permanent upgrades.</p>
      <div class="rpg-shop-grid">
        <div class="rpg-shop-card">
          <div class="rpg-shop-icon">${ICON_SWORD}</div>
          <h3>${RPG_WEAPON_NAMES[rpg.weaponTier]}</h3>
          <p>Attack: ${stats.atk}${!weaponMaxed ? ` &rarr; ${stats.atk + 3}` : ""}</p>
          ${
            weaponMaxed
              ? `<span class="rpg-shop-maxed">Max tier reached</span>`
              : `<button class="btn btn-primary" data-rpg-buy="weapon" ${rpg.gold < weaponCost ? "disabled" : ""}>Upgrade — ${weaponCost} gold</button>`
          }
        </div>
        <div class="rpg-shop-card">
          <div class="rpg-shop-icon">${ICON_SHIELD}</div>
          <h3>${RPG_ARMOR_NAMES[rpg.armorTier]}</h3>
          <p>Max HP: ${stats.maxHp}${!armorMaxed ? ` &rarr; ${stats.maxHp + 12}` : ""}</p>
          ${
            armorMaxed
              ? `<span class="rpg-shop-maxed">Max tier reached</span>`
              : `<button class="btn btn-primary" data-rpg-buy="armor" ${rpg.gold < armorCost ? "disabled" : ""}>Upgrade — ${armorCost} gold</button>`
          }
        </div>
      </div>
    `;
  }

  function buyRpgUpgrade(kind) {
    const rpg = loadRpgState();
    const tier = kind === "weapon" ? rpg.weaponTier : rpg.armorTier;
    if (tier >= RPG_MAX_TIER) return;
    const cost = rpgUpgradeCost(tier);
    if (rpg.gold < cost) return;
    rpg.gold -= cost;
    if (kind === "weapon") {
      rpg.weaponTier++;
    } else {
      const before = rpgComputedStats(rpg).maxHp;
      rpg.armorTier++;
      rpg.hp += rpgComputedStats(rpg).maxHp - before;
    }
    saveRpgState(rpg);
    renderRpgShop();
  }

  // ---- Games: Study Tycoon (idle) ----
  // A persistent incremental game: answer real SAT questions to earn
  // Brainpower directly, and spend it on generators that keep producing
  // Brainpower on their own — including while the tab is closed, via an
  // offline-earnings credit applied the next time the game is opened.
  const IDLE_GENERATORS = [
    { key: "flashcards", name: "Flashcard Deck", baseCost: 15, rate: 0.1, unlockAt: 0 },
    { key: "studyBuddy", name: "Study Buddy", baseCost: 100, rate: 1, unlockAt: 0 },
    { key: "workbook", name: "Practice Workbook", baseCost: 500, rate: 4, unlockAt: 5 },
    { key: "tutor", name: "Private Tutor", baseCost: 2500, rate: 12, unlockAt: 15 },
    { key: "studyHall", name: "Study Hall", baseCost: 10000, rate: 40, unlockAt: 30 },
    { key: "aiTutor", name: "AI Tutor Bot", baseCost: 50000, rate: 120, unlockAt: 50 },
    { key: "reviewCourse", name: "Review Course", baseCost: 250000, rate: 400, unlockAt: 80 },
    { key: "prepAcademy", name: "Prep Academy", baseCost: 1000000, rate: 1500, unlockAt: 120 },
  ];
  const IDLE_GEN_COST_GROWTH = 1.15;

  function idleIconFor(key) {
    switch (key) {
      case "flashcards": return ICON_NOTE;
      case "studyBuddy": return ICON_CHAT;
      case "workbook": return ICON_BOOK;
      case "tutor": return ICON_GRADCAP;
      case "studyHall": return ICON_BUILDING;
      case "aiTutor": return ICON_ROBOT;
      case "reviewCourse": return ICON_CLIPBOARD_CHECK;
      case "prepAcademy": return ICON_TROPHY;
      default: return ICON_COIN;
    }
  }

  function defaultIdleState() {
    return { bp: 0, totalEarned: 0, totalCorrect: 0, totalAnswered: 0, combo: 0, owned: {}, lastSeen: Date.now() };
  }

  function loadIdleState() {
    try {
      const raw = progressStore().getItem(progressKey(IDLE_KEY));
      if (raw) {
        const parsed = JSON.parse(raw);
        return { ...defaultIdleState(), ...parsed, owned: parsed.owned || {} };
      }
    } catch (e) { /* storage unavailable */ }
    return defaultIdleState();
  }

  function saveIdleState(idle) {
    idle.lastSeen = Date.now();
    try {
      progressStore().setItem(progressKey(IDLE_KEY), JSON.stringify(idle));
    } catch (e) { /* storage unavailable */ }
  }

  function idleGeneratorCost(gen, owned) {
    return Math.ceil(gen.baseCost * Math.pow(IDLE_GEN_COST_GROWTH, owned));
  }

  function idleTotalRate(idle) {
    return IDLE_GENERATORS.reduce((sum, gen) => sum + gen.rate * (idle.owned[gen.key] || 0), 0);
  }

  // Abbreviates large Brainpower totals (1.2K, 3.4M, ...); small amounts
  // keep enough decimal precision to show sub-1 BP/sec generator rates.
  function formatIdleNumber(n) {
    n = Math.max(0, n);
    if (n < 1000) return n % 1 === 0 ? String(Math.floor(n)) : n.toFixed(n < 10 ? 2 : 1);
    const units = ["K", "M", "B", "T", "Qa", "Qi"];
    let v = n, u = -1;
    while (v >= 1000 && u < units.length - 1) { v /= 1000; u++; }
    return `${v >= 100 ? v.toFixed(0) : v >= 10 ? v.toFixed(1) : v.toFixed(2)}${units[u]}`;
  }

  function startIdleGame() {
    state.game = "study-tycoon";
    state.idlePool = shuffle(QUESTIONS).map(shuffleChoices);
    state.idleQIndex = 0;
    state.idleLocked = false;

    const idle = loadIdleState();
    const rate = idleTotalRate(idle);
    const elapsedMs = Math.max(0, Math.min(Date.now() - (idle.lastSeen || Date.now()), IDLE_OFFLINE_CAP_MS));
    let offlineEarned = 0;
    if (elapsedMs > 20000 && rate > 0) {
      offlineEarned = Math.floor((elapsedMs / 1000) * rate);
      idle.bp += offlineEarned;
      idle.totalEarned += offlineEarned;
    }
    saveIdleState(idle);
    renderIdleGame(offlineEarned);

    clearInterval(state.gameTimer);
    state.gameTimer = setInterval(() => {
      if (state.game !== "study-tycoon") return;
      const cur = loadIdleState();
      const r = idleTotalRate(cur);
      cur.bp += r;
      cur.totalEarned += r;
      saveIdleState(cur);
      updateIdleHud(cur);
    }, IDLE_TICK_MS);
  }

  function updateIdleHud(idle) {
    const bpEl = document.getElementById("idleBPValue");
    if (bpEl) bpEl.textContent = formatIdleNumber(idle.bp);
    const rateEl = document.getElementById("idleRateValue");
    if (rateEl) rateEl.textContent = formatIdleNumber(idleTotalRate(idle));
    document.querySelectorAll("[data-idle-buy]").forEach((btn) => {
      const gen = IDLE_GENERATORS.find((g) => g.key === btn.dataset.idleBuy);
      if (!gen) return;
      const owned = idle.owned[gen.key] || 0;
      btn.disabled = idle.bp < idleGeneratorCost(gen, owned);
    });
  }

  function renderIdleGame(offlineEarned) {
    const idle = loadIdleState();
    const rate = idleTotalRate(idle);

    if (!state.idlePool || state.idleQIndex >= state.idlePool.length) {
      state.idlePool = shuffle(state.idlePool && state.idlePool.length ? state.idlePool : QUESTIONS).map(shuffleChoices);
      state.idleQIndex = 0;
    }
    const q = state.idlePool[state.idleQIndex];
    const letters = ["A", "B", "C", "D"];
    const choicesHTML = q.choices
      .map(
        (c, ci) =>
          `<div class="choice-row">
            <button class="choice" data-idle-choice="${ci}" ${state.idleLocked ? "disabled" : ""}>
              <span class="letter">${letters[ci]}</span>
              <span class="ctext">${c}</span>
            </button>
          </div>`
      )
      .join("");

    const shopHTML = IDLE_GENERATORS.map((gen) => {
      const owned = idle.owned[gen.key] || 0;
      const unlocked = idle.totalCorrect >= gen.unlockAt;
      const cost = idleGeneratorCost(gen, owned);
      const classes = ["idle-gen-row"];
      if (!unlocked) classes.push("locked");
      return `
        <div class="${classes.join(" ")}">
          <div class="idle-gen-icon">${unlocked ? idleIconFor(gen.key) : ICON_LOCK_SM}</div>
          <div class="idle-gen-info">
            <div class="idle-gen-name">${gen.name}${owned ? ` <span class="idle-gen-owned">&times;${owned}</span>` : ""}</div>
            <div class="idle-gen-meta">${unlocked ? `${formatIdleNumber(gen.rate)} BP/s each` : `Unlocks at ${gen.unlockAt} correct answers`}</div>
          </div>
          ${
            unlocked
              ? `<button class="btn btn-primary idle-gen-buy" data-idle-buy="${gen.key}" ${idle.bp < cost ? "disabled" : ""}>${formatIdleNumber(cost)} BP</button>`
              : `<span class="idle-gen-locked-tag">${ICON_LOCK_SM} Locked</span>`
          }
        </div>`;
    }).join("");

    const offlineBannerHTML = offlineEarned
      ? `<div class="idle-offline-banner">${ICON_GIFT} Welcome back! You earned <strong>${formatIdleNumber(offlineEarned)} BP</strong> while you were away.</div>`
      : "";

    const el = document.getElementById("games");
    el.innerHTML = `
      <div class="game-hud">
        <button class="game-quit" data-game-quit>← Quit</button>
        <div class="game-hud-stats">
          <span class="game-stat">${ICON_FLAME} ${idle.combo} combo</span>
          <span class="game-stat">${idle.totalCorrect} correct</span>
        </div>
      </div>
      ${offlineBannerHTML}
      <div class="idle-bp-banner">
        <div class="idle-bp-main"><span id="idleBPValue">${formatIdleNumber(idle.bp)}</span><span class="idle-bp-label">Brainpower</span></div>
        <div class="idle-bp-rate"><span id="idleRateValue">${formatIdleNumber(rate)}</span> BP/sec</div>
      </div>
      <div class="idle-layout">
        <div class="idle-question-col">
          <div class="game-title">Answer to earn a boost</div>
          ${q.passage ? `<div class="passage">${q.passage}</div>` : ""}
          <div class="prompt game-prompt">${q.prompt.replace(/\n/g, "<br>")}</div>
          <div class="choices" id="idleChoices">${choicesHTML}</div>
        </div>
        <div class="idle-shop-col">
          <div class="game-title idle-shop-title">Study generators</div>
          <p class="section-sub idle-shop-sub">Buy generators to earn Brainpower automatically, even while you're away.</p>
          <div class="idle-gen-list">${shopHTML}</div>
        </div>
      </div>
    `;
  }

  function answerIdleQuestion(choiceIndex) {
    if (state.idleLocked || state.game !== "study-tycoon") return;
    const q = state.idlePool[state.idleQIndex];
    const ok = choiceIndex === q.answer;
    state.idleLocked = true;

    const buttons = document.querySelectorAll("#idleChoices .choice");
    buttons.forEach((b) => {
      const ci = Number(b.dataset.idleChoice);
      if (ci === q.answer) b.classList.add("correct");
      else if (ci === choiceIndex) b.classList.add("incorrect");
    });

    const idle = loadIdleState();
    idle.totalAnswered++;
    if (ok) {
      idle.totalCorrect++;
      idle.combo++;
      const reward = 15 + Math.min(idle.combo, 9) * 6 + Math.floor(idleTotalRate(idle) * 3);
      idle.bp += reward;
      idle.totalEarned += reward;
    } else {
      idle.combo = 0;
    }
    saveIdleState(idle);

    setTimeout(() => {
      if (state.game !== "study-tycoon") return;
      state.idleQIndex++;
      state.idleLocked = false;
      renderIdleGame();
    }, 500);
  }

  function buyIdleGenerator(key) {
    const gen = IDLE_GENERATORS.find((g) => g.key === key);
    if (!gen) return;
    const idle = loadIdleState();
    if (idle.totalCorrect < gen.unlockAt) return;
    const owned = idle.owned[gen.key] || 0;
    const cost = idleGeneratorCost(gen, owned);
    if (idle.bp < cost) return;
    idle.bp -= cost;
    idle.owned[gen.key] = owned + 1;
    saveIdleState(idle);
    renderIdleGame();
  }

  // ---- Dashboard ----
  let dashGoalEditing = false; // whether the SAT Goal card is showing its edit form
  let dailyPlanEditing = false; // whether the Study Plan's daily-plan card is showing its setup form

  function loadGoal() {
    try {
      const raw = progressStore().getItem(progressKey(GOAL_KEY));
      return raw ? Number(raw) : DEFAULT_GOAL;
    } catch (e) {
      return DEFAULT_GOAL;
    }
  }

  function saveGoal(score) {
    try {
      progressStore().setItem(progressKey(GOAL_KEY), String(score));
    } catch (e) { /* storage unavailable */ }
  }

  function loadTestDate() {
    try {
      return progressStore().getItem(progressKey(TEST_DATE_KEY)) || null;
    } catch (e) {
      return null;
    }
  }

  function saveTestDate(dateStr) {
    try {
      progressStore().setItem(progressKey(TEST_DATE_KEY), dateStr);
    } catch (e) { /* storage unavailable */ }
  }

  function loadMinutesPerDay() {
    try {
      const raw = progressStore().getItem(progressKey(MINUTES_PER_DAY_KEY));
      return raw ? Number(raw) : DEFAULT_MINUTES_PER_DAY;
    } catch (e) {
      return DEFAULT_MINUTES_PER_DAY;
    }
  }

  function saveMinutesPerDay(mins) {
    try {
      progressStore().setItem(progressKey(MINUTES_PER_DAY_KEY), String(mins));
    } catch (e) { /* storage unavailable */ }
  }

  // Whole days between today and the saved test date, or null if no date
  // is set yet. Negative once the date's in the past.
  function daysUntilTestDate() {
    const dateStr = loadTestDate();
    if (!dateStr) return null;
    const target = new Date(dateStr + "T00:00:00");
    if (Number.isNaN(target.getTime())) return null;
    const startOfToday = new Date(new Date().toDateString());
    return Math.round((target - startOfToday) / DAY_MS);
  }

  // Estimates a combined RW + Math score from the most recent diagnostic's
  // category breakdown, the same way finishExam() scores a live diagnostic.
  function computeCurrentEstimate() {
    const data = loadDiagnosticSummary();
    if (!data || !data.categories || !data.categories.length) return null;
    let rwCorrect = 0, rwTotal = 0, mathCorrect = 0, mathTotal = 0;
    data.categories.forEach((c) => {
      if (c.module === "rw") { rwCorrect += c.correct; rwTotal += c.total; }
      else { mathCorrect += c.correct; mathTotal += c.total; }
    });
    if (!rwTotal && !mathTotal) return null;
    return toSectionScore(rwTotal ? rwCorrect / rwTotal : 0) + toSectionScore(mathTotal ? mathCorrect / mathTotal : 0);
  }

  // The weakest `n` categories from the most recent diagnostic, worst first.
  function weakestDomains(n) {
    const data = loadDiagnosticSummary();
    if (!data || !data.categories || !data.categories.length) return [];
    const cats = data.categories.map((c) => ({ ...c, pct: c.total ? c.correct / c.total : 0 }));
    return cats.slice().sort((a, b) => a.pct - b.pct).slice(0, n);
  }

  // Which domain/module the "practice weakest area" quest should point
  // to — the worst-performing category, or a sensible default for
  // students who haven't taken a diagnostic yet.
  function primaryWeakDomain() {
    const weakest = weakestDomains(1)[0];
    return weakest ? { domain: weakest.domain, module: weakest.module } : { domain: "Algebra", module: "math" };
  }

  // ---- Today's Quests: real progress tracking ----
  // Per-domain count of questions answered today, across every practice
  // mode (regular practice, question bank, diagnostics). Powers the
  // "Complete 15 <domain> questions" quest.
  function loadDomainTodayCounts() {
    try {
      const raw = progressStore().getItem(progressKey(DOMAIN_TODAY_KEY));
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.date === todayStr()) return parsed.counts || {};
      }
    } catch (e) { /* storage unavailable */ }
    return {};
  }

  function loadDomainTodayCount(domain) {
    return loadDomainTodayCounts()[domain] || 0;
  }

  function bumpDomainToday(domain, amount) {
    const counts = loadDomainTodayCounts();
    counts[domain] = (counts[domain] || 0) + amount;
    try {
      progressStore().setItem(progressKey(DOMAIN_TODAY_KEY), JSON.stringify({ date: todayStr(), counts }));
    } catch (e) { /* storage unavailable */ }
  }

  // The redo queue: missed questions tracked with a Leitner box (0, 1, 2 —
  // see MISTAKE_REDO_INTERVALS_DAYS) and a dueAt timestamp. A question only
  // surfaces in the queue once it's due; answering it correctly advances
  // the box and pushes dueAt further out, until MISTAKE_MASTERY_BOX removes
  // it entirely. Missing it again resets the box to 0 — back to square one.
  function loadMistakeBank() {
    try {
      const raw = progressStore().getItem(progressKey(MISTAKE_BANK_KEY));
      if (raw) return JSON.parse(raw);
    } catch (e) { /* storage unavailable */ }
    return [];
  }

  function saveMistakeBank(bank) {
    try {
      progressStore().setItem(progressKey(MISTAKE_BANK_KEY), JSON.stringify(bank.slice(0, MISTAKE_BANK_LIMIT)));
    } catch (e) { /* storage unavailable */ }
  }

  // `missed` is an array of {q, reason}. A question missed again after
  // already being on the queue regresses all the way back to box 0 —
  // spaced repetition only works if a later miss costs you the progress
  // you'd made on it.
  function addMistakes(missed) {
    if (!missed.length) return;
    const now = Date.now();
    const byId = {};
    loadMistakeBank().forEach((m) => { byId[m.id] = m; });
    missed.forEach(({ q, reason }) => {
      const existing = byId[q.id];
      byId[q.id] = {
        id: q.id,
        domain: q.domain,
        module: q.module,
        reason: reason || (existing && existing.reason) || null,
        box: 0,
        dueAt: now,
        missedAt: now,
      };
    });
    saveMistakeBank(Object.values(byId).sort((a, b) => b.missedAt - a.missedAt));
  }

  // A correct answer on a question that's on the queue advances its box
  // and schedules the next review further out — or, past the last box,
  // removes it as mastered. Questions not on the queue are no-ops.
  function advanceMistakes(ids) {
    if (!ids.length) return;
    const now = Date.now();
    const next = [];
    loadMistakeBank().forEach((m) => {
      if (!ids.includes(m.id)) {
        next.push(m);
        return;
      }
      const box = (m.box || 0) + 1;
      if (box >= MISTAKE_MASTERY_BOX) return; // mastered — drops off the queue
      next.push({ ...m, box, dueAt: now + MISTAKE_REDO_INTERVALS_DAYS[box] * DAY_MS });
    });
    saveMistakeBank(next);
  }

  // The subset of the redo queue that's actually due right now, soonest
  // (most overdue) first — this is what the "Review 5 mistakes" quest and
  // the Study Plan's redo-queue card actually offer to practice.
  function dueMistakes() {
    const now = Date.now();
    return loadMistakeBank()
      .filter((m) => (m.dueAt || 0) <= now)
      .sort((a, b) => (a.dueAt || 0) - (b.dueAt || 0));
  }

  // Lifetime tally of tagged miss reasons (see MISTAKE_REASONS), kept
  // separately from the redo queue so the "why you're missing points"
  // breakdown survives a question being mastered and dropping off the
  // queue — the behavioral pattern is still worth knowing about.
  function loadMistakeReasonTally() {
    try {
      const raw = progressStore().getItem(progressKey(MISTAKE_REASON_TALLY_KEY));
      if (raw) return JSON.parse(raw);
    } catch (e) { /* storage unavailable */ }
    return { total: 0 };
  }

  function bumpMistakeReasonTally(missed) {
    if (!missed.length) return;
    const tally = loadMistakeReasonTally();
    missed.forEach(({ reason }) => {
      tally.total = (tally.total || 0) + 1;
      if (reason) tally[reason] = (tally[reason] || 0) + 1;
    });
    try {
      progressStore().setItem(progressKey(MISTAKE_REASON_TALLY_KEY), JSON.stringify(tally));
    } catch (e) { /* storage unavailable */ }
  }

  // ---- Pacing analytics ----
  // A rolling, capped log of per-question timing samples (first-answer
  // elapsed seconds, correct/incorrect, domain) across every session —
  // not scoped to one attempt, so the insight below is a real behavioral
  // pattern rather than a one-off.
  function loadPacingLog() {
    try {
      const raw = progressStore().getItem(progressKey(PACING_LOG_KEY));
      if (raw) return JSON.parse(raw);
    } catch (e) { /* storage unavailable */ }
    return [];
  }

  function appendPacingLog(samples) {
    if (!samples.length) return;
    const log = loadPacingLog().concat(samples).slice(-PACING_LOG_LIMIT);
    try {
      progressStore().setItem(progressKey(PACING_LOG_KEY), JSON.stringify(log));
    } catch (e) { /* storage unavailable */ }
  }

  // Turns the raw log into the numbers the Dashboard's pacing card shows:
  // overall average time per question, accuracy on rushed (<20s) vs.
  // stalled (>120s) answers, and the slowest domain with enough samples
  // to mean something.
  function computePacingStats() {
    const log = loadPacingLog();
    if (log.length < 5) return null;

    const acc = (list) => (list.length ? Math.round((list.filter((s) => s.correct).length / list.length) * 100) : null);
    const rushed = log.filter((s) => s.timeSec < PACE_RUSHED_SECONDS);
    const stalled = log.filter((s) => s.timeSec > PACE_STALLED_SECONDS);

    const byDomain = {};
    log.forEach((s) => {
      const d = (byDomain[s.domain] = byDomain[s.domain] || { total: 0, n: 0 });
      d.total += s.timeSec;
      d.n++;
    });
    let slowestDomain = null;
    Object.keys(byDomain).forEach((domain) => {
      const { total, n } = byDomain[domain];
      if (n < PACE_MIN_DOMAIN_SAMPLES) return;
      const avgSec = Math.round(total / n);
      if (!slowestDomain || avgSec > slowestDomain.avgSec) slowestDomain = { domain, avgSec };
    });

    return {
      sampleCount: log.length,
      avgSec: Math.round(log.reduce((n, s) => n + s.timeSec, 0) / log.length),
      overallAcc: acc(log),
      rushedCount: rushed.length,
      rushedAcc: acc(rushed),
      stalledCount: stalled.length,
      stalledAcc: acc(stalled),
      slowestDomain,
    };
  }

  // The one or two sentences the Dashboard's pacing card leads with —
  // only calls out rushing or stalling when the accuracy gap from a
  // student's own overall average is big enough to be a real pattern,
  // not noise from a handful of questions.
  function pacingInsightSentence(p) {
    const notes = [];
    if (p.rushedCount >= 5 && p.rushedAcc !== null && p.rushedAcc <= p.overallAcc - 15) {
      notes.push(
        `Answers under ${PACE_RUSHED_SECONDS}s are right only ${p.rushedAcc}% of the time, versus ${p.overallAcc}% overall — slow down on those.`
      );
    }
    if (p.stalledCount >= 5 && p.stalledAcc !== null && p.stalledAcc <= p.overallAcc - 15) {
      notes.push(
        `Questions you spend over ${Math.round(PACE_STALLED_SECONDS / 60)} minutes on are right only ${p.stalledAcc}% of the time — if it's not clicking by then, skip and come back.`
      );
    }
    if (p.slowestDomain) {
      notes.push(`${p.slowestDomain.domain} takes you the longest on average (${p.slowestDomain.avgSec}s/question).`);
    }
    return notes.length ? notes.join(" ") : "Your pacing looks steady — no questions are consistently rushed or stalled.";
  }

  function loadMistakesReviewedToday() {
    try {
      const raw = progressStore().getItem(progressKey(MISTAKES_REVIEWED_KEY));
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.date === todayStr()) return parsed.count || 0;
      }
    } catch (e) { /* storage unavailable */ }
    return 0;
  }

  function bumpMistakesReviewedToday(amount) {
    if (!amount) return;
    try {
      progressStore().setItem(
        progressKey(MISTAKES_REVIEWED_KEY),
        JSON.stringify({ date: todayStr(), count: loadMistakesReviewedToday() + amount })
      );
    } catch (e) { /* storage unavailable */ }
  }

  function loadTimedModuleToday() {
    try {
      const raw = progressStore().getItem(progressKey(TIMED_MODULE_KEY));
      if (raw) {
        const parsed = JSON.parse(raw);
        return parsed.date === todayStr();
      }
    } catch (e) { /* storage unavailable */ }
    return false;
  }

  function markTimedModuleToday() {
    try {
      progressStore().setItem(progressKey(TIMED_MODULE_KEY), JSON.stringify({ date: todayStr() }));
    } catch (e) { /* storage unavailable */ }
  }

  // Called once per finished session (any module) with each question's
  // {q, selected, reason, timeSec} — folds the attempt into today's
  // per-domain counts, the redo queue, the miss-reason tally, and the
  // pacing log, and marks today's timed-module quest complete. `reason`
  // is only present when missed and tagged; `timeSec` whenever pacing
  // was captured (see state.questionTimes).
  function recordSessionProgress(pairs) {
    const domainCounts = {};
    const missed = [];
    const masteredIds = [];
    const pacingSamples = [];
    pairs.forEach(({ q, selected, reason, timeSec }) => {
      if (selected === undefined) return;
      domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
      const correct = selected === q.answer;
      if (correct) masteredIds.push(q.id);
      else missed.push({ q, reason });
      if (typeof timeSec === "number") {
        pacingSamples.push({ domain: q.domain, module: q.module, correct, timeSec });
      }
    });
    Object.keys(domainCounts).forEach((domain) => bumpDomainToday(domain, domainCounts[domain]));
    if (missed.length) {
      addMistakes(missed);
      bumpMistakeReasonTally(missed);
    }
    if (masteredIds.length) advanceMistakes(masteredIds);
    if (pacingSamples.length) appendPacingLog(pacingSamples);
    markTimedModuleToday();
  }

  // Builds a practice set from whatever's due on the redo queue right now
  // — the "Review 5 mistakes" quest's Go button.
  function startMistakeReview() {
    const due = dueMistakes();
    const pool = due
      .slice(0, 5)
      .map((m) => QUESTIONS.find((q) => q.id === m.id))
      .filter(Boolean)
      .map(shuffleChoices);
    if (!pool.length) {
      renderStudyPlan();
      show("studyPlan");
      return;
    }

    state.module = "mistakeReview";
    state.domainFilter = null;
    state.reviewMode = false;
    state.categoryLabel = "Redo Queue";
    state.categoryDomain = null;
    state.questions = pool;
    state.answers = {};
    state.checked = {};
    state.missReasons = {};
    state.questionStartTimes = {};
    state.questionTimes = {};
    state.eliminated = {};
    state.marked = {};
    state.current = 0;
    state.eliminating = false;
    state.pillWindowStart = 0;
    state.secondsLeft = pool.length * SECONDS_PER_Q;
    state.timerHidden = false;

    startTimer();
    show("exam");
    renderQuestion();
    renderFooter();
    updateModuleName();
  }

  // Today's quest list — each one's real progress (from the tracking
  // above), what it's worth in XP, and where its "Go →" button sends the
  // user. Built fresh each time since progress and the weakest-domain
  // target both change live.
  function questDefs() {
    const primary = primaryWeakDomain();
    const due = dueMistakes();
    return [
      {
        id: "practice15",
        label: `Complete 15 ${primary.domain} questions`,
        xp: 50,
        total: 15,
        count: Math.min(loadDomainTodayCount(primary.domain), 15),
        go: `<button type="button" class="btn btn-ghost btn-small" data-domain-practice="${primary.domain}" data-domain-module="${primary.module}">Go →</button>`,
      },
      {
        id: "reviewMistakes",
        label: "Review 5 mistakes",
        xp: 30,
        total: 5,
        count: Math.min(loadMistakesReviewedToday(), 5),
        go: due.length
          ? `<button type="button" class="btn btn-ghost btn-small" data-start="mistakeReview">Go →</button>`
          : `<button type="button" class="btn btn-ghost btn-small" data-nav="studyPlan">Go →</button>`,
      },
      {
        id: "timedModule",
        label: "Take a timed module",
        xp: 80,
        total: 1,
        count: loadTimedModuleToday() ? 1 : 0,
        go: `<button type="button" class="btn btn-ghost btn-small" data-start="mixed">Go →</button>`,
      },
    ];
  }

  // ---- XP: earned by completing quests, tracked per-user right now.
  // Nothing spends it yet — that comes later.
  function loadXP() {
    try {
      const raw = progressStore().getItem(progressKey(XP_KEY));
      return raw ? Number(raw) || 0 : 0;
    } catch (e) {
      return 0;
    }
  }

  function addXP(amount) {
    try {
      progressStore().setItem(progressKey(XP_KEY), String(Math.max(0, loadXP() + amount)));
    } catch (e) { /* storage unavailable */ }
  }

  function loadAwardedQuestsToday() {
    try {
      const raw = progressStore().getItem(progressKey(QUEST_XP_AWARDED_KEY));
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.date === todayStr()) return parsed.ids || [];
      }
    } catch (e) { /* storage unavailable */ }
    return [];
  }

  function markQuestsAwardedToday(ids) {
    try {
      progressStore().setItem(progressKey(QUEST_XP_AWARDED_KEY), JSON.stringify({ date: todayStr(), ids }));
    } catch (e) { /* storage unavailable */ }
  }

  // Quests complete themselves from real practice activity — there's no
  // checkbox to click — so XP is paid out here instead: whenever a
  // quest's progress has reached its target and hasn't been paid out yet
  // today. Safe to call on every dashboard render.
  function payOutCompletedQuests(quests) {
    const awarded = loadAwardedQuestsToday();
    let changed = false;
    quests.forEach((q) => {
      if (q.count >= q.total && !awarded.includes(q.id)) {
        addXP(q.xp);
        awarded.push(q.id);
        changed = true;
      }
    });
    if (changed) markQuestsAwardedToday(awarded);
  }

  // Turns lifetime XP into a Battle Pass level (capped at the reward
  // track's length) plus progress toward the next level.
  function battlePassProgress(xp) {
    const level = Math.min(BATTLE_PASS_MAX_LEVEL, Math.floor(xp / BATTLE_PASS_XP_PER_LEVEL) + 1);
    const xpIntoLevel = xp - (level - 1) * BATTLE_PASS_XP_PER_LEVEL;
    const maxed = level >= BATTLE_PASS_MAX_LEVEL;
    return {
      level,
      xpIntoLevel: maxed ? BATTLE_PASS_XP_PER_LEVEL : xpIntoLevel,
      xpForNext: BATTLE_PASS_XP_PER_LEVEL,
      progressPct: maxed ? 100 : Math.round((xpIntoLevel / BATTLE_PASS_XP_PER_LEVEL) * 100),
      maxed,
    };
  }

  function rewardLabel(reward) {
    return typeof reward === "string" ? reward : reward.label;
  }

  // One reward slot in a tier column. Free rewards only need the level;
  // Premium rewards need the level AND a Pro upgrade, so a reached-but-
  // not-purchased tier renders as "pending" instead of fully unlocked.
  function bpSlotHTML(lane, reward, levelReached, claimable) {
    const milestone = typeof reward === "object" && reward.milestone;
    const state = claimable ? "unlocked" : levelReached ? "pending" : "locked";
    const icon = state === "unlocked" ? ICON_GIFT : ICON_LOCK_SM;
    return `
      <div class="bp-slot ${lane} ${state} ${milestone ? "milestone" : ""}">
        <div class="bp-slot-icon">${icon}</div>
        <div class="bp-slot-label">${rewardLabel(reward)}</div>
      </div>`;
  }

  function renderBattlePass() {
    const xp = loadXP();
    const progress = battlePassProgress(xp);
    const premium = !!(window.Auth && window.Auth.isPremium());
    const user = window.Auth && window.Auth.getCurrentUser();

    const upsellHTML = premium
      ? ""
      : `
        <div class="lessons-upsell-banner bp-upsell">
          ${ICON_TROPHY}
          <div class="lessons-upsell-text">
            <div class="lessons-upsell-title">Unlock the Premium lane</div>
            <div class="lessons-upsell-sub">Every tier you level also has an exclusive Premium reward — upgrade to claim them as you go.</div>
          </div>
          ${
            user
              ? `<button class="btn btn-primary btn-sm" data-action="upgrade-premium">Upgrade →</button>`
              : `<button class="btn btn-primary btn-sm" data-action="open-auth">Log in →</button>`
          }
        </div>`;

    const previewHTML = progress.maxed
      ? ""
      : `
        <div class="bp-preview-row">
          <div class="bp-preview-card premium">
            <div class="bp-preview-tag">Premium · Tier ${progress.level + 1}</div>
            <div class="bp-preview-body">${ICON_GIFT}<span>${rewardLabel(BATTLE_PASS_PREMIUM_REWARDS[progress.level])}</span></div>
          </div>
          <div class="bp-preview-card free">
            <div class="bp-preview-tag">Free · Tier ${progress.level + 1}</div>
            <div class="bp-preview-body">${ICON_GIFT}<span>${rewardLabel(BATTLE_PASS_FREE_REWARDS[progress.level])}</span></div>
          </div>
        </div>`;

    const trackHTML = BATTLE_PASS_FREE_REWARDS.map((freeReward, i) => {
      const level = i + 1;
      const levelReached = level <= progress.level;
      const current = level === progress.level && !progress.maxed;
      const premiumReward = BATTLE_PASS_PREMIUM_REWARDS[i];
      return `
        <div class="bp-tier-col ${current ? "current" : ""}">
          ${bpSlotHTML("premium", premiumReward, levelReached, levelReached && premium)}
          <div class="bp-tier-node ${levelReached ? "unlocked" : ""}">${level}</div>
          ${bpSlotHTML("free", freeReward, levelReached, levelReached)}
        </div>`;
    }).join("");

    document.getElementById("battlepass").innerHTML = `
      <div class="bp-season-eyebrow">Season 1</div>
      <h1 class="section-title">Battle Pass</h1>
      <p class="section-sub">Earn XP from Today's Quests to level up — every tier unlocks a Free reward, plus a Premium one once you've upgraded.</p>
      ${guestBannerHTML()}
      ${upsellHTML}
      <div class="bp-header">
        <div class="bp-level-badge">${ICON_TROPHY}<span>Level ${progress.level}</span></div>
        <div class="bp-header-progress">
          <div class="badge-progress"><div class="badge-progress-bar" style="width:${progress.progressPct}%"></div></div>
          <div class="badge-next">${
            progress.maxed
              ? "Season complete — more rewards coming soon."
              : `${progress.xpForNext - progress.xpIntoLevel} XP to Level ${progress.level + 1}`
          }</div>
        </div>
        <div class="bp-xp-total">${xp} XP total</div>
      </div>
      ${previewHTML}
      <div class="bp-lane-labels">
        <span class="bp-lane-label premium">${ICON_TROPHY} Premium</span>
        <span class="bp-lane-label free">Free</span>
      </div>
      <div class="bp-track-wrap"><div class="bp-track">${trackHTML}</div></div>
      <div class="results-actions">
        <button class="btn btn-primary" data-nav="dashboard">Earn more XP →</button>
        <button class="btn btn-ghost" data-home>Back to Home</button>
      </div>
    `;

    // Deferred a frame because this runs before show() un-hides the
    // section, so the track has no layout (and thus no scroll width) yet.
    requestAnimationFrame(() => {
      const trackWrap = document.querySelector("#battlepass .bp-track-wrap");
      const currentCol = document.querySelector("#battlepass .bp-tier-col.current");
      if (trackWrap && currentCol) {
        trackWrap.scrollLeft = Math.max(0, currentCol.offsetLeft - trackWrap.clientWidth / 2 + currentCol.clientWidth / 2);
      }
    });
  }

  // Lifetime accuracy, longest correct-answer streak, and answer/session
  // counts for the Dashboard's stats row.
  function computeDashboardStats() {
    let sessions = 0, correct = 0, total = 0;
    try {
      const raw = progressStore().getItem(progressKey(STATS_KEY));
      const s = raw ? JSON.parse(raw) : null;
      if (s) {
        sessions = s.sessions || 0;
        correct = s.correct || 0;
        total = s.total || 0;
      }
    } catch (e) { /* storage unavailable */ }
    return {
      accuracy: total ? Math.round((correct / total) * 100) : null,
      bestCorrectStreak: loadCorrectStreak().best,
      questionsAnswered: loadLifetime().total,
      sessions,
    };
  }

  // The single most useful thing to do right now, in priority order: clear
  // a due redo queue, drill the weakest domain from the last diagnostic,
  // take a first diagnostic if there's no data yet, or just keep moving.
  // Leads the Dashboard instead of a flat stat grid — see everything else
  // on the page as context for this one recommendation, not a list of
  // equally-weighted options.
  function nextBestActionHTML(weakest) {
    const due = dueMistakes().length;
    const hasData = !!loadDiagnosticSummary();
    let title, body, go;
    if (due > 0) {
      title = "Clear your redo queue";
      body = `${due} question${due === 1 ? "" : "s"} you've missed before ${due === 1 ? "is" : "are"} ready to retry — spaced out so they actually stick.`;
      go = `<button type="button" class="btn btn-primary" data-start="mistakeReview">Start redo queue →</button>`;
    } else if (weakest && weakest[0]) {
      const w = weakest[0];
      title = `Focus on ${w.domain}`;
      body = `It's your lowest-scoring area — ${Math.round(w.pct * 100)}% correct on your last diagnostic.`;
      go = `<button type="button" class="btn btn-primary" data-domain-practice="${w.domain}" data-domain-module="${w.module}">Practice →</button>`;
    } else if (!hasData) {
      title = "Take your first diagnostic";
      body = "It gives you a score estimate and tells us exactly what to recommend here next.";
      go = `<button type="button" class="btn btn-primary" data-start="diagnostic">Start Full-Length Test →</button>`;
    } else {
      title = "Keep the streak going";
      body = "Nothing urgent queued right now — a quick mixed session keeps your pace up.";
      go = `<button type="button" class="btn btn-primary" data-start="mixed">Start practicing →</button>`;
    }
    return `
      <div class="next-action-card">
        <span class="eyebrow">Next best action</span>
        <h2>${title}</h2>
        <p>${body}</p>
        ${go}
      </div>`;
  }

  function renderDashboard() {
    const user = window.Auth && window.Auth.getCurrentUser();
    const name = user ? user.name : null;
    const goal = loadGoal();
    const estimate = computeCurrentEstimate();
    const weakest = weakestDomains(3);
    const quests = questDefs();
    payOutCompletedQuests(quests);
    const stats = computeDashboardStats();
    const xp = loadXP();
    const bpProgress = battlePassProgress(xp);

    const goalCardHTML = dashGoalEditing
      ? `
        <form class="dash-goal-form" id="dashGoalForm">
          <input type="number" id="dashGoalInput" min="400" max="1600" step="10" value="${goal}" />
          <button type="submit" class="btn btn-primary btn-small">Save</button>
        </form>`
      : `
        <div class="dash-goal-value">
          ${goal}
          <button type="button" class="dash-goal-edit" data-action="edit-goal" title="Edit your SAT goal">✎</button>
        </div>`;

    const questHTML = quests
      .map((q) => {
        const done = q.count >= q.total;
        return `
        <div class="quest-item ${done ? "done" : ""}">
          <span class="quest-toggle" aria-hidden="true">${done ? ICON_CLIPBOARD_CHECK : ICON_CLIPBOARD}</span>
          <div class="quest-body">
            <span class="quest-text">${q.label}</span>
            <span class="quest-progress">${q.count}/${q.total}</span>
          </div>
          <span class="quest-xp">+${q.xp} XP</span>
          ${q.go}
        </div>`;
      })
      .join("");

    const weakestHTML = weakest.length
      ? `<ol class="weak-list">${weakest.map((c) => `<li>${c.domain}</li>`).join("")}</ol>`
      : `<p class="dash-empty-hint">Take a diagnostic to find your weakest areas.</p>`;

    const statsHTML = `
      <div class="dash-stats-grid">
        <div class="bd-card"><div class="v">${stats.accuracy === null ? "—" : stats.accuracy + "%"}</div><div class="l">Accuracy</div></div>
        <div class="bd-card"><div class="v">${stats.bestCorrectStreak}</div><div class="l">Best correct streak</div></div>
        <div class="bd-card"><div class="v">${stats.questionsAnswered}</div><div class="l">Questions answered</div></div>
        <div class="bd-card"><div class="v">${stats.sessions}</div><div class="l">Sessions completed</div></div>
      </div>`;

    const pacing = computePacingStats();
    const pacingHTML = pacing
      ? `
      <div class="dash-section">
        <h3>Pacing</h3>
        <div class="dash-stats-grid">
          <div class="bd-card"><div class="v">${pacing.avgSec}s</div><div class="l">Avg. time per question</div></div>
          <div class="bd-card"><div class="v">${pacing.rushedAcc === null ? "—" : pacing.rushedAcc + "%"}</div><div class="l">Accuracy under ${PACE_RUSHED_SECONDS}s</div></div>
          <div class="bd-card"><div class="v">${pacing.stalledAcc === null ? "—" : pacing.stalledAcc + "%"}</div><div class="l">Accuracy over ${Math.round(PACE_STALLED_SECONDS / 60)}min</div></div>
        </div>
        <p class="pacing-insight">${pacingInsightSentence(pacing)}</p>
      </div>`
      : "";

    document.getElementById("dashboard").innerHTML = `
      <div class="dash-header">
        <span class="eyebrow">Dashboard</span>
        <h2>${name ? `Welcome back, ${escapeHtml(name)}` : "Welcome"}</h2>
      </div>
      ${guestBannerHTML()}
      ${nextBestActionHTML(weakest)}
      <div class="dash-goals">
        <div class="dash-goal-card">
          <div class="dash-goal-label">SAT Goal</div>
          ${goalCardHTML}
        </div>
        <div class="dash-goal-card">
          <div class="dash-goal-label">Current estimate</div>
          <div class="dash-goal-value estimate">${estimate === null ? "—" : estimate}</div>
          ${estimate === null ? `<div class="dash-goal-hint">Take a diagnostic to see this <button type="button" class="dash-goal-hint-btn" data-start="diagnostic">Start →</button></div>` : ""}
        </div>
      </div>
      <div class="dash-section">
        <div class="dash-section-header">
          <h3>Today's Quests</h3>
          <span class="quest-xp-total">${xp} XP earned</span>
        </div>
        <div class="quest-list">${questHTML}</div>
      </div>
      <button type="button" class="dash-bp-card" data-nav="battlepass">
        <div class="bp-level-badge">${ICON_TROPHY}<span>Level ${bpProgress.level}</span></div>
        <div class="bp-header-progress">
          <div class="badge-progress"><div class="badge-progress-bar" style="width:${bpProgress.progressPct}%"></div></div>
          <div class="badge-next">${
            bpProgress.maxed ? "Max level reached" : `${bpProgress.xpForNext - bpProgress.xpIntoLevel} XP to Level ${bpProgress.level + 1}`
          }</div>
        </div>
        <span class="dash-bp-link">View Battle Pass →</span>
      </button>
      <div class="dash-section">
        <h3>Your weakest areas</h3>
        ${weakestHTML}
      </div>
      <div class="dash-section">
        <h3>Your stats</h3>
        ${statsHTML}
        <button type="button" class="btn btn-ghost btn-sm dash-share-btn" id="dashShareBtn">Share progress →</button>
      </div>
      ${pacingHTML}
    `;

    document.getElementById("dashShareBtn")?.addEventListener("click", openProgressShareCard);
    if (dashGoalEditing) document.getElementById("dashGoalInput")?.focus();
  }

  // Calls out the specific domain(s) a diagnostic went worst on, right at
  // the top of the results screen — the category breakdown below already
  // labels every domain, but this makes the single most useful takeaway
  // ("you did poorest on X") impossible to miss.
  function weakestSectionCalloutHTML(cats) {
    if (!cats.length) return "";
    const scored = cats.map((c) => ({ ...c, pct: c.total ? c.correct / c.total : 0 }));
    const weak = scored.filter((c) => c.pct < 0.75).sort((a, b) => a.pct - b.pct).slice(0, 2);
    if (!weak.length) return "";
    const rows = weak
      .map(
        (c) =>
          `<li><b>${c.domain}</b> — ${c.correct}/${c.total} correct (${Math.round(c.pct * 100)}%)</li>`
      )
      .join("");
    return `
      <div class="weak-callout">
        ${ICON_ALERT}
        <div>
          <div class="weak-callout-title">You did poorest on:</div>
          <ul class="weak-callout-list">${rows}</ul>
        </div>
      </div>`;
  }

  function categoryBreakdownHTML() {
    const cats = computeCategoryBreakdown();
    if (!cats.length) return "";
    const rw = cats.filter((c) => c.module === "rw");
    const math = cats.filter((c) => c.module === "math");

    const row = (c) => {
      const pct = c.total ? c.correct / c.total : 0;
      const level = pct >= 0.9 ? "strong" : pct >= 0.75 ? "mid" : "weak";
      const levelLabel = pct >= 0.9 ? "Strength" : pct >= 0.75 ? "Developing" : "Focus area";
      return `
        <div class="cat-row">
          <div class="cat-row-top">
            <span class="cat-name">${c.domain}</span>
            <span class="cat-frac">${c.correct}/${c.total} · <span class="cat-level ${level}">${levelLabel}</span></span>
          </div>
          <div class="cat-bar"><div class="cat-bar-fill ${level}" style="width:${Math.round(pct * 100)}%"></div></div>
        </div>`;
    };

    const group = (title, list) =>
      list.length ? `<div class="cat-group"><h4>${title}</h4>${list.map(row).join("")}</div>` : "";

    return `
      <div class="category-breakdown">
        <h3 class="section-title" style="font-size:1.2rem;margin-bottom:16px;">Category breakdown</h3>
        <div class="cat-groups">
          ${group("Reading & Writing", rw)}
          ${group("Math", math)}
        </div>
      </div>`;
  }

  // ---- Shareable results card ----
  // Renders a square, social-ready card to a <canvas> — a download/share
  // the student can post themselves, since nothing here can post on their
  // behalf. Drawn fresh each open so it reflects the theme's accent color.
  function drawShareCard(data) {
    const canvas = document.createElement("canvas");
    const size = 1080;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const styles = getComputedStyle(document.documentElement);
    const primary = styles.getPropertyValue("--primary").trim() || "#2e63c8";
    const accent = styles.getPropertyValue("--accent-hover").trim() || "#1f4fa8";

    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, primary);
    grad.addColorStop(1, accent);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.font = "600 34px 'Hanken Grotesk', sans-serif";
    ctx.fillText("SAT ScoreBoost", 72, 100);

    ctx.font = "700 46px 'Hanken Grotesk', sans-serif";
    ctx.fillStyle = "#fff";
    wrapCanvasText(ctx, data.label, 72, 220, size - 144, 54);

    ctx.font = "800 220px 'Newsreader', serif";
    ctx.fillStyle = "#fff";
    ctx.fillText(`${Math.round(data.pct * 100)}%`, 72, 520);

    ctx.font = "500 36px 'Hanken Grotesk', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.88)";
    ctx.fillText(`${data.correct} of ${data.total} correct · est. ${data.overall}`, 72, 580);

    ctx.font = "500 32px 'Hanken Grotesk', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    wrapCanvasText(ctx, data.tagline, 72, 660, size - 144, 42);

    ctx.font = "600 28px 'Hanken Grotesk', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fillText("Free, Bluebook-style SAT practice — scoreboost", 72, size - 72);

    return canvas;
  }

  function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = String(text).split(" ");
    let line = "";
    let curY = y;
    words.forEach((word) => {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        ctx.fillText(line, x, curY);
        line = word;
        curY += lineHeight;
      } else {
        line = test;
      }
    });
    if (line) ctx.fillText(line, x, curY);
  }

  function openShareCard(data) {
    showShareCardModal(drawShareCard(data), "sat-scoreboost-results.png");
  }

  // Shared by the results share card and the progress share card below —
  // wires the preview image, download link, and (where supported) the Web
  // Share API's file-sharing path onto whatever canvas was just drawn.
  function showShareCardModal(canvas, filename) {
    const dataUrl = canvas.toDataURL("image/png");
    const modal = document.getElementById("shareModal");
    const img = document.getElementById("sharePreviewImg");
    img.src = dataUrl;
    const downloadBtn = document.getElementById("shareDownloadBtn");
    downloadBtn.href = dataUrl;
    downloadBtn.download = filename;
    const shareBtn = document.getElementById("shareNativeBtn");
    if (navigator.share && navigator.canShare) {
      canvas.toBlob((blob) => {
        const file = new File([blob], filename, { type: "image/png" });
        if (navigator.canShare({ files: [file] })) {
          shareBtn.classList.remove("hidden");
          shareBtn.onclick = () => navigator.share({ files: [file], title: "SAT ScoreBoost" }).catch(() => {});
        } else {
          shareBtn.classList.add("hidden");
        }
      });
    } else {
      shareBtn.classList.add("hidden");
    }
    modal.classList.remove("hidden");
  }

  // A parent-friendly progress snapshot (streak, accuracy, questions
  // answered, weakest area) — the shareable substitute for a weekly email,
  // since nothing here can actually send mail on the student's behalf.
  function drawProgressShareCard() {
    const canvas = document.createElement("canvas");
    const size = 1080;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const styles = getComputedStyle(document.documentElement);
    const primary = styles.getPropertyValue("--primary").trim() || "#2e63c8";
    const accent = styles.getPropertyValue("--accent-hover").trim() || "#1f4fa8";
    const grad = ctx.createLinearGradient(0, 0, size, size);
    grad.addColorStop(0, primary);
    grad.addColorStop(1, accent);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    const stats = computeDashboardStats();
    const streak = displayStreak(loadStreak());
    const weakest = weakestDomains(1)[0];

    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.font = "600 34px 'Hanken Grotesk', sans-serif";
    ctx.fillText("SAT ScoreBoost — Progress", 72, 100);

    ctx.font = "700 40px 'Hanken Grotesk', sans-serif";
    ctx.fillStyle = "#fff";
    ctx.fillText(`${new Date().toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}`, 72, 170);

    const rows = [
      [`${streak}`, "day streak"],
      [stats.accuracy === null ? "—" : `${stats.accuracy}%`, "accuracy"],
      [`${stats.questionsAnswered}`, "questions answered"],
      [`${stats.sessions}`, "sessions completed"],
    ];
    let y = 320;
    rows.forEach(([value, label]) => {
      ctx.font = "800 90px 'Newsreader', serif";
      ctx.fillStyle = "#fff";
      ctx.fillText(value, 72, y);
      ctx.font = "500 32px 'Hanken Grotesk', sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.82)";
      const valueWidth = ctx.measureText(value).width;
      ctx.font = "800 90px 'Newsreader', serif";
      const bigWidth = ctx.measureText(value).width;
      ctx.font = "500 32px 'Hanken Grotesk', sans-serif";
      ctx.fillText(label, 72 + bigWidth + 18, y - 8);
      y += 110;
    });

    if (weakest) {
      ctx.font = "500 32px 'Hanken Grotesk', sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.92)";
      wrapCanvasText(ctx, `Focus area right now: ${weakest.domain}`, 72, y + 20, size - 144, 42);
    }

    ctx.font = "600 28px 'Hanken Grotesk', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fillText("Free, Bluebook-style SAT practice — scoreboost", 72, size - 72);

    return canvas;
  }

  function openProgressShareCard() {
    showShareCardModal(drawProgressShareCard(), "sat-scoreboost-progress.png");
  }

  function renderResults(r) {
    const { total, correct, wrong, pct, overall, rwScore, mathScore } = r;
    const isDiagnostic = state.module === "diagnostic" || state.module === "full-diagnostic";
    if (isDiagnostic) saveDiagnosticSummary(computeCategoryBreakdown());

    // ring
    const radius = 92;
    const circ = 2 * Math.PI * radius;
    const offset = circ * (1 - pct);
    const ringColor = pct >= 0.75 ? "var(--accent)" : pct >= 0.5 ? "var(--warn)" : "var(--danger)";

    const scoreLabel = state.module === "mixed" || isDiagnostic
      ? `${overall} est. total`
      : `${overall} ${state.categoryLabel || moduleLabel(state.module)}`;

    const sectionScoresHTML = isDiagnostic
      ? `
      <div class="section-scores">
        <div class="bd-card"><div class="v">${rwScore}</div><div class="l">Reading & Writing</div></div>
        <div class="bd-card"><div class="v">${mathScore}</div><div class="l">Math</div></div>
      </div>`
      : "";

    let tagline;
    if (pct >= 0.85) tagline = "Elite work — you're in perfect-score territory.";
    else if (pct >= 0.7) tagline = "Strong performance. A little polish and you're there.";
    else if (pct >= 0.5) tagline = "Solid foundation — target the misses below.";
    else tagline = "Good start. Review the explanations and run it back.";

    const weakCalloutHTML = isDiagnostic ? weakestSectionCalloutHTML(computeCategoryBreakdown()) : "";

    const streakBannerHTML = `
      <button class="results-streak" data-nav="social">
        ${ICON_FLAME} <b>${displayStreak(loadStreak())}</b> day streak
        · ${ICON_NOTE} <b>${loadTodayQuestionCount()}</b> questions answered today
        <span class="results-streak-link">View streak →</span>
      </button>`;

    document.getElementById("results").innerHTML = `
      <div class="score-ring-wrap">
        <div class="score-ring">
          <svg width="220" height="220">
            <circle cx="110" cy="110" r="${radius}" fill="none" stroke="var(--border)" stroke-width="14"/>
            <circle cx="110" cy="110" r="${radius}" fill="none" stroke="${ringColor}" stroke-width="14"
              stroke-linecap="round" stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
              style="transition: stroke-dashoffset 1s ease"/>
          </svg>
          <div class="center">
            <div>
              <div class="big">${Math.round(pct * 100)}%</div>
              <div class="sub">${scoreLabel}</div>
            </div>
          </div>
        </div>
        <h2>${tagline}</h2>
        <p class="tagline">You answered ${correct} of ${total} questions correctly.</p>
      </div>

      ${weakCalloutHTML}

      ${streakBannerHTML}

      ${sectionScoresHTML}

      ${isDiagnostic ? categoryBreakdownHTML() : ""}

      <div class="breakdown">
        <div class="bd-card correct"><div class="v">${correct}</div><div class="l">Correct</div></div>
        <div class="bd-card wrong"><div class="v">${wrong}</div><div class="l">Incorrect</div></div>
        <div class="bd-card"><div class="v">${overall}</div><div class="l">Est. score</div></div>
      </div>

      <h3 class="section-title" style="font-size:1.2rem;margin-bottom:16px;">Question review</h3>
      <div class="review-list" id="reviewList"></div>

      <div class="results-actions">
        <button class="btn btn-primary" id="retryBtn">${
          state.module === "full-diagnostic" ? "Retake Full Scale Test" : isDiagnostic ? "Retake Full-Length Test" : "Try Again"
        }</button>
        ${isDiagnostic ? `<button class="btn btn-ghost" data-nav="studyPlan">View Study Plan →</button>` : ""}
        <button class="btn btn-ghost" id="shareResultsBtn">Share →</button>
        <button class="btn btn-ghost" id="homeBtn">Back to Home</button>
      </div>
    `;

    document.getElementById("shareResultsBtn")?.addEventListener("click", () => {
      openShareCard({ pct, overall, correct, total, label: scoreLabel, tagline });
    });

    const list = document.getElementById("reviewList");
    // Group by SAT subsection (the CB domain) rather than answer order, so
    // students can see at a glance which subsections cost them points.
    const byDomain = {};
    state.questions.forEach((q, i) => {
      (byDomain[q.domain] || (byDomain[q.domain] = [])).push(i);
    });
    const domainsPresent = CATEGORY_ORDER.filter((d) => byDomain[d]);
    Object.keys(byDomain).forEach((d) => {
      if (!domainsPresent.includes(d)) domainsPresent.push(d);
    });

    list.innerHTML = domainsPresent
      .map((domain) => {
        const indices = byDomain[domain];
        const correctCount = indices.filter((i) => state.answers[i] === state.questions[i].answer).length;
        const itemsHTML = indices
          .map((i) => {
            const q = state.questions[i];
            const sel = state.answers[i];
            const ok = sel === q.answer;
            const letters = ["A", "B", "C", "D"];
            const yourAns = sel === undefined ? "Skipped" : letters[sel];
            return `
              <div class="review-item" data-review="${i}">
                <div class="status ${ok ? "ok" : "no"}">${ok ? "✓" : "✕"}</div>
                <div class="rq">
                  <div>${q.prompt.length > 90 ? q.prompt.slice(0, 90) + "…" : q.prompt}</div>
                  <div class="rskill">${q.skill} · Your answer: ${yourAns} · Correct: ${letters[q.answer]}</div>
                </div>
              </div>`;
          })
          .join("");
        return `
          <div class="review-group">
            <div class="review-group-header">
              <h4>${domain}</h4>
              <span class="review-group-count">${correctCount}/${indices.length} correct</span>
            </div>
            <div class="review-group-items">${itemsHTML}</div>
          </div>`;
      })
      .join("");

    // review click -> jump back into that question with feedback
    list.querySelectorAll(".review-item").forEach((it) => {
      it.addEventListener("click", () => {
        const i = Number(it.dataset.review);
        state.reviewMode = true;
        state.current = i;
        if (state.answers[i] !== undefined) state.checked[i] = true;
        ensureCurrentVisible();
        show("exam");
        renderQuestion();
        renderFooter();
      });
    });

    document.getElementById("retryBtn").addEventListener("click", () => {
      if (state.module === "full-diagnostic") startFullDiagnostic();
      else if (state.module === "diagnostic") startDiagnostic();
      else if (state.categoryDomain) startBankCategory(state.module, state.categoryDomain, state.categoryLabel);
      else startModule(state.module);
    });
    document.getElementById("homeBtn").addEventListener("click", goHome);
  }

  // ---- Daily streak (logged in AND answered a question that day) ----
  const DAILY_QUESTIONS_KEY = "sat_daily_questions";

  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function addDaysStr(dateStr, delta) {
    const [y, m, d] = dateStr.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    dt.setDate(dt.getDate() + delta);
    return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(dt.getDate()).padStart(2, "0")}`;
  }

  function defaultStreak() {
    return { current: 0, best: 0, lastDate: null, dates: [] };
  }

  function loadStreak() {
    try {
      const raw = progressStore().getItem(progressKey(STREAK_KEY));
      if (raw) return { ...defaultStreak(), ...JSON.parse(raw) };
    } catch (e) { /* storage unavailable */ }
    return defaultStreak();
  }

  function saveStreak(streak) {
    try {
      progressStore().setItem(progressKey(STREAK_KEY), JSON.stringify(streak));
    } catch (e) { /* storage unavailable */ }
  }

  // The streak is still "alive" if it was last bumped today or yesterday;
  // otherwise a day was missed and the current streak has reset to 0.
  function displayStreak(entry) {
    if (!entry.lastDate) return 0;
    const today = todayStr();
    if (entry.lastDate === today || entry.lastDate === addDaysStr(today, -1)) {
      return entry.current;
    }
    return 0;
  }

  function loadTodayQuestionCount() {
    try {
      const raw = progressStore().getItem(progressKey(DAILY_QUESTIONS_KEY));
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.date === todayStr()) return parsed.count || 0;
      }
    } catch (e) { /* storage unavailable */ }
    return 0;
  }

  // Called every time the user answers a question — bumps today's question
  // count and, on the first question of the day, extends the streak. Guests
  // get this tracked for the current tab only (sessionStorage); logging in
  // persists it across visits (localStorage, scoped to the account).
  function recordQuestionAnswered() {
    const today = todayStr();
    try {
      progressStore().setItem(
        progressKey(DAILY_QUESTIONS_KEY),
        JSON.stringify({ date: today, count: loadTodayQuestionCount() + 1 })
      );
    } catch (e) { /* storage unavailable */ }

    const streak = loadStreak();
    if (streak.lastDate !== today) {
      streak.current = streak.lastDate === addDaysStr(today, -1) ? streak.current + 1 : 1;
      streak.best = Math.max(streak.best || 0, streak.current);
      streak.lastDate = today;
    }
    if (!streak.dates.includes(today)) {
      streak.dates.push(today);
      if (streak.dates.length > STREAK_HISTORY_DAYS) {
        streak.dates = streak.dates.slice(-STREAK_HISTORY_DAYS);
      }
    }
    saveStreak(streak);
  }

  // ---- Longest run of consecutive correct answers ----
  function defaultCorrectStreak() {
    return { current: 0, best: 0 };
  }

  function loadCorrectStreak() {
    try {
      const raw = progressStore().getItem(progressKey(CORRECT_STREAK_KEY));
      if (raw) return { ...defaultCorrectStreak(), ...JSON.parse(raw) };
    } catch (e) { /* storage unavailable */ }
    return defaultCorrectStreak();
  }

  function recordCorrectStreak(isCorrect) {
    const s = loadCorrectStreak();
    if (isCorrect) {
      s.current++;
      s.best = Math.max(s.best, s.current);
    } else {
      s.current = 0;
    }
    try {
      progressStore().setItem(progressKey(CORRECT_STREAK_KEY), JSON.stringify(s));
    } catch (e) { /* storage unavailable */ }
  }

  // ---- Lifetime answer counts (for badges) ----
  function defaultLifetime() {
    return { total: 0, rw: 0, math: 0 };
  }

  function loadLifetime() {
    try {
      const raw = progressStore().getItem(progressKey(LIFETIME_KEY));
      if (raw) return { ...defaultLifetime(), ...JSON.parse(raw) };
    } catch (e) { /* storage unavailable */ }
    return defaultLifetime();
  }

  // Tallies this session's actually-answered (non-skipped) questions by
  // subject and folds them into the running lifetime totals.
  function recordLifetimeAnswers() {
    const lifetime = loadLifetime();
    state.questions.forEach((q, i) => {
      if (state.answers[i] === undefined) return;
      lifetime.total++;
      if (q.module === "rw") lifetime.rw++;
      else if (q.module === "math") lifetime.math++;
    });
    try {
      progressStore().setItem(progressKey(LIFETIME_KEY), JSON.stringify(lifetime));
    } catch (e) { /* storage unavailable */ }
  }

  // ---- Badges ----
  // Highest tier index reached for `value` against an ascending `tiers`
  // list, or -1 if the first tier hasn't been reached yet.
  function tierIndexFor(value, tiers) {
    let idx = -1;
    for (let i = 0; i < tiers.length; i++) {
      if (value >= tiers[i]) idx = i;
    }
    return idx;
  }

  const ICON_CALCULATOR = `<svg class="badge-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`;
  const ICON_BOOK = `<svg class="badge-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>`;
  const ICON_QUESTION = `<svg class="badge-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`;
  const ICON_FLAME = `<svg class="badge-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`;
  const ICON_LOCK = `<svg class="badge-medal-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
  const ICON_LOCK_SM = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
  const ICON_CLIPBOARD = `<svg class="quest-icon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`;
  const ICON_CLIPBOARD_CHECK = `<svg class="quest-icon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>`;
  const ICON_NOTE = `<svg class="menu-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>`;
  const ICON_ALERT = `<svg class="menu-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`;
  const ICON_GRADCAP = `<svg class="menu-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/></svg>`;
  const ICON_CHAT = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
  const ICON_SWORD = `<svg class="badge-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 17.5 3 6V3h3l11.5 11.5"/><path d="m13 19 6-6"/><path d="m16 16 4 4"/><path d="m19 21 2-2"/></svg>`;
  const ICON_SHIELD = `<svg class="badge-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`;
  const ICON_COIN = `<svg class="badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 7v10"/><path d="M9.5 9.5c0-1.1 1.1-2 2.5-2s2.5.8 2.5 1.8c0 2.4-5 1.4-5 4 0 1 1.1 1.8 2.5 1.8s2.5-.9 2.5-2"/></svg>`;
  const ICON_SKULL = `<svg class="badge-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M8 20v2h8v-2"/><path d="M12.5 17h-1a7 7 0 1 1 6.17-3.65A1.7 1.7 0 0 0 17 14.84v1.14a1 1 0 0 1-1 1h-.17a1.7 1.7 0 0 0-1.63 1.2l-.5 1.66a1 1 0 0 1-.96.72h-.48a1 1 0 0 1-.96-.72l-.5-1.66a1.7 1.7 0 0 0-1.63-1.2H8.2a1 1 0 0 1-1-1v-1.14a1.7 1.7 0 0 0-.67-1.49A7 7 0 1 1 12.5 17"/></svg>`;
  const ICON_ROBOT = `<svg class="badge-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`;
  const ICON_BUILDING = `<svg class="badge-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`;

  function medalIcon(size, color) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`;
  }

  function badgeCardHTML(icon, label, value, valueLabel, tiers) {
    const idx = tierIndexFor(value, tiers);
    const tier = idx >= 0 ? TIER_META[idx] : null;
    const nextTier = idx + 1 < tiers.length ? tiers[idx + 1] : null;
    const floor = idx >= 0 ? tiers[idx] : 0;
    const progressPct = nextTier
      ? Math.min(100, Math.round(((value - floor) / (nextTier - floor)) * 100))
      : 100;

    const dotsHTML = tiers
      .map((t, i) => {
        const unlocked = i <= idx;
        return `<span class="badge-dot ${unlocked ? "unlocked" : ""}" title="${TIER_META[i].name}: ${t}">${medalIcon(15, TIER_META[i].color)}</span>`;
      })
      .join("");

    return `
      <div class="badge-card">
        <div class="badge-top">
          <div class="badge-medal ${tier ? "" : "locked"}">${tier ? medalIcon(22, tier.color) : ICON_LOCK}</div>
          <div>
            <div class="badge-title">${icon} ${label}</div>
            <div class="badge-tier">${tier ? tier.name : "Unranked"}</div>
          </div>
        </div>
        <div class="badge-value">${value} ${valueLabel}</div>
        <div class="badge-progress"><div class="badge-progress-bar" style="width:${progressPct}%"></div></div>
        <div class="badge-next">${nextTier ? `${nextTier - value} more to ${TIER_META[idx + 1].name}` : "Max tier reached!"}</div>
        <div class="badge-dots">${dotsHTML}</div>
      </div>`;
  }

  function weekHTML(entry) {
    const today = todayStr();
    const cells = [];
    for (let i = 6; i >= 0; i--) {
      const day = addDaysStr(today, -i);
      const active = entry.dates.includes(day);
      const label = new Date(day + "T00:00:00").toLocaleDateString(undefined, { weekday: "narrow" });
      cells.push(`<div class="cal-day ${active ? "active" : ""}" title="${day}">${label}</div>`);
    }
    return cells.join("");
  }

  function guestBannerHTML() {
    if (window.Auth && window.Auth.getCurrentUser()) return "";
    return `
      <div class="guest-banner">
        <span>You're browsing as a guest — this progress disappears when you close the tab.</span>
        <button type="button" class="btn btn-primary btn-sm" data-action="open-auth">Log in to save it</button>
      </div>`;
  }

  function renderSocial() {
    const streak = loadStreak();
    const current = displayStreak(streak);
    const todayCount = loadTodayQuestionCount();

    let sessions = 0, acc = 0;
    try {
      const raw = progressStore().getItem(progressKey(STATS_KEY));
      const s = raw ? JSON.parse(raw) : { sessions: 0, correct: 0, total: 0 };
      sessions = s.sessions || 0;
      acc = s.total ? Math.round((s.correct / s.total) * 100) : 0;
    } catch (e) { /* localStorage unavailable */ }

    document.getElementById("social").innerHTML = `
      <h1 class="section-title">Your streak</h1>
      <p class="section-sub">Answer at least one question every day to keep your streak alive.</p>
      ${guestBannerHTML()}
      <div class="streak-grid">
        <div class="streak-card">
          <div class="streak-icon">${ICON_FLAME}</div>
          <div class="streak-num">${current}</div>
          <div class="streak-label">Day streak</div>
          <div class="streak-best">Best: ${streak.best || 0} day${streak.best === 1 ? "" : "s"}</div>
          <div class="cal-row">${weekHTML(streak)}</div>
        </div>
        <div class="streak-card">
          <div class="streak-icon">${ICON_NOTE}</div>
          <div class="streak-num">${todayCount}</div>
          <div class="streak-label">Questions answered today</div>
          <div class="streak-best">${todayCount > 0 ? "Nice work — keep it up!" : "Answer a question to extend your streak"}</div>
        </div>
      </div>
      <div class="breakdown">
        <div class="bd-card"><div class="v">${sessions}</div><div class="l">Sessions completed</div></div>
        <div class="bd-card"><div class="v">${acc}%</div><div class="l">Lifetime accuracy</div></div>
      </div>
      <div class="results-actions">
        <button class="btn btn-primary" data-start="mixed">Keep the streak alive →</button>
        <button class="btn btn-ghost" data-home>Back to Home</button>
      </div>
    `;
  }

  function renderBadges() {
    const streak = loadStreak();
    const lifetime = loadLifetime();

    const badgesHTML = [
      badgeCardHTML(ICON_QUESTION, "Total Questions", lifetime.total, "answered", QUESTION_TIERS),
      badgeCardHTML(ICON_CALCULATOR, "Math", lifetime.math, "answered", QUESTION_TIERS),
      badgeCardHTML(ICON_BOOK, "Reading & Writing", lifetime.rw, "answered", QUESTION_TIERS),
      badgeCardHTML(ICON_FLAME, "Streak", streak.best || 0, `day${streak.best === 1 ? "" : "s"} (best)`, STREAK_TIERS),
    ].join("");

    document.getElementById("badges").innerHTML = `
      <h1 class="section-title">Your badges</h1>
      <p class="section-sub">Level up by answering more questions and building your streak.</p>
      ${guestBannerHTML()}
      <div class="badge-grid">${badgesHTML}</div>
      <div class="results-actions">
        <button class="btn btn-ghost" data-home>Back to Home</button>
      </div>
    `;
  }

  function closeProfileMenu() {
    document.getElementById("profileDropdown").classList.add("hidden");
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str == null ? "" : String(str);
    return div.innerHTML;
  }

  // Swaps the regular spaces around a math operator for non-breaking ones,
  // so a line wrap can't land between "2x +" and "y = -9" mid-expression —
  // question text has no markup to hang a <span> on, so this is the
  // lightest fix that doesn't touch the content files themselves.
  function nbspMath(str) {
    if (str == null) return "";
    return String(str).replace(/ ([=+\-−×÷≤≥<>]) /g, " $1 ");
  }

  // Renders a plain "1/5" as a stacked numerator/denominator, the way the
  // real test typesets fractions — short of pulling in a full math
  // typesetting library, this covers the vast majority of this content
  // (simple integer fractions), which is what the review flagged.
  function stackFractions(str) {
    if (str == null) return "";
    return String(str).replace(
      /\b(\d+)\/(\d+)\b/g,
      '<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>'
    );
  }

  function formatMathText(str) {
    return stackFractions(nbspMath(str));
  }

  // A small fixed palette for the initials avatar's background — picked
  // deterministically from the user's email so it's stable across
  // sessions/devices even before they ever choose one themselves.
  const AVATAR_COLORS = ["#3b82f6", "#10b981", "#8b5cf6", "#f43f5e", "#f97316", "#14b8a6", "#eab308", "#64748b"];

  function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash = (hash * 31 + str.charCodeAt(i)) | 0;
    return Math.abs(hash);
  }

  function defaultAvatarColor(user) {
    return AVATAR_COLORS[hashString(user.email || user.name || "") % AVATAR_COLORS.length];
  }

  // Renders the account's avatar at a given pixel size: the uploaded photo
  // if there is one, otherwise a colored circle with the user's first
  // initial (their own chosen color, or a stable default derived from
  // their email).
  function avatarHTML(user, size) {
    if (user.avatarUrl) {
      return `<img class="avatar-circle" src="${escapeHtml(user.avatarUrl)}" alt="" style="width:${size}px;height:${size}px;font-size:${Math.round(size * 0.42)}px" />`;
    }
    const initial = (user.name || user.email || "?").trim().charAt(0).toUpperCase();
    const color = user.avatarColor || defaultAvatarColor(user);
    return `<div class="avatar-circle avatar-initials" style="width:${size}px;height:${size}px;font-size:${Math.round(size * 0.42)}px;background:${color}">${escapeHtml(initial)}</div>`;
  }

  // Corner auth control: a "Log in" CTA when signed out, the account's
  // avatar (opens the account dropdown) when signed in.
  function renderProfileToggle() {
    const user = window.Auth && window.Auth.getCurrentUser();
    const toggle = document.getElementById("profileToggle");
    if (user) {
      toggle.className = "profile-toggle profile-avatar-btn";
      toggle.removeAttribute("data-action");
      toggle.title = user.name || user.email;
      toggle.innerHTML = avatarHTML(user, 36);
    } else {
      toggle.className = "profile-toggle btn btn-primary btn-sm";
      toggle.dataset.action = "open-auth";
      toggle.removeAttribute("title");
      toggle.textContent = "Log in";
    }
  }

  const ICON_FIRE = `
    <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M15.36 5.21A8.25 8.25 0 0 1 12 21a8.25 8.25 0 0 1-5.96-13.95A8.29 8.29 0 0 0 9 9.6a9 9 0 0 1 3.36-6.87 8.21 8.21 0 0 0 3 2.48Z" />
      <path d="M12 18a3.75 3.75 0 0 0 .5-7.47 6 6 0 0 0-1.93 3.55 6 6 0 0 1-2.13-1A3.75 3.75 0 0 0 12 18Z" />
    </svg>`;
  const ICON_BADGE = `
    <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 7 21l5-3 5 3-2-7.5" />
    </svg>`;
  const ICON_TROPHY = `
    <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M8 21h8" /><path d="M12 17v4" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
      <path d="M7 5H4a1 1 0 0 0-1 1v1a4 4 0 0 0 4 4" />
      <path d="M17 5h3a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4" />
    </svg>`;
  const ICON_GIFT = `
    <svg class="badge-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </svg>`;
  const ICON_USER = `
    <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.4-4.2 4.7-6.5 8-6.5s6.6 2.3 8 6.5" />
    </svg>`;

  const ICON_USERS = `
    <svg class="menu-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3.3" />
      <path d="M2.5 19c1.1-3.4 3.6-5.2 6.5-5.2s5.4 1.8 6.5 5.2" />
      <path d="M15.5 8.3a3 3 0 1 1 3.6 2.95" />
      <path d="M15 13.9c2.5.2 4.5 1.9 5.5 5.1" />
    </svg>`;

  function renderProfileMenu() {
    const user = window.Auth && window.Auth.getCurrentUser();
    const dropdown = document.getElementById("profileDropdown");
    const userHTML = user
      ? `
        <div class="profile-user">
          ${avatarHTML(user, 40)}
          <div class="profile-user-text">
            <div class="profile-user-name">${escapeHtml(user.name)}</div>
            <div class="profile-user-email">${escapeHtml(user.email)}</div>
          </div>
        </div>`
      : "";
    const logoutHTML = user
      ? `<button class="profile-menu-item" data-action="logout">Log out</button>`
      : "";

    dropdown.innerHTML = `
      ${userHTML}
      <button class="profile-menu-item" data-nav="profile">Edit Profile ${ICON_USER}</button>
      <button class="profile-menu-item" data-nav="social">Streak &amp; Stats ${ICON_FIRE}</button>
      <button class="profile-menu-item" data-nav="badges">Badges ${ICON_BADGE}</button>
      <button class="profile-menu-item" data-nav="battlepass">Battle Pass ${ICON_TROPHY}</button>
      <button class="profile-menu-item" data-nav="classroom">Classroom ${ICON_USERS}</button>
      <div class="profile-divider"></div>
      ${logoutHTML}
    `;
  }

  const ICON_SUN = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`;
  const ICON_MOON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>`;

  function renderThemeToggle() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    btn.innerHTML = getTheme() === "dark" ? ICON_MOON : ICON_SUN;
  }

  // Reads an image file, downscales it to fit within maxSize×maxSize (never
  // upscales), and resolves a compact JPEG data URL — keeps avatars small
  // enough to live comfortably in localStorage and in a Supabase text column.
  function resizeImageFile(file, maxSize) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("Couldn't read that file."));
      reader.onload = () => {
        const img = new Image();
        img.onerror = () => reject(new Error("That doesn't look like a valid image."));
        img.onload = () => {
          const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
          const w = Math.max(1, Math.round(img.width * scale));
          const h = Math.max(1, Math.round(img.height * scale));
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          canvas.getContext("2d").drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL("image/jpeg", 0.85));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // ---- Profile ----
  // ---- Classrooms ----
  // A roster, not a role system: any signed-in user can create a classroom
  // and share its join code; anyone who joins shows up on the roster. See
  // supabase/schema.sql for the classrooms/classroom_members tables and
  // RLS this needs — it must be run in the Supabase SQL editor before any
  // of this works (classrooms created before that will just error).
  let activeClassroomId = null;

  function generateJoinCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I
    let code = "";
    for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
  }

  async function createClassroom(name) {
    const user = window.Auth && window.Auth.getCurrentUser();
    if (!user || !user.id || !window.supabaseClient) {
      return { ok: false, error: "Classrooms need a real account — log in first." };
    }
    if (!name) return { ok: false, error: "Give your classroom a name." };
    const { error } = await window.supabaseClient
      .from("classrooms")
      .insert({ owner_id: user.id, name, join_code: generateJoinCode() });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  }

  async function joinClassroomByCode(code) {
    const user = window.Auth && window.Auth.getCurrentUser();
    if (!user || !user.id || !window.supabaseClient) {
      return { ok: false, error: "Classrooms need a real account — log in first." };
    }
    const { data: found, error: findError } = await window.supabaseClient
      .from("classrooms")
      .select("id, name")
      .eq("join_code", (code || "").trim().toUpperCase())
      .maybeSingle();
    if (findError) return { ok: false, error: findError.message };
    if (!found) return { ok: false, error: "No classroom found with that code." };
    const { error } = await window.supabaseClient
      .from("classroom_members")
      .insert({ classroom_id: found.id, student_id: user.id });
    if (error) {
      return {
        ok: false,
        error: /duplicate key|already exists/i.test(error.message) ? "You've already joined this classroom." : error.message,
      };
    }
    return { ok: true, classroom: found };
  }

  async function loadOwnedClassrooms() {
    const user = window.Auth && window.Auth.getCurrentUser();
    if (!user || !user.id || !window.supabaseClient) return [];
    const { data, error } = await window.supabaseClient
      .from("classrooms")
      .select("id, name, join_code, created_at")
      .eq("owner_id", user.id)
      .order("created_at", { ascending: false });
    return error ? [] : data || [];
  }

  async function loadJoinedClassrooms() {
    const user = window.Auth && window.Auth.getCurrentUser();
    if (!user || !user.id || !window.supabaseClient) return [];
    const { data, error } = await window.supabaseClient
      .from("classroom_members")
      .select("joined_at, classrooms(id, name, join_code)")
      .eq("student_id", user.id)
      .order("joined_at", { ascending: false });
    return error ? [] : data || [];
  }

  async function loadRoster(classroomId) {
    if (!window.supabaseClient) return [];
    const { data, error } = await window.supabaseClient
      .from("classroom_members")
      .select("joined_at, profiles(name, email)")
      .eq("classroom_id", classroomId)
      .order("joined_at", { ascending: true });
    return error ? [] : data || [];
  }

  async function renderClassroom() {
    const el = document.getElementById("classroom");
    const user = window.Auth && window.Auth.getCurrentUser();
    if (!user) {
      el.innerHTML = `
        <span class="eyebrow">Classroom</span>
        <h1 class="section-title">You're not logged in</h1>
        <p class="section-sub">Classrooms need a real account so a join code actually means something — log in or sign up first.</p>
        <div class="results-actions">
          <button class="btn btn-primary" data-action="open-auth">Log in →</button>
        </div>
      `;
      return;
    }

    el.innerHTML = `<span class="eyebrow">Classroom</span><h1 class="section-title">Loading…</h1>`;

    if (activeClassroomId) {
      const [roster, owned] = await Promise.all([loadRoster(activeClassroomId), loadOwnedClassrooms()]);
      const classroom = owned.find((c) => c.id === activeClassroomId);
      if (!classroom) {
        activeClassroomId = null;
        renderClassroom();
        return;
      }
      el.innerHTML = `
        <button class="lesson-back" data-classroom-back>← Back to Classrooms</button>
        <span class="eyebrow">Classroom</span>
        <h1 class="section-title">${escapeHtml(classroom.name)}</h1>
        <p class="section-sub">Join code: <span class="classroom-code">${classroom.join_code}</span> — share it with your students.</p>
        <div class="classroom-list">
          ${
            roster.length
              ? roster
                  .map(
                    (m) => `
              <div class="classroom-card">
                <div>
                  <div class="classroom-card-title">${escapeHtml((m.profiles && m.profiles.name) || "Unnamed student")}</div>
                  <div class="classroom-card-sub">${escapeHtml((m.profiles && m.profiles.email) || "")} · joined ${timeAgo(m.joined_at)}</div>
                </div>
              </div>`
                  )
                  .join("")
              : `<p class="section-sub">No students have joined yet — share the code above.</p>`
          }
        </div>
        <p class="classroom-note">Per-student progress and accuracy aren't synced here yet — this shows who's enrolled, not their scores.</p>
      `;
      document.querySelector("[data-classroom-back]")?.addEventListener("click", () => {
        activeClassroomId = null;
        renderClassroom();
      });
      return;
    }

    const [owned, joined] = await Promise.all([loadOwnedClassrooms(), loadJoinedClassrooms()]);

    const ownedHTML = owned.length
      ? owned
          .map(
            (c) => `
          <div class="classroom-card">
            <div>
              <div class="classroom-card-title">${escapeHtml(c.name)}</div>
              <div class="classroom-card-sub">Join code: <span class="classroom-code">${c.join_code}</span></div>
            </div>
            <button type="button" class="btn btn-ghost btn-small" data-classroom-view="${c.id}">View roster →</button>
          </div>`
          )
          .join("")
      : `<p class="section-sub">You haven't created a classroom yet.</p>`;

    const joinedHTML = joined.length
      ? joined
          .map(
            (m) => `
          <div class="classroom-card">
            <div>
              <div class="classroom-card-title">${escapeHtml((m.classrooms && m.classrooms.name) || "Classroom")}</div>
              <div class="classroom-card-sub">Joined ${timeAgo(m.joined_at)}</div>
            </div>
          </div>`
          )
          .join("")
      : `<p class="section-sub">You haven't joined a classroom yet.</p>`;

    el.innerHTML = `
      <span class="eyebrow">Classroom</span>
      <h1 class="section-title">Classrooms</h1>
      <p class="section-sub">Create a classroom to get a join code for your students, or join one with a code a teacher gave you.</p>

      <div class="classroom-section">
        <h3>Your classrooms</h3>
        <div class="classroom-list">${ownedHTML}</div>
        <form class="classroom-form" id="createClassroomForm">
          <input type="text" id="createClassroomName" placeholder="Classroom name (e.g. 3rd Period SAT Prep)" required maxlength="60" />
          <button type="submit" class="btn btn-primary btn-small">Create classroom</button>
        </form>
        <div class="auth-error hidden" id="createClassroomError"></div>
      </div>

      <div class="classroom-section">
        <h3>Classes you've joined</h3>
        <div class="classroom-list">${joinedHTML}</div>
        <form class="classroom-form" id="joinClassroomForm">
          <input type="text" id="joinClassroomCode" placeholder="Join code" required maxlength="8" />
          <button type="submit" class="btn btn-ghost btn-small">Join classroom</button>
        </form>
        <div class="auth-error hidden" id="joinClassroomError"></div>
      </div>
    `;

    document.querySelectorAll("[data-classroom-view]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeClassroomId = btn.dataset.classroomView;
        renderClassroom();
      });
    });

    document.getElementById("createClassroomForm")?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("createClassroomName");
      const errorEl = document.getElementById("createClassroomError");
      errorEl.classList.add("hidden");
      const result = await createClassroom(nameInput.value.trim());
      if (!result.ok) {
        errorEl.textContent = result.error;
        errorEl.classList.remove("hidden");
        return;
      }
      renderClassroom();
    });

    document.getElementById("joinClassroomForm")?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const codeInput = document.getElementById("joinClassroomCode");
      const errorEl = document.getElementById("joinClassroomError");
      errorEl.classList.add("hidden");
      const result = await joinClassroomByCode(codeInput.value);
      if (!result.ok) {
        errorEl.textContent = result.error;
        errorEl.classList.remove("hidden");
        return;
      }
      renderClassroom();
    });
  }

  function renderProfile() {
    const user = window.Auth && window.Auth.getCurrentUser();
    const el = document.getElementById("profile");
    if (!user) {
      el.innerHTML = `
        <span class="eyebrow">Profile</span>
        <h1 class="section-title">You're not logged in</h1>
        <p class="section-sub">Log in to edit your profile.</p>
        <div class="results-actions">
          <button class="btn btn-primary" data-action="open-auth">Log in →</button>
        </div>
      `;
      return;
    }

    const premium = !!(window.Auth && window.Auth.isPremium());
    const memberSince = user.createdAt
      ? new Date(user.createdAt).toLocaleDateString(undefined, { year: "numeric", month: "long" })
      : null;
    const providerLabel = user.provider === "google" ? "Google account" : "Email &amp; password (demo)";
    const activeColor = user.avatarColor || defaultAvatarColor(user);

    const swatchesHTML = AVATAR_COLORS.map(
      (c) =>
        `<button type="button" class="avatar-swatch ${c === activeColor ? "active" : ""}" style="background:${c}" data-avatar-color="${c}" aria-label="Choose avatar color"></button>`
    ).join("");

    el.innerHTML = `
      <span class="eyebrow">Profile</span>
      <h1 class="section-title">Your profile</h1>
      <p class="section-sub">Update your photo, name, and plan.</p>

      <div class="profile-card">
        <div class="profile-avatar-row">
          ${avatarHTML(user, 96)}
          <div class="profile-avatar-actions">
            <label class="btn btn-ghost btn-sm profile-upload-btn">
              Upload photo
              <input type="file" accept="image/*" id="profileAvatarInput" hidden />
            </label>
            ${user.avatarUrl ? `<button type="button" class="btn btn-ghost btn-sm" data-remove-avatar>Remove photo</button>` : ""}
          </div>
        </div>
        <div class="auth-error hidden" id="profileAvatarError"></div>
        <p class="profile-field-label">Avatar color (shown when there's no photo)</p>
        <div class="profile-swatches">${swatchesHTML}</div>
      </div>

      <div class="profile-card">
        <form id="profileNameForm" class="profile-form">
          <label class="field">
            <span>Display name</span>
            <input type="text" id="profileNameInput" value="${escapeHtml(user.name)}" required />
          </label>
          <label class="field">
            <span>Email</span>
            <input type="text" value="${escapeHtml(user.email)}" disabled />
          </label>
          <div class="auth-error hidden" id="profileNameStatus"></div>
          <button type="submit" class="btn btn-primary btn-sm">Save changes</button>
        </form>
        <p class="profile-meta">${providerLabel}${memberSince ? ` · Member since ${memberSince}` : ""}</p>
      </div>

      <div class="profile-card profile-plan-card">
        <div>
          <div class="profile-field-label">Plan</div>
          <div class="profile-plan-badge ${premium ? "premium" : ""}">${premium ? "ScoreBoost Pro" : "Free"}</div>
        </div>
        ${premium ? "" : `<button class="btn btn-primary btn-sm" data-action="upgrade-premium">Upgrade →</button>`}
      </div>

      <div class="results-actions profile-actions">
        <button class="btn btn-ghost" data-action="logout">Log out</button>
      </div>
    `;

    const fileInput = document.getElementById("profileAvatarInput");
    if (fileInput) {
      fileInput.addEventListener("change", async () => {
        const file = fileInput.files && fileInput.files[0];
        fileInput.value = "";
        if (!file) return;
        const errEl = document.getElementById("profileAvatarError");
        if (!file.type.startsWith("image/")) {
          errEl.textContent = "Please choose an image file.";
          errEl.classList.remove("hidden");
          return;
        }
        try {
          const dataUrl = await resizeImageFile(file, 256);
          const res = await window.Auth.updateAvatar(dataUrl);
          if (!res.ok) throw new Error(res.error || "Couldn't save that photo.");
          errEl.classList.add("hidden");
          afterAuthChange();
        } catch (e) {
          errEl.textContent = e.message || "Couldn't process that image.";
          errEl.classList.remove("hidden");
        }
      });
    }

    document.querySelectorAll("[data-avatar-color]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        await window.Auth.setAvatarColor(btn.dataset.avatarColor);
        afterAuthChange();
      });
    });

    const removeBtn = document.querySelector("[data-remove-avatar]");
    if (removeBtn) {
      removeBtn.addEventListener("click", async () => {
        await window.Auth.removeAvatar();
        afterAuthChange();
      });
    }

    const nameForm = document.getElementById("profileNameForm");
    if (nameForm) {
      nameForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const input = document.getElementById("profileNameInput");
        const statusEl = document.getElementById("profileNameStatus");
        const res = await window.Auth.updateName(input.value);
        if (!res.ok) {
          statusEl.textContent = res.error;
          statusEl.classList.remove("hidden");
          return;
        }
        statusEl.classList.add("hidden");
        afterAuthChange();
      });
    }
  }

  // ---- Auth modal ----
  let authMode = "login";

  function updateAuthModeUI() {
    const isSignup = authMode === "signup";
    document.getElementById("authTitle").textContent = isSignup ? "Sign up" : "Log in";
    document.getElementById("authNameField").classList.toggle("hidden", !isSignup);
    document.getElementById("authSubmit").textContent = isSignup ? "Create account" : "Log in";
    document.getElementById("authSwitchText").textContent = isSignup
      ? "Already have an account?"
      : "Don't have an account?";
    document.getElementById("authSwitchBtn").textContent = isSignup ? "Log in" : "Sign up";
    document.getElementById("authPassword").autocomplete = isSignup ? "new-password" : "current-password";
  }

  function openAuthModal(mode) {
    authMode = mode || "login";
    updateAuthModeUI();
    document.getElementById("authError").classList.add("hidden");
    document.getElementById("authSuccess").classList.add("hidden");
    document.getElementById("authForm").reset();
    document.getElementById("authModal").classList.remove("hidden");
    closeProfileMenu();
    document.getElementById("authEmail").focus();
  }

  function closeAuthModal() {
    document.getElementById("authModal").classList.add("hidden");
  }

  // Refreshes everything that depends on auth state after a login,
  // signup, or logout.
  function afterAuthChange() {
    renderProfileToggle();
    renderProfileMenu();
    if (!screens.social.classList.contains("hidden")) renderSocial();
    if (!screens.badges.classList.contains("hidden")) renderBadges();
    if (!screens.battlepass.classList.contains("hidden")) renderBattlePass();
    if (!screens.lessons.classList.contains("hidden")) renderLessons();
    if (!screens.profile.classList.contains("hidden")) renderProfile();
  }

  // ---- Stats persistence ----
  function saveStats(correct, total) {
    try {
      const raw = progressStore().getItem(progressKey(STATS_KEY));
      const stats = raw ? JSON.parse(raw) : { sessions: 0, correct: 0, total: 0 };
      stats.sessions++;
      stats.correct += correct;
      stats.total += total;
      progressStore().setItem(progressKey(STATS_KEY), JSON.stringify(stats));
    } catch (e) { /* storage unavailable */ }
  }

  // ---- Resuming a session left mid-way ----
  // Saved only for single-module sessions (mixed/rw/math, a bank category,
  // a domain, or a skill) when the student explicitly leaves with at least
  // one answer recorded — the Short/Full diagnostics carry extra
  // multi-module routing state (fdModules/fdTier/...) that isn't captured
  // here, so they're intentionally left out rather than resumed into a
  // broken module hand-off. Cleared once a session finishes normally.
  function serializeEliminated(elim) {
    const out = {};
    Object.keys(elim).forEach((k) => {
      out[k] = Array.from(elim[k]);
    });
    return out;
  }
  function deserializeEliminated(obj) {
    const out = {};
    Object.keys(obj || {}).forEach((k) => {
      out[k] = new Set(obj[k]);
    });
    return out;
  }

  function saveSessionSnapshot() {
    if (state.module === "diagnostic" || state.module === "full-diagnostic") return;
    if (!state.questions.length || !Object.keys(state.answers).length) return;

    const snapshot = {
      module: state.module,
      questions: state.questions,
      answers: state.answers,
      checked: state.checked,
      missReasons: state.missReasons,
      questionTimes: state.questionTimes,
      eliminated: serializeEliminated(state.eliminated),
      marked: state.marked,
      current: state.current,
      secondsLeft: state.secondsLeft,
      timerHidden: state.timerHidden,
      categoryLabel: state.categoryLabel,
      categoryDomain: state.categoryDomain,
      domainFilter: state.domainFilter,
      skillFilter: state.skillFilter,
      savedAt: Date.now(),
    };
    try {
      progressStore().setItem(progressKey(SAVED_SESSION_KEY), JSON.stringify(snapshot));
    } catch (e) { /* storage unavailable */ }
  }

  function getSavedSession() {
    try {
      const raw = progressStore().getItem(progressKey(SAVED_SESSION_KEY));
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function clearSavedSession() {
    try {
      progressStore().removeItem(progressKey(SAVED_SESSION_KEY));
    } catch (e) { /* storage unavailable */ }
  }

  function resumeSavedSession() {
    const snap = getSavedSession();
    if (!snap || !snap.questions || !snap.questions.length) return;

    state.module = snap.module;
    state.diagnosticIndex = null;
    state.questions = snap.questions;
    state.answers = snap.answers || {};
    state.checked = snap.checked || {};
    state.missReasons = snap.missReasons || {};
    state.questionTimes = snap.questionTimes || {};
    state.questionStartTimes = {};
    state.eliminated = deserializeEliminated(snap.eliminated);
    state.marked = snap.marked || {};
    state.current = snap.current || 0;
    state.secondsLeft = snap.secondsLeft || 0;
    state.timerHidden = !!snap.timerHidden;
    state.categoryLabel = snap.categoryLabel || null;
    state.categoryDomain = snap.categoryDomain || null;
    state.domainFilter = snap.domainFilter || null;
    state.skillFilter = snap.skillFilter || null;
    state.reviewMode = false;
    state.eliminating = false;

    clearSavedSession();
    startTimer();
    show("exam");
    ensureCurrentVisible();
    renderQuestion();
    renderFooter();
    updateModuleName();
  }

  function renderResumeBanner() {
    const banner = document.getElementById("resumeBanner");
    if (!banner) return;
    const snap = getSavedSession();
    if (!snap || !snap.questions || !snap.questions.length) {
      banner.classList.add("hidden");
      return;
    }
    const answered = Object.keys(snap.answers || {}).length;
    const label = snap.categoryLabel || snap.domainFilter || "your practice session";
    document.getElementById("resumeBannerSub").textContent =
      `${label} — ${answered} of ${snap.questions.length} questions answered`;
    banner.classList.remove("hidden");
  }

  function goHome() {
    clearInterval(state.timer);
    clearInterval(state.breakTimer);
    show("landing");
  }

  // ---- Global wiring ----
  function init() {
    const landingCountEl = document.getElementById("landingQuestionCount");
    if (landingCountEl) {
      const rounded = Math.floor(QUESTIONS.length / 100) * 100;
      landingCountEl.textContent = `${rounded.toLocaleString()}+`;
    }

    document.getElementById("navToggle")?.addEventListener("click", () => {
      const nav = document.getElementById("topbarCenter");
      const open = !nav.classList.contains("open");
      nav.classList.toggle("open", open);
      document.getElementById("navToggle").setAttribute("aria-expanded", String(open));
    });

    renderThemeToggle();
    renderResumeBanner();
    document.getElementById("resumeBannerGo")?.addEventListener("click", resumeSavedSession);
    document.getElementById("resumeBannerDismiss")?.addEventListener("click", () => {
      clearSavedSession();
      renderResumeBanner();
    });

    // Delegated so buttons rendered later (e.g. on the results screen)
    // work without re-wiring.
    document.addEventListener("click", (e) => {
      const startBtn = e.target.closest("[data-start]");
      if (startBtn) {
        if (startBtn.dataset.start === "diagnostic") startDiagnostic();
        else if (startBtn.dataset.start === "full-diagnostic") startFullDiagnostic();
        else if (startBtn.dataset.start === "mistakeReview") startMistakeReview();
        else startModule(startBtn.dataset.start);
        closeProfileMenu();
        return;
      }
      const navBtn = e.target.closest("[data-nav]");
      if (navBtn) {
        const nav = navBtn.dataset.nav;
        if (nav === "badges") renderBadges();
        else if (nav === "battlepass") renderBattlePass();
        else if (nav === "bank") renderBank();
        else if (nav === "studyPlan") { dailyPlanEditing = false; renderStudyPlan(); }
        else if (nav === "dashboard") { dashGoalEditing = false; renderDashboard(); }
        else if (nav === "lessons") { state.activeLesson = null; state.lessonChatLog = []; renderLessons(); }
        else if (nav === "games") { stopActiveGame(); renderGamesHub(); }
        else if (nav === "profile") renderProfile();
        else if (nav === "classroom") renderClassroom();
        else renderSocial();
        show(nav);
        closeProfileMenu();
        return;
      }
      const scrollBtn = e.target.closest("[data-scroll-to]");
      if (scrollBtn) {
        const target = document.getElementById(scrollBtn.dataset.scrollTo);
        if (screens.landing.classList.contains("hidden")) show("landing");
        requestAnimationFrame(() => target?.scrollIntoView({ behavior: "smooth", block: "start" }));
        return;
      }
      const domainBtn = e.target.closest("[data-domain-practice]");
      if (domainBtn) {
        startModule(domainBtn.dataset.domainModule, domainBtn.dataset.domainPractice);
        closeProfileMenu();
        return;
      }
      const lessonBtn = e.target.closest("[data-lesson-domain]");
      if (lessonBtn) {
        openLesson(lessonBtn.dataset.lessonDomain, Number(lessonBtn.dataset.lessonIndex));
        show("lessons");
        closeProfileMenu();
        return;
      }
      if (e.target.closest("[data-lesson-back]")) {
        state.activeLesson = null;
        state.lessonChatLog = [];
        renderLessons();
        return;
      }
      const practiceSkillBtn = e.target.closest("[data-practice-skill]");
      if (practiceSkillBtn) {
        startSkillPractice(
          practiceSkillBtn.dataset.practiceModule,
          practiceSkillBtn.dataset.practiceDomain,
          practiceSkillBtn.dataset.practiceSkill
        );
        return;
      }
      const gameStartBtn = e.target.closest("[data-game-start]");
      if (gameStartBtn) {
        stopActiveGame();
        const kind = gameStartBtn.dataset.gameStart;
        if (kind === "word-match") startWordMatch();
        else if (kind === "dungeon-quest") startDungeonQuest();
        else if (kind === "study-tycoon") startIdleGame();
        else startBlitzGame(kind);
        return;
      }
      const gameChoiceBtn = e.target.closest("[data-game-choice]");
      if (gameChoiceBtn) {
        answerBlitz(Number(gameChoiceBtn.dataset.gameChoice));
        return;
      }
      const idleChoiceBtn = e.target.closest("[data-idle-choice]");
      if (idleChoiceBtn) {
        answerIdleQuestion(Number(idleChoiceBtn.dataset.idleChoice));
        return;
      }
      const idleBuyBtn = e.target.closest("[data-idle-buy]");
      if (idleBuyBtn) {
        buyIdleGenerator(idleBuyBtn.dataset.idleBuy);
        return;
      }
      const memoryCardBtn = e.target.closest("[data-memory-card]");
      if (memoryCardBtn) {
        flipMemoryCard(Number(memoryCardBtn.dataset.memoryCard));
        return;
      }
      const rpgFloorBtn = e.target.closest("[data-rpg-floor]");
      if (rpgFloorBtn) {
        startRpgBattle(state.rpgZoneKey, Number(rpgFloorBtn.dataset.rpgFloor));
        return;
      }
      const rpgChoiceBtn = e.target.closest("[data-rpg-choice]");
      if (rpgChoiceBtn) {
        answerRpgQuestion(Number(rpgChoiceBtn.dataset.rpgChoice));
        return;
      }
      const rpgBuyBtn = e.target.closest("[data-rpg-buy]");
      if (rpgBuyBtn) {
        buyRpgUpgrade(rpgBuyBtn.dataset.rpgBuy);
        return;
      }
      if (e.target.closest("[data-rpg-flee]")) {
        rpgFlee();
        return;
      }
      const rpgNavEl = e.target.closest("[data-rpg-nav]");
      if (rpgNavEl) {
        const dest = rpgNavEl.dataset.rpgNav;
        if (dest === "overworld") renderRpgOverworld();
        else if (dest === "zone") renderRpgZone(rpgNavEl.dataset.rpgZone || state.rpgZoneKey);
        else if (dest === "shop") renderRpgShop();
        return;
      }
      if (e.target.closest("[data-game-quit]")) {
        stopActiveGame();
        renderGamesHub();
        return;
      }
      if (e.target.closest("[data-home]")) {
        goHome();
        return;
      }
      const actionBtn = e.target.closest("[data-action]");
      if (actionBtn) {
        const action = actionBtn.dataset.action;
        if (action === "open-auth") openAuthModal("signup");
        else if (action === "logout") {
          window.Auth.signOut();
          afterAuthChange();
          closeProfileMenu();
        } else if (action === "edit-goal") {
          dashGoalEditing = true;
          renderDashboard();
        } else if (action === "edit-daily-plan") {
          dailyPlanEditing = true;
          renderStudyPlan();
        } else if (action === "toggle-theme") {
          setTheme(getTheme() === "dark" ? "light" : "dark");
          renderThemeToggle();
        } else if (action === "upgrade-premium") {
          window.Auth.upgradeToPremium();
          afterAuthChange();
          renderLessons();
        } else if (action === "upgrade-premium-fst") {
          window.Auth.upgradeToPremium();
          afterAuthChange();
          startFullDiagnostic();
        }
        return;
      }
      if (e.target.closest("#profileToggle")) {
        const dropdown = document.getElementById("profileDropdown");
        const opening = dropdown.classList.contains("hidden");
        if (opening) renderProfileMenu();
        dropdown.classList.toggle("hidden", !opening);
        return;
      }
      if (!e.target.closest(".profile-wrap")) closeProfileMenu();
    });
    document.addEventListener("submit", (e) => {
      if (e.target.id === "dashGoalForm") {
        e.preventDefault();
        const input = document.getElementById("dashGoalInput");
        const val = Math.round(Number(input.value) / 10) * 10;
        if (val >= 400 && val <= 1600) saveGoal(val);
        dashGoalEditing = false;
        renderDashboard();
        return;
      }
      if (e.target.id === "dailyPlanForm") {
        e.preventDefault();
        const dateVal = document.getElementById("dailyPlanDate").value;
        const minutesVal = Math.round(Number(document.getElementById("dailyPlanMinutes").value) / 5) * 5;
        if (dateVal) saveTestDate(dateVal);
        if (minutesVal >= 10 && minutesVal <= 240) saveMinutesPerDay(minutesVal);
        dailyPlanEditing = false;
        renderStudyPlan();
        return;
      }
      if (e.target.id === "lessonChatForm") {
        e.preventDefault();
        const input = document.getElementById("lessonChatInput");
        sendLessonChatMessage(input.value);
        input.value = "";
        return;
      }
    });
    document.getElementById("nextBtn").addEventListener("click", next);
    document.getElementById("prevBtn").addEventListener("click", prev);
    document.getElementById("pillStepBack").addEventListener("click", () => shiftPillWindow(-1));
    document.getElementById("pillStepFwd").addEventListener("click", () => shiftPillWindow(1));
    document.getElementById("pillJumpBack").addEventListener("click", () => shiftPillWindow(-5));
    document.getElementById("pillJumpFwd").addEventListener("click", () => shiftPillWindow(5));
    document.getElementById("pillGotoForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("pillGotoInput");
      goToQuestionNumber(parseInt(input.value, 10));
      input.value = "";
      input.blur();
    });
    document.getElementById("timerHideBtn").addEventListener("click", () => {
      state.timerHidden = !state.timerHidden;
      renderTimer();
    });
    document.getElementById("eliminateBtn").addEventListener("click", () => {
      state.eliminating = !state.eliminating;
      document.getElementById("eliminateBtn").classList.toggle("active", state.eliminating);
      document.getElementById("choices")?.classList.toggle("eliminating", state.eliminating);
    });

    const calcPanel = document.getElementById("calcPanel");
    const calcBtn = document.getElementById("calculatorBtn");
    const calcFrame = document.getElementById("calcFrame");
    const calcLoading = document.getElementById("calcLoading");
    calcFrame.addEventListener("load", () => calcLoading?.classList.add("hidden"));
    calcBtn.addEventListener("click", () => {
      const opening = calcPanel.classList.contains("hidden");
      if (opening && !calcFrame.src) calcFrame.src = "https://www.desmos.com/calculator";
      calcPanel.classList.toggle("hidden", !opening);
      calcBtn.classList.toggle("active", opening);
      document.getElementById("exam")?.classList.toggle("calc-open", opening);
    });
    document.getElementById("calcPanelClose").addEventListener("click", closeCalculatorPanel);

    // Drag the calculator panel by its header, like a floating window.
    (function () {
      const header = document.getElementById("calcPanelHeader");
      let dragging = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;
      header.addEventListener("mousedown", (e) => {
        dragging = true;
        const rect = calcPanel.getBoundingClientRect();
        startX = e.clientX;
        startY = e.clientY;
        startLeft = rect.left;
        startTop = rect.top;
        calcPanel.style.right = "auto";
        document.body.style.userSelect = "none";
      });
      document.addEventListener("mousemove", (e) => {
        if (!dragging) return;
        const maxLeft = window.innerWidth - calcPanel.offsetWidth;
        const maxTop = window.innerHeight - calcPanel.offsetHeight;
        calcPanel.style.left = `${Math.min(Math.max(0, startLeft + e.clientX - startX), maxLeft)}px`;
        calcPanel.style.top = `${Math.min(Math.max(0, startTop + e.clientY - startY), maxTop)}px`;
      });
      document.addEventListener("mouseup", () => {
        dragging = false;
        document.body.style.userSelect = "";
      });
    })();
    const confirmModal = document.getElementById("confirmModal");
    const confirmTitle = document.getElementById("confirmTitle");
    const confirmText = document.getElementById("confirmText");
    const confirmEnd = document.getElementById("confirmEnd");
    document.getElementById("examHomeBtn").addEventListener("click", () => {
      const resumable =
        state.module !== "diagnostic" && state.module !== "full-diagnostic" && Object.keys(state.answers).length > 0;
      confirmTitle.textContent = "Leave without finishing?";
      confirmText.textContent = resumable
        ? "This session won't be scored, but your answers are saved — resume it from the home screen whenever you're ready."
        : "Your progress on this session won't be scored. You can start over anytime from the home screen.";
      confirmEnd.textContent = "Leave to home";
      confirmModal.classList.remove("hidden");
    });
    document.getElementById("confirmCancel").addEventListener("click", () => {
      confirmModal.classList.add("hidden");
    });
    confirmEnd.addEventListener("click", () => {
      confirmModal.classList.add("hidden");
      saveSessionSnapshot();
      goHome();
    });
    confirmModal.addEventListener("click", (e) => {
      if (e.target === confirmModal) confirmModal.classList.add("hidden");
    });

    const shareModal = document.getElementById("shareModal");
    document.getElementById("shareModalClose").addEventListener("click", () => shareModal.classList.add("hidden"));
    shareModal.addEventListener("click", (e) => {
      if (e.target === shareModal) shareModal.classList.add("hidden");
    });

    const authModal = document.getElementById("authModal");
    document.getElementById("authClose").addEventListener("click", closeAuthModal);
    authModal.addEventListener("click", (e) => {
      if (e.target === authModal) closeAuthModal();
    });
    document.getElementById("authSwitchBtn").addEventListener("click", () => {
      openAuthModal(authMode === "signup" ? "login" : "signup");
    });
    document.getElementById("authForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("authEmail").value;
      const password = document.getElementById("authPassword").value;
      const name = document.getElementById("authName").value;
      const errorEl = document.getElementById("authError");
      const successEl = document.getElementById("authSuccess");
      const submitBtn = document.getElementById("authSubmit");
      errorEl.classList.add("hidden");
      successEl.classList.add("hidden");
      submitBtn.disabled = true;
      const result = authMode === "signup"
        ? await window.Auth.signUp(email, password, name)
        : await window.Auth.signIn(email, password);
      submitBtn.disabled = false;
      if (!result.ok) {
        errorEl.textContent = result.error;
        errorEl.classList.remove("hidden");
        return;
      }
      if (result.pendingConfirmation) {
        openAuthModal("login");
        document.getElementById("authEmail").value = email;
        document.getElementById("authSuccess").textContent =
          "Account created — check your email for a confirmation link, then log in.";
        document.getElementById("authSuccess").classList.remove("hidden");
        return;
      }
      closeAuthModal();
      afterAuthChange();
    });
    document.getElementById("googleSignInBtn").addEventListener("click", async () => {
      const errorEl = document.getElementById("authError");
      const googleBtn = document.getElementById("googleSignInBtn");
      errorEl.classList.add("hidden");
      googleBtn.disabled = true;
      const result = await window.Auth.signInWithGoogle();
      googleBtn.disabled = false;
      // On success the page is already navigating to Google's consent
      // screen; this only returns early (with an error) if that couldn't
      // even start, e.g. the provider isn't enabled in Supabase yet.
      if (!result.ok) {
        errorEl.textContent = result.error;
        errorEl.classList.remove("hidden");
      }
    });

    // keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (screens.exam.classList.contains("hidden")) return;
      if (["1", "2", "3", "4"].includes(e.key)) {
        const ci = Number(e.key) - 1;
        if (!(state.eliminated[state.current]?.has(ci))) selectChoice(ci);
      } else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key.toLowerCase() === "m") toggleMark();
    });

    renderProfileToggle();
    renderProfileMenu();

    // Google sign-in resolves asynchronously (Supabase adopts the session
    // after the redirect back, or on a later visit) — this is the only
    // subscriber, and it's what makes that update actually show up in the UI.
    if (window.Auth && window.Auth.onChange) window.Auth.onChange(afterAuthChange);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
