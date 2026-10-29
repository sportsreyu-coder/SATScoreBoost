// Bluebook-calibrated set (Math + Reading and Writing)
// Original questions modeled on the question types and difficulty of the
// College Board's official digital SAT Practice Test 4 (Math Module 2).
// Added 2026-10-28 to replace the items moved to the Extra Hard tier.

QUESTIONS.push(
  {
    id: "alg-bb1",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 2,
    prompt: "A school surveyed its students about a later start time. A news report stated that 4 times as many students supported the change as opposed it. A follow-up report stated that 4,500 more students supported the change than opposed it. Based on these reports, how many students opposed the change?",
    choices: [
      "4,500",
      "6,000",
      "1,500",
      "18,000"
    ],
    answer: 2,
    explanation: "Let a be the number who opposed, so the number who supported the change is 4a. The difference is 4a − a = 3a = 4,500, so a = 1,500. (6,000 is the other group, not the one asked about.)"
  },
  {
    id: "alg-bb2",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 2,
    prompt: "A school surveyed its students about a later start time. A news report stated that 5 times as many students supported the change as opposed it. A follow-up report stated that 38,000 more students supported the change than opposed it. Based on these reports, how many students opposed the change?",
    choices: [
      "190,000",
      "38,000",
      "9,500",
      "47,500"
    ],
    answer: 2,
    explanation: "Let a be the number who opposed, so the number who supported the change is 5a. The difference is 5a − a = 4a = 38,000, so a = 9,500. (47,500 is the other group, not the one asked about.)"
  },
  {
    id: "alg-bb3",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 2,
    prompt: "A town held a vote on building a community pool. A news report stated that 5 times as many residents voted yes as voted no. A follow-up report stated that 12,000 more residents voted yes than voted no. Based on these reports, how many residents voted no?",
    choices: [
      "60,000",
      "15,000",
      "12,000",
      "3,000"
    ],
    answer: 3,
    explanation: "Let a be the number who voted no, so the number who voted yes is 5a. The difference is 5a − a = 4a = 12,000, so a = 3,000. (15,000 is the other group, not the one asked about.)"
  },
  {
    id: "alg-bb4",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 2,
    prompt: "A town held a vote on building a community pool. A news report stated that 5 times as many residents voted yes as voted no. A follow-up report stated that 18,000 more residents voted yes than voted no. Based on these reports, how many residents voted no?",
    choices: [
      "22,500",
      "18,000",
      "4,500",
      "90,000"
    ],
    answer: 2,
    explanation: "Let a be the number who voted no, so the number who voted yes is 5a. The difference is 5a − a = 4a = 18,000, so a = 4,500. (22,500 is the other group, not the one asked about.)"
  },
  {
    id: "alg-bb5",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 2,
    prompt: "A school surveyed its students about a later start time. A news report stated that 3 times as many students supported the change as opposed it. A follow-up report stated that 14,000 more students supported the change than opposed it. Based on these reports, how many students opposed the change?",
    choices: [
      "21,000",
      "14,000",
      "42,000",
      "7,000"
    ],
    answer: 3,
    explanation: "Let a be the number who opposed, so the number who supported the change is 3a. The difference is 3a − a = 2a = 14,000, so a = 7,000. (21,000 is the other group, not the one asked about.)"
  },
  {
    id: "alg-bb6",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 2,
    prompt: "A school surveyed its students about a later start time. A news report stated that 5 times as many students supported the change as opposed it. A follow-up report stated that 18,000 more students supported the change than opposed it. Based on these reports, how many students opposed the change?",
    choices: [
      "4,500",
      "22,500",
      "18,000",
      "90,000"
    ],
    answer: 0,
    explanation: "Let a be the number who opposed, so the number who supported the change is 5a. The difference is 5a − a = 4a = 18,000, so a = 4,500. (22,500 is the other group, not the one asked about.)"
  },
  {
    id: "alg-bb7",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 2,
    prompt: "A town held a vote on building a community pool. A news report stated that 5 times as many residents voted yes as voted no. A follow-up report stated that 30,000 more residents voted yes than voted no. Based on these reports, how many residents voted no?",
    choices: [
      "150,000",
      "37,500",
      "7,500",
      "30,000"
    ],
    answer: 2,
    explanation: "Let a be the number who voted no, so the number who voted yes is 5a. The difference is 5a − a = 4a = 30,000, so a = 7,500. (37,500 is the other group, not the one asked about.)"
  },
  {
    id: "alg-bb8",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 2,
    prompt: "A moving truck can tow a trailer if the combined weight of the trailer and the boxes it contains is no more than 3,522 pounds. What is the maximum number of boxes this truck can tow in a trailer with a weight of 800 pounds if each box weighs 130 pounds?",
    choices: [
      "33",
      "21",
      "27",
      "20"
    ],
    answer: 3,
    explanation: "The boxes plus trailer must satisfy 800 + 130b ≤ 3,522, so 130b ≤ 2,722 and b ≤ 20.938. The number of boxes must be a whole number, so the maximum is 20. Rounding up to 21 would exceed the weight limit."
  },
  {
    id: "alg-bb9",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 2,
    prompt: "A moving truck can tow a trailer if the combined weight of the trailer and the boxes it contains is no more than 4,620 pounds. What is the maximum number of boxes this truck can tow in a trailer with a weight of 900 pounds if each box weighs 90 pounds?",
    choices: [
      "61",
      "41",
      "51",
      "42"
    ],
    answer: 1,
    explanation: "The boxes plus trailer must satisfy 900 + 90b ≤ 4,620, so 90b ≤ 3,720 and b ≤ 41.333. The number of boxes must be a whole number, so the maximum is 41. Rounding up to 42 would exceed the weight limit."
  },
  {
    id: "alg-bb10",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 2,
    prompt: "A moving truck can tow a trailer if the combined weight of the trailer and the boxes it contains is no more than 4,899 pounds. What is the maximum number of boxes this truck can tow in a trailer with a weight of 800 pounds if each box weighs 110 pounds?",
    choices: [
      "38",
      "37",
      "51",
      "44"
    ],
    answer: 1,
    explanation: "The boxes plus trailer must satisfy 800 + 110b ≤ 4,899, so 110b ≤ 4,099 and b ≤ 37.264. The number of boxes must be a whole number, so the maximum is 37. Rounding up to 38 would exceed the weight limit."
  },
  {
    id: "alg-bb11",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 2,
    prompt: "A moving truck can tow a trailer if the combined weight of the trailer and the boxes it contains is no more than 4,416 pounds. What is the maximum number of boxes this truck can tow in a trailer with a weight of 900 pounds if each box weighs 140 pounds?",
    choices: [
      "37",
      "26",
      "31",
      "25"
    ],
    answer: 3,
    explanation: "The boxes plus trailer must satisfy 900 + 140b ≤ 4,416, so 140b ≤ 3,516 and b ≤ 25.114. The number of boxes must be a whole number, so the maximum is 25. Rounding up to 26 would exceed the weight limit."
  },
  {
    id: "alg-bb12",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 2,
    prompt: "A moving truck can tow a trailer if the combined weight of the trailer and the boxes it contains is no more than 6,308 pounds. What is the maximum number of boxes this truck can tow in a trailer with a weight of 900 pounds if each box weighs 140 pounds?",
    choices: [
      "38",
      "51",
      "39",
      "45"
    ],
    answer: 0,
    explanation: "The boxes plus trailer must satisfy 900 + 140b ≤ 6,308, so 140b ≤ 5,408 and b ≤ 38.629. The number of boxes must be a whole number, so the maximum is 38. Rounding up to 39 would exceed the weight limit."
  },
  {
    id: "alg-bb13",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 2,
    prompt: "A moving truck can tow a trailer if the combined weight of the trailer and the boxes it contains is no more than 3,609 pounds. What is the maximum number of boxes this truck can tow in a trailer with a weight of 300 pounds if each box weighs 90 pounds?",
    choices: [
      "37",
      "43",
      "40",
      "36"
    ],
    answer: 3,
    explanation: "The boxes plus trailer must satisfy 300 + 90b ≤ 3,609, so 90b ≤ 3,309 and b ≤ 36.767. The number of boxes must be a whole number, so the maximum is 36. Rounding up to 37 would exceed the weight limit."
  },
  {
    id: "alg-bb14",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 2,
    prompt: "A moving truck can tow a trailer if the combined weight of the trailer and the boxes it contains is no more than 6,809 pounds. What is the maximum number of boxes this truck can tow in a trailer with a weight of 400 pounds if each box weighs 140 pounds?",
    choices: [
      "51",
      "48",
      "45",
      "46"
    ],
    answer: 2,
    explanation: "The boxes plus trailer must satisfy 400 + 140b ≤ 6,809, so 140b ≤ 6,409 and b ≤ 45.779. The number of boxes must be a whole number, so the maximum is 45. Rounding up to 46 would exceed the weight limit."
  },
  {
    id: "alg-bb15",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "−12x + 21px = −84<br><br>In the given equation, p is a constant. The equation has no solution. What is the value of p?",
    choices: [
      "0",
      "−4/7",
      "4/7",
      "−4"
    ],
    answer: 2,
    explanation: "Factor x out of the left side: (−12 + 21p)x = −84. A linear equation of this form has no solution when the coefficient of x is 0 but the right side is not. So −12 + 21p = 0, which gives p = 4/7. With that value the equation becomes 0 = −84, which is false for every x."
  },
  {
    id: "alg-bb16",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "−12x + 7px = −42<br><br>In the given equation, p is a constant. The equation has no solution. What is the value of p?",
    choices: [
      "0",
      "12/7",
      "−12/7",
      "−6"
    ],
    answer: 1,
    explanation: "Factor x out of the left side: (−12 + 7p)x = −42. A linear equation of this form has no solution when the coefficient of x is 0 but the right side is not. So −12 + 7p = 0, which gives p = 12/7. With that value the equation becomes 0 = −42, which is false for every x."
  },
  {
    id: "alg-bb17",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "6x + 18px = 96<br><br>In the given equation, p is a constant. The equation has no solution. What is the value of p?",
    choices: [
      "1/3",
      "16/3",
      "−1/3",
      "0"
    ],
    answer: 2,
    explanation: "Factor x out of the left side: (6 + 18p)x = 96. A linear equation of this form has no solution when the coefficient of x is 0 but the right side is not. So 6 + 18p = 0, which gives p = −1/3. With that value the equation becomes 0 = 96, which is false for every x."
  },
  {
    id: "alg-bb18",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "−5x + 12px = −78<br><br>In the given equation, p is a constant. The equation has no solution. What is the value of p?",
    choices: [
      "0",
      "−13/2",
      "−5/12",
      "5/12"
    ],
    answer: 3,
    explanation: "Factor x out of the left side: (−5 + 12p)x = −78. A linear equation of this form has no solution when the coefficient of x is 0 but the right side is not. So −5 + 12p = 0, which gives p = 5/12. With that value the equation becomes 0 = −78, which is false for every x."
  },
  {
    id: "alg-bb19",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "−2x + 28px = 60<br><br>In the given equation, p is a constant. The equation has no solution. What is the value of p?",
    choices: [
      "0",
      "−1/14",
      "1/14",
      "15/7"
    ],
    answer: 2,
    explanation: "Factor x out of the left side: (−2 + 28p)x = 60. A linear equation of this form has no solution when the coefficient of x is 0 but the right side is not. So −2 + 28p = 0, which gives p = 1/14. With that value the equation becomes 0 = 60, which is false for every x."
  },
  {
    id: "alg-bb20",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "−11x + 8px = 60<br><br>In the given equation, p is a constant. The equation has no solution. What is the value of p?",
    choices: [
      "15/2",
      "11/8",
      "−11/8",
      "0"
    ],
    answer: 1,
    explanation: "Factor x out of the left side: (−11 + 8p)x = 60. A linear equation of this form has no solution when the coefficient of x is 0 but the right side is not. So −11 + 8p = 0, which gives p = 11/8. With that value the equation becomes 0 = 60, which is false for every x."
  },
  {
    id: "alg-bb21",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "5x + 27px = −102<br><br>In the given equation, p is a constant. The equation has no solution. What is the value of p?",
    choices: [
      "−5/27",
      "5/27",
      "−34/9",
      "0"
    ],
    answer: 0,
    explanation: "Factor x out of the left side: (5 + 27p)x = −102. A linear equation of this form has no solution when the coefficient of x is 0 but the right side is not. So 5 + 27p = 0, which gives p = −5/27. With that value the equation becomes 0 = −102, which is false for every x."
  },
  {
    id: "alg-bb22",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "−11x + 6px = −66<br><br>In the given equation, p is a constant. The equation has no solution. What is the value of p?",
    choices: [
      "−11",
      "0",
      "11/6",
      "−11/6"
    ],
    answer: 2,
    explanation: "Factor x out of the left side: (−11 + 6p)x = −66. A linear equation of this form has no solution when the coefficient of x is 0 but the right side is not. So −11 + 6p = 0, which gives p = 11/6. With that value the equation becomes 0 = −66, which is false for every x."
  },
  {
    id: "alg-bb23",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "9x + 15px = 108<br><br>In the given equation, p is a constant. The equation has no solution. What is the value of p?",
    choices: [
      "0",
      "−3/5",
      "3/5",
      "36/5"
    ],
    answer: 1,
    explanation: "Factor x out of the left side: (9 + 15p)x = 108. A linear equation of this form has no solution when the coefficient of x is 0 but the right side is not. So 9 + 15p = 0, which gives p = −3/5. With that value the equation becomes 0 = 108, which is false for every x."
  },
  {
    id: "alg-bb24",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "−2x + 2px = 60<br><br>In the given equation, p is a constant. The equation has no solution. What is the value of p?",
    choices: [
      "−1",
      "0",
      "1",
      "30"
    ],
    answer: 2,
    explanation: "Factor x out of the left side: (−2 + 2p)x = 60. A linear equation of this form has no solution when the coefficient of x is 0 but the right side is not. So −2 + 2p = 0, which gives p = 1. With that value the equation becomes 0 = 60, which is false for every x."
  },
  {
    id: "alg-bb25",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = 2x + 12<br>y = −3x − 13<br><br>A new system is created from the two given equations and the equation x − 4y = −13. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Infinitely many",
      "Exactly two",
      "Zero",
      "Exactly one"
    ],
    answer: 3,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting 2x + 12 equal to −3x − 13 gives x = −5, and then y = 2. A solution to all three equations must be that point, (−5, 2). Substituting into the third equation gives 1(−5) + (−4)(2) = −13, which equals −13. So the system has exactly one solution."
  },
  {
    id: "alg-bb26",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = −2x + 5<br>y = −3x + 7<br><br>A new system is created from the two given equations and the equation 4x − 3y = 3. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Zero",
      "Exactly two",
      "Exactly one",
      "Infinitely many"
    ],
    answer: 0,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting −2x + 5 equal to −3x + 7 gives x = 2, and then y = 1. A solution to all three equations must be that point, (2, 1). Substituting into the third equation gives 4(2) + (−3)(1) = 5, which does not equal 3. So the system has no solution."
  },
  {
    id: "alg-bb27",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = 2x + 6<br>y = −x − 6<br><br>A new system is created from the two given equations and the equation x + 3y = −10. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Exactly one",
      "Exactly two",
      "Infinitely many",
      "Zero"
    ],
    answer: 0,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting 2x + 6 equal to −x − 6 gives x = −4, and then y = −2. A solution to all three equations must be that point, (−4, −2). Substituting into the third equation gives 1(−4) + (3)(−2) = −10, which equals −10. So the system has exactly one solution."
  },
  {
    id: "alg-bb28",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = x + 7<br>y = −3x − 13<br><br>A new system is created from the two given equations and the equation x + 5y = 5. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Zero",
      "Exactly one",
      "Exactly two",
      "Infinitely many"
    ],
    answer: 1,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting x + 7 equal to −3x − 13 gives x = −5, and then y = 2. A solution to all three equations must be that point, (−5, 2). Substituting into the third equation gives 1(−5) + (5)(2) = 5, which equals 5. So the system has exactly one solution."
  },
  {
    id: "alg-bb29",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = 3x + 13<br>y = x + 1<br><br>A new system is created from the two given equations and the equation x − 3y = 14. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Infinitely many",
      "Exactly one",
      "Zero",
      "Exactly two"
    ],
    answer: 2,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting 3x + 13 equal to x + 1 gives x = −6, and then y = −5. A solution to all three equations must be that point, (−6, −5). Substituting into the third equation gives 1(−6) + (−3)(−5) = 9, which does not equal 14. So the system has no solution."
  },
  {
    id: "alg-bb30",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = 3x + 11<br>y = −2x − 9<br><br>A new system is created from the two given equations and the equation x − 3y = −1. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Exactly two",
      "Exactly one",
      "Infinitely many",
      "Zero"
    ],
    answer: 1,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting 3x + 11 equal to −2x − 9 gives x = −4, and then y = −1. A solution to all three equations must be that point, (−4, −1). Substituting into the third equation gives 1(−4) + (−3)(−1) = −1, which equals −1. So the system has exactly one solution."
  },
  {
    id: "alg-bb31",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = −x − 7<br>y = −2x − 11<br><br>A new system is created from the two given equations and the equation x + 3y = −15. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Exactly one",
      "Exactly two",
      "Zero",
      "Infinitely many"
    ],
    answer: 2,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting −x − 7 equal to −2x − 11 gives x = −4, and then y = −3. A solution to all three equations must be that point, (−4, −3). Substituting into the third equation gives 1(−4) + (3)(−3) = −13, which does not equal −15. So the system has no solution."
  },
  {
    id: "alg-bb32",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = 2x + 14<br>y = −3x − 16<br><br>A new system is created from the two given equations and the equation x + 2y = 0. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Zero",
      "Exactly one",
      "Exactly two",
      "Infinitely many"
    ],
    answer: 0,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting 2x + 14 equal to −3x − 16 gives x = −6, and then y = 2. A solution to all three equations must be that point, (−6, 2). Substituting into the third equation gives 1(−6) + (2)(2) = −2, which does not equal 0. So the system has no solution."
  },
  {
    id: "alg-bb33",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = 3x + 4<br>y = −3x − 2<br><br>A new system is created from the two given equations and the equation 4x − 2y = −6. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Exactly two",
      "Zero",
      "Exactly one",
      "Infinitely many"
    ],
    answer: 2,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting 3x + 4 equal to −3x − 2 gives x = −1, and then y = 1. A solution to all three equations must be that point, (−1, 1). Substituting into the third equation gives 4(−1) + (−2)(1) = −6, which equals −6. So the system has exactly one solution."
  },
  {
    id: "alg-bb34",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = 3x − 17<br>y = 2x − 12<br><br>A new system is created from the two given equations and the equation 3x + 4y = 4. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Infinitely many",
      "Exactly two",
      "Exactly one",
      "Zero"
    ],
    answer: 3,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting 3x − 17 equal to 2x − 12 gives x = 5, and then y = −2. A solution to all three equations must be that point, (5, −2). Substituting into the third equation gives 3(5) + (4)(−2) = 7, which does not equal 4. So the system has no solution."
  },
  {
    id: "alg-bb35",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = −x + 6<br>y = x<br><br>A new system is created from the two given equations and the equation 4x + 4y = 26. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Exactly one",
      "Zero",
      "Infinitely many",
      "Exactly two"
    ],
    answer: 1,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting −x + 6 equal to x gives x = 3, and then y = 3. A solution to all three equations must be that point, (3, 3). Substituting into the third equation gives 4(3) + (4)(3) = 24, which does not equal 26. So the system has no solution."
  },
  {
    id: "alg-bb36",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = x − 3<br>y = −x + 7<br><br>A new system is created from the two given equations and the equation 3x + 3y = 21. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Exactly two",
      "Infinitely many",
      "Zero",
      "Exactly one"
    ],
    answer: 3,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting x − 3 equal to −x + 7 gives x = 5, and then y = 2. A solution to all three equations must be that point, (5, 2). Substituting into the third equation gives 3(5) + (3)(2) = 21, which equals 21. So the system has exactly one solution."
  },
  {
    id: "alg-bb37",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = −x + 3<br>y = −2x + 3<br><br>A new system is created from the two given equations and the equation 2x + 3y = 11. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Exactly two",
      "Exactly one",
      "Zero",
      "Infinitely many"
    ],
    answer: 2,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting −x + 3 equal to −2x + 3 gives x = 0, and then y = 3. A solution to all three equations must be that point, (0, 3). Substituting into the third equation gives 2(0) + (3)(3) = 9, which does not equal 11. So the system has no solution."
  },
  {
    id: "alg-bb38",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = 3x + 7<br>y = 2x + 6<br><br>A new system is created from the two given equations and the equation 3x + 2y = 7. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Infinitely many",
      "Exactly one",
      "Exactly two",
      "Zero"
    ],
    answer: 3,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting 3x + 7 equal to 2x + 6 gives x = −1, and then y = 4. A solution to all three equations must be that point, (−1, 4). Substituting into the third equation gives 3(−1) + (2)(4) = 5, which does not equal 7. So the system has no solution."
  },
  {
    id: "alg-bb39",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = −2x − 10<br>y = x + 5<br><br>A new system is created from the two given equations and the equation 4x + 5y = −20. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Exactly two",
      "Exactly one",
      "Zero",
      "Infinitely many"
    ],
    answer: 1,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting −2x − 10 equal to x + 5 gives x = −5, and then y = 0. A solution to all three equations must be that point, (−5, 0). Substituting into the third equation gives 4(−5) + (5)(0) = −20, which equals −20. So the system has exactly one solution."
  },
  {
    id: "alg-bb40",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "y = −x + 9<br>y = x + 3<br><br>A new system is created from the two given equations and the equation 4x + 4y = 36. How many solutions (x, y) does the new system of three equations have?",
    choices: [
      "Exactly two",
      "Infinitely many",
      "Zero",
      "Exactly one"
    ],
    answer: 3,
    explanation: "The first two lines have different slopes, so they meet at exactly one point. Setting −x + 9 equal to x + 3 gives x = 3, and then y = 6. A solution to all three equations must be that point, (3, 6). Substituting into the third equation gives 4(3) + (4)(6) = 36, which equals 36. So the system has exactly one solution."
  },
  {
    id: "adv-bb1",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "f(x) = (x − 6)(x + 5)<br><br>The function f is defined by the given equation. For what value of x does f(x) reach its minimum?",
    choices: [
      "1/2",
      "−1/2",
      "−5",
      "−30"
    ],
    answer: 0,
    explanation: "The zeros of f are x = 6 and x = −5. The graph is a parabola opening upward, and its vertex lies halfway between the zeros, at x = (6 + (−5))/2 = 1/2. That is where f(x) reaches its minimum. (−30 is the y-intercept, not the location of the minimum.)"
  },
  {
    id: "adv-bb2",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "f(x) = (x − 11)(x + 12)<br><br>The function f is defined by the given equation. For what value of x does f(x) reach its minimum?",
    choices: [
      "−12",
      "−132",
      "1/2",
      "−1/2"
    ],
    answer: 3,
    explanation: "The zeros of f are x = 11 and x = −12. The graph is a parabola opening upward, and its vertex lies halfway between the zeros, at x = (11 + (−12))/2 = −1/2. That is where f(x) reaches its minimum. (−132 is the y-intercept, not the location of the minimum.)"
  },
  {
    id: "adv-bb3",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "f(x) = (x − 10)(x + 3)<br><br>The function f is defined by the given equation. For what value of x does f(x) reach its minimum?",
    choices: [
      "−30",
      "7/2",
      "−3",
      "−7/2"
    ],
    answer: 1,
    explanation: "The zeros of f are x = 10 and x = −3. The graph is a parabola opening upward, and its vertex lies halfway between the zeros, at x = (10 + (−3))/2 = 7/2. That is where f(x) reaches its minimum. (−30 is the y-intercept, not the location of the minimum.)"
  },
  {
    id: "adv-bb4",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "f(x) = (x − 10)(x + 11)<br><br>The function f is defined by the given equation. For what value of x does f(x) reach its minimum?",
    choices: [
      "−110",
      "−1/2",
      "−11",
      "1/2"
    ],
    answer: 1,
    explanation: "The zeros of f are x = 10 and x = −11. The graph is a parabola opening upward, and its vertex lies halfway between the zeros, at x = (10 + (−11))/2 = −1/2. That is where f(x) reaches its minimum. (−110 is the y-intercept, not the location of the minimum.)"
  },
  {
    id: "adv-bb5",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "f(x) = (x − 11)(x + 5)<br><br>The function f is defined by the given equation. For what value of x does f(x) reach its minimum?",
    choices: [
      "−55",
      "−3",
      "−5",
      "3"
    ],
    answer: 3,
    explanation: "The zeros of f are x = 11 and x = −5. The graph is a parabola opening upward, and its vertex lies halfway between the zeros, at x = (11 + (−5))/2 = 3. That is where f(x) reaches its minimum. (−55 is the y-intercept, not the location of the minimum.)"
  },
  {
    id: "adv-bb6",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "f(x) = (x − 12)(x + 11)<br><br>The function f is defined by the given equation. For what value of x does f(x) reach its minimum?",
    choices: [
      "1/2",
      "−132",
      "−1/2",
      "−11"
    ],
    answer: 0,
    explanation: "The zeros of f are x = 12 and x = −11. The graph is a parabola opening upward, and its vertex lies halfway between the zeros, at x = (12 + (−11))/2 = 1/2. That is where f(x) reaches its minimum. (−132 is the y-intercept, not the location of the minimum.)"
  },
  {
    id: "adv-bb7",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "f(x) = (x − 7)(x + 13)<br><br>The function f is defined by the given equation. For what value of x does f(x) reach its minimum?",
    choices: [
      "−91",
      "−3",
      "3",
      "−13"
    ],
    answer: 1,
    explanation: "The zeros of f are x = 7 and x = −13. The graph is a parabola opening upward, and its vertex lies halfway between the zeros, at x = (7 + (−13))/2 = −3. That is where f(x) reaches its minimum. (−91 is the y-intercept, not the location of the minimum.)"
  },
  {
    id: "adv-bb8",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "f(x) = (x − 8)(x + 9)<br><br>The function f is defined by the given equation. For what value of x does f(x) reach its minimum?",
    choices: [
      "−1/2",
      "1/2",
      "−72",
      "−9"
    ],
    answer: 0,
    explanation: "The zeros of f are x = 8 and x = −9. The graph is a parabola opening upward, and its vertex lies halfway between the zeros, at x = (8 + (−9))/2 = −1/2. That is where f(x) reaches its minimum. (−72 is the y-intercept, not the location of the minimum.)"
  },
  {
    id: "adv-bb9",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "f(x) = (x − 3)(x + 7)<br><br>The function f is defined by the given equation. For what value of x does f(x) reach its minimum?",
    choices: [
      "−7",
      "−2",
      "−21",
      "2"
    ],
    answer: 1,
    explanation: "The zeros of f are x = 3 and x = −7. The graph is a parabola opening upward, and its vertex lies halfway between the zeros, at x = (3 + (−7))/2 = −2. That is where f(x) reaches its minimum. (−21 is the y-intercept, not the location of the minimum.)"
  },
  {
    id: "adv-bb10",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "f(x) = (x − 6)(x + 4)<br><br>The function f is defined by the given equation. For what value of x does f(x) reach its minimum?",
    choices: [
      "1",
      "−24",
      "−1",
      "−4"
    ],
    answer: 0,
    explanation: "The zeros of f are x = 6 and x = −4. The graph is a parabola opening upward, and its vertex lies halfway between the zeros, at x = (6 + (−4))/2 = 1. That is where f(x) reaches its minimum. (−24 is the y-intercept, not the location of the minimum.)"
  },
  {
    id: "adv-bb11",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "The function f(x) = (x − 6)<sup>2</sup> + 5 gives a toy rocket's height above the ground, f(x), in inches, x seconds after it started moving, where 0 ≤ x ≤ 12. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the xy-plane?",
    choices: [
      "The toy rocket's height was 6 inches when it started moving.",
      "The toy rocket's minimum height was 5 inches.",
      "The toy rocket's minimum height was 6 inches.",
      "The toy rocket's height was 5 inches when it started moving."
    ],
    answer: 1,
    explanation: "In vertex form f(x) = a(x − h)<sup>2</sup> + k, the vertex is (h, k). Here the vertex is (6, 5). Since a > 0, the parabola opens upward, so 5 is the minimum value of f, reached when x = 6. The height when it started moving is f(0) = 41, not a coordinate of the vertex."
  },
  {
    id: "adv-bb12",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "The function f(x) = 3(x − 3)<sup>2</sup> + 5 gives a toy rocket's height above the ground, f(x), in inches, x seconds after it started moving, where 0 ≤ x ≤ 6. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the xy-plane?",
    choices: [
      "The toy rocket's height was 3 inches when it started moving.",
      "The toy rocket's height was 5 inches when it started moving.",
      "The toy rocket's minimum height was 5 inches.",
      "The toy rocket's minimum height was 3 inches."
    ],
    answer: 2,
    explanation: "In vertex form f(x) = a(x − h)<sup>2</sup> + k, the vertex is (h, k). Here the vertex is (3, 5). Since a > 0, the parabola opens upward, so 5 is the minimum value of f, reached when x = 3. The height when it started moving is f(0) = 32, not a coordinate of the vertex."
  },
  {
    id: "adv-bb13",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "The function f(x) = 4(x − 6)<sup>2</sup> + 4 gives a toy rocket's height above the ground, f(x), in inches, x seconds after it started moving, where 0 ≤ x ≤ 12. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the xy-plane?",
    choices: [
      "The toy rocket's height was 6 inches when it started moving.",
      "The toy rocket's height was 4 inches when it started moving.",
      "The toy rocket's minimum height was 6 inches.",
      "The toy rocket's minimum height was 4 inches."
    ],
    answer: 3,
    explanation: "In vertex form f(x) = a(x − h)<sup>2</sup> + k, the vertex is (h, k). Here the vertex is (6, 4). Since a > 0, the parabola opens upward, so 4 is the minimum value of f, reached when x = 6. The height when it started moving is f(0) = 148, not a coordinate of the vertex."
  },
  {
    id: "adv-bb14",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "The function f(x) = (x − 6)<sup>2</sup> + 3 gives a toy rocket's height above the ground, f(x), in inches, x seconds after it started moving, where 0 ≤ x ≤ 12. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the xy-plane?",
    choices: [
      "The toy rocket's minimum height was 3 inches.",
      "The toy rocket's height was 6 inches when it started moving.",
      "The toy rocket's minimum height was 6 inches.",
      "The toy rocket's height was 3 inches when it started moving."
    ],
    answer: 0,
    explanation: "In vertex form f(x) = a(x − h)<sup>2</sup> + k, the vertex is (h, k). Here the vertex is (6, 3). Since a > 0, the parabola opens upward, so 3 is the minimum value of f, reached when x = 6. The height when it started moving is f(0) = 39, not a coordinate of the vertex."
  },
  {
    id: "adv-bb15",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "The function f(x) = 4(x − 5)<sup>2</sup> + 4 gives a toy rocket's height above the ground, f(x), in inches, x seconds after it started moving, where 0 ≤ x ≤ 10. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the xy-plane?",
    choices: [
      "The toy rocket's height was 4 inches when it started moving.",
      "The toy rocket's minimum height was 5 inches.",
      "The toy rocket's height was 5 inches when it started moving.",
      "The toy rocket's minimum height was 4 inches."
    ],
    answer: 3,
    explanation: "In vertex form f(x) = a(x − h)<sup>2</sup> + k, the vertex is (h, k). Here the vertex is (5, 4). Since a > 0, the parabola opens upward, so 4 is the minimum value of f, reached when x = 5. The height when it started moving is f(0) = 104, not a coordinate of the vertex."
  },
  {
    id: "adv-bb16",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "The function f(x) = 4(x − 2)<sup>2</sup> + 4 gives a ball's height above the floor, f(x), in feet, x seconds after it started moving, where 0 ≤ x ≤ 4. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the xy-plane?",
    choices: [
      "The ball's minimum height was 4 feet.",
      "The ball's height was 4 feet when it started moving.",
      "The ball's height was 2 feet when it started moving.",
      "The ball's minimum height was 2 feet."
    ],
    answer: 0,
    explanation: "In vertex form f(x) = a(x − h)<sup>2</sup> + k, the vertex is (h, k). Here the vertex is (2, 4). Since a > 0, the parabola opens upward, so 4 is the minimum value of f, reached when x = 2. The height when it started moving is f(0) = 20, not a coordinate of the vertex."
  },
  {
    id: "adv-bb17",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "The function f(x) = 4(x − 5)<sup>2</sup> + 8 gives a drone's altitude above a field, f(x), in meters, x minutes after it started moving, where 0 ≤ x ≤ 10. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the xy-plane?",
    choices: [
      "The drone's height was 8 meters when it started moving.",
      "The drone's minimum height was 5 meters.",
      "The drone's height was 5 meters when it started moving.",
      "The drone's minimum height was 8 meters."
    ],
    answer: 3,
    explanation: "In vertex form f(x) = a(x − h)<sup>2</sup> + k, the vertex is (h, k). Here the vertex is (5, 8). Since a > 0, the parabola opens upward, so 8 is the minimum value of f, reached when x = 5. The height when it started moving is f(0) = 108, not a coordinate of the vertex."
  },
  {
    id: "adv-bb18",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "The function f(x) = 3(x − 8)<sup>2</sup> + 2 gives a drone's altitude above a field, f(x), in meters, x minutes after it started moving, where 0 ≤ x ≤ 16. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the xy-plane?",
    choices: [
      "The drone's height was 8 meters when it started moving.",
      "The drone's minimum height was 2 meters.",
      "The drone's minimum height was 8 meters.",
      "The drone's height was 2 meters when it started moving."
    ],
    answer: 1,
    explanation: "In vertex form f(x) = a(x − h)<sup>2</sup> + k, the vertex is (h, k). Here the vertex is (8, 2). Since a > 0, the parabola opens upward, so 2 is the minimum value of f, reached when x = 8. The height when it started moving is f(0) = 194, not a coordinate of the vertex."
  },
  {
    id: "adv-bb19",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "The function f(x) = 2(x − 4)<sup>2</sup> + 9 gives a drone's altitude above a field, f(x), in meters, x minutes after it started moving, where 0 ≤ x ≤ 8. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the xy-plane?",
    choices: [
      "The drone's minimum height was 4 meters.",
      "The drone's minimum height was 9 meters.",
      "The drone's height was 4 meters when it started moving.",
      "The drone's height was 9 meters when it started moving."
    ],
    answer: 1,
    explanation: "In vertex form f(x) = a(x − h)<sup>2</sup> + k, the vertex is (h, k). Here the vertex is (4, 9). Since a > 0, the parabola opens upward, so 9 is the minimum value of f, reached when x = 4. The height when it started moving is f(0) = 41, not a coordinate of the vertex."
  },
  {
    id: "adv-bb20",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 2,
    prompt: "The function f(x) = 2(x − 2)<sup>2</sup> + 10 gives a toy rocket's height above the ground, f(x), in inches, x seconds after it started moving, where 0 ≤ x ≤ 4. Which of the following is the best interpretation of the vertex of the graph of y = f(x) in the xy-plane?",
    choices: [
      "The toy rocket's minimum height was 10 inches.",
      "The toy rocket's minimum height was 2 inches.",
      "The toy rocket's height was 10 inches when it started moving.",
      "The toy rocket's height was 2 inches when it started moving."
    ],
    answer: 0,
    explanation: "In vertex form f(x) = a(x − h)<sup>2</sup> + k, the vertex is (h, k). Here the vertex is (2, 10). Since a > 0, the parabola opens upward, so 10 is the minimum value of f, reached when x = 2. The height when it started moving is f(0) = 18, not a coordinate of the vertex."
  },
  {
    id: "adv-bb21",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "−x<sup>2</sup> + bx − 441 = 0<br><br>In the given equation, b is a positive integer. The equation has no real solution. What is the greatest possible value of b?",
    choices: [
      "20",
      "41",
      "21",
      "42"
    ],
    answer: 1,
    explanation: "A quadratic equation has no real solution when its discriminant is negative. Here the discriminant is b<sup>2</sup> − 4(−1)(−441) = b<sup>2</sup> − 1764. So b<sup>2</sup> < 1764, which means b < 42 for positive b. The greatest integer less than 42 is 41. (b = 42 makes the discriminant 0, which gives exactly one real solution.)"
  },
  {
    id: "adv-bb22",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "−x<sup>2</sup> + bx − 361 = 0<br><br>In the given equation, b is a positive integer. The equation has no real solution. What is the greatest possible value of b?",
    choices: [
      "37",
      "19",
      "38",
      "18"
    ],
    answer: 0,
    explanation: "A quadratic equation has no real solution when its discriminant is negative. Here the discriminant is b<sup>2</sup> − 4(−1)(−361) = b<sup>2</sup> − 1444. So b<sup>2</sup> < 1444, which means b < 38 for positive b. The greatest integer less than 38 is 37. (b = 38 makes the discriminant 0, which gives exactly one real solution.)"
  },
  {
    id: "adv-bb23",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "−x<sup>2</sup> + bx − 256 = 0<br><br>In the given equation, b is a positive integer. The equation has no real solution. What is the greatest possible value of b?",
    choices: [
      "31",
      "16",
      "32",
      "15"
    ],
    answer: 0,
    explanation: "A quadratic equation has no real solution when its discriminant is negative. Here the discriminant is b<sup>2</sup> − 4(−1)(−256) = b<sup>2</sup> − 1024. So b<sup>2</sup> < 1024, which means b < 32 for positive b. The greatest integer less than 32 is 31. (b = 32 makes the discriminant 0, which gives exactly one real solution.)"
  },
  {
    id: "adv-bb24",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "−x<sup>2</sup> + bx − 324 = 0<br><br>In the given equation, b is a positive integer. The equation has no real solution. What is the greatest possible value of b?",
    choices: [
      "17",
      "35",
      "36",
      "18"
    ],
    answer: 1,
    explanation: "A quadratic equation has no real solution when its discriminant is negative. Here the discriminant is b<sup>2</sup> − 4(−1)(−324) = b<sup>2</sup> − 1296. So b<sup>2</sup> < 1296, which means b < 36 for positive b. The greatest integer less than 36 is 35. (b = 36 makes the discriminant 0, which gives exactly one real solution.)"
  },
  {
    id: "adv-bb25",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "−x<sup>2</sup> + bx − 169 = 0<br><br>In the given equation, b is a positive integer. The equation has no real solution. What is the greatest possible value of b?",
    choices: [
      "25",
      "13",
      "26",
      "12"
    ],
    answer: 0,
    explanation: "A quadratic equation has no real solution when its discriminant is negative. Here the discriminant is b<sup>2</sup> − 4(−1)(−169) = b<sup>2</sup> − 676. So b<sup>2</sup> < 676, which means b < 26 for positive b. The greatest integer less than 26 is 25. (b = 26 makes the discriminant 0, which gives exactly one real solution.)"
  },
  {
    id: "adv-bb26",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "−x<sup>2</sup> + bx − 400 = 0<br><br>In the given equation, b is a positive integer. The equation has no real solution. What is the greatest possible value of b?",
    choices: [
      "19",
      "40",
      "20",
      "39"
    ],
    answer: 3,
    explanation: "A quadratic equation has no real solution when its discriminant is negative. Here the discriminant is b<sup>2</sup> − 4(−1)(−400) = b<sup>2</sup> − 1600. So b<sup>2</sup> < 1600, which means b < 40 for positive b. The greatest integer less than 40 is 39. (b = 40 makes the discriminant 0, which gives exactly one real solution.)"
  },
  {
    id: "adv-bb27",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "−x<sup>2</sup> + bx − 49 = 0<br><br>In the given equation, b is a positive integer. The equation has no real solution. What is the greatest possible value of b?",
    choices: [
      "14",
      "7",
      "6",
      "13"
    ],
    answer: 3,
    explanation: "A quadratic equation has no real solution when its discriminant is negative. Here the discriminant is b<sup>2</sup> − 4(−1)(−49) = b<sup>2</sup> − 196. So b<sup>2</sup> < 196, which means b < 14 for positive b. The greatest integer less than 14 is 13. (b = 14 makes the discriminant 0, which gives exactly one real solution.)"
  },
  {
    id: "adv-bb28",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "−x<sup>2</sup> + bx − 36 = 0<br><br>In the given equation, b is a positive integer. The equation has no real solution. What is the greatest possible value of b?",
    choices: [
      "5",
      "11",
      "6",
      "12"
    ],
    answer: 1,
    explanation: "A quadratic equation has no real solution when its discriminant is negative. Here the discriminant is b<sup>2</sup> − 4(−1)(−36) = b<sup>2</sup> − 144. So b<sup>2</sup> < 144, which means b < 12 for positive b. The greatest integer less than 12 is 11. (b = 12 makes the discriminant 0, which gives exactly one real solution.)"
  },
  {
    id: "adv-bb29",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "−x<sup>2</sup> + bx − 784 = 0<br><br>In the given equation, b is a positive integer. The equation has no real solution. What is the greatest possible value of b?",
    choices: [
      "27",
      "55",
      "56",
      "28"
    ],
    answer: 1,
    explanation: "A quadratic equation has no real solution when its discriminant is negative. Here the discriminant is b<sup>2</sup> − 4(−1)(−784) = b<sup>2</sup> − 3136. So b<sup>2</sup> < 3136, which means b < 56 for positive b. The greatest integer less than 56 is 55. (b = 56 makes the discriminant 0, which gives exactly one real solution.)"
  },
  {
    id: "adv-bb30",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "−x<sup>2</sup> + bx − 100 = 0<br><br>In the given equation, b is a positive integer. The equation has no real solution. What is the greatest possible value of b?",
    choices: [
      "9",
      "20",
      "10",
      "19"
    ],
    answer: 3,
    explanation: "A quadratic equation has no real solution when its discriminant is negative. Here the discriminant is b<sup>2</sup> − 4(−1)(−100) = b<sup>2</sup> − 400. So b<sup>2</sup> < 400, which means b < 20 for positive b. The greatest integer less than 20 is 19. (b = 20 makes the discriminant 0, which gives exactly one real solution.)"
  },
  {
    id: "adv-bb31",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "f(x) = 2,000(0.72)<sup>x/12</sup><br><br>The function f gives the value, in dollars, of a certain piece of equipment after x months. If the value of the equipment decreases each year by p% of its value the preceding year, what is the value of p?",
    choices: [
      "336",
      "72",
      "28",
      "2.33"
    ],
    answer: 2,
    explanation: "Since x is in months, x/12 is the number of years, so the value is multiplied by 0.72 once per year. A yearly multiplier of 0.72 means the value keeps 72% of the preceding year's value, a decrease of 28% each year. So p = 28."
  },
  {
    id: "adv-bb32",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "f(x) = 5,400(0.64)<sup>x/12</sup><br><br>The function f gives the value, in dollars, of a laptop after x months. If the value of the laptop decreases each year by p% of its value the preceding year, what is the value of p?",
    choices: [
      "432",
      "3",
      "64",
      "36"
    ],
    answer: 3,
    explanation: "Since x is in months, x/12 is the number of years, so the value is multiplied by 0.64 once per year. A yearly multiplier of 0.64 means the value keeps 64% of the preceding year's value, a decrease of 36% each year. So p = 36."
  },
  {
    id: "adv-bb33",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "f(x) = 1,600(0.64)<sup>x/12</sup><br><br>The function f gives the value, in dollars, of a laptop after x months. If the value of the laptop decreases each year by p% of its value the preceding year, what is the value of p?",
    choices: [
      "36",
      "3",
      "432",
      "64"
    ],
    answer: 0,
    explanation: "Since x is in months, x/12 is the number of years, so the value is multiplied by 0.64 once per year. A yearly multiplier of 0.64 means the value keeps 64% of the preceding year's value, a decrease of 36% each year. So p = 36."
  },
  {
    id: "adv-bb34",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "f(x) = 1,700(1.12)<sup>x/12</sup><br><br>The function f gives the value, in dollars, of a rare coin after x months. If the value of the coin increases each year by p% of its value the preceding year, what is the value of p?",
    choices: [
      "1",
      "112",
      "12",
      "144"
    ],
    answer: 2,
    explanation: "Since x is in months, x/12 is the number of years, so the value is multiplied by 1.12 once per year. A yearly multiplier of 1.12 means the value grows to 112% of the preceding year's value, a increase of 12% each year. So p = 12."
  },
  {
    id: "adv-bb35",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "f(x) = 8,000(0.36)<sup>x/12</sup><br><br>The function f gives the value, in dollars, of a laptop after x months. If the value of the laptop decreases each year by p% of its value the preceding year, what is the value of p?",
    choices: [
      "64",
      "36",
      "5.33",
      "768"
    ],
    answer: 0,
    explanation: "Since x is in months, x/12 is the number of years, so the value is multiplied by 0.36 once per year. A yearly multiplier of 0.36 means the value keeps 36% of the preceding year's value, a decrease of 64% each year. So p = 64."
  },
  {
    id: "adv-bb36",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "f(x) = 7,600(0.36)<sup>x/12</sup><br><br>The function f gives the value, in dollars, of a used delivery van after x months. If the value of the van decreases each year by p% of its value the preceding year, what is the value of p?",
    choices: [
      "64",
      "5.33",
      "36",
      "768"
    ],
    answer: 0,
    explanation: "Since x is in months, x/12 is the number of years, so the value is multiplied by 0.36 once per year. A yearly multiplier of 0.36 means the value keeps 36% of the preceding year's value, a decrease of 64% each year. So p = 64."
  },
  {
    id: "adv-bb37",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "f(x) = 1,800(0.81)<sup>x/12</sup><br><br>The function f gives the value, in dollars, of a certain piece of equipment after x months. If the value of the equipment decreases each year by p% of its value the preceding year, what is the value of p?",
    choices: [
      "81",
      "1.58",
      "228",
      "19"
    ],
    answer: 3,
    explanation: "Since x is in months, x/12 is the number of years, so the value is multiplied by 0.81 once per year. A yearly multiplier of 0.81 means the value keeps 81% of the preceding year's value, a decrease of 19% each year. So p = 19."
  },
  {
    id: "adv-bb38",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "f(x) = 2,900(0.72)<sup>x/12</sup><br><br>The function f gives the value, in dollars, of a laptop after x months. If the value of the laptop decreases each year by p% of its value the preceding year, what is the value of p?",
    choices: [
      "72",
      "336",
      "28",
      "2.33"
    ],
    answer: 2,
    explanation: "Since x is in months, x/12 is the number of years, so the value is multiplied by 0.72 once per year. A yearly multiplier of 0.72 means the value keeps 72% of the preceding year's value, a decrease of 28% each year. So p = 28."
  },
  {
    id: "adv-bb39",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "f(x) = 7,000(0.72)<sup>x/12</sup><br><br>The function f gives the value, in dollars, of a certain piece of equipment after x months. If the value of the equipment decreases each year by p% of its value the preceding year, what is the value of p?",
    choices: [
      "2.33",
      "336",
      "72",
      "28"
    ],
    answer: 3,
    explanation: "Since x is in months, x/12 is the number of years, so the value is multiplied by 0.72 once per year. A yearly multiplier of 0.72 means the value keeps 72% of the preceding year's value, a decrease of 28% each year. So p = 28."
  },
  {
    id: "adv-bb40",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "f(x) = 6,200(1.08)<sup>x/12</sup><br><br>The function f gives the value, in dollars, of a parcel of land after x months. If the value of the land increases each year by p% of its value the preceding year, what is the value of p?",
    choices: [
      "0.67",
      "108",
      "96",
      "8"
    ],
    answer: 3,
    explanation: "Since x is in months, x/12 is the number of years, so the value is multiplied by 1.08 once per year. A yearly multiplier of 1.08 means the value grows to 108% of the preceding year's value, a increase of 8% each year. So p = 8."
  },
  {
    id: "pd-bb1",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt: "385 is p% greater than 110. What is the value of p?",
    choices: [
      "275",
      "250",
      "350",
      "71.4"
    ],
    answer: 1,
    explanation: "The amount by which 385 exceeds 110 is 275. As a percent of the original value, 275/110 = 2.5, or 250%. (385 is 350% <i>of</i> 110, which is 250% greater.)"
  },
  {
    id: "pd-bb2",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt: "770 is p% greater than 110. What is the value of p?",
    choices: [
      "600",
      "700",
      "660",
      "85.7"
    ],
    answer: 0,
    explanation: "The amount by which 770 exceeds 110 is 660. As a percent of the original value, 660/110 = 6, or 600%. (770 is 700% <i>of</i> 110, which is 600% greater.)"
  },
  {
    id: "pd-bb3",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt: "75 is p% greater than 60. What is the value of p?",
    choices: [
      "15",
      "125",
      "20",
      "25"
    ],
    answer: 3,
    explanation: "The amount by which 75 exceeds 60 is 15. As a percent of the original value, 15/60 = 0.25, or 25%. (75 is 125% <i>of</i> 60, which is 25% greater.)"
  },
  {
    id: "pd-bb4",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt: "70 is p% greater than 20. What is the value of p?",
    choices: [
      "71.4",
      "350",
      "250",
      "50"
    ],
    answer: 2,
    explanation: "The amount by which 70 exceeds 20 is 50. As a percent of the original value, 50/20 = 2.5, or 250%. (70 is 350% <i>of</i> 20, which is 250% greater.)"
  },
  {
    id: "pd-bb5",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt: "75 is p% greater than 30. What is the value of p?",
    choices: [
      "45",
      "250",
      "60",
      "150"
    ],
    answer: 3,
    explanation: "The amount by which 75 exceeds 30 is 45. As a percent of the original value, 45/30 = 1.5, or 150%. (75 is 250% <i>of</i> 30, which is 150% greater.)"
  },
  {
    id: "pd-bb6",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt: "200 is p% greater than 50. What is the value of p?",
    choices: [
      "75",
      "300",
      "400",
      "150"
    ],
    answer: 1,
    explanation: "The amount by which 200 exceeds 50 is 150. As a percent of the original value, 150/50 = 3, or 300%. (200 is 400% <i>of</i> 50, which is 300% greater.)"
  },
  {
    id: "pd-bb7",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt: "160 is p% greater than 40. What is the value of p?",
    choices: [
      "120",
      "75",
      "300",
      "400"
    ],
    answer: 2,
    explanation: "The amount by which 160 exceeds 40 is 120. As a percent of the original value, 120/40 = 3, or 300%. (160 is 400% <i>of</i> 40, which is 300% greater.)"
  },
  {
    id: "pd-bb8",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt: "56 is p% greater than 40. What is the value of p?",
    choices: [
      "40",
      "28.6",
      "140",
      "16"
    ],
    answer: 0,
    explanation: "The amount by which 56 exceeds 40 is 16. As a percent of the original value, 16/40 = 0.4, or 40%. (56 is 140% <i>of</i> 40, which is 40% greater.)"
  },
  {
    id: "pd-bb9",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt: "240 is p% greater than 60. What is the value of p?",
    choices: [
      "180",
      "75",
      "300",
      "400"
    ],
    answer: 2,
    explanation: "The amount by which 240 exceeds 60 is 180. As a percent of the original value, 180/60 = 3, or 300%. (240 is 400% <i>of</i> 60, which is 300% greater.)"
  },
  {
    id: "pd-bb10",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt: "210 is p% greater than 70. What is the value of p?",
    choices: [
      "200",
      "140",
      "66.7",
      "300"
    ],
    answer: 0,
    explanation: "The amount by which 210 exceeds 70 is 140. As a percent of the original value, 140/70 = 2, or 200%. (210 is 300% <i>of</i> 70, which is 200% greater.)"
  },
  {
    id: "pd-bb11",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 2,
    prompt: "To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is 0.74, with an associated margin of error of 0.05. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?",
    choices: [
      "It is plausible that the proportion is between 0.69 and 0.79.",
      "The proportion is exactly 0.74.",
      "It is plausible that the proportion is less than 0.69.",
      "It is plausible that the proportion is greater than 0.79."
    ],
    answer: 0,
    explanation: "The margin of error gives a range of plausible values around the estimate: 0.74 − 0.05 = 0.69 to 0.74 + 0.05 = 0.79. Values outside that range are not supported by the data, and a sample can't show that the proportion is exactly 0.74."
  },
  {
    id: "pd-bb12",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 2,
    prompt: "To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is 0.26, with an associated margin of error of 0.02. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?",
    choices: [
      "It is plausible that the proportion is less than 0.24.",
      "It is plausible that the proportion is between 0.24 and 0.28.",
      "It is plausible that the proportion is greater than 0.28.",
      "The proportion is exactly 0.26."
    ],
    answer: 1,
    explanation: "The margin of error gives a range of plausible values around the estimate: 0.26 − 0.02 = 0.24 to 0.26 + 0.02 = 0.28. Values outside that range are not supported by the data, and a sample can't show that the proportion is exactly 0.26."
  },
  {
    id: "pd-bb13",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 2,
    prompt: "To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is 0.20, with an associated margin of error of 0.04. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?",
    choices: [
      "It is plausible that the proportion is between 0.16 and 0.24.",
      "It is plausible that the proportion is less than 0.16.",
      "The proportion is exactly 0.20.",
      "It is plausible that the proportion is greater than 0.24."
    ],
    answer: 0,
    explanation: "The margin of error gives a range of plausible values around the estimate: 0.20 − 0.04 = 0.16 to 0.20 + 0.04 = 0.24. Values outside that range are not supported by the data, and a sample can't show that the proportion is exactly 0.20."
  },
  {
    id: "pd-bb14",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 2,
    prompt: "To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is 0.34, with an associated margin of error of 0.04. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?",
    choices: [
      "It is plausible that the proportion is greater than 0.38.",
      "It is plausible that the proportion is less than 0.30.",
      "It is plausible that the proportion is between 0.30 and 0.38.",
      "The proportion is exactly 0.34."
    ],
    answer: 2,
    explanation: "The margin of error gives a range of plausible values around the estimate: 0.34 − 0.04 = 0.30 to 0.34 + 0.04 = 0.38. Values outside that range are not supported by the data, and a sample can't show that the proportion is exactly 0.34."
  },
  {
    id: "pd-bb15",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 2,
    prompt: "To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is 0.51, with an associated margin of error of 0.03. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?",
    choices: [
      "The proportion is exactly 0.51.",
      "It is plausible that the proportion is between 0.48 and 0.54.",
      "It is plausible that the proportion is less than 0.48.",
      "It is plausible that the proportion is greater than 0.54."
    ],
    answer: 1,
    explanation: "The margin of error gives a range of plausible values around the estimate: 0.51 − 0.03 = 0.48 to 0.51 + 0.03 = 0.54. Values outside that range are not supported by the data, and a sample can't show that the proportion is exactly 0.51."
  },
  {
    id: "pd-bb16",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 2,
    prompt: "To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is 0.23, with an associated margin of error of 0.02. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?",
    choices: [
      "It is plausible that the proportion is less than 0.21.",
      "It is plausible that the proportion is between 0.21 and 0.25.",
      "It is plausible that the proportion is greater than 0.25.",
      "The proportion is exactly 0.23."
    ],
    answer: 1,
    explanation: "The margin of error gives a range of plausible values around the estimate: 0.23 − 0.02 = 0.21 to 0.23 + 0.02 = 0.25. Values outside that range are not supported by the data, and a sample can't show that the proportion is exactly 0.23."
  },
  {
    id: "pd-bb17",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 2,
    prompt: "To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is 0.40, with an associated margin of error of 0.02. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?",
    choices: [
      "It is plausible that the proportion is between 0.38 and 0.42.",
      "The proportion is exactly 0.40.",
      "It is plausible that the proportion is greater than 0.42.",
      "It is plausible that the proportion is less than 0.38."
    ],
    answer: 0,
    explanation: "The margin of error gives a range of plausible values around the estimate: 0.40 − 0.02 = 0.38 to 0.40 + 0.02 = 0.42. Values outside that range are not supported by the data, and a sample can't show that the proportion is exactly 0.40."
  },
  {
    id: "pd-bb18",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 2,
    prompt: "To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is 0.37, with an associated margin of error of 0.05. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?",
    choices: [
      "It is plausible that the proportion is less than 0.32.",
      "It is plausible that the proportion is greater than 0.42.",
      "It is plausible that the proportion is between 0.32 and 0.42.",
      "The proportion is exactly 0.37."
    ],
    answer: 2,
    explanation: "The margin of error gives a range of plausible values around the estimate: 0.37 − 0.05 = 0.32 to 0.37 + 0.05 = 0.42. Values outside that range are not supported by the data, and a sample can't show that the proportion is exactly 0.37."
  },
  {
    id: "pd-bb19",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 2,
    prompt: "To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is 0.58, with an associated margin of error of 0.06. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?",
    choices: [
      "The proportion is exactly 0.58.",
      "It is plausible that the proportion is less than 0.52.",
      "It is plausible that the proportion is between 0.52 and 0.64.",
      "It is plausible that the proportion is greater than 0.64."
    ],
    answer: 2,
    explanation: "The margin of error gives a range of plausible values around the estimate: 0.58 − 0.06 = 0.52 to 0.58 + 0.06 = 0.64. Values outside that range are not supported by the data, and a sample can't show that the proportion is exactly 0.58."
  },
  {
    id: "pd-bb20",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 2,
    prompt: "To estimate the proportion of a population that has a certain characteristic, a random sample was selected from the population. Based on the sample, it is estimated that the proportion of the population that has the characteristic is 0.32, with an associated margin of error of 0.04. Based on this estimate and margin of error, which of the following is the most appropriate conclusion about the proportion of the population that has the characteristic?",
    choices: [
      "It is plausible that the proportion is less than 0.28.",
      "It is plausible that the proportion is between 0.28 and 0.36.",
      "It is plausible that the proportion is greater than 0.36.",
      "The proportion is exactly 0.32."
    ],
    answer: 1,
    explanation: "The margin of error gives a range of plausible values around the estimate: 0.32 − 0.04 = 0.28 to 0.32 + 0.04 = 0.36. Values outside that range are not supported by the data, and a sample can't show that the proportion is exactly 0.32."
  },
  {
    id: "pd-bb21",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 13 values 10, 11, 12, 13, 14, 24, 25, 28, 31, 31, 32, 34, 35. Data set B is created by multiplying each value in data set A by 3. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is greater than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is greater than the range of data set A."
    ],
    answer: 1,
    explanation: "Multiplying every value by 3 multiplies the median by 3; since the values are positive, the median increases. The range is also multiplied by 3, so it increases too."
  },
  {
    id: "pd-bb22",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 11 values 10, 15, 15, 19, 26, 29, 29, 31, 33, 38, 40. Data set B is created by multiplying each value in data set A by 0.5. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is greater than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is greater than the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is less than the range of data set A."
    ],
    answer: 2,
    explanation: "Multiplying every value by 0.5 halves the median; since the values are positive, the median decreases. The range is also halved, so it decreases too."
  },
  {
    id: "pd-bb23",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 9 values 13, 13, 14, 18, 25, 25, 29, 31, 33. Data set B is created by multiplying each value in data set A by 0.5. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is equal to the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A."
    ],
    answer: 1,
    explanation: "Multiplying every value by 0.5 halves the median; since the values are positive, the median decreases. The range is also halved, so it decreases too."
  },
  {
    id: "pd-bb24",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 13 values 10, 12, 12, 15, 19, 21, 21, 25, 25, 27, 28, 36, 39. Data set B is created by subtracting 47 from each value in data set A. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is less than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is greater than the range of data set A."
    ],
    answer: 0,
    explanation: "Subtracting 47 from every value moves every value, including the middle one, down by 47, so the median decreases. The greatest and least values both decrease by 47, so the range stays the same."
  },
  {
    id: "pd-bb25",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 9 values 12, 14, 23, 23, 24, 30, 32, 35, 37. Data set B is created by adding 31 to each value in data set A. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is less than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is greater than the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is less than the range of data set A."
    ],
    answer: 1,
    explanation: "Adding 31 to every value moves every value, including the middle one, up by 31, so the median increases. The greatest and least values both increase by 31, so their difference, the range, stays the same."
  },
  {
    id: "pd-bb26",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 11 values 12, 20, 21, 21, 22, 24, 24, 25, 28, 31, 40. Data set B is created by subtracting 6 from each value in data set A. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is less than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is equal to the range of data set A."
    ],
    answer: 0,
    explanation: "Subtracting 6 from every value moves every value, including the middle one, down by 6, so the median decreases. The greatest and least values both decrease by 6, so the range stays the same."
  },
  {
    id: "pd-bb27",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 15 values 12, 13, 13, 14, 14, 16, 16, 20, 20, 22, 23, 33, 36, 36, 40. Data set B is created by multiplying each value in data set A by 0.5. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is equal to the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is greater than the range of data set A."
    ],
    answer: 1,
    explanation: "Multiplying every value by 0.5 halves the median; since the values are positive, the median decreases. The range is also halved, so it decreases too."
  },
  {
    id: "pd-bb28",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 15 values 11, 12, 12, 15, 16, 18, 21, 21, 22, 23, 25, 27, 31, 32, 33. Data set B is created by adding 51 to each value in data set A. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is equal to the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is greater than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A."
    ],
    answer: 3,
    explanation: "Adding 51 to every value moves every value, including the middle one, up by 51, so the median increases. The greatest and least values both increase by 51, so their difference, the range, stays the same."
  },
  {
    id: "pd-bb29",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 11 values 10, 11, 16, 17, 17, 26, 32, 33, 33, 38, 40. Data set B is created by adding 33 to each value in data set A. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is less than the median of data set A, and the range of data set B is greater than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is equal to the range of data set A."
    ],
    answer: 1,
    explanation: "Adding 33 to every value moves every value, including the middle one, up by 33, so the median increases. The greatest and least values both increase by 33, so their difference, the range, stays the same."
  },
  {
    id: "pd-bb30",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 13 values 11, 12, 14, 15, 17, 19, 23, 26, 28, 30, 32, 32, 39. Data set B is created by multiplying each value in data set A by 0.5. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is less than the median of data set A, and the range of data set B is greater than the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A."
    ],
    answer: 2,
    explanation: "Multiplying every value by 0.5 halves the median; since the values are positive, the median decreases. The range is also halved, so it decreases too."
  },
  {
    id: "pd-bb31",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 9 values 14, 20, 22, 23, 26, 29, 32, 36, 36. Data set B is created by multiplying each value in data set A by 5. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is equal to the median of data set A, and the range of data set B is greater than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is greater than the range of data set A."
    ],
    answer: 3,
    explanation: "Multiplying every value by 5 multiplies the median by 5; since the values are positive, the median increases. The range is also multiplied by 5, so it increases too."
  },
  {
    id: "pd-bb32",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 11 values 10, 13, 16, 20, 23, 26, 26, 32, 32, 36, 37. Data set B is created by subtracting 47 from each value in data set A. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is less than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is greater than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is equal to the range of data set A."
    ],
    answer: 0,
    explanation: "Subtracting 47 from every value moves every value, including the middle one, down by 47, so the median decreases. The greatest and least values both decrease by 47, so the range stays the same."
  },
  {
    id: "pd-bb33",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 11 values 10, 20, 21, 27, 28, 28, 33, 35, 35, 36, 37. Data set B is created by multiplying each value in data set A by 5. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is equal to the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is greater than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A."
    ],
    answer: 1,
    explanation: "Multiplying every value by 5 multiplies the median by 5; since the values are positive, the median increases. The range is also multiplied by 5, so it increases too."
  },
  {
    id: "pd-bb34",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 13 values 11, 12, 21, 22, 23, 25, 27, 28, 28, 31, 31, 33, 40. Data set B is created by multiplying each value in data set A by 0.5. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is less than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is less than the range of data set A."
    ],
    answer: 3,
    explanation: "Multiplying every value by 0.5 halves the median; since the values are positive, the median decreases. The range is also halved, so it decreases too."
  },
  {
    id: "pd-bb35",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 15 values 20, 21, 24, 25, 26, 27, 29, 29, 31, 31, 32, 34, 34, 37, 38. Data set B is created by multiplying each value in data set A by 2. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is less than the median of data set A, and the range of data set B is greater than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is greater than the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A."
    ],
    answer: 1,
    explanation: "Multiplying every value by 2 multiplies the median by 2; since the values are positive, the median increases. The range is also multiplied by 2, so it increases too."
  },
  {
    id: "pd-bb36",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 15 values 11, 13, 15, 16, 17, 18, 20, 21, 21, 28, 28, 29, 30, 32, 34. Data set B is created by multiplying each value in data set A by 0.5. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is less than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is less than the range of data set A."
    ],
    answer: 0,
    explanation: "Multiplying every value by 0.5 halves the median; since the values are positive, the median decreases. The range is also halved, so it decreases too."
  },
  {
    id: "pd-bb37",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 11 values 11, 12, 13, 15, 16, 18, 19, 24, 26, 29, 36. Data set B is created by multiplying each value in data set A by 0.5. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is less than the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is greater than the range of data set A."
    ],
    answer: 0,
    explanation: "Multiplying every value by 0.5 halves the median; since the values are positive, the median decreases. The range is also halved, so it decreases too."
  },
  {
    id: "pd-bb38",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 11 values 13, 14, 16, 17, 18, 20, 21, 24, 26, 38, 40. Data set B is created by adding 15 to each value in data set A. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is equal to the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is greater than the range of data set A."
    ],
    answer: 2,
    explanation: "Adding 15 to every value moves every value, including the middle one, up by 15, so the median increases. The greatest and least values both increase by 15, so their difference, the range, stays the same."
  },
  {
    id: "pd-bb39",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 11 values 10, 10, 16, 19, 21, 22, 27, 32, 33, 33, 34. Data set B is created by subtracting 38 from each value in data set A. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is less than the range of data set A."
    ],
    answer: 1,
    explanation: "Subtracting 38 from every value moves every value, including the middle one, down by 38, so the median decreases. The greatest and least values both decrease by 38, so the range stays the same."
  },
  {
    id: "pd-bb40",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Data set A consists of the 15 values 10, 11, 18, 21, 24, 25, 28, 30, 31, 34, 34, 35, 35, 39, 40. Data set B is created by multiplying each value in data set A by 3. Which of the following correctly compares the medians and the ranges of data sets A and B?",
    choices: [
      "The median of data set B is greater than the median of data set A, and the range of data set B is greater than the range of data set A.",
      "The median of data set B is greater than the median of data set A, and the range of data set B is equal to the range of data set A.",
      "The median of data set B is equal to the median of data set A, and the range of data set B is less than the range of data set A.",
      "The median of data set B is less than the median of data set A, and the range of data set B is greater than the range of data set A."
    ],
    answer: 0,
    explanation: "Multiplying every value by 3 multiplies the median by 3; since the values are positive, the median increases. The range is also multiplied by 3, so it increases too."
  },
  {
    id: "geo-bb1",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 2,
    prompt: "The equation (x − 5)<sup>2</sup> + (y + 6)<sup>2</sup> = 81 represents circle A. Circle B is obtained by shifting circle A down 1 unit in the xy-plane. Which of the following equations represents circle B?",
    choices: [
      "(x − 6)<sup>2</sup> + (y + 6)<sup>2</sup> = 81",
      "(x − 5)<sup>2</sup> + (y + 5)<sup>2</sup> = 81",
      "(x − 5)<sup>2</sup> + (y + 7)<sup>2</sup> = 81",
      "(x − 4)<sup>2</sup> + (y + 6)<sup>2</sup> = 81"
    ],
    answer: 2,
    explanation: "Circle A has center (5, −6) and radius 9. Shifting it down 1 unit moves the center to (5, −7) and leaves the radius unchanged, so circle B is (x − 5)<sup>2</sup> + (y + 7)<sup>2</sup> = 81. Remember that (x − h) and (y − k) use the opposite sign of the center's coordinates."
  },
  {
    id: "geo-bb2",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 2,
    prompt: "The equation (x + 1)<sup>2</sup> + (y − 4)<sup>2</sup> = 16 represents circle A. Circle B is obtained by shifting circle A down 1 unit in the xy-plane. Which of the following equations represents circle B?",
    choices: [
      "(x + 1)<sup>2</sup> + (y − 5)<sup>2</sup> = 16",
      "(x + 2)<sup>2</sup> + (y − 4)<sup>2</sup> = 16",
      "(x + 1)<sup>2</sup> + (y − 3)<sup>2</sup> = 16",
      "x<sup>2</sup> + (y − 4)<sup>2</sup> = 16"
    ],
    answer: 2,
    explanation: "Circle A has center (−1, 4) and radius 4. Shifting it down 1 unit moves the center to (−1, 3) and leaves the radius unchanged, so circle B is (x + 1)<sup>2</sup> + (y − 3)<sup>2</sup> = 16. Remember that (x − h) and (y − k) use the opposite sign of the center's coordinates."
  },
  {
    id: "geo-bb3",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 2,
    prompt: "The equation (x − 1)<sup>2</sup> + (y + 2)<sup>2</sup> = 64 represents circle A. Circle B is obtained by shifting circle A left 5 units in the xy-plane. Which of the following equations represents circle B?",
    choices: [
      "(x − 1)<sup>2</sup> + (y − 3)<sup>2</sup> = 64",
      "(x + 4)<sup>2</sup> + (y + 2)<sup>2</sup> = 64",
      "(x − 6)<sup>2</sup> + (y + 2)<sup>2</sup> = 64",
      "(x − 1)<sup>2</sup> + (y + 7)<sup>2</sup> = 64"
    ],
    answer: 1,
    explanation: "Circle A has center (1, −2) and radius 8. Shifting it left 5 units moves the center to (−4, −2) and leaves the radius unchanged, so circle B is (x + 4)<sup>2</sup> + (y + 2)<sup>2</sup> = 64. Remember that (x − h) and (y − k) use the opposite sign of the center's coordinates."
  },
  {
    id: "geo-bb4",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 2,
    prompt: "The equation (x − 2)<sup>2</sup> + (y + 3)<sup>2</sup> = 64 represents circle A. Circle B is obtained by shifting circle A left 3 units in the xy-plane. Which of the following equations represents circle B?",
    choices: [
      "(x + 1)<sup>2</sup> + (y + 3)<sup>2</sup> = 64",
      "(x − 5)<sup>2</sup> + (y + 3)<sup>2</sup> = 64",
      "(x − 2)<sup>2</sup> + y<sup>2</sup> = 64",
      "(x − 2)<sup>2</sup> + (y + 6)<sup>2</sup> = 64"
    ],
    answer: 0,
    explanation: "Circle A has center (2, −3) and radius 8. Shifting it left 3 units moves the center to (−1, −3) and leaves the radius unchanged, so circle B is (x + 1)<sup>2</sup> + (y + 3)<sup>2</sup> = 64. Remember that (x − h) and (y − k) use the opposite sign of the center's coordinates."
  },
  {
    id: "geo-bb5",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 2,
    prompt: "The equation x<sup>2</sup> + (y − 3)<sup>2</sup> = 36 represents circle A. Circle B is obtained by shifting circle A up 4 units in the xy-plane. Which of the following equations represents circle B?",
    choices: [
      "x<sup>2</sup> + (y − 7)<sup>2</sup> = 36",
      "x<sup>2</sup> + (y + 1)<sup>2</sup> = 36",
      "(x + 4)<sup>2</sup> + (y − 3)<sup>2</sup> = 36",
      "(x − 4)<sup>2</sup> + (y − 3)<sup>2</sup> = 36"
    ],
    answer: 0,
    explanation: "Circle A has center (0, 3) and radius 6. Shifting it up 4 units moves the center to (0, 7) and leaves the radius unchanged, so circle B is x<sup>2</sup> + (y − 7)<sup>2</sup> = 36. Remember that (x − h) and (y − k) use the opposite sign of the center's coordinates."
  },
  {
    id: "geo-bb6",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 2,
    prompt: "The equation (x − 1)<sup>2</sup> + (y − 5)<sup>2</sup> = 81 represents circle A. Circle B is obtained by shifting circle A down 5 units in the xy-plane. Which of the following equations represents circle B?",
    choices: [
      "(x − 1)<sup>2</sup> + (y − 10)<sup>2</sup> = 81",
      "(x − 1)<sup>2</sup> + y<sup>2</sup> = 81",
      "(x + 4)<sup>2</sup> + (y − 5)<sup>2</sup> = 81",
      "(x − 6)<sup>2</sup> + (y − 5)<sup>2</sup> = 81"
    ],
    answer: 1,
    explanation: "Circle A has center (1, 5) and radius 9. Shifting it down 5 units moves the center to (1, 0) and leaves the radius unchanged, so circle B is (x − 1)<sup>2</sup> + y<sup>2</sup> = 81. Remember that (x − h) and (y − k) use the opposite sign of the center's coordinates."
  },
  {
    id: "geo-bb7",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 2,
    prompt: "The equation (x + 6)<sup>2</sup> + y<sup>2</sup> = 81 represents circle A. Circle B is obtained by shifting circle A left 5 units in the xy-plane. Which of the following equations represents circle B?",
    choices: [
      "(x + 6)<sup>2</sup> + (y − 5)<sup>2</sup> = 81",
      "(x + 11)<sup>2</sup> + y<sup>2</sup> = 81",
      "(x + 1)<sup>2</sup> + y<sup>2</sup> = 81",
      "(x + 6)<sup>2</sup> + (y + 5)<sup>2</sup> = 81"
    ],
    answer: 1,
    explanation: "Circle A has center (−6, 0) and radius 9. Shifting it left 5 units moves the center to (−11, 0) and leaves the radius unchanged, so circle B is (x + 11)<sup>2</sup> + y<sup>2</sup> = 81. Remember that (x − h) and (y − k) use the opposite sign of the center's coordinates."
  },
  {
    id: "geo-bb8",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 2,
    prompt: "The equation (x − 3)<sup>2</sup> + (y + 4)<sup>2</sup> = 25 represents circle A. Circle B is obtained by shifting circle A down 4 units in the xy-plane. Which of the following equations represents circle B?",
    choices: [
      "(x + 1)<sup>2</sup> + (y + 4)<sup>2</sup> = 25",
      "(x − 3)<sup>2</sup> + y<sup>2</sup> = 25",
      "(x − 3)<sup>2</sup> + (y + 8)<sup>2</sup> = 25",
      "(x − 7)<sup>2</sup> + (y + 4)<sup>2</sup> = 25"
    ],
    answer: 2,
    explanation: "Circle A has center (3, −4) and radius 5. Shifting it down 4 units moves the center to (3, −8) and leaves the radius unchanged, so circle B is (x − 3)<sup>2</sup> + (y + 8)<sup>2</sup> = 25. Remember that (x − h) and (y − k) use the opposite sign of the center's coordinates."
  },
  {
    id: "geo-bb9",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 2,
    prompt: "The equation (x − 6)<sup>2</sup> + (y − 3)<sup>2</sup> = 16 represents circle A. Circle B is obtained by shifting circle A right 3 units in the xy-plane. Which of the following equations represents circle B?",
    choices: [
      "(x − 9)<sup>2</sup> + (y − 3)<sup>2</sup> = 16",
      "(x − 6)<sup>2</sup> + (y − 6)<sup>2</sup> = 16",
      "(x − 6)<sup>2</sup> + y<sup>2</sup> = 16",
      "(x − 3)<sup>2</sup> + (y − 3)<sup>2</sup> = 16"
    ],
    answer: 0,
    explanation: "Circle A has center (6, 3) and radius 4. Shifting it right 3 units moves the center to (9, 3) and leaves the radius unchanged, so circle B is (x − 9)<sup>2</sup> + (y − 3)<sup>2</sup> = 16. Remember that (x − h) and (y − k) use the opposite sign of the center's coordinates."
  },
  {
    id: "geo-bb10",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 2,
    prompt: "The equation (x − 1)<sup>2</sup> + (y − 6)<sup>2</sup> = 36 represents circle A. Circle B is obtained by shifting circle A right 5 units in the xy-plane. Which of the following equations represents circle B?",
    choices: [
      "(x − 1)<sup>2</sup> + (y − 1)<sup>2</sup> = 36",
      "(x + 4)<sup>2</sup> + (y − 6)<sup>2</sup> = 36",
      "(x − 1)<sup>2</sup> + (y − 11)<sup>2</sup> = 36",
      "(x − 6)<sup>2</sup> + (y − 6)<sup>2</sup> = 36"
    ],
    answer: 3,
    explanation: "Circle A has center (1, 6) and radius 6. Shifting it right 5 units moves the center to (6, 6) and leaves the radius unchanged, so circle B is (x − 6)<sup>2</sup> + (y − 6)<sup>2</sup> = 36. Remember that (x − h) and (y − k) use the opposite sign of the center's coordinates."
  },
  {
    id: "geo-bb11",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 2,
    prompt: "Lines m and n are parallel and are intersected by transversal t. Two same-side interior angles formed by these lines have measures (8k + 43)° and (8k + 73)°. What is the measure, in degrees, of the angle with measure (8k + 43)°?",
    choices: [
      "75",
      "32",
      "105",
      "4"
    ],
    answer: 0,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (8k + 43) + (8k + 73) = 180. That gives 16k + 116 = 180, so k = 4. Then 8(4) + 43 = 75. (105 is the other angle; k = 4 is not an angle measure.)"
  },
  {
    id: "geo-bb12",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 2,
    prompt: "Lines m and n are parallel and are intersected by transversal t. Two same-side interior angles formed by these lines have measures (4k + 36)° and (8k + 72)°. What is the measure, in degrees, of the angle with measure (4k + 36)°?",
    choices: [
      "60",
      "6",
      "120",
      "36"
    ],
    answer: 0,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (4k + 36) + (8k + 72) = 180. That gives 12k + 108 = 180, so k = 6. Then 4(6) + 36 = 60. (120 is the other angle; k = 6 is not an angle measure.)"
  },
  {
    id: "geo-bb13",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 2,
    prompt: "Lines m and n are parallel and are intersected by transversal t. Two same-side interior angles formed by these lines have measures (4k + 114)° and (4k + 34)°. What is the measure, in degrees, of the angle with measure (4k + 114)°?",
    choices: [
      "4",
      "130",
      "16",
      "50"
    ],
    answer: 1,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (4k + 114) + (4k + 34) = 180. That gives 8k + 148 = 180, so k = 4. Then 4(4) + 114 = 130. (50 is the other angle; k = 4 is not an angle measure.)"
  },
  {
    id: "geo-bb14",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 2,
    prompt: "Lines m and n are parallel and are intersected by transversal t. Two same-side interior angles formed by these lines have measures (6k + 12)° and (4k + 48)°. What is the measure, in degrees, of the angle with measure (6k + 12)°?",
    choices: [
      "96",
      "84",
      "60",
      "12"
    ],
    answer: 1,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (6k + 12) + (4k + 48) = 180. That gives 10k + 60 = 180, so k = 12. Then 6(12) + 12 = 84. (96 is the other angle; k = 12 is not an angle measure.)"
  },
  {
    id: "geo-bb15",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 2,
    prompt: "Lines m and n are parallel and are intersected by transversal t. Two same-side interior angles formed by these lines have measures (3k + 66)° and (6k + 24)°. What is the measure, in degrees, of the angle with measure (3k + 66)°?",
    choices: [
      "10",
      "96",
      "45",
      "84"
    ],
    answer: 1,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (3k + 66) + (6k + 24) = 180. That gives 9k + 90 = 180, so k = 10. Then 3(10) + 66 = 96. (84 is the other angle; k = 10 is not an angle measure.)"
  },
  {
    id: "geo-bb16",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 2,
    prompt: "Lines m and n are parallel and are intersected by transversal t. Two same-side interior angles formed by these lines have measures (3k + 50)° and (3k + 76)°. What is the measure, in degrees, of the angle with measure (3k + 50)°?",
    choices: [
      "103",
      "9",
      "77",
      "27"
    ],
    answer: 2,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (3k + 50) + (3k + 76) = 180. That gives 6k + 126 = 180, so k = 9. Then 3(9) + 50 = 77. (103 is the other angle; k = 9 is not an angle measure.)"
  },
  {
    id: "geo-bb17",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 2,
    prompt: "Lines m and n are parallel and are intersected by transversal t. Two same-side interior angles formed by these lines have measures (9k + 44)° and (4k + 6)°. What is the measure, in degrees, of the angle with measure (9k + 44)°?",
    choices: [
      "134",
      "46",
      "10",
      "65"
    ],
    answer: 0,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (9k + 44) + (4k + 6) = 180. That gives 13k + 50 = 180, so k = 10. Then 9(10) + 44 = 134. (46 is the other angle; k = 10 is not an angle measure.)"
  },
  {
    id: "geo-bb18",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 2,
    prompt: "Lines m and n are parallel and are intersected by transversal t. Two same-side interior angles formed by these lines have measures (9k − 48)° and (2k + 107)°. What is the measure, in degrees, of the angle with measure (9k − 48)°?",
    choices: [
      "129",
      "11",
      "51",
      "61"
    ],
    answer: 2,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (9k − 48) + (2k + 107) = 180. That gives 11k + 59 = 180, so k = 11. Then 9(11) − 48 = 51. (129 is the other angle; k = 11 is not an angle measure.)"
  },
  {
    id: "geo-bb19",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 2,
    prompt: "Lines m and n are parallel and are intersected by transversal t. Two same-side interior angles formed by these lines have measures (2k + 80)° and (6k + 28)°. What is the measure, in degrees, of the angle with measure (2k + 80)°?",
    choices: [
      "9",
      "82",
      "36",
      "98"
    ],
    answer: 3,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (2k + 80) + (6k + 28) = 180. That gives 8k + 108 = 180, so k = 9. Then 2(9) + 80 = 98. (82 is the other angle; k = 9 is not an angle measure.)"
  },
  {
    id: "geo-bb20",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 2,
    prompt: "Lines m and n are parallel and are intersected by transversal t. Two same-side interior angles formed by these lines have measures (5k + 97)° and (5k + 3)°. What is the measure, in degrees, of the angle with measure (5k + 97)°?",
    choices: [
      "8",
      "137",
      "43",
      "40"
    ],
    answer: 1,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (5k + 97) + (5k + 3) = 180. That gives 10k + 100 = 180, so k = 8. Then 5(8) + 97 = 137. (43 is the other angle; k = 8 is not an angle measure.)"
  },
  {
    id: "geo-bb21",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two identical rectangular prisms each have a height of 51 centimeters (cm). The base of each prism is a square, and the surface area of each prism is K cm<sup>2</sup>. If the prisms are glued together along a square base, the resulting prism has a surface area of (103/52)K cm<sup>2</sup>. What is the side length, in cm, of each square base?",
    choices: [
      "3",
      "2",
      "4",
      "1"
    ],
    answer: 1,
    explanation: "Let x be the side of each square base. Each prism has surface area K = 2x<sup>2</sup> + 4x(51) = 2x<sup>2</sup> + 204x. Gluing two prisms base to base makes one prism with height 102, whose surface area is 2x<sup>2</sup> + 4x(102) = 2x<sup>2</sup> + 408x. So 52(2x<sup>2</sup> + 408x) = 103(2x<sup>2</sup> + 204x). Dividing by x and simplifying gives 102x = 204, so x = 2."
  },
  {
    id: "geo-bb22",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two identical rectangular prisms each have a height of 41 centimeters (cm). The base of each prism is a square, and the surface area of each prism is K cm<sup>2</sup>. If the prisms are glued together along a square base, the resulting prism has a surface area of (88/47)K cm<sup>2</sup>. What is the side length, in cm, of each square base?",
    choices: [
      "12",
      "6",
      "24",
      "13"
    ],
    answer: 0,
    explanation: "Let x be the side of each square base. Each prism has surface area K = 2x<sup>2</sup> + 4x(41) = 2x<sup>2</sup> + 164x. Gluing two prisms base to base makes one prism with height 82, whose surface area is 2x<sup>2</sup> + 4x(82) = 2x<sup>2</sup> + 328x. So 47(2x<sup>2</sup> + 328x) = 88(2x<sup>2</sup> + 164x). Dividing by x and simplifying gives 82x = 984, so x = 12."
  },
  {
    id: "geo-bb23",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two identical rectangular prisms each have a height of 53 centimeters (cm). The base of each prism is a square, and the surface area of each prism is K cm<sup>2</sup>. If the prisms are glued together along a square base, the resulting prism has a surface area of (110/57)K cm<sup>2</sup>. What is the side length, in cm, of each square base?",
    choices: [
      "16",
      "9",
      "4",
      "8"
    ],
    answer: 3,
    explanation: "Let x be the side of each square base. Each prism has surface area K = 2x<sup>2</sup> + 4x(53) = 2x<sup>2</sup> + 212x. Gluing two prisms base to base makes one prism with height 106, whose surface area is 2x<sup>2</sup> + 4x(106) = 2x<sup>2</sup> + 424x. So 57(2x<sup>2</sup> + 424x) = 110(2x<sup>2</sup> + 212x). Dividing by x and simplifying gives 106x = 848, so x = 8."
  },
  {
    id: "geo-bb24",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two identical rectangular prisms each have a height of 74 centimeters (cm). The base of each prism is a square, and the surface area of each prism is K cm<sup>2</sup>. If the prisms are glued together along a square base, the resulting prism has a surface area of (149/75)K cm<sup>2</sup>. What is the side length, in cm, of each square base?",
    choices: [
      "1",
      "3",
      "2",
      "4"
    ],
    answer: 2,
    explanation: "Let x be the side of each square base. Each prism has surface area K = 2x<sup>2</sup> + 4x(74) = 2x<sup>2</sup> + 296x. Gluing two prisms base to base makes one prism with height 148, whose surface area is 2x<sup>2</sup> + 4x(148) = 2x<sup>2</sup> + 592x. So 75(2x<sup>2</sup> + 592x) = 149(2x<sup>2</sup> + 296x). Dividing by x and simplifying gives 148x = 296, so x = 2."
  },
  {
    id: "geo-bb25",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two identical rectangular prisms each have a height of 83 centimeters (cm). The base of each prism is a square, and the surface area of each prism is K cm<sup>2</sup>. If the prisms are glued together along a square base, the resulting prism has a surface area of (168/85)K cm<sup>2</sup>. What is the side length, in cm, of each square base?",
    choices: [
      "2",
      "4",
      "5",
      "8"
    ],
    answer: 1,
    explanation: "Let x be the side of each square base. Each prism has surface area K = 2x<sup>2</sup> + 4x(83) = 2x<sup>2</sup> + 332x. Gluing two prisms base to base makes one prism with height 166, whose surface area is 2x<sup>2</sup> + 4x(166) = 2x<sup>2</sup> + 664x. So 85(2x<sup>2</sup> + 664x) = 168(2x<sup>2</sup> + 332x). Dividing by x and simplifying gives 166x = 664, so x = 4."
  },
  {
    id: "geo-bb26",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two identical rectangular prisms each have a height of 98 centimeters (cm). The base of each prism is a square, and the surface area of each prism is K cm<sup>2</sup>. If the prisms are glued together along a square base, the resulting prism has a surface area of (100/51)K cm<sup>2</sup>. What is the side length, in cm, of each square base?",
    choices: [
      "4",
      "16",
      "9",
      "8"
    ],
    answer: 3,
    explanation: "Let x be the side of each square base. Each prism has surface area K = 2x<sup>2</sup> + 4x(98) = 2x<sup>2</sup> + 392x. Gluing two prisms base to base makes one prism with height 196, whose surface area is 2x<sup>2</sup> + 4x(196) = 2x<sup>2</sup> + 784x. So 51(2x<sup>2</sup> + 784x) = 100(2x<sup>2</sup> + 392x). Dividing by x and simplifying gives 98x = 784, so x = 8."
  },
  {
    id: "geo-bb27",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two identical rectangular prisms each have a height of 24 centimeters (cm). The base of each prism is a square, and the surface area of each prism is K cm<sup>2</sup>. If the prisms are glued together along a square base, the resulting prism has a surface area of (33/17)K cm<sup>2</sup>. What is the side length, in cm, of each square base?",
    choices: [
      "3",
      "2",
      "4",
      "6"
    ],
    answer: 0,
    explanation: "Let x be the side of each square base. Each prism has surface area K = 2x<sup>2</sup> + 4x(24) = 2x<sup>2</sup> + 96x. Gluing two prisms base to base makes one prism with height 48, whose surface area is 2x<sup>2</sup> + 4x(48) = 2x<sup>2</sup> + 192x. So 17(2x<sup>2</sup> + 192x) = 33(2x<sup>2</sup> + 96x). Dividing by x and simplifying gives 32x = 96, so x = 3."
  },
  {
    id: "geo-bb28",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two identical rectangular prisms each have a height of 16 centimeters (cm). The base of each prism is a square, and the surface area of each prism is K cm<sup>2</sup>. If the prisms are glued together along a square base, the resulting prism has a surface area of (9/5)K cm<sup>2</sup>. What is the side length, in cm, of each square base?",
    choices: [
      "16",
      "8",
      "9",
      "4"
    ],
    answer: 1,
    explanation: "Let x be the side of each square base. Each prism has surface area K = 2x<sup>2</sup> + 4x(16) = 2x<sup>2</sup> + 64x. Gluing two prisms base to base makes one prism with height 32, whose surface area is 2x<sup>2</sup> + 4x(32) = 2x<sup>2</sup> + 128x. So 5(2x<sup>2</sup> + 128x) = 9(2x<sup>2</sup> + 64x). Dividing by x and simplifying gives 8x = 64, so x = 8."
  },
  {
    id: "geo-bb29",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two identical rectangular prisms each have a height of 35 centimeters (cm). The base of each prism is a square, and the surface area of each prism is K cm<sup>2</sup>. If the prisms are glued together along a square base, the resulting prism has a surface area of (76/41)K cm<sup>2</sup>. What is the side length, in cm, of each square base?",
    choices: [
      "13",
      "12",
      "24",
      "6"
    ],
    answer: 1,
    explanation: "Let x be the side of each square base. Each prism has surface area K = 2x<sup>2</sup> + 4x(35) = 2x<sup>2</sup> + 140x. Gluing two prisms base to base makes one prism with height 70, whose surface area is 2x<sup>2</sup> + 4x(70) = 2x<sup>2</sup> + 280x. So 41(2x<sup>2</sup> + 280x) = 76(2x<sup>2</sup> + 140x). Dividing by x and simplifying gives 70x = 840, so x = 12."
  },
  {
    id: "geo-bb30",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two identical rectangular prisms each have a height of 76 centimeters (cm). The base of each prism is a square, and the surface area of each prism is K cm<sup>2</sup>. If the prisms are glued together along a square base, the resulting prism has a surface area of (77/39)K cm<sup>2</sup>. What is the side length, in cm, of each square base?",
    choices: [
      "8",
      "5",
      "2",
      "4"
    ],
    answer: 3,
    explanation: "Let x be the side of each square base. Each prism has surface area K = 2x<sup>2</sup> + 4x(76) = 2x<sup>2</sup> + 304x. Gluing two prisms base to base makes one prism with height 152, whose surface area is 2x<sup>2</sup> + 4x(152) = 2x<sup>2</sup> + 608x. So 39(2x<sup>2</sup> + 608x) = 77(2x<sup>2</sup> + 304x). Dividing by x and simplifying gives 76x = 304, so x = 4."
  },
  {
    id: "geo-bb31",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In triangle JKL, angle J is a right angle and 39cos(K) = 15. What is the value of cos(L)?",
    choices: [
      "12/13",
      "12/5",
      "5/12",
      "5/13"
    ],
    answer: 0,
    explanation: "From 39cos(K) = 15, cos(K) = 5/13. So the side adjacent to angle K is 5k and the hypotenuse is 13k for some k > 0. By the Pythagorean theorem the remaining leg is 12k. That leg is adjacent to angle L, so cos(L) = 12k/13k = 12/13. Equivalently, K and L are complementary, so cos(L) = sin(K)."
  },
  {
    id: "geo-bb32",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In triangle JKL, angle J is a right angle and 68cos(K) = 32. What is the value of cos(L)?",
    choices: [
      "15/17",
      "8/15",
      "8/17",
      "15/8"
    ],
    answer: 0,
    explanation: "From 68cos(K) = 32, cos(K) = 8/17. So the side adjacent to angle K is 8k and the hypotenuse is 17k for some k > 0. By the Pythagorean theorem the remaining leg is 15k. That leg is adjacent to angle L, so cos(L) = 15k/17k = 15/17. Equivalently, K and L are complementary, so cos(L) = sin(K)."
  },
  {
    id: "geo-bb33",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In triangle DEF, angle D is a right angle and 111cos(E) = 105. What is the value of cos(F)?",
    choices: [
      "12/37",
      "35/37",
      "12/35",
      "35/12"
    ],
    answer: 0,
    explanation: "From 111cos(E) = 105, cos(E) = 35/37. So the side adjacent to angle E is 35k and the hypotenuse is 37k for some k > 0. By the Pythagorean theorem the remaining leg is 12k. That leg is adjacent to angle F, so cos(F) = 12k/37k = 12/37. Equivalently, E and F are complementary, so cos(F) = sin(E)."
  },
  {
    id: "geo-bb34",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In triangle ABC, angle A is a right angle and 37cos(B) = 35. What is the value of cos(C)?",
    choices: [
      "12/35",
      "12/37",
      "35/37",
      "35/12"
    ],
    answer: 1,
    explanation: "From 37cos(B) = 35, cos(B) = 35/37. So the side adjacent to angle B is 35k and the hypotenuse is 37k for some k > 0. By the Pythagorean theorem the remaining leg is 12k. That leg is adjacent to angle C, so cos(C) = 12k/37k = 12/37. Equivalently, B and C are complementary, so cos(C) = sin(B)."
  },
  {
    id: "geo-bb35",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In triangle ABC, angle A is a right angle and 5cos(B) = 4. What is the value of cos(C)?",
    choices: [
      "3/4",
      "3/5",
      "4/5",
      "4/3"
    ],
    answer: 1,
    explanation: "From 5cos(B) = 4, cos(B) = 4/5. So the side adjacent to angle B is 4k and the hypotenuse is 5k for some k > 0. By the Pythagorean theorem the remaining leg is 3k. That leg is adjacent to angle C, so cos(C) = 3k/5k = 3/5. Equivalently, B and C are complementary, so cos(C) = sin(B)."
  },
  {
    id: "geo-bb36",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In triangle ABC, angle A is a right angle and 17cos(B) = 15. What is the value of cos(C)?",
    choices: [
      "8/17",
      "8/15",
      "15/8",
      "15/17"
    ],
    answer: 0,
    explanation: "From 17cos(B) = 15, cos(B) = 15/17. So the side adjacent to angle B is 15k and the hypotenuse is 17k for some k > 0. By the Pythagorean theorem the remaining leg is 8k. That leg is adjacent to angle C, so cos(C) = 8k/17k = 8/17. Equivalently, B and C are complementary, so cos(C) = sin(B)."
  },
  {
    id: "geo-bb37",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In triangle ABC, angle A is a right angle and 244cos(B) = 240. What is the value of cos(C)?",
    choices: [
      "60/11",
      "11/60",
      "60/61",
      "11/61"
    ],
    answer: 3,
    explanation: "From 244cos(B) = 240, cos(B) = 60/61. So the side adjacent to angle B is 60k and the hypotenuse is 61k for some k > 0. By the Pythagorean theorem the remaining leg is 11k. That leg is adjacent to angle C, so cos(C) = 11k/61k = 11/61. Equivalently, B and C are complementary, so cos(C) = sin(B)."
  },
  {
    id: "geo-bb38",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In triangle DEF, angle D is a right angle and 5cos(E) = 4. What is the value of cos(F)?",
    choices: [
      "3/4",
      "4/5",
      "4/3",
      "3/5"
    ],
    answer: 3,
    explanation: "From 5cos(E) = 4, cos(E) = 4/5. So the side adjacent to angle E is 4k and the hypotenuse is 5k for some k > 0. By the Pythagorean theorem the remaining leg is 3k. That leg is adjacent to angle F, so cos(F) = 3k/5k = 3/5. Equivalently, E and F are complementary, so cos(F) = sin(E)."
  },
  {
    id: "geo-bb39",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In triangle JKL, angle J is a right angle and 123cos(K) = 120. What is the value of cos(L)?",
    choices: [
      "40/9",
      "40/41",
      "9/40",
      "9/41"
    ],
    answer: 3,
    explanation: "From 123cos(K) = 120, cos(K) = 40/41. So the side adjacent to angle K is 40k and the hypotenuse is 41k for some k > 0. By the Pythagorean theorem the remaining leg is 9k. That leg is adjacent to angle L, so cos(L) = 9k/41k = 9/41. Equivalently, K and L are complementary, so cos(L) = sin(K)."
  },
  {
    id: "geo-bb40",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In triangle DEF, angle D is a right angle and 51cos(E) = 45. What is the value of cos(F)?",
    choices: [
      "8/17",
      "8/15",
      "15/17",
      "15/8"
    ],
    answer: 0,
    explanation: "From 51cos(E) = 45, cos(E) = 15/17. So the side adjacent to angle E is 15k and the hypotenuse is 17k for some k > 0. By the Pythagorean theorem the remaining leg is 8k. That leg is adjacent to angle F, so cos(F) = 8k/17k = 8/17. Equivalently, E and F are complementary, so cos(F) = sin(E)."
  }
);

