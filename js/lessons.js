// SAT ScoreBoost — Lessons content
//
// Structured the same way the official digital SAT is: one entry per College
// Board domain, each holding a set of lessons. `skill` on every lesson
// matches the `skill` field on QUESTIONS exactly, so a lesson can hand off
// straight into a filtered practice set — even when several lessons share
// the same skill (deeper sub-lessons on the same official CB skill).
//
// Tiering: every domain has exactly one `tier: "free"` lesson (its
// fundamentals) plus three `tier: "pro"` lessons that go deeper — either
// into the domain's remaining skills, or into specific intricacies of a
// skill the free lesson already introduced.

const LESSONS = [
  {
    domain: "Information and Ideas",
    module: "rw",
    lessons: [
      {
        skill: "Central Ideas and Details",
        title: "Central Ideas and Details",
        tier: "free",
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
      {
        skill: "Command of Evidence (Textual)",
        title: "Command of Evidence (Textual)",
        tier: "pro",
        content: {
          summary:
            "Find the specific piece of text — a quotation, example, or detail — that best supports a given claim or completes a stated argument.",
          concepts: [
            "Identify exactly what claim the question wants supported, in your own words, before scanning the choices.",
            "Correct answers directly and specifically back the claim; wrong answers are often true statements from the passage that support a different point.",
            "Prefer the choice with concrete, specific evidence (a number, a named example, a direct quotation) over one that's vague or general.",
            "If two choices both seem related, check which one addresses the exact claim, not just the general topic.",
          ],
          example: {
            prompt:
              "A biologist claims that a species of frog changes its mating call based on nearby traffic noise. Which finding best supports this claim?",
            choices: [
              "Frogs recorded near busy highways used calls with a 30% higher pitch than frogs recorded in quiet forests.",
              "Frogs are known to communicate using a variety of vocalizations.",
              "Traffic noise has increased in many frog habitats over the past decade.",
              "The study included frogs from twelve different wetland sites.",
            ],
            correctIndex: 0,
            walkthrough:
              "The claim is specifically that traffic noise causes a change in mating call. Only the first choice directly ties noise level to a measured change in the call itself.",
          },
          mistakes: [
            "Choosing a fact that's merely on-topic (frogs, noise, wetlands) instead of one that directly links cause and effect the claim describes.",
            "Picking a detail about the study's method (site count) instead of a finding that supports the claim.",
            "Overlooking a choice because it uses a specific number, when specific numbers are usually the strongest evidence.",
          ],
        },
      },
      {
        skill: "Command of Evidence (Quantitative)",
        title: "Command of Evidence (Quantitative)",
        tier: "pro",
        content: {
          summary:
            "Read a table, graph, or chart and select the data point or trend that most directly supports a given claim.",
          concepts: [
            "Before looking at the answer choices, identify exactly what trend or value the claim requires (increasing, decreasing, a specific comparison, etc.).",
            "Read axis labels and units carefully — a common wrong answer misreads what's actually being measured or compared.",
            "The right choice usually cites a specific value or comparison straight from the graphic; avoid choices that describe it in vague, general terms.",
            "Watch for a choice that's numerically true but doesn't actually address the claim being tested.",
          ],
          example: {
            prompt:
              "A graph shows a city's annual rainfall from 2015-2023, rising steadily except for a sharp drop in 2020. A researcher claims a drought occurred in 2020. Which statement from the graph best supports this claim?",
            choices: [
              "Rainfall in 2020 was noticeably lower than in both 2019 and 2021.",
              "The graph covers a nine-year period.",
              "Rainfall generally increased from 2015 to 2023.",
              "The city is located in a coastal region.",
            ],
            correctIndex: 0,
            walkthrough:
              "A drought claim needs evidence of unusually low rainfall specifically in 2020 — the dip relative to the surrounding years is exactly that.",
          },
          mistakes: [
            "Picking a true but generic description of the graph (its time span) instead of the specific data point relevant to the claim.",
            "Citing the overall upward trend, which actually argues against an isolated drought rather than for one.",
            "Confusing an unrelated fact (location) for graph evidence.",
          ],
        },
      },
      {
        skill: "Inferences",
        title: "Inferences",
        tier: "pro",
        content: {
          summary:
            "Draw the conclusion the text logically supports without stating directly — inference questions reward the smallest safe step beyond what's written, not a leap.",
          concepts: [
            "A good inference is a small, necessary step from what the text says — not a guess that requires outside knowledge or an unsupported leap.",
            "Eliminate choices that are too extreme (using words like 'always,' 'never,' 'proves,' 'guarantees') — real inferences are usually more measured.",
            "Eliminate choices that directly contradict something the passage states.",
            "The right inference often explains a detail the passage presents as surprising or notable, using only information given.",
          ],
          example: {
            prompt:
              "A company known for slow, deliberate product releases surprised analysts by launching three new products within a single month. Which is the most logical inference?",
            choices: [
              "The company shifted its usual approach to bringing products to market.",
              "The company's products are of lower quality than before.",
              "Analysts had never followed the company's releases before.",
              "The company will now release three products every month going forward.",
            ],
            correctIndex: 0,
            walkthrough:
              "The passage's own framing ('surprised analysts,' contrasted with the company's usual slow pace) supports only the modest inference that its approach changed — not a claim about quality, analyst history, or future pace.",
          },
          mistakes: [
            "Picking an inference that assumes a permanent future pattern from a single data point.",
            "Inferring a quality judgment the passage never suggests.",
            "Choosing the most dramatic-sounding option instead of the most directly supported one.",
          ],
        },
      },
    ],
  },
  {
    domain: "Craft and Structure",
    module: "rw",
    lessons: [
      {
        skill: "Words in Context",
        title: "Words in Context",
        tier: "free",
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
      {
        skill: "Words in Context",
        title: "Words in Context: Multiple-Meaning Words",
        tier: "pro",
        content: {
          summary:
            "Many vocabulary blanks use a common word in its less common meaning — the trap is answering with the word's most familiar sense.",
          concepts: [
            "Words like 'table' (to postpone, not furniture), 'sound' (valid/reliable, not noise), or 'novel' (new, not a book) can appear in an unfamiliar sense — check the sentence's actual logic, not your first association.",
            "If your predicted word doesn't match any obvious choice, consider whether a familiar-looking choice might be using a less common definition.",
            "Context clues (surrounding cause/effect or contrast language) reveal which sense of the word fits — the sentence structure won't accommodate the wrong meaning.",
            "Don't eliminate a choice just because it seems like the wrong part of speech for the common meaning — double check its less common use.",
          ],
          example: {
            prompt: "The committee voted to ______ the proposal until more research could be conducted.",
            choices: ["table", "applaud", "publish", "endorse"],
            correctIndex: 0,
            walkthrough:
              "'Table' here means to postpone or set aside for later — the classic legislative meaning. 'Until more research' signals a delay, which only 'table' provides among the choices.",
          },
          mistakes: [
            "Rejecting 'table' because its everyday meaning (furniture) doesn't fit, without considering its formal/legislative sense.",
            "Choosing a word that fits the general topic (a vote, a proposal) but not the specific logic of postponement.",
            "Overlooking a contrast or timing cue ('until') that points to a less common word sense.",
          ],
        },
      },
      {
        skill: "Text Structure and Purpose",
        title: "Text Structure and Purpose",
        tier: "pro",
        content: {
          summary:
            "Identify how a passage is organized (problem/solution, chronological, compare/contrast) or why the author included a specific sentence or paragraph.",
          concepts: [
            "For whole-passage structure questions, label what each paragraph or sentence is doing (introduce, complicate, support, conclude) before choosing.",
            "For 'why did the author include this sentence' questions, look at what comes immediately before and after it — its purpose is usually to bridge, support, or complicate that surrounding content.",
            "Distinguish what a sentence says (its content) from what it does (its function) — the correct answer to a purpose question describes the function, not just restates the content.",
            "Common purpose answers: to provide an example, to introduce a counterargument, to qualify an earlier claim, to transition between ideas.",
          ],
          example: {
            prompt:
              "A passage first describes a scientist's popular theory, then presents a study that contradicts it. What is the primary purpose of the second part of the passage?",
            choices: [
              "To introduce evidence that challenges the previously described theory.",
              "To provide additional support for the scientist's theory.",
              "To summarize the scientist's career.",
              "To explain how the theory was first developed.",
            ],
            correctIndex: 0,
            walkthrough:
              "The second part 'contradicts' the theory from part one, so its function is to challenge it with evidence — exactly what choice A describes.",
          },
          mistakes: [
            "Restating the content of the sentence or paragraph instead of naming its function within the passage.",
            "Picking a purpose that would fit a typical passage but doesn't match what this specific passage actually does.",
            "Confusing 'supports' and 'challenges' when a structural cue (like 'however' or 'but') signals a contrast.",
          ],
        },
      },
      {
        skill: "Cross-Text Connections",
        title: "Cross-Text Connections",
        tier: "pro",
        content: {
          summary:
            "Compare two short passages on a related topic — identify where the authors agree, disagree, or address different aspects of the same issue.",
          concepts: [
            "Read for each passage's main claim first, independently, before comparing them — don't try to hold both in mind while reading the first one.",
            "Common relationships: the authors agree but emphasize different evidence, they directly disagree, or one addresses a question the other doesn't raise.",
            "Watch for questions asking how one author would likely respond to the other's claim — this means applying the first author's logic to the second's specific claim, not just restating either passage.",
            "Avoid choices that force a disagreement between passages that are actually just discussing different aspects of the same topic.",
          ],
          example: {
            prompt:
              "Passage 1 argues rising rents are caused mainly by low housing supply. Passage 2 argues rising rents are caused mainly by investor speculation. How would the author of Passage 1 most likely respond to Passage 2's claim?",
            choices: [
              "By arguing that increasing the housing supply would address rising rents regardless of investor activity.",
              "By agreeing that speculation is the primary cause of rising rents.",
              "By stating that rents are not actually rising.",
              "By claiming investors are not interested in housing markets.",
            ],
            correctIndex: 0,
            walkthrough:
              "Passage 1's author believes supply is the main driver, so they'd likely respond by reasserting that fixing supply addresses the problem, not by conceding speculation is the cause.",
          },
          mistakes: [
            "Having the first author simply agree with the second, ignoring that their passage stakes out a different primary cause.",
            "Inventing a response neither passage's logic actually supports.",
            "Confusing which passage is 'responding' to which.",
          ],
        },
      },
    ],
  },
  {
    domain: "Standard English Conventions",
    module: "rw",
    lessons: [
      {
        skill: "Boundaries",
        title: "Boundaries: Commas, Semicolons & Colons",
        tier: "free",
        content: {
          summary:
            "Correctly punctuate the boundaries between clauses and phrases — commas, semicolons, colons, and periods each signal a different relationship.",
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
      {
        skill: "Boundaries",
        title: "Boundaries: Apostrophes & Possessives",
        tier: "pro",
        content: {
          summary:
            "Distinguish possessive apostrophes from plurals and contractions — a small, rule-based skill that improves fast with practice.",
          concepts: [
            "Singular possessive: add 's (the student's book). Plural possessive already ending in s: add just an apostrophe (the students' books).",
            "Never use an apostrophe to make a word simply plural — no apostrophe is needed for 'the cats,' only for possession.",
            "'Its' is possessive ('the dog wagged its tail'); 'it's' means 'it is' or 'it has.' This mix-up is one of the most tested distinctions on the exam.",
            "For irregular plurals not ending in s (children, people), add 's for possession just like a singular noun (the children's toys).",
          ],
          example: {
            prompt:
              "Choose the option that correctly completes the sentence: The company reported that ______ profits had declined for the third consecutive quarter.",
            choices: ["its", "it's", "its'", "their's"],
            correctIndex: 0,
            walkthrough:
              "The sentence needs the possessive form describing the company's profits, which is 'its' (no apostrophe). 'It's' means 'it is,' which doesn't fit here.",
          },
          mistakes: [
            "Confusing 'its' and 'it's' since they sound identical.",
            "Adding an apostrophe to make a plural noun instead of reserving it for possession.",
            "Misplacing the apostrophe in a plural possessive (writing student's when students' is needed, or vice versa).",
          ],
        },
      },
      {
        skill: "Form, Structure, and Sense",
        title: "Form, Structure, and Sense: Subject-Verb Agreement",
        tier: "pro",
        content: {
          summary:
            "Match a verb to its true subject in number — the challenge is usually finding the real subject when other nouns sit between it and the verb.",
          concepts: [
            "Find the actual subject of the verb by mentally removing any prepositional phrases or interrupting clauses between them ('the list of items IS,' not 'ARE').",
            "Subjects joined by 'and' are usually plural; subjects joined by 'or'/'nor' agree with the noun closest to the verb.",
            "Collective nouns (team, committee, family) usually take a singular verb when acting as one unit.",
            "Indefinite pronouns like 'each,' 'everyone,' 'neither' are singular and take a singular verb, even when they sound like they refer to multiple people.",
          ],
          example: {
            prompt:
              "Choose the option that correctly completes the sentence: The results of the experiment ______ still being reviewed by the committee.",
            choices: ["are", "is", "was", "has been"],
            correctIndex: 0,
            walkthrough:
              "The subject is the plural noun 'results,' not the singular 'experiment' in the prepositional phrase between them, so the plural verb 'are' is correct.",
          },
          mistakes: [
            "Matching the verb to the nearest noun (often inside a prepositional phrase) instead of the true subject.",
            "Treating a collective noun as always singular or always plural regardless of context.",
            "Misapplying the 'closest noun' rule for or/nor to a sentence actually joined by 'and.'",
          ],
        },
      },
      {
        skill: "Form, Structure, and Sense",
        title: "Form, Structure, and Sense: Modifiers & Parallel Structure",
        tier: "pro",
        content: {
          summary:
            "Keep modifiers logically attached to what they describe, and keep items in a list or comparison in matching grammatical form.",
          concepts: [
            "A modifying phrase at the start of a sentence must describe the subject that immediately follows it — a 'dangling modifier' happens when it doesn't.",
            "In a list or series, every item should share the same grammatical form (all -ing verbs, all nouns, all infinitives) — mixing forms breaks parallel structure.",
            "Comparisons need parallel structure too: 'more interested in reading than watching TV,' not 'more interested in reading than to watch TV.'",
            "Correlative pairs (not only...but also, either...or, both...and) need the same grammatical form on both sides of the pairing.",
          ],
          example: {
            prompt:
              "Choose the option that correctly completes the sentence: The new policy aims to reduce costs, improve efficiency, and ______ customer satisfaction.",
            choices: ["increase", "increasing", "to increase", "increases"],
            correctIndex: 0,
            walkthrough:
              "The list already uses the base verb forms 'reduce' and 'improve,' so the third item must match with 'increase' to keep the list parallel.",
          },
          mistakes: [
            "Shifting verb form partway through a list, breaking parallel structure.",
            "Attaching an introductory modifier to the wrong noun, creating a dangling modifier.",
            "Mismatching the grammatical form on the two sides of a comparison or correlative pair.",
          ],
        },
      },
    ],
  },
  {
    domain: "Expression of Ideas",
    module: "rw",
    lessons: [
      {
        skill: "Transitions",
        title: "Transitions",
        tier: "free",
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
      {
        skill: "Transitions",
        title: "Transitions: Contrast, Concession & Emphasis Words",
        tier: "pro",
        content: {
          summary:
            "Distinguish transitions that signal a genuine contrast from ones that concede a point before returning to the main argument — a frequently confused pair.",
          concepts: [
            "Pure contrast words (however, in contrast, on the other hand) signal the second idea opposes the first directly.",
            "Concession words (granted, admittedly, of course) acknowledge a point is true before pivoting — often followed by a 'but' or 'still' that reasserts the main argument.",
            "Emphasis words (indeed, in fact) don't contrast at all — they strengthen or restate the previous point more strongly.",
            "Read past the transition word itself to the rest of the sentence to see whether the idea is being opposed, conceded-then-reversed, or reinforced.",
          ],
          example: {
            prompt:
              "The new policy faced criticism from small business owners. ______, most consumers reported no noticeable change in prices.",
            choices: ["However,", "Admittedly,", "In fact,", "Therefore,"],
            correctIndex: 0,
            walkthrough:
              "The first sentence describes criticism (implying negative impact); the second reports no noticeable effect on consumers — a direct contrast, which 'However' signals cleanly.",
          },
          mistakes: [
            "Choosing a concession word (Admittedly) when the relationship is a direct contrast, not an acknowledgment before a pivot.",
            "Choosing an emphasis word (In fact) that would only work if the second sentence reinforced rather than opposed the first.",
            "Missing that 'Therefore' implies a cause/effect relationship the sentences don't actually have.",
          ],
        },
      },
      {
        skill: "Rhetorical Synthesis",
        title: "Rhetorical Synthesis: Combining Sentences to Meet a Goal",
        tier: "pro",
        content: {
          summary:
            "Given bullet-point notes and a stated goal, choose the option that best combines the information to accomplish exactly that goal — not just any true combination.",
          concepts: [
            "Reread the stated goal carefully before looking at choices — words like 'emphasize,' 'compare,' or 'identify a similarity' each demand a different combination of the notes.",
            "Eliminate any choice that leaves out information the goal specifically requires, even if the sentence is otherwise well-written.",
            "Eliminate any choice that includes true information but fails to accomplish the stated goal.",
            "The best answer is often the most concise option that still satisfies every part of the goal — don't over-value a choice just for including more notes.",
          ],
          example: {
            prompt:
              "Notes: (1) The library was built in 1920. (2) The library was renovated in 2015. (3) The renovation added a digital media center. Goal: Emphasize what changed about the library's function during the renovation.\n\nWhich choice most effectively uses relevant information from the notes to accomplish this goal?",
            choices: [
              "The library's 2015 renovation added a digital media center, expanding its function beyond its original 1920 design.",
              "The library was built in 1920 and renovated in 2015.",
              "The library, built in 1920, has a long history.",
              "The digital media center is a popular feature of many modern libraries.",
            ],
            correctIndex: 0,
            walkthrough:
              "The goal is about the change in function — only choice A connects the renovation to a specific new function (the digital media center) and frames it against the original design.",
          },
          mistakes: [
            "Picking a choice that's factually accurate but doesn't address the specific goal, like just listing dates.",
            "Choosing an option that focuses on the wrong note entirely, missing the one needed to meet the goal.",
            "Over-including all three notes when the goal only calls for the ones showing functional change.",
          ],
        },
      },
      {
        skill: "Rhetorical Synthesis",
        title: "Rhetorical Synthesis: Choosing the Best Supporting Detail",
        tier: "pro",
        content: {
          summary:
            "When a goal asks you to support or illustrate a claim using the given notes, pick the detail that most specifically and directly backs that exact claim.",
          concepts: [
            "Identify the exact claim or point the goal wants supported — a generic 'give an example' goal still points to one specific claim in context.",
            "The strongest supporting detail is usually the most specific and quantifiable note, not the most general one.",
            "Reject choices that support a different, related-sounding claim instead of the one the goal specifies.",
            "If multiple notes seem relevant, the goal's exact wording (e.g., 'illustrate the scale of the problem' vs. 'explain the cause') tells you which one fits.",
          ],
          example: {
            prompt:
              "Notes: (1) The city's bus ridership fell 12% last year. (2) The city added three new bike lanes. (3) Gas prices rose 8% last year. Goal: Illustrate the scale of the decline in bus ridership.\n\nWhich choice most effectively uses relevant information from the notes to accomplish this goal?",
            choices: [
              "Bus ridership in the city fell by 12% last year.",
              "The city added three new bike lanes last year.",
              "Gas prices rose 8% last year, affecting many commuters.",
              "The city has invested in several transportation improvements.",
            ],
            correctIndex: 0,
            walkthrough:
              "The goal specifically asks to illustrate the scale of the ridership decline — only the 12% figure directly provides that quantified detail.",
          },
          mistakes: [
            "Picking a note that's topically related (bike lanes, gas prices) but doesn't quantify the specific claim the goal asks about.",
            "Choosing a vague summary note over the specific number that actually illustrates scale.",
            "Confusing a possible cause of the decline with the decline itself.",
          ],
        },
      },
    ],
  },
  {
    domain: "Algebra",
    module: "math",
    lessons: [
      {
        skill: "Linear equations in one variable",
        title: "Linear equations in one variable",
        tier: "free",
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
      {
        skill: "Systems of two linear equations",
        title: "Systems of two linear equations",
        tier: "pro",
        content: {
          summary:
            "Solve two equations with two unknowns using substitution or elimination — recognizing which method is faster saves real time.",
          concepts: [
            "Elimination works best when one variable's coefficients are equal or opposite (or can be made so by multiplying one equation) — add or subtract to cancel it.",
            "Substitution works best when one equation is already solved for a variable (or easily can be), like y = 2x + 3.",
            "After finding one variable, plug it back into either original equation (not a modified one) to find the other, and check both.",
            "A system with no solution has parallel lines (equal slopes, different intercepts); infinite solutions means the two equations describe the same line.",
          ],
          example: {
            prompt: "If 3x + 2y = 16 and x − 2y = 4, what is the value of x?",
            choices: ["5", "4", "6", "2"],
            correctIndex: 0,
            walkthrough:
              "Adding the two equations cancels y: (3x + 2y) + (x − 2y) = 16 + 4 → 4x = 20 → x = 5.",
          },
          mistakes: [
            "Subtracting instead of adding when coefficients are already opposite, flipping a sign.",
            "Solving for the wrong variable and answering with y instead of the x the question asked for.",
            "Substituting into a partially-simplified equation instead of an original one, propagating an earlier arithmetic slip.",
          ],
        },
      },
      {
        skill: "Linear inequalities in one variable",
        title: "Linear inequalities in one variable",
        tier: "pro",
        content: {
          summary:
            "Solve and graph inequalities like equations, with one critical exception: flip the inequality sign when multiplying or dividing by a negative number.",
          concepts: [
            "Every equation-solving move works on inequalities too (add/subtract/multiply/divide both sides) — except multiplying or dividing by a negative flips the inequality sign.",
            "'At least' means ≥, 'at most' means ≤, 'more than' means >, 'fewer than' means < — translate word problems carefully into the right symbol.",
            "Compound inequalities (like 3 < 2x + 1 ≤ 9) can be solved as one three-part chain by doing the same operation to all three parts.",
            "Check your answer with a simple test value from your solution range, plugged into the original inequality.",
          ],
          example: {
            prompt: "Solve for x: −3x + 5 ≥ 20",
            choices: ["x ≤ −5", "x ≥ −5", "x ≤ 5", "x ≥ 5"],
            correctIndex: 0,
            walkthrough: "Subtract 5: −3x ≥ 15. Divide by −3 and flip the inequality: x ≤ −5.",
          },
          mistakes: [
            "Forgetting to flip the inequality sign when dividing by a negative number.",
            "Flipping the sign when it wasn't necessary (dividing by a positive).",
            "Translating 'at least' or 'at most' into the wrong symbol direction.",
          ],
        },
      },
      {
        skill: "Linear functions",
        title: "Linear functions",
        tier: "pro",
        content: {
          summary:
            "Interpret and build linear functions f(x) = mx + b — the slope m is the rate of change, and b is the starting value.",
          concepts: [
            "Slope (m) = rise/run = change in output ÷ change in input; in word problems it's a rate ('per hour,' 'per item').",
            "The y-intercept (b) is the function's value when x = 0 — often a starting amount, base fee, or initial condition in a word problem.",
            "Two points determine a full linear function: find the slope between them, then use one point to solve for b.",
            "f(a) means 'plug a into the function for x' — a common point of confusion is mixing up input and output.",
          ],
          example: {
            prompt: "A linear function f satisfies f(0) = 8 and f(4) = 20. What is f(6)?",
            choices: ["26", "24", "23", "30"],
            correctIndex: 0,
            walkthrough:
              "Slope = (20 − 8)/(4 − 0) = 3, so f(x) = 3x + 8. f(6) = 3(6) + 8 = 26.",
          },
          mistakes: [
            "Computing the slope with the points in the wrong order, dividing rise by run backwards.",
            "Using f(0) as the slope instead of the y-intercept.",
            "Plugging 6 into the wrong part of the equation, like adding it directly to f(4) instead of building the full function first.",
          ],
        },
      },
    ],
  },
  {
    domain: "Advanced Math",
    module: "math",
    lessons: [
      {
        skill: "Quadratic equations",
        title: "Quadratic equations",
        tier: "free",
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
      {
        skill: "Quadratic inequalities",
        title: "Quadratic inequalities",
        tier: "pro",
        content: {
          summary:
            "Solve inequalities involving a squared term by finding the boundary points first, then testing which regions satisfy the inequality.",
          concepts: [
            "Move everything to one side so the inequality is compared to 0, then factor (or use the quadratic formula) to find the boundary x-values.",
            "Those boundary values split the number line into intervals — test one value from each interval in the original inequality to see which work.",
            "A positive leading coefficient parabola is negative between its roots and positive outside them; a negative leading coefficient reverses this.",
            "'≤' or '≥' includes the boundary points themselves; '<' or '>' excludes them.",
          ],
          example: {
            prompt: "For which values of x is x² − x − 6 < 0?",
            choices: ["−2 < x < 3", "x < −2 or x > 3", "−3 < x < 2", "x < −3 or x > 2"],
            correctIndex: 0,
            walkthrough:
              "x² − x − 6 factors as (x − 3)(x + 2). This upward-opening parabola is negative between its roots, −2 and 3, so the solution is −2 < x < 3.",
          },
          mistakes: [
            "Solving the equation (=0) instead of testing which side of the boundary satisfies the inequality.",
            "Reversing which region is the solution because the parabola opens upward, not downward.",
            "Including or excluding the boundary points incorrectly.",
          ],
        },
      },
      {
        skill: "Exponential equations",
        title: "Exponential equations",
        tier: "pro",
        content: {
          summary:
            "Solve equations where the variable is in the exponent — most SAT exponential equations become solvable once both sides share a common base.",
          concepts: [
            "If you can rewrite both sides with the same base, set the exponents equal to each other and solve — the fastest path for most SAT exponential equations.",
            "Exponent rules: (a^m)(a^n) = a^(m+n), a^m/a^n = a^(m−n), (a^m)^n = a^(mn), and a^0 = 1.",
            "Negative exponents mean reciprocals: a^(−n) = 1/a^n. Fractional exponents mean roots: a^(1/n) = ⁿ√a.",
            "If the bases genuinely can't be matched, the problem usually wants a specific numeric setup (like growth/decay), not logarithms, at this level.",
          ],
          example: {
            prompt: "If 9^(x−1) = 27, what is the value of x?",
            choices: ["5/2", "3/2", "2", "3"],
            correctIndex: 0,
            walkthrough:
              "Rewrite with base 3: 9^(x−1) = (3²)^(x−1) = 3^(2x−2), and 27 = 3³. Setting exponents equal: 2x − 2 = 3 → x = 5/2.",
          },
          mistakes: [
            "Setting 9 and 27 equal to matching powers without first converting both to the same base.",
            "Forgetting to distribute the exponent across (x − 1) when rewriting 9^(x−1).",
            "Solving 2x = 3 instead of 2x − 2 = 3, dropping a term.",
          ],
        },
      },
      {
        skill: "Equivalent expressions",
        title: "Equivalent expressions",
        tier: "pro",
        content: {
          summary:
            "Rewrite algebraic expressions into an equivalent form — usually by factoring, expanding, or simplifying — to match what a question asks for.",
          concepts: [
            "Factoring and expanding are inverses of each other; if an answer choice doesn't obviously match, try expanding it to compare directly.",
            "Look for a greatest common factor first before trying more complex factoring patterns (difference of squares, trinomials).",
            "Difference of squares: a² − b² = (a − b)(a + b). Perfect square trinomials: a² ± 2ab + b² = (a ± b)².",
            "Combine like terms carefully — only terms with identical variable parts (same variable and same exponent) can be combined.",
          ],
          example: {
            prompt: "Which expression is equivalent to 4x² − 16?",
            choices: [
              "4(x − 2)(x + 2)",
              "(4x − 8)(4x + 8)",
              "4(x − 4)(x + 4)",
              "(2x − 4)(2x + 4)",
            ],
            correctIndex: 0,
            walkthrough:
              "Factor out the GCF of 4 first: 4(x² − 4). Then apply difference of squares: x² − 4 = (x − 2)(x + 2), giving 4(x − 2)(x + 2).",
          },
          mistakes: [
            "Factoring x² − 16 as if the coefficient weren't there, forgetting to pull out the GCF first.",
            "Choosing an expression that expands to the wrong coefficient because the GCF was factored out twice or not at all.",
            "Misapplying difference of squares to 4x² − 16 directly without simplifying first, mismatching the square roots.",
          ],
        },
      },
    ],
  },
  {
    domain: "Problem-Solving and Data Analysis",
    module: "math",
    lessons: [
      {
        skill: "Ratios and proportions",
        title: "Ratios and proportions",
        tier: "free",
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
      {
        skill: "Percentages",
        title: "Percentages",
        tier: "pro",
        content: {
          summary:
            "Translate percent language into arithmetic — percent change, percent of a value, and successive percent changes each have a specific setup.",
          concepts: [
            "'X% of Y' means (X/100) × Y. 'What percent of Y is X' means (X/Y) × 100.",
            "Percent change = (new − original) / original × 100. A percent increase multiplies by (1 + rate); a percent decrease multiplies by (1 − rate).",
            "Successive percent changes don't add together — apply them one after another (a 10% increase then a 10% decrease is not back to the original value).",
            "Watch for 'percent of the original' vs. 'percentage points' — they mean different things when comparing two percentages.",
          ],
          example: {
            prompt:
              "A shirt's price increases by 20% and then decreases by 20%. Compared to the original price, the final price is:",
            choices: ["4% lower", "The same", "4% higher", "20% lower"],
            correctIndex: 0,
            walkthrough:
              "Start with 100: after +20% → 120; after −20% → 120 × 0.8 = 96. That's 4% lower than the original 100, since successive percent changes compound rather than cancel.",
          },
          mistakes: [
            "Assuming a percent increase followed by the same percent decrease returns to the original value.",
            "Adding or subtracting the two percentages directly (20% − 20% = 0%) instead of applying them sequentially.",
            "Computing percent change using the wrong value as the 'original' in the denominator.",
          ],
        },
      },
      {
        skill: "Probability",
        title: "Probability",
        tier: "pro",
        content: {
          summary:
            "Compute the likelihood of an event as favorable outcomes over total outcomes, and combine probabilities correctly for multiple events.",
          concepts: [
            "Basic probability = (number of favorable outcomes) / (total number of possible outcomes).",
            "For independent events, multiply their individual probabilities to find the probability both happen.",
            "For 'at least one' problems, it's often faster to compute 1 − P(none happen) than to add up every individual case.",
            "Reading a two-way table: a probability 'given' some condition uses only the row or column matching that condition as the denominator, not the whole table.",
          ],
          example: {
            prompt:
              "A bag has 4 red and 6 blue marbles. If one marble is drawn at random, what is the probability it is red?",
            choices: ["2/5", "3/5", "1/4", "2/3"],
            correctIndex: 0,
            walkthrough: "There are 4 red marbles out of 10 total, so P(red) = 4/10 = 2/5.",
          },
          mistakes: [
            "Using the number of marbles not drawn (blue) as the numerator by mistake.",
            "Setting up the denominator as the count of the other category instead of the total.",
            "Failing to simplify the fraction and not recognizing it matches a reduced answer choice.",
          ],
        },
      },
      {
        skill: "One-variable data",
        title: "One-variable data",
        tier: "pro",
        content: {
          summary:
            "Describe and compare data sets using center (mean, median) and spread (range, standard deviation) — and know what changes each measure and what doesn't.",
          concepts: [
            "Mean = sum of values ÷ count; median = the middle value when sorted (average the two middle values if the count is even).",
            "The mean is sensitive to outliers (extreme values pull it); the median is not — key for 'which measure best describes...' questions.",
            "Range = max − min. A larger standard deviation means the data is more spread out from the mean.",
            "Adding the same constant to every value shifts the mean and median by that constant but leaves the spread unchanged.",
          ],
          example: {
            prompt:
              "A data set is 2, 4, 4, 6, 9. If the value 9 is replaced with 29, which measure changes the most?",
            choices: ["The mean", "The median", "Neither changes", "Both change equally"],
            correctIndex: 0,
            walkthrough:
              "The median stays 4 (still the middle value once sorted), but the mean rises sharply because it's pulled by the much larger outlier — from 5 to 9.",
          },
          mistakes: [
            "Assuming the median would shift the same way the mean does when an outlier changes.",
            "Recomputing the mean without re-sorting the median position, mixing up which value is 'middle.'",
            "Confusing range with standard deviation as if they measured the same thing.",
          ],
        },
      },
    ],
  },
  {
    domain: "Geometry and Trigonometry",
    module: "math",
    lessons: [
      {
        skill: "Right triangles",
        title: "Right triangles",
        tier: "free",
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
      {
        skill: "Special right triangles",
        title: "Special right triangles",
        tier: "pro",
        content: {
          summary:
            "Recognize and apply the fixed side ratios of 45-45-90 and 30-60-90 triangles to skip the Pythagorean theorem entirely.",
          concepts: [
            "45-45-90 triangle sides are in the ratio 1 : 1 : √2 — the two legs are equal, and the hypotenuse is a leg times √2.",
            "30-60-90 triangle sides are in the ratio 1 : √3 : 2 — the side opposite 30° is the shortest, opposite 60° is √3 times that, and the hypotenuse is twice the shortest side.",
            "Spot these triangles from angle markings (a 45° angle, or a right angle plus a 30°/60° angle) even when side lengths aren't given directly.",
            "A square's diagonal splits it into two 45-45-90 triangles — a common disguised appearance on the test.",
          ],
          example: {
            prompt: "In a 30-60-90 triangle, the side opposite the 30° angle is 5. What is the length of the hypotenuse?",
            choices: ["10", "5√3", "5√2", "15"],
            correctIndex: 0,
            walkthrough:
              "In the 1 : √3 : 2 ratio, the side opposite 30° is the shortest side (here, 5), and the hypotenuse is twice that: 10.",
          },
          mistakes: [
            "Multiplying the shortest side by √3 to get the hypotenuse instead of by 2.",
            "Confusing which side is opposite 30° versus 60° when the triangle is drawn in an unfamiliar orientation.",
            "Applying the 45-45-90 ratio to a 30-60-90 triangle by mistake.",
          ],
        },
      },
      {
        skill: "Right triangle trigonometry",
        title: "Right triangle trigonometry",
        tier: "pro",
        content: {
          summary: "Use sine, cosine, and tangent to relate a right triangle's angles to its side lengths.",
          concepts: [
            "SOH-CAH-TOA: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent, all measured relative to the angle in question.",
            "'Opposite' and 'adjacent' depend on which angle you're using — relabel the sides every time you switch which angle you're working from.",
            "Since the two non-right angles of a right triangle always sum to 90°, sin(θ) = cos(90° − θ) for those angles.",
            "Use inverse trig functions (sin⁻¹, cos⁻¹, tan⁻¹) to find an angle when you know a ratio of sides, not just a side when you know an angle.",
          ],
          example: {
            prompt:
              "In a right triangle, the side opposite angle θ has length 6 and the hypotenuse has length 10. What is cos(θ)?",
            choices: ["4/5", "3/5", "6/10", "8/6"],
            correctIndex: 0,
            walkthrough:
              "The adjacent side is found by the Pythagorean theorem: √(10² − 6²) = √64 = 8. cos(θ) = adjacent/hypotenuse = 8/10 = 4/5.",
          },
          mistakes: [
            "Using sin (opposite/hypotenuse) when the question asks for cosine.",
            "Forgetting to first solve for the missing side length before computing the ratio.",
            "Leaving the fraction unsimplified and not recognizing it matches a reduced answer choice.",
          ],
        },
      },
      {
        skill: "Circles",
        title: "Circles",
        tier: "pro",
        content: {
          summary:
            "Apply circle formulas for circumference, area, arc length, and sector area — most of these problems are proportional reasoning with π built in.",
          concepts: [
            "Circumference = 2πr = πd. Area = πr². Know these cold since almost every circle question builds on them.",
            "Arc length and sector area are both the same fraction of the whole circle as the central angle is of 360°: arc length = (θ/360)(2πr), sector area = (θ/360)(πr²).",
            "The equation of a circle centered at (h, k) with radius r is (x − h)² + (y − k)² = r² — complete the square if it's given in expanded form.",
            "A tangent line to a circle is always perpendicular to the radius drawn to the point of tangency.",
          ],
          example: {
            prompt: "A circle has radius 9. What is the length of an arc with a central angle of 60°?",
            choices: ["3π", "6π", "9π", "1.5π"],
            correctIndex: 0,
            walkthrough: "Arc length = (60/360) × 2π(9) = (1/6) × 18π = 3π.",
          },
          mistakes: [
            "Using the angle fraction with the area formula instead of the circumference formula for the wrong quantity asked.",
            "Forgetting to convert the central angle to a fraction of 360° before multiplying.",
            "Using the diameter instead of the radius in the circumference formula.",
          ],
        },
      },
    ],
  },
];
