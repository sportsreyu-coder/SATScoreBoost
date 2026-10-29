// Math — Geometry and Trigonometry (Hard tier)
// Multi-step, top-of-scale SAT-style questions. All content is original.

QUESTIONS.push(
  {
    id: "geo-h1",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² − 10x + y² + 4y + 4 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the length of the radius of the circle?",
    choices: [
      "2",
      "25",
      "√29",
      "5"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² − 10x + 25) + (y² + 4y + 4) = −4 + 25 + 4, so (x − 5)² + (y + 2)² = 25. The radius is √25 = 5."
  },
  {
    id: "geo-h2",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle has a radius of 82 centimeters. A chord of the circle is 18 centimeters from the center of the circle. What is the length, in centimeters, of the chord?",
    choices: [
      "80",
      "64",
      "160",
      "128"
    ],
    answer: 2,
    explanation: "The perpendicular from the center to a chord bisects the chord. This forms a right triangle with hypotenuse 82 (the radius) and one leg 18 (the distance to the chord). The other leg is √(82² − 18²) = √6400 = 80, which is half the chord. The chord has length 2(80) = 160."
  },
  {
    id: "geo-h3",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with center O, central angle AOB has a measure of 2π/3 radians. The length of arc AB is 24π units. What is the area, in square units, of sector AOB?",
    choices: [
      "864π",
      "432π",
      "1296π",
      "216π"
    ],
    answer: 1,
    explanation: "Arc length = rθ, so 24π = r(2π/3), giving r = 36. Sector area = ½r²θ = ½(36)²(2π/3) = 432π."
  },
  {
    id: "geo-h4",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, segment DE connects point D on AB to point E on AC, and DE is parallel to BC. If AD = 6, DE = 90, and BC = 135, what is the length of DB?",
    choices: [
      "3",
      "9",
      "6",
      "45"
    ],
    answer: 0,
    explanation: "Triangles ADE and ABC are similar, so AD/AB = DE/BC = 90/135. Then AB = 6·135/90 = 9, and DB = AB − AD = 9 − 6 = 3."
  },
  {
    id: "geo-h5",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 35/12. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 2 times the length of the corresponding side of triangle PQR. What is the value of tan(T)?",
    choices: [
      "35/12",
      "24/35",
      "37/35",
      "12/35"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so tan(T) = tan(Q), and the scale factor 2 does not matter. In triangle PQR, tan(P) = 35/12 means the side opposite P is 35k and the side adjacent to P is 12k, with hypotenuse 37k (since 35² + 12² = 37²). Angle Q is the other acute angle, so the side opposite Q is 12k and the side adjacent to Q is 35k. Therefore tan(Q) = 12/35."
  },
  {
    id: "geo-h6",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a right circular cone (including the radius and the height) is decreased by 10%. By what percent does the surface area of the right circular cone decrease?",
    choices: [
      "20%",
      "10%",
      "19%",
      "27.1%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 0.9, area is multiplied by the square of that factor: 0.9<sup>2</sup> = 0.81. So the new surface area is 81% of the original, a decrease of 19%."
  },
  {
    id: "geo-h7",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "An equilateral triangle has a height of 9√3 centimeters. What is the area, in square centimeters, of the triangle?",
    choices: [
      "162√3",
      "81√3",
      "81",
      "243"
    ],
    answer: 1,
    explanation: "The height of an equilateral triangle with side s is (s√3)/2. So (s√3)/2 = 9√3, giving s = 18. The area is ½·base·height = ½(18)(9√3) = 81√3."
  },
  {
    id: "geo-h8",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x − 1)² + (y + 5)² = 25<br><br>The point (−2, −1) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the slope of line t?",
    choices: [
      "3/4",
      "−4/3",
      "−3/4",
      "4/3"
    ],
    answer: 0,
    explanation: "The center is (1, −5). The radius to (−2, −1) has slope (−1 − (−5))/(−2 − 1) = −4/3. A tangent line is perpendicular to the radius at the point of tangency, so its slope is 3/4."
  },
  {
    id: "geo-h9",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cone and a right circular cylinder have the same base radius and the same height. The volume of the cylinder is 144π cubic inches. What is the volume, in cubic inches, of the space inside the cylinder but outside the cone?",
    choices: [
      "48π",
      "144π",
      "72π",
      "96π"
    ],
    answer: 3,
    explanation: "A cone has one-third the volume of a cylinder with the same base and height, so the cone's volume is 48π. The remaining space is 144π − 48π = 96π cubic inches."
  },
  {
    id: "geo-h10",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (3x − 5)°, and the measure of inscribed angle ABC is (2x − 13)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "58",
      "302",
      "29",
      "151"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 2x − 13 = ½(3x − 5). Multiplying by 2: 4x − 26 = 3x − 5, so x = 21 and x = 21. Then angle ABC = 2(21) − 13 = 29°."
  },
  {
    id: "geo-h11",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = 3x + 24 and y = −3x − 6 intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "54",
      "27",
      "75",
      "36"
    ],
    answer: 1,
    explanation: "The lines meet where 3x + 24 = −3x − 6, at (−5, 9), so the triangle's height is |9| = 9. The x-intercepts are x = −8 and x = −2, so the base is 6. The area is ½(6)(9) = 27."
  },
  {
    id: "geo-h12",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 3,
    prompt: "In isosceles triangle ABC, AB = AC. Side BC is extended past C to point D, and the measure of angle ACD is 135°. What is the measure, in degrees, of angle BAC?",
    choices: [
      "90",
      "45",
      "100",
      "135"
    ],
    answer: 0,
    explanation: "Angle ACB is supplementary to angle ACD, so angle ACB = 180° − 135° = 45°. Since AB = AC, the base angles are equal: angle ABC = 45°. Then angle BAC = 180° − 2(45°) = 90°."
  },
  {
    id: "geo-h13",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant IV. An equation of the circle is x² + y² − 6x + 24y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "153",
      "141",
      "−144",
      "144"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (3, −12) and r² = 9 + 144 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |3| = 3. So 9 = 153 − c, giving c = 144. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h14",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 30, and BC = 16. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of CD?",
    choices: [
      "128/17",
      "450/17",
      "240/17",
      "23"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(30² + 16²) = 34. The area of the triangle can be computed two ways: ½(16)(30) = ½(34)(CD). So CD = (16)(30)/34 = 240/17."
  },
  {
    id: "geo-h15",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 4,
    prompt: "What is the value of cos(17π/6)?",
    choices: [
      "√3/2",
      "−√3/2",
      "1/2",
      "−1/2"
    ],
    answer: 1,
    explanation: "17π/6 radians is 510°, which is coterminal with 150°, which lies in quadrant II. Its reference angle is 30°, so |cos| = √3/2. In this quadrant cos is negative, so the value is −√3/2."
  },
  {
    id: "geo-h16",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cones have surface areas in the ratio 16 : 25. The volume of the smaller one is 320 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "625",
      "500",
      "400",
      "820"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 16 : 25 means k = 5/4. So the larger volume is 320·(5/4)³ = 320·125/64 = 625."
  },
  {
    id: "geo-h17",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Each interior angle of a regular polygon has a measure that is 13/2 times the measure of each of its exterior angles. How many sides does the polygon have?",
    choices: [
      "15/2",
      "17",
      "14",
      "15"
    ],
    answer: 3,
    explanation: "For a regular n-gon, each exterior angle is 360°/n and each interior angle is 180° − 360°/n. Setting 180 − 360/n = 13/2(360/n) gives 180 = 15/2(360/n), so n = 15/2(360)/180 = 15."
  },
  {
    id: "geo-h18",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, angle B measures 45°, angle C measures 30°, and AC = 20. What is the length of AB?",
    choices: [
      "20√2",
      "10√3",
      "10√2",
      "10"
    ],
    answer: 2,
    explanation: "Draw altitude AD to side BC. In 30°-60°-90° triangle ADC, AD is opposite the 30° angle, so AD = ½(AC) = 10. In 45°-45°-90° triangle ABD, the hypotenuse AB = AD·√2 = 10√2."
  },
  {
    id: "geo-h19",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (−1, −4) and (6, k) is 25. If k > −4, what is the value of k?",
    choices: [
      "−28",
      "20",
      "21",
      "24"
    ],
    answer: 1,
    explanation: "By the distance formula, (6 − (−1))² + (k − (−4))² = 25², so 49 + (k − (−4))² = 625. Then (k − (−4))² = 576, so k − (−4) = ±24. Since k > −4, k = −4 + 24 = 20."
  },
  {
    id: "geo-h20",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A straight ramp 50 meters long rises from level ground to a platform 14 meters high. Let θ be the angle between the ramp and the ground. What is the value of tan(90° − θ)?",
    choices: [
      "24/7",
      "7/24",
      "7/25",
      "24/25"
    ],
    answer: 0,
    explanation: "The horizontal leg is √(50² − 14²) = 48. The angle 90° − θ is the other acute angle of the right triangle, at the top. For that angle, the adjacent side is the vertical leg (14) and the opposite side is the horizontal leg (48). So tan(90° − θ) = 48/14 = 24/7, which equals 1/tan(θ)."
  },
  {
    id: "geo-h21",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² − 8x + y² − 8y − 68 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the length of the diameter of the circle?",
    choices: [
      "4√17",
      "10",
      "200",
      "20"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² − 8x + 16) + (y² − 8y + 16) = 68 + 16 + 16, so (x − 4)² + (y − 4)² = 100. The radius is √100 = 10, so the diameter is 20."
  },
  {
    id: "geo-h22",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle has a radius of 5 centimeters. A chord of the circle is 4 centimeters from the center of the circle. What is the length, in centimeters, of the chord?",
    choices: [
      "3",
      "1",
      "6",
      "2"
    ],
    answer: 2,
    explanation: "The perpendicular from the center to a chord bisects the chord. This forms a right triangle with hypotenuse 5 (the radius) and one leg 4 (the distance to the chord). The other leg is √(5² − 4²) = √9 = 3, which is half the chord. The chord has length 2(3) = 6."
  },
  {
    id: "geo-h23",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with center O, central angle AOB has a measure of 5π/4 radians. The length of arc AB is 35π units. What is the area, in square units, of sector AOB?",
    choices: [
      "980π",
      "490π",
      "784π",
      "245π"
    ],
    answer: 1,
    explanation: "Arc length = rθ, so 35π = r(5π/4), giving r = 28. Sector area = ½r²θ = ½(28)²(5π/4) = 490π."
  },
  {
    id: "geo-h24",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC such that segment DE is parallel to side BC. If AD = 3, DB = 9, and DE = 36, what is the length of BC?",
    choices: [
      "144",
      "108",
      "12",
      "45"
    ],
    answer: 0,
    explanation: "Since DE ∥ BC, triangle ADE is similar to triangle ABC with ratio AD/AB = 3/12. So DE/BC = 3/12, and BC = 36·12/3 = 144. A common error is to use AD/DB instead of AD/AB."
  },
  {
    id: "geo-h25",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 21/20. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 5 times the length of the corresponding side of triangle PQR. What is the value of cos(T)?",
    choices: [
      "20/29",
      "105/29",
      "29/21",
      "21/29"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so cos(T) = cos(Q), and the scale factor 5 does not matter. In triangle PQR, tan(P) = 21/20 means the side opposite P is 21k and the side adjacent to P is 20k, with hypotenuse 29k (since 21² + 20² = 29²). Angle Q is the other acute angle, so the side opposite Q is 20k and the side adjacent to Q is 21k. Therefore cos(Q) = 21/29."
  },
  {
    id: "geo-h26",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a cube is decreased by 40%. By what percent does the surface area of the cube decrease?",
    choices: [
      "80%",
      "40%",
      "64%",
      "78.4%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 0.6, area is multiplied by the square of that factor: 0.6<sup>2</sup> = 0.36. So the new surface area is 36% of the original, a decrease of 64%."
  },
  {
    id: "geo-h27",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "An equilateral triangle has an area of 100√3 square inches. What is the perimeter, in inches, of the triangle?",
    choices: [
      "20",
      "60",
      "30",
      "300"
    ],
    answer: 1,
    explanation: "The area of an equilateral triangle with side s is (√3/4)s². Setting (√3/4)s² = 100√3 gives s² = 400, so s = 20 and the perimeter is 3(20) = 60."
  },
  {
    id: "geo-h28",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x + 2)² + (y + 6)² = 1369<br><br>The point (10, 29) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the slope of line t?",
    choices: [
      "−12/35",
      "35/12",
      "12/35",
      "−35/12"
    ],
    answer: 0,
    explanation: "The center is (−2, −6). The radius to (10, 29) has slope (29 − (−6))/(10 − (−2)) = 35/12. A tangent line is perpendicular to the radius at the point of tangency, so its slope is −12/35."
  },
  {
    id: "geo-h29",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A container shaped like a right circular cone is held with its vertex pointing down. It is filled with water to 2/3 of its height, measured from the vertex. The water's surface is a circle parallel to the cone's base. What fraction of the cone's volume is filled with water?",
    choices: [
      "2/3",
      "4/9",
      "8/9",
      "8/27"
    ],
    answer: 3,
    explanation: "The water forms a smaller cone similar to the whole cone, with scale factor 2/3 (the ratio of heights). Volumes of similar solids scale by the cube of the scale factor, so the water fills (2/3)³ = 8/27 of the cone."
  },
  {
    id: "geo-h30",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (4x − 10)°, and the measure of inscribed angle ABC is (4x − 55)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "90",
      "270",
      "45",
      "135"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 4x − 55 = ½(4x − 10). Multiplying by 2: 8x − 110 = 4x − 10, so 4x = 100 and x = 25. Then angle ABC = 4(25) − 55 = 45°."
  },
  {
    id: "geo-h31",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = −x + 4 and y = 4x + 24 intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "80",
      "40",
      "43",
      "48"
    ],
    answer: 1,
    explanation: "The lines meet where −x + 4 = 4x + 24, at (−4, 8), so the triangle's height is |8| = 8. The x-intercepts are x = 4 and x = −6, so the base is 10. The area is ½(10)(8) = 40."
  },
  {
    id: "geo-h32",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 4,
    prompt: "In triangle ABC, the measure of angle A is 138°. The bisectors of angles B and C intersect at point P. What is the measure, in degrees, of angle BPC?",
    choices: [
      "159",
      "42",
      "111",
      "21"
    ],
    answer: 0,
    explanation: "Angles B and C together measure 180° − 138° = 42°. Their halves add to 21°. In triangle BPC, angle BPC = 180° − 21° = 159°. (In general, angle BPC = 90° + A/2.)"
  },
  {
    id: "geo-h33",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant II. An equation of the circle is x² + y² + 8x − 24y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "160",
      "140",
      "−144",
      "144"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (−4, 12) and r² = 16 + 144 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |−4| = 4. So 16 = 160 − c, giving c = 144. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h34",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 120, and BC = 27. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of BD?",
    choices: [
      "4800/41",
      "1080/41",
      "243/41",
      "27/2"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(120² + 27²) = 123. Triangle CBD is similar to triangle ABC (they share angle B), so BD/BC = BC/AB, giving BD = 27²/123 = 243/41."
  },
  {
    id: "geo-h35",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 4,
    prompt: "In the xy-plane, the terminal side of an angle of 11π/4 radians in standard position intersects the unit circle at point P. What is the y-coordinate of P?",
    choices: [
      "−√2/2",
      "√2/2",
      "1/2",
      "√3/2"
    ],
    answer: 1,
    explanation: "11π/4 radians is 495°, which is coterminal with 135°, which lies in quadrant II. Its reference angle is 45°, so |sin| = √2/2. In this quadrant sin is positive, so the value is √2/2."
  },
  {
    id: "geo-h36",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar pyramids have surface areas in the ratio 16 : 25. The volume of the smaller one is 256 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "500",
      "400",
      "320",
      "656"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 16 : 25 means k = 5/4. So the larger volume is 256·(5/4)³ = 256·125/64 = 500."
  },
  {
    id: "geo-h37",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "For a certain regular polygon, the measure of each interior angle is 140° greater than the measure of each exterior angle. How many sides does the polygon have?",
    choices: [
      "3",
      "16",
      "19",
      "18"
    ],
    answer: 3,
    explanation: "Let each exterior angle be e, so each interior angle is 180° − e. Then (180 − e) − e = 140, so e = 20°. Since the exterior angles of any convex polygon add to 360°, n = 360/20 = 18."
  },
  {
    id: "geo-h38",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, the measure of angle B is 45° and the measure of angle C is 30°. The altitude from A to side BC has length 6. What is the length of side BC?",
    choices: [
      "12√3",
      "6 + 6√2",
      "6 + 6√3",
      "12 + 6√3"
    ],
    answer: 2,
    explanation: "Let D be the foot of the altitude. Triangle ABD is a 45°-45°-90° triangle, so BD = AD = 6. Triangle ADC is a 30°-60°-90° triangle with the side opposite 30° equal to AD = 6, so DC = 6√3. Therefore BC = BD + DC = 6 + 6√3."
  },
  {
    id: "geo-h39",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (−6, −4) and (−20, k) is 50. If k > −4, what is the value of k?",
    choices: [
      "−52",
      "44",
      "46",
      "48"
    ],
    answer: 1,
    explanation: "By the distance formula, (−20 − (−6))² + (k − (−4))² = 50², so 196 + (k − (−4))² = 2500. Then (k − (−4))² = 2304, so k − (−4) = ±48. Since k > −4, k = −4 + 48 = 44."
  },
  {
    id: "geo-h40",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A straight ramp 61 meters long rises from level ground to a platform 11 meters high. Let θ be the angle between the ramp and the ground. What is the value of tan(90° − θ)?",
    choices: [
      "60/11",
      "11/60",
      "11/61",
      "60/61"
    ],
    answer: 0,
    explanation: "The horizontal leg is √(61² − 11²) = 60. The angle 90° − θ is the other acute angle of the right triangle, at the top. For that angle, the adjacent side is the vertical leg (11) and the opposite side is the horizontal leg (60). So tan(90° − θ) = 60/11 = 60/11, which equals 1/tan(θ)."
  },
  {
    id: "geo-h41",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² + 4x + y² + 6y − 68 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the length of the radius of the circle?",
    choices: [
      "2√17",
      "81",
      "√13",
      "9"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² + 4x + 4) + (y² + 6y + 9) = 68 + 4 + 9, so (x + 2)² + (y + 3)² = 81. The radius is √81 = 9."
  },
  {
    id: "geo-h42",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 111 inches, a chord has length 72 inches. What is the distance, in inches, from the center of the circle to the chord?",
    choices: [
      "75",
      "84",
      "105",
      "36"
    ],
    answer: 2,
    explanation: "The perpendicular from the center bisects the chord, so it forms a right triangle with hypotenuse 111 and leg 72/2 = 36. The distance is √(111² − 36²) = √11025 = 105."
  },
  {
    id: "geo-h43",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A sector of a circle has a central angle of 5π/3 radians and an area of 480π square units. What is the radius of the circle?",
    choices: [
      "576",
      "24",
      "12",
      "288"
    ],
    answer: 1,
    explanation: "Sector area = ½r²θ, so 480π = ½r²(5π/3). Then r² = 2(480π)/(5π/3) = 576, so r = 24."
  },
  {
    id: "geo-h44",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, segment DE connects point D on AB to point E on AC, and DE is parallel to BC. If AD = 12, DE = 180, and BC = 270, what is the length of DB?",
    choices: [
      "6",
      "18",
      "12",
      "90"
    ],
    answer: 0,
    explanation: "Triangles ADE and ABC are similar, so AD/AB = DE/BC = 180/270. Then AB = 12·270/180 = 18, and DB = AB − AD = 18 − 12 = 6."
  },
  {
    id: "geo-h45",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 12/35. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 4 times the length of the corresponding side of triangle PQR. What is the value of tan(T)?",
    choices: [
      "12/35",
      "35/3",
      "37/12",
      "35/12"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so tan(T) = tan(Q), and the scale factor 4 does not matter. In triangle PQR, tan(P) = 12/35 means the side opposite P is 12k and the side adjacent to P is 35k, with hypotenuse 37k (since 12² + 35² = 37²). Angle Q is the other acute angle, so the side opposite Q is 35k and the side adjacent to Q is 12k. Therefore tan(Q) = 35/12."
  },
  {
    id: "geo-h46",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a cube is increased by 20%. By what percent does the surface area of the cube increase?",
    choices: [
      "40%",
      "20%",
      "44%",
      "72.8%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 1.2, area is multiplied by the square of that factor: 1.2<sup>2</sup> = 1.44. So the new surface area is 144% of the original, an increase of 44%."
  },
  {
    id: "geo-h47",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "An equilateral triangle has an area of 64√3 square inches. What is the perimeter, in inches, of the triangle?",
    choices: [
      "16",
      "48",
      "24",
      "192"
    ],
    answer: 1,
    explanation: "The area of an equilateral triangle with side s is (√3/4)s². Setting (√3/4)s² = 64√3 gives s² = 256, so s = 16 and the perimeter is 3(16) = 48."
  },
  {
    id: "geo-h48",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x − 2)² + (y − 1)² = 1681<br><br>The point (11, −39) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the slope of line t?",
    choices: [
      "9/40",
      "−40/9",
      "−9/40",
      "40/9"
    ],
    answer: 0,
    explanation: "The center is (2, 1). The radius to (11, −39) has slope (−39 − 1)/(11 − 2) = −40/9. A tangent line is perpendicular to the radius at the point of tangency, so its slope is 9/40."
  },
  {
    id: "geo-h49",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A container shaped like a right circular cone is held with its vertex pointing down. It is filled with water to 1/4 of its height, measured from the vertex. The water's surface is a circle parallel to the cone's base. What fraction of the cone's volume is filled with water?",
    choices: [
      "1/4",
      "1/16",
      "1/8",
      "1/64"
    ],
    answer: 3,
    explanation: "The water forms a smaller cone similar to the whole cone, with scale factor 1/4 (the ratio of heights). Volumes of similar solids scale by the cube of the scale factor, so the water fills (1/4)³ = 1/64 of the cone."
  },
  {
    id: "geo-h50",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (5x − 13)°, and the measure of inscribed angle ABC is (4x − 38)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "92",
      "268",
      "46",
      "134"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 4x − 38 = ½(5x − 13). Multiplying by 2: 8x − 76 = 5x − 13, so 3x = 63 and x = 21. Then angle ABC = 4(21) − 38 = 46°."
  },
  {
    id: "geo-h51",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = 4x and y = 2x − 4 intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "16",
      "8",
      "4",
      "9"
    ],
    answer: 1,
    explanation: "The lines meet where 4x = 2x − 4, at (−2, −8), so the triangle's height is |−8| = 8. The x-intercepts are x = 0 and x = 2, so the base is 2. The area is ½(2)(8) = 8."
  },
  {
    id: "geo-h52",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 3,
    prompt: "In isosceles triangle ABC, AB = AC. Side BC is extended past C to point D, and the measure of angle ACD is 159°. What is the measure, in degrees, of angle BAC?",
    choices: [
      "138",
      "21",
      "148",
      "159"
    ],
    answer: 0,
    explanation: "Angle ACB is supplementary to angle ACD, so angle ACB = 180° − 159° = 21°. Since AB = AC, the base angles are equal: angle ABC = 21°. Then angle BAC = 180° − 2(21°) = 138°."
  },
  {
    id: "geo-h53",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant II. An equation of the circle is x² + y² + 10x − 6y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "34",
      "4",
      "−9",
      "9"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (−5, 3) and r² = 25 + 9 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |−5| = 5. So 25 = 34 − c, giving c = 9. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h54",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 8, and BC = 6. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of CD?",
    choices: [
      "18/5",
      "32/5",
      "24/5",
      "7"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(8² + 6²) = 10. The area of the triangle can be computed two ways: ½(6)(8) = ½(10)(CD). So CD = (6)(8)/10 = 24/5."
  },
  {
    id: "geo-h55",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 4,
    prompt: "What is the value of sin(8π/3)?",
    choices: [
      "−√3/2",
      "√3/2",
      "−1/2",
      "1/2"
    ],
    answer: 1,
    explanation: "8π/3 radians is 480°, which is coterminal with 120°, which lies in quadrant II. Its reference angle is 60°, so |sin| = √3/2. In this quadrant sin is positive, so the value is √3/2."
  },
  {
    id: "geo-h56",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cones have surface areas in the ratio 9 : 25. The volume of the smaller one is 162 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "750",
      "450",
      "270",
      "612"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 9 : 25 means k = 5/3. So the larger volume is 162·(5/3)³ = 162·125/27 = 750."
  },
  {
    id: "geo-h57",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "For a certain regular polygon, the measure of each interior angle is 144° greater than the measure of each exterior angle. How many sides does the polygon have?",
    choices: [
      "3",
      "18",
      "21",
      "20"
    ],
    answer: 3,
    explanation: "Let each exterior angle be e, so each interior angle is 180° − e. Then (180 − e) − e = 144, so e = 18°. Since the exterior angles of any convex polygon add to 360°, n = 360/18 = 20."
  },
  {
    id: "geo-h58",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, the measure of angle B is 45° and the measure of angle C is 30°. The altitude from A to side BC has length 9. What is the length of side BC?",
    choices: [
      "18√3",
      "9 + 9√2",
      "9 + 9√3",
      "18 + 9√3"
    ],
    answer: 2,
    explanation: "Let D be the foot of the altitude. Triangle ABD is a 45°-45°-90° triangle, so BD = AD = 9. Triangle ADC is a 30°-60°-90° triangle with the side opposite 30° equal to AD = 9, so DC = 9√3. Therefore BC = BD + DC = 9 + 9√3."
  },
  {
    id: "geo-h59",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (4, −4) and (−16, k) is 29. If k > −4, what is the value of k?",
    choices: [
      "−25",
      "17",
      "25",
      "21"
    ],
    answer: 1,
    explanation: "By the distance formula, (−16 − 4)² + (k − (−4))² = 29², so 400 + (k − (−4))² = 841. Then (k − (−4))² = 441, so k − (−4) = ±21. Since k > −4, k = −4 + 21 = 17."
  },
  {
    id: "geo-h60",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A 10-foot ladder leans against a vertical wall. The top of the ladder touches the wall 6 feet above the level ground. Let θ be the angle between the ladder and the ground. What is the value of cos(90° − θ)?",
    choices: [
      "3/5",
      "4/5",
      "3/4",
      "5/3"
    ],
    answer: 0,
    explanation: "The horizontal leg is √(10² − 6²) = 8. The angle 90° − θ is the other acute angle of the right triangle, at the top. For that angle, the adjacent side is the vertical leg (6) and the opposite side is the horizontal leg (8). So cos(90° − θ) = 6/10 = 3/5, which equals sin(θ)."
  },
  {
    id: "geo-h61",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² + 16x + y² − 8y + 76 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the length of the diameter of the circle?",
    choices: [
      "4√19",
      "2",
      "8",
      "4"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² + 16x + 64) + (y² − 8y + 16) = −76 + 64 + 16, so (x + 8)² + (y − 4)² = 4. The radius is √4 = 2, so the diameter is 4."
  },
  {
    id: "geo-h62",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle has a radius of 25 centimeters. A chord of the circle is 7 centimeters from the center of the circle. What is the length, in centimeters, of the chord?",
    choices: [
      "24",
      "18",
      "48",
      "36"
    ],
    answer: 2,
    explanation: "The perpendicular from the center to a chord bisects the chord. This forms a right triangle with hypotenuse 25 (the radius) and one leg 7 (the distance to the chord). The other leg is √(25² − 7²) = √576 = 24, which is half the chord. The chord has length 2(24) = 48."
  },
  {
    id: "geo-h63",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with center O, central angle AOB has a measure of 2π/3 radians. The length of arc AB is 4π units. What is the area, in square units, of sector AOB?",
    choices: [
      "24π",
      "12π",
      "36π",
      "6π"
    ],
    answer: 1,
    explanation: "Arc length = rθ, so 4π = r(2π/3), giving r = 6. Sector area = ½r²θ = ½(6)²(2π/3) = 12π."
  },
  {
    id: "geo-h64",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC such that segment DE is parallel to side BC. If AD = 2, DB = 10, and DE = 18, what is the length of BC?",
    choices: [
      "108",
      "90",
      "18/5",
      "28"
    ],
    answer: 0,
    explanation: "Since DE ∥ BC, triangle ADE is similar to triangle ABC with ratio AD/AB = 2/12. So DE/BC = 2/12, and BC = 18·12/2 = 108. A common error is to use AD/DB instead of AD/AB."
  },
  {
    id: "geo-h65",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 11/60. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 2 times the length of the corresponding side of triangle PQR. What is the value of sin(T)?",
    choices: [
      "11/61",
      "120/61",
      "61/60",
      "60/61"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so sin(T) = sin(Q), and the scale factor 2 does not matter. In triangle PQR, tan(P) = 11/60 means the side opposite P is 11k and the side adjacent to P is 60k, with hypotenuse 61k (since 11² + 60² = 61²). Angle Q is the other acute angle, so the side opposite Q is 60k and the side adjacent to Q is 11k. Therefore sin(Q) = 60/61."
  },
  {
    id: "geo-h66",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a right circular cone (including the radius and the height) is decreased by 40%. By what percent does the surface area of the right circular cone decrease?",
    choices: [
      "80%",
      "40%",
      "64%",
      "78.4%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 0.6, area is multiplied by the square of that factor: 0.6<sup>2</sup> = 0.36. So the new surface area is 36% of the original, a decrease of 64%."
  },
  {
    id: "geo-h67",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "An equilateral triangle has an area of 49√3 square inches. What is the perimeter, in inches, of the triangle?",
    choices: [
      "14",
      "42",
      "21",
      "147"
    ],
    answer: 1,
    explanation: "The area of an equilateral triangle with side s is (√3/4)s². Setting (√3/4)s² = 49√3 gives s² = 196, so s = 14 and the perimeter is 3(14) = 42."
  },
  {
    id: "geo-h68",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x − 1)² + (y − 1)² = 169<br><br>The point (6, −11) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the slope of line t?",
    choices: [
      "5/12",
      "−12/5",
      "−5/12",
      "12/5"
    ],
    answer: 0,
    explanation: "The center is (1, 1). The radius to (6, −11) has slope (−11 − 1)/(6 − 1) = −12/5. A tangent line is perpendicular to the radius at the point of tangency, so its slope is 5/12."
  },
  {
    id: "geo-h69",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cone and a right circular cylinder have the same base radius and the same height. The volume of the cylinder is 36π cubic inches. What is the volume, in cubic inches, of the space inside the cylinder but outside the cone?",
    choices: [
      "12π",
      "36π",
      "18π",
      "24π"
    ],
    answer: 3,
    explanation: "A cone has one-third the volume of a cylinder with the same base and height, so the cone's volume is 12π. The remaining space is 36π − 12π = 24π cubic inches."
  },
  {
    id: "geo-h70",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (5x + 5)°, and the measure of inscribed angle ABC is (3x − 10)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "130",
      "230",
      "65",
      "115"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 3x − 10 = ½(5x + 5). Multiplying by 2: 6x − 20 = 5x + 5, so x = 25 and x = 25. Then angle ABC = 3(25) − 10 = 65°."
  },
  {
    id: "geo-h71",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = −4x − 34 and y = −2x − 22 intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "25",
      "25/2",
      "36",
      "45/2"
    ],
    answer: 1,
    explanation: "The lines meet where −4x − 34 = −2x − 22, at (−6, −10), so the triangle's height is |−10| = 10. The x-intercepts are x = −17/2 and x = −11, so the base is 5/2. The area is ½(5/2)(10) = 25/2."
  },
  {
    id: "geo-h72",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 4,
    prompt: "In triangle ABC, the measure of angle A is 72°. The bisectors of angles B and C intersect at point P. What is the measure, in degrees, of angle BPC?",
    choices: [
      "126",
      "108",
      "144",
      "54"
    ],
    answer: 0,
    explanation: "Angles B and C together measure 180° − 72° = 108°. Their halves add to 54°. In triangle BPC, angle BPC = 180° − 54° = 126°. (In general, angle BPC = 90° + A/2.)"
  },
  {
    id: "geo-h73",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant IV. An equation of the circle is x² + y² − 12x + 12y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "72",
      "30",
      "−36",
      "36"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (6, −6) and r² = 36 + 36 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |6| = 6. So 36 = 72 − c, giving c = 36. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h74",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 80, and BC = 18. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of BD?",
    choices: [
      "3200/41",
      "720/41",
      "162/41",
      "9"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(80² + 18²) = 82. Triangle CBD is similar to triangle ABC (they share angle B), so BD/BC = BC/AB, giving BD = 18²/82 = 162/41."
  },
  {
    id: "geo-h75",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "What is the value of sin(2π/3)?",
    choices: [
      "−√3/2",
      "√3/2",
      "−1/2",
      "1/2"
    ],
    answer: 1,
    explanation: "2π/3 radians is 120°, which lies in quadrant II. Its reference angle is 60°, so |sin| = √3/2. In this quadrant sin is positive, so the value is √3/2."
  },
  {
    id: "geo-h76",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cylinders have surface areas in the ratio 1 : 9. The volume of the smaller one is 3 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "81",
      "27",
      "9",
      "30"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 1 : 9 means k = 3/1. So the larger volume is 3·(3/1)³ = 3·27/1 = 81."
  },
  {
    id: "geo-h77",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "The sum of the measures of the interior angles of a regular polygon is 3240°. What is the measure, in degrees, of each exterior angle of the polygon?",
    choices: [
      "162",
      "9",
      "20",
      "18"
    ],
    answer: 3,
    explanation: "The interior angles of an n-gon add to (n − 2)·180°, so (n − 2)·180 = 3240 and n = 20. Each exterior angle of a regular 20-gon is 360°/20 = 18°."
  },
  {
    id: "geo-h78",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, angle B measures 45°, angle C measures 30°, and AC = 6. What is the length of AB?",
    choices: [
      "6√2",
      "3√3",
      "3√2",
      "3"
    ],
    answer: 2,
    explanation: "Draw altitude AD to side BC. In 30°-60°-90° triangle ADC, AD is opposite the 30° angle, so AD = ½(AC) = 3. In 45°-45°-90° triangle ABD, the hypotenuse AB = AD·√2 = 3√2."
  },
  {
    id: "geo-h79",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (−4, −8) and (−1, k) is 5. If k > −8, what is the value of k?",
    choices: [
      "−12",
      "−4",
      "−3",
      "4"
    ],
    answer: 1,
    explanation: "By the distance formula, (−1 − (−4))² + (k − (−8))² = 5², so 9 + (k − (−8))² = 25. Then (k − (−8))² = 16, so k − (−8) = ±4. Since k > −8, k = −8 + 4 = −4."
  },
  {
    id: "geo-h80",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A straight ramp 58 meters long rises from level ground to a platform 40 meters high. Let θ be the angle between the ramp and the ground. What is the value of cos(90° − θ)?",
    choices: [
      "20/29",
      "21/29",
      "20/21",
      "29/20"
    ],
    answer: 0,
    explanation: "The horizontal leg is √(58² − 40²) = 42. The angle 90° − θ is the other acute angle of the right triangle, at the top. For that angle, the adjacent side is the vertical leg (40) and the opposite side is the horizontal leg (42). So cos(90° − θ) = 40/58 = 20/29, which equals sin(θ)."
  },
  {
    id: "geo-h81",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² + 12x + y² − 4y + 28 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the area of the circle?",
    choices: [
      "28π",
      "144π",
      "24π",
      "12π"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² + 12x + 36) + (y² − 4y + 4) = −28 + 36 + 4, so (x + 6)² + (y − 2)² = 12. The radius is √12 = 2√3, so the area is π(12) = 12π."
  },
  {
    id: "geo-h82",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 75 inches, a chord has length 144 inches. What is the distance, in inches, from the center of the circle to the chord?",
    choices: [
      "3",
      "73",
      "21",
      "72"
    ],
    answer: 2,
    explanation: "The perpendicular from the center bisects the chord, so it forms a right triangle with hypotenuse 75 and leg 144/2 = 72. The distance is √(75² − 72²) = √441 = 21."
  },
  {
    id: "geo-h83",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A sector of a circle has a central angle of π/4 radians and an area of 288π square units. What is the radius of the circle?",
    choices: [
      "2304",
      "48",
      "24",
      "1152"
    ],
    answer: 1,
    explanation: "Sector area = ½r²θ, so 288π = ½r²(π/4). Then r² = 2(288π)/(π/4) = 2304, so r = 48."
  },
  {
    id: "geo-h84",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC such that segment DE is parallel to side BC. If AD = 4, DB = 2, and DE = 44, what is the length of BC?",
    choices: [
      "66",
      "22",
      "88",
      "46"
    ],
    answer: 0,
    explanation: "Since DE ∥ BC, triangle ADE is similar to triangle ABC with ratio AD/AB = 4/6. So DE/BC = 4/6, and BC = 44·6/4 = 66. A common error is to use AD/DB instead of AD/AB."
  },
  {
    id: "geo-h85",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 5/12. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 4 times the length of the corresponding side of triangle PQR. What is the value of tan(T)?",
    choices: [
      "5/12",
      "48/5",
      "13/5",
      "12/5"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so tan(T) = tan(Q), and the scale factor 4 does not matter. In triangle PQR, tan(P) = 5/12 means the side opposite P is 5k and the side adjacent to P is 12k, with hypotenuse 13k (since 5² + 12² = 13²). Angle Q is the other acute angle, so the side opposite Q is 12k and the side adjacent to Q is 5k. Therefore tan(Q) = 12/5."
  },
  {
    id: "geo-h86",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a right circular cone (including the radius and the height) is decreased by 50%. By what percent does the volume of the right circular cone decrease?",
    choices: [
      "150%",
      "50%",
      "87.5%",
      "75%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 0.5, volume is multiplied by the cube of that factor: 0.5<sup>3</sup> = 0.125. So the new volume is 12.5% of the original, a decrease of 87.5%."
  },
  {
    id: "geo-h87",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "A regular hexagon has a perimeter of 72 meters. What is the area, in square meters, of the hexagon?",
    choices: [
      "36√3",
      "216√3",
      "108√3",
      "432√3"
    ],
    answer: 1,
    explanation: "Each side is 72/6 = 12. A regular hexagon is made of 6 equilateral triangles with side 12, each with area (√3/4)(12)² = 36√3. The total area is 6 × 36√3 = 216√3."
  },
  {
    id: "geo-h88",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 4,
    prompt: "(x − 1)² + (y + 3)² = 3721<br><br>The point (12, 57) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the y-coordinate of the y-intercept of line t?",
    choices: [
      "296/5",
      "−93/11",
      "274/5",
      "−169/60"
    ],
    answer: 0,
    explanation: "The center is (1, −3). The radius to (12, 57) has slope (57 − (−3))/(12 − 1) = 60/11. A tangent line is perpendicular to the radius at the point of tangency, so its slope is −11/60. Using y − 57 = −11/60(x − 12) and setting x = 0 gives y = 296/5."
  },
  {
    id: "geo-h89",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A sphere is placed inside a right circular cylinder so that the sphere touches the top, the bottom, and the curved side of the cylinder. The cylinder has a volume of 1458π cubic centimeters. What is the volume, in cubic centimeters, of the sphere?",
    choices: [
      "486π",
      "1944π",
      "729π",
      "972π"
    ],
    answer: 3,
    explanation: "If the sphere has radius R, the cylinder has radius R and height 2R, so its volume is πR²(2R) = 2πR³ = 1458π. Then R³ = 729 and R = 9. The sphere's volume is (4/3)πR³ = (4/3)π(729) = 972π. (In general, the sphere fills 2/3 of the cylinder.)"
  },
  {
    id: "geo-h90",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (4x + 20)°, and the measure of inscribed angle ABC is (3x − 11)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "104",
      "256",
      "52",
      "128"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 3x − 11 = ½(4x + 20). Multiplying by 2: 6x − 22 = 4x + 20, so 2x = 42 and x = 21. Then angle ABC = 3(21) − 11 = 52°."
  },
  {
    id: "geo-h91",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = 4x + 18 and y = −3x − 24 intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "21",
      "21/2",
      "126",
      "33/2"
    ],
    answer: 1,
    explanation: "The lines meet where 4x + 18 = −3x − 24, at (−6, −6), so the triangle's height is |−6| = 6. The x-intercepts are x = −9/2 and x = −8, so the base is 7/2. The area is ½(7/2)(6) = 21/2."
  },
  {
    id: "geo-h92",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 4,
    prompt: "In triangle ABC, the measure of angle A is 156°. The bisectors of angles B and C intersect at point P. What is the measure, in degrees, of angle BPC?",
    choices: [
      "168",
      "24",
      "102",
      "12"
    ],
    answer: 0,
    explanation: "Angles B and C together measure 180° − 156° = 24°. Their halves add to 12°. In triangle BPC, angle BPC = 180° − 12° = 168°. (In general, angle BPC = 90° + A/2.)"
  },
  {
    id: "geo-h93",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant IV. An equation of the circle is x² + y² − 18x + 14y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "130",
      "40",
      "−49",
      "49"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (9, −7) and r² = 81 + 49 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |9| = 9. So 81 = 130 − c, giving c = 49. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h94",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 21, and BC = 20. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of CD?",
    choices: [
      "400/29",
      "441/29",
      "420/29",
      "41/2"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(21² + 20²) = 29. The area of the triangle can be computed two ways: ½(20)(21) = ½(29)(CD). So CD = (20)(21)/29 = 420/29."
  },
  {
    id: "geo-h95",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 4,
    prompt: "In the xy-plane, the terminal side of an angle of 17π/6 radians in standard position intersects the unit circle at point P. What is the x-coordinate of P?",
    choices: [
      "√3/2",
      "−√3/2",
      "1/2",
      "−1/2"
    ],
    answer: 1,
    explanation: "17π/6 radians is 510°, which is coterminal with 150°, which lies in quadrant II. Its reference angle is 30°, so |cos| = √3/2. In this quadrant cos is negative, so the value is −√3/2."
  },
  {
    id: "geo-h96",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cylinders have surface areas in the ratio 16 : 36. The volume of the smaller one is 320 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "1080",
      "720",
      "480",
      "1040"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 16 : 36 means k = 6/4. So the larger volume is 320·(6/4)³ = 320·216/64 = 1080."
  },
  {
    id: "geo-h97",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "For a certain regular polygon, the measure of each interior angle is 132° greater than the measure of each exterior angle. How many sides does the polygon have?",
    choices: [
      "3",
      "13",
      "16",
      "15"
    ],
    answer: 3,
    explanation: "Let each exterior angle be e, so each interior angle is 180° − e. Then (180 − e) − e = 132, so e = 24°. Since the exterior angles of any convex polygon add to 360°, n = 360/24 = 15."
  },
  {
    id: "geo-h98",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, angle B measures 45°, angle C measures 30°, and AC = 8. What is the length of AB?",
    choices: [
      "8√2",
      "4√3",
      "4√2",
      "4"
    ],
    answer: 2,
    explanation: "Draw altitude AD to side BC. In 30°-60°-90° triangle ADC, AD is opposite the 30° angle, so AD = ½(AC) = 4. In 45°-45°-90° triangle ABD, the hypotenuse AB = AD·√2 = 4√2."
  },
  {
    id: "geo-h99",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (3, 4) and (11, k) is 17. If k > 4, what is the value of k?",
    choices: [
      "−11",
      "19",
      "21",
      "15"
    ],
    answer: 1,
    explanation: "By the distance formula, (11 − 3)² + (k − 4)² = 17², so 64 + (k − 4)² = 289. Then (k − 4)² = 225, so k − 4 = ±15. Since k > 4, k = 4 + 15 = 19."
  },
  {
    id: "geo-h100",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A taut 20-meter support wire runs from the top of a 12-meter vertical pole to a point on the level ground. Let θ be the angle between the wire and the ground. What is the value of cos(θ) + sin(θ)?",
    choices: [
      "7/5",
      "3/5",
      "4/5",
      "7/4"
    ],
    answer: 0,
    explanation: "The horizontal distance is √(20² − 12²) = 16. With θ at the ground, sin(θ) = opposite/hypotenuse = 12/20 = 3/5 and cos(θ) = adjacent/hypotenuse = 16/20 = 4/5. Their sum is 7/5."
  },
  {
    id: "geo-h101",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² + 14x + y² − 2y + 46 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the area of the circle?",
    choices: [
      "46π",
      "16π",
      "8π",
      "4π"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² + 14x + 49) + (y² − 2y + 1) = −46 + 49 + 1, so (x + 7)² + (y − 1)² = 4. The radius is √4 = 2, so the area is π(4) = 4π."
  },
  {
    id: "geo-h102",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle has a radius of 111 centimeters. A chord of the circle is 36 centimeters from the center of the circle. What is the length, in centimeters, of the chord?",
    choices: [
      "105",
      "75",
      "210",
      "150"
    ],
    answer: 2,
    explanation: "The perpendicular from the center to a chord bisects the chord. This forms a right triangle with hypotenuse 111 (the radius) and one leg 36 (the distance to the chord). The other leg is √(111² − 36²) = √11025 = 105, which is half the chord. The chord has length 2(105) = 210."
  },
  {
    id: "geo-h103",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with center O, central angle AOB has a measure of π/3 radians. The length of arc AB is 4π units. What is the area, in square units, of sector AOB?",
    choices: [
      "48π",
      "24π",
      "144π",
      "12π"
    ],
    answer: 1,
    explanation: "Arc length = rθ, so 4π = r(π/3), giving r = 12. Sector area = ½r²θ = ½(12)²(π/3) = 24π."
  },
  {
    id: "geo-h104",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, segment DE connects point D on AB to point E on AC, and DE is parallel to BC. If AD = 7, DE = 70, and BC = 170, what is the length of DB?",
    choices: [
      "10",
      "17",
      "7",
      "100"
    ],
    answer: 0,
    explanation: "Triangles ADE and ABC are similar, so AD/AB = DE/BC = 70/170. Then AB = 7·170/70 = 17, and DB = AB − AD = 17 − 7 = 10."
  },
  {
    id: "geo-h105",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 12/35. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 2 times the length of the corresponding side of triangle PQR. What is the value of tan(T)?",
    choices: [
      "12/35",
      "35/6",
      "37/12",
      "35/12"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so tan(T) = tan(Q), and the scale factor 2 does not matter. In triangle PQR, tan(P) = 12/35 means the side opposite P is 12k and the side adjacent to P is 35k, with hypotenuse 37k (since 12² + 35² = 37²). Angle Q is the other acute angle, so the side opposite Q is 35k and the side adjacent to Q is 12k. Therefore tan(Q) = 35/12."
  },
  {
    id: "geo-h106",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a sphere is increased by 40%. By what percent does the volume of the sphere increase?",
    choices: [
      "120%",
      "40%",
      "174.4%",
      "96%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 1.4, volume is multiplied by the cube of that factor: 1.4<sup>3</sup> = 2.744. So the new volume is 274.4% of the original, an increase of 174.4%."
  },
  {
    id: "geo-h107",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "A regular hexagon has a perimeter of 24 meters. What is the area, in square meters, of the hexagon?",
    choices: [
      "4√3",
      "24√3",
      "12√3",
      "48√3"
    ],
    answer: 1,
    explanation: "Each side is 24/6 = 4. A regular hexagon is made of 6 equilateral triangles with side 4, each with area (√3/4)(4)² = 4√3. The total area is 6 × 4√3 = 24√3."
  },
  {
    id: "geo-h108",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x − 2)² + (y + 3)² = 3721<br><br>The point (−9, −63) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the slope of line t?",
    choices: [
      "−11/60",
      "60/11",
      "11/60",
      "−60/11"
    ],
    answer: 0,
    explanation: "The center is (2, −3). The radius to (−9, −63) has slope (−63 − (−3))/(−9 − 2) = 60/11. A tangent line is perpendicular to the radius at the point of tangency, so its slope is −11/60."
  },
  {
    id: "geo-h109",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cone and a right circular cylinder have the same base radius and the same height. The volume of the cylinder is 686π cubic inches. What is the volume, in cubic inches, of the space inside the cylinder but outside the cone?",
    choices: [
      "686/3π",
      "686π",
      "343π",
      "1372/3π"
    ],
    answer: 3,
    explanation: "A cone has one-third the volume of a cylinder with the same base and height, so the cone's volume is 686/3π. The remaining space is 686π − 686/3π = 1372/3π cubic inches."
  },
  {
    id: "geo-h110",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (3x + 8)°, and the measure of inscribed angle ABC is (2x − 6)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "68",
      "292",
      "34",
      "146"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 2x − 6 = ½(3x + 8). Multiplying by 2: 4x − 12 = 3x + 8, so x = 20 and x = 20. Then angle ABC = 2(20) − 6 = 34°."
  },
  {
    id: "geo-h111",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = −4x + 10 and y = 3x − 18 intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "21",
      "21/2",
      "56",
      "33/2"
    ],
    answer: 1,
    explanation: "The lines meet where −4x + 10 = 3x − 18, at (4, −6), so the triangle's height is |−6| = 6. The x-intercepts are x = 5/2 and x = 6, so the base is 7/2. The area is ½(7/2)(6) = 21/2."
  },
  {
    id: "geo-h112",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 4,
    prompt: "In triangle ABC, the measure of angle A is 146°. The bisectors of angles B and C intersect at point P. What is the measure, in degrees, of angle BPC?",
    choices: [
      "163",
      "34",
      "107",
      "17"
    ],
    answer: 0,
    explanation: "Angles B and C together measure 180° − 146° = 34°. Their halves add to 17°. In triangle BPC, angle BPC = 180° − 17° = 163°. (In general, angle BPC = 90° + A/2.)"
  },
  {
    id: "geo-h113",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant I. An equation of the circle is x² + y² − 10x − 6y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "34",
      "4",
      "−9",
      "9"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (5, 3) and r² = 25 + 9 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |5| = 5. So 25 = 34 − c, giving c = 9. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h114",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 105, and BC = 36. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of CD?",
    choices: [
      "432/37",
      "3675/37",
      "1260/37",
      "141/2"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(105² + 36²) = 111. The area of the triangle can be computed two ways: ½(36)(105) = ½(111)(CD). So CD = (36)(105)/111 = 1260/37."
  },
  {
    id: "geo-h115",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "What is the value of sin(5π/4)?",
    choices: [
      "√2/2",
      "−√2/2",
      "1/2",
      "√3/2"
    ],
    answer: 1,
    explanation: "5π/4 radians is 225°, which lies in quadrant III. Its reference angle is 45°, so |sin| = √2/2. In this quadrant sin is negative, so the value is −√2/2."
  },
  {
    id: "geo-h116",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cylinders have surface areas in the ratio 16 : 25. The volume of the smaller one is 192 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "375",
      "300",
      "240",
      "492"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 16 : 25 means k = 5/4. So the larger volume is 192·(5/4)³ = 192·125/64 = 375."
  },
  {
    id: "geo-h117",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "For a certain regular polygon, the measure of each interior angle is 120° greater than the measure of each exterior angle. How many sides does the polygon have?",
    choices: [
      "3",
      "10",
      "13",
      "12"
    ],
    answer: 3,
    explanation: "Let each exterior angle be e, so each interior angle is 180° − e. Then (180 − e) − e = 120, so e = 30°. Since the exterior angles of any convex polygon add to 360°, n = 360/30 = 12."
  },
  {
    id: "geo-h118",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, angle B measures 45°, angle C measures 30°, and AC = 4. What is the length of AB?",
    choices: [
      "4√2",
      "2√3",
      "2√2",
      "2"
    ],
    answer: 2,
    explanation: "Draw altitude AD to side BC. In 30°-60°-90° triangle ADC, AD is opposite the 30° angle, so AD = ½(AC) = 2. In 45°-45°-90° triangle ABD, the hypotenuse AB = AD·√2 = 2√2."
  },
  {
    id: "geo-h119",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (2, −2) and (16, k) is 50. If k > −2, what is the value of k?",
    choices: [
      "−50",
      "46",
      "48",
      "60"
    ],
    answer: 1,
    explanation: "By the distance formula, (16 − 2)² + (k − (−2))² = 50², so 196 + (k − (−2))² = 2500. Then (k − (−2))² = 2304, so k − (−2) = ±48. Since k > −2, k = −2 + 48 = 46."
  },
  {
    id: "geo-h120",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A straight ramp 26 meters long rises from level ground to a platform 10 meters high. Let θ be the angle between the ramp and the ground. What is the value of cos(90° − θ)?",
    choices: [
      "5/13",
      "12/13",
      "5/12",
      "13/5"
    ],
    answer: 0,
    explanation: "The horizontal leg is √(26² − 10²) = 24. The angle 90° − θ is the other acute angle of the right triangle, at the top. For that angle, the adjacent side is the vertical leg (10) and the opposite side is the horizontal leg (24). So cos(90° − θ) = 10/26 = 5/13, which equals sin(θ)."
  },
  {
    id: "geo-h121",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² + 10x + y² + 4y + 20 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the length of the diameter of the circle?",
    choices: [
      "4√5",
      "3",
      "18",
      "6"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² + 10x + 25) + (y² + 4y + 4) = −20 + 25 + 4, so (x + 5)² + (y + 2)² = 9. The radius is √9 = 3, so the diameter is 6."
  },
  {
    id: "geo-h122",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 123 inches, a chord has length 240 inches. What is the distance, in inches, from the center of the circle to the chord?",
    choices: [
      "3",
      "121",
      "27",
      "120"
    ],
    answer: 2,
    explanation: "The perpendicular from the center bisects the chord, so it forms a right triangle with hypotenuse 123 and leg 240/2 = 120. The distance is √(123² − 120²) = √729 = 27."
  },
  {
    id: "geo-h123",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with center O, central angle AOB has a measure of 7π/4 radians. The length of arc AB is 42π units. What is the area, in square units, of sector AOB?",
    choices: [
      "1008π",
      "504π",
      "576π",
      "252π"
    ],
    answer: 1,
    explanation: "Arc length = rθ, so 42π = r(7π/4), giving r = 24. Sector area = ½r²θ = ½(24)²(7π/4) = 504π."
  },
  {
    id: "geo-h124",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC such that segment DE is parallel to side BC. If AD = 11, DB = 3, and DE = 77, what is the length of BC?",
    choices: [
      "98",
      "21",
      "847/3",
      "80"
    ],
    answer: 0,
    explanation: "Since DE ∥ BC, triangle ADE is similar to triangle ABC with ratio AD/AB = 11/14. So DE/BC = 11/14, and BC = 77·14/11 = 98. A common error is to use AD/DB instead of AD/AB."
  },
  {
    id: "geo-h125",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 5/12. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 2 times the length of the corresponding side of triangle PQR. What is the value of tan(T)?",
    choices: [
      "5/12",
      "24/5",
      "13/5",
      "12/5"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so tan(T) = tan(Q), and the scale factor 2 does not matter. In triangle PQR, tan(P) = 5/12 means the side opposite P is 5k and the side adjacent to P is 12k, with hypotenuse 13k (since 5² + 12² = 13²). Angle Q is the other acute angle, so the side opposite Q is 12k and the side adjacent to Q is 5k. Therefore tan(Q) = 12/5."
  },
  {
    id: "geo-h126",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a rectangular prism is decreased by 50%. By what percent does the volume of the rectangular prism decrease?",
    choices: [
      "150%",
      "50%",
      "87.5%",
      "75%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 0.5, volume is multiplied by the cube of that factor: 0.5<sup>3</sup> = 0.125. So the new volume is 12.5% of the original, a decrease of 87.5%."
  },
  {
    id: "geo-h127",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "A regular hexagon has a perimeter of 66 meters. What is the area, in square meters, of the hexagon?",
    choices: [
      "30.25√3",
      "181.5√3",
      "90.75√3",
      "363√3"
    ],
    answer: 1,
    explanation: "Each side is 66/6 = 11. A regular hexagon is made of 6 equilateral triangles with side 11, each with area (√3/4)(11)² = 30.25√3. The total area is 6 × 30.25√3 = 181.5√3."
  },
  {
    id: "geo-h128",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 4,
    prompt: "(x + 2)² + (y + 3)² = 169<br><br>The point (3, 9) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the y-coordinate of the y-intercept of line t?",
    choices: [
      "41/4",
      "9/5",
      "31/4",
      "−23/6"
    ],
    answer: 0,
    explanation: "The center is (−2, −3). The radius to (3, 9) has slope (9 − (−3))/(3 − (−2)) = 12/5. A tangent line is perpendicular to the radius at the point of tangency, so its slope is −5/12. Using y − 9 = −5/12(x − 3) and setting x = 0 gives y = 41/4."
  },
  {
    id: "geo-h129",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A container shaped like a right circular cone is held with its vertex pointing down. It is filled with water to 3/4 of its height, measured from the vertex. The water's surface is a circle parallel to the cone's base. What fraction of the cone's volume is filled with water?",
    choices: [
      "3/4",
      "9/16",
      "9/8",
      "27/64"
    ],
    answer: 3,
    explanation: "The water forms a smaller cone similar to the whole cone, with scale factor 3/4 (the ratio of heights). Volumes of similar solids scale by the cube of the scale factor, so the water fills (3/4)³ = 27/64 of the cone."
  },
  {
    id: "geo-h130",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (5x − 12)°, and the measure of inscribed angle ABC is (2x − 1)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "38",
      "322",
      "19",
      "161"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 2x − 1 = ½(5x − 12). Multiplying by 2: 4x − 2 = 5x − 12, so -x = −10 and x = 10. Then angle ABC = 2(10) − 1 = 19°."
  },
  {
    id: "geo-h131",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = −2x − 10 and y = −x − 4 intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "2",
      "1",
      "18",
      "3"
    ],
    answer: 1,
    explanation: "The lines meet where −2x − 10 = −x − 4, at (−6, 2), so the triangle's height is |2| = 2. The x-intercepts are x = −5 and x = −4, so the base is 1. The area is ½(1)(2) = 1."
  },
  {
    id: "geo-h132",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 4,
    prompt: "In triangle ABC, the measure of angle A is 104°. The bisectors of angles B and C intersect at point P. What is the measure, in degrees, of angle BPC?",
    choices: [
      "142",
      "76",
      "128",
      "38"
    ],
    answer: 0,
    explanation: "Angles B and C together measure 180° − 104° = 76°. Their halves add to 38°. In triangle BPC, angle BPC = 180° − 38° = 142°. (In general, angle BPC = 90° + A/2.)"
  },
  {
    id: "geo-h133",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant II. An equation of the circle is x² + y² + 6x − 16y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "73",
      "61",
      "−64",
      "64"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (−3, 8) and r² = 9 + 64 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |−3| = 3. So 9 = 73 − c, giving c = 64. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h134",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 12, and BC = 5. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of BD?",
    choices: [
      "144/13",
      "60/13",
      "25/13",
      "5/2"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(12² + 5²) = 13. Triangle CBD is similar to triangle ABC (they share angle B), so BD/BC = BC/AB, giving BD = 5²/13 = 25/13."
  },
  {
    id: "geo-h135",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "What is the value of sin(7π/6)?",
    choices: [
      "1/2",
      "−1/2",
      "−√3/2",
      "√3/2"
    ],
    answer: 1,
    explanation: "7π/6 radians is 210°, which lies in quadrant III. Its reference angle is 30°, so |sin| = 1/2. In this quadrant sin is negative, so the value is −1/2."
  },
  {
    id: "geo-h136",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cylinders have surface areas in the ratio 1 : 9. The volume of the smaller one is 4 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "108",
      "36",
      "12",
      "40"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 1 : 9 means k = 3/1. So the larger volume is 4·(3/1)³ = 4·27/1 = 108."
  },
  {
    id: "geo-h137",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "For a certain regular polygon, the measure of each interior angle is 90° greater than the measure of each exterior angle. How many sides does the polygon have?",
    choices: [
      "4",
      "6",
      "9",
      "8"
    ],
    answer: 3,
    explanation: "Let each exterior angle be e, so each interior angle is 180° − e. Then (180 − e) − e = 90, so e = 45°. Since the exterior angles of any convex polygon add to 360°, n = 360/45 = 8."
  },
  {
    id: "geo-h138",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, angle B measures 45°, angle C measures 30°, and AC = 10. What is the length of AB?",
    choices: [
      "10√2",
      "5√3",
      "5√2",
      "5"
    ],
    answer: 2,
    explanation: "Draw altitude AD to side BC. In 30°-60°-90° triangle ADC, AD is opposite the 30° angle, so AD = ½(AC) = 5. In 45°-45°-90° triangle ABD, the hypotenuse AB = AD·√2 = 5√2."
  },
  {
    id: "geo-h139",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (−8, 2) and (2, k) is 26. If k > 2, what is the value of k?",
    choices: [
      "−22",
      "26",
      "28",
      "24"
    ],
    answer: 1,
    explanation: "By the distance formula, (2 − (−8))² + (k − 2)² = 26², so 100 + (k − 2)² = 676. Then (k − 2)² = 576, so k − 2 = ±24. Since k > 2, k = 2 + 24 = 26."
  },
  {
    id: "geo-h140",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A 17-foot ladder leans against a vertical wall. The top of the ladder touches the wall 8 feet above the level ground. Let θ be the angle between the ladder and the ground. What is the value of tan(90° − θ)?",
    choices: [
      "15/8",
      "8/15",
      "8/17",
      "15/17"
    ],
    answer: 0,
    explanation: "The horizontal leg is √(17² − 8²) = 15. The angle 90° − θ is the other acute angle of the right triangle, at the top. For that angle, the adjacent side is the vertical leg (8) and the opposite side is the horizontal leg (15). So tan(90° − θ) = 15/8 = 15/8, which equals 1/tan(θ)."
  },
  {
    id: "geo-h141",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² − 6x + y² + 16y + 57 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the length of the radius of the circle?",
    choices: [
      "√57",
      "16",
      "√73",
      "4"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² − 6x + 9) + (y² + 16y + 64) = −57 + 9 + 64, so (x − 3)² + (y + 8)² = 16. The radius is √16 = 4."
  },
  {
    id: "geo-h142",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle has a radius of 15 centimeters. A chord of the circle is 9 centimeters from the center of the circle. What is the length, in centimeters, of the chord?",
    choices: [
      "12",
      "6",
      "24",
      "25"
    ],
    answer: 2,
    explanation: "The perpendicular from the center to a chord bisects the chord. This forms a right triangle with hypotenuse 15 (the radius) and one leg 9 (the distance to the chord). The other leg is √(15² − 9²) = √144 = 12, which is half the chord. The chord has length 2(12) = 24."
  },
  {
    id: "geo-h143",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A sector of a circle has a central angle of 4π/5 radians and an area of 90π square units. What is the radius of the circle?",
    choices: [
      "225",
      "15",
      "8",
      "30"
    ],
    answer: 1,
    explanation: "Sector area = ½r²θ, so 90π = ½r²(4π/5). Then r² = 2(90π)/(4π/5) = 225, so r = 15."
  },
  {
    id: "geo-h144",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC such that segment DE is parallel to side BC. If AD = 10, DB = 6, and DE = 40, what is the length of BC?",
    choices: [
      "64",
      "24",
      "200/3",
      "46"
    ],
    answer: 0,
    explanation: "Since DE ∥ BC, triangle ADE is similar to triangle ABC with ratio AD/AB = 10/16. So DE/BC = 10/16, and BC = 40·16/10 = 64. A common error is to use AD/DB instead of AD/AB."
  },
  {
    id: "geo-h145",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 8/15. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 5 times the length of the corresponding side of triangle PQR. What is the value of sin(T)?",
    choices: [
      "8/17",
      "75/17",
      "17/15",
      "15/17"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so sin(T) = sin(Q), and the scale factor 5 does not matter. In triangle PQR, tan(P) = 8/15 means the side opposite P is 8k and the side adjacent to P is 15k, with hypotenuse 17k (since 8² + 15² = 17²). Angle Q is the other acute angle, so the side opposite Q is 15k and the side adjacent to Q is 8k. Therefore sin(Q) = 15/17."
  },
  {
    id: "geo-h146",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a right circular cone (including the radius and the height) is decreased by 20%. By what percent does the volume of the right circular cone decrease?",
    choices: [
      "60%",
      "20%",
      "48.8%",
      "36%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 0.8, volume is multiplied by the cube of that factor: 0.8<sup>3</sup> = 0.512. So the new volume is 51.2% of the original, a decrease of 48.8%."
  },
  {
    id: "geo-h147",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "An equilateral triangle has a height of 7√3 centimeters. What is the area, in square centimeters, of the triangle?",
    choices: [
      "98√3",
      "49√3",
      "49",
      "147"
    ],
    answer: 1,
    explanation: "The height of an equilateral triangle with side s is (s√3)/2. So (s√3)/2 = 7√3, giving s = 14. The area is ½·base·height = ½(14)(7√3) = 49√3."
  },
  {
    id: "geo-h148",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 4,
    prompt: "(x + 2)² + (y − 2)² = 1369<br><br>The point (−14, 37) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the y-coordinate of the y-intercept of line t?",
    choices: [
      "209/5",
      "−23/6",
      "161/5",
      "94/35"
    ],
    answer: 0,
    explanation: "The center is (−2, 2). The radius to (−14, 37) has slope (37 − 2)/(−14 − (−2)) = −35/12. A tangent line is perpendicular to the radius at the point of tangency, so its slope is 12/35. Using y − 37 = 12/35(x − (−14)) and setting x = 0 gives y = 209/5."
  },
  {
    id: "geo-h149",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cone and a right circular cylinder have the same base radius and the same height. The volume of the cylinder is 72π cubic inches. What is the volume, in cubic inches, of the space inside the cylinder but outside the cone?",
    choices: [
      "24π",
      "72π",
      "36π",
      "48π"
    ],
    answer: 3,
    explanation: "A cone has one-third the volume of a cylinder with the same base and height, so the cone's volume is 24π. The remaining space is 72π − 24π = 48π cubic inches."
  },
  {
    id: "geo-h150",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (4x − 8)°, and the measure of inscribed angle ABC is (3x − 14)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "32",
      "328",
      "16",
      "164"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 3x − 14 = ½(4x − 8). Multiplying by 2: 6x − 28 = 4x − 8, so 2x = 20 and x = 10. Then angle ABC = 3(10) − 14 = 16°."
  },
  {
    id: "geo-h151",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = −4x + 18 and y = 3x − 24 intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "21",
      "21/2",
      "126",
      "33/2"
    ],
    answer: 1,
    explanation: "The lines meet where −4x + 18 = 3x − 24, at (6, −6), so the triangle's height is |−6| = 6. The x-intercepts are x = 9/2 and x = 8, so the base is 7/2. The area is ½(7/2)(6) = 21/2."
  },
  {
    id: "geo-h152",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 4,
    prompt: "In triangle ABC, the bisectors of angles B and C intersect at point P inside the triangle. If the measure of angle BPC is 137°, what is the measure, in degrees, of angle A?",
    choices: [
      "94",
      "43",
      "86",
      "47"
    ],
    answer: 0,
    explanation: "Let angle B = 2b and angle C = 2c. In triangle BPC, angle BPC = 180° − b − c. Since 2b + 2c = 180° − A, b + c = 90° − A/2, so angle BPC = 90° + A/2. Then 137 = 90 + A/2 gives A = 94°."
  },
  {
    id: "geo-h153",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant III. An equation of the circle is x² + y² + 18x + 14y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "130",
      "40",
      "−49",
      "49"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (−9, −7) and r² = 81 + 49 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |−9| = 9. So 81 = 130 − c, giving c = 49. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h154",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 12, and BC = 5. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of CD?",
    choices: [
      "25/13",
      "144/13",
      "60/13",
      "17/2"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(12² + 5²) = 13. The area of the triangle can be computed two ways: ½(5)(12) = ½(13)(CD). So CD = (5)(12)/13 = 60/13."
  },
  {
    id: "geo-h155",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "What is the value of sin(4π/3)?",
    choices: [
      "√3/2",
      "−√3/2",
      "−1/2",
      "1/2"
    ],
    answer: 1,
    explanation: "4π/3 radians is 240°, which lies in quadrant III. Its reference angle is 60°, so |sin| = √3/2. In this quadrant sin is negative, so the value is −√3/2."
  },
  {
    id: "geo-h156",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar rectangular prisms have surface areas in the ratio 1 : 36. The volume of the smaller one is 6 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "1296",
      "216",
      "36",
      "222"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 1 : 36 means k = 6/1. So the larger volume is 6·(6/1)³ = 6·216/1 = 1296."
  },
  {
    id: "geo-h157",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Each interior angle of a regular polygon has a measure that is 17 times the measure of each of its exterior angles. How many sides does the polygon have?",
    choices: [
      "18",
      "38",
      "72",
      "36"
    ],
    answer: 3,
    explanation: "For a regular n-gon, each exterior angle is 360°/n and each interior angle is 180° − 360°/n. Setting 180 − 360/n = 17(360/n) gives 180 = 18(360/n), so n = 18(360)/180 = 36."
  },
  {
    id: "geo-h158",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, the measure of angle B is 45° and the measure of angle C is 30°. The altitude from A to side BC has length 2. What is the length of side BC?",
    choices: [
      "4√3",
      "2 + 2√2",
      "2 + 2√3",
      "4 + 2√3"
    ],
    answer: 2,
    explanation: "Let D be the foot of the altitude. Triangle ABD is a 45°-45°-90° triangle, so BD = AD = 2. Triangle ADC is a 30°-60°-90° triangle with the side opposite 30° equal to AD = 2, so DC = 2√3. Therefore BC = BD + DC = 2 + 2√3."
  },
  {
    id: "geo-h159",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (−5, −6) and (−12, k) is 25. If k > −6, what is the value of k?",
    choices: [
      "−30",
      "18",
      "19",
      "24"
    ],
    answer: 1,
    explanation: "By the distance formula, (−12 − (−5))² + (k − (−6))² = 25², so 49 + (k − (−6))² = 625. Then (k − (−6))² = 576, so k − (−6) = ±24. Since k > −6, k = −6 + 24 = 18."
  },
  {
    id: "geo-h160",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A 29-foot ladder leans against a vertical wall. The top of the ladder touches the wall 20 feet above the level ground. Let θ be the angle between the ladder and the ground. What is the value of tan(90° − θ)?",
    choices: [
      "21/20",
      "20/21",
      "20/29",
      "21/29"
    ],
    answer: 0,
    explanation: "The horizontal leg is √(29² − 20²) = 21. The angle 90° − θ is the other acute angle of the right triangle, at the top. For that angle, the adjacent side is the vertical leg (20) and the opposite side is the horizontal leg (21). So tan(90° − θ) = 21/20 = 21/20, which equals 1/tan(θ)."
  },
  {
    id: "geo-h161",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² − 4x + y² − 16y + 41 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the area of the circle?",
    choices: [
      "41π",
      "729π",
      "54π",
      "27π"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² − 4x + 4) + (y² − 16y + 64) = −41 + 4 + 64, so (x − 2)² + (y − 8)² = 27. The radius is √27 = 3√3, so the area is π(27) = 27π."
  },
  {
    id: "geo-h162",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 50 inches, a chord has length 28 inches. What is the distance, in inches, from the center of the circle to the chord?",
    choices: [
      "36",
      "41",
      "48",
      "14"
    ],
    answer: 2,
    explanation: "The perpendicular from the center bisects the chord, so it forms a right triangle with hypotenuse 50 and leg 28/2 = 14. The distance is √(50² − 14²) = √2304 = 48."
  },
  {
    id: "geo-h163",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with center O, central angle AOB has a measure of 3π/2 radians. The length of arc AB is 6π units. What is the area, in square units, of sector AOB?",
    choices: [
      "24π",
      "12π",
      "16π",
      "6π"
    ],
    answer: 1,
    explanation: "Arc length = rθ, so 6π = r(3π/2), giving r = 4. Sector area = ½r²θ = ½(4)²(3π/2) = 12π."
  },
  {
    id: "geo-h164",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, segment DE connects point D on AB to point E on AC, and DE is parallel to BC. If AD = 2, DE = 20, and BC = 140, what is the length of DB?",
    choices: [
      "12",
      "14",
      "2",
      "120"
    ],
    answer: 0,
    explanation: "Triangles ADE and ABC are similar, so AD/AB = DE/BC = 20/140. Then AB = 2·140/20 = 14, and DB = AB − AD = 14 − 2 = 12."
  },
  {
    id: "geo-h165",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 3/4. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 5 times the length of the corresponding side of triangle PQR. What is the value of cos(T)?",
    choices: [
      "4/5",
      "3",
      "5/3",
      "3/5"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so cos(T) = cos(Q), and the scale factor 5 does not matter. In triangle PQR, tan(P) = 3/4 means the side opposite P is 3k and the side adjacent to P is 4k, with hypotenuse 5k (since 3² + 4² = 5²). Angle Q is the other acute angle, so the side opposite Q is 4k and the side adjacent to Q is 3k. Therefore cos(Q) = 3/5."
  },
  {
    id: "geo-h166",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a rectangular prism is decreased by 30%. By what percent does the surface area of the rectangular prism decrease?",
    choices: [
      "60%",
      "30%",
      "51%",
      "65.7%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 0.7, area is multiplied by the square of that factor: 0.7<sup>2</sup> = 0.49. So the new surface area is 49% of the original, a decrease of 51%."
  },
  {
    id: "geo-h167",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "A regular hexagon has a perimeter of 42 meters. What is the area, in square meters, of the hexagon?",
    choices: [
      "12.25√3",
      "73.5√3",
      "36.75√3",
      "147√3"
    ],
    answer: 1,
    explanation: "Each side is 42/6 = 7. A regular hexagon is made of 6 equilateral triangles with side 7, each with area (√3/4)(7)² = 12.25√3. The total area is 6 × 12.25√3 = 73.5√3."
  },
  {
    id: "geo-h168",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x − 4)² + (y − 2)² = 1681<br><br>The point (13, 42) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the slope of line t?",
    choices: [
      "−9/40",
      "40/9",
      "9/40",
      "−40/9"
    ],
    answer: 0,
    explanation: "The center is (4, 2). The radius to (13, 42) has slope (42 − 2)/(13 − 4) = 40/9. A tangent line is perpendicular to the radius at the point of tangency, so its slope is −9/40."
  },
  {
    id: "geo-h169",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cone and a right circular cylinder have the same base radius and the same height. The volume of the cylinder is 567π cubic inches. What is the volume, in cubic inches, of the space inside the cylinder but outside the cone?",
    choices: [
      "189π",
      "567π",
      "567/2π",
      "378π"
    ],
    answer: 3,
    explanation: "A cone has one-third the volume of a cylinder with the same base and height, so the cone's volume is 189π. The remaining space is 567π − 189π = 378π cubic inches."
  },
  {
    id: "geo-h170",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (2x + 20)°, and the measure of inscribed angle ABC is (4x − 44)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "56",
      "304",
      "28",
      "152"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 4x − 44 = ½(2x + 20). Multiplying by 2: 8x − 88 = 2x + 20, so 6x = 108 and x = 18. Then angle ABC = 4(18) − 44 = 28°."
  },
  {
    id: "geo-h171",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = −4x + 4 and y = −x − 5 intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "48",
      "24",
      "27/2",
      "32"
    ],
    answer: 1,
    explanation: "The lines meet where −4x + 4 = −x − 5, at (3, −8), so the triangle's height is |−8| = 8. The x-intercepts are x = 1 and x = −5, so the base is 6. The area is ½(6)(8) = 24."
  },
  {
    id: "geo-h172",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 4,
    prompt: "In triangle ABC, the bisectors of angles B and C intersect at point P inside the triangle. If the measure of angle BPC is 131°, what is the measure, in degrees, of angle A?",
    choices: [
      "82",
      "49",
      "98",
      "41"
    ],
    answer: 0,
    explanation: "Let angle B = 2b and angle C = 2c. In triangle BPC, angle BPC = 180° − b − c. Since 2b + 2c = 180° − A, b + c = 90° − A/2, so angle BPC = 90° + A/2. Then 131 = 90 + A/2 gives A = 82°."
  },
  {
    id: "geo-h173",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant IV. An equation of the circle is x² + y² − 14x + 14y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "98",
      "42",
      "−49",
      "49"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (7, −7) and r² = 49 + 49 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |7| = 7. So 49 = 98 − c, giving c = 49. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h174",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 70, and BC = 24. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of CD?",
    choices: [
      "288/37",
      "2450/37",
      "840/37",
      "47"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(70² + 24²) = 74. The area of the triangle can be computed two ways: ½(24)(70) = ½(74)(CD). So CD = (24)(70)/74 = 840/37."
  },
  {
    id: "geo-h175",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "What is the value of cos(5π/3)?",
    choices: [
      "−1/2",
      "1/2",
      "−√3/2",
      "√3/2"
    ],
    answer: 1,
    explanation: "5π/3 radians is 300°, which lies in quadrant IV. Its reference angle is 60°, so |cos| = 1/2. In this quadrant cos is positive, so the value is 1/2."
  },
  {
    id: "geo-h176",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar rectangular prisms have surface areas in the ratio 16 : 36. The volume of the smaller one is 256 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "864",
      "576",
      "384",
      "832"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 16 : 36 means k = 6/4. So the larger volume is 256·(6/4)³ = 256·216/64 = 864."
  },
  {
    id: "geo-h177",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Each interior angle of a regular polygon has a measure that is 3 times the measure of each of its exterior angles. How many sides does the polygon have?",
    choices: [
      "4",
      "10",
      "16",
      "8"
    ],
    answer: 3,
    explanation: "For a regular n-gon, each exterior angle is 360°/n and each interior angle is 180° − 360°/n. Setting 180 − 360/n = 3(360/n) gives 180 = 4(360/n), so n = 4(360)/180 = 8."
  },
  {
    id: "geo-h178",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, the measure of angle B is 45° and the measure of angle C is 30°. The altitude from A to side BC has length 7. What is the length of side BC?",
    choices: [
      "14√3",
      "7 + 7√2",
      "7 + 7√3",
      "14 + 7√3"
    ],
    answer: 2,
    explanation: "Let D be the foot of the altitude. Triangle ABD is a 45°-45°-90° triangle, so BD = AD = 7. Triangle ADC is a 30°-60°-90° triangle with the side opposite 30° equal to AD = 7, so DC = 7√3. Therefore BC = BD + DC = 7 + 7√3."
  },
  {
    id: "geo-h179",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (1, −3) and (41, k) is 58. If k > −3, what is the value of k?",
    choices: [
      "−45",
      "39",
      "55",
      "42"
    ],
    answer: 1,
    explanation: "By the distance formula, (41 − 1)² + (k − (−3))² = 58², so 1600 + (k − (−3))² = 3364. Then (k − (−3))² = 1764, so k − (−3) = ±42. Since k > −3, k = −3 + 42 = 39."
  },
  {
    id: "geo-h180",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A 39-foot ladder leans against a vertical wall. The top of the ladder touches the wall 15 feet above the level ground. Let θ be the angle between the ladder and the ground. What is the value of cos(90° − θ)?",
    choices: [
      "5/13",
      "12/13",
      "5/12",
      "13/5"
    ],
    answer: 0,
    explanation: "The horizontal leg is √(39² − 15²) = 36. The angle 90° − θ is the other acute angle of the right triangle, at the top. For that angle, the adjacent side is the vertical leg (15) and the opposite side is the horizontal leg (36). So cos(90° − θ) = 15/39 = 5/13, which equals sin(θ)."
  },
  {
    id: "geo-h181",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² + 16x + y² + 14y + 32 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the length of the radius of the circle?",
    choices: [
      "4√2",
      "81",
      "√113",
      "9"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² + 16x + 64) + (y² + 14y + 49) = −32 + 64 + 49, so (x + 8)² + (y + 7)² = 81. The radius is √81 = 9."
  },
  {
    id: "geo-h182",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 15 inches, a chord has length 24 inches. What is the distance, in inches, from the center of the circle to the chord?",
    choices: [
      "3",
      "13",
      "9",
      "12"
    ],
    answer: 2,
    explanation: "The perpendicular from the center bisects the chord, so it forms a right triangle with hypotenuse 15 and leg 24/2 = 12. The distance is √(15² − 12²) = √81 = 9."
  },
  {
    id: "geo-h183",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with center O, central angle AOB has a measure of 3π/5 radians. The length of arc AB is 21π units. What is the area, in square units, of sector AOB?",
    choices: [
      "735π",
      "735π/2",
      "1225π",
      "735π/4"
    ],
    answer: 1,
    explanation: "Arc length = rθ, so 21π = r(3π/5), giving r = 35. Sector area = ½r²θ = ½(35)²(3π/5) = 735π/2."
  },
  {
    id: "geo-h184",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC such that segment DE is parallel to side BC. If AD = 4, DB = 6, and DE = 40, what is the length of BC?",
    choices: [
      "100",
      "60",
      "80/3",
      "46"
    ],
    answer: 0,
    explanation: "Since DE ∥ BC, triangle ADE is similar to triangle ABC with ratio AD/AB = 4/10. So DE/BC = 4/10, and BC = 40·10/4 = 100. A common error is to use AD/DB instead of AD/AB."
  },
  {
    id: "geo-h185",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 24/7. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 2 times the length of the corresponding side of triangle PQR. What is the value of sin(T)?",
    choices: [
      "24/25",
      "14/25",
      "25/7",
      "7/25"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so sin(T) = sin(Q), and the scale factor 2 does not matter. In triangle PQR, tan(P) = 24/7 means the side opposite P is 24k and the side adjacent to P is 7k, with hypotenuse 25k (since 24² + 7² = 25²). Angle Q is the other acute angle, so the side opposite Q is 7k and the side adjacent to Q is 24k. Therefore sin(Q) = 7/25."
  },
  {
    id: "geo-h186",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a right circular cylinder (including the radius and the height) is increased by 20%. By what percent does the surface area of the right circular cylinder increase?",
    choices: [
      "40%",
      "20%",
      "44%",
      "72.8%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 1.2, area is multiplied by the square of that factor: 1.2<sup>2</sup> = 1.44. So the new surface area is 144% of the original, an increase of 44%."
  },
  {
    id: "geo-h187",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "An equilateral triangle has a height of 5√3 centimeters. What is the area, in square centimeters, of the triangle?",
    choices: [
      "50√3",
      "25√3",
      "25",
      "75"
    ],
    answer: 1,
    explanation: "The height of an equilateral triangle with side s is (s√3)/2. So (s√3)/2 = 5√3, giving s = 10. The area is ½·base·height = ½(10)(5√3) = 25√3."
  },
  {
    id: "geo-h188",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x − 4)² + (y − 3)² = 1369<br><br>The point (16, 38) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the slope of line t?",
    choices: [
      "−12/35",
      "35/12",
      "12/35",
      "−35/12"
    ],
    answer: 0,
    explanation: "The center is (4, 3). The radius to (16, 38) has slope (38 − 3)/(16 − 4) = 35/12. A tangent line is perpendicular to the radius at the point of tangency, so its slope is −12/35."
  },
  {
    id: "geo-h189",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A sphere is placed inside a right circular cylinder so that the sphere touches the top, the bottom, and the curved side of the cylinder. The cylinder has a volume of 686π cubic centimeters. What is the volume, in cubic centimeters, of the sphere?",
    choices: [
      "686/3π",
      "2744/3π",
      "343π",
      "1372/3π"
    ],
    answer: 3,
    explanation: "If the sphere has radius R, the cylinder has radius R and height 2R, so its volume is πR²(2R) = 2πR³ = 686π. Then R³ = 343 and R = 7. The sphere's volume is (4/3)πR³ = (4/3)π(343) = 1372/3π. (In general, the sphere fills 2/3 of the cylinder.)"
  },
  {
    id: "geo-h190",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (3x − 19)°, and the measure of inscribed angle ABC is (4x − 67)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "50",
      "310",
      "25",
      "155"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 4x − 67 = ½(3x − 19). Multiplying by 2: 8x − 134 = 3x − 19, so 5x = 115 and x = 23. Then angle ABC = 4(23) − 67 = 25°."
  },
  {
    id: "geo-h191",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = −2x − 2 and y = −4x intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "4",
      "2",
      "1",
      "6"
    ],
    answer: 1,
    explanation: "The lines meet where −2x − 2 = −4x, at (1, −4), so the triangle's height is |−4| = 4. The x-intercepts are x = −1 and x = 0, so the base is 1. The area is ½(1)(4) = 2."
  },
  {
    id: "geo-h192",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 4,
    prompt: "In triangle ABC, the measure of angle A is 98°. The bisectors of angles B and C intersect at point P. What is the measure, in degrees, of angle BPC?",
    choices: [
      "139",
      "82",
      "131",
      "41"
    ],
    answer: 0,
    explanation: "Angles B and C together measure 180° − 98° = 82°. Their halves add to 41°. In triangle BPC, angle BPC = 180° − 41° = 139°. (In general, angle BPC = 90° + A/2.)"
  },
  {
    id: "geo-h193",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant III. An equation of the circle is x² + y² + 14x + 18y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "130",
      "74",
      "−81",
      "81"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (−7, −9) and r² = 49 + 81 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |−7| = 7. So 49 = 130 − c, giving c = 81. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h194",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 36, and BC = 15. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of CD?",
    choices: [
      "75/13",
      "432/13",
      "180/13",
      "51/2"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(36² + 15²) = 39. The area of the triangle can be computed two ways: ½(15)(36) = ½(39)(CD). So CD = (15)(36)/39 = 180/13."
  },
  {
    id: "geo-h195",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In the xy-plane, the terminal side of an angle of 5π/4 radians in standard position intersects the unit circle at point P. What is the x-coordinate of P?",
    choices: [
      "√2/2",
      "−√2/2",
      "1/2",
      "√3/2"
    ],
    answer: 1,
    explanation: "5π/4 radians is 225°, which lies in quadrant III. Its reference angle is 45°, so |cos| = √2/2. In this quadrant cos is negative, so the value is −√2/2."
  },
  {
    id: "geo-h196",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar pyramids have surface areas in the ratio 1 : 25. The volume of the smaller one is 5 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "625",
      "125",
      "25",
      "130"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 1 : 25 means k = 5/1. So the larger volume is 5·(5/1)³ = 5·125/1 = 625."
  },
  {
    id: "geo-h197",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Each interior angle of a regular polygon has a measure that is 3/2 times the measure of each of its exterior angles. How many sides does the polygon have?",
    choices: [
      "5/2",
      "7",
      "4",
      "5"
    ],
    answer: 3,
    explanation: "For a regular n-gon, each exterior angle is 360°/n and each interior angle is 180° − 360°/n. Setting 180 − 360/n = 3/2(360/n) gives 180 = 5/2(360/n), so n = 5/2(360)/180 = 5."
  },
  {
    id: "geo-h198",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, the measure of angle B is 45° and the measure of angle C is 30°. The altitude from A to side BC has length 8. What is the length of side BC?",
    choices: [
      "16√3",
      "8 + 8√2",
      "8 + 8√3",
      "16 + 8√3"
    ],
    answer: 2,
    explanation: "Let D be the foot of the altitude. Triangle ABD is a 45°-45°-90° triangle, so BD = AD = 8. Triangle ADC is a 30°-60°-90° triangle with the side opposite 30° equal to AD = 8, so DC = 8√3. Therefore BC = BD + DC = 8 + 8√3."
  },
  {
    id: "geo-h199",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (−8, 4) and (−16, k) is 17. If k > 4, what is the value of k?",
    choices: [
      "−11",
      "19",
      "21",
      "15"
    ],
    answer: 1,
    explanation: "By the distance formula, (−16 − (−8))² + (k − 4)² = 17², so 64 + (k − 4)² = 289. Then (k − 4)² = 225, so k − 4 = ±15. Since k > 4, k = 4 + 15 = 19."
  },
  {
    id: "geo-h200",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A taut 20-meter support wire runs from the top of a 12-meter vertical pole to a point on the level ground. Let θ be the angle between the wire and the ground. What is the value of cos(90° − θ)?",
    choices: [
      "3/5",
      "4/5",
      "3/4",
      "5/3"
    ],
    answer: 0,
    explanation: "The horizontal leg is √(20² − 12²) = 16. The angle 90° − θ is the other acute angle of the right triangle, at the top. For that angle, the adjacent side is the vertical leg (12) and the opposite side is the horizontal leg (16). So cos(90° − θ) = 12/20 = 3/5, which equals sin(θ)."
  },
  {
    id: "geo-h201",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² + 12x + y² + 2y + 32 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the length of the radius of the circle?",
    choices: [
      "4√2",
      "5",
      "√37",
      "√5"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² + 12x + 36) + (y² + 2y + 1) = −32 + 36 + 1, so (x + 6)² + (y + 1)² = 5. The radius is √5 = √5."
  },
  {
    id: "geo-h202",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle has a radius of 75 centimeters. A chord of the circle is 21 centimeters from the center of the circle. What is the length, in centimeters, of the chord?",
    choices: [
      "72",
      "54",
      "144",
      "108"
    ],
    answer: 2,
    explanation: "The perpendicular from the center to a chord bisects the chord. This forms a right triangle with hypotenuse 75 (the radius) and one leg 21 (the distance to the chord). The other leg is √(75² − 21²) = √5184 = 72, which is half the chord. The chord has length 2(72) = 144."
  },
  {
    id: "geo-h203",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A sector of a circle has a central angle of π/2 radians and an area of 4π square units. What is the radius of the circle?",
    choices: [
      "16",
      "4",
      "2",
      "8"
    ],
    answer: 1,
    explanation: "Sector area = ½r²θ, so 4π = ½r²(π/2). Then r² = 2(4π)/(π/2) = 16, so r = 4."
  },
  {
    id: "geo-h204",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC such that segment DE is parallel to side BC. If AD = 12, DB = 11, and DE = 108, what is the length of BC?",
    choices: [
      "207",
      "99",
      "1296/11",
      "119"
    ],
    answer: 0,
    explanation: "Since DE ∥ BC, triangle ADE is similar to triangle ABC with ratio AD/AB = 12/23. So DE/BC = 12/23, and BC = 108·23/12 = 207. A common error is to use AD/DB instead of AD/AB."
  },
  {
    id: "geo-h205",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 21/20. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 3 times the length of the corresponding side of triangle PQR. What is the value of cos(T)?",
    choices: [
      "20/29",
      "63/29",
      "29/21",
      "21/29"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so cos(T) = cos(Q), and the scale factor 3 does not matter. In triangle PQR, tan(P) = 21/20 means the side opposite P is 21k and the side adjacent to P is 20k, with hypotenuse 29k (since 21² + 20² = 29²). Angle Q is the other acute angle, so the side opposite Q is 20k and the side adjacent to Q is 21k. Therefore cos(Q) = 21/29."
  },
  {
    id: "geo-h206",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a sphere is increased by 10%. By what percent does the volume of the sphere increase?",
    choices: [
      "30%",
      "10%",
      "33.1%",
      "21%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 1.1, volume is multiplied by the cube of that factor: 1.1<sup>3</sup> = 1.331. So the new volume is 133.1% of the original, an increase of 33.1%."
  },
  {
    id: "geo-h207",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "A regular hexagon has a perimeter of 36 meters. What is the area, in square meters, of the hexagon?",
    choices: [
      "9√3",
      "54√3",
      "27√3",
      "108√3"
    ],
    answer: 1,
    explanation: "Each side is 36/6 = 6. A regular hexagon is made of 6 equilateral triangles with side 6, each with area (√3/4)(6)² = 9√3. The total area is 6 × 9√3 = 54√3."
  },
  {
    id: "geo-h208",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x + 6)² + (y − 4)² = 3721<br><br>The point (5, 64) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the slope of line t?",
    choices: [
      "−11/60",
      "60/11",
      "11/60",
      "−60/11"
    ],
    answer: 0,
    explanation: "The center is (−6, 4). The radius to (5, 64) has slope (64 − 4)/(5 − (−6)) = 60/11. A tangent line is perpendicular to the radius at the point of tangency, so its slope is −11/60."
  },
  {
    id: "geo-h209",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A sphere is placed inside a right circular cylinder so that the sphere touches the top, the bottom, and the curved side of the cylinder. The cylinder has a volume of 250π cubic centimeters. What is the volume, in cubic centimeters, of the sphere?",
    choices: [
      "250/3π",
      "1000/3π",
      "125π",
      "500/3π"
    ],
    answer: 3,
    explanation: "If the sphere has radius R, the cylinder has radius R and height 2R, so its volume is πR²(2R) = 2πR³ = 250π. Then R³ = 125 and R = 5. The sphere's volume is (4/3)πR³ = (4/3)π(125) = 500/3π. (In general, the sphere fills 2/3 of the cylinder.)"
  },
  {
    id: "geo-h210",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (5x + 18)°, and the measure of inscribed angle ABC is (4x − 9)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "78",
      "282",
      "39",
      "141"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 4x − 9 = ½(5x + 18). Multiplying by 2: 8x − 18 = 5x + 18, so 3x = 36 and x = 12. Then angle ABC = 4(12) − 9 = 39°."
  },
  {
    id: "geo-h211",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = −4x − 26 and y = −2x − 14 intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "1",
      "1/2",
      "36",
      "5/2"
    ],
    answer: 1,
    explanation: "The lines meet where −4x − 26 = −2x − 14, at (−6, −2), so the triangle's height is |−2| = 2. The x-intercepts are x = −13/2 and x = −7, so the base is 1/2. The area is ½(1/2)(2) = 1/2."
  },
  {
    id: "geo-h212",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 3,
    prompt: "In isosceles triangle ABC, AB = AC. Side BC is extended past C to point D, and the measure of angle ACD is 111°. What is the measure, in degrees, of angle BAC?",
    choices: [
      "42",
      "69",
      "52",
      "111"
    ],
    answer: 0,
    explanation: "Angle ACB is supplementary to angle ACD, so angle ACB = 180° − 111° = 69°. Since AB = AC, the base angles are equal: angle ABC = 69°. Then angle BAC = 180° − 2(69°) = 42°."
  },
  {
    id: "geo-h213",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant III. An equation of the circle is x² + y² + 10x + 4y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "29",
      "−1",
      "−4",
      "4"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (−5, −2) and r² = 25 + 4 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |−5| = 5. So 25 = 29 − c, giving c = 4. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h214",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 4, and BC = 3. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of CD?",
    choices: [
      "9/5",
      "16/5",
      "12/5",
      "7/2"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(4² + 3²) = 5. The area of the triangle can be computed two ways: ½(3)(4) = ½(5)(CD). So CD = (3)(4)/5 = 12/5."
  },
  {
    id: "geo-h215",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "What is the value of cos(7π/4)?",
    choices: [
      "−√2/2",
      "√2/2",
      "1/2",
      "√3/2"
    ],
    answer: 1,
    explanation: "7π/4 radians is 315°, which lies in quadrant IV. Its reference angle is 45°, so |cos| = √2/2. In this quadrant cos is positive, so the value is √2/2."
  },
  {
    id: "geo-h216",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar rectangular prisms have surface areas in the ratio 4 : 36. The volume of the smaller one is 48 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "1296",
      "432",
      "144",
      "480"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 4 : 36 means k = 6/2. So the larger volume is 48·(6/2)³ = 48·216/8 = 1296."
  },
  {
    id: "geo-h217",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Each interior angle of a regular polygon has a measure that is 11 times the measure of each of its exterior angles. How many sides does the polygon have?",
    choices: [
      "12",
      "26",
      "48",
      "24"
    ],
    answer: 3,
    explanation: "For a regular n-gon, each exterior angle is 360°/n and each interior angle is 180° − 360°/n. Setting 180 − 360/n = 11(360/n) gives 180 = 12(360/n), so n = 12(360)/180 = 24."
  },
  {
    id: "geo-h218",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, the measure of angle B is 45° and the measure of angle C is 30°. The altitude from A to side BC has length 10. What is the length of side BC?",
    choices: [
      "20√3",
      "10 + 10√2",
      "10 + 10√3",
      "20 + 10√3"
    ],
    answer: 2,
    explanation: "Let D be the foot of the altitude. Triangle ABD is a 45°-45°-90° triangle, so BD = AD = 10. Triangle ADC is a 30°-60°-90° triangle with the side opposite 30° equal to AD = 10, so DC = 10√3. Therefore BC = BD + DC = 10 + 10√3."
  },
  {
    id: "geo-h219",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (5, −2) and (−11, k) is 34. If k > −2, what is the value of k?",
    choices: [
      "−32",
      "28",
      "32",
      "30"
    ],
    answer: 1,
    explanation: "By the distance formula, (−11 − 5)² + (k − (−2))² = 34², so 256 + (k − (−2))² = 1156. Then (k − (−2))² = 900, so k − (−2) = ±30. Since k > −2, k = −2 + 30 = 28."
  },
  {
    id: "geo-h220",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A 29-foot ladder leans against a vertical wall. The top of the ladder touches the wall 20 feet above the level ground. Let θ be the angle between the ladder and the ground. What is the value of cos(θ) + sin(θ)?",
    choices: [
      "41/29",
      "20/29",
      "21/29",
      "41/21"
    ],
    answer: 0,
    explanation: "The horizontal distance is √(29² − 20²) = 21. With θ at the ground, sin(θ) = opposite/hypotenuse = 20/29 = 20/29 and cos(θ) = adjacent/hypotenuse = 21/29 = 21/29. Their sum is 41/29."
  },
  {
    id: "geo-h221",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² − 2x + y² − 12y + 1 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the area of the circle?",
    choices: [
      "1π",
      "1296π",
      "72π",
      "36π"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² − 2x + 1) + (y² − 12y + 36) = −1 + 1 + 36, so (x − 1)² + (y − 6)² = 36. The radius is √36 = 6, so the area is π(36) = 36π."
  },
  {
    id: "geo-h222",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 25 inches, a chord has length 14 inches. What is the distance, in inches, from the center of the circle to the chord?",
    choices: [
      "18",
      "21",
      "24",
      "7"
    ],
    answer: 2,
    explanation: "The perpendicular from the center bisects the chord, so it forms a right triangle with hypotenuse 25 and leg 14/2 = 7. The distance is √(25² − 7²) = √576 = 24."
  },
  {
    id: "geo-h223",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with center O, central angle AOB has a measure of 2π/5 radians. The length of arc AB is 10π units. What is the area, in square units, of sector AOB?",
    choices: [
      "250π",
      "125π",
      "625π",
      "125π/2"
    ],
    answer: 1,
    explanation: "Arc length = rθ, so 10π = r(2π/5), giving r = 25. Sector area = ½r²θ = ½(25)²(2π/5) = 125π."
  },
  {
    id: "geo-h224",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC such that segment DE is parallel to side BC. If AD = 10, DB = 2, and DE = 80, what is the length of BC?",
    choices: [
      "96",
      "16",
      "400",
      "82"
    ],
    answer: 0,
    explanation: "Since DE ∥ BC, triangle ADE is similar to triangle ABC with ratio AD/AB = 10/12. So DE/BC = 10/12, and BC = 80·12/10 = 96. A common error is to use AD/DB instead of AD/AB."
  },
  {
    id: "geo-h225",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 4/3. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 4 times the length of the corresponding side of triangle PQR. What is the value of sin(T)?",
    choices: [
      "4/5",
      "12/5",
      "5/3",
      "3/5"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so sin(T) = sin(Q), and the scale factor 4 does not matter. In triangle PQR, tan(P) = 4/3 means the side opposite P is 4k and the side adjacent to P is 3k, with hypotenuse 5k (since 4² + 3² = 5²). Angle Q is the other acute angle, so the side opposite Q is 3k and the side adjacent to Q is 4k. Therefore sin(Q) = 3/5."
  },
  {
    id: "geo-h226",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a rectangular prism is decreased by 40%. By what percent does the surface area of the rectangular prism decrease?",
    choices: [
      "80%",
      "40%",
      "64%",
      "78.4%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 0.6, area is multiplied by the square of that factor: 0.6<sup>2</sup> = 0.36. So the new surface area is 36% of the original, a decrease of 64%."
  },
  {
    id: "geo-h227",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "An equilateral triangle has an area of 9√3 square inches. What is the perimeter, in inches, of the triangle?",
    choices: [
      "6",
      "18",
      "9",
      "27"
    ],
    answer: 1,
    explanation: "The area of an equilateral triangle with side s is (√3/4)s². Setting (√3/4)s² = 9√3 gives s² = 36, so s = 6 and the perimeter is 3(6) = 18."
  },
  {
    id: "geo-h228",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x − 5)² + (y − 3)² = 841<br><br>The point (25, −18) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the slope of line t?",
    choices: [
      "20/21",
      "−21/20",
      "−20/21",
      "21/20"
    ],
    answer: 0,
    explanation: "The center is (5, 3). The radius to (25, −18) has slope (−18 − 3)/(25 − 5) = −21/20. A tangent line is perpendicular to the radius at the point of tangency, so its slope is 20/21."
  },
  {
    id: "geo-h229",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cone and a right circular cylinder have the same base radius and the same height. The volume of the cylinder is 52π cubic inches. What is the volume, in cubic inches, of the space inside the cylinder but outside the cone?",
    choices: [
      "52/3π",
      "52π",
      "26π",
      "104/3π"
    ],
    answer: 3,
    explanation: "A cone has one-third the volume of a cylinder with the same base and height, so the cone's volume is 52/3π. The remaining space is 52π − 52/3π = 104/3π cubic inches."
  },
  {
    id: "geo-h230",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (5x + 16)°, and the measure of inscribed angle ABC is (4x − 25)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "126",
      "234",
      "63",
      "117"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 4x − 25 = ½(5x + 16). Multiplying by 2: 8x − 50 = 5x + 16, so 3x = 66 and x = 22. Then angle ABC = 4(22) − 25 = 63°."
  },
  {
    id: "geo-h231",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = −2x + 24 and y = 4x − 12 intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "108",
      "54",
      "66",
      "72"
    ],
    answer: 1,
    explanation: "The lines meet where −2x + 24 = 4x − 12, at (6, 12), so the triangle's height is |12| = 12. The x-intercepts are x = 12 and x = 3, so the base is 9. The area is ½(9)(12) = 54."
  },
  {
    id: "geo-h232",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 4,
    prompt: "In triangle ABC, the bisectors of angles B and C intersect at point P inside the triangle. If the measure of angle BPC is 156°, what is the measure, in degrees, of angle A?",
    choices: [
      "132",
      "24",
      "48",
      "66"
    ],
    answer: 0,
    explanation: "Let angle B = 2b and angle C = 2c. In triangle BPC, angle BPC = 180° − b − c. Since 2b + 2c = 180° − A, b + c = 90° − A/2, so angle BPC = 90° + A/2. Then 156 = 90 + A/2 gives A = 132°."
  },
  {
    id: "geo-h233",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant IV. An equation of the circle is x² + y² − 10x + 22y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "146",
      "116",
      "−121",
      "121"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (5, −11) and r² = 25 + 121 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |5| = 5. So 25 = 146 − c, giving c = 121. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h234",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 70, and BC = 24. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of BD?",
    choices: [
      "2450/37",
      "840/37",
      "288/37",
      "12"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(70² + 24²) = 74. Triangle CBD is similar to triangle ABC (they share angle B), so BD/BC = BC/AB, giving BD = 24²/74 = 288/37."
  },
  {
    id: "geo-h235",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In the xy-plane, the terminal side of an angle of 7π/4 radians in standard position intersects the unit circle at point P. What is the y-coordinate of P?",
    choices: [
      "√2/2",
      "−√2/2",
      "1/2",
      "√3/2"
    ],
    answer: 1,
    explanation: "7π/4 radians is 315°, which lies in quadrant IV. Its reference angle is 45°, so |sin| = √2/2. In this quadrant sin is negative, so the value is −√2/2."
  },
  {
    id: "geo-h236",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar pyramids have surface areas in the ratio 16 : 25. The volume of the smaller one is 192 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "375",
      "300",
      "240",
      "492"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 16 : 25 means k = 5/4. So the larger volume is 192·(5/4)³ = 192·125/64 = 375."
  },
  {
    id: "geo-h237",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "For a certain regular polygon, the measure of each interior angle is 36° greater than the measure of each exterior angle. How many sides does the polygon have?",
    choices: [
      "10",
      "3",
      "6",
      "5"
    ],
    answer: 3,
    explanation: "Let each exterior angle be e, so each interior angle is 180° − e. Then (180 − e) − e = 36, so e = 72°. Since the exterior angles of any convex polygon add to 360°, n = 360/72 = 5."
  },
  {
    id: "geo-h238",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, angle B measures 45°, angle C measures 30°, and AC = 12. What is the length of AB?",
    choices: [
      "12√2",
      "6√3",
      "6√2",
      "6"
    ],
    answer: 2,
    explanation: "Draw altitude AD to side BC. In 30°-60°-90° triangle ADC, AD is opposite the 30° angle, so AD = ½(AC) = 6. In 45°-45°-90° triangle ABD, the hypotenuse AB = AD·√2 = 6√2."
  },
  {
    id: "geo-h239",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (6, −7) and (1, k) is 13. If k > −7, what is the value of k?",
    choices: [
      "−19",
      "5",
      "6",
      "12"
    ],
    answer: 1,
    explanation: "By the distance formula, (1 − 6)² + (k − (−7))² = 13², so 25 + (k − (−7))² = 169. Then (k − (−7))² = 144, so k − (−7) = ±12. Since k > −7, k = −7 + 12 = 5."
  },
  {
    id: "geo-h240",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A taut 20-meter support wire runs from the top of a 12-meter vertical pole to a point on the level ground. Let θ be the angle between the wire and the ground. What is the value of tan(90° − θ)?",
    choices: [
      "4/3",
      "3/4",
      "3/5",
      "4/5"
    ],
    answer: 0,
    explanation: "The horizontal leg is √(20² − 12²) = 16. The angle 90° − θ is the other acute angle of the right triangle, at the top. For that angle, the adjacent side is the vertical leg (12) and the opposite side is the horizontal leg (16). So tan(90° − θ) = 16/12 = 4/3, which equals 1/tan(θ)."
  },
  {
    id: "geo-h241",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² + 18x + y² + 2y + 46 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the length of the radius of the circle?",
    choices: [
      "√46",
      "36",
      "√82",
      "6"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² + 18x + 81) + (y² + 2y + 1) = −46 + 81 + 1, so (x + 9)² + (y + 1)² = 36. The radius is √36 = 6."
  },
  {
    id: "geo-h242",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 87 inches, a chord has length 120 inches. What is the distance, in inches, from the center of the circle to the chord?",
    choices: [
      "27",
      "85",
      "63",
      "60"
    ],
    answer: 2,
    explanation: "The perpendicular from the center bisects the chord, so it forms a right triangle with hypotenuse 87 and leg 120/2 = 60. The distance is √(87² − 60²) = √3969 = 63."
  },
  {
    id: "geo-h243",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with center O, central angle AOB has a measure of π/6 radians. The length of arc AB is 4π units. What is the area, in square units, of sector AOB?",
    choices: [
      "96π",
      "48π",
      "576π",
      "24π"
    ],
    answer: 1,
    explanation: "Arc length = rθ, so 4π = r(π/6), giving r = 24. Sector area = ½r²θ = ½(24)²(π/6) = 48π."
  },
  {
    id: "geo-h244",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC such that segment DE is parallel to side BC. If AD = 5, DB = 9, and DE = 20, what is the length of BC?",
    choices: [
      "56",
      "36",
      "100/9",
      "29"
    ],
    answer: 0,
    explanation: "Since DE ∥ BC, triangle ADE is similar to triangle ABC with ratio AD/AB = 5/14. So DE/BC = 5/14, and BC = 20·14/5 = 56. A common error is to use AD/DB instead of AD/AB."
  },
  {
    id: "geo-h245",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 5/12. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 2 times the length of the corresponding side of triangle PQR. What is the value of sin(T)?",
    choices: [
      "5/13",
      "24/13",
      "13/12",
      "12/13"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so sin(T) = sin(Q), and the scale factor 2 does not matter. In triangle PQR, tan(P) = 5/12 means the side opposite P is 5k and the side adjacent to P is 12k, with hypotenuse 13k (since 5² + 12² = 13²). Angle Q is the other acute angle, so the side opposite Q is 12k and the side adjacent to Q is 5k. Therefore sin(Q) = 12/13."
  },
  {
    id: "geo-h246",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a cube is increased by 20%. By what percent does the volume of the cube increase?",
    choices: [
      "60%",
      "20%",
      "72.8%",
      "44%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 1.2, volume is multiplied by the cube of that factor: 1.2<sup>3</sup> = 1.728. So the new volume is 172.8% of the original, an increase of 72.8%."
  },
  {
    id: "geo-h247",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "A regular hexagon has a perimeter of 12 meters. What is the area, in square meters, of the hexagon?",
    choices: [
      "1√3",
      "6√3",
      "3√3",
      "12√3"
    ],
    answer: 1,
    explanation: "Each side is 12/6 = 2. A regular hexagon is made of 6 equilateral triangles with side 2, each with area (√3/4)(2)² = 1√3. The total area is 6 × 1√3 = 6√3."
  },
  {
    id: "geo-h248",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 4,
    prompt: "(x − 2)² + (y − 2)² = 169<br><br>The point (−3, 14) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the y-coordinate of the y-intercept of line t?",
    choices: [
      "61/4",
      "34/5",
      "51/4",
      "7/6"
    ],
    answer: 0,
    explanation: "The center is (2, 2). The radius to (−3, 14) has slope (14 − 2)/(−3 − 2) = −12/5. A tangent line is perpendicular to the radius at the point of tangency, so its slope is 5/12. Using y − 14 = 5/12(x − (−3)) and setting x = 0 gives y = 61/4."
  },
  {
    id: "geo-h249",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cone and a right circular cylinder have the same base radius and the same height. The volume of the cylinder is 432π cubic inches. What is the volume, in cubic inches, of the space inside the cylinder but outside the cone?",
    choices: [
      "144π",
      "432π",
      "216π",
      "288π"
    ],
    answer: 3,
    explanation: "A cone has one-third the volume of a cylinder with the same base and height, so the cone's volume is 144π. The remaining space is 432π − 144π = 288π cubic inches."
  },
  {
    id: "geo-h250",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (2x + 16)°, and the measure of inscribed angle ABC is (4x − 43)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "50",
      "310",
      "25",
      "155"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 4x − 43 = ½(2x + 16). Multiplying by 2: 8x − 86 = 2x + 16, so 6x = 102 and x = 17. Then angle ABC = 4(17) − 43 = 25°."
  },
  {
    id: "geo-h251",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = −2x − 9 and y = 2x − 13 intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "121",
      "121/2",
      "2",
      "143/2"
    ],
    answer: 1,
    explanation: "The lines meet where −2x − 9 = 2x − 13, at (1, −11), so the triangle's height is |−11| = 11. The x-intercepts are x = −9/2 and x = 13/2, so the base is 11. The area is ½(11)(11) = 121/2."
  },
  {
    id: "geo-h252",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 4,
    prompt: "In triangle ABC, the measure of angle A is 54°. The bisectors of angles B and C intersect at point P. What is the measure, in degrees, of angle BPC?",
    choices: [
      "117",
      "126",
      "153",
      "63"
    ],
    answer: 0,
    explanation: "Angles B and C together measure 180° − 54° = 126°. Their halves add to 63°. In triangle BPC, angle BPC = 180° − 63° = 117°. (In general, angle BPC = 90° + A/2.)"
  },
  {
    id: "geo-h253",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant I. An equation of the circle is x² + y² − 4x − 16y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "68",
      "62",
      "−64",
      "64"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (2, 8) and r² = 4 + 64 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |2| = 2. So 4 = 68 − c, giving c = 64. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h254",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 24, and BC = 7. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of CD?",
    choices: [
      "49/25",
      "576/25",
      "168/25",
      "31/2"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(24² + 7²) = 25. The area of the triangle can be computed two ways: ½(7)(24) = ½(25)(CD). So CD = (7)(24)/25 = 168/25."
  },
  {
    id: "geo-h255",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In the xy-plane, the terminal side of an angle of 7π/6 radians in standard position intersects the unit circle at point P. What is the x-coordinate of P?",
    choices: [
      "√3/2",
      "−√3/2",
      "−1/2",
      "1/2"
    ],
    answer: 1,
    explanation: "7π/6 radians is 210°, which lies in quadrant III. Its reference angle is 30°, so |cos| = √3/2. In this quadrant cos is negative, so the value is −√3/2."
  },
  {
    id: "geo-h256",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cylinders have surface areas in the ratio 9 : 16. The volume of the smaller one is 162 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "384",
      "288",
      "216",
      "450"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 9 : 16 means k = 4/3. So the larger volume is 162·(4/3)³ = 162·64/27 = 384."
  },
  {
    id: "geo-h257",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "For a certain regular polygon, the measure of each interior angle is 60° greater than the measure of each exterior angle. How many sides does the polygon have?",
    choices: [
      "8",
      "4",
      "7",
      "6"
    ],
    answer: 3,
    explanation: "Let each exterior angle be e, so each interior angle is 180° − e. Then (180 − e) − e = 60, so e = 60°. Since the exterior angles of any convex polygon add to 360°, n = 360/60 = 6."
  },
  {
    id: "geo-h258",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, angle B measures 45°, angle C measures 30°, and AC = 16. What is the length of AB?",
    choices: [
      "16√2",
      "8√3",
      "8√2",
      "8"
    ],
    answer: 2,
    explanation: "Draw altitude AD to side BC. In 30°-60°-90° triangle ADC, AD is opposite the 30° angle, so AD = ½(AC) = 8. In 45°-45°-90° triangle ABD, the hypotenuse AB = AD·√2 = 8√2."
  },
  {
    id: "geo-h259",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (6, 4) and (11, k) is 13. If k > 4, what is the value of k?",
    choices: [
      "−8",
      "16",
      "17",
      "12"
    ],
    answer: 1,
    explanation: "By the distance formula, (11 − 6)² + (k − 4)² = 13², so 25 + (k − 4)² = 169. Then (k − 4)² = 144, so k − 4 = ±12. Since k > 4, k = 4 + 12 = 16."
  },
  {
    id: "geo-h260",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A straight ramp 29 meters long rises from level ground to a platform 20 meters high. Let θ be the angle between the ramp and the ground. What is the value of tan(90° − θ)?",
    choices: [
      "21/20",
      "20/21",
      "20/29",
      "21/29"
    ],
    answer: 0,
    explanation: "The horizontal leg is √(29² − 20²) = 21. The angle 90° − θ is the other acute angle of the right triangle, at the top. For that angle, the adjacent side is the vertical leg (20) and the opposite side is the horizontal leg (21). So tan(90° − θ) = 21/20 = 21/20, which equals 1/tan(θ)."
  },
  {
    id: "geo-h261",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² − 2x + y² − 4y − 31 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the length of the radius of the circle?",
    choices: [
      "√31",
      "36",
      "√5",
      "6"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² − 2x + 1) + (y² − 4y + 4) = 31 + 1 + 4, so (x − 1)² + (y − 2)² = 36. The radius is √36 = 6."
  },
  {
    id: "geo-h262",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 58 inches, a chord has length 84 inches. What is the distance, in inches, from the center of the circle to the chord?",
    choices: [
      "16",
      "56",
      "40",
      "42"
    ],
    answer: 2,
    explanation: "The perpendicular from the center bisects the chord, so it forms a right triangle with hypotenuse 58 and leg 84/2 = 42. The distance is √(58² − 42²) = √1600 = 40."
  },
  {
    id: "geo-h263",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with center O, central angle AOB has a measure of 6π/5 radians. The length of arc AB is 60π units. What is the area, in square units, of sector AOB?",
    choices: [
      "3000π",
      "1500π",
      "2500π",
      "750π"
    ],
    answer: 1,
    explanation: "Arc length = rθ, so 60π = r(6π/5), giving r = 50. Sector area = ½r²θ = ½(50)²(6π/5) = 1500π."
  },
  {
    id: "geo-h264",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, segment DE connects point D on AB to point E on AC, and DE is parallel to BC. If AD = 4, DE = 16, and BC = 56, what is the length of DB?",
    choices: [
      "10",
      "14",
      "4",
      "40"
    ],
    answer: 0,
    explanation: "Triangles ADE and ABC are similar, so AD/AB = DE/BC = 16/56. Then AB = 4·56/16 = 14, and DB = AB − AD = 14 − 4 = 10."
  },
  {
    id: "geo-h265",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle PQR, angle R is the right angle and tan(P) = 15/8. Triangle STU is similar to triangle PQR, where S, T, and U correspond to P, Q, and R, respectively, and each side of triangle STU is 5 times the length of the corresponding side of triangle PQR. What is the value of tan(T)?",
    choices: [
      "15/8",
      "8/3",
      "17/15",
      "8/15"
    ],
    answer: 3,
    explanation: "Similar triangles have equal corresponding angles, so tan(T) = tan(Q), and the scale factor 5 does not matter. In triangle PQR, tan(P) = 15/8 means the side opposite P is 15k and the side adjacent to P is 8k, with hypotenuse 17k (since 15² + 8² = 17²). Angle Q is the other acute angle, so the side opposite Q is 8k and the side adjacent to Q is 15k. Therefore tan(Q) = 8/15."
  },
  {
    id: "geo-h266",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Every linear dimension of a cube is increased by 30%. By what percent does the volume of the cube increase?",
    choices: [
      "90%",
      "30%",
      "119.7%",
      "69%"
    ],
    answer: 2,
    explanation: "When every linear dimension is multiplied by 1.3, volume is multiplied by the cube of that factor: 1.3<sup>3</sup> = 2.197. So the new volume is 219.7% of the original, an increase of 119.7%."
  },
  {
    id: "geo-h267",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "An equilateral triangle has an area of 81√3 square inches. What is the perimeter, in inches, of the triangle?",
    choices: [
      "18",
      "54",
      "27",
      "243"
    ],
    answer: 1,
    explanation: "The area of an equilateral triangle with side s is (√3/4)s². Setting (√3/4)s² = 81√3 gives s² = 324, so s = 18 and the perimeter is 3(18) = 54."
  },
  {
    id: "geo-h268",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 4,
    prompt: "(x + 4)² + (y + 3)² = 625<br><br>The point (3, −27) lies on the circle with the given equation in the xy-plane. Line t is tangent to the circle at this point. What is the y-coordinate of the y-intercept of line t?",
    choices: [
      "−223/8",
      "−117/7",
      "−209/8",
      "−11/6"
    ],
    answer: 0,
    explanation: "The center is (−4, −3). The radius to (3, −27) has slope (−27 − (−3))/(3 − (−4)) = −24/7. A tangent line is perpendicular to the radius at the point of tangency, so its slope is 7/24. Using y − (−27) = 7/24(x − 3) and setting x = 0 gives y = −223/8."
  },
  {
    id: "geo-h269",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A sphere is placed inside a right circular cylinder so that the sphere touches the top, the bottom, and the curved side of the cylinder. The cylinder has a volume of 432π cubic centimeters. What is the volume, in cubic centimeters, of the sphere?",
    choices: [
      "144π",
      "576π",
      "216π",
      "288π"
    ],
    answer: 3,
    explanation: "If the sphere has radius R, the cylinder has radius R and height 2R, so its volume is πR²(2R) = 2πR³ = 432π. Then R³ = 216 and R = 6. The sphere's volume is (4/3)πR³ = (4/3)π(216) = 288π. (In general, the sphere fills 2/3 of the cylinder.)"
  },
  {
    id: "geo-h270",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle. The measure of arc AC (not containing B) is (4x + 16)°, and the measure of inscribed angle ABC is (4x − 12)°. What is the measure, in degrees, of angle ABC?",
    choices: [
      "56",
      "304",
      "28",
      "152"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc: 4x − 12 = ½(4x + 16). Multiplying by 2: 8x − 24 = 4x + 16, so 4x = 40 and x = 10. Then angle ABC = 4(10) − 12 = 28°."
  },
  {
    id: "geo-h271",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the lines y = 4x + 2 and y = −4x − 22 intersect each other and each intersect the x-axis. What is the area of the triangle formed by the two lines and the x-axis?",
    choices: [
      "50",
      "25",
      "36",
      "35"
    ],
    answer: 1,
    explanation: "The lines meet where 4x + 2 = −4x − 22, at (−3, −10), so the triangle's height is |−10| = 10. The x-intercepts are x = −1/2 and x = −11/2, so the base is 5. The area is ½(5)(10) = 25."
  },
  {
    id: "geo-h272",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Triangle angles",
    difficulty: 4,
    prompt: "In triangle ABC, the bisectors of angles B and C intersect at point P inside the triangle. If the measure of angle BPC is 107°, what is the measure, in degrees, of angle A?",
    choices: [
      "34",
      "73",
      "146",
      "17"
    ],
    answer: 0,
    explanation: "Let angle B = 2b and angle C = 2c. In triangle BPC, angle BPC = 180° − b − c. Since 2b + 2c = 180° − A, b + c = 90° − A/2, so angle BPC = 90° + A/2. Then 107 = 90 + A/2 gives A = 34°."
  },
  {
    id: "geo-h273",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "A circle in the xy-plane is tangent to the y-axis and has its center in quadrant IV. An equation of the circle is x² + y² − 16x + 8y + c = 0, where c is a constant. What is the value of c?",
    choices: [
      "80",
      "8",
      "−16",
      "16"
    ],
    answer: 3,
    explanation: "Completing the square, the center is (8, −4) and r² = 64 + 16 − c. Tangent to the y-axis means the radius equals the distance from the center to the y-axis, |8| = 8. So 64 = 80 − c, giving c = 16. In general c = k² here, because r² = h²."
  },
  {
    id: "geo-h274",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is the right angle, AC = 45, and BC = 24. Point D lies on hypotenuse AB such that CD is perpendicular to AB. What is the length of BD?",
    choices: [
      "675/17",
      "360/17",
      "192/17",
      "12"
    ],
    answer: 2,
    explanation: "The hypotenuse is √(45² + 24²) = 51. Triangle CBD is similar to triangle ABC (they share angle B), so BD/BC = BC/AB, giving BD = 24²/51 = 192/17."
  },
  {
    id: "geo-h275",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 4,
    prompt: "What is the value of cos(13π/6)?",
    choices: [
      "−√3/2",
      "√3/2",
      "1/2",
      "−1/2"
    ],
    answer: 1,
    explanation: "13π/6 radians is 390°, which is coterminal with 30°, which lies in quadrant I. Its reference angle is 30°, so |cos| = √3/2. In this quadrant cos is positive, so the value is √3/2."
  },
  {
    id: "geo-h276",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar pyramids have surface areas in the ratio 9 : 25. The volume of the smaller one is 162 cubic units. What is the volume, in cubic units, of the larger one?",
    choices: [
      "750",
      "450",
      "270",
      "612"
    ],
    answer: 0,
    explanation: "For similar solids with linear scale factor k, areas scale by k² and volumes by k³. The area ratio 9 : 25 means k = 5/3. So the larger volume is 162·(5/3)³ = 162·125/27 = 750."
  },
  {
    id: "geo-h277",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "The sum of the measures of the interior angles of a regular polygon is 540°. What is the measure, in degrees, of each exterior angle of the polygon?",
    choices: [
      "108",
      "36",
      "120",
      "72"
    ],
    answer: 3,
    explanation: "The interior angles of an n-gon add to (n − 2)·180°, so (n − 2)·180 = 540 and n = 5. Each exterior angle of a regular 5-gon is 360°/5 = 72°."
  },
  {
    id: "geo-h278",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: 3,
    prompt: "In triangle ABC, the measure of angle B is 45° and the measure of angle C is 30°. The altitude from A to side BC has length 3. What is the length of side BC?",
    choices: [
      "6√3",
      "3 + 3√2",
      "3 + 3√3",
      "6 + 3√3"
    ],
    answer: 2,
    explanation: "Let D be the foot of the altitude. Triangle ABD is a 45°-45°-90° triangle, so BD = AD = 3. Triangle ADC is a 30°-60°-90° triangle with the side opposite 30° equal to AD = 3, so DC = 3√3. Therefore BC = BD + DC = 3 + 3√3."
  },
  {
    id: "geo-h279",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Coordinate geometry",
    difficulty: 3,
    prompt: "In the xy-plane, the distance between the points (2, 1) and (−4, k) is 10. If k > 1, what is the value of k?",
    choices: [
      "−7",
      "9",
      "11",
      "8"
    ],
    answer: 1,
    explanation: "By the distance formula, (−4 − 2)² + (k − 1)² = 10², so 36 + (k − 1)² = 100. Then (k − 1)² = 64, so k − 1 = ±8. Since k > 1, k = 1 + 8 = 9."
  },
  {
    id: "geo-h280",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "A taut 50-meter support wire runs from the top of a 14-meter vertical pole to a point on the level ground. Let θ be the angle between the wire and the ground. What is the value of cos(θ) + sin(θ)?",
    choices: [
      "31/25",
      "7/25",
      "24/25",
      "31/24"
    ],
    answer: 0,
    explanation: "The horizontal distance is √(50² − 14²) = 48. With θ at the ground, sin(θ) = opposite/hypotenuse = 14/50 = 7/25 and cos(θ) = adjacent/hypotenuse = 48/50 = 24/25. Their sum is 31/25."
  },
  {
    id: "geo-h281",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² − 2x + y² − 14y + 38 = 0<br><br>The graph of the given equation in the xy-plane is a circle. What is the area of the circle?",
    choices: [
      "38π",
      "144π",
      "24π",
      "12π"
    ],
    answer: 3,
    explanation: "Complete the square in x and y: (x² − 2x + 1) + (y² − 14y + 49) = −38 + 1 + 49, so (x − 1)² + (y − 7)² = 12. The radius is √12 = 2√3, so the area is π(12) = 12π."
  },
  {
    id: "geo-h282",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 51 inches, a chord has length 90 inches. What is the distance, in inches, from the center of the circle to the chord?",
    choices: [
      "6",
      "49",
      "24",
      "45"
    ],
    answer: 2,
    explanation: "The perpendicular from the center bisects the chord, so it forms a right triangle with hypotenuse 51 and leg 90/2 = 45. The distance is √(51² − 45²) = √576 = 24."
  },
  {
    id: "geo-h283",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with center O, central angle AOB has a measure of 6π/5 radians. The length of arc AB is 18π units. What is the area, in square units, of sector AOB?",
    choices: [
      "270π",
      "135π",
      "225π",
      "135π/2"
    ],
    answer: 1,
    explanation: "Arc length = rθ, so 18π = r(6π/5), giving r = 15. Sector area = ½r²θ = ½(15)²(6π/5) = 135π."
  },
  {
    id: "geo-h284",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, segment DE connects point D on AB to point E on AC, and DE is parallel to BC. If AD = 7, DE = 105, and BC = 180, what is the length of DB?",
    choices: [
      "5",
      "12",
      "7",
      "75"
    ],
    answer: 0,
    explanation: "Triangles ADE and ABC are similar, so AD/AB = DE/BC = 105/180. Then AB = 7·180/105 = 12, and DB = AB − AD = 12 − 7 = 5."
  },
  {
    id: "geo-h285",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 12 centimeters is partially filled with water. A solid metal sphere with a radius of 3 centimeters is placed in the cylinder and is completely submerged, and no water overflows. By how many centimeters does the water level rise?",
    choices: [
      "3",
      "2",
      "1/4",
      "1/12"
    ],
    answer: 2,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(12)²h = (4/3)π(3)³. So 144h = 36 and h = 1/4. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h286",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are alternate interior angles, with measures (6x + 13)° and (4x + 27)°. What is the measure, in degrees, of the angle with measure (6x + 13)°?",
    choices: [
      "7",
      "55",
      "125",
      "97"
    ],
    answer: 1,
    explanation: "Alternate interior angles formed by parallel lines are congruent, so 6x + 13 = 4x + 27, which gives x = 7. The angle measures 55°. Treating the angles as supplementary gives the wrong value of x."
  },
  {
    id: "geo-h287",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (5x + 10)°, and the measure of angle C is (2x + 9)°. What is the measure, in degrees, of angle A?",
    choices: [
      "23",
      "125",
      "25/3",
      "55"
    ],
    answer: 1,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (5x + 10) + (2x + 9) = 180. Then 7x + 19 = 180, so x = 23, and angle A measures 5(23) + 10 = 125°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h288",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 5, AE = 8, and AC = 15, what is the length of DB?",
    choices: [
      "19",
      "35/8",
      "7",
      "24"
    ],
    answer: 0,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 5/15 = 8/AB and AB = 24. So DB = 24 − 5 = 19. Treating DE as parallel to BC (matching D with B) gives AB = 75/8, which is incorrect here."
  },
  {
    id: "geo-h289",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cylinders have volumes of 54π cubic units and 16π cubic units. The radius of the first is 12 units. What is the radius of the second, in units?",
    choices: [
      "32/9",
      "16/3",
      "7",
      "8"
    ],
    answer: 3,
    explanation: "The ratio of volumes is 54:16 = 27:8, so the ratio of corresponding lengths is the cube root, 3:2. The radius of the second is 12 · 2/3 = 8. Using the volume ratio directly gives 32/9, and using the square of the length ratio gives 16/3."
  },
  {
    id: "geo-h290",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (4x − 7)°, and the measure of angle C is (2x + 7)°. What is the measure, in degrees, of angle A?",
    choices: [
      "113",
      "30",
      "67",
      "21"
    ],
    answer: 0,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (4x − 7) + (2x + 7) = 180. Then 6x + 0 = 180, so x = 30, and angle A measures 4(30) − (7) = 113°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h291",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x + 5)² + (y − 1)² = 100<br><br>The graph of the given equation in the xy-plane is a circle. The point (1, −7) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(−1, −7)",
      "(−9, −7)",
      "(1, 7)",
      "(1, 9)"
    ],
    answer: 3,
    explanation: "The circle has center (−5, 1) and radius √100. The point (1, −7) is 6 units right of and 8 units below the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (1, 9). Check: (1 − (−5))² + (9 − 1)² = 100. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h292",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 12. The measure of inscribed angle ACB is 35°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "58π/3",
      "7π/3",
      "14π/3",
      "28π/3"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(35°) = 70°. The arc length is (70/360)(2π · 12) = 14π/3. Using 35° as the arc measure gives 7π/3, half the correct length."
  },
  {
    id: "geo-h293",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 37, two parallel chords have lengths 70 and 24. The chords lie on the same side of the center of the circle. What is the distance between the two chords?",
    choices: [
      "23",
      "51",
      "37",
      "47"
    ],
    answer: 0,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 70, the distance d satisfies d² + 35² = 37², so d = 12. For the chord of length 24, d² + 12² = 37², so d = 35. Because the chords are on the same side of the center, the distance between them is the difference, 23."
  },
  {
    id: "geo-h294",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x − 5)² + y² = 169<br><br>The graph of the given equation in the xy-plane is a circle. The point (17, −5) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(10, 13)",
      "(−17, −5)",
      "(−7, 5)",
      "(−17, 5)"
    ],
    answer: 2,
    explanation: "The circle has center (5, 0) and radius √169. The point (17, −5) is 12 units right of and 5 units below the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (−7, 5). Check: (−7 − 5)² + (5 − 0)² = 169. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h295",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cylinders have volumes of 6π cubic units and 750π cubic units. The radius of the first is 3 units. What is the radius of the second, in units?",
    choices: [
      "15",
      "75",
      "19",
      "375"
    ],
    answer: 0,
    explanation: "The ratio of volumes is 6:750 = 1:125, so the ratio of corresponding lengths is the cube root, 1:5. The radius of the second is 3 · 5/1 = 15. Using the volume ratio directly gives 375, and using the square of the length ratio gives 75."
  },
  {
    id: "geo-h296",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle and cos(B) = 84/85. What is the value of tan(A)?",
    choices: [
      "84/13",
      "84/85",
      "13/85",
      "13/84"
    ],
    answer: 0,
    explanation: "cos(B) = BC/AB = 84/85, so BC = 84k and AB = 85k, which gives AC = 13k. Then tan(A) = BC/AC = 84/13."
  },
  {
    id: "geo-h297",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 3. The measure of inscribed angle ACB is 30°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "2π",
      "5π",
      "π",
      "π/2"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(30°) = 60°. The arc length is (60/360)(2π · 3) = π. Using 30° as the arc measure gives π/2, half the correct length."
  },
  {
    id: "geo-h298",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 4, AE = 7, and AC = 12, what is the length of DB?",
    choices: [
      "5",
      "21",
      "20/7",
      "17"
    ],
    answer: 3,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 4/12 = 7/AB and AB = 21. So DB = 21 − 4 = 17. Treating DE as parallel to BC (matching D with B) gives AB = 48/7, which is incorrect here."
  },
  {
    id: "geo-h299",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 12. The measure of inscribed angle ACB is 24°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "16π/5",
      "32π/5",
      "8π/5",
      "104π/5"
    ],
    answer: 0,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(24°) = 48°. The arc length is (48/360)(2π · 12) = 16π/5. Using 24° as the arc measure gives 8π/5, half the correct length."
  },
  {
    id: "geo-h300",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 6 centimeters is partially filled with water. A solid metal sphere with a radius of 3 centimeters is placed in the cylinder and is completely submerged, and no water overflows. By how many centimeters does the water level rise?",
    choices: [
      "6",
      "8",
      "3/4",
      "1"
    ],
    answer: 3,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(6)²h = (4/3)π(3)³. So 36h = 36 and h = 1. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h301",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle and sin(A) = 65/97. What is the value of cos(90° − B)?",
    choices: [
      "65/72",
      "72/97",
      "65/97",
      "72/65"
    ],
    answer: 1,
    explanation: "cos(90° − B) = sin(B), and sin(B) = cos(A) because A and B are complementary. With opposite side 65 and hypotenuse 97 for angle A, the adjacent side is √(97² − 65²) = 72, so cos(A) = 72/97."
  },
  {
    id: "geo-h302",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 3, AE = 4, and AC = 6, what is the length of DB?",
    choices: [
      "3/2",
      "8",
      "5",
      "2"
    ],
    answer: 2,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 3/6 = 4/AB and AB = 8. So DB = 8 − 3 = 5. Treating DE as parallel to BC (matching D with B) gives AB = 9/2, which is incorrect here."
  },
  {
    id: "geo-h303",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are same-side interior angles (consecutive interior angles), with measures (6x − 25)° and (3x + 7)°. What is the measure, in degrees, of the angle with measure (6x − 25)°?",
    choices: [
      "73",
      "22",
      "107",
      "39"
    ],
    answer: 2,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (6x − 25) + (3x + 7) = 180, which gives x = 22. The angle measures 107°. Setting the two expressions equal, as for alternate interior angles, gives the wrong value of x."
  },
  {
    id: "geo-h304",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and cos(x) = 33/65, what is the value of sin(π/2 − x) − cos(π/2 − x)?",
    choices: [
      "89/65",
      "−23/65",
      "0",
      "23/65"
    ],
    answer: 1,
    explanation: "sin(π/2 − x) = cos(x) = 33/65, and cos(π/2 − x) = sin(x). Since x is in the first quadrant, sin(x) = √(1 − (33/65)²) = 56/65. The difference is −23/65."
  },
  {
    id: "geo-h305",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 9 feet, and the cylinder has a height of 12 feet. What is the volume of the silo, in cubic feet?",
    choices: [
      "1215π",
      "1620π",
      "1458π",
      "1944π"
    ],
    answer: 2,
    explanation: "The cylinder's volume is π(9)²(12) = 972π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(9)³ = 486π. The total is 1458π. Adding a full sphere gives 1944π."
  },
  {
    id: "geo-h306",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (6x + 20)°, and the measure of angle C is (5x + 17)°. What is the measure, in degrees, of angle A?",
    choices: [
      "98",
      "2",
      "13",
      "82"
    ],
    answer: 0,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (6x + 20) + (5x + 17) = 180. Then 11x + 37 = 180, so x = 13, and angle A measures 6(13) + 20 = 98°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h307",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 8, AE = 7, and AC = 16, what is the length of DB?",
    choices: [
      "6",
      "9",
      "14",
      "72/7"
    ],
    answer: 0,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 8/16 = 7/AB and AB = 14. So DB = 14 − 8 = 6. Treating DE as parallel to BC (matching D with B) gives AB = 128/7, which is incorrect here."
  },
  {
    id: "geo-h308",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (6x + 4)°, and the measure of angle C is (2x + 8)°. What is the measure, in degrees, of angle A?",
    choices: [
      "50",
      "10",
      "21",
      "130"
    ],
    answer: 3,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (6x + 4) + (2x + 8) = 180. Then 8x + 12 = 180, so x = 21, and angle A measures 6(21) + 4 = 130°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h309",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x − 2)² + (y − 3)² = 5<br><br>The graph of the given equation in the xy-plane is a circle. The point (0, 2) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(0, 5)",
      "(3, 2)",
      "(0, −2)",
      "(4, 4)"
    ],
    answer: 3,
    explanation: "The circle has center (2, 3) and radius √5. The point (0, 2) is 2 units left of and 1 units below the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (4, 4). Check: (4 − 2)² + (4 − 3)² = 5. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h310",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and cos(x) = 15/17, what is the value of sin(π/2 − x) − cos(π/2 − x)?",
    choices: [
      "23/17",
      "7/17",
      "−7/17",
      "0"
    ],
    answer: 1,
    explanation: "sin(π/2 − x) = cos(x) = 15/17, and cos(π/2 − x) = sin(x). Since x is in the first quadrant, sin(x) = √(1 − (15/17)²) = 8/17. The difference is 7/17."
  },
  {
    id: "geo-h311",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 3, AE = 9, and AC = 21, what is the length of DB?",
    choices: [
      "60",
      "4",
      "12",
      "63"
    ],
    answer: 0,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 3/21 = 9/AB and AB = 63. So DB = 63 − 3 = 60. Treating DE as parallel to BC (matching D with B) gives AB = 7, which is incorrect here."
  },
  {
    id: "geo-h312",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 3, AE = 9, and AC = 18, what is the length of DB?",
    choices: [
      "9",
      "54",
      "51",
      "3"
    ],
    answer: 2,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 3/18 = 9/AB and AB = 54. So DB = 54 − 3 = 51. Treating DE as parallel to BC (matching D with B) gives AB = 6, which is incorrect here."
  },
  {
    id: "geo-h313",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are corresponding angles, with measures (4x + 28)° and (6x − 18)°. What is the measure, in degrees, of the angle with measure (4x + 28)°?",
    choices: [
      "120",
      "60",
      "96",
      "23"
    ],
    answer: 0,
    explanation: "Corresponding angles formed by parallel lines are congruent, so 4x + 28 = 6x − 18, which gives x = 23. The angle measures 120°. Treating the angles as supplementary gives the wrong value of x."
  },
  {
    id: "geo-h314",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cylinders have volumes of 375π cubic units and 3π cubic units. The radius of the first is 20 units. What is the radius of the second, in units?",
    choices: [
      "4/5",
      "0",
      "4",
      "100"
    ],
    answer: 2,
    explanation: "The ratio of volumes is 375:3 = 125:1, so the ratio of corresponding lengths is the cube root, 5:1. The radius of the second is 20 · 1/5 = 4. Using the volume ratio directly gives 4/25, and using the square of the length ratio gives 4/5."
  },
  {
    id: "geo-h315",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 12, AE = 9, and AC = 24, what is the length of DB?",
    choices: [
      "20",
      "18",
      "6",
      "15"
    ],
    answer: 2,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 12/24 = 9/AB and AB = 18. So DB = 18 − 12 = 6. Treating DE as parallel to BC (matching D with B) gives AB = 32, which is incorrect here."
  },
  {
    id: "geo-h316",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 6 feet, and the cylinder has a height of 10 feet. What is the volume of the silo, in cubic feet?",
    choices: [
      "648π",
      "600π",
      "432π",
      "504π"
    ],
    answer: 3,
    explanation: "The cylinder's volume is π(6)²(10) = 360π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(6)³ = 144π. The total is 504π. Adding a full sphere gives 648π."
  },
  {
    id: "geo-h317",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "x² + (y − 1)² = 25<br><br>The graph of the given equation in the xy-plane is a circle. The point (4, 4) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(−3, 6)",
      "(−4, 4)",
      "(4, −1)",
      "(−4, −4)"
    ],
    answer: 1,
    explanation: "The circle has center (0, 1) and radius √25. The point (4, 4) is 4 units right of and 3 units above the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (−4, 4). Check: (−4 − 0)² + (4 − 1)² = 25. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h318",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 15. The measure of inscribed angle ACB is 75°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "25π/4",
      "35π/2",
      "25π",
      "25π/2"
    ],
    answer: 3,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(75°) = 150°. The arc length is (150/360)(2π · 15) = 25π/2. Using 75° as the arc measure gives 25π/4, half the correct length."
  },
  {
    id: "geo-h319",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. If AB = 255 and sin(A) = 36/85, what is the length of AC?",
    choices: [
      "147",
      "3√8521",
      "231",
      "108"
    ],
    answer: 2,
    explanation: "sin(A) = BC/AB, so BC = 36/85 · 255 = 108. Then AC = √(255² − 108²) = 231."
  },
  {
    id: "geo-h320",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 15. The measure of inscribed angle ACB is 30°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "5π",
      "5π/2",
      "25π",
      "10π"
    ],
    answer: 0,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(30°) = 60°. The arc length is (60/360)(2π · 15) = 5π. Using 30° as the arc measure gives 5π/2, half the correct length."
  },
  {
    id: "geo-h321",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 10 and DB = 30, what is the length of AC?",
    choices: [
      "20√3",
      "10√10",
      "10√3",
      "20"
    ],
    answer: 3,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 10(40) = 400. So AC = 20. The altitude CD would be √(10 · 30) = 10√3, and BC would be √(30 · 40) = 20√3."
  },
  {
    id: "geo-h322",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle and cos(B) = 35/37. What is the value of tan(A)?",
    choices: [
      "35/37",
      "12/35",
      "35/12",
      "12/37"
    ],
    answer: 2,
    explanation: "cos(B) = BC/AB = 35/37, so BC = 35k and AB = 37k, which gives AC = 12k. Then tan(A) = BC/AC = 35/12."
  },
  {
    id: "geo-h323",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 4, AE = 7, and AC = 16, what is the length of DB?",
    choices: [
      "24",
      "9",
      "36/7",
      "28"
    ],
    answer: 0,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 4/16 = 7/AB and AB = 28. So DB = 28 − 4 = 24. Treating DE as parallel to BC (matching D with B) gives AB = 64/7, which is incorrect here."
  },
  {
    id: "geo-h324",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 9 feet, and the cylinder has a height of 5 feet. What is the volume of the silo, in cubic feet?",
    choices: [
      "1377π",
      "675π",
      "648π",
      "891π"
    ],
    answer: 3,
    explanation: "The cylinder's volume is π(9)²(5) = 405π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(9)³ = 486π. The total is 891π. Adding a full sphere gives 1377π."
  },
  {
    id: "geo-h325",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 13, two parallel chords have lengths 10 and 24. The chords lie on opposite sides of the center of the circle. What is the distance between the two chords?",
    choices: [
      "17",
      "13",
      "9",
      "7"
    ],
    answer: 0,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 10, the distance d satisfies d² + 5² = 13², so d = 12. For the chord of length 24, d² + 12² = 13², so d = 5. Because the chords are on opposite sides of the center, the distance between them is the sum, 17."
  },
  {
    id: "geo-h326",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x + 1)² + (y + 1)² = 169<br><br>The graph of the given equation in the xy-plane is a circle. The point (11, −6) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(4, 12)",
      "(−11, −6)",
      "(11, 5)",
      "(−13, −6)"
    ],
    answer: 3,
    explanation: "The circle has center (−1, −1) and radius √169. The point (11, −6) is 12 units right of and 5 units below the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (−13, −6). Check: (−13 − (−1))² + (−6 − (−1))² = 169. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h327",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 16 and DB = 9, what is the length of AC?",
    choices: [
      "15",
      "√337",
      "12",
      "20"
    ],
    answer: 3,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 16(25) = 400. So AC = 20. The altitude CD would be √(16 · 9) = 12, and BC would be √(9 · 25) = 15."
  },
  {
    id: "geo-h328",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 24 and DB = 30, what is the length of AC?",
    choices: [
      "6√41",
      "12√5",
      "18√5",
      "36"
    ],
    answer: 3,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 24(54) = 1296. So AC = 36. The altitude CD would be √(24 · 30) = 12√5, and BC would be √(30 · 54) = 18√5."
  },
  {
    id: "geo-h329",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x − 5)² + (y − 1)² = 169<br><br>The graph of the given equation in the xy-plane is a circle. The point (17, 6) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(6, 17)",
      "(17, −4)",
      "(17, −3)",
      "(0, 14)"
    ],
    answer: 1,
    explanation: "The circle has center (5, 1) and radius √169. The point (17, 6) is 12 units right of and 5 units above the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (17, −4). Check: (17 − 5)² + (−4 − 1)² = 169. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h330",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 37, two parallel chords have lengths 70 and 24. The chords lie on opposite sides of the center of the circle. What is the distance between the two chords?",
    choices: [
      "37",
      "47",
      "27",
      "23"
    ],
    answer: 1,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 70, the distance d satisfies d² + 35² = 37², so d = 12. For the chord of length 24, d² + 12² = 37², so d = 35. Because the chords are on opposite sides of the center, the distance between them is the sum, 47."
  },
  {
    id: "geo-h331",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are corresponding angles, with measures (3x − 25)° and (2x + 10)°. What is the measure, in degrees, of the angle with measure (3x − 25)°?",
    choices: [
      "100",
      "80",
      "35",
      "92"
    ],
    answer: 1,
    explanation: "Corresponding angles formed by parallel lines are congruent, so 3x − 25 = 2x + 10, which gives x = 35. The angle measures 80°. Treating the angles as supplementary gives the wrong value of x."
  },
  {
    id: "geo-h332",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. If AB = 97 and sin(A) = 65/97, what is the length of AC?",
    choices: [
      "65",
      "√13634",
      "72",
      "32"
    ],
    answer: 2,
    explanation: "sin(A) = BC/AB, so BC = 65/97 · 97 = 65. Then AC = √(97² − 65²) = 72."
  },
  {
    id: "geo-h333",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x + 1)² + (y + 6)² = 25<br><br>The graph of the given equation in the xy-plane is a circle. The point (−4, −2) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(−2, −4)",
      "(−4, 2)",
      "(−6, −2)",
      "(2, −10)"
    ],
    answer: 3,
    explanation: "The circle has center (−1, −6) and radius √25. The point (−4, −2) is 3 units left of and 4 units above the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (2, −10). Check: (2 − (−1))² + (−10 − (−6))² = 25. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h334",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 9 feet, and the cylinder has a height of 15 feet. What is the volume of the silo, in cubic feet?",
    choices: [
      "2187π",
      "1701π",
      "1458π",
      "2025π"
    ],
    answer: 1,
    explanation: "The cylinder's volume is π(9)²(15) = 1215π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(9)³ = 486π. The total is 1701π. Adding a full sphere gives 2187π."
  },
  {
    id: "geo-h335",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x + 2)² + (y + 1)² = 5<br><br>The graph of the given equation in the xy-plane is a circle. The point (−4, −2) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(4, −2)",
      "(−4, 0)",
      "(−2, −4)",
      "(4, 2)"
    ],
    answer: 1,
    explanation: "The circle has center (−2, −1) and radius √5. The point (−4, −2) is 2 units left of and 1 units below the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (−4, 0). Check: (−4 − (−2))² + (0 − (−1))² = 5. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h336",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 65, two parallel chords have lengths 66 and 104. The chords lie on opposite sides of the center of the circle. What is the distance between the two chords?",
    choices: [
      "17",
      "95",
      "19",
      "85"
    ],
    answer: 1,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 66, the distance d satisfies d² + 33² = 65², so d = 56. For the chord of length 104, d² + 52² = 65², so d = 39. Because the chords are on opposite sides of the center, the distance between them is the sum, 95."
  },
  {
    id: "geo-h337",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 5, AE = 12, and AC = 10, what is the length of DB?",
    choices: [
      "−5/6",
      "19",
      "−2",
      "24"
    ],
    answer: 1,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 5/10 = 12/AB and AB = 24. So DB = 24 − 5 = 19. Treating DE as parallel to BC (matching D with B) gives AB = 25/6, which is incorrect here."
  },
  {
    id: "geo-h338",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x − 3)² + (y + 2)² = 13<br><br>The graph of the given equation in the xy-plane is a circle. The point (1, −5) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(−1, −5)",
      "(7, −5)",
      "(−5, 1)",
      "(1, 1)"
    ],
    answer: 3,
    explanation: "The circle has center (3, −2) and radius √13. The point (1, −5) is 2 units left of and 3 units below the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (1, 1). Check: (1 − 3)² + (1 − (−2))² = 13. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h339",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle and cos(B) = 40/41. What is the value of tan(A)?",
    choices: [
      "9/40",
      "40/41",
      "9/41",
      "40/9"
    ],
    answer: 3,
    explanation: "cos(B) = BC/AB = 40/41, so BC = 40k and AB = 41k, which gives AC = 9k. Then tan(A) = BC/AC = 40/9."
  },
  {
    id: "geo-h340",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar pyramids have volumes of 216 cubic units and 8 cubic units. The height of the first is 12 units. What is the height of the second, in units?",
    choices: [
      "4",
      "2",
      "4/3",
      "4/9"
    ],
    answer: 0,
    explanation: "The ratio of volumes is 216:8 = 27:1, so the ratio of corresponding lengths is the cube root, 3:1. The height of the second is 12 · 1/3 = 4. Using the volume ratio directly gives 4/9, and using the square of the length ratio gives 4/3."
  },
  {
    id: "geo-h341",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 3 feet, and the cylinder has a height of 12 feet. What is the volume of the silo, in cubic feet?",
    choices: [
      "144π",
      "180π",
      "117π",
      "126π"
    ],
    answer: 3,
    explanation: "The cylinder's volume is π(3)²(12) = 108π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(3)³ = 18π. The total is 126π. Adding a full sphere gives 144π."
  },
  {
    id: "geo-h342",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 9 inches is partially filled with water. A solid metal sphere with a radius of 6 inches is placed in the cylinder and is completely submerged, and no water overflows. By how many inches does the water level rise?",
    choices: [
      "8/3",
      "32",
      "256/9",
      "32/9"
    ],
    answer: 3,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(9)²h = (4/3)π(6)³. So 81h = 288 and h = 32/9. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h343",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 1 and DB = 24, what is the length of AC?",
    choices: [
      "10√6",
      "2√6",
      "5",
      "√577"
    ],
    answer: 2,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 1(25) = 25. So AC = 5. The altitude CD would be √(1 · 24) = 2√6, and BC would be √(24 · 25) = 10√6."
  },
  {
    id: "geo-h344",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 26, two parallel chords have lengths 20 and 48. The chords lie on opposite sides of the center of the circle. What is the distance between the two chords?",
    choices: [
      "34",
      "18",
      "14",
      "26"
    ],
    answer: 0,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 20, the distance d satisfies d² + 10² = 26², so d = 24. For the chord of length 48, d² + 24² = 26², so d = 10. Because the chords are on opposite sides of the center, the distance between them is the sum, 34."
  },
  {
    id: "geo-h345",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 15, two parallel chords have lengths 18 and 24. The chords lie on opposite sides of the center of the circle. What is the distance between the two chords?",
    choices: [
      "15",
      "3",
      "21",
      "9"
    ],
    answer: 2,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 18, the distance d satisfies d² + 9² = 15², so d = 12. For the chord of length 24, d² + 12² = 15², so d = 9. Because the chords are on opposite sides of the center, the distance between them is the sum, 21."
  },
  {
    id: "geo-h346",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 10 centimeters is partially filled with water. A solid metal sphere with a radius of 5 centimeters is placed in the cylinder and is completely submerged, and no water overflows. By how many centimeters does the water level rise?",
    choices: [
      "40/3",
      "5/4",
      "5/3",
      "50/3"
    ],
    answer: 2,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(10)²h = (4/3)π(5)³. So 100h = 500/3 and h = 5/3. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h347",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. If AB = 75 and sin(A) = 24/25, what is the length of AC?",
    choices: [
      "3",
      "72",
      "3√1201",
      "21"
    ],
    answer: 3,
    explanation: "sin(A) = BC/AB, so BC = 24/25 · 75 = 72. Then AC = √(75² − 72²) = 21."
  },
  {
    id: "geo-h348",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x − 1)² + (y + 2)² = 13<br><br>The graph of the given equation in the xy-plane is a circle. The point (−1, −5) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(1, −5)",
      "(3, 1)",
      "(−5, −1)",
      "(−1, 2)"
    ],
    answer: 1,
    explanation: "The circle has center (1, −2) and radius √13. The point (−1, −5) is 2 units left of and 3 units below the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (3, 1). Check: (3 − 1)² + (1 − (−2))² = 13. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h349",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 7 and DB = 21, what is the length of AC?",
    choices: [
      "7√3",
      "14",
      "7√10",
      "14√3"
    ],
    answer: 1,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 7(28) = 196. So AC = 14. The altitude CD would be √(7 · 21) = 7√3, and BC would be √(21 · 28) = 14√3."
  },
  {
    id: "geo-h350",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar pyramids have volumes of 384 cubic units and 6 cubic units. The height of the first is 20 units. What is the height of the second, in units?",
    choices: [
      "5/4",
      "80",
      "5",
      "2"
    ],
    answer: 2,
    explanation: "The ratio of volumes is 384:6 = 64:1, so the ratio of corresponding lengths is the cube root, 4:1. The height of the second is 20 · 1/4 = 5. Using the volume ratio directly gives 5/16, and using the square of the length ratio gives 5/4."
  },
  {
    id: "geo-h351",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and sin(x) = 45/53, what is the value of cos(π/2 − x) + sin(π/2 − x)?",
    choices: [
      "90/53",
      "1",
      "73/53",
      "56/53"
    ],
    answer: 2,
    explanation: "cos(π/2 − x) = sin(x) = 45/53, and sin(π/2 − x) = cos(x). Since sin²(x) + cos²(x) = 1 and x is in the first quadrant, cos(x) = 28/53. The sum is 73/53."
  },
  {
    id: "geo-h352",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and sin(x) = 12/13, what is the value of cos(π/2 − x) + sin(π/2 − x)?",
    choices: [
      "17/13",
      "24/13",
      "1",
      "10/13"
    ],
    answer: 0,
    explanation: "cos(π/2 − x) = sin(x) = 12/13, and sin(π/2 − x) = cos(x). Since sin²(x) + cos²(x) = 1 and x is in the first quadrant, cos(x) = 5/13. The sum is 17/13."
  },
  {
    id: "geo-h353",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x + 5)² + (y − 5)² = 100<br><br>The graph of the given equation in the xy-plane is a circle. The point (−13, 11) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(13, −11)",
      "(3, 11)",
      "(−13, 0)",
      "(−11, −2)"
    ],
    answer: 1,
    explanation: "The circle has center (−5, 5) and radius √100. The point (−13, 11) is 8 units left of and 6 units above the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (3, 11). Check: (3 − (−5))² + (11 − 5)² = 100. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h354",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 8 inches is partially filled with water. A solid metal sphere with a radius of 2 inches is placed in the cylinder and is completely submerged, and no water overflows. By how many inches does the water level rise?",
    choices: [
      "1/8",
      "4/3",
      "1/12",
      "1/6"
    ],
    answer: 3,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(8)²h = (4/3)π(2)³. So 64h = 32/3 and h = 1/6. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h355",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x + 5)² + (y + 6)² = 34<br><br>The graph of the given equation in the xy-plane is a circle. The point (−2, −1) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(−2, −11)",
      "(−2, 1)",
      "(2, −1)",
      "(2, 1)"
    ],
    answer: 0,
    explanation: "The circle has center (−5, −6) and radius √34. The point (−2, −1) is 3 units right of and 5 units above the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (−2, −11). Check: (−2 − (−5))² + (−11 − (−6))² = 34. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h356",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 25 and DB = 24, what is the length of AC?",
    choices: [
      "35",
      "√1201",
      "10√6",
      "14√6"
    ],
    answer: 0,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 25(49) = 1225. So AC = 35. The altitude CD would be √(25 · 24) = 10√6, and BC would be √(24 · 49) = 14√6."
  },
  {
    id: "geo-h357",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 9 meters, and the cylinder has a height of 8 meters. What is the volume of the silo, in cubic meters?",
    choices: [
      "1080π",
      "891π",
      "1620π",
      "1134π"
    ],
    answer: 3,
    explanation: "The cylinder's volume is π(9)²(8) = 648π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(9)³ = 486π. The total is 1134π. Adding a full sphere gives 1620π."
  },
  {
    id: "geo-h358",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 10, two parallel chords have lengths 16 and 12. The chords lie on the same side of the center of the circle. What is the distance between the two chords?",
    choices: [
      "10",
      "18",
      "14",
      "2"
    ],
    answer: 3,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 16, the distance d satisfies d² + 8² = 10², so d = 6. For the chord of length 12, d² + 6² = 10², so d = 8. Because the chords are on the same side of the center, the distance between them is the difference, 2."
  },
  {
    id: "geo-h359",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 12. The measure of inscribed angle ACB is 75°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "14π",
      "20π",
      "5π",
      "10π"
    ],
    answer: 3,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(75°) = 150°. The arc length is (150/360)(2π · 12) = 10π. Using 75° as the arc measure gives 5π, half the correct length."
  },
  {
    id: "geo-h360",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are alternate interior angles, with measures (3x + 36)° and (6x − 24)°. What is the measure, in degrees, of the angle with measure (3x + 36)°?",
    choices: [
      "20",
      "84",
      "96",
      "92"
    ],
    answer: 2,
    explanation: "Alternate interior angles formed by parallel lines are congruent, so 3x + 36 = 6x − 24, which gives x = 20. The angle measures 96°. Treating the angles as supplementary gives the wrong value of x."
  },
  {
    id: "geo-h361",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (5x − 14)°, and the measure of angle C is (2x − 2)°. What is the measure, in degrees, of angle A?",
    choices: [
      "28",
      "6",
      "54",
      "126"
    ],
    answer: 3,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (5x − 14) + (2x − 2) = 180. Then 7x − (16) = 180, so x = 28, and angle A measures 5(28) − (14) = 126°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h362",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 5, AE = 11, and AC = 15, what is the length of DB?",
    choices: [
      "33",
      "4",
      "28",
      "20/11"
    ],
    answer: 2,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 5/15 = 11/AB and AB = 33. So DB = 33 − 5 = 28. Treating DE as parallel to BC (matching D with B) gives AB = 75/11, which is incorrect here."
  },
  {
    id: "geo-h363",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are same-side interior angles (consecutive interior angles), with measures (6x + 40)° and (7x + 36)°. What is the measure, in degrees, of the angle with measure (6x + 40)°?",
    choices: [
      "88",
      "64",
      "92",
      "8"
    ],
    answer: 0,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (6x + 40) + (7x + 36) = 180, which gives x = 8. The angle measures 88°. Setting the two expressions equal, as for alternate interior angles, gives the wrong value of x."
  },
  {
    id: "geo-h364",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cones have volumes of 128π cubic units and 250π cubic units. The radius of the first is 20 units. What is the radius of the second, in units?",
    choices: [
      "26",
      "25",
      "16",
      "125/4"
    ],
    answer: 1,
    explanation: "The ratio of volumes is 128:250 = 64:125, so the ratio of corresponding lengths is the cube root, 4:5. The radius of the second is 20 · 5/4 = 25. Using the volume ratio directly gives 625/16, and using the square of the length ratio gives 125/4."
  },
  {
    id: "geo-h365",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x + 6)² + (y + 2)² = 5<br><br>The graph of the given equation in the xy-plane is a circle. The point (−7, −4) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(−7, 1)",
      "(−5, 0)",
      "(−4, −7)",
      "(−7, 4)"
    ],
    answer: 1,
    explanation: "The circle has center (−6, −2) and radius √5. The point (−7, −4) is 1 units left of and 2 units below the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (−5, 0). Check: (−5 − (−6))² + (0 − (−2))² = 5. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h366",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 12 inches is partially filled with water. A solid metal sphere with a radius of 6 inches is placed in the cylinder and is completely submerged, and no water overflows. By how many inches does the water level rise?",
    choices: [
      "24",
      "3/2",
      "16",
      "2"
    ],
    answer: 3,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(12)²h = (4/3)π(6)³. So 144h = 288 and h = 2. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h367",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 9 meters, and the cylinder has a height of 5 meters. What is the volume of the silo, in cubic meters?",
    choices: [
      "675π",
      "891π",
      "648π",
      "1377π"
    ],
    answer: 1,
    explanation: "The cylinder's volume is π(9)²(5) = 405π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(9)³ = 486π. The total is 891π. Adding a full sphere gives 1377π."
  },
  {
    id: "geo-h368",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are same-side interior angles (consecutive interior angles), with measures (4x + 10)° and (7x − 17)°. What is the measure, in degrees, of the angle with measure (4x + 10)°?",
    choices: [
      "102",
      "46",
      "17",
      "78"
    ],
    answer: 3,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (4x + 10) + (7x − 17) = 180, which gives x = 17. The angle measures 78°. Setting the two expressions equal, as for alternate interior angles, gives the wrong value of x."
  },
  {
    id: "geo-h369",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 3, AE = 9, and AC = 5, what is the length of DB?",
    choices: [
      "15",
      "−4",
      "−4/3",
      "12"
    ],
    answer: 3,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 3/5 = 9/AB and AB = 15. So DB = 15 − 3 = 12. Treating DE as parallel to BC (matching D with B) gives AB = 5/3, which is incorrect here."
  },
  {
    id: "geo-h370",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 10, AE = 8, and AC = 15, what is the length of DB?",
    choices: [
      "35/4",
      "7",
      "12",
      "2"
    ],
    answer: 3,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 10/15 = 8/AB and AB = 12. So DB = 12 − 10 = 2. Treating DE as parallel to BC (matching D with B) gives AB = 75/4, which is incorrect here."
  },
  {
    id: "geo-h371",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are same-side interior angles (consecutive interior angles), with measures (4x − 17)° and (3x + 15)°. What is the measure, in degrees, of the angle with measure (4x − 17)°?",
    choices: [
      "87",
      "93",
      "111",
      "26"
    ],
    answer: 0,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (4x − 17) + (3x + 15) = 180, which gives x = 26. The angle measures 87°. Setting the two expressions equal, as for alternate interior angles, gives the wrong value of x."
  },
  {
    id: "geo-h372",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 5. The measure of inscribed angle ACB is 45°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "5π/4",
      "5π/2",
      "15π/2",
      "5π"
    ],
    answer: 1,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(45°) = 90°. The arc length is (90/360)(2π · 5) = 5π/2. Using 45° as the arc measure gives 5π/4, half the correct length."
  },
  {
    id: "geo-h373",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 4 and DB = 21, what is the length of AC?",
    choices: [
      "10",
      "5√21",
      "√457",
      "2√21"
    ],
    answer: 0,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 4(25) = 100. So AC = 10. The altitude CD would be √(4 · 21) = 2√21, and BC would be √(21 · 25) = 5√21."
  },
  {
    id: "geo-h374",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and cos(x) = 45/53, what is the value of sin(π/2 − x) − cos(π/2 − x)?",
    choices: [
      "73/53",
      "−17/53",
      "17/53",
      "0"
    ],
    answer: 2,
    explanation: "sin(π/2 − x) = cos(x) = 45/53, and cos(π/2 − x) = sin(x). Since x is in the first quadrant, sin(x) = √(1 − (45/53)²) = 28/53. The difference is 17/53."
  },
  {
    id: "geo-h375",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle and cos(B) = 9/41. What is the value of tan(A)?",
    choices: [
      "9/40",
      "40/41",
      "40/9",
      "9/41"
    ],
    answer: 0,
    explanation: "cos(B) = BC/AB = 9/41, so BC = 9k and AB = 41k, which gives AC = 40k. Then tan(A) = BC/AC = 9/40."
  },
  {
    id: "geo-h376",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 9 meters, and the cylinder has a height of 20 meters. What is the volume of the silo, in cubic meters?",
    choices: [
      "2106π",
      "1863π",
      "2592π",
      "2700π"
    ],
    answer: 0,
    explanation: "The cylinder's volume is π(9)²(20) = 1620π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(9)³ = 486π. The total is 2106π. Adding a full sphere gives 2592π."
  },
  {
    id: "geo-h377",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are same-side interior angles (consecutive interior angles), with measures (4x + 17)° and (5x + 10)°. What is the measure, in degrees, of the angle with measure (4x + 17)°?",
    choices: [
      "45",
      "85",
      "95",
      "17"
    ],
    answer: 1,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (4x + 17) + (5x + 10) = 180, which gives x = 17. The angle measures 85°. Setting the two expressions equal, as for alternate interior angles, gives the wrong value of x."
  },
  {
    id: "geo-h378",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and cos(x) = 16/65, what is the value of sin(π/2 − x) − cos(π/2 − x)?",
    choices: [
      "79/65",
      "−47/65",
      "0",
      "47/65"
    ],
    answer: 1,
    explanation: "sin(π/2 − x) = cos(x) = 16/65, and cos(π/2 − x) = sin(x). Since x is in the first quadrant, sin(x) = √(1 − (16/65)²) = 63/65. The difference is −47/65."
  },
  {
    id: "geo-h379",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are same-side interior angles (consecutive interior angles), with measures (3x − 16)° and (2x + 11)°. What is the measure, in degrees, of the angle with measure (3x − 16)°?",
    choices: [
      "85",
      "95",
      "65",
      "37"
    ],
    answer: 1,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (3x − 16) + (2x + 11) = 180, which gives x = 37. The angle measures 95°. Setting the two expressions equal, as for alternate interior angles, gives the wrong value of x."
  },
  {
    id: "geo-h380",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (5x − 7)°, and the measure of angle C is (2x + 33)°. What is the measure, in degrees, of angle A?",
    choices: [
      "179/3",
      "77",
      "22",
      "103"
    ],
    answer: 3,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (5x − 7) + (2x + 33) = 180. Then 7x + 26 = 180, so x = 22, and angle A measures 5(22) − (7) = 103°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h381",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 3 feet, and the cylinder has a height of 5 feet. What is the volume of the silo, in cubic feet?",
    choices: [
      "54π",
      "63π",
      "81π",
      "75π"
    ],
    answer: 1,
    explanation: "The cylinder's volume is π(3)²(5) = 45π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(3)³ = 18π. The total is 63π. Adding a full sphere gives 81π."
  },
  {
    id: "geo-h382",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (3x + 13)°, and the measure of angle C is (2x + 37)°. What is the measure, in degrees, of angle A?",
    choices: [
      "26",
      "89",
      "91",
      "85"
    ],
    answer: 2,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (3x + 13) + (2x + 37) = 180. Then 5x + 50 = 180, so x = 26, and angle A measures 3(26) + 13 = 91°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h383",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 3. The measure of inscribed angle ACB is 40°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "8π/3",
      "2π/3",
      "14π/3",
      "4π/3"
    ],
    answer: 3,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(40°) = 80°. The arc length is (80/360)(2π · 3) = 4π/3. Using 40° as the arc measure gives 2π/3, half the correct length."
  },
  {
    id: "geo-h384",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle and sin(A) = 35/37. What is the value of cos(90° − B)?",
    choices: [
      "35/37",
      "35/12",
      "12/37",
      "12/35"
    ],
    answer: 2,
    explanation: "cos(90° − B) = sin(B), and sin(B) = cos(A) because A and B are complementary. With opposite side 35 and hypotenuse 37 for angle A, the adjacent side is √(37² − 35²) = 12, so cos(A) = 12/37."
  },
  {
    id: "geo-h385",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 18. The measure of inscribed angle ACB is 72°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "36π/5",
      "108π/5",
      "144π/5",
      "72π/5"
    ],
    answer: 3,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(72°) = 144°. The arc length is (144/360)(2π · 18) = 72π/5. Using 72° as the arc measure gives 36π/5, half the correct length."
  },
  {
    id: "geo-h386",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 3 meters, and the cylinder has a height of 20 meters. What is the volume of the silo, in cubic meters?",
    choices: [
      "198π",
      "300π",
      "216π",
      "189π"
    ],
    answer: 0,
    explanation: "The cylinder's volume is π(3)²(20) = 180π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(3)³ = 18π. The total is 198π. Adding a full sphere gives 216π."
  },
  {
    id: "geo-h387",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 1 and DB = 8, what is the length of AC?",
    choices: [
      "2√2",
      "3",
      "√65",
      "6√2"
    ],
    answer: 1,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 1(9) = 9. So AC = 3. The altitude CD would be √(1 · 8) = 2√2, and BC would be √(8 · 9) = 6√2."
  },
  {
    id: "geo-h388",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 6 inches is partially filled with water. A solid metal sphere with a radius of 3 inches is placed in the cylinder and is completely submerged, and no water overflows. By how many inches does the water level rise?",
    choices: [
      "3/4",
      "1",
      "6",
      "8"
    ],
    answer: 1,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(6)²h = (4/3)π(3)³. So 36h = 36 and h = 1. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h389",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 10, two parallel chords have lengths 12 and 16. The chords lie on opposite sides of the center of the circle. What is the distance between the two chords?",
    choices: [
      "10",
      "14",
      "2",
      "6"
    ],
    answer: 1,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 12, the distance d satisfies d² + 6² = 10², so d = 8. For the chord of length 16, d² + 8² = 10², so d = 6. Because the chords are on opposite sides of the center, the distance between them is the sum, 14."
  },
  {
    id: "geo-h390",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. If AB = 51 and sin(A) = 8/17, what is the length of AC?",
    choices: [
      "24",
      "45",
      "3√353",
      "27"
    ],
    answer: 1,
    explanation: "sin(A) = BC/AB, so BC = 8/17 · 51 = 24. Then AC = √(51² − 24²) = 45."
  },
  {
    id: "geo-h391",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar rectangular prisms have volumes of 54 cubic units and 250 cubic units. The height of the first is 12 units. What is the height of the second, in units?",
    choices: [
      "20",
      "22",
      "100/3",
      "500/9"
    ],
    answer: 0,
    explanation: "The ratio of volumes is 54:250 = 27:125, so the ratio of corresponding lengths is the cube root, 3:5. The height of the second is 12 · 5/3 = 20. Using the volume ratio directly gives 500/9, and using the square of the length ratio gives 100/3."
  },
  {
    id: "geo-h392",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 4 inches is partially filled with water. A solid metal sphere with a radius of 3 inches is placed in the cylinder and is completely submerged, and no water overflows. By how many inches does the water level rise?",
    choices: [
      "3/4",
      "9/4",
      "18",
      "9"
    ],
    answer: 1,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(4)²h = (4/3)π(3)³. So 16h = 36 and h = 9/4. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h393",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 3, AE = 11, and AC = 21, what is the length of DB?",
    choices: [
      "10",
      "77",
      "74",
      "30/11"
    ],
    answer: 2,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 3/21 = 11/AB and AB = 77. So DB = 77 − 3 = 74. Treating DE as parallel to BC (matching D with B) gives AB = 63/11, which is incorrect here."
  },
  {
    id: "geo-h394",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle and cos(B) = 20/29. What is the value of tan(A)?",
    choices: [
      "20/29",
      "21/29",
      "20/21",
      "21/20"
    ],
    answer: 2,
    explanation: "cos(B) = BC/AB = 20/29, so BC = 20k and AB = 29k, which gives AC = 21k. Then tan(A) = BC/AC = 20/21."
  },
  {
    id: "geo-h395",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle and sin(A) = 60/61. What is the value of cos(90° − B)?",
    choices: [
      "60/11",
      "11/61",
      "11/60",
      "60/61"
    ],
    answer: 1,
    explanation: "cos(90° − B) = sin(B), and sin(B) = cos(A) because A and B are complementary. With opposite side 60 and hypotenuse 61 for angle A, the adjacent side is √(61² − 60²) = 11, so cos(A) = 11/61."
  },
  {
    id: "geo-h396",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 9. The measure of inscribed angle ACB is 60°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "12π",
      "6π",
      "3π",
      "54π"
    ],
    answer: 1,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(60°) = 120°. The arc length is (120/360)(2π · 9) = 6π. Using 60° as the arc measure gives 3π, half the correct length."
  },
  {
    id: "geo-h397",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 6 and DB = 18, what is the length of AC?",
    choices: [
      "12√3",
      "12",
      "6√3",
      "6√10"
    ],
    answer: 1,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 6(24) = 144. So AC = 12. The altitude CD would be √(6 · 18) = 6√3, and BC would be √(18 · 24) = 12√3."
  },
  {
    id: "geo-h398",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 6 feet, and the cylinder has a height of 5 feet. What is the volume of the silo, in cubic feet?",
    choices: [
      "300π",
      "252π",
      "468π",
      "324π"
    ],
    answer: 3,
    explanation: "The cylinder's volume is π(6)²(5) = 180π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(6)³ = 144π. The total is 324π. Adding a full sphere gives 468π."
  },
  {
    id: "geo-h399",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 3 meters, and the cylinder has a height of 5 meters. What is the volume of the silo, in cubic meters?",
    choices: [
      "75π",
      "54π",
      "63π",
      "81π"
    ],
    answer: 2,
    explanation: "The cylinder's volume is π(3)²(5) = 45π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(3)³ = 18π. The total is 63π. Adding a full sphere gives 81π."
  },
  {
    id: "geo-h400",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cones have volumes of 375π cubic units and 24π cubic units. The radius of the first is 20 units. What is the radius of the second, in units?",
    choices: [
      "50",
      "8",
      "16/5",
      "5"
    ],
    answer: 1,
    explanation: "The ratio of volumes is 375:24 = 125:8, so the ratio of corresponding lengths is the cube root, 5:2. The radius of the second is 20 · 2/5 = 8. Using the volume ratio directly gives 32/25, and using the square of the length ratio gives 16/5."
  },
  {
    id: "geo-h401",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 3, AE = 6, and AC = 20, what is the length of DB?",
    choices: [
      "40",
      "14",
      "37",
      "7"
    ],
    answer: 2,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 3/20 = 6/AB and AB = 40. So DB = 40 − 3 = 37. Treating DE as parallel to BC (matching D with B) gives AB = 10, which is incorrect here."
  },
  {
    id: "geo-h402",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 10. The measure of inscribed angle ACB is 50°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "100π/9",
      "50π/9",
      "25π/9",
      "130π/9"
    ],
    answer: 1,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(50°) = 100°. The arc length is (100/360)(2π · 10) = 50π/9. Using 50° as the arc measure gives 25π/9, half the correct length."
  },
  {
    id: "geo-h403",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 10, two parallel chords have lengths 12 and 16. The chords lie on the same side of the center of the circle. What is the distance between the two chords?",
    choices: [
      "2",
      "18",
      "10",
      "14"
    ],
    answer: 0,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 12, the distance d satisfies d² + 6² = 10², so d = 8. For the chord of length 16, d² + 8² = 10², so d = 6. Because the chords are on the same side of the center, the distance between them is the difference, 2."
  },
  {
    id: "geo-h404",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and sin(x) = 16/65, what is the value of cos(π/2 − x) + sin(π/2 − x)?",
    choices: [
      "126/65",
      "32/65",
      "1",
      "79/65"
    ],
    answer: 3,
    explanation: "cos(π/2 − x) = sin(x) = 16/65, and sin(π/2 − x) = cos(x). Since sin²(x) + cos²(x) = 1 and x is in the first quadrant, cos(x) = 63/65. The sum is 79/65."
  },
  {
    id: "geo-h405",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 4. The measure of inscribed angle ACB is 54°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "24π/5",
      "28π/5",
      "6π/5",
      "12π/5"
    ],
    answer: 3,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(54°) = 108°. The arc length is (108/360)(2π · 4) = 12π/5. Using 54° as the arc measure gives 6π/5, half the correct length."
  },
  {
    id: "geo-h406",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 5, two parallel chords have lengths 8 and 6. The chords lie on the same side of the center of the circle. What is the distance between the two chords?",
    choices: [
      "7",
      "1",
      "9",
      "5"
    ],
    answer: 1,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 8, the distance d satisfies d² + 4² = 5², so d = 3. For the chord of length 6, d² + 3² = 5², so d = 4. Because the chords are on the same side of the center, the distance between them is the difference, 1."
  },
  {
    id: "geo-h407",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 4 centimeters is partially filled with water. A solid metal sphere with a radius of 2 centimeters is placed in the cylinder and is completely submerged, and no water overflows. By how many centimeters does the water level rise?",
    choices: [
      "1/2",
      "16/3",
      "2/3",
      "8/3"
    ],
    answer: 2,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(4)²h = (4/3)π(2)³. So 16h = 32/3 and h = 2/3. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h408",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 12. The measure of inscribed angle ACB is 72°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "72π/5",
      "24π/5",
      "96π/5",
      "48π/5"
    ],
    answer: 3,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(72°) = 144°. The arc length is (144/360)(2π · 12) = 48π/5. Using 72° as the arc measure gives 24π/5, half the correct length."
  },
  {
    id: "geo-h409",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and sin(x) = 36/85, what is the value of cos(π/2 − x) + sin(π/2 − x)?",
    choices: [
      "113/85",
      "154/85",
      "1",
      "72/85"
    ],
    answer: 0,
    explanation: "cos(π/2 − x) = sin(x) = 36/85, and sin(π/2 − x) = cos(x). Since sin²(x) + cos²(x) = 1 and x is in the first quadrant, cos(x) = 77/85. The sum is 113/85."
  },
  {
    id: "geo-h410",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cylinders have volumes of 2π cubic units and 250π cubic units. The radius of the first is 5 units. What is the radius of the second, in units?",
    choices: [
      "25",
      "125",
      "625",
      "29"
    ],
    answer: 0,
    explanation: "The ratio of volumes is 2:250 = 1:125, so the ratio of corresponding lengths is the cube root, 1:5. The radius of the second is 5 · 5/1 = 25. Using the volume ratio directly gives 625, and using the square of the length ratio gives 125."
  },
  {
    id: "geo-h411",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and sin(x) = 56/65, what is the value of cos(π/2 − x) + sin(π/2 − x)?",
    choices: [
      "66/65",
      "89/65",
      "112/65",
      "1"
    ],
    answer: 1,
    explanation: "cos(π/2 − x) = sin(x) = 56/65, and sin(π/2 − x) = cos(x). Since sin²(x) + cos²(x) = 1 and x is in the first quadrant, cos(x) = 33/65. The sum is 89/65."
  },
  {
    id: "geo-h412",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar rectangular prisms have volumes of 162 cubic units and 384 cubic units. The height of the first is 18 units. What is the height of the second, in units?",
    choices: [
      "25",
      "128/3",
      "24",
      "32"
    ],
    answer: 2,
    explanation: "The ratio of volumes is 162:384 = 27:64, so the ratio of corresponding lengths is the cube root, 3:4. The height of the second is 18 · 4/3 = 24. Using the volume ratio directly gives 128/3, and using the square of the length ratio gives 32."
  },
  {
    id: "geo-h413",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are same-side interior angles (consecutive interior angles), with measures (5x − 24)° and (3x + 4)°. What is the measure, in degrees, of the angle with measure (5x − 24)°?",
    choices: [
      "25",
      "46",
      "101",
      "79"
    ],
    answer: 2,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (5x − 24) + (3x + 4) = 180, which gives x = 25. The angle measures 101°. Setting the two expressions equal, as for alternate interior angles, gives the wrong value of x."
  },
  {
    id: "geo-h414",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar pyramids have volumes of 162 cubic units and 48 cubic units. The height of the first is 12 units. What is the height of the second, in units?",
    choices: [
      "7",
      "8",
      "16/3",
      "32/9"
    ],
    answer: 1,
    explanation: "The ratio of volumes is 162:48 = 27:8, so the ratio of corresponding lengths is the cube root, 3:2. The height of the second is 12 · 2/3 = 8. Using the volume ratio directly gives 32/9, and using the square of the length ratio gives 16/3."
  },
  {
    id: "geo-h415",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 9 meters, and the cylinder has a height of 6 meters. What is the volume of the silo, in cubic meters?",
    choices: [
      "972π",
      "810π",
      "729π",
      "1458π"
    ],
    answer: 0,
    explanation: "The cylinder's volume is π(9)²(6) = 486π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(9)³ = 486π. The total is 972π. Adding a full sphere gives 1458π."
  },
  {
    id: "geo-h416",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 4 centimeters is partially filled with water. A solid metal sphere with a radius of 3 centimeters is placed in the cylinder and is completely submerged, and no water overflows. By how many centimeters does the water level rise?",
    choices: [
      "9/4",
      "3/4",
      "9",
      "18"
    ],
    answer: 0,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(4)²h = (4/3)π(3)³. So 16h = 36 and h = 9/4. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h417",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and sin(x) = 11/61, what is the value of cos(π/2 − x) + sin(π/2 − x)?",
    choices: [
      "22/61",
      "120/61",
      "1",
      "71/61"
    ],
    answer: 3,
    explanation: "cos(π/2 − x) = sin(x) = 11/61, and sin(π/2 − x) = cos(x). Since sin²(x) + cos²(x) = 1 and x is in the first quadrant, cos(x) = 60/61. The sum is 71/61."
  },
  {
    id: "geo-h418",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 12 inches is partially filled with water. A solid metal sphere with a radius of 3 inches is placed in the cylinder and is completely submerged, and no water overflows. By how many inches does the water level rise?",
    choices: [
      "1/12",
      "3",
      "2",
      "1/4"
    ],
    answer: 3,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(12)²h = (4/3)π(3)³. So 144h = 36 and h = 1/4. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h419",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 9 and DB = 27, what is the length of AC?",
    choices: [
      "18√3",
      "9√3",
      "18",
      "9√10"
    ],
    answer: 2,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 9(36) = 324. So AC = 18. The altitude CD would be √(9 · 27) = 9√3, and BC would be √(27 · 36) = 18√3."
  },
  {
    id: "geo-h420",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 3, AE = 9, and AC = 19, what is the length of DB?",
    choices: [
      "10/3",
      "54",
      "10",
      "57"
    ],
    answer: 1,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 3/19 = 9/AB and AB = 57. So DB = 57 − 3 = 54. Treating DE as parallel to BC (matching D with B) gives AB = 19/3, which is incorrect here."
  },
  {
    id: "geo-h421",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 5 and DB = 15, what is the length of AC?",
    choices: [
      "5√3",
      "5√10",
      "10√3",
      "10"
    ],
    answer: 3,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 5(20) = 100. So AC = 10. The altitude CD would be √(5 · 15) = 5√3, and BC would be √(15 · 20) = 10√3."
  },
  {
    id: "geo-h422",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x − 1)² + y² = 13<br><br>The graph of the given equation in the xy-plane is a circle. The point (−1, −3) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(−1, 3)",
      "(1, 3)",
      "(−1, 4)",
      "(1, −3)"
    ],
    answer: 0,
    explanation: "The circle has center (1, 0) and radius √13. The point (−1, −3) is 2 units left of and 3 units below the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (−1, 3). Check: (−1 − 1)² + (3 − 0)² = 13. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h423",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 3, AE = 9, and AC = 20, what is the length of DB?",
    choices: [
      "57",
      "11",
      "60",
      "11/3"
    ],
    answer: 0,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 3/20 = 9/AB and AB = 60. So DB = 60 − 3 = 57. Treating DE as parallel to BC (matching D with B) gives AB = 20/3, which is incorrect here."
  },
  {
    id: "geo-h424",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and sin(x) = 28/53, what is the value of cos(π/2 − x) + sin(π/2 − x)?",
    choices: [
      "56/53",
      "90/53",
      "73/53",
      "1"
    ],
    answer: 2,
    explanation: "cos(π/2 − x) = sin(x) = 28/53, and sin(π/2 − x) = cos(x). Since sin²(x) + cos²(x) = 1 and x is in the first quadrant, cos(x) = 45/53. The sum is 73/53."
  },
  {
    id: "geo-h425",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are alternate interior angles, with measures (3x + 15)° and (6x − 9)°. What is the measure, in degrees, of the angle with measure (3x + 15)°?",
    choices: [
      "39",
      "73",
      "8",
      "141"
    ],
    answer: 0,
    explanation: "Alternate interior angles formed by parallel lines are congruent, so 3x + 15 = 6x − 9, which gives x = 8. The angle measures 39°. Treating the angles as supplementary gives the wrong value of x."
  },
  {
    id: "geo-h426",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x + 1)² + (y − 4)² = 100<br><br>The graph of the given equation in the xy-plane is a circle. The point (5, −4) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(5, 4)",
      "(−7, 12)",
      "(7, 11)",
      "(−5, 4)"
    ],
    answer: 1,
    explanation: "The circle has center (−1, 4) and radius √100. The point (5, −4) is 6 units right of and 8 units below the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (−7, 12). Check: (−7 − (−1))² + (12 − 4)² = 100. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h427",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (4x + 37)°, and the measure of angle C is (3x + 38)°. What is the measure, in degrees, of angle A?",
    choices: [
      "41",
      "97",
      "83",
      "15"
    ],
    answer: 1,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (4x + 37) + (3x + 38) = 180. Then 7x + 75 = 180, so x = 15, and angle A measures 4(15) + 37 = 97°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h428",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. If AB = 85 and sin(A) = 36/85, what is the length of AC?",
    choices: [
      "√8521",
      "36",
      "49",
      "77"
    ],
    answer: 3,
    explanation: "sin(A) = BC/AB, so BC = 36/85 · 85 = 36. Then AC = √(85² − 36²) = 77."
  },
  {
    id: "geo-h429",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and cos(x) = 40/41, what is the value of sin(π/2 − x) − cos(π/2 − x)?",
    choices: [
      "−31/41",
      "49/41",
      "0",
      "31/41"
    ],
    answer: 3,
    explanation: "sin(π/2 − x) = cos(x) = 40/41, and cos(π/2 − x) = sin(x). Since x is in the first quadrant, sin(x) = √(1 − (40/41)²) = 9/41. The difference is 31/41."
  },
  {
    id: "geo-h430",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar pyramids have volumes of 750 cubic units and 48 cubic units. The height of the first is 20 units. What is the height of the second, in units?",
    choices: [
      "16/5",
      "5",
      "50",
      "8"
    ],
    answer: 3,
    explanation: "The ratio of volumes is 750:48 = 125:8, so the ratio of corresponding lengths is the cube root, 5:2. The height of the second is 20 · 2/5 = 8. Using the volume ratio directly gives 32/25, and using the square of the length ratio gives 16/5."
  },
  {
    id: "geo-h431",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (3x + 31)°, and the measure of angle C is (5x + 37)°. What is the measure, in degrees, of angle A?",
    choices: [
      "14",
      "107",
      "22",
      "73"
    ],
    answer: 3,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (3x + 31) + (5x + 37) = 180. Then 8x + 68 = 180, so x = 14, and angle A measures 3(14) + 31 = 73°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h432",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x + 1)² + y² = 100<br><br>The graph of the given equation in the xy-plane is a circle. The point (7, 6) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(6, 7)",
      "(5, 6)",
      "(−7, 9)",
      "(−9, 6)"
    ],
    answer: 3,
    explanation: "The circle has center (−1, 0) and radius √100. The point (7, 6) is 8 units right of and 6 units above the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (−9, 6). Check: (−9 − (−1))² + (6 − 0)² = 100. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h433",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 3 feet, and the cylinder has a height of 6 feet. What is the volume of the silo, in cubic feet?",
    choices: [
      "54π",
      "63π",
      "90π",
      "72π"
    ],
    answer: 3,
    explanation: "The cylinder's volume is π(3)²(6) = 54π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(3)³ = 18π. The total is 72π. Adding a full sphere gives 90π."
  },
  {
    id: "geo-h434",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 12 centimeters is partially filled with water. A solid metal sphere with a radius of 6 centimeters is placed in the cylinder and is completely submerged, and no water overflows. By how many centimeters does the water level rise?",
    choices: [
      "24",
      "3/2",
      "2",
      "16"
    ],
    answer: 2,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(12)²h = (4/3)π(6)³. So 144h = 288 and h = 2. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h435",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A grain silo is shaped like a right circular cylinder with a hemisphere on top. The cylinder and the hemisphere both have a radius of 3 meters, and the cylinder has a height of 8 meters. What is the volume of the silo, in cubic meters?",
    choices: [
      "81π",
      "90π",
      "120π",
      "108π"
    ],
    answer: 1,
    explanation: "The cylinder's volume is π(3)²(8) = 72π. A hemisphere is half a sphere, so its volume is (1/2)(4/3)π(3)³ = 18π. The total is 90π. Adding a full sphere gives 108π."
  },
  {
    id: "geo-h436",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. If AB = 195 and sin(A) = 56/65, what is the length of AC?",
    choices: [
      "99",
      "3√7361",
      "168",
      "27"
    ],
    answer: 0,
    explanation: "sin(A) = BC/AB, so BC = 56/65 · 195 = 168. Then AC = √(195² − 168²) = 99."
  },
  {
    id: "geo-h437",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 2 and DB = 6, what is the length of AC?",
    choices: [
      "2√3",
      "4√3",
      "4",
      "2√10"
    ],
    answer: 2,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 2(8) = 16. So AC = 4. The altitude CD would be √(2 · 6) = 2√3, and BC would be √(6 · 8) = 4√3."
  },
  {
    id: "geo-h438",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: 3,
    prompt: "In triangle ABC, point D lies on side AB and point E lies on side AC. Angle ADE is congruent to angle ACB. If AD = 12, AE = 7, and AC = 24, what is the length of DB?",
    choices: [
      "2",
      "204/7",
      "17",
      "14"
    ],
    answer: 0,
    explanation: "Triangles ADE and ACB share angle A, and angle ADE ≅ angle ACB, so triangle ADE is similar to triangle ACB, with D corresponding to C and E corresponding to B. Then AD/AC = AE/AB, so 12/24 = 7/AB and AB = 14. So DB = 14 − 12 = 2. Treating DE as parallel to BC (matching D with B) gives AB = 288/7, which is incorrect here."
  },
  {
    id: "geo-h439",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 29, two parallel chords have lengths 42 and 40. The chords lie on the same side of the center of the circle. What is the distance between the two chords?",
    choices: [
      "1",
      "29",
      "41",
      "57"
    ],
    answer: 0,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 42, the distance d satisfies d² + 21² = 29², so d = 20. For the chord of length 40, d² + 20² = 29², so d = 21. Because the chords are on the same side of the center, the distance between them is the difference, 1."
  },
  {
    id: "geo-h440",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are same-side interior angles (consecutive interior angles), with measures (4x + 2)° and (7x + 2)°. What is the measure, in degrees, of the angle with measure (4x + 2)°?",
    choices: [
      "2",
      "114",
      "66",
      "16"
    ],
    answer: 2,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (4x + 2) + (7x + 2) = 180, which gives x = 16. The angle measures 66°. Setting the two expressions equal, as for alternate interior angles, gives the wrong value of x."
  },
  {
    id: "geo-h441",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are alternate interior angles, with measures (5x + 31)° and (6x + 28)°. What is the measure, in degrees, of the angle with measure (5x + 31)°?",
    choices: [
      "46",
      "134",
      "86",
      "3"
    ],
    answer: 0,
    explanation: "Alternate interior angles formed by parallel lines are congruent, so 5x + 31 = 6x + 28, which gives x = 3. The angle measures 46°. Treating the angles as supplementary gives the wrong value of x."
  },
  {
    id: "geo-h442",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 26, two parallel chords have lengths 20 and 48. The chords lie on the same side of the center of the circle. What is the distance between the two chords?",
    choices: [
      "34",
      "26",
      "14",
      "38"
    ],
    answer: 2,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 20, the distance d satisfies d² + 10² = 26², so d = 24. For the chord of length 48, d² + 24² = 26², so d = 10. Because the chords are on the same side of the center, the distance between them is the difference, 14."
  },
  {
    id: "geo-h443",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are same-side interior angles (consecutive interior angles), with measures (2x + 15)° and (3x + 15)°. What is the measure, in degrees, of the angle with measure (2x + 15)°?",
    choices: [
      "75",
      "15",
      "105",
      "30"
    ],
    answer: 0,
    explanation: "Same-side interior angles formed by parallel lines are supplementary, so (2x + 15) + (3x + 15) = 180, which gives x = 30. The angle measures 75°. Setting the two expressions equal, as for alternate interior angles, gives the wrong value of x."
  },
  {
    id: "geo-h444",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are alternate interior angles, with measures (5x − 16)° and (2x + 14)°. What is the measure, in degrees, of the angle with measure (5x − 16)°?",
    choices: [
      "10",
      "146",
      "34",
      "114"
    ],
    answer: 2,
    explanation: "Alternate interior angles formed by parallel lines are congruent, so 5x − 16 = 2x + 14, which gives x = 10. The angle measures 34°. Treating the angles as supplementary gives the wrong value of x."
  },
  {
    id: "geo-h445",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (3x + 11)°, and the measure of angle C is (6x − 2)°. What is the measure, in degrees, of angle A?",
    choices: [
      "24",
      "68",
      "112",
      "19"
    ],
    answer: 1,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (3x + 11) + (6x − 2) = 180. Then 9x + 9 = 180, so x = 19, and angle A measures 3(19) + 11 = 68°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h446",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 85, two parallel chords have lengths 168 and 154. The chords lie on the same side of the center of the circle. What is the distance between the two chords?",
    choices: [
      "23",
      "49",
      "7",
      "161"
    ],
    answer: 0,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 168, the distance d satisfies d² + 84² = 85², so d = 13. For the chord of length 154, d² + 77² = 85², so d = 36. Because the chords are on the same side of the center, the distance between them is the difference, 23."
  },
  {
    id: "geo-h447",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar rectangular prisms have volumes of 162 cubic units and 6 cubic units. The height of the first is 9 units. What is the height of the second, in units?",
    choices: [
      "27",
      "1/3",
      "1",
      "3"
    ],
    answer: 3,
    explanation: "The ratio of volumes is 162:6 = 27:1, so the ratio of corresponding lengths is the cube root, 3:1. The height of the second is 9 · 1/3 = 3. Using the volume ratio directly gives 1/3, and using the square of the length ratio gives 1."
  },
  {
    id: "geo-h448",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 10, two parallel chords have lengths 16 and 12. The chords lie on opposite sides of the center of the circle. What is the distance between the two chords?",
    choices: [
      "6",
      "10",
      "14",
      "2"
    ],
    answer: 2,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 16, the distance d satisfies d² + 8² = 10², so d = 6. For the chord of length 12, d² + 6² = 10², so d = 8. Because the chords are on opposite sides of the center, the distance between them is the sum, 14."
  },
  {
    id: "geo-h449",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 4. The measure of inscribed angle ACB is 40°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "16π/9",
      "56π/9",
      "8π/9",
      "32π/9"
    ],
    answer: 0,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(40°) = 80°. The arc length is (80/360)(2π · 4) = 16π/9. Using 40° as the arc measure gives 8π/9, half the correct length."
  },
  {
    id: "geo-h450",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Lines and angles",
    difficulty: 3,
    prompt: "Lines ℓ and m are parallel and are intersected by transversal t. Two of the angles formed are corresponding angles, with measures (4x − 19)° and (3x − 4)°. What is the measure, in degrees, of the angle with measure (4x − 19)°?",
    choices: [
      "97",
      "41",
      "139",
      "15"
    ],
    answer: 1,
    explanation: "Corresponding angles formed by parallel lines are congruent, so 4x − 19 = 3x − 4, which gives x = 15. The angle measures 41°. Treating the angles as supplementary gives the wrong value of x."
  },
  {
    id: "geo-h451",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar rectangular prisms have volumes of 24 cubic units and 81 cubic units. The height of the first is 4 units. What is the height of the second, in units?",
    choices: [
      "7",
      "27/2",
      "9",
      "6"
    ],
    answer: 3,
    explanation: "The ratio of volumes is 24:81 = 8:27, so the ratio of corresponding lengths is the cube root, 2:3. The height of the second is 4 · 3/2 = 6. Using the volume ratio directly gives 27/2, and using the square of the length ratio gives 9."
  },
  {
    id: "geo-h452",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle and sin(A) = 80/89. What is the value of cos(90° − B)?",
    choices: [
      "39/80",
      "39/89",
      "80/39",
      "80/89"
    ],
    answer: 1,
    explanation: "cos(90° − B) = sin(B), and sin(B) = cos(A) because A and B are complementary. With opposite side 80 and hypotenuse 89 for angle A, the adjacent side is √(89² − 80²) = 39, so cos(A) = 39/89."
  },
  {
    id: "geo-h453",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle and sin(A) = 12/13. What is the value of cos(90° − B)?",
    choices: [
      "5/13",
      "12/5",
      "12/13",
      "5/12"
    ],
    answer: 0,
    explanation: "cos(90° − B) = sin(B), and sin(B) = cos(A) because A and B are complementary. With opposite side 12 and hypotenuse 13 for angle A, the adjacent side is √(13² − 12²) = 5, so cos(A) = 5/13."
  },
  {
    id: "geo-h454",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "Two similar cylinders have volumes of 216π cubic units and 1000π cubic units. The radius of the first is 12 units. What is the radius of the second, in units?",
    choices: [
      "500/9",
      "22",
      "100/3",
      "20"
    ],
    answer: 3,
    explanation: "The ratio of volumes is 216:1000 = 27:125, so the ratio of corresponding lengths is the cube root, 3:5. The radius of the second is 12 · 5/3 = 20. Using the volume ratio directly gives 500/9, and using the square of the length ratio gives 100/3."
  },
  {
    id: "geo-h455",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 3 and DB = 24, what is the length of AC?",
    choices: [
      "9",
      "6√2",
      "18√2",
      "3√65"
    ],
    answer: 0,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 3(27) = 81. So AC = 9. The altitude CD would be √(3 · 24) = 6√2, and BC would be √(24 · 27) = 18√2."
  },
  {
    id: "geo-h456",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and sin(x) = 24/25, what is the value of cos(π/2 − x) + sin(π/2 − x)?",
    choices: [
      "48/25",
      "14/25",
      "31/25",
      "1"
    ],
    answer: 2,
    explanation: "cos(π/2 − x) = sin(x) = 24/25, and sin(π/2 − x) = cos(x). Since sin²(x) + cos²(x) = 1 and x is in the first quadrant, cos(x) = 7/25. The sum is 31/25."
  },
  {
    id: "geo-h457",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 10 inches is partially filled with water. A solid metal sphere with a radius of 5 inches is placed in the cylinder and is completely submerged, and no water overflows. By how many inches does the water level rise?",
    choices: [
      "5/3",
      "40/3",
      "50/3",
      "5/4"
    ],
    answer: 0,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(10)²h = (4/3)π(5)³. So 100h = 500/3 and h = 5/3. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h458",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 18 and DB = 14, what is the length of AC?",
    choices: [
      "24",
      "2√130",
      "8√7",
      "6√7"
    ],
    answer: 0,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 18(32) = 576. So AC = 24. The altitude CD would be √(18 · 14) = 6√7, and BC would be √(14 · 32) = 8√7."
  },
  {
    id: "geo-h459",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 9 inches is partially filled with water. A solid metal sphere with a radius of 3 inches is placed in the cylinder and is completely submerged, and no water overflows. By how many inches does the water level rise?",
    choices: [
      "4/9",
      "4",
      "32/9",
      "1/3"
    ],
    answer: 0,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(9)²h = (4/3)π(3)³. So 81h = 36 and h = 4/9. Using the sphere's diameter in the volume formula multiplies the result by 8."
  },
  {
    id: "geo-h460",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (6x + 20)°, and the measure of angle C is (2x + 16)°. What is the measure, in degrees, of angle A?",
    choices: [
      "52",
      "14",
      "18",
      "128"
    ],
    answer: 3,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (6x + 20) + (2x + 16) = 180. Then 8x + 36 = 180, so x = 18, and angle A measures 6(18) + 20 = 128°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h461",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (4x + 21)°, and the measure of angle C is (3x + 26)°. What is the measure, in degrees, of angle A?",
    choices: [
      "83",
      "19",
      "97",
      "41"
    ],
    answer: 2,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (4x + 21) + (3x + 26) = 180. Then 7x + 47 = 180, so x = 19, and angle A measures 4(19) + 21 = 97°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h462",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Points A, B, and C lie on a circle with radius 12. The measure of inscribed angle ACB is 45°. What is the length of minor arc AB? (Point C does not lie on minor arc AB.)",
    choices: [
      "12π",
      "18π",
      "6π",
      "3π"
    ],
    answer: 2,
    explanation: "An inscribed angle measures half of its intercepted arc, so arc AB measures 2(45°) = 90°. The arc length is (90/360)(2π · 12) = 6π. Using 45° as the arc measure gives 3π, half the correct length."
  },
  {
    id: "geo-h463",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. If AB = 111 and sin(A) = 12/37, what is the length of AC?",
    choices: [
      "75",
      "3√1513",
      "36",
      "105"
    ],
    answer: 3,
    explanation: "sin(A) = BC/AB, so BC = 12/37 · 111 = 36. Then AC = √(111² − 36²) = 105."
  },
  {
    id: "geo-h464",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (2x − 3)°, and the measure of angle C is (5x − 13)°. What is the measure, in degrees, of angle A?",
    choices: [
      "53",
      "28",
      "11/3",
      "127"
    ],
    answer: 0,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (2x − 3) + (5x − 13) = 180. Then 7x − (16) = 180, so x = 28, and angle A measures 2(28) − (3) = 53°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h465",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (3x + 31)°, and the measure of angle C is (6x + 32)°. What is the measure, in degrees, of angle A?",
    choices: [
      "13",
      "110",
      "70",
      "30"
    ],
    answer: 2,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (3x + 31) + (6x + 32) = 180. Then 9x + 63 = 180, so x = 13, and angle A measures 3(13) + 31 = 70°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h466",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "In a circle with radius 65, two parallel chords have lengths 50 and 66. The chords lie on opposite sides of the center of the circle. What is the distance between the two chords?",
    choices: [
      "8",
      "58",
      "4",
      "116"
    ],
    answer: 3,
    explanation: "The perpendicular from the center bisects each chord. For the chord of length 50, the distance d satisfies d² + 25² = 65², so d = 60. For the chord of length 66, d² + 33² = 65², so d = 56. Because the chords are on opposite sides of the center, the distance between them is the sum, 116."
  },
  {
    id: "geo-h467",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "(x + 2)² + (y + 2)² = 25<br><br>The graph of the given equation in the xy-plane is a circle. The point (−6, 1) lies on the circle. Which of the following points also lies on the circle?",
    choices: [
      "(−6, −4)",
      "(6, 1)",
      "(−5, −5)",
      "(2, −5)"
    ],
    answer: 3,
    explanation: "The circle has center (−2, −2) and radius √25. The point (−6, 1) is 4 units left of and 3 units above the center. Reflecting it across a horizontal or vertical line through the center keeps it the same distance from the center, which gives (2, −5). Check: (2 − (−2))² + (−5 − (−2))² = 25. Reflecting across an axis instead of the center lines generally gives a point that is not on the circle."
  },
  {
    id: "geo-h468",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and cos(x) = 3/5, what is the value of sin(π/2 − x) − cos(π/2 − x)?",
    choices: [
      "1/5",
      "7/5",
      "−1/5",
      "0"
    ],
    answer: 2,
    explanation: "sin(π/2 − x) = cos(x) = 3/5, and cos(π/2 − x) = sin(x). Since x is in the first quadrant, sin(x) = √(1 − (3/5)²) = 4/5. The difference is −1/5."
  },
  {
    id: "geo-h469",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangle trigonometry",
    difficulty: 3,
    prompt: "If 0 &lt; x &lt; π/2 and cos(x) = 65/97, what is the value of sin(π/2 − x) − cos(π/2 − x)?",
    choices: [
      "137/97",
      "0",
      "7/97",
      "−7/97"
    ],
    answer: 3,
    explanation: "sin(π/2 − x) = cos(x) = 65/97, and cos(π/2 − x) = sin(x). Since x is in the first quadrant, sin(x) = √(1 − (65/97)²) = 72/97. The difference is −7/97."
  },
  {
    id: "geo-h470",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: 3,
    prompt: "Quadrilateral ABCD is inscribed in a circle. The measure of angle A is (5x + 27)°, and the measure of angle C is (3x + 25)°. What is the measure, in degrees, of angle A?",
    choices: [
      "16",
      "107",
      "22",
      "73"
    ],
    answer: 1,
    explanation: "Opposite angles of a quadrilateral inscribed in a circle are supplementary, so (5x + 27) + (3x + 25) = 180. Then 8x + 52 = 180, so x = 16, and angle A measures 5(16) + 27 = 107°. Opposite angles are not congruent in general."
  },
  {
    id: "geo-h471",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: 3,
    prompt: "In right triangle ABC, angle C is a right angle. Point D lies on hypotenuse AB so that CD is perpendicular to AB. If AD = 8 and DB = 10, what is the length of AC?",
    choices: [
      "2√41",
      "12",
      "6√5",
      "4√5"
    ],
    answer: 1,
    explanation: "Triangles ACD and ABC are similar, so AD/AC = AC/AB, which gives AC² = AD · AB = 8(18) = 144. So AC = 12. The altitude CD would be √(8 · 10) = 4√5, and BC would be √(10 · 18) = 6√5."
  },
  {
    id: "geo-h472",
    module: "math",
    domain: "Geometry and Trigonometry",
    skill: "Area and volume",
    difficulty: 3,
    prompt: "A right circular cylinder with a radius of 8 centimeters is partially filled with water. A solid metal sphere with a radius of 4 centimeters is placed in the cylinder and is completely submerged, and no water overflows. By how many centimeters does the water level rise?",
    choices: [
      "32/3",
      "1",
      "4/3",
      "1/3"
    ],
    answer: 2,
    explanation: "The rise in water level h makes a cylinder of water whose volume equals the sphere's volume: π(8)²h = (4/3)π(4)³. So 64h = 256/3 and h = 4/3. Using the sphere's diameter in the volume formula multiplies the result by 8."
  }
);
