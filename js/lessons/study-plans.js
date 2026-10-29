// Lesson Plans — Lessons
//
// Three week-by-week plans, one per target score band, that sequence the
// existing lessons into an order and pair each one with a drill at the
// matching difficulty (1 = Easy, 2 = Medium, 3 = Hard). Lessons are
// referenced by their exact `title` from js/lessons/*.js and resolved at
// render time, so a plan never duplicates lesson content — it only orders
// it. A title that no longer matches simply drops out of the plan.
const STUDY_PLANS = [
  {
    id: "easy",
    level: "Easy",
    target: "800",
    title: "Foundations Plan",
    difficulty: 1,
    audience: "For first-time test takers, or anyone scoring below about 700. No prior SAT prep assumed.",
    summary: "Six weeks on the highest-frequency skills on the test: the basic algebra, grammar and reading moves that show up in nearly every module. Only free foundations lessons, drilled on Easy questions.",
    weekly: "3–4 sessions a week, about 30 minutes each",
    habits: [
      "Read the lesson first, then drill 10 Easy questions on that skill. Don't skip ahead to Medium yet.",
      "Answer every question. A wrong guess costs nothing, and a blank is always zero.",
      "Keep a mistake log: for each miss, write one line on why the right answer is right.",
      "Get used to Desmos early. Typing an equation in is often faster than solving by hand.",
    ],
    weeks: [
      {
        title: "Linear equations & sentence boundaries",
        goal: "Solve one-step and two-step equations without errors, and spot a comma splice right away.",
        lessons: [
          "Linear equations in one variable",
          "Boundaries: Commas, Semicolons & Colons",
          "Words in Context",
        ],
      },
      {
        title: "Lines, slope & main ideas",
        goal: "Read slope and y-intercept from an equation or a graph, and summarize a short passage in one sentence.",
        lessons: [
          "Linear equations in two variables",
          "Linear functions",
          "Central Ideas and Details",
        ],
      },
      {
        title: "Percents, ratios & transitions",
        goal: "Set up a proportion or percent problem correctly every time, and choose transitions by logic rather than by sound.",
        lessons: [
          "Percentages",
          "Ratios and proportions",
          "Transitions",
        ],
      },
      {
        title: "Grammar & word problems",
        goal: "Check subject-verb agreement and tense, and turn a word problem into an equation.",
        lessons: [
          "Form, Structure, and Sense",
          "Word problems",
          "Rates and units",
        ],
      },
      {
        title: "Geometry basics & evidence",
        goal: "Know the area, angle and Pythagorean formulas, and back up an answer with a specific line from the text.",
        lessons: [
          "Area and volume",
          "Lines and angles",
          "Right triangles",
          "Command of Evidence (Textual)",
        ],
      },
      {
        title: "Data & review",
        goal: "Read tables and graphs with confidence, then go back over the two weakest skills from your mistake log.",
        lessons: [
          "One-variable data",
          "Command of Evidence (Quantitative)",
          "Systems of two linear equations",
        ],
      },
    ],
    checkpoint: "Ready to move on when you get about 80% of Easy drills right across every skill above. Then start the Builder Plan.",
  },
  {
    id: "medium",
    level: "Medium",
    target: "1200",
    title: "Builder Plan",
    difficulty: 2,
    audience: "For students scoring about 900–1150 who know the basics but lose points to multi-step problems and close answer choices.",
    summary: "Six weeks that finish the core content (quadratics, exponentials, inferences, rhetorical synthesis) and add the first strategy lessons. Drilled on Medium questions.",
    weekly: "4–5 sessions a week, about 45 minutes each",
    habits: [
      "Begin each session with 5 Easy questions as a warm-up, then switch to Medium for the main drill.",
      "Before answering an R&W question, predict the answer in your own words, then match it to a choice.",
      "Aim for about 1 minute 10 seconds per R&W question and 1 minute 35 seconds per Math question. Mark slow questions and move on.",
      "Each week, redo every question in your mistake log that's more than 3 days old.",
    ],
    weeks: [
      {
        title: "Systems, inequalities & punctuation",
        goal: "Solve systems by elimination or substitution, and handle semicolons with conjunctive adverbs like \"however\".",
        lessons: [
          "Systems of two linear equations",
          "Linear inequalities in one variable",
          "Linear inequalities in two variables",
          "Boundaries: Nonrestrictive Elements & Comma Splices with Conjunctive Adverbs",
        ],
      },
      {
        title: "Quadratics & inferences",
        goal: "Factor, use the quadratic formula, and read a parabola, then finish passages with the most defensible inference.",
        lessons: [
          "Quadratic equations",
          "Nonlinear functions",
          "Inferences",
          "Inferences: Precision Inference and Overreach Traps",
        ],
      },
      {
        title: "Exponents & text structure",
        goal: "Use exponent rules and growth/decay models, and name what a sentence or paragraph does in a passage.",
        lessons: [
          "Exponents",
          "Exponential functions",
          "Equivalent expressions",
          "Text Structure and Purpose",
        ],
      },
      {
        title: "Statistics & rhetorical synthesis",
        goal: "Interpret scatterplots and sampling claims, and pick the bullet-note choice that meets the stated goal.",
        lessons: [
          "Two-variable data",
          "Evaluating statistical claims",
          "Probability",
          "Rhetorical Synthesis",
          "Rhetorical Synthesis: Combining Sentences to Meet a Goal",
        ],
      },
      {
        title: "Circles, trig & paired texts",
        goal: "Apply SOH-CAH-TOA, special right triangles and circle facts, and compare two authors' views.",
        lessons: [
          "Right triangle trigonometry",
          "Special right triangles",
          "Circles",
          "Similar triangles",
          "Cross-Text Connections",
        ],
      },
      {
        title: "Modifiers, multi-step problems & review",
        goal: "Fix dangling modifiers and parallelism, take on dense word problems, then go back over the weakest skills from your log.",
        lessons: [
          "Form, Structure, and Sense: Modifiers & Parallel Structure",
          "Percentages: Successive percent changes and compounding",
          "Word problems: Multi-Step Translation with Rates, Ratios, and Percent Change",
          "Command of Evidence (Textual): Precision Matching and Common Trap Patterns",
        ],
      },
    ],
    checkpoint: "Ready to move on when you get about 75% of Medium drills right and finish each module with a few minutes to spare. Then start the Elite Plan.",
  },
  {
    id: "hard",
    level: "Hard",
    target: "1500+",
    title: "Elite Plan",
    difficulty: 3,
    audience: "For students scoring about 1300–1450 who need to win the hard second module and stop losing points to traps.",
    summary: "Six weeks on the edge cases, structural shortcuts and trap patterns that decide the top scores. Mostly Pro deep-dive lessons, drilled only on Hard questions.",
    weekly: "5 sessions a week, 45–60 minutes each, plus one timed full module",
    habits: [
      "Drill only Hard questions. If you get one right only after a long struggle, log it as a miss.",
      "Look for the structure first, before computing: the discriminant, a symmetric factor, a constant that cancels.",
      "On R&W, eliminate each wrong choice for a specific reason. A choice that only feels weaker isn't a reason.",
      "Use Desmos to check every nonlinear question in under 20 seconds: graph it, find the intersection, done.",
      "Do one timed module a week, and review every question you weren't 100% sure of, including ones you got right.",
    ],
    weeks: [
      {
        title: "Advanced quadratics & nonlinear systems",
        goal: "Use the discriminant and vertex form to answer \"how many solutions\" and \"for what value of k\" questions without solving all the way.",
        lessons: [
          "Quadratic equations: Completing the square and vertex form",
          "Nonlinear systems of equations: Using the discriminant to count intersections",
          "Nonlinear systems of equations: Circles, parabolas, and other conic intersections",
          "Quadratic inequalities: Sign analysis and the discriminant",
        ],
      },
      {
        title: "Polynomials, functions & precision reading",
        goal: "Handle zeros and multiplicity, composition and domain, and Inference choices that go one step too far.",
        lessons: [
          "Polynomial functions: Zeros, multiplicity, and factoring higher-degree expressions",
          "Function composition: Domain restrictions and undefined values",
          "Equivalent expressions: Simplifying and combining rational expressions",
          "Inferences: Paired-Passage and Multi-Step Inferences",
        ],
      },
      {
        title: "Edge-case algebra & tone",
        goal: "Recognize no-solution and infinite-solution setups right away, and tell apart choices that differ only in connotation.",
        lessons: [
          "Linear equations in one variable: No-Solution, Infinite-Solution, and Absolute Value Cases",
          "Systems of two linear equations: No-Solution and Infinite-Solution Systems",
          "Words in Context: Connotation, Register, and Tone Calibration",
          "Words in Context: Multiple-Meaning Words",
        ],
      },
      {
        title: "Hard geometry & whole-passage structure",
        goal: "Complete the square for circle equations, chase angles across composite figures, and map how a whole passage is organized.",
        lessons: [
          "Circles: The Circle Equation & Completing the Square",
          "Circles: Arc Length, Sector Area & Inscribed Angles",
          "Right triangle trigonometry: Co-Function Identities & Two-Triangle Setups",
          "Area and volume: How Scaling Affects Area vs. Volume",
          "Text Structure and Purpose: Whole-Passage Organization Patterns",
        ],
      },
      {
        title: "Statistics traps & competing evidence",
        goal: "Answer margin-of-error and confounding questions, and choose between two pieces of evidence that both look supportive.",
        lessons: [
          "Inference from sample statistics: Margin of error and confidence interval interpretation",
          "Evaluating statistical claims: Experimental design and confounding variables",
          "Conditional probability: Two-way tables with missing entries",
          "Command of Evidence (Textual): Evaluating Competing Evidence",
          "Command of Evidence (Quantitative): Two-Variable and Multi-Panel Graphics",
        ],
      },
      {
        title: "Fine-grained conventions & final polish",
        goal: "Get the rare grammar items right (possessives, tricky agreement), predict an author's response, and go back over your weakest Hard skills.",
        lessons: [
          "Boundaries: Apostrophes & Possessives",
          "Form, Structure, and Sense: Subject-Verb Agreement",
          "Cross-Text Connections: Predicting an Author's Response",
          "Transitions: Contrast, Concession & Emphasis Words",
          "Rhetorical Synthesis: Choosing the Best Supporting Detail",
        ],
      },
    ],
    checkpoint: "On track for 1500+ when you get about 70% of Hard drills right under time and miss no more than 2–3 questions per timed module.",
  },
];