// Reading and Writing — Bluebook-calibrated set
// Original Words in Context items at real-SAT Hard difficulty (vocabulary
// the digital SAT actually tests; the challenge is in the reasoning, not
// in rare words). Added 2026-10-28 to replace items moved to Extra Hard.

QUESTIONS.push(
  {
    id: "cs-bb1",
    module: "rw",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: 3,
    passage: "For decades, historians treated the diary of Hannah Calloway, the wife of a nineteenth-century mill owner, as a straightforward record of life in a factory town. A recent study complicates that view. By comparing the diary with the town's payroll ledgers and newspaper reports, researchers found that Calloway described strikes and layoffs only when they affected her own household; disputes that disrupted workers' lives but left her family untouched rarely appear. The diary, the researchers conclude, is best read as a ______ account: accurate in what it includes but shaped by what its author chose to notice.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: [
      "selective",
      "fabricated",
      "exhaustive",
      "impartial"
    ],
    answer: 0,
    explanation: "The researchers found the diary accurate but limited to events that touched Calloway's own household, so it is \"selective\": it includes some events and leaves out others. \"Fabricated\" contradicts the claim that the diary is accurate in what it includes. \"Exhaustive\" and \"impartial\" both contradict the finding that many disputes are missing and that the account reflects what its author chose to notice."
  },
  {
    id: "cs-bb2",
    module: "rw",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: 3,
    passage: "Ecologist Rosa Mbeki expected that removing an invasive grass from test plots would allow native wildflowers to return. In wet years, it did: native species recovered within two seasons. In dry years, however, the cleared plots were quickly recolonized by other invasive plants, and the wildflowers never became established. Mbeki concluded that the benefit of removing the grass was ______: whether it helped native species depended on conditions that the removal itself could not control.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: [
      "negligible",
      "permanent",
      "contingent",
      "immediate"
    ],
    answer: 2,
    explanation: "The colon introduces a definition of the missing word: the benefit \"depended on conditions\" such as rainfall. \"Contingent\" means dependent on something else, which fits exactly. \"Negligible\" is tempting because removal failed in dry years, but it clearly helped in wet years, so the benefit wasn't insignificant. \"Permanent\" and \"immediate\" describe how long or how fast the benefit lasted or arrived, not whether it depended on conditions."
  },
  {
    id: "cs-bb3",
    module: "rw",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: 3,
    passage: "Architect Lina Bo Bardi's design for the São Paulo Museum of Art lifts the entire gallery above street level on four red pillars, leaving a broad open plaza beneath it. Pedestrians walking along the avenue are arrested by the sudden gap in the city's dense row of buildings: the museum seems to hover, and the view runs straight through to the valley beyond. Many people pause there, in the shade, before ever going inside.",
    prompt: "As used in the text, what does the word \"arrested\" most nearly mean?",
    choices: [
      "Taken into custody",
      "Brought to a stop",
      "Slowed in development",
      "Made uneasy"
    ],
    answer: 1,
    explanation: "The text says that many people \"pause there\" after noticing the gap beneath the museum, so \"arrested\" means brought to a stop. \"Taken into custody\" is the legal sense of the word and doesn't fit pedestrians admiring a building. \"Slowed in development\" applies to growth, not to people walking by. Nothing suggests the view makes people uneasy; the text presents the pause as a response to a striking view."
  },
  {
    id: "cs-bb4",
    module: "rw",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: 3,
    passage: "When the transportation committee released its report on the city's redesigned bus network, its endorsement was qualified. Members praised the shorter travel times on the main corridors, but they noted that several outlying neighborhoods had lost service entirely, and they recommended restoring at least two discontinued routes before the new network was made permanent.",
    prompt: "As used in the text, what does the word \"qualified\" most nearly mean?",
    choices: [
      "Officially certified",
      "Highly skilled",
      "Limited by reservations",
      "Openly enthusiastic"
    ],
    answer: 2,
    explanation: "The committee praised part of the redesign but raised concerns and attached a condition (restoring two routes), so its endorsement was \"qualified\" in the sense of limited by reservations. \"Officially certified\" and \"highly skilled\" are other common meanings of \"qualified\" that don't describe an endorsement. \"Openly enthusiastic\" ignores the concerns the committee raised."
  },
  {
    id: "cs-bb5",
    module: "rw",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: 3,
    passage: "Critics initially dismissed the composer's early string quartets as ______, pointing to melodies and harmonies borrowed almost directly from the composers she had studied. Later scholars, however, found that the borrowings were deliberate: each quotation is altered in a way that comments on its source, turning imitation into a kind of argument.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: [
      "inscrutable",
      "unfinished",
      "extravagant",
      "derivative"
    ],
    answer: 3,
    explanation: "The critics' evidence was that the quartets borrowed melodies and harmonies \"almost directly\" from earlier composers, so they judged the music \"derivative,\" or imitative of other work. The later scholars respond to exactly that charge by showing the imitation was deliberate. \"Inscrutable\" (hard to understand), \"unfinished,\" and \"extravagant\" don't follow from evidence about borrowing."
  },
  {
    id: "cs-bb6",
    module: "rw",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: 3,
    passage: "Economist Teresa Alvarado was hopeful that a new regional trade agreement would benefit farmers across the region. Her optimism was ______ by her own data, however: although agricultural exports rose sharply in the agreement's first year, most of the gains went to a handful of large producers, and small farms saw little change in income.",
    prompt: "Which choice completes the text with the most logical and precise word or phrase?",
    choices: [
      "tempered",
      "fueled",
      "disguised",
      "replaced"
    ],
    answer: 0,
    explanation: "\"However\" signals that the data worked against Alvarado's hope: exports rose, but small farms gained little. Her optimism was therefore \"tempered,\" or moderated. \"Fueled\" would mean the data increased her optimism, which the mixed results don't support. \"Disguised\" makes no sense here, and \"replaced\" goes too far, since the data showed real gains and didn't eliminate every reason for hope."
  }
);
