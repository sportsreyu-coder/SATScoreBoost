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
    eliminated: {},    // qIndex -> Set of choiceIndex
    marked: {},        // qIndex -> bool
    current: 0,
    eliminating: false,
    timer: null,
    secondsLeft: 0,
    breakTimer: null,
    breakSecondsLeft: 0,
    checkMode: false,  // instant-feedback per question after answering
    pillWindowStart: 0, // first index shown in the footer's question-pill strip
    fdModules: null,      // full-diagnostic: the 4 modules' shuffled question arrays
    fdModuleIndex: 0,     // full-diagnostic: which of the 4 modules is active
    fdResults: [],        // full-diagnostic: flattened {q, selected} across completed modules
    reviewMode: false,    // true once viewing a finished attempt's review-all-questions list
  };

  const SECONDS_PER_Q = 90;
  const PILL_WINDOW = 10; // how many question pills are visible at once
  const DIAG_INDEX_KEY = "sat_diag_index"; // last diagnostic index, for rotation
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
    exam: document.getElementById("exam"),
    break: document.getElementById("break"),
    results: document.getElementById("results"),
  };

  function show(name) {
    Object.values(screens).forEach((s) => s.classList.add("hidden"));
    screens[name].classList.remove("hidden");
    window.scrollTo(0, 0);
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

  function startModule(module) {
    let pool;
    if (module === "mixed") {
      pool = shuffle(QUESTIONS);
    } else {
      pool = shuffle(QUESTIONS.filter((q) => q.module === module));
    }
    // sort by difficulty for a natural ramp, keeping shuffle within tiers
    pool.sort((a, b) => a.difficulty - b.difficulty);
    // randomize answer positions within each question
    pool = pool.map(shuffleChoices);

    state.module = module;
    state.diagnosticIndex = null;
    state.reviewMode = false;
    state.questions = pool;
    state.answers = {};
    state.eliminated = {};
    state.marked = {};
    state.current = 0;
    state.eliminating = false;
    state.checkMode = false;
    state.pillWindowStart = 0;
    state.secondsLeft = pool.length * SECONDS_PER_Q;

    startTimer();
    show("exam");
    renderQuestion();
    renderFooter();
    updateModuleName();
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
    state.reviewMode = false;
    state.questions = pool;
    state.answers = {};
    state.eliminated = {};
    state.marked = {};
    state.current = 0;
    state.eliminating = false;
    state.checkMode = false;
    state.pillWindowStart = 0;
    state.secondsLeft = pool.length * SECONDS_PER_Q;

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
    state.reviewMode = false;

    loadFullDiagModule(0);
  }

  // Loads one module of the active full diagnostic as its own timed session.
  function loadFullDiagModule(moduleIndex) {
    state.fdModuleIndex = moduleIndex;
    state.questions = state.fdModules[moduleIndex];
    state.answers = {};
    state.eliminated = {};
    state.marked = {};
    state.current = 0;
    state.eliminating = false;
    state.checkMode = false;
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
    items.forEach(({ selected }, i) => {
      if (selected !== undefined) state.answers[i] = selected;
    });
    state.current = 0;
    state.pillWindowStart = 0;
    state.reviewMode = true;

    renderResults({ total, correct, wrong: total - correct, pct, overall, rwScore, mathScore });
    saveStats(correct, total);
    show("results");
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
      const base = state.fullDiagnosticIndex !== null
        ? FULL_DIAGNOSTICS[state.fullDiagnosticIndex].label
        : "Full Diagnostic";
      if (state.reviewMode) return base;
      const modLabel = FULL_DIAG_MODULE_LABELS[state.fdModuleIndex];
      return modLabel ? `${base} — ${modLabel}` : base;
    }
    return "Full Practice";
  }

  function updateModuleName() {
    document.getElementById("moduleName").innerHTML =
      `${moduleLabel(state.module)} <span>· ${state.questions.length} questions</span>`;
    // Diagnostics simulate real test conditions: no per-question reveal.
    const isDiagKind = state.module === "diagnostic" || state.module === "full-diagnostic";
    document.getElementById("checkToggle").classList.toggle("hidden", isDiagKind);
  }

  // ---- Timer ----
  function startTimer() {
    clearInterval(state.timer);
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
    el.textContent = h > 0
      ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      : `${m}:${String(s).padStart(2, "0")}`;
    el.classList.toggle("low", state.secondsLeft <= 60);
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
    const showFeedback = state.checkMode && answered;

    const letters = ["A", "B", "C", "D"];
    const choicesHTML = q.choices
      .map((c, ci) => {
        const classes = ["choice"];
        if (elimSet.has(ci)) classes.push("eliminated");
        if (showFeedback) {
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

    let explanationHTML = "";
    if (showFeedback) {
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
      ${explanationHTML}
    `;

    // wire choices
    body.querySelectorAll(".choice").forEach((btn) => {
      const ci = Number(btn.dataset.choice);
      btn.addEventListener("click", () => {
        if (elimSet.has(ci)) return; // can't select eliminated
        if (state.checkMode && answered) return; // locked after check
        selectChoice(ci);
      });
    });
    body.querySelectorAll(".choice-cross").forEach((x) => {
      x.addEventListener("click", () => {
        toggleEliminate(Number(x.dataset.cross));
      });
    });
    document.getElementById("markBtn").addEventListener("click", toggleMark);

    // nav buttons
    document.getElementById("prevBtn").disabled = i === 0;
    const nextBtn = document.getElementById("nextBtn");
    nextBtn.textContent = i === state.questions.length - 1 ? "Finish ▸" : "Next ▸";
  }

  function selectChoice(ci) {
    state.answers[state.current] = ci;
    if (state.checkMode) {
      renderQuestion(); // reveal feedback
    } else {
      renderQuestion();
    }
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
        const revealed = state.checkMode && answered;
        const correct = revealed && state.answers[i] === state.questions[i].answer;

        if (i === state.current) classes.push("current");
        else if (revealed) classes.push(correct ? "answered" : "wrong");
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
    } else if (state.module === "mixed") {
      overall = toSectionScore(pct) * 2; // rough two-section estimate
    } else {
      overall = toSectionScore(pct); // single section
    }

    renderResults({ total, correct, wrong: total - correct, pct, overall, rwScore, mathScore });
    saveStats(correct, total);
    show("results");
  }

  function renderResults(r) {
    const { total, correct, wrong, pct, overall, rwScore, mathScore } = r;
    const isDiagnostic = state.module === "diagnostic" || state.module === "full-diagnostic";

    // ring
    const radius = 92;
    const circ = 2 * Math.PI * radius;
    const offset = circ * (1 - pct);
    const ringColor = pct >= 0.75 ? "var(--accent)" : pct >= 0.5 ? "var(--warn)" : "var(--danger)";

    const scoreLabel = state.module === "mixed" || isDiagnostic
      ? `${overall} est. total`
      : `${overall} ${moduleLabel(state.module)}`;

    const sectionScoresHTML = isDiagnostic
      ? `
      <div class="section-scores">
        <div class="bd-card"><div class="v">${rwScore}</div><div class="l">Reading & Writing</div></div>
        <div class="bd-card"><div class="v">${mathScore}</div><div class="l">Math</div></div>
      </div>`
      : "";

    let tagline;
    if (pct >= 0.85) tagline = "Elite work — you're in perfect-score territory. 🎯";
    else if (pct >= 0.7) tagline = "Strong performance. A little polish and you're there.";
    else if (pct >= 0.5) tagline = "Solid foundation — target the misses below.";
    else tagline = "Good start. Review the explanations and run it back.";

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

      ${sectionScoresHTML}

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
        state.checkMode = true;
        state.reviewMode = true;
        state.current = Number(it.dataset.review);
        ensureCurrentVisible();
        show("exam");
        renderQuestion();
        renderFooter();
      });
    });

    document.getElementById("retryBtn").addEventListener("click", () => {
      if (state.module === "full-diagnostic") startFullDiagnostic();
      else if (state.module === "diagnostic") startDiagnostic();
      else startModule(state.module);
    });
    document.getElementById("homeBtn").addEventListener("click", goHome);
  }

  // ---- Stats persistence ----
  function saveStats(correct, total) {
    try {
      const raw = localStorage.getItem("sat_stats");
      const stats = raw ? JSON.parse(raw) : { sessions: 0, correct: 0, total: 0 };
      stats.sessions++;
      stats.correct += correct;
      stats.total += total;
      localStorage.setItem("sat_stats", JSON.stringify(stats));
      renderStreak();
    } catch (e) { /* localStorage unavailable */ }
  }

  function renderStreak() {
    try {
      const raw = localStorage.getItem("sat_stats");
      const el = document.getElementById("streak");
      if (!raw) { el.classList.add("hidden"); return; }
      const s = JSON.parse(raw);
      const acc = s.total ? Math.round((s.correct / s.total) * 100) : 0;
      el.classList.remove("hidden");
      el.innerHTML = `🔥 <b>${s.sessions}</b> sessions · <b>${acc}%</b> lifetime accuracy`;
    } catch (e) {}
  }

  function goHome() {
    clearInterval(state.timer);
    clearInterval(state.breakTimer);
    show("landing");
    renderStreak();
  }

  // ---- Global wiring ----
  function init() {
    document.querySelectorAll("[data-start]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.start === "diagnostic") startDiagnostic();
        else if (btn.dataset.start === "full-diagnostic") startFullDiagnostic();
        else startModule(btn.dataset.start);
      });
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
    document.getElementById("eliminateBtn").addEventListener("click", () => {
      state.eliminating = !state.eliminating;
      document.getElementById("eliminateBtn").classList.toggle("active", state.eliminating);
      document.getElementById("choices")?.classList.toggle("eliminating", state.eliminating);
    });
    document.getElementById("checkToggle").addEventListener("click", () => {
      state.checkMode = !state.checkMode;
      document.getElementById("checkToggle").classList.toggle("active", state.checkMode);
      renderQuestion();
    });
    const confirmModal = document.getElementById("confirmModal");
    document.getElementById("quitBtn").addEventListener("click", () => {
      confirmModal.classList.remove("hidden");
    });
    document.getElementById("confirmCancel").addEventListener("click", () => {
      confirmModal.classList.add("hidden");
    });
    document.getElementById("confirmEnd").addEventListener("click", () => {
      confirmModal.classList.add("hidden");
      if (state.module === "full-diagnostic" && !state.reviewMode) {
        // Score the whole 98-question attempt: record this module's
        // progress, then count every not-yet-reached module's questions
        // as skipped, so quitting early scores "out of 98" like the rest
        // of the app treats an early finish.
        state.questions.forEach((q, i) => {
          state.fdResults.push({ q, selected: state.answers[i] });
        });
        for (let m = state.fdModuleIndex + 1; m < state.fdModules.length; m++) {
          state.fdModules[m].forEach((q) => {
            state.fdResults.push({ q, selected: undefined });
          });
        }
        finishFullDiagnostic();
      } else {
        finishExam();
      }
    });
    confirmModal.addEventListener("click", (e) => {
      if (e.target === confirmModal) confirmModal.classList.add("hidden");
    });
    document.querySelectorAll("[data-home]").forEach((b) =>
      b.addEventListener("click", goHome)
    );

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

    renderStreak();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
