// Question bank for SAT ScoreBoost
// Each question: { id, module, skill, difficulty(1-3), passage?, prompt, choices[4], answer(index), explanation }

const QUESTIONS = [
  // ---------------- READING & WRITING ----------------
  {
    id: "rw-1",
    module: "rw",
    skill: "Words in Context",
    difficulty: 1,
    passage:
      "Marine biologist Ayana Elizabeth Johnson argues that solutions to climate change are not ______; the ocean, she notes, offers a wealth of untapped strategies, from restoring coastal wetlands to expanding offshore wind.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["scarce", "abundant", "theoretical", "expensive"],
    answer: 0,
    explanation:
      "The clause after the semicolon says the ocean offers 'a wealth of untapped strategies.' For the passage to be logical, the first clause must claim solutions are NOT rare — so 'scarce' fits the 'not ___' structure.",
  },
  {
    id: "rw-2",
    module: "rw",
    skill: "Command of Evidence",
    difficulty: 2,
    passage:
      "A student claims that urban community gardens meaningfully reduce household grocery spending for participating families.",
    prompt:
      "Which finding, if true, would most directly support the student's claim?",
    choices: [
      "Families in a community-garden program reported spending 18% less on produce over a growing season than comparable non-participating families.",
      "Community gardens are most often located in densely populated neighborhoods.",
      "Participants said gardening improved their mood and sense of community.",
      "The number of community gardens in the city doubled over five years.",
    ],
    answer: 0,
    explanation:
      "The claim is specifically about reduced grocery spending. Only choice A provides quantitative evidence tying garden participation to lower spending on food.",
  },
  {
    id: "rw-3",
    module: "rw",
    skill: "Boundaries",
    difficulty: 2,
    passage:
      "By the time the expedition reached the summit ______ nearly every member had run out of supplemental oxygen.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [", ", ": ", "; ", ""],
    answer: 0,
    explanation:
      "The introductory dependent clause ('By the time...summit') must be separated from the main clause with a comma. A colon or semicolon would incorrectly imply the first part can stand alone.",
  },
  {
    id: "rw-4",
    module: "rw",
    skill: "Form, Structure, and Sense",
    difficulty: 2,
    passage:
      "The researchers noted that the migratory patterns of the songbirds ______ significantly over the past decade, likely in response to warming temperatures.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["have shifted", "has shifted", "shifting", "to shift"],
    answer: 0,
    explanation:
      "The subject 'patterns' is plural, so it needs the plural verb 'have shifted.' 'Over the past decade' signals present-perfect tense.",
  },
  {
    id: "rw-5",
    module: "rw",
    skill: "Transitions",
    difficulty: 2,
    passage:
      "Solar panel efficiency has improved dramatically in the last fifteen years. ______ the cost of installation has fallen by more than 70%, making solar accessible to far more households.",
    prompt: "Which choice completes the text with the most logical transition?",
    choices: ["Moreover,", "Nevertheless,", "In contrast,", "For example,"],
    answer: 0,
    explanation:
      "The second sentence adds a second positive development (falling cost) to the first (rising efficiency). 'Moreover' signals addition of a supporting point.",
  },
  {
    id: "rw-6",
    module: "rw",
    skill: "Central Ideas",
    difficulty: 3,
    passage:
      "Historians once portrayed the medieval period as a cultural 'dark age,' but recent scholarship emphasizes vibrant networks of trade, translation, and intellectual exchange that spanned continents. Manuscripts preserved and expanded classical knowledge, while universities emerged as centers of rigorous debate.",
    prompt: "Which choice best states the main idea of the text?",
    choices: [
      "Newer scholarship challenges the view of the medieval period as intellectually stagnant.",
      "Medieval universities were the first institutions to preserve classical texts.",
      "Trade networks were the most important feature of medieval life.",
      "Historians have always agreed about the vibrancy of medieval culture.",
    ],
    answer: 0,
    explanation:
      "The passage contrasts the old 'dark age' view with recent scholarship showing intellectual vibrancy. Choice A captures that reframing; the others overstate details or contradict the text.",
  },
  {
    id: "rw-7",
    module: "rw",
    skill: "Words in Context",
    difficulty: 3,
    passage:
      "Though critics initially dismissed the composer's work as ______, later generations recognized its intricate structure and emotional depth, elevating pieces once ignored into staples of the concert repertoire.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: ["slight", "melodic", "controversial", "revolutionary"],
    answer: 0,
    explanation:
      "The contrast ('Though...but later recognized...depth') requires an initially negative, dismissive judgment. 'Slight' means trivial or insubstantial, fitting the dismissal that later proved wrong.",
  },
  {
    id: "rw-8",
    module: "rw",
    skill: "Boundaries",
    difficulty: 1,
    passage:
      "The city council approved the new bike lane ______ construction is scheduled to begin in the spring.",
    prompt: "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: ["; ", ", ", " ", " and, "],
    answer: 0,
    explanation:
      "Two independent clauses ('The council approved...' and 'construction is scheduled...') must be joined by a semicolon (or a comma + conjunction). Only the semicolon is offered correctly.",
  },

  // ---------------- MATH ----------------
  {
    id: "m-1",
    module: "math",
    skill: "Linear equations",
    difficulty: 1,
    prompt: "If 3x + 7 = 22, what is the value of x?",
    choices: ["5", "7", "15", "29/3"],
    answer: 0,
    explanation: "3x + 7 = 22 → 3x = 15 → x = 5.",
  },
  {
    id: "m-2",
    module: "math",
    skill: "Ratios & proportions",
    difficulty: 1,
    prompt:
      "A recipe requires 2 cups of flour for every 3 cups of sugar. If a baker uses 8 cups of flour, how many cups of sugar are needed?",
    choices: ["12", "10", "9", "16"],
    answer: 0,
    explanation:
      "Set up the proportion 2/3 = 8/x. Cross-multiply: 2x = 24, so x = 12 cups of sugar.",
  },
  {
    id: "m-3",
    module: "math",
    skill: "Percentages",
    difficulty: 2,
    prompt:
      "A jacket originally priced at $80 is discounted by 25%. A sales tax of 8% is then applied to the discounted price. What is the final price?",
    choices: ["$64.80", "$60.00", "$66.00", "$62.40"],
    answer: 0,
    explanation:
      "Discounted price: 80 × 0.75 = $60. With tax: 60 × 1.08 = $64.80.",
  },
  {
    id: "m-4",
    module: "math",
    skill: "Systems of equations",
    difficulty: 2,
    prompt:
      "If 2x + y = 11 and x − y = 1, what is the value of x?",
    choices: ["4", "3", "5", "6"],
    answer: 0,
    explanation:
      "Add the equations: (2x + y) + (x − y) = 11 + 1 → 3x = 12 → x = 4.",
  },
  {
    id: "m-5",
    module: "math",
    skill: "Quadratics",
    difficulty: 2,
    prompt:
      "The expression x² − 5x + 6 can be factored as (x − a)(x − b). What is the value of a + b?",
    choices: ["5", "6", "1", "−5"],
    answer: 0,
    explanation:
      "x² − 5x + 6 = (x − 2)(x − 3), so a and b are 2 and 3. Their sum is 5 (which equals the coefficient of the middle term with sign flipped).",
  },
  {
    id: "m-6",
    module: "math",
    skill: "Linear functions",
    difficulty: 2,
    prompt:
      "A line passes through the points (1, 4) and (3, 10). What is the slope of the line?",
    choices: ["3", "2", "6", "1/3"],
    answer: 0,
    explanation:
      "Slope = (10 − 4) / (3 − 1) = 6 / 2 = 3.",
  },
  {
    id: "m-7",
    module: "math",
    skill: "Exponents",
    difficulty: 2,
    prompt: "If 2^(x+1) = 32, what is the value of x?",
    choices: ["4", "5", "3", "6"],
    answer: 0,
    explanation: "32 = 2^5, so x + 1 = 5, giving x = 4.",
  },
  {
    id: "m-8",
    module: "math",
    skill: "Geometry",
    difficulty: 2,
    prompt:
      "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
    choices: ["10", "14", "48", "√28"],
    answer: 0,
    explanation:
      "By the Pythagorean theorem: √(6² + 8²) = √(36 + 64) = √100 = 10.",
  },
  {
    id: "m-9",
    module: "math",
    skill: "Statistics",
    difficulty: 2,
    prompt:
      "The list of numbers 4, 8, 8, 10, 15 has what median?",
    choices: ["8", "9", "10", "8.5"],
    answer: 0,
    explanation:
      "With 5 values sorted, the median is the middle (3rd) value: 8.",
  },
  {
    id: "m-10",
    module: "math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt:
      "The function f is defined by f(x) = x² − 4x + 3. For what value of x does f reach its minimum?",
    choices: ["2", "−2", "4", "3"],
    answer: 0,
    explanation:
      "The vertex x-coordinate is −b/(2a) = −(−4)/(2·1) = 2. The parabola opens upward, so the minimum occurs at x = 2.",
  },
  {
    id: "m-11",
    module: "math",
    skill: "Word problems",
    difficulty: 3,
    prompt:
      "A car rental costs $40 per day plus $0.20 per mile. If the total charge for a one-day rental was $70, how many miles were driven?",
    choices: ["150", "175", "125", "350"],
    answer: 0,
    explanation:
      "70 = 40 + 0.20m → 30 = 0.20m → m = 150 miles.",
  },
  {
    id: "m-12",
    module: "math",
    skill: "Circles",
    difficulty: 3,
    prompt:
      "A circle has a circumference of 12π. What is its area?",
    choices: ["36π", "12π", "6π", "144π"],
    answer: 0,
    explanation:
      "Circumference = 2πr = 12π → r = 6. Area = πr² = π(6²) = 36π.",
  },
];
