// SAT ScoreBoost — practice engine
(function () {
  "use strict";

  // ---- State ----
  const state = {
    module: null,      // "rw" | "math" | "mixed"
    questions: [],     // active question set
    answers: {},       // qIndex -> choiceIndex
    eliminated: {},    // qIndex -> Set of choiceIndex
    marked: {},        // qIndex -> bool
    current: 0,
    eliminating: false,
    timer: null,
    secondsLeft: 0,
    checkMode: false,  // instant-feedback per question after answering
    pillWindowStart: 0, // first index shown in the footer's question-pill strip
  };

  const SECONDS_PER_Q = 90;
  const PILL_WINDOW = 10; // how many question pills are visible at once

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

  function moduleLabel(m) {
    return m === "rw" ? "Reading & Writing" : m === "math" ? "Math" : "Full Practice";
  }

  function updateModuleName() {
    document.getElementById("moduleName").innerHTML =
      `${moduleLabel(state.module)} <span>· ${state.questions.length} questions</span>`;
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
          <button class="${classes.join(" ")}" data-choice="${ci}">
            <span class="letter">${letters[ci]}</span>
            <span class="ctext">${c}</span>
            <span class="choice-cross" data-cross="${ci}" title="Cross out">✕</span>
          </button>`;
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
      btn.addEventListener("click", (e) => {
        if (e.target.dataset.cross !== undefined) return; // handled below
        if (elimSet.has(ci)) return; // can't select eliminated
        if (state.checkMode && answered) return; // locked after check
        selectChoice(ci);
      });
    });
    body.querySelectorAll(".choice-cross").forEach((x) => {
      x.addEventListener("click", (e) => {
        e.stopPropagation();
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
  function finishExam() {
    clearInterval(state.timer);
    const total = state.questions.length;
    let correct = 0;
    state.questions.forEach((q, i) => {
      if (state.answers[i] === q.answer) correct++;
    });
    const pct = total ? correct / total : 0;

    // Scaled score estimate: map accuracy to SAT section band
    const sectionScore = Math.round((200 + pct * 600) / 10) * 10; // 200–800
    let overall;
    if (state.module === "mixed") {
      overall = sectionScore * 2; // rough two-section estimate
    } else {
      overall = sectionScore; // single section
    }

    renderResults({ total, correct, wrong: total - correct, pct, sectionScore, overall });
    saveStats(correct, total);
    show("results");
  }

  function renderResults(r) {
    const { total, correct, wrong, pct, overall } = r;

    // ring
    const radius = 92;
    const circ = 2 * Math.PI * radius;
    const offset = circ * (1 - pct);
    const ringColor = pct >= 0.75 ? "var(--accent)" : pct >= 0.5 ? "var(--warn)" : "var(--danger)";

    const scoreLabel = state.module === "mixed"
      ? `${overall} est. total`
      : `${overall} ${moduleLabel(state.module)}`;

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

      <div class="breakdown">
        <div class="bd-card correct"><div class="v">${correct}</div><div class="l">Correct</div></div>
        <div class="bd-card wrong"><div class="v">${wrong}</div><div class="l">Incorrect</div></div>
        <div class="bd-card"><div class="v">${overall}</div><div class="l">Est. score</div></div>
      </div>

      <h3 class="section-title" style="font-size:1.2rem;margin-bottom:16px;">Question review</h3>
      <div class="review-list" id="reviewList"></div>

      <div class="results-actions">
        <button class="btn btn-primary" id="retryBtn">Try Again</button>
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
        state.current = Number(it.dataset.review);
        ensureCurrentVisible();
        show("exam");
        renderQuestion();
        renderFooter();
      });
    });

    document.getElementById("retryBtn").addEventListener("click", () => startModule(state.module));
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
    show("landing");
    renderStreak();
  }

  // ---- Global wiring ----
  function init() {
    document.querySelectorAll("[data-start]").forEach((btn) => {
      btn.addEventListener("click", () => startModule(btn.dataset.start));
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
      finishExam();
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
