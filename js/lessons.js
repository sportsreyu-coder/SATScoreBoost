// SAT ScoreBoost — Lessons content
//
// Structured the same way the official digital SAT is: one entry per College
// Board domain, each holding every skill (sub-topic) the College Board tests
// within it. `skill` strings match the `skill` field on QUESTIONS exactly,
// so a lesson can hand off straight into a filtered practice set.
//
// Most skills are scaffolded with `ready: false` (shown as "Coming soon" in
// the UI) — one skill per domain currently has full written content
// (`ready: true` + a `content` block) to prove out the pattern end to end.

const LESSONS = [
  {
    domain: "Information and Ideas",
    module: "rw",
    topics: [
      {
        skill: "Central Ideas and Details",
        ready: true,
        content: {
          summary:
            "Identify a text's central idea, main purpose, or key supporting details — and don't mistake a true-but-minor detail for the main point.",
          concepts: [
            "Before looking at the choices, summarize the passage's main point in your own words in one sentence.",
            "The central idea is what the passage is mostly about — not every fact it mentions along the way.",
            "Wrong answers often lift a real detail from the text but present it as the main point, or overstate/understate what the passage actually says.",
            "For 'which detail best supports' questions, go back to the specific sentence(s) the question is pointing at rather than relying on memory.",
          ],
          example: {
            prompt:
              "A short passage describes a marine biologist who spent a decade tracking a single pod of orcas, and concludes that the pod's hunting technique is passed down through generations rather than instinctive. Which choice best states the main idea?",
            choices: [
              "Orcas are highly intelligent marine mammals.",
              "The researcher spent ten years studying one pod of orcas.",
              "The pod's hunting technique appears to be culturally learned, not innate.",
              "Marine biology requires many years of patient observation.",
            ],
            correctIndex: 2,
            walkthrough:
              "Choices A, B, and D are all true statements the passage supports — but each is a supporting detail or background fact, not the point the passage is building toward. The passage's conclusion (learned, not instinctive) is choice C. Whenever a choice is 'true but small,' keep reading for the option that matches the passage's actual conclusion.",
          },
          mistakes: [
            "Picking the choice that sounds most impressive or detailed instead of the one that matches the passage's actual conclusion.",
            "Answering from memory of the whole passage instead of rereading the exact lines a detail question references.",
            "Confusing a supporting example with the claim it's supporting.",
          ],
        },
      },
      { skill: "Command of Evidence (Textual)", ready: false },
      { skill: "Command of Evidence (Quantitative)", ready: false },
      { skill: "Inferences", ready: false },
    ],
  },
  {
    domain: "Craft and Structure",
    module: "rw",
    topics: [
      {
        skill: "Words in Context",
        ready: true,
        content: {
          summary:
            "Choose the word or phrase that best fits the blank based on the surrounding context — these are vocabulary questions in disguise as reading comprehension.",
          concepts: [
            "Cover the answer choices and predict your own word for the blank first, using only the sentence's logic (contrast words like 'however' or 'yet' flip the meaning you're looking for).",
            "Then match your predicted word to the closest choice — don't let an unfamiliar-sounding option talk you out of a good prediction.",
            "Every choice is usually a real, valid word — the test is whether it fits this specific context, not whether you know its dictionary definition.",
            "Watch for words with multiple meanings; the common meaning is often a trap when the passage is using a less common one.",
          ],
          example: {
            prompt:
              "Despite the committee's initial skepticism, the proposal's results were so ______ that even its harshest critics voted to approve it.",
            choices: ["ambiguous", "compelling", "predictable", "controversial"],
            correctIndex: 1,
            walkthrough:
              "'Despite... skepticism' followed by 'even its harshest critics voted to approve' signals the results overcame doubt — so the blank needs a word meaning persuasive. 'Compelling' fits; 'ambiguous' and 'predictable' wouldn't move skeptics, and 'controversial' contradicts unanimous approval.",
          },
          mistakes: [
            "Picking the fanciest-sounding word instead of the one that actually fits the sentence's logic.",
            "Ignoring a contrast signal word (however, although, yet, despite) that reverses the expected meaning.",
            "Translating only part of the sentence instead of the full clause containing the blank.",
          ],
        },
      },
      { skill: "Text Structure and Purpose", ready: false },
      { skill: "Cross-Text Connections", ready: false },
    ],
  },
  {
    domain: "Standard English Conventions",
    module: "rw",
    topics: [
      {
        skill: "Boundaries",
        ready: true,
        content: {
          summary:
            "Correctly punctuate the boundaries between clauses and phrases — commas, semicolons, colons, periods, and dashes each signal a different relationship.",
          concepts: [
            "A semicolon or period can only join two independent clauses (each side could stand alone as a full sentence) — if either side isn't a complete sentence, they're wrong.",
            "A colon introduces something (a list, explanation, or example) and needs a complete sentence before it.",
            "A comma alone cannot join two independent clauses — that's a comma splice, one of the most common wrong answers.",
            "FANBOYS (for, and, nor, but, or, yet, so) can join two independent clauses only when preceded by a comma.",
          ],
          example: {
            prompt:
              "Choose the option that correctly completes the sentence: The lecture ran long ______ several students had already left before the Q&A began.",
            choices: [", so", "; so", ", so,", ". so"],
            correctIndex: 0,
            walkthrough:
              "Both halves are independent clauses joined by the coordinating conjunction 'so,' which needs a comma before it (comma + FANBOYS), not a semicolon (semicolons don't take a conjunction right after them) and not a period (that would leave a lowercase 'so' starting a new sentence incorrectly).",
          },
          mistakes: [
            "Using a comma alone to join two full sentences (comma splice).",
            "Putting a colon after an incomplete introductory phrase.",
            "Treating 'however' or 'therefore' like FANBOYS — they need a semicolon before them, not just a comma.",
          ],
        },
      },
      { skill: "Form, Structure, and Sense", ready: false },
    ],
  },
  {
    domain: "Expression of Ideas",
    module: "rw",
    topics: [
      {
        skill: "Transitions",
        ready: true,
        content: {
          summary:
            "Pick the transition word or phrase that correctly describes the logical relationship between two statements — the test is logic, not vocabulary.",
          concepts: [
            "Before looking at choices, state the relationship in plain English: is the second idea a contrast, a result, an example, an addition, or a restatement of the first?",
            "Common categories: contrast (however, nevertheless), cause/effect (therefore, as a result), addition (furthermore, in addition), example (for instance), and concession (granted, admittedly).",
            "Don't assume the 'obvious' relationship — read both full sentences carefully; the second sentence sometimes complicates or narrows the first rather than simply continuing it.",
            "Eliminate any transition that reverses the actual relationship, even if it 'sounds smooth' when read aloud.",
          ],
          example: {
            prompt:
              "The new policy was projected to reduce costs significantly. ______, actual savings fell far short of expectations.",
            choices: ["Similarly,", "For example,", "However,", "As a result,"],
            correctIndex: 2,
            walkthrough:
              "The first sentence sets up an expectation (significant savings); the second contradicts it (fell short). That's a contrast relationship, so 'However' is correct. 'As a result' would only work if the second sentence were a consequence of the first, not a contradiction of it.",
          },
          mistakes: [
            "Choosing a transition based on how formal it sounds rather than what relationship it signals.",
            "Missing that the second sentence complicates rather than continues the first.",
            "Confusing addition transitions (furthermore) with cause/effect ones (therefore) — they are not interchangeable.",
          ],
        },
      },
      { skill: "Rhetorical Synthesis", ready: false },
    ],
  },
  {
    domain: "Algebra",
    module: "math",
    topics: [
      {
        skill: "Linear equations in one variable",
        ready: true,
        content: {
          summary:
            "Solve equations with one unknown by isolating the variable — the foundation every other Algebra skill on the test builds on.",
          concepts: [
            "Do the same operation to both sides of the equation, in an order that undoes what was done to the variable (distribute first, then combine like terms, then isolate).",
            "Clear fractions or decimals early by multiplying both sides by a common denominator or power of 10 — it makes the rest of the algebra much cleaner.",
            "If a word problem describes the equation, translate it phrase by phrase before solving ('5 more than twice a number' → 2x + 5).",
            "Always check your solution by substituting it back into the original equation, not a simplified version — that catches sign errors.",
          ],
          example: {
            prompt: "Solve for x: 3(x − 4) + 2 = 5x − 18",
            choices: ["x = 2", "x = 4", "x = 5", "x = 8"],
            correctIndex: 1,
            walkthrough:
              "Distribute: 3x − 12 + 2 = 5x − 18 → 3x − 10 = 5x − 18. Move variables to one side: −10 + 18 = 5x − 3x → 8 = 2x → x = 4.",
          },
          mistakes: [
            "Distributing incorrectly across a subtraction (forgetting to distribute the negative sign to every term).",
            "Combining terms from opposite sides of the equation before they're on the same side.",
            "Stopping one step early and picking a choice that matches an intermediate expression instead of the final solved value.",
          ],
        },
      },
      { skill: "Linear equations in two variables", ready: false },
      { skill: "Linear functions", ready: false },
      { skill: "Systems of two linear equations", ready: false },
      { skill: "Linear inequalities in one variable", ready: false },
      { skill: "Linear inequalities in two variables", ready: false },
    ],
  },
  {
    domain: "Advanced Math",
    module: "math",
    topics: [
      {
        skill: "Quadratic equations",
        ready: true,
        content: {
          summary:
            "Solve quadratic equations by factoring, completing the square, or the quadratic formula — and recognize which method is fastest for a given equation.",
          concepts: [
            "If the equation factors easily (small, whole-number roots), factoring is fastest: set it equal to zero, factor, and use the zero-product property.",
            "If it doesn't factor cleanly, the quadratic formula x = (−b ± √(b² − 4ac)) / 2a always works — memorize it cold.",
            "The discriminant (b² − 4ac) tells you the number of real solutions before you even solve: positive → two, zero → one, negative → none.",
            "Watch for equations not already in standard form (ax² + bx + c = 0) — rearrange first, or you'll misidentify a, b, and c.",
          ],
          example: {
            prompt: "What are the solutions to x² − 5x + 6 = 0?",
            choices: ["x = 1, 6", "x = −2, −3", "x = 2, 3", "x = −1, −6"],
            correctIndex: 2,
            walkthrough:
              "Find two numbers that multiply to 6 and add to −5: −2 and −3. So (x − 2)(x − 3) = 0, giving x = 2 or x = 3.",
          },
          mistakes: [
            "Sign errors when factoring — mixing up which factors need to be negative.",
            "Forgetting the ± in the quadratic formula and reporting only one solution.",
            "Dividing both sides by a variable expression (which can silently discard a valid solution) instead of moving everything to one side and factoring.",
          ],
        },
      },
      { skill: "Equivalent expressions", ready: false },
      { skill: "Nonlinear functions", ready: false },
      { skill: "Nonlinear systems of equations", ready: false },
      { skill: "Exponential functions", ready: false },
      { skill: "Exponential equations", ready: false },
      { skill: "Polynomial functions", ready: false },
      { skill: "Function composition", ready: false },
      { skill: "Quadratic inequalities", ready: false },
    ],
  },
  {
    domain: "Problem-Solving and Data Analysis",
    module: "math",
    topics: [
      {
        skill: "Ratios and proportions",
        ready: true,
        content: {
          summary:
            "Set up and solve proportional relationships — the most common way these problems trip students up is skipping the setup and guessing at the operation.",
          concepts: [
            "Write the ratio as a fraction with matching units on top and bottom across both sides (miles/hour = miles/hour, not miles/hour = hour/miles).",
            "Cross-multiply once the proportion is set up correctly — that's usually the whole solve.",
            "For 'scaling' problems (recipes, maps, mixtures), identify the scale factor first, then apply it to every quantity, not just the one asked about.",
            "Percent problems are ratios in disguise: 'what percent of' means part/whole × 100.",
          ],
          example: {
            prompt:
              "A recipe that serves 4 people uses 250 grams of flour. How many grams of flour are needed to serve 10 people, keeping the same proportions?",
            choices: ["400 g", "500 g", "625 g", "700 g"],
            correctIndex: 2,
            walkthrough:
              "Set up the proportion: 250/4 = x/10. Cross-multiply: 4x = 2500 → x = 625.",
          },
          mistakes: [
            "Setting up the proportion with mismatched units (flipping one side relative to the other).",
            "Adding a fixed amount instead of scaling proportionally.",
            "Rounding too early in a multi-step ratio problem, which compounds into a wrong final answer.",
          ],
        },
      },
      { skill: "Percentages", ready: false },
      { skill: "One-variable data", ready: false },
      { skill: "Two-variable data", ready: false },
      { skill: "Probability", ready: false },
      { skill: "Conditional probability", ready: false },
      { skill: "Inference from sample statistics", ready: false },
      { skill: "Evaluating statistical claims", ready: false },
      { skill: "Rates and units", ready: false },
    ],
  },
  {
    domain: "Geometry and Trigonometry",
    module: "math",
    topics: [
      {
        skill: "Right triangles",
        ready: true,
        content: {
          summary:
            "Apply the Pythagorean theorem and special right-triangle ratios to find missing side lengths — the base skill behind most geometry and trig questions.",
          concepts: [
            "The Pythagorean theorem (a² + b² = c²) applies only to right triangles, and c is always the hypotenuse (the side opposite the right angle, and the longest side).",
            "Memorize the two special right triangles: 45-45-90 (sides in ratio 1 : 1 : √2) and 30-60-90 (sides in ratio 1 : √3 : 2) — they let you skip the Pythagorean theorem entirely when you spot them.",
            "Common Pythagorean triples (3-4-5, 5-12-13, 8-15-17) are worth recognizing on sight to save time.",
            "Draw the triangle and label every given value before solving — misreading which side is the hypotenuse is the most common error.",
          ],
          example: {
            prompt: "A right triangle has legs of length 9 and 12. What is the length of the hypotenuse?",
            choices: ["13", "15", "18", "21"],
            correctIndex: 1,
            walkthrough: "9² + 12² = 81 + 144 = 225. √225 = 15. (This is a 3-4-5 triple scaled by 3.)",
          },
          mistakes: [
            "Plugging a leg into the theorem as if it were the hypotenuse.",
            "Forgetting to take the square root at the end and answering with 225.",
            "Misapplying the 45-45-90 or 30-60-90 ratio to a triangle that isn't actually one of those special triangles.",
          ],
        },
      },
      { skill: "Triangle angles", ready: false },
      { skill: "Similar triangles", ready: false },
      { skill: "Right triangle trigonometry", ready: false },
      { skill: "Special right triangles", ready: false },
      { skill: "Circles", ready: false },
      { skill: "Area and volume", ready: false },
      { skill: "Lines and angles", ready: false },
      { skill: "Coordinate geometry", ready: false },
    ],
  },
];
