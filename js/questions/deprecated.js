// Deprecated questions — kept for reference, NOT loaded by index.html.
// Removed from the live bank on 2026-10-28 because their answer choices
// were garbled (e.g. an exponent rendered as "t/7/8").

const DEPRECATED_QUESTIONS = [
  {
    id: "adv-h38",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture is halved every 21 hours. At time t = 0, there are 480 cells. Which function gives the number of cells, N(t), t days after time t = 0?",
    choices: [
      "480(1/2)<sup>t/21</sup>",
      "480(1/2)<sup>7/8t</sup>",
      "480(1/2)<sup>t/7/8</sup>",
      "480(1/2)<sup>21t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 1/2 once every 21 hours. Since t is measured in days, 21 hours is 7/8 days, so the number of periods after t days is t/7/8. Therefore N(t) = 480(1/2)<sup>t/7/8</sup>. Using t/21 would treat t as hours."
  },
  {
    id: "adv-h58",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture is halved every 9 hours. At time t = 0, there are 800 cells. Which function gives the number of cells, N(t), t days after time t = 0?",
    choices: [
      "800(1/2)<sup>t/9</sup>",
      "800(1/2)<sup>3/8t</sup>",
      "800(1/2)<sup>t/3/8</sup>",
      "800(1/2)<sup>9t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 1/2 once every 9 hours. Since t is measured in days, 9 hours is 3/8 days, so the number of periods after t days is t/3/8. Therefore N(t) = 800(1/2)<sup>t/3/8</sup>. Using t/9 would treat t as hours."
  },
  {
    id: "adv-h98",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture triples every 4 hours. At time t = 0, there are 1600 cells. Which function gives the number of cells, N(t), t days after time t = 0?",
    choices: [
      "1600(3)<sup>t/4</sup>",
      "1600(3)<sup>1/6t</sup>",
      "1600(3)<sup>t/1/6</sup>",
      "1600(3)<sup>4t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 3 once every 4 hours. Since t is measured in days, 4 hours is 1/6 days, so the number of periods after t days is t/1/6. Therefore N(t) = 1600(3)<sup>t/1/6</sup>. Using t/4 would treat t as hours."
  },
  {
    id: "adv-h118",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture triples every 6 hours. At time t = 0, there are 480 cells. Which function gives the number of cells, N(t), t days after time t = 0?",
    choices: [
      "480(3)<sup>t/6</sup>",
      "480(3)<sup>1/4t</sup>",
      "480(3)<sup>t/1/4</sup>",
      "480(3)<sup>6t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 3 once every 6 hours. Since t is measured in days, 6 hours is 1/4 days, so the number of periods after t days is t/1/4. Therefore N(t) = 480(3)<sup>t/1/4</sup>. Using t/6 would treat t as hours."
  },
  {
    id: "adv-h138",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture triples every 8 hours. At time t = 0, there are 200 cells. Which function gives the number of cells, N(t), t days after time t = 0?",
    choices: [
      "200(3)<sup>t/8</sup>",
      "200(3)<sup>1/3t</sup>",
      "200(3)<sup>t/1/3</sup>",
      "200(3)<sup>8t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 3 once every 8 hours. Since t is measured in days, 8 hours is 1/3 days, so the number of periods after t days is t/1/3. Therefore N(t) = 200(3)<sup>t/1/3</sup>. Using t/8 would treat t as hours."
  },
  {
    id: "adv-h158",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture doubles every 6 hours. At time t = 0, there are 320 cells. Which function gives the number of cells, N(t), t days after time t = 0?",
    choices: [
      "320(2)<sup>t/6</sup>",
      "320(2)<sup>1/4t</sup>",
      "320(2)<sup>t/1/4</sup>",
      "320(2)<sup>6t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 2 once every 6 hours. Since t is measured in days, 6 hours is 1/4 days, so the number of periods after t days is t/1/4. Therefore N(t) = 320(2)<sup>t/1/4</sup>. Using t/6 would treat t as hours."
  },
  {
    id: "adv-h178",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture doubles every 10 hours. At time t = 0, there are 960 cells. Which function gives the number of cells, N(t), t days after time t = 0?",
    choices: [
      "960(2)<sup>t/10</sup>",
      "960(2)<sup>5/12t</sup>",
      "960(2)<sup>t/5/12</sup>",
      "960(2)<sup>10t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 2 once every 10 hours. Since t is measured in days, 10 hours is 5/12 days, so the number of periods after t days is t/5/12. Therefore N(t) = 960(2)<sup>t/5/12</sup>. Using t/10 would treat t as hours."
  },
  {
    id: "adv-h218",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture doubles every 16 hours. At time t = 0, there are 960 cells. Which function gives the number of cells, N(t), t days after time t = 0?",
    choices: [
      "960(2)<sup>t/16</sup>",
      "960(2)<sup>2/3t</sup>",
      "960(2)<sup>t/2/3</sup>",
      "960(2)<sup>16t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 2 once every 16 hours. Since t is measured in days, 16 hours is 2/3 days, so the number of periods after t days is t/2/3. Therefore N(t) = 960(2)<sup>t/2/3</sup>. Using t/16 would treat t as hours."
  },
  {
    id: "adv-h238",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture triples every 8 hours. At time t = 0, there are 960 cells. Which function gives the number of cells, N(t), t days after time t = 0?",
    choices: [
      "960(3)<sup>t/8</sup>",
      "960(3)<sup>1/3t</sup>",
      "960(3)<sup>t/1/3</sup>",
      "960(3)<sup>8t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 3 once every 8 hours. Since t is measured in days, 8 hours is 1/3 days, so the number of periods after t days is t/1/3. Therefore N(t) = 960(3)<sup>t/1/3</sup>. Using t/8 would treat t as hours."
  },
  {
    id: "adv-h258",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture triples every 12 hours. At time t = 0, there are 800 cells. Which function gives the number of cells, N(t), t days after time t = 0?",
    choices: [
      "800(3)<sup>t/12</sup>",
      "800(3)<sup>1/2t</sup>",
      "800(3)<sup>t/1/2</sup>",
      "800(3)<sup>12t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 3 once every 12 hours. Since t is measured in days, 12 hours is 1/2 days, so the number of periods after t days is t/1/2. Therefore N(t) = 800(3)<sup>t/1/2</sup>. Using t/12 would treat t as hours."
  },
  {
    id: "adv-h278",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture is halved every 15 hours. At time t = 0, there are 2400 cells. Which function gives the number of cells, N(t), t days after time t = 0?",
    choices: [
      "2400(1/2)<sup>t/15</sup>",
      "2400(1/2)<sup>5/8t</sup>",
      "2400(1/2)<sup>t/5/8</sup>",
      "2400(1/2)<sup>15t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 1/2 once every 15 hours. Since t is measured in days, 15 hours is 5/8 days, so the number of periods after t days is t/5/8. Therefore N(t) = 2400(1/2)<sup>t/5/8</sup>. Using t/15 would treat t as hours."
  }
];
