// Craft and Structure — Lessons
// Skill coverage: Words in Context; Text Structure and Purpose; Cross-Text Connections
LESSONS.push({
  domain: "Craft and Structure",
  module: "rw",
  lessons: [
    // ---------------------------------------------------------------------
    // SKILL 1: Words in Context
    // ---------------------------------------------------------------------
    {
      skill: `Words in Context`,
      title: `Words in Context`,
      tier: "free",
      content: {
        summary: `Choose the word or phrase that best fits the blank based on the surrounding context — these are vocabulary questions in disguise as reading comprehension.`,
        concepts: [
          `Cover the answer choices and predict your own word for the blank first, using only the sentence's logic (contrast words like 'however' or 'yet' flip the meaning you're looking for).`,
          `Then match your predicted word to the closest choice — don't let an unfamiliar-sounding option talk you out of a good prediction.`,
          `Every choice is usually a real, valid word — the test is whether it fits this specific context, not whether you know its dictionary definition.`,
          `Watch for words with multiple meanings; the common meaning is often a trap when the passage is using a less common one.`,
          `Identify the logical relationship signaled by the sentence structure first: cause/effect (so, because, as a result), addition (moreover, furthermore), or contrast (however, although, despite) — each demands a different category of word.`,
          `Pay attention to degree words nearby (extremely, somewhat, barely) — they narrow your prediction from a general direction (positive or negative) to a specific intensity.`,
          `When two choices seem close in meaning, the correct one is the one that matches the sentence's specific claim, not just its general topic.`,
        ],
        example: {
          prompt: `Despite the committee's initial skepticism, the proposal's results were so ______ that even its harshest critics voted to approve it.`,
          choices: [`ambiguous`, `compelling`, `predictable`, `controversial`],
          correctIndex: 1,
          walkthrough: `'Despite... skepticism' followed by 'even its harshest critics voted to approve' signals the results overcame doubt — so the blank needs a word meaning persuasive. 'Compelling' fits; 'ambiguous' and 'predictable' wouldn't move skeptics, and 'controversial' contradicts unanimous approval.`,
        },
        mistakes: [
          `Picking the fanciest-sounding word instead of the one that actually fits the sentence's logic.`,
          `Ignoring a contrast signal word (however, although, yet, despite) that reverses the expected meaning.`,
          `Translating only part of the sentence instead of the full clause containing the blank.`,
          `Assuming the blank must be a rare or advanced word simply because the passage sounds formal.`,
          `Choosing a word that fits the topic in general but contradicts the specific detail given right next to the blank.`,
        ],
      },
    },
    {
      skill: `Words in Context`,
      title: `Words in Context: Multiple-Meaning Words`,
      tier: "pro",
      content: {
        summary: `Many vocabulary blanks use a common word in its less common meaning — the trap is answering with the word's most familiar sense.`,
        concepts: [
          `Words like 'table' (to postpone, not furniture), 'sound' (valid or reliable, not noise), or 'novel' (new, not a book) can appear in an unfamiliar sense — check the sentence's actual logic, not your first association.`,
          `If your predicted word doesn't match any obvious choice, consider whether a familiar-looking choice might be using a less common definition.`,
          `Context clues (surrounding cause/effect or contrast language) reveal which sense of the word fits — the sentence structure won't accommodate the wrong meaning.`,
          `Don't eliminate a choice just because it seems like the wrong part of speech for the common meaning — double check its less common use.`,
          `Build a mental list of College Board's recurring multiple-meaning words: 'qualify' (to limit or moderate a claim, not to become eligible), 'arrest' (to halt a process, not a police action), 'temper' (to moderate or toughen, not anger), 'appreciate' (to increase in value, not gratitude), 'entertain' (to consider an idea, not amusement).`,
          `When a word choice seems oddly simple for a supposedly hard question, that simplicity is often the tell — the test is betting you'll autopilot to the first definition that comes to mind.`,
          `Check whether the word's secondary sense is being used as a different part of speech than its common sense typically takes, such as 'compound' as a verb meaning to worsen, versus the noun meaning an enclosed area.`,
          `If a passage is scientific, historical, or economic, expect domain-shifted meanings: 'depression' (economic downturn), 'positive' (a definite or confirmed test result), 'plastic' (moldable or adaptable, not the material).`,
          `Practice the substitution test: mentally replace the blank with each candidate sense of the ambiguous word and check which produces a sentence that is not just grammatical but logically necessary given the surrounding clause.`,
        ],
        deepDive: [
          `College Board leans on multiple-meaning words because they test something more precise than vocabulary size: reading flexibility. A student who has memorized thousands of rare words but reads on autopilot will still miss these, while a student with a modest vocabulary but careful reading habits will catch them — which is exactly the skill the digital SAT is designed to reward. This is a deliberate departure from the old paper SAT's obscure-word questions, and it means your prep time is better spent drilling the twenty or so recurring shifty words than expanding your general vocabulary.`,
          `The core failure mode is what you might call false fluency: your eyes hit the ambiguous word, your brain instantly retrieves its most frequent sense, and you build your prediction on that sense before you've finished reading the clause that would have told you otherwise. The fix is mechanical — read the entire sentence containing the blank once, all the way through, before forming any prediction, and treat any word that could plausibly mean two different things as a flag to slow down rather than speed up.`,
          `Domain shift compounds the problem. In an economics passage, 'depression' almost certainly means a severe downturn; in a psychology passage, it likely means the clinical condition; in a geology passage, it might mean a literal dip in terrain. The same word, three different sentences, three different correct predictions. Train yourself to ask what field this passage belongs to before you settle on a word's meaning, especially for words that have a distinct technical sense in science, economics, law, or history.`,
          `Finally, keep a running list of every multiple-meaning word you personally miss, rather than studying a generic list someone else compiled. Your own error log will surface the specific words your brain defaults to the wrong sense for, and revisiting that list with spaced repetition does more for this skill than any amount of passive vocabulary review.`,
        ],
        example: {
          prompt: `In her rebuttal, the economist sought to ______ her earlier claim that automation would inevitably eliminate more jobs than it created, noting that new industries have historically absorbed displaced workers.`,
          choices: [`qualify`, `abandon`, `publicize`, `disprove`],
          correctIndex: 0,
          walkthrough: `'Sought to ___ her earlier claim' followed by a softening clarification ('noting that...') signals a moderation of the claim, not a reversal of it. 'Qualify' in its less common sense means to add limits or conditions to a claim, matching that moderating tone. 'Abandon' and 'disprove' both reverse the claim entirely rather than moderate it, and 'publicize' ignores the corrective tone altogether.`,
        },
        mistakes: [
          `Locking onto the first, most frequent definition of a word before reading the full sentence's logic.`,
          `Treating a familiar-looking word as automatically wrong for a hard vocabulary question, when the trap is precisely that it looks too simple.`,
          `Missing domain-shifted meanings in technical or economic passages where words carry field-specific senses.`,
          `Confusing a word's part of speech in its common sense with its part of speech in the tested sense.`,
          `Failing to test each candidate sense against the entire clause, not just the phrase immediately next to the blank.`,
        ],
      },
    },
    {
      skill: `Words in Context`,
      title: `Words in Context: Connotation, Register, and Tone Calibration`,
      tier: "pro",
      content: {
        summary: `Choose among near-synonyms by tracking the author's emotional stance and the passage's level of formality, not just literal definition.`,
        concepts: [
          `Many wrong choices share a denotation (literal meaning) with the correct answer but carry the wrong connotation (positive or negative charge) — the passage's overall attitude toward its subject tells you which charge is required.`,
          `Identify the author's stance toward the subject before reaching the blank: is the tone admiring, critical, neutral and objective, or ambivalent? The correct word must match that stance, not just the topic.`,
          `Register matters: an academic or scientific passage rarely calls for a casual synonym (such as 'iffy' instead of 'uncertain'), even if the casual word technically fits the meaning.`,
          `Distinguish absolute claims from hedged ones — words like 'invariably,' 'universally,' or 'categorically' signal a need for an unqualified word, while 'often' or 'generally' nearby signals a hedge word is correct.`,
          `Watch for false-synonym pairs that differ in scope or intensity: 'skeptical' versus 'cynical' (doubt about a claim versus distrust of motives), 'frugal' versus 'stingy' (positive versus negative framing of the same behavior), 'assertive' versus 'aggressive' (confident versus hostile framing).`,
          `A shift in connotation across a sentence, such as a clause that starts neutral but ends with a judgment word like 'unfortunately' or 'remarkably,' retroactively tells you the required charge of an earlier blank.`,
          `When the passage quotes or paraphrases a specific person's viewpoint, match the word's charge to that person's implied attitude, not the narrator's general tone.`,
          `Two choices can both be positive words but differ in what kind of positive quality they praise — competence versus warmth, novelty versus reliability — so match the specific dimension of praise or criticism the sentence is making.`,
          `In passages about historical or social topics, be alert to loaded connotations — a word that was neutral in one era's context may carry connotations the passage explicitly complicates or reframes.`,
        ],
        deepDive: [
          `Connotation questions are reading comprehension wearing a vocabulary costume. College Board favors them because they test whether you can track an author's evaluative stance across a sentence, which is a subtler skill than simply knowing what a word means. Two words can be dictionary-equivalent and still be wrong for a given sentence, because the sentence is making a value judgment, not just a factual statement, and only one word carries the judgment the author intends.`,
          `Register is the companion skill: every passage establishes a voice, and a correct answer has to sound like it belongs in that voice. The fastest elimination technique is to read each choice back into the sentence and ask whether it would sound out of place if read aloud in the passage's established register — a choice that would fit better in a text message than in the surrounding prose is usually wrong even when its literal meaning is close enough.`,
          `The most dangerous variant is the charge reversal: a sentence that opens in one emotional direction and pivots partway through, often right where the blank sits. A clause can begin by describing something as impressive and then, after a 'but' or 'yet,' recast that same thing critically — or vice versa. Because the blank frequently sits exactly at the pivot, you have to identify not the sentence's overall tone but the tone of the specific clause the blank belongs to.`,
          `To build this skill deliberately, organize your vocabulary review by charge rather than by definition. Instead of a list of words meaning 'careful with money,' build a spectrum: frugal (positive), thrifty (positive), prudent (positive-neutral), tightfisted (negative), stingy (negative), miserly (strongly negative). Reviewing synonyms this way trains you to feel the emotional gradient the test is actually asking you to detect, rather than just the shared core meaning.`,
        ],
        example: {
          prompt: `Critics initially dismissed the architect's design as needlessly ornate, but subsequent visitors praised its ______ blend of historical motifs and modern materials, arguing that what first appeared excessive was in fact a carefully calibrated homage to the building's surroundings.`,
          choices: [`gaudy`, `tasteful`, `arbitrary`, `conventional`],
          correctIndex: 1,
          walkthrough: `'But' signals a reversal from the critics' negative view ('needlessly ornate') to the visitors' positive reassessment, and 'carefully calibrated homage' confirms admiration for skillful, harmonious design — matching 'tasteful.' 'Gaudy' simply repeats the negative charge the sentence has already rejected. 'Arbitrary' suggests randomness, which contradicts 'carefully calibrated,' and 'conventional' suggests ordinariness, which contradicts a blend being praised as a distinctive achievement.`,
        },
        mistakes: [
          `Choosing a word that matches the sentence's topic but carries the opposite emotional charge from what the author intends.`,
          `Missing a 'but,' 'yet,' or 'however' pivot that flips the required connotation partway through the sentence.`,
          `Selecting a technically accurate synonym that is too informal or too formal for the passage's established register.`,
          `Conflating two near-synonyms that differ in the specific dimension of praise or criticism, such as competence versus likability.`,
          `Assuming the narrator's tone applies to a quoted or paraphrased individual's viewpoint within the same sentence.`,
        ],
      },
    },

    // ---------------------------------------------------------------------
    // SKILL 2: Text Structure and Purpose
    // ---------------------------------------------------------------------
    {
      skill: `Text Structure and Purpose`,
      title: `Text Structure and Purpose`,
      tier: "free",
      content: {
        summary: `Identify how a passage is organized, or explain why the author included a specific sentence, paragraph, or detail.`,
        concepts: [
          `Two question types share this skill: whole-passage structure (how is this passage organized?) and single-sentence or paragraph purpose (why did the author include this?) — figure out which type you're facing before you read the choices.`,
          `For structure questions, name the overall shape first: chronological (events in time order), problem/solution, claim/evidence, compare/contrast, or general-to-specific — most passages fit one dominant pattern even if a paragraph briefly departs from it.`,
          `For purpose questions, look only at what comes immediately before and after the target sentence — its job is almost always to connect to, support, or complicate that surrounding material, not to serve the passage's overall theme.`,
          `Separate what a sentence says (its content) from what it does (its function) — correct answers describe the function using verbs like 'illustrate,' 'qualify,' 'introduce,' or 'contrast,' not just restate the content in different words.`,
          `Basic function vocabulary to know cold: example or illustration, counterargument or objection, qualification (a partial limit on an earlier claim), transition (bridges two ideas), and conclusion or synthesis.`,
          `Eliminate any answer choice describing a function the passage doesn't actually perform, even if the description sounds like a plausible thing an author might do in general.`,
          `When a question asks about the passage 'as a whole,' a choice describing only one paragraph's local function is a trap, even if it's true for that paragraph.`,
        ],
        example: {
          prompt: `A passage opens by describing the invention of the printing press, then discusses its effects on literacy rates across Europe, and closes by considering how digital publishing today echoes that historical shift. Which choice best describes the passage's overall structure?`,
          choices: [
            `It traces a historical development and then draws a parallel to a contemporary phenomenon.`,
            `It presents two competing theories about the origins of literacy.`,
            `It refutes a common misconception about the printing press.`,
            `It provides a step-by-step technical explanation of how printing presses work.`,
          ],
          correctIndex: 0,
          walkthrough: `The passage moves chronologically from invention to effects and then explicitly draws a modern parallel to digital publishing, matching the first choice precisely. The second choice invents a 'competing theories' framing that isn't present. The third assumes a misconception is being refuted, which the passage never sets up. The fourth describes a technical explanation, but the passage is about effects on literacy, not mechanics.`,
        },
        mistakes: [
          `Confusing a purpose question (why is this sentence here) with a structure question (how is the whole passage organized), and answering the wrong scope.`,
          `Picking an answer that restates the sentence's content instead of naming its function.`,
          `Choosing a plausible-sounding structural pattern, like compare/contrast, that doesn't actually match this specific passage.`,
          `Overlooking a shift signaled by a transition word (but, however, in contrast, similarly) that marks where one structural section ends and another begins.`,
          `Answering based on only the paragraph nearest the question instead of checking whether the described function holds for the passage as a whole.`,
        ],
      },
    },
    {
      skill: `Text Structure and Purpose`,
      title: `Text Structure and Purpose: Rhetorical Function of Sentences and Paragraphs`,
      tier: "pro",
      content: {
        summary: `Master the trickiest purpose questions by precisely naming what a sentence or paragraph does for the surrounding argument, not what it says.`,
        concepts: [
          `For 'why did the author include this sentence' questions, look at what comes immediately before and after it — its purpose is usually to bridge, support, or complicate that surrounding content.`,
          `Distinguish what a sentence says (its content) from what it does (its function) — the correct answer to a purpose question describes the function, not just restates the content.`,
          `Common purpose answers: to provide an example, to introduce a counterargument, to qualify an earlier claim, to transition between ideas.`,
          `For whole-passage structure questions, label what each paragraph or sentence is doing (introduce, complicate, support, conclude) before choosing.`,
          `When the target sentence contains a hedge, such as 'however, this does not mean' or 'some have argued instead,' its function is very likely to qualify or complicate, not simply support, the preceding claim.`,
          `A sentence placed at a paragraph's end frequently functions as a synthesis or pivot toward the next paragraph's topic — check the next paragraph's opening word for confirmation.`,
          `Distinguish 'provides an example' from 'provides evidence': an example illustrates a general claim with one specific instance, while evidence is used to argue for the truth of a claim — a subtle distinction the choices exploit.`,
          `When a sentence quotes another person or source, its function is almost always to introduce an outside perspective — the real question is whether that perspective supports, complicates, or is being challenged by the author's own view stated nearby.`,
          `Rank ambiguous choices by specificity: a choice naming the precise relationship (such as 'qualifies the claim in the previous sentence by introducing an exception') beats a vaguer one ('provides more information') even if both are technically true.`,
        ],
        deepDive: [
          `These questions test discourse-level reading rather than sentence-level comprehension, and College Board deliberately writes distractors that are accurate statements about content but wrong about function. A choice can correctly describe what a sentence says and still be the wrong answer, because the question is asking what job that sentence performs in the argument, not what information it contains.`,
          `The fastest reliable technique is to zoom out exactly one sentence in each direction: read only the sentence before and the sentence after the targeted one, and ignore the rest of the paragraph. Function is almost always locally determined, and rereading the whole paragraph tends to introduce irrelevant content that distracts from the narrow relationship the question is actually testing.`,
          `The most common trap pattern reuses accurate vocabulary from the passage but assigns it the wrong direction — a choice will say a sentence 'supports' a claim when it actually complicates it, or vice versa. Signal words such as but, yet, though, and admittedly resolve this instantly, so treat any purpose question as a search for the nearest directional signal word before you evaluate the choices.`,
          `The hardest variant is the double-duty paragraph: a single paragraph or sentence that both concludes one idea and transitions into the next. Distractors here isolate only one of the two jobs, so the correct choice often has to be a compound description, and a choice that captures only half the sentence's work is a trap even when that half is accurate.`,
        ],
        example: {
          prompt: `A passage argues that a historic bridge collapse was caused solely by poor materials. A later sentence reads: "Yet engineering records from the period reveal that the load specifications were revised downward only months before construction began." What is the primary function of this sentence within the passage?`,
          choices: [
            `To introduce evidence complicating the claim that materials alone caused the collapse.`,
            `To provide a chronological account of the bridge's construction history.`,
            `To confirm that the materials used were indeed substandard.`,
            `To summarize the engineers' overall design philosophy.`,
          ],
          correctIndex: 0,
          walkthrough: `'Yet' signals a pivot against the preceding materials-only claim, and the cited fact — revised load specifications — introduces a second possible cause, complicating rather than confirming the original explanation. This matches the first choice. The second choice mistakes a date detail for the sentence's function. The third reverses the direction the sentence actually argues. The fourth describes a broader topic this specific detail doesn't address.`,
        },
        mistakes: [
          `Treating 'yet,' 'but,' or 'however' as automatically meaning 'counterargument to the author's own thesis' rather than checking what specifically is being complicated.`,
          `Confusing 'provides an example' with 'provides evidence for a broader claim' when a choice offers both as options.`,
          `Assuming a quoted or cited source always supports the surrounding argument, when it's often introduced specifically to be challenged.`,
          `Picking the answer that is factually accurate about the sentence's content but describes the wrong directional relationship, support versus complicate, to the surrounding claim.`,
          `Missing that a sentence at a paragraph boundary can serve two functions at once, concluding and transitioning, and picking a choice that only captures one.`,
        ],
      },
    },
    {
      skill: `Text Structure and Purpose`,
      title: `Text Structure and Purpose: Whole-Passage Organization Patterns`,
      tier: "pro",
      content: {
        summary: `Recognize compound and non-linear whole-passage structures — frame narratives, nested arguments, and cyclical patterns — beyond simple chronological or compare/contrast shapes.`,
        concepts: [
          `Beyond the basic patterns (chronological, compare/contrast, problem/solution), expect more complex shapes: 'claim, complication, refined claim' (a thesis revised mid-passage), frame structures (a specific anecdote opens and closes the passage around a general point), and nested structures (a sub-argument embedded within a larger argument).`,
          `In science-based passages, a very common pattern is: describe a phenomenon, present the leading explanation, then present a study or finding that complicates or extends that explanation — the last section usually tests whether you can identify a modification, not a full reversal.`,
          `When a passage returns to its opening image, anecdote, or question near its end, that's a frame structure — the correct structure-question answer typically names this return explicitly, such as 'returns to... to reinforce' or 'to reframe.'`,
          `Distinguish a passage that builds a single sustained argument from one that surveys multiple, roughly equal perspectives without endorsing one — the latter often ends with a synthesis or open question rather than a firm conclusion.`,
          `Track where the passage's stance shifts by watching paragraph-opening transition words across the whole passage, not just locally — mapping these across all paragraphs reveals the macro-structure faster than rereading the whole text.`,
          `Be wary of choices describing a 'rebuttal' structure, raising a view specifically to refute it, when the passage actually just presents multiple views without the author picking a side — refutation requires an explicit corrective move, not mere disagreement between quoted sources.`,
          `Some passages use a cyclical or spiral structure, revisiting the same question two or three times with increasing specificity or evidence each time, rather than moving through the topic once, linearly.`,
          `For a passage built around a single extended example, the structure question is really asking what work that example does for the passage's general claim: introduce it, complicate it, or extend it to a new domain.`,
          `When two structure choices both sound plausible, check which one accounts for the passage's ending — the true organizational pattern must explain how the passage concludes, not just how it begins.`,
        ],
        deepDive: [
          `There's a real gap between basic pattern recognition, which is good enough for shorter or simpler passages, and the structural nuance tested in harder ones. College Board increasingly writes passages whose structure resists a single one-word label, testing whether a student can describe a compound pattern precisely rather than reaching for the nearest generic term like 'compare and contrast.'`,
          `Frame structures and nested arguments reward careful attention because test-writers build distractors that capture only the frame or only the embedded argument, never both. A passage that opens with an anecdote, moves through a general argument, and closes by returning to that anecdote is not simply 'chronological' or simply 'a general argument' — it's a compound shape, and only a choice naming both the frame and what happens inside it will be fully correct.`,
          `For longer or harder passages, annotate paragraph by paragraph as you read: jot one verb per paragraph (introduces, complicates, extends, returns) rather than trying to hold the whole shape in memory. This 'map the transitions' approach turns a vague sense of the passage into a concrete sequence you can match directly against the answer choices.`,
          `The single most reliable elimination technique for these questions is to anchor on the ending. The opening of a passage is the least reliable place to determine its structure, because many passages defy their apparent opening pattern by the final paragraph — a choice that only explains how the passage begins, and doesn't account for how it ends, is not the full structure.`,
        ],
        example: {
          prompt: `A passage opens with an anecdote about a single failed startup, uses it to raise a general question about why promising companies fail, surveys three economic theories addressing that question, and closes by returning to the startup anecdote to show how one theory in particular explains its failure. Which choice best describes the passage's overall structure?`,
          choices: [
            `A framing anecdote introduces a general question, which the passage explores through competing theories before returning to the anecdote to apply one of them.`,
            `A chronological account of a company's rise and fall, followed by an analysis of broader market trends.`,
            `Two competing case studies are compared to determine which company made better strategic decisions.`,
            `An extended definition of business failure, followed by a rebuttal of common misconceptions about it.`,
          ],
          correctIndex: 0,
          walkthrough: `The anecdote opens and closes the passage, bracketing a survey of theories, and the ending specifically applies one theory back to the anecdote — precisely the first choice's compound structure. The second choice misreads the anecdote as a full chronological company history. The third invents a second case study and comparison that isn't described. The fourth invents a rebuttal structure when the passage surveys rather than refutes.`,
        },
        mistakes: [
          `Labeling a passage's structure from its opening paragraph alone and ignoring that the ending changes or completes the pattern.`,
          `Missing a frame structure, a return to the opening anecdote or image, and instead describing the passage as purely linear.`,
          `Calling a passage's survey of multiple theories a 'rebuttal' or 'refutation' when the author never explicitly discredits any of them.`,
          `Collapsing a nested or compound structure into a single simple label that only captures part of what the passage does.`,
          `Choosing a structure description that fits the passage's general topic area but not the specific sequence of moves this passage makes.`,
        ],
      },
    },

    // ---------------------------------------------------------------------
    // SKILL 3: Cross-Text Connections
    // ---------------------------------------------------------------------
    {
      skill: `Cross-Text Connections`,
      title: `Cross-Text Connections`,
      tier: "free",
      content: {
        summary: `Compare two short passages on a related topic — identify where the authors agree, disagree, or address different aspects of the same issue.`,
        concepts: [
          `Read Passage 1 completely and identify its main claim in your own words before looking at Passage 2 — don't try to compare while still reading the first passage.`,
          `Do the same for Passage 2 independently, then explicitly compare the two claims: do they address the exact same question, or does one address a narrower or different aspect of a shared topic?`,
          `The three basic relationships to check for: full agreement (same claim, perhaps different evidence or emphasis), direct disagreement (contradictory claims about the same specific question), and non-overlapping focus (each passage addresses a different aspect of one shared topic, without truly agreeing or disagreeing).`,
          `'How would the author of Passage X respond to Passage Y' questions require applying Passage X's own logic and evidence to Passage Y's specific claim, not just restating Passage X's original argument.`,
          `Don't force a disagreement that isn't there: many cross-text questions test whether you can recognize that two authors are simply discussing different aspects of a topic rather than actually contradicting each other.`,
          `Note the specific scope of each claim (all/most/some, always/often/sometimes) — two passages can seem to disagree but actually make compatible claims once you notice one is broader or narrower than the other.`,
          `Correct answers to response questions stay consistent with the tone and reasoning style established in the passage whose author is 'responding' — an answer that sounds too aggressive or too conciliatory compared to that passage's actual voice is likely wrong.`,
        ],
        example: {
          prompt: `Passage 1 argues that a species of coral is declining primarily because of rising ocean temperatures. Passage 2 argues that the same coral's decline is primarily due to agricultural runoff polluting nearby waters. Based on the two passages, how would the author of Passage 2 most likely respond to Passage 1's claim?`,
          choices: [
            `By arguing that reducing runoff would meaningfully aid coral recovery even if ocean temperatures continue to rise.`,
            `By agreeing that temperature is the sole cause of the coral's decline.`,
            `By denying that the coral population is declining at all.`,
            `By claiming that ocean temperatures have no effect on any marine life.`,
          ],
          correctIndex: 0,
          walkthrough: `Passage 2's author believes runoff is the primary cause, so a response would reassert that addressing runoff helps regardless of temperature, matching the first choice. The second choice contradicts Passage 2's own claim. The third and fourth choices go far beyond anything either passage argues, introducing extreme denials neither author makes.`,
        },
        mistakes: [
          `Blending the two passages' claims together while reading the first one instead of processing each independently.`,
          `Assuming any difference in emphasis between the passages must mean they flatly disagree.`,
          `Answering with a generic restatement of one passage's argument rather than a claim that directly engages with the other passage's specific point.`,
          `Choosing an answer that is too extreme, total denial or total agreement, compared to the measured, partial claims either passage actually makes.`,
          `Losing track of which passage's author is doing the 'responding' and picking an answer from the wrong perspective.`,
        ],
      },
    },
    {
      skill: `Cross-Text Connections`,
      title: `Cross-Text Connections: Predicting an Author's Response`,
      tier: "pro",
      content: {
        summary: `Simulate how one passage's author would specifically engage with the other passage's claim, rather than just restating either argument.`,
        concepts: [
          `Read for each passage's main claim first, independently, before comparing them — don't try to hold both in mind while reading the first one.`,
          `Common relationships: the authors agree but emphasize different evidence, they directly disagree, or one addresses a question the other doesn't raise.`,
          `Watch for questions asking how one author would likely respond to the other's claim — this means applying the first author's logic to the second's specific claim, not just restating either passage.`,
          `Avoid choices that force a disagreement between passages that are actually just discussing different aspects of the same topic.`,
          `Identify each author's underlying method of reasoning, such as relying on statistical trends, a specific case study, or a theoretical model — a predicted response should stay consistent with that same method, not switch to a different kind of argument.`,
          `When a passage anticipates and addresses a counterargument within itself, that internal rebuttal is often recycled almost verbatim as the correct answer to a 'how would this author respond to the other passage' question.`,
          `Be alert to scope mismatches: if Passage 1 makes a claim about 'most cases' and Passage 2 makes a claim about a specific case, the first author's likely response is to note that a specific exception doesn't overturn a general trend, not to abandon their claim.`,
          `The correct predicted response usually reinforces, refines, or partially concedes — full concession or flat contradiction is rare and mostly appears only in the wrong choices.`,
          `Some questions ask what additional evidence would strengthen or weaken one author's argument in light of the other passage — for these, the answer must be new information consistent with, but not already stated in, the original passage's claim.`,
        ],
        deepDive: [
          `Response-prediction questions are the hardest cross-text variant because they require simulating an argumentative stance rather than merely locating information already on the page. The fastest filter for wrong answers is a voice-consistency check: read each candidate response and ask whether it sounds like something this specific author, with this specific level of confidence and this specific reasoning style, would actually say — a response that is more extreme or more conciliatory than the passage's established voice is usually wrong regardless of its content.`,
          `Test writers frequently build the second passage as a challenge that the first passage has, in effect, already anticipated. When Passage 1 includes a sentence addressing a likely objection, that internal rebuttal is often recycled almost word for word as the correct answer once Passage 2 raises exactly that objection. Scanning Passage 1 specifically for any sentence that concedes a limitation or preempts a counterargument is one of the highest-yield habits for this question type.`,
          `Scope mismatches deserve their own scrutiny, because they determine whether a real disagreement is happening at all. A claim about 'most' or 'on average' is not actually contradicted by a single counterexample — it's merely tested by one — so the correct predicted response to a narrow counterexample is almost always to defend the general claim's scope rather than to retreat from it. Distinguishing a genuine disagreement from two claims operating at different levels of generality is the single most tested distinction in this question type.`,
        ],
        example: {
          prompt: `Passage 1 argues that standardized testing, despite its flaws, remains the most reliable tool for comparing student achievement across schools, noting that alternative measures like teacher recommendations vary too much in consistency to be trusted at scale. Passage 2 presents a case study of one district where standardized test scores failed to predict which students would succeed in college. Based on the two passages, how would the author of Passage 1 most likely respond to Passage 2's case study?`,
          choices: [
            `By arguing that a single district's outcomes do not undermine the broader reliability of standardized testing across large populations.`,
            `By agreeing that standardized testing should be abandoned in favor of teacher recommendations.`,
            `By insisting that the case study's data must have been fabricated.`,
            `By claiming that college success is impossible to measure in any way.`,
          ],
          correctIndex: 0,
          walkthrough: `Passage 1's claim concerns reliability at scale and across schools generally, while Passage 2 offers one district's exception. The scope-consistent response is to note that one case doesn't overturn a claim about broad reliability, matching the first choice. The second choice reverses Passage 1's own argument, since it explicitly distrusts recommendations. The third and fourth choices are unsupported extremes that neither passage's reasoning would produce.`,
        },
        mistakes: [
          `Predicting a response that abandons the original author's claim entirely instead of a measured refinement or partial concession.`,
          `Ignoring a scope mismatch, a general trend versus a single case, and treating the two passages as flatly contradictory.`,
          `Inventing a response using a type of evidence or reasoning the original author never relies on elsewhere in their passage.`,
          `Overlooking an internal rebuttal already present in the first passage that essentially previews the correct answer.`,
          `Answering in a tone, fully conceding or highly combative, that is inconsistent with the measured voice the original passage actually uses.`,
        ],
      },
    },
    {
      skill: `Cross-Text Connections`,
      title: `Cross-Text Connections: Shared Evidence, Divergent Interpretations`,
      tier: "pro",
      content: {
        summary: `Handle passage pairs that cite the same data or event but draw different conclusions from it, by separating factual agreement from interpretive disagreement.`,
        concepts: [
          `Some cross-text pairs don't disagree about the underlying facts at all — both passages accept the same data or event, but interpret its significance differently; the question is testing whether you can separate factual agreement from interpretive disagreement.`,
          `Before assuming two passages 'disagree,' check whether they cite the same evidence — if so, the real difference to identify is in what each author thinks that evidence implies, not whether the evidence is real or accurate.`,
          `Look for interpretive framing language: words like 'merely,' 'only,' 'already,' or 'still' signal how an author wants a shared fact to be read, as insignificant, as sufficient, as surprising, or as expected.`,
          `A passage can concede a data point entirely while disputing its relevance, using a move like 'even if X is true, it does not follow that Y' — this concession-then-pivot move is common in the passage that appears second in these pairs.`,
          `When asked what the two authors would agree on, look for the shared factual floor beneath their differing conclusions, usually a specific number, event, or observation neither author disputes.`,
          `When asked where the two authors would disagree, the answer usually names the inference or conclusion drawn from the shared fact, not the fact itself — a wrong choice will describe a factual dispute that isn't actually present in either passage.`,
          `Watch for one author treating the shared evidence as sufficient to prove a broad claim while the other treats the same evidence as merely suggestive or preliminary — this sufficiency disagreement is common in scientific and social-science passage pairs.`,
          `Some pairs cite the same study but disagree about which variable caused the result, a causation-versus-correlation split — identify precisely which causal claim each author attaches to the shared data.`,
          `In pairs built around a shared historical event, watch for one author emphasizing the event's immediate outcome while the other emphasizes its long-term consequence — both can be correct about what happened while disagreeing about what it means.`,
        ],
        deepDive: [
          `The fact/interpretation distinction is the core of this angle, and it's harder than a simple agree/disagree question because students default to assuming shared evidence implies a shared conclusion. Once you internalize that two authors can accept identical data and still walk away with opposite claims, an entire category of cross-text question becomes mechanical: locate the shared fact, then locate each author's separate spin on what it means.`,
          `The concession-then-pivot pattern is worth studying in its own right. It typically shows up as a clause structured like 'even granting that X occurred, it does not follow that Y' — the author explicitly accepts the first passage's fact before pivoting to dispute its significance. Spotting this structural signature tells you immediately that the disagreement lives in interpretation, not in the data, and it usually marks the exact sentence a question will ask you about.`,
          `Causation-versus-correlation pairs deserve special attention because they're common in science-based Reading and Writing passages and reward precise tracking of exactly which causal claim each author is making. One author may say a shared result was caused by variable A, while the other insists the study cannot isolate A's effect from a confounding variable B present during the same period — both authors can be right about the result itself while disagreeing sharply about what produced it.`,
        ],
        example: {
          prompt: `Both passages describe the same ten-year study finding that a particular city's air-quality index improved after a highway was rerouted away from downtown. Passage 1 concludes that rerouting highways is an effective, generalizable strategy for improving urban air quality. Passage 2, citing the same study, notes that the city simultaneously closed a major coal plant during the same period and argues the study cannot isolate the rerouting's individual effect. Based on the two passages, the authors would most likely agree on which of the following?`,
          choices: [
            `The city's air-quality index improved during the ten-year period studied.`,
            `Rerouting highways is the single most effective strategy for improving air quality.`,
            `The coal plant closure had no measurable effect on air quality.`,
            `The study's methodology was fundamentally flawed and should be disregarded.`,
          ],
          correctIndex: 0,
          walkthrough: `Both authors accept the same underlying fact, that the index improved during the period, while disagreeing about what caused it and what that means for policy. The first choice states only that shared factual floor. The second and third choices each take one author's specific interpretive or causal claim as settled fact, which the other author disputes. The fourth choice goes further than either passage, since Passage 2 uses the study to complicate a conclusion rather than dismissing it outright.`,
        },
        mistakes: [
          `Assuming that because two passages draw different conclusions, they must also disagree about the underlying facts or data.`,
          `Missing framing words such as merely, still, or already that reveal how an author wants a shared fact interpreted, and misreading the interpretation as a factual claim.`,
          `Confusing a 'what would they agree on' question with a 'where do they disagree' question and answering the wrong one.`,
          `Attributing a specific causal claim to an author who only asserted correlation, or vice versa.`,
          `Overlooking a concession, such as 'even if X is true,' that shows an author accepts the evidence while still rejecting its significance.`,
        ],
      },
    },
  ],
});
