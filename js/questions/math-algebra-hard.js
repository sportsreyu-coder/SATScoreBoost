// Math — Algebra (Hard tier)
// Multi-step, top-of-scale SAT-style questions. All content is original.

QUESTIONS.push(
  {
    id: "alg-h1",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + 3y = −36<br>3x + (k − 8)y = −12<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "9",
      "8",
      "1",
      "−1"
    ],
    answer: 3,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/3 = 3/(k − 8) gives k(k − 8) = 9, so k² − 8k − 9 = 0, which factors as (k − 9)(k + 1) = 0. So k = 9 or k = −1. If k = 9, the constants are in the same ratio as well (−36/−12 = 3), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = −1."
  },
  {
    id: "alg-h2",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a < 0. If f(f(x)) = 9x + 14 for all values of x, what is the value of f(−1)?",
    choices: [
      "−10",
      "5",
      "−4",
      "17"
    ],
    answer: 2,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 9x + 14 gives a² = 9, so a = −3 (since a < 0), and (a + 1)b = 14, so −2b = 14 and b = −7. Thus f(x) = −3x − 7 and f(−1) = −3(−1) − 7 = −4."
  },
  {
    id: "alg-h3",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (−2, −5) and is perpendicular to the graph of −x − 2y = 3. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "−12",
      "1/2",
      "−9/2",
      "−1"
    ],
    answer: 1,
    explanation: "Solving −x − 2y = 3 for y shows its slope is −1/2. A perpendicular line has slope equal to the negative reciprocal, 2. Line ℓ is y − (−5) = (2)(x − (−2)). Setting y = 0 and x = r gives 5 = (2)(r − (−2)). Multiplying both sides by 1/2 gives r − (−2) = 5/2, so r = 1/2."
  },
  {
    id: "alg-h4",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 4,
    prompt: "A storage shelf can hold at most 550 kilograms. It holds small bins weighing 14 kilograms each and large bins weighing 114 kilograms each. For balance, the number of small bins must be at least 4 times the number of large bins. What is the maximum number of large bins that can be loaded?",
    choices: [
      "3",
      "4",
      "1",
      "2"
    ],
    answer: 0,
    explanation: "Let s be the number of small items and L the number of large bins. The constraints are 14s + 114L ≤ 550 and s ≥ 4L. To make L as large as possible, use the fewest small items allowed: s = 4L. Then 14(4L) + 114L ≤ 550, so 170L ≤ 550 and L ≤ 3.24. Since L must be a whole number, the maximum is 3."
  },
  {
    id: "alg-h5",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x + 5) − 2x = x + m<br><br>In the given equation, k and m are constants. If the equation has infinitely many solutions, which of the following must be true?",
    choices: [
      "k = 3 and m ≠ 15",
      "k = 1 and m = 5",
      "k = −1 and m = −5",
      "k = 3 and m = 15"
    ],
    answer: 3,
    explanation: "Expanding the left side gives kx + 5k − 2x = (k − 2)x + 5k. A linear equation has infinitely many solutions when both the x-coefficients and the constants match. So k − 2 = 1, giving k = 3. With k = 3, the left constant is 5(3) = 15, so m must equal 15."
  },
  {
    id: "alg-h6",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "10x + 14y = 110<br>14x + 10y = 106<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "1",
      "81",
      "−9",
      "9"
    ],
    answer: 2,
    explanation: "Adding the equations gives 24x + 24y = 216, so x + y = 9. Subtracting the second from the first gives −4x + 4y = 4, so x − y = −1. Since x² − y² = (x + y)(x − y), the value is (9)(−1) = −9."
  },
  {
    id: "alg-h7",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope 2 passes through the points (k, −29) and (7, k), where k is a constant. What is the value of k?",
    choices: [
      "−15",
      "−5",
      "18",
      "−29"
    ],
    answer: 1,
    explanation: "Using the slope formula with the points (k, −29) and (7, k): (k − (−29))/(7 − k) = 2. Multiplying: k − (−29) = 2(7 − k). Collecting the k terms gives (1 + 2)k = −29 + 2(7), so k = −5."
  },
  {
    id: "alg-h8",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 72 liters of a solution that is 12% antifreeze by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure antifreeze, which brings the tank back to 72 liters of a solution that is 17% antifreeze. What is the value of x?",
    choices: [
      "45/11",
      "360/83",
      "18/5",
      "360/17"
    ],
    answer: 0,
    explanation: "Track the antifreeze. At first there are 0.12(72) = 216/25 liters. Draining x liters removes 0.12x liters of antifreeze, and adding x liters of pure antifreeze adds x liters. The final amount must be 0.17(72) = 306/25 liters: 216/25 − 0.12x + x = 306/25, so 0.88x = 18/5 and x = 45/11."
  },
  {
    id: "alg-h9",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(−x + 4)/5 ≤ x + 4<br>x − 5 < (−3x + 13)/2<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "8",
      "6",
      "9",
      "7"
    ],
    answer: 3,
    explanation: "First inequality: multiply by 5 to get −x + 4 ≤ 5x + 20, so −6x ≤ 16. Dividing by the negative number −6 reverses the inequality: x ≥ −8/3. Second inequality: multiply by 2 to get 2x − 10 < −3x + 13, so 5x < 23 and x < 23/5. The integers with −8/3 ≤ x < 23/5 are −2 through 4, which is 7 integers."
  },
  {
    id: "alg-h10",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A data plan offers two pricing options. Option A costs $17 per month, which includes the first 6 gigabytes, plus $6 for each gigabyte beyond 6. Option B costs $7 per month plus $4 for every gigabyte used. For what number of gigabytes in a month do the two options cost the same amount? (Assume more than 6 gigabytes are used.)",
    choices: [
      "−5",
      "7",
      "13",
      "19"
    ],
    answer: 2,
    explanation: "For u gigabytes with u > 6, Option A costs 17 + 6(u − 6) dollars and Option B costs 7 + 4u dollars. Setting them equal: 17 + 6u − 36 = 7 + 4u, so 2u = 26 and u = 13."
  },
  {
    id: "alg-h11",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "−x + 6y = 12<br>ax + by = 8<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a + b?",
    choices: [
      "5",
      "10/3",
      "−14/3",
      "15/2"
    ],
    answer: 1,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is 8/12 = 2/3. So a = 2/3(−1) = −2/3 and b = 2/3(6) = 4, and a + b = 10/3."
  },
  {
    id: "alg-h12",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of −4x − y = −16 in the xy-plane is shifted down h units, where h is a positive constant. The x-intercept of the resulting graph is (1, 0). What is the value of h?",
    choices: [
      "12",
      "24",
      "13",
      "11"
    ],
    answer: 0,
    explanation: "Shifting the graph down h units replaces y with y + h: −4x − (y + h) = −16. At the x-intercept y = 0, so −4(1) − (h) = −16, giving −4 − h = −16 and h = 12."
  },
  {
    id: "alg-h13",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−2) − f(−5) = 18 and f(0) = −12. If f(k) = −60, what is the value of k?",
    choices: [
      "−8/3",
      "−12",
      "−48",
      "−8"
    ],
    answer: 3,
    explanation: "The slope of f is [f(−2) − f(−5)]/(−2 − (−5)) = 18/3 = 6. Since f(0) = −12, f(x) = 6x − 12. Then 6k − 12 = −60, so 6k = −48 and k = −8."
  },
  {
    id: "alg-h14",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "−9x − 6y = 8<br>y = ax + b<br><br>In the given system, a and b are constants. The graph of y = ax + b passes through the point (3, −7), and the system has no solution. What is the value of b?",
    choices: [
      "−23/2",
      "−4/3",
      "−5/2",
      "−9"
    ],
    answer: 2,
    explanation: "A system of two linear equations has no solution when the lines are parallel and distinct. Solving −9x − 6y = 8 for y gives slope −3/2, so a = −3/2. Substituting (3, −7) into y = −3/2x + b: −7 = −3/2(3) + b, so b = −5/2. This line is distinct from the first because its y-intercept differs from −4/3."
  },
  {
    id: "alg-h15",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "Two cyclists start 343 miles apart and travel toward each other. The first travels at a constant 26 miles per hour, and the second, who starts 3 hours later, travels at a constant 27 miles per hour. How many miles from the first one's starting point do they meet?",
    choices: [
      "168",
      "208",
      "130",
      "127"
    ],
    answer: 1,
    explanation: "Let t be the time the second one has been traveling when they meet. The first has traveled 26(t + 3) and the second 27t, and together they cover 343: 26(t + 3) + 27t = 343, so 53t + 78 = 343 and t = 5. The first one has traveled 26(8) = 208 miles."
  },
  {
    id: "alg-h16",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "(5/4)(6x − 16) − 70 = 3(6x − 16)<br><br>Which of the following is the value of 3x − 8 that satisfies the given equation?",
    choices: [
      "−20",
      "−4",
      "−40",
      "20"
    ],
    answer: 0,
    explanation: "Let w = 6x − 16, which is 2(3x − 8). The equation becomes (5/4)w − 70 = 3w, so (5/4 − 3)w = 70, which gives w = −40. Then 3x − 8 = w/2 = −20. (Solving for x first also works, but it is slower: x = −4.)"
  },
  {
    id: "alg-h17",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "A gym sold a total of 111 memberships, some premium at $30 each and the rest standard at $10 each, for total revenue of $2,130. How many more dollars of revenue came from premium memberships than from standard memberships?",
    choices: [
      "−9",
      "1290",
      "1020",
      "930"
    ],
    answer: 3,
    explanation: "Let a and s be the numbers of premium and standard memberships. Then a + s = 111 and 30a + 10s = 2130. Substituting s = 111 − a: 30a + 10(111 − a) = 2130, so 20a = 1020 and a = 51, s = 60. Revenue from premium memberships is 30(51) = $1530, from standard memberships is 10(60) = $600, a difference of $930."
  },
  {
    id: "alg-h18",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The point (a, b) lies on the graph of −5x − 6y = −37 in the xy-plane. If b = 5a, what is the value of b?",
    choices: [
      "37/35",
      "−37/5",
      "37/7",
      "−37/7"
    ],
    answer: 2,
    explanation: "Substitute b = 5a into −5x − 6y = −37: −5a − 30a = −37, so −35a = −37 and a = 37/35. Then b = 5(37/35) = 37/7."
  },
  {
    id: "alg-h19",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y > 2x + 7<br>y < −x + c<br><br>In the given system of inequalities, c is a constant. If the point (1, 14) is a solution to the system, what is the least possible integer value of c?",
    choices: [
      "15",
      "16",
      "14",
      "17"
    ],
    answer: 1,
    explanation: "The point satisfies the first inequality, since 14 > 9. For the second, substitute: 14 < −1(1) + c, so 14 < −1 + c and c > 15. The least integer greater than 15 is 16."
  },
  {
    id: "alg-h20",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ is the perpendicular bisector of the segment with endpoints (−7, 6) and (−5, 2). What is the y-coordinate of the y-intercept of line ℓ?",
    choices: [
      "7",
      "−8",
      "1",
      "19/2"
    ],
    answer: 0,
    explanation: "The perpendicular bisector passes through the midpoint (−6, 4). The segment's slope is (2 − 6)/(−5 − (−7)) = −2, so line ℓ has slope 1/2. Then y − 4 = (1/2)(x − (−6)). Setting x = 0 gives y = 4 − (1/2)(−6) = 7."
  },
  {
    id: "alg-h21",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−1) = −3f(3) and f(−3) = 30. What is the slope of the graph of y = f(x) in the xy-plane?",
    choices: [
      "12",
      "33",
      "6",
      "−6"
    ],
    answer: 3,
    explanation: "Write f(x) = mx + b. The first condition gives −m + b = −3(3m + b), so 8m = −4b. The second gives −3m + b = 30. Solving these two equations together gives m = −6 and b = 12, so the slope is −6. Check: f(−1) = 18 and f(3) = −6, and 18 = −3(−6)."
  },
  {
    id: "alg-h22",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + 12y = 24<br>4x + (k − 2)y = 12<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "8",
      "2",
      "−6",
      "48"
    ],
    answer: 2,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/4 = 12/(k − 2) gives k(k − 2) = 48, so k² − 2k − 48 = 0, which factors as (k − 8)(k + 6) = 0. So k = 8 or k = −6. If k = 8, the constants are in the same ratio as well (24/12 = 2), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = −6."
  },
  {
    id: "alg-h23",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a > 0. If f(f(x)) = 36x + 14 for all values of x, what is the value of f(6)?",
    choices: [
      "−34",
      "38",
      "230",
      "50"
    ],
    answer: 1,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 36x + 14 gives a² = 36, so a = 6 (since a > 0), and (a + 1)b = 14, so 7b = 14 and b = 2. Thus f(x) = 6x + 2 and f(6) = 6(6) + 2 = 38."
  },
  {
    id: "alg-h24",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (4, −3) and is perpendicular to the graph of 5x − y = −12. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "−11",
      "23/5",
      "19",
      "−11/5"
    ],
    answer: 0,
    explanation: "Solving 5x − y = −12 for y shows its slope is 5. A perpendicular line has slope equal to the negative reciprocal, −1/5. Line ℓ is y − (−3) = (−1/5)(x − 4). Setting y = 0 and x = r gives 3 = (−1/5)(r − 4). Multiplying both sides by −5 gives r − 4 = −15, so r = −11."
  },
  {
    id: "alg-h25",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 4,
    prompt: "A delivery van can carry at most 800 pounds. It is loaded with small crates weighing 34 pounds each and large crates weighing 70 pounds each. Company policy requires that the number of small crates be at least 2 times the number of large crates. What is the maximum number of large crates that can be loaded?",
    choices: [
      "11",
      "7",
      "6",
      "5"
    ],
    answer: 3,
    explanation: "Let s be the number of small items and L the number of large crates. The constraints are 34s + 70L ≤ 800 and s ≥ 2L. To make L as large as possible, use the fewest small items allowed: s = 2L. Then 34(2L) + 70L ≤ 800, so 138L ≤ 800 and L ≤ 5.80. Since L must be a whole number, the maximum is 5."
  },
  {
    id: "alg-h26",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x − 1) − 6x = 3x + m<br><br>In the given equation, k and m are constants. If the equation has infinitely many solutions, which of the following must be true?",
    choices: [
      "k = 9 and m ≠ −9",
      "k = 3 and m = −3",
      "k = 9 and m = −9",
      "k = −3 and m = 3"
    ],
    answer: 2,
    explanation: "Expanding the left side gives kx − k − 6x = (k − 6)x − k. A linear equation has infinitely many solutions when both the x-coefficients and the constants match. So k − 6 = 3, giving k = 9. With k = 9, the left constant is −1(9) = −9, so m must equal −9."
  },
  {
    id: "alg-h27",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "14x + 8y = −98<br>8x + 14y = −122<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "16",
      "−40",
      "100",
      "40"
    ],
    answer: 1,
    explanation: "Adding the equations gives 22x + 22y = −220, so x + y = −10. Subtracting the second from the first gives 6x − 6y = 24, so x − y = 4. Since x² − y² = (x + y)(x − y), the value is (−10)(4) = −40."
  },
  {
    id: "alg-h28",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope −3 passes through the points (k, 1) and (−1, k), where k is a constant. What is the value of k?",
    choices: [
      "−2",
      "−1",
      "1",
      "0"
    ],
    answer: 0,
    explanation: "Using the slope formula with the points (k, 1) and (−1, k): (k − 1)/(−1 − k) = −3. Multiplying: k − 1 = −3(−1 − k). Collecting the k terms gives (1 + (−3))k = 1 + (−3)(−1), so k = −2."
  },
  {
    id: "alg-h29",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 24 liters of a solution that is 10% antifreeze by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure antifreeze, which brings the tank back to 24 liters of a solution that is 15% antifreeze. What is the value of x?",
    choices: [
      "24/17",
      "6/5",
      "8",
      "4/3"
    ],
    answer: 3,
    explanation: "Track the antifreeze. At first there are 0.1(24) = 12/5 liters. Draining x liters removes 0.1x liters of antifreeze, and adding x liters of pure antifreeze adds x liters. The final amount must be 0.15(24) = 18/5 liters: 12/5 − 0.1x + x = 18/5, so 0.9x = 6/5 and x = 4/3."
  },
  {
    id: "alg-h30",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(−x + 2)/4 ≤ x + 2<br>x − 6 < (x − 3)/2<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "11",
      "9",
      "10",
      "12"
    ],
    answer: 2,
    explanation: "First inequality: multiply by 4 to get −x + 2 ≤ 4x + 8, so −5x ≤ 6. Dividing by the negative number −5 reverses the inequality: x ≥ −6/5. Second inequality: multiply by 2 to get 2x − 12 < x − 3, so x < 9 and x < 9. The integers with −6/5 ≤ x < 9 are −1 through 8, which is 10 integers."
  },
  {
    id: "alg-h31",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A data plan offers two pricing options. Option A costs $10 per month, which includes the first 3 gigabytes, plus $9 for each gigabyte beyond 3. Option B costs $7 per month plus $7 for every gigabyte used. For what number of gigabytes in a month do the two options cost the same amount? (Assume more than 3 gigabytes are used.)",
    choices: [
      "2",
      "12",
      "9",
      "15"
    ],
    answer: 1,
    explanation: "For u gigabytes with u > 3, Option A costs 10 + 9(u − 3) dollars and Option B costs 7 + 7u dollars. Setting them equal: 10 + 9u − 27 = 7 + 7u, so 2u = 24 and u = 12."
  },
  {
    id: "alg-h32",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "2x + 2y = 10<br>ax + by = 25<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a + b?",
    choices: [
      "10",
      "4",
      "0",
      "8/5"
    ],
    answer: 0,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is 25/10 = 5/2. So a = 5/2(2) = 5 and b = 5/2(2) = 5, and a + b = 10."
  },
  {
    id: "alg-h33",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of −8x + 6y = −2 in the xy-plane is shifted down h units, where h is a positive constant. The x-intercept of the resulting graph is (1, 0). What is the value of h?",
    choices: [
      "6",
      "2",
      "7",
      "1"
    ],
    answer: 3,
    explanation: "Shifting the graph down h units replaces y with y + h: −8x + 6(y + h) = −2. At the x-intercept y = 0, so −8(1) + 6(h) = −2, giving −8 + 6h = −2 and h = 1."
  },
  {
    id: "alg-h34",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(10) − f(4) = −24 and f(0) = −11. If f(k) = 9, what is the value of k?",
    choices: [
      "−5/6",
      "1/2",
      "−5",
      "20"
    ],
    answer: 2,
    explanation: "The slope of f is [f(10) − f(4)]/(10 − 4) = −24/6 = −4. Since f(0) = −11, f(x) = −4x − 11. Then −4k − 11 = 9, so −4k = 20 and k = −5."
  },
  {
    id: "alg-h35",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "8x − 2y = 3<br>y = ax + b<br><br>In the given system, a and b are constants. The graph of y = ax + b passes through the point (3, 3), and the system has no solution. What is the value of b?",
    choices: [
      "15",
      "−9",
      "−3/2",
      "15/4"
    ],
    answer: 1,
    explanation: "A system of two linear equations has no solution when the lines are parallel and distinct. Solving 8x − 2y = 3 for y gives slope 4, so a = 4. Substituting (3, 3) into y = 4x + b: 3 = 4(3) + b, so b = −9. This line is distinct from the first because its y-intercept differs from −3/2."
  },
  {
    id: "alg-h36",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "Two runners on a straight trail start 193 meters apart and travel toward each other. The first travels at a constant 14 meters per minute, and the second, who starts 2 minutes later, travels at a constant 19 meters per minute. How many meters from the first one's starting point do they meet?",
    choices: [
      "98",
      "82",
      "70",
      "60"
    ],
    answer: 0,
    explanation: "Let t be the time the second one has been traveling when they meet. The first has traveled 14(t + 2) and the second 19t, and together they cover 193: 14(t + 2) + 19t = 193, so 33t + 28 = 193 and t = 5. The first one has traveled 14(7) = 98 meters."
  },
  {
    id: "alg-h37",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "(4/5)(10x − 10) − 12 = 2(10x − 10)<br><br>Which of the following is the value of 5x − 5 that satisfies the given equation?",
    choices: [
      "0",
      "−10",
      "5",
      "−5"
    ],
    answer: 3,
    explanation: "Let w = 10x − 10, which is 2(5x − 5). The equation becomes (4/5)w − 12 = 2w, so (4/5 − 2)w = 12, which gives w = −10. Then 5x − 5 = w/2 = −5. (Solving for x first also works, but it is slower: x = 0.)"
  },
  {
    id: "alg-h38",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "A gym sold a total of 131 memberships, some premium at $24 each and the rest standard at $20 each, for total revenue of $3,000. How many more dollars of revenue came from premium memberships than from standard memberships?",
    choices: [
      "59",
      "−1036",
      "1560",
      "380"
    ],
    answer: 2,
    explanation: "Let a and s be the numbers of premium and standard memberships. Then a + s = 131 and 24a + 20s = 3000. Substituting s = 131 − a: 24a + 20(131 − a) = 3000, so 4a = 380 and a = 95, s = 36. Revenue from premium memberships is 24(95) = $2280, from standard memberships is 20(36) = $720, a difference of $1560."
  },
  {
    id: "alg-h39",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The point (a, b) lies on the graph of 9x − y = 33 in the xy-plane. If b = −3a, what is the value of a + b?",
    choices: [
      "11/4",
      "−11/2",
      "11/2",
      "33/8"
    ],
    answer: 1,
    explanation: "Substitute b = −3a into 9x − y = 33: 9a + 3a = 33, so 12a = 33 and a = 11/4. Then b = −3(11/4) = −33/4, and a + b = −11/2."
  },
  {
    id: "alg-h40",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y > −2x − 4<br>y < 4x + c<br><br>In the given system of inequalities, c is a constant. If the point (3, −5) is a solution to the system, what is the least possible integer value of c?",
    choices: [
      "−16",
      "−17",
      "8",
      "−18"
    ],
    answer: 0,
    explanation: "The point satisfies the first inequality, since −5 > −10. For the second, substitute: −5 < 4(3) + c, so −5 < 12 + c and c > −17. The least integer greater than −17 is −16."
  },
  {
    id: "alg-h41",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ is the perpendicular bisector of the segment with endpoints (−3, −7) and (5, 1). What is the y-coordinate of the y-intercept of line ℓ?",
    choices: [
      "−4",
      "−10",
      "2",
      "−2"
    ],
    answer: 3,
    explanation: "The perpendicular bisector passes through the midpoint (1, −3). The segment's slope is (1 − (−7))/(5 − (−3)) = 1, so line ℓ has slope −1. Then y − (−3) = (−1)(x − 1). Setting x = 0 gives y = −3 − (−1)(1) = −2."
  },
  {
    id: "alg-h42",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(3) = 2f(−4) and f(8) = 19. What is the value of f(0)?",
    choices: [
      "1",
      "13",
      "11",
      "12"
    ],
    answer: 2,
    explanation: "Write f(x) = mx + b. The first condition gives 3m + b = 2(−4m + b), so 11m = b. The second gives 8m + b = 19. Solving these two equations together gives m = 1 and b = 11, so f(0) = b = 11. Check: f(3) = 14 and f(−4) = 7, and 14 = 2(7)."
  },
  {
    id: "alg-h43",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + 3y = 6<br>3x + (k)y = −6<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "−3",
      "3",
      "0",
      "9"
    ],
    answer: 1,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/3 = 3/(k) gives k(k) = 9, so k² − 0k − 9 = 0, which factors as (k − 3)(k + 3) = 0. So k = 3 or k = −3. If k = −3, the constants are in the same ratio as well (6/−6 = −1), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = 3."
  },
  {
    id: "alg-h44",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a > 0. If f(f(x)) = 9x − 28 for all values of x, what is the value of f(−4)?",
    choices: [
      "−19",
      "5",
      "−64",
      "−40"
    ],
    answer: 0,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 9x − 28 gives a² = 9, so a = 3 (since a > 0), and (a + 1)b = −28, so 4b = −28 and b = −7. Thus f(x) = 3x − 7 and f(−4) = 3(−4) − 7 = −19."
  },
  {
    id: "alg-h45",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (−1, −8) and is perpendicular to the graph of −2x − 4y = −12. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "−17",
      "−5",
      "−6",
      "3"
    ],
    answer: 3,
    explanation: "Solving −2x − 4y = −12 for y shows its slope is −1/2. A perpendicular line has slope equal to the negative reciprocal, 2. Line ℓ is y − (−8) = (2)(x − (−1)). Setting y = 0 and x = r gives 8 = (2)(r − (−1)). Multiplying both sides by 1/2 gives r − (−1) = 4, so r = 3."
  },
  {
    id: "alg-h46",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A freight elevator has a maximum load of 400 pounds. A crew loads it with toolboxes weighing 12 pounds each and generators weighing 71 pounds each. Safety rules require the number of toolboxes to be at least 2 times the number of generators. What is the maximum number of generators that can be loaded?",
    choices: [
      "5",
      "2",
      "4",
      "3"
    ],
    answer: 2,
    explanation: "Let s be the number of small items and L the number of generators. The constraints are 12s + 71L ≤ 400 and s ≥ 2L. To make L as large as possible, use the fewest small items allowed: s = 2L. Then 12(2L) + 71L ≤ 400, so 95L ≤ 400 and L ≤ 4.21. Since L must be a whole number, the maximum is 4."
  },
  {
    id: "alg-h47",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x + 2) + 6x = −3x + m<br><br>In the given equation, k and m are constants. If the equation has infinitely many solutions, which of the following must be true?",
    choices: [
      "k = −9 and m ≠ −18",
      "k = −9 and m = −18",
      "k = −3 and m = −6",
      "k = 3 and m = 6"
    ],
    answer: 1,
    explanation: "Expanding the left side gives kx + 2k + 6x = (k + 6)x + 2k. A linear equation has infinitely many solutions when both the x-coefficients and the constants match. So k + 6 = −3, giving k = −9. With k = −9, the left constant is 2(−9) = −18, so m must equal −18."
  },
  {
    id: "alg-h48",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "18x + 7y = 156<br>7x + 18y = −31<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "85",
      "289",
      "25",
      "−85"
    ],
    answer: 0,
    explanation: "Adding the equations gives 25x + 25y = 125, so x + y = 5. Subtracting the second from the first gives 11x − 11y = 187, so x − y = 17. Since x² − y² = (x + y)(x − y), the value is (5)(17) = 85."
  },
  {
    id: "alg-h49",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope −2 passes through the points (k, 15) and (6, k), where k is a constant. What is the value of k?",
    choices: [
      "−1",
      "−9/2",
      "15",
      "−3"
    ],
    answer: 3,
    explanation: "Using the slope formula with the points (k, 15) and (6, k): (k − 15)/(6 − k) = −2. Multiplying: k − 15 = −2(6 − k). Collecting the k terms gives (1 + (−2))k = 15 + (−2)(6), so k = −3."
  },
  {
    id: "alg-h50",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 20 liters of a solution that is 30% acid by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure acid, which brings the tank back to 20 liters of a solution that is 35% acid. What is the value of x?",
    choices: [
      "20/13",
      "1",
      "10/7",
      "20/7"
    ],
    answer: 2,
    explanation: "Track the acid. At first there are 0.3(20) = 6 liters. Draining x liters removes 0.3x liters of acid, and adding x liters of pure acid adds x liters. The final amount must be 0.35(20) = 7 liters: 6 − 0.3x + x = 7, so 0.7x = 1 and x = 10/7."
  },
  {
    id: "alg-h51",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(3x − 11)/4 ≤ x − 2<br>x + 1 < (−x + 14)/3<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "7",
      "6",
      "5",
      "8"
    ],
    answer: 1,
    explanation: "First inequality: multiply by 4 to get 3x − 11 ≤ 4x − 8, so −x ≤ 3. Dividing by the negative number −1 reverses the inequality: x ≥ −3. Second inequality: multiply by 3 to get 3x + 3 < −x + 14, so 4x < 11 and x < 11/4. The integers with −3 ≤ x < 11/4 are −3 through 2, which is 6 integers."
  },
  {
    id: "alg-h52",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A data plan offers two pricing options. Option A costs $14 per month, which includes the first 6 gigabytes, plus $5 for each gigabyte beyond 6. Option B costs $14 per month plus $2 for every gigabyte used. For what number of gigabytes in a month do the two options cost the same amount? (Assume more than 6 gigabytes are used.)",
    choices: [
      "10",
      "0",
      "4",
      "16"
    ],
    answer: 0,
    explanation: "For u gigabytes with u > 6, Option A costs 14 + 5(u − 6) dollars and Option B costs 14 + 2u dollars. Setting them equal: 14 + 5u − 30 = 14 + 2u, so 3u = 30 and u = 10."
  },
  {
    id: "alg-h53",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "−5x − 7y = −6<br>ax + by = −10<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a − b?",
    choices: [
      "2",
      "−20",
      "6/5",
      "10/3"
    ],
    answer: 3,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is −10/−6 = 5/3. So a = 5/3(−5) = −25/3 and b = 5/3(−7) = −35/3, and a − b = 10/3."
  },
  {
    id: "alg-h54",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of −2x − 7y = 22 in the xy-plane is shifted up h units, where h is a positive constant. The x-intercept of the resulting graph is (10, 0). What is the value of h?",
    choices: [
      "42",
      "12",
      "6",
      "13"
    ],
    answer: 2,
    explanation: "Shifting the graph up h units replaces y with y − h: −2x − 7(y − h) = 22. At the x-intercept y = 0, so −2(10) − 7(−h) = 22, giving −20 + 7h = 22 and h = 6."
  },
  {
    id: "alg-h55",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(8) − f(5) = −12 and f(0) = −6. If f(k) = −34, what is the value of k?",
    choices: [
      "7/3",
      "7",
      "10",
      "−28"
    ],
    answer: 1,
    explanation: "The slope of f is [f(8) − f(5)]/(8 − 5) = −12/3 = −4. Since f(0) = −6, f(x) = −4x − 6. Then −4k − 6 = −34, so −4k = −28 and k = 7."
  },
  {
    id: "alg-h56",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "4x + 4y = −10<br>y = ax + b<br><br>In the given system, a and b are constants. The graph of y = ax + b passes through the point (2, 5), and the system has no solution. What is the value of b?",
    choices: [
      "7",
      "3",
      "−5/2",
      "8"
    ],
    answer: 0,
    explanation: "A system of two linear equations has no solution when the lines are parallel and distinct. Solving 4x + 4y = −10 for y gives slope −1, so a = −1. Substituting (2, 5) into y = −x + b: 5 = −1(2) + b, so b = 7. This line is distinct from the first because its y-intercept differs from −5/2."
  },
  {
    id: "alg-h57",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "Two cyclists start 202 miles apart and travel toward each other. The first travels at a constant 14 miles per hour, and the second, who starts 3 hours later, travels at a constant 26 miles per hour. How many miles from the first one's starting point do they meet?",
    choices: [
      "71",
      "56",
      "20",
      "98"
    ],
    answer: 3,
    explanation: "Let t be the time the second one has been traveling when they meet. The first has traveled 14(t + 3) and the second 26t, and together they cover 202: 14(t + 3) + 26t = 202, so 40t + 42 = 202 and t = 4. The first one has traveled 14(7) = 98 miles."
  },
  {
    id: "alg-h58",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "(1/2)(15x + 12) + 60 = −2(15x + 12)<br><br>Which of the following is the value of 5x + 4 that satisfies the given equation?",
    choices: [
      "−12/5",
      "−24",
      "−8",
      "8"
    ],
    answer: 2,
    explanation: "Let w = 15x + 12, which is 3(5x + 4). The equation becomes (1/2)w + 60 = −2w, so (1/2 − (−2))w = −60, which gives w = −24. Then 5x + 4 = w/3 = −8. (Solving for x first also works, but it is slower: x = −12/5.)"
  },
  {
    id: "alg-h59",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "A gym sold a total of 180 memberships, some premium at $14 each and the rest standard at $11 each, for total revenue of $2,292. How many more dollars of revenue came from premium memberships than from standard memberships?",
    choices: [
      "28",
      "620",
      "−80",
      "312"
    ],
    answer: 1,
    explanation: "Let a and s be the numbers of premium and standard memberships. Then a + s = 180 and 14a + 11s = 2292. Substituting s = 180 − a: 14a + 11(180 − a) = 2292, so 3a = 312 and a = 104, s = 76. Revenue from premium memberships is 14(104) = $1456, from standard memberships is 11(76) = $836, a difference of $620."
  },
  {
    id: "alg-h60",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The point (a, b) lies on the graph of −9x + 3y = 7 in the xy-plane. If b = −2a, what is the value of b?",
    choices: [
      "14/15",
      "−7/15",
      "14/3",
      "−14/15"
    ],
    answer: 0,
    explanation: "Substitute b = −2a into −9x + 3y = 7: −9a − 6a = 7, so −15a = 7 and a = −7/15. Then b = −2(−7/15) = 14/15."
  },
  {
    id: "alg-h61",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y > −x + 4<br>y < x + c<br><br>In the given system of inequalities, c is a constant. If the point (2, 3) is a solution to the system, what is the least possible integer value of c?",
    choices: [
      "1",
      "6",
      "0",
      "2"
    ],
    answer: 3,
    explanation: "The point satisfies the first inequality, since 3 > 2. For the second, substitute: 3 < 1(2) + c, so 3 < 2 + c and c > 1. The least integer greater than 1 is 2."
  },
  {
    id: "alg-h62",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ is the perpendicular bisector of the segment with endpoints (−3, 5) and (−7, 7). What is the y-coordinate of the y-intercept of line ℓ?",
    choices: [
      "7/2",
      "−4",
      "16",
      "11"
    ],
    answer: 2,
    explanation: "The perpendicular bisector passes through the midpoint (−5, 6). The segment's slope is (7 − 5)/(−7 − (−3)) = −1/2, so line ℓ has slope 2. Then y − 6 = (2)(x − (−5)). Setting x = 0 gives y = 6 − (2)(−5) = 16."
  },
  {
    id: "alg-h63",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−4) = 3f(−5) and f(−6) = −1. What is the slope of the graph of y = f(x) in the xy-plane?",
    choices: [
      "11",
      "2",
      "5",
      "−2"
    ],
    answer: 1,
    explanation: "Write f(x) = mx + b. The first condition gives −4m + b = 3(−5m + b), so 11m = 2b. The second gives −6m + b = −1. Solving these two equations together gives m = 2 and b = 11, so the slope is 2. Check: f(−4) = 3 and f(−5) = 1, and 3 = 3(1)."
  },
  {
    id: "alg-h64",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + y = −6<br>6x + (k − 1)y = 18<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "3",
      "−2",
      "1",
      "6"
    ],
    answer: 0,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/6 = 1/(k − 1) gives k(k − 1) = 6, so k² − k − 6 = 0, which factors as (k − 3)(k + 2) = 0. So k = 3 or k = −2. If k = −2, the constants are in the same ratio as well (−6/18 = −1/3), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = 3."
  },
  {
    id: "alg-h65",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a > 0. If f(f(x)) = 16x + 35 for all values of x, what is the value of f(4)?",
    choices: [
      "−9",
      "99",
      "51",
      "23"
    ],
    answer: 3,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 16x + 35 gives a² = 16, so a = 4 (since a > 0), and (a + 1)b = 35, so 5b = 35 and b = 7. Thus f(x) = 4x + 7 and f(4) = 4(4) + 7 = 23."
  },
  {
    id: "alg-h66",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (1, −1) and is perpendicular to the graph of −2x + 5y = 5. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "7/2",
      "7/5",
      "3/5",
      "3/2"
    ],
    answer: 2,
    explanation: "Solving −2x + 5y = 5 for y shows its slope is 2/5. A perpendicular line has slope equal to the negative reciprocal, −5/2. Line ℓ is y − (−1) = (−5/2)(x − 1). Setting y = 0 and x = r gives 1 = (−5/2)(r − 1). Multiplying both sides by −2/5 gives r − 1 = −2/5, so r = 3/5."
  },
  {
    id: "alg-h67",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 4,
    prompt: "A delivery van can carry at most 800 pounds. It is loaded with small crates weighing 32 pounds each and large crates weighing 85 pounds each. Company policy requires that the number of small crates be at least 4 times the number of large crates. What is the maximum number of large crates that can be loaded?",
    choices: [
      "9",
      "3",
      "6",
      "4"
    ],
    answer: 1,
    explanation: "Let s be the number of small items and L the number of large crates. The constraints are 32s + 85L ≤ 800 and s ≥ 4L. To make L as large as possible, use the fewest small items allowed: s = 4L. Then 32(4L) + 85L ≤ 800, so 213L ≤ 800 and L ≤ 3.76. Since L must be a whole number, the maximum is 3."
  },
  {
    id: "alg-h68",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x + 7) − x = 6x + m<br><br>In the given equation, k and m are constants. If the equation has no solution, which of the following must be true?",
    choices: [
      "k = 7 and m ≠ 49",
      "k = 7 and m = 49",
      "k = 6 and m ≠ 42",
      "k = 5 and m ≠ 35"
    ],
    answer: 0,
    explanation: "Expanding the left side gives kx + 7k − x = (k − 1)x + 7k. A linear equation has no solution when the x-coefficients on both sides are equal but the constants are different. So k − 1 = 6, giving k = 7. With k = 7, the left constant is 7(7) = 49, so m must not equal 49."
  },
  {
    id: "alg-h69",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "18x + 8y = 196<br>8x + 18y = −14<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "441",
      "49",
      "−147",
      "147"
    ],
    answer: 3,
    explanation: "Adding the equations gives 26x + 26y = 182, so x + y = 7. Subtracting the second from the first gives 10x − 10y = 210, so x − y = 21. Since x² − y² = (x + y)(x − y), the value is (7)(21) = 147."
  },
  {
    id: "alg-h70",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope −4 passes through the points (k, 20) and (8, k), where k is a constant. What is the value of k?",
    choices: [
      "12/5",
      "−6",
      "4",
      "20"
    ],
    answer: 2,
    explanation: "Using the slope formula with the points (k, 20) and (8, k): (k − 20)/(8 − k) = −4. Multiplying: k − 20 = −4(8 − k). Collecting the k terms gives (1 + (−4))k = 20 + (−4)(8), so k = 4."
  },
  {
    id: "alg-h71",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 80 liters of a solution that is 30% juice concentrate by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure concentrate, which brings the tank back to 80 liters of a solution that is 42% juice concentrate. What is the value of x?",
    choices: [
      "480/29",
      "96/7",
      "48/5",
      "160/7"
    ],
    answer: 1,
    explanation: "Track the juice concentrate. At first there are 0.3(80) = 24 liters. Draining x liters removes 0.3x liters of juice concentrate, and adding x liters of pure concentrate adds x liters. The final amount must be 0.42(80) = 168/5 liters: 24 − 0.3x + x = 168/5, so 0.7x = 48/5 and x = 96/7."
  },
  {
    id: "alg-h72",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(−3x − 4)/4 ≤ x + 3<br>x < (x + 17)/3<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "11",
      "12",
      "10",
      "13"
    ],
    answer: 0,
    explanation: "First inequality: multiply by 4 to get −3x − 4 ≤ 4x + 12, so −7x ≤ 16. Dividing by the negative number −7 reverses the inequality: x ≥ −16/7. Second inequality: multiply by 3 to get 3x < x + 17, so 2x < 17 and x < 17/2. The integers with −16/7 ≤ x < 17/2 are −2 through 8, which is 11 integers."
  },
  {
    id: "alg-h73",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A data plan offers two pricing options. Option A costs $17 per month, which includes the first 3 gigabytes, plus $9 for each gigabyte beyond 3. Option B costs $12 per month plus $7 for every gigabyte used. For what number of gigabytes in a month do the two options cost the same amount? (Assume more than 3 gigabytes are used.)",
    choices: [
      "3",
      "8",
      "14",
      "11"
    ],
    answer: 3,
    explanation: "For u gigabytes with u > 3, Option A costs 17 + 9(u − 3) dollars and Option B costs 12 + 7u dollars. Setting them equal: 17 + 9u − 27 = 12 + 7u, so 2u = 22 and u = 11."
  },
  {
    id: "alg-h74",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "−3x − 3y = 6<br>ax + by = 9<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a + b?",
    choices: [
      "−6",
      "0",
      "−9",
      "−4"
    ],
    answer: 2,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is 9/6 = 3/2. So a = 3/2(−3) = −9/2 and b = 3/2(−3) = −9/2, and a + b = −9."
  },
  {
    id: "alg-h75",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of −3x − 7y = −11 in the xy-plane is shifted down h units, where h is a positive constant. The x-intercept of the resulting graph is (−1, 0). What is the value of h?",
    choices: [
      "14",
      "2",
      "4",
      "9"
    ],
    answer: 1,
    explanation: "Shifting the graph down h units replaces y with y + h: −3x − 7(y + h) = −11. At the x-intercept y = 0, so −3(−1) − 7(h) = −11, giving 3 − 7h = −11 and h = 2."
  },
  {
    id: "alg-h76",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(8) − f(5) = −2 and f(0) = −10. If f(k) = −18, what is the value of k?",
    choices: [
      "12",
      "4",
      "42",
      "−8"
    ],
    answer: 0,
    explanation: "The slope of f is [f(8) − f(5)]/(8 − 5) = −2/3 = −2/3. Since f(0) = −10, f(x) = −2/3x − 10. Then −2/3k − 10 = −18, so −2/3k = −8 and k = 12."
  },
  {
    id: "alg-h77",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "−7x − 5y = −14<br>y = ax + b<br><br>In the given system, a and b are constants. The graph of y = ax + b passes through the point (−2, −2), and the system has no solution. What is the value of b?",
    choices: [
      "4/5",
      "14/5",
      "−4/7",
      "−24/5"
    ],
    answer: 3,
    explanation: "A system of two linear equations has no solution when the lines are parallel and distinct. Solving −7x − 5y = −14 for y gives slope −7/5, so a = −7/5. Substituting (−2, −2) into y = −7/5x + b: −2 = −7/5(−2) + b, so b = −24/5. This line is distinct from the first because its y-intercept differs from 14/5."
  },
  {
    id: "alg-h78",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "Two trains on parallel tracks start 209 kilometers apart and travel toward each other. The first travels at a constant 23 kilometers per hour, and the second, who starts 1 hour later, travels at a constant 8 kilometers per hour. How many kilometers from the first one's starting point do they meet?",
    choices: [
      "155",
      "138",
      "161",
      "153"
    ],
    answer: 2,
    explanation: "Let t be the time the second one has been traveling when they meet. The first has traveled 23(t + 1) and the second 8t, and together they cover 209: 23(t + 1) + 8t = 209, so 31t + 23 = 209 and t = 6. The first one has traveled 23(7) = 161 kilometers."
  },
  {
    id: "alg-h79",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "(4/3)(14x − 2) + 24 = 2(14x − 2)<br><br>Which of the following is the value of 7x − 1 that satisfies the given equation?",
    choices: [
      "19/7",
      "18",
      "36",
      "−18"
    ],
    answer: 1,
    explanation: "Let w = 14x − 2, which is 2(7x − 1). The equation becomes (4/3)w + 24 = 2w, so (4/3 − 2)w = −24, which gives w = 36. Then 7x − 1 = w/2 = 18. (Solving for x first also works, but it is slower: x = 19/7.)"
  },
  {
    id: "alg-h80",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "A food truck sold a total of 97 pizzas, some large at $26 each and the rest small at $10 each, for total revenue of $2,186. How many more dollars of revenue came from large pizzas than from small pizzas?",
    choices: [
      "1766",
      "55",
      "−214",
      "1216"
    ],
    answer: 0,
    explanation: "Let a and s be the numbers of large and small pizzas. Then a + s = 97 and 26a + 10s = 2186. Substituting s = 97 − a: 26a + 10(97 − a) = 2186, so 16a = 1216 and a = 76, s = 21. Revenue from large pizzas is 26(76) = $1976, from small pizzas is 10(21) = $210, a difference of $1766."
  },
  {
    id: "alg-h81",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The point (a, b) lies on the graph of x − 8y = 13 in the xy-plane. If b = −a, what is the value of b?",
    choices: [
      "13/9",
      "13/7",
      "−13/7",
      "−13/9"
    ],
    answer: 3,
    explanation: "Substitute b = −a into x − 8y = 13: a + 8a = 13, so 9a = 13 and a = 13/9. Then b = −1(13/9) = −13/9."
  },
  {
    id: "alg-h82",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y > 2x − 4<br>y < x + c<br><br>In the given system of inequalities, c is a constant. If the point (−3, −6) is a solution to the system, what is the least possible integer value of c?",
    choices: [
      "−3",
      "−8",
      "−2",
      "−4"
    ],
    answer: 2,
    explanation: "The point satisfies the first inequality, since −6 > −10. For the second, substitute: −6 < 1(−3) + c, so −6 < −3 + c and c > −3. The least integer greater than −3 is −2."
  },
  {
    id: "alg-h83",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ is the perpendicular bisector of the segment with endpoints (−7, −4) and (1, −2). What is the y-coordinate of the y-intercept of line ℓ?",
    choices: [
      "−9/4",
      "−15",
      "9",
      "−32"
    ],
    answer: 1,
    explanation: "The perpendicular bisector passes through the midpoint (−3, −3). The segment's slope is (−2 − (−4))/(1 − (−7)) = 1/4, so line ℓ has slope −4. Then y − (−3) = (−4)(x − (−3)). Setting x = 0 gives y = −3 − (−4)(−3) = −15."
  },
  {
    id: "alg-h84",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−5) = −3f(2) and f(4) = 15. What is the slope of the graph of y = f(x) in the xy-plane?",
    choices: [
      "4",
      "−1",
      "11",
      "−4"
    ],
    answer: 0,
    explanation: "Write f(x) = mx + b. The first condition gives −5m + b = −3(2m + b), so m = −4b. The second gives 4m + b = 15. Solving these two equations together gives m = 4 and b = −1, so the slope is 4. Check: f(−5) = −21 and f(2) = 7, and −21 = −3(7)."
  },
  {
    id: "alg-h85",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + 10y = −5<br>4x + (k + 3)y = −4<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "5",
      "−3",
      "40",
      "−8"
    ],
    answer: 3,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/4 = 10/(k + 3) gives k(k + 3) = 40, so k² + 3k − 40 = 0, which factors as (k − 5)(k + 8) = 0. So k = 5 or k = −8. If k = 5, the constants are in the same ratio as well (−5/−4 = 5/4), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = −8."
  },
  {
    id: "alg-h86",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a > 0. If f(f(x)) = 16x + 25 for all values of x, what is the value of f(8)?",
    choices: [
      "−27",
      "153",
      "37",
      "57"
    ],
    answer: 2,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 16x + 25 gives a² = 16, so a = 4 (since a > 0), and (a + 1)b = 25, so 5b = 25 and b = 5. Thus f(x) = 4x + 5 and f(8) = 4(8) + 5 = 37."
  },
  {
    id: "alg-h87",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (−2, −1) and is perpendicular to the graph of −3x + 6y = −3. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "0",
      "−5/2",
      "−3/2",
      "−5"
    ],
    answer: 1,
    explanation: "Solving −3x + 6y = −3 for y shows its slope is 1/2. A perpendicular line has slope equal to the negative reciprocal, −2. Line ℓ is y − (−1) = (−2)(x − (−2)). Setting y = 0 and x = r gives 1 = (−2)(r − (−2)). Multiplying both sides by −1/2 gives r − (−2) = −1/2, so r = −5/2."
  },
  {
    id: "alg-h88",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 4,
    prompt: "A delivery van can carry at most 750 pounds. It is loaded with small crates weighing 23 pounds each and large crates weighing 95 pounds each. Company policy requires that the number of small crates be at least 4 times the number of large crates. What is the maximum number of large crates that can be loaded?",
    choices: [
      "4",
      "7",
      "6",
      "5"
    ],
    answer: 0,
    explanation: "Let s be the number of small items and L the number of large crates. The constraints are 23s + 95L ≤ 750 and s ≥ 4L. To make L as large as possible, use the fewest small items allowed: s = 4L. Then 23(4L) + 95L ≤ 750, so 187L ≤ 750 and L ≤ 4.01. Since L must be a whole number, the maximum is 4."
  },
  {
    id: "alg-h89",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x + 5) + 2x = −4x + m<br><br>In the given equation, k and m are constants. If the equation has no solution, which of the following must be true?",
    choices: [
      "k = −6 and m = −30",
      "k = −4 and m ≠ −20",
      "k = −2 and m ≠ −10",
      "k = −6 and m ≠ −30"
    ],
    answer: 3,
    explanation: "Expanding the left side gives kx + 5k + 2x = (k + 2)x + 5k. A linear equation has no solution when the x-coefficients on both sides are equal but the constants are different. So k + 2 = −4, giving k = −6. With k = −6, the left constant is 5(−6) = −30, so m must not equal −30."
  },
  {
    id: "alg-h90",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "6x + 11y = 61<br>11x + 6y = 41<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "16",
      "36",
      "−24",
      "24"
    ],
    answer: 2,
    explanation: "Adding the equations gives 17x + 17y = 102, so x + y = 6. Subtracting the second from the first gives −5x + 5y = 20, so x − y = −4. Since x² − y² = (x + y)(x − y), the value is (6)(−4) = −24."
  },
  {
    id: "alg-h91",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope 5 passes through the points (k, −53) and (1, k), where k is a constant. What is the value of k?",
    choices: [
      "−12",
      "−8",
      "27",
      "−53"
    ],
    answer: 1,
    explanation: "Using the slope formula with the points (k, −53) and (1, k): (k − (−53))/(1 − k) = 5. Multiplying: k − (−53) = 5(1 − k). Collecting the k terms gives (1 + 5)k = −53 + 5(1), so k = −8."
  },
  {
    id: "alg-h92",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 72 liters of a solution that is 20% juice concentrate by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure concentrate, which brings the tank back to 72 liters of a solution that is 32% juice concentrate. What is the value of x?",
    choices: [
      "54/5",
      "216/17",
      "216/25",
      "27"
    ],
    answer: 0,
    explanation: "Track the juice concentrate. At first there are 0.2(72) = 72/5 liters. Draining x liters removes 0.2x liters of juice concentrate, and adding x liters of pure concentrate adds x liters. The final amount must be 0.32(72) = 576/25 liters: 72/5 − 0.2x + x = 576/25, so 0.8x = 216/25 and x = 54/5."
  },
  {
    id: "alg-h93",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(2x + 11)/5 ≤ x + 3<br>x < (−2x + 6)/2<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "4",
      "2",
      "5",
      "3"
    ],
    answer: 3,
    explanation: "First inequality: multiply by 5 to get 2x + 11 ≤ 5x + 15, so −3x ≤ 4. Dividing by the negative number −3 reverses the inequality: x ≥ −4/3. Second inequality: multiply by 2 to get 2x < −2x + 6, so 4x < 6 and x < 3/2. The integers with −4/3 ≤ x < 3/2 are −1 through 1, which is 3 integers."
  },
  {
    id: "alg-h94",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A parking garage offers two pricing options. Option A costs $22 per month, which includes the first 3 hours, plus $9 for each hour beyond 3. Option B costs $9 per month plus $7 for every hour used. For what number of hours in a month do the two options cost the same amount? (Assume more than 3 hours are used.)",
    choices: [
      "4",
      "10",
      "7",
      "1"
    ],
    answer: 2,
    explanation: "For u hours with u > 3, Option A costs 22 + 9(u − 3) dollars and Option B costs 9 + 7u dollars. Setting them equal: 22 + 9u − 27 = 9 + 7u, so 2u = 14 and u = 7."
  },
  {
    id: "alg-h95",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "−6x + 7y = 14<br>ax + by = −21<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a − b?",
    choices: [
      "−13",
      "39/2",
      "−3/2",
      "26/3"
    ],
    answer: 1,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is −21/14 = −3/2. So a = −3/2(−6) = 9 and b = −3/2(7) = −21/2, and a − b = 39/2."
  },
  {
    id: "alg-h96",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of x + 7y = −14 in the xy-plane is shifted up h units, where h is a positive constant. The x-intercept of the resulting graph is (−7, 0). What is the value of h?",
    choices: [
      "1",
      "7",
      "2",
      "8"
    ],
    answer: 0,
    explanation: "Shifting the graph up h units replaces y with y − h: x + 7(y − h) = −14. At the x-intercept y = 0, so 1(−7) + 7(−h) = −14, giving −7 − 7h = −14 and h = 1."
  },
  {
    id: "alg-h97",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(8) − f(4) = −16 and f(0) = 11. If f(k) = 51, what is the value of k?",
    choices: [
      "−5/2",
      "−31/2",
      "40",
      "−10"
    ],
    answer: 3,
    explanation: "The slope of f is [f(8) − f(4)]/(8 − 4) = −16/4 = −4. Since f(0) = 11, f(x) = −4x + 11. Then −4k + 11 = 51, so −4k = 40 and k = −10."
  },
  {
    id: "alg-h98",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "4x + 3y = 16<br>y = ax + b<br><br>In the given system, a and b are constants. The graph of y = ax + b passes through the point (6, −6), and the system has no solution. What is the value of b?",
    choices: [
      "−14",
      "16/3",
      "2",
      "−21/2"
    ],
    answer: 2,
    explanation: "A system of two linear equations has no solution when the lines are parallel and distinct. Solving 4x + 3y = 16 for y gives slope −4/3, so a = −4/3. Substituting (6, −6) into y = −4/3x + b: −6 = −4/3(6) + b, so b = 2. This line is distinct from the first because its y-intercept differs from 16/3."
  },
  {
    id: "alg-h99",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "Two runners on a straight trail start 88 meters apart and travel toward each other. The first travels at a constant 14 meters per minute, and the second, who starts 2 minutes later, travels at a constant 6 meters per minute. How many meters from the first one's starting point do they meet?",
    choices: [
      "62",
      "70",
      "42",
      "58"
    ],
    answer: 1,
    explanation: "Let t be the time the second one has been traveling when they meet. The first has traveled 14(t + 2) and the second 6t, and together they cover 88: 14(t + 2) + 6t = 88, so 20t + 28 = 88 and t = 3. The first one has traveled 14(5) = 70 meters."
  },
  {
    id: "alg-h100",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "(2/4)(10x + 16) + 56 = −3(10x + 16)<br><br>Which of the following is the value of 5x + 8 that satisfies the given equation?",
    choices: [
      "−8",
      "−16/5",
      "−16",
      "8"
    ],
    answer: 0,
    explanation: "Let w = 10x + 16, which is 2(5x + 8). The equation becomes (2/4)w + 56 = −3w, so (1/2 − (−3))w = −56, which gives w = −16. Then 5x + 8 = w/2 = −8. (Solving for x first also works, but it is slower: x = −16/5.)"
  },
  {
    id: "alg-h101",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "A food truck sold a total of 252 pizzas, some large at $28 each and the rest small at $17 each, for total revenue of $5,593. How many more dollars of revenue came from large pizzas than from small pizzas?",
    choices: [
      "−14",
      "1701",
      "1309",
      "1071"
    ],
    answer: 3,
    explanation: "Let a and s be the numbers of large and small pizzas. Then a + s = 252 and 28a + 17s = 5593. Substituting s = 252 − a: 28a + 17(252 − a) = 5593, so 11a = 1309 and a = 119, s = 133. Revenue from large pizzas is 28(119) = $3332, from small pizzas is 17(133) = $2261, a difference of $1071."
  },
  {
    id: "alg-h102",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The point (a, b) lies on the graph of 9x − 8y = −25 in the xy-plane. If b = 4a, what is the value of b?",
    choices: [
      "25/23",
      "−100/41",
      "100/23",
      "−100/23"
    ],
    answer: 2,
    explanation: "Substitute b = 4a into 9x − 8y = −25: 9a − 32a = −25, so −23a = −25 and a = 25/23. Then b = 4(25/23) = 100/23."
  },
  {
    id: "alg-h103",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y > 3x + 2<br>y < −x + c<br><br>In the given system of inequalities, c is a constant. If the point (−5, −12) is a solution to the system, what is the least possible integer value of c?",
    choices: [
      "−17",
      "−16",
      "−6",
      "−18"
    ],
    answer: 1,
    explanation: "The point satisfies the first inequality, since −12 > −13. For the second, substitute: −12 < −1(−5) + c, so −12 < 5 + c and c > −17. The least integer greater than −17 is −16."
  },
  {
    id: "alg-h104",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ is the perpendicular bisector of the segment with endpoints (−6, 3) and (2, −5). What is the y-coordinate of the y-intercept of line ℓ?",
    choices: [
      "1",
      "−3",
      "9",
      "−1"
    ],
    answer: 0,
    explanation: "The perpendicular bisector passes through the midpoint (−2, −1). The segment's slope is (−5 − 3)/(2 − (−6)) = −1, so line ℓ has slope 1. Then y − (−1) = (1)(x − (−2)). Setting x = 0 gives y = −1 − (1)(−2) = 1."
  },
  {
    id: "alg-h105",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−3) = −4f(2) and f(−5) = 18. What is the slope of the graph of y = f(x) in the xy-plane?",
    choices: [
      "3",
      "23",
      "−7",
      "−3"
    ],
    answer: 3,
    explanation: "Write f(x) = mx + b. The first condition gives −3m + b = −4(2m + b), so 5m = −5b. The second gives −5m + b = 18. Solving these two equations together gives m = −3 and b = 3, so the slope is −3. Check: f(−3) = 12 and f(2) = −3, and 12 = −4(−3)."
  },
  {
    id: "alg-h106",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + 2y = −24<br>9x + (k − 3)y = −36<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "6",
      "3",
      "−3",
      "18"
    ],
    answer: 2,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/9 = 2/(k − 3) gives k(k − 3) = 18, so k² − 3k − 18 = 0, which factors as (k − 6)(k + 3) = 0. So k = 6 or k = −3. If k = 6, the constants are in the same ratio as well (−24/−36 = 2/3), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = −3."
  },
  {
    id: "alg-h107",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a > 0. If f(f(x)) = 16x − 20 for all values of x, what is the value of f(4)?",
    choices: [
      "−20",
      "12",
      "44",
      "−4"
    ],
    answer: 1,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 16x − 20 gives a² = 16, so a = 4 (since a > 0), and (a + 1)b = −20, so 5b = −20 and b = −4. Thus f(x) = 4x − 4 and f(4) = 4(4) − 4 = 12."
  },
  {
    id: "alg-h108",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (3, 1) and is perpendicular to the graph of 5x − 3y = 5. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "14/3",
      "12/5",
      "4/3",
      "14/5"
    ],
    answer: 0,
    explanation: "Solving 5x − 3y = 5 for y shows its slope is 5/3. A perpendicular line has slope equal to the negative reciprocal, −3/5. Line ℓ is y − 1 = (−3/5)(x − 3). Setting y = 0 and x = r gives −1 = (−3/5)(r − 3). Multiplying both sides by −5/3 gives r − 3 = 5/3, so r = 14/3."
  },
  {
    id: "alg-h109",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 4,
    prompt: "A delivery van can carry at most 750 pounds. It is loaded with small crates weighing 35 pounds each and large crates weighing 92 pounds each. Company policy requires that the number of small crates be at least 2 times the number of large crates. What is the maximum number of large crates that can be loaded?",
    choices: [
      "8",
      "5",
      "3",
      "4"
    ],
    answer: 3,
    explanation: "Let s be the number of small items and L the number of large crates. The constraints are 35s + 92L ≤ 750 and s ≥ 2L. To make L as large as possible, use the fewest small items allowed: s = 2L. Then 35(2L) + 92L ≤ 750, so 162L ≤ 750 and L ≤ 4.63. Since L must be a whole number, the maximum is 4."
  },
  {
    id: "alg-h110",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x + 2) + 2x = −7x + m<br><br>In the given equation, k and m are constants. If the equation has infinitely many solutions, which of the following must be true?",
    choices: [
      "k = −9 and m ≠ −18",
      "k = −7 and m = −14",
      "k = −9 and m = −18",
      "k = −5 and m = −10"
    ],
    answer: 2,
    explanation: "Expanding the left side gives kx + 2k + 2x = (k + 2)x + 2k. A linear equation has infinitely many solutions when both the x-coefficients and the constants match. So k + 2 = −7, giving k = −9. With k = −9, the left constant is 2(−9) = −18, so m must equal −18."
  },
  {
    id: "alg-h111",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "13x + 7y = −108<br>7x + 13y = −132<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "16",
      "−48",
      "144",
      "48"
    ],
    answer: 1,
    explanation: "Adding the equations gives 20x + 20y = −240, so x + y = −12. Subtracting the second from the first gives 6x − 6y = 24, so x − y = 4. Since x² − y² = (x + y)(x − y), the value is (−12)(4) = −48."
  },
  {
    id: "alg-h112",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope −4 passes through the points (k, −20) and (1, k), where k is a constant. What is the value of k?",
    choices: [
      "8",
      "24/5",
      "21/2",
      "−20"
    ],
    answer: 0,
    explanation: "Using the slope formula with the points (k, −20) and (1, k): (k − (−20))/(1 − k) = −4. Multiplying: k − (−20) = −4(1 − k). Collecting the k terms gives (1 + (−4))k = −20 + (−4)(1), so k = 8."
  },
  {
    id: "alg-h113",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 24 liters of a solution that is 20% antifreeze by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure antifreeze, which brings the tank back to 24 liters of a solution that is 40% antifreeze. What is the value of x?",
    choices: [
      "8",
      "24/5",
      "12",
      "6"
    ],
    answer: 3,
    explanation: "Track the antifreeze. At first there are 0.2(24) = 24/5 liters. Draining x liters removes 0.2x liters of antifreeze, and adding x liters of pure antifreeze adds x liters. The final amount must be 0.4(24) = 48/5 liters: 24/5 − 0.2x + x = 48/5, so 0.8x = 24/5 and x = 6."
  },
  {
    id: "alg-h114",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(x + 8)/5 ≤ x + 3<br>x + 1 < (−3x + 16)/3<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "5",
      "3",
      "4",
      "6"
    ],
    answer: 2,
    explanation: "First inequality: multiply by 5 to get x + 8 ≤ 5x + 15, so −4x ≤ 7. Dividing by the negative number −4 reverses the inequality: x ≥ −7/4. Second inequality: multiply by 3 to get 3x + 3 < −3x + 16, so 6x < 13 and x < 13/6. The integers with −7/4 ≤ x < 13/6 are −1 through 2, which is 4 integers."
  },
  {
    id: "alg-h115",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A data plan offers two pricing options. Option A costs $22 per month, which includes the first 5 gigabytes, plus $5 for each gigabyte beyond 5. Option B costs $15 per month plus $3 for every gigabyte used. For what number of gigabytes in a month do the two options cost the same amount? (Assume more than 5 gigabytes are used.)",
    choices: [
      "4",
      "9",
      "14",
      "2"
    ],
    answer: 1,
    explanation: "For u gigabytes with u > 5, Option A costs 22 + 5(u − 5) dollars and Option B costs 15 + 3u dollars. Setting them equal: 22 + 5u − 25 = 15 + 3u, so 2u = 18 and u = 9."
  },
  {
    id: "alg-h116",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "−8x + 9y = 2<br>ax + by = 5<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a − b?",
    choices: [
      "−85/2",
      "−17",
      "5/2",
      "−34/5"
    ],
    answer: 0,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is 5/2 = 5/2. So a = 5/2(−8) = −20 and b = 5/2(9) = 45/2, and a − b = −85/2."
  },
  {
    id: "alg-h117",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of −2x − 6y = 28 in the xy-plane is shifted down h units, where h is a positive constant. The x-intercept of the resulting graph is (−20, 0). What is the value of h?",
    choices: [
      "12",
      "4",
      "8",
      "2"
    ],
    answer: 3,
    explanation: "Shifting the graph down h units replaces y with y + h: −2x − 6(y + h) = 28. At the x-intercept y = 0, so −2(−20) − 6(h) = 28, giving 40 − 6h = 28 and h = 2."
  },
  {
    id: "alg-h118",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(8) − f(6) = 6 and f(0) = −10. If f(k) = −22, what is the value of k?",
    choices: [
      "−2",
      "−32/3",
      "−4",
      "−12"
    ],
    answer: 2,
    explanation: "The slope of f is [f(8) − f(6)]/(8 − 6) = 6/2 = 3. Since f(0) = −10, f(x) = 3x − 10. Then 3k − 10 = −22, so 3k = −12 and k = −4."
  },
  {
    id: "alg-h119",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "−8x + 3y = −14<br>y = ax + b<br><br>In the given system, a and b are constants. The graph of y = ax + b passes through the point (−1, −3), and the system has no solution. What is the value of b?",
    choices: [
      "−17/3",
      "−1/3",
      "−14/3",
      "−27/8"
    ],
    answer: 1,
    explanation: "A system of two linear equations has no solution when the lines are parallel and distinct. Solving −8x + 3y = −14 for y gives slope 8/3, so a = 8/3. Substituting (−1, −3) into y = 8/3x + b: −3 = 8/3(−1) + b, so b = −1/3. This line is distinct from the first because its y-intercept differs from −14/3."
  },
  {
    id: "alg-h120",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "Two trains on parallel tracks start 375 kilometers apart and travel toward each other. The first travels at a constant 23 kilometers per hour, and the second, who starts 3 hours later, travels at a constant 28 kilometers per hour. How many kilometers from the first one's starting point do they meet?",
    choices: [
      "207",
      "169",
      "138",
      "123"
    ],
    answer: 0,
    explanation: "Let t be the time the second one has been traveling when they meet. The first has traveled 23(t + 3) and the second 28t, and together they cover 375: 23(t + 3) + 28t = 375, so 51t + 69 = 375 and t = 6. The first one has traveled 23(9) = 207 kilometers."
  },
  {
    id: "alg-h121",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "(1/2)(12x − 16) − 40 = 3(12x − 16)<br><br>Which of the following is the value of 3x − 4 that satisfies the given equation?",
    choices: [
      "0",
      "−16",
      "4",
      "−4"
    ],
    answer: 3,
    explanation: "Let w = 12x − 16, which is 4(3x − 4). The equation becomes (1/2)w − 40 = 3w, so (1/2 − 3)w = 40, which gives w = −16. Then 3x − 4 = w/4 = −4. (Solving for x first also works, but it is slower: x = 0.)"
  },
  {
    id: "alg-h122",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "A gym sold a total of 108 memberships, some premium at $11 each and the rest standard at $5 each, for total revenue of $1,026. How many more dollars of revenue came from premium memberships than from standard memberships?",
    choices: [
      "54",
      "−108",
      "756",
      "486"
    ],
    answer: 2,
    explanation: "Let a and s be the numbers of premium and standard memberships. Then a + s = 108 and 11a + 5s = 1026. Substituting s = 108 − a: 11a + 5(108 − a) = 1026, so 6a = 486 and a = 81, s = 27. Revenue from premium memberships is 11(81) = $891, from standard memberships is 5(27) = $135, a difference of $756."
  },
  {
    id: "alg-h123",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The point (a, b) lies on the graph of 8x − 7y = 14 in the xy-plane. If b = −a, what is the value of a + b?",
    choices: [
      "14/15",
      "0",
      "14",
      "1"
    ],
    answer: 1,
    explanation: "Substitute b = −a into 8x − 7y = 14: 8a + 7a = 14, so 15a = 14 and a = 14/15. Then b = −1(14/15) = −14/15, and a + b = 0."
  },
  {
    id: "alg-h124",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y > −2x + 1<br>y < −x + c<br><br>In the given system of inequalities, c is a constant. If the point (4, −5) is a solution to the system, what is the least possible integer value of c?",
    choices: [
      "0",
      "−1",
      "−8",
      "−2"
    ],
    answer: 0,
    explanation: "The point satisfies the first inequality, since −5 > −7. For the second, substitute: −5 < −1(4) + c, so −5 < −4 + c and c > −1. The least integer greater than −1 is 0."
  },
  {
    id: "alg-h125",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ is the perpendicular bisector of the segment with endpoints (8, −7) and (4, 7). What is the y-coordinate of the y-intercept of line ℓ?",
    choices: [
      "21",
      "12/7",
      "−65/7",
      "−12/7"
    ],
    answer: 3,
    explanation: "The perpendicular bisector passes through the midpoint (6, 0). The segment's slope is (7 − (−7))/(4 − 8) = −7/2, so line ℓ has slope 2/7. Then y − 0 = (2/7)(x − 6). Setting x = 0 gives y = 0 − (2/7)(6) = −12/7."
  },
  {
    id: "alg-h126",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(4) = −3f(−4) and f(3) = 20. What is the slope of the graph of y = f(x) in the xy-plane?",
    choices: [
      "8",
      "17",
      "4",
      "−4"
    ],
    answer: 2,
    explanation: "Write f(x) = mx + b. The first condition gives 4m + b = −3(−4m + b), so −8m = −4b. The second gives 3m + b = 20. Solving these two equations together gives m = 4 and b = 8, so the slope is 4. Check: f(4) = 24 and f(−4) = −8, and 24 = −3(−8)."
  },
  {
    id: "alg-h127",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + 7y = 3<br>x + (k − 6)y = −3<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "−1",
      "7",
      "6",
      "−7"
    ],
    answer: 1,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/1 = 7/(k − 6) gives k(k − 6) = 7, so k² − 6k − 7 = 0, which factors as (k − 7)(k + 1) = 0. So k = 7 or k = −1. If k = −1, the constants are in the same ratio as well (3/−3 = −1), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = 7."
  },
  {
    id: "alg-h128",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a > 0. If f(f(x)) = 4x − 3 for all values of x, what is the value of f(6)?",
    choices: [
      "11",
      "−13",
      "21",
      "9"
    ],
    answer: 0,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 4x − 3 gives a² = 4, so a = 2 (since a > 0), and (a + 1)b = −3, so 3b = −3 and b = −1. Thus f(x) = 2x − 1 and f(6) = 2(6) − 1 = 11."
  },
  {
    id: "alg-h129",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (4, −1) and is perpendicular to the graph of −7x + y = 9. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "29/7",
      "11",
      "−3/7",
      "−3"
    ],
    answer: 3,
    explanation: "Solving −7x + y = 9 for y shows its slope is 7. A perpendicular line has slope equal to the negative reciprocal, −1/7. Line ℓ is y − (−1) = (−1/7)(x − 4). Setting y = 0 and x = r gives 1 = (−1/7)(r − 4). Multiplying both sides by −7 gives r − 4 = −7, so r = −3."
  },
  {
    id: "alg-h130",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 4,
    prompt: "A storage shelf can hold at most 500 kilograms. It holds small bins weighing 24 kilograms each and large bins weighing 69 kilograms each. For balance, the number of small bins must be at least 2 times the number of large bins. What is the maximum number of large bins that can be loaded?",
    choices: [
      "7",
      "5",
      "4",
      "3"
    ],
    answer: 2,
    explanation: "Let s be the number of small items and L the number of large bins. The constraints are 24s + 69L ≤ 500 and s ≥ 2L. To make L as large as possible, use the fewest small items allowed: s = 2L. Then 24(2L) + 69L ≤ 500, so 117L ≤ 500 and L ≤ 4.27. Since L must be a whole number, the maximum is 4."
  },
  {
    id: "alg-h131",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x − 2) + 8x = 6x + m<br><br>In the given equation, k and m are constants. If the equation has infinitely many solutions, which of the following must be true?",
    choices: [
      "k = −2 and m ≠ 4",
      "k = −2 and m = 4",
      "k = 6 and m = −12",
      "k = 14 and m = −28"
    ],
    answer: 1,
    explanation: "Expanding the left side gives kx − 2k + 8x = (k + 8)x − 2k. A linear equation has infinitely many solutions when both the x-coefficients and the constants match. So k + 8 = 6, giving k = −2. With k = −2, the left constant is −2(−2) = 4, so m must equal 4."
  },
  {
    id: "alg-h132",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "9x + 5y = 11<br>5x + 9y = 31<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "−15",
      "25",
      "9",
      "15"
    ],
    answer: 0,
    explanation: "Adding the equations gives 14x + 14y = 42, so x + y = 3. Subtracting the second from the first gives 4x − 4y = −20, so x − y = −5. Since x² − y² = (x + y)(x − y), the value is (3)(−5) = −15."
  },
  {
    id: "alg-h133",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope 1/2 passes through the points (k, 1) and (4, k), where k is a constant. What is the value of k?",
    choices: [
      "−6",
      "3/2",
      "1",
      "2"
    ],
    answer: 3,
    explanation: "Using the slope formula with the points (k, 1) and (4, k): (k − 1)/(4 − k) = 1/2. Multiplying: k − 1 = 1/2(4 − k). Collecting the k terms gives (1 + 1/2)k = 1 + 1/2(4), so k = 2."
  },
  {
    id: "alg-h134",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 72 liters of a solution that is 10% juice concentrate by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure concentrate, which brings the tank back to 72 liters of a solution that is 22% juice concentrate. What is the value of x?",
    choices: [
      "144/13",
      "216/25",
      "48/5",
      "432/11"
    ],
    answer: 2,
    explanation: "Track the juice concentrate. At first there are 0.1(72) = 36/5 liters. Draining x liters removes 0.1x liters of juice concentrate, and adding x liters of pure concentrate adds x liters. The final amount must be 0.22(72) = 396/25 liters: 36/5 − 0.1x + x = 396/25, so 0.9x = 216/25 and x = 48/5."
  },
  {
    id: "alg-h135",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(−2x − 1)/3 ≤ x + 3<br>x − 1 < (−2x − 1)/2<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "4",
      "3",
      "2",
      "5"
    ],
    answer: 1,
    explanation: "First inequality: multiply by 3 to get −2x − 1 ≤ 3x + 9, so −5x ≤ 10. Dividing by the negative number −5 reverses the inequality: x ≥ −2. Second inequality: multiply by 2 to get 2x − 2 < −2x − 1, so 4x < 1 and x < 1/4. The integers with −2 ≤ x < 1/4 are −2 through 0, which is 3 integers."
  },
  {
    id: "alg-h136",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "An equipment rental offers two pricing options. Option A costs $22 per month, which includes the first 5 days, plus $7 for each day beyond 5. Option B costs $11 per month plus $4 for every day used. For what number of days in a month do the two options cost the same amount? (Assume more than 5 days are used.)",
    choices: [
      "8",
      "5",
      "3",
      "13"
    ],
    answer: 0,
    explanation: "For u days with u > 5, Option A costs 22 + 7(u − 5) dollars and Option B costs 11 + 4u dollars. Setting them equal: 22 + 7u − 35 = 11 + 4u, so 3u = 24 and u = 8."
  },
  {
    id: "alg-h137",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "4x − 9y = −4<br>ax + by = 6<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a + b?",
    choices: [
      "−5",
      "−39/2",
      "10/3",
      "15/2"
    ],
    answer: 3,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is 6/−4 = −3/2. So a = −3/2(4) = −6 and b = −3/2(−9) = 27/2, and a + b = 15/2."
  },
  {
    id: "alg-h138",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of −x + 8y = −10 in the xy-plane is shifted up h units, where h is a positive constant. The x-intercept of the resulting graph is (−6, 0). What is the value of h?",
    choices: [
      "16",
      "4",
      "2",
      "10"
    ],
    answer: 2,
    explanation: "Shifting the graph up h units replaces y with y − h: −x + 8(y − h) = −10. At the x-intercept y = 0, so −1(−6) + 8(−h) = −10, giving 6 − 8h = −10 and h = 2."
  },
  {
    id: "alg-h139",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(5) − f(3) = 6 and f(0) = −6. If f(k) = −42, what is the value of k?",
    choices: [
      "−6",
      "−12",
      "−16",
      "−36"
    ],
    answer: 1,
    explanation: "The slope of f is [f(5) − f(3)]/(5 − 3) = 6/2 = 3. Since f(0) = −6, f(x) = 3x − 6. Then 3k − 6 = −42, so 3k = −36 and k = −12."
  },
  {
    id: "alg-h140",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "−3x − 2y = 17<br>y = ax + b<br><br>In the given system, a and b are constants. The graph of y = ax + b passes through the point (1, 3), and the system has no solution. What is the value of b?",
    choices: [
      "9/2",
      "3/2",
      "−17/2",
      "7/3"
    ],
    answer: 0,
    explanation: "A system of two linear equations has no solution when the lines are parallel and distinct. Solving −3x − 2y = 17 for y gives slope −3/2, so a = −3/2. Substituting (1, 3) into y = −3/2x + b: 3 = −3/2(1) + b, so b = 9/2. This line is distinct from the first because its y-intercept differs from −17/2."
  },
  {
    id: "alg-h141",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "Two cyclists start 176 miles apart and travel toward each other. The first travels at a constant 20 miles per hour, and the second, who starts 2 hours later, travels at a constant 14 miles per hour. How many miles from the first one's starting point do they meet?",
    choices: [
      "104",
      "80",
      "92",
      "120"
    ],
    answer: 3,
    explanation: "Let t be the time the second one has been traveling when they meet. The first has traveled 20(t + 2) and the second 14t, and together they cover 176: 20(t + 2) + 14t = 176, so 34t + 40 = 176 and t = 4. The first one has traveled 20(6) = 120 miles."
  },
  {
    id: "alg-h142",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "(2/3)(14x − 14) + 2 = 14x − 14<br><br>Which of the following is the value of 7x − 7 that satisfies the given equation?",
    choices: [
      "10/7",
      "6",
      "3",
      "−3"
    ],
    answer: 2,
    explanation: "Let w = 14x − 14, which is 2(7x − 7). The equation becomes (2/3)w + 2 = w, so (2/3 − 1)w = −2, which gives w = 6. Then 7x − 7 = w/2 = 3. (Solving for x first also works, but it is slower: x = 10/7.)"
  },
  {
    id: "alg-h143",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "A school play sold a total of 218 tickets, some adult at $25 each and the rest student at $10 each, for total revenue of $3,875. How many more dollars of revenue came from adult tickets than from student tickets?",
    choices: [
      "8",
      "1775",
      "1495",
      "1695"
    ],
    answer: 1,
    explanation: "Let a and s be the numbers of adult and student tickets. Then a + s = 218 and 25a + 10s = 3875. Substituting s = 218 − a: 25a + 10(218 − a) = 3875, so 15a = 1695 and a = 113, s = 105. Revenue from adult tickets is 25(113) = $2825, from student tickets is 10(105) = $1050, a difference of $1775."
  },
  {
    id: "alg-h144",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The point (a, b) lies on the graph of x − 9y = −23 in the xy-plane. If b = 4a, what is the value of a?",
    choices: [
      "23/35",
      "92/35",
      "−23/37",
      "−23/35"
    ],
    answer: 0,
    explanation: "Substitute b = 4a into x − 9y = −23: a − 36a = −23, so −35a = −23 and a = 23/35. Then b = 4(23/35) = 92/35."
  },
  {
    id: "alg-h145",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y > 2x + 8<br>y < −3x + c<br><br>In the given system of inequalities, c is a constant. If the point (5, 20) is a solution to the system, what is the least possible integer value of c?",
    choices: [
      "35",
      "6",
      "34",
      "36"
    ],
    answer: 3,
    explanation: "The point satisfies the first inequality, since 20 > 18. For the second, substitute: 20 < −3(5) + c, so 20 < −15 + c and c > 35. The least integer greater than 35 is 36."
  },
  {
    id: "alg-h146",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ is the perpendicular bisector of the segment with endpoints (6, 5) and (−6, −7). What is the y-coordinate of the y-intercept of line ℓ?",
    choices: [
      "11",
      "1",
      "−1",
      "0"
    ],
    answer: 2,
    explanation: "The perpendicular bisector passes through the midpoint (0, −1). The segment's slope is (−7 − 5)/(−6 − 6) = 1, so line ℓ has slope −1. Then y − (−1) = (−1)(x − 0). Setting x = 0 gives y = −1 − (−1)(0) = −1."
  },
  {
    id: "alg-h147",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(3) = −5f(−1) and f(7) = −22. What is the slope of the graph of y = f(x) in the xy-plane?",
    choices: [
      "−1",
      "−3",
      "−29",
      "3"
    ],
    answer: 1,
    explanation: "Write f(x) = mx + b. The first condition gives 3m + b = −5(−m + b), so −2m = −6b. The second gives 7m + b = −22. Solving these two equations together gives m = −3 and b = −1, so the slope is −3. Check: f(3) = −10 and f(−1) = 2, and −10 = −5(2)."
  },
  {
    id: "alg-h148",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + 10y = 10<br>x + (k + 3)y = −2<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "2",
      "−5",
      "−3",
      "10"
    ],
    answer: 0,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/1 = 10/(k + 3) gives k(k + 3) = 10, so k² + 3k − 10 = 0, which factors as (k − 2)(k + 5) = 0. So k = 2 or k = −5. If k = −5, the constants are in the same ratio as well (10/−2 = −5), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = 2."
  },
  {
    id: "alg-h149",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a > 0. If f(f(x)) = 16x + 30 for all values of x, what is the value of f(6)?",
    choices: [
      "−18",
      "126",
      "54",
      "30"
    ],
    answer: 3,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 16x + 30 gives a² = 16, so a = 4 (since a > 0), and (a + 1)b = 30, so 5b = 30 and b = 6. Thus f(x) = 4x + 6 and f(6) = 4(6) + 6 = 30."
  },
  {
    id: "alg-h150",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (−5, −8) and is perpendicular to the graph of −4x + y = 11. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "−3",
      "27",
      "−37",
      "−37/4"
    ],
    answer: 2,
    explanation: "Solving −4x + y = 11 for y shows its slope is 4. A perpendicular line has slope equal to the negative reciprocal, −1/4. Line ℓ is y − (−8) = (−1/4)(x − (−5)). Setting y = 0 and x = r gives 8 = (−1/4)(r − (−5)). Multiplying both sides by −4 gives r − (−5) = −32, so r = −37."
  },
  {
    id: "alg-h151",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 4,
    prompt: "A delivery van can carry at most 650 pounds. It is loaded with small crates weighing 34 pounds each and large crates weighing 82 pounds each. Company policy requires that the number of small crates be at least 2 times the number of large crates. What is the maximum number of large crates that can be loaded?",
    choices: [
      "7",
      "4",
      "5",
      "3"
    ],
    answer: 1,
    explanation: "Let s be the number of small items and L the number of large crates. The constraints are 34s + 82L ≤ 650 and s ≥ 2L. To make L as large as possible, use the fewest small items allowed: s = 2L. Then 34(2L) + 82L ≤ 650, so 150L ≤ 650 and L ≤ 4.33. Since L must be a whole number, the maximum is 4."
  },
  {
    id: "alg-h152",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x + 2) + 7x = −6x + m<br><br>In the given equation, k and m are constants. If the equation has no solution, which of the following must be true?",
    choices: [
      "k = −13 and m ≠ −26",
      "k = −13 and m = −26",
      "k = −6 and m ≠ −12",
      "k = 1 and m ≠ 2"
    ],
    answer: 0,
    explanation: "Expanding the left side gives kx + 2k + 7x = (k + 7)x + 2k. A linear equation has no solution when the x-coefficients on both sides are equal but the constants are different. So k + 7 = −6, giving k = −13. With k = −13, the left constant is 2(−13) = −26, so m must not equal −26."
  },
  {
    id: "alg-h153",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "11x + 6y = 243<br>6x + 11y = 233<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "4",
      "784",
      "−56",
      "56"
    ],
    answer: 3,
    explanation: "Adding the equations gives 17x + 17y = 476, so x + y = 28. Subtracting the second from the first gives 5x − 5y = 10, so x − y = 2. Since x² − y² = (x + y)(x − y), the value is (28)(2) = 56."
  },
  {
    id: "alg-h154",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope −3 passes through the points (k, −32) and (−8, k), where k is a constant. What is the value of k?",
    choices: [
      "2",
      "12",
      "4",
      "−32"
    ],
    answer: 2,
    explanation: "Using the slope formula with the points (k, −32) and (−8, k): (k − (−32))/(−8 − k) = −3. Multiplying: k − (−32) = −3(−8 − k). Collecting the k terms gives (1 + (−3))k = −32 + (−3)(−8), so k = 4."
  },
  {
    id: "alg-h155",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 20 liters of a solution that is 25% acid by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure acid, which brings the tank back to 20 liters of a solution that is 45% acid. What is the value of x?",
    choices: [
      "80/11",
      "16/3",
      "4",
      "80/9"
    ],
    answer: 1,
    explanation: "Track the acid. At first there are 0.25(20) = 5 liters. Draining x liters removes 0.25x liters of acid, and adding x liters of pure acid adds x liters. The final amount must be 0.45(20) = 9 liters: 5 − 0.25x + x = 9, so 0.75x = 4 and x = 16/3."
  },
  {
    id: "alg-h156",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(−x − 6)/2 ≤ x + 5<br>x − 3 < (4x − 9)/5<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "11",
      "12",
      "10",
      "13"
    ],
    answer: 0,
    explanation: "First inequality: multiply by 2 to get −x − 6 ≤ 2x + 10, so −3x ≤ 16. Dividing by the negative number −3 reverses the inequality: x ≥ −16/3. Second inequality: multiply by 5 to get 5x − 15 < 4x − 9, so x < 6 and x < 6. The integers with −16/3 ≤ x < 6 are −5 through 5, which is 11 integers."
  },
  {
    id: "alg-h157",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A parking garage offers two pricing options. Option A costs $10 per month, which includes the first 3 hours, plus $4 for each hour beyond 3. Option B costs $10 per month plus $2 for every hour used. For what number of hours in a month do the two options cost the same amount? (Assume more than 3 hours are used.)",
    choices: [
      "0",
      "3",
      "9",
      "6"
    ],
    answer: 3,
    explanation: "For u hours with u > 3, Option A costs 10 + 4(u − 3) dollars and Option B costs 10 + 2u dollars. Setting them equal: 10 + 4u − 12 = 10 + 2u, so 2u = 12 and u = 6."
  },
  {
    id: "alg-h158",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "−7x + 2y = −6<br>ax + by = −4<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a + b?",
    choices: [
      "−5",
      "−6",
      "−10/3",
      "−15/2"
    ],
    answer: 2,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is −4/−6 = 2/3. So a = 2/3(−7) = −14/3 and b = 2/3(2) = 4/3, and a + b = −10/3."
  },
  {
    id: "alg-h159",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of −2x − y = −19 in the xy-plane is shifted down h units, where h is a positive constant. The x-intercept of the resulting graph is (6, 0). What is the value of h?",
    choices: [
      "14",
      "7",
      "8",
      "6"
    ],
    answer: 1,
    explanation: "Shifting the graph down h units replaces y with y + h: −2x − (y + h) = −19. At the x-intercept y = 0, so −2(6) − (h) = −19, giving −12 − h = −19 and h = 7."
  },
  {
    id: "alg-h160",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(2) − f(−2) = −16 and f(0) = 4. If f(k) = 40, what is the value of k?",
    choices: [
      "−9",
      "−9/4",
      "−11",
      "36"
    ],
    answer: 0,
    explanation: "The slope of f is [f(2) − f(−2)]/(2 − (−2)) = −16/4 = −4. Since f(0) = 4, f(x) = −4x + 4. Then −4k + 4 = 40, so −4k = 36 and k = −9."
  },
  {
    id: "alg-h161",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "4x − 9y = 2<br>y = ax + b<br><br>In the given system, a and b are constants. The graph of y = ax + b passes through the point (−2, −8), and the system has no solution. What is the value of b?",
    choices: [
      "−80/9",
      "−2/9",
      "−25/2",
      "−64/9"
    ],
    answer: 3,
    explanation: "A system of two linear equations has no solution when the lines are parallel and distinct. Solving 4x − 9y = 2 for y gives slope 4/9, so a = 4/9. Substituting (−2, −8) into y = 4/9x + b: −8 = 4/9(−2) + b, so b = −64/9. This line is distinct from the first because its y-intercept differs from −2/9."
  },
  {
    id: "alg-h162",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "Two trains on parallel tracks start 236 kilometers apart and travel toward each other. The first travels at a constant 23 kilometers per hour, and the second, who starts 2 hours later, travels at a constant 15 kilometers per hour. How many kilometers from the first one's starting point do they meet?",
    choices: [
      "143",
      "115",
      "161",
      "131"
    ],
    answer: 2,
    explanation: "Let t be the time the second one has been traveling when they meet. The first has traveled 23(t + 2) and the second 15t, and together they cover 236: 23(t + 2) + 15t = 236, so 38t + 46 = 236 and t = 5. The first one has traveled 23(7) = 161 kilometers."
  },
  {
    id: "alg-h163",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "(3/2)(6x + 6) − 36 = −3(6x + 6)<br><br>Which of the following is the value of 3x + 3 that satisfies the given equation?",
    choices: [
      "1/3",
      "4",
      "8",
      "−4"
    ],
    answer: 1,
    explanation: "Let w = 6x + 6, which is 2(3x + 3). The equation becomes (3/2)w − 36 = −3w, so (3/2 − (−3))w = 36, which gives w = 8. Then 3x + 3 = w/2 = 4. (Solving for x first also works, but it is slower: x = 1/3.)"
  },
  {
    id: "alg-h164",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "A food truck sold a total of 169 pizzas, some large at $25 each and the rest small at $17 each, for total revenue of $3,577. How many more dollars of revenue came from large pizzas than from small pizzas?",
    choices: [
      "823",
      "7",
      "529",
      "704"
    ],
    answer: 0,
    explanation: "Let a and s be the numbers of large and small pizzas. Then a + s = 169 and 25a + 17s = 3577. Substituting s = 169 − a: 25a + 17(169 − a) = 3577, so 8a = 704 and a = 88, s = 81. Revenue from large pizzas is 25(88) = $2200, from small pizzas is 17(81) = $1377, a difference of $823."
  },
  {
    id: "alg-h165",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The point (a, b) lies on the graph of 4x − 6y = −10 in the xy-plane. If b = −4a, what is the value of a?",
    choices: [
      "10/7",
      "1/2",
      "5/14",
      "−5/14"
    ],
    answer: 3,
    explanation: "Substitute b = −4a into 4x − 6y = −10: 4a + 24a = −10, so 28a = −10 and a = −5/14. Then b = −4(−5/14) = 10/7."
  },
  {
    id: "alg-h166",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y > −x + 8<br>y < −2x + c<br><br>In the given system of inequalities, c is a constant. If the point (−3, 12) is a solution to the system, what is the least possible integer value of c?",
    choices: [
      "6",
      "19",
      "7",
      "5"
    ],
    answer: 2,
    explanation: "The point satisfies the first inequality, since 12 > 11. For the second, substitute: 12 < −2(−3) + c, so 12 < 6 + c and c > 6. The least integer greater than 6 is 7."
  },
  {
    id: "alg-h167",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ is the perpendicular bisector of the segment with endpoints (8, −3) and (−6, 1). What is the y-coordinate of the y-intercept of line ℓ?",
    choices: [
      "−5/7",
      "−9/2",
      "5/2",
      "−31"
    ],
    answer: 1,
    explanation: "The perpendicular bisector passes through the midpoint (1, −1). The segment's slope is (1 − (−3))/(−6 − 8) = −2/7, so line ℓ has slope 7/2. Then y − (−1) = (7/2)(x − 1). Setting x = 0 gives y = −1 − (7/2)(1) = −9/2."
  },
  {
    id: "alg-h168",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−5) = −3f(5) and f(6) = 14. What is the slope of the graph of y = f(x) in the xy-plane?",
    choices: [
      "4",
      "−10",
      "8",
      "−4"
    ],
    answer: 0,
    explanation: "Write f(x) = mx + b. The first condition gives −5m + b = −3(5m + b), so 10m = −4b. The second gives 6m + b = 14. Solving these two equations together gives m = 4 and b = −10, so the slope is 4. Check: f(−5) = −30 and f(5) = 10, and −30 = −3(10)."
  },
  {
    id: "alg-h169",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + 6y = −2<br>2x + (k − 4)y = 2<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "−2",
      "4",
      "12",
      "6"
    ],
    answer: 3,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/2 = 6/(k − 4) gives k(k − 4) = 12, so k² − 4k − 12 = 0, which factors as (k − 6)(k + 2) = 0. So k = 6 or k = −2. If k = −2, the constants are in the same ratio as well (−2/2 = −1), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = 6."
  },
  {
    id: "alg-h170",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a > 0. If f(f(x)) = 25x − 48 for all values of x, what is the value of f(2)?",
    choices: [
      "−18",
      "−38",
      "2",
      "−14"
    ],
    answer: 2,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 25x − 48 gives a² = 25, so a = 5 (since a > 0), and (a + 1)b = −48, so 6b = −48 and b = −8. Thus f(x) = 5x − 8 and f(2) = 5(2) − 8 = 2."
  },
  {
    id: "alg-h171",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (−6, −7) and is perpendicular to the graph of −6x + 7y = 3. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "13/6",
      "−12",
      "0",
      "−14"
    ],
    answer: 1,
    explanation: "Solving −6x + 7y = 3 for y shows its slope is 6/7. A perpendicular line has slope equal to the negative reciprocal, −7/6. Line ℓ is y − (−7) = (−7/6)(x − (−6)). Setting y = 0 and x = r gives 7 = (−7/6)(r − (−6)). Multiplying both sides by −6/7 gives r − (−6) = −6, so r = −12."
  },
  {
    id: "alg-h172",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A freight elevator has a maximum load of 350 pounds. A crew loads it with toolboxes weighing 8 pounds each and generators weighing 45 pounds each. Safety rules require the number of toolboxes to be at least 3 times the number of generators. What is the maximum number of generators that can be loaded?",
    choices: [
      "5",
      "7",
      "6",
      "2"
    ],
    answer: 0,
    explanation: "Let s be the number of small items and L the number of generators. The constraints are 8s + 45L ≤ 350 and s ≥ 3L. To make L as large as possible, use the fewest small items allowed: s = 3L. Then 8(3L) + 45L ≤ 350, so 69L ≤ 350 and L ≤ 5.07. Since L must be a whole number, the maximum is 5."
  },
  {
    id: "alg-h173",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x − 6) + 8x = 12x + m<br><br>In the given equation, k and m are constants. If the equation has infinitely many solutions, which of the following must be true?",
    choices: [
      "k = 4 and m ≠ −24",
      "k = 12 and m = −72",
      "k = 20 and m = −120",
      "k = 4 and m = −24"
    ],
    answer: 3,
    explanation: "Expanding the left side gives kx − 6k + 8x = (k + 8)x − 6k. A linear equation has infinitely many solutions when both the x-coefficients and the constants match. So k + 8 = 12, giving k = 4. With k = 4, the left constant is −6(4) = −24, so m must equal −24."
  },
  {
    id: "alg-h174",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "14x + 9y = 37<br>9x + 14y = 147<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "484",
      "64",
      "−176",
      "176"
    ],
    answer: 2,
    explanation: "Adding the equations gives 23x + 23y = 184, so x + y = 8. Subtracting the second from the first gives 5x − 5y = −110, so x − y = −22. Since x² − y² = (x + y)(x − y), the value is (8)(−22) = −176."
  },
  {
    id: "alg-h175",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope −4 passes through the points (k, −23) and (1, k), where k is a constant. What is the value of k?",
    choices: [
      "27/5",
      "9",
      "12",
      "−23"
    ],
    answer: 1,
    explanation: "Using the slope formula with the points (k, −23) and (1, k): (k − (−23))/(1 − k) = −4. Multiplying: k − (−23) = −4(1 − k). Collecting the k terms gives (1 + (−4))k = −23 + (−4)(1), so k = 9."
  },
  {
    id: "alg-h176",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 50 liters of a solution that is 40% acid by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure acid, which brings the tank back to 50 liters of a solution that is 50% acid. What is the value of x?",
    choices: [
      "25/3",
      "10",
      "5",
      "6"
    ],
    answer: 0,
    explanation: "Track the acid. At first there are 0.4(50) = 20 liters. Draining x liters removes 0.4x liters of acid, and adding x liters of pure acid adds x liters. The final amount must be 0.5(50) = 25 liters: 20 − 0.4x + x = 25, so 0.6x = 5 and x = 25/3."
  },
  {
    id: "alg-h177",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(−x − 7)/3 ≤ x + 5<br>x + 1 < (−x + 5)/4<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "7",
      "5",
      "8",
      "6"
    ],
    answer: 3,
    explanation: "First inequality: multiply by 3 to get −x − 7 ≤ 3x + 15, so −4x ≤ 22. Dividing by the negative number −4 reverses the inequality: x ≥ −11/2. Second inequality: multiply by 4 to get 4x + 4 < −x + 5, so 5x < 1 and x < 1/5. The integers with −11/2 ≤ x < 1/5 are −5 through 0, which is 6 integers."
  },
  {
    id: "alg-h178",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "An equipment rental offers two pricing options. Option A costs $11 per month, which includes the first 2 days, plus $8 for each day beyond 2. Option B costs $11 per month plus $6 for every day used. For what number of days in a month do the two options cost the same amount? (Assume more than 2 days are used.)",
    choices: [
      "0",
      "6",
      "8",
      "10"
    ],
    answer: 2,
    explanation: "For u days with u > 2, Option A costs 11 + 8(u − 2) dollars and Option B costs 11 + 6u dollars. Setting them equal: 11 + 8u − 16 = 11 + 6u, so 2u = 16 and u = 8."
  },
  {
    id: "alg-h179",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "−6x − 9y = −8<br>ax + by = 12<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a − b?",
    choices: [
      "3",
      "−9/2",
      "45/2",
      "−2"
    ],
    answer: 1,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is 12/−8 = −3/2. So a = −3/2(−6) = 9 and b = −3/2(−9) = 27/2, and a − b = −9/2."
  },
  {
    id: "alg-h180",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of −4x − 8y = −16 in the xy-plane is shifted up h units, where h is a positive constant. The x-intercept of the resulting graph is (14, 0). What is the value of h?",
    choices: [
      "5",
      "40",
      "10",
      "13"
    ],
    answer: 0,
    explanation: "Shifting the graph up h units replaces y with y − h: −4x − 8(y − h) = −16. At the x-intercept y = 0, so −4(14) − 8(−h) = −16, giving −56 + 8h = −16 and h = 5."
  },
  {
    id: "alg-h181",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(10) − f(6) = 10 and f(0) = −4. If f(k) = 16, what is the value of k?",
    choices: [
      "2",
      "24/5",
      "20",
      "8"
    ],
    answer: 3,
    explanation: "The slope of f is [f(10) − f(6)]/(10 − 6) = 10/4 = 5/2. Since f(0) = −4, f(x) = 5/2x − 4. Then 5/2k − 4 = 16, so 5/2k = 20 and k = 8."
  },
  {
    id: "alg-h182",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "4x − 2y = 3<br>y = ax + b<br><br>In the given system, a and b are constants. The graph of y = ax + b passes through the point (6, −5), and the system has no solution. What is the value of b?",
    choices: [
      "7",
      "−3/2",
      "−17",
      "−2"
    ],
    answer: 2,
    explanation: "A system of two linear equations has no solution when the lines are parallel and distinct. Solving 4x − 2y = 3 for y gives slope 2, so a = 2. Substituting (6, −5) into y = 2x + b: −5 = 2(6) + b, so b = −17. This line is distinct from the first because its y-intercept differs from −3/2."
  },
  {
    id: "alg-h183",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "Two cyclists start 240 miles apart and travel toward each other. The first travels at a constant 25 miles per hour, and the second, who starts 3 hours later, travels at a constant 8 miles per hour. How many miles from the first one's starting point do they meet?",
    choices: [
      "182",
      "200",
      "125",
      "176"
    ],
    answer: 1,
    explanation: "Let t be the time the second one has been traveling when they meet. The first has traveled 25(t + 3) and the second 8t, and together they cover 240: 25(t + 3) + 8t = 240, so 33t + 75 = 240 and t = 5. The first one has traveled 25(8) = 200 miles."
  },
  {
    id: "alg-h184",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "(7/4)(24x + 4) − 36 = 24x + 4<br><br>Which of the following is the value of 6x + 1 that satisfies the given equation?",
    choices: [
      "12",
      "11/6",
      "48",
      "−12"
    ],
    answer: 0,
    explanation: "Let w = 24x + 4, which is 4(6x + 1). The equation becomes (7/4)w − 36 = w, so (7/4 − 1)w = 36, which gives w = 48. Then 6x + 1 = w/4 = 12. (Solving for x first also works, but it is slower: x = 11/6.)"
  },
  {
    id: "alg-h185",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "A school play sold a total of 86 tickets, some adult at $20 each and the rest student at $6 each, for total revenue of $936. How many more dollars of revenue came from adult tickets than from student tickets?",
    choices: [
      "−26",
      "940",
      "420",
      "264"
    ],
    answer: 3,
    explanation: "Let a and s be the numbers of adult and student tickets. Then a + s = 86 and 20a + 6s = 936. Substituting s = 86 − a: 20a + 6(86 − a) = 936, so 14a = 420 and a = 30, s = 56. Revenue from adult tickets is 20(30) = $600, from student tickets is 6(56) = $336, a difference of $264."
  },
  {
    id: "alg-h186",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The point (a, b) lies on the graph of 2x + 8y = 38 in the xy-plane. If b = 5a, what is the value of b?",
    choices: [
      "19/21",
      "−5",
      "95/21",
      "−95/21"
    ],
    answer: 2,
    explanation: "Substitute b = 5a into 2x + 8y = 38: 2a + 40a = 38, so 42a = 38 and a = 19/21. Then b = 5(19/21) = 95/21."
  },
  {
    id: "alg-h187",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y > 4x + 9<br>y < x + c<br><br>In the given system of inequalities, c is a constant. If the point (−4, −3) is a solution to the system, what is the least possible integer value of c?",
    choices: [
      "1",
      "2",
      "−6",
      "0"
    ],
    answer: 1,
    explanation: "The point satisfies the first inequality, since −3 > −7. For the second, substitute: −3 < 1(−4) + c, so −3 < −4 + c and c > 1. The least integer greater than 1 is 2."
  },
  {
    id: "alg-h188",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ is the perpendicular bisector of the segment with endpoints (−4, −7) and (−8, −5). What is the y-coordinate of the y-intercept of line ℓ?",
    choices: [
      "6",
      "−9",
      "−18",
      "1"
    ],
    answer: 0,
    explanation: "The perpendicular bisector passes through the midpoint (−6, −6). The segment's slope is (−5 − (−7))/(−8 − (−4)) = −1/2, so line ℓ has slope 2. Then y − (−6) = (2)(x − (−6)). Setting x = 0 gives y = −6 − (2)(−6) = 6."
  },
  {
    id: "alg-h189",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−1) = 5f(−5) and f(8) = −28. What is the slope of the graph of y = f(x) in the xy-plane?",
    choices: [
      "−12",
      "−36",
      "2",
      "−2"
    ],
    answer: 3,
    explanation: "Write f(x) = mx + b. The first condition gives −m + b = 5(−5m + b), so 24m = 4b. The second gives 8m + b = −28. Solving these two equations together gives m = −2 and b = −12, so the slope is −2. Check: f(−1) = −10 and f(−5) = −2, and −10 = 5(−2)."
  },
  {
    id: "alg-h190",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + 3y = −3<br>7x + (k + 4)y = −7<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "3",
      "−4",
      "−7",
      "21"
    ],
    answer: 2,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/7 = 3/(k + 4) gives k(k + 4) = 21, so k² + 4k − 21 = 0, which factors as (k − 3)(k + 7) = 0. So k = 3 or k = −7. If k = 3, the constants are in the same ratio as well (−3/−7 = 3/7), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = −7."
  },
  {
    id: "alg-h191",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a > 0. If f(f(x)) = 4x − 15 for all values of x, what is the value of f(−1)?",
    choices: [
      "−3",
      "−7",
      "−19",
      "−17"
    ],
    answer: 1,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 4x − 15 gives a² = 4, so a = 2 (since a > 0), and (a + 1)b = −15, so 3b = −15 and b = −5. Thus f(x) = 2x − 5 and f(−1) = 2(−1) − 5 = −7."
  },
  {
    id: "alg-h192",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (1, −5) and is perpendicular to the graph of −6x − 4y = 7. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "17/2",
      "−7/3",
      "−13/2",
      "−17/3"
    ],
    answer: 0,
    explanation: "Solving −6x − 4y = 7 for y shows its slope is −3/2. A perpendicular line has slope equal to the negative reciprocal, 2/3. Line ℓ is y − (−5) = (2/3)(x − 1). Setting y = 0 and x = r gives 5 = (2/3)(r − 1). Multiplying both sides by 3/2 gives r − 1 = 15/2, so r = 17/2."
  },
  {
    id: "alg-h193",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 4,
    prompt: "A storage shelf can hold at most 450 kilograms. It holds small bins weighing 30 kilograms each and large bins weighing 51 kilograms each. For balance, the number of small bins must be at least 3 times the number of large bins. What is the maximum number of large bins that can be loaded?",
    choices: [
      "8",
      "5",
      "4",
      "3"
    ],
    answer: 3,
    explanation: "Let s be the number of small items and L the number of large bins. The constraints are 30s + 51L ≤ 450 and s ≥ 3L. To make L as large as possible, use the fewest small items allowed: s = 3L. Then 30(3L) + 51L ≤ 450, so 141L ≤ 450 and L ≤ 3.19. Since L must be a whole number, the maximum is 3."
  },
  {
    id: "alg-h194",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x + 3) + x = 11x + m<br><br>In the given equation, k and m are constants. If the equation has infinitely many solutions, which of the following must be true?",
    choices: [
      "k = 10 and m ≠ 30",
      "k = 11 and m = 33",
      "k = 10 and m = 30",
      "k = 12 and m = 36"
    ],
    answer: 2,
    explanation: "Expanding the left side gives kx + 3k + x = (k + 1)x + 3k. A linear equation has infinitely many solutions when both the x-coefficients and the constants match. So k + 1 = 11, giving k = 10. With k = 10, the left constant is 3(10) = 30, so m must equal 30."
  },
  {
    id: "alg-h195",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "11x + 5y = −47<br>5x + 11y = 31<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "169",
      "13",
      "1",
      "−13"
    ],
    answer: 1,
    explanation: "Adding the equations gives 16x + 16y = −16, so x + y = −1. Subtracting the second from the first gives 6x − 6y = −78, so x − y = −13. Since x² − y² = (x + y)(x − y), the value is (−1)(−13) = 13."
  },
  {
    id: "alg-h196",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope −5 passes through the points (k, 66) and (6, k), where k is a constant. What is the value of k?",
    choices: [
      "−9",
      "−6",
      "−30",
      "66"
    ],
    answer: 0,
    explanation: "Using the slope formula with the points (k, 66) and (6, k): (k − 66)/(6 − k) = −5. Multiplying: k − 66 = −5(6 − k). Collecting the k terms gives (1 + (−5))k = 66 + (−5)(6), so k = −9."
  },
  {
    id: "alg-h197",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 40 liters of a solution that is 40% acid by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure acid, which brings the tank back to 40 liters of a solution that is 55% acid. What is the value of x?",
    choices: [
      "40/3",
      "6",
      "120/11",
      "10"
    ],
    answer: 3,
    explanation: "Track the acid. At first there are 0.4(40) = 16 liters. Draining x liters removes 0.4x liters of acid, and adding x liters of pure acid adds x liters. The final amount must be 0.55(40) = 22 liters: 16 − 0.4x + x = 22, so 0.6x = 6 and x = 10."
  },
  {
    id: "alg-h198",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(−3x + 11)/2 ≤ x + 1<br>x − 6 < (−3x + 8)/3<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "4",
      "2",
      "3",
      "5"
    ],
    answer: 2,
    explanation: "First inequality: multiply by 2 to get −3x + 11 ≤ 2x + 2, so −5x ≤ −9. Dividing by the negative number −5 reverses the inequality: x ≥ 9/5. Second inequality: multiply by 3 to get 3x − 18 < −3x + 8, so 6x < 26 and x < 13/3. The integers with 9/5 ≤ x < 13/3 are 2 through 4, which is 3 integers."
  },
  {
    id: "alg-h199",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A data plan offers two pricing options. Option A costs $12 per month, which includes the first 4 gigabytes, plus $8 for each gigabyte beyond 4. Option B costs $4 per month plus $6 for every gigabyte used. For what number of gigabytes in a month do the two options cost the same amount? (Assume more than 4 gigabytes are used.)",
    choices: [
      "−4",
      "12",
      "8",
      "16"
    ],
    answer: 1,
    explanation: "For u gigabytes with u > 4, Option A costs 12 + 8(u − 4) dollars and Option B costs 4 + 6u dollars. Setting them equal: 12 + 8u − 32 = 4 + 6u, so 2u = 24 and u = 12."
  },
  {
    id: "alg-h200",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "4x + y = 8<br>ax + by = 10<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a + b?",
    choices: [
      "25/4",
      "5",
      "15/4",
      "4"
    ],
    answer: 0,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is 10/8 = 5/4. So a = 5/4(4) = 5 and b = 5/4(1) = 5/4, and a + b = 25/4."
  },
  {
    id: "alg-h201",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of 2x + 2y = 24 in the xy-plane is shifted up h units, where h is a positive constant. The x-intercept of the resulting graph is (13, 0). What is the value of h?",
    choices: [
      "2",
      "3",
      "0",
      "1"
    ],
    answer: 3,
    explanation: "Shifting the graph up h units replaces y with y − h: 2x + 2(y − h) = 24. At the x-intercept y = 0, so 2(13) + 2(−h) = 24, giving 26 − 2h = 24 and h = 1."
  },
  {
    id: "alg-h202",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(4) − f(−2) = 15 and f(0) = −7. If f(k) = −37, what is the value of k?",
    choices: [
      "−2",
      "−88/5",
      "−12",
      "−30"
    ],
    answer: 2,
    explanation: "The slope of f is [f(4) − f(−2)]/(4 − (−2)) = 15/6 = 5/2. Since f(0) = −7, f(x) = 5/2x − 7. Then 5/2k − 7 = −37, so 5/2k = −30 and k = −12."
  },
  {
    id: "alg-h203",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "2x − 6y = −13<br>y = ax + b<br><br>In the given system, a and b are constants. The graph of y = ax + b passes through the point (−5, −9), and the system has no solution. What is the value of b?",
    choices: [
      "−32/3",
      "−22/3",
      "13/6",
      "−24"
    ],
    answer: 1,
    explanation: "A system of two linear equations has no solution when the lines are parallel and distinct. Solving 2x − 6y = −13 for y gives slope 1/3, so a = 1/3. Substituting (−5, −9) into y = 1/3x + b: −9 = 1/3(−5) + b, so b = −22/3. This line is distinct from the first because its y-intercept differs from 13/6."
  },
  {
    id: "alg-h204",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "Two runners on a straight trail start 296 meters apart and travel toward each other. The first travels at a constant 16 meters per minute, and the second, who starts 2 minutes later, travels at a constant 28 meters per minute. How many meters from the first one's starting point do they meet?",
    choices: [
      "128",
      "108",
      "96",
      "72"
    ],
    answer: 0,
    explanation: "Let t be the time the second one has been traveling when they meet. The first has traveled 16(t + 2) and the second 28t, and together they cover 296: 16(t + 2) + 28t = 296, so 44t + 32 = 296 and t = 6. The first one has traveled 16(8) = 128 meters."
  },
  {
    id: "alg-h205",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "(2/5)(15x − 12) − 24 = 2(15x − 12)<br><br>Which of the following is the value of 5x − 4 that satisfies the given equation?",
    choices: [
      "−1/5",
      "−15",
      "5",
      "−5"
    ],
    answer: 3,
    explanation: "Let w = 15x − 12, which is 3(5x − 4). The equation becomes (2/5)w − 24 = 2w, so (2/5 − 2)w = 24, which gives w = −15. Then 5x − 4 = w/3 = −5. (Solving for x first also works, but it is slower: x = −1/5.)"
  },
  {
    id: "alg-h206",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "A gym sold a total of 166 memberships, some premium at $30 each and the rest standard at $14 each, for total revenue of $4,436. How many more dollars of revenue came from premium memberships than from standard memberships?",
    choices: [
      "98",
      "−828",
      "3484",
      "2112"
    ],
    answer: 2,
    explanation: "Let a and s be the numbers of premium and standard memberships. Then a + s = 166 and 30a + 14s = 4436. Substituting s = 166 − a: 30a + 14(166 − a) = 4436, so 16a = 2112 and a = 132, s = 34. Revenue from premium memberships is 30(132) = $3960, from standard memberships is 14(34) = $476, a difference of $3484."
  },
  {
    id: "alg-h207",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The point (a, b) lies on the graph of 7x − 5y = 9 in the xy-plane. If b = a, what is the value of a?",
    choices: [
      "3/4",
      "9/2",
      "−9/2",
      "11/2"
    ],
    answer: 1,
    explanation: "Substitute b = a into 7x − 5y = 9: 7a − 5a = 9, so 2a = 9 and a = 9/2. Then b = 1(9/2) = 9/2."
  },
  {
    id: "alg-h208",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y > 2x − 7<br>y < 3x + c<br><br>In the given system of inequalities, c is a constant. If the point (−4, −10) is a solution to the system, what is the least possible integer value of c?",
    choices: [
      "3",
      "2",
      "−21",
      "1"
    ],
    answer: 0,
    explanation: "The point satisfies the first inequality, since −10 > −15. For the second, substitute: −10 < 3(−4) + c, so −10 < −12 + c and c > 2. The least integer greater than 2 is 3."
  },
  {
    id: "alg-h209",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ is the perpendicular bisector of the segment with endpoints (7, −3) and (−5, −1). What is the y-coordinate of the y-intercept of line ℓ?",
    choices: [
      "−11/6",
      "4",
      "−45",
      "−8"
    ],
    answer: 3,
    explanation: "The perpendicular bisector passes through the midpoint (1, −2). The segment's slope is (−1 − (−3))/(−5 − 7) = −1/6, so line ℓ has slope 6. Then y − (−2) = (6)(x − 1). Setting x = 0 gives y = −2 − (6)(1) = −8."
  },
  {
    id: "alg-h210",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−1) = −5f(1) and f(7) = −38. What is the slope of the graph of y = f(x) in the xy-plane?",
    choices: [
      "4",
      "−45",
      "−6",
      "6"
    ],
    answer: 2,
    explanation: "Write f(x) = mx + b. The first condition gives −m + b = −5(m + b), so 4m = −6b. The second gives 7m + b = −38. Solving these two equations together gives m = −6 and b = 4, so the slope is −6. Check: f(−1) = 10 and f(1) = −2, and 10 = −5(−2)."
  },
  {
    id: "alg-h211",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + 4y = 12<br>5x + (k − 1)y = −15<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "−4",
      "5",
      "1",
      "20"
    ],
    answer: 1,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/5 = 4/(k − 1) gives k(k − 1) = 20, so k² − k − 20 = 0, which factors as (k − 5)(k + 4) = 0. So k = 5 or k = −4. If k = −4, the constants are in the same ratio as well (12/−15 = −4/5), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = 5."
  },
  {
    id: "alg-h212",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a > 0. If f(f(x)) = 4x + 27 for all values of x, what is the value of f(3)?",
    choices: [
      "15",
      "3",
      "39",
      "33"
    ],
    answer: 0,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 4x + 27 gives a² = 4, so a = 2 (since a > 0), and (a + 1)b = 27, so 3b = 27 and b = 9. Thus f(x) = 2x + 9 and f(3) = 2(3) + 9 = 15."
  },
  {
    id: "alg-h213",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (−6, −8) and is perpendicular to the graph of 5x + 7y = −4. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "−86/5",
      "−82/7",
      "2/5",
      "−2/7"
    ],
    answer: 3,
    explanation: "Solving 5x + 7y = −4 for y shows its slope is −5/7. A perpendicular line has slope equal to the negative reciprocal, 7/5. Line ℓ is y − (−8) = (7/5)(x − (−6)). Setting y = 0 and x = r gives 8 = (7/5)(r − (−6)). Multiplying both sides by 5/7 gives r − (−6) = 40/7, so r = −2/7."
  },
  {
    id: "alg-h214",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A freight elevator has a maximum load of 750 pounds. A crew loads it with toolboxes weighing 28 pounds each and generators weighing 118 pounds each. Safety rules require the number of toolboxes to be at least 2 times the number of generators. What is the maximum number of generators that can be loaded?",
    choices: [
      "6",
      "5",
      "4",
      "2"
    ],
    answer: 2,
    explanation: "Let s be the number of small items and L the number of generators. The constraints are 28s + 118L ≤ 750 and s ≥ 2L. To make L as large as possible, use the fewest small items allowed: s = 2L. Then 28(2L) + 118L ≤ 750, so 174L ≤ 750 and L ≤ 4.31. Since L must be a whole number, the maximum is 4."
  },
  {
    id: "alg-h215",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x − 3) − 2x = 8x + m<br><br>In the given equation, k and m are constants. If the equation has infinitely many solutions, which of the following must be true?",
    choices: [
      "k = 10 and m ≠ −30",
      "k = 10 and m = −30",
      "k = 8 and m = −24",
      "k = 6 and m = −18"
    ],
    answer: 1,
    explanation: "Expanding the left side gives kx − 3k − 2x = (k − 2)x − 3k. A linear equation has infinitely many solutions when both the x-coefficients and the constants match. So k − 2 = 8, giving k = 10. With k = 10, the left constant is −3(10) = −30, so m must equal −30."
  },
  {
    id: "alg-h216",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "13x + 6y = 110<br>6x + 13y = 61<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "63",
      "49",
      "81",
      "−63"
    ],
    answer: 0,
    explanation: "Adding the equations gives 19x + 19y = 171, so x + y = 9. Subtracting the second from the first gives 7x − 7y = 49, so x − y = 7. Since x² − y² = (x + y)(x − y), the value is (9)(7) = 63."
  },
  {
    id: "alg-h217",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope −3 passes through the points (k, −34) and (−8, k), where k is a constant. What is the value of k?",
    choices: [
      "5/2",
      "13",
      "−34",
      "5"
    ],
    answer: 3,
    explanation: "Using the slope formula with the points (k, −34) and (−8, k): (k − (−34))/(−8 − k) = −3. Multiplying: k − (−34) = −3(−8 − k). Collecting the k terms gives (1 + (−3))k = −34 + (−3)(−8), so k = 5."
  },
  {
    id: "alg-h218",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 60 liters of a solution that is 10% antifreeze by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure antifreeze, which brings the tank back to 60 liters of a solution that is 22% antifreeze. What is the value of x?",
    choices: [
      "120/13",
      "36/5",
      "8",
      "360/11"
    ],
    answer: 2,
    explanation: "Track the antifreeze. At first there are 0.1(60) = 6 liters. Draining x liters removes 0.1x liters of antifreeze, and adding x liters of pure antifreeze adds x liters. The final amount must be 0.22(60) = 66/5 liters: 6 − 0.1x + x = 66/5, so 0.9x = 36/5 and x = 8."
  },
  {
    id: "alg-h219",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(−3x + 7)/5 ≤ x + 1<br>x − 6 < (2x − 4)/4<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "10",
      "9",
      "8",
      "11"
    ],
    answer: 1,
    explanation: "First inequality: multiply by 5 to get −3x + 7 ≤ 5x + 5, so −8x ≤ −2. Dividing by the negative number −8 reverses the inequality: x ≥ 1/4. Second inequality: multiply by 4 to get 4x − 24 < 2x − 4, so 2x < 20 and x < 10. The integers with 1/4 ≤ x < 10 are 1 through 9, which is 9 integers."
  },
  {
    id: "alg-h220",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A data plan offers two pricing options. Option A costs $21 per month, which includes the first 5 gigabytes, plus $7 for each gigabyte beyond 5. Option B costs $4 per month plus $5 for every gigabyte used. For what number of gigabytes in a month do the two options cost the same amount? (Assume more than 5 gigabytes are used.)",
    choices: [
      "9",
      "4",
      "14",
      "2"
    ],
    answer: 0,
    explanation: "For u gigabytes with u > 5, Option A costs 21 + 7(u − 5) dollars and Option B costs 4 + 5u dollars. Setting them equal: 21 + 7u − 35 = 4 + 5u, so 2u = 18 and u = 9."
  },
  {
    id: "alg-h221",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "8x − 6y = −10<br>ax + by = −25<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a + b?",
    choices: [
      "2",
      "35",
      "4/5",
      "5"
    ],
    answer: 3,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is −25/−10 = 5/2. So a = 5/2(8) = 20 and b = 5/2(−6) = −15, and a + b = 5."
  },
  {
    id: "alg-h222",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of 4x − y = −2 in the xy-plane is shifted up h units, where h is a positive constant. The x-intercept of the resulting graph is (−2, 0). What is the value of h?",
    choices: [
      "12",
      "7",
      "6",
      "5"
    ],
    answer: 2,
    explanation: "Shifting the graph up h units replaces y with y − h: 4x − (y − h) = −2. At the x-intercept y = 0, so 4(−2) − (−h) = −2, giving −8 + h = −2 and h = 6."
  },
  {
    id: "alg-h223",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(9) − f(6) = −12 and f(0) = 2. If f(k) = 46, what is the value of k?",
    choices: [
      "−11/3",
      "−11",
      "−12",
      "44"
    ],
    answer: 1,
    explanation: "The slope of f is [f(9) − f(6)]/(9 − 6) = −12/3 = −4. Since f(0) = 2, f(x) = −4x + 2. Then −4k + 2 = 46, so −4k = 44 and k = −11."
  },
  {
    id: "alg-h224",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "−4x + 8y = −3<br>y = ax + b<br><br>In the given system, a and b are constants. The graph of y = ax + b passes through the point (−2, 8), and the system has no solution. What is the value of b?",
    choices: [
      "9",
      "7",
      "−3/8",
      "4"
    ],
    answer: 0,
    explanation: "A system of two linear equations has no solution when the lines are parallel and distinct. Solving −4x + 8y = −3 for y gives slope 1/2, so a = 1/2. Substituting (−2, 8) into y = 1/2x + b: 8 = 1/2(−2) + b, so b = 9. This line is distinct from the first because its y-intercept differs from −3/8."
  },
  {
    id: "alg-h225",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "Two trains on parallel tracks start 168 kilometers apart and travel toward each other. The first travels at a constant 12 kilometers per hour, and the second, who starts 3 hours later, travels at a constant 21 kilometers per hour. How many kilometers from the first one's starting point do they meet?",
    choices: [
      "61",
      "48",
      "21",
      "84"
    ],
    answer: 3,
    explanation: "Let t be the time the second one has been traveling when they meet. The first has traveled 12(t + 3) and the second 21t, and together they cover 168: 12(t + 3) + 21t = 168, so 33t + 36 = 168 and t = 4. The first one has traveled 12(7) = 84 kilometers."
  },
  {
    id: "alg-h226",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "(7/5)(8x − 8) + 96 = 3(8x − 8)<br><br>Which of the following is the value of 4x − 4 that satisfies the given equation?",
    choices: [
      "17/2",
      "60",
      "30",
      "−30"
    ],
    answer: 2,
    explanation: "Let w = 8x − 8, which is 2(4x − 4). The equation becomes (7/5)w + 96 = 3w, so (7/5 − 3)w = −96, which gives w = 60. Then 4x − 4 = w/2 = 30. (Solving for x first also works, but it is slower: x = 17/2.)"
  },
  {
    id: "alg-h227",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "A food truck sold a total of 192 pizzas, some large at $20 each and the rest small at $12 each, for total revenue of $2,896. How many more dollars of revenue came from large pizzas than from small pizzas?",
    choices: [
      "−44",
      "64",
      "1472",
      "592"
    ],
    answer: 1,
    explanation: "Let a and s be the numbers of large and small pizzas. Then a + s = 192 and 20a + 12s = 2896. Substituting s = 192 − a: 20a + 12(192 − a) = 2896, so 8a = 592 and a = 74, s = 118. Revenue from large pizzas is 20(74) = $1480, from small pizzas is 12(118) = $1416, a difference of $64."
  },
  {
    id: "alg-h228",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The point (a, b) lies on the graph of 4x − 7y = −12 in the xy-plane. If b = −2a, what is the value of a + b?",
    choices: [
      "2/3",
      "−2/3",
      "6/5",
      "4"
    ],
    answer: 0,
    explanation: "Substitute b = −2a into 4x − 7y = −12: 4a + 14a = −12, so 18a = −12 and a = −2/3. Then b = −2(−2/3) = 4/3, and a + b = 2/3."
  },
  {
    id: "alg-h229",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y > 2x + 3<br>y < −x + c<br><br>In the given system of inequalities, c is a constant. If the point (−5, −5) is a solution to the system, what is the least possible integer value of c?",
    choices: [
      "−10",
      "1",
      "−11",
      "−9"
    ],
    answer: 3,
    explanation: "The point satisfies the first inequality, since −5 > −7. For the second, substitute: −5 < −1(−5) + c, so −5 < 5 + c and c > −10. The least integer greater than −10 is −9."
  },
  {
    id: "alg-h230",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ is the perpendicular bisector of the segment with endpoints (−4, 3) and (−6, 5). What is the y-coordinate of the y-intercept of line ℓ?",
    choices: [
      "−1",
      "7",
      "9",
      "−9"
    ],
    answer: 2,
    explanation: "The perpendicular bisector passes through the midpoint (−5, 4). The segment's slope is (5 − 3)/(−6 − (−4)) = −1, so line ℓ has slope 1. Then y − 4 = (1)(x − (−5)). Setting x = 0 gives y = 4 − (1)(−5) = 9."
  },
  {
    id: "alg-h231",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−4) = 2f(−1) and f(−3) = −5. What is the value of f(0)?",
    choices: [
      "1",
      "−2",
      "0",
      "−1"
    ],
    answer: 1,
    explanation: "Write f(x) = mx + b. The first condition gives −4m + b = 2(−m + b), so −2m = b. The second gives −3m + b = −5. Solving these two equations together gives m = 1 and b = −2, so f(0) = b = −2. Check: f(−4) = −6 and f(−1) = −3, and −6 = 2(−3)."
  },
  {
    id: "alg-h232",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + 3y = 4<br>2x + (k + 1)y = 4<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "−3",
      "2",
      "−1",
      "6"
    ],
    answer: 0,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/2 = 3/(k + 1) gives k(k + 1) = 6, so k² + k − 6 = 0, which factors as (k − 2)(k + 3) = 0. So k = 2 or k = −3. If k = 2, the constants are in the same ratio as well (4/4 = 1), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = −3."
  },
  {
    id: "alg-h233",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a > 0. If f(f(x)) = 25x + 54 for all values of x, what is the value of f(−3)?",
    choices: [
      "24",
      "−21",
      "39",
      "−6"
    ],
    answer: 3,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 25x + 54 gives a² = 25, so a = 5 (since a > 0), and (a + 1)b = 54, so 6b = 54 and b = 9. Thus f(x) = 5x + 9 and f(−3) = 5(−3) + 9 = −6."
  },
  {
    id: "alg-h234",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (−3, 7) and is perpendicular to the graph of −6x + 4y = 2. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "−23/3",
      "−27/2",
      "15/2",
      "5"
    ],
    answer: 2,
    explanation: "Solving −6x + 4y = 2 for y shows its slope is 3/2. A perpendicular line has slope equal to the negative reciprocal, −2/3. Line ℓ is y − 7 = (−2/3)(x − (−3)). Setting y = 0 and x = r gives −7 = (−2/3)(r − (−3)). Multiplying both sides by −3/2 gives r − (−3) = 21/2, so r = 15/2."
  },
  {
    id: "alg-h235",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 4,
    prompt: "A storage shelf can hold at most 450 kilograms. It holds small bins weighing 15 kilograms each and large bins weighing 115 kilograms each. For balance, the number of small bins must be at least 4 times the number of large bins. What is the maximum number of large bins that can be loaded?",
    choices: [
      "3",
      "2",
      "0",
      "1"
    ],
    answer: 1,
    explanation: "Let s be the number of small items and L the number of large bins. The constraints are 15s + 115L ≤ 450 and s ≥ 4L. To make L as large as possible, use the fewest small items allowed: s = 4L. Then 15(4L) + 115L ≤ 450, so 175L ≤ 450 and L ≤ 2.57. Since L must be a whole number, the maximum is 2."
  },
  {
    id: "alg-h236",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x − 4) + 5x = −3x + m<br><br>In the given equation, k and m are constants. If the equation has no solution, which of the following must be true?",
    choices: [
      "k = −8 and m ≠ 32",
      "k = −8 and m = 32",
      "k = −3 and m ≠ 12",
      "k = 2 and m ≠ −8"
    ],
    answer: 0,
    explanation: "Expanding the left side gives kx − 4k + 5x = (k + 5)x − 4k. A linear equation has no solution when the x-coefficients on both sides are equal but the constants are different. So k + 5 = −3, giving k = −8. With k = −8, the left constant is −4(−8) = 32, so m must not equal 32."
  },
  {
    id: "alg-h237",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "5x + 9y = 52<br>9x + 5y = 4<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "144",
      "16",
      "48",
      "−48"
    ],
    answer: 3,
    explanation: "Adding the equations gives 14x + 14y = 56, so x + y = 4. Subtracting the second from the first gives −4x + 4y = 48, so x − y = −12. Since x² − y² = (x + y)(x − y), the value is (4)(−12) = −48."
  },
  {
    id: "alg-h238",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope −2 passes through the points (k, 3) and (6, k), where k is a constant. What is the value of k?",
    choices: [
      "3",
      "3/2",
      "9",
      "11"
    ],
    answer: 2,
    explanation: "Using the slope formula with the points (k, 3) and (6, k): (k − 3)/(6 − k) = −2. Multiplying: k − 3 = −2(6 − k). Collecting the k terms gives (1 + (−2))k = 3 + (−2)(6), so k = 9."
  },
  {
    id: "alg-h239",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 36 liters of a solution that is 25% antifreeze by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure antifreeze, which brings the tank back to 36 liters of a solution that is 37% antifreeze. What is the value of x?",
    choices: [
      "48/7",
      "144/25",
      "108/25",
      "432/37"
    ],
    answer: 1,
    explanation: "Track the antifreeze. At first there are 0.25(36) = 9 liters. Draining x liters removes 0.25x liters of antifreeze, and adding x liters of pure antifreeze adds x liters. The final amount must be 0.37(36) = 333/25 liters: 9 − 0.25x + x = 333/25, so 0.75x = 108/25 and x = 144/25."
  },
  {
    id: "alg-h240",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(−2x)/4 ≤ x + 5<br>x + 6 < (2x + 19)/3<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "4",
      "5",
      "3",
      "6"
    ],
    answer: 0,
    explanation: "First inequality: multiply by 4 to get −2x ≤ 4x + 20, so −6x ≤ 20. Dividing by the negative number −6 reverses the inequality: x ≥ −10/3. Second inequality: multiply by 3 to get 3x + 18 < 2x + 19, so x < 1 and x < 1. The integers with −10/3 ≤ x < 1 are −3 through 0, which is 4 integers."
  },
  {
    id: "alg-h241",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "An equipment rental offers two pricing options. Option A costs $14 per month, which includes the first 6 days, plus $9 for each day beyond 6. Option B costs $12 per month plus $7 for every day used. For what number of days in a month do the two options cost the same amount? (Assume more than 6 days are used.)",
    choices: [
      "−1",
      "20",
      "32",
      "26"
    ],
    answer: 3,
    explanation: "For u days with u > 6, Option A costs 14 + 9(u − 6) dollars and Option B costs 12 + 7u dollars. Setting them equal: 14 + 9u − 54 = 12 + 7u, so 2u = 52 and u = 26."
  },
  {
    id: "alg-h242",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "6x + 6y = −6<br>ax + by = 9<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a − b?",
    choices: [
      "−18",
      "1",
      "0",
      "−1"
    ],
    answer: 2,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is 9/−6 = −3/2. So a = −3/2(6) = −9 and b = −3/2(6) = −9, and a − b = 0."
  },
  {
    id: "alg-h243",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of 2x − 2y = 22 in the xy-plane is shifted down h units, where h is a positive constant. The x-intercept of the resulting graph is (15, 0). What is the value of h?",
    choices: [
      "8",
      "4",
      "6",
      "5"
    ],
    answer: 1,
    explanation: "Shifting the graph down h units replaces y with y + h: 2x − 2(y + h) = 22. At the x-intercept y = 0, so 2(15) − 2(h) = 22, giving 30 − 2h = 22 and h = 4."
  },
  {
    id: "alg-h244",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(10) − f(6) = 10 and f(0) = −8. If f(k) = −3, what is the value of k?",
    choices: [
      "2",
      "1/2",
      "−22/5",
      "5"
    ],
    answer: 0,
    explanation: "The slope of f is [f(10) − f(6)]/(10 − 6) = 10/4 = 5/2. Since f(0) = −8, f(x) = 5/2x − 8. Then 5/2k − 8 = −3, so 5/2k = 5 and k = 2."
  },
  {
    id: "alg-h245",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "3x + 2y = −18<br>y = ax + b<br><br>In the given system, a and b are constants. The graph of y = ax + b passes through the point (−1, −4), and the system has no solution. What is the value of b?",
    choices: [
      "−5/2",
      "−9",
      "−10/3",
      "−11/2"
    ],
    answer: 3,
    explanation: "A system of two linear equations has no solution when the lines are parallel and distinct. Solving 3x + 2y = −18 for y gives slope −3/2, so a = −3/2. Substituting (−1, −4) into y = −3/2x + b: −4 = −3/2(−1) + b, so b = −11/2. This line is distinct from the first because its y-intercept differs from −9."
  },
  {
    id: "alg-h246",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "Two runners on a straight trail start 147 meters apart and travel toward each other. The first travels at a constant 30 meters per minute, and the second, who starts 1 minute later, travels at a constant 9 meters per minute. How many meters from the first one's starting point do they meet?",
    choices: [
      "113",
      "90",
      "120",
      "111"
    ],
    answer: 2,
    explanation: "Let t be the time the second one has been traveling when they meet. The first has traveled 30(t + 1) and the second 9t, and together they cover 147: 30(t + 1) + 9t = 147, so 39t + 30 = 147 and t = 3. The first one has traveled 30(4) = 120 meters."
  },
  {
    id: "alg-h247",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "(2/5)(14x + 10) − 78 = 3(14x + 10)<br><br>Which of the following is the value of 7x + 5 that satisfies the given equation?",
    choices: [
      "−20/7",
      "−15",
      "−30",
      "15"
    ],
    answer: 1,
    explanation: "Let w = 14x + 10, which is 2(7x + 5). The equation becomes (2/5)w − 78 = 3w, so (2/5 − 3)w = 78, which gives w = −30. Then 7x + 5 = w/2 = −15. (Solving for x first also works, but it is slower: x = −20/7.)"
  },
  {
    id: "alg-h248",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "A school play sold a total of 178 tickets, some adult at $19 each and the rest student at $15 each, for total revenue of $3,146. How many more dollars of revenue came from adult tickets than from student tickets?",
    choices: [
      "1376",
      "60",
      "−664",
      "476"
    ],
    answer: 0,
    explanation: "Let a and s be the numbers of adult and student tickets. Then a + s = 178 and 19a + 15s = 3146. Substituting s = 178 − a: 19a + 15(178 − a) = 3146, so 4a = 476 and a = 119, s = 59. Revenue from adult tickets is 19(119) = $2261, from student tickets is 15(59) = $885, a difference of $1376."
  },
  {
    id: "alg-h249",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The point (a, b) lies on the graph of −2x + 5y = −23 in the xy-plane. If b = 5a, what is the value of a?",
    choices: [
      "−5",
      "23/27",
      "1",
      "−1"
    ],
    answer: 3,
    explanation: "Substitute b = 5a into −2x + 5y = −23: −2a + 25a = −23, so 23a = −23 and a = −1. Then b = 5(−1) = −5."
  },
  {
    id: "alg-h250",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y > −4x − 9<br>y < −2x + c<br><br>In the given system of inequalities, c is a constant. If the point (−2, 4) is a solution to the system, what is the least possible integer value of c?",
    choices: [
      "0",
      "9",
      "1",
      "−1"
    ],
    answer: 2,
    explanation: "The point satisfies the first inequality, since 4 > −1. For the second, substitute: 4 < −2(−2) + c, so 4 < 4 + c and c > 0. The least integer greater than 0 is 1."
  },
  {
    id: "alg-h251",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ is the perpendicular bisector of the segment with endpoints (8, −8) and (−4, 4). What is the y-coordinate of the y-intercept of line ℓ?",
    choices: [
      "0",
      "−4",
      "−16",
      "4"
    ],
    answer: 1,
    explanation: "The perpendicular bisector passes through the midpoint (2, −2). The segment's slope is (4 − (−8))/(−4 − 8) = −1, so line ℓ has slope 1. Then y − (−2) = (1)(x − 2). Setting x = 0 gives y = −2 − (1)(2) = −4."
  },
  {
    id: "alg-h252",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−3) = −3f(5) and f(4) = −3. What is the value of f(0)?",
    choices: [
      "9",
      "−3",
      "−7",
      "3"
    ],
    answer: 0,
    explanation: "Write f(x) = mx + b. The first condition gives −3m + b = −3(5m + b), so 12m = −4b. The second gives 4m + b = −3. Solving these two equations together gives m = −3 and b = 9, so f(0) = b = 9. Check: f(−3) = 18 and f(5) = −6, and 18 = −3(−6)."
  },
  {
    id: "alg-h253",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + 12y = −3<br>x + (k − 1)y = 1<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "−3",
      "1",
      "12",
      "4"
    ],
    answer: 3,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/1 = 12/(k − 1) gives k(k − 1) = 12, so k² − k − 12 = 0, which factors as (k − 4)(k + 3) = 0. So k = 4 or k = −3. If k = −3, the constants are in the same ratio as well (−3/1 = −3), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = 4."
  },
  {
    id: "alg-h254",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a > 0. If f(f(x)) = 16x − 10 for all values of x, what is the value of f(7)?",
    choices: [
      "−30",
      "102",
      "26",
      "18"
    ],
    answer: 2,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 16x − 10 gives a² = 16, so a = 4 (since a > 0), and (a + 1)b = −10, so 5b = −10 and b = −2. Thus f(x) = 4x − 2 and f(7) = 4(7) − 2 = 26."
  },
  {
    id: "alg-h255",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (5, 2) and is perpendicular to the graph of 2x − y = −11. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "4",
      "9",
      "1",
      "9/2"
    ],
    answer: 1,
    explanation: "Solving 2x − y = −11 for y shows its slope is 2. A perpendicular line has slope equal to the negative reciprocal, −1/2. Line ℓ is y − 2 = (−1/2)(x − 5). Setting y = 0 and x = r gives −2 = (−1/2)(r − 5). Multiplying both sides by −2 gives r − 5 = 4, so r = 9."
  },
  {
    id: "alg-h256",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 4,
    prompt: "A storage shelf can hold at most 350 kilograms. It holds small bins weighing 13 kilograms each and large bins weighing 50 kilograms each. For balance, the number of small bins must be at least 3 times the number of large bins. What is the maximum number of large bins that can be loaded?",
    choices: [
      "3",
      "7",
      "5",
      "4"
    ],
    answer: 0,
    explanation: "Let s be the number of small items and L the number of large bins. The constraints are 13s + 50L ≤ 350 and s ≥ 3L. To make L as large as possible, use the fewest small items allowed: s = 3L. Then 13(3L) + 50L ≤ 350, so 89L ≤ 350 and L ≤ 3.93. Since L must be a whole number, the maximum is 3."
  },
  {
    id: "alg-h257",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x − 7) − 5x = 4x + m<br><br>In the given equation, k and m are constants. If the equation has no solution, which of the following must be true?",
    choices: [
      "k = 9 and m = −63",
      "k = 4 and m ≠ −28",
      "k = −1 and m ≠ 7",
      "k = 9 and m ≠ −63"
    ],
    answer: 3,
    explanation: "Expanding the left side gives kx − 7k − 5x = (k − 5)x − 7k. A linear equation has no solution when the x-coefficients on both sides are equal but the constants are different. So k − 5 = 4, giving k = 9. With k = 9, the left constant is −7(9) = −63, so m must not equal −63."
  },
  {
    id: "alg-h258",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "10x + 5y = −100<br>5x + 10y = −65<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "49",
      "121",
      "77",
      "−77"
    ],
    answer: 2,
    explanation: "Adding the equations gives 15x + 15y = −165, so x + y = −11. Subtracting the second from the first gives 5x − 5y = −35, so x − y = −7. Since x² − y² = (x + y)(x − y), the value is (−11)(−7) = 77."
  },
  {
    id: "alg-h259",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope −3/2 passes through the points (k, 2) and (4, k), where k is a constant. What is the value of k?",
    choices: [
      "8/5",
      "8",
      "1",
      "2"
    ],
    answer: 1,
    explanation: "Using the slope formula with the points (k, 2) and (4, k): (k − 2)/(4 − k) = −3/2. Multiplying: k − 2 = −3/2(4 − k). Collecting the k terms gives (1 + (−3/2))k = 2 + (−3/2)(4), so k = 8."
  },
  {
    id: "alg-h260",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 48 liters of a solution that is 15% antifreeze by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure antifreeze, which brings the tank back to 48 liters of a solution that is 23% antifreeze. What is the value of x?",
    choices: [
      "384/85",
      "384/77",
      "96/25",
      "384/23"
    ],
    answer: 0,
    explanation: "Track the antifreeze. At first there are 0.15(48) = 36/5 liters. Draining x liters removes 0.15x liters of antifreeze, and adding x liters of pure antifreeze adds x liters. The final amount must be 0.23(48) = 276/25 liters: 36/5 − 0.15x + x = 276/25, so 0.85x = 96/25 and x = 384/85."
  },
  {
    id: "alg-h261",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(2x + 9)/4 ≤ x + 6<br>x + 2 < (−x − 11)/3<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "4",
      "2",
      "5",
      "3"
    ],
    answer: 3,
    explanation: "First inequality: multiply by 4 to get 2x + 9 ≤ 4x + 24, so −2x ≤ 15. Dividing by the negative number −2 reverses the inequality: x ≥ −15/2. Second inequality: multiply by 3 to get 3x + 6 < −x − 11, so 4x < −17 and x < −17/4. The integers with −15/2 ≤ x < −17/4 are −7 through −5, which is 3 integers."
  },
  {
    id: "alg-h262",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A parking garage offers two pricing options. Option A costs $17 per month, which includes the first 4 hours, plus $9 for each hour beyond 4. Option B costs $2 per month plus $6 for every hour used. For what number of hours in a month do the two options cost the same amount? (Assume more than 4 hours are used.)",
    choices: [
      "−5",
      "3",
      "7",
      "11"
    ],
    answer: 2,
    explanation: "For u hours with u > 4, Option A costs 17 + 9(u − 4) dollars and Option B costs 2 + 6u dollars. Setting them equal: 17 + 9u − 36 = 2 + 6u, so 3u = 21 and u = 7."
  },
  {
    id: "alg-h263",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "8x − 9y = 6<br>ax + by = 9<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a + b?",
    choices: [
      "−1",
      "−3/2",
      "51/2",
      "−2/3"
    ],
    answer: 1,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is 9/6 = 3/2. So a = 3/2(8) = 12 and b = 3/2(−9) = −27/2, and a + b = −3/2."
  },
  {
    id: "alg-h264",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of −x + 2y = −14 in the xy-plane is shifted up h units, where h is a positive constant. The x-intercept of the resulting graph is (6, 0). What is the value of h?",
    choices: [
      "4",
      "8",
      "6",
      "5"
    ],
    answer: 0,
    explanation: "Shifting the graph up h units replaces y with y − h: −x + 2(y − h) = −14. At the x-intercept y = 0, so −1(6) + 2(−h) = −14, giving −6 − 2h = −14 and h = 4."
  },
  {
    id: "alg-h265",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(7) − f(3) = 24 and f(0) = 1. If f(k) = 91, what is the value of k?",
    choices: [
      "15/4",
      "46/3",
      "90",
      "15"
    ],
    answer: 3,
    explanation: "The slope of f is [f(7) − f(3)]/(7 − 3) = 24/4 = 6. Since f(0) = 1, f(x) = 6x + 1. Then 6k + 1 = 91, so 6k = 90 and k = 15."
  },
  {
    id: "alg-h266",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "−9x − 7y = 13<br>y = ax + b<br><br>In the given system, a and b are constants. The graph of y = ax + b passes through the point (4, 7), and the system has no solution. What is the value of b?",
    choices: [
      "13/7",
      "−13/7",
      "85/7",
      "35/9"
    ],
    answer: 2,
    explanation: "A system of two linear equations has no solution when the lines are parallel and distinct. Solving −9x − 7y = 13 for y gives slope −9/7, so a = −9/7. Substituting (4, 7) into y = −9/7x + b: 7 = −9/7(4) + b, so b = 85/7. This line is distinct from the first because its y-intercept differs from −13/7."
  },
  {
    id: "alg-h267",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "Two cyclists start 89 miles apart and travel toward each other. The first travels at a constant 11 miles per hour, and the second, who starts 3 hours later, travels at a constant 17 miles per hour. How many miles from the first one's starting point do they meet?",
    choices: [
      "35",
      "55",
      "22",
      "4"
    ],
    answer: 1,
    explanation: "Let t be the time the second one has been traveling when they meet. The first has traveled 11(t + 3) and the second 17t, and together they cover 89: 11(t + 3) + 17t = 89, so 28t + 33 = 89 and t = 2. The first one has traveled 11(5) = 55 miles."
  },
  {
    id: "alg-h268",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "(7/5)(9x − 24) − 66 = −3(9x − 24)<br><br>Which of the following is the value of 3x − 8 that satisfies the given equation?",
    choices: [
      "5",
      "13/3",
      "15",
      "−5"
    ],
    answer: 0,
    explanation: "Let w = 9x − 24, which is 3(3x − 8). The equation becomes (7/5)w − 66 = −3w, so (7/5 − (−3))w = 66, which gives w = 15. Then 3x − 8 = w/3 = 5. (Solving for x first also works, but it is slower: x = 13/3.)"
  },
  {
    id: "alg-h269",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "A school play sold a total of 256 tickets, some adult at $27 each and the rest student at $20 each, for total revenue of $5,883. How many more dollars of revenue came from adult tickets than from student tickets?",
    choices: [
      "−38",
      "1789",
      "763",
      "3"
    ],
    answer: 3,
    explanation: "Let a and s be the numbers of adult and student tickets. Then a + s = 256 and 27a + 20s = 5883. Substituting s = 256 − a: 27a + 20(256 − a) = 5883, so 7a = 763 and a = 109, s = 147. Revenue from adult tickets is 27(109) = $2943, from student tickets is 20(147) = $2940, a difference of $3."
  },
  {
    id: "alg-h270",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The point (a, b) lies on the graph of −8x − 7y = −27 in the xy-plane. If b = 5a, what is the value of a + b?",
    choices: [
      "27/43",
      "−1",
      "162/43",
      "−162/43"
    ],
    answer: 2,
    explanation: "Substitute b = 5a into −8x − 7y = −27: −8a − 35a = −27, so −43a = −27 and a = 27/43. Then b = 5(27/43) = 135/43, and a + b = 162/43."
  },
  {
    id: "alg-h271",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y > 3x − 1<br>y < −4x + c<br><br>In the given system of inequalities, c is a constant. If the point (−5, −11) is a solution to the system, what is the least possible integer value of c?",
    choices: [
      "−31",
      "−30",
      "10",
      "−32"
    ],
    answer: 1,
    explanation: "The point satisfies the first inequality, since −11 > −16. For the second, substitute: −11 < −4(−5) + c, so −11 < 20 + c and c > −31. The least integer greater than −31 is −30."
  },
  {
    id: "alg-h272",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ is the perpendicular bisector of the segment with endpoints (3, 1) and (−5, 7). What is the y-coordinate of the y-intercept of line ℓ?",
    choices: [
      "16/3",
      "13/4",
      "8/3",
      "−3"
    ],
    answer: 0,
    explanation: "The perpendicular bisector passes through the midpoint (−1, 4). The segment's slope is (7 − 1)/(−5 − 3) = −3/4, so line ℓ has slope 4/3. Then y − 4 = (4/3)(x − (−1)). Setting x = 0 gives y = 4 − (4/3)(−1) = 16/3."
  },
  {
    id: "alg-h273",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(3) = −f(−2) and f(2) = −9. What is the value of f(0)?",
    choices: [
      "−6",
      "−11",
      "−9",
      "3"
    ],
    answer: 3,
    explanation: "Write f(x) = mx + b. The first condition gives 3m + b = −1(−2m + b), so m = −2b. The second gives 2m + b = −9. Solving these two equations together gives m = −6 and b = 3, so f(0) = b = 3. Check: f(3) = −15 and f(−2) = 15, and −15 = −1(15)."
  },
  {
    id: "alg-h274",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "kx + 2y = −6<br>8x + (k + 6)y = −24<br><br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?",
    choices: [
      "2",
      "−6",
      "−8",
      "16"
    ],
    answer: 2,
    explanation: "A system of two linear equations has no solution when the x- and y-coefficients are proportional but the constants are not. Setting k/8 = 2/(k + 6) gives k(k + 6) = 16, so k² + 6k − 16 = 0, which factors as (k − 2)(k + 8) = 0. So k = 2 or k = −8. If k = 2, the constants are in the same ratio as well (−6/−24 = 1/4), so the two equations describe the same line and the system has infinitely many solutions. Therefore k = −8."
  },
  {
    id: "alg-h275",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 4,
    prompt: "The function f is defined by f(x) = ax + b, where a and b are constants and a < 0. If f(f(x)) = 25x + 12 for all values of x, what is the value of f(−4)?",
    choices: [
      "−23",
      "17",
      "−88",
      "32"
    ],
    answer: 1,
    explanation: "f(f(x)) = a(ax + b) + b = a²x + (a + 1)b. Matching coefficients with 25x + 12 gives a² = 25, so a = −5 (since a < 0), and (a + 1)b = 12, so −4b = 12 and b = −3. Thus f(x) = −5x − 3 and f(−4) = −5(−4) − 3 = 17."
  },
  {
    id: "alg-h276",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (6, 3) and is perpendicular to the graph of 2x + 5y = 12. Line ℓ crosses the x-axis at the point (r, 0). What is the value of r?",
    choices: [
      "24/5",
      "27/2",
      "36/5",
      "−12"
    ],
    answer: 0,
    explanation: "Solving 2x + 5y = 12 for y shows its slope is −2/5. A perpendicular line has slope equal to the negative reciprocal, 5/2. Line ℓ is y − 3 = (5/2)(x − 6). Setting y = 0 and x = r gives −3 = (5/2)(r − 6). Multiplying both sides by 2/5 gives r − 6 = −6/5, so r = 24/5."
  },
  {
    id: "alg-h277",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 4,
    prompt: "A delivery van can carry at most 250 pounds. It is loaded with small crates weighing 34 pounds each and large crates weighing 56 pounds each. Company policy requires that the number of small crates be at least 2 times the number of large crates. What is the maximum number of large crates that can be loaded?",
    choices: [
      "4",
      "3",
      "1",
      "2"
    ],
    answer: 3,
    explanation: "Let s be the number of small items and L the number of large crates. The constraints are 34s + 56L ≤ 250 and s ≥ 2L. To make L as large as possible, use the fewest small items allowed: s = 2L. Then 34(2L) + 56L ≤ 250, so 124L ≤ 250 and L ≤ 2.02. Since L must be a whole number, the maximum is 2."
  },
  {
    id: "alg-h278",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "k(x + 3) + 7x = −7x + m<br><br>In the given equation, k and m are constants. If the equation has infinitely many solutions, which of the following must be true?",
    choices: [
      "k = −14 and m ≠ −42",
      "k = −7 and m = −21",
      "k = −14 and m = −42",
      "k = 0 and m = 0"
    ],
    answer: 2,
    explanation: "Expanding the left side gives kx + 3k + 7x = (k + 7)x + 3k. A linear equation has infinitely many solutions when both the x-coefficients and the constants match. So k + 7 = −7, giving k = −14. With k = −14, the left constant is 3(−14) = −42, so m must equal −42."
  },
  {
    id: "alg-h279",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "4x + 8y = 68<br>8x + 4y = 52<br><br>If (x, y) is the solution to the given system of equations, what is the value of x² − y²?",
    choices: [
      "16",
      "−40",
      "100",
      "40"
    ],
    answer: 1,
    explanation: "Adding the equations gives 12x + 12y = 120, so x + y = 10. Subtracting the second from the first gives −4x + 4y = 16, so x − y = −4. Since x² − y² = (x + y)(x − y), the value is (10)(−4) = −40."
  },
  {
    id: "alg-h280",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "In the xy-plane, a line with slope 5 passes through the points (k, −41) and (7, k), where k is a constant. What is the value of k?",
    choices: [
      "−1",
      "−3/2",
      "24",
      "−41"
    ],
    answer: 0,
    explanation: "Using the slope formula with the points (k, −41) and (7, k): (k − (−41))/(7 − k) = 5. Multiplying: k − (−41) = 5(7 − k). Collecting the k terms gives (1 + 5)k = −41 + 5(7), so k = −1."
  },
  {
    id: "alg-h281",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 4,
    prompt: "A tank contains 30 liters of a solution that is 40% antifreeze by volume. A technician drains x liters of the solution from the tank and replaces them with x liters of pure antifreeze, which brings the tank back to 30 liters of a solution that is 55% antifreeze. What is the value of x?",
    choices: [
      "10",
      "9/2",
      "90/11",
      "15/2"
    ],
    answer: 3,
    explanation: "Track the antifreeze. At first there are 0.4(30) = 12 liters. Draining x liters removes 0.4x liters of antifreeze, and adding x liters of pure antifreeze adds x liters. The final amount must be 0.55(30) = 33/2 liters: 12 − 0.4x + x = 33/2, so 0.6x = 9/2 and x = 15/2."
  },
  {
    id: "alg-h282",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "(−x − 9)/2 ≤ x − 4<br>x + 4 < (−2x + 19)/2<br><br>How many integers x satisfy both of the given inequalities?",
    choices: [
      "4",
      "2",
      "3",
      "5"
    ],
    answer: 2,
    explanation: "First inequality: multiply by 2 to get −x − 9 ≤ 2x − 8, so −3x ≤ 1. Dividing by the negative number −3 reverses the inequality: x ≥ −1/3. Second inequality: multiply by 2 to get 2x + 8 < −2x + 19, so 4x < 11 and x < 11/4. The integers with −1/3 ≤ x < 11/4 are 0 through 2, which is 3 integers."
  },
  {
    id: "alg-h283",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A parking garage offers two pricing options. Option A costs $24 per month, which includes the first 4 hours, plus $9 for each hour beyond 4. Option B costs $15 per month plus $6 for every hour used. For what number of hours in a month do the two options cost the same amount? (Assume more than 4 hours are used.)",
    choices: [
      "−3",
      "9",
      "5",
      "13"
    ],
    answer: 1,
    explanation: "For u hours with u > 4, Option A costs 24 + 9(u − 4) dollars and Option B costs 15 + 6u dollars. Setting them equal: 24 + 9u − 36 = 15 + 6u, so 3u = 27 and u = 9."
  },
  {
    id: "alg-h284",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "2x − 6y = 12<br>ax + by = 30<br><br>In the given system of equations, a and b are constants. If the system has infinitely many solutions, what is the value of a − b?",
    choices: [
      "20",
      "8",
      "−10",
      "16/5"
    ],
    answer: 0,
    explanation: "For infinitely many solutions, the second equation must be a constant multiple of the first. Comparing constants, the multiplier is 30/12 = 5/2. So a = 5/2(2) = 5 and b = 5/2(−6) = −15, and a − b = 20."
  },
  {
    id: "alg-h285",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The graph of 2x − y = −16 in the xy-plane is shifted up h units, where h is a positive constant. The x-intercept of the resulting graph is (−12, 0). What is the value of h?",
    choices: [
      "16",
      "9",
      "7",
      "8"
    ],
    answer: 3,
    explanation: "Shifting the graph up h units replaces y with y − h: 2x − (y − h) = −16. At the x-intercept y = 0, so 2(−12) − (−h) = −16, giving −24 + h = −16 and h = 8."
  },
  {
    id: "alg-h286",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "Each week, Dana earns a fixed hourly wage for coaching and a different fixed hourly wage for refereeing. One week, Dana worked 10 hours coaching and 12 hours refereeing and earned $366. Another week, Dana worked 5 hours coaching and 11 hours refereeing and earned $248. How much more, in dollars, does Dana earn per hour coaching than per hour refereeing?",
    choices: [
      "21",
      "8",
      "−8",
      "13"
    ],
    answer: 1,
    explanation: "Let t and s be the hourly wages for coaching and refereeing. Then 10t + 12s = 366 and 5t + 11s = 248. Solving the system gives t = 21 and s = 13, so the difference is 21 − 13 = 8."
  },
  {
    id: "alg-h287",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "2x + 4y = 38<br>kx − 6y = −67<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x + 2, what is the value of k?",
    choices: [
      "−37/7",
      "−5",
      "−109/5",
      "5"
    ],
    answer: 1,
    explanation: "Substituting y = x + 2 into the first equation gives 2x + 4(x + 2) = 38, so 6x = 30 and x = 5. Then y = 7. Substituting into the second equation: k(5) − 6(7) = −67, so 5k = −25 and k = −5. Reading the condition as x = y + 2 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h288",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $37 plus $9.50 per hour to rent a kayak. Company B charges $68.50 plus $6.50 per hour. What is the minimum whole number of hours for which renting from Company B costs less than renting from Company A?",
    choices: [
      "12",
      "23",
      "10",
      "11"
    ],
    answer: 3,
    explanation: "For h hours, Company B is cheaper when 68.5 + 6.5h < 37 + 9.5h, which simplifies to 3h > 31.5, or h > 10.5. The smallest whole number greater than 10.5 is 11."
  },
  {
    id: "alg-h289",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A concert hall has 220 seats. Adult tickets cost $11 each and student tickets cost $7 each. For a sold-out performance, the ticket revenue must be at least $2,175. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "198",
      "61",
      "159",
      "158"
    ],
    answer: 2,
    explanation: "If x adult tickets are sold, 220 − x student tickets are sold, so the revenue is 11x + 7(220 − x) = 4x + 1,540. Requiring 4x + 1,540 ≥ 2,175 gives x ≥ 635/4 ≈ 158.75. Because x must be a whole number, the minimum is 159. Rounding down to 158 leaves the revenue short of $2,175."
  },
  {
    id: "alg-h290",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 2) − f(x) = 5 for all values of x, and f(2) = −6. What is the value of f(−1)?",
    choices: [
      "3/2",
      "−27/2",
      "−21",
      "−17/2"
    ],
    answer: 1,
    explanation: "Increasing x by 2 changes f(x) by 5, so the slope of f is 5/2. Then f(−1) = f(2) + (5/2)(−1 − 2) = −6 + (5/2)(−3) = −27/2. Using 5 as the slope gives −21."
  },
  {
    id: "alg-h291",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 2) − f(x) = −3 for all values of x, and f(6) = −9. What is the value of f(9)?",
    choices: [
      "−9/2",
      "−18",
      "−27/2",
      "−45/2"
    ],
    answer: 2,
    explanation: "Increasing x by 2 changes f(x) by −3, so the slope of f is −3/2. Then f(9) = f(6) + (−3/2)(9 − 6) = −9 + (−3/2)(3) = −27/2. Using −3 as the slope gives −18."
  },
  {
    id: "alg-h292",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "Each week, Dana earns a fixed hourly wage for bike repair and a different fixed hourly wage for delivery driving. One week, Dana worked 9 hours bike repair and 4 hours delivery driving and earned $326. Another week, Dana worked 11 hours bike repair and 10 hours delivery driving and earned $470. How much more, in dollars, does Dana earn per hour bike repair than per hour delivery driving?",
    choices: [
      "14",
      "16",
      "−16",
      "30"
    ],
    answer: 1,
    explanation: "Let t and s be the hourly wages for bike repair and delivery driving. Then 9t + 4s = 326 and 11t + 10s = 470. Solving the system gives t = 30 and s = 14, so the difference is 30 − 14 = 16."
  },
  {
    id: "alg-h293",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a pair of headphones with a list price of $120. During a sale, the list price is reduced by x%, and then a coupon takes $15 off the reduced price. A customer using the coupon pays $69 for the pair of headphones. What is the value of x?",
    choices: [
      "42.5",
      "55",
      "35",
      "30"
    ],
    answer: 3,
    explanation: "The sale price is 120(1 − x/100), and the coupon then subtracts 15: 120(1 − x/100) − 15 = 69. So 120(1 − x/100) = 84, 1 − x/100 = 0.7, and x = 30. Applying the coupon before the percent discount gives about 34.3, and ignoring the coupon gives 42.5."
  },
  {
    id: "alg-h294",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 30 liters of a 30% saline solution. How many liters of a 70% saline solution must be added to the tank so that the resulting mixture is a 58% saline solution?",
    choices: [
      "21",
      "70",
      "12",
      "90/7"
    ],
    answer: 1,
    explanation: "Let x be the liters added. The amount of saline is 0.3(30) + 0.7x, and the total volume is 30 + x. Setting 0.3(30) + 0.7x = 0.58(30 + x) gives 0.12x = 8.4, so x = 70. Treating 30 liters as the final total instead of the starting amount gives 21."
  },
  {
    id: "alg-h295",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (1, −6). When line ℓ is reflected across the y-axis, the resulting line passes through the point (6, 22). What is the slope of line ℓ?",
    choices: [
      "4",
      "−2",
      "28/5",
      "−4"
    ],
    answer: 3,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives −6 = 1m + b and 22 = −6m + b. Subtracting the second equation from the first gives −28 = 7m, so m = −4. The value 28/5 is the slope between the two given points, which lie on different lines, and 4 is the slope of the reflected line."
  },
  {
    id: "alg-h296",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "12x = 14y + 14<br>y = (a/7)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "−1/7",
      "7",
      "11",
      "5"
    ],
    answer: 3,
    explanation: "Solving the first equation for y gives y = (6/7)x + (−1) = (6/7)x − 1. For infinitely many solutions the second equation must be the same line, so a/7 = 6/7 gives a = 6, and k = −1. Therefore a + k = 5."
  },
  {
    id: "alg-h297",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 36 liters of a 20% sugar solution. How many liters of a 50% sugar solution must be added to the tank so that the resulting mixture is a 30% sugar solution?",
    choices: [
      "12",
      "18",
      "72",
      "36/5"
    ],
    answer: 1,
    explanation: "Let x be the liters added. The amount of sugar is 0.2(36) + 0.5x, and the total volume is 36 + x. Setting 0.2(36) + 0.5x = 0.3(36 + x) gives 0.2x = 3.6, so x = 18. Treating 36 liters as the final total instead of the starting amount gives 12."
  },
  {
    id: "alg-h298",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (1, −3). When line ℓ is reflected across the y-axis, the resulting line passes through the point (3, 5). What is the slope of line ℓ?",
    choices: [
      "2",
      "−1",
      "−2",
      "4"
    ],
    answer: 2,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives −3 = 1m + b and 5 = −3m + b. Subtracting the second equation from the first gives −8 = 4m, so m = −2. The value 4 is the slope between the two given points, which lie on different lines, and 2 is the slope of the reflected line."
  },
  {
    id: "alg-h299",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ 2x + 1<br>3x − y &lt; 0<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(4, −1)",
      "(−1, −1)",
      "(−2, 1)",
      "(−1, −3)"
    ],
    answer: 1,
    explanation: "Test each point in both inequalities. For (−1, −1): −1 ≤ −1 is true (equality is allowed by ≤), and −2 &lt; 0 is true. The point (−1, −3) gives 3x − y = 0 exactly, which fails the strict inequality; (4, −1) fails the second inequality; and (−2, 1) fails the first."
  },
  {
    id: "alg-h300",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "3x + 4y = −16<br>kx − 3y = −13<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x + 3, what is the value of k?",
    choices: [
      "83/2",
      "5/2",
      "4",
      "25"
    ],
    answer: 2,
    explanation: "Substituting y = x + 3 into the first equation gives 3x + 4(x + 3) = −16, so 7x = −28 and x = −4. Then y = −1. Substituting into the second equation: k(−4) − 3(−1) = −13, so −4k = −16 and k = 4. Reading the condition as x = y + 3 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h301",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a backpack with a list price of $60. During a sale, the list price is reduced by x%, and then a coupon takes $6 off the reduced price. A customer using the coupon pays $45 for the backpack. What is the value of x?",
    choices: [
      "25",
      "15",
      "20",
      "35"
    ],
    answer: 1,
    explanation: "The sale price is 60(1 − x/100), and the coupon then subtracts 6: 60(1 − x/100) − 6 = 45. So 60(1 − x/100) = 51, 1 − x/100 = 0.85, and x = 15. Applying the coupon before the percent discount gives about 16.7, and ignoring the coupon gives 25."
  },
  {
    id: "alg-h302",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 2) − f(x) = −10 for all values of x, and f(−4) = 10. What is the value of f(0)?",
    choices: [
      "30",
      "−10",
      "10",
      "−30"
    ],
    answer: 1,
    explanation: "Increasing x by 2 changes f(x) by −10, so the slope of f is −10/2 = −5. Then f(0) = f(−4) + −5(0 − (−4)) = 10 + −5(4) = −10. Using −10 as the slope gives −30."
  },
  {
    id: "alg-h303",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (−5, 6) and (−7, 2). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "16",
      "4",
      "−4",
      "−16"
    ],
    answer: 2,
    explanation: "The slope of line p is (2 − 6)/(−7 − (−5)) = 2. Setting y = 0 in line p's equation y − 6 = 2(x + 5) gives its x-intercept, x = −8, so the lines meet at (−8, 0). Line q has slope −1/2, the negative reciprocal of 2, so q is y = (−1/2)(x + 8). Setting x = 0 gives y = −4. Using the slope 2 again gives line p's own y-intercept, 16, and forgetting the negative sign in the reciprocal gives 4."
  },
  {
    id: "alg-h304",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "3x + 3y = 15<br>kx − 5y = 5<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x − 1, what is the value of k?",
    choices: [
      "3",
      "−5/3",
      "5",
      "10"
    ],
    answer: 2,
    explanation: "Substituting y = x − 1 into the first equation gives 3x + 3(x − 1) = 15, so 6x = 18 and x = 3. Then y = 2. Substituting into the second equation: k(3) − 5(2) = 5, so 3k = 15 and k = 5. Reading the condition as x = y − 1 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h305",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 36 liters of a 20% acid solution. How many liters of a 50% acid solution must be added to the tank so that the resulting mixture is a 30% acid solution?",
    choices: [
      "12",
      "72",
      "18",
      "36/5"
    ],
    answer: 2,
    explanation: "Let x be the liters added. The amount of acid is 0.2(36) + 0.5x, and the total volume is 36 + x. Setting 0.2(36) + 0.5x = 0.3(36 + x) gives 0.2x = 3.6, so x = 18. Treating 36 liters as the final total instead of the starting amount gives 12."
  },
  {
    id: "alg-h306",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "24x = 45y + 60<br>y = (a/15)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "20/3",
      "28/3",
      "−4/5",
      "68/3"
    ],
    answer: 0,
    explanation: "Solving the first equation for y gives y = (8/15)x + (−4/3) = (8/15)x − 4/3. For infinitely many solutions the second equation must be the same line, so a/15 = 8/15 gives a = 8, and k = −4/3. Therefore a + k = 20/3."
  },
  {
    id: "alg-h307",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "Each week, Dana earns a fixed hourly wage for dog walking and a different fixed hourly wage for babysitting. One week, Dana worked 10 hours dog walking and 4 hours babysitting and earned $216. Another week, Dana worked 4 hours dog walking and 11 hours babysitting and earned $218. How much more, in dollars, does Dana earn per hour dog walking than per hour babysitting?",
    choices: [
      "−2",
      "2",
      "14",
      "16"
    ],
    answer: 1,
    explanation: "Let t and s be the hourly wages for dog walking and babysitting. Then 10t + 4s = 216 and 4t + 11s = 218. Solving the system gives t = 16 and s = 14, so the difference is 16 − 14 = 2."
  },
  {
    id: "alg-h308",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A auditorium has 260 seats. Adult tickets cost $21 each and student tickets cost $10 each. For a sold-out performance, the ticket revenue must be at least $3,857. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "184",
      "114",
      "145",
      "115"
    ],
    answer: 3,
    explanation: "If x adult tickets are sold, 260 − x student tickets are sold, so the revenue is 21x + 10(260 − x) = 11x + 2,600. Requiring 11x + 2,600 ≥ 3,857 gives x ≥ 1257/11 ≈ 114.27. Because x must be a whole number, the minimum is 115. Rounding down to 114 leaves the revenue short of $3,857."
  },
  {
    id: "alg-h309",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ 2x + 1<br>3x − y &lt; 7<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(3, 4)",
      "(−4, −4)",
      "(5, −4)",
      "(2, −1)"
    ],
    answer: 0,
    explanation: "Test each point in both inequalities. For (3, 4): 4 ≤ 7 is true, and 5 &lt; 7 is true. The point (2, −1) gives 3x − y = 7 exactly, which fails the strict inequality; (5, −4) fails the second inequality; and (−4, −4) fails the first."
  },
  {
    id: "alg-h310",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(5) = −32 and f(−4) = 4. The function g is defined by g(x) = f(2x + 1). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "−3",
      "−2",
      "−5",
      "−1"
    ],
    answer: 1,
    explanation: "The slope of f is (4 − (−32))/(−4 − 5) = −4, so f(x) = −4(x + 3), which is 0 only when x = −3. Then g(x) = 0 when 2x + 1 = −3, so x = −2. The value −3 is the x-intercept of f, not g, and −5 comes from applying the inner expression to −3 instead of solving for x."
  },
  {
    id: "alg-h311",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (16, 6) and (−12, −6). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "6/7",
      "14/3",
      "−14/3",
      "−6/7"
    ],
    answer: 1,
    explanation: "The slope of line p is (−6 − 6)/(−12 − 16) = 3/7. Setting y = 0 in line p's equation y − 6 = (3/7)(x − 16) gives its x-intercept, x = 2, so the lines meet at (2, 0). Line q has slope −7/3, the negative reciprocal of 3/7, so q is y = (−7/3)(x − 2). Setting x = 0 gives y = 14/3. Using the slope 3/7 again gives line p's own y-intercept, −6/7, and forgetting the negative sign in the reciprocal gives −14/3."
  },
  {
    id: "alg-h312",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "3x + 2y = 28<br>kx − 2y = 8<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x + 4, what is the value of k?",
    choices: [
      "4",
      "2",
      "−2",
      "6"
    ],
    answer: 3,
    explanation: "Substituting y = x + 4 into the first equation gives 3x + 2(x + 4) = 28, so 5x = 20 and x = 4. Then y = 8. Substituting into the second equation: k(4) − 2(8) = 8, so 4k = 24 and k = 6. Reading the condition as x = y + 4 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h313",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $34 plus $7.50 per day to rent a cargo van. Company B charges $49 plus $5 per day. What is the minimum whole number of days for which renting from Company B costs less than renting from Company A?",
    choices: [
      "7",
      "20",
      "6",
      "8"
    ],
    answer: 0,
    explanation: "For h days, Company B is cheaper when 49 + 5h < 34 + 7.5h, which simplifies to 2.5h > 15, or h > 6. At exactly 6 days the costs are equal, so B is not yet cheaper; the minimum whole number is 7."
  },
  {
    id: "alg-h314",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $34 plus $8.50 per hour to rent a kayak. Company B charges $57 plus $6.50 per hour. What is the minimum whole number of hours for which renting from Company B costs less than renting from Company A?",
    choices: [
      "29",
      "11",
      "12",
      "13"
    ],
    answer: 2,
    explanation: "For h hours, Company B is cheaper when 57 + 6.5h < 34 + 8.5h, which simplifies to 2h > 23, or h > 11.5. The smallest whole number greater than 11.5 is 12."
  },
  {
    id: "alg-h315",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 30 liters of a 25% alcohol solution. How many liters of a 60% alcohol solution must be added to the tank so that the resulting mixture is a 45% alcohol solution?",
    choices: [
      "120/7",
      "45/2",
      "40",
      "10"
    ],
    answer: 2,
    explanation: "Let x be the liters added. The amount of alcohol is 0.25(30) + 0.6x, and the total volume is 30 + x. Setting 0.25(30) + 0.6x = 0.45(30 + x) gives 0.15x = 6, so x = 40. Treating 30 liters as the final total instead of the starting amount gives 120/7."
  },
  {
    id: "alg-h316",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 36 liters of a 25% saline solution. How many liters of a 60% saline solution must be added to the tank so that the resulting mixture is a 30% saline solution?",
    choices: [
      "216",
      "36/7",
      "6",
      "3"
    ],
    answer: 2,
    explanation: "Let x be the liters added. The amount of saline is 0.25(36) + 0.6x, and the total volume is 36 + x. Setting 0.25(36) + 0.6x = 0.3(36 + x) gives 0.3x = 1.8, so x = 6. Treating 36 liters as the final total instead of the starting amount gives 36/7."
  },
  {
    id: "alg-h317",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ −3x − 2<br>3x − y &lt; 8<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(1, −6)",
      "(−4, 10)",
      "(1, −5)",
      "(0, 3)"
    ],
    answer: 1,
    explanation: "Test each point in both inequalities. For (−4, 10): 10 ≤ 10 is true (equality is allowed by ≤), and −22 &lt; 8 is true. The point (1, −5) gives 3x − y = 8 exactly, which fails the strict inequality; (1, −6) fails the second inequality; and (0, 3) fails the first."
  },
  {
    id: "alg-h318",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a jacket with a list price of $40. During a sale, the list price is reduced by x%, and then a coupon takes $10 off the reduced price. A customer using the coupon pays $22 for the jacket. What is the value of x?",
    choices: [
      "45",
      "20",
      "25",
      "70"
    ],
    answer: 1,
    explanation: "The sale price is 40(1 − x/100), and the coupon then subtracts 10: 40(1 − x/100) − 10 = 22. So 40(1 − x/100) = 32, 1 − x/100 = 0.8, and x = 20. Applying the coupon before the percent discount gives about 26.7, and ignoring the coupon gives 45."
  },
  {
    id: "alg-h319",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ 3x + 9<br>x − y &lt; −2<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(−3, 0)",
      "(2, 0)",
      "(3, 5)",
      "(−4, 0)"
    ],
    answer: 0,
    explanation: "Test each point in both inequalities. For (−3, 0): 0 ≤ 0 is true (equality is allowed by ≤), and −3 &lt; −2 is true. The point (3, 5) gives x − y = −2 exactly, which fails the strict inequality; (2, 0) fails the second inequality; and (−4, 0) fails the first."
  },
  {
    id: "alg-h320",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "27x = 9y + 21<br>y = (a/3)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "20/3",
      "34/3",
      "2/3",
      "74/3"
    ],
    answer: 0,
    explanation: "Solving the first equation for y gives y = (3)x + (−7/3) = 3x − 7/3. For infinitely many solutions the second equation must be the same line, so a/3 = 3 gives a = 9, and k = −7/3. Therefore a + k = 20/3."
  },
  {
    id: "alg-h321",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 3) − f(x) = −3 for all values of x, and f(2) = 3. What is the value of f(8)?",
    choices: [
      "−3",
      "−15",
      "−5",
      "9"
    ],
    answer: 0,
    explanation: "Increasing x by 3 changes f(x) by −3, so the slope of f is −3/3 = −1. Then f(8) = f(2) + −1(8 − 2) = 3 + −1(6) = −3. Using −3 as the slope gives −15."
  },
  {
    id: "alg-h322",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (−13, 6) and (7, −6). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "−5",
      "5",
      "−9/5",
      "9/5"
    ],
    answer: 1,
    explanation: "The slope of line p is (−6 − 6)/(7 − (−13)) = −3/5. Setting y = 0 in line p's equation y − 6 = (−3/5)(x + 13) gives its x-intercept, x = −3, so the lines meet at (−3, 0). Line q has slope 5/3, the negative reciprocal of −3/5, so q is y = (5/3)(x + 3). Setting x = 0 gives y = 5. Using the slope −3/5 again gives line p's own y-intercept, −9/5, and forgetting the negative sign in the reciprocal gives −5."
  },
  {
    id: "alg-h323",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "7x + 5y = 75<br>kx − 6y = −53<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x + 3, what is the value of k?",
    choices: [
      "−23/8",
      "5",
      "−1",
      "−101/5"
    ],
    answer: 2,
    explanation: "Substituting y = x + 3 into the first equation gives 7x + 5(x + 3) = 75, so 12x = 60 and x = 5. Then y = 8. Substituting into the second equation: k(5) − 6(8) = −53, so 5k = −5 and k = −1. Reading the condition as x = y + 3 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h324",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "Each week, Dana earns a fixed hourly wage for dog walking and a different fixed hourly wage for babysitting. One week, Dana worked 4 hours dog walking and 9 hours babysitting and earned $209. Another week, Dana worked 5 hours dog walking and 4 hours babysitting and earned $167. How much more, in dollars, does Dana earn per hour dog walking than per hour babysitting?",
    choices: [
      "13",
      "23",
      "10",
      "−10"
    ],
    answer: 2,
    explanation: "Let t and s be the hourly wages for dog walking and babysitting. Then 4t + 9s = 209 and 5t + 4s = 167. Solving the system gives t = 23 and s = 13, so the difference is 23 − 13 = 10."
  },
  {
    id: "alg-h325",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "4x = 30y + 100<br>y = (a/15)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "2/3",
      "−16/5",
      "−4/3",
      "16/3"
    ],
    answer: 2,
    explanation: "Solving the first equation for y gives y = (2/15)x + (−10/3) = (2/15)x − 10/3. For infinitely many solutions the second equation must be the same line, so a/15 = 2/15 gives a = 2, and k = −10/3. Therefore a + k = −4/3."
  },
  {
    id: "alg-h326",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The points (−4, a), (−3, b), and (1, c) lie on the same line in the xy-plane. If b − a = −4, what is the value of c − b?",
    choices: [
      "−20",
      "−4",
      "−16",
      "−1"
    ],
    answer: 2,
    explanation: "The slope between the first two points is (b − a)/(−3 − (−4)) = −4. The same slope holds between the second and third points, so c − b = −4(1 − (−3)) = −4(4) = −16. The value −20 is c − a, not c − b."
  },
  {
    id: "alg-h327",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $31 plus $8.50 per hour to rent a kayak. Company B charges $51 plus $6.50 per hour. What is the minimum whole number of hours for which renting from Company B costs less than renting from Company A?",
    choices: [
      "11",
      "12",
      "26",
      "10"
    ],
    answer: 0,
    explanation: "For h hours, Company B is cheaper when 51 + 6.5h < 31 + 8.5h, which simplifies to 2h > 20, or h > 10. At exactly 10 hours the costs are equal, so B is not yet cheaper; the minimum whole number is 11."
  },
  {
    id: "alg-h328",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The points (3, a), (6, b), and (10, c) lie on the same line in the xy-plane. If b − a = 12, what is the value of c − b?",
    choices: [
      "9",
      "28",
      "16",
      "48"
    ],
    answer: 2,
    explanation: "The slope between the first two points is (b − a)/(6 − 3) = 12/3 = 4. The same slope holds between the second and third points, so c − b = 4(10 − 6) = 4(4) = 16. The value 28 is c − a, not c − b."
  },
  {
    id: "alg-h329",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ 2x − 4<br>4x − y &lt; 8<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(−1, 7)",
      "(5, −6)",
      "(1, −3)",
      "(2, 0)"
    ],
    answer: 2,
    explanation: "Test each point in both inequalities. For (1, −3): −3 ≤ −2 is true, and 7 &lt; 8 is true. The point (2, 0) gives 4x − y = 8 exactly, which fails the strict inequality; (5, −6) fails the second inequality; and (−1, 7) fails the first."
  },
  {
    id: "alg-h330",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (−6, 4) and (−8, −4). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "−28",
      "−7/4",
      "28",
      "7/4"
    ],
    answer: 1,
    explanation: "The slope of line p is (−4 − 4)/(−8 − (−6)) = 4. Setting y = 0 in line p's equation y − 4 = 4(x + 6) gives its x-intercept, x = −7, so the lines meet at (−7, 0). Line q has slope −1/4, the negative reciprocal of 4, so q is y = (−1/4)(x + 7). Setting x = 0 gives y = −7/4. Using the slope 4 again gives line p's own y-intercept, 28, and forgetting the negative sign in the reciprocal gives 7/4."
  },
  {
    id: "alg-h331",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "6x = 8y − 40<br>y = (a/4)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "23/4",
      "11",
      "−2",
      "8"
    ],
    answer: 3,
    explanation: "Solving the first equation for y gives y = (3/4)x + 5 = (3/4)x + 5. For infinitely many solutions the second equation must be the same line, so a/4 = 3/4 gives a = 3, and k = 5. Therefore a + k = 8."
  },
  {
    id: "alg-h332",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 72 liters of a 12% alcohol solution. How many liters of a 30% alcohol solution must be added to the tank so that the resulting mixture is a 24% alcohol solution?",
    choices: [
      "48",
      "36",
      "144",
      "144/5"
    ],
    answer: 2,
    explanation: "Let x be the liters added. The amount of alcohol is 0.12(72) + 0.3x, and the total volume is 72 + x. Setting 0.12(72) + 0.3x = 0.24(72 + x) gives 0.06x = 8.64, so x = 144. Treating 72 liters as the final total instead of the starting amount gives 48."
  },
  {
    id: "alg-h333",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The points (2, a), (7, b), and (14, c) lie on the same line in the xy-plane. If b − a = −15, what is the value of c − b?",
    choices: [
      "−105",
      "−75/7",
      "−21",
      "−36"
    ],
    answer: 2,
    explanation: "The slope between the first two points is (b − a)/(7 − 2) = −15/5 = −3. The same slope holds between the second and third points, so c − b = −3(14 − 7) = −3(7) = −21. The value −36 is c − a, not c − b."
  },
  {
    id: "alg-h334",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ 2x − 2<br>x − y &lt; 5<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(0, −5)",
      "(3, −6)",
      "(−4, −1)",
      "(2, 1)"
    ],
    answer: 3,
    explanation: "Test each point in both inequalities. For (2, 1): 1 ≤ 2 is true, and 1 &lt; 5 is true. The point (0, −5) gives x − y = 5 exactly, which fails the strict inequality; (3, −6) fails the second inequality; and (−4, −1) fails the first."
  },
  {
    id: "alg-h335",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 50 liters of a 12% saline solution. How many liters of a 30% saline solution must be added to the tank so that the resulting mixture is a 27% saline solution?",
    choices: [
      "250",
      "10",
      "25",
      "125/3"
    ],
    answer: 0,
    explanation: "Let x be the liters added. The amount of saline is 0.12(50) + 0.3x, and the total volume is 50 + x. Setting 0.12(50) + 0.3x = 0.27(50 + x) gives 0.03x = 7.5, so x = 250. Treating 50 liters as the final total instead of the starting amount gives 125/3."
  },
  {
    id: "alg-h336",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A stadium section has 400 seats. Adult tickets cost $15 each and student tickets cost $9 each. For a sold-out performance, the ticket revenue must be at least $4,927. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "329",
      "178",
      "221",
      "222"
    ],
    answer: 3,
    explanation: "If x adult tickets are sold, 400 − x student tickets are sold, so the revenue is 15x + 9(400 − x) = 6x + 3,600. Requiring 6x + 3,600 ≥ 4,927 gives x ≥ 1327/6 ≈ 221.17. Because x must be a whole number, the minimum is 222. Rounding down to 221 leaves the revenue short of $4,927."
  },
  {
    id: "alg-h337",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The points (−3, a), (−2, b), and (3, c) lie on the same line in the xy-plane. If b − a = −1, what is the value of c − b?",
    choices: [
      "−3",
      "−6",
      "−5",
      "−1/5"
    ],
    answer: 2,
    explanation: "The slope between the first two points is (b − a)/(−2 − (−3)) = −1. The same slope holds between the second and third points, so c − b = −1(3 − (−2)) = −1(5) = −5. The value −6 is c − a, not c − b."
  },
  {
    id: "alg-h338",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "15x = 45y + 405<br>y = (a/15)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "14",
      "−26/3",
      "−4",
      "6"
    ],
    answer: 2,
    explanation: "Solving the first equation for y gives y = (1/3)x + (−9) = (1/3)x − 9. For infinitely many solutions the second equation must be the same line, so a/15 = 1/3 gives a = 5, and k = −9. Therefore a + k = −4."
  },
  {
    id: "alg-h339",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "7x + 5y = 26<br>kx − 6y = 9<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x − 2, what is the value of k?",
    choices: [
      "27",
      "1",
      "5",
      "87/4"
    ],
    answer: 2,
    explanation: "Substituting y = x − 2 into the first equation gives 7x + 5(x − 2) = 26, so 12x = 36 and x = 3. Then y = 1. Substituting into the second equation: k(3) − 6(1) = 9, so 3k = 15 and k = 5. Reading the condition as x = y − 2 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h340",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "Each week, Dana earns a fixed hourly wage for tutoring and a different fixed hourly wage for lifeguarding. One week, Dana worked 5 hours tutoring and 9 hours lifeguarding and earned $393. Another week, Dana worked 6 hours tutoring and 4 hours lifeguarding and earned $288. How much more, in dollars, does Dana earn per hour tutoring than per hour lifeguarding?",
    choices: [
      "3",
      "27",
      "−3",
      "30"
    ],
    answer: 0,
    explanation: "Let t and s be the hourly wages for tutoring and lifeguarding. Then 5t + 9s = 393 and 6t + 4s = 288. Solving the system gives t = 30 and s = 27, so the difference is 30 − 27 = 3."
  },
  {
    id: "alg-h341",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $32 plus $5 per hour to rent a paddleboard. Company B charges $39 plus $4 per hour. What is the minimum whole number of hours for which renting from Company B costs less than renting from Company A?",
    choices: [
      "9",
      "7",
      "39",
      "8"
    ],
    answer: 3,
    explanation: "For h hours, Company B is cheaper when 39 + 4h < 32 + 5h, which simplifies to 1h > 7, or h > 7. At exactly 7 hours the costs are equal, so B is not yet cheaper; the minimum whole number is 8."
  },
  {
    id: "alg-h342",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 40 liters of a 5% saline solution. How many liters of a 35% saline solution must be added to the tank so that the resulting mixture is a 23% saline solution?",
    choices: [
      "80/3",
      "24",
      "60",
      "144/7"
    ],
    answer: 2,
    explanation: "Let x be the liters added. The amount of saline is 0.05(40) + 0.35x, and the total volume is 40 + x. Setting 0.05(40) + 0.35x = 0.23(40 + x) gives 0.12x = 7.2, so x = 60. Treating 40 liters as the final total instead of the starting amount gives 24."
  },
  {
    id: "alg-h343",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 6) − f(x) = −18 for all values of x, and f(−1) = −10. What is the value of f(2)?",
    choices: [
      "−19",
      "−1",
      "−16",
      "−64"
    ],
    answer: 0,
    explanation: "Increasing x by 6 changes f(x) by −18, so the slope of f is −18/6 = −3. Then f(2) = f(−1) + −3(2 − (−1)) = −10 + −3(3) = −19. Using −18 as the slope gives −64."
  },
  {
    id: "alg-h344",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "2x − 5y = −24<br>kx − 4y = −30<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x + 3, what is the value of k?",
    choices: [
      "−3",
      "3",
      "−2",
      "−18"
    ],
    answer: 2,
    explanation: "Substituting y = x + 3 into the first equation gives 2x − 5(x + 3) = −24, so −3x = −9 and x = 3. Then y = 6. Substituting into the second equation: k(3) − 4(6) = −30, so 3k = −6 and k = −2. Reading the condition as x = y + 3 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h345",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 30 liters of a 20% alcohol solution. How many liters of a 50% alcohol solution must be added to the tank so that the resulting mixture is a 38% alcohol solution?",
    choices: [
      "54/5",
      "45",
      "20",
      "18"
    ],
    answer: 1,
    explanation: "Let x be the liters added. The amount of alcohol is 0.2(30) + 0.5x, and the total volume is 30 + x. Setting 0.2(30) + 0.5x = 0.38(30 + x) gives 0.12x = 5.4, so x = 45. Treating 30 liters as the final total instead of the starting amount gives 18."
  },
  {
    id: "alg-h346",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(8) = −24 and f(−4) = 12. The function g is defined by g(x) = f(4x − 6). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "−6",
      "3/2",
      "−3/2",
      "0"
    ],
    answer: 1,
    explanation: "The slope of f is (12 − (−24))/(−4 − 8) = −3, so f(x) = −3(x), which is 0 only when x = 0. Then g(x) = 0 when 4x − 6 = 0, so x = 3/2. The value 0 is the x-intercept of f, not g, and −6 comes from applying the inner expression to 0 instead of solving for x."
  },
  {
    id: "alg-h347",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(7) = 35 and f(5) = 30. The function g is defined by g(x) = f(−3x − 7). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "14",
      "0",
      "14/3",
      "−7"
    ],
    answer: 1,
    explanation: "The slope of f is (30 − 35)/(5 − 7) = 5/2, so f(x) = (5/2)(x + 7), which is 0 only when x = −7. Then g(x) = 0 when −3x − 7 = −7, so x = 0. The value −7 is the x-intercept of f, not g, and 14 comes from applying the inner expression to −7 instead of solving for x."
  },
  {
    id: "alg-h348",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 50 liters of a 8% acid solution. How many liters of a 20% acid solution must be added to the tank so that the resulting mixture is a 17% acid solution?",
    choices: [
      "75/2",
      "45/2",
      "150",
      "50/3"
    ],
    answer: 2,
    explanation: "Let x be the liters added. The amount of acid is 0.08(50) + 0.2x, and the total volume is 50 + x. Setting 0.08(50) + 0.2x = 0.17(50 + x) gives 0.03x = 4.5, so x = 150. Treating 50 liters as the final total instead of the starting amount gives 75/2."
  },
  {
    id: "alg-h349",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "18x = 14y − 42<br>y = (a/7)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "21",
      "6",
      "12",
      "30/7"
    ],
    answer: 2,
    explanation: "Solving the first equation for y gives y = (9/7)x + 3 = (9/7)x + 3. For infinitely many solutions the second equation must be the same line, so a/7 = 9/7 gives a = 9, and k = 3. Therefore a + k = 12."
  },
  {
    id: "alg-h350",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The points (−1, a), (2, b), and (7, c) lie on the same line in the xy-plane. If b − a = −3, what is the value of c − b?",
    choices: [
      "−15",
      "−5",
      "−8",
      "−9/5"
    ],
    answer: 1,
    explanation: "The slope between the first two points is (b − a)/(2 − (−1)) = −3/3 = −1. The same slope holds between the second and third points, so c − b = −1(7 − 2) = −1(5) = −5. The value −8 is c − a, not c − b."
  },
  {
    id: "alg-h351",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "4x − 3y = −3<br>kx − 4y = −5<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x + 2, what is the value of k?",
    choices: [
      "7/5",
      "49/9",
      "5",
      "−25/3"
    ],
    answer: 2,
    explanation: "Substituting y = x + 2 into the first equation gives 4x − 3(x + 2) = −3, so 1x = 3 and x = 3. Then y = 5. Substituting into the second equation: k(3) − 4(5) = −5, so 3k = 15 and k = 5. Reading the condition as x = y + 2 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h352",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $11 plus $6.50 per hour to rent a paddleboard. Company B charges $23 plus $4.50 per hour. What is the minimum whole number of hours for which renting from Company B costs less than renting from Company A?",
    choices: [
      "7",
      "12",
      "6",
      "8"
    ],
    answer: 0,
    explanation: "For h hours, Company B is cheaper when 23 + 4.5h < 11 + 6.5h, which simplifies to 2h > 12, or h > 6. At exactly 6 hours the costs are equal, so B is not yet cheaper; the minimum whole number is 7."
  },
  {
    id: "alg-h353",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a tent with a list price of $150. During a sale, the list price is reduced by x%, and then a coupon takes $15 off the reduced price. A customer using the coupon pays $82.50 for the tent. What is the value of x?",
    choices: [
      "35",
      "45",
      "55",
      "40"
    ],
    answer: 0,
    explanation: "The sale price is 150(1 − x/100), and the coupon then subtracts 15: 150(1 − x/100) − 15 = 82.5. So 150(1 − x/100) = 97.5, 1 − x/100 = 0.65, and x = 35. Applying the coupon before the percent discount gives about 38.9, and ignoring the coupon gives 45."
  },
  {
    id: "alg-h354",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 6) − f(x) = 36 for all values of x, and f(6) = 5. What is the value of f(0)?",
    choices: [
      "41",
      "−211",
      "−31",
      "5"
    ],
    answer: 2,
    explanation: "Increasing x by 6 changes f(x) by 36, so the slope of f is 36/6 = 6. Then f(0) = f(6) + 6(0 − 6) = 5 + 6(−6) = −31. Using 36 as the slope gives −211."
  },
  {
    id: "alg-h355",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−2) = −8 and f(1) = −5. The function g is defined by g(x) = f(−2x + 5). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "−11/2",
      "6",
      "−7",
      "−1/2"
    ],
    answer: 3,
    explanation: "The slope of f is (−5 − (−8))/(1 − (−2)) = 1, so f(x) = 1(x − 6), which is 0 only when x = 6. Then g(x) = 0 when −2x + 5 = 6, so x = −1/2. The value 6 is the x-intercept of f, not g, and −7 comes from applying the inner expression to 6 instead of solving for x."
  },
  {
    id: "alg-h356",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A concert hall has 240 seats. Adult tickets cost $23 each and student tickets cost $12 each. For a sold-out performance, the ticket revenue must be at least $4,338. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "107",
      "132",
      "189",
      "133"
    ],
    answer: 3,
    explanation: "If x adult tickets are sold, 240 − x student tickets are sold, so the revenue is 23x + 12(240 − x) = 11x + 2,880. Requiring 11x + 2,880 ≥ 4,338 gives x ≥ 1458/11 ≈ 132.55. Because x must be a whole number, the minimum is 133. Rounding down to 132 leaves the revenue short of $4,338."
  },
  {
    id: "alg-h357",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "18x = 21y − 126<br>y = (a/7)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "24",
      "12",
      "48/7",
      "0"
    ],
    answer: 1,
    explanation: "Solving the first equation for y gives y = (6/7)x + 6 = (6/7)x + 6. For infinitely many solutions the second equation must be the same line, so a/7 = 6/7 gives a = 6, and k = 6. Therefore a + k = 12."
  },
  {
    id: "alg-h358",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (2, −3) and (3, −6). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "1/3",
      "3",
      "−1/3",
      "−3"
    ],
    answer: 2,
    explanation: "The slope of line p is (−6 − (−3))/(3 − 2) = −3. Setting y = 0 in line p's equation y − (−3) = −3(x − 2) gives its x-intercept, x = 1, so the lines meet at (1, 0). Line q has slope 1/3, the negative reciprocal of −3, so q is y = (1/3)(x − 1). Setting x = 0 gives y = −1/3. Using the slope −3 again gives line p's own y-intercept, 3, and forgetting the negative sign in the reciprocal gives 1/3."
  },
  {
    id: "alg-h359",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−5) = −32 and f(−2) = −20. The function g is defined by g(x) = f(2x + 5). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "4",
      "11",
      "−1",
      "3"
    ],
    answer: 2,
    explanation: "The slope of f is (−20 − (−32))/(−2 − (−5)) = 4, so f(x) = 4(x − 3), which is 0 only when x = 3. Then g(x) = 0 when 2x + 5 = 3, so x = −1. The value 3 is the x-intercept of f, not g, and 11 comes from applying the inner expression to 3 instead of solving for x."
  },
  {
    id: "alg-h360",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $25 plus $6 per day to rent a cargo van. Company B charges $32.50 plus $5 per day. What is the minimum whole number of days for which renting from Company B costs less than renting from Company A?",
    choices: [
      "7",
      "33",
      "9",
      "8"
    ],
    answer: 3,
    explanation: "For h days, Company B is cheaper when 32.5 + 5h < 25 + 6h, which simplifies to 1h > 7.5, or h > 7.5. The smallest whole number greater than 7.5 is 8."
  },
  {
    id: "alg-h361",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "Each week, Dana earns a fixed hourly wage for tutoring and a different fixed hourly wage for lifeguarding. One week, Dana worked 9 hours tutoring and 11 hours lifeguarding and earned $472. Another week, Dana worked 9 hours tutoring and 12 hours lifeguarding and earned $492. How much more, in dollars, does Dana earn per hour tutoring than per hour lifeguarding?",
    choices: [
      "−8",
      "28",
      "20",
      "8"
    ],
    answer: 3,
    explanation: "Let t and s be the hourly wages for tutoring and lifeguarding. Then 9t + 11s = 472 and 9t + 12s = 492. Solving the system gives t = 28 and s = 20, so the difference is 28 − 20 = 8."
  },
  {
    id: "alg-h362",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (3, 14). When line ℓ is reflected across the y-axis, the resulting line passes through the point (7, −26). What is the slope of line ℓ?",
    choices: [
      "−10",
      "−4",
      "2",
      "4"
    ],
    answer: 3,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives 14 = 3m + b and −26 = −7m + b. Subtracting the second equation from the first gives 40 = 10m, so m = 4. The value −10 is the slope between the two given points, which lie on different lines, and −4 is the slope of the reflected line."
  },
  {
    id: "alg-h363",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (4, −3) and (11, −6). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "−7",
      "9/7",
      "−9/7",
      "7"
    ],
    answer: 3,
    explanation: "The slope of line p is (−6 − (−3))/(11 − 4) = −3/7. Setting y = 0 in line p's equation y − (−3) = (−3/7)(x − 4) gives its x-intercept, x = −3, so the lines meet at (−3, 0). Line q has slope 7/3, the negative reciprocal of −3/7, so q is y = (7/3)(x + 3). Setting x = 0 gives y = 7. Using the slope −3/7 again gives line p's own y-intercept, −9/7, and forgetting the negative sign in the reciprocal gives −7."
  },
  {
    id: "alg-h364",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A auditorium has 400 seats. Adult tickets cost $18 each and student tickets cost $9 each. For a sold-out performance, the ticket revenue must be at least $4,939. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "275",
      "148",
      "149",
      "251"
    ],
    answer: 2,
    explanation: "If x adult tickets are sold, 400 − x student tickets are sold, so the revenue is 18x + 9(400 − x) = 9x + 3,600. Requiring 9x + 3,600 ≥ 4,939 gives x ≥ 1339/9 ≈ 148.78. Because x must be a whole number, the minimum is 149. Rounding down to 148 leaves the revenue short of $4,939."
  },
  {
    id: "alg-h365",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 2) − f(x) = 7 for all values of x, and f(6) = 9. What is the value of f(8)?",
    choices: [
      "2",
      "37",
      "23",
      "16"
    ],
    answer: 3,
    explanation: "Increasing x by 2 changes f(x) by 7, so the slope of f is 7/2. Then f(8) = f(6) + (7/2)(8 − 6) = 9 + (7/2)(2) = 16. Using 7 as the slope gives 23."
  },
  {
    id: "alg-h366",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 90 liters of a 15% saline solution. How many liters of a 45% saline solution must be added to the tank so that the resulting mixture is a 39% saline solution?",
    choices: [
      "360",
      "45/2",
      "72",
      "48"
    ],
    answer: 0,
    explanation: "Let x be the liters added. The amount of saline is 0.15(90) + 0.45x, and the total volume is 90 + x. Setting 0.15(90) + 0.45x = 0.39(90 + x) gives 0.06x = 21.6, so x = 360. Treating 90 liters as the final total instead of the starting amount gives 72."
  },
  {
    id: "alg-h367",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "10x = 18y + 216<br>y = (a/9)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "−103/9",
      "17",
      "−2",
      "−7"
    ],
    answer: 3,
    explanation: "Solving the first equation for y gives y = (5/9)x + (−12) = (5/9)x − 12. For infinitely many solutions the second equation must be the same line, so a/9 = 5/9 gives a = 5, and k = −12. Therefore a + k = −7."
  },
  {
    id: "alg-h368",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ 2x + 2<br>4x − y &lt; −5<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(−2, −2)",
      "(0, 9)",
      "(5, 1)",
      "(−2, −3)"
    ],
    answer: 0,
    explanation: "Test each point in both inequalities. For (−2, −2): −2 ≤ −2 is true (equality is allowed by ≤), and −6 &lt; −5 is true. The point (−2, −3) gives 4x − y = −5 exactly, which fails the strict inequality; (5, 1) fails the second inequality; and (0, 9) fails the first."
  },
  {
    id: "alg-h369",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The points (2, a), (5, b), and (8, c) lie on the same line in the xy-plane. If b − a = 2, what is the value of c − b?",
    choices: [
      "4",
      "2",
      "16/3",
      "6"
    ],
    answer: 1,
    explanation: "The slope between the first two points is (b − a)/(5 − 2) = 2/3 = 2/3. The same slope holds between the second and third points, so c − b = (2/3)(8 − 5) = (2/3)(3) = 2. The value 4 is c − a, not c − b."
  },
  {
    id: "alg-h370",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (1, 5). When line ℓ is reflected across the y-axis, the resulting line passes through the point (2, −4). What is the slope of line ℓ?",
    choices: [
      "2",
      "−9",
      "3",
      "−3"
    ],
    answer: 2,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives 5 = 1m + b and −4 = −2m + b. Subtracting the second equation from the first gives 9 = 3m, so m = 3. The value −9 is the slope between the two given points, which lie on different lines, and −3 is the slope of the reflected line."
  },
  {
    id: "alg-h371",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A theater has 220 seats. Adult tickets cost $13 each and student tickets cost $7 each. For a sold-out performance, the ticket revenue must be at least $2,252. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "101",
      "118",
      "119",
      "174"
    ],
    answer: 2,
    explanation: "If x adult tickets are sold, 220 − x student tickets are sold, so the revenue is 13x + 7(220 − x) = 6x + 1,540. Requiring 6x + 1,540 ≥ 2,252 gives x ≥ 356/3 ≈ 118.67. Because x must be a whole number, the minimum is 119. Rounding down to 118 leaves the revenue short of $2,252."
  },
  {
    id: "alg-h372",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−1) = −24 and f(3) = −8. The function g is defined by g(x) = f(4x + 2). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "22",
      "3/4",
      "7/4",
      "5"
    ],
    answer: 1,
    explanation: "The slope of f is (−8 − (−24))/(3 − (−1)) = 4, so f(x) = 4(x − 5), which is 0 only when x = 5. Then g(x) = 0 when 4x + 2 = 5, so x = 3/4. The value 5 is the x-intercept of f, not g, and 22 comes from applying the inner expression to 5 instead of solving for x."
  },
  {
    id: "alg-h373",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (0, 3) and (−1, 6). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "3",
      "−1/3",
      "−3",
      "1/3"
    ],
    answer: 1,
    explanation: "The slope of line p is (6 − 3)/(−1 − 0) = −3. Setting y = 0 in line p's equation y − 3 = −3(x) gives its x-intercept, x = 1, so the lines meet at (1, 0). Line q has slope 1/3, the negative reciprocal of −3, so q is y = (1/3)(x − 1). Setting x = 0 gives y = −1/3. Using the slope −3 again gives line p's own y-intercept, 3, and forgetting the negative sign in the reciprocal gives 1/3."
  },
  {
    id: "alg-h374",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ −x − 1<br>3x − y &lt; −2<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(0, −1)",
      "(2, 11)",
      "(−3, 2)",
      "(−2, −4)"
    ],
    answer: 2,
    explanation: "Test each point in both inequalities. For (−3, 2): 2 ≤ 2 is true (equality is allowed by ≤), and −11 &lt; −2 is true. The point (−2, −4) gives 3x − y = −2 exactly, which fails the strict inequality; (0, −1) fails the second inequality; and (2, 11) fails the first."
  },
  {
    id: "alg-h375",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "5x − 4y = −7<br>kx − 5y = 19<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x + 1, what is the value of k?",
    choices: [
      "−2",
      "−3",
      "−29/3",
      "41/11"
    ],
    answer: 1,
    explanation: "Substituting y = x + 1 into the first equation gives 5x − 4(x + 1) = −7, so 1x = −3 and x = −3. Then y = −2. Substituting into the second equation: k(−3) − 5(−2) = 19, so −3k = 9 and k = −3. Reading the condition as x = y + 1 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h376",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The points (3, a), (4, b), and (11, c) lie on the same line in the xy-plane. If b − a = −1, what is the value of c − b?",
    choices: [
      "−7",
      "−1/7",
      "−8",
      "−11"
    ],
    answer: 0,
    explanation: "The slope between the first two points is (b − a)/(4 − 3) = −1. The same slope holds between the second and third points, so c − b = −1(11 − 4) = −1(7) = −7. The value −8 is c − a, not c − b."
  },
  {
    id: "alg-h377",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a lamp with a list price of $100. During a sale, the list price is reduced by x%, and then a coupon takes $4 off the reduced price. A customer using the coupon pays $56 for the lamp. What is the value of x?",
    choices: [
      "44",
      "48",
      "40",
      "45"
    ],
    answer: 2,
    explanation: "The sale price is 100(1 − x/100), and the coupon then subtracts 4: 100(1 − x/100) − 4 = 56. So 100(1 − x/100) = 60, 1 − x/100 = 0.6, and x = 40. Applying the coupon before the percent discount gives about 41.7, and ignoring the coupon gives 44."
  },
  {
    id: "alg-h378",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "5x − 4y = −9<br>kx − 4y = −3<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x + 3, what is the value of k?",
    choices: [
      "−9",
      "33/7",
      "3/2",
      "7"
    ],
    answer: 3,
    explanation: "Substituting y = x + 3 into the first equation gives 5x − 4(x + 3) = −9, so 1x = 3 and x = 3. Then y = 6. Substituting into the second equation: k(3) − 4(6) = −3, so 3k = 21 and k = 7. Reading the condition as x = y + 3 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h379",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "5x + 3y = 47<br>kx − 2y = −50<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x − 3, what is the value of k?",
    choices: [
      "−6",
      "−9",
      "−58/7",
      "7"
    ],
    answer: 0,
    explanation: "Substituting y = x − 3 into the first equation gives 5x + 3(x − 3) = 47, so 8x = 56 and x = 7. Then y = 4. Substituting into the second equation: k(7) − 2(4) = −50, so 7k = −42 and k = −6. Reading the condition as x = y − 3 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h380",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (7, −17). When line ℓ is reflected across the y-axis, the resulting line passes through the point (4, 5). What is the slope of line ℓ?",
    choices: [
      "−3",
      "−2",
      "2",
      "−22/3"
    ],
    answer: 1,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives −17 = 7m + b and 5 = −4m + b. Subtracting the second equation from the first gives −22 = 11m, so m = −2. The value −22/3 is the slope between the two given points, which lie on different lines, and 2 is the slope of the reflected line."
  },
  {
    id: "alg-h381",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "24x = 27y + 162<br>y = (a/9)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "14",
      "2",
      "18",
      "−46/9"
    ],
    answer: 1,
    explanation: "Solving the first equation for y gives y = (8/9)x + (−6) = (8/9)x − 6. For infinitely many solutions the second equation must be the same line, so a/9 = 8/9 gives a = 8, and k = −6. Therefore a + k = 2."
  },
  {
    id: "alg-h382",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−6) = 10 and f(−2) = 2. The function g is defined by g(x) = f(−2x + 6). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "8",
      "−5/2",
      "7/2",
      "−1"
    ],
    answer: 2,
    explanation: "The slope of f is (2 − 10)/(−2 − (−6)) = −2, so f(x) = −2(x + 1), which is 0 only when x = −1. Then g(x) = 0 when −2x + 6 = −1, so x = 7/2. The value −1 is the x-intercept of f, not g, and 8 comes from applying the inner expression to −1 instead of solving for x."
  },
  {
    id: "alg-h383",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (5, 27). When line ℓ is reflected across the y-axis, the resulting line passes through the point (7, −21). What is the slope of line ℓ?",
    choices: [
      "−4",
      "4",
      "−24",
      "7"
    ],
    answer: 1,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives 27 = 5m + b and −21 = −7m + b. Subtracting the second equation from the first gives 48 = 12m, so m = 4. The value −24 is the slope between the two given points, which lie on different lines, and −4 is the slope of the reflected line."
  },
  {
    id: "alg-h384",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 5) − f(x) = −30 for all values of x, and f(4) = −2. What is the value of f(−2)?",
    choices: [
      "34",
      "−38",
      "10",
      "178"
    ],
    answer: 0,
    explanation: "Increasing x by 5 changes f(x) by −30, so the slope of f is −30/5 = −6. Then f(−2) = f(4) + −6(−2 − 4) = −2 + −6(−6) = 34. Using −30 as the slope gives 178."
  },
  {
    id: "alg-h385",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 2) − f(x) = −4 for all values of x, and f(1) = −3. What is the value of f(−5)?",
    choices: [
      "7",
      "9",
      "−15",
      "21"
    ],
    answer: 1,
    explanation: "Increasing x by 2 changes f(x) by −4, so the slope of f is −4/2 = −2. Then f(−5) = f(1) + −2(−5 − 1) = −3 + −2(−6) = 9. Using −4 as the slope gives 21."
  },
  {
    id: "alg-h386",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 2) − f(x) = −8 for all values of x, and f(6) = 2. What is the value of f(−5)?",
    choices: [
      "22",
      "46",
      "90",
      "−42"
    ],
    answer: 1,
    explanation: "Increasing x by 2 changes f(x) by −8, so the slope of f is −8/2 = −4. Then f(−5) = f(6) + −4(−5 − 6) = 2 + −4(−11) = 46. Using −8 as the slope gives 90."
  },
  {
    id: "alg-h387",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a backpack with a list price of $40. During a sale, the list price is reduced by x%, and then a coupon takes $8 off the reduced price. A customer using the coupon pays $20 for the backpack. What is the value of x?",
    choices: [
      "37.5",
      "50",
      "70",
      "30"
    ],
    answer: 3,
    explanation: "The sale price is 40(1 − x/100), and the coupon then subtracts 8: 40(1 − x/100) − 8 = 20. So 40(1 − x/100) = 28, 1 − x/100 = 0.7, and x = 30. Applying the coupon before the percent discount gives about 37.5, and ignoring the coupon gives 50."
  },
  {
    id: "alg-h388",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $31 plus $7 per hour to rent a paddleboard. Company B charges $42 plus $5.50 per hour. What is the minimum whole number of hours for which renting from Company B costs less than renting from Company A?",
    choices: [
      "8",
      "9",
      "7",
      "28"
    ],
    answer: 0,
    explanation: "For h hours, Company B is cheaper when 42 + 5.5h < 31 + 7h, which simplifies to 1.5h > 11, or h > 7.33. The smallest whole number greater than 7.33 is 8."
  },
  {
    id: "alg-h389",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A theater has 180 seats. Adult tickets cost $15 each and student tickets cost $10 each. For a sold-out performance, the ticket revenue must be at least $2,178. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "76",
      "75",
      "104",
      "146"
    ],
    answer: 0,
    explanation: "If x adult tickets are sold, 180 − x student tickets are sold, so the revenue is 15x + 10(180 − x) = 5x + 1,800. Requiring 5x + 1,800 ≥ 2,178 gives x ≥ 378/5 ≈ 75.60. Because x must be a whole number, the minimum is 76. Rounding down to 75 leaves the revenue short of $2,178."
  },
  {
    id: "alg-h390",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(2) = 8 and f(−6) = 0. The function g is defined by g(x) = f(−3x − 2). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "8/3",
      "16",
      "−6",
      "4/3"
    ],
    answer: 3,
    explanation: "The slope of f is (0 − 8)/(−6 − 2) = 1, so f(x) = 1(x + 6), which is 0 only when x = −6. Then g(x) = 0 when −3x − 2 = −6, so x = 4/3. The value −6 is the x-intercept of f, not g, and 16 comes from applying the inner expression to −6 instead of solving for x."
  },
  {
    id: "alg-h391",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $11 plus $6 per day to rent a cargo van. Company B charges $20 plus $5 per day. What is the minimum whole number of days for which renting from Company B costs less than renting from Company A?",
    choices: [
      "11",
      "20",
      "9",
      "10"
    ],
    answer: 3,
    explanation: "For h days, Company B is cheaper when 20 + 5h < 11 + 6h, which simplifies to 1h > 9, or h > 9. At exactly 9 days the costs are equal, so B is not yet cheaper; the minimum whole number is 10."
  },
  {
    id: "alg-h392",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "Each week, Dana earns a fixed hourly wage for bike repair and a different fixed hourly wage for delivery driving. One week, Dana worked 5 hours bike repair and 9 hours delivery driving and earned $351. Another week, Dana worked 5 hours bike repair and 5 hours delivery driving and earned $255. How much more, in dollars, does Dana earn per hour bike repair than per hour delivery driving?",
    choices: [
      "24",
      "−3",
      "3",
      "27"
    ],
    answer: 2,
    explanation: "Let t and s be the hourly wages for bike repair and delivery driving. Then 5t + 9s = 351 and 5t + 5s = 255. Solving the system gives t = 27 and s = 24, so the difference is 27 − 24 = 3."
  },
  {
    id: "alg-h393",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ 3x + 10<br>2x − y &lt; 3<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(−3, 1)",
      "(−4, 3)",
      "(5, −6)",
      "(4, 5)"
    ],
    answer: 0,
    explanation: "Test each point in both inequalities. For (−3, 1): 1 ≤ 1 is true (equality is allowed by ≤), and −7 &lt; 3 is true. The point (4, 5) gives 2x − y = 3 exactly, which fails the strict inequality; (5, −6) fails the second inequality; and (−4, 3) fails the first."
  },
  {
    id: "alg-h394",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ 3x + 7<br>2x − y &lt; −5<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(5, 0)",
      "(−4, 6)",
      "(1, 7)",
      "(1, 9)"
    ],
    answer: 3,
    explanation: "Test each point in both inequalities. For (1, 9): 9 ≤ 10 is true, and −7 &lt; −5 is true. The point (1, 7) gives 2x − y = −5 exactly, which fails the strict inequality; (5, 0) fails the second inequality; and (−4, 6) fails the first."
  },
  {
    id: "alg-h395",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The points (3, a), (7, b), and (12, c) lie on the same line in the xy-plane. If b − a = 12, what is the value of c − b?",
    choices: [
      "48/5",
      "15",
      "60",
      "27"
    ],
    answer: 1,
    explanation: "The slope between the first two points is (b − a)/(7 − 3) = 12/4 = 3. The same slope holds between the second and third points, so c − b = 3(12 − 7) = 3(5) = 15. The value 27 is c − a, not c − b."
  },
  {
    id: "alg-h396",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ 2x − 2<br>4x − y &lt; 8<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(0, −4)",
      "(1, −4)",
      "(4, 1)",
      "(2, 3)"
    ],
    answer: 0,
    explanation: "Test each point in both inequalities. For (0, −4): −4 ≤ −2 is true, and 4 &lt; 8 is true. The point (1, −4) gives 4x − y = 8 exactly, which fails the strict inequality; (4, 1) fails the second inequality; and (2, 3) fails the first."
  },
  {
    id: "alg-h397",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ −3x + 3<br>2x − y &lt; −3<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(0, 0)",
      "(−2, −1)",
      "(−2, 7)",
      "(3, 10)"
    ],
    answer: 2,
    explanation: "Test each point in both inequalities. For (−2, 7): 7 ≤ 9 is true, and −11 &lt; −3 is true. The point (−2, −1) gives 2x − y = −3 exactly, which fails the strict inequality; (0, 0) fails the second inequality; and (3, 10) fails the first."
  },
  {
    id: "alg-h398",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (3, 2) and (0, −4). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "−4",
      "1",
      "4",
      "−1"
    ],
    answer: 1,
    explanation: "The slope of line p is (−4 − 2)/(0 − 3) = 2. Setting y = 0 in line p's equation y − 2 = 2(x − 3) gives its x-intercept, x = 2, so the lines meet at (2, 0). Line q has slope −1/2, the negative reciprocal of 2, so q is y = (−1/2)(x − 2). Setting x = 0 gives y = 1. Using the slope 2 again gives line p's own y-intercept, −4, and forgetting the negative sign in the reciprocal gives −1."
  },
  {
    id: "alg-h399",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a tent with a list price of $75. During a sale, the list price is reduced by x%, and then a coupon takes $6 off the reduced price. A customer using the coupon pays $57.75 for the tent. What is the value of x?",
    choices: [
      "23",
      "31",
      "20",
      "15"
    ],
    answer: 3,
    explanation: "The sale price is 75(1 − x/100), and the coupon then subtracts 6: 75(1 − x/100) − 6 = 57.75. So 75(1 − x/100) = 63.75, 1 − x/100 = 0.85, and x = 15. Applying the coupon before the percent discount gives about 16.3, and ignoring the coupon gives 23."
  },
  {
    id: "alg-h400",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 4) − f(x) = 20 for all values of x, and f(−2) = −3. What is the value of f(−5)?",
    choices: [
      "−18",
      "12",
      "−63",
      "−28"
    ],
    answer: 0,
    explanation: "Increasing x by 4 changes f(x) by 20, so the slope of f is 20/4 = 5. Then f(−5) = f(−2) + 5(−5 − (−2)) = −3 + 5(−3) = −18. Using 20 as the slope gives −63."
  },
  {
    id: "alg-h401",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 20 liters of a 30% acid solution. How many liters of a 70% acid solution must be added to the tank so that the resulting mixture is a 62% acid solution?",
    choices: [
      "64/7",
      "16",
      "80",
      "5"
    ],
    answer: 2,
    explanation: "Let x be the liters added. The amount of acid is 0.3(20) + 0.7x, and the total volume is 20 + x. Setting 0.3(20) + 0.7x = 0.62(20 + x) gives 0.08x = 6.4, so x = 80. Treating 20 liters as the final total instead of the starting amount gives 16."
  },
  {
    id: "alg-h402",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A stadium section has 400 seats. Adult tickets cost $18 each and student tickets cost $10 each. For a sold-out performance, the ticket revenue must be at least $6,118. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "135",
      "340",
      "265",
      "264"
    ],
    answer: 2,
    explanation: "If x adult tickets are sold, 400 − x student tickets are sold, so the revenue is 18x + 10(400 − x) = 8x + 4,000. Requiring 8x + 4,000 ≥ 6,118 gives x ≥ 1059/4 ≈ 264.75. Because x must be a whole number, the minimum is 265. Rounding down to 264 leaves the revenue short of $6,118."
  },
  {
    id: "alg-h403",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "Each week, Dana earns a fixed hourly wage for bike repair and a different fixed hourly wage for delivery driving. One week, Dana worked 11 hours bike repair and 8 hours delivery driving and earned $411. Another week, Dana worked 4 hours bike repair and 7 hours delivery driving and earned $219. How much more, in dollars, does Dana earn per hour bike repair than per hour delivery driving?",
    choices: [
      "−8",
      "25",
      "8",
      "17"
    ],
    answer: 2,
    explanation: "Let t and s be the hourly wages for bike repair and delivery driving. Then 11t + 8s = 411 and 4t + 7s = 219. Solving the system gives t = 25 and s = 17, so the difference is 25 − 17 = 8."
  },
  {
    id: "alg-h404",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 48 liters of a 8% saline solution. How many liters of a 20% saline solution must be added to the tank so that the resulting mixture is a 11% saline solution?",
    choices: [
      "12",
      "144",
      "16",
      "36/5"
    ],
    answer: 2,
    explanation: "Let x be the liters added. The amount of saline is 0.08(48) + 0.2x, and the total volume is 48 + x. Setting 0.08(48) + 0.2x = 0.11(48 + x) gives 0.09x = 1.44, so x = 16. Treating 48 liters as the final total instead of the starting amount gives 12."
  },
  {
    id: "alg-h405",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a pair of headphones with a list price of $50. During a sale, the list price is reduced by x%, and then a coupon takes $5 off the reduced price. A customer using the coupon pays $40 for the pair of headphones. What is the value of x?",
    choices: [
      "10",
      "15",
      "30",
      "20"
    ],
    answer: 0,
    explanation: "The sale price is 50(1 − x/100), and the coupon then subtracts 5: 50(1 − x/100) − 5 = 40. So 50(1 − x/100) = 45, 1 − x/100 = 0.9, and x = 10. Applying the coupon before the percent discount gives about 11.1, and ignoring the coupon gives 20."
  },
  {
    id: "alg-h406",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (4, −26). When line ℓ is reflected across the y-axis, the resulting line passes through the point (1, −1). What is the slope of line ℓ?",
    choices: [
      "−5",
      "−6",
      "−25/3",
      "5"
    ],
    answer: 0,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives −26 = 4m + b and −1 = −1m + b. Subtracting the second equation from the first gives −25 = 5m, so m = −5. The value −25/3 is the slope between the two given points, which lie on different lines, and 5 is the slope of the reflected line."
  },
  {
    id: "alg-h407",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The points (0, a), (2, b), and (7, c) lie on the same line in the xy-plane. If b − a = −4, what is the value of c − b?",
    choices: [
      "−10",
      "−8/5",
      "−14",
      "−20"
    ],
    answer: 0,
    explanation: "The slope between the first two points is (b − a)/(2 − 0) = −4/2 = −2. The same slope holds between the second and third points, so c − b = −2(7 − 2) = −2(5) = −10. The value −14 is c − a, not c − b."
  },
  {
    id: "alg-h408",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (6, 23). When line ℓ is reflected across the y-axis, the resulting line passes through the point (7, −16). What is the slope of line ℓ?",
    choices: [
      "−39",
      "−3",
      "5",
      "3"
    ],
    answer: 3,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives 23 = 6m + b and −16 = −7m + b. Subtracting the second equation from the first gives 39 = 13m, so m = 3. The value −39 is the slope between the two given points, which lie on different lines, and −3 is the slope of the reflected line."
  },
  {
    id: "alg-h409",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $35 plus $6 per day to rent a cargo van. Company B charges $48 plus $4 per day. What is the minimum whole number of days for which renting from Company B costs less than renting from Company A?",
    choices: [
      "8",
      "6",
      "24",
      "7"
    ],
    answer: 3,
    explanation: "For h days, Company B is cheaper when 48 + 4h < 35 + 6h, which simplifies to 2h > 13, or h > 6.5. The smallest whole number greater than 6.5 is 7."
  },
  {
    id: "alg-h410",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(1) = −28 and f(−4) = −48. The function g is defined by g(x) = f(4x − 3). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "11/4",
      "5/4",
      "29",
      "8"
    ],
    answer: 0,
    explanation: "The slope of f is (−48 − (−28))/(−4 − 1) = 4, so f(x) = 4(x − 8), which is 0 only when x = 8. Then g(x) = 0 when 4x − 3 = 8, so x = 11/4. The value 8 is the x-intercept of f, not g, and 29 comes from applying the inner expression to 8 instead of solving for x."
  },
  {
    id: "alg-h411",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A auditorium has 320 seats. Adult tickets cost $14 each and student tickets cost $8 each. For a sold-out performance, the ticket revenue must be at least $3,584. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "256",
      "170",
      "171",
      "149"
    ],
    answer: 2,
    explanation: "If x adult tickets are sold, 320 − x student tickets are sold, so the revenue is 14x + 8(320 − x) = 6x + 2,560. Requiring 6x + 2,560 ≥ 3,584 gives x ≥ 512/3 ≈ 170.67. Because x must be a whole number, the minimum is 171. Rounding down to 170 leaves the revenue short of $3,584."
  },
  {
    id: "alg-h412",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The points (2, a), (4, b), and (10, c) lie on the same line in the xy-plane. If b − a = −2, what is the value of c − b?",
    choices: [
      "−2/3",
      "−6",
      "−8",
      "−12"
    ],
    answer: 1,
    explanation: "The slope between the first two points is (b − a)/(4 − 2) = −2/2 = −1. The same slope holds between the second and third points, so c − b = −1(10 − 4) = −1(6) = −6. The value −8 is c − a, not c − b."
  },
  {
    id: "alg-h413",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(7) = 24 and f(8) = 28. The function g is defined by g(x) = f(−2x + 7). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "−4",
      "5",
      "3",
      "1"
    ],
    answer: 2,
    explanation: "The slope of f is (28 − 24)/(8 − 7) = 4, so f(x) = 4(x − 1), which is 0 only when x = 1. Then g(x) = 0 when −2x + 7 = 1, so x = 3. The value 1 is the x-intercept of f, not g, and 5 comes from applying the inner expression to 1 instead of solving for x."
  },
  {
    id: "alg-h414",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $23 plus $9 per day to rent a cargo van. Company B charges $42.50 plus $6 per day. What is the minimum whole number of days for which renting from Company B costs less than renting from Company A?",
    choices: [
      "7",
      "15",
      "6",
      "8"
    ],
    answer: 0,
    explanation: "For h days, Company B is cheaper when 42.5 + 6h < 23 + 9h, which simplifies to 3h > 19.5, or h > 6.5. The smallest whole number greater than 6.5 is 7."
  },
  {
    id: "alg-h415",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 4) − f(x) = −4 for all values of x, and f(−3) = 2. What is the value of f(8)?",
    choices: [
      "13",
      "−9",
      "−6",
      "−42"
    ],
    answer: 1,
    explanation: "Increasing x by 4 changes f(x) by −4, so the slope of f is −4/4 = −1. Then f(8) = f(−3) + −1(8 − (−3)) = 2 + −1(11) = −9. Using −4 as the slope gives −42."
  },
  {
    id: "alg-h416",
    module: "math",
    domain: "Algebra",
    skill: "Word problems",
    difficulty: 3,
    prompt: "A tank contains 20 liters of a 20% sugar solution. How many liters of a 50% sugar solution must be added to the tank so that the resulting mixture is a 44% sugar solution?",
    choices: [
      "48/5",
      "16",
      "5",
      "80"
    ],
    answer: 3,
    explanation: "Let x be the liters added. The amount of sugar is 0.2(20) + 0.5x, and the total volume is 20 + x. Setting 0.2(20) + 0.5x = 0.44(20 + x) gives 0.06x = 4.8, so x = 80. Treating 20 liters as the final total instead of the starting amount gives 16."
  },
  {
    id: "alg-h417",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (7, −33). When line ℓ is reflected across the y-axis, the resulting line passes through the point (6, 32). What is the slope of line ℓ?",
    choices: [
      "−5",
      "5",
      "−65",
      "2"
    ],
    answer: 0,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives −33 = 7m + b and 32 = −6m + b. Subtracting the second equation from the first gives −65 = 13m, so m = −5. The value −65 is the slope between the two given points, which lie on different lines, and 5 is the slope of the reflected line."
  },
  {
    id: "alg-h418",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The points (−2, a), (2, b), and (4, c) lie on the same line in the xy-plane. If b − a = 16, what is the value of c − b?",
    choices: [
      "8",
      "24",
      "32",
      "16"
    ],
    answer: 0,
    explanation: "The slope between the first two points is (b − a)/(2 − (−2)) = 16/4 = 4. The same slope holds between the second and third points, so c − b = 4(4 − 2) = 4(2) = 8. The value 24 is c − a, not c − b."
  },
  {
    id: "alg-h419",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (2, −8). When line ℓ is reflected across the y-axis, the resulting line passes through the point (7, 10). What is the slope of line ℓ?",
    choices: [
      "2",
      "−4",
      "18/5",
      "−2"
    ],
    answer: 3,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives −8 = 2m + b and 10 = −7m + b. Subtracting the second equation from the first gives −18 = 9m, so m = −2. The value 18/5 is the slope between the two given points, which lie on different lines, and 2 is the slope of the reflected line."
  },
  {
    id: "alg-h420",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (−7, −6) and (28, 9). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "−49/3",
      "−3",
      "3",
      "49/3"
    ],
    answer: 3,
    explanation: "The slope of line p is (9 − (−6))/(28 − (−7)) = 3/7. Setting y = 0 in line p's equation y − (−6) = (3/7)(x + 7) gives its x-intercept, x = 7, so the lines meet at (7, 0). Line q has slope −7/3, the negative reciprocal of 3/7, so q is y = (−7/3)(x − 7). Setting x = 0 gives y = 49/3. Using the slope 3/7 again gives line p's own y-intercept, −3, and forgetting the negative sign in the reciprocal gives −49/3."
  },
  {
    id: "alg-h421",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $20 plus $8 per month to rent a storage unit. Company B charges $36 plus $6 per month. What is the minimum whole number of months for which renting from Company B costs less than renting from Company A?",
    choices: [
      "9",
      "18",
      "10",
      "8"
    ],
    answer: 0,
    explanation: "For h months, Company B is cheaper when 36 + 6h < 20 + 8h, which simplifies to 2h > 16, or h > 8. At exactly 8 months the costs are equal, so B is not yet cheaper; the minimum whole number is 9."
  },
  {
    id: "alg-h422",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(8) = −2 and f(2) = 10. The function g is defined by g(x) = f(2x + 5). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "19",
      "7",
      "1",
      "6"
    ],
    answer: 2,
    explanation: "The slope of f is (10 − (−2))/(2 − 8) = −2, so f(x) = −2(x − 7), which is 0 only when x = 7. Then g(x) = 0 when 2x + 5 = 7, so x = 1. The value 7 is the x-intercept of f, not g, and 19 comes from applying the inner expression to 7 instead of solving for x."
  },
  {
    id: "alg-h423",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "6x + 3y = 9<br>kx − 6y = 18<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x − 3, what is the value of k?",
    choices: [
      "2",
      "−30",
      "12",
      "6"
    ],
    answer: 3,
    explanation: "Substituting y = x − 3 into the first equation gives 6x + 3(x − 3) = 9, so 9x = 18 and x = 2. Then y = −1. Substituting into the second equation: k(2) − 6(−1) = 18, so 2k = 12 and k = 6. Reading the condition as x = y − 3 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h424",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(4) = −36 and f(−4) = −12. The function g is defined by g(x) = f(3x − 7). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "−31",
      "−1/3",
      "−8",
      "−5"
    ],
    answer: 1,
    explanation: "The slope of f is (−12 − (−36))/(−4 − 4) = −3, so f(x) = −3(x + 8), which is 0 only when x = −8. Then g(x) = 0 when 3x − 7 = −8, so x = −1/3. The value −8 is the x-intercept of f, not g, and −31 comes from applying the inner expression to −8 instead of solving for x."
  },
  {
    id: "alg-h425",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A theater has 500 seats. Adult tickets cost $20 each and student tickets cost $9 each. For a sold-out performance, the ticket revenue must be at least $7,194. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "360",
      "245",
      "255",
      "244"
    ],
    answer: 1,
    explanation: "If x adult tickets are sold, 500 − x student tickets are sold, so the revenue is 20x + 9(500 − x) = 11x + 4,500. Requiring 11x + 4,500 ≥ 7,194 gives x ≥ 2694/11 ≈ 244.91. Because x must be a whole number, the minimum is 245. Rounding down to 244 leaves the revenue short of $7,194."
  },
  {
    id: "alg-h426",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 2) − f(x) = 3 for all values of x, and f(5) = −10. What is the value of f(4)?",
    choices: [
      "−23/2",
      "−13",
      "−4",
      "−17/2"
    ],
    answer: 0,
    explanation: "Increasing x by 2 changes f(x) by 3, so the slope of f is 3/2. Then f(4) = f(5) + (3/2)(4 − 5) = −10 + (3/2)(−1) = −23/2. Using 3 as the slope gives −13."
  },
  {
    id: "alg-h427",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "15x = 18y − 45<br>y = (a/6)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "5/2",
      "15/2",
      "35/2",
      "10/3"
    ],
    answer: 1,
    explanation: "Solving the first equation for y gives y = (5/6)x + 5/2 = (5/6)x + 5/2. For infinitely many solutions the second equation must be the same line, so a/6 = 5/6 gives a = 5, and k = 5/2. Therefore a + k = 15/2."
  },
  {
    id: "alg-h428",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ −x + 10<br>x − y &lt; −3<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(5, 9)",
      "(3, 6)",
      "(0, 10)",
      "(2, −1)"
    ],
    answer: 2,
    explanation: "Test each point in both inequalities. For (0, 10): 10 ≤ 10 is true (equality is allowed by ≤), and −10 &lt; −3 is true. The point (3, 6) gives x − y = −3 exactly, which fails the strict inequality; (2, −1) fails the second inequality; and (5, 9) fails the first."
  },
  {
    id: "alg-h429",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "20x = 6y − 10<br>y = (a/3)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "5",
      "25/3",
      "35/3",
      "65/3"
    ],
    answer: 2,
    explanation: "Solving the first equation for y gives y = (10/3)x + 5/3 = (10/3)x + 5/3. For infinitely many solutions the second equation must be the same line, so a/3 = 10/3 gives a = 10, and k = 5/3. Therefore a + k = 35/3."
  },
  {
    id: "alg-h430",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "Each week, Dana earns a fixed hourly wage for tutoring and a different fixed hourly wage for lifeguarding. One week, Dana worked 11 hours tutoring and 12 hours lifeguarding and earned $343. Another week, Dana worked 5 hours tutoring and 9 hours lifeguarding and earned $202. How much more, in dollars, does Dana earn per hour tutoring than per hour lifeguarding?",
    choices: [
      "4",
      "−4",
      "17",
      "13"
    ],
    answer: 0,
    explanation: "Let t and s be the hourly wages for tutoring and lifeguarding. Then 11t + 12s = 343 and 5t + 9s = 202. Solving the system gives t = 17 and s = 13, so the difference is 17 − 13 = 4."
  },
  {
    id: "alg-h431",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a jacket with a list price of $100. During a sale, the list price is reduced by x%, and then a coupon takes $12 off the reduced price. A customer using the coupon pays $78 for the jacket. What is the value of x?",
    choices: [
      "22",
      "15",
      "10",
      "34"
    ],
    answer: 2,
    explanation: "The sale price is 100(1 − x/100), and the coupon then subtracts 12: 100(1 − x/100) − 12 = 78. So 100(1 − x/100) = 90, 1 − x/100 = 0.9, and x = 10. Applying the coupon before the percent discount gives about 11.4, and ignoring the coupon gives 22."
  },
  {
    id: "alg-h432",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ −x + 4<br>3x − y &lt; 3<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(−3, 6)",
      "(1, 0)",
      "(0, 11)",
      "(4, −2)"
    ],
    answer: 0,
    explanation: "Test each point in both inequalities. For (−3, 6): 6 ≤ 7 is true, and −15 &lt; 3 is true. The point (1, 0) gives 3x − y = 3 exactly, which fails the strict inequality; (4, −2) fails the second inequality; and (0, 11) fails the first."
  },
  {
    id: "alg-h433",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "7x + 2y = −60<br>kx − 5y = 21<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x − 3, what is the value of k?",
    choices: [
      "−11",
      "1",
      "1/11",
      "4"
    ],
    answer: 3,
    explanation: "Substituting y = x − 3 into the first equation gives 7x + 2(x − 3) = −60, so 9x = −54 and x = −6. Then y = −9. Substituting into the second equation: k(−6) − 5(−9) = 21, so −6k = −24 and k = 4. Reading the condition as x = y − 3 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h434",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(3) = −9 and f(−5) = −1. The function g is defined by g(x) = f(−3x − 4). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "10/3",
      "14",
      "2/3",
      "−6"
    ],
    answer: 2,
    explanation: "The slope of f is (−1 − (−9))/(−5 − 3) = −1, so f(x) = −1(x + 6), which is 0 only when x = −6. Then g(x) = 0 when −3x − 4 = −6, so x = 2/3. The value −6 is the x-intercept of f, not g, and 14 comes from applying the inner expression to −6 instead of solving for x."
  },
  {
    id: "alg-h435",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The points (−3, a), (2, b), and (9, c) lie on the same line in the xy-plane. If b − a = −5, what is the value of c − b?",
    choices: [
      "−25/7",
      "−12",
      "−35",
      "−7"
    ],
    answer: 3,
    explanation: "The slope between the first two points is (b − a)/(2 − (−3)) = −5/5 = −1. The same slope holds between the second and third points, so c − b = −1(9 − 2) = −1(7) = −7. The value −12 is c − a, not c − b."
  },
  {
    id: "alg-h436",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A concert hall has 350 seats. Adult tickets cost $18 each and student tickets cost $12 each. For a sold-out performance, the ticket revenue must be at least $5,633. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "313",
      "111",
      "239",
      "238"
    ],
    answer: 2,
    explanation: "If x adult tickets are sold, 350 − x student tickets are sold, so the revenue is 18x + 12(350 − x) = 6x + 4,200. Requiring 6x + 4,200 ≥ 5,633 gives x ≥ 1433/6 ≈ 238.83. Because x must be a whole number, the minimum is 239. Rounding down to 238 leaves the revenue short of $5,633."
  },
  {
    id: "alg-h437",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "Each week, Dana earns a fixed hourly wage for coaching and a different fixed hourly wage for refereeing. One week, Dana worked 10 hours coaching and 12 hours refereeing and earned $582. Another week, Dana worked 9 hours coaching and 9 hours refereeing and earned $477. How much more, in dollars, does Dana earn per hour coaching than per hour refereeing?",
    choices: [
      "27",
      "1",
      "26",
      "−1"
    ],
    answer: 1,
    explanation: "Let t and s be the hourly wages for coaching and refereeing. Then 10t + 12s = 582 and 9t + 9s = 477. Solving the system gives t = 27 and s = 26, so the difference is 27 − 26 = 1."
  },
  {
    id: "alg-h438",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ 2x + 9<br>3x − y &lt; −2<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(5, 5)",
      "(−2, 6)",
      "(0, 2)",
      "(−4, 1)"
    ],
    answer: 3,
    explanation: "Test each point in both inequalities. For (−4, 1): 1 ≤ 1 is true (equality is allowed by ≤), and −13 &lt; −2 is true. The point (0, 2) gives 3x − y = −2 exactly, which fails the strict inequality; (5, 5) fails the second inequality; and (−2, 6) fails the first."
  },
  {
    id: "alg-h439",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (9, −12) and (4, −8). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "24/5",
      "15/2",
      "−15/2",
      "−24/5"
    ],
    answer: 1,
    explanation: "The slope of line p is (−8 − (−12))/(4 − 9) = −4/5. Setting y = 0 in line p's equation y − (−12) = (−4/5)(x − 9) gives its x-intercept, x = −6, so the lines meet at (−6, 0). Line q has slope 5/4, the negative reciprocal of −4/5, so q is y = (5/4)(x + 6). Setting x = 0 gives y = 15/2. Using the slope −4/5 again gives line p's own y-intercept, −24/5, and forgetting the negative sign in the reciprocal gives −15/2."
  },
  {
    id: "alg-h440",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "Each week, Dana earns a fixed hourly wage for tutoring and a different fixed hourly wage for lifeguarding. One week, Dana worked 4 hours tutoring and 5 hours lifeguarding and earned $231. Another week, Dana worked 8 hours tutoring and 6 hours lifeguarding and earned $370. How much more, in dollars, does Dana earn per hour tutoring than per hour lifeguarding?",
    choices: [
      "23",
      "6",
      "−6",
      "29"
    ],
    answer: 1,
    explanation: "Let t and s be the hourly wages for tutoring and lifeguarding. Then 4t + 5s = 231 and 8t + 6s = 370. Solving the system gives t = 29 and s = 23, so the difference is 29 − 23 = 6."
  },
  {
    id: "alg-h441",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: 3,
    prompt: "The points (−3, a), (−1, b), and (6, c) lie on the same line in the xy-plane. If b − a = −5, what is the value of c − b?",
    choices: [
      "−35/2",
      "−45/2",
      "−35",
      "−10/7"
    ],
    answer: 0,
    explanation: "The slope between the first two points is (b − a)/(−1 − (−3)) = −5/2 = −5/2. The same slope holds between the second and third points, so c − b = (−5/2)(6 − (−1)) = (−5/2)(7) = −35/2. The value −45/2 is c − a, not c − b."
  },
  {
    id: "alg-h442",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (4, 3) and (5, 6). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "1",
      "−1",
      "9",
      "−9"
    ],
    answer: 0,
    explanation: "The slope of line p is (6 − 3)/(5 − 4) = 3. Setting y = 0 in line p's equation y − 3 = 3(x − 4) gives its x-intercept, x = 3, so the lines meet at (3, 0). Line q has slope −1/3, the negative reciprocal of 3, so q is y = (−1/3)(x − 3). Setting x = 0 gives y = 1. Using the slope 3 again gives line p's own y-intercept, −9, and forgetting the negative sign in the reciprocal gives −1."
  },
  {
    id: "alg-h443",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (1, −4). When line ℓ is reflected across the y-axis, the resulting line passes through the point (3, −12). What is the slope of line ℓ?",
    choices: [
      "2",
      "−4",
      "−6",
      "−2"
    ],
    answer: 0,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives −4 = 1m + b and −12 = −3m + b. Subtracting the second equation from the first gives 8 = 4m, so m = 2. The value −4 is the slope between the two given points, which lie on different lines, and −2 is the slope of the reflected line."
  },
  {
    id: "alg-h444",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "4x + 4y = −24<br>kx − 5y = 22<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x − 2, what is the value of k?",
    choices: [
      "−3",
      "−1",
      "−21",
      "−2"
    ],
    answer: 1,
    explanation: "Substituting y = x − 2 into the first equation gives 4x + 4(x − 2) = −24, so 8x = −16 and x = −2. Then y = −4. Substituting into the second equation: k(−2) − 5(−4) = 22, so −2k = 2 and k = −1. Reading the condition as x = y − 2 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h445",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (6, −37). When line ℓ is reflected across the y-axis, the resulting line passes through the point (7, 28). What is the slope of line ℓ?",
    choices: [
      "−5",
      "5",
      "−7",
      "65"
    ],
    answer: 0,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives −37 = 6m + b and 28 = −7m + b. Subtracting the second equation from the first gives −65 = 13m, so m = −5. The value 65 is the slope between the two given points, which lie on different lines, and 5 is the slope of the reflected line."
  },
  {
    id: "alg-h446",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a pair of headphones with a list price of $160. During a sale, the list price is reduced by x%, and then a coupon takes $8 off the reduced price. A customer using the coupon pays $136 for the pair of headphones. What is the value of x?",
    choices: [
      "5",
      "10",
      "15",
      "20"
    ],
    answer: 1,
    explanation: "The sale price is 160(1 − x/100), and the coupon then subtracts 8: 160(1 − x/100) − 8 = 136. So 160(1 − x/100) = 144, 1 − x/100 = 0.9, and x = 10. Applying the coupon before the percent discount gives about 10.5, and ignoring the coupon gives 15."
  },
  {
    id: "alg-h447",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "24x = 27y − 135<br>y = (a/9)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "3",
      "13",
      "29",
      "53/9"
    ],
    answer: 1,
    explanation: "Solving the first equation for y gives y = (8/9)x + 5 = (8/9)x + 5. For infinitely many solutions the second equation must be the same line, so a/9 = 8/9 gives a = 8, and k = 5. Therefore a + k = 13."
  },
  {
    id: "alg-h448",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a jacket with a list price of $100. During a sale, the list price is reduced by x%, and then a coupon takes $8 off the reduced price. A customer using the coupon pays $72 for the jacket. What is the value of x?",
    choices: [
      "20",
      "36",
      "25",
      "28"
    ],
    answer: 0,
    explanation: "The sale price is 100(1 − x/100), and the coupon then subtracts 8: 100(1 − x/100) − 8 = 72. So 100(1 − x/100) = 80, 1 − x/100 = 0.8, and x = 20. Applying the coupon before the percent discount gives about 21.7, and ignoring the coupon gives 28."
  },
  {
    id: "alg-h449",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 2) − f(x) = 3 for all values of x, and f(6) = 1. What is the value of f(0)?",
    choices: [
      "−8",
      "−17",
      "10",
      "1"
    ],
    answer: 0,
    explanation: "Increasing x by 2 changes f(x) by 3, so the slope of f is 3/2. Then f(0) = f(6) + (3/2)(0 − 6) = 1 + (3/2)(−6) = −8. Using 3 as the slope gives −17."
  },
  {
    id: "alg-h450",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a tent with a list price of $150. During a sale, the list price is reduced by x%, and then a coupon takes $15 off the reduced price. A customer using the coupon pays $105 for the tent. What is the value of x?",
    choices: [
      "20",
      "40",
      "30",
      "25"
    ],
    answer: 0,
    explanation: "The sale price is 150(1 − x/100), and the coupon then subtracts 15: 150(1 − x/100) − 15 = 105. So 150(1 − x/100) = 120, 1 − x/100 = 0.8, and x = 20. Applying the coupon before the percent discount gives about 22.2, and ignoring the coupon gives 30."
  },
  {
    id: "alg-h451",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 4) − f(x) = −12 for all values of x, and f(−3) = −8. What is the value of f(−8)?",
    choices: [
      "7",
      "16",
      "52",
      "−23"
    ],
    answer: 0,
    explanation: "Increasing x by 4 changes f(x) by −12, so the slope of f is −12/4 = −3. Then f(−8) = f(−3) + −3(−8 − (−3)) = −8 + −3(−5) = 7. Using −12 as the slope gives 52."
  },
  {
    id: "alg-h452",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $40 plus $10 per month to rent a storage unit. Company B charges $56.50 plus $7 per month. What is the minimum whole number of months for which renting from Company B costs less than renting from Company A?",
    choices: [
      "6",
      "5",
      "7",
      "19"
    ],
    answer: 0,
    explanation: "For h months, Company B is cheaper when 56.5 + 7h < 40 + 10h, which simplifies to 3h > 16.5, or h > 5.5. The smallest whole number greater than 5.5 is 6."
  },
  {
    id: "alg-h453",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "6x = 9y − 45<br>y = (a/3)x + k<br><br>In the given system of equations, a and k are constants. If the system has infinitely many solutions, what is the value of a + k?",
    choices: [
      "−3",
      "17/3",
      "11",
      "7"
    ],
    answer: 3,
    explanation: "Solving the first equation for y gives y = (2/3)x + 5 = (2/3)x + 5. For infinitely many solutions the second equation must be the same line, so a/3 = 2/3 gives a = 2, and k = 5. Therefore a + k = 7."
  },
  {
    id: "alg-h454",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (7, 13). When line ℓ is reflected across the y-axis, the resulting line passes through the point (5, −11). What is the slope of line ℓ?",
    choices: [
      "12",
      "−1",
      "−2",
      "2"
    ],
    answer: 3,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives 13 = 7m + b and −11 = −5m + b. Subtracting the second equation from the first gives 24 = 12m, so m = 2. The value 12 is the slope between the two given points, which lie on different lines, and −2 is the slope of the reflected line."
  },
  {
    id: "alg-h455",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a jacket with a list price of $60. During a sale, the list price is reduced by x%, and then a coupon takes $15 off the reduced price. A customer using the coupon pays $39 for the jacket. What is the value of x?",
    choices: [
      "10",
      "35",
      "60",
      "15"
    ],
    answer: 0,
    explanation: "The sale price is 60(1 − x/100), and the coupon then subtracts 15: 60(1 − x/100) − 15 = 39. So 60(1 − x/100) = 54, 1 − x/100 = 0.9, and x = 10. Applying the coupon before the percent discount gives about 13.3, and ignoring the coupon gives 35."
  },
  {
    id: "alg-h456",
    module: "math",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: 3,
    prompt: "A store sells a jacket with a list price of $50. During a sale, the list price is reduced by x%, and then a coupon takes $12 off the reduced price. A customer using the coupon pays $30.50 for the jacket. What is the value of x?",
    choices: [
      "39",
      "63",
      "15",
      "20"
    ],
    answer: 2,
    explanation: "The sale price is 50(1 − x/100), and the coupon then subtracts 12: 50(1 − x/100) − 12 = 30.5. So 50(1 − x/100) = 42.5, 1 − x/100 = 0.85, and x = 15. Applying the coupon before the percent discount gives about 19.7, and ignoring the coupon gives 39."
  },
  {
    id: "alg-h457",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A concert hall has 350 seats. Adult tickets cost $15 each and student tickets cost $7 each. For a sold-out performance, the ticket revenue must be at least $4,334. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "236",
      "235",
      "289",
      "114"
    ],
    answer: 0,
    explanation: "If x adult tickets are sold, 350 − x student tickets are sold, so the revenue is 15x + 7(350 − x) = 8x + 2,450. Requiring 8x + 2,450 ≥ 4,334 gives x ≥ 471/2 ≈ 235.50. Because x must be a whole number, the minimum is 236. Rounding down to 235 leaves the revenue short of $4,334."
  },
  {
    id: "alg-h458",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (22, 6) and (1, −3). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "−56/3",
      "−24/7",
      "24/7",
      "56/3"
    ],
    answer: 3,
    explanation: "The slope of line p is (−3 − 6)/(1 − 22) = 3/7. Setting y = 0 in line p's equation y − 6 = (3/7)(x − 22) gives its x-intercept, x = 8, so the lines meet at (8, 0). Line q has slope −7/3, the negative reciprocal of 3/7, so q is y = (−7/3)(x − 8). Setting x = 0 gives y = 56/3. Using the slope 3/7 again gives line p's own y-intercept, −24/7, and forgetting the negative sign in the reciprocal gives −56/3."
  },
  {
    id: "alg-h459",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−4) = 4 and f(−5) = 3. The function g is defined by g(x) = f(−2x − 5). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "3/2",
      "13/2",
      "11",
      "−8"
    ],
    answer: 0,
    explanation: "The slope of f is (3 − 4)/(−5 − (−4)) = 1, so f(x) = 1(x + 8), which is 0 only when x = −8. Then g(x) = 0 when −2x − 5 = −8, so x = 3/2. The value −8 is the x-intercept of f, not g, and 11 comes from applying the inner expression to −8 instead of solving for x."
  },
  {
    id: "alg-h460",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "y ≤ −3x + 1<br>x − y &lt; −4<br><br>Which point (x, y) is a solution to the given system of inequalities?",
    choices: [
      "(−3, −2)",
      "(−1, 3)",
      "(−3, 3)",
      "(−1, 9)"
    ],
    answer: 2,
    explanation: "Test each point in both inequalities. For (−3, 3): 3 ≤ 10 is true, and −6 &lt; −4 is true. The point (−1, 3) gives x − y = −4 exactly, which fails the strict inequality; (−3, −2) fails the second inequality; and (−1, 9) fails the first."
  },
  {
    id: "alg-h461",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "4x + 4y = 20<br>kx − 5y = 3<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x − 3, what is the value of k?",
    choices: [
      "−1/2",
      "4",
      "23",
      "2"
    ],
    answer: 3,
    explanation: "Substituting y = x − 3 into the first equation gives 4x + 4(x − 3) = 20, so 8x = 32 and x = 4. Then y = 1. Substituting into the second equation: k(4) − 5(1) = 3, so 4k = 8 and k = 2. Reading the condition as x = y − 3 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h462",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "5x + 4y = −2<br>kx − 6y = −6<br><br>In the given system of equations, k is a constant. If (x, y) is the solution to the system and y = x + 4, what is the value of k?",
    choices: [
      "−9",
      "−3",
      "−93/7",
      "9"
    ],
    answer: 1,
    explanation: "Substituting y = x + 4 into the first equation gives 5x + 4(x + 4) = −2, so 9x = −18 and x = −2. Then y = 2. Substituting into the second equation: k(−2) − 6(2) = −6, so −2k = 6 and k = −3. Reading the condition as x = y + 4 instead leads to a different point and a wrong value of k."
  },
  {
    id: "alg-h463",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A theater has 500 seats. Adult tickets cost $17 each and student tickets cost $6 each. For a sold-out performance, the ticket revenue must be at least $4,154. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "104",
      "395",
      "245",
      "105"
    ],
    answer: 3,
    explanation: "If x adult tickets are sold, 500 − x student tickets are sold, so the revenue is 17x + 6(500 − x) = 11x + 3,000. Requiring 11x + 3,000 ≥ 4,154 gives x ≥ 1154/11 ≈ 104.91. Because x must be a whole number, the minimum is 105. Rounding down to 104 leaves the revenue short of $4,154."
  },
  {
    id: "alg-h464",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(−4) = 9 and f(0) = 3. The function g is defined by g(x) = f(4x + 7). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "2",
      "15",
      "9/4",
      "−5/4"
    ],
    answer: 3,
    explanation: "The slope of f is (3 − 9)/(0 − (−4)) = −3/2, so f(x) = (−3/2)(x − 2), which is 0 only when x = 2. Then g(x) = 0 when 4x + 7 = 2, so x = −5/4. The value 2 is the x-intercept of f, not g, and 15 comes from applying the inner expression to 2 instead of solving for x."
  },
  {
    id: "alg-h465",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (2, 8) and (6, −8). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "−16",
      "−1",
      "1",
      "16"
    ],
    answer: 1,
    explanation: "The slope of line p is (−8 − 8)/(6 − 2) = −4. Setting y = 0 in line p's equation y − 8 = −4(x − 2) gives its x-intercept, x = 4, so the lines meet at (4, 0). Line q has slope 1/4, the negative reciprocal of −4, so q is y = (1/4)(x − 4). Setting x = 0 gives y = −1. Using the slope −4 again gives line p's own y-intercept, 16, and forgetting the negative sign in the reciprocal gives 1."
  },
  {
    id: "alg-h466",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in one variable",
    difficulty: 3,
    prompt: "Company A charges $15 plus $7.50 per hour to rent a kayak. Company B charges $30 plus $5 per hour. What is the minimum whole number of hours for which renting from Company B costs less than renting from Company A?",
    choices: [
      "8",
      "6",
      "7",
      "12"
    ],
    answer: 2,
    explanation: "For h hours, Company B is cheaper when 30 + 5h < 15 + 7.5h, which simplifies to 2.5h > 15, or h > 6. At exactly 6 hours the costs are equal, so B is not yet cheaper; the minimum whole number is 7."
  },
  {
    id: "alg-h467",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line ℓ passes through the point (2, 11). When line ℓ is reflected across the y-axis, the resulting line passes through the point (7, 2). What is the slope of line ℓ?",
    choices: [
      "1",
      "−1",
      "9",
      "−9/5"
    ],
    answer: 0,
    explanation: "If ℓ is y = mx + b, its reflection across the y-axis is y = −mx + b. Substituting the two points gives 11 = 2m + b and 2 = −7m + b. Subtracting the second equation from the first gives 9 = 9m, so m = 1. The value −9/5 is the slope between the two given points, which lie on different lines, and −1 is the slope of the reflected line."
  },
  {
    id: "alg-h468",
    module: "math",
    domain: "Algebra",
    skill: "Linear inequalities in two variables",
    difficulty: 3,
    prompt: "A auditorium has 240 seats. Adult tickets cost $13 each and student tickets cost $8 each. For a sold-out performance, the ticket revenue must be at least $2,583. If every seat is sold, what is the minimum number of adult tickets that must be sold?",
    choices: [
      "132",
      "107",
      "199",
      "133"
    ],
    answer: 3,
    explanation: "If x adult tickets are sold, 240 − x student tickets are sold, so the revenue is 13x + 8(240 − x) = 5x + 1,920. Requiring 5x + 1,920 ≥ 2,583 gives x ≥ 663/5 ≈ 132.60. Because x must be a whole number, the minimum is 133. Rounding down to 132 leaves the revenue short of $2,583."
  },
  {
    id: "alg-h469",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(6) = −21 and f(7) = −24. The function g is defined by g(x) = f(−2x + 6). What is the x-coordinate of the x-intercept of the graph of y = g(x) in the xy-plane?",
    choices: [
      "−5/2",
      "8",
      "7/2",
      "−1"
    ],
    answer: 2,
    explanation: "The slope of f is (−24 − (−21))/(7 − 6) = −3, so f(x) = −3(x + 1), which is 0 only when x = −1. Then g(x) = 0 when −2x + 6 = −1, so x = 7/2. The value −1 is the x-intercept of f, not g, and 8 comes from applying the inner expression to −1 instead of solving for x."
  },
  {
    id: "alg-h470",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "In the xy-plane, line p passes through the points (9, −2) and (7, 2). Line q is perpendicular to line p, and lines p and q intersect at a point on the x-axis. What is the y-coordinate of the y-intercept of line q?",
    choices: [
      "4",
      "−4",
      "16",
      "−16"
    ],
    answer: 1,
    explanation: "The slope of line p is (2 − (−2))/(7 − 9) = −2. Setting y = 0 in line p's equation y − (−2) = −2(x − 9) gives its x-intercept, x = 8, so the lines meet at (8, 0). Line q has slope 1/2, the negative reciprocal of −2, so q is y = (1/2)(x − 8). Setting x = 0 gives y = −4. Using the slope −2 again gives line p's own y-intercept, 16, and forgetting the negative sign in the reciprocal gives 4."
  },
  {
    id: "alg-h471",
    module: "math",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: 3,
    prompt: "For the linear function f, f(x + 2) − f(x) = 4 for all values of x, and f(2) = −4. What is the value of f(9)?",
    choices: [
      "10",
      "−18",
      "24",
      "14"
    ],
    answer: 0,
    explanation: "Increasing x by 2 changes f(x) by 4, so the slope of f is 4/2 = 2. Then f(9) = f(2) + 2(9 − 2) = −4 + 2(7) = 10. Using 4 as the slope gives 24."
  },
  {
    id: "alg-h472",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "Each week, Dana earns a fixed hourly wage for bike repair and a different fixed hourly wage for delivery driving. One week, Dana worked 7 hours bike repair and 10 hours delivery driving and earned $423. Another week, Dana worked 11 hours bike repair and 4 hours delivery driving and earned $407. How much more, in dollars, does Dana earn per hour bike repair than per hour delivery driving?",
    choices: [
      "22",
      "−7",
      "7",
      "29"
    ],
    answer: 2,
    explanation: "Let t and s be the hourly wages for bike repair and delivery driving. Then 7t + 10s = 423 and 11t + 4s = 407. Solving the system gives t = 29 and s = 22, so the difference is 29 − 22 = 7."
  },
  {
    id: "alg-h473",
    module: "math",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: 3,
    prompt: "Each week, Dana earns a fixed hourly wage for coaching and a different fixed hourly wage for refereeing. One week, Dana worked 9 hours coaching and 5 hours refereeing and earned $308. Another week, Dana worked 10 hours coaching and 9 hours refereeing and earned $387. How much more, in dollars, does Dana earn per hour coaching than per hour refereeing?",
    choices: [
      "13",
      "−14",
      "14",
      "27"
    ],
    answer: 2,
    explanation: "Let t and s be the hourly wages for coaching and refereeing. Then 9t + 5s = 308 and 10t + 9s = 387. Solving the system gives t = 27 and s = 13, so the difference is 27 − 13 = 14."
  }
);
