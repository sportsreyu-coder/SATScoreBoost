// SAT ScoreBoost — practice engine
(function () {
  "use strict";

  // ---- State ----
  const state = {
    module: null,      // "rw" | "math" | "mixed" | "diagnostic" | "full-diagnostic"
    diagnosticIndex: null,     // which entry of DIAGNOSTICS is active
    fullDiagnosticIndex: null, // which entry of FULL_DIAGNOSTICS is active
    questions: [],     // active question set (just the current module, for full-diagnostic)
    answers: {},       // qIndex -> choiceIndex
    checked: {},       // qIndex -> bool, true once "Check Answer" has revealed it
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
    fdModules: null,      // full-diagnostic: the 4 modules' shuffled question arrays
    fdModuleIndex: 0,     // full-diagnostic: which of the 4 modules is active
    fdResults: [],        // full-diagnostic: flattened {q, selected} across completed modules
    reviewMode: false,    // true once viewing a finished attempt's review-all-questions list
    categoryLabel: null,  // set when practicing a single Question Bank category
    categoryDomain: null, // the domain string, so "retry" can restart the same category
    bankTab: "math",      // "math" | "rw" — which Question Bank subject tab is showing
    bankDifficulty: new Set(), // selected difficulty filters (1/2/3); empty = show all
    domainFilter: null,   // set when practicing a single domain from the Study Plan
    skillFilter: null,    // set when practicing a single skill from a Lesson
    activeLesson: null,   // { domain, index } of the lesson currently open, or null for the list view
    lessonChatLog: [],    // transient {from, text} messages for the active lesson's AI Tutor panel
    game: null,           // "math-blitz" | "vocab-rush" | "word-match" | null (which game is on screen)
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
  const DIAG_INDEX_KEY = "sat_diag_index"; // last diagnostic index, for rotation
  const STREAK_KEY = "sat_streaks";
  const STREAK_HISTORY_DAYS = 60; // how many activity dates to keep per streak
  const LIFETIME_KEY = "sat_lifetime_answers";
  const STATS_KEY = "sat_stats";
  const CORRECT_STREAK_KEY = "sat_correct_streak"; // longest run of consecutive correct answers
  const STUDY_PLAN_KEY = "sat_last_diagnostic"; // most recent diagnostic's category breakdown
  const GOAL_KEY = "sat_goal"; // user's target SAT score, shown on the Dashboard
  const DEFAULT_GOAL = 1600;
  const DOMAIN_TODAY_KEY = "sat_domain_today"; // per-domain answered-question counts, today only
  const MISTAKE_BANK_KEY = "sat_mistake_bank"; // recently missed questions, for the "review mistakes" quest
  const MISTAKES_REVIEWED_KEY = "sat_mistakes_reviewed_today"; // count of mistakes reviewed today
  const TIMED_MODULE_KEY = "sat_timed_module_today"; // whether a timed session was completed today
  const MISTAKE_BANK_LIMIT = 50;
  const XP_KEY = "sat_xp"; // lifetime XP earned from completed quests
  const QUEST_XP_AWARDED_KEY = "sat_quest_xp_awarded"; // which quests have already paid out XP today

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

  const FULL_DIAG_INDEX_KEY = "sat_full_diag_index"; // last full-diagnostic index
  const BREAK_SECONDS = 600; // 10-minute break between RW and Math, like the real SAT
  // Real digital SAT per-module structure and timing.
  const FULL_DIAG_MODULE_KEYS = ["rw1", "rw2", "math1", "math2"];
  const FULL_DIAG_MODULE_DURATIONS = [32 * 60, 32 * 60, 35 * 60, 35 * 60];
  const FULL_DIAG_MODULE_LABELS = [
    "Reading & Writing — Module 1",
    "Reading & Writing — Module 2",
    "Math — Module 1",
    "Math — Module 2",
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
    studyPlan: document.getElementById("studyPlan"),
    lessons: document.getElementById("lessons"),
    games: document.getElementById("games"),
  };

  function show(name) {
    Object.values(screens).forEach((s) => s.classList.add("hidden"));
    screens[name].classList.remove("hidden");
    // The exam screen hides the top bar for extra vertical space; the exam
    // header's own Home button covers navigating back out in that case.
    document.getElementById("topbar").classList.toggle("hidden", name === "exam");
    document.getElementById("siteFooter").classList.toggle("hidden", name === "exam");
    document.getElementById("bankNavBtn").classList.toggle("active", name === "bank");
    document.getElementById("dashboardNavBtn").classList.toggle("active", name === "dashboard");
    document.getElementById("lessonsNavBtn").classList.toggle("active", name === "lessons");
    document.getElementById("gamesNavBtn").classList.toggle("active", name === "games");
    if (name !== "exam") closeCalculatorPanel();
    if (name !== "games") stopActiveGame();
    window.scrollTo(0, 0);
  }

  function closeCalculatorPanel() {
    document.getElementById("calcPanel").classList.add("hidden");
    document.getElementById("calculatorBtn")?.classList.remove("active");
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

  function startModule(module, domain) {
    let pool;
    if (module === "mixed") {
      pool = shuffle(QUESTIONS);
    } else if (domain) {
      pool = shuffle(QUESTIONS.filter((q) => q.module === module && q.domain === domain));
    } else {
      pool = shuffle(QUESTIONS.filter((q) => q.module === module));
    }
    // sort by difficulty for a natural ramp, keeping shuffle within tiers
    pool.sort((a, b) => a.difficulty - b.difficulty);
    // randomize answer positions within each question
    pool = pool.map(shuffleChoices);

    state.module = module;
    state.diagnosticIndex = null;
    state.domainFilter = domain || null;
    state.reviewMode = false;
    state.categoryLabel = null;
    state.categoryDomain = null;
    state.questions = pool;
    state.answers = {};
    state.eliminated = {};
    state.checked = {};
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

  // ---- Question Bank: practice a single category on its own ----
  function startBankCategory(mod, domain, label) {
    let pool = QUESTIONS.filter((q) => q.module === mod && q.domain === domain);
    if (state.bankDifficulty.size) {
      pool = pool.filter((q) => state.bankDifficulty.has(q.difficulty));
    }
    if (!pool.length) return; // filters excluded every question — nothing to start

    pool = shuffle(pool);
    pool.sort((a, b) => a.difficulty - b.difficulty);
    pool = pool.map(shuffleChoices);

    state.module = mod;
    state.categoryLabel = label || domain;
    state.categoryDomain = domain;
    state.diagnosticIndex = null;
    state.reviewMode = false;
    state.questions = pool;
    state.answers = {};
    state.eliminated = {};
    state.checked = {};
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

  // ---- Lessons: practice just the questions matching one specific skill ----
  function startSkillPractice(mod, domain, skill) {
    let pool = QUESTIONS.filter((q) => q.module === mod && q.domain === domain && q.skill === skill);
    if (!pool.length) return;

    pool = shuffle(pool);
    pool.sort((a, b) => a.difficulty - b.difficulty);
    pool = pool.map(shuffleChoices);

    state.module = mod;
    state.categoryLabel = skill;
    state.categoryDomain = domain;
    state.skillFilter = skill;
    state.diagnosticIndex = null;
    state.reviewMode = false;
    state.questions = pool;
    state.answers = {};
    state.eliminated = {};
    state.checked = {};
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

  // ---- Diagnostics: fixed 10-RW + 10-Math mini practice tests ----
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

  // Starts the next diagnostic in rotation (1 -> 2 -> 3 -> 1 -> ...).
  function startDiagnostic() {
    const nextIndex = (loadLastDiagnosticIndex() + 1) % DIAGNOSTICS.length;
    saveLastDiagnosticIndex(nextIndex);

    const set = DIAGNOSTICS[nextIndex];
    const pool = set.questionIds
      .map((id) => QUESTIONS.find((q) => q.id === id))
      .filter(Boolean)
      .map(shuffleChoices);

    state.module = "diagnostic";
    state.diagnosticIndex = nextIndex;
    state.domainFilter = null;
    state.reviewMode = false;
    state.categoryLabel = null;
    state.categoryDomain = null;
    state.questions = pool;
    state.answers = {};
    state.eliminated = {};
    state.checked = {};
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

  // ---- Full diagnostics: all four real-SAT modules, with a mid-test break ----
  function loadLastFullDiagIndex() {
    try {
      const raw = localStorage.getItem(FULL_DIAG_INDEX_KEY);
      return raw !== null ? parseInt(raw, 10) : -1;
    } catch (e) {
      return -1;
    }
  }

  function saveLastFullDiagIndex(i) {
    try {
      localStorage.setItem(FULL_DIAG_INDEX_KEY, String(i));
    } catch (e) { /* localStorage unavailable */ }
  }

  // Starts the next full diagnostic in rotation: RW Module 1, RW Module 2,
  // a real break, then Math Module 1, Math Module 2 — each module its own
  // timed session, exactly like the real digital SAT.
  function startFullDiagnostic() {
    const nextIndex = (loadLastFullDiagIndex() + 1) % FULL_DIAGNOSTICS.length;
    saveLastFullDiagIndex(nextIndex);

    const set = FULL_DIAGNOSTICS[nextIndex];
    state.fdModules = FULL_DIAG_MODULE_KEYS.map((key) =>
      set.modules[key]
        .map((id) => QUESTIONS.find((q) => q.id === id))
        .filter(Boolean)
        .map(shuffleChoices)
    );
    state.fdResults = [];
    state.fullDiagnosticIndex = nextIndex;
    state.module = "full-diagnostic";
    state.domainFilter = null;
    state.reviewMode = false;
    state.categoryLabel = null;
    state.categoryDomain = null;
    state.timerHidden = false;

    loadFullDiagModule(0);
  }

  // Loads one module of the active full diagnostic as its own timed session.
  function loadFullDiagModule(moduleIndex) {
    state.fdModuleIndex = moduleIndex;
    state.questions = state.fdModules[moduleIndex];
    state.answers = {};
    state.eliminated = {};
    state.checked = {};
    state.marked = {};
    state.current = 0;
    state.eliminating = false;
    state.pillWindowStart = 0;
    state.secondsLeft = FULL_DIAG_MODULE_DURATIONS[moduleIndex];

    startTimer();
    show("exam");
    renderQuestion();
    renderFooter();
    updateModuleName();
  }

  // Records the module just finished, then either moves to a quick
  // module-to-module checkpoint, the real break, or final scoring.
  function finishFullDiagModule() {
    clearInterval(state.timer);
    state.questions.forEach((q, i) => {
      state.fdResults.push({ q, selected: state.answers[i] });
    });

    const idx = state.fdModuleIndex;
    if (idx === FULL_DIAG_MODULE_KEYS.length - 1) {
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
    const nextLabel = FULL_DIAG_MODULE_LABELS[nextModuleIndex];
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
      loadFullDiagModule(nextModuleIndex);
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
          loadFullDiagModule(nextModuleIndex);
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

  // Scores the full 98-question attempt from every module's recorded
  // answers, then rebuilds a flat question/answer view (all 4 modules, in
  // order) purely so the results screen's review-and-jump-back feature
  // works across the whole test.
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
    const rwScore = toSectionScore(rwTotal ? rwCorrect / rwTotal : 0);
    const mathScore = toSectionScore(mathTotal ? mathCorrect / mathTotal : 0);
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
      return state.diagnosticIndex !== null
        ? DIAGNOSTICS[state.diagnosticIndex].label
        : "Diagnostic";
    }
    if (m === "full-diagnostic") {
      if (state.reviewMode) {
        return state.fullDiagnosticIndex !== null
          ? FULL_DIAGNOSTICS[state.fullDiagnosticIndex].label
          : "Full Diagnostic";
      }
      const key = FULL_DIAG_MODULE_KEYS[state.fdModuleIndex] || "";
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
            <button class="${classes.join(" ")}" data-choice="${ci}">
              <span class="letter">${letters[ci]}</span>
              <span class="ctext">${c}</span>
            </button>
            <button class="choice-cross" data-cross="${ci}" title="Cross out">✕</button>
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
      explanationHTML = `
        <div class="explanation ${correct ? "" : "wrong"}">
          <span class="tag">${tag}</span>
          ${q.explanation}
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
      <div class="prompt">${q.prompt}</div>
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
    // Full diagnostics run one module at a time; finishing the last
    // question of a module hands off to the next module (or scores the
    // whole attempt after Math Module 2), rather than ending the exam here.
    if (state.module === "full-diagnostic" && state.current === state.questions.length - 1) {
      finishFullDiagModule();
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

  function finishExam() {
    clearInterval(state.timer);
    const total = state.questions.length;
    let correct = 0;
    state.questions.forEach((q, i) => {
      if (state.answers[i] === q.answer) correct++;
    });
    const pct = total ? correct / total : 0;

    let overall, rwScore, mathScore;
    if (state.module === "diagnostic" || state.module === "full-diagnostic") {
      // Diagnostics mix RW and Math questions, so score each subject
      // separately for a real two-section estimate, like the actual SAT.
      let rwTotal = 0, rwCorrect = 0, mathTotal = 0, mathCorrect = 0;
      state.questions.forEach((q, i) => {
        const ok = state.answers[i] === q.answer;
        if (q.module === "rw") {
          rwTotal++;
          if (ok) rwCorrect++;
        } else {
          mathTotal++;
          if (ok) mathCorrect++;
        }
      });
      rwScore = toSectionScore(rwTotal ? rwCorrect / rwTotal : 0);
      mathScore = toSectionScore(mathTotal ? mathCorrect / mathTotal : 0);
      overall = rwScore + mathScore;
    } else if (state.module === "mixed" || state.module === "mistakeReview") {
      overall = toSectionScore(pct) * 2; // rough two-section estimate
    } else {
      overall = toSectionScore(pct); // single section
    }

    showScoringTransition(() => {
      recordSessionProgress(state.questions.map((q, i) => ({ q, selected: state.answers[i] })));
      if (state.module === "mistakeReview") {
        const reviewed = state.questions.filter((q, i) => state.answers[i] !== undefined).length;
        bumpMistakesReviewedToday(reviewed);
      }

      renderResults({ total, correct, wrong: total - correct, pct, overall, rwScore, mathScore });
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

  function renderStudyPlan() {
    const data = loadDiagnosticSummary();
    const el = document.getElementById("studyPlan");

    if (!data || !data.categories || !data.categories.length) {
      el.innerHTML = `
        <div class="study-empty">
          <span class="eyebrow">Study Plan</span>
          <h2>Take a diagnostic to build your plan</h2>
          <p>Your study plan is generated from your diagnostic results — finish one to see exactly which categories to focus on first.</p>
          <div class="results-actions">
            <button class="btn btn-primary" data-start="diagnostic">Start Short Diagnostic →</button>
            <button class="btn btn-ghost" data-start="full-diagnostic">Start Full Diagnostic →</button>
          </div>
        </div>`;
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
        <button class="btn btn-primary" data-start="diagnostic">Retake Diagnostic →</button>
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

  // Every domain has one free lesson plus three Pro lessons — the tab itself
  // is always open (no full-page paywall); individual Pro lessons show a
  // locked card with an upgrade prompt instead of their content.
  function renderLessons() {
    const user = window.Auth && window.Auth.getCurrentUser();
    const premium = !!(window.Auth && window.Auth.isPremium());
    const el = document.getElementById("lessons");

    if (state.activeLesson) {
      renderLessonDetail(state.activeLesson.domain, state.activeLesson.index);
      return;
    }

    const upsellHTML = premium
      ? ""
      : `
        <div class="lessons-upsell-banner">
          ${ICON_GRADCAP}
          <div class="lessons-upsell-text">
            <div class="lessons-upsell-title">Every topic includes one free lesson</div>
            <div class="lessons-upsell-sub">Premium unlocks 3 more per topic — the deeper dives and sub-lessons.</div>
          </div>
          ${
            user
              ? `<button class="btn btn-primary btn-sm" data-action="upgrade-premium">Upgrade →</button>`
              : `<button class="btn btn-primary btn-sm" data-action="open-auth">Log in →</button>`
          }
        </div>`;

    const domainGroup = (group) => {
      const chips = group.lessons
        .map((l, i) => {
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

    const rw = LESSONS.filter((g) => g.module === "rw");
    const math = LESSONS.filter((g) => g.module === "math");

    el.innerHTML = `
      <span class="eyebrow">Lessons</span>
      <h1 class="section-title">Learn every topic on the digital SAT</h1>
      <p class="section-sub">Pick a lesson to read it, then jump straight into matching practice questions.</p>

      ${upsellHTML}

      <div class="lessons-subject">
        <h2>${ICON_BOOK} Reading &amp; Writing</h2>
        <div class="lessons-domains">${rw.map(domainGroup).join("")}</div>
      </div>
      <div class="lessons-subject">
        <h2>${ICON_CALCULATOR} Math</h2>
        <div class="lessons-domains">${math.map(domainGroup).join("")}</div>
      </div>
    `;
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
          <p>Unlock this lesson plus the other Pro lessons in every topic — deeper dives and sub-lessons beyond the free basics.</p>
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
    const bodyHTML = `
      <p class="lesson-summary">${c.summary}</p>

      <h3>Key concepts</h3>
      <ul class="lesson-list">${conceptsHTML}</ul>

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

    el.innerHTML = `
      <span class="eyebrow">Games</span>
      <h1 class="section-title">Take a break, keep sharpening</h1>
      <p class="section-sub">Quick, replayable games built from real SAT content — good for a five-minute study break.</p>
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

  // ---- Dashboard ----
  let dashGoalEditing = false; // whether the SAT Goal card is showing its edit form

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

  // A rolling bank of recently-missed questions, most recent first — the
  // pool the "Review 5 mistakes" quest pulls its practice set from.
  // Questions drop out once answered correctly again (mastered).
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

  function addMistakes(questions) {
    const bank = loadMistakeBank().filter((m) => !questions.some((q) => q.id === m.id));
    const entries = questions.map((q) => ({ id: q.id, domain: q.domain, module: q.module }));
    saveMistakeBank([...entries, ...bank]);
  }

  function removeMistakes(ids) {
    if (!ids.length) return;
    const bank = loadMistakeBank().filter((m) => !ids.includes(m.id));
    saveMistakeBank(bank);
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
  // {q, selected} pair — folds the attempt into today's per-domain counts
  // and the mistake bank, and marks today's timed-module quest complete.
  function recordSessionProgress(pairs) {
    const domainCounts = {};
    const missed = [];
    const mastered = [];
    pairs.forEach(({ q, selected }) => {
      if (selected === undefined) return;
      domainCounts[q.domain] = (domainCounts[q.domain] || 0) + 1;
      if (selected === q.answer) mastered.push(q.id);
      else missed.push(q);
    });
    Object.keys(domainCounts).forEach((domain) => bumpDomainToday(domain, domainCounts[domain]));
    if (missed.length) addMistakes(missed);
    if (mastered.length) removeMistakes(mastered);
    markTimedModuleToday();
  }

  // Builds a short practice set from the mistake bank's most recent
  // entries — the "Review 5 mistakes" quest's Go button.
  function startMistakeReview() {
    const bank = loadMistakeBank();
    const pool = bank
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
    state.categoryLabel = "Mistake Review";
    state.categoryDomain = null;
    state.questions = pool;
    state.answers = {};
    state.checked = {};
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
    const mistakeBank = loadMistakeBank();
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
        go: mistakeBank.length
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

  function renderDashboard() {
    const user = window.Auth && window.Auth.getCurrentUser();
    const name = user ? user.name : "there";
    const goal = loadGoal();
    const estimate = computeCurrentEstimate();
    const weakest = weakestDomains(3);
    const quests = questDefs();
    payOutCompletedQuests(quests);
    const stats = computeDashboardStats();
    const xp = loadXP();

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

    document.getElementById("dashboard").innerHTML = `
      <div class="dash-header">
        <span class="eyebrow">Dashboard</span>
        <h2>Welcome back, ${escapeHtml(name)}</h2>
      </div>
      ${guestBannerHTML()}
      <div class="dash-goals">
        <div class="dash-goal-card">
          <div class="dash-goal-label">SAT Goal</div>
          ${goalCardHTML}
        </div>
        <div class="dash-goal-card">
          <div class="dash-goal-label">Current estimate</div>
          <div class="dash-goal-value estimate">${estimate === null ? "—" : estimate}</div>
          ${estimate === null ? `<div class="dash-goal-hint">Take a diagnostic to see this</div>` : ""}
        </div>
      </div>
      <div class="dash-section">
        <div class="dash-section-header">
          <h3>Today's Quests</h3>
          <span class="quest-xp-total">${xp} XP earned</span>
        </div>
        <div class="quest-list">${questHTML}</div>
      </div>
      <div class="dash-section">
        <h3>Your weakest areas</h3>
        ${weakestHTML}
      </div>
      <div class="dash-section">
        <h3>Your stats</h3>
        ${statsHTML}
      </div>
      <div class="results-actions">
        <button class="btn btn-primary" data-start="mixed">Start practicing →</button>
      </div>
    `;

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
          state.module === "full-diagnostic" ? "Retake Full Diagnostic" : isDiagnostic ? "Retake Diagnostic" : "Try Again"
        }</button>
        ${isDiagnostic ? `<button class="btn btn-ghost" data-nav="studyPlan">View Study Plan →</button>` : ""}
        <button class="btn btn-ghost" id="homeBtn">Back to Home</button>
      </div>
    `;

    const list = document.getElementById("reviewList");
    list.innerHTML = state.questions
      .map((q, i) => {
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

  // Corner auth control: a "Log in" CTA when signed out, a default
  // profile-picture avatar (opens the account dropdown) when signed in.
  function renderProfileToggle() {
    const user = window.Auth && window.Auth.getCurrentUser();
    const toggle = document.getElementById("profileToggle");
    if (user) {
      toggle.className = "profile-toggle profile-avatar";
      toggle.removeAttribute("data-action");
      toggle.title = user.name || user.email;
      toggle.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c1.4-4.2 4.7-6.5 8-6.5s6.6 2.3 8 6.5" />
        </svg>`;
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

  function renderProfileMenu() {
    const user = window.Auth && window.Auth.getCurrentUser();
    const dropdown = document.getElementById("profileDropdown");
    const userHTML = user
      ? `
        <div class="profile-user">
          <div class="profile-user-name">${escapeHtml(user.name)}</div>
          <div class="profile-user-email">${escapeHtml(user.email)}</div>
        </div>`
      : "";
    const logoutHTML = user
      ? `<button class="profile-menu-item" data-action="logout">Log out</button>`
      : "";

    dropdown.innerHTML = `
      ${userHTML}
      <button class="profile-menu-item" data-nav="social">Streak &amp; Stats ${ICON_FIRE}</button>
      <button class="profile-menu-item" data-nav="badges">Badges ${ICON_BADGE}</button>
      <div class="profile-divider"></div>
      ${logoutHTML}
    `;
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
    updateLessonsNavBadge();
    if (!screens.social.classList.contains("hidden")) renderSocial();
    if (!screens.badges.classList.contains("hidden")) renderBadges();
    if (!screens.lessons.classList.contains("hidden")) renderLessons();
  }

  // Shows the "PRO" tag next to the Lessons nav link for anyone who hasn't
  // upgraded yet; hides it once they have.
  function updateLessonsNavBadge() {
    const badge = document.getElementById("lessonsProBadge");
    if (badge) badge.classList.toggle("hidden", !!(window.Auth && window.Auth.isPremium()));
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

  function goHome() {
    clearInterval(state.timer);
    clearInterval(state.breakTimer);
    show("landing");
  }

  // ---- Global wiring ----
  function init() {
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
        else if (nav === "bank") renderBank();
        else if (nav === "studyPlan") renderStudyPlan();
        else if (nav === "dashboard") { dashGoalEditing = false; renderDashboard(); }
        else if (nav === "lessons") { state.activeLesson = null; state.lessonChatLog = []; renderLessons(); }
        else if (nav === "games") { stopActiveGame(); renderGamesHub(); }
        else renderSocial();
        show(nav);
        closeProfileMenu();
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
        else startBlitzGame(kind);
        return;
      }
      const gameChoiceBtn = e.target.closest("[data-game-choice]");
      if (gameChoiceBtn) {
        answerBlitz(Number(gameChoiceBtn.dataset.gameChoice));
        return;
      }
      const memoryCardBtn = e.target.closest("[data-memory-card]");
      if (memoryCardBtn) {
        flipMemoryCard(Number(memoryCardBtn.dataset.memoryCard));
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
        } else if (action === "upgrade-premium") {
          window.Auth.upgradeToPremium();
          afterAuthChange();
          renderLessons();
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
    calcBtn.addEventListener("click", () => {
      const opening = calcPanel.classList.contains("hidden");
      if (opening && !calcFrame.src) calcFrame.src = "https://www.desmos.com/calculator";
      calcPanel.classList.toggle("hidden", !opening);
      calcBtn.classList.toggle("active", opening);
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
      confirmTitle.textContent = "Leave without finishing?";
      confirmText.textContent = "Your progress on this session won't be scored. You can start over anytime from the home screen.";
      confirmEnd.textContent = "Leave to home";
      confirmModal.classList.remove("hidden");
    });
    document.getElementById("confirmCancel").addEventListener("click", () => {
      confirmModal.classList.add("hidden");
    });
    confirmEnd.addEventListener("click", () => {
      confirmModal.classList.add("hidden");
      goHome();
    });
    confirmModal.addEventListener("click", (e) => {
      if (e.target === confirmModal) confirmModal.classList.add("hidden");
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
      const submitBtn = document.getElementById("authSubmit");
      errorEl.classList.add("hidden");
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
      closeAuthModal();
      afterAuthChange();
    });
    document.getElementById("googleDemoBtn").addEventListener("click", () => {
      const name = window.prompt(
        "Demo Google Sign-In\n\nThis stands in for real Google auth (coming soon). Enter a display name to continue:",
        "Demo User"
      );
      if (name === null) return;
      const result = window.Auth.signInWithGoogleDemo(name);
      if (result.ok) {
        closeAuthModal();
        afterAuthChange();
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
    updateLessonsNavBadge();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
