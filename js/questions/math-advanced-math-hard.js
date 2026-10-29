// Math — Advanced Math (Hard tier)
// Multi-step, top-of-scale SAT-style questions. All content is original.

QUESTIONS.push(
  {
    id: "adv-h1",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = −2x² − 19x − 5<br>y = x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of k?",
    choices: [
      "−5",
      "−45",
      "43",
      "45"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: −2x² − 19x − 5 = x + k, so −2x² − 20x − 5 − k = 0. Exactly one solution means the discriminant is 0: (−20)² − 4(−2)(−5 − k) = 0, which gives k = 45. The repeated solution is x = −(−20)/(2·(−2)) = −5."
  },
  {
    id: "adv-h2",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(3x + 16) = x + 4<br><br>What is the solution to the given equation?",
    choices: [
      "−5",
      "5",
      "0",
      "1"
    ],
    answer: 2,
    explanation: "Squaring both sides gives 3x + 16 = x² + 8x + 16, so x² + 5x = 0, which factors as x(x + 5) = 0. Squaring can introduce extraneous solutions, so check both: the right side x + 4 must be nonnegative. For x = −5, the right side is −1 < 0, so x = −5 is extraneous. Only x = 0 works."
  },
  {
    id: "adv-h3",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "3<sup>2x</sup> − 108(3<sup>x</sup>) + 2187 = 0<br><br>What is the sum of the solutions to the given equation?",
    choices: [
      "108",
      "7",
      "12",
      "81"
    ],
    answer: 1,
    explanation: "Let u = 3<sup>x</sup>, so 3<sup>2x</sup> = u². The equation becomes u² − 108u + 2187 = 0, which factors as (u − 27)(u − 81) = 0. So 3<sup>x</sup> = 27 or 3<sup>x</sup> = 81, giving x = 3 or x = 4. The sum is 7."
  },
  {
    id: "adv-h4",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³ + ax² + bx − 30<br><br>In the given polynomial function, a and b are constants. If −1 and 5 are zeros of p, what is the third zero of p?",
    choices: [
      "−6",
      "6",
      "−30",
      "4"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + d, the product of the three zeros is −d. Here −d = 30, so (−1)(5)r = 30, giving −5r = 30 and r = −6."
  },
  {
    id: "adv-h5",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 72t + 38. For how many seconds is the object at a height of at least 110 feet?",
    choices: [
      "3",
      "2.25",
      "0.75",
      "1.5"
    ],
    answer: 3,
    explanation: "Set h(t) = 110: −16t² + 72t + 38 = 110, so −16t² + 72t − 72 = 0. Dividing by −16 gives t² − 4.5t + 4.5 = 0, so t = 1.5 or t = 3. The object is at or above 110 feet between these times, for 3 − 1.5 = 1.5 seconds."
  },
  {
    id: "adv-h6",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "A population of bacteria increases by 96% every 2 weeks. Assuming the increase occurs at a constant percent rate per week, by what percent does it increase each week?",
    choices: [
      "48%",
      "96%",
      "40%",
      "24%"
    ],
    answer: 2,
    explanation: "If the per-week growth factor is r, then r<sup>2</sup> = 1 + 0.96 = 1.96. Taking the square root gives r = 1.4, which is a 40% increase each week. Dividing 96% by 2 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h7",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(1) = 54 and f(3) = 216, what is the value of f(2)?",
    choices: [
      "135",
      "108",
      "54",
      "216"
    ],
    answer: 1,
    explanation: "Dividing, f(3)/f(1) = b<sup>2</sup> = 4, so b = 2. Then a = f(1)/b<sup>1</sup> = 27, so f(x) = 27(2)<sup>x</sup> and f(2) = 27(2)<sup>2</sup> = 108."
  },
  {
    id: "adv-h8",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² + 8x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 4. What is the value of c?",
    choices: [
      "12",
      "15",
      "16",
      "−12"
    ],
    answer: 0,
    explanation: "The solutions add to −8 (the opposite of the x-coefficient) and differ by 4. So they are (−8 + 4)/2 = −2 and (−8 − 4)/2 = −6. Their product is c = (−2)(−6) = 12."
  },
  {
    id: "adv-h9",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² + kx + 10 = 0<br><br>In the given equation, k is an integer constant. For how many values of k does the equation have no real solutions?",
    choices: [
      "6",
      "15",
      "12",
      "13"
    ],
    answer: 3,
    explanation: "No real solutions means the discriminant is negative: k² − 4(1)(10) < 0, so k² < 40. The integers satisfying this are −6 through 6, including 0, which is 13 values."
  },
  {
    id: "adv-h10",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 3,
    prompt: "Which expression is equivalent to √(x) · <sup>6</sup>√(x<sup>5</sup>), where x > 0?",
    choices: [
      "x<sup>−1/3</sup>",
      "x<sup>5/12</sup>",
      "x<sup>4/3</sup>",
      "x<sup>3/4</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: √(x) = x<sup>1/2</sup> and <sup>6</sup>√(x<sup>5</sup>) = x<sup>5/6</sup>. Multiplying powers with the same base adds exponents: 1/2 + 5/6 = 4/3, so the expression equals x<sup>4/3</sup>."
  },
  {
    id: "adv-h11",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "(x² + kx + 35)/(x − 7) = x − 5<br><br>In the given equation, k is a constant, and the equation is true for all x ≠ 7. What is the value of k?",
    choices: [
      "−2",
      "−12",
      "2",
      "35"
    ],
    answer: 1,
    explanation: "Multiplying both sides by x − 7 gives x² + kx + 35 = (x − 7)(x − 5) = x² − 12x + 35. Matching x-coefficients gives k = −12."
  },
  {
    id: "adv-h12",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = −5. If f(0) = −22 and f(−6) = 2, what is the value of f(−4)?",
    choices: [
      "2",
      "3",
      "1",
      "−2"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − (−5))² + k. From f(0): a(25) + k = −22. From f(−6): a(1) + k = 2. Subtracting gives 24a = −24, so a = −1 and k = 3. Then f(−4) = −1(1)² + 3 = 2."
  },
  {
    id: "adv-h13",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = 3x³ + ax² − 2x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x + 3, the remainder is −91, and p(1) = −7. What is the value of ab?",
    choices: [
      "−8",
      "−7",
      "−1",
      "7"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(−3) = −91: −81 + 9a + 6 + b = −91, so 9a + b = −16. Also p(1) = −7: a + b = −8. Subtracting, 8a = −8, so a = −1 and b = −7. Thus ab = 7."
  },
  {
    id: "adv-h14",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² + 2 and g(x) = 2x + k, where k is a positive constant. If f(g(2)) = 51, what is the value of k?",
    choices: [
      "−11",
      "7",
      "3",
      "49"
    ],
    answer: 2,
    explanation: "g(2) = 4 + k, so f(g(2)) = (4 + k)² + 2 = 51. Then (4 + k)² = 49, so 4 + k = 7 or 4 + k = −7. These give k = 3 or k = −11. Since k is positive, k = 3."
  },
  {
    id: "adv-h15",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 8x + 15. The function g is defined by g(x) = f(x + 6). What is the product of the zeros of g?",
    choices: [
      "15",
      "3",
      "99",
      "−4"
    ],
    answer: 1,
    explanation: "f(x) = (x − 3)(x − 5), so the zeros of f are 3 and 5. g(x) = 0 when x + 6 equals a zero of f, so x = 3 − 6 = −3 or x = 5 − 6 = −1. The product is 3."
  },
  {
    id: "adv-h16",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 2<sup>x + 2</sup> − 2<sup>x − 2</sup> = 30, what is the value of 4<sup>x</sup>?",
    choices: [
      "64",
      "3",
      "8",
      "32"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 2<sup>x − 2</sup>: 2<sup>x − 2</sup>(2<sup>4</sup> − 1) = 30, so 2<sup>x − 2</sup>(15) = 30 and 2<sup>x − 2</sup> = 2. Then x − 2 = 1, so x = 3, and 4<sup>x</sup> = 64."
  },
  {
    id: "adv-h17",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "2x² + bx + c ≤ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is −7 ≤ x ≤ −4. What is the value of b?",
    choices: [
      "−22",
      "−11",
      "11",
      "22"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are −7 and −4, and the expression equals 2(x + 7)(x + 4) (the parabola opens upward, so it is ≤ 0 between its zeros). Expanding gives 2x² + 22x + 56, so b = 22 and c = 56."
  },
  {
    id: "adv-h18",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture doubles every 16 hours. At time t = 0, there are 1200 cells. Which function gives the number of cells, N(t), t minutes after time t = 0?",
    choices: [
      "1200(2)<sup>t/16</sup>",
      "1200(2)<sup>960t</sup>",
      "1200(2)<sup>t/960</sup>",
      "1200(2)<sup>16t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 2 once every 16 hours. Since t is measured in minutes, 16 hours is 960 minutes, so the number of periods after t minutes is t/960. Therefore N(t) = 1200(2)<sup>t/960</sup>. Using t/16 would treat t as hours."
  },
  {
    id: "adv-h19",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = −x² + 6x + 9<br>y = 14x + 21<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of x₁x₂?",
    choices: [
      "−12",
      "12",
      "−9",
      "−21"
    ],
    answer: 1,
    explanation: "Set the expressions equal: −x² + 6x + 9 = 14x + 21, so −x² − 8x − 12 = 0, which factors as −(x + 6)(x + 2) = 0. So x₁ and x₂ are −6 and −2, with product 12."
  },
  {
    id: "adv-h20",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (x + 9)(4x − 7) − 2(x² + 1) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "−34",
      "−30",
      "−26",
      "34"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (10)(−3) − 2(1 + 1) = −30 − 4 = −34. (Expanding fully gives 2x² + 29x − 65.)"
  },
  {
    id: "adv-h21",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = −x² − 9x − 8<br>y = −x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of k?",
    choices: [
      "−8",
      "7",
      "12",
      "8"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: −x² − 9x − 8 = −x + k, so −x² − 8x − 8 − k = 0. Exactly one solution means the discriminant is 0: (−8)² − 4(−1)(−8 − k) = 0, which gives k = 8. The repeated solution is x = −(−8)/(2·(−1)) = −4."
  },
  {
    id: "adv-h22",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(2x + 28) = x + 2<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "−6",
      "−2",
      "4",
      "−4"
    ],
    answer: 2,
    explanation: "Squaring both sides gives 2x + 28 = x² + 4x + 4, so x² + 2x − 24 = 0, which factors as (x − 4)(x + 6) = 0. Squaring can introduce extraneous solutions, so check both: the right side x + 2 must be nonnegative. For x = −6, the right side is −4 < 0, so x = −6 is extraneous. Only x = 4 works, so the sum of all solutions is 4."
  },
  {
    id: "adv-h23",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "2<sup>2x</sup> − 12(2<sup>x</sup>) + 32 = 0<br><br>What is the greatest solution to the given equation?",
    choices: [
      "12",
      "3",
      "5",
      "8"
    ],
    answer: 1,
    explanation: "Let u = 2<sup>x</sup>, so 2<sup>2x</sup> = u². The equation becomes u² − 12u + 32 = 0, which factors as (u − 4)(u − 8) = 0. So 2<sup>x</sup> = 4 or 2<sup>x</sup> = 8, giving x = 2 or x = 3. The greatest solution is 3."
  },
  {
    id: "adv-h24",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³ + 5x² + bx + c<br><br>In the given polynomial function, b and c are constants. If −5 and 2 are zeros of p, what is the third zero of p?",
    choices: [
      "−2",
      "2",
      "0",
      "−3"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + c, the sum of the zeros is −a. Here −a = −5, so −5 + 2 + r = −5, giving r = −2."
  },
  {
    id: "adv-h25",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 64t + 82. For how many seconds is the object at a height of at least 130 feet?",
    choices: [
      "3",
      "1",
      "2.5",
      "2"
    ],
    answer: 3,
    explanation: "Set h(t) = 130: −16t² + 64t + 82 = 130, so −16t² + 64t − 48 = 0. Dividing by −16 gives t² − 4t + 3 = 0, so t = 1 or t = 3. The object is at or above 130 feet between these times, for 3 − 1 = 2 seconds."
  },
  {
    id: "adv-h26",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The value of an investment increases by 125% every 2 years. Assuming the increase occurs at a constant percent rate per year, by what percent does it increase each year?",
    choices: [
      "62.5%",
      "125%",
      "50%",
      "31%"
    ],
    answer: 2,
    explanation: "If the per-year growth factor is r, then r<sup>2</sup> = 1 + 1.25 = 2.25. Taking the square root gives r = 1.5, which is a 50% increase each year. Dividing 125% by 2 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h27",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(3) = 432 and f(6) = 3456, what is the value of f(8)?",
    choices: [
      "5472",
      "13824",
      "6912",
      "27648"
    ],
    answer: 1,
    explanation: "Dividing, f(6)/f(3) = b<sup>3</sup> = 8, so b = 2. Then a = f(3)/b<sup>3</sup> = 54, so f(x) = 54(2)<sup>x</sup> and f(8) = 54(2)<sup>8</sup> = 13824."
  },
  {
    id: "adv-h28",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² − 8x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 2. What is the value of c?",
    choices: [
      "15",
      "−15",
      "16",
      "17"
    ],
    answer: 0,
    explanation: "The solutions add to 8 (the opposite of the x-coefficient) and differ by 2. So they are (8 + 2)/2 = 5 and (8 − 2)/2 = 3. Their product is c = (5)(3) = 15."
  },
  {
    id: "adv-h29",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² + kx + 16 = 0<br><br>In the given equation, k is a constant. For how many positive integer values of k does the equation have no real solutions?",
    choices: [
      "15",
      "8",
      "6",
      "7"
    ],
    answer: 3,
    explanation: "A quadratic has no real solutions when its discriminant is negative: k² − 4(1)(16) < 0, so k² < 64. The positive integers with k² < 64 are 1 through 7, so there are 7 values."
  },
  {
    id: "adv-h30",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 3,
    prompt: "Which expression is equivalent to ∜(x<sup>6</sup>) · √(x), where x > 0?",
    choices: [
      "x<sup>1</sup>",
      "x<sup>3/4</sup>",
      "x<sup>2</sup>",
      "x<sup>7/6</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: ∜(x<sup>6</sup>) = x<sup>3/2</sup> and √(x) = x<sup>1/2</sup>. Multiplying powers with the same base adds exponents: 3/2 + 1/2 = 2, so the expression equals x<sup>2</sup>."
  },
  {
    id: "adv-h31",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (x² + 6x − 11)/(x − 1) is equivalent to x + 7 + R/(x − 1), where R is a constant and x ≠ 1. What is the value of R?",
    choices: [
      "−11",
      "−4",
      "4",
      "−7"
    ],
    answer: 1,
    explanation: "Multiply both sides by (x − 1): x² + 6x − 11 = (x − 1)(x + 7) + R = x² + 6x − 7 + R. Matching constants: −11 = −7 + R, so R = −4. (Equivalently, by the remainder theorem, R equals the numerator evaluated at x = 1.)"
  },
  {
    id: "adv-h32",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = 3. If f(0) = 47 and f(−1) = 68, what is the value of f(8)?",
    choices: [
      "95",
      "20",
      "98",
      "−95"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − 3)² + k. From f(0): a(9) + k = 47. From f(−1): a(16) + k = 68. Subtracting gives −7a = −21, so a = 3 and k = 20. Then f(8) = 3(5)² + 20 = 95."
  },
  {
    id: "adv-h33",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = 3x³ + ax² + 3x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x − 2, the remainder is 37, and p(3) = 102. What is the value of a + b?",
    choices: [
      "3",
      "−4",
      "1",
      "4"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(2) = 37: 24 + 4a + 6 + b = 37, so 4a + b = 7. Also p(3) = 102: 9a + b = 12. Subtracting, −5a = −5, so a = 1 and b = 3. Thus a + b = 4."
  },
  {
    id: "adv-h34",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² − 5 and g(x) = 3x + k, where k is a positive constant. If f(g(1)) = 76, what is the value of k?",
    choices: [
      "−12",
      "9",
      "6",
      "81"
    ],
    answer: 2,
    explanation: "g(1) = 3 + k, so f(g(1)) = (3 + k)² − 5 = 76. Then (3 + k)² = 81, so 3 + k = 9 or 3 + k = −9. These give k = 6 or k = −12. Since k is positive, k = 6."
  },
  {
    id: "adv-h35",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − x − 42. The function g is defined by g(x) = f(x − 5). What is the product of the zeros of g?",
    choices: [
      "−42",
      "−12",
      "−22",
      "11"
    ],
    answer: 1,
    explanation: "f(x) = (x − 7)(x + 6), so the zeros of f are 7 and −6. g(x) = 0 when x − 5 equals a zero of f, so x = 7 + 5 = 12 or x = −6 + 5 = −1. The product is −12."
  },
  {
    id: "adv-h36",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 3<sup>x + 2</sup> − 3<sup>x − 1</sup> = 2106, what is the value of 3<sup>x + 1</sup>?",
    choices: [
      "729",
      "5",
      "243",
      "487"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 3<sup>x − 1</sup>: 3<sup>x − 1</sup>(3<sup>3</sup> − 1) = 2106, so 3<sup>x − 1</sup>(26) = 2106 and 3<sup>x − 1</sup> = 81. Then x − 1 = 4, so x = 5, and 3<sup>x + 1</sup> = 729."
  },
  {
    id: "adv-h37",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "3x² + bx + c ≤ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is 5 ≤ x ≤ 10. What is the value of c?",
    choices: [
      "−150",
      "50",
      "153",
      "150"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are 5 and 10, and the expression equals 3(x − 5)(x − 10) (the parabola opens upward, so it is ≤ 0 between its zeros). Expanding gives 3x² − 45x + 150, so b = −45 and c = 150."
  },
  {
    id: "adv-h39",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = x² + 3x − 4<br>y = 8x + 2<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of y₁ + y₂?",
    choices: [
      "5",
      "44",
      "−56",
      "−44"
    ],
    answer: 1,
    explanation: "Set the expressions equal: x² + 3x − 4 = 8x + 2, so x² − 5x − 6 = 0, which factors as (x + 1)(x − 6) = 0. So x₁ and x₂ are −1 and 6, and the corresponding y-values on the line are 8(−1) + 2 = −6 and 8(6) + 2 = 50. The sum is 44."
  },
  {
    id: "adv-h40",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (−2x − 3)(−2x − 1) − 2(x² − 5) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "23",
      "3",
      "15",
      "7"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (−5)(−3) − 2(1 − 5) = 15 + 8 = 23. (Expanding fully gives 2x² + 8x + 13.)"
  },
  {
    id: "adv-h41",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = 3x² + 5x − 5<br>y = −x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of k?",
    choices: [
      "−5",
      "8",
      "−7",
      "−8"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: 3x² + 5x − 5 = −x + k, so 3x² + 6x − 5 − k = 0. Exactly one solution means the discriminant is 0: (6)² − 4(3)(−5 − k) = 0, which gives k = −8. The repeated solution is x = −(6)/(2·3) = −1."
  },
  {
    id: "adv-h42",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(3x + 72) = x + 6<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "−12",
      "−9",
      "3",
      "−3"
    ],
    answer: 2,
    explanation: "Squaring both sides gives 3x + 72 = x² + 12x + 36, so x² + 9x − 36 = 0, which factors as (x − 3)(x + 12) = 0. Squaring can introduce extraneous solutions, so check both: the right side x + 6 must be nonnegative. For x = −12, the right side is −6 < 0, so x = −12 is extraneous. Only x = 3 works, so the sum of all solutions is 3."
  },
  {
    id: "adv-h43",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "2<sup>2x</sup> − 20(2<sup>x</sup>) + 64 = 0<br><br>What is the sum of the solutions to the given equation?",
    choices: [
      "20",
      "6",
      "8",
      "16"
    ],
    answer: 1,
    explanation: "Let u = 2<sup>x</sup>, so 2<sup>2x</sup> = u². The equation becomes u² − 20u + 64 = 0, which factors as (u − 4)(u − 16) = 0. So 2<sup>x</sup> = 4 or 2<sup>x</sup> = 16, giving x = 2 or x = 4. The sum is 6."
  },
  {
    id: "adv-h44",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³ + 15x² + bx + c<br><br>In the given polynomial function, b and c are constants. If −4 and −5 are zeros of p, what is the third zero of p?",
    choices: [
      "−6",
      "6",
      "−4",
      "−9"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + c, the sum of the zeros is −a. Here −a = −15, so −4 + (−5) + r = −15, giving r = −6."
  },
  {
    id: "adv-h45",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 56t + 110. For how many seconds is the object at a height of at least 150 feet?",
    choices: [
      "2.5",
      "1",
      "1.75",
      "1.5"
    ],
    answer: 3,
    explanation: "Set h(t) = 150: −16t² + 56t + 110 = 150, so −16t² + 56t − 40 = 0. Dividing by −16 gives t² − 3.5t + 2.5 = 0, so t = 1 or t = 2.5. The object is at or above 150 feet between these times, for 2.5 − 1 = 1.5 seconds."
  },
  {
    id: "adv-h46",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The value of an investment increases by 96% every 2 weeks. Assuming the increase occurs at a constant percent rate per week, by what percent does it increase each week?",
    choices: [
      "48%",
      "96%",
      "40%",
      "24%"
    ],
    answer: 2,
    explanation: "If the per-week growth factor is r, then r<sup>2</sup> = 1 + 0.96 = 1.96. Taking the square root gives r = 1.4, which is a 40% increase each week. Dividing 96% by 2 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h47",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(2) = 36 and f(4) = 324, what is the value of f(5)?",
    choices: [
      "468",
      "972",
      "324",
      "2916"
    ],
    answer: 1,
    explanation: "Dividing, f(4)/f(2) = b<sup>2</sup> = 9, so b = 3. Then a = f(2)/b<sup>2</sup> = 4, so f(x) = 4(3)<sup>x</sup> and f(5) = 4(3)<sup>5</sup> = 972."
  },
  {
    id: "adv-h48",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² − 7x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 7. What is the value of c?",
    choices: [
      "0",
      "7",
      "1",
      "−1"
    ],
    answer: 0,
    explanation: "The solutions add to 7 (the opposite of the x-coefficient) and differ by 7. So they are (7 + 7)/2 = 7 and (7 − 7)/2 = 0. Their product is c = (7)(0) = 0."
  },
  {
    id: "adv-h49",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "3x² + kx + 6 = 0<br><br>In the given equation, k is an integer constant. For how many values of k does the equation have no real solutions?",
    choices: [
      "8",
      "19",
      "16",
      "17"
    ],
    answer: 3,
    explanation: "No real solutions means the discriminant is negative: k² − 4(3)(6) < 0, so k² < 72. The integers satisfying this are −8 through 8, including 0, which is 17 values."
  },
  {
    id: "adv-h50",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 4,
    prompt: "Which expression is equivalent to ∛(x<sup>5</sup>) · ∜(x<sup>3</sup>), where x > 0?",
    choices: [
      "x<sup>11/12</sup>",
      "x<sup>5/4</sup>",
      "x<sup>29/12</sup>",
      "x<sup>8/7</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: ∛(x<sup>5</sup>) = x<sup>5/3</sup> and ∜(x<sup>3</sup>) = x<sup>3/4</sup>. Multiplying powers with the same base adds exponents: 5/3 + 3/4 = 29/12, so the expression equals x<sup>29/12</sup>."
  },
  {
    id: "adv-h51",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "(x² + kx − 6)/(x − 1) = x + 6<br><br>In the given equation, k is a constant, and the equation is true for all x ≠ 1. What is the value of k?",
    choices: [
      "−7",
      "5",
      "7",
      "−6"
    ],
    answer: 1,
    explanation: "Multiplying both sides by x − 1 gives x² + kx − 6 = (x − 1)(x + 6) = x² + 5x − 6. Matching x-coefficients gives k = 5."
  },
  {
    id: "adv-h52",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = −6. If f(0) = −92 and f(−10) = −52, what is the value of f(−9)?",
    choices: [
      "−38",
      "−20",
      "−40",
      "38"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − (−6))² + k. From f(0): a(36) + k = −92. From f(−10): a(16) + k = −52. Subtracting gives 20a = −40, so a = −2 and k = −20. Then f(−9) = −2(−3)² − 20 = −38."
  },
  {
    id: "adv-h53",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = 2x³ + ax² + 2x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x + 2, the remainder is −18, and p(−1) = −11. What is the value of a + b?",
    choices: [
      "−30",
      "7",
      "3",
      "−7"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(−2) = −18: −16 + 4a − 4 + b = −18, so 4a + b = 2. Also p(−1) = −11: a + b = −7. Subtracting, 3a = 9, so a = 3 and b = −10. Thus a + b = −7."
  },
  {
    id: "adv-h54",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² + 6 and g(x) = 2x + k, where k is a positive constant. If f(g(3)) = 106, what is the value of k?",
    choices: [
      "−16",
      "10",
      "4",
      "100"
    ],
    answer: 2,
    explanation: "g(3) = 6 + k, so f(g(3)) = (6 + k)² + 6 = 106. Then (6 + k)² = 100, so 6 + k = 10 or 6 + k = −10. These give k = 4 or k = −16. Since k is positive, k = 4."
  },
  {
    id: "adv-h55",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 5x − 24. The function g is defined by g(x) = f(x − 2). What is the sum of the zeros of g?",
    choices: [
      "5",
      "9",
      "1",
      "−9"
    ],
    answer: 1,
    explanation: "f(x) = (x + 3)(x − 8), so the zeros of f are −3 and 8. g(x) = 0 when x − 2 equals a zero of f, so x = −3 + 2 = −1 or x = 8 + 2 = 10. The sum is 9."
  },
  {
    id: "adv-h56",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 2<sup>x + 1</sup> − 2<sup>x − 1</sup> = 6, what is the value of 4<sup>x</sup>?",
    choices: [
      "16",
      "2",
      "4",
      "8"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 2<sup>x − 1</sup>: 2<sup>x − 1</sup>(2<sup>2</sup> − 1) = 6, so 2<sup>x − 1</sup>(3) = 6 and 2<sup>x − 1</sup> = 2. Then x − 1 = 1, so x = 2, and 4<sup>x</sup> = 16."
  },
  {
    id: "adv-h57",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "−x² + bx + c ≥ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is −1 ≤ x ≤ 3. What is the value of c?",
    choices: [
      "−3",
      "2",
      "4",
      "3"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are −1 and 3, and the expression equals −1(x + 1)(x − 3) (the parabola opens downward, so it is ≥ 0 between its zeros). Expanding gives −x² + 2x + 3, so b = 2 and c = 3."
  },
  {
    id: "adv-h59",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = 2x² + 6x − 2<br>y = 10x + 28<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of x₁x₂?",
    choices: [
      "15",
      "−15",
      "−1",
      "14"
    ],
    answer: 1,
    explanation: "Set the expressions equal: 2x² + 6x − 2 = 10x + 28, so 2x² − 4x − 30 = 0, which factors as 2(x − 5)(x + 3) = 0. So x₁ and x₂ are 5 and −3, with product −15."
  },
  {
    id: "adv-h60",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (−4x + 8)(−4x − 5) − 3(x² + 3) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "−48",
      "−30",
      "−36",
      "−24"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (4)(−9) − 3(1 + 3) = −36 − 12 = −48. (Expanding fully gives 13x² − 12x − 49.)"
  },
  {
    id: "adv-h61",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = x² − 2x + 2<br>y = 6x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of x in that solution?",
    choices: [
      "−4",
      "8",
      "5",
      "4"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: x² − 2x + 2 = 6x + k, so x² − 8x + 2 − k = 0. Exactly one solution means the discriminant is 0: (−8)² − 4(1)(2 − k) = 0, which gives k = −14. The repeated solution is x = −(−8)/(2·1) = 4."
  },
  {
    id: "adv-h62",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(x − 2) = x − 4<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "3",
      "9",
      "6",
      "−6"
    ],
    answer: 2,
    explanation: "Squaring both sides gives x − 2 = x² − 8x + 16, so x² − 9x + 18 = 0, which factors as (x − 6)(x − 3) = 0. Squaring can introduce extraneous solutions, so check both: the right side x − 4 must be nonnegative. For x = 3, the right side is −1 < 0, so x = 3 is extraneous. Only x = 6 works, so the sum of all solutions is 6."
  },
  {
    id: "adv-h63",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "3<sup>2x</sup> − 36(3<sup>x</sup>) + 243 = 0<br><br>What is the greatest solution to the given equation?",
    choices: [
      "36",
      "3",
      "5",
      "27"
    ],
    answer: 1,
    explanation: "Let u = 3<sup>x</sup>, so 3<sup>2x</sup> = u². The equation becomes u² − 36u + 243 = 0, which factors as (u − 9)(u − 27) = 0. So 3<sup>x</sup> = 9 or 3<sup>x</sup> = 27, giving x = 2 or x = 3. The greatest solution is 3."
  },
  {
    id: "adv-h64",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³ + ax² + bx − 60<br><br>In the given polynomial function, a and b are constants. If −4 and −5 are zeros of p, what is the third zero of p?",
    choices: [
      "3",
      "−3",
      "−60",
      "−9"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + d, the product of the three zeros is −d. Here −d = 60, so (−4)(−5)r = 60, giving 20r = 60 and r = 3."
  },
  {
    id: "adv-h65",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 64t + 32. For how many seconds is the object at a height of at least 60 feet?",
    choices: [
      "3.5",
      "0.5",
      "2",
      "3"
    ],
    answer: 3,
    explanation: "Set h(t) = 60: −16t² + 64t + 32 = 60, so −16t² + 64t − 28 = 0. Dividing by −16 gives t² − 4t + 1.75 = 0, so t = 0.5 or t = 3.5. The object is at or above 60 feet between these times, for 3.5 − 0.5 = 3 seconds."
  },
  {
    id: "adv-h66",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "A population of bacteria increases by 125% every 2 years. Assuming the increase occurs at a constant percent rate per year, by what percent does it increase each year?",
    choices: [
      "62.5%",
      "125%",
      "50%",
      "31%"
    ],
    answer: 2,
    explanation: "If the per-year growth factor is r, then r<sup>2</sup> = 1 + 1.25 = 2.25. Taking the square root gives r = 1.5, which is a 50% increase each year. Dividing 125% by 2 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h67",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(2) = 216 and f(5) = 1728, what is the value of f(4)?",
    choices: [
      "1224",
      "864",
      "432",
      "1728"
    ],
    answer: 1,
    explanation: "Dividing, f(5)/f(2) = b<sup>3</sup> = 8, so b = 2. Then a = f(2)/b<sup>2</sup> = 54, so f(x) = 54(2)<sup>x</sup> and f(4) = 54(2)<sup>4</sup> = 864."
  },
  {
    id: "adv-h68",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² + 14x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 6. What is the value of c?",
    choices: [
      "40",
      "−40",
      "49",
      "46"
    ],
    answer: 0,
    explanation: "The solutions add to −14 (the opposite of the x-coefficient) and differ by 6. So they are (−14 + 6)/2 = −4 and (−14 − 6)/2 = −10. Their product is c = (−4)(−10) = 40."
  },
  {
    id: "adv-h69",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² + kx + 8 = 0<br><br>In the given equation, k is a constant. For how many positive integer values of k does the equation have no real solutions?",
    choices: [
      "11",
      "6",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "A quadratic has no real solutions when its discriminant is negative: k² − 4(1)(8) < 0, so k² < 32. The positive integers with k² < 32 are 1 through 5, so there are 5 values."
  },
  {
    id: "adv-h70",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 3,
    prompt: "Which expression is equivalent to √(x<sup>7</sup>) · ∜(x), where x > 0?",
    choices: [
      "x<sup>13/4</sup>",
      "x<sup>7/8</sup>",
      "x<sup>15/4</sup>",
      "x<sup>4/3</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: √(x<sup>7</sup>) = x<sup>7/2</sup> and ∜(x) = x<sup>1/4</sup>. Multiplying powers with the same base adds exponents: 7/2 + 1/4 = 15/4, so the expression equals x<sup>15/4</sup>."
  },
  {
    id: "adv-h71",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "(x² + kx − 21)/(x + 7) = x − 3<br><br>In the given equation, k is a constant, and the equation is true for all x ≠ −7. What is the value of k?",
    choices: [
      "10",
      "4",
      "−10",
      "−21"
    ],
    answer: 1,
    explanation: "Multiplying both sides by x + 7 gives x² + kx − 21 = (x + 7)(x − 3) = x² + 4x − 21. Matching x-coefficients gives k = 4."
  },
  {
    id: "adv-h72",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = 6. If f(0) = −37 and f(4) = −5, what is the value of f(7)?",
    choices: [
      "−2",
      "−1",
      "−3",
      "2"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − 6)² + k. From f(0): a(36) + k = −37. From f(4): a(4) + k = −5. Subtracting gives 32a = −32, so a = −1 and k = −1. Then f(7) = −1(1)² − 1 = −2."
  },
  {
    id: "adv-h73",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = 3x³ + ax² + x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x − 2, the remainder is 31, and p(−1) = −11. What is the value of ab?",
    choices: [
      "−7",
      "44",
      "4",
      "−44"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(2) = 31: 24 + 4a + 2 + b = 31, so 4a + b = 5. Also p(−1) = −11: a + b = −7. Subtracting, 3a = 12, so a = 4 and b = −11. Thus ab = −44."
  },
  {
    id: "adv-h74",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² − 2 and g(x) = 3x + k, where k is a positive constant. If f(g(3)) = 287, what is the value of k?",
    choices: [
      "−26",
      "17",
      "8",
      "289"
    ],
    answer: 2,
    explanation: "g(3) = 9 + k, so f(g(3)) = (9 + k)² − 2 = 287. Then (9 + k)² = 289, so 9 + k = 17 or 9 + k = −17. These give k = 8 or k = −26. Since k is positive, k = 8."
  },
  {
    id: "adv-h75",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 5x + 6. The function g is defined by g(x) = f(x + 5). What is the sum of the zeros of g?",
    choices: [
      "5",
      "−5",
      "15",
      "0"
    ],
    answer: 1,
    explanation: "f(x) = (x − 3)(x − 2), so the zeros of f are 3 and 2. g(x) = 0 when x + 5 equals a zero of f, so x = 3 − 5 = −2 or x = 2 − 5 = −3. The sum is −5."
  },
  {
    id: "adv-h76",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 3<sup>x + 1</sup> − 3<sup>x − 1</sup> = 72, what is the value of 9<sup>x</sup>?",
    choices: [
      "729",
      "3",
      "27",
      "243"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 3<sup>x − 1</sup>: 3<sup>x − 1</sup>(3<sup>2</sup> − 1) = 72, so 3<sup>x − 1</sup>(8) = 72 and 3<sup>x − 1</sup> = 9. Then x − 1 = 2, so x = 3, and 9<sup>x</sup> = 729."
  },
  {
    id: "adv-h77",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "x² + bx + c ≤ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is −4 ≤ x ≤ 6. What is the value of b+c?",
    choices: [
      "22",
      "−22",
      "−23",
      "−26"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are −4 and 6, and the expression equals (x + 4)(x − 6) (the parabola opens upward, so it is ≤ 0 between its zeros). Expanding gives x² − 2x − 24, so b = −2 and c = −24, and b + c = −26."
  },
  {
    id: "adv-h78",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture is halved every 9 hours. At time t = 0, there are 2400 cells. Which function gives the number of cells, N(t), t minutes after time t = 0?",
    choices: [
      "2400(1/2)<sup>t/9</sup>",
      "2400(1/2)<sup>540t</sup>",
      "2400(1/2)<sup>t/540</sup>",
      "2400(1/2)<sup>9t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 1/2 once every 9 hours. Since t is measured in minutes, 9 hours is 540 minutes, so the number of periods after t minutes is t/540. Therefore N(t) = 2400(1/2)<sup>t/540</sup>. Using t/9 would treat t as hours."
  },
  {
    id: "adv-h79",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = 2x² − 2x − 6<br>y = −18x − 36<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of y₁ + y₂?",
    choices: [
      "−8",
      "72",
      "36",
      "−72"
    ],
    answer: 1,
    explanation: "Set the expressions equal: 2x² − 2x − 6 = −18x − 36, so 2x² + 16x + 30 = 0, which factors as 2(x + 5)(x + 3) = 0. So x₁ and x₂ are −5 and −3, and the corresponding y-values on the line are −18(−5) − 36 = 54 and −18(−3) − 36 = 18. The sum is 72."
  },
  {
    id: "adv-h80",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (4x − 7)(−x − 5) − 5(x² − 1) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "18",
      "8",
      "−18",
      "19"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (−3)(−6) − 5(1 − 1) = 18 − 0 = 18. (Expanding fully gives −9x² − 13x + 40.)"
  },
  {
    id: "adv-h81",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = −2x² + 20x + 4<br>y = 4x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of k?",
    choices: [
      "4",
      "−36",
      "34",
      "36"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: −2x² + 20x + 4 = 4x + k, so −2x² + 16x + 4 − k = 0. Exactly one solution means the discriminant is 0: (16)² − 4(−2)(4 − k) = 0, which gives k = 36. The repeated solution is x = −(16)/(2·(−2)) = 4."
  },
  {
    id: "adv-h82",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(4x + 17) = x + 3<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "−4",
      "−2",
      "2",
      "6"
    ],
    answer: 2,
    explanation: "Squaring both sides gives 4x + 17 = x² + 6x + 9, so x² + 2x − 8 = 0, which factors as (x − 2)(x + 4) = 0. Squaring can introduce extraneous solutions, so check both: the right side x + 3 must be nonnegative. For x = −4, the right side is −1 < 0, so x = −4 is extraneous. Only x = 2 works, so the sum of all solutions is 2."
  },
  {
    id: "adv-h83",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "2<sup>2x</sup> − 24(2<sup>x</sup>) + 128 = 0<br><br>What is the sum of the solutions to the given equation?",
    choices: [
      "24",
      "7",
      "12",
      "16"
    ],
    answer: 1,
    explanation: "Let u = 2<sup>x</sup>, so 2<sup>2x</sup> = u². The equation becomes u² − 24u + 128 = 0, which factors as (u − 8)(u − 16) = 0. So 2<sup>x</sup> = 8 or 2<sup>x</sup> = 16, giving x = 3 or x = 4. The sum is 7."
  },
  {
    id: "adv-h84",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³  + bx + c<br><br>In the given polynomial function, b and c are constants. If −3 and 2 are zeros of p, what is the third zero of p?",
    choices: [
      "1",
      "−1",
      "3",
      "2"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + c, the sum of the zeros is −a. Here −a = 0, so −3 + 2 + r = 0, giving r = 1."
  },
  {
    id: "adv-h85",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 80t + 94. For how many seconds is the object at a height of at least 130 feet?",
    choices: [
      "4.5",
      "0.5",
      "2.5",
      "4"
    ],
    answer: 3,
    explanation: "Set h(t) = 130: −16t² + 80t + 94 = 130, so −16t² + 80t − 36 = 0. Dividing by −16 gives t² − 5t + 2.25 = 0, so t = 0.5 or t = 4.5. The object is at or above 130 feet between these times, for 4.5 − 0.5 = 4 seconds."
  },
  {
    id: "adv-h86",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of active users of an app increases by 44% every 2 years. Assuming the increase occurs at a constant percent rate per year, by what percent does it increase each year?",
    choices: [
      "22%",
      "44%",
      "20%",
      "11%"
    ],
    answer: 2,
    explanation: "If the per-year growth factor is r, then r<sup>2</sup> = 1 + 0.44 = 1.44. Taking the square root gives r = 1.2, which is a 20% increase each year. Dividing 44% by 2 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h87",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(2) = 36 and f(4) = 16, what is the value of f(3)?",
    choices: [
      "26",
      "24",
      "36",
      "16"
    ],
    answer: 1,
    explanation: "Dividing, f(4)/f(2) = b<sup>2</sup> = 4/9, so b = 2/3. Then a = f(2)/b<sup>2</sup> = 81, so f(x) = 81(2/3)<sup>x</sup> and f(3) = 81(2/3)<sup>3</sup> = 24."
  },
  {
    id: "adv-h88",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² − 3x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 5. What is the value of c?",
    choices: [
      "−4",
      "1",
      "4",
      "−3"
    ],
    answer: 0,
    explanation: "The solutions add to 3 (the opposite of the x-coefficient) and differ by 5. So they are (3 + 5)/2 = 4 and (3 − 5)/2 = −1. Their product is c = (4)(−1) = −4."
  },
  {
    id: "adv-h89",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "4x² + kx + 6 = 0<br><br>In the given equation, k is a constant. For how many positive integer values of k does the equation have no real solutions?",
    choices: [
      "19",
      "10",
      "8",
      "9"
    ],
    answer: 3,
    explanation: "A quadratic has no real solutions when its discriminant is negative: k² − 4(4)(6) < 0, so k² < 96. The positive integers with k² < 96 are 1 through 9, so there are 9 values."
  },
  {
    id: "adv-h90",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 4,
    prompt: "Which expression is equivalent to <sup>5</sup>√(x<sup>2</sup>) · <sup>6</sup>√(x<sup>4</sup>), where x > 0?",
    choices: [
      "x<sup>−4/15</sup>",
      "x<sup>4/15</sup>",
      "x<sup>16/15</sup>",
      "x<sup>6/11</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: <sup>5</sup>√(x<sup>2</sup>) = x<sup>2/5</sup> and <sup>6</sup>√(x<sup>4</sup>) = x<sup>2/3</sup>. Multiplying powers with the same base adds exponents: 2/5 + 2/3 = 16/15, so the expression equals x<sup>16/15</sup>."
  },
  {
    id: "adv-h91",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (x² + 11x + 27)/(x + 4) is equivalent to x + 7 + R/(x + 4), where R is a constant and x ≠ −4. What is the value of R?",
    choices: [
      "27",
      "−1",
      "1",
      "28"
    ],
    answer: 1,
    explanation: "Multiply both sides by (x + 4): x² + 11x + 27 = (x + 4)(x + 7) + R = x² + 11x + 28 + R. Matching constants: 27 = 28 + R, so R = −1. (Equivalently, by the remainder theorem, R equals the numerator evaluated at x = −4.)"
  },
  {
    id: "adv-h92",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = 5. If f(0) = −67 and f(3) = −4, what is the value of f(9)?",
    choices: [
      "−40",
      "8",
      "−43",
      "40"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − 5)² + k. From f(0): a(25) + k = −67. From f(3): a(4) + k = −4. Subtracting gives 21a = −63, so a = −3 and k = 8. Then f(9) = −3(4)² + 8 = −40."
  },
  {
    id: "adv-h93",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = x³ + ax² − x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x − 1, the remainder is −5, and p(2) = −8. What is the value of a + b?",
    choices: [
      "6",
      "5",
      "−3",
      "−5"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(1) = −5: 1 + a − 1 + b = −5, so a + b = −5. Also p(2) = −8: 4a + b = −14. Subtracting, −3a = 9, so a = −3 and b = −2. Thus a + b = −5."
  },
  {
    id: "adv-h94",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² + 6 and g(x) = 4x + k, where k is a positive constant. If f(g(2)) = 127, what is the value of k?",
    choices: [
      "−19",
      "11",
      "3",
      "121"
    ],
    answer: 2,
    explanation: "g(2) = 8 + k, so f(g(2)) = (8 + k)² + 6 = 127. Then (8 + k)² = 121, so 8 + k = 11 or 8 + k = −11. These give k = 3 or k = −19. Since k is positive, k = 3."
  },
  {
    id: "adv-h95",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 7x − 8. The function g is defined by g(x) = f(x − 3). What is the sum of the zeros of g?",
    choices: [
      "−7",
      "−1",
      "−13",
      "1"
    ],
    answer: 1,
    explanation: "f(x) = (x − 1)(x + 8), so the zeros of f are 1 and −8. g(x) = 0 when x − 3 equals a zero of f, so x = 1 + 3 = 4 or x = −8 + 3 = −5. The sum is −1."
  },
  {
    id: "adv-h96",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 3<sup>x + 2</sup> − 3<sup>x − 2</sup> = 240, what is the value of 3<sup>x + 1</sup>?",
    choices: [
      "81",
      "3",
      "27",
      "55"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 3<sup>x − 2</sup>: 3<sup>x − 2</sup>(3<sup>4</sup> − 1) = 240, so 3<sup>x − 2</sup>(80) = 240 and 3<sup>x − 2</sup> = 3. Then x − 2 = 1, so x = 3, and 3<sup>x + 1</sup> = 81."
  },
  {
    id: "adv-h97",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "−2x² + bx + c ≥ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is 3 ≤ x ≤ 11. What is the value of b+c?",
    choices: [
      "94",
      "47",
      "33",
      "−38"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are 3 and 11, and the expression equals −2(x − 3)(x − 11) (the parabola opens downward, so it is ≥ 0 between its zeros). Expanding gives −2x² + 28x − 66, so b = 28 and c = −66, and b + c = −38."
  },
  {
    id: "adv-h99",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = 2x² + x + 3<br>y = −5x − 1<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of x₁ + x₂?",
    choices: [
      "3",
      "−3",
      "1/2",
      "−5/2"
    ],
    answer: 1,
    explanation: "Set the expressions equal: 2x² + x + 3 = −5x − 1, so 2x² + 6x + 4 = 0, which factors as 2(x + 2)(x + 1) = 0. So x₁ and x₂ are −2 and −1, with sum −3."
  },
  {
    id: "adv-h100",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (x + 4)(−4x + 9) − 3(x² + 7) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "1",
      "43",
      "25",
      "49"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (5)(5) − 3(1 + 7) = 25 − 24 = 1. (Expanding fully gives −7x² − 7x + 15.)"
  },
  {
    id: "adv-h101",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = x² − 4x + 3<br>y = 6x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of k?",
    choices: [
      "3",
      "22",
      "−21",
      "−22"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: x² − 4x + 3 = 6x + k, so x² − 10x + 3 − k = 0. Exactly one solution means the discriminant is 0: (−10)² − 4(1)(3 − k) = 0, which gives k = −22. The repeated solution is x = −(−10)/(2·1) = 5."
  },
  {
    id: "adv-h102",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(7x + 46) = x + 4<br><br>What is the solution to the given equation?",
    choices: [
      "−6",
      "−1",
      "5",
      "−5"
    ],
    answer: 2,
    explanation: "Squaring both sides gives 7x + 46 = x² + 8x + 16, so x² + x − 30 = 0, which factors as (x − 5)(x + 6) = 0. Squaring can introduce extraneous solutions, so check both: the right side x + 4 must be nonnegative. For x = −6, the right side is −2 < 0, so x = −6 is extraneous. Only x = 5 works."
  },
  {
    id: "adv-h103",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "2<sup>2x</sup> − 6(2<sup>x</sup>) + 8 = 0<br><br>What is the sum of the solutions to the given equation?",
    choices: [
      "6",
      "3",
      "2",
      "4"
    ],
    answer: 1,
    explanation: "Let u = 2<sup>x</sup>, so 2<sup>2x</sup> = u². The equation becomes u² − 6u + 8 = 0, which factors as (u − 2)(u − 4) = 0. So 2<sup>x</sup> = 2 or 2<sup>x</sup> = 4, giving x = 1 or x = 2. The sum is 3."
  },
  {
    id: "adv-h104",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³ + 3x² + bx + c<br><br>In the given polynomial function, b and c are constants. If −1 and 2 are zeros of p, what is the third zero of p?",
    choices: [
      "−4",
      "4",
      "−2",
      "1"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + c, the sum of the zeros is −a. Here −a = −3, so −1 + 2 + r = −3, giving r = −4."
  },
  {
    id: "adv-h105",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 64t + 52. For how many seconds is the object at a height of at least 80 feet?",
    choices: [
      "3.5",
      "0.5",
      "2",
      "3"
    ],
    answer: 3,
    explanation: "Set h(t) = 80: −16t² + 64t + 52 = 80, so −16t² + 64t − 28 = 0. Dividing by −16 gives t² − 4t + 1.75 = 0, so t = 0.5 or t = 3.5. The object is at or above 80 feet between these times, for 3.5 − 0.5 = 3 seconds."
  },
  {
    id: "adv-h106",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The amount of a medication in a patient's bloodstream decreases by 51% every 2 decades. Assuming the decrease occurs at a constant percent rate per decade, by what percent does it decrease each decade?",
    choices: [
      "25.5%",
      "51%",
      "30%",
      "13%"
    ],
    answer: 2,
    explanation: "If the per-decade growth factor is r, then r<sup>2</sup> = 1 − 0.51 = 0.49. Taking the square root gives r = 0.7, which is a 30% decrease each decade. Dividing 51% by 2 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h107",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(1) = 96 and f(3) = 384, what is the value of f(4)?",
    choices: [
      "528",
      "768",
      "384",
      "1536"
    ],
    answer: 1,
    explanation: "Dividing, f(3)/f(1) = b<sup>2</sup> = 4, so b = 2. Then a = f(1)/b<sup>1</sup> = 48, so f(x) = 48(2)<sup>x</sup> and f(4) = 48(2)<sup>4</sup> = 768."
  },
  {
    id: "adv-h108",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² − 14x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 4. What is the value of c?",
    choices: [
      "45",
      "48",
      "49",
      "−45"
    ],
    answer: 0,
    explanation: "The solutions add to 14 (the opposite of the x-coefficient) and differ by 4. So they are (14 + 4)/2 = 9 and (14 − 4)/2 = 5. Their product is c = (9)(5) = 45."
  },
  {
    id: "adv-h109",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "3x² + kx + 2 = 0<br><br>In the given equation, k is a constant. For how many positive integer values of k does the equation have no real solutions?",
    choices: [
      "9",
      "5",
      "3",
      "4"
    ],
    answer: 3,
    explanation: "A quadratic has no real solutions when its discriminant is negative: k² − 4(3)(2) < 0, so k² < 24. The positive integers with k² < 24 are 1 through 4, so there are 4 values."
  },
  {
    id: "adv-h110",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 3,
    prompt: "Which expression is equivalent to √(x) ÷ ∛(x<sup>2</sup>), where x > 0?",
    choices: [
      "x<sup>7/6</sup>",
      "x<sup>1/3</sup>",
      "x<sup>−1/6</sup>",
      "x<sup>−1</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: √(x) = x<sup>1/2</sup> and ∛(x<sup>2</sup>) = x<sup>2/3</sup>. Dividing powers with the same base subtracts exponents: 1/2 − 2/3 = −1/6, so the expression equals x<sup>−1/6</sup>."
  },
  {
    id: "adv-h111",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (x² − 2x − 26)/(x − 5) is equivalent to x + 3 + R/(x − 5), where R is a constant and x ≠ 5. What is the value of R?",
    choices: [
      "−26",
      "−11",
      "11",
      "−15"
    ],
    answer: 1,
    explanation: "Multiply both sides by (x − 5): x² − 2x − 26 = (x − 5)(x + 3) + R = x² − 2x − 15 + R. Matching constants: −26 = −15 + R, so R = −11. (Equivalently, by the remainder theorem, R equals the numerator evaluated at x = 5.)"
  },
  {
    id: "adv-h112",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = −1. If f(0) = 6 and f(−2) = 6, what is the value of f(−6)?",
    choices: [
      "102",
      "2",
      "106",
      "−102"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − (−1))² + k. From f(0): a(1) + k = 6. From f(−2): a(1) + k = 6. Subtracting gives 0a = 0, so a = 4 and k = 2. Then f(−6) = 4(−5)² + 2 = 102."
  },
  {
    id: "adv-h113",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = 3x³ + ax² − 4x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x + 3, the remainder is −23, and p(−2) = 0. What is the value of ab?",
    choices: [
      "−2",
      "48",
      "6",
      "−48"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(−3) = −23: −81 + 9a + 12 + b = −23, so 9a + b = 46. Also p(−2) = 0: 4a + b = 16. Subtracting, 5a = 30, so a = 6 and b = −8. Thus ab = −48."
  },
  {
    id: "adv-h114",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² − 2 and g(x) = 2x + k, where k is a positive constant. If f(g(−1)) = 23, what is the value of k?",
    choices: [
      "−3",
      "5",
      "7",
      "25"
    ],
    answer: 2,
    explanation: "g(−1) = −2 + k, so f(g(−1)) = (−2 + k)² − 2 = 23. Then (−2 + k)² = 25, so −2 + k = 5 or −2 + k = −5. These give k = 7 or k = −3. Since k is positive, k = 7."
  },
  {
    id: "adv-h115",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 2x − 24. The function g is defined by g(x) = f(x + 1). What is the sum of the zeros of g?",
    choices: [
      "−2",
      "−4",
      "0",
      "4"
    ],
    answer: 1,
    explanation: "f(x) = (x + 6)(x − 4), so the zeros of f are −6 and 4. g(x) = 0 when x + 1 equals a zero of f, so x = −6 − 1 = −7 or x = 4 − 1 = 3. The sum is −4."
  },
  {
    id: "adv-h116",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 2<sup>x + 3</sup> − 2<sup>x − 2</sup> = 62, what is the value of 4<sup>x</sup>?",
    choices: [
      "64",
      "3",
      "8",
      "32"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 2<sup>x − 2</sup>: 2<sup>x − 2</sup>(2<sup>5</sup> − 1) = 62, so 2<sup>x − 2</sup>(31) = 62 and 2<sup>x − 2</sup> = 2. Then x − 2 = 1, so x = 3, and 4<sup>x</sup> = 64."
  },
  {
    id: "adv-h117",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "−2x² + bx + c ≥ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is −4 ≤ x ≤ 3. What is the value of b+c?",
    choices: [
      "−26",
      "−13",
      "−12",
      "22"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are −4 and 3, and the expression equals −2(x + 4)(x − 3) (the parabola opens downward, so it is ≥ 0 between its zeros). Expanding gives −2x² − 2x + 24, so b = −2 and c = 24, and b + c = 22."
  },
  {
    id: "adv-h119",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = 2x² − x − 8<br>y = −3x + 52<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of x₁ + x₂?",
    choices: [
      "1",
      "−1",
      "−1/2",
      "−3/2"
    ],
    answer: 1,
    explanation: "Set the expressions equal: 2x² − x − 8 = −3x + 52, so 2x² + 2x − 60 = 0, which factors as 2(x − 5)(x + 6) = 0. So x₁ and x₂ are 5 and −6, with sum −1."
  },
  {
    id: "adv-h120",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (4x − 5)(4x + 9) − 3(x² − 7) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "5",
      "−37",
      "−13",
      "−31"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (−1)(13) − 3(1 − 7) = −13 + 18 = 5. (Expanding fully gives 13x² + 16x − 24.)"
  },
  {
    id: "adv-h121",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = −x² + 8x + 5<br>y = 4x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of x in that solution?",
    choices: [
      "−2",
      "4",
      "3",
      "2"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: −x² + 8x + 5 = 4x + k, so −x² + 4x + 5 − k = 0. Exactly one solution means the discriminant is 0: (4)² − 4(−1)(5 − k) = 0, which gives k = 9. The repeated solution is x = −(4)/(2·(−1)) = 2."
  },
  {
    id: "adv-h122",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(5x + 46) = x + 2<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "−6",
      "1",
      "7",
      "−7"
    ],
    answer: 2,
    explanation: "Squaring both sides gives 5x + 46 = x² + 4x + 4, so x² − x − 42 = 0, which factors as (x − 7)(x + 6) = 0. Squaring can introduce extraneous solutions, so check both: the right side x + 2 must be nonnegative. For x = −6, the right side is −4 < 0, so x = −6 is extraneous. Only x = 7 works, so the sum of all solutions is 7."
  },
  {
    id: "adv-h123",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "2<sup>2x</sup> − 6(2<sup>x</sup>) + 8 = 0<br><br>What is the product of the solutions to the given equation?",
    choices: [
      "6",
      "2",
      "3",
      "4"
    ],
    answer: 1,
    explanation: "Let u = 2<sup>x</sup>, so 2<sup>2x</sup> = u². The equation becomes u² − 6u + 8 = 0, which factors as (u − 2)(u − 4) = 0. So 2<sup>x</sup> = 2 or 2<sup>x</sup> = 4, giving x = 1 or x = 2. The product is 2."
  },
  {
    id: "adv-h124",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³ + x² + bx + c<br><br>In the given polynomial function, b and c are constants. If −4 and −3 are zeros of p, what is the third zero of p?",
    choices: [
      "6",
      "−6",
      "8",
      "−7"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + c, the sum of the zeros is −a. Here −a = −1, so −4 + (−3) + r = −1, giving r = 6."
  },
  {
    id: "adv-h125",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 72t + 18. For how many seconds is the object at a height of at least 90 feet?",
    choices: [
      "3",
      "2.25",
      "0.75",
      "1.5"
    ],
    answer: 3,
    explanation: "Set h(t) = 90: −16t² + 72t + 18 = 90, so −16t² + 72t − 72 = 0. Dividing by −16 gives t² − 4.5t + 4.5 = 0, so t = 1.5 or t = 3. The object is at or above 90 feet between these times, for 3 − 1.5 = 1.5 seconds."
  },
  {
    id: "adv-h126",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of active users of an app increases by 69% every 2 months. Assuming the increase occurs at a constant percent rate per month, by what percent does it increase each month?",
    choices: [
      "34.5%",
      "69%",
      "30%",
      "17%"
    ],
    answer: 2,
    explanation: "If the per-month growth factor is r, then r<sup>2</sup> = 1 + 0.69 = 1.69. Taking the square root gives r = 1.3, which is a 30% increase each month. Dividing 69% by 2 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h127",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(2) = 192 and f(4) = 768, what is the value of f(5)?",
    choices: [
      "1056",
      "1536",
      "768",
      "3072"
    ],
    answer: 1,
    explanation: "Dividing, f(4)/f(2) = b<sup>2</sup> = 4, so b = 2. Then a = f(2)/b<sup>2</sup> = 48, so f(x) = 48(2)<sup>x</sup> and f(5) = 48(2)<sup>5</sup> = 1536."
  },
  {
    id: "adv-h128",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² + 2x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 6. What is the value of c?",
    choices: [
      "−8",
      "8",
      "1",
      "−2"
    ],
    answer: 0,
    explanation: "The solutions add to −2 (the opposite of the x-coefficient) and differ by 6. So they are (−2 + 6)/2 = 2 and (−2 − 6)/2 = −4. Their product is c = (2)(−4) = −8."
  },
  {
    id: "adv-h129",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "3x² + kx + 12 = 0<br><br>In the given equation, k is a constant. For how many positive integer values of k does the equation have no real solutions?",
    choices: [
      "23",
      "12",
      "10",
      "11"
    ],
    answer: 3,
    explanation: "A quadratic has no real solutions when its discriminant is negative: k² − 4(3)(12) < 0, so k² < 144. The positive integers with k² < 144 are 1 through 11, so there are 11 values."
  },
  {
    id: "adv-h130",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 4,
    prompt: "Which expression is equivalent to <sup>5</sup>√(x<sup>2</sup>) ÷ <sup>6</sup>√(x<sup>3</sup>), where x > 0?",
    choices: [
      "x<sup>9/10</sup>",
      "x<sup>1/5</sup>",
      "x<sup>−1/10</sup>",
      "x<sup>−1</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: <sup>5</sup>√(x<sup>2</sup>) = x<sup>2/5</sup> and <sup>6</sup>√(x<sup>3</sup>) = x<sup>1/2</sup>. Dividing powers with the same base subtracts exponents: 2/5 − 1/2 = −1/10, so the expression equals x<sup>−1/10</sup>."
  },
  {
    id: "adv-h131",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (x²  − 18)/(x + 3) is equivalent to x − 3 + R/(x + 3), where R is a constant and x ≠ −3. What is the value of R?",
    choices: [
      "−18",
      "−9",
      "9",
      "−27"
    ],
    answer: 1,
    explanation: "Multiply both sides by (x + 3): x² − 18 = (x + 3)(x − 3) + R = x² − 9 + R. Matching constants: −18 = −9 + R, so R = −9. (Equivalently, by the remainder theorem, R equals the numerator evaluated at x = −3.)"
  },
  {
    id: "adv-h132",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = 1. If f(0) = 5 and f(−2) = 29, what is the value of f(4)?",
    choices: [
      "29",
      "2",
      "32",
      "−29"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − 1)² + k. From f(0): a(1) + k = 5. From f(−2): a(9) + k = 29. Subtracting gives −8a = −24, so a = 3 and k = 2. Then f(4) = 3(3)² + 2 = 29."
  },
  {
    id: "adv-h133",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = x³ + ax² + 5x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x + 1, the remainder is 3, and p(2) = 33. What is the value of a + b?",
    choices: [
      "14",
      "−9",
      "2",
      "9"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(−1) = 3: −1 + a − 5 + b = 3, so a + b = 9. Also p(2) = 33: 4a + b = 15. Subtracting, −3a = −6, so a = 2 and b = 7. Thus a + b = 9."
  },
  {
    id: "adv-h134",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² + 8 and g(x) = 3x + k, where k is a positive constant. If f(g(3)) = 204, what is the value of k?",
    choices: [
      "−23",
      "14",
      "5",
      "196"
    ],
    answer: 2,
    explanation: "g(3) = 9 + k, so f(g(3)) = (9 + k)² + 8 = 204. Then (9 + k)² = 196, so 9 + k = 14 or 9 + k = −14. These give k = 5 or k = −23. Since k is positive, k = 5."
  },
  {
    id: "adv-h135",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 5x − 6. The function g is defined by g(x) = f(x + 3). What is the sum of the zeros of g?",
    choices: [
      "5",
      "−1",
      "11",
      "1"
    ],
    answer: 1,
    explanation: "f(x) = (x − 6)(x + 1), so the zeros of f are 6 and −1. g(x) = 0 when x + 3 equals a zero of f, so x = 6 − 3 = 3 or x = −1 − 3 = −4. The sum is −1."
  },
  {
    id: "adv-h136",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 2<sup>x + 2</sup> − 2<sup>x − 1</sup> = 14, what is the value of 4<sup>x</sup>?",
    choices: [
      "16",
      "2",
      "4",
      "8"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 2<sup>x − 1</sup>: 2<sup>x − 1</sup>(2<sup>3</sup> − 1) = 14, so 2<sup>x − 1</sup>(7) = 14 and 2<sup>x − 1</sup> = 2. Then x − 1 = 1, so x = 2, and 4<sup>x</sup> = 16."
  },
  {
    id: "adv-h137",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "−2x² + bx + c ≥ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is 3 ≤ x ≤ 9. What is the value of b+c?",
    choices: [
      "78",
      "39",
      "27",
      "−30"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are 3 and 9, and the expression equals −2(x − 3)(x − 9) (the parabola opens downward, so it is ≥ 0 between its zeros). Expanding gives −2x² + 24x − 54, so b = 24 and c = −54, and b + c = −30."
  },
  {
    id: "adv-h139",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = x² − 6x + 1<br>y = x − 5<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of x₁ + x₂?",
    choices: [
      "−7",
      "7",
      "−6",
      "1"
    ],
    answer: 1,
    explanation: "Set the expressions equal: x² − 6x + 1 = x − 5, so x² − 7x + 6 = 0, which factors as (x − 1)(x − 6) = 0. So x₁ and x₂ are 1 and 6, with sum 7."
  },
  {
    id: "adv-h140",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (−x − 4)(−4x + 4) − 2(x² − 4) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "6",
      "−10",
      "0",
      "−6"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (−5)(0) − 2(1 − 4) = 0 + 6 = 6. (Expanding fully gives 2x² + 12x − 8.)"
  },
  {
    id: "adv-h141",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = 2x² + 11x + 6<br>y = −5x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of x in that solution?",
    choices: [
      "4",
      "−8",
      "−3",
      "−4"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: 2x² + 11x + 6 = −5x + k, so 2x² + 16x + 6 − k = 0. Exactly one solution means the discriminant is 0: (16)² − 4(2)(6 − k) = 0, which gives k = −26. The repeated solution is x = −(16)/(2·2) = −4."
  },
  {
    id: "adv-h142",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(3x + 22) = x + 6<br><br>What is the solution to the given equation?",
    choices: [
      "−7",
      "−9",
      "−2",
      "2"
    ],
    answer: 2,
    explanation: "Squaring both sides gives 3x + 22 = x² + 12x + 36, so x² + 9x + 14 = 0, which factors as (x + 2)(x + 7) = 0. Squaring can introduce extraneous solutions, so check both: the right side x + 6 must be nonnegative. For x = −7, the right side is −1 < 0, so x = −7 is extraneous. Only x = −2 works."
  },
  {
    id: "adv-h143",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "2<sup>2x</sup> − 24(2<sup>x</sup>) + 128 = 0<br><br>What is the product of the solutions to the given equation?",
    choices: [
      "24",
      "12",
      "7",
      "16"
    ],
    answer: 1,
    explanation: "Let u = 2<sup>x</sup>, so 2<sup>2x</sup> = u². The equation becomes u² − 24u + 128 = 0, which factors as (u − 8)(u − 16) = 0. So 2<sup>x</sup> = 8 or 2<sup>x</sup> = 16, giving x = 3 or x = 4. The product is 12."
  },
  {
    id: "adv-h144",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³ + ax² + bx + 100<br><br>In the given polynomial function, a and b are constants. If 5 and 4 are zeros of p, what is the third zero of p?",
    choices: [
      "−5",
      "5",
      "100",
      "9"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + d, the product of the three zeros is −d. Here −d = −100, so (5)(4)r = −100, giving 20r = −100 and r = −5."
  },
  {
    id: "adv-h145",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 64t + 122. For how many seconds is the object at a height of at least 150 feet?",
    choices: [
      "3.5",
      "0.5",
      "2",
      "3"
    ],
    answer: 3,
    explanation: "Set h(t) = 150: −16t² + 64t + 122 = 150, so −16t² + 64t − 28 = 0. Dividing by −16 gives t² − 4t + 1.75 = 0, so t = 0.5 or t = 3.5. The object is at or above 150 feet between these times, for 3.5 − 0.5 = 3 seconds."
  },
  {
    id: "adv-h146",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "A population of bacteria increases by 33.1% every 3 years. Assuming the increase occurs at a constant percent rate per year, by what percent does it increase each year?",
    choices: [
      "11.03%",
      "33.1%",
      "10%",
      "6%"
    ],
    answer: 2,
    explanation: "If the per-year growth factor is r, then r<sup>3</sup> = 1 + 0.331 = 1.331. Taking the cube root gives r = 1.1, which is a 10% increase each year. Dividing 33.1% by 3 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h147",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(2) = 192 and f(5) = 12288, what is the value of f(4)?",
    choices: [
      "8256",
      "3072",
      "768",
      "12288"
    ],
    answer: 1,
    explanation: "Dividing, f(5)/f(2) = b<sup>3</sup> = 64, so b = 4. Then a = f(2)/b<sup>2</sup> = 12, so f(x) = 12(4)<sup>x</sup> and f(4) = 12(4)<sup>4</sup> = 3072."
  },
  {
    id: "adv-h148",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² − 13x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 3. What is the value of c?",
    choices: [
      "40",
      "−40",
      "43",
      "41"
    ],
    answer: 0,
    explanation: "The solutions add to 13 (the opposite of the x-coefficient) and differ by 3. So they are (13 + 3)/2 = 8 and (13 − 3)/2 = 5. Their product is c = (8)(5) = 40."
  },
  {
    id: "adv-h149",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "3x² + kx + 3 = 0<br><br>In the given equation, k is a constant. For how many positive integer values of k does the equation have no real solutions?",
    choices: [
      "11",
      "6",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "A quadratic has no real solutions when its discriminant is negative: k² − 4(3)(3) < 0, so k² < 36. The positive integers with k² < 36 are 1 through 5, so there are 5 values."
  },
  {
    id: "adv-h150",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 4,
    prompt: "Which expression is equivalent to ∜(x) · <sup>6</sup>√(x<sup>4</sup>), where x > 0?",
    choices: [
      "x<sup>−5/12</sup>",
      "x<sup>1/6</sup>",
      "x<sup>11/12</sup>",
      "x<sup>1/2</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: ∜(x) = x<sup>1/4</sup> and <sup>6</sup>√(x<sup>4</sup>) = x<sup>2/3</sup>. Multiplying powers with the same base adds exponents: 1/4 + 2/3 = 11/12, so the expression equals x<sup>11/12</sup>."
  },
  {
    id: "adv-h151",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (x² + 4x − 21)/(x + 6) is equivalent to x − 2 + R/(x + 6), where R is a constant and x ≠ −6. What is the value of R?",
    choices: [
      "−21",
      "−9",
      "9",
      "−12"
    ],
    answer: 1,
    explanation: "Multiply both sides by (x + 6): x² + 4x − 21 = (x + 6)(x − 2) + R = x² + 4x − 12 + R. Matching constants: −21 = −12 + R, so R = −9. (Equivalently, by the remainder theorem, R equals the numerator evaluated at x = −6.)"
  },
  {
    id: "adv-h152",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = 3. If f(0) = 35 and f(7) = 56, what is the value of f(1)?",
    choices: [
      "20",
      "8",
      "23",
      "−20"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − 3)² + k. From f(0): a(9) + k = 35. From f(7): a(16) + k = 56. Subtracting gives −7a = −21, so a = 3 and k = 8. Then f(1) = 3(−2)² + 8 = 20."
  },
  {
    id: "adv-h153",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = 3x³ + ax² + 5x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x − 1, the remainder is 13, and p(−3) = −123. What is the value of a + b?",
    choices: [
      "−36",
      "−5",
      "−4",
      "5"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(1) = 13: 3 + a + 5 + b = 13, so a + b = 5. Also p(−3) = −123: 9a + b = −27. Subtracting, −8a = 32, so a = −4 and b = 9. Thus a + b = 5."
  },
  {
    id: "adv-h154",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² + 8 and g(x) = 2x + k, where k is a positive constant. If f(g(−1)) = 44, what is the value of k?",
    choices: [
      "−4",
      "6",
      "8",
      "36"
    ],
    answer: 2,
    explanation: "g(−1) = −2 + k, so f(g(−1)) = (−2 + k)² + 8 = 44. Then (−2 + k)² = 36, so −2 + k = 6 or −2 + k = −6. These give k = 8 or k = −4. Since k is positive, k = 8."
  },
  {
    id: "adv-h155",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 14x + 48. The function g is defined by g(x) = f(x + 6). What is the sum of the zeros of g?",
    choices: [
      "14",
      "2",
      "26",
      "−2"
    ],
    answer: 1,
    explanation: "f(x) = (x − 6)(x − 8), so the zeros of f are 6 and 8. g(x) = 0 when x + 6 equals a zero of f, so x = 6 − 6 = 0 or x = 8 − 6 = 2. The sum is 2."
  },
  {
    id: "adv-h156",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 3<sup>x + 1</sup> − 3<sup>x − 1</sup> = 72, what is the value of 3<sup>x + 1</sup>?",
    choices: [
      "81",
      "3",
      "27",
      "55"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 3<sup>x − 1</sup>: 3<sup>x − 1</sup>(3<sup>2</sup> − 1) = 72, so 3<sup>x − 1</sup>(8) = 72 and 3<sup>x − 1</sup> = 9. Then x − 1 = 2, so x = 3, and 3<sup>x + 1</sup> = 81."
  },
  {
    id: "adv-h157",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "x² + bx + c ≤ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is −1 ≤ x ≤ 5. What is the value of b+c?",
    choices: [
      "1",
      "−1",
      "−4",
      "−9"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are −1 and 5, and the expression equals (x + 1)(x − 5) (the parabola opens upward, so it is ≤ 0 between its zeros). Expanding gives x² − 4x − 5, so b = −4 and c = −5, and b + c = −9."
  },
  {
    id: "adv-h159",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = −x² + 3x − 6<br>y = 4x − 26<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of x₁x₂?",
    choices: [
      "20",
      "−20",
      "6",
      "26"
    ],
    answer: 1,
    explanation: "Set the expressions equal: −x² + 3x − 6 = 4x − 26, so −x² − x + 20 = 0, which factors as −(x − 4)(x + 5) = 0. So x₁ and x₂ are 4 and −5, with product −20."
  },
  {
    id: "adv-h160",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (−2x − 9)(−3x + 8) − 3(x² − 7) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "−37",
      "−79",
      "−55",
      "−73"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (−11)(5) − 3(1 − 7) = −55 + 18 = −37. (Expanding fully gives 3x² + 11x − 51.)"
  },
  {
    id: "adv-h161",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = −2x² + 12x + 1<br>y = 4x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of k?",
    choices: [
      "1",
      "−9",
      "7",
      "9"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: −2x² + 12x + 1 = 4x + k, so −2x² + 8x + 1 − k = 0. Exactly one solution means the discriminant is 0: (8)² − 4(−2)(1 − k) = 0, which gives k = 9. The repeated solution is x = −(8)/(2·(−2)) = 2."
  },
  {
    id: "adv-h162",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(3x + 19) = x − 3<br><br>What is the solution to the given equation?",
    choices: [
      "−1",
      "9",
      "10",
      "−10"
    ],
    answer: 2,
    explanation: "Squaring both sides gives 3x + 19 = x² − 6x + 9, so x² − 9x − 10 = 0, which factors as (x − 10)(x + 1) = 0. Squaring can introduce extraneous solutions, so check both: the right side x − 3 must be nonnegative. For x = −1, the right side is −4 < 0, so x = −1 is extraneous. Only x = 10 works."
  },
  {
    id: "adv-h163",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "3<sup>2x</sup> − 84(3<sup>x</sup>) + 243 = 0<br><br>What is the product of the solutions to the given equation?",
    choices: [
      "84",
      "4",
      "5",
      "81"
    ],
    answer: 1,
    explanation: "Let u = 3<sup>x</sup>, so 3<sup>2x</sup> = u². The equation becomes u² − 84u + 243 = 0, which factors as (u − 3)(u − 81) = 0. So 3<sup>x</sup> = 3 or 3<sup>x</sup> = 81, giving x = 1 or x = 4. The product is 4."
  },
  {
    id: "adv-h164",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³ + ax² + bx − 40<br><br>In the given polynomial function, a and b are constants. If 2 and −4 are zeros of p, what is the third zero of p?",
    choices: [
      "−5",
      "5",
      "−40",
      "−2"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + d, the product of the three zeros is −d. Here −d = 40, so (2)(−4)r = 40, giving −8r = 40 and r = −5."
  },
  {
    id: "adv-h165",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 56t + 86. For how many seconds is the object at a height of at least 110 feet?",
    choices: [
      "3",
      "0.5",
      "1.75",
      "2.5"
    ],
    answer: 3,
    explanation: "Set h(t) = 110: −16t² + 56t + 86 = 110, so −16t² + 56t − 24 = 0. Dividing by −16 gives t² − 3.5t + 1.5 = 0, so t = 0.5 or t = 3. The object is at or above 110 feet between these times, for 3 − 0.5 = 2.5 seconds."
  },
  {
    id: "adv-h166",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The value of an investment increases by 44% every 2 years. Assuming the increase occurs at a constant percent rate per year, by what percent does it increase each year?",
    choices: [
      "22%",
      "44%",
      "20%",
      "11%"
    ],
    answer: 2,
    explanation: "If the per-year growth factor is r, then r<sup>2</sup> = 1 + 0.44 = 1.44. Taking the square root gives r = 1.2, which is a 20% increase each year. Dividing 44% by 2 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h167",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(2) = 256 and f(4) = 4096, what is the value of f(3)?",
    choices: [
      "2176",
      "1024",
      "256",
      "4096"
    ],
    answer: 1,
    explanation: "Dividing, f(4)/f(2) = b<sup>2</sup> = 16, so b = 4. Then a = f(2)/b<sup>2</sup> = 16, so f(x) = 16(4)<sup>x</sup> and f(3) = 16(4)<sup>3</sup> = 1024."
  },
  {
    id: "adv-h168",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² + 13x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 5. What is the value of c?",
    choices: [
      "36",
      "41",
      "−36",
      "37"
    ],
    answer: 0,
    explanation: "The solutions add to −13 (the opposite of the x-coefficient) and differ by 5. So they are (−13 + 5)/2 = −4 and (−13 − 5)/2 = −9. Their product is c = (−4)(−9) = 36."
  },
  {
    id: "adv-h169",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "4x² + kx + 9 = 0<br><br>In the given equation, k is a constant. For how many positive integer values of k does the equation have no real solutions?",
    choices: [
      "23",
      "12",
      "10",
      "11"
    ],
    answer: 3,
    explanation: "A quadratic has no real solutions when its discriminant is negative: k² − 4(4)(9) < 0, so k² < 144. The positive integers with k² < 144 are 1 through 11, so there are 11 values."
  },
  {
    id: "adv-h170",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 4,
    prompt: "Which expression is equivalent to <sup>5</sup>√(x<sup>4</sup>) ÷ ∜(x<sup>2</sup>), where x > 0?",
    choices: [
      "x<sup>13/10</sup>",
      "x<sup>2/5</sup>",
      "x<sup>3/10</sup>",
      "x<sup>2</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: <sup>5</sup>√(x<sup>4</sup>) = x<sup>4/5</sup> and ∜(x<sup>2</sup>) = x<sup>1/2</sup>. Dividing powers with the same base subtracts exponents: 4/5 − 1/2 = 3/10, so the expression equals x<sup>3/10</sup>."
  },
  {
    id: "adv-h171",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "(x² + kx − 2)/(x + 1) = x − 2<br><br>In the given equation, k is a constant, and the equation is true for all x ≠ −1. What is the value of k?",
    choices: [
      "3",
      "−1",
      "−3",
      "−2"
    ],
    answer: 1,
    explanation: "Multiplying both sides by x + 1 gives x² + kx − 2 = (x + 1)(x − 2) = x² − x − 2. Matching x-coefficients gives k = −1."
  },
  {
    id: "adv-h172",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = 4. If f(0) = −30 and f(1) = −16, what is the value of f(3)?",
    choices: [
      "0",
      "2",
      "−2",
      "−4"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − 4)² + k. From f(0): a(16) + k = −30. From f(1): a(9) + k = −16. Subtracting gives 7a = −14, so a = −2 and k = 2. Then f(3) = −2(−1)² + 2 = 0."
  },
  {
    id: "adv-h173",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = x³ + ax² + 2x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x − 2, the remainder is 33, and p(−1) = 6. What is the value of ab?",
    choices: [
      "9",
      "−20",
      "4",
      "20"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(2) = 33: 8 + 4a + 4 + b = 33, so 4a + b = 21. Also p(−1) = 6: a + b = 9. Subtracting, 3a = 12, so a = 4 and b = 5. Thus ab = 20."
  },
  {
    id: "adv-h174",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² + 9 and g(x) = 3x + k, where k is a positive constant. If f(g(3)) = 265, what is the value of k?",
    choices: [
      "−25",
      "16",
      "7",
      "256"
    ],
    answer: 2,
    explanation: "g(3) = 9 + k, so f(g(3)) = (9 + k)² + 9 = 265. Then (9 + k)² = 256, so 9 + k = 16 or 9 + k = −16. These give k = 7 or k = −25. Since k is positive, k = 7."
  },
  {
    id: "adv-h175",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 11x + 24. The function g is defined by g(x) = f(x − 3). What is the sum of the zeros of g?",
    choices: [
      "11",
      "17",
      "5",
      "−17"
    ],
    answer: 1,
    explanation: "f(x) = (x − 3)(x − 8), so the zeros of f are 3 and 8. g(x) = 0 when x − 3 equals a zero of f, so x = 3 + 3 = 6 or x = 8 + 3 = 11. The sum is 17."
  },
  {
    id: "adv-h176",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 2<sup>x + 1</sup> − 2<sup>x − 1</sup> = 12, what is the value of 2<sup>x + 1</sup>?",
    choices: [
      "16",
      "3",
      "8",
      "17"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 2<sup>x − 1</sup>: 2<sup>x − 1</sup>(2<sup>2</sup> − 1) = 12, so 2<sup>x − 1</sup>(3) = 12 and 2<sup>x − 1</sup> = 4. Then x − 1 = 2, so x = 3, and 2<sup>x + 1</sup> = 16."
  },
  {
    id: "adv-h177",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "3x² + bx + c ≤ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is −7 ≤ x ≤ −2. What is the value of c?",
    choices: [
      "−42",
      "14",
      "45",
      "42"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are −7 and −2, and the expression equals 3(x + 7)(x + 2) (the parabola opens upward, so it is ≤ 0 between its zeros). Expanding gives 3x² + 27x + 42, so b = 27 and c = 42."
  },
  {
    id: "adv-h179",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = x² − 2x + 10<br>y = 5x − 2<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of y₁ + y₂?",
    choices: [
      "7",
      "31",
      "5",
      "−31"
    ],
    answer: 1,
    explanation: "Set the expressions equal: x² − 2x + 10 = 5x − 2, so x² − 7x + 12 = 0, which factors as (x − 4)(x − 3) = 0. So x₁ and x₂ are 4 and 3, and the corresponding y-values on the line are 5(4) − 2 = 18 and 5(3) − 2 = 13. The sum is 31."
  },
  {
    id: "adv-h180",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (4x − 9)(−2x + 2) − 4(x² + 4) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "−20",
      "12",
      "0",
      "20"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (−5)(0) − 4(1 + 4) = 0 − 20 = −20. (Expanding fully gives −12x² + 26x − 34.)"
  },
  {
    id: "adv-h181",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = 2x² − 8x − 1<br>y = 4x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of x in that solution?",
    choices: [
      "−3",
      "6",
      "4",
      "3"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: 2x² − 8x − 1 = 4x + k, so 2x² − 12x − 1 − k = 0. Exactly one solution means the discriminant is 0: (−12)² − 4(2)(−1 − k) = 0, which gives k = −19. The repeated solution is x = −(−12)/(2·2) = 3."
  },
  {
    id: "adv-h182",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(6x + 28) = x + 2<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "−4",
      "2",
      "6",
      "−6"
    ],
    answer: 2,
    explanation: "Squaring both sides gives 6x + 28 = x² + 4x + 4, so x² − 2x − 24 = 0, which factors as (x − 6)(x + 4) = 0. Squaring can introduce extraneous solutions, so check both: the right side x + 2 must be nonnegative. For x = −4, the right side is −2 < 0, so x = −4 is extraneous. Only x = 6 works, so the sum of all solutions is 6."
  },
  {
    id: "adv-h183",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "5<sup>2x</sup> − 6(5<sup>x</sup>) + 5 = 0<br><br>What is the sum of the solutions to the given equation?",
    choices: [
      "6",
      "1",
      "0",
      "5"
    ],
    answer: 1,
    explanation: "Let u = 5<sup>x</sup>, so 5<sup>2x</sup> = u². The equation becomes u² − 6u + 5 = 0, which factors as (u − 1)(u − 5) = 0. So 5<sup>x</sup> = 1 or 5<sup>x</sup> = 5, giving x = 0 or x = 1. The sum is 1."
  },
  {
    id: "adv-h184",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³ − 2x² + bx + c<br><br>In the given polynomial function, b and c are constants. If −3 and 4 are zeros of p, what is the third zero of p?",
    choices: [
      "1",
      "−1",
      "3",
      "2"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + c, the sum of the zeros is −a. Here −a = 2, so −3 + 4 + r = 2, giving r = 1."
  },
  {
    id: "adv-h185",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 48t + 50. For how many seconds is the object at a height of at least 70 feet?",
    choices: [
      "2.5",
      "0.5",
      "1.5",
      "2"
    ],
    answer: 3,
    explanation: "Set h(t) = 70: −16t² + 48t + 50 = 70, so −16t² + 48t − 20 = 0. Dividing by −16 gives t² − 3t + 1.25 = 0, so t = 0.5 or t = 2.5. The object is at or above 70 feet between these times, for 2.5 − 0.5 = 2 seconds."
  },
  {
    id: "adv-h186",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The amount of a medication in a patient's bloodstream decreases by 48.8% every 3 months. Assuming the decrease occurs at a constant percent rate per month, by what percent does it decrease each month?",
    choices: [
      "16.27%",
      "48.8%",
      "20%",
      "8%"
    ],
    answer: 2,
    explanation: "If the per-month growth factor is r, then r<sup>3</sup> = 1 − 0.488 = 0.512. Taking the cube root gives r = 0.8, which is a 20% decrease each month. Dividing 48.8% by 3 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h187",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(3) = 3456 and f(5) = 55296, what is the value of f(4)?",
    choices: [
      "29376",
      "13824",
      "3456",
      "55296"
    ],
    answer: 1,
    explanation: "Dividing, f(5)/f(3) = b<sup>2</sup> = 16, so b = 4. Then a = f(3)/b<sup>3</sup> = 54, so f(x) = 54(4)<sup>x</sup> and f(4) = 54(4)<sup>4</sup> = 13824."
  },
  {
    id: "adv-h188",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² − 13x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 1. What is the value of c?",
    choices: [
      "42",
      "43",
      "−42",
      "41"
    ],
    answer: 0,
    explanation: "The solutions add to 13 (the opposite of the x-coefficient) and differ by 1. So they are (13 + 1)/2 = 7 and (13 − 1)/2 = 6. Their product is c = (7)(6) = 42."
  },
  {
    id: "adv-h189",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "2x² + kx + 1 = 0<br><br>In the given equation, k is a constant. For how many positive integer values of k does the equation have no real solutions?",
    choices: [
      "5",
      "3",
      "1",
      "2"
    ],
    answer: 3,
    explanation: "A quadratic has no real solutions when its discriminant is negative: k² − 4(2)(1) < 0, so k² < 8. The positive integers with k² < 8 are 1 through 2, so there are 2 values."
  },
  {
    id: "adv-h190",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 3,
    prompt: "Which expression is equivalent to √(x<sup>7</sup>) · ∛(x<sup>5</sup>), where x > 0?",
    choices: [
      "x<sup>11/6</sup>",
      "x<sup>35/6</sup>",
      "x<sup>31/6</sup>",
      "x<sup>12/5</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: √(x<sup>7</sup>) = x<sup>7/2</sup> and ∛(x<sup>5</sup>) = x<sup>5/3</sup>. Multiplying powers with the same base adds exponents: 7/2 + 5/3 = 31/6, so the expression equals x<sup>31/6</sup>."
  },
  {
    id: "adv-h191",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (x² − 2x − 37)/(x − 8) is equivalent to x + 6 + R/(x − 8), where R is a constant and x ≠ 8. What is the value of R?",
    choices: [
      "−37",
      "11",
      "−11",
      "−48"
    ],
    answer: 1,
    explanation: "Multiply both sides by (x − 8): x² − 2x − 37 = (x − 8)(x + 6) + R = x² − 2x − 48 + R. Matching constants: −37 = −48 + R, so R = 11. (Equivalently, by the remainder theorem, R equals the numerator evaluated at x = 8.)"
  },
  {
    id: "adv-h192",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = 1. If f(0) = 20 and f(0) = 20, what is the value of f(−3)?",
    choices: [
      "65",
      "17",
      "68",
      "−65"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − 1)² + k. From f(0): a(1) + k = 20. From f(0): a(1) + k = 20. Subtracting gives 0a = 0, so a = 3 and k = 17. Then f(−3) = 3(−4)² + 17 = 65."
  },
  {
    id: "adv-h193",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = x³ + ax² − 6x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x − 2, the remainder is −26, and p(−3) = −61. What is the value of ab?",
    choices: [
      "−4",
      "12",
      "−6",
      "−12"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(2) = −26: 8 + 4a − 12 + b = −26, so 4a + b = −22. Also p(−3) = −61: 9a + b = −52. Subtracting, −5a = 30, so a = −6 and b = 2. Thus ab = −12."
  },
  {
    id: "adv-h194",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² + 9 and g(x) = 2x + k, where k is a positive constant. If f(g(3)) = 153, what is the value of k?",
    choices: [
      "−18",
      "12",
      "6",
      "144"
    ],
    answer: 2,
    explanation: "g(3) = 6 + k, so f(g(3)) = (6 + k)² + 9 = 153. Then (6 + k)² = 144, so 6 + k = 12 or 6 + k = −12. These give k = 6 or k = −18. Since k is positive, k = 6."
  },
  {
    id: "adv-h195",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 9x + 14. The function g is defined by g(x) = f(x − 1). What is the product of the zeros of g?",
    choices: [
      "14",
      "24",
      "6",
      "11"
    ],
    answer: 1,
    explanation: "f(x) = (x − 2)(x − 7), so the zeros of f are 2 and 7. g(x) = 0 when x − 1 equals a zero of f, so x = 2 + 1 = 3 or x = 7 + 1 = 8. The product is 24."
  },
  {
    id: "adv-h196",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 2<sup>x + 2</sup> − 2<sup>x − 1</sup> = 28, what is the value of 2<sup>x + 1</sup>?",
    choices: [
      "16",
      "3",
      "8",
      "17"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 2<sup>x − 1</sup>: 2<sup>x − 1</sup>(2<sup>3</sup> − 1) = 28, so 2<sup>x − 1</sup>(7) = 28 and 2<sup>x − 1</sup> = 4. Then x − 1 = 2, so x = 3, and 2<sup>x + 1</sup> = 16."
  },
  {
    id: "adv-h197",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "−2x² + bx + c ≥ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is 3 ≤ x ≤ 10. What is the value of b?",
    choices: [
      "−26",
      "13",
      "−13",
      "26"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are 3 and 10, and the expression equals −2(x − 3)(x − 10) (the parabola opens downward, so it is ≥ 0 between its zeros). Expanding gives −2x² + 26x − 60, so b = 26 and c = −60."
  },
  {
    id: "adv-h198",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of cells in a culture is halved every 6 hours. At time t = 0, there are 960 cells. Which function gives the number of cells, N(t), t minutes after time t = 0?",
    choices: [
      "960(1/2)<sup>t/6</sup>",
      "960(1/2)<sup>360t</sup>",
      "960(1/2)<sup>t/360</sup>",
      "960(1/2)<sup>6t</sup>"
    ],
    answer: 2,
    explanation: "The quantity is multiplied by 1/2 once every 6 hours. Since t is measured in minutes, 6 hours is 360 minutes, so the number of periods after t minutes is t/360. Therefore N(t) = 960(1/2)<sup>t/360</sup>. Using t/6 would treat t as hours."
  },
  {
    id: "adv-h199",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = x² + 4x + 4<br>y = 11x − 8<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of y₁ + y₂?",
    choices: [
      "7",
      "61",
      "11",
      "−61"
    ],
    answer: 1,
    explanation: "Set the expressions equal: x² + 4x + 4 = 11x − 8, so x² − 7x + 12 = 0, which factors as (x − 4)(x − 3) = 0. So x₁ and x₂ are 4 and 3, and the corresponding y-values on the line are 11(4) − 8 = 36 and 11(3) − 8 = 25. The sum is 61."
  },
  {
    id: "adv-h200",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (x − 1)(−2x + 9) − 2(x² − 5) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "8",
      "−12",
      "0",
      "−8"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (0)(7) − 2(1 − 5) = 0 + 8 = 8. (Expanding fully gives −4x² + 11x + 1.)"
  },
  {
    id: "adv-h201",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = 3x² − 27x + 3<br>y = −3x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of x in that solution?",
    choices: [
      "−4",
      "8",
      "5",
      "4"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: 3x² − 27x + 3 = −3x + k, so 3x² − 24x + 3 − k = 0. Exactly one solution means the discriminant is 0: (−24)² − 4(3)(3 − k) = 0, which gives k = −45. The repeated solution is x = −(−24)/(2·3) = 4."
  },
  {
    id: "adv-h202",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(2x + 36) = x − 6<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "0",
      "−14",
      "14",
      "15"
    ],
    answer: 2,
    explanation: "Squaring both sides gives 2x + 36 = x² − 12x + 36, so x² − 14x = 0, which factors as (x − 14)x = 0. Squaring can introduce extraneous solutions, so check both: the right side x − 6 must be nonnegative. For x = 0, the right side is −6 < 0, so x = 0 is extraneous. Only x = 14 works, so the sum of all solutions is 14."
  },
  {
    id: "adv-h203",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "3<sup>2x</sup> − 4(3<sup>x</sup>) + 3 = 0<br><br>What is the sum of the solutions to the given equation?",
    choices: [
      "4",
      "1",
      "0",
      "3"
    ],
    answer: 1,
    explanation: "Let u = 3<sup>x</sup>, so 3<sup>2x</sup> = u². The equation becomes u² − 4u + 3 = 0, which factors as (u − 1)(u − 3) = 0. So 3<sup>x</sup> = 1 or 3<sup>x</sup> = 3, giving x = 0 or x = 1. The sum is 1."
  },
  {
    id: "adv-h204",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³ + x² + bx + c<br><br>In the given polynomial function, b and c are constants. If 5 and −2 are zeros of p, what is the third zero of p?",
    choices: [
      "−4",
      "4",
      "−2",
      "3"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + c, the sum of the zeros is −a. Here −a = −1, so 5 + (−2) + r = −1, giving r = −4."
  },
  {
    id: "adv-h205",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 96t + 22. For how many seconds is the object at a height of at least 130 feet?",
    choices: [
      "4.5",
      "1.5",
      "4",
      "3"
    ],
    answer: 3,
    explanation: "Set h(t) = 130: −16t² + 96t + 22 = 130, so −16t² + 96t − 108 = 0. Dividing by −16 gives t² − 6t + 6.75 = 0, so t = 1.5 or t = 4.5. The object is at or above 130 feet between these times, for 4.5 − 1.5 = 3 seconds."
  },
  {
    id: "adv-h206",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The mass of a radioactive sample decreases by 48.8% every 3 months. Assuming the decrease occurs at a constant percent rate per month, by what percent does it decrease each month?",
    choices: [
      "16.27%",
      "48.8%",
      "20%",
      "8%"
    ],
    answer: 2,
    explanation: "If the per-month growth factor is r, then r<sup>3</sup> = 1 − 0.488 = 0.512. Taking the cube root gives r = 0.8, which is a 20% decrease each month. Dividing 48.8% by 3 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h207",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(3) = 2048 and f(6) = 131072, what is the value of f(4)?",
    choices: [
      "45056",
      "8192",
      "2048",
      "32768"
    ],
    answer: 1,
    explanation: "Dividing, f(6)/f(3) = b<sup>3</sup> = 64, so b = 4. Then a = f(3)/b<sup>3</sup> = 32, so f(x) = 32(4)<sup>x</sup> and f(4) = 32(4)<sup>4</sup> = 8192."
  },
  {
    id: "adv-h208",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² + 4x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 6. What is the value of c?",
    choices: [
      "−5",
      "5",
      "4",
      "1"
    ],
    answer: 0,
    explanation: "The solutions add to −4 (the opposite of the x-coefficient) and differ by 6. So they are (−4 + 6)/2 = 1 and (−4 − 6)/2 = −5. Their product is c = (1)(−5) = −5."
  },
  {
    id: "adv-h209",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "2x² + kx + 2 = 0<br><br>In the given equation, k is an integer constant. For how many values of k does the equation have no real solutions?",
    choices: [
      "3",
      "9",
      "6",
      "7"
    ],
    answer: 3,
    explanation: "No real solutions means the discriminant is negative: k² − 4(2)(2) < 0, so k² < 16. The integers satisfying this are −3 through 3, including 0, which is 7 values."
  },
  {
    id: "adv-h210",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 4,
    prompt: "Which expression is equivalent to <sup>5</sup>√(x<sup>4</sup>) ÷ √(x), where x > 0?",
    choices: [
      "x<sup>13/10</sup>",
      "x<sup>2/5</sup>",
      "x<sup>3/10</sup>",
      "x<sup>1</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: <sup>5</sup>√(x<sup>4</sup>) = x<sup>4/5</sup> and √(x) = x<sup>1/2</sup>. Dividing powers with the same base subtracts exponents: 4/5 − 1/2 = 3/10, so the expression equals x<sup>3/10</sup>."
  },
  {
    id: "adv-h211",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (x² − 13x + 52)/(x − 5) is equivalent to x − 8 + R/(x − 5), where R is a constant and x ≠ 5. What is the value of R?",
    choices: [
      "52",
      "12",
      "−12",
      "40"
    ],
    answer: 1,
    explanation: "Multiply both sides by (x − 5): x² − 13x + 52 = (x − 5)(x − 8) + R = x² − 13x + 40 + R. Matching constants: 52 = 40 + R, so R = 12. (Equivalently, by the remainder theorem, R equals the numerator evaluated at x = 5.)"
  },
  {
    id: "adv-h212",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = 5. If f(0) = 18 and f(8) = 2, what is the value of f(6)?",
    choices: [
      "−6",
      "−7",
      "−5",
      "6"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − 5)² + k. From f(0): a(25) + k = 18. From f(8): a(9) + k = 2. Subtracting gives 16a = 16, so a = 1 and k = −7. Then f(6) = 1(1)² − 7 = −6."
  },
  {
    id: "adv-h213",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = x³ + ax² − x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x + 1, the remainder is −7, and p(3) = 25. What is the value of ab?",
    choices: [
      "−7",
      "8",
      "1",
      "−8"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(−1) = −7: −1 + a + 1 + b = −7, so a + b = −7. Also p(3) = 25: 9a + b = 1. Subtracting, −8a = −8, so a = 1 and b = −8. Thus ab = −8."
  },
  {
    id: "adv-h214",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² + 6 and g(x) = 3x + k, where k is a positive constant. If f(g(3)) = 150, what is the value of k?",
    choices: [
      "−21",
      "12",
      "3",
      "144"
    ],
    answer: 2,
    explanation: "g(3) = 9 + k, so f(g(3)) = (9 + k)² + 6 = 150. Then (9 + k)² = 144, so 9 + k = 12 or 9 + k = −12. These give k = 3 or k = −21. Since k is positive, k = 3."
  },
  {
    id: "adv-h215",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 49. The function g is defined by g(x) = f(x + 3). What is the product of the zeros of g?",
    choices: [
      "−49",
      "−40",
      "−6",
      "−37"
    ],
    answer: 1,
    explanation: "f(x) = (x − 7)(x + 7), so the zeros of f are 7 and −7. g(x) = 0 when x + 3 equals a zero of f, so x = 7 − 3 = 4 or x = −7 − 3 = −10. The product is −40."
  },
  {
    id: "adv-h216",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 3<sup>x + 2</sup> − 3<sup>x − 2</sup> = 2160, what is the value of 9<sup>x</sup>?",
    choices: [
      "59049",
      "5",
      "243",
      "19683"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 3<sup>x − 2</sup>: 3<sup>x − 2</sup>(3<sup>4</sup> − 1) = 2160, so 3<sup>x − 2</sup>(80) = 2160 and 3<sup>x − 2</sup> = 27. Then x − 2 = 3, so x = 5, and 9<sup>x</sup> = 59049."
  },
  {
    id: "adv-h217",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "3x² + bx + c ≤ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is −6 ≤ x ≤ 4. What is the value of b+c?",
    choices: [
      "78",
      "−26",
      "−24",
      "−66"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are −6 and 4, and the expression equals 3(x + 6)(x − 4) (the parabola opens upward, so it is ≤ 0 between its zeros). Expanding gives 3x² + 6x − 72, so b = 6 and c = −72, and b + c = −66."
  },
  {
    id: "adv-h219",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = 2x² − 6x + 3<br>y = −10x + 9<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of x₁ + x₂?",
    choices: [
      "2",
      "−2",
      "−3",
      "−5"
    ],
    answer: 1,
    explanation: "Set the expressions equal: 2x² − 6x + 3 = −10x + 9, so 2x² + 4x − 6 = 0, which factors as 2(x − 1)(x + 3) = 0. So x₁ and x₂ are 1 and −3, with sum −2."
  },
  {
    id: "adv-h220",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (4x − 7)(−x + 1) − 5(x² + 2) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "−15",
      "5",
      "0",
      "15"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (−3)(0) − 5(1 + 2) = 0 − 15 = −15. (Expanding fully gives −9x² + 11x − 17.)"
  },
  {
    id: "adv-h221",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = −2x² − 9x − 3<br>y = −5x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of x in that solution?",
    choices: [
      "1",
      "−2",
      "0",
      "−1"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: −2x² − 9x − 3 = −5x + k, so −2x² − 4x − 3 − k = 0. Exactly one solution means the discriminant is 0: (−4)² − 4(−2)(−3 − k) = 0, which gives k = −1. The repeated solution is x = −(−4)/(2·(−2)) = −1."
  },
  {
    id: "adv-h222",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(5x + 4) = x − 4<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "1",
      "13",
      "12",
      "−12"
    ],
    answer: 2,
    explanation: "Squaring both sides gives 5x + 4 = x² − 8x + 16, so x² − 13x + 12 = 0, which factors as (x − 12)(x − 1) = 0. Squaring can introduce extraneous solutions, so check both: the right side x − 4 must be nonnegative. For x = 1, the right side is −3 < 0, so x = 1 is extraneous. Only x = 12 works, so the sum of all solutions is 12."
  },
  {
    id: "adv-h223",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "2<sup>2x</sup> − 24(2<sup>x</sup>) + 128 = 0<br><br>What is the greatest solution to the given equation?",
    choices: [
      "24",
      "4",
      "7",
      "16"
    ],
    answer: 1,
    explanation: "Let u = 2<sup>x</sup>, so 2<sup>2x</sup> = u². The equation becomes u² − 24u + 128 = 0, which factors as (u − 8)(u − 16) = 0. So 2<sup>x</sup> = 8 or 2<sup>x</sup> = 16, giving x = 3 or x = 4. The greatest solution is 4."
  },
  {
    id: "adv-h224",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³ − x² + bx + c<br><br>In the given polynomial function, b and c are constants. If 1 and −5 are zeros of p, what is the third zero of p?",
    choices: [
      "5",
      "−5",
      "7",
      "−4"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + c, the sum of the zeros is −a. Here −a = 1, so 1 + (−5) + r = 1, giving r = 5."
  },
  {
    id: "adv-h225",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 80t + 24. For how many seconds is the object at a height of at least 120 feet?",
    choices: [
      "3",
      "2",
      "2.5",
      "1"
    ],
    answer: 3,
    explanation: "Set h(t) = 120: −16t² + 80t + 24 = 120, so −16t² + 80t − 96 = 0. Dividing by −16 gives t² − 5t + 6 = 0, so t = 2 or t = 3. The object is at or above 120 feet between these times, for 3 − 2 = 1 seconds."
  },
  {
    id: "adv-h226",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "A population of bacteria increases by 56.25% every 2 hours. Assuming the increase occurs at a constant percent rate per hour, by what percent does it increase each hour?",
    choices: [
      "28.13%",
      "56.25%",
      "25%",
      "14%"
    ],
    answer: 2,
    explanation: "If the per-hour growth factor is r, then r<sup>2</sup> = 1 + 0.5625 = 1.5625. Taking the square root gives r = 1.25, which is a 25% increase each hour. Dividing 56.25% by 2 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h227",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(3) = 384 and f(5) = 1536, what is the value of f(4)?",
    choices: [
      "960",
      "768",
      "384",
      "1536"
    ],
    answer: 1,
    explanation: "Dividing, f(5)/f(3) = b<sup>2</sup> = 4, so b = 2. Then a = f(3)/b<sup>3</sup> = 48, so f(x) = 48(2)<sup>x</sup> and f(4) = 48(2)<sup>4</sup> = 768."
  },
  {
    id: "adv-h228",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² − 14x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 6. What is the value of c?",
    choices: [
      "40",
      "−40",
      "49",
      "46"
    ],
    answer: 0,
    explanation: "The solutions add to 14 (the opposite of the x-coefficient) and differ by 6. So they are (14 + 6)/2 = 10 and (14 − 6)/2 = 4. Their product is c = (10)(4) = 40."
  },
  {
    id: "adv-h229",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² + kx + 1 = 0<br><br>In the given equation, k is a constant. For how many positive integer values of k does the equation have no real solutions?",
    choices: [
      "3",
      "2",
      "0",
      "1"
    ],
    answer: 3,
    explanation: "A quadratic has no real solutions when its discriminant is negative: k² − 4(1)(1) < 0, so k² < 4. The positive integers with k² < 4 are 1 through 1, so there are 1 values."
  },
  {
    id: "adv-h230",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 3,
    prompt: "Which expression is equivalent to ∜(x<sup>3</sup>) · √(x<sup>3</sup>), where x > 0?",
    choices: [
      "x<sup>−3/4</sup>",
      "x<sup>9/8</sup>",
      "x<sup>9/4</sup>",
      "x<sup>1</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: ∜(x<sup>3</sup>) = x<sup>3/4</sup> and √(x<sup>3</sup>) = x<sup>3/2</sup>. Multiplying powers with the same base adds exponents: 3/4 + 3/2 = 9/4, so the expression equals x<sup>9/4</sup>."
  },
  {
    id: "adv-h231",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "(x² + kx + 45)/(x − 9) = x − 5<br><br>In the given equation, k is a constant, and the equation is true for all x ≠ 9. What is the value of k?",
    choices: [
      "−4",
      "−14",
      "4",
      "45"
    ],
    answer: 1,
    explanation: "Multiplying both sides by x − 9 gives x² + kx + 45 = (x − 9)(x − 5) = x² − 14x + 45. Matching x-coefficients gives k = −14."
  },
  {
    id: "adv-h232",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = −1. If f(0) = 0 and f(−2) = 0, what is the value of f(−6)?",
    choices: [
      "−48",
      "2",
      "−50",
      "48"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − (−1))² + k. From f(0): a(1) + k = 0. From f(−2): a(1) + k = 0. Subtracting gives 0a = 0, so a = −2 and k = 2. Then f(−6) = −2(−5)² + 2 = −48."
  },
  {
    id: "adv-h233",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = x³ + ax² + 2x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x − 3, the remainder is 79, and p(1) = 1. What is the value of a + b?",
    choices: [
      "−48",
      "2",
      "6",
      "−2"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(3) = 79: 27 + 9a + 6 + b = 79, so 9a + b = 46. Also p(1) = 1: a + b = −2. Subtracting, 8a = 48, so a = 6 and b = −8. Thus a + b = −2."
  },
  {
    id: "adv-h234",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² + 6 and g(x) = 4x + k, where k is a positive constant. If f(g(1)) = 31, what is the value of k?",
    choices: [
      "−9",
      "5",
      "1",
      "25"
    ],
    answer: 2,
    explanation: "g(1) = 4 + k, so f(g(1)) = (4 + k)² + 6 = 31. Then (4 + k)² = 25, so 4 + k = 5 or 4 + k = −5. These give k = 1 or k = −9. Since k is positive, k = 1."
  },
  {
    id: "adv-h235",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 3x − 28. The function g is defined by g(x) = f(x + 5). What is the sum of the zeros of g?",
    choices: [
      "−3",
      "−13",
      "7",
      "13"
    ],
    answer: 1,
    explanation: "f(x) = (x − 4)(x + 7), so the zeros of f are 4 and −7. g(x) = 0 when x + 5 equals a zero of f, so x = 4 − 5 = −1 or x = −7 − 5 = −12. The sum is −13."
  },
  {
    id: "adv-h236",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 2<sup>x + 1</sup> − 2<sup>x − 1</sup> = 12, what is the value of 4<sup>x</sup>?",
    choices: [
      "64",
      "3",
      "8",
      "32"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 2<sup>x − 1</sup>: 2<sup>x − 1</sup>(2<sup>2</sup> − 1) = 12, so 2<sup>x − 1</sup>(3) = 12 and 2<sup>x − 1</sup> = 4. Then x − 1 = 2, so x = 3, and 4<sup>x</sup> = 64."
  },
  {
    id: "adv-h237",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "−x² + bx + c ≥ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is −2 ≤ x ≤ 7. What is the value of b+c?",
    choices: [
      "−9",
      "−14",
      "18",
      "19"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are −2 and 7, and the expression equals −1(x + 2)(x − 7) (the parabola opens downward, so it is ≥ 0 between its zeros). Expanding gives −x² + 5x + 14, so b = 5 and c = 14, and b + c = 19."
  },
  {
    id: "adv-h239",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = 2x² + 5x − 9<br>y = 7x + 51<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of x₁x₂?",
    choices: [
      "30",
      "−30",
      "−9/2",
      "51/2"
    ],
    answer: 1,
    explanation: "Set the expressions equal: 2x² + 5x − 9 = 7x + 51, so 2x² − 2x − 60 = 0, which factors as 2(x − 6)(x + 5) = 0. So x₁ and x₂ are 6 and −5, with product −30."
  },
  {
    id: "adv-h240",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (4x − 6)(3x − 8) − 4(x² − 7) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "34",
      "−22",
      "10",
      "−14"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (−2)(−5) − 4(1 − 7) = 10 + 24 = 34. (Expanding fully gives 8x² − 50x + 76.)"
  },
  {
    id: "adv-h241",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = −2x² + 2x + 8<br>y = −2x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of x in that solution?",
    choices: [
      "−1",
      "2",
      "10",
      "1"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: −2x² + 2x + 8 = −2x + k, so −2x² + 4x + 8 − k = 0. Exactly one solution means the discriminant is 0: (4)² − 4(−2)(8 − k) = 0, which gives k = 10. The repeated solution is x = −(4)/(2·(−2)) = 1."
  },
  {
    id: "adv-h242",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(4x + 29) = x + 2<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "−5",
      "0",
      "5",
      "10"
    ],
    answer: 2,
    explanation: "Squaring both sides gives 4x + 29 = x² + 4x + 4, so x² − 25 = 0, which factors as (x − 5)(x + 5) = 0. Squaring can introduce extraneous solutions, so check both: the right side x + 2 must be nonnegative. For x = −5, the right side is −3 < 0, so x = −5 is extraneous. Only x = 5 works, so the sum of all solutions is 5."
  },
  {
    id: "adv-h243",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "5<sup>2x</sup> − 26(5<sup>x</sup>) + 25 = 0<br><br>What is the product of the solutions to the given equation?",
    choices: [
      "26",
      "0",
      "2",
      "25"
    ],
    answer: 1,
    explanation: "Let u = 5<sup>x</sup>, so 5<sup>2x</sup> = u². The equation becomes u² − 26u + 25 = 0, which factors as (u − 1)(u − 25) = 0. So 5<sup>x</sup> = 1 or 5<sup>x</sup> = 25, giving x = 0 or x = 2. The product is 0."
  },
  {
    id: "adv-h244",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³ + ax² + bx + 15<br><br>In the given polynomial function, a and b are constants. If −1 and 5 are zeros of p, what is the third zero of p?",
    choices: [
      "3",
      "−3",
      "15",
      "4"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + d, the product of the three zeros is −d. Here −d = −15, so (−1)(5)r = −15, giving −5r = −15 and r = 3."
  },
  {
    id: "adv-h245",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 64t + 12. For how many seconds is the object at a height of at least 40 feet?",
    choices: [
      "3.5",
      "0.5",
      "2",
      "3"
    ],
    answer: 3,
    explanation: "Set h(t) = 40: −16t² + 64t + 12 = 40, so −16t² + 64t − 28 = 0. Dividing by −16 gives t² − 4t + 1.75 = 0, so t = 0.5 or t = 3.5. The object is at or above 40 feet between these times, for 3.5 − 0.5 = 3 seconds."
  },
  {
    id: "adv-h246",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of active users of an app increases by 33.1% every 3 years. Assuming the increase occurs at a constant percent rate per year, by what percent does it increase each year?",
    choices: [
      "11.03%",
      "33.1%",
      "10%",
      "6%"
    ],
    answer: 2,
    explanation: "If the per-year growth factor is r, then r<sup>3</sup> = 1 + 0.331 = 1.331. Taking the cube root gives r = 1.1, which is a 10% increase each year. Dividing 33.1% by 3 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h247",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(2) = 20 and f(5) = 160, what is the value of f(7)?",
    choices: [
      "760/3",
      "640",
      "320",
      "1280"
    ],
    answer: 1,
    explanation: "Dividing, f(5)/f(2) = b<sup>3</sup> = 8, so b = 2. Then a = f(2)/b<sup>2</sup> = 5, so f(x) = 5(2)<sup>x</sup> and f(7) = 5(2)<sup>7</sup> = 640."
  },
  {
    id: "adv-h248",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² − 11x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 3. What is the value of c?",
    choices: [
      "28",
      "−28",
      "31",
      "29"
    ],
    answer: 0,
    explanation: "The solutions add to 11 (the opposite of the x-coefficient) and differ by 3. So they are (11 + 3)/2 = 7 and (11 − 3)/2 = 4. Their product is c = (7)(4) = 28."
  },
  {
    id: "adv-h249",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "2x² + kx + 3 = 0<br><br>In the given equation, k is an integer constant. For how many values of k does the equation have no real solutions?",
    choices: [
      "4",
      "11",
      "8",
      "9"
    ],
    answer: 3,
    explanation: "No real solutions means the discriminant is negative: k² − 4(2)(3) < 0, so k² < 24. The integers satisfying this are −4 through 4, including 0, which is 9 values."
  },
  {
    id: "adv-h250",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 4,
    prompt: "Which expression is equivalent to ∜(x<sup>7</sup>) · ∛(x<sup>5</sup>), where x > 0?",
    choices: [
      "x<sup>1/12</sup>",
      "x<sup>35/12</sup>",
      "x<sup>41/12</sup>",
      "x<sup>12/7</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: ∜(x<sup>7</sup>) = x<sup>7/4</sup> and ∛(x<sup>5</sup>) = x<sup>5/3</sup>. Multiplying powers with the same base adds exponents: 7/4 + 5/3 = 41/12, so the expression equals x<sup>41/12</sup>."
  },
  {
    id: "adv-h251",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "(x² + kx − 18)/(x − 3) = x + 6<br><br>In the given equation, k is a constant, and the equation is true for all x ≠ 3. What is the value of k?",
    choices: [
      "−9",
      "3",
      "9",
      "−18"
    ],
    answer: 1,
    explanation: "Multiplying both sides by x − 3 gives x² + kx − 18 = (x − 3)(x + 6) = x² + 3x − 18. Matching x-coefficients gives k = 3."
  },
  {
    id: "adv-h252",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = 6. If f(0) = −137 and f(9) = −29, what is the value of f(4)?",
    choices: [
      "−9",
      "7",
      "−13",
      "9"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − 6)² + k. From f(0): a(36) + k = −137. From f(9): a(9) + k = −29. Subtracting gives 27a = −108, so a = −4 and k = 7. Then f(4) = −4(−2)² + 7 = −9."
  },
  {
    id: "adv-h253",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = x³ + ax² − 5x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x + 2, the remainder is 26, and p(−3) = 37. What is the value of a + b?",
    choices: [
      "20",
      "−9",
      "5",
      "9"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(−2) = 26: −8 + 4a + 10 + b = 26, so 4a + b = 24. Also p(−3) = 37: 9a + b = 49. Subtracting, −5a = −25, so a = 5 and b = 4. Thus a + b = 9."
  },
  {
    id: "adv-h254",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² − 3 and g(x) = 4x + k, where k is a positive constant. If f(g(1)) = 141, what is the value of k?",
    choices: [
      "−16",
      "12",
      "8",
      "144"
    ],
    answer: 2,
    explanation: "g(1) = 4 + k, so f(g(1)) = (4 + k)² − 3 = 141. Then (4 + k)² = 144, so 4 + k = 12 or 4 + k = −12. These give k = 8 or k = −16. Since k is positive, k = 8."
  },
  {
    id: "adv-h255",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 3x + 2. The function g is defined by g(x) = f(x + 4). What is the product of the zeros of g?",
    choices: [
      "2",
      "30",
      "6",
      "−11"
    ],
    answer: 1,
    explanation: "f(x) = (x + 2)(x + 1), so the zeros of f are −2 and −1. g(x) = 0 when x + 4 equals a zero of f, so x = −2 − 4 = −6 or x = −1 − 4 = −5. The product is 30."
  },
  {
    id: "adv-h256",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 3<sup>x + 2</sup> − 3<sup>x − 1</sup> = 78, what is the value of 3<sup>x + 1</sup>?",
    choices: [
      "27",
      "2",
      "9",
      "19"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 3<sup>x − 1</sup>: 3<sup>x − 1</sup>(3<sup>3</sup> − 1) = 78, so 3<sup>x − 1</sup>(26) = 78 and 3<sup>x − 1</sup> = 3. Then x − 1 = 1, so x = 2, and 3<sup>x + 1</sup> = 27."
  },
  {
    id: "adv-h257",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "−2x² + bx + c ≥ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is 1 ≤ x ≤ 6. What is the value of c?",
    choices: [
      "12",
      "6",
      "−14",
      "−12"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are 1 and 6, and the expression equals −2(x − 1)(x − 6) (the parabola opens downward, so it is ≥ 0 between its zeros). Expanding gives −2x² + 14x − 12, so b = 14 and c = −12."
  },
  {
    id: "adv-h259",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = 2x² − 5x + 5<br>y = −17x − 11<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of x₁ + x₂?",
    choices: [
      "6",
      "−6",
      "−5/2",
      "−17/2"
    ],
    answer: 1,
    explanation: "Set the expressions equal: 2x² − 5x + 5 = −17x − 11, so 2x² + 12x + 16 = 0, which factors as 2(x + 4)(x + 2) = 0. So x₁ and x₂ are −4 and −2, with sum −6."
  },
  {
    id: "adv-h260",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (4x + 3)(−x + 4) − 2(x² − 9) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "37",
      "1",
      "21",
      "5"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (7)(3) − 2(1 − 9) = 21 + 16 = 37. (Expanding fully gives −6x² + 13x + 30.)"
  },
  {
    id: "adv-h261",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = 2x² + x + 1<br>y = 5x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of k?",
    choices: [
      "1",
      "4",
      "0",
      "−1"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: 2x² + x + 1 = 5x + k, so 2x² − 4x + 1 − k = 0. Exactly one solution means the discriminant is 0: (−4)² − 4(2)(1 − k) = 0, which gives k = −1. The repeated solution is x = −(−4)/(2·2) = 1."
  },
  {
    id: "adv-h262",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(x + 23) = x + 3<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "−7",
      "−5",
      "2",
      "−2"
    ],
    answer: 2,
    explanation: "Squaring both sides gives x + 23 = x² + 6x + 9, so x² + 5x − 14 = 0, which factors as (x − 2)(x + 7) = 0. Squaring can introduce extraneous solutions, so check both: the right side x + 3 must be nonnegative. For x = −7, the right side is −4 < 0, so x = −7 is extraneous. Only x = 2 works, so the sum of all solutions is 2."
  },
  {
    id: "adv-h263",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "5<sup>2x</sup> − 26(5<sup>x</sup>) + 25 = 0<br><br>What is the sum of the solutions to the given equation?",
    choices: [
      "26",
      "2",
      "0",
      "25"
    ],
    answer: 1,
    explanation: "Let u = 5<sup>x</sup>, so 5<sup>2x</sup> = u². The equation becomes u² − 26u + 25 = 0, which factors as (u − 1)(u − 25) = 0. So 5<sup>x</sup> = 1 or 5<sup>x</sup> = 25, giving x = 0 or x = 2. The sum is 2."
  },
  {
    id: "adv-h264",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 3,
    prompt: "p(x) = x³ + 4x² + bx + c<br><br>In the given polynomial function, b and c are constants. If 4 and −2 are zeros of p, what is the third zero of p?",
    choices: [
      "−6",
      "6",
      "−4",
      "2"
    ],
    answer: 0,
    explanation: "For a cubic x³ + ax² + bx + c, the sum of the zeros is −a. Here −a = −4, so 4 + (−2) + r = −4, giving r = −6."
  },
  {
    id: "adv-h265",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "An object is launched upward from a platform. Its height h, in feet, t seconds after launch is modeled by h(t) = −16t² + 72t + 74. For how many seconds is the object at a height of at least 130 feet?",
    choices: [
      "3.5",
      "1",
      "2.25",
      "2.5"
    ],
    answer: 3,
    explanation: "Set h(t) = 130: −16t² + 72t + 74 = 130, so −16t² + 72t − 56 = 0. Dividing by −16 gives t² − 4.5t + 3.5 = 0, so t = 1 or t = 3.5. The object is at or above 130 feet between these times, for 3.5 − 1 = 2.5 seconds."
  },
  {
    id: "adv-h266",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The number of active users of an app increases by 72.8% every 3 hours. Assuming the increase occurs at a constant percent rate per hour, by what percent does it increase each hour?",
    choices: [
      "24.27%",
      "72.8%",
      "20%",
      "12%"
    ],
    answer: 2,
    explanation: "If the per-hour growth factor is r, then r<sup>3</sup> = 1 + 0.728 = 1.728. Taking the cube root gives r = 1.2, which is a 20% increase each hour. Dividing 72.8% by 3 is a common error, because percent changes compound rather than add."
  },
  {
    id: "adv-h267",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = ab<sup>x</sup>, where a and b are positive constants. If f(1) = 24 and f(3) = 96, what is the value of f(4)?",
    choices: [
      "132",
      "192",
      "96",
      "384"
    ],
    answer: 1,
    explanation: "Dividing, f(3)/f(1) = b<sup>2</sup> = 4, so b = 2. Then a = f(1)/b<sup>1</sup> = 12, so f(x) = 12(2)<sup>x</sup> and f(4) = 12(2)<sup>4</sup> = 192."
  },
  {
    id: "adv-h268",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² − 14x + c = 0<br><br>In the given equation, c is a constant. The equation has two real solutions, and the positive difference between them is 8. What is the value of c?",
    choices: [
      "33",
      "47",
      "49",
      "41"
    ],
    answer: 0,
    explanation: "The solutions add to 14 (the opposite of the x-coefficient) and differ by 8. So they are (14 + 8)/2 = 11 and (14 − 8)/2 = 3. Their product is c = (11)(3) = 33."
  },
  {
    id: "adv-h269",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² + kx + 6 = 0<br><br>In the given equation, k is a constant. For how many positive integer values of k does the equation have no real solutions?",
    choices: [
      "9",
      "5",
      "3",
      "4"
    ],
    answer: 3,
    explanation: "A quadratic has no real solutions when its discriminant is negative: k² − 4(1)(6) < 0, so k² < 24. The positive integers with k² < 24 are 1 through 4, so there are 4 values."
  },
  {
    id: "adv-h270",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponents",
    difficulty: 4,
    prompt: "Which expression is equivalent to ∜(x<sup>5</sup>) · <sup>6</sup>√(x<sup>5</sup>), where x > 0?",
    choices: [
      "x<sup>5/12</sup>",
      "x<sup>25/24</sup>",
      "x<sup>25/12</sup>",
      "x<sup>1</sup>"
    ],
    answer: 2,
    explanation: "Rewrite each radical as a rational exponent: ∜(x<sup>5</sup>) = x<sup>5/4</sup> and <sup>6</sup>√(x<sup>5</sup>) = x<sup>5/6</sup>. Multiplying powers with the same base adds exponents: 5/4 + 5/6 = 25/12, so the expression equals x<sup>25/12</sup>."
  },
  {
    id: "adv-h271",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "(x² + kx + 35)/(x + 7) = x + 5<br><br>In the given equation, k is a constant, and the equation is true for all x ≠ −7. What is the value of k?",
    choices: [
      "2",
      "12",
      "−2",
      "35"
    ],
    answer: 1,
    explanation: "Multiplying both sides by x + 7 gives x² + kx + 35 = (x + 7)(x + 5) = x² + 12x + 35. Matching x-coefficients gives k = 12."
  },
  {
    id: "adv-h272",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is a quadratic function whose graph in the xy-plane has its vertex at x = −1. If f(0) = 19 and f(2) = 27, what is the value of f(−5)?",
    choices: [
      "34",
      "18",
      "35",
      "−34"
    ],
    answer: 0,
    explanation: "Write f(x) = a(x − (−1))² + k. From f(0): a(1) + k = 19. From f(2): a(9) + k = 27. Subtracting gives −8a = −8, so a = 1 and k = 18. Then f(−5) = 1(−4)² + 18 = 34."
  },
  {
    id: "adv-h273",
    module: "math",
    domain: "Advanced Math",
    skill: "Polynomial functions",
    difficulty: 4,
    prompt: "p(x) = 2x³ + ax² + 5x + b<br><br>In the polynomial p, a and b are constants. When p(x) is divided by x + 2, the remainder is −60, and p(1) = −9. What is the value of ab?",
    choices: [
      "−16",
      "−60",
      "−6",
      "60"
    ],
    answer: 3,
    explanation: "By the remainder theorem, p(−2) = −60: −16 + 4a − 10 + b = −60, so 4a + b = −34. Also p(1) = −9: a + b = −16. Subtracting, 3a = −18, so a = −6 and b = −10. Thus ab = 60."
  },
  {
    id: "adv-h274",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = x² − 8 and g(x) = 4x + k, where k is a positive constant. If f(g(3)) = 161, what is the value of k?",
    choices: [
      "−25",
      "13",
      "1",
      "169"
    ],
    answer: 2,
    explanation: "g(3) = 12 + k, so f(g(3)) = (12 + k)² − 8 = 161. Then (12 + k)² = 169, so 12 + k = 13 or 12 + k = −13. These give k = 1 or k = −25. Since k is positive, k = 1."
  },
  {
    id: "adv-h275",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 7x + 10. The function g is defined by g(x) = f(x + 1). What is the product of the zeros of g?",
    choices: [
      "10",
      "4",
      "18",
      "5"
    ],
    answer: 1,
    explanation: "f(x) = (x − 2)(x − 5), so the zeros of f are 2 and 5. g(x) = 0 when x + 1 equals a zero of f, so x = 2 − 1 = 1 or x = 5 − 1 = 4. The product is 4."
  },
  {
    id: "adv-h276",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "If 3<sup>x + 2</sup> − 3<sup>x − 1</sup> = 234, what is the value of 9<sup>x</sup>?",
    choices: [
      "729",
      "3",
      "27",
      "243"
    ],
    answer: 0,
    explanation: "Factor out the smaller power, 3<sup>x − 1</sup>: 3<sup>x − 1</sup>(3<sup>3</sup> − 1) = 234, so 3<sup>x − 1</sup>(26) = 234 and 3<sup>x − 1</sup> = 9. Then x − 1 = 2, so x = 3, and 9<sup>x</sup> = 729."
  },
  {
    id: "adv-h277",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic inequalities",
    difficulty: 4,
    prompt: "2x² + bx + c ≤ 0<br><br>In the given inequality, b and c are constants. The solution set of the inequality is 3 ≤ x ≤ 13. What is the value of b+c?",
    choices: [
      "−110",
      "55",
      "39",
      "46"
    ],
    answer: 3,
    explanation: "The solution set is the interval between the zeros, so the zeros are 3 and 13, and the expression equals 2(x − 3)(x − 13) (the parabola opens upward, so it is ≤ 0 between its zeros). Expanding gives 2x² − 32x + 78, so b = −32 and c = 78, and b + c = 46."
  },
  {
    id: "adv-h279",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = −x² − x + 3<br>y = 6x + 13<br><br>The graphs of the given equations in the xy-plane intersect at the points (x₁, y₁) and (x₂, y₂). What is the value of x₁x₂?",
    choices: [
      "−10",
      "10",
      "−3",
      "−13"
    ],
    answer: 1,
    explanation: "Set the expressions equal: −x² − x + 3 = 6x + 13, so −x² − 7x − 10 = 0, which factors as −(x + 5)(x + 2) = 0. So x₁ and x₂ are −5 and −2, with product 10."
  },
  {
    id: "adv-h280",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "The expression (5x + 9)(4x − 7) − 3(x² + 7) is equivalent to ax² + bx + c, where a, b, and c are constants. What is the value of a + b + c?",
    choices: [
      "−66",
      "−24",
      "−42",
      "−18"
    ],
    answer: 0,
    explanation: "A quick route: a + b + c is the value of the expression at x = 1. That gives (14)(−3) − 3(1 + 7) = −42 − 24 = −66. (Expanding fully gives 17x² + x − 84.)"
  },
  {
    id: "adv-h281",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = x² + 14x + 8<br>y = 6x + k<br><br>In the given system of equations, k is a constant. If the system has exactly one real solution, what is the value of x in that solution?",
    choices: [
      "4",
      "−8",
      "−3",
      "−4"
    ],
    answer: 3,
    explanation: "Setting the expressions equal: x² + 14x + 8 = 6x + k, so x² + 8x + 8 − k = 0. Exactly one solution means the discriminant is 0: (8)² − 4(1)(8 − k) = 0, which gives k = −8. The repeated solution is x = −(8)/(2·1) = −4."
  },
  {
    id: "adv-h282",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "√(x + 4) = x + 2<br><br>What is the solution to the given equation?",
    choices: [
      "−3",
      "3",
      "0",
      "1"
    ],
    answer: 2,
    explanation: "Squaring both sides gives x + 4 = x² + 4x + 4, so x² + 3x = 0, which factors as x(x + 3) = 0. Squaring can introduce extraneous solutions, so check both: the right side x + 2 must be nonnegative. For x = −3, the right side is −1 < 0, so x = −3 is extraneous. Only x = 0 works."
  },
  {
    id: "adv-h283",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (1, 0) and (7, 0) and a y-intercept at (0, 14). What is the minimum value of f?",
    choices: [
      "14",
      "−9",
      "−18",
      "4"
    ],
    answer: 2,
    explanation: "From the x-intercepts, f(x) = a(x − 1)(x − 7) for some constant a. Since f(0) = 14, a(−1)(−7) = 14, so a = 2. The vertex lies halfway between the intercepts, at x = 4, so the minimum value is f(4) = 2(3)(−3) = −18. Assuming a = 1 gives −9."
  },
  {
    id: "adv-h284",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = 5x + 4 and f(g(x)) = 10x² + 5x + 39. What is the value of g(−2)?",
    choices: [
      "69",
      "13",
      "349",
      "73/5"
    ],
    answer: 1,
    explanation: "f(g(−2)) = 10(−2)² + 5(−2) + 39 = 69. Since f(g(−2)) = 5·g(−2) + 4, 5·g(−2) = 65, so g(−2) = 13. The value 69 is f(g(−2)), not g(−2)."
  },
  {
    id: "adv-h285",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = a(x + 4)² − 9<br>y = 63<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 12 units apart. What is the value of a?",
    choices: [
      "1/2",
      "2",
      "12",
      "7/4"
    ],
    answer: 1,
    explanation: "The two intersection points are symmetric about the axis x = −4, so each is 12/2 = 6 units from it. At x = 2, a(6)² − 9 = 63, so 36a = 72 and a = 2. Using the full distance 12 instead of half of it gives 1/2."
  },
  {
    id: "adv-h286",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The power used by a heating element is directly proportional to the square of the current through it. If the current is increased by 30%, which of the following describes the change in the power?",
    choices: [
      "It increases by 30%.",
      "It increases by 69%.",
      "It increases by 60%.",
      "It decreases by 40.83%."
    ],
    answer: 1,
    explanation: "The power is multiplied by (1.3)² = 1.69, which corresponds to an increase of 69%. A change of 30% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h287",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = 3x + 3 and f(g(x)) = 3x² + 12x + 18. What is the value of g(−2)?",
    choices: [
      "21",
      "3",
      "6",
      "1"
    ],
    answer: 3,
    explanation: "f(g(−2)) = 3(−2)² + 12(−2) + 18 = 6. Since f(g(−2)) = 3·g(−2) + 3, 3·g(−2) = 3, so g(−2) = 1. The value 6 is f(g(−2)), not g(−2)."
  },
  {
    id: "adv-h288",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/25)<sup>x − 2</sup> = 125<sup>x − 2</sup> · (1/5)<br><br>What value of x satisfies the given equation?",
    choices: [
      "11/5",
      "3",
      "2",
      "3/5"
    ],
    answer: 0,
    explanation: "Rewrite each side as a power of 5: 1/25 = 5<sup>−2</sup>, 125 = 5<sup>3</sup>, and (1/5) = 5<sup>−1</sup>. The equation becomes 5<sup>−2(x − 2)</sup> = 5<sup>3(x − 2) + (−1)</sup>, so −2x + 4 = 3x − 7. Then 5x = 11 and x = 11/5."
  },
  {
    id: "adv-h289",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = −2x − 5 and f(g(x)) = −2x² + 8x − 13. What is the value of g(−2)?",
    choices: [
      "21",
      "−37",
      "16",
      "69"
    ],
    answer: 2,
    explanation: "f(g(−2)) = −2(−2)² + 8(−2) − 13 = −37. Since f(g(−2)) = -2·g(−2) − 5, -2·g(−2) = −32, so g(−2) = 16. The value −37 is f(g(−2)), not g(−2)."
  },
  {
    id: "adv-h290",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = a(x − 2)² − 8<br>y = 24<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 8 units apart. What is the value of a?",
    choices: [
      "1/2",
      "8",
      "3/2",
      "2"
    ],
    answer: 3,
    explanation: "The two intersection points are symmetric about the axis x = 2, so each is 8/2 = 4 units from it. At x = 6, a(4)² − 8 = 24, so 16a = 32 and a = 2. Using the full distance 8 instead of half of it gives 1/2."
  },
  {
    id: "adv-h291",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 12x + 37. The function g is defined by g(x) = −2f(x + 2) + 6. What is the maximum value of g(x)?",
    choices: [
      "−68",
      "4",
      "8",
      "−14"
    ],
    answer: 1,
    explanation: "Completing the square, f(x) = (x + 6)² + 1, so f has a minimum value of 1. Multiplying by −2 turns that minimum into a maximum of −2(1) = −2, and adding 6 gives 4. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 37 instead of the minimum value gives −68."
  },
  {
    id: "adv-h292",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 300(0.36)<sup>t/2</sup> models the amount Q of a substance, where t is the number of years since the start of the study. By what percent does Q decrease each year?",
    choices: [
      "64%",
      "32%",
      "82%",
      "40%"
    ],
    answer: 3,
    explanation: "Q is multiplied by 0.36 every 2 years. The one-year factor b satisfies b<sup>2</sup> = 0.36, so b = 0.6, which is a 40% decrease each year. The value 64% is the change over 2 years, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h293",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 120(0.81)<sup>t/2</sup> models a quantity Q, where t is the number of days since the start of the study. By what percent does Q decrease each day?",
    choices: [
      "59.5%",
      "10%",
      "9.5%",
      "19%"
    ],
    answer: 1,
    explanation: "Q is multiplied by 0.81 every 2 days. The one-day factor b satisfies b<sup>2</sup> = 0.81, so b = 0.9, which is a 10% decrease each day. The value 19% is the change over 2 days, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h294",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (−9, 0) and (−7, 0) and a y-intercept at (0, 42). What is the minimum value of f?",
    choices: [
      "−8",
      "−1",
      "−2/3",
      "42"
    ],
    answer: 2,
    explanation: "From the x-intercepts, f(x) = a(x + 9)(x + 7) for some constant a. Since f(0) = 42, a(9)(7) = 42, so a = 2/3. The vertex lies halfway between the intercepts, at x = −8, so the minimum value is f(−8) = (2/3)(1)(−1) = −2/3. Assuming a = 1 gives −1."
  },
  {
    id: "adv-h295",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 6x + 11. The function g is defined by g(x) = −4f(x + 1) − 1. What is the maximum value of g(x)?",
    choices: [
      "−45",
      "−9",
      "−4",
      "7"
    ],
    answer: 1,
    explanation: "Completing the square, f(x) = (x − 3)² + 2, so f has a minimum value of 2. Multiplying by −4 turns that minimum into a maximum of −4(2) = −8, and adding −1 gives −9. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 11 instead of the minimum value gives −45."
  },
  {
    id: "adv-h296",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = 3x² − 12x − 15. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "27",
      "108",
      "9",
      "−27"
    ],
    answer: 0,
    explanation: "f(x) = 3(x + 1)(x − 5), so its vertex is at x = 2, and its minimum value is 3(3)(−3) = −27. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 27."
  },
  {
    id: "adv-h297",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 300(1.5625)<sup>t/2</sup> models the value Q of an account, where t is the number of days since the start of the study. By what percent does Q increase each day?",
    choices: [
      "25%",
      "28.12%",
      "56.25%",
      "78.12%"
    ],
    answer: 0,
    explanation: "Q is multiplied by 1.5625 every 2 days. The one-day factor b satisfies b<sup>2</sup> = 1.5625, so b = 1.25, which is a 25% increase each day. The value 56.25% is the change over 2 days, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h298",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = −2x − 9 and f(g(x)) = −4x² − 23. What is the value of g(−1)?",
    choices: [
      "45",
      "9",
      "−27",
      "18"
    ],
    answer: 1,
    explanation: "f(g(−1)) = −4(−1)² − 23 = −27. Since f(g(−1)) = -2·g(−1) − 9, -2·g(−1) = −18, so g(−1) = 9. The value −27 is f(g(−1)), not g(−1)."
  },
  {
    id: "adv-h299",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = 3x² − 42x + 135. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "−12",
      "48",
      "12",
      "6"
    ],
    answer: 2,
    explanation: "f(x) = 3(x − 5)(x − 9), so its vertex is at x = 7, and its minimum value is 3(2)(−2) = −12. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 12."
  },
  {
    id: "adv-h300",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (−9, 0) and (−5, 0) and a y-intercept at (0, 45). What is the minimum value of f?",
    choices: [
      "4",
      "−4",
      "−7",
      "45"
    ],
    answer: 1,
    explanation: "From the x-intercepts, f(x) = a(x + 9)(x + 5) for some constant a. Since f(0) = 45, a(9)(5) = 45, so a = 1. The vertex lies halfway between the intercepts, at x = −7, so the minimum value is f(−7) = 1(2)(−2) = −4. Assuming a = 1 gives −4."
  },
  {
    id: "adv-h301",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "x² + y² = 104<br>xy = 20<br><br>If x &gt; y &gt; 0, what is the value of x − y?",
    choices: [
      "√84",
      "12",
      "64",
      "8"
    ],
    answer: 3,
    explanation: "(x − y)² = x² − 2xy + y² = 104 − 2(20) = 64. Since x &gt; y, x − y is positive, so x − y = √64 = 8. The value 64 is (x − y)², not x − y, and 12 is x + y = √(104 + 2·20)."
  },
  {
    id: "adv-h302",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(h) = 500(1.3)<sup>h</sup> gives the number of subscribers to a newsletter h half-years after it was first measured. Which function g gives the same quantity t years after it was first measured?",
    choices: [
      "g(t) = 500(1.3)<sup>t/2</sup>",
      "g(t) = 500(2.6)<sup>t</sup>",
      "g(t) = 500(1.69)<sup>2t</sup>",
      "g(t) = 500(1.69)<sup>t</sup>"
    ],
    answer: 3,
    explanation: "Each year contains 2 half-years, so h = 2t. Then f = 500(1.3)<sup>2t</sup> = 500((1.3)²)<sup>t</sup> = 500(1.69)<sup>t</sup>. Doubling the base to 2.6 is not the same as squaring it, and the exponent t/2 uses the conversion in the wrong direction."
  },
  {
    id: "adv-h303",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = a(x + 2)² − 12<br>y = 132<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 12 units apart. What is the value of a?",
    choices: [
      "4",
      "1",
      "24",
      "11/3"
    ],
    answer: 0,
    explanation: "The two intersection points are symmetric about the axis x = −2, so each is 12/2 = 6 units from it. At x = 4, a(6)² − 12 = 132, so 36a = 144 and a = 4. Using the full distance 12 instead of half of it gives 1."
  },
  {
    id: "adv-h304",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x − 4) − 13/(x + 2) = 24/((x − 4)(x + 2))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "11",
      "7",
      "4",
      "−7"
    ],
    answer: 1,
    explanation: "Multiplying both sides by (x − 4)(x + 2) gives x(x + 2) − 13(x − 4) = 24, which simplifies to x² − 11x + 28 = 0, or (x − 4)(x − 7) = 0. The value x = 4 makes the denominator x − 4 equal 0, so it is extraneous. The only solution is 7, so the sum of all solutions is 7. Including the extraneous value gives 11."
  },
  {
    id: "adv-h305",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = a(x + 1)² − 6<br>y = 42<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 8 units apart. What is the value of a?",
    choices: [
      "3",
      "3/4",
      "21/8",
      "12"
    ],
    answer: 0,
    explanation: "The two intersection points are symmetric about the axis x = −1, so each is 8/2 = 4 units from it. At x = 3, a(4)² − 6 = 42, so 16a = 48 and a = 3. Using the full distance 8 instead of half of it gives 3/4."
  },
  {
    id: "adv-h306",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 6x − 16. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "25",
      "100",
      "−25",
      "5"
    ],
    answer: 0,
    explanation: "f(x) = (x + 8)(x − 2), so its vertex is at x = −3, and its minimum value is (5)(−5) = −25. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 25."
  },
  {
    id: "adv-h307",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "x² + y² = 85<br>xy = 42<br><br>If x &gt; y &gt; 0, what is the value of x − y?",
    choices: [
      "1",
      "13",
      "√43",
      "2"
    ],
    answer: 0,
    explanation: "(x − y)² = x² − 2xy + y² = 85 − 2(42) = 1. Since x &gt; y, x − y is positive, so x − y = √1 = 1. The value 1 is (x − y)², not x − y, and 13 is x + y = √(85 + 2·42)."
  },
  {
    id: "adv-h308",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(h) = 400(0.9)<sup>h</sup> gives the value, in dollars, of a collectible h half-years after it was first measured. Which function g gives the same quantity t years after it was first measured?",
    choices: [
      "g(t) = 400(0.81)<sup>t</sup>",
      "g(t) = 400(1.8)<sup>t</sup>",
      "g(t) = 400(0.9)<sup>t/2</sup>",
      "g(t) = 400(0.81)<sup>2t</sup>"
    ],
    answer: 0,
    explanation: "Each year contains 2 half-years, so h = 2t. Then f = 400(0.9)<sup>2t</sup> = 400((0.9)²)<sup>t</sup> = 400(0.81)<sup>t</sup>. Doubling the base to 1.8 is not the same as squaring it, and the exponent t/2 uses the conversion in the wrong direction."
  },
  {
    id: "adv-h309",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 10x + 32. The function g is defined by g(x) = −3f(x − 4) − 7. What is the maximum value of g(x)?",
    choices: [
      "−28",
      "14",
      "0",
      "−103"
    ],
    answer: 0,
    explanation: "Completing the square, f(x) = (x − 5)² + 7, so f has a minimum value of 7. Multiplying by −3 turns that minimum into a maximum of −3(7) = −21, and adding −7 gives −28. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 32 instead of the minimum value gives −103."
  },
  {
    id: "adv-h310",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x + 6) + 20/(x − 6) = 72/((x + 6)(x − 6))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "−8",
      "−14",
      "8",
      "−6"
    ],
    answer: 0,
    explanation: "Multiplying both sides by (x + 6)(x − 6) gives x(x − 6) + 20(x + 6) = 72, which simplifies to x² + 14x + 48 = 0, or (x + 6)(x + 8) = 0. The value x = −6 makes the denominator x + 6 equal 0, so it is extraneous. The only solution is −8, so the sum of all solutions is −8. Including the extraneous value gives −14."
  },
  {
    id: "adv-h311",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(t) = 2000(0.64)<sup>t</sup> gives the population of a town t years after it was first measured. Which function g gives the same quantity h half-years after it was first measured?",
    choices: [
      "g(h) = 2000(0.8)<sup>h/2</sup>",
      "g(h) = 2000(0.8)<sup>h</sup>",
      "g(h) = 2000(0.64)<sup>2h</sup>",
      "g(h) = 2000(0.32)<sup>h</sup>"
    ],
    answer: 1,
    explanation: "There are 2 half-years in a year, so t = h/2. Then f = 2000(0.64)<sup>h/2</sup> = 2000((0.64)<sup>1/2</sup>)<sup>h</sup> = 2000(0.8)<sup>h</sup>, because 0.8² = 0.64. Writing (0.64)<sup>2h</sup> uses t = 2h, which reverses the conversion, and halving 0.64 does not halve the growth rate."
  },
  {
    id: "adv-h312",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x − 5) − 11/(x − 1) = 20/((x − 5)(x − 1))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "7",
      "5",
      "−7",
      "12"
    ],
    answer: 0,
    explanation: "Multiplying both sides by (x − 5)(x − 1) gives x(x − 1) − 11(x − 5) = 20, which simplifies to x² − 12x + 35 = 0, or (x − 5)(x − 7) = 0. The value x = 5 makes the denominator x − 5 equal 0, so it is extraneous. The only solution is 7, so the sum of all solutions is 7. Including the extraneous value gives 12."
  },
  {
    id: "adv-h313",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 12x + 40. The function g is defined by g(x) = −3f(x + 4) − 3. What is the maximum value of g(x)?",
    choices: [
      "−15",
      "9",
      "−123",
      "−3"
    ],
    answer: 0,
    explanation: "Completing the square, f(x) = (x + 6)² + 4, so f has a minimum value of 4. Multiplying by −3 turns that minimum into a maximum of −3(4) = −12, and adding −3 gives −15. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 40 instead of the minimum value gives −123."
  },
  {
    id: "adv-h314",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "x² + y² = 82<br>xy = 9<br><br>If x &gt; y &gt; 0, what is the value of x − y?",
    choices: [
      "8",
      "√73",
      "10",
      "64"
    ],
    answer: 0,
    explanation: "(x − y)² = x² − 2xy + y² = 82 − 2(9) = 64. Since x &gt; y, x − y is positive, so x − y = √64 = 8. The value 64 is (x − y)², not x − y, and 10 is x + y = √(82 + 2·9)."
  },
  {
    id: "adv-h315",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The loudness of a sound, measured as intensity, is inversely proportional to the square of the distance from its source. If the distance from the source is decreased by 20%, which of the following describes the change in the intensity?",
    choices: [
      "It increases by 25%.",
      "It decreases by 36%.",
      "It increases by 44%.",
      "It increases by 56.25%."
    ],
    answer: 3,
    explanation: "The intensity is multiplied by 1/(0.8)² = 1.5625, which corresponds to an increase of 56.25%. A change of 20% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h316",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (−1, 1) and passes through the point (−2, −1). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "3",
      "−3",
      "−1",
      "1"
    ],
    answer: 2,
    explanation: "In vertex form, f(x) = a(x + 1)² + 1. Substituting (−2, −1): −1 = a(−1)² + 1, so a = −2. Then f(0) = −2(1)² + 1 = −1. The vertex's y-coordinate 1 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h317",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/9)<sup>x − 1</sup> = 81<sup>x − 2</sup> · 3<br><br>What value of x satisfies the given equation?",
    choices: [
      "5/2",
      "5/3",
      "5/6",
      "3/2"
    ],
    answer: 3,
    explanation: "Rewrite each side as a power of 3: 1/9 = 3<sup>−2</sup>, 81 = 3<sup>4</sup>. The equation becomes 3<sup>−2(x − 1)</sup> = 3<sup>4(x − 2) + 1</sup>, so −2x + 2 = 4x − 7. Then 6x = 9 and x = 3/2."
  },
  {
    id: "adv-h318",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 2x − 35. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "−36",
      "144",
      "6",
      "36"
    ],
    answer: 3,
    explanation: "f(x) = (x + 7)(x − 5), so its vertex is at x = −1, and its minimum value is (6)(−6) = −36. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 36."
  },
  {
    id: "adv-h319",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(t) = 200(0.36)<sup>t</sup> gives the value, in dollars, of a collectible t years after it was first measured. Which function g gives the same quantity h half-years after it was first measured?",
    choices: [
      "g(h) = 200(0.6)<sup>h</sup>",
      "g(h) = 200(0.36)<sup>2h</sup>",
      "g(h) = 200(0.6)<sup>h/2</sup>",
      "g(h) = 200(0.18)<sup>h</sup>"
    ],
    answer: 0,
    explanation: "There are 2 half-years in a year, so t = h/2. Then f = 200(0.36)<sup>h/2</sup> = 200((0.36)<sup>1/2</sup>)<sup>h</sup> = 200(0.6)<sup>h</sup>, because 0.6² = 0.36. Writing (0.36)<sup>2h</sup> uses t = 2h, which reverses the conversion, and halving 0.36 does not halve the growth rate."
  },
  {
    id: "adv-h320",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "x² + y² = 45<br>xy = 18<br><br>If x &gt; y &gt; 0, what is the value of x − y?",
    choices: [
      "4",
      "3",
      "√27",
      "9"
    ],
    answer: 1,
    explanation: "(x − y)² = x² − 2xy + y² = 45 − 2(18) = 9. Since x &gt; y, x − y is positive, so x − y = √9 = 3. The value 9 is (x − y)², not x − y, and 9 is x + y = √(45 + 2·18)."
  },
  {
    id: "adv-h321",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = 3x + 2 and f(g(x)) = 6x² + 3x − 1. What is the value of g(−1)?",
    choices: [
      "0",
      "2",
      "8",
      "4/3"
    ],
    answer: 0,
    explanation: "f(g(−1)) = 6(−1)² + 3(−1) − 1 = 2. Since f(g(−1)) = 3·g(−1) + 2, 3·g(−1) = 0, so g(−1) = 0. The value 2 is f(g(−1)), not g(−1)."
  },
  {
    id: "adv-h322",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "x² + y² = 113<br>xy = 56<br><br>If x &gt; y &gt; 0, what is the value of x − y?",
    choices: [
      "2",
      "15",
      "1",
      "√57"
    ],
    answer: 2,
    explanation: "(x − y)² = x² − 2xy + y² = 113 − 2(56) = 1. Since x &gt; y, x − y is positive, so x − y = √1 = 1. The value 1 is (x − y)², not x − y, and 15 is x + y = √(113 + 2·56)."
  },
  {
    id: "adv-h323",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 6x. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "3",
      "36",
      "9",
      "−9"
    ],
    answer: 2,
    explanation: "f(x) = (x + 6)(x), so its vertex is at x = −3, and its minimum value is (3)(−3) = −9. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 9."
  },
  {
    id: "adv-h324",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(h) = 2000(0.7)<sup>h</sup> gives the number of subscribers to a newsletter h half-years after it was first measured. Which function g gives the same quantity t years after it was first measured?",
    choices: [
      "g(t) = 2000(0.49)<sup>t</sup>",
      "g(t) = 2000(1.4)<sup>t</sup>",
      "g(t) = 2000(0.49)<sup>2t</sup>",
      "g(t) = 2000(0.7)<sup>t/2</sup>"
    ],
    answer: 0,
    explanation: "Each year contains 2 half-years, so h = 2t. Then f = 2000(0.7)<sup>2t</sup> = 2000((0.7)²)<sup>t</sup> = 2000(0.49)<sup>t</sup>. Doubling the base to 1.4 is not the same as squaring it, and the exponent t/2 uses the conversion in the wrong direction."
  },
  {
    id: "adv-h325",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/2)<sup>x − 1</sup> = 4<sup>x + 5</sup> · (1/2)<br><br>What value of x satisfies the given equation?",
    choices: [
      "−10/3",
      "−10",
      "−8/3",
      "−3"
    ],
    answer: 2,
    explanation: "Rewrite each side as a power of 2: 1/2 = 2<sup>−1</sup>, 4 = 2<sup>2</sup>, and (1/2) = 2<sup>−1</sup>. The equation becomes 2<sup>−1(x − 1)</sup> = 2<sup>2(x + 5) + (−1)</sup>, so −x + 1 = 2x + 9. Then 3x = −8 and x = −8/3."
  },
  {
    id: "adv-h326",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 5000(1.69)<sup>t/2</sup> models the value Q of an account, where t is the number of years since the start of the study. By what percent does Q increase each year?",
    choices: [
      "84.5%",
      "30%",
      "69%",
      "34.5%"
    ],
    answer: 1,
    explanation: "Q is multiplied by 1.69 every 2 years. The one-year factor b satisfies b<sup>2</sup> = 1.69, so b = 1.3, which is a 30% increase each year. The value 69% is the change over 2 years, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h327",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The intensity of light from a small bulb is inversely proportional to the square of the distance from the bulb. If the distance from the bulb is decreased by 20%, which of the following describes the change in the intensity?",
    choices: [
      "It increases by 44%.",
      "It increases by 25%.",
      "It increases by 56.25%.",
      "It decreases by 36%."
    ],
    answer: 2,
    explanation: "The intensity is multiplied by 1/(0.8)² = 1.5625, which corresponds to an increase of 56.25%. A change of 20% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h328",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (−3, 0) and (3, 0) and a y-intercept at (0, −18). What is the minimum value of f?",
    choices: [
      "−18",
      "0",
      "18",
      "−9"
    ],
    answer: 0,
    explanation: "From the x-intercepts, f(x) = a(x + 3)(x − 3) for some constant a. Since f(0) = −18, a(3)(−3) = −18, so a = 2. The vertex lies halfway between the intercepts, at x = 0, so the minimum value is f(0) = 2(3)(−3) = −18. Assuming a = 1 gives −9."
  },
  {
    id: "adv-h329",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (−3, 4) and passes through the point (−1, −8). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "31",
      "−23",
      "4",
      "13"
    ],
    answer: 1,
    explanation: "In vertex form, f(x) = a(x + 3)² + 4. Substituting (−1, −8): −8 = a(2)² + 4, so a = −3. Then f(0) = −3(3)² + 4 = −23. The vertex's y-coordinate 4 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h330",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The gravitational force between two objects is inversely proportional to the square of the distance between their centers. If the distance between their centers is increased by 150%, which of the following describes the change in the gravitational force?",
    choices: [
      "It decreases by 84%.",
      "It decreases by 60%.",
      "It decreases by 75%.",
      "It increases by 525%."
    ],
    answer: 0,
    explanation: "The gravitational force is multiplied by 1/(2.5)² = 0.16, which corresponds to a decrease of 84%. A change of 150% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h331",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (5, 0) and (7, 0) and a y-intercept at (0, 70). What is the minimum value of f?",
    choices: [
      "−1",
      "−2",
      "70",
      "6"
    ],
    answer: 1,
    explanation: "From the x-intercepts, f(x) = a(x − 5)(x − 7) for some constant a. Since f(0) = 70, a(−5)(−7) = 70, so a = 2. The vertex lies halfway between the intercepts, at x = 6, so the minimum value is f(6) = 2(1)(−1) = −2. Assuming a = 1 gives −1."
  },
  {
    id: "adv-h332",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/9)<sup>x − 1</sup> = 27<sup>x − 4</sup> · 3<br><br>What value of x satisfies the given equation?",
    choices: [
      "9/5",
      "14/5",
      "13/5",
      "9"
    ],
    answer: 2,
    explanation: "Rewrite each side as a power of 3: 1/9 = 3<sup>−2</sup>, 27 = 3<sup>3</sup>. The equation becomes 3<sup>−2(x − 1)</sup> = 3<sup>3(x − 4) + 1</sup>, so −2x + 2 = 3x − 11. Then 5x = 13 and x = 13/5."
  },
  {
    id: "adv-h333",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/9)<sup>x + 3</sup> = 81<sup>x + 4</sup> · 3<br><br>What value of x satisfies the given equation?",
    choices: [
      "−23/6",
      "−11/6",
      "−11/3",
      "−11/2"
    ],
    answer: 0,
    explanation: "Rewrite each side as a power of 3: 1/9 = 3<sup>−2</sup>, 81 = 3<sup>4</sup>. The equation becomes 3<sup>−2(x + 3)</sup> = 3<sup>4(x + 4) + 1</sup>, so −2x − 6 = 4x + 17. Then 6x = −23 and x = −23/6."
  },
  {
    id: "adv-h334",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "2x² − x − 7 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "−27/4",
      "1/4",
      "29/4",
      "57/4"
    ],
    answer: 2,
    explanation: "The sum of the solutions is r + s = 1/2 and the product is rs = −7/2. Since r² + s² = (r + s)² − 2rs, r² + s² = (1/2)² − 2(−7/2) = 1/4 + 7 = 29/4. The value 1/4 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h335",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = 2x − 5 and f(g(x)) = 4x² − 2x + 11. What is the value of g(3)?",
    choices: [
      "18",
      "41",
      "23",
      "77"
    ],
    answer: 2,
    explanation: "f(g(3)) = 43² − 23 + 11 = 41. Since f(g(3)) = 2·g(3) − 5, 2·g(3) = 46, so g(3) = 23. The value 41 is f(g(3)), not g(3)."
  },
  {
    id: "adv-h336",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/9)<sup>x</sup> = 3<sup>x − 3</sup> · (1/9)<br><br>What value of x satisfies the given equation?",
    choices: [
      "1",
      "−5/3",
      "−5",
      "5/3"
    ],
    answer: 3,
    explanation: "Rewrite each side as a power of 3: 1/9 = 3<sup>−2</sup>, and (1/9) = 3<sup>−2</sup>. The equation becomes 3<sup>−2(x)</sup> = 3<sup>1(x − 3) + (−2)</sup>, so −2x = x − 5. Then 3x = 5 and x = 5/3."
  },
  {
    id: "adv-h337",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (−2, 0) and (8, 0) and a y-intercept at (0, −16). What is the minimum value of f?",
    choices: [
      "−25",
      "3",
      "−16",
      "25"
    ],
    answer: 0,
    explanation: "From the x-intercepts, f(x) = a(x + 2)(x − 8) for some constant a. Since f(0) = −16, a(2)(−8) = −16, so a = 1. The vertex lies halfway between the intercepts, at x = 3, so the minimum value is f(3) = 1(5)(−5) = −25. Assuming a = 1 gives −25."
  },
  {
    id: "adv-h338",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "x² + y² = 212<br>xy = 56<br><br>If x &gt; y &gt; 0, what is the value of x − y?",
    choices: [
      "100",
      "√156",
      "10",
      "18"
    ],
    answer: 2,
    explanation: "(x − y)² = x² − 2xy + y² = 212 − 2(56) = 100. Since x &gt; y, x − y is positive, so x − y = √100 = 10. The value 100 is (x − y)², not x − y, and 18 is x + y = √(212 + 2·56)."
  },
  {
    id: "adv-h339",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = 4x + 5 and f(g(x)) = 12x² + 29. What is the value of g(−3)?",
    choices: [
      "71/2",
      "33",
      "137",
      "553"
    ],
    answer: 1,
    explanation: "f(g(−3)) = 12(−3)² + 29 = 137. Since f(g(−3)) = 4·g(−3) + 5, 4·g(−3) = 132, so g(−3) = 33. The value 137 is f(g(−3)), not g(−3)."
  },
  {
    id: "adv-h340",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x − 5) − 11/(x + 2) = 35/((x − 5)(x + 2))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "5",
      "4",
      "−4",
      "9"
    ],
    answer: 1,
    explanation: "Multiplying both sides by (x − 5)(x + 2) gives x(x + 2) − 11(x − 5) = 35, which simplifies to x² − 9x + 20 = 0, or (x − 5)(x − 4) = 0. The value x = 5 makes the denominator x − 5 equal 0, so it is extraneous. The only solution is 4, so the sum of all solutions is 4. Including the extraneous value gives 9."
  },
  {
    id: "adv-h341",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 4x − 32. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "36",
      "6",
      "144",
      "−36"
    ],
    answer: 0,
    explanation: "f(x) = (x + 8)(x − 4), so its vertex is at x = −2, and its minimum value is (6)(−6) = −36. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 36."
  },
  {
    id: "adv-h342",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x − 3) + 4/(x − 5) = −6/((x − 3)(x − 5))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "3",
      "2",
      "1",
      "−2"
    ],
    answer: 3,
    explanation: "Multiplying both sides by (x − 3)(x − 5) gives x(x − 5) + 4(x − 3) = −6, which simplifies to x² − x − 6 = 0, or (x − 3)(x + 2) = 0. The value x = 3 makes the denominator x − 3 equal 0, so it is extraneous. The only solution is −2, so the sum of all solutions is −2. Including the extraneous value gives 1."
  },
  {
    id: "adv-h343",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (−8, 0) and (6, 0) and a y-intercept at (0, −48). What is the minimum value of f?",
    choices: [
      "−1",
      "49",
      "−49",
      "−48"
    ],
    answer: 2,
    explanation: "From the x-intercepts, f(x) = a(x + 8)(x − 6) for some constant a. Since f(0) = −48, a(8)(−6) = −48, so a = 1. The vertex lies halfway between the intercepts, at x = −1, so the minimum value is f(−1) = 1(7)(−7) = −49. Assuming a = 1 gives −49."
  },
  {
    id: "adv-h344",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x − 4) − 14/(x + 4) = 32/((x − 4)(x + 4))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "10",
      "4",
      "6",
      "−6"
    ],
    answer: 2,
    explanation: "Multiplying both sides by (x − 4)(x + 4) gives x(x + 4) − 14(x − 4) = 32, which simplifies to x² − 10x + 24 = 0, or (x − 4)(x − 6) = 0. The value x = 4 makes the denominator x − 4 equal 0, so it is extraneous. The only solution is 6, so the sum of all solutions is 6. Including the extraneous value gives 10."
  },
  {
    id: "adv-h345",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/5)<sup>x + 1</sup> = 125<sup>x</sup> · (1/25)<br><br>What value of x satisfies the given equation?",
    choices: [
      "1/4",
      "−1/4",
      "3/2",
      "3/4"
    ],
    answer: 0,
    explanation: "Rewrite each side as a power of 5: 1/5 = 5<sup>−1</sup>, 125 = 5<sup>3</sup>, and (1/25) = 5<sup>−2</sup>. The equation becomes 5<sup>−1(x + 1)</sup> = 5<sup>3(x) + (−2)</sup>, so −x − 1 = 3x − 2. Then 4x = 1 and x = 1/4."
  },
  {
    id: "adv-h346",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (4, −6) and passes through the point (2, 6). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "6",
      "−54",
      "−6",
      "42"
    ],
    answer: 3,
    explanation: "In vertex form, f(x) = a(x − 4)² + (−6). Substituting (2, 6): 6 = a(−2)² + (−6), so a = 3. Then f(0) = 3(−4)² + (−6) = 42. The vertex's y-coordinate −6 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h347",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (−5, −3) and passes through the point (−2, 3). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "−3",
      "41/3",
      "−59/3",
      "−19/3"
    ],
    answer: 1,
    explanation: "In vertex form, f(x) = a(x + 5)² + (−3). Substituting (−2, 3): 3 = a(3)² + (−3), so a = 2/3. Then f(0) = (2/3)(5)² + (−3) = 41/3. The vertex's y-coordinate −3 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h348",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "x² + y² = 232<br>xy = 84<br><br>If x &gt; y &gt; 0, what is the value of x − y?",
    choices: [
      "8",
      "20",
      "√148",
      "64"
    ],
    answer: 0,
    explanation: "(x − y)² = x² − 2xy + y² = 232 − 2(84) = 64. Since x &gt; y, x − y is positive, so x − y = √64 = 8. The value 64 is (x − y)², not x − y, and 20 is x + y = √(232 + 2·84)."
  },
  {
    id: "adv-h349",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 14x + 45. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "4",
      "16",
      "−4",
      "2"
    ],
    answer: 0,
    explanation: "f(x) = (x − 5)(x − 9), so its vertex is at x = 7, and its minimum value is (2)(−2) = −4. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 4."
  },
  {
    id: "adv-h350",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The kinetic energy of a moving cart is directly proportional to the square of its speed. If the cart's speed is decreased by 30%, which of the following describes the change in its kinetic energy?",
    choices: [
      "It increases by 104.08%.",
      "It decreases by 51%.",
      "It decreases by 60%.",
      "It decreases by 30%."
    ],
    answer: 1,
    explanation: "Its kinetic energy is multiplied by (0.7)² = 0.49, which corresponds to a decrease of 51%. A change of 30% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h351",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 12x + 37. The function g is defined by g(x) = −4f(x + 4) + 2. What is the maximum value of g(x)?",
    choices: [
      "−2",
      "6",
      "−12",
      "−146"
    ],
    answer: 0,
    explanation: "Completing the square, f(x) = (x + 6)² + 1, so f has a minimum value of 1. Multiplying by −4 turns that minimum into a maximum of −4(1) = −4, and adding 2 gives −2. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 37 instead of the minimum value gives −146."
  },
  {
    id: "adv-h352",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 2400(0.343)<sup>t/3</sup> models the number Q of bacteria in a sample, where t is the number of months since the start of the study. By what percent does Q decrease each month?",
    choices: [
      "65.7%",
      "88.57%",
      "30%",
      "21.9%"
    ],
    answer: 2,
    explanation: "Q is multiplied by 0.343 every 3 months. The one-month factor b satisfies b<sup>3</sup> = 0.343, so b = 0.7, which is a 30% decrease each month. The value 65.7% is the change over 3 months, and dividing it by 3 ignores compounding."
  },
  {
    id: "adv-h353",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The intensity of light from a small bulb is inversely proportional to the square of the distance from the bulb. If the distance from the bulb is increased by 150%, which of the following describes the change in the intensity?",
    choices: [
      "It decreases by 75%.",
      "It decreases by 60%.",
      "It increases by 525%.",
      "It decreases by 84%."
    ],
    answer: 3,
    explanation: "The intensity is multiplied by 1/(2.5)² = 0.16, which corresponds to a decrease of 84%. A change of 150% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h354",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 6x + 13. The function g is defined by g(x) = −2f(x − 4) + 4. What is the maximum value of g(x)?",
    choices: [
      "−16",
      "−4",
      "−22",
      "12"
    ],
    answer: 1,
    explanation: "Completing the square, f(x) = (x + 3)² + 4, so f has a minimum value of 4. Multiplying by −2 turns that minimum into a maximum of −2(4) = −8, and adding 4 gives −4. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 13 instead of the minimum value gives −22."
  },
  {
    id: "adv-h355",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (2, 0) and (4, 0) and a y-intercept at (0, 8). What is the minimum value of f?",
    choices: [
      "3",
      "−1",
      "8",
      "1"
    ],
    answer: 1,
    explanation: "From the x-intercepts, f(x) = a(x − 2)(x − 4) for some constant a. Since f(0) = 8, a(−2)(−4) = 8, so a = 1. The vertex lies halfway between the intercepts, at x = 3, so the minimum value is f(3) = 1(1)(−1) = −1. Assuming a = 1 gives −1."
  },
  {
    id: "adv-h356",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = a(x − 3)² + 5<br>y = 55<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 10 units apart. What is the value of a?",
    choices: [
      "1/2",
      "10",
      "2",
      "11/5"
    ],
    answer: 2,
    explanation: "The two intersection points are symmetric about the axis x = 3, so each is 10/2 = 5 units from it. At x = 8, a(5)² + 5 = 55, so 25a = 50 and a = 2. Using the full distance 10 instead of half of it gives 1/2."
  },
  {
    id: "adv-h357",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "x² + y² = 37<br>xy = 6<br><br>If x &gt; y &gt; 0, what is the value of x − y?",
    choices: [
      "5",
      "7",
      "√31",
      "25"
    ],
    answer: 0,
    explanation: "(x − y)² = x² − 2xy + y² = 37 − 2(6) = 25. Since x &gt; y, x − y is positive, so x − y = √25 = 5. The value 25 is (x − y)², not x − y, and 7 is x + y = √(37 + 2·6)."
  },
  {
    id: "adv-h358",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(t) = 2000(1.1025)<sup>t</sup> gives the value, in dollars, of a collectible t years after it was first measured. Which function g gives the same quantity h half-years after it was first measured?",
    choices: [
      "g(h) = 2000(1.05)<sup>h</sup>",
      "g(h) = 2000(0.55125)<sup>h</sup>",
      "g(h) = 2000(1.1025)<sup>2h</sup>",
      "g(h) = 2000(1.05)<sup>h/2</sup>"
    ],
    answer: 0,
    explanation: "There are 2 half-years in a year, so t = h/2. Then f = 2000(1.1025)<sup>h/2</sup> = 2000((1.1025)<sup>1/2</sup>)<sup>h</sup> = 2000(1.05)<sup>h</sup>, because 1.05² = 1.1025. Writing (1.1025)<sup>2h</sup> uses t = 2h, which reverses the conversion, and halving 1.1025 does not halve the growth rate."
  },
  {
    id: "adv-h359",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x + 6) + 3/(x − 1) = 42/((x + 6)(x − 1))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "−4",
      "−6",
      "4",
      "−2"
    ],
    answer: 2,
    explanation: "Multiplying both sides by (x + 6)(x − 1) gives x(x − 1) + 3(x + 6) = 42, which simplifies to x² + 2x − 24 = 0, or (x + 6)(x − 4) = 0. The value x = −6 makes the denominator x + 6 equal 0, so it is extraneous. The only solution is 4, so the sum of all solutions is 4. Including the extraneous value gives −2."
  },
  {
    id: "adv-h360",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The area of a square tile is proportional to the square of its side length. If the side length is increased by 30%, which of the following describes the change in the area?",
    choices: [
      "It increases by 69%.",
      "It increases by 60%.",
      "It decreases by 40.83%.",
      "It increases by 30%."
    ],
    answer: 0,
    explanation: "The area is multiplied by (1.3)² = 1.69, which corresponds to an increase of 69%. A change of 30% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h361",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = ax² − 5<br>y = 95<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 10 units apart. What is the value of a?",
    choices: [
      "1",
      "19/5",
      "4",
      "20"
    ],
    answer: 2,
    explanation: "The two intersection points are symmetric about the axis x = 0, so each is 10/2 = 5 units from it. At x = 5, a(5)² − 5 = 95, so 25a = 100 and a = 4. Using the full distance 10 instead of half of it gives 1."
  },
  {
    id: "adv-h362",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (1, −3) and passes through the point (4, −12). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "−2",
      "−3",
      "2",
      "−4"
    ],
    answer: 3,
    explanation: "In vertex form, f(x) = a(x − 1)² + (−3). Substituting (4, −12): −12 = a(3)² + (−3), so a = −1. Then f(0) = −1(−1)² + (−3) = −4. The vertex's y-coordinate −3 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h363",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 10x + 9. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "16",
      "64",
      "−16",
      "4"
    ],
    answer: 0,
    explanation: "f(x) = (x − 1)(x − 9), so its vertex is at x = 5, and its minimum value is (4)(−4) = −16. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 16."
  },
  {
    id: "adv-h364",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = 2x² + 20x + 18. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "8",
      "32",
      "128",
      "−32"
    ],
    answer: 1,
    explanation: "f(x) = 2(x + 9)(x + 1), so its vertex is at x = −5, and its minimum value is 2(4)(−4) = −32. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 32."
  },
  {
    id: "adv-h365",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = −3x + 6 and f(g(x)) = −6x² − 3x + 15. What is the value of g(3)?",
    choices: [
      "−48",
      "150",
      "18",
      "14"
    ],
    answer: 2,
    explanation: "f(g(3)) = −63² − 33 + 15 = −48. Since f(g(3)) = -3·g(3) + 6, -3·g(3) = −54, so g(3) = 18. The value −48 is f(g(3)), not g(3)."
  },
  {
    id: "adv-h366",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² − 8x − 4 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "56",
      "64",
      "68",
      "72"
    ],
    answer: 3,
    explanation: "The sum of the solutions is r + s = 8 and the product is rs = −4. Since r² + s² = (r + s)² − 2rs, r² + s² = (8)² − 2(−4) = 64 + 8 = 72. The value 64 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h367",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 6x + 6. The function g is defined by g(x) = −4f(x − 3) + 2. What is the maximum value of g(x)?",
    choices: [
      "14",
      "4",
      "−10",
      "−22"
    ],
    answer: 0,
    explanation: "Completing the square, f(x) = (x − 3)² − 3, so f has a minimum value of −3. Multiplying by −4 turns that minimum into a maximum of −4((−3)) = 12, and adding 2 gives 14. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 6 instead of the minimum value gives −22."
  },
  {
    id: "adv-h368",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 4x + 1. The function g is defined by g(x) = −3f(x − 1) − 3. What is the maximum value of g(x)?",
    choices: [
      "−12",
      "6",
      "−6",
      "18"
    ],
    answer: 1,
    explanation: "Completing the square, f(x) = (x + 2)² − 3, so f has a minimum value of −3. Multiplying by −3 turns that minimum into a maximum of −3((−3)) = 9, and adding −3 gives 6. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 1 instead of the minimum value gives −6."
  },
  {
    id: "adv-h369",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (−1, 4) and passes through the point (−3, 6). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "4",
      "7/2",
      "−7/2",
      "9/2"
    ],
    answer: 3,
    explanation: "In vertex form, f(x) = a(x + 1)² + 4. Substituting (−3, 6): 6 = a(−2)² + 4, so a = 1/2. Then f(0) = (1/2)(1)² + 4 = 9/2. The vertex's y-coordinate 4 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h370",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = a(x − 2)² + 3<br>y = 8<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 4 units apart. What is the value of a?",
    choices: [
      "2",
      "11/4",
      "5/4",
      "5/2"
    ],
    answer: 2,
    explanation: "The two intersection points are symmetric about the axis x = 2, so each is 4/2 = 2 units from it. At x = 4, a(2)² + 3 = 8, so 4a = 5 and a = 5/4. Using the full distance 4 instead of half of it gives 5/16."
  },
  {
    id: "adv-h371",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (3, 0) and (7, 0) and a y-intercept at (0, 63). What is the minimum value of f?",
    choices: [
      "5",
      "63",
      "−12",
      "−4"
    ],
    answer: 2,
    explanation: "From the x-intercepts, f(x) = a(x − 3)(x − 7) for some constant a. Since f(0) = 63, a(−3)(−7) = 63, so a = 3. The vertex lies halfway between the intercepts, at x = 5, so the minimum value is f(5) = 3(2)(−2) = −12. Assuming a = 1 gives −4."
  },
  {
    id: "adv-h372",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/3)<sup>x + 1</sup> = 9<sup>x + 5</sup> · 3<br><br>What value of x satisfies the given equation?",
    choices: [
      "−10",
      "−11/3",
      "−10/3",
      "−4"
    ],
    answer: 3,
    explanation: "Rewrite each side as a power of 3: 1/3 = 3<sup>−1</sup>, 9 = 3<sup>2</sup>. The equation becomes 3<sup>−1(x + 1)</sup> = 3<sup>2(x + 5) + 1</sup>, so −x − 1 = 2x + 11. Then 3x = −12 and x = −4."
  },
  {
    id: "adv-h373",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(t) = 1200(1.21)<sup>t</sup> gives the number of members of a club t years after it was first measured. Which function g gives the same quantity h half-years after it was first measured?",
    choices: [
      "g(h) = 1200(1.1)<sup>h</sup>",
      "g(h) = 1200(1.21)<sup>2h</sup>",
      "g(h) = 1200(1.1)<sup>h/2</sup>",
      "g(h) = 1200(0.605)<sup>h</sup>"
    ],
    answer: 0,
    explanation: "There are 2 half-years in a year, so t = h/2. Then f = 1200(1.21)<sup>h/2</sup> = 1200((1.21)<sup>1/2</sup>)<sup>h</sup> = 1200(1.1)<sup>h</sup>, because 1.1² = 1.21. Writing (1.21)<sup>2h</sup> uses t = 2h, which reverses the conversion, and halving 1.21 does not halve the growth rate."
  },
  {
    id: "adv-h374",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = 5x − 1 and f(g(x)) = 15x² + 5x − 31. What is the value of g(3)?",
    choices: [
      "594",
      "24",
      "118/5",
      "119"
    ],
    answer: 1,
    explanation: "f(g(3)) = 153² + 53 − 31 = 119. Since f(g(3)) = 5·g(3) − 1, 5·g(3) = 120, so g(3) = 24. The value 119 is f(g(3)), not g(3)."
  },
  {
    id: "adv-h375",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = −2x + 4 and f(g(x)) = −2x² − 4x + 14. What is the value of g(−2)?",
    choices: [
      "−5",
      "14",
      "−9",
      "−24"
    ],
    answer: 0,
    explanation: "f(g(−2)) = −2(−2)² − 4(−2) + 14 = 14. Since f(g(−2)) = -2·g(−2) + 4, -2·g(−2) = 10, so g(−2) = −5. The value 14 is f(g(−2)), not g(−2)."
  },
  {
    id: "adv-h376",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 1500(0.49)<sup>t/2</sup> models a quantity Q, where t is the number of months since the start of the study. By what percent does Q decrease each month?",
    choices: [
      "25.5%",
      "30%",
      "51%",
      "75.5%"
    ],
    answer: 1,
    explanation: "Q is multiplied by 0.49 every 2 months. The one-month factor b satisfies b<sup>2</sup> = 0.49, so b = 0.7, which is a 30% decrease each month. The value 51% is the change over 2 months, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h377",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(t) = 200(1.96)<sup>t</sup> gives the number of subscribers to a newsletter t years after it was first measured. Which function g gives the same quantity h half-years after it was first measured?",
    choices: [
      "g(h) = 200(1.96)<sup>2h</sup>",
      "g(h) = 200(0.98)<sup>h</sup>",
      "g(h) = 200(1.4)<sup>h/2</sup>",
      "g(h) = 200(1.4)<sup>h</sup>"
    ],
    answer: 3,
    explanation: "There are 2 half-years in a year, so t = h/2. Then f = 200(1.96)<sup>h/2</sup> = 200((1.96)<sup>1/2</sup>)<sup>h</sup> = 200(1.4)<sup>h</sup>, because 1.4² = 1.96. Writing (1.96)<sup>2h</sup> uses t = 2h, which reverses the conversion, and halving 1.96 does not halve the growth rate."
  },
  {
    id: "adv-h378",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (−2, −2) and passes through the point (−3, −3). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "2",
      "−6",
      "−2",
      "0"
    ],
    answer: 1,
    explanation: "In vertex form, f(x) = a(x + 2)² + (−2). Substituting (−3, −3): −3 = a(−1)² + (−2), so a = −1. Then f(0) = −1(2)² + (−2) = −6. The vertex's y-coordinate −2 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h379",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(t) = 500(0.36)<sup>t</sup> gives the number of subscribers to a newsletter t years after it was first measured. Which function g gives the same quantity h half-years after it was first measured?",
    choices: [
      "g(h) = 500(0.18)<sup>h</sup>",
      "g(h) = 500(0.6)<sup>h/2</sup>",
      "g(h) = 500(0.6)<sup>h</sup>",
      "g(h) = 500(0.36)<sup>2h</sup>"
    ],
    answer: 2,
    explanation: "There are 2 half-years in a year, so t = h/2. Then f = 500(0.36)<sup>h/2</sup> = 500((0.36)<sup>1/2</sup>)<sup>h</sup> = 500(0.6)<sup>h</sup>, because 0.6² = 0.36. Writing (0.36)<sup>2h</sup> uses t = 2h, which reverses the conversion, and halving 0.36 does not halve the growth rate."
  },
  {
    id: "adv-h380",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = −2x − 9 and f(g(x)) = 2x² + 8x − 7. What is the value of g(3)?",
    choices: [
      "−13",
      "−22",
      "35",
      "−79"
    ],
    answer: 1,
    explanation: "f(g(3)) = 23² + 83 − 7 = 35. Since f(g(3)) = -2·g(3) − 9, -2·g(3) = 44, so g(3) = −22. The value 35 is f(g(3)), not g(3)."
  },
  {
    id: "adv-h381",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "2x² + 11x + 8 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "153/4",
      "89/4",
      "121/4",
      "57/4"
    ],
    answer: 1,
    explanation: "The sum of the solutions is r + s = −11/2 and the product is rs = 4. Since r² + s² = (r + s)² − 2rs, r² + s² = (−11/2)² − 2(4) = 121/4 − 8 = 89/4. The value 121/4 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h382",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = 2x² − 16x − 18. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "50",
      "200",
      "−50",
      "10"
    ],
    answer: 0,
    explanation: "f(x) = 2(x + 1)(x − 9), so its vertex is at x = 4, and its minimum value is 2(5)(−5) = −50. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 50."
  },
  {
    id: "adv-h383",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 4x. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "2",
      "−4",
      "16",
      "4"
    ],
    answer: 3,
    explanation: "f(x) = (x + 4)(x), so its vertex is at x = −2, and its minimum value is (2)(−2) = −4. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 4."
  },
  {
    id: "adv-h384",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (−8, 0) and (−4, 0) and a y-intercept at (0, 32). What is the minimum value of f?",
    choices: [
      "−6",
      "−4",
      "32",
      "4"
    ],
    answer: 1,
    explanation: "From the x-intercepts, f(x) = a(x + 8)(x + 4) for some constant a. Since f(0) = 32, a(8)(4) = 32, so a = 1. The vertex lies halfway between the intercepts, at x = −6, so the minimum value is f(−6) = 1(2)(−2) = −4. Assuming a = 1 gives −4."
  },
  {
    id: "adv-h385",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 5000(0.81)<sup>t/2</sup> models a quantity Q, where t is the number of years since the start of the study. By what percent does Q decrease each year?",
    choices: [
      "10%",
      "59.5%",
      "19%",
      "9.5%"
    ],
    answer: 0,
    explanation: "Q is multiplied by 0.81 every 2 years. The one-year factor b satisfies b<sup>2</sup> = 0.81, so b = 0.9, which is a 10% decrease each year. The value 19% is the change over 2 years, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h386",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The gravitational force between two objects is inversely proportional to the square of the distance between their centers. If the distance between their centers is decreased by 60%, which of the following describes the change in the gravitational force?",
    choices: [
      "It decreases by 84%.",
      "It increases by 150%.",
      "It increases by 525%.",
      "It increases by 156%."
    ],
    answer: 2,
    explanation: "The gravitational force is multiplied by 1/(0.4)² = 6.25, which corresponds to an increase of 525%. A change of 60% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h387",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "3x² + 11x + 7 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "121/9",
      "163/9",
      "79/9",
      "−5/9"
    ],
    answer: 2,
    explanation: "The sum of the solutions is r + s = −11/3 and the product is rs = 7/3. Since r² + s² = (r + s)² − 2rs, r² + s² = (−11/3)² − 2(7/3) = 121/9 − 14/3 = 79/9. The value 121/9 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h388",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 120(1.69)<sup>t/2</sup> models the value Q of an account, where t is the number of years since the start of the study. By what percent does Q increase each year?",
    choices: [
      "34.5%",
      "84.5%",
      "30%",
      "69%"
    ],
    answer: 2,
    explanation: "Q is multiplied by 1.69 every 2 years. The one-year factor b satisfies b<sup>2</sup> = 1.69, so b = 1.3, which is a 30% increase each year. The value 69% is the change over 2 years, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h389",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "2x² − 11x − 11 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "165/4",
      "77/4",
      "209/4",
      "121/4"
    ],
    answer: 0,
    explanation: "The sum of the solutions is r + s = 11/2 and the product is rs = −11/2. Since r² + s² = (r + s)² − 2rs, r² + s² = (11/2)² − 2(−11/2) = 121/4 + 11 = 165/4. The value 121/4 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h390",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = 2x² − 8. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "−8",
      "4",
      "8",
      "32"
    ],
    answer: 2,
    explanation: "f(x) = 2(x + 2)(x − 2), so its vertex is at x = 0, and its minimum value is 2(2)(−2) = −8. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 8."
  },
  {
    id: "adv-h391",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (−3, 0) and (5, 0) and a y-intercept at (0, −10). What is the minimum value of f?",
    choices: [
      "1",
      "−10",
      "−16",
      "−32/3"
    ],
    answer: 3,
    explanation: "From the x-intercepts, f(x) = a(x + 3)(x − 5) for some constant a. Since f(0) = −10, a(3)(−5) = −10, so a = 2/3. The vertex lies halfway between the intercepts, at x = 1, so the minimum value is f(1) = (2/3)(4)(−4) = −32/3. Assuming a = 1 gives −16."
  },
  {
    id: "adv-h392",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (3, 0) and (5, 0) and a y-intercept at (0, 30). What is the minimum value of f?",
    choices: [
      "4",
      "−2",
      "−1",
      "30"
    ],
    answer: 1,
    explanation: "From the x-intercepts, f(x) = a(x − 3)(x − 5) for some constant a. Since f(0) = 30, a(−3)(−5) = 30, so a = 2. The vertex lies halfway between the intercepts, at x = 4, so the minimum value is f(4) = 2(1)(−1) = −2. Assuming a = 1 gives −1."
  },
  {
    id: "adv-h393",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = ax² − 9<br>y = 9<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 6 units apart. What is the value of a?",
    choices: [
      "1/2",
      "6",
      "1",
      "2"
    ],
    answer: 3,
    explanation: "The two intersection points are symmetric about the axis x = 0, so each is 6/2 = 3 units from it. At x = 3, a(3)² − 9 = 9, so 9a = 18 and a = 2. Using the full distance 6 instead of half of it gives 1/2."
  },
  {
    id: "adv-h394",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = a(x − 5)² − 2<br>y = 10<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 4 units apart. What is the value of a?",
    choices: [
      "3",
      "3/4",
      "5/2",
      "6"
    ],
    answer: 0,
    explanation: "The two intersection points are symmetric about the axis x = 5, so each is 4/2 = 2 units from it. At x = 7, a(2)² − 2 = 10, so 4a = 12 and a = 3. Using the full distance 4 instead of half of it gives 3/4."
  },
  {
    id: "adv-h395",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/81)<sup>x</sup> = 9<sup>x</sup> · 9<br><br>What value of x satisfies the given equation?",
    choices: [
      "1",
      "−1/3",
      "0",
      "1/3"
    ],
    answer: 1,
    explanation: "Rewrite each side as a power of 3: 1/81 = 3<sup>−4</sup>, 9 = 3<sup>2</sup>, and 9 = 3<sup>2</sup>. The equation becomes 3<sup>−4(x)</sup> = 3<sup>2(x) + 2</sup>, so −4x = 2x + 2. Then 6x = −2 and x = −1/3."
  },
  {
    id: "adv-h396",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "2x² − 12x + 5 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "26",
      "31",
      "36",
      "41"
    ],
    answer: 1,
    explanation: "The sum of the solutions is r + s = 6 and the product is rs = 5/2. Since r² + s² = (r + s)² − 2rs, r² + s² = (6)² − 2(5/2) = 36 − 5 = 31. The value 36 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h397",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = a(x + 1)² − 8<br>y = −4<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 4 units apart. What is the value of a?",
    choices: [
      "−1",
      "1",
      "1/4",
      "2"
    ],
    answer: 1,
    explanation: "The two intersection points are symmetric about the axis x = −1, so each is 4/2 = 2 units from it. At x = 1, a(2)² − 8 = −4, so 4a = 4 and a = 1. Using the full distance 4 instead of half of it gives 1/4."
  },
  {
    id: "adv-h398",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The loudness of a sound, measured as intensity, is inversely proportional to the square of the distance from its source. If the distance from the source is increased by 25%, which of the following describes the change in the intensity?",
    choices: [
      "It decreases by 36%.",
      "It increases by 56.25%.",
      "It decreases by 20%.",
      "It decreases by 43.75%."
    ],
    answer: 0,
    explanation: "The intensity is multiplied by 1/(1.25)² = 0.64, which corresponds to a decrease of 36%. A change of 25% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h399",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x − 7) − 11/(x − 1) = 42/((x − 7)(x − 1))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "5",
      "7",
      "12",
      "−5"
    ],
    answer: 0,
    explanation: "Multiplying both sides by (x − 7)(x − 1) gives x(x − 1) − 11(x − 7) = 42, which simplifies to x² − 12x + 35 = 0, or (x − 7)(x − 5) = 0. The value x = 7 makes the denominator x − 7 equal 0, so it is extraneous. The only solution is 5, so the sum of all solutions is 5. Including the extraneous value gives 12."
  },
  {
    id: "adv-h400",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The area of a square tile is proportional to the square of its side length. If the side length is decreased by 10%, which of the following describes the change in the area?",
    choices: [
      "It increases by 23.46%.",
      "It decreases by 10%.",
      "It decreases by 20%.",
      "It decreases by 19%."
    ],
    answer: 3,
    explanation: "The area is multiplied by (0.9)² = 0.81, which corresponds to a decrease of 19%. A change of 10% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h401",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "2x² + 6x − 9 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "0",
      "9",
      "18",
      "27"
    ],
    answer: 2,
    explanation: "The sum of the solutions is r + s = −3 and the product is rs = −9/2. Since r² + s² = (r + s)² − 2rs, r² + s² = (−3)² − 2(−9/2) = 9 + 9 = 18. The value 9 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h402",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/16)<sup>x − 1</sup> = 4<sup>x − 3</sup> · (1/4)<br><br>What value of x satisfies the given equation?",
    choices: [
      "5/3",
      "2/3",
      "2",
      "−2"
    ],
    answer: 2,
    explanation: "Rewrite each side as a power of 2: 1/16 = 2<sup>−4</sup>, 4 = 2<sup>2</sup>, and (1/4) = 2<sup>−2</sup>. The equation becomes 2<sup>−4(x − 1)</sup> = 2<sup>2(x − 3) + (−2)</sup>, so −4x + 4 = 2x − 8. Then 6x = 12 and x = 2."
  },
  {
    id: "adv-h403",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x + 1) + 2/(x − 3) = 4/((x + 1)(x − 3))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "2",
      "1",
      "−2",
      "−1"
    ],
    answer: 0,
    explanation: "Multiplying both sides by (x + 1)(x − 3) gives x(x − 3) + 2(x + 1) = 4, which simplifies to x² − x − 2 = 0, or (x + 1)(x − 2) = 0. The value x = −1 makes the denominator x + 1 equal 0, so it is extraneous. The only solution is 2, so the sum of all solutions is 2. Including the extraneous value gives 1."
  },
  {
    id: "adv-h404",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 6x − 7. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "16",
      "64",
      "−16",
      "4"
    ],
    answer: 0,
    explanation: "f(x) = (x + 7)(x − 1), so its vertex is at x = −3, and its minimum value is (4)(−4) = −16. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 16."
  },
  {
    id: "adv-h405",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 8x + 12. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "−4",
      "4",
      "2",
      "16"
    ],
    answer: 1,
    explanation: "f(x) = (x + 6)(x + 2), so its vertex is at x = −4, and its minimum value is (2)(−2) = −4. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 4."
  },
  {
    id: "adv-h406",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = a(x − 1)² − 12<br>y = 60<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 12 units apart. What is the value of a?",
    choices: [
      "5/3",
      "12",
      "2",
      "1/2"
    ],
    answer: 2,
    explanation: "The two intersection points are symmetric about the axis x = 1, so each is 12/2 = 6 units from it. At x = 7, a(6)² − 12 = 60, so 36a = 72 and a = 2. Using the full distance 12 instead of half of it gives 1/2."
  },
  {
    id: "adv-h407",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 450(0.5625)<sup>t/2</sup> models the number Q of bacteria in a sample, where t is the number of months since the start of the study. By what percent does Q decrease each month?",
    choices: [
      "25%",
      "71.88%",
      "43.75%",
      "21.88%"
    ],
    answer: 0,
    explanation: "Q is multiplied by 0.5625 every 2 months. The one-month factor b satisfies b<sup>2</sup> = 0.5625, so b = 0.75, which is a 25% decrease each month. The value 43.75% is the change over 2 months, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h408",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = 4x + 3 and f(g(x)) = 8x² + 8x − 1. What is the value of g(3)?",
    choices: [
      "23",
      "49/2",
      "95",
      "383"
    ],
    answer: 0,
    explanation: "f(g(3)) = 83² + 83 − 1 = 95. Since f(g(3)) = 4·g(3) + 3, 4·g(3) = 92, so g(3) = 23. The value 95 is f(g(3)), not g(3)."
  },
  {
    id: "adv-h409",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 10x + 19. The function g is defined by g(x) = −4f(x − 1) − 1. What is the maximum value of g(x)?",
    choices: [
      "−25",
      "23",
      "28",
      "−77"
    ],
    answer: 1,
    explanation: "Completing the square, f(x) = (x + 5)² − 6, so f has a minimum value of −6. Multiplying by −4 turns that minimum into a maximum of −4((−6)) = 24, and adding −1 gives 23. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 19 instead of the minimum value gives −77."
  },
  {
    id: "adv-h410",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 2400(1.96)<sup>t/2</sup> models a quantity Q, where t is the number of weeks since the start of the study. By what percent does Q increase each week?",
    choices: [
      "98%",
      "40%",
      "96%",
      "48%"
    ],
    answer: 1,
    explanation: "Q is multiplied by 1.96 every 2 weeks. The one-week factor b satisfies b<sup>2</sup> = 1.96, so b = 1.4, which is a 40% increase each week. The value 96% is the change over 2 weeks, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h411",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² + 10x − 9 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "100",
      "118",
      "82",
      "109"
    ],
    answer: 1,
    explanation: "The sum of the solutions is r + s = −10 and the product is rs = −9. Since r² + s² = (r + s)² − 2rs, r² + s² = (−10)² − 2(−9) = 100 + 18 = 118. The value 100 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h412",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "x² + y² = 340<br>xy = 168<br><br>If x &gt; y &gt; 0, what is the value of x − y?",
    choices: [
      "√172",
      "4",
      "26",
      "2"
    ],
    answer: 3,
    explanation: "(x − y)² = x² − 2xy + y² = 340 − 2(168) = 4. Since x &gt; y, x − y is positive, so x − y = √4 = 2. The value 4 is (x − y)², not x − y, and 26 is x + y = √(340 + 2·168)."
  },
  {
    id: "adv-h413",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/125)<sup>x − 4</sup> = 5<sup>x − 2</sup> · 5<br><br>What value of x satisfies the given equation?",
    choices: [
      "11/2",
      "13/4",
      "−11/4",
      "7/2"
    ],
    answer: 1,
    explanation: "Rewrite each side as a power of 5: 1/125 = 5<sup>−3</sup>. The equation becomes 5<sup>−3(x − 4)</sup> = 5<sup>1(x − 2) + 1</sup>, so −3x + 12 = x − 1. Then 4x = 13 and x = 13/4."
  },
  {
    id: "adv-h414",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 6x + 16. The function g is defined by g(x) = −2f(x − 3) + 4. What is the maximum value of g(x)?",
    choices: [
      "−28",
      "18",
      "−22",
      "−10"
    ],
    answer: 3,
    explanation: "Completing the square, f(x) = (x − 3)² + 7, so f has a minimum value of 7. Multiplying by −2 turns that minimum into a maximum of −2(7) = −14, and adding 4 gives −10. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 16 instead of the minimum value gives −28."
  },
  {
    id: "adv-h415",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 6x + 17. The function g is defined by g(x) = −2f(x + 5) − 7. What is the maximum value of g(x)?",
    choices: [
      "−41",
      "9",
      "−2",
      "−23"
    ],
    answer: 3,
    explanation: "Completing the square, f(x) = (x + 3)² + 8, so f has a minimum value of 8. Multiplying by −2 turns that minimum into a maximum of −2(8) = −16, and adding −7 gives −23. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 17 instead of the minimum value gives −41."
  },
  {
    id: "adv-h416",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(h) = 500(1.4)<sup>h</sup> gives the value, in dollars, of a collectible h half-years after it was first measured. Which function g gives the same quantity t years after it was first measured?",
    choices: [
      "g(t) = 500(1.4)<sup>t/2</sup>",
      "g(t) = 500(2.8)<sup>t</sup>",
      "g(t) = 500(1.96)<sup>2t</sup>",
      "g(t) = 500(1.96)<sup>t</sup>"
    ],
    answer: 3,
    explanation: "Each year contains 2 half-years, so h = 2t. Then f = 500(1.4)<sup>2t</sup> = 500((1.4)²)<sup>t</sup> = 500(1.96)<sup>t</sup>. Doubling the base to 2.8 is not the same as squaring it, and the exponent t/2 uses the conversion in the wrong direction."
  },
  {
    id: "adv-h417",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (−1, 5) and passes through the point (2, −4). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "−6",
      "5",
      "6",
      "4"
    ],
    answer: 3,
    explanation: "In vertex form, f(x) = a(x + 1)² + 5. Substituting (2, −4): −4 = a(3)² + 5, so a = −1. Then f(0) = −1(1)² + 5 = 4. The vertex's y-coordinate 5 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h418",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 8x + 7. The function g is defined by g(x) = −3f(x + 3) − 2. What is the maximum value of g(x)?",
    choices: [
      "33",
      "−23",
      "25",
      "−29"
    ],
    answer: 2,
    explanation: "Completing the square, f(x) = (x − 4)² − 9, so f has a minimum value of −9. Multiplying by −3 turns that minimum into a maximum of −3((−9)) = 27, and adding −2 gives 25. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 7 instead of the minimum value gives −23."
  },
  {
    id: "adv-h419",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 120(1.44)<sup>t/2</sup> models a quantity Q, where t is the number of days since the start of the study. By what percent does Q increase each day?",
    choices: [
      "44%",
      "22%",
      "72%",
      "20%"
    ],
    answer: 3,
    explanation: "Q is multiplied by 1.44 every 2 days. The one-day factor b satisfies b<sup>2</sup> = 1.44, so b = 1.2, which is a 20% increase each day. The value 44% is the change over 2 days, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h420",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "x² + y² = 148<br>xy = 24<br><br>If x &gt; y &gt; 0, what is the value of x − y?",
    choices: [
      "100",
      "√124",
      "10",
      "14"
    ],
    answer: 2,
    explanation: "(x − y)² = x² − 2xy + y² = 148 − 2(24) = 100. Since x &gt; y, x − y is positive, so x − y = √100 = 10. The value 100 is (x − y)², not x − y, and 14 is x + y = √(148 + 2·24)."
  },
  {
    id: "adv-h421",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x − 3) − 8/(x − 1) = 6/((x − 3)(x − 1))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "−6",
      "6",
      "3",
      "9"
    ],
    answer: 1,
    explanation: "Multiplying both sides by (x − 3)(x − 1) gives x(x − 1) − 8(x − 3) = 6, which simplifies to x² − 9x + 18 = 0, or (x − 3)(x − 6) = 0. The value x = 3 makes the denominator x − 3 equal 0, so it is extraneous. The only solution is 6, so the sum of all solutions is 6. Including the extraneous value gives 9."
  },
  {
    id: "adv-h422",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x + 2) − 2/(x + 5) = −6/((x + 2)(x + 5))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "−1",
      "−3",
      "1",
      "−2"
    ],
    answer: 0,
    explanation: "Multiplying both sides by (x + 2)(x + 5) gives x(x + 5) − 2(x + 2) = −6, which simplifies to x² + 3x + 2 = 0, or (x + 2)(x + 1) = 0. The value x = −2 makes the denominator x + 2 equal 0, so it is extraneous. The only solution is −1, so the sum of all solutions is −1. Including the extraneous value gives −3."
  },
  {
    id: "adv-h423",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "x² + y² = 250<br>xy = 117<br><br>If x &gt; y &gt; 0, what is the value of x − y?",
    choices: [
      "4",
      "22",
      "√133",
      "16"
    ],
    answer: 0,
    explanation: "(x − y)² = x² − 2xy + y² = 250 − 2(117) = 16. Since x &gt; y, x − y is positive, so x − y = √16 = 4. The value 16 is (x − y)², not x − y, and 22 is x + y = √(250 + 2·117)."
  },
  {
    id: "adv-h424",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 12x + 43. The function g is defined by g(x) = −4f(x + 4) + 7. What is the maximum value of g(x)?",
    choices: [
      "35",
      "−21",
      "−56",
      "−165"
    ],
    answer: 1,
    explanation: "Completing the square, f(x) = (x + 6)² + 7, so f has a minimum value of 7. Multiplying by −4 turns that minimum into a maximum of −4(7) = −28, and adding 7 gives −21. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 43 instead of the minimum value gives −165."
  },
  {
    id: "adv-h425",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The power used by a heating element is directly proportional to the square of the current through it. If the current is increased by 50%, which of the following describes the change in the power?",
    choices: [
      "It increases by 100%.",
      "It increases by 50%.",
      "It increases by 125%.",
      "It decreases by 55.56%."
    ],
    answer: 2,
    explanation: "The power is multiplied by (1.5)² = 2.25, which corresponds to an increase of 125%. A change of 50% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h426",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(t) = 200(1.44)<sup>t</sup> gives the population of a town t years after it was first measured. Which function g gives the same quantity h half-years after it was first measured?",
    choices: [
      "g(h) = 200(1.2)<sup>h/2</sup>",
      "g(h) = 200(1.44)<sup>2h</sup>",
      "g(h) = 200(1.2)<sup>h</sup>",
      "g(h) = 200(0.72)<sup>h</sup>"
    ],
    answer: 2,
    explanation: "There are 2 half-years in a year, so t = h/2. Then f = 200(1.44)<sup>h/2</sup> = 200((1.44)<sup>1/2</sup>)<sup>h</sup> = 200(1.2)<sup>h</sup>, because 1.2² = 1.44. Writing (1.44)<sup>2h</sup> uses t = 2h, which reverses the conversion, and halving 1.44 does not halve the growth rate."
  },
  {
    id: "adv-h427",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² + 12x + 38. The function g is defined by g(x) = −2f(x + 4) − 8. What is the maximum value of g(x)?",
    choices: [
      "−12",
      "12",
      "−4",
      "−84"
    ],
    answer: 0,
    explanation: "Completing the square, f(x) = (x + 6)² + 2, so f has a minimum value of 2. Multiplying by −2 turns that minimum into a maximum of −2(2) = −4, and adding −8 gives −12. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 38 instead of the minimum value gives −84."
  },
  {
    id: "adv-h428",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/3)<sup>x − 5</sup> = 9<sup>x − 4</sup> · 9<br><br>What value of x satisfies the given equation?",
    choices: [
      "13/3",
      "1",
      "11/3",
      "1/3"
    ],
    answer: 2,
    explanation: "Rewrite each side as a power of 3: 1/3 = 3<sup>−1</sup>, 9 = 3<sup>2</sup>, and 9 = 3<sup>2</sup>. The equation becomes 3<sup>−1(x − 5)</sup> = 3<sup>2(x − 4) + 2</sup>, so −x + 5 = 2x − 6. Then 3x = 11 and x = 11/3."
  },
  {
    id: "adv-h429",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (4, −1) and passes through the point (1, −10). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "15",
      "−1",
      "−5",
      "−17"
    ],
    answer: 3,
    explanation: "In vertex form, f(x) = a(x − 4)² + (−1). Substituting (1, −10): −10 = a(−3)² + (−1), so a = −1. Then f(0) = −1(−4)² + (−1) = −17. The vertex's y-coordinate −1 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h430",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x − 6) − 1/(x − 3) = 18/((x − 6)(x − 3))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "2",
      "6",
      "4",
      "−2"
    ],
    answer: 3,
    explanation: "Multiplying both sides by (x − 6)(x − 3) gives x(x − 3) − 1(x − 6) = 18, which simplifies to x² − 4x − 12 = 0, or (x − 6)(x + 2) = 0. The value x = 6 makes the denominator x − 6 equal 0, so it is extraneous. The only solution is −2, so the sum of all solutions is −2. Including the extraneous value gives 4."
  },
  {
    id: "adv-h431",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(t) = 500(1.69)<sup>t</sup> gives the number of members of a club t years after it was first measured. Which function g gives the same quantity h half-years after it was first measured?",
    choices: [
      "g(h) = 500(1.3)<sup>h/2</sup>",
      "g(h) = 500(1.69)<sup>2h</sup>",
      "g(h) = 500(1.3)<sup>h</sup>",
      "g(h) = 500(0.845)<sup>h</sup>"
    ],
    answer: 2,
    explanation: "There are 2 half-years in a year, so t = h/2. Then f = 500(1.69)<sup>h/2</sup> = 500((1.69)<sup>1/2</sup>)<sup>h</sup> = 500(1.3)<sup>h</sup>, because 1.3² = 1.69. Writing (1.69)<sup>2h</sup> uses t = 2h, which reverses the conversion, and halving 1.69 does not halve the growth rate."
  },
  {
    id: "adv-h432",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (−4, 9) and passes through the point (−1, 27). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "1",
      "−23",
      "9",
      "41"
    ],
    answer: 3,
    explanation: "In vertex form, f(x) = a(x + 4)² + 9. Substituting (−1, 27): 27 = a(3)² + 9, so a = 2. Then f(0) = 2(4)² + 9 = 41. The vertex's y-coordinate 9 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h433",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = a(x + 4)² + 2<br>y = 4<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 2 units apart. What is the value of a?",
    choices: [
      "6",
      "2",
      "1/2",
      "4"
    ],
    answer: 1,
    explanation: "The two intersection points are symmetric about the axis x = −4, so each is 2/2 = 1 units from it. At x = −3, a(1)² + 2 = 4, so 1a = 2 and a = 2. Using the full distance 2 instead of half of it gives 1/2."
  },
  {
    id: "adv-h434",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = a(x + 5)² + 3<br>y = 8<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 4 units apart. What is the value of a?",
    choices: [
      "11/4",
      "2",
      "5/2",
      "5/4"
    ],
    answer: 3,
    explanation: "The two intersection points are symmetric about the axis x = −5, so each is 4/2 = 2 units from it. At x = −3, a(2)² + 3 = 8, so 4a = 5 and a = 5/4. Using the full distance 4 instead of half of it gives 5/16."
  },
  {
    id: "adv-h435",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The power used by a heating element is directly proportional to the square of the current through it. If the current is decreased by 20%, which of the following describes the change in the power?",
    choices: [
      "It decreases by 20%.",
      "It increases by 56.25%.",
      "It decreases by 36%.",
      "It decreases by 40%."
    ],
    answer: 2,
    explanation: "The power is multiplied by (0.8)² = 0.64, which corresponds to a decrease of 36%. A change of 20% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h436",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 120(2.25)<sup>t/2</sup> models a quantity Q, where t is the number of days since the start of the study. By what percent does Q increase each day?",
    choices: [
      "125%",
      "50%",
      "112.5%",
      "62.5%"
    ],
    answer: 1,
    explanation: "Q is multiplied by 2.25 every 2 days. The one-day factor b satisfies b<sup>2</sup> = 2.25, so b = 1.5, which is a 50% increase each day. The value 125% is the change over 2 days, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h437",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (−3, 0) and (9, 0) and a y-intercept at (0, −27). What is the minimum value of f?",
    choices: [
      "3",
      "−27",
      "−36",
      "36"
    ],
    answer: 2,
    explanation: "From the x-intercepts, f(x) = a(x + 3)(x − 9) for some constant a. Since f(0) = −27, a(3)(−9) = −27, so a = 1. The vertex lies halfway between the intercepts, at x = 3, so the minimum value is f(3) = 1(6)(−6) = −36. Assuming a = 1 gives −36."
  },
  {
    id: "adv-h438",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = a(x + 1)² − 2<br>y = 10<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 4 units apart. What is the value of a?",
    choices: [
      "5/2",
      "3",
      "6",
      "3/4"
    ],
    answer: 1,
    explanation: "The two intersection points are symmetric about the axis x = −1, so each is 4/2 = 2 units from it. At x = 1, a(2)² − 2 = 10, so 4a = 12 and a = 3. Using the full distance 4 instead of half of it gives 3/4."
  },
  {
    id: "adv-h439",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "4x² + 6x − 3 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "33/4",
      "15/4",
      "3/4",
      "9/4"
    ],
    answer: 1,
    explanation: "The sum of the solutions is r + s = −3/2 and the product is rs = −3/4. Since r² + s² = (r + s)² − 2rs, r² + s² = (−3/2)² − 2(−3/4) = 9/4 + 3/2 = 15/4. The value 9/4 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h440",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = 2x + 9 and f(g(x)) = 6x² + 4x − 3. What is the value of g(3)?",
    choices: [
      "63",
      "135",
      "27",
      "36"
    ],
    answer: 2,
    explanation: "f(g(3)) = 63² + 43 − 3 = 63. Since f(g(3)) = 2·g(3) + 9, 2·g(3) = 54, so g(3) = 27. The value 63 is f(g(3)), not g(3)."
  },
  {
    id: "adv-h441",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has x-intercepts at (−5, 0) and (3, 0) and a y-intercept at (0, −30). What is the minimum value of f?",
    choices: [
      "−30",
      "−16",
      "−32",
      "−1"
    ],
    answer: 2,
    explanation: "From the x-intercepts, f(x) = a(x + 5)(x − 3) for some constant a. Since f(0) = −30, a(5)(−3) = −30, so a = 2. The vertex lies halfway between the intercepts, at x = −1, so the minimum value is f(−1) = 2(4)(−4) = −32. Assuming a = 1 gives −16."
  },
  {
    id: "adv-h442",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (−2, −4) and passes through the point (1, 5). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "−6",
      "0",
      "−4",
      "−8"
    ],
    answer: 1,
    explanation: "In vertex form, f(x) = a(x + 2)² + (−4). Substituting (1, 5): 5 = a(3)² + (−4), so a = 1. Then f(0) = 1(2)² + (−4) = 0. The vertex's y-coordinate −4 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h443",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "3x² + 10x − 12 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "28/9",
      "100/9",
      "316/9",
      "172/9"
    ],
    answer: 3,
    explanation: "The sum of the solutions is r + s = −10/3 and the product is rs = −4. Since r² + s² = (r + s)² − 2rs, r² + s² = (−10/3)² − 2(−4) = 100/9 + 8 = 172/9. The value 100/9 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h444",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x + 1) + 7/(x − 4) = 5/((x + 1)(x − 4))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "−2",
      "2",
      "−1",
      "−3"
    ],
    answer: 0,
    explanation: "Multiplying both sides by (x + 1)(x − 4) gives x(x − 4) + 7(x + 1) = 5, which simplifies to x² + 3x + 2 = 0, or (x + 1)(x + 2) = 0. The value x = −1 makes the denominator x + 1 equal 0, so it is extraneous. The only solution is −2, so the sum of all solutions is −2. Including the extraneous value gives −3."
  },
  {
    id: "adv-h445",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = 3x² − 12x − 36. In the xy-plane, the graph of y = f(x) + k, where k is a constant, has exactly one x-intercept. What is the value of k?",
    choices: [
      "48",
      "12",
      "192",
      "−48"
    ],
    answer: 0,
    explanation: "f(x) = 3(x + 2)(x − 6), so its vertex is at x = 2, and its minimum value is 3(4)(−4) = −48. The graph of y = f(x) + k touches the x-axis exactly once when the minimum is shifted up to 0, so k = 48."
  },
  {
    id: "adv-h446",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (5, 8) and passes through the point (3, −4). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "−7",
      "8",
      "83",
      "−67"
    ],
    answer: 3,
    explanation: "In vertex form, f(x) = a(x − 5)² + 8. Substituting (3, −4): −4 = a(−2)² + 8, so a = −3. Then f(0) = −3(−5)² + 8 = −67. The vertex's y-coordinate 8 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h447",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 2400(0.5625)<sup>t/2</sup> models a quantity Q, where t is the number of weeks since the start of the study. By what percent does Q decrease each week?",
    choices: [
      "71.88%",
      "21.88%",
      "25%",
      "43.75%"
    ],
    answer: 2,
    explanation: "Q is multiplied by 0.5625 every 2 weeks. The one-week factor b satisfies b<sup>2</sup> = 0.5625, so b = 0.75, which is a 25% decrease each week. The value 43.75% is the change over 2 weeks, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h448",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (2, 6) and passes through the point (1, 7). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "10",
      "6",
      "2",
      "8"
    ],
    answer: 0,
    explanation: "In vertex form, f(x) = a(x − 2)² + 6. Substituting (1, 7): 7 = a(−1)² + 6, so a = 1. Then f(0) = 1(−2)² + 6 = 10. The vertex's y-coordinate 6 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h449",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The kinetic energy of a moving cart is directly proportional to the square of its speed. If the cart's speed is increased by 30%, which of the following describes the change in its kinetic energy?",
    choices: [
      "It increases by 69%.",
      "It decreases by 40.83%.",
      "It increases by 30%.",
      "It increases by 60%."
    ],
    answer: 0,
    explanation: "Its kinetic energy is multiplied by (1.3)² = 1.69, which corresponds to an increase of 69%. A change of 30% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h450",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "x² − 12x + 6 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "156",
      "144",
      "132",
      "138"
    ],
    answer: 2,
    explanation: "The sum of the solutions is r + s = 12 and the product is rs = 6. Since r² + s² = (r + s)² − 2rs, r² + s² = (12)² − 2(6) = 144 − 12 = 132. The value 144 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h451",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (−1, 6) and passes through the point (−4, −12). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "−8",
      "8",
      "6",
      "4"
    ],
    answer: 3,
    explanation: "In vertex form, f(x) = a(x + 1)² + 6. Substituting (−4, −12): −12 = a(−3)² + 6, so a = −2. Then f(0) = −2(1)² + 6 = 4. The vertex's y-coordinate 6 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h452",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The function f is defined by f(x) = x² − 10x + 18. The function g is defined by g(x) = −4f(x − 3) + 5. What is the maximum value of g(x)?",
    choices: [
      "8",
      "−23",
      "−67",
      "33"
    ],
    answer: 3,
    explanation: "Completing the square, f(x) = (x − 5)² − 7, so f has a minimum value of −7. Multiplying by −4 turns that minimum into a maximum of −4((−7)) = 28, and adding 5 gives 33. The horizontal shift changes where the maximum occurs, not its value. Using the constant term 18 instead of the minimum value gives −67."
  },
  {
    id: "adv-h453",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The area of a square tile is proportional to the square of its side length. If the side length is increased by 20%, which of the following describes the change in the area?",
    choices: [
      "It increases by 40%.",
      "It decreases by 30.56%.",
      "It increases by 20%.",
      "It increases by 44%."
    ],
    answer: 3,
    explanation: "The area is multiplied by (1.2)² = 1.44, which corresponds to an increase of 44%. A change of 20% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h454",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/81)<sup>x + 3</sup> = 27<sup>x − 1</sup> · (1/9)<br><br>What value of x satisfies the given equation?",
    choices: [
      "−1",
      "−17",
      "−9/7",
      "17/7"
    ],
    answer: 0,
    explanation: "Rewrite each side as a power of 3: 1/81 = 3<sup>−4</sup>, 27 = 3<sup>3</sup>, and (1/9) = 3<sup>−2</sup>. The equation becomes 3<sup>−4(x + 3)</sup> = 3<sup>3(x − 1) + (−2)</sup>, so −4x − 12 = 3x − 5. Then 7x = −7 and x = −1."
  },
  {
    id: "adv-h455",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "x/(x − 3) − 2/(x + 4) = 21/((x − 3)(x + 4))<br><br>What is the sum of all solutions to the given equation?",
    choices: [
      "5",
      "−2",
      "−5",
      "3"
    ],
    answer: 2,
    explanation: "Multiplying both sides by (x − 3)(x + 4) gives x(x + 4) − 2(x − 3) = 21, which simplifies to x² + 2x − 15 = 0, or (x − 3)(x + 5) = 0. The value x = 3 makes the denominator x − 3 equal 0, so it is extraneous. The only solution is −5, so the sum of all solutions is −5. Including the extraneous value gives −2."
  },
  {
    id: "adv-h456",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = 3x + 4 and f(g(x)) = 9x² + 9x − 5. What is the value of g(−1)?",
    choices: [
      "−1/3",
      "−11",
      "−5",
      "−3"
    ],
    answer: 3,
    explanation: "f(g(−1)) = 9(−1)² + 9(−1) − 5 = −5. Since f(g(−1)) = 3·g(−1) + 4, 3·g(−1) = −9, so g(−1) = −3. The value −5 is f(g(−1)), not g(−1)."
  },
  {
    id: "adv-h457",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/25)<sup>x − 2</sup> = 125<sup>x − 1</sup> · 25<br><br>What value of x satisfies the given equation?",
    choices: [
      "1",
      "−3/5",
      "−3",
      "7/5"
    ],
    answer: 0,
    explanation: "Rewrite each side as a power of 5: 1/25 = 5<sup>−2</sup>, 125 = 5<sup>3</sup>, and 25 = 5<sup>2</sup>. The equation becomes 5<sup>−2(x − 2)</sup> = 5<sup>3(x − 1) + 2</sup>, so −2x + 4 = 3x − 1. Then 5x = 5 and x = 1."
  },
  {
    id: "adv-h458",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The graph of the quadratic function f in the xy-plane has its vertex at (−5, −6) and passes through the point (−6, −7). What is the y-coordinate of the y-intercept of the graph?",
    choices: [
      "19",
      "−6",
      "−31",
      "−1"
    ],
    answer: 2,
    explanation: "In vertex form, f(x) = a(x + 5)² + (−6). Substituting (−6, −7): −7 = a(−1)² + (−6), so a = −1. Then f(0) = −1(5)² + (−6) = −31. The vertex's y-coordinate −6 is the y-intercept only when the vertex is on the y-axis."
  },
  {
    id: "adv-h459",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential equations",
    difficulty: 4,
    prompt: "(1/5)<sup>x + 1</sup> = 125<sup>x − 4</sup> · (1/5)<br><br>What value of x satisfies the given equation?",
    choices: [
      "7/2",
      "11/4",
      "7",
      "3"
    ],
    answer: 3,
    explanation: "Rewrite each side as a power of 5: 1/5 = 5<sup>−1</sup>, 125 = 5<sup>3</sup>, and (1/5) = 5<sup>−1</sup>. The equation becomes 5<sup>−1(x + 1)</sup> = 5<sup>3(x − 4) + (−1)</sup>, so −x − 1 = 3x − 13. Then 4x = 12 and x = 3."
  },
  {
    id: "adv-h460",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "2x² − 8x − 3 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "19",
      "13",
      "16",
      "22"
    ],
    answer: 0,
    explanation: "The sum of the solutions is r + s = 4 and the product is rs = −3/2. Since r² + s² = (r + s)² − 2rs, r² + s² = (4)² − 2(−3/2) = 16 + 3 = 19. The value 16 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h461",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear systems of equations",
    difficulty: 3,
    prompt: "y = a(x − 1)² − 9<br>y = 7<br><br>In the given system of equations, a is a positive constant. The graphs of the equations in the xy-plane intersect at two points that are 8 units apart. What is the value of a?",
    choices: [
      "−1/8",
      "1/4",
      "1",
      "4"
    ],
    answer: 2,
    explanation: "The two intersection points are symmetric about the axis x = 1, so each is 8/2 = 4 units from it. At x = 5, a(4)² − 9 = 7, so 16a = 16 and a = 1. Using the full distance 8 instead of half of it gives 1/4."
  },
  {
    id: "adv-h462",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(t) = 250(1.21)<sup>t</sup> gives the population of a town t years after it was first measured. Which function g gives the same quantity h half-years after it was first measured?",
    choices: [
      "g(h) = 250(0.605)<sup>h</sup>",
      "g(h) = 250(1.1)<sup>h/2</sup>",
      "g(h) = 250(1.21)<sup>2h</sup>",
      "g(h) = 250(1.1)<sup>h</sup>"
    ],
    answer: 3,
    explanation: "There are 2 half-years in a year, so t = h/2. Then f = 250(1.21)<sup>h/2</sup> = 250((1.21)<sup>1/2</sup>)<sup>h</sup> = 250(1.1)<sup>h</sup>, because 1.1² = 1.21. Writing (1.21)<sup>2h</sup> uses t = 2h, which reverses the conversion, and halving 1.21 does not halve the growth rate."
  },
  {
    id: "adv-h463",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 300(0.49)<sup>t/2</sup> models the amount Q of a substance, where t is the number of days since the start of the study. By what percent does Q decrease each day?",
    choices: [
      "25.5%",
      "51%",
      "30%",
      "75.5%"
    ],
    answer: 2,
    explanation: "Q is multiplied by 0.49 every 2 days. The one-day factor b satisfies b<sup>2</sup> = 0.49, so b = 0.7, which is a 30% decrease each day. The value 51% is the change over 2 days, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h464",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function f(t) = 1500(0.64)<sup>t</sup> gives the number of subscribers to a newsletter t years after it was first measured. Which function g gives the same quantity h half-years after it was first measured?",
    choices: [
      "g(h) = 1500(0.8)<sup>h/2</sup>",
      "g(h) = 1500(0.32)<sup>h</sup>",
      "g(h) = 1500(0.64)<sup>2h</sup>",
      "g(h) = 1500(0.8)<sup>h</sup>"
    ],
    answer: 3,
    explanation: "There are 2 half-years in a year, so t = h/2. Then f = 1500(0.64)<sup>h/2</sup> = 1500((0.64)<sup>1/2</sup>)<sup>h</sup> = 1500(0.8)<sup>h</sup>, because 0.8² = 0.64. Writing (0.64)<sup>2h</sup> uses t = 2h, which reverses the conversion, and halving 0.64 does not halve the growth rate."
  },
  {
    id: "adv-h465",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "3x² + x − 9 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "−53/9",
      "163/9",
      "55/9",
      "1/9"
    ],
    answer: 2,
    explanation: "The sum of the solutions is r + s = −1/3 and the product is rs = −3. Since r² + s² = (r + s)² − 2rs, r² + s² = (−1/3)² − 2(−3) = 1/9 + 6 = 55/9. The value 1/9 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h466",
    module: "math",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: 3,
    prompt: "The power used by a heating element is directly proportional to the square of the current through it. If the current is increased by 10%, which of the following describes the change in the power?",
    choices: [
      "It increases by 20%.",
      "It decreases by 17.36%.",
      "It increases by 10%.",
      "It increases by 21%."
    ],
    answer: 3,
    explanation: "The power is multiplied by (1.1)² = 1.21, which corresponds to an increase of 21%. A change of 10% treats the relationship as linear, ignoring the square."
  },
  {
    id: "adv-h467",
    module: "math",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: 3,
    prompt: "The function Q(t) = 600(2.25)<sup>t/2</sup> models the value Q of an account, where t is the number of weeks since the start of the study. By what percent does Q increase each week?",
    choices: [
      "125%",
      "112.5%",
      "62.5%",
      "50%"
    ],
    answer: 3,
    explanation: "Q is multiplied by 2.25 every 2 weeks. The one-week factor b satisfies b<sup>2</sup> = 2.25, so b = 1.5, which is a 50% increase each week. The value 125% is the change over 2 weeks, and dividing it by 2 ignores compounding."
  },
  {
    id: "adv-h468",
    module: "math",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: 3,
    prompt: "x² + y² = 80<br>xy = 32<br><br>If x &gt; y &gt; 0, what is the value of x − y?",
    choices: [
      "4",
      "12",
      "16",
      "√48"
    ],
    answer: 0,
    explanation: "(x − y)² = x² − 2xy + y² = 80 − 2(32) = 16. Since x &gt; y, x − y is positive, so x − y = √16 = 4. The value 16 is (x − y)², not x − y, and 12 is x + y = √(80 + 2·32)."
  },
  {
    id: "adv-h469",
    module: "math",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: 3,
    prompt: "3x² + 9x − 7 = 0<br><br>The solutions to the given equation are r and s. What is the value of r² + s²?",
    choices: [
      "9",
      "41/3",
      "13/3",
      "23"
    ],
    answer: 1,
    explanation: "The sum of the solutions is r + s = −3 and the product is rs = −7/3. Since r² + s² = (r + s)² − 2rs, r² + s² = (−3)² − 2(−7/3) = 9 + 14/3 = 41/3. The value 9 is (r + s)², which still includes the 2rs term."
  },
  {
    id: "adv-h470",
    module: "math",
    domain: "Advanced Math",
    skill: "Function composition",
    difficulty: 3,
    prompt: "The functions f and g are defined by f(x) = 5x + 6 and f(g(x)) = 10x² − 20x + 16. What is the value of g(−3)?",
    choices: [
      "32",
      "172/5",
      "166",
      "836"
    ],
    answer: 0,
    explanation: "f(g(−3)) = 10(−3)² − 20(−3) + 16 = 166. Since f(g(−3)) = 5·g(−3) + 6, 5·g(−3) = 160, so g(−3) = 32. The value 166 is f(g(−3)), not g(−3)."
  }
);
