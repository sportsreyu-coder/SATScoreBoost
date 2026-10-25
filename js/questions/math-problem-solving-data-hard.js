// Math — Problem-Solving and Data Analysis (Hard tier)
// Multi-step, top-of-scale SAT-style questions. All content is original.

QUESTIONS.push(
  {
    id: "psd-h1",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number p is 60% of the number r, and r is 10% greater than the number s. If s is positive, p is what percent of s?",
    choices: [
      "70%",
      "6%",
      "54%",
      "66%"
    ],
    answer: 3,
    explanation: "r = 1.1s and p = 0.6r, so p = 0.6(1.1s) = 0.66s. So p is 66% of s. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h2",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 15%. A sales tax of 8% is then applied to the discounted price, and the final amount paid is $716.04. What was the original price of the jacket?",
    choices: [
      "$769.94",
      "$757.57",
      "$780.00",
      "$842.40"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.85P, and after tax the amount is 1.08(0.85P) = 0.918P. Setting this equal to 716.04 gives P = 716.04/0.918 = 780.00. Undoing the percents by reversing them as additions (e.g., adding back 15%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h3",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 17 numbers is 64. When one number is removed from the data set, the mean of the remaining numbers is 60. What number was removed?",
    choices: [
      "4",
      "128",
      "960",
      "145"
    ],
    answer: 1,
    explanation: "The original sum is 17(64) = 1088. The remaining 16 numbers sum to 16(60) = 960. The removed number is 1088 − 960 = 128."
  },
  {
    id: "psd-h4",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 16 students in section A had a mean test score of 75, and the students in section B had a mean test score of 90. The mean score of all the students in both sections combined was 80. How many students are in section B?",
    choices: [
      "8",
      "16",
      "9",
      "24"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 16(75) + 90b, and it also equals 80(16 + b). So 1200 + 90b = 1280 + 80b, which gives 10b = 80 and b = 8."
  },
  {
    id: "psd-h5",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>4</td><td>6</td></tr><tr><td>5</td><td>6</td></tr><tr><td>6</td><td>8</td></tr><tr><td>7</td><td>1</td></tr><tr><td>8</td><td>2</td></tr></tbody></table>The frequency table summarizes a data set of 23 values. What is the median of the data set?",
    choices: [
      "6",
      "5.43",
      "7",
      "5"
    ],
    answer: 3,
    explanation: "There are 23 values, so the median is the 12th value when ordered. Counting up the cumulative frequencies (6, 12, 20, 21, 23), that position falls at the value 5. Note the median is not the middle row of the table (6) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h6",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Morning</th><th>Afternoon</th><th>Evening</th><th>Total</th></tr></thead><tbody><tr><td>Rated positive</td><td>8</td><td>30</td><td>43</td><td>81</td></tr><tr><td>Rated negative</td><td>60</td><td>9</td><td>12</td><td>81</td></tr><tr><td>Total</td><td>68</td><td>39</td><td>55</td><td>162</td></tr></tbody></table>The table summarizes 162 customer visits recorded at a clinic. A visit will be selected at random from those in the \"Rated positive\" category. What is the probability that the visit is in the \"Evening\" category?",
    choices: [
      "43/55",
      "43/162",
      "43/81",
      "1/2"
    ],
    answer: 2,
    explanation: "Only the 81 visits in the \"Rated positive\" row are eligible. Of these, 43 are in the \"Evening\" column, so the probability is 43/81."
  },
  {
    id: "psd-h7",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A contractor charges $2.00 per square foot to refinish a floor. A rectangular floor has an area of 260 square yards. What is the total charge, in dollars, to refinish the floor? (1 yard = 3 feet)",
    choices: [
      "$1,560.00",
      "$4,680.00",
      "$520.00",
      "$57.778"
    ],
    answer: 1,
    explanation: "One square yard is 3 ft × 3 ft = 9 square feet, so 260 square yards = 2340 square feet. The charge is 2340 × $2.00 = $4,680.00. Multiplying by 3 instead of 9 is a common error."
  },
  {
    id: "psd-h8",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working together at constant rates, pipes A and B can fill the tank in 5/3 hours. Working alone, pipe A can fill the tank in 10 hours. How many hours would it take pipe B, working alone, to fill the tank?",
    choices: [
      "2",
      "25/3",
      "10/3",
      "12"
    ],
    answer: 0,
    explanation: "The combined rate is 1/(5/3) = 3/5 of the job per hour. Subtracting A's rate: 3/5 − 1/10 = 1/2. So B alone takes 2 hours."
  },
  {
    id: "psd-h9",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 400 employees of a large company and found that 74% of those in the sample support a proposed park. The associated margin of error is 3 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 74% of all employees of the company support a proposed park.",
      "Between 71% and 77% of the people in the sample support a proposed park.",
      "It is plausible that between 71% and 77% of all residents of the state support a proposed park.",
      "It is plausible that between 71% and 77% of all employees of the company support a proposed park."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 74% ± 3%, or 71% to 77%, and the conclusion applies only to the population sampled (employees of the company). The sample percent itself is known exactly (74%), so a range for the sample is wrong, and \"exactly 74%\" ignores sampling variability."
  },
  {
    id: "psd-h10",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 200 adults in a large city. The participants were randomly assigned to either use a daily stretching routine or not. After eight weeks, those who used a daily stretching routine had significantly better reported back pain than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a daily stretching routine causes improved reported back pain for participants like those in the study, but the result may not generalize to all adults in the city.",
      "Among adults in the city, use of a daily stretching routine is associated with improved reported back pain, but a cause-and-effect relationship cannot be concluded.",
      "Using a daily stretching routine causes improved reported back pain for adults in the city.",
      "Among the participants in the study, use of a daily stretching routine is associated with improved reported back pain, but neither causation nor a generalization to all adults in the city is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used a random sample, so generalizing to all adults in the city is justified. Random assignment to treatments lets you conclude cause and effect; participants were randomly assigned, so a causal conclusion is justified."
  },
  {
    id: "psd-h11",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the hours studied, and y, the test score, for a set of observations. A line of best fit for the data is y = 4x − 4. One observation has an x-value of 23 and a y-value of 84. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "4",
      "−4",
      "84",
      "88"
    ],
    answer: 1,
    explanation: "The predicted value is 4(23) − 4 = 88. The residual is actual − predicted = 84 − 88 = −4. A negative residual means the point lies below the line."
  },
  {
    id: "psd-h12",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "There are 190 trees in a park, each of which is oak, maple, or pine. The ratio of oak to maple is 3 : 7, and the ratio of maple to pine is 1 : 4. How many are pine?",
    choices: [
      "140",
      "54",
      "15",
      "35"
    ],
    answer: 0,
    explanation: "Combine the ratios by matching the maple parts: oak : maple : pine = 3 : 7 : 28. These parts add to 38, so each part is 190/38 = 5. The number of pine is 28 × 5 = 140."
  },
  {
    id: "psd-h13",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A box contains 7 defective batteries and 4 working batteries. Two batteries are selected at random without replacement. What is the probability that at least one of them is defective?",
    choices: [
      "6/55",
      "21/55",
      "7/11",
      "49/55"
    ],
    answer: 3,
    explanation: "Use the complement. The probability that neither is defective is (4/11)(3/10) = 6/55. So the probability of at least one defective is 1 − 6/55 = 49/55."
  },
  {
    id: "psd-h14",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of an item increased by 300%. By what percent must the new price decrease to return the item to its original price?",
    choices: [
      "300%",
      "150%",
      "75%",
      "80%"
    ],
    answer: 2,
    explanation: "If the original price is P, the new price is 4P. To return to P, the new price must be multiplied by 1/4 = 0.25, a decrease of 75%. The decrease is smaller than 300% because it is taken from a larger base."
  },
  {
    id: "psd-h15",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 17,000 fish in a lake. In a random sample of 200 of them, 96 are trout, and 75% of those 96 also are longer than 30 centimeters. Based on the sample, which of the following is the best estimate of the number of fish in the lake that are trout longer than 30 centimeters?",
    choices: [
      "8160",
      "6120",
      "12750",
      "72"
    ],
    answer: 1,
    explanation: "In the sample, 96 of 200 are trout, and 75% of those meet the second condition, so 96 × 0.75 = 72 of the 200 sampled meet both conditions. That is a proportion of 0.36. Applying it to the population: 17,000 × 72/200 = 6,120."
  },
  {
    id: "psd-h16",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 12 values between 20 and 40. A new value of 107 is added to the data set. Which of the following best describes how the mean and the median change?",
    choices: [
      "The mean increases substantially more than the median does.",
      "The median increases substantially more than the mean does.",
      "The mean and the median increase by the same amount.",
      "Neither the mean nor the median changes."
    ],
    answer: 0,
    explanation: "The value 107 is far above all the other values. The mean uses every value's size, so it is pulled strongly upward. The median depends only on the middle position, which moves by at most half a position, and the middle values are all between 20 and 40. So the median changes very little."
  },
  {
    id: "psd-h17",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number x is 125% of the number y, and y is 40% less than the number z. If z is positive, x is what percent of z?",
    choices: [
      "85%",
      "50%",
      "175%",
      "75%"
    ],
    answer: 3,
    explanation: "y = 0.6z and x = 1.25y, so x = 1.25(0.6z) = 0.75z. So x is 75% of z. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h18",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 10%. A sales tax of 6% is then applied to the discounted price, and the final amount paid is $634.41. What was the original price of the jacket?",
    choices: [
      "$660.84",
      "$655.98",
      "$665.00",
      "$704.90"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.9P, and after tax the amount is 1.06(0.9P) = 0.954P. Setting this equal to 634.41 gives P = 634.41/0.954 = 665.00. Undoing the percents by reversing them as additions (e.g., adding back 10%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h19",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 19 numbers is 52. When one number is removed from the data set, the mean of the remaining numbers is 53.5. What number was removed?",
    choices: [
      "3",
      "25",
      "963",
      "44"
    ],
    answer: 1,
    explanation: "The original sum is 19(52) = 988. The remaining 18 numbers sum to 18(53.5) = 963. The removed number is 988 − 963 = 25."
  },
  {
    id: "psd-h20",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 8 students in section A had a mean test score of 80, and the students in section B had a mean test score of 62. The mean score of all the students in both sections combined was 70. How many students are in section B?",
    choices: [
      "10",
      "8",
      "12",
      "18"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 8(80) + 62b, and it also equals 70(8 + b). So 640 + 62b = 560 + 70b, which gives −8b = −80 and b = 10."
  },
  {
    id: "psd-h21",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>5</td><td>3</td></tr><tr><td>8</td><td>6</td></tr><tr><td>11</td><td>6</td></tr><tr><td>14</td><td>4</td></tr><tr><td>17</td><td>6</td></tr></tbody></table>The frequency table summarizes a data set of 25 values. What is the median of the data set?",
    choices: [
      "11.48",
      "8",
      "12",
      "11"
    ],
    answer: 3,
    explanation: "There are 25 values, so the median is the 13th value when ordered. Counting up the cumulative frequencies (3, 9, 15, 19, 25), that position falls at the value 11. Note the median is not the middle row of the table (11) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h22",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Under 30</th><th>30 to 49</th><th>50 and older</th><th>Total</th></tr></thead><tbody><tr><td>Prefers streaming</td><td>43</td><td>14</td><td>43</td><td>100</td></tr><tr><td>Prefers cable</td><td>26</td><td>15</td><td>11</td><td>52</td></tr><tr><td>Total</td><td>69</td><td>29</td><td>54</td><td>152</td></tr></tbody></table>The table summarizes 152 respondents to a media survey. If one respondent in the \"50 and older\" category is selected at random, what is the probability that the respondent is in the \"Prefers cable\" category?",
    choices: [
      "11/52",
      "11/152",
      "11/54",
      "27/76"
    ],
    answer: 2,
    explanation: "The selection is restricted to the 54 respondents in the \"50 and older\" column. Of these, 11 are in the \"Prefers cable\" row, so the probability is 11/54."
  },
  {
    id: "psd-h23",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "An object travels at a constant speed of 35 meters per second. What is this speed in kilometers per hour?",
    choices: [
      "4728779608739021/2251799813685248",
      "126",
      "126000",
      "175/18"
    ],
    answer: 1,
    explanation: "In one hour there are 3,600 seconds, so the object travels 35 × 3,600 = 126,000 meters per hour. Since 1 kilometer = 1,000 meters, that is 126,000/1,000 = 126 kilometers per hour."
  },
  {
    id: "psd-h24",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working together at constant rates, pipes A and B can fill the tank in 40/9 hours. Working alone, pipe A can fill the tank in 10 hours. How many hours would it take pipe B, working alone, to fill the tank?",
    choices: [
      "8",
      "50/9",
      "80/9",
      "18"
    ],
    answer: 0,
    explanation: "The combined rate is 1/(40/9) = 9/40 of the job per hour. Subtracting A's rate: 9/40 − 1/10 = 1/8. So B alone takes 8 hours."
  },
  {
    id: "psd-h25",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 1200 households in a certain county and found that 71% of those in the sample own a pet. The associated margin of error is 3 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 71% of all households in the county own a pet.",
      "Between 68% and 74% of the people in the sample own a pet.",
      "It is plausible that between 68% and 74% of all residents of the state own a pet.",
      "It is plausible that between 68% and 74% of all households in the county own a pet."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 71% ± 3%, or 68% to 74%, and the conclusion applies only to the population sampled (households in the county). The sample percent itself is known exactly (71%), so a range for the sample is wrong, and \"exactly 71%\" ignores sampling variability."
  },
  {
    id: "psd-h26",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 200 adults in a large city. The participants were randomly assigned to either use a reduced-sugar diet or not. After eight weeks, those who used a reduced-sugar diet had significantly better afternoon energy levels than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a reduced-sugar diet causes improved afternoon energy levels for participants like those in the study, but the result may not generalize to all adults in the city.",
      "Among adults in the city, use of a reduced-sugar diet is associated with improved afternoon energy levels, but a cause-and-effect relationship cannot be concluded.",
      "Using a reduced-sugar diet causes improved afternoon energy levels for adults in the city.",
      "Among the participants in the study, use of a reduced-sugar diet is associated with improved afternoon energy levels, but neither causation nor a generalization to all adults in the city is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used a random sample, so generalizing to all adults in the city is justified. Random assignment to treatments lets you conclude cause and effect; participants were randomly assigned, so a causal conclusion is justified."
  },
  {
    id: "psd-h27",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the hours studied, and y, the test score, for a set of observations. A line of best fit for the data is y = 1.5x + 30. One observation has an x-value of 7 and a y-value of 42.5. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "−2",
      "2",
      "42.5",
      "40.5"
    ],
    answer: 1,
    explanation: "The predicted value is 1.5(7) + 30 = 40.5. The residual is actual − predicted = 42.5 − 40.5 = 2. A positive residual means the point lies above the line."
  },
  {
    id: "psd-h28",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "The ratio of fiction to biography books on a shelf is 1 : 5, and the ratio of biography to poetry books is 9 : 7. What is the ratio of fiction to poetry books?",
    choices: [
      "9 : 35",
      "1 : 7",
      "7 : 45",
      "10 : 12"
    ],
    answer: 0,
    explanation: "Make the biography parts match. The least common multiple of 5 and 9 is 45. Scaling gives fiction : biography = 9 : 45 and biography : poetry = 45 : 35. So fiction : poetry = 9 : 35, which simplifies to 9 : 35."
  },
  {
    id: "psd-h29",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A tray contains 4 vanilla cupcakes and 4 chocolate cupcakes. Two cupcakes are selected at random, one after the other, without replacement. What is the probability that both are vanilla?",
    choices: [
      "1/4",
      "3/16",
      "7/16",
      "3/14"
    ],
    answer: 3,
    explanation: "The first is vanilla with probability 4/8. Given that, 3 of the remaining 7 are vanilla, so the second is vanilla with probability 3/7. Multiplying: (4/8)(3/7) = 3/14."
  },
  {
    id: "psd-h30",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A company's monthly revenue increased by 10% in January and then increased by 30% in February. Which of the following describes the overall change over the two periods?",
    choices: [
      "An increase of 40%",
      "A decrease of 43%",
      "An increase of 43%",
      "An increase of 49%"
    ],
    answer: 2,
    explanation: "Multiply the growth factors: (1.1)(1.3) = 1.43. This is more than 1, so the overall change is an increase of 43%. Simply adding the percents (+10% and +30%) is incorrect because the second change applies to the new amount."
  },
  {
    id: "psd-h31",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 16,000 residents of a town. In a random sample of 250 of them, 87 cycle to work, and 25% of those 87 also do so every day. Based on the sample, which of the following is the best estimate of the number of residents of the town that cycle to work every day?",
    choices: [
      "5568",
      "1392",
      "4000",
      "22"
    ],
    answer: 1,
    explanation: "In the sample, 87 of 250 cycle to work, and 25% of those meet the second condition, so 87 × 0.25 = 21.75 of the 250 sampled meet both conditions. That is a proportion of 0.087. Applying it to the population: 16,000 × 21.75/250 = 1,392."
  },
  {
    id: "psd-h32",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 6 values between 20 and 40. A new value of 101 is added to the data set. Which of the following best describes how the mean and the median change?",
    choices: [
      "The mean increases substantially more than the median does.",
      "The median increases substantially more than the mean does.",
      "The mean and the median increase by the same amount.",
      "Neither the mean nor the median changes."
    ],
    answer: 0,
    explanation: "The value 101 is far above all the other values. The mean uses every value's size, so it is pulled strongly upward. The median depends only on the middle position, which moves by at most half a position, and the middle values are all between 20 and 40. So the median changes very little."
  },
  {
    id: "psd-h33",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number x is 60% of the number y, and y is 20% less than the number z. If z is positive, x is what percent of z?",
    choices: [
      "40%",
      "12%",
      "72%",
      "48%"
    ],
    answer: 3,
    explanation: "y = 0.8z and x = 0.6y, so x = 0.6(0.8z) = 0.48z. So x is 48% of z. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h34",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 25%. A sales tax of 8% is then applied to the discounted price, and the final amount paid is $384.75. What was the original price of the jacket?",
    choices: [
      "$463.55",
      "$442.46",
      "$475.00",
      "$513.00"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.75P, and after tax the amount is 1.08(0.75P) = 0.81P. Setting this equal to 384.75 gives P = 384.75/0.81 = 475.00. Undoing the percents by reversing them as additions (e.g., adding back 25%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h35",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 9 numbers is 36. When one number is removed from the data set, the mean of the remaining numbers is 34. What number was removed?",
    choices: [
      "2",
      "52",
      "272",
      "61"
    ],
    answer: 1,
    explanation: "The original sum is 9(36) = 324. The remaining 8 numbers sum to 8(34) = 272. The removed number is 324 − 272 = 52."
  },
  {
    id: "psd-h36",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 15 students in section A had a mean test score of 76, and the students in section B had a mean test score of 64. The mean score of all the students in both sections combined was 70. How many students are in section B?",
    choices: [
      "15",
      "17",
      "30",
      "12"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 15(76) + 64b, and it also equals 70(15 + b). So 1140 + 64b = 1050 + 70b, which gives −6b = −90 and b = 15."
  },
  {
    id: "psd-h37",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>9</td><td>4</td></tr><tr><td>11</td><td>3</td></tr><tr><td>13</td><td>4</td></tr><tr><td>15</td><td>9</td></tr><tr><td>17</td><td>8</td></tr></tbody></table>The frequency table summarizes a data set of 28 values. What is the mean of the data set minus the median of the data set?",
    choices: [
      "1",
      "−2",
      "0",
      "−1"
    ],
    answer: 3,
    explanation: "The sum of the values is 9(4) + 11(3) + 13(4) + 15(9) + 17(8) = 392, so the mean is 392/28 = 14. The median is the average of the 14th and 15th value, which is 15. The difference is 14 − 15 = −1."
  },
  {
    id: "psd-h38",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Under 30</th><th>30 to 49</th><th>50 and older</th><th>Total</th></tr></thead><tbody><tr><td>Prefers streaming</td><td>59</td><td>5</td><td>45</td><td>109</td></tr><tr><td>Prefers cable</td><td>54</td><td>45</td><td>8</td><td>107</td></tr><tr><td>Total</td><td>113</td><td>50</td><td>53</td><td>216</td></tr></tbody></table>The table summarizes 216 respondents to a media survey. If one respondent in the \"30 to 49\" category is selected at random, what is the probability that the respondent is in the \"Prefers cable\" category?",
    choices: [
      "45/107",
      "5/24",
      "9/10",
      "25/108"
    ],
    answer: 2,
    explanation: "The selection is restricted to the 50 respondents in the \"30 to 49\" column. Of these, 45 are in the \"Prefers cable\" row, so the probability is 45/50 = 9/10."
  },
  {
    id: "psd-h39",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A material has a density of 1.2 grams per cubic centimeter. What is its density in kilograms per cubic meter? (1 kilogram = 1,000 grams and 1 meter = 100 centimeters)",
    choices: [
      "120",
      "1,200",
      "12",
      "1,200,000"
    ],
    answer: 1,
    explanation: "1 cubic meter = (100 cm)³ = 1,000,000 cubic centimeters. So 1.2 g/cm³ = 1.2 × 1,000,000 g/m³ = 1,200,000 g/m³. Dividing by 1,000 to convert grams to kilograms gives 1,200 kg/m³."
  },
  {
    id: "psd-h40",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working alone at a constant rate, pipe A can fill the tank in 6 minutes. Working alone at a constant rate, pipe B can fill the tank in 9 minutes. How many minutes would it take pipes A and B, working together at these rates, to fill the tank?",
    choices: [
      "18/5",
      "15/2",
      "15",
      "3"
    ],
    answer: 0,
    explanation: "Rates add, not times. Pipe A does 1/6 of the job per minute and pipe B does 1/9. Together they do 1/6 + 1/9 = 5/18 of the job per minute, so the time is 18/5 minutes."
  },
  {
    id: "psd-h41",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 1200 registered voters in a certain city and found that 55% of those in the sample use public transit at least once a week. The associated margin of error is 4 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 55% of all registered voters in the city use public transit at least once a week.",
      "Between 51% and 59% of the people in the sample use public transit at least once a week.",
      "It is plausible that between 51% and 59% of all residents of the state use public transit at least once a week.",
      "It is plausible that between 51% and 59% of all registered voters in the city use public transit at least once a week."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 55% ± 4%, or 51% to 59%, and the conclusion applies only to the population sampled (registered voters in the city). The sample percent itself is known exactly (55%), so a range for the sample is wrong, and \"exactly 55%\" ignores sampling variability."
  },
  {
    id: "psd-h42",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 200 high school students in a certain state. Participants chose for themselves whether to use a daily stretching routine. After eight weeks, those who used a daily stretching routine had significantly better reported back pain than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a daily stretching routine causes improved reported back pain for high school students in the state.",
      "Using a daily stretching routine causes improved reported back pain for participants like those in the study, but the result may not generalize to all high school students in the state.",
      "Among high school students in the state, use of a daily stretching routine is associated with improved reported back pain, but a cause-and-effect relationship cannot be concluded.",
      "Among the participants in the study, use of a daily stretching routine is associated with improved reported back pain, but neither causation nor a generalization to all high school students in the state is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used a random sample, so generalizing to all high school students in the state is justified. Random assignment to treatments lets you conclude cause and effect; participants chose their own treatment, so only an association can be concluded."
  },
  {
    id: "psd-h43",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the hours studied, and y, the test score, for a set of observations. A line of best fit for the data is y = 0.8x + 17. One observation has an x-value of 5 and a y-value of 23. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "−2",
      "2",
      "23",
      "21"
    ],
    answer: 1,
    explanation: "The predicted value is 0.8(5) + 17 = 21. The residual is actual − predicted = 23 − 21 = 2. A positive residual means the point lies above the line."
  },
  {
    id: "psd-h44",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "The ratio of red to blue marbles in a bag is 6 : 4, and the ratio of blue to green marbles is 5 : 4. What is the ratio of red to green marbles?",
    choices: [
      "15 : 8",
      "6 : 4",
      "24 : 20",
      "11 : 8"
    ],
    answer: 0,
    explanation: "Make the blue parts match. The least common multiple of 4 and 5 is 20. Scaling gives red : blue = 30 : 20 and blue : green = 20 : 16. So red : green = 30 : 16, which simplifies to 15 : 8."
  },
  {
    id: "psd-h45",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A tray contains 4 vanilla cupcakes and 7 chocolate cupcakes. Two cupcakes are selected at random without replacement. What is the probability that at least one of them is vanilla?",
    choices: [
      "21/55",
      "6/55",
      "8/11",
      "34/55"
    ],
    answer: 3,
    explanation: "Use the complement. The probability that neither is vanilla is (7/11)(6/10) = 21/55. So the probability of at least one vanilla is 1 − 21/55 = 34/55."
  },
  {
    id: "psd-h46",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A company's monthly revenue increased by 20% in the first quarter and then increased by 10% in the second quarter. Which of the following describes the overall change over the two periods?",
    choices: [
      "An increase of 30%",
      "A decrease of 32%",
      "An increase of 32%",
      "An increase of 38%"
    ],
    answer: 2,
    explanation: "Multiply the growth factors: (1.2)(1.1) = 1.32. This is more than 1, so the overall change is an increase of 32%. Simply adding the percents (+20% and +10%) is incorrect because the second change applies to the new amount."
  },
  {
    id: "psd-h47",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 30,000 fish in a lake. In a random sample of 400 of them, 64 are trout, and 25% of those 64 also are longer than 30 centimeters. Based on the sample, which of the following is the best estimate of the number of fish in the lake that are trout longer than 30 centimeters?",
    choices: [
      "4800",
      "1200",
      "7500",
      "16"
    ],
    answer: 1,
    explanation: "In the sample, 64 of 400 are trout, and 25% of those meet the second condition, so 64 × 0.25 = 16 of the 400 sampled meet both conditions. That is a proportion of 0.04. Applying it to the population: 30,000 × 16/400 = 1,200."
  },
  {
    id: "psd-h48",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 12 values between 20 and 40. A new value of 95 is added to the data set. Which of the following best describes how the mean and the median change?",
    choices: [
      "The mean increases substantially more than the median does.",
      "The median increases substantially more than the mean does.",
      "The mean and the median increase by the same amount.",
      "Neither the mean nor the median changes."
    ],
    answer: 0,
    explanation: "The value 95 is far above all the other values. The mean uses every value's size, so it is pulled strongly upward. The median depends only on the middle position, which moves by at most half a position, and the middle values are all between 20 and 40. So the median changes very little."
  },
  {
    id: "psd-h49",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number x is 40% of the number y, and y is 60% greater than the number z. If z is positive, x is what percent of z?",
    choices: [
      "100%",
      "24%",
      "16%",
      "64%"
    ],
    answer: 3,
    explanation: "y = 1.6z and x = 0.4y, so x = 0.4(1.6z) = 0.64z. So x is 64% of z. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h50",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 20%. A sales tax of 9% is then applied to the discounted price, and the final amount paid is $492.68. What was the original price of the jacket?",
    choices: [
      "$553.57",
      "$538.01",
      "$565.00",
      "$615.85"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.8P, and after tax the amount is 1.09(0.8P) = 0.872P. Setting this equal to 492.68 gives P = 492.68/0.872 = 565.00. Undoing the percents by reversing them as additions (e.g., adding back 20%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h51",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 12 numbers is 86. When one number is removed from the data set, the mean of the remaining numbers is 85. What number was removed?",
    choices: [
      "1",
      "97",
      "935",
      "109"
    ],
    answer: 1,
    explanation: "The original sum is 12(86) = 1032. The remaining 11 numbers sum to 11(85) = 935. The removed number is 1032 − 935 = 97."
  },
  {
    id: "psd-h52",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 31 students in section A had a mean test score of 67, and the students in section B had a mean test score of 95. The mean score of all the students in both sections combined was 81. How many students are in section B?",
    choices: [
      "31",
      "33",
      "62",
      "28"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 31(67) + 95b, and it also equals 81(31 + b). So 2077 + 95b = 2511 + 81b, which gives 14b = 434 and b = 31."
  },
  {
    id: "psd-h53",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>7</td><td>6</td></tr><tr><td>10</td><td>6</td></tr><tr><td>13</td><td>4</td></tr><tr><td>16</td><td>7</td></tr><tr><td>19</td><td>5</td></tr></tbody></table>The frequency table summarizes a data set of 28 values. What is the median of the data set?",
    choices: [
      "12.89",
      "16",
      "10",
      "13"
    ],
    answer: 3,
    explanation: "There are 28 values, so the median is the mean of the 14th and 15th values when ordered. Counting up the cumulative frequencies (6, 12, 16, 23, 28), that position falls at the value 13. Note the median is not the middle row of the table (13) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h54",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Under 30</th><th>30 to 49</th><th>50 and older</th><th>Total</th></tr></thead><tbody><tr><td>Prefers streaming</td><td>12</td><td>29</td><td>38</td><td>79</td></tr><tr><td>Prefers cable</td><td>43</td><td>56</td><td>7</td><td>106</td></tr><tr><td>Total</td><td>55</td><td>85</td><td>45</td><td>185</td></tr></tbody></table>The table summarizes 185 respondents to a media survey. If a respondent that is NOT in the \"50 and older\" category is selected at random, what is the probability that it is in the \"Prefers cable\" category?",
    choices: [
      "99/185",
      "99/106",
      "99/140",
      "7/45"
    ],
    answer: 2,
    explanation: "Respondents not in \"50 and older\" number 185 − 45 = 140. Of these, the ones in \"Prefers cable\" number 106 − 7 = 99. The probability is 99/140."
  },
  {
    id: "psd-h55",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A material has a density of 11.3 grams per cubic centimeter. What is its density in kilograms per cubic meter? (1 kilogram = 1,000 grams and 1 meter = 100 centimeters)",
    choices: [
      "1,130",
      "11,300",
      "113",
      "11,300,000"
    ],
    answer: 1,
    explanation: "1 cubic meter = (100 cm)³ = 1,000,000 cubic centimeters. So 11.3 g/cm³ = 11.3 × 1,000,000 g/m³ = 11,300,000 g/m³. Dividing by 1,000 to convert grams to kilograms gives 11,300 kg/m³."
  },
  {
    id: "psd-h56",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working alone at a constant rate, pipe A can fill the tank in 8 hours. Working alone at a constant rate, pipe B can fill the tank in 7 hours. How many hours would it take pipes A and B, working together at these rates, to fill the tank?",
    choices: [
      "56/15",
      "15/2",
      "15",
      "1"
    ],
    answer: 0,
    explanation: "Rates add, not times. Pipe A does 1/8 of the job per hour and pipe B does 1/7. Together they do 1/8 + 1/7 = 15/56 of the job per hour, so the time is 56/15 hours."
  },
  {
    id: "psd-h57",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 1200 registered voters in a certain city and found that 52% of those in the sample use public transit at least once a week. The associated margin of error is 3 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 52% of all registered voters in the city use public transit at least once a week.",
      "Between 49% and 55% of the people in the sample use public transit at least once a week.",
      "It is plausible that between 49% and 55% of all residents of the state use public transit at least once a week.",
      "It is plausible that between 49% and 55% of all registered voters in the city use public transit at least once a week."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 52% ± 3%, or 49% to 55%, and the conclusion applies only to the population sampled (registered voters in the city). The sample percent itself is known exactly (52%), so a range for the sample is wrong, and \"exactly 52%\" ignores sampling variability."
  },
  {
    id: "psd-h58",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher recruited 200 volunteers from among adults in a large city. Participants chose for themselves whether to use a daily stretching routine. After eight weeks, those who used a daily stretching routine had significantly better reported back pain than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a daily stretching routine causes improved reported back pain for adults in the city.",
      "Using a daily stretching routine causes improved reported back pain for participants like those in the study, but the result may not generalize to all adults in the city.",
      "Among the participants in the study, use of a daily stretching routine is associated with improved reported back pain, but neither causation nor a generalization to all adults in the city is justified.",
      "Among adults in the city, use of a daily stretching routine is associated with improved reported back pain, but a cause-and-effect relationship cannot be concluded."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used volunteers, so the results may not generalize. Random assignment to treatments lets you conclude cause and effect; participants chose their own treatment, so only an association can be concluded."
  },
  {
    id: "psd-h59",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the hours studied, and y, the test score, for a set of observations. A line of best fit for the data is y = 2.4x + 3. One observation has an x-value of 14 and a y-value of 31.1. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "5.5",
      "−11/2",
      "31.1",
      "36.6"
    ],
    answer: 1,
    explanation: "The predicted value is 2.4(14) + 3 = 36.6. The residual is actual − predicted = 31.1 − 36.6 = −5.5. A negative residual means the point lies below the line."
  },
  {
    id: "psd-h60",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "The ratio of red to blue marbles in a bag is 1 : 5, and the ratio of blue to green marbles is 7 : 4. What is the ratio of red to green marbles?",
    choices: [
      "7 : 20",
      "1 : 4",
      "4 : 35",
      "8 : 9"
    ],
    answer: 0,
    explanation: "Make the blue parts match. The least common multiple of 5 and 7 is 35. Scaling gives red : blue = 7 : 35 and blue : green = 35 : 20. So red : green = 7 : 20, which simplifies to 7 : 20."
  },
  {
    id: "psd-h61",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A bag contains 4 red marbles and 6 blue marbles. Two marbles are selected at random without replacement. What is the probability that one is red and the other is blue?",
    choices: [
      "4/15",
      "12/25",
      "6/25",
      "8/15"
    ],
    answer: 3,
    explanation: "There are two orders. Red then blue: (4/10)(6/9). Blue then red: (6/10)(4/9). The total is 2(4)(6)/(10·9) = 8/15."
  },
  {
    id: "psd-h62",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a stock decreased by 40% in the first year and then decreased by 10% in the second year. Which of the following describes the overall change over the two periods?",
    choices: [
      "A decrease of 50%",
      "An increase of 46%",
      "A decrease of 46%",
      "A decrease of 52%"
    ],
    answer: 2,
    explanation: "Multiply the growth factors: (0.6)(0.9) = 0.54. This is less than 1, so the overall change is a decrease of 46%. Simply adding the percents (−40% and −10%) is incorrect because the second change applies to the new amount."
  },
  {
    id: "psd-h63",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 3,000 fish in a lake. In a random sample of 250 of them, 112 are trout, and 75% of those 112 also are longer than 30 centimeters. Based on the sample, which of the following is the best estimate of the number of fish in the lake that are trout longer than 30 centimeters?",
    choices: [
      "1344",
      "1008",
      "2250",
      "84"
    ],
    answer: 1,
    explanation: "In the sample, 112 of 250 are trout, and 75% of those meet the second condition, so 112 × 0.75 = 84 of the 250 sampled meet both conditions. That is a proportion of 0.336. Applying it to the population: 3,000 × 84/250 = 1,008."
  },
  {
    id: "psd-h64",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Each of the 9 values in a data set with a positive standard deviation is multiplied by 3. Which of the following statements about the new data set compared with the original must be true?",
    choices: [
      "The mean and the standard deviation are both multiplied by 3.",
      "The mean is multiplied by 3, and the standard deviation is unchanged.",
      "The mean is multiplied by 3, and the standard deviation is multiplied by 9.",
      "The mean is unchanged, and the standard deviation is multiplied by 3."
    ],
    answer: 0,
    explanation: "Multiplying every value by 3 stretches the data set: every value, and every distance between values, is multiplied by 3. So the mean, median, range, and standard deviation are all multiplied by 3."
  },
  {
    id: "psd-h65",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number p is 125% of the number r, and r is 40% greater than the number s. If s is positive, p is what percent of s?",
    choices: [
      "165%",
      "50%",
      "75%",
      "175%"
    ],
    answer: 3,
    explanation: "r = 1.4s and p = 1.25r, so p = 1.25(1.4s) = 1.75s. So p is 175% of s. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h66",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 20%. A sales tax of 6% is then applied to the discounted price, and the final amount paid is $555.44. What was the original price of the jacket?",
    choices: [
      "$645.86",
      "$626.54",
      "$655.00",
      "$694.30"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.8P, and after tax the amount is 1.06(0.8P) = 0.848P. Setting this equal to 555.44 gives P = 555.44/0.848 = 655.00. Undoing the percents by reversing them as additions (e.g., adding back 20%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h67",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 7 numbers is 69. When one number is removed from the data set, the mean of the remaining numbers is 69. What number was removed?",
    choices: [
      "0",
      "69",
      "414",
      "76"
    ],
    answer: 1,
    explanation: "The original sum is 7(69) = 483. The remaining 6 numbers sum to 6(69) = 414. The removed number is 483 − 414 = 69."
  },
  {
    id: "psd-h68",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 40 students in section A had a mean test score of 84, and the students in section B had a mean test score of 68. The mean score of all the students in both sections combined was 78. How many students are in section B?",
    choices: [
      "24",
      "40",
      "26",
      "64"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 40(84) + 68b, and it also equals 78(40 + b). So 3360 + 68b = 3120 + 78b, which gives −10b = −240 and b = 24."
  },
  {
    id: "psd-h69",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>7</td><td>2</td></tr><tr><td>10</td><td>8</td></tr><tr><td>13</td><td>9</td></tr><tr><td>16</td><td>5</td></tr><tr><td>19</td><td>3</td></tr></tbody></table>The frequency table summarizes a data set of 27 values. What is the median of the data set?",
    choices: [
      "12.89",
      "10",
      "14",
      "13"
    ],
    answer: 3,
    explanation: "There are 27 values, so the median is the 14th value when ordered. Counting up the cumulative frequencies (2, 10, 19, 24, 27), that position falls at the value 13. Note the median is not the middle row of the table (13) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h70",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Under 30</th><th>30 to 49</th><th>50 and older</th><th>Total</th></tr></thead><tbody><tr><td>Prefers streaming</td><td>10</td><td>25</td><td>38</td><td>73</td></tr><tr><td>Prefers cable</td><td>52</td><td>28</td><td>28</td><td>108</td></tr><tr><td>Total</td><td>62</td><td>53</td><td>66</td><td>181</td></tr></tbody></table>The table summarizes 181 respondents to a media survey. If a respondent that is NOT in the \"Under 30\" category is selected at random, what is the probability that it is in the \"Prefers streaming\" category?",
    choices: [
      "63/181",
      "63/73",
      "9/17",
      "5/31"
    ],
    answer: 2,
    explanation: "Respondents not in \"Under 30\" number 181 − 62 = 119. Of these, the ones in \"Prefers streaming\" number 73 − 10 = 63. The probability is 63/119 = 9/17."
  },
  {
    id: "psd-h71",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Water flows into an empty tank at a constant rate of 11 gallons per minute. The tank holds 4,000 gallons. To the nearest tenth of an hour, how long does it take to fill the tank?",
    choices: [
      "363.6 hours",
      "6.1 hours",
      "3.6 hours",
      "21.8 hours"
    ],
    answer: 1,
    explanation: "In one hour, 11 × 60 = 660 gallons flow in. The time to fill 4,000 gallons is 4000/660 ≈ 6.1 hours."
  },
  {
    id: "psd-h72",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working together at constant rates, printers A and B can print the order in 42/13 minutes. Working alone, printer A can print the order in 6 minutes. How many minutes would it take printer B, working alone, to print the order?",
    choices: [
      "7",
      "36/13",
      "84/13",
      "13"
    ],
    answer: 0,
    explanation: "The combined rate is 1/(42/13) = 13/42 of the job per minute. Subtracting A's rate: 13/42 − 1/6 = 1/7. So B alone takes 7 minutes."
  },
  {
    id: "psd-h73",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 1200 students at a large university and found that 71% of those in the sample use public transit at least once a week. The associated margin of error is 5 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 71% of all students at the university use public transit at least once a week.",
      "Between 66% and 76% of the people in the sample use public transit at least once a week.",
      "It is plausible that between 66% and 76% of all residents of the state use public transit at least once a week.",
      "It is plausible that between 66% and 76% of all students at the university use public transit at least once a week."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 71% ± 5%, or 66% to 76%, and the conclusion applies only to the population sampled (students at the university). The sample percent itself is known exactly (71%), so a range for the sample is wrong, and \"exactly 71%\" ignores sampling variability."
  },
  {
    id: "psd-h74",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher recruited 200 volunteers from among adults in a large city. The participants were randomly assigned to either use a new study app or not. After eight weeks, those who used a new study app had significantly better test scores than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a new study app causes improved test scores for adults in the city.",
      "Among adults in the city, use of a new study app is associated with improved test scores, but a cause-and-effect relationship cannot be concluded.",
      "Using a new study app causes improved test scores for participants like those in the study, but the result may not generalize to all adults in the city.",
      "Among the participants in the study, use of a new study app is associated with improved test scores, but neither causation nor a generalization to all adults in the city is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used volunteers, so the results may not generalize. Random assignment to treatments lets you conclude cause and effect; participants were randomly assigned, so a causal conclusion is justified."
  },
  {
    id: "psd-h75",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the hours studied, and y, the test score, for a set of observations. A line of best fit for the data is y = −1.5x − 13. One observation has an x-value of 7 and a y-value of −29. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "5.5",
      "−11/2",
      "−29",
      "−23.5"
    ],
    answer: 1,
    explanation: "The predicted value is −1.5(7) − 13 = −23.5. The residual is actual − predicted = −29 + 23.5 = −5.5. A negative residual means the point lies below the line."
  },
  {
    id: "psd-h76",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "The ratio of fiction to biography books on a shelf is 9 : 2, and the ratio of biography to poetry books is 4 : 3. What is the ratio of fiction to poetry books?",
    choices: [
      "6 : 1",
      "9 : 3",
      "27 : 8",
      "13 : 5"
    ],
    answer: 0,
    explanation: "Make the biography parts match. The least common multiple of 2 and 4 is 4. Scaling gives fiction : biography = 18 : 4 and biography : poetry = 4 : 3. So fiction : poetry = 18 : 3, which simplifies to 6 : 1."
  },
  {
    id: "psd-h77",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A tray contains 3 vanilla cupcakes and 4 chocolate cupcakes. Two cupcakes are selected at random without replacement. What is the probability that at least one of them is vanilla?",
    choices: [
      "2/7",
      "1/7",
      "6/7",
      "5/7"
    ],
    answer: 3,
    explanation: "Use the complement. The probability that neither is vanilla is (4/7)(3/6) = 2/7. So the probability of at least one vanilla is 1 − 2/7 = 5/7."
  },
  {
    id: "psd-h78",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A company's monthly revenue increased by 30% in the first quarter and then increased by 25% in the second quarter. Which of the following describes the overall change over the two periods?",
    choices: [
      "An increase of 55%",
      "A decrease of 62.5%",
      "An increase of 62.5%",
      "An increase of 68.5%"
    ],
    answer: 2,
    explanation: "Multiply the growth factors: (1.3)(1.25) = 1.625. This is more than 1, so the overall change is an increase of 62.5%. Simply adding the percents (+30% and +25%) is incorrect because the second change applies to the new amount."
  },
  {
    id: "psd-h79",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 18,000 trees in a forest preserve. In a random sample of 150 of them, 33 are oaks, and 25% of those 33 also show signs of leaf blight. Based on the sample, which of the following is the best estimate of the number of trees in the preserve that are oaks showing signs of leaf blight?",
    choices: [
      "3960",
      "990",
      "4500",
      "8"
    ],
    answer: 1,
    explanation: "In the sample, 33 of 150 are oaks, and 25% of those meet the second condition, so 33 × 0.25 = 8.25 of the 150 sampled meet both conditions. That is a proportion of 0.055. Applying it to the population: 18,000 × 8.25/150 = 990."
  },
  {
    id: "psd-h80",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Each of the 6 values in a data set is increased by 8. Which of the following statements about the new data set compared with the original data set must be true?",
    choices: [
      "The mean increases by 8, and the standard deviation is unchanged.",
      "The mean and the standard deviation both increase by 8.",
      "The mean is unchanged, and the standard deviation increases by 8.",
      "The mean increases by 8, and the standard deviation increases by 48."
    ],
    answer: 0,
    explanation: "Adding the same number to every value shifts the whole data set, so the mean (and median) increase by 8. The spread does not change: every distance between values, and every distance from the mean, stays the same, so the standard deviation and range are unchanged."
  },
  {
    id: "psd-h81",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number a is 45% of the number b, and b is 80% greater than the number c. If c is positive, a is what percent of c?",
    choices: [
      "125%",
      "36%",
      "9%",
      "81%"
    ],
    answer: 3,
    explanation: "b = 1.8c and a = 0.45b, so a = 0.45(1.8c) = 0.81c. So a is 81% of c. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h82",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 20%. A sales tax of 6% is then applied to the discounted price, and the final amount paid is $203.52. What was the original price of the jacket?",
    choices: [
      "$236.65",
      "$229.57",
      "$240.00",
      "$254.40"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.8P, and after tax the amount is 1.06(0.8P) = 0.848P. Setting this equal to 203.52 gives P = 203.52/0.848 = 240.00. Undoing the percents by reversing them as additions (e.g., adding back 20%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h83",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 6 numbers is 29. When one number is removed from the data set, the mean of the remaining numbers is 22. What number was removed?",
    choices: [
      "7",
      "64",
      "110",
      "70"
    ],
    answer: 1,
    explanation: "The original sum is 6(29) = 174. The remaining 5 numbers sum to 5(22) = 110. The removed number is 174 − 110 = 64."
  },
  {
    id: "psd-h84",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 32 students in section A had a mean test score of 73, and the students in section B had a mean test score of 95. The mean score of all the students in both sections combined was 79. How many students are in section B?",
    choices: [
      "12",
      "32",
      "13",
      "44"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 32(73) + 95b, and it also equals 79(32 + b). So 2336 + 95b = 2528 + 79b, which gives 16b = 192 and b = 12."
  },
  {
    id: "psd-h85",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>6</td><td>5</td></tr><tr><td>9</td><td>2</td></tr><tr><td>12</td><td>8</td></tr><tr><td>15</td><td>2</td></tr><tr><td>18</td><td>3</td></tr></tbody></table>The frequency table summarizes a data set of 20 values. What is the median of the data set?",
    choices: [
      "11.4",
      "9",
      "13",
      "12"
    ],
    answer: 3,
    explanation: "There are 20 values, so the median is the mean of the 10th and 11th values when ordered. Counting up the cumulative frequencies (5, 7, 15, 17, 20), that position falls at the value 12. Note the median is not the middle row of the table (12) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h86",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Morning</th><th>Afternoon</th><th>Evening</th><th>Total</th></tr></thead><tbody><tr><td>Rated positive</td><td>58</td><td>38</td><td>7</td><td>103</td></tr><tr><td>Rated negative</td><td>10</td><td>17</td><td>10</td><td>37</td></tr><tr><td>Total</td><td>68</td><td>55</td><td>17</td><td>140</td></tr></tbody></table>The table summarizes 140 customer visits recorded at a clinic. If a visit that is NOT in the \"Morning\" category is selected at random, what is the probability that it is in the \"Rated negative\" category?",
    choices: [
      "27/140",
      "27/37",
      "3/8",
      "5/34"
    ],
    answer: 2,
    explanation: "Visits not in \"Morning\" number 140 − 68 = 72. Of these, the ones in \"Rated negative\" number 37 − 10 = 27. The probability is 27/72 = 3/8."
  },
  {
    id: "psd-h87",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "An object travels at a constant speed of 25 meters per second. What is this speed in kilometers per hour?",
    choices: [
      "3/2",
      "90",
      "90000",
      "125/18"
    ],
    answer: 1,
    explanation: "In one hour there are 3,600 seconds, so the object travels 25 × 3,600 = 90,000 meters per hour. Since 1 kilometer = 1,000 meters, that is 90,000/1,000 = 90 kilometers per hour."
  },
  {
    id: "psd-h88",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working together at constant rates, pipes A and B can fill the tank in 28/11 hours. Working alone, pipe A can fill the tank in 4 hours. How many hours would it take pipe B, working alone, to fill the tank?",
    choices: [
      "7",
      "16/11",
      "56/11",
      "11"
    ],
    answer: 0,
    explanation: "The combined rate is 1/(28/11) = 11/28 of the job per hour. Subtracting A's rate: 11/28 − 1/4 = 1/7. So B alone takes 7 hours."
  },
  {
    id: "psd-h89",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 1200 students at a large university and found that 65% of those in the sample would attend a weekend event. The associated margin of error is 3 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 65% of all students at the university would attend a weekend event.",
      "Between 62% and 68% of the people in the sample would attend a weekend event.",
      "It is plausible that between 62% and 68% of all residents of the state would attend a weekend event.",
      "It is plausible that between 62% and 68% of all students at the university would attend a weekend event."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 65% ± 3%, or 62% to 68%, and the conclusion applies only to the population sampled (students at the university). The sample percent itself is known exactly (65%), so a range for the sample is wrong, and \"exactly 65%\" ignores sampling variability."
  },
  {
    id: "psd-h90",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 200 members of a national hiking club. The participants were randomly assigned to either use a new study app or not. After eight weeks, those who used a new study app had significantly better test scores than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a new study app causes improved test scores for participants like those in the study, but the result may not generalize to all members of the club.",
      "Among members of the club, use of a new study app is associated with improved test scores, but a cause-and-effect relationship cannot be concluded.",
      "Using a new study app causes improved test scores for members of the club.",
      "Among the participants in the study, use of a new study app is associated with improved test scores, but neither causation nor a generalization to all members of the club is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used a random sample, so generalizing to all members of the club is justified. Random assignment to treatments lets you conclude cause and effect; participants were randomly assigned, so a causal conclusion is justified."
  },
  {
    id: "psd-h91",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the age of a tree (years), and y, the height (feet), for a set of observations. A line of best fit for the data is y = −0.6x + 25. One observation has an x-value of 9 and a y-value of 21.1. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "−1.5",
      "3/2",
      "21.1",
      "19.6"
    ],
    answer: 1,
    explanation: "The predicted value is −0.6(9) + 25 = 19.6. The residual is actual − predicted = 21.1 − 19.6 = 1.5. A positive residual means the point lies above the line."
  },
  {
    id: "psd-h92",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "The ratio of fiction to biography books on a shelf is 2 : 6, and the ratio of biography to poetry books is 4 : 8. What is the ratio of fiction to poetry books?",
    choices: [
      "1 : 6",
      "2 : 8",
      "16 : 24",
      "6 : 14"
    ],
    answer: 0,
    explanation: "Make the biography parts match. The least common multiple of 6 and 4 is 12. Scaling gives fiction : biography = 4 : 12 and biography : poetry = 12 : 24. So fiction : poetry = 4 : 24, which simplifies to 1 : 6."
  },
  {
    id: "psd-h93",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A box contains 4 defective batteries and 3 working batteries. Two batteries are selected at random without replacement. What is the probability that at least one of them is defective?",
    choices: [
      "1/7",
      "2/7",
      "4/7",
      "6/7"
    ],
    answer: 3,
    explanation: "Use the complement. The probability that neither is defective is (3/7)(2/6) = 1/7. So the probability of at least one defective is 1 − 1/7 = 6/7."
  },
  {
    id: "psd-h94",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of an item increased by 20%. By what percent must the new price decrease to return the item to its original price?",
    choices: [
      "20%",
      "10%",
      "16.67%",
      "80%"
    ],
    answer: 2,
    explanation: "If the original price is P, the new price is 1.2P. To return to P, the new price must be multiplied by 1/1.2 = 0.83, a decrease of 16.67%. The decrease is smaller than 20% because it is taken from a larger base."
  },
  {
    id: "psd-h95",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 18,500 trees in a forest preserve. In a random sample of 250 of them, 87 are oaks, and 50% of those 87 also show signs of leaf blight. Based on the sample, which of the following is the best estimate of the number of trees in the preserve that are oaks showing signs of leaf blight?",
    choices: [
      "6438",
      "3219",
      "9250",
      "44"
    ],
    answer: 1,
    explanation: "In the sample, 87 of 250 are oaks, and 50% of those meet the second condition, so 87 × 0.5 = 43.5 of the 250 sampled meet both conditions. That is a proportion of 0.174. Applying it to the population: 18,500 × 43.5/250 = 3,219."
  },
  {
    id: "psd-h96",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 7 values between 20 and 40. A new value of 135 is added to the data set. Which of the following best describes how the mean and the median change?",
    choices: [
      "The mean increases substantially more than the median does.",
      "The median increases substantially more than the mean does.",
      "The mean and the median increase by the same amount.",
      "Neither the mean nor the median changes."
    ],
    answer: 0,
    explanation: "The value 135 is far above all the other values. The mean uses every value's size, so it is pulled strongly upward. The median depends only on the middle position, which moves by at most half a position, and the middle values are all between 20 and 40. So the median changes very little."
  },
  {
    id: "psd-h97",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number p is 80% of the number r, and r is 60% greater than the number s. If s is positive, p is what percent of s?",
    choices: [
      "140%",
      "48%",
      "32%",
      "128%"
    ],
    answer: 3,
    explanation: "r = 1.6s and p = 0.8r, so p = 0.8(1.6s) = 1.28s. So p is 128% of s. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h98",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 15%. A sales tax of 8% is then applied to the discounted price, and the final amount paid is $573.75. What was the original price of the jacket?",
    choices: [
      "$616.94",
      "$607.03",
      "$625.00",
      "$675.00"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.85P, and after tax the amount is 1.08(0.85P) = 0.918P. Setting this equal to 573.75 gives P = 573.75/0.918 = 625.00. Undoing the percents by reversing them as additions (e.g., adding back 15%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h99",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 19 numbers is 72. When one number is removed from the data set, the mean of the remaining numbers is 73.5. What number was removed?",
    choices: [
      "3",
      "45",
      "1323",
      "64"
    ],
    answer: 1,
    explanation: "The original sum is 19(72) = 1368. The remaining 18 numbers sum to 18(73.5) = 1323. The removed number is 1368 − 1323 = 45."
  },
  {
    id: "psd-h100",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 24 students in section A had a mean test score of 60, and the students in section B had a mean test score of 74. The mean score of all the students in both sections combined was 68. How many students are in section B?",
    choices: [
      "32",
      "24",
      "38",
      "56"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 24(60) + 74b, and it also equals 68(24 + b). So 1440 + 74b = 1632 + 68b, which gives 6b = 192 and b = 32."
  },
  {
    id: "psd-h101",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>10</td><td>9</td></tr><tr><td>12</td><td>3</td></tr><tr><td>14</td><td>9</td></tr><tr><td>16</td><td>7</td></tr><tr><td>18</td><td>9</td></tr></tbody></table>The frequency table summarizes a data set of 37 values. What is the median of the data set?",
    choices: [
      "14.22",
      "10",
      "12",
      "14"
    ],
    answer: 3,
    explanation: "There are 37 values, so the median is the 19th value when ordered. Counting up the cumulative frequencies (9, 12, 21, 28, 37), that position falls at the value 14. Note the median is not the middle row of the table (14) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h102",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Site A</th><th>Site B</th><th>Site C</th><th>Total</th></tr></thead><tbody><tr><td>Flowering</td><td>27</td><td>38</td><td>27</td><td>92</td></tr><tr><td>Not flowering</td><td>41</td><td>38</td><td>5</td><td>84</td></tr><tr><td>Total</td><td>68</td><td>76</td><td>32</td><td>176</td></tr></tbody></table>The table summarizes 176 plants in a botanical study. A plant will be selected at random from those in the \"Flowering\" category. What is the probability that the plant is in the \"Site B\" category?",
    choices: [
      "1/2",
      "19/88",
      "19/46",
      "23/44"
    ],
    answer: 2,
    explanation: "Only the 92 plants in the \"Flowering\" row are eligible. Of these, 38 are in the \"Site B\" column, so the probability is 38/92 = 19/46."
  },
  {
    id: "psd-h103",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "An object travels at a constant speed of 20 meters per second. What is this speed in kilometers per hour?",
    choices: [
      "5404319552844595/4503599627370496",
      "72",
      "72000",
      "50/9"
    ],
    answer: 1,
    explanation: "In one hour there are 3,600 seconds, so the object travels 20 × 3,600 = 72,000 meters per hour. Since 1 kilometer = 1,000 meters, that is 72,000/1,000 = 72 kilometers per hour."
  },
  {
    id: "psd-h104",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working alone at a constant rate, printer A can print the order in 12 minutes. Working alone at a constant rate, printer B can print the order in 10 minutes. How many minutes would it take printers A and B, working together at these rates, to print the order?",
    choices: [
      "60/11",
      "11",
      "22",
      "2"
    ],
    answer: 0,
    explanation: "Rates add, not times. Printer A does 1/12 of the job per minute and printer B does 1/10. Together they do 1/12 + 1/10 = 11/60 of the job per minute, so the time is 60/11 minutes."
  },
  {
    id: "psd-h105",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 600 registered voters in a certain city and found that 47% of those in the sample support a proposed park. The associated margin of error is 3 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 47% of all registered voters in the city support a proposed park.",
      "Between 44% and 50% of the people in the sample support a proposed park.",
      "It is plausible that between 44% and 50% of all residents of the state support a proposed park.",
      "It is plausible that between 44% and 50% of all registered voters in the city support a proposed park."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 47% ± 3%, or 44% to 50%, and the conclusion applies only to the population sampled (registered voters in the city). The sample percent itself is known exactly (47%), so a range for the sample is wrong, and \"exactly 47%\" ignores sampling variability."
  },
  {
    id: "psd-h106",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher recruited 200 volunteers from among high school students in a certain state. The participants were randomly assigned to either use a daily stretching routine or not. After eight weeks, those who used a daily stretching routine had significantly better reported back pain than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a daily stretching routine causes improved reported back pain for high school students in the state.",
      "Among high school students in the state, use of a daily stretching routine is associated with improved reported back pain, but a cause-and-effect relationship cannot be concluded.",
      "Using a daily stretching routine causes improved reported back pain for participants like those in the study, but the result may not generalize to all high school students in the state.",
      "Among the participants in the study, use of a daily stretching routine is associated with improved reported back pain, but neither causation nor a generalization to all high school students in the state is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used volunteers, so the results may not generalize. Random assignment to treatments lets you conclude cause and effect; participants were randomly assigned, so a causal conclusion is justified."
  },
  {
    id: "psd-h107",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the age of a tree (years), and y, the height (feet), for a set of observations. A line of best fit for the data is y = −0.6x + 34. One observation has an x-value of 6 and a y-value of 27.9. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "2.5",
      "−5/2",
      "27.9",
      "30.4"
    ],
    answer: 1,
    explanation: "The predicted value is −0.6(6) + 34 = 30.4. The residual is actual − predicted = 27.9 − 30.4 = −2.5. A negative residual means the point lies below the line."
  },
  {
    id: "psd-h108",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "The ratio of oak to maple trees in a park is 8 : 7, and the ratio of maple to pine trees is 3 : 9. What is the ratio of oak to pine trees?",
    choices: [
      "8 : 21",
      "8 : 9",
      "72 : 21",
      "11 : 16"
    ],
    answer: 0,
    explanation: "Make the maple parts match. The least common multiple of 7 and 3 is 21. Scaling gives oak : maple = 24 : 21 and maple : pine = 21 : 63. So oak : pine = 24 : 63, which simplifies to 8 : 21."
  },
  {
    id: "psd-h109",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A box contains 8 defective batteries and 8 working batteries. Two batteries are selected at random without replacement. What is the probability that one is defective and the other is working?",
    choices: [
      "4/15",
      "1/2",
      "1/4",
      "8/15"
    ],
    answer: 3,
    explanation: "There are two orders. Defective then working: (8/16)(8/15). Working then defective: (8/16)(8/15). The total is 2(8)(8)/(16·15) = 8/15."
  },
  {
    id: "psd-h110",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number of members of a club increased by 30% in January and then decreased by 20% in February. Which of the following describes the overall change over the two periods?",
    choices: [
      "An increase of 10%",
      "A decrease of 4%",
      "An increase of 4%",
      "An increase of 6%"
    ],
    answer: 2,
    explanation: "Multiply the growth factors: (1.3)(0.8) = 1.04. This is more than 1, so the overall change is an increase of 4%. Simply adding the percents (+30% and −20%) is incorrect because the second change applies to the new amount."
  },
  {
    id: "psd-h111",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 17,500 residents of a town. In a random sample of 250 of them, 120 cycle to work, and 40% of those 120 also do so every day. Based on the sample, which of the following is the best estimate of the number of residents of the town that cycle to work every day?",
    choices: [
      "8400",
      "3360",
      "7000",
      "48"
    ],
    answer: 1,
    explanation: "In the sample, 120 of 250 cycle to work, and 40% of those meet the second condition, so 120 × 0.4 = 48 of the 250 sampled meet both conditions. That is a proportion of 0.192. Applying it to the population: 17,500 × 48/250 = 3,360."
  },
  {
    id: "psd-h112",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Each of the 12 values in a data set is increased by 8. Which of the following statements about the new data set compared with the original data set must be true?",
    choices: [
      "The mean increases by 8, and the standard deviation is unchanged.",
      "The mean and the standard deviation both increase by 8.",
      "The mean is unchanged, and the standard deviation increases by 8.",
      "The mean increases by 8, and the standard deviation increases by 96."
    ],
    answer: 0,
    explanation: "Adding the same number to every value shifts the whole data set, so the mean (and median) increase by 8. The spread does not change: every distance between values, and every distance from the mean, stays the same, so the standard deviation and range are unchanged."
  },
  {
    id: "psd-h113",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number a is 30% of the number b, and b is 25% less than the number c. If c is positive, a is what percent of c?",
    choices: [
      "5%",
      "7.5%",
      "37.5%",
      "22.5%"
    ],
    answer: 3,
    explanation: "b = 0.75c and a = 0.3b, so a = 0.3(0.75c) = 0.23c. So a is 22.5% of c. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h114",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 40%. A sales tax of 8% is then applied to the discounted price, and the final amount paid is $119.88. What was the original price of the jacket?",
    choices: [
      "$176.29",
      "$154.41",
      "$185.00",
      "$199.80"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.6P, and after tax the amount is 1.08(0.6P) = 0.648P. Setting this equal to 119.88 gives P = 119.88/0.648 = 185.00. Undoing the percents by reversing them as additions (e.g., adding back 40%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h115",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 13 numbers is 84. When one number is removed from the data set, the mean of the remaining numbers is 88. What number was removed?",
    choices: [
      "4",
      "36",
      "1056",
      "49"
    ],
    answer: 1,
    explanation: "The original sum is 13(84) = 1092. The remaining 12 numbers sum to 12(88) = 1056. The removed number is 1092 − 1056 = 36."
  },
  {
    id: "psd-h116",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 8 students in section A had a mean test score of 62, and the students in section B had a mean test score of 77. The mean score of all the students in both sections combined was 74. How many students are in section B?",
    choices: [
      "32",
      "8",
      "48",
      "40"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 8(62) + 77b, and it also equals 74(8 + b). So 496 + 77b = 592 + 74b, which gives 3b = 96 and b = 32."
  },
  {
    id: "psd-h117",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>8</td><td>5</td></tr><tr><td>11</td><td>7</td></tr><tr><td>14</td><td>3</td></tr><tr><td>17</td><td>6</td></tr><tr><td>20</td><td>6</td></tr></tbody></table>The frequency table summarizes a data set of 27 values. What is the median of the data set?",
    choices: [
      "14.11",
      "11",
      "15",
      "14"
    ],
    answer: 3,
    explanation: "There are 27 values, so the median is the 14th value when ordered. Counting up the cumulative frequencies (5, 12, 15, 21, 27), that position falls at the value 14. Note the median is not the middle row of the table (14) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h118",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Grade 10</th><th>Grade 11</th><th>Grade 12</th><th>Total</th></tr></thead><tbody><tr><td>Plays a sport</td><td>26</td><td>19</td><td>15</td><td>60</td></tr><tr><td>Does not play a sport</td><td>52</td><td>55</td><td>6</td><td>113</td></tr><tr><td>Total</td><td>78</td><td>74</td><td>21</td><td>173</td></tr></tbody></table>The table summarizes 173 students surveyed at a high school. If a student that is NOT in the \"Grade 11\" category is selected at random, what is the probability that it is in the \"Plays a sport\" category?",
    choices: [
      "41/173",
      "41/60",
      "41/99",
      "19/74"
    ],
    answer: 2,
    explanation: "Students not in \"Grade 11\" number 173 − 74 = 99. Of these, the ones in \"Plays a sport\" number 60 − 19 = 41. The probability is 41/99."
  },
  {
    id: "psd-h119",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A contractor charges $2.25 per square foot to refinish a floor. A rectangular floor has an area of 20 square yards. What is the total charge, in dollars, to refinish the floor? (1 yard = 3 feet)",
    choices: [
      "$135.00",
      "$405.00",
      "$45.00",
      "$5.00"
    ],
    answer: 1,
    explanation: "One square yard is 3 ft × 3 ft = 9 square feet, so 20 square yards = 180 square feet. The charge is 180 × $2.25 = $405.00. Multiplying by 3 instead of 9 is a common error."
  },
  {
    id: "psd-h120",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working together at constant rates, printers A and B can print the order in 18/11 minutes. Working alone, printer A can print the order in 2 minutes. How many minutes would it take printer B, working alone, to print the order?",
    choices: [
      "9",
      "4/11",
      "36/11",
      "11"
    ],
    answer: 0,
    explanation: "The combined rate is 1/(18/11) = 11/18 of the job per minute. Subtracting A's rate: 11/18 − 1/2 = 1/9. So B alone takes 9 minutes."
  },
  {
    id: "psd-h121",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 400 employees of a large company and found that 42% of those in the sample would attend a weekend event. The associated margin of error is 2 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 42% of all employees of the company would attend a weekend event.",
      "Between 40% and 44% of the people in the sample would attend a weekend event.",
      "It is plausible that between 40% and 44% of all residents of the state would attend a weekend event.",
      "It is plausible that between 40% and 44% of all employees of the company would attend a weekend event."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 42% ± 2%, or 40% to 44%, and the conclusion applies only to the population sampled (employees of the company). The sample percent itself is known exactly (42%), so a range for the sample is wrong, and \"exactly 42%\" ignores sampling variability."
  },
  {
    id: "psd-h122",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 200 high school students in a certain state. Participants chose for themselves whether to use a new study app. After eight weeks, those who used a new study app had significantly better test scores than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a new study app causes improved test scores for high school students in the state.",
      "Using a new study app causes improved test scores for participants like those in the study, but the result may not generalize to all high school students in the state.",
      "Among high school students in the state, use of a new study app is associated with improved test scores, but a cause-and-effect relationship cannot be concluded.",
      "Among the participants in the study, use of a new study app is associated with improved test scores, but neither causation nor a generalization to all high school students in the state is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used a random sample, so generalizing to all high school students in the state is justified. Random assignment to treatments lets you conclude cause and effect; participants chose their own treatment, so only an association can be concluded."
  },
  {
    id: "psd-h123",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the age of a tree (years), and y, the height (feet), for a set of observations. A line of best fit for the data is y = 4x − 5. One observation has an x-value of 20 and a y-value of 69. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "6",
      "−6",
      "69",
      "75"
    ],
    answer: 1,
    explanation: "The predicted value is 4(20) − 5 = 75. The residual is actual − predicted = 69 − 75 = −6. A negative residual means the point lies below the line."
  },
  {
    id: "psd-h124",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "There are 80 books on a shelf, each of which is fiction, biography, or poetry. The ratio of fiction to biography is 7 : 5, and the ratio of biography to poetry is 5 : 4. How many are poetry?",
    choices: [
      "20",
      "25",
      "35",
      "21"
    ],
    answer: 0,
    explanation: "Combine the ratios by matching the biography parts: fiction : biography : poetry = 7 : 5 : 4. These parts add to 16, so each part is 80/16 = 5. The number of poetry is 4 × 5 = 20."
  },
  {
    id: "psd-h125",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A tray contains 2 vanilla cupcakes and 7 chocolate cupcakes. Two cupcakes are selected at random without replacement. What is the probability that one is vanilla and the other is chocolate?",
    choices: [
      "7/36",
      "28/81",
      "14/81",
      "7/18"
    ],
    answer: 3,
    explanation: "There are two orders. Vanilla then chocolate: (2/9)(7/8). Chocolate then vanilla: (7/9)(2/8). The total is 2(2)(7)/(9·8) = 7/18."
  },
  {
    id: "psd-h126",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The population of a town increased by 25% in January and then increased by 40% in February. Which of the following describes the overall change over the two periods?",
    choices: [
      "An increase of 65%",
      "A decrease of 75%",
      "An increase of 75%",
      "An increase of 81%"
    ],
    answer: 2,
    explanation: "Multiply the growth factors: (1.25)(1.4) = 1.75. This is more than 1, so the overall change is an increase of 75%. Simply adding the percents (+25% and +40%) is incorrect because the second change applies to the new amount."
  },
  {
    id: "psd-h127",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 7,000 trees in a forest preserve. In a random sample of 300 of them, 115 are oaks, and 60% of those 115 also show signs of leaf blight. Based on the sample, which of the following is the best estimate of the number of trees in the preserve that are oaks showing signs of leaf blight?",
    choices: [
      "5900712402397867/2199023255552",
      "1610",
      "4200",
      "69"
    ],
    answer: 1,
    explanation: "In the sample, 115 of 300 are oaks, and 60% of those meet the second condition, so 115 × 0.6 = 69 of the 300 sampled meet both conditions. That is a proportion of 0.23. Applying it to the population: 7,000 × 69/300 = 1,610."
  },
  {
    id: "psd-h128",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 8 values between 20 and 40. A new value of 143 is added to the data set. Which of the following best describes how the mean and the median change?",
    choices: [
      "The mean increases substantially more than the median does.",
      "The median increases substantially more than the mean does.",
      "The mean and the median increase by the same amount.",
      "Neither the mean nor the median changes."
    ],
    answer: 0,
    explanation: "The value 143 is far above all the other values. The mean uses every value's size, so it is pulled strongly upward. The median depends only on the middle position, which moves by at most half a position, and the middle values are all between 20 and 40. So the median changes very little."
  },
  {
    id: "psd-h129",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number p is 150% of the number r, and r is 10% less than the number s. If s is positive, p is what percent of s?",
    choices: [
      "140%",
      "15%",
      "165%",
      "135%"
    ],
    answer: 3,
    explanation: "r = 0.9s and p = 1.5r, so p = 1.5(0.9s) = 1.35s. So p is 135% of s. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h130",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 35%. A sales tax of 5% is then applied to the discounted price, and the final amount paid is $477.75. What was the original price of the jacket?",
    choices: [
      "$682.50",
      "$612.71",
      "$700.00",
      "$735.00"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.65P, and after tax the amount is 1.05(0.65P) = 0.6825P. Setting this equal to 477.75 gives P = 477.75/0.6825 = 700.00. Undoing the percents by reversing them as additions (e.g., adding back 35%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h131",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 7 numbers is 76. When one number is removed from the data set, the mean of the remaining numbers is 67. What number was removed?",
    choices: [
      "9",
      "130",
      "402",
      "137"
    ],
    answer: 1,
    explanation: "The original sum is 7(76) = 532. The remaining 6 numbers sum to 6(67) = 402. The removed number is 532 − 402 = 130."
  },
  {
    id: "psd-h132",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 19 students in section A had a mean test score of 87, and the students in section B had a mean test score of 78. The mean score of all the students in both sections combined was 81. How many students are in section B?",
    choices: [
      "38",
      "19",
      "40",
      "57"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 19(87) + 78b, and it also equals 81(19 + b). So 1653 + 78b = 1539 + 81b, which gives −3b = −114 and b = 38."
  },
  {
    id: "psd-h133",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>10</td><td>2</td></tr><tr><td>12</td><td>2</td></tr><tr><td>14</td><td>4</td></tr><tr><td>16</td><td>7</td></tr><tr><td>18</td><td>4</td></tr></tbody></table>The frequency table summarizes a data set of 19 values. What is the median of the data set?",
    choices: [
      "14",
      "14.95",
      "12",
      "16"
    ],
    answer: 3,
    explanation: "There are 19 values, so the median is the 10th value when ordered. Counting up the cumulative frequencies (2, 4, 8, 15, 19), that position falls at the value 16. Note the median is not the middle row of the table (14) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h134",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Grade 10</th><th>Grade 11</th><th>Grade 12</th><th>Total</th></tr></thead><tbody><tr><td>Plays a sport</td><td>21</td><td>55</td><td>10</td><td>86</td></tr><tr><td>Does not play a sport</td><td>57</td><td>56</td><td>36</td><td>149</td></tr><tr><td>Total</td><td>78</td><td>111</td><td>46</td><td>235</td></tr></tbody></table>The table summarizes 235 students surveyed at a high school. If one student in the \"Grade 10\" category is selected at random, what is the probability that the student is in the \"Plays a sport\" category?",
    choices: [
      "21/86",
      "21/235",
      "7/26",
      "78/235"
    ],
    answer: 2,
    explanation: "The selection is restricted to the 78 students in the \"Grade 10\" column. Of these, 21 are in the \"Plays a sport\" row, so the probability is 21/78 = 7/26."
  },
  {
    id: "psd-h135",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A material has a density of 2.7 grams per cubic centimeter. What is its density in kilograms per cubic meter? (1 kilogram = 1,000 grams and 1 meter = 100 centimeters)",
    choices: [
      "270",
      "2,700",
      "27",
      "2,700,000"
    ],
    answer: 1,
    explanation: "1 cubic meter = (100 cm)³ = 1,000,000 cubic centimeters. So 2.7 g/cm³ = 2.7 × 1,000,000 g/m³ = 2,700,000 g/m³. Dividing by 1,000 to convert grams to kilograms gives 2,700 kg/m³."
  },
  {
    id: "psd-h136",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working alone at a constant rate, pipe A can fill the tank in 4 minutes. Working alone at a constant rate, pipe B can fill the tank in 5 minutes. How many minutes would it take pipes A and B, working together at these rates, to fill the tank?",
    choices: [
      "20/9",
      "9/2",
      "9",
      "1"
    ],
    answer: 0,
    explanation: "Rates add, not times. Pipe A does 1/4 of the job per minute and pipe B does 1/5. Together they do 1/4 + 1/5 = 9/20 of the job per minute, so the time is 20/9 minutes."
  },
  {
    id: "psd-h137",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 1200 employees of a large company and found that 41% of those in the sample use public transit at least once a week. The associated margin of error is 6 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 41% of all employees of the company use public transit at least once a week.",
      "Between 35% and 47% of the people in the sample use public transit at least once a week.",
      "It is plausible that between 35% and 47% of all residents of the state use public transit at least once a week.",
      "It is plausible that between 35% and 47% of all employees of the company use public transit at least once a week."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 41% ± 6%, or 35% to 47%, and the conclusion applies only to the population sampled (employees of the company). The sample percent itself is known exactly (41%), so a range for the sample is wrong, and \"exactly 41%\" ignores sampling variability."
  },
  {
    id: "psd-h138",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher recruited 200 volunteers from among high school students in a certain state. Participants chose for themselves whether to use a new study app. After eight weeks, those who used a new study app had significantly better test scores than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a new study app causes improved test scores for high school students in the state.",
      "Using a new study app causes improved test scores for participants like those in the study, but the result may not generalize to all high school students in the state.",
      "Among the participants in the study, use of a new study app is associated with improved test scores, but neither causation nor a generalization to all high school students in the state is justified.",
      "Among high school students in the state, use of a new study app is associated with improved test scores, but a cause-and-effect relationship cannot be concluded."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used volunteers, so the results may not generalize. Random assignment to treatments lets you conclude cause and effect; participants chose their own treatment, so only an association can be concluded."
  },
  {
    id: "psd-h139",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the hours studied, and y, the test score, for a set of observations. A line of best fit for the data is y = −1.5x − 18. One observation has an x-value of 17 and a y-value of −44. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "0.5",
      "−1/2",
      "−44",
      "−43.5"
    ],
    answer: 1,
    explanation: "The predicted value is −1.5(17) − 18 = −43.5. The residual is actual − predicted = −44 + 43.5 = −0.5. A negative residual means the point lies below the line."
  },
  {
    id: "psd-h140",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "The ratio of red to blue marbles in a bag is 5 : 9, and the ratio of blue to green marbles is 9 : 5. What is the ratio of red to green marbles?",
    choices: [
      "1 : 1",
      "5 : 5",
      "25 : 81",
      "14 : 14"
    ],
    answer: 0,
    explanation: "Make the blue parts match. The least common multiple of 9 and 9 is 9. Scaling gives red : blue = 5 : 9 and blue : green = 9 : 5. So red : green = 5 : 5, which simplifies to 1 : 1."
  },
  {
    id: "psd-h141",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A tray contains 3 vanilla cupcakes and 6 chocolate cupcakes. Two cupcakes are selected at random, one after the other, without replacement. What is the probability that both are vanilla?",
    choices: [
      "1/9",
      "2/27",
      "5/18",
      "1/12"
    ],
    answer: 3,
    explanation: "The first is vanilla with probability 3/9. Given that, 2 of the remaining 8 are vanilla, so the second is vanilla with probability 2/8. Multiplying: (3/9)(2/8) = 1/12."
  },
  {
    id: "psd-h142",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of an item increased by 150%. By what percent must the new price decrease to return the item to its original price?",
    choices: [
      "150%",
      "75%",
      "60%",
      "37.5%"
    ],
    answer: 2,
    explanation: "If the original price is P, the new price is 2.5P. To return to P, the new price must be multiplied by 1/2.5 = 0.4, a decrease of 60%. The decrease is smaller than 150% because it is taken from a larger base."
  },
  {
    id: "psd-h143",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 25,500 trees in a forest preserve. In a random sample of 150 of them, 34 are oaks, and 60% of those 34 also show signs of leaf blight. Based on the sample, which of the following is the best estimate of the number of trees in the preserve that are oaks showing signs of leaf blight?",
    choices: [
      "5780",
      "3468",
      "15300",
      "20"
    ],
    answer: 1,
    explanation: "In the sample, 34 of 150 are oaks, and 60% of those meet the second condition, so 34 × 0.6 = 20.4 of the 150 sampled meet both conditions. That is a proportion of 0.136. Applying it to the population: 25,500 × 20.4/150 = 3,468."
  },
  {
    id: "psd-h144",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Each of the 8 values in a data set with a positive standard deviation is multiplied by 2. Which of the following statements about the new data set compared with the original must be true?",
    choices: [
      "The mean and the standard deviation are both multiplied by 2.",
      "The mean is multiplied by 2, and the standard deviation is unchanged.",
      "The mean is multiplied by 2, and the standard deviation is multiplied by 4.",
      "The mean is unchanged, and the standard deviation is multiplied by 2."
    ],
    answer: 0,
    explanation: "Multiplying every value by 2 stretches the data set: every value, and every distance between values, is multiplied by 2. So the mean, median, range, and standard deviation are all multiplied by 2."
  },
  {
    id: "psd-h145",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number a is 30% of the number b, and b is 50% greater than the number c. If c is positive, a is what percent of c?",
    choices: [
      "80%",
      "15%",
      "−20%",
      "45%"
    ],
    answer: 3,
    explanation: "b = 1.5c and a = 0.3b, so a = 0.3(1.5c) = 0.45c. So a is 45% of c. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h146",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 20%. A sales tax of 7.5% is then applied to the discounted price, and the final amount paid is $520.30. What was the original price of the jacket?",
    choices: [
      "$594.63",
      "$577.53",
      "$605.00",
      "$650.37"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.8P, and after tax the amount is 1.075(0.8P) = 0.86P. Setting this equal to 520.30 gives P = 520.30/0.86 = 605.00. Undoing the percents by reversing them as additions (e.g., adding back 20%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h147",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A student's mean score on 14 quizzes is 72. The student will take 2 more quizzes and wants the mean of all 16 quiz scores to be exactly 73. If the student earns the same score on each of the 2 new quizzes, what must that score be?",
    choices: [
      "74",
      "80",
      "94",
      "75"
    ],
    answer: 1,
    explanation: "The current total is 14(72) = 1008. For a mean of 73 over 16 quizzes, the total must be 16(73) = 1168. The 2 new quizzes must add 160 points, so each must be 160/2 = 80."
  },
  {
    id: "psd-h148",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 12 students in section A had a mean test score of 68, and the students in section B had a mean test score of 76. The mean score of all the students in both sections combined was 73. How many students are in section B?",
    choices: [
      "20",
      "12",
      "30",
      "32"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 12(68) + 76b, and it also equals 73(12 + b). So 816 + 76b = 876 + 73b, which gives 3b = 60 and b = 20."
  },
  {
    id: "psd-h149",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>5</td><td>7</td></tr><tr><td>8</td><td>1</td></tr><tr><td>11</td><td>1</td></tr><tr><td>14</td><td>7</td></tr><tr><td>17</td><td>7</td></tr></tbody></table>The frequency table summarizes a data set of 23 values. What is the median of the data set?",
    choices: [
      "11",
      "11.78",
      "5",
      "14"
    ],
    answer: 3,
    explanation: "There are 23 values, so the median is the 12th value when ordered. Counting up the cumulative frequencies (7, 8, 9, 16, 23), that position falls at the value 14. Note the median is not the middle row of the table (11) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h150",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Morning</th><th>Afternoon</th><th>Evening</th><th>Total</th></tr></thead><tbody><tr><td>Rated positive</td><td>41</td><td>8</td><td>26</td><td>75</td></tr><tr><td>Rated negative</td><td>25</td><td>14</td><td>39</td><td>78</td></tr><tr><td>Total</td><td>66</td><td>22</td><td>65</td><td>153</td></tr></tbody></table>The table summarizes 153 customer visits recorded at a clinic. If one visit in the \"Afternoon\" category is selected at random, what is the probability that the visit is in the \"Rated negative\" category?",
    choices: [
      "7/39",
      "14/153",
      "7/11",
      "22/153"
    ],
    answer: 2,
    explanation: "The selection is restricted to the 22 visits in the \"Afternoon\" column. Of these, 14 are in the \"Rated negative\" row, so the probability is 14/22 = 7/11."
  },
  {
    id: "psd-h151",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Water flows into an empty tank at a constant rate of 14 gallons per minute. The tank holds 6,000 gallons. To the nearest tenth of an hour, how long does it take to fill the tank?",
    choices: [
      "428.6 hours",
      "7.1 hours",
      "4.3 hours",
      "25.7 hours"
    ],
    answer: 1,
    explanation: "In one hour, 14 × 60 = 840 gallons flow in. The time to fill 6,000 gallons is 6000/840 ≈ 7.1 hours."
  },
  {
    id: "psd-h152",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working alone at a constant rate, printer A can print the order in 2 hours. Working alone at a constant rate, printer B can print the order in 12 hours. How many hours would it take printers A and B, working together at these rates, to print the order?",
    choices: [
      "12/7",
      "7",
      "14",
      "10"
    ],
    answer: 0,
    explanation: "Rates add, not times. Printer A does 1/2 of the job per hour and printer B does 1/12. Together they do 1/2 + 1/12 = 7/12 of the job per hour, so the time is 12/7 hours."
  },
  {
    id: "psd-h153",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 300 students at a large university and found that 69% of those in the sample own a pet. The associated margin of error is 5 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 69% of all students at the university own a pet.",
      "Between 64% and 74% of the people in the sample own a pet.",
      "It is plausible that between 64% and 74% of all residents of the state own a pet.",
      "It is plausible that between 64% and 74% of all students at the university own a pet."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 69% ± 5%, or 64% to 74%, and the conclusion applies only to the population sampled (students at the university). The sample percent itself is known exactly (69%), so a range for the sample is wrong, and \"exactly 69%\" ignores sampling variability."
  },
  {
    id: "psd-h154",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher recruited 200 volunteers from among adults in a large city. The participants were randomly assigned to either use a daily stretching routine or not. After eight weeks, those who used a daily stretching routine had significantly better reported back pain than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a daily stretching routine causes improved reported back pain for adults in the city.",
      "Among adults in the city, use of a daily stretching routine is associated with improved reported back pain, but a cause-and-effect relationship cannot be concluded.",
      "Using a daily stretching routine causes improved reported back pain for participants like those in the study, but the result may not generalize to all adults in the city.",
      "Among the participants in the study, use of a daily stretching routine is associated with improved reported back pain, but neither causation nor a generalization to all adults in the city is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used volunteers, so the results may not generalize. Random assignment to treatments lets you conclude cause and effect; participants were randomly assigned, so a causal conclusion is justified."
  },
  {
    id: "psd-h155",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the hours studied, and y, the test score, for a set of observations. A line of best fit for the data is y = 0.8x + 1. One observation has an x-value of 10 and a y-value of 11. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "−2",
      "2",
      "11",
      "9"
    ],
    answer: 1,
    explanation: "The predicted value is 0.8(10) + 1 = 9. The residual is actual − predicted = 11 − 9 = 2. A positive residual means the point lies above the line."
  },
  {
    id: "psd-h156",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "The ratio of fiction to biography books on a shelf is 3 : 9, and the ratio of biography to poetry books is 5 : 3. What is the ratio of fiction to poetry books?",
    choices: [
      "5 : 9",
      "3 : 3",
      "9 : 45",
      "8 : 12"
    ],
    answer: 0,
    explanation: "Make the biography parts match. The least common multiple of 9 and 5 is 45. Scaling gives fiction : biography = 15 : 45 and biography : poetry = 45 : 27. So fiction : poetry = 15 : 27, which simplifies to 5 : 9."
  },
  {
    id: "psd-h157",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A box contains 5 defective batteries and 4 working batteries. Two batteries are selected at random without replacement. What is the probability that one is defective and the other is working?",
    choices: [
      "5/18",
      "40/81",
      "20/81",
      "5/9"
    ],
    answer: 3,
    explanation: "There are two orders. Defective then working: (5/9)(4/8). Working then defective: (4/9)(5/8). The total is 2(5)(4)/(9·8) = 5/9."
  },
  {
    id: "psd-h158",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number of members of a club decreased by 80% in January and then decreased by 20% in February. Which of the following describes the overall change over the two periods?",
    choices: [
      "A decrease of 100%",
      "An increase of 84%",
      "A decrease of 84%",
      "A decrease of 90%"
    ],
    answer: 2,
    explanation: "Multiply the growth factors: (0.19999999999999996)(0.8) = 0.16. This is less than 1, so the overall change is a decrease of 84%. Simply adding the percents (−80% and −20%) is incorrect because the second change applies to the new amount."
  },
  {
    id: "psd-h159",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 28,500 residents of a town. In a random sample of 150 of them, 26 cycle to work, and 60% of those 26 also do so every day. Based on the sample, which of the following is the best estimate of the number of residents of the town that cycle to work every day?",
    choices: [
      "4940",
      "2964",
      "17100",
      "16"
    ],
    answer: 1,
    explanation: "In the sample, 26 of 150 cycle to work, and 60% of those meet the second condition, so 26 × 0.6 = 15.6 of the 150 sampled meet both conditions. That is a proportion of 0.104. Applying it to the population: 28,500 × 15.6/150 = 2,964."
  },
  {
    id: "psd-h160",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Each of the 7 values in a data set with a positive standard deviation is multiplied by 3. Which of the following statements about the new data set compared with the original must be true?",
    choices: [
      "The mean and the standard deviation are both multiplied by 3.",
      "The mean is multiplied by 3, and the standard deviation is unchanged.",
      "The mean is multiplied by 3, and the standard deviation is multiplied by 9.",
      "The mean is unchanged, and the standard deviation is multiplied by 3."
    ],
    answer: 0,
    explanation: "Multiplying every value by 3 stretches the data set: every value, and every distance between values, is multiplied by 3. So the mean, median, range, and standard deviation are all multiplied by 3."
  },
  {
    id: "psd-h161",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number x is 30% of the number y, and y is 10% less than the number z. If z is positive, x is what percent of z?",
    choices: [
      "20%",
      "3%",
      "33%",
      "27%"
    ],
    answer: 3,
    explanation: "y = 0.9z and x = 0.3y, so x = 0.3(0.9z) = 0.27z. So x is 27% of z. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h162",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 25%. A sales tax of 8% is then applied to the discounted price, and the final amount paid is $623.70. What was the original price of the jacket?",
    choices: [
      "$751.45",
      "$717.26",
      "$770.00",
      "$831.60"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.75P, and after tax the amount is 1.08(0.75P) = 0.81P. Setting this equal to 623.70 gives P = 623.70/0.81 = 770.00. Undoing the percents by reversing them as additions (e.g., adding back 25%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h163",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 10 numbers is 35. When one number is removed from the data set, the mean of the remaining numbers is 24. What number was removed?",
    choices: [
      "11",
      "134",
      "216",
      "144"
    ],
    answer: 1,
    explanation: "The original sum is 10(35) = 350. The remaining 9 numbers sum to 9(24) = 216. The removed number is 350 − 216 = 134."
  },
  {
    id: "psd-h164",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 39 students in section A had a mean test score of 90, and the students in section B had a mean test score of 68. The mean score of all the students in both sections combined was 79. How many students are in section B?",
    choices: [
      "39",
      "41",
      "78",
      "22"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 39(90) + 68b, and it also equals 79(39 + b). So 3510 + 68b = 3081 + 79b, which gives −11b = −429 and b = 39."
  },
  {
    id: "psd-h165",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>5</td><td>4</td></tr><tr><td>7</td><td>6</td></tr><tr><td>9</td><td>8</td></tr><tr><td>11</td><td>6</td></tr><tr><td>13</td><td>5</td></tr></tbody></table>The frequency table summarizes a data set of 29 values. What is the median of the data set?",
    choices: [
      "9.14",
      "7",
      "10",
      "9"
    ],
    answer: 3,
    explanation: "There are 29 values, so the median is the 15th value when ordered. Counting up the cumulative frequencies (4, 10, 18, 24, 29), that position falls at the value 9. Note the median is not the middle row of the table (9) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h166",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Under 30</th><th>30 to 49</th><th>50 and older</th><th>Total</th></tr></thead><tbody><tr><td>Prefers streaming</td><td>46</td><td>53</td><td>50</td><td>149</td></tr><tr><td>Prefers cable</td><td>52</td><td>28</td><td>21</td><td>101</td></tr><tr><td>Total</td><td>98</td><td>81</td><td>71</td><td>250</td></tr></tbody></table>The table summarizes 250 respondents to a media survey. If one respondent in the \"50 and older\" category is selected at random, what is the probability that the respondent is in the \"Prefers cable\" category?",
    choices: [
      "21/101",
      "21/250",
      "21/71",
      "71/250"
    ],
    answer: 2,
    explanation: "The selection is restricted to the 71 respondents in the \"50 and older\" column. Of these, 21 are in the \"Prefers cable\" row, so the probability is 21/71."
  },
  {
    id: "psd-h167",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Water flows into an empty tank at a constant rate of 13 gallons per minute. The tank holds 9,000 gallons. To the nearest tenth of an hour, how long does it take to fill the tank?",
    choices: [
      "692.3 hours",
      "11.5 hours",
      "6.9 hours",
      "41.5 hours"
    ],
    answer: 1,
    explanation: "In one hour, 13 × 60 = 780 gallons flow in. The time to fill 9,000 gallons is 9000/780 ≈ 11.5 hours."
  },
  {
    id: "psd-h168",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working together at constant rates, printers A and B can print the order in 10/3 minutes. Working alone, printer A can print the order in 10 minutes. How many minutes would it take printer B, working alone, to print the order?",
    choices: [
      "5",
      "20/3",
      "15",
      "20"
    ],
    answer: 0,
    explanation: "The combined rate is 1/(10/3) = 3/10 of the job per minute. Subtracting A's rate: 3/10 − 1/10 = 1/5. So B alone takes 5 minutes."
  },
  {
    id: "psd-h169",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 300 registered voters in a certain city and found that 71% of those in the sample own a pet. The associated margin of error is 2 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 71% of all registered voters in the city own a pet.",
      "Between 69% and 73% of the people in the sample own a pet.",
      "It is plausible that between 69% and 73% of all residents of the state own a pet.",
      "It is plausible that between 69% and 73% of all registered voters in the city own a pet."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 71% ± 2%, or 69% to 73%, and the conclusion applies only to the population sampled (registered voters in the city). The sample percent itself is known exactly (71%), so a range for the sample is wrong, and \"exactly 71%\" ignores sampling variability."
  },
  {
    id: "psd-h170",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher recruited 200 volunteers from among high school students in a certain state. Participants chose for themselves whether to use a reduced-sugar diet. After eight weeks, those who used a reduced-sugar diet had significantly better afternoon energy levels than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a reduced-sugar diet causes improved afternoon energy levels for high school students in the state.",
      "Using a reduced-sugar diet causes improved afternoon energy levels for participants like those in the study, but the result may not generalize to all high school students in the state.",
      "Among the participants in the study, use of a reduced-sugar diet is associated with improved afternoon energy levels, but neither causation nor a generalization to all high school students in the state is justified.",
      "Among high school students in the state, use of a reduced-sugar diet is associated with improved afternoon energy levels, but a cause-and-effect relationship cannot be concluded."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used volunteers, so the results may not generalize. Random assignment to treatments lets you conclude cause and effect; participants chose their own treatment, so only an association can be concluded."
  },
  {
    id: "psd-h171",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the hours studied, and y, the test score, for a set of observations. A line of best fit for the data is y = −1.5x − 12. One observation has an x-value of 15 and a y-value of −38.5. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "4",
      "−4",
      "−38.5",
      "−34.5"
    ],
    answer: 1,
    explanation: "The predicted value is −1.5(15) − 12 = −34.5. The residual is actual − predicted = −38.5 + 34.5 = −4. A negative residual means the point lies below the line."
  },
  {
    id: "psd-h172",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "There are 38 trees in a park, each of which is oak, maple, or pine. The ratio of oak to maple is 4 : 5, and the ratio of maple to pine is 2 : 4. How many are pine?",
    choices: [
      "20",
      "12",
      "8",
      "10"
    ],
    answer: 0,
    explanation: "Combine the ratios by matching the maple parts: oak : maple : pine = 4 : 5 : 10. These parts add to 19, so each part is 38/19 = 2. The number of pine is 10 × 2 = 20."
  },
  {
    id: "psd-h173",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A bag contains 8 red marbles and 3 blue marbles. Two marbles are selected at random, one after the other, without replacement. What is the probability that both are red?",
    choices: [
      "64/121",
      "56/121",
      "15/22",
      "28/55"
    ],
    answer: 3,
    explanation: "The first is red with probability 8/11. Given that, 7 of the remaining 10 are red, so the second is red with probability 7/10. Multiplying: (8/11)(7/10) = 28/55."
  },
  {
    id: "psd-h174",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number of members of a club decreased by 10% in the first year and then decreased by 40% in the second year. Which of the following describes the overall change over the two periods?",
    choices: [
      "A decrease of 50%",
      "An increase of 46%",
      "A decrease of 46%",
      "A decrease of 52%"
    ],
    answer: 2,
    explanation: "Multiply the growth factors: (0.9)(0.6) = 0.54. This is less than 1, so the overall change is a decrease of 46%. Simply adding the percents (−10% and −40%) is incorrect because the second change applies to the new amount."
  },
  {
    id: "psd-h175",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 8,500 residents of a town. In a random sample of 500 of them, 165 cycle to work, and 40% of those 165 also do so every day. Based on the sample, which of the following is the best estimate of the number of residents of the town that cycle to work every day?",
    choices: [
      "2805",
      "1122",
      "3400",
      "66"
    ],
    answer: 1,
    explanation: "In the sample, 165 of 500 cycle to work, and 40% of those meet the second condition, so 165 × 0.4 = 66 of the 500 sampled meet both conditions. That is a proportion of 0.132. Applying it to the population: 8,500 × 66/500 = 1,122."
  },
  {
    id: "psd-h176",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Each of the 12 values in a data set with a positive standard deviation is multiplied by 2. Which of the following statements about the new data set compared with the original must be true?",
    choices: [
      "The mean and the standard deviation are both multiplied by 2.",
      "The mean is multiplied by 2, and the standard deviation is unchanged.",
      "The mean is multiplied by 2, and the standard deviation is multiplied by 4.",
      "The mean is unchanged, and the standard deviation is multiplied by 2."
    ],
    answer: 0,
    explanation: "Multiplying every value by 2 stretches the data set: every value, and every distance between values, is multiplied by 2. So the mean, median, range, and standard deviation are all multiplied by 2."
  },
  {
    id: "psd-h177",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number x is 75% of the number y, and y is 20% greater than the number z. If z is positive, x is what percent of z?",
    choices: [
      "95%",
      "15%",
      "60%",
      "90%"
    ],
    answer: 3,
    explanation: "y = 1.2z and x = 0.75y, so x = 0.75(1.2z) = 0.9z. So x is 90% of z. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h178",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 40%. A sales tax of 6% is then applied to the discounted price, and the final amount paid is $429.30. What was the original price of the jacket?",
    choices: [
      "$650.45",
      "$564.96",
      "$675.00",
      "$715.50"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.6P, and after tax the amount is 1.06(0.6P) = 0.636P. Setting this equal to 429.30 gives P = 429.30/0.636 = 675.00. Undoing the percents by reversing them as additions (e.g., adding back 40%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h179",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 19 numbers is 66. When one number is removed from the data set, the mean of the remaining numbers is 68.5. What number was removed?",
    choices: [
      "4",
      "21",
      "1233",
      "40"
    ],
    answer: 1,
    explanation: "The original sum is 19(66) = 1254. The remaining 18 numbers sum to 18(68.5) = 1233. The removed number is 1254 − 1233 = 21."
  },
  {
    id: "psd-h180",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 22 students in section A had a mean test score of 64, and the students in section B had a mean test score of 94. The mean score of all the students in both sections combined was 83. How many students are in section B?",
    choices: [
      "38",
      "22",
      "42",
      "60"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 22(64) + 94b, and it also equals 83(22 + b). So 1408 + 94b = 1826 + 83b, which gives 11b = 418 and b = 38."
  },
  {
    id: "psd-h181",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>5</td><td>2</td></tr><tr><td>6</td><td>4</td></tr><tr><td>7</td><td>9</td></tr><tr><td>8</td><td>7</td></tr><tr><td>9</td><td>3</td></tr></tbody></table>The frequency table summarizes a data set of 25 values. What is the median of the data set?",
    choices: [
      "7.2",
      "6",
      "8",
      "7"
    ],
    answer: 3,
    explanation: "There are 25 values, so the median is the 13th value when ordered. Counting up the cumulative frequencies (2, 6, 15, 22, 25), that position falls at the value 7. Note the median is not the middle row of the table (7) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h182",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Morning</th><th>Afternoon</th><th>Evening</th><th>Total</th></tr></thead><tbody><tr><td>Rated positive</td><td>5</td><td>7</td><td>47</td><td>59</td></tr><tr><td>Rated negative</td><td>29</td><td>8</td><td>21</td><td>58</td></tr><tr><td>Total</td><td>34</td><td>15</td><td>68</td><td>117</td></tr></tbody></table>The table summarizes 117 customer visits recorded at a clinic. If a visit that is NOT in the \"Morning\" category is selected at random, what is the probability that it is in the \"Rated negative\" category?",
    choices: [
      "29/117",
      "1/2",
      "29/83",
      "29/34"
    ],
    answer: 2,
    explanation: "Visits not in \"Morning\" number 117 − 34 = 83. Of these, the ones in \"Rated negative\" number 58 − 29 = 29. The probability is 29/83."
  },
  {
    id: "psd-h183",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A contractor charges $2.25 per square foot to refinish a floor. A rectangular floor has an area of 120 square yards. What is the total charge, in dollars, to refinish the floor? (1 yard = 3 feet)",
    choices: [
      "$810.00",
      "$2,430.00",
      "$270.00",
      "$30.00"
    ],
    answer: 1,
    explanation: "One square yard is 3 ft × 3 ft = 9 square feet, so 120 square yards = 1080 square feet. The charge is 1080 × $2.25 = $2,430.00. Multiplying by 3 instead of 9 is a common error."
  },
  {
    id: "psd-h184",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working alone at a constant rate, printer A can print the order in 4 minutes. Working alone at a constant rate, printer B can print the order in 6 minutes. How many minutes would it take printers A and B, working together at these rates, to print the order?",
    choices: [
      "12/5",
      "5",
      "10",
      "2"
    ],
    answer: 0,
    explanation: "Rates add, not times. Printer A does 1/4 of the job per minute and printer B does 1/6. Together they do 1/4 + 1/6 = 5/12 of the job per minute, so the time is 12/5 minutes."
  },
  {
    id: "psd-h185",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 500 registered voters in a certain city and found that 59% of those in the sample use public transit at least once a week. The associated margin of error is 4 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 59% of all registered voters in the city use public transit at least once a week.",
      "Between 55% and 63% of the people in the sample use public transit at least once a week.",
      "It is plausible that between 55% and 63% of all residents of the state use public transit at least once a week.",
      "It is plausible that between 55% and 63% of all registered voters in the city use public transit at least once a week."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 59% ± 4%, or 55% to 63%, and the conclusion applies only to the population sampled (registered voters in the city). The sample percent itself is known exactly (59%), so a range for the sample is wrong, and \"exactly 59%\" ignores sampling variability."
  },
  {
    id: "psd-h186",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 200 members of a national hiking club. Participants chose for themselves whether to use a daily stretching routine. After eight weeks, those who used a daily stretching routine had significantly better reported back pain than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a daily stretching routine causes improved reported back pain for members of the club.",
      "Using a daily stretching routine causes improved reported back pain for participants like those in the study, but the result may not generalize to all members of the club.",
      "Among members of the club, use of a daily stretching routine is associated with improved reported back pain, but a cause-and-effect relationship cannot be concluded.",
      "Among the participants in the study, use of a daily stretching routine is associated with improved reported back pain, but neither causation nor a generalization to all members of the club is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used a random sample, so generalizing to all members of the club is justified. Random assignment to treatments lets you conclude cause and effect; participants chose their own treatment, so only an association can be concluded."
  },
  {
    id: "psd-h187",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the temperature (°C), and y, the daily sales (dozens), for a set of observations. A line of best fit for the data is y = 3.5x + 22. One observation has an x-value of 8 and a y-value of 47. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "3",
      "−3",
      "47",
      "50"
    ],
    answer: 1,
    explanation: "The predicted value is 3.5(8) + 22 = 50. The residual is actual − predicted = 47 − 50 = −3. A negative residual means the point lies below the line."
  },
  {
    id: "psd-h188",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "The ratio of red to blue marbles in a bag is 6 : 7, and the ratio of blue to green marbles is 8 : 7. What is the ratio of red to green marbles?",
    choices: [
      "48 : 49",
      "6 : 7",
      "42 : 56",
      "14 : 14"
    ],
    answer: 0,
    explanation: "Make the blue parts match. The least common multiple of 7 and 8 is 56. Scaling gives red : blue = 48 : 56 and blue : green = 56 : 49. So red : green = 48 : 49, which simplifies to 48 : 49."
  },
  {
    id: "psd-h189",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A bag contains 2 red marbles and 8 blue marbles. Two marbles are selected at random without replacement. What is the probability that one is red and the other is blue?",
    choices: [
      "8/45",
      "8/25",
      "4/25",
      "16/45"
    ],
    answer: 3,
    explanation: "There are two orders. Red then blue: (2/10)(8/9). Blue then red: (8/10)(2/9). The total is 2(2)(8)/(10·9) = 16/45."
  },
  {
    id: "psd-h190",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number of members of a club decreased by 25% in January and then decreased by 20% in February. Which of the following describes the overall change over the two periods?",
    choices: [
      "A decrease of 45%",
      "An increase of 40%",
      "A decrease of 40%",
      "A decrease of 46%"
    ],
    answer: 2,
    explanation: "Multiply the growth factors: (0.75)(0.8) = 0.6. This is less than 1, so the overall change is a decrease of 40%. Simply adding the percents (−25% and −20%) is incorrect because the second change applies to the new amount."
  },
  {
    id: "psd-h191",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 9,500 trees in a forest preserve. In a random sample of 120 of them, 42 are oaks, and 40% of those 42 also show signs of leaf blight. Based on the sample, which of the following is the best estimate of the number of trees in the preserve that are oaks showing signs of leaf blight?",
    choices: [
      "3325",
      "1330",
      "3800",
      "17"
    ],
    answer: 1,
    explanation: "In the sample, 42 of 120 are oaks, and 40% of those meet the second condition, so 42 × 0.4 = 16.8 of the 120 sampled meet both conditions. That is a proportion of 0.14. Applying it to the population: 9,500 × 16.8/120 = 1,330."
  },
  {
    id: "psd-h192",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 10 values between 20 and 40. A new value of 125 is added to the data set. Which of the following best describes how the mean and the median change?",
    choices: [
      "The mean increases substantially more than the median does.",
      "The median increases substantially more than the mean does.",
      "The mean and the median increase by the same amount.",
      "Neither the mean nor the median changes."
    ],
    answer: 0,
    explanation: "The value 125 is far above all the other values. The mean uses every value's size, so it is pulled strongly upward. The median depends only on the middle position, which moves by at most half a position, and the middle values are all between 20 and 40. So the median changes very little."
  },
  {
    id: "psd-h193",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number a is 80% of the number b, and b is 25% greater than the number c. If c is positive, a is what percent of c?",
    choices: [
      "105%",
      "20%",
      "60%",
      "100%"
    ],
    answer: 3,
    explanation: "b = 1.25c and a = 0.8b, so a = 0.8(1.25c) = c. So a is 100% of c. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h194",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 35%. A sales tax of 8% is then applied to the discounted price, and the final amount paid is $280.80. What was the original price of the jacket?",
    choices: [
      "$384.66",
      "$348.75",
      "$400.00",
      "$432.00"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.65P, and after tax the amount is 1.08(0.65P) = 0.702P. Setting this equal to 280.80 gives P = 280.80/0.702 = 400.00. Undoing the percents by reversing them as additions (e.g., adding back 35%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h195",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A student's mean score on 7 quizzes is 50. The student will take 2 more quizzes and wants the mean of all 9 quiz scores to be exactly 56. If the student earns the same score on each of the 2 new quizzes, what must that score be?",
    choices: [
      "62",
      "77",
      "84",
      "58"
    ],
    answer: 1,
    explanation: "The current total is 7(50) = 350. For a mean of 56 over 9 quizzes, the total must be 9(56) = 504. The 2 new quizzes must add 154 points, so each must be 154/2 = 77."
  },
  {
    id: "psd-h196",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 16 students in section A had a mean test score of 78, and the students in section B had a mean test score of 63. The mean score of all the students in both sections combined was 69. How many students are in section B?",
    choices: [
      "24",
      "16",
      "26",
      "40"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 16(78) + 63b, and it also equals 69(16 + b). So 1248 + 63b = 1104 + 69b, which gives −6b = −144 and b = 24."
  },
  {
    id: "psd-h197",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>2</td><td>8</td></tr><tr><td>5</td><td>4</td></tr><tr><td>8</td><td>1</td></tr><tr><td>11</td><td>4</td></tr><tr><td>14</td><td>4</td></tr></tbody></table>The frequency table summarizes a data set of 21 values. What is the median of the data set?",
    choices: [
      "8",
      "6.86",
      "2",
      "5"
    ],
    answer: 3,
    explanation: "There are 21 values, so the median is the 11th value when ordered. Counting up the cumulative frequencies (8, 12, 13, 17, 21), that position falls at the value 5. Note the median is not the middle row of the table (8) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h198",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Under 30</th><th>30 to 49</th><th>50 and older</th><th>Total</th></tr></thead><tbody><tr><td>Prefers streaming</td><td>14</td><td>16</td><td>31</td><td>61</td></tr><tr><td>Prefers cable</td><td>10</td><td>52</td><td>44</td><td>106</td></tr><tr><td>Total</td><td>24</td><td>68</td><td>75</td><td>167</td></tr></tbody></table>The table summarizes 167 respondents to a media survey. If a respondent that is NOT in the \"30 to 49\" category is selected at random, what is the probability that it is in the \"Prefers streaming\" category?",
    choices: [
      "45/167",
      "45/61",
      "5/11",
      "4/17"
    ],
    answer: 2,
    explanation: "Respondents not in \"30 to 49\" number 167 − 68 = 99. Of these, the ones in \"Prefers streaming\" number 61 − 16 = 45. The probability is 45/99 = 5/11."
  },
  {
    id: "psd-h199",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Water flows into an empty tank at a constant rate of 16 gallons per minute. The tank holds 5,000 gallons. To the nearest tenth of an hour, how long does it take to fill the tank?",
    choices: [
      "312.5 hours",
      "5.2 hours",
      "3.1 hours",
      "18.8 hours"
    ],
    answer: 1,
    explanation: "In one hour, 16 × 60 = 960 gallons flow in. The time to fill 5,000 gallons is 5000/960 ≈ 5.2 hours."
  },
  {
    id: "psd-h200",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working alone at a constant rate, pipe A can fill the tank in 7 minutes. Working alone at a constant rate, pipe B can fill the tank in 6 minutes. How many minutes would it take pipes A and B, working together at these rates, to fill the tank?",
    choices: [
      "42/13",
      "13/2",
      "13",
      "1"
    ],
    answer: 0,
    explanation: "Rates add, not times. Pipe A does 1/7 of the job per minute and pipe B does 1/6. Together they do 1/7 + 1/6 = 13/42 of the job per minute, so the time is 42/13 minutes."
  },
  {
    id: "psd-h201",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 800 employees of a large company and found that 74% of those in the sample own a pet. The associated margin of error is 3 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 74% of all employees of the company own a pet.",
      "Between 71% and 77% of the people in the sample own a pet.",
      "It is plausible that between 71% and 77% of all residents of the state own a pet.",
      "It is plausible that between 71% and 77% of all employees of the company own a pet."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 74% ± 3%, or 71% to 77%, and the conclusion applies only to the population sampled (employees of the company). The sample percent itself is known exactly (74%), so a range for the sample is wrong, and \"exactly 74%\" ignores sampling variability."
  },
  {
    id: "psd-h202",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher recruited 200 volunteers from among members of a national hiking club. The participants were randomly assigned to either use a reduced-sugar diet or not. After eight weeks, those who used a reduced-sugar diet had significantly better afternoon energy levels than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a reduced-sugar diet causes improved afternoon energy levels for members of the club.",
      "Among members of the club, use of a reduced-sugar diet is associated with improved afternoon energy levels, but a cause-and-effect relationship cannot be concluded.",
      "Using a reduced-sugar diet causes improved afternoon energy levels for participants like those in the study, but the result may not generalize to all members of the club.",
      "Among the participants in the study, use of a reduced-sugar diet is associated with improved afternoon energy levels, but neither causation nor a generalization to all members of the club is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used volunteers, so the results may not generalize. Random assignment to treatments lets you conclude cause and effect; participants were randomly assigned, so a causal conclusion is justified."
  },
  {
    id: "psd-h203",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the hours studied, and y, the test score, for a set of observations. A line of best fit for the data is y = 4x + 24. One observation has an x-value of 4 and a y-value of 38.5. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "1.5",
      "−3/2",
      "38.5",
      "40"
    ],
    answer: 1,
    explanation: "The predicted value is 4(4) + 24 = 40. The residual is actual − predicted = 38.5 − 40 = −1.5. A negative residual means the point lies below the line."
  },
  {
    id: "psd-h204",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "There are 786 books on a shelf, each of which is fiction, biography, or poetry. The ratio of fiction to biography is 9 : 5, and the ratio of biography to poetry is 9 : 1. How many are poetry?",
    choices: [
      "30",
      "52",
      "486",
      "270"
    ],
    answer: 0,
    explanation: "Combine the ratios by matching the biography parts: fiction : biography : poetry = 81 : 45 : 5. These parts add to 131, so each part is 786/131 = 6. The number of poetry is 5 × 6 = 30."
  },
  {
    id: "psd-h205",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A box contains 4 defective batteries and 6 working batteries. Two batteries are selected at random without replacement. What is the probability that at least one of them is defective?",
    choices: [
      "1/3",
      "2/15",
      "4/5",
      "2/3"
    ],
    answer: 3,
    explanation: "Use the complement. The probability that neither is defective is (6/10)(5/9) = 1/3. So the probability of at least one defective is 1 − 1/3 = 2/3."
  },
  {
    id: "psd-h206",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a stock increased by 60% in the first year and then increased by 20% in the second year. Which of the following describes the overall change over the two periods?",
    choices: [
      "An increase of 80%",
      "A decrease of 92%",
      "An increase of 92%",
      "An increase of 98%"
    ],
    answer: 2,
    explanation: "Multiply the growth factors: (1.6)(1.2) = 1.92. This is more than 1, so the overall change is an increase of 92%. Simply adding the percents (+60% and +20%) is incorrect because the second change applies to the new amount."
  },
  {
    id: "psd-h207",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 8,000 trees in a forest preserve. In a random sample of 240 of them, 72 are oaks, and 60% of those 72 also show signs of leaf blight. Based on the sample, which of the following is the best estimate of the number of trees in the preserve that are oaks showing signs of leaf blight?",
    choices: [
      "2400",
      "1440",
      "4800",
      "43"
    ],
    answer: 1,
    explanation: "In the sample, 72 of 240 are oaks, and 60% of those meet the second condition, so 72 × 0.6 = 43.199999999999996 of the 240 sampled meet both conditions. That is a proportion of 0.18. Applying it to the population: 8,000 × 43.199999999999996/240 = 1,440."
  },
  {
    id: "psd-h208",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 9 values between 20 and 40. A new value of 109 is added to the data set. Which of the following best describes how the mean and the median change?",
    choices: [
      "The mean increases substantially more than the median does.",
      "The median increases substantially more than the mean does.",
      "The mean and the median increase by the same amount.",
      "Neither the mean nor the median changes."
    ],
    answer: 0,
    explanation: "The value 109 is far above all the other values. The mean uses every value's size, so it is pulled strongly upward. The median depends only on the middle position, which moves by at most half a position, and the middle values are all between 20 and 40. So the median changes very little."
  },
  {
    id: "psd-h209",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number a is 30% of the number b, and b is 80% greater than the number c. If c is positive, a is what percent of c?",
    choices: [
      "110%",
      "24%",
      "6%",
      "54%"
    ],
    answer: 3,
    explanation: "b = 1.8c and a = 0.3b, so a = 0.3(1.8c) = 0.54c. So a is 54% of c. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h210",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 10%. A sales tax of 6% is then applied to the discounted price, and the final amount paid is $443.61. What was the original price of the jacket?",
    choices: [
      "$462.09",
      "$458.69",
      "$465.00",
      "$492.90"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.9P, and after tax the amount is 1.06(0.9P) = 0.954P. Setting this equal to 443.61 gives P = 443.61/0.954 = 465.00. Undoing the percents by reversing them as additions (e.g., adding back 10%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h211",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 11 numbers is 43. When one number is removed from the data set, the mean of the remaining numbers is 43.5. What number was removed?",
    choices: [
      "2",
      "38",
      "435",
      "49"
    ],
    answer: 1,
    explanation: "The original sum is 11(43) = 473. The remaining 10 numbers sum to 10(43.5) = 435. The removed number is 473 − 435 = 38."
  },
  {
    id: "psd-h212",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 39 students in section A had a mean test score of 73, and the students in section B had a mean test score of 89. The mean score of all the students in both sections combined was 76. How many students are in section B?",
    choices: [
      "9",
      "39",
      "10",
      "48"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 39(73) + 89b, and it also equals 76(39 + b). So 2847 + 89b = 2964 + 76b, which gives 13b = 117 and b = 9."
  },
  {
    id: "psd-h213",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>2</td><td>4</td></tr><tr><td>5</td><td>9</td></tr><tr><td>8</td><td>4</td></tr><tr><td>11</td><td>7</td></tr><tr><td>14</td><td>2</td></tr></tbody></table>The frequency table summarizes a data set of 26 values. What is the median of the data set?",
    choices: [
      "8",
      "7.31",
      "5",
      "6.5"
    ],
    answer: 3,
    explanation: "There are 26 values, so the median is the mean of the 13th and 14th values when ordered. Counting up the cumulative frequencies (4, 13, 17, 24, 26), that position falls at the value 6.5. Note the median is not the middle row of the table (8) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h214",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Morning</th><th>Afternoon</th><th>Evening</th><th>Total</th></tr></thead><tbody><tr><td>Rated positive</td><td>31</td><td>25</td><td>24</td><td>80</td></tr><tr><td>Rated negative</td><td>51</td><td>29</td><td>52</td><td>132</td></tr><tr><td>Total</td><td>82</td><td>54</td><td>76</td><td>212</td></tr></tbody></table>The table summarizes 212 customer visits recorded at a clinic. If one visit in the \"Afternoon\" category is selected at random, what is the probability that the visit is in the \"Rated positive\" category?",
    choices: [
      "5/16",
      "25/212",
      "25/54",
      "27/106"
    ],
    answer: 2,
    explanation: "The selection is restricted to the 54 visits in the \"Afternoon\" column. Of these, 25 are in the \"Rated positive\" row, so the probability is 25/54."
  },
  {
    id: "psd-h215",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A material has a density of 7.8 grams per cubic centimeter. What is its density in kilograms per cubic meter? (1 kilogram = 1,000 grams and 1 meter = 100 centimeters)",
    choices: [
      "780",
      "7,800",
      "78",
      "7,800,000"
    ],
    answer: 1,
    explanation: "1 cubic meter = (100 cm)³ = 1,000,000 cubic centimeters. So 7.8 g/cm³ = 7.8 × 1,000,000 g/m³ = 7,800,000 g/m³. Dividing by 1,000 to convert grams to kilograms gives 7,800 kg/m³."
  },
  {
    id: "psd-h216",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working alone at a constant rate, printer A can print the order in 3 hours. Working alone at a constant rate, printer B can print the order in 5 hours. How many hours would it take printers A and B, working together at these rates, to print the order?",
    choices: [
      "15/8",
      "4",
      "8",
      "2"
    ],
    answer: 0,
    explanation: "Rates add, not times. Printer A does 1/3 of the job per hour and printer B does 1/5. Together they do 1/3 + 1/5 = 8/15 of the job per hour, so the time is 15/8 hours."
  },
  {
    id: "psd-h217",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 800 registered voters in a certain city and found that 33% of those in the sample own a pet. The associated margin of error is 5 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 33% of all registered voters in the city own a pet.",
      "Between 28% and 38% of the people in the sample own a pet.",
      "It is plausible that between 28% and 38% of all residents of the state own a pet.",
      "It is plausible that between 28% and 38% of all registered voters in the city own a pet."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 33% ± 5%, or 28% to 38%, and the conclusion applies only to the population sampled (registered voters in the city). The sample percent itself is known exactly (33%), so a range for the sample is wrong, and \"exactly 33%\" ignores sampling variability."
  },
  {
    id: "psd-h218",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher recruited 200 volunteers from among high school students in a certain state. The participants were randomly assigned to either use a reduced-sugar diet or not. After eight weeks, those who used a reduced-sugar diet had significantly better afternoon energy levels than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a reduced-sugar diet causes improved afternoon energy levels for high school students in the state.",
      "Among high school students in the state, use of a reduced-sugar diet is associated with improved afternoon energy levels, but a cause-and-effect relationship cannot be concluded.",
      "Using a reduced-sugar diet causes improved afternoon energy levels for participants like those in the study, but the result may not generalize to all high school students in the state.",
      "Among the participants in the study, use of a reduced-sugar diet is associated with improved afternoon energy levels, but neither causation nor a generalization to all high school students in the state is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used volunteers, so the results may not generalize. Random assignment to treatments lets you conclude cause and effect; participants were randomly assigned, so a causal conclusion is justified."
  },
  {
    id: "psd-h219",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the hours studied, and y, the test score, for a set of observations. A line of best fit for the data is y = 3.5x + 6. One observation has an x-value of 14 and a y-value of 52. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "3",
      "−3",
      "52",
      "55"
    ],
    answer: 1,
    explanation: "The predicted value is 3.5(14) + 6 = 55. The residual is actual − predicted = 52 − 55 = −3. A negative residual means the point lies below the line."
  },
  {
    id: "psd-h220",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "The ratio of oak to maple trees in a park is 6 : 2, and the ratio of maple to pine trees is 9 : 6. What is the ratio of oak to pine trees?",
    choices: [
      "9 : 2",
      "6 : 6",
      "36 : 18",
      "15 : 8"
    ],
    answer: 0,
    explanation: "Make the maple parts match. The least common multiple of 2 and 9 is 18. Scaling gives oak : maple = 54 : 18 and maple : pine = 18 : 12. So oak : pine = 54 : 12, which simplifies to 9 : 2."
  },
  {
    id: "psd-h221",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A tray contains 4 vanilla cupcakes and 3 chocolate cupcakes. Two cupcakes are selected at random, one after the other, without replacement. What is the probability that both are vanilla?",
    choices: [
      "16/49",
      "12/49",
      "1/2",
      "2/7"
    ],
    answer: 3,
    explanation: "The first is vanilla with probability 4/7. Given that, 3 of the remaining 6 are vanilla, so the second is vanilla with probability 3/6. Multiplying: (4/7)(3/6) = 2/7."
  },
  {
    id: "psd-h222",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a stock decreased by 30% in the first year and then increased by 25% in the second year. Which of the following describes the overall change over the two periods?",
    choices: [
      "A decrease of 5%",
      "An increase of 12.5%",
      "A decrease of 12.5%",
      "A decrease of 18.5%"
    ],
    answer: 2,
    explanation: "Multiply the growth factors: (0.7)(1.25) = 0.875. This is less than 1, so the overall change is a decrease of 12.5%. Simply adding the percents (−30% and +25%) is incorrect because the second change applies to the new amount."
  },
  {
    id: "psd-h223",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 25,000 residents of a town. In a random sample of 150 of them, 54 cycle to work, and 25% of those 54 also do so every day. Based on the sample, which of the following is the best estimate of the number of residents of the town that cycle to work every day?",
    choices: [
      "9000",
      "2250",
      "6250",
      "14"
    ],
    answer: 1,
    explanation: "In the sample, 54 of 150 cycle to work, and 25% of those meet the second condition, so 54 × 0.25 = 13.5 of the 150 sampled meet both conditions. That is a proportion of 0.09. Applying it to the population: 25,000 × 13.5/150 = 2,250."
  },
  {
    id: "psd-h224",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 10 values between 20 and 40. A new value of 120 is added to the data set. Which of the following best describes how the mean and the median change?",
    choices: [
      "The mean increases substantially more than the median does.",
      "The median increases substantially more than the mean does.",
      "The mean and the median increase by the same amount.",
      "Neither the mean nor the median changes."
    ],
    answer: 0,
    explanation: "The value 120 is far above all the other values. The mean uses every value's size, so it is pulled strongly upward. The median depends only on the middle position, which moves by at most half a position, and the middle values are all between 20 and 40. So the median changes very little."
  },
  {
    id: "psd-h225",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number x is 45% of the number y, and y is 50% greater than the number z. If z is positive, x is what percent of z?",
    choices: [
      "95%",
      "22.5%",
      "−5%",
      "67.5%"
    ],
    answer: 3,
    explanation: "y = 1.5z and x = 0.45y, so x = 0.45(1.5z) = 0.68z. So x is 67.5% of z. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h226",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 40%. A sales tax of 8% is then applied to the discounted price, and the final amount paid is $495.72. What was the original price of the jacket?",
    choices: [
      "$729.00",
      "$638.49",
      "$765.00",
      "$826.20"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.6P, and after tax the amount is 1.08(0.6P) = 0.648P. Setting this equal to 495.72 gives P = 495.72/0.648 = 765.00. Undoing the percents by reversing them as additions (e.g., adding back 40%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h227",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 6 numbers is 69. When one number is removed from the data set, the mean of the remaining numbers is 75. What number was removed?",
    choices: [
      "6",
      "39",
      "375",
      "45"
    ],
    answer: 1,
    explanation: "The original sum is 6(69) = 414. The remaining 5 numbers sum to 5(75) = 375. The removed number is 414 − 375 = 39."
  },
  {
    id: "psd-h228",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 10 students in section A had a mean test score of 70, and the students in section B had a mean test score of 89. The mean score of all the students in both sections combined was 79. How many students are in section B?",
    choices: [
      "9",
      "10",
      "19",
      "8"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 10(70) + 89b, and it also equals 79(10 + b). So 700 + 89b = 790 + 79b, which gives 10b = 90 and b = 9."
  },
  {
    id: "psd-h229",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>1</td><td>9</td></tr><tr><td>3</td><td>8</td></tr><tr><td>5</td><td>2</td></tr><tr><td>7</td><td>1</td></tr><tr><td>9</td><td>1</td></tr></tbody></table>The frequency table summarizes a data set of 21 values. What is the median of the data set?",
    choices: [
      "5",
      "2.81",
      "1",
      "3"
    ],
    answer: 3,
    explanation: "There are 21 values, so the median is the 11th value when ordered. Counting up the cumulative frequencies (9, 17, 19, 20, 21), that position falls at the value 3. Note the median is not the middle row of the table (5) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h230",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Site A</th><th>Site B</th><th>Site C</th><th>Total</th></tr></thead><tbody><tr><td>Flowering</td><td>5</td><td>59</td><td>46</td><td>110</td></tr><tr><td>Not flowering</td><td>31</td><td>28</td><td>6</td><td>65</td></tr><tr><td>Total</td><td>36</td><td>87</td><td>52</td><td>175</td></tr></tbody></table>The table summarizes 175 plants in a botanical study. If a plant that is NOT in the \"Site C\" category is selected at random, what is the probability that it is in the \"Flowering\" category?",
    choices: [
      "64/175",
      "32/55",
      "64/123",
      "23/26"
    ],
    answer: 2,
    explanation: "Plants not in \"Site C\" number 175 − 52 = 123. Of these, the ones in \"Flowering\" number 110 − 46 = 64. The probability is 64/123."
  },
  {
    id: "psd-h231",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A contractor charges $4.50 per square foot to refinish a floor. A rectangular floor has an area of 230 square yards. What is the total charge, in dollars, to refinish the floor? (1 yard = 3 feet)",
    choices: [
      "$3,105.00",
      "$9,315.00",
      "$1,035.00",
      "$115.00"
    ],
    answer: 1,
    explanation: "One square yard is 3 ft × 3 ft = 9 square feet, so 230 square yards = 2070 square feet. The charge is 2070 × $4.50 = $9,315.00. Multiplying by 3 instead of 9 is a common error."
  },
  {
    id: "psd-h232",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working alone at a constant rate, pipe A can fill the tank in 3 hours. Working alone at a constant rate, pipe B can fill the tank in 9 hours. How many hours would it take pipes A and B, working together at these rates, to fill the tank?",
    choices: [
      "9/4",
      "6",
      "12",
      "9/2"
    ],
    answer: 0,
    explanation: "Rates add, not times. Pipe A does 1/3 of the job per hour and pipe B does 1/9. Together they do 1/3 + 1/9 = 4/9 of the job per hour, so the time is 9/4 hours."
  },
  {
    id: "psd-h233",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 1200 employees of a large company and found that 46% of those in the sample would attend a weekend event. The associated margin of error is 2 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 46% of all employees of the company would attend a weekend event.",
      "Between 44% and 48% of the people in the sample would attend a weekend event.",
      "It is plausible that between 44% and 48% of all residents of the state would attend a weekend event.",
      "It is plausible that between 44% and 48% of all employees of the company would attend a weekend event."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 46% ± 2%, or 44% to 48%, and the conclusion applies only to the population sampled (employees of the company). The sample percent itself is known exactly (46%), so a range for the sample is wrong, and \"exactly 46%\" ignores sampling variability."
  },
  {
    id: "psd-h234",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher recruited 200 volunteers from among members of a national hiking club. Participants chose for themselves whether to use a new study app. After eight weeks, those who used a new study app had significantly better test scores than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a new study app causes improved test scores for members of the club.",
      "Using a new study app causes improved test scores for participants like those in the study, but the result may not generalize to all members of the club.",
      "Among the participants in the study, use of a new study app is associated with improved test scores, but neither causation nor a generalization to all members of the club is justified.",
      "Among members of the club, use of a new study app is associated with improved test scores, but a cause-and-effect relationship cannot be concluded."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used volunteers, so the results may not generalize. Random assignment to treatments lets you conclude cause and effect; participants chose their own treatment, so only an association can be concluded."
  },
  {
    id: "psd-h235",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the age of a tree (years), and y, the height (feet), for a set of observations. A line of best fit for the data is y = 2.4x + 22. One observation has an x-value of 6 and a y-value of 41.9. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "−5.5",
      "11/2",
      "41.9",
      "36.4"
    ],
    answer: 1,
    explanation: "The predicted value is 2.4(6) + 22 = 36.4. The residual is actual − predicted = 41.9 − 36.4 = 5.5. A positive residual means the point lies above the line."
  },
  {
    id: "psd-h236",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "There are 84 trees in a park, each of which is oak, maple, or pine. The ratio of oak to maple is 2 : 9, and the ratio of maple to pine is 3 : 1. How many are pine?",
    choices: [
      "18",
      "7",
      "12",
      "54"
    ],
    answer: 0,
    explanation: "Combine the ratios by matching the maple parts: oak : maple : pine = 2 : 9 : 3. These parts add to 14, so each part is 84/14 = 6. The number of pine is 3 × 6 = 18."
  },
  {
    id: "psd-h237",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A box contains 7 defective batteries and 2 working batteries. Two batteries are selected at random without replacement. What is the probability that at least one of them is defective?",
    choices: [
      "1/36",
      "7/12",
      "7/9",
      "35/36"
    ],
    answer: 3,
    explanation: "Use the complement. The probability that neither is defective is (2/9)(1/8) = 1/36. So the probability of at least one defective is 1 − 1/36 = 35/36."
  },
  {
    id: "psd-h238",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number of members of a club increased by 10% in the first quarter and then decreased by 20% in the second quarter. Which of the following describes the overall change over the two periods?",
    choices: [
      "A decrease of 10%",
      "An increase of 12%",
      "A decrease of 12%",
      "A decrease of 18%"
    ],
    answer: 2,
    explanation: "Multiply the growth factors: (1.1)(0.8) = 0.88. This is less than 1, so the overall change is a decrease of 12%. Simply adding the percents (+10% and −20%) is incorrect because the second change applies to the new amount."
  },
  {
    id: "psd-h239",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 24,000 fish in a lake. In a random sample of 300 of them, 65 are trout, and 25% of those 65 also are longer than 30 centimeters. Based on the sample, which of the following is the best estimate of the number of fish in the lake that are trout longer than 30 centimeters?",
    choices: [
      "5200",
      "1300",
      "6000",
      "16"
    ],
    answer: 1,
    explanation: "In the sample, 65 of 300 are trout, and 25% of those meet the second condition, so 65 × 0.25 = 16.25 of the 300 sampled meet both conditions. That is a proportion of 0.05417. Applying it to the population: 24,000 × 16.25/300 = 1,300."
  },
  {
    id: "psd-h240",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 9 values between 20 and 40. A new value of 94 is added to the data set. Which of the following best describes how the mean and the median change?",
    choices: [
      "The mean increases substantially more than the median does.",
      "The median increases substantially more than the mean does.",
      "The mean and the median increase by the same amount.",
      "Neither the mean nor the median changes."
    ],
    answer: 0,
    explanation: "The value 94 is far above all the other values. The mean uses every value's size, so it is pulled strongly upward. The median depends only on the middle position, which moves by at most half a position, and the middle values are all between 20 and 40. So the median changes very little."
  },
  {
    id: "psd-h241",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number p is 125% of the number r, and r is 50% greater than the number s. If s is positive, p is what percent of s?",
    choices: [
      "175%",
      "62.5%",
      "75%",
      "187.5%"
    ],
    answer: 3,
    explanation: "r = 1.5s and p = 1.25r, so p = 1.25(1.5s) = 1.88s. So p is 187.5% of s. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h242",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 40%. A sales tax of 10% is then applied to the discounted price, and the final amount paid is $75.90. What was the original price of the jacket?",
    choices: [
      "$108.43",
      "$95.63",
      "$115.00",
      "$126.50"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.6P, and after tax the amount is 1.1(0.6P) = 0.66P. Setting this equal to 75.90 gives P = 75.90/0.66 = 115.00. Undoing the percents by reversing them as additions (e.g., adding back 40%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h243",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 10 numbers is 47. When one number is removed from the data set, the mean of the remaining numbers is 48. What number was removed?",
    choices: [
      "1",
      "38",
      "432",
      "48"
    ],
    answer: 1,
    explanation: "The original sum is 10(47) = 470. The remaining 9 numbers sum to 9(48) = 432. The removed number is 470 − 432 = 38."
  },
  {
    id: "psd-h244",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 22 students in section A had a mean test score of 81, and the students in section B had a mean test score of 62. The mean score of all the students in both sections combined was 73. How many students are in section B?",
    choices: [
      "16",
      "22",
      "18",
      "38"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 22(81) + 62b, and it also equals 73(22 + b). So 1782 + 62b = 1606 + 73b, which gives −11b = −176 and b = 16."
  },
  {
    id: "psd-h245",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>7</td><td>1</td></tr><tr><td>8</td><td>1</td></tr><tr><td>9</td><td>1</td></tr><tr><td>10</td><td>1</td></tr><tr><td>11</td><td>9</td></tr></tbody></table>The frequency table summarizes a data set of 13 values. What is the median of the data set?",
    choices: [
      "9",
      "10.23",
      "8",
      "11"
    ],
    answer: 3,
    explanation: "There are 13 values, so the median is the 7th value when ordered. Counting up the cumulative frequencies (1, 2, 3, 4, 13), that position falls at the value 11. Note the median is not the middle row of the table (9) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h246",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Grade 10</th><th>Grade 11</th><th>Grade 12</th><th>Total</th></tr></thead><tbody><tr><td>Plays a sport</td><td>8</td><td>38</td><td>49</td><td>95</td></tr><tr><td>Does not play a sport</td><td>31</td><td>14</td><td>26</td><td>71</td></tr><tr><td>Total</td><td>39</td><td>52</td><td>75</td><td>166</td></tr></tbody></table>The table summarizes 166 students surveyed at a high school. If a student that is NOT in the \"Grade 12\" category is selected at random, what is the probability that it is in the \"Plays a sport\" category?",
    choices: [
      "23/83",
      "46/95",
      "46/91",
      "49/75"
    ],
    answer: 2,
    explanation: "Students not in \"Grade 12\" number 166 − 75 = 91. Of these, the ones in \"Plays a sport\" number 95 − 49 = 46. The probability is 46/91."
  },
  {
    id: "psd-h247",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A material has a density of 19.3 grams per cubic centimeter. What is its density in kilograms per cubic meter? (1 kilogram = 1,000 grams and 1 meter = 100 centimeters)",
    choices: [
      "1,930",
      "19,300",
      "193",
      "19,300,000"
    ],
    answer: 1,
    explanation: "1 cubic meter = (100 cm)³ = 1,000,000 cubic centimeters. So 19.3 g/cm³ = 19.3 × 1,000,000 g/m³ = 19,300,000 g/m³. Dividing by 1,000 to convert grams to kilograms gives 19,300 kg/m³."
  },
  {
    id: "psd-h248",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working together at constant rates, printers A and B can print the order in 44/15 hours. Working alone, printer A can print the order in 4 hours. How many hours would it take printer B, working alone, to print the order?",
    choices: [
      "11",
      "16/15",
      "88/15",
      "15"
    ],
    answer: 0,
    explanation: "The combined rate is 1/(44/15) = 15/44 of the job per hour. Subtracting A's rate: 15/44 − 1/4 = 1/11. So B alone takes 11 hours."
  },
  {
    id: "psd-h249",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 800 registered voters in a certain city and found that 68% of those in the sample support a proposed park. The associated margin of error is 5 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 68% of all registered voters in the city support a proposed park.",
      "Between 63% and 73% of the people in the sample support a proposed park.",
      "It is plausible that between 63% and 73% of all residents of the state support a proposed park.",
      "It is plausible that between 63% and 73% of all registered voters in the city support a proposed park."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 68% ± 5%, or 63% to 73%, and the conclusion applies only to the population sampled (registered voters in the city). The sample percent itself is known exactly (68%), so a range for the sample is wrong, and \"exactly 68%\" ignores sampling variability."
  },
  {
    id: "psd-h250",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 200 members of a national hiking club. The participants were randomly assigned to either use a reduced-sugar diet or not. After eight weeks, those who used a reduced-sugar diet had significantly better afternoon energy levels than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a reduced-sugar diet causes improved afternoon energy levels for participants like those in the study, but the result may not generalize to all members of the club.",
      "Among members of the club, use of a reduced-sugar diet is associated with improved afternoon energy levels, but a cause-and-effect relationship cannot be concluded.",
      "Using a reduced-sugar diet causes improved afternoon energy levels for members of the club.",
      "Among the participants in the study, use of a reduced-sugar diet is associated with improved afternoon energy levels, but neither causation nor a generalization to all members of the club is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used a random sample, so generalizing to all members of the club is justified. Random assignment to treatments lets you conclude cause and effect; participants were randomly assigned, so a causal conclusion is justified."
  },
  {
    id: "psd-h251",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the temperature (°C), and y, the daily sales (dozens), for a set of observations. A line of best fit for the data is y = −1.5x + 33. One observation has an x-value of 13 and a y-value of 15.5. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "−2",
      "2",
      "15.5",
      "13.5"
    ],
    answer: 1,
    explanation: "The predicted value is −1.5(13) + 33 = 13.5. The residual is actual − predicted = 15.5 − 13.5 = 2. A positive residual means the point lies above the line."
  },
  {
    id: "psd-h252",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "There are 204 marbles in a bag, each of which is red, blue, or green. The ratio of red to blue is 9 : 6, and the ratio of blue to green is 7 : 8. How many are green?",
    choices: [
      "64",
      "71",
      "84",
      "56"
    ],
    answer: 0,
    explanation: "Combine the ratios by matching the blue parts: red : blue : green = 21 : 14 : 16. These parts add to 51, so each part is 204/51 = 4. The number of green is 16 × 4 = 64."
  },
  {
    id: "psd-h253",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A box contains 6 defective batteries and 4 working batteries. Two batteries are selected at random without replacement. What is the probability that one is defective and the other is working?",
    choices: [
      "4/15",
      "12/25",
      "6/25",
      "8/15"
    ],
    answer: 3,
    explanation: "There are two orders. Defective then working: (6/10)(4/9). Working then defective: (4/10)(6/9). The total is 2(6)(4)/(10·9) = 8/15."
  },
  {
    id: "psd-h254",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number of members of a club increased by 60% in January and then increased by 40% in February. Which of the following describes the overall change over the two periods?",
    choices: [
      "An increase of 100%",
      "A decrease of 124%",
      "An increase of 124%",
      "An increase of 130%"
    ],
    answer: 2,
    explanation: "Multiply the growth factors: (1.6)(1.4) = 2.24. This is more than 1, so the overall change is an increase of 124%. Simply adding the percents (+60% and +40%) is incorrect because the second change applies to the new amount."
  },
  {
    id: "psd-h255",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 20,000 trees in a forest preserve. In a random sample of 400 of them, 103 are oaks, and 40% of those 103 also show signs of leaf blight. Based on the sample, which of the following is the best estimate of the number of trees in the preserve that are oaks showing signs of leaf blight?",
    choices: [
      "5150",
      "2060",
      "8000",
      "41"
    ],
    answer: 1,
    explanation: "In the sample, 103 of 400 are oaks, and 40% of those meet the second condition, so 103 × 0.4 = 41.2 of the 400 sampled meet both conditions. That is a proportion of 0.103. Applying it to the population: 20,000 × 41.2/400 = 2,060."
  },
  {
    id: "psd-h256",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Each of the 10 values in a data set with a positive standard deviation is multiplied by 2. Which of the following statements about the new data set compared with the original must be true?",
    choices: [
      "The mean and the standard deviation are both multiplied by 2.",
      "The mean is multiplied by 2, and the standard deviation is unchanged.",
      "The mean is multiplied by 2, and the standard deviation is multiplied by 4.",
      "The mean is unchanged, and the standard deviation is multiplied by 2."
    ],
    answer: 0,
    explanation: "Multiplying every value by 2 stretches the data set: every value, and every distance between values, is multiplied by 2. So the mean, median, range, and standard deviation are all multiplied by 2."
  },
  {
    id: "psd-h257",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number a is 150% of the number b, and b is 10% less than the number c. If c is positive, a is what percent of c?",
    choices: [
      "140%",
      "15%",
      "165%",
      "135%"
    ],
    answer: 3,
    explanation: "b = 0.9c and a = 1.5b, so a = 1.5(0.9c) = 1.35c. So a is 135% of c. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h258",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 15%. A sales tax of 6% is then applied to the discounted price, and the final amount paid is $153.17. What was the original price of the jacket?",
    choices: [
      "$168.32",
      "$165.58",
      "$170.00",
      "$180.20"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.85P, and after tax the amount is 1.06(0.85P) = 0.901P. Setting this equal to 153.17 gives P = 153.17/0.901 = 170.00. Undoing the percents by reversing them as additions (e.g., adding back 15%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h259",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 19 numbers is 59. When one number is removed from the data set, the mean of the remaining numbers is 60. What number was removed?",
    choices: [
      "1",
      "41",
      "1080",
      "60"
    ],
    answer: 1,
    explanation: "The original sum is 19(59) = 1121. The remaining 18 numbers sum to 18(60) = 1080. The removed number is 1121 − 1080 = 41."
  },
  {
    id: "psd-h260",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 16 students in section A had a mean test score of 67, and the students in section B had a mean test score of 82. The mean score of all the students in both sections combined was 74. How many students are in section B?",
    choices: [
      "14",
      "16",
      "30",
      "15"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 16(67) + 82b, and it also equals 74(16 + b). So 1072 + 82b = 1184 + 74b, which gives 8b = 112 and b = 14."
  },
  {
    id: "psd-h261",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>1</td><td>4</td></tr><tr><td>4</td><td>3</td></tr><tr><td>7</td><td>4</td></tr><tr><td>10</td><td>9</td></tr><tr><td>13</td><td>1</td></tr></tbody></table>The frequency table summarizes a data set of 21 values. What is the mean of the data set minus the median of the data set?",
    choices: [
      "0.5",
      "1",
      "1.5",
      "0"
    ],
    answer: 3,
    explanation: "The sum of the values is 1(4) + 4(3) + 7(4) + 10(9) + 13(1) = 147, so the mean is 147/21 = 7. The median is the 11th value, which is 7. The difference is 7 − 7 = 0."
  },
  {
    id: "psd-h262",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Morning</th><th>Afternoon</th><th>Evening</th><th>Total</th></tr></thead><tbody><tr><td>Rated positive</td><td>31</td><td>44</td><td>35</td><td>110</td></tr><tr><td>Rated negative</td><td>21</td><td>10</td><td>40</td><td>71</td></tr><tr><td>Total</td><td>52</td><td>54</td><td>75</td><td>181</td></tr></tbody></table>The table summarizes 181 customer visits recorded at a clinic. If one visit in the \"Afternoon\" category is selected at random, what is the probability that the visit is in the \"Rated positive\" category?",
    choices: [
      "2/5",
      "44/181",
      "22/27",
      "54/181"
    ],
    answer: 2,
    explanation: "The selection is restricted to the 54 visits in the \"Afternoon\" column. Of these, 44 are in the \"Rated positive\" row, so the probability is 44/54 = 22/27."
  },
  {
    id: "psd-h263",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A contractor charges $2.25 per square foot to refinish a floor. A rectangular floor has an area of 270 square yards. What is the total charge, in dollars, to refinish the floor? (1 yard = 3 feet)",
    choices: [
      "$1,822.50",
      "$5,467.50",
      "$607.50",
      "$67.50"
    ],
    answer: 1,
    explanation: "One square yard is 3 ft × 3 ft = 9 square feet, so 270 square yards = 2430 square feet. The charge is 2430 × $2.25 = $5,467.50. Multiplying by 3 instead of 9 is a common error."
  },
  {
    id: "psd-h264",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working alone at a constant rate, printer A can print the order in 5 minutes. Working alone at a constant rate, printer B can print the order in 11 minutes. How many minutes would it take printers A and B, working together at these rates, to print the order?",
    choices: [
      "55/16",
      "8",
      "16",
      "6"
    ],
    answer: 0,
    explanation: "Rates add, not times. Printer A does 1/5 of the job per minute and printer B does 1/11. Together they do 1/5 + 1/11 = 16/55 of the job per minute, so the time is 55/16 minutes."
  },
  {
    id: "psd-h265",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 400 registered voters in a certain city and found that 59% of those in the sample support a proposed park. The associated margin of error is 6 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 59% of all registered voters in the city support a proposed park.",
      "Between 53% and 65% of the people in the sample support a proposed park.",
      "It is plausible that between 53% and 65% of all residents of the state support a proposed park.",
      "It is plausible that between 53% and 65% of all registered voters in the city support a proposed park."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 59% ± 6%, or 53% to 65%, and the conclusion applies only to the population sampled (registered voters in the city). The sample percent itself is known exactly (59%), so a range for the sample is wrong, and \"exactly 59%\" ignores sampling variability."
  },
  {
    id: "psd-h266",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 200 high school students in a certain state. The participants were randomly assigned to either use a daily stretching routine or not. After eight weeks, those who used a daily stretching routine had significantly better reported back pain than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a daily stretching routine causes improved reported back pain for participants like those in the study, but the result may not generalize to all high school students in the state.",
      "Among high school students in the state, use of a daily stretching routine is associated with improved reported back pain, but a cause-and-effect relationship cannot be concluded.",
      "Using a daily stretching routine causes improved reported back pain for high school students in the state.",
      "Among the participants in the study, use of a daily stretching routine is associated with improved reported back pain, but neither causation nor a generalization to all high school students in the state is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used a random sample, so generalizing to all high school students in the state is justified. Random assignment to treatments lets you conclude cause and effect; participants were randomly assigned, so a causal conclusion is justified."
  },
  {
    id: "psd-h267",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the temperature (°C), and y, the daily sales (dozens), for a set of observations. A line of best fit for the data is y = −1.5x − 10. One observation has an x-value of 24 and a y-value of −43.5. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "−2.5",
      "5/2",
      "−43.5",
      "−46"
    ],
    answer: 1,
    explanation: "The predicted value is −1.5(24) − 10 = −46. The residual is actual − predicted = −43.5 + 46 = 2.5. A positive residual means the point lies above the line."
  },
  {
    id: "psd-h268",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "There are 115 books on a shelf, each of which is fiction, biography, or poetry. The ratio of fiction to biography is 1 : 3, and the ratio of biography to poetry is 5 : 1. How many are poetry?",
    choices: [
      "15",
      "23",
      "25",
      "75"
    ],
    answer: 0,
    explanation: "Combine the ratios by matching the biography parts: fiction : biography : poetry = 5 : 15 : 3. These parts add to 23, so each part is 115/23 = 5. The number of poetry is 3 × 5 = 15."
  },
  {
    id: "psd-h269",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A tray contains 4 vanilla cupcakes and 6 chocolate cupcakes. Two cupcakes are selected at random without replacement. What is the probability that at least one of them is vanilla?",
    choices: [
      "1/3",
      "2/15",
      "4/5",
      "2/3"
    ],
    answer: 3,
    explanation: "Use the complement. The probability that neither is vanilla is (6/10)(5/9) = 1/3. So the probability of at least one vanilla is 1 − 1/3 = 2/3."
  },
  {
    id: "psd-h270",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of an item increased by 50%. By what percent must the new price decrease to return the item to its original price?",
    choices: [
      "50%",
      "25%",
      "33.33%",
      "38.33%"
    ],
    answer: 2,
    explanation: "If the original price is P, the new price is 1.5P. To return to P, the new price must be multiplied by 1/1.5 = 0.67, a decrease of 33.33%. The decrease is smaller than 50% because it is taken from a larger base."
  },
  {
    id: "psd-h271",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "There are 12,000 residents of a town. In a random sample of 500 of them, 192 cycle to work, and 50% of those 192 also do so every day. Based on the sample, which of the following is the best estimate of the number of residents of the town that cycle to work every day?",
    choices: [
      "4608",
      "2304",
      "6000",
      "96"
    ],
    answer: 1,
    explanation: "In the sample, 192 of 500 cycle to work, and 50% of those meet the second condition, so 192 × 0.5 = 96 of the 500 sampled meet both conditions. That is a proportion of 0.192. Applying it to the population: 12,000 × 96/500 = 2,304."
  },
  {
    id: "psd-h272",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "Each of the 11 values in a data set with a positive standard deviation is multiplied by 2. Which of the following statements about the new data set compared with the original must be true?",
    choices: [
      "The mean and the standard deviation are both multiplied by 2.",
      "The mean is multiplied by 2, and the standard deviation is unchanged.",
      "The mean is multiplied by 2, and the standard deviation is multiplied by 4.",
      "The mean is unchanged, and the standard deviation is multiplied by 2."
    ],
    answer: 0,
    explanation: "Multiplying every value by 2 stretches the data set: every value, and every distance between values, is multiplied by 2. So the mean, median, range, and standard deviation are all multiplied by 2."
  },
  {
    id: "psd-h273",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number p is 75% of the number r, and r is 40% less than the number s. If s is positive, p is what percent of s?",
    choices: [
      "35%",
      "30%",
      "105%",
      "45%"
    ],
    answer: 3,
    explanation: "r = 0.6s and p = 0.75r, so p = 0.75(0.6s) = 0.45s. So p is 45% of s. Adding or subtracting the percents directly is a common mistake, because the two percents are of different bases."
  },
  {
    id: "psd-h274",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A store discounts the original price of a jacket by 35%. A sales tax of 6% is then applied to the discounted price, and the final amount paid is $316.94. What was the original price of the jacket?",
    choices: [
      "$446.39",
      "$402.20",
      "$460.00",
      "$487.60"
    ],
    answer: 2,
    explanation: "If the original price is P, the discounted price is 0.65P, and after tax the amount is 1.06(0.65P) = 0.689P. Setting this equal to 316.94 gives P = 316.94/0.689 = 460.00. Undoing the percents by reversing them as additions (e.g., adding back 35%) gives wrong answers because each percent applies to a different base."
  },
  {
    id: "psd-h275",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The mean of a data set of 13 numbers is 64. When one number is removed from the data set, the mean of the remaining numbers is 62.5. What number was removed?",
    choices: [
      "3",
      "82",
      "750",
      "95"
    ],
    answer: 1,
    explanation: "The original sum is 13(64) = 832. The remaining 12 numbers sum to 12(62.5) = 750. The removed number is 832 − 750 = 82."
  },
  {
    id: "psd-h276",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "In a class, the 10 students in section A had a mean test score of 81, and the students in section B had a mean test score of 90. The mean score of all the students in both sections combined was 87. How many students are in section B?",
    choices: [
      "20",
      "10",
      "30",
      "9"
    ],
    answer: 0,
    explanation: "Let b be the number of students in section B. The total of all scores is 10(81) + 90b, and it also equals 87(10 + b). So 810 + 90b = 870 + 87b, which gives 3b = 60 and b = 20."
  },
  {
    id: "psd-h277",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th>Value</th><th>Frequency</th></tr></thead><tbody><tr><td>9</td><td>7</td></tr><tr><td>10</td><td>1</td></tr><tr><td>11</td><td>8</td></tr><tr><td>12</td><td>5</td></tr><tr><td>13</td><td>1</td></tr></tbody></table>The frequency table summarizes a data set of 22 values. What is the median of the data set?",
    choices: [
      "10.64",
      "10",
      "12",
      "11"
    ],
    answer: 3,
    explanation: "There are 22 values, so the median is the mean of the 11th and 12th values when ordered. Counting up the cumulative frequencies (7, 8, 16, 21, 22), that position falls at the value 11. Note the median is not the middle row of the table (11) unless the frequencies happen to put it there."
  },
  {
    id: "psd-h278",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Under 30</th><th>30 to 49</th><th>50 and older</th><th>Total</th></tr></thead><tbody><tr><td>Prefers streaming</td><td>26</td><td>57</td><td>36</td><td>119</td></tr><tr><td>Prefers cable</td><td>55</td><td>52</td><td>8</td><td>115</td></tr><tr><td>Total</td><td>81</td><td>109</td><td>44</td><td>234</td></tr></tbody></table>The table summarizes 234 respondents to a media survey. If one respondent in the \"50 and older\" category is selected at random, what is the probability that the respondent is in the \"Prefers cable\" category?",
    choices: [
      "8/115",
      "4/117",
      "2/11",
      "22/117"
    ],
    answer: 2,
    explanation: "The selection is restricted to the 44 respondents in the \"50 and older\" column. Of these, 8 are in the \"Prefers cable\" row, so the probability is 8/44 = 2/11."
  },
  {
    id: "psd-h279",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A contractor charges $4.50 per square foot to refinish a floor. A rectangular floor has an area of 190 square yards. What is the total charge, in dollars, to refinish the floor? (1 yard = 3 feet)",
    choices: [
      "$2,565.00",
      "$7,695.00",
      "$855.00",
      "$95.00"
    ],
    answer: 1,
    explanation: "One square yard is 3 ft × 3 ft = 9 square feet, so 190 square yards = 1710 square feet. The charge is 1710 × $4.50 = $7,695.00. Multiplying by 3 instead of 9 is a common error."
  },
  {
    id: "psd-h280",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Working alone at a constant rate, printer A can print the order in 7 minutes. Working alone at a constant rate, printer B can print the order in 3 minutes. How many minutes would it take printers A and B, working together at these rates, to print the order?",
    choices: [
      "21/10",
      "5",
      "10",
      "4"
    ],
    answer: 0,
    explanation: "Rates add, not times. Printer A does 1/7 of the job per minute and printer B does 1/3. Together they do 1/7 + 1/3 = 10/21 of the job per minute, so the time is 21/10 minutes."
  },
  {
    id: "psd-h281",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A researcher selected a random sample of 500 employees of a large company and found that 74% of those in the sample own a pet. The associated margin of error is 6 percentage points. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 74% of all employees of the company own a pet.",
      "Between 68% and 80% of the people in the sample own a pet.",
      "It is plausible that between 68% and 80% of all residents of the state own a pet.",
      "It is plausible that between 68% and 80% of all employees of the company own a pet."
    ],
    answer: 3,
    explanation: "A margin of error describes uncertainty when estimating a population value from a random sample. The plausible range for the population is 74% ± 6%, or 68% to 80%, and the conclusion applies only to the population sampled (employees of the company). The sample percent itself is known exactly (74%), so a range for the sample is wrong, and \"exactly 74%\" ignores sampling variability."
  },
  {
    id: "psd-h282",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 3,
    prompt: "A researcher recruited 200 volunteers from among members of a national hiking club. The participants were randomly assigned to either use a daily stretching routine or not. After eight weeks, those who used a daily stretching routine had significantly better reported back pain than those who did not. Which of the following conclusions is best supported?",
    choices: [
      "Using a daily stretching routine causes improved reported back pain for members of the club.",
      "Among members of the club, use of a daily stretching routine is associated with improved reported back pain, but a cause-and-effect relationship cannot be concluded.",
      "Using a daily stretching routine causes improved reported back pain for participants like those in the study, but the result may not generalize to all members of the club.",
      "Among the participants in the study, use of a daily stretching routine is associated with improved reported back pain, but neither causation nor a generalization to all members of the club is justified."
    ],
    answer: 2,
    explanation: "Two features matter. Random sampling from a population lets results generalize to that population; this study used volunteers, so the results may not generalize. Random assignment to treatments lets you conclude cause and effect; participants were randomly assigned, so a causal conclusion is justified."
  },
  {
    id: "psd-h283",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot relates x, the age of a tree (years), and y, the height (feet), for a set of observations. A line of best fit for the data is y = 4x + 7. One observation has an x-value of 27 and a y-value of 113. What is the residual for this observation (actual value minus predicted value)?",
    choices: [
      "2",
      "−2",
      "113",
      "115"
    ],
    answer: 1,
    explanation: "The predicted value is 4(27) + 7 = 115. The residual is actual − predicted = 113 − 115 = −2. A negative residual means the point lies below the line."
  },
  {
    id: "psd-h284",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "There are 126 books on a shelf, each of which is fiction, biography, or poetry. The ratio of fiction to biography is 2 : 9, and the ratio of biography to poetry is 9 : 7. How many are poetry?",
    choices: [
      "49",
      "56",
      "14",
      "63"
    ],
    answer: 0,
    explanation: "Combine the ratios by matching the biography parts: fiction : biography : poetry = 2 : 9 : 7. These parts add to 18, so each part is 126/18 = 7. The number of poetry is 7 × 7 = 49."
  },
  {
    id: "psd-h285",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt: "A box contains 2 defective batteries and 4 working batteries. Two batteries are selected at random without replacement. What is the probability that one is defective and the other is working?",
    choices: [
      "4/15",
      "4/9",
      "2/9",
      "8/15"
    ],
    answer: 3,
    explanation: "There are two orders. Defective then working: (2/6)(4/5). Working then defective: (4/6)(2/5). The total is 2(2)(4)/(6·5) = 8/15."
  },
  {
    id: "psd-h286",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 60 liters of a 60% acid solution. How many liters of pure water must be added so that the solution is 45% acid?",
    choices: [
      "80",
      "20",
      "15",
      "9"
    ],
    answer: 1,
    explanation: "The amount of acid stays at 0.6(60) = 36 liters. After adding x liters of water, 36 = 0.45(60 + x), so 60 + x = 80 and x = 20. The value 80 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h287",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A solid cube of aluminum has an edge length of 0.25 meter. The density of aluminum is 2.7 grams per cubic centimeter. What is the mass of the cube, in kilograms? (1 meter = 100 centimeters and 1 kilogram = 1,000 grams)",
    choices: [
      "0.0421875",
      "1.6875",
      "42,187.5",
      "42.1875"
    ],
    answer: 3,
    explanation: "The edge is 0.25 × 100 = 25 centimeters, so the volume is 25³ = 15,625 cubic centimeters. The mass is 15,625 × 2.7 = 42,187.5 grams, or 42.1875 kilograms. Converting only one dimension of a cubic unit, or skipping the gram-to-kilogram step, gives one of the other values."
  },
  {
    id: "psd-h288",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 300 parts in 3 hours. Machine B works at a constant rate that is 20% greater than Machine A's rate. How many minutes does it take Machine B to produce 150 parts?",
    choices: [
      "72",
      "90",
      "108",
      "75"
    ],
    answer: 3,
    explanation: "Machine A's rate is 300/3 = 100 parts per hour, so Machine B's rate is 100 × 1.2 = 120 parts per hour. Producing 150 parts takes 150/120 hours, which is 75 minutes. Reducing Machine A's time by 20% gives 72, which is not the same as increasing the rate by 20%."
  },
  {
    id: "psd-h289",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "On a map, 1 inch represents 12 miles. A park is shown on the map as a region with an area of 3 square inches. What is the actual area of the park, in square miles?",
    choices: [
      "36",
      "72",
      "1296",
      "432"
    ],
    answer: 3,
    explanation: "Each length is multiplied by 12, so each area is multiplied by 12² = 144. The actual area is 3 × 144 = 432 square miles. Multiplying by 12 only scales one dimension."
  },
  {
    id: "psd-h290",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 480 parts in 3 hours. Machine B works at a constant rate that is 25% greater than Machine A's rate. How many minutes does it take Machine B to produce 200 parts?",
    choices: [
      "93.75",
      "56.25",
      "60",
      "75"
    ],
    answer: 2,
    explanation: "Machine A's rate is 480/3 = 160 parts per hour, so Machine B's rate is 160 × 1.25 = 200 parts per hour. Producing 200 parts takes 200/200 hours, which is 60 minutes. Reducing Machine A's time by 25% gives 56.25, which is not the same as increasing the rate by 25%."
  },
  {
    id: "psd-h291",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 7 values in a data set are 7, 56, 20, 50, 29, 12, 15. The value 3 is added to the data set. For the new data set of 8 values, what is the mean minus the median?",
    choices: [
      "−15.5",
      "6.5",
      "4",
      "7"
    ],
    answer: 1,
    explanation: "The new data set has sum 192 and 8 values, so the mean is 24. In order, the two middle values are 15 and 20, so the median is 17.5. The mean minus the median is 6.5. Using the original median, 20, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h292",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The enrollment at Ridgeview High School increased by 25% from 2012 to 2016. The enrollment at Ridgeview High School in 2020 was 10% less than it was in 2012. By what percent did the enrollment at Ridgeview High School decrease from 2016 to 2020?",
    choices: [
      "28%",
      "35%",
      "15%",
      "38.89%"
    ],
    answer: 0,
    explanation: "If the 2012 value is 100, the 2016 value is 125 and the 2020 value is 90. The decrease from 2016 to 2020 is 125 − 90 = 35, and 35/125 = 0.28, or 28%. Adding the percents gives 35%, but that decrease is measured from the larger 2016 value."
  },
  {
    id: "psd-h293",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a jar, the ratio of red marbles to blue marbles is 7 to 9. After 13 red marbles and 6 blue marbles are added, the ratio of red marbles to blue marbles becomes 11 to 12. How many red marbles and blue marbles combined were in the jar before any were added?",
    choices: [
      "54",
      "42",
      "115",
      "96"
    ],
    answer: 3,
    explanation: "Let the original numbers be 7k red marbles and 9k blue marbles. Then (7k + 13)/(9k + 6) = 11/12, so 12(7k + 13) = 11(9k + 6), −15k = −90, and k = 6. The original total is 16(6) = 96. The value 115 is the total after the additions."
  },
  {
    id: "psd-h294",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 15 numbers with a mean of 24. Two numbers are removed from the data set, and the mean of the remaining 13 numbers is 25. If one of the removed numbers is 4 times the other, what is the greater of the two removed numbers?",
    choices: [
      "35",
      "8",
      "28",
      "7"
    ],
    answer: 2,
    explanation: "The original sum is 15(24) = 360, and the remaining sum is 13(25) = 325, so the removed numbers sum to 35. If the smaller is s, then s + 4s = 35, so s = 7 and the greater number is 28. The value 35 is the sum of both removed numbers."
  },
  {
    id: "psd-h295",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 15 liters of a 60% acid solution. How many liters of pure water must be added so that the solution is 45% acid?",
    choices: [
      "15/4",
      "5",
      "9/4",
      "20"
    ],
    answer: 1,
    explanation: "The amount of acid stays at 0.6(15) = 9 liters. After adding x liters of water, 9 = 0.45(15 + x), so 15 + x = 20 and x = 5. The value 20 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h296",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The population of Millbrook increased by 25% from 2005 to 2012. The population of Millbrook in 2019 was 25% less than it was in 2005. By what percent did the population of Millbrook decrease from 2012 to 2019?",
    choices: [
      "66.67%",
      "40%",
      "0%",
      "50%"
    ],
    answer: 1,
    explanation: "If the 2005 value is 100, the 2012 value is 125 and the 2019 value is 75. The decrease from 2012 to 2019 is 125 − 75 = 50, and 50/125 = 0.4, or 40%. Adding the percents gives 50%, but that decrease is measured from the larger 2012 value."
  },
  {
    id: "psd-h297",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 8 numbers with a mean of 35. Two numbers are removed from the data set, and the mean of the remaining 6 numbers is 25. If one of the removed numbers is 4 times the other, what is the greater of the two removed numbers?",
    choices: [
      "104",
      "26",
      "130",
      "84"
    ],
    answer: 0,
    explanation: "The original sum is 8(35) = 280, and the remaining sum is 6(25) = 150, so the removed numbers sum to 130. If the smaller is s, then s + 4s = 130, so s = 26 and the greater number is 104. The value 130 is the sum of both removed numbers."
  },
  {
    id: "psd-h298",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "On a map, 1 centimeter represents 7.5 kilometers. A park is shown on the map as a region with an area of 3 square centimeters. What is the actual area of the park, in square kilometers?",
    choices: [
      "22.5",
      "45",
      "506.25",
      "168.75"
    ],
    answer: 3,
    explanation: "Each length is multiplied by 7.5, so each area is multiplied by 7.5² = 56.25. The actual area is 3 × 56.25 = 168.75 square kilometers. Multiplying by 7.5 only scales one dimension."
  },
  {
    id: "psd-h299",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a summer camp group, the ratio of boys to girls is 7 to 9. After 13 boys and 9 girls are added, the ratio of boys to girls becomes 5 to 6. How many boys and girls combined were in the group before any were added?",
    choices: [
      "198",
      "176",
      "99",
      "77"
    ],
    answer: 1,
    explanation: "Let the original numbers be 7k boys and 9k girls. Then (7k + 13)/(9k + 9) = 5/6, so 6(7k + 13) = 5(9k + 9), −3k = −33, and k = 11. The original total is 16(11) = 176. The value 198 is the total after the additions."
  },
  {
    id: "psd-h300",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 600 parts in 6 hours. Machine B works at a constant rate that is 50% greater than Machine A's rate. How many minutes does it take Machine B to produce 150 parts?",
    choices: [
      "60",
      "90",
      "135",
      "45"
    ],
    answer: 0,
    explanation: "Machine A's rate is 600/6 = 100 parts per hour, so Machine B's rate is 100 × 1.5 = 150 parts per hour. Producing 150 parts takes 150/150 hours, which is 60 minutes. Reducing Machine A's time by 50% gives 45, which is not the same as increasing the rate by 50%."
  },
  {
    id: "psd-h301",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 600 parts in 6 hours. Machine B works at a constant rate that is 60% greater than Machine A's rate. How many minutes does it take Machine B to produce 200 parts?",
    choices: [
      "75",
      "48",
      "192",
      "120"
    ],
    answer: 0,
    explanation: "Machine A's rate is 600/6 = 100 parts per hour, so Machine B's rate is 100 × 1.6 = 160 parts per hour. Producing 200 parts takes 200/160 hours, which is 75 minutes. Reducing Machine A's time by 60% gives 48, which is not the same as increasing the rate by 60%."
  },
  {
    id: "psd-h302",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number of employees at Corvan Industries increased by 60% from 2012 to 2016. The number of employees at Corvan Industries in 2020 was 20% less than it was in 2012. By what percent did the number of employees at Corvan Industries decrease from 2016 to 2020?",
    choices: [
      "40%",
      "100%",
      "80%",
      "50%"
    ],
    answer: 3,
    explanation: "If the 2012 value is 100, the 2016 value is 160 and the 2020 value is 80. The decrease from 2016 to 2020 is 160 − 80 = 80, and 80/160 = 0.5, or 50%. Adding the percents gives 80%, but that decrease is measured from the larger 2016 value."
  },
  {
    id: "psd-h303",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Grade 9</th><th>Grade 10</th><th>Grade 11</th><th>Total</th></tr></thead><tbody><tr><td>Owns a pet</td><td>43</td><td>45</td><td>48</td><td>136</td></tr><tr><td>Does not own a pet</td><td>55</td><td>43</td><td>22</td><td>120</td></tr><tr><td>Total</td><td>98</td><td>88</td><td>70</td><td>256</td></tr></tbody></table>The table summarizes 256 students surveyed at a high school. One of the students who is not in the \"Grade 11\" category will be selected at random. What is the probability that the selected one is in the \"Owns a pet\" category?",
    choices: [
      "88/136",
      "88/186",
      "88/256",
      "136/256"
    ],
    answer: 1,
    explanation: "Outside the \"Grade 11\" column there are 256 − 70 = 186 in total, and 136 − 48 = 88 of them are in \"Owns a pet.\" So the probability is 88/186. Dividing by the grand total 256 answers a different question: the probability of both conditions among all 256."
  },
  {
    id: "psd-h304",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Grade 9</th><th>Grade 10</th><th>Grade 11</th><th>Total</th></tr></thead><tbody><tr><td>Owns a pet</td><td>10</td><td>17</td><td>30</td><td>57</td></tr><tr><td>Does not own a pet</td><td>47</td><td>29</td><td>54</td><td>130</td></tr><tr><td>Total</td><td>57</td><td>46</td><td>84</td><td>187</td></tr></tbody></table>The table summarizes 187 students surveyed at a high school. One of the students who is not in the \"Grade 11\" category will be selected at random. What is the probability that the selected one is in the \"Owns a pet\" category?",
    choices: [
      "27/187",
      "57/187",
      "27/103",
      "27/57"
    ],
    answer: 2,
    explanation: "Outside the \"Grade 11\" column there are 187 − 84 = 103 in total, and 57 − 30 = 27 of them are in \"Owns a pet.\" So the probability is 27/103. Dividing by the grand total 187 answers a different question: the probability of both conditions among all 187."
  },
  {
    id: "psd-h305",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 13 numbers with a mean of 63. Two numbers are removed from the data set, and the mean of the remaining 11 numbers is 69. If one of the removed numbers is 4 times the other, what is the greater of the two removed numbers?",
    choices: [
      "48",
      "−36/5",
      "60",
      "12"
    ],
    answer: 0,
    explanation: "The original sum is 13(63) = 819, and the remaining sum is 11(69) = 759, so the removed numbers sum to 60. If the smaller is s, then s + 4s = 60, so s = 12 and the greater number is 48. The value 60 is the sum of both removed numbers."
  },
  {
    id: "psd-h306",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "On a map, 1 centimeter represents 2.5 kilometers. A park is shown on the map as a region with an area of 12 square centimeters. What is the actual area of the park, in square kilometers?",
    choices: [
      "60",
      "900",
      "75",
      "30"
    ],
    answer: 2,
    explanation: "Each length is multiplied by 2.5, so each area is multiplied by 2.5² = 6.25. The actual area is 12 × 6.25 = 75 square kilometers. Multiplying by 2.5 only scales one dimension."
  },
  {
    id: "psd-h307",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The width of a rectangular garden is increased by 30%, and its length is decreased by 20%. Which of the following describes the change in the area of the garden?",
    choices: [
      "It increases by 4%.",
      "It increases by 10%.",
      "It increases by 6%.",
      "It decreases by 6%."
    ],
    answer: 0,
    explanation: "The new area is (1 + 0.3)(1 − 0.2) = 1.04 times the original area, so the area increases by 4%. Simply combining the percents as 30 − 20 ignores the product term, 0.3 × 0.2 = 0.06."
  },
  {
    id: "psd-h308",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The width of a rectangular solar panel is increased by 30%, and its length is decreased by 25%. Which of the following describes the change in the area of the solar panel?",
    choices: [
      "It increases by 7.5%.",
      "It increases by 5%.",
      "It decreases by 7.5%.",
      "It decreases by 2.5%."
    ],
    answer: 3,
    explanation: "The new area is (1 + 0.3)(1 − 0.25) = 0.975 times the original area, so the area decreases by 2.5%. Simply combining the percents as 30 − 25 ignores the product term, 0.3 × 0.25 = 0.075."
  },
  {
    id: "psd-h309",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a jar, the ratio of red marbles to blue marbles is 2 to 5. After 18 red marbles and 9 blue marbles are added, the ratio of red marbles to blue marbles becomes 10 to 13. How many red marbles and blue marbles combined were in the jar before any were added?",
    choices: [
      "42",
      "12",
      "30",
      "69"
    ],
    answer: 0,
    explanation: "Let the original numbers be 2k red marbles and 5k blue marbles. Then (2k + 18)/(5k + 9) = 10/13, so 13(2k + 18) = 10(5k + 9), −24k = −144, and k = 6. The original total is 7(6) = 42. The value 69 is the total after the additions."
  },
  {
    id: "psd-h310",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 60 liters of a 24% acid solution. How many liters of pure water must be added so that the solution is 16% acid?",
    choices: [
      "30",
      "24/5",
      "20",
      "90"
    ],
    answer: 0,
    explanation: "The amount of acid stays at 0.24(60) = 14.4 liters. After adding x liters of water, 14.4 = 0.16(60 + x), so 60 + x = 90 and x = 30. The value 90 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h311",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Grade 9</th><th>Grade 10</th><th>Grade 11</th><th>Total</th></tr></thead><tbody><tr><td>Owns a pet</td><td>32</td><td>37</td><td>29</td><td>98</td></tr><tr><td>Does not own a pet</td><td>47</td><td>31</td><td>34</td><td>112</td></tr><tr><td>Total</td><td>79</td><td>68</td><td>63</td><td>210</td></tr></tbody></table>The table summarizes 210 students surveyed at a high school. One of the students who is not in the \"Grade 10\" category will be selected at random. What is the probability that the selected one is in the \"Owns a pet\" category?",
    choices: [
      "61/98",
      "98/210",
      "61/142",
      "61/210"
    ],
    answer: 2,
    explanation: "Outside the \"Grade 10\" column there are 210 − 68 = 142 in total, and 98 − 37 = 61 of them are in \"Owns a pet.\" So the probability is 61/142. Dividing by the grand total 210 answers a different question: the probability of both conditions among all 210."
  },
  {
    id: "psd-h312",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The enrollment at Ridgeview High School increased by 40% from 2005 to 2012. The enrollment at Ridgeview High School in 2019 was 16% less than it was in 2005. By what percent did the enrollment at Ridgeview High School decrease from 2012 to 2019?",
    choices: [
      "24%",
      "56%",
      "40%",
      "66.67%"
    ],
    answer: 2,
    explanation: "If the 2005 value is 100, the 2012 value is 140 and the 2019 value is 84. The decrease from 2012 to 2019 is 140 − 84 = 56, and 56/140 = 0.4, or 40%. Adding the percents gives 56%, but that decrease is measured from the larger 2012 value."
  },
  {
    id: "psd-h313",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number of employees at Corvan Industries increased by 40% from 2005 to 2012. The number of employees at Corvan Industries in 2019 was 16% less than it was in 2005. By what percent did the number of employees at Corvan Industries decrease from 2012 to 2019?",
    choices: [
      "40%",
      "56%",
      "66.67%",
      "24%"
    ],
    answer: 0,
    explanation: "If the 2005 value is 100, the 2012 value is 140 and the 2019 value is 84. The decrease from 2012 to 2019 is 140 − 84 = 56, and 56/140 = 0.4, or 40%. Adding the percents gives 56%, but that decrease is measured from the larger 2012 value."
  },
  {
    id: "psd-h314",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 400 households in a county was surveyed, and 70% of those surveyed said they own an electric vehicle. The margin of error for this estimate, at the 95% confidence level, is 3 percentage points. There are 80,000 households in the county in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "It is plausible that between 54,320 and 57,680 of the 80,000 households own an electric vehicle.",
      "Exactly 56,000 of the 80,000 households own an electric vehicle.",
      "It is plausible that between 268 and 292 of the 80,000 households own an electric vehicle.",
      "It is plausible that between 53,600 and 58,400 of the 80,000 households own an electric vehicle."
    ],
    answer: 3,
    explanation: "The interval 70 ± 3 percent, from 67% to 73%, gives a plausible range for the whole population. 67% of 80,000 is 53,600 and 73% of 80,000 is 58,400. A sample estimate does not give an exact count, the interval must be applied to the 80,000 households rather than the sample of 400, and the margin of error is in percentage points, not a percent of 70%."
  },
  {
    id: "psd-h315",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 7 values in a data set are 6, 24, 7, 57, 23, 13, 14. The value 4 is added to the data set. For the new data set of 8 values, what is the mean minus the median?",
    choices: [
      "−21.5",
      "5",
      "46/7",
      "4.5"
    ],
    answer: 1,
    explanation: "The new data set has sum 148 and 8 values, so the mean is 18.5. In order, the two middle values are 13 and 14, so the median is 13.5. The mean minus the median is 5. Using the original median, 14, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h316",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 400 residents of a city was surveyed, and 55% of those surveyed said they support building a new park. The margin of error for this estimate, at the 95% confidence level, is 4 percentage points. There are 60,000 residents of the city in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "It is plausible that between 30,600 and 35,400 of the 60,000 residents support building a new park.",
      "Exactly 33,000 of the 60,000 residents support building a new park.",
      "It is plausible that between 31,680 and 34,320 of the 60,000 residents support building a new park.",
      "It is plausible that between 204 and 236 of the 60,000 residents support building a new park."
    ],
    answer: 0,
    explanation: "The interval 55 ± 4 percent, from 51% to 59%, gives a plausible range for the whole population. 51% of 60,000 is 30,600 and 59% of 60,000 is 35,400. A sample estimate does not give an exact count, the interval must be applied to the 60,000 residents rather than the sample of 400, and the margin of error is in percentage points, not a percent of 55%."
  },
  {
    id: "psd-h317",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 250 students at a large university was surveyed, and 45% of those surveyed said they use the campus shuttle at least once a week. The margin of error for this estimate, at the 95% confidence level, is 3 percentage points. There are 60,000 students at the university in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "It is plausible that between 105 and 120 of the 60,000 students use the campus shuttle at least once a week.",
      "It is plausible that between 25,200 and 28,800 of the 60,000 students use the campus shuttle at least once a week.",
      "Exactly 27,000 of the 60,000 students use the campus shuttle at least once a week.",
      "It is plausible that between 26,190 and 27,810 of the 60,000 students use the campus shuttle at least once a week."
    ],
    answer: 1,
    explanation: "The interval 45 ± 3 percent, from 42% to 48%, gives a plausible range for the whole population. 42% of 60,000 is 25,200 and 48% of 60,000 is 28,800. A sample estimate does not give an exact count, the interval must be applied to the 60,000 students rather than the sample of 250, and the margin of error is in percentage points, not a percent of 45%."
  },
  {
    id: "psd-h318",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The enrollment at Ridgeview High School increased by 60% from 2005 to 2012. The enrollment at Ridgeview High School in 2019 was 4% less than it was in 2005. By what percent did the enrollment at Ridgeview High School decrease from 2012 to 2019?",
    choices: [
      "66.67%",
      "40%",
      "64%",
      "56%"
    ],
    answer: 1,
    explanation: "If the 2005 value is 100, the 2012 value is 160 and the 2019 value is 96. The decrease from 2012 to 2019 is 160 − 96 = 64, and 64/160 = 0.4, or 40%. Adding the percents gives 64%, but that decrease is measured from the larger 2012 value."
  },
  {
    id: "psd-h319",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 7 values in a data set are 54, 29, 5, 12, 13, 51, 40. The value 88 is added to the data set. For the new data set of 8 values, what is the mean minus the median?",
    choices: [
      "1/7",
      "7.5",
      "2",
      "24"
    ],
    answer: 2,
    explanation: "The new data set has sum 292 and 8 values, so the mean is 36.5. In order, the two middle values are 29 and 40, so the median is 34.5. The mean minus the median is 2. Using the original median, 29, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h320",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "On a map, 1 centimeter represents 8 kilometers. A park is shown on the map as a region with an area of 1.5 square centimeters. What is the actual area of the park, in square kilometers?",
    choices: [
      "144",
      "12",
      "24",
      "96"
    ],
    answer: 3,
    explanation: "Each length is multiplied by 8, so each area is multiplied by 8² = 64. The actual area is 1.5 × 64 = 96 square kilometers. Multiplying by 8 only scales one dimension."
  },
  {
    id: "psd-h321",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 500 residents of a city was surveyed, and 35% of those surveyed said they support building a new park. The margin of error for this estimate, at the 95% confidence level, is 5 percentage points. There are 60,000 residents of the city in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "It is plausible that between 150 and 200 of the 60,000 residents support building a new park.",
      "It is plausible that between 19,950 and 22,050 of the 60,000 residents support building a new park.",
      "Exactly 21,000 of the 60,000 residents support building a new park.",
      "It is plausible that between 18,000 and 24,000 of the 60,000 residents support building a new park."
    ],
    answer: 3,
    explanation: "The interval 35 ± 5 percent, from 30% to 40%, gives a plausible range for the whole population. 30% of 60,000 is 18,000 and 40% of 60,000 is 24,000. A sample estimate does not give an exact count, the interval must be applied to the 60,000 residents rather than the sample of 500, and the margin of error is in percentage points, not a percent of 35%."
  },
  {
    id: "psd-h322",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The width of a rectangular garden is increased by 30%, and its length is decreased by 25%. Which of the following describes the change in the area of the garden?",
    choices: [
      "It decreases by 2.5%.",
      "It increases by 5%.",
      "It increases by 7.5%.",
      "It decreases by 7.5%."
    ],
    answer: 0,
    explanation: "The new area is (1 + 0.3)(1 − 0.25) = 0.975 times the original area, so the area decreases by 2.5%. Simply combining the percents as 30 − 25 ignores the product term, 0.3 × 0.25 = 0.075."
  },
  {
    id: "psd-h323",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Grade 9</th><th>Grade 10</th><th>Grade 11</th><th>Total</th></tr></thead><tbody><tr><td>Owns a pet</td><td>41</td><td>16</td><td>50</td><td>107</td></tr><tr><td>Does not own a pet</td><td>19</td><td>59</td><td>10</td><td>88</td></tr><tr><td>Total</td><td>60</td><td>75</td><td>60</td><td>195</td></tr></tbody></table>The table summarizes 195 students surveyed at a high school. One of the students who is not in the \"Grade 10\" category will be selected at random. What is the probability that the selected one is in the \"Owns a pet\" category?",
    choices: [
      "91/107",
      "91/195",
      "91/120",
      "107/195"
    ],
    answer: 2,
    explanation: "Outside the \"Grade 10\" column there are 195 − 75 = 120 in total, and 107 − 16 = 91 of them are in \"Owns a pet.\" So the probability is 91/120. Dividing by the grand total 195 answers a different question: the probability of both conditions among all 195."
  },
  {
    id: "psd-h324",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot shows the relationship between x, the number of hours a plant was exposed to light each day, and y, its height, in centimeters, for a set of observations. A line of best fit for the data is y = 1.2x + 30. One observation has x = 29 and y = 76.8. Which of the following is the difference between the actual y-value of this observation and the y-value predicted by the line of best fit (actual minus predicted)?",
    choices: [
      "−12",
      "12",
      "64.8",
      "42"
    ],
    answer: 1,
    explanation: "The predicted value is 1.2(29) + 30 = 64.8. Actual minus predicted is 76.8 − 64.8 = 12. Subtracting in the other order gives −12."
  },
  {
    id: "psd-h325",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 400 employees of a large company was surveyed, and 30% of those surveyed said they prefer a four-day workweek. The margin of error for this estimate, at the 95% confidence level, is 6 percentage points. There are 45,000 employees at the company in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "It is plausible that between 96 and 144 of the 45,000 employees prefer a four-day workweek.",
      "It is plausible that between 10,800 and 16,200 of the 45,000 employees prefer a four-day workweek.",
      "It is plausible that between 12,690 and 14,310 of the 45,000 employees prefer a four-day workweek.",
      "Exactly 13,500 of the 45,000 employees prefer a four-day workweek."
    ],
    answer: 1,
    explanation: "The interval 30 ± 6 percent, from 24% to 36%, gives a plausible range for the whole population. 24% of 45,000 is 10,800 and 36% of 45,000 is 16,200. A sample estimate does not give an exact count, the interval must be applied to the 45,000 employees rather than the sample of 400, and the margin of error is in percentage points, not a percent of 30%."
  },
  {
    id: "psd-h326",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 9 values in a data set are 49, 52, 34, 58, 44, 20, 6, 57, 55. The value 80 is added to the data set. For the new data set of 10 values, what is the mean minus the median?",
    choices: [
      "−5",
      "13.5",
      "−3.5",
      "−22/3"
    ],
    answer: 0,
    explanation: "The new data set has sum 455 and 10 values, so the mean is 45.5. In order, the two middle values are 49 and 52, so the median is 50.5. The mean minus the median is −5. Using the original median, 49, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h327",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 400 households in a county was surveyed, and 40% of those surveyed said they own an electric vehicle. The margin of error for this estimate, at the 95% confidence level, is 6 percentage points. There are 30,000 households in the county in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "It is plausible that between 136 and 184 of the 30,000 households own an electric vehicle.",
      "Exactly 12,000 of the 30,000 households own an electric vehicle.",
      "It is plausible that between 10,200 and 13,800 of the 30,000 households own an electric vehicle.",
      "It is plausible that between 11,280 and 12,720 of the 30,000 households own an electric vehicle."
    ],
    answer: 2,
    explanation: "The interval 40 ± 6 percent, from 34% to 46%, gives a plausible range for the whole population. 34% of 30,000 is 10,200 and 46% of 30,000 is 13,800. A sample estimate does not give an exact count, the interval must be applied to the 30,000 households rather than the sample of 400, and the margin of error is in percentage points, not a percent of 40%."
  },
  {
    id: "psd-h328",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 600 parts in 4 hours. Machine B works at a constant rate that is 25% greater than Machine A's rate. How many minutes does it take Machine B to produce 200 parts?",
    choices: [
      "80",
      "100",
      "60",
      "64"
    ],
    answer: 3,
    explanation: "Machine A's rate is 600/4 = 150 parts per hour, so Machine B's rate is 150 × 1.25 = 187.5 parts per hour. Producing 200 parts takes 200/187.5 hours, which is 64 minutes. Reducing Machine A's time by 25% gives 60, which is not the same as increasing the rate by 25%."
  },
  {
    id: "psd-h329",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The number of registered boats in Lake County increased by 60% from 2010 to 2015. The number of registered boats in Lake County in 2020 was 28% less than it was in 2010. By what percent did the number of registered boats in Lake County decrease from 2015 to 2020?",
    choices: [
      "122.22%",
      "32%",
      "88%",
      "55%"
    ],
    answer: 3,
    explanation: "If the 2010 value is 100, the 2015 value is 160 and the 2020 value is 72. The decrease from 2015 to 2020 is 160 − 72 = 88, and 88/160 = 0.55, or 55%. Adding the percents gives 88%, but that decrease is measured from the larger 2015 value."
  },
  {
    id: "psd-h330",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a summer camp group, the ratio of boys to girls is 3 to 5. After 16 boys are added, the ratio of boys to girls becomes 13 to 15. How many boys and girls combined were in the group before any were added?",
    choices: [
      "96",
      "112",
      "36",
      "60"
    ],
    answer: 0,
    explanation: "Let the original numbers be 3k boys and 5k girls. Then (3k + 16)/(5k + 0) = 13/15, so 15(3k + 16) = 13(5k + 0), −20k = −240, and k = 12. The original total is 8(12) = 96. The value 112 is the total after the additions."
  },
  {
    id: "psd-h331",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a tour group, the ratio of adults to children is 2 to 5. After 14 adults are added, the ratio of adults to children becomes 13 to 15. How many adults and children combined were in the group before any were added?",
    choices: [
      "30",
      "12",
      "56",
      "42"
    ],
    answer: 3,
    explanation: "Let the original numbers be 2k adults and 5k children. Then (2k + 14)/(5k + 0) = 13/15, so 15(2k + 14) = 13(5k + 0), −35k = −210, and k = 6. The original total is 7(6) = 42. The value 56 is the total after the additions."
  },
  {
    id: "psd-h332",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 11 numbers with a mean of 19. Two numbers are removed from the data set, and the mean of the remaining 9 numbers is 21. If one of the removed numbers is 4 times the other, what is the greater of the two removed numbers?",
    choices: [
      "16",
      "4",
      "−4/5",
      "20"
    ],
    answer: 0,
    explanation: "The original sum is 11(19) = 209, and the remaining sum is 9(21) = 189, so the removed numbers sum to 20. If the smaller is s, then s + 4s = 20, so s = 4 and the greater number is 16. The value 20 is the sum of both removed numbers."
  },
  {
    id: "psd-h333",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a summer camp group, the ratio of boys to girls is 4 to 5. After 12 boys and 3 girls are added, the ratio of boys to girls becomes 12 to 13. How many boys and girls combined were in the group before any were added?",
    choices: [
      "135",
      "75",
      "60",
      "150"
    ],
    answer: 0,
    explanation: "Let the original numbers be 4k boys and 5k girls. Then (4k + 12)/(5k + 3) = 12/13, so 13(4k + 12) = 12(5k + 3), −8k = −120, and k = 15. The original total is 9(15) = 135. The value 150 is the total after the additions."
  },
  {
    id: "psd-h334",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 60 liters of a 40% acid solution. How many liters of pure water must be added so that the solution is 25% acid?",
    choices: [
      "9",
      "36",
      "96",
      "45/2"
    ],
    answer: 1,
    explanation: "The amount of acid stays at 0.4(60) = 24 liters. After adding x liters of water, 24 = 0.25(60 + x), so 60 + x = 96 and x = 36. The value 96 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h335",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 7 values in a data set are 13, 41, 22, 35, 50, 14, 49. The value 4 is added to the data set. For the new data set of 8 values, what is the mean minus the median?",
    choices: [
      "0",
      "−3",
      "−14",
      "−6.5"
    ],
    answer: 0,
    explanation: "The new data set has sum 228 and 8 values, so the mean is 28.5. In order, the two middle values are 22 and 35, so the median is 28.5. The mean minus the median is 0. Using the original median, 35, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h336",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a camera was increased by 10%. Later, the new price was decreased by 20%, and the resulting price was $352. What was the price of the camera, in dollars, before both changes?",
    choices: [
      "$380.16",
      "$387.20",
      "$384",
      "$400"
    ],
    answer: 3,
    explanation: "If the original price is P, the final price is P(1 + 0.1)(1 − 0.2) = 0.88P. Setting 0.88P = 352 gives P = 400. Combining the changes into a single 10% decrease gives 391.11, which ignores that the 20% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h337",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a summer camp group, the ratio of boys to girls is 5 to 8. After 19 boys and 7 girls are added, the ratio of boys to girls becomes 6 to 7. How many boys and girls combined were in the group before any were added?",
    choices: [
      "35",
      "91",
      "56",
      "117"
    ],
    answer: 1,
    explanation: "Let the original numbers be 5k boys and 8k girls. Then (5k + 19)/(8k + 7) = 6/7, so 7(5k + 19) = 6(8k + 7), −13k = −91, and k = 7. The original total is 13(7) = 91. The value 117 is the total after the additions."
  },
  {
    id: "psd-h338",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a printer was increased by 25%. Later, the new price was decreased by 40%, and the resulting price was $120. What was the price of the printer, in dollars, before both changes?",
    choices: [
      "$134.40",
      "$160",
      "$126",
      "$138"
    ],
    answer: 1,
    explanation: "If the original price is P, the final price is P(1 + 0.25)(1 − 0.4) = 0.75P. Setting 0.75P = 120 gives P = 160. Combining the changes into a single 15% decrease gives 141.18, which ignores that the 40% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h339",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 20 liters of a 40% acid solution. How many liters of pure water must be added so that the solution is 25% acid?",
    choices: [
      "3",
      "15/2",
      "32",
      "12"
    ],
    answer: 3,
    explanation: "The amount of acid stays at 0.4(20) = 8 liters. After adding x liters of water, 8 = 0.25(20 + x), so 20 + x = 32 and x = 12. The value 32 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h340",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "On a map, 1 inch represents 2.5 miles. A park is shown on the map as a region with an area of 2.5 square inches. What is the actual area of the park, in square miles?",
    choices: [
      "39.06",
      "12.5",
      "15.62",
      "6.25"
    ],
    answer: 2,
    explanation: "Each length is multiplied by 2.5, so each area is multiplied by 2.5² = 6.25. The actual area is 2.5 × 6.25 = 15.62 square miles. Multiplying by 2.5 only scales one dimension."
  },
  {
    id: "psd-h341",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The enrollment at Ridgeview High School increased by 25% from 2012 to 2016. The enrollment at Ridgeview High School in 2020 was 40% less than it was in 2012. By what percent did the enrollment at Ridgeview High School decrease from 2016 to 2020?",
    choices: [
      "15%",
      "65%",
      "52%",
      "108.33%"
    ],
    answer: 2,
    explanation: "If the 2012 value is 100, the 2016 value is 125 and the 2020 value is 60. The decrease from 2016 to 2020 is 125 − 60 = 65, and 65/125 = 0.52, or 52%. Adding the percents gives 65%, but that decrease is measured from the larger 2016 value."
  },
  {
    id: "psd-h342",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Program A</th><th>Program B</th><th>Program C</th><th>Total</th></tr></thead><tbody><tr><td>Completed</td><td>48</td><td>60</td><td>35</td><td>143</td></tr><tr><td>Did not complete</td><td>10</td><td>50</td><td>39</td><td>99</td></tr><tr><td>Total</td><td>58</td><td>110</td><td>74</td><td>242</td></tr></tbody></table>The table summarizes 242 participants in a training study. One of the participants who is not in the \"Program B\" category will be selected at random. What is the probability that the selected one is in the \"Completed\" category?",
    choices: [
      "83/242",
      "83/143",
      "83/132",
      "143/242"
    ],
    answer: 2,
    explanation: "Outside the \"Program B\" column there are 242 − 110 = 132 in total, and 143 − 60 = 83 of them are in \"Completed.\" So the probability is 83/132. Dividing by the grand total 242 answers a different question: the probability of both conditions among all 242."
  },
  {
    id: "psd-h343",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 480 parts in 4 hours. Machine B works at a constant rate that is 60% greater than Machine A's rate. How many minutes does it take Machine B to produce 240 parts?",
    choices: [
      "75",
      "192",
      "48",
      "120"
    ],
    answer: 0,
    explanation: "Machine A's rate is 480/4 = 120 parts per hour, so Machine B's rate is 120 × 1.6 = 192 parts per hour. Producing 240 parts takes 240/192 hours, which is 75 minutes. Reducing Machine A's time by 60% gives 48, which is not the same as increasing the rate by 60%."
  },
  {
    id: "psd-h344",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 240 parts in 3 hours. Machine B works at a constant rate that is 50% greater than Machine A's rate. How many minutes does it take Machine B to produce 200 parts?",
    choices: [
      "75",
      "225",
      "100",
      "150"
    ],
    answer: 2,
    explanation: "Machine A's rate is 240/3 = 80 parts per hour, so Machine B's rate is 80 × 1.5 = 120 parts per hour. Producing 200 parts takes 200/120 hours, which is 100 minutes. Reducing Machine A's time by 50% gives 75, which is not the same as increasing the rate by 50%."
  },
  {
    id: "psd-h345",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The width of a rectangular garden is increased by 15%, and its length is decreased by 20%. Which of the following describes the change in the area of the garden?",
    choices: [
      "It decreases by 3%.",
      "It decreases by 8%.",
      "It increases by 35%.",
      "It decreases by 5%."
    ],
    answer: 1,
    explanation: "The new area is (1 + 0.15)(1 − 0.2) = 0.92 times the original area, so the area decreases by 8%. Simply combining the percents as 15 − 20 ignores the product term, 0.15 × 0.2 = 0.03."
  },
  {
    id: "psd-h346",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot shows the relationship between x, the number of weeks since a store opened, and y, its weekly revenue, in hundreds of dollars, for a set of observations. A line of best fit for the data is y = 2.5x + 46. One observation has x = 9 and y = 80.5. Which of the following is the difference between the actual y-value of this observation and the y-value predicted by the line of best fit (actual minus predicted)?",
    choices: [
      "−12",
      "58",
      "68.5",
      "12"
    ],
    answer: 3,
    explanation: "The predicted value is 2.5(9) + 46 = 68.5. Actual minus predicted is 80.5 − 68.5 = 12. Subtracting in the other order gives −12."
  },
  {
    id: "psd-h347",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The width of a rectangular solar panel is increased by 15%, and its length is decreased by 40%. Which of the following describes the change in the area of the solar panel?",
    choices: [
      "It decreases by 6%.",
      "It decreases by 25%.",
      "It increases by 55%.",
      "It decreases by 31%."
    ],
    answer: 3,
    explanation: "The new area is (1 + 0.15)(1 − 0.4) = 0.69 times the original area, so the area decreases by 31%. Simply combining the percents as 15 − 40 ignores the product term, 0.15 × 0.4 = 0.06."
  },
  {
    id: "psd-h348",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot shows the relationship between x, the number of weeks since a store opened, and y, its weekly revenue, in hundreds of dollars, for a set of observations. A line of best fit for the data is y = 3.2x + 21. One observation has x = 12 and y = 53.4. Which of the following is the difference between the actual y-value of this observation and the y-value predicted by the line of best fit (actual minus predicted)?",
    choices: [
      "15",
      "59.4",
      "−6",
      "6"
    ],
    answer: 2,
    explanation: "The predicted value is 3.2(12) + 21 = 59.4. Actual minus predicted is 53.4 − 59.4 = −6. Subtracting in the other order gives 6."
  },
  {
    id: "psd-h349",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot shows the relationship between x, the number of hours a plant was exposed to light each day, and y, its height, in centimeters, for a set of observations. A line of best fit for the data is y = 3.5x + 17. One observation has x = 21 and y = 97.5. Which of the following is the difference between the actual y-value of this observation and the y-value predicted by the line of best fit (actual minus predicted)?",
    choices: [
      "7",
      "24",
      "90.5",
      "−7"
    ],
    answer: 0,
    explanation: "The predicted value is 3.5(21) + 17 = 90.5. Actual minus predicted is 97.5 − 90.5 = 7. Subtracting in the other order gives −7."
  },
  {
    id: "psd-h350",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The population of Millbrook increased by 40% from 2005 to 2012. The population of Millbrook in 2019 was 16% less than it was in 2005. By what percent did the population of Millbrook decrease from 2012 to 2019?",
    choices: [
      "66.67%",
      "56%",
      "24%",
      "40%"
    ],
    answer: 3,
    explanation: "If the 2005 value is 100, the 2012 value is 140 and the 2019 value is 84. The decrease from 2012 to 2019 is 140 − 84 = 56, and 56/140 = 0.4, or 40%. Adding the percents gives 56%, but that decrease is measured from the larger 2012 value."
  },
  {
    id: "psd-h351",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 15 numbers with a mean of 56. Two numbers are removed from the data set, and the mean of the remaining 13 numbers is 60. If one of the removed numbers is 2 times the other, what is the greater of the two removed numbers?",
    choices: [
      "60",
      "0",
      "40",
      "20"
    ],
    answer: 2,
    explanation: "The original sum is 15(56) = 840, and the remaining sum is 13(60) = 780, so the removed numbers sum to 60. If the smaller is s, then s + 2s = 60, so s = 20 and the greater number is 40. The value 60 is the sum of both removed numbers."
  },
  {
    id: "psd-h352",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 600 parts in 5 hours. Machine B works at a constant rate that is 25% greater than Machine A's rate. How many minutes does it take Machine B to produce 200 parts?",
    choices: [
      "75",
      "100",
      "80",
      "125"
    ],
    answer: 2,
    explanation: "Machine A's rate is 600/5 = 120 parts per hour, so Machine B's rate is 120 × 1.25 = 150 parts per hour. Producing 200 parts takes 200/150 hours, which is 80 minutes. Reducing Machine A's time by 25% gives 75, which is not the same as increasing the rate by 25%."
  },
  {
    id: "psd-h353",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 9 values in a data set are 6, 22, 12, 29, 58, 31, 39, 38, 25. The value 0 is added to the data set. For the new data set of 10 values, what is the mean minus the median?",
    choices: [
      "−1",
      "−3",
      "−1/9",
      "−18.5"
    ],
    answer: 0,
    explanation: "The new data set has sum 260 and 10 values, so the mean is 26. In order, the two middle values are 25 and 29, so the median is 27. The mean minus the median is −1. Using the original median, 29, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h354",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 24 liters of a 24% acid solution. How many liters of pure water must be added so that the solution is 16% acid?",
    choices: [
      "12",
      "8",
      "36",
      "16/7"
    ],
    answer: 0,
    explanation: "The amount of acid stays at 0.24(24) = 5.76 liters. After adding x liters of water, 5.76 = 0.16(24 + x), so 24 + x = 36 and x = 12. The value 36 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h355",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The width of a rectangular garden is increased by 40%, and its length is decreased by 15%. Which of the following describes the change in the area of the garden?",
    choices: [
      "It increases by 6%.",
      "It decreases by 6%.",
      "It increases by 25%.",
      "It increases by 19%."
    ],
    answer: 3,
    explanation: "The new area is (1 + 0.4)(1 − 0.15) = 1.19 times the original area, so the area increases by 19%. Simply combining the percents as 40 − 15 ignores the product term, 0.4 × 0.15 = 0.06."
  },
  {
    id: "psd-h356",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Soil 1</th><th>Soil 2</th><th>Soil 3</th><th>Total</th></tr></thead><tbody><tr><td>Germinated</td><td>50</td><td>52</td><td>27</td><td>129</td></tr><tr><td>Did not germinate</td><td>58</td><td>49</td><td>16</td><td>123</td></tr><tr><td>Total</td><td>108</td><td>101</td><td>43</td><td>252</td></tr></tbody></table>The table summarizes 252 seeds planted in an experiment. One of the seeds that is not in the \"Soil 2\" category will be selected at random. What is the probability that the selected one is in the \"Germinated\" category?",
    choices: [
      "77/252",
      "77/151",
      "129/252",
      "77/129"
    ],
    answer: 1,
    explanation: "Outside the \"Soil 2\" column there are 252 − 101 = 151 in total, and 129 − 52 = 77 of them are in \"Germinated.\" So the probability is 77/151. Dividing by the grand total 252 answers a different question: the probability of both conditions among all 252."
  },
  {
    id: "psd-h357",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot shows the relationship between x, the number of weeks since a store opened, and y, its weekly revenue, in hundreds of dollars, for a set of observations. A line of best fit for the data is y = 3.5x + 34. One observation has x = 6 and y = 69. Which of the following is the difference between the actual y-value of this observation and the y-value predicted by the line of best fit (actual minus predicted)?",
    choices: [
      "48",
      "55",
      "−14",
      "14"
    ],
    answer: 3,
    explanation: "The predicted value is 3.5(6) + 34 = 55. Actual minus predicted is 69 − 55 = 14. Subtracting in the other order gives −14."
  },
  {
    id: "psd-h358",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a jar, the ratio of red marbles to blue marbles is 2 to 3. After 14 red marbles and 3 blue marbles are added, the ratio of red marbles to blue marbles becomes 4 to 3. How many red marbles and blue marbles combined were in the jar before any were added?",
    choices: [
      "10",
      "42",
      "25",
      "15"
    ],
    answer: 2,
    explanation: "Let the original numbers be 2k red marbles and 3k blue marbles. Then (2k + 14)/(3k + 3) = 4/3, so 3(2k + 14) = 4(3k + 3), −6k = −30, and k = 5. The original total is 5(5) = 25. The value 42 is the total after the additions."
  },
  {
    id: "psd-h359",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The enrollment at Ridgeview High School increased by 25% from 2010 to 2015. The enrollment at Ridgeview High School in 2020 was 40% less than it was in 2010. By what percent did the enrollment at Ridgeview High School decrease from 2015 to 2020?",
    choices: [
      "15%",
      "65%",
      "52%",
      "108.33%"
    ],
    answer: 2,
    explanation: "If the 2010 value is 100, the 2015 value is 125 and the 2020 value is 60. The decrease from 2015 to 2020 is 125 − 60 = 65, and 65/125 = 0.52, or 52%. Adding the percents gives 65%, but that decrease is measured from the larger 2015 value."
  },
  {
    id: "psd-h360",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 36 liters of a 25% acid solution. How many liters of pure water must be added so that the solution is 20% acid?",
    choices: [
      "9",
      "36/5",
      "9/5",
      "45"
    ],
    answer: 0,
    explanation: "The amount of acid stays at 0.25(36) = 9 liters. After adding x liters of water, 9 = 0.2(36 + x), so 36 + x = 45 and x = 9. The value 45 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h361",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a guitar was increased by 20%. Later, the new price was decreased by 30%, and the resulting price was $50.40. What was the price of the guitar, in dollars, before both changes?",
    choices: [
      "$56",
      "$55.44",
      "$54.60",
      "$60"
    ],
    answer: 3,
    explanation: "If the original price is P, the final price is P(1 + 0.2)(1 − 0.3) = 0.84P. Setting 0.84P = 50.4 gives P = 60. Combining the changes into a single 10% decrease gives 56, which ignores that the 30% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h362",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 8 numbers with a mean of 39. Two numbers are removed from the data set, and the mean of the remaining 6 numbers is 36. If one of the removed numbers is 3 times the other, what is the greater of the two removed numbers?",
    choices: [
      "45",
      "24",
      "72",
      "96"
    ],
    answer: 2,
    explanation: "The original sum is 8(39) = 312, and the remaining sum is 6(36) = 216, so the removed numbers sum to 96. If the smaller is s, then s + 3s = 96, so s = 24 and the greater number is 72. The value 96 is the sum of both removed numbers."
  },
  {
    id: "psd-h363",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 18 liters of a 30% acid solution. How many liters of pure water must be added so that the solution is 20% acid?",
    choices: [
      "6",
      "9",
      "9/5",
      "27"
    ],
    answer: 1,
    explanation: "The amount of acid stays at 0.3(18) = 5.4 liters. After adding x liters of water, 5.4 = 0.2(18 + x), so 18 + x = 27 and x = 9. The value 27 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h364",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a jar, the ratio of red marbles to blue marbles is 2 to 3. After 3 red marbles are added, the ratio of red marbles to blue marbles becomes 3 to 4. How many red marbles and blue marbles combined were in the jar before any were added?",
    choices: [
      "24",
      "63",
      "36",
      "60"
    ],
    answer: 3,
    explanation: "Let the original numbers be 2k red marbles and 3k blue marbles. Then (2k + 3)/(3k + 0) = 3/4, so 4(2k + 3) = 3(3k + 0), −1k = −12, and k = 12. The original total is 5(12) = 60. The value 63 is the total after the additions."
  },
  {
    id: "psd-h365",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "On a map, 1 centimeter represents 6 kilometers. A park is shown on the map as a region with an area of 12 square centimeters. What is the actual area of the park, in square kilometers?",
    choices: [
      "432",
      "72",
      "144",
      "5184"
    ],
    answer: 0,
    explanation: "Each length is multiplied by 6, so each area is multiplied by 6² = 36. The actual area is 12 × 36 = 432 square kilometers. Multiplying by 6 only scales one dimension."
  },
  {
    id: "psd-h366",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A solid cube of copper has an edge length of 0.4 meter. The density of copper is 8.9 grams per cubic centimeter. What is the mass of the cube, in kilograms? (1 meter = 100 centimeters and 1 kilogram = 1,000 grams)",
    choices: [
      "14.24",
      "569,600",
      "0.5696",
      "569.6"
    ],
    answer: 3,
    explanation: "The edge is 0.4 × 100 = 40 centimeters, so the volume is 40³ = 64,000 cubic centimeters. The mass is 64,000 × 8.9 = 569,600 grams, or 569.6 kilograms. Converting only one dimension of a cubic unit, or skipping the gram-to-kilogram step, gives one of the other values."
  },
  {
    id: "psd-h367",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 9 values in a data set are 13, 58, 35, 53, 7, 25, 21, 49, 46. The value 93 is added to the data set. For the new data set of 10 values, what is the mean minus the median?",
    choices: [
      "5",
      "−0.5",
      "−8/9",
      "24"
    ],
    answer: 1,
    explanation: "The new data set has sum 400 and 10 values, so the mean is 40. In order, the two middle values are 35 and 46, so the median is 40.5. The mean minus the median is −0.5. Using the original median, 35, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h368",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 300 residents of a city was surveyed, and 64% of those surveyed said they support building a new park. The margin of error for this estimate, at the 95% confidence level, is 4 percentage points. There are 60,000 residents of the city in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "It is plausible that between 36,000 and 40,800 of the 60,000 residents support building a new park.",
      "It is plausible that between 36,864 and 39,936 of the 60,000 residents support building a new park.",
      "Exactly 38,400 of the 60,000 residents support building a new park.",
      "It is plausible that between 180 and 204 of the 60,000 residents support building a new park."
    ],
    answer: 0,
    explanation: "The interval 64 ± 4 percent, from 60% to 68%, gives a plausible range for the whole population. 60% of 60,000 is 36,000 and 68% of 60,000 is 40,800. A sample estimate does not give an exact count, the interval must be applied to the 60,000 residents rather than the sample of 300, and the margin of error is in percentage points, not a percent of 64%."
  },
  {
    id: "psd-h369",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 180 parts in 4.5 hours. Machine B works at a constant rate that is 50% greater than Machine A's rate. How many minutes does it take Machine B to produce 100 parts?",
    choices: [
      "150",
      "100",
      "75",
      "225"
    ],
    answer: 1,
    explanation: "Machine A's rate is 180/4.5 = 40 parts per hour, so Machine B's rate is 40 × 1.5 = 60 parts per hour. Producing 100 parts takes 100/60 hours, which is 100 minutes. Reducing Machine A's time by 50% gives 75, which is not the same as increasing the rate by 50%."
  },
  {
    id: "psd-h370",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The length of a rectangular garden is increased by 50%, and its width is decreased by 15%. Which of the following describes the change in the area of the garden?",
    choices: [
      "It increases by 35%.",
      "It increases by 27.5%.",
      "It decreases by 7.5%.",
      "It increases by 7.5%."
    ],
    answer: 1,
    explanation: "The new area is (1 + 0.5)(1 − 0.15) = 1.275 times the original area, so the area increases by 27.5%. Simply combining the percents as 50 − 15 ignores the product term, 0.5 × 0.15 = 0.075."
  },
  {
    id: "psd-h371",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 800 employees of a large company was surveyed, and 20% of those surveyed said they prefer a four-day workweek. The margin of error for this estimate, at the 95% confidence level, is 6 percentage points. There are 60,000 employees at the company in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "It is plausible that between 11,280 and 12,720 of the 60,000 employees prefer a four-day workweek.",
      "Exactly 12,000 of the 60,000 employees prefer a four-day workweek.",
      "It is plausible that between 112 and 208 of the 60,000 employees prefer a four-day workweek.",
      "It is plausible that between 8,400 and 15,600 of the 60,000 employees prefer a four-day workweek."
    ],
    answer: 3,
    explanation: "The interval 20 ± 6 percent, from 14% to 26%, gives a plausible range for the whole population. 14% of 60,000 is 8,400 and 26% of 60,000 is 15,600. A sample estimate does not give an exact count, the interval must be applied to the 60,000 employees rather than the sample of 800, and the margin of error is in percentage points, not a percent of 20%."
  },
  {
    id: "psd-h372",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "On a map, 1 inch represents 4 miles. A park is shown on the map as a region with an area of 4.5 square inches. What is the actual area of the park, in square miles?",
    choices: [
      "324",
      "36",
      "18",
      "72"
    ],
    answer: 3,
    explanation: "Each length is multiplied by 4, so each area is multiplied by 4² = 16. The actual area is 4.5 × 16 = 72 square miles. Multiplying by 4 only scales one dimension."
  },
  {
    id: "psd-h373",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A solid cube of lead has an edge length of 0.3 meter. The density of lead is 11.3 grams per cubic centimeter. What is the mass of the cube, in kilograms? (1 meter = 100 centimeters and 1 kilogram = 1,000 grams)",
    choices: [
      "10.17",
      "305,100",
      "0.3051",
      "305.1"
    ],
    answer: 3,
    explanation: "The edge is 0.3 × 100 = 30 centimeters, so the volume is 30³ = 27,000 cubic centimeters. The mass is 27,000 × 11.3 = 305,100 grams, or 305.1 kilograms. Converting only one dimension of a cubic unit, or skipping the gram-to-kilogram step, gives one of the other values."
  },
  {
    id: "psd-h374",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 8 numbers with a mean of 39. Two numbers are removed from the data set, and the mean of the remaining 6 numbers is 46. If one of the removed numbers is 3 times the other, what is the greater of the two removed numbers?",
    choices: [
      "9",
      "36",
      "−15/2",
      "27"
    ],
    answer: 3,
    explanation: "The original sum is 8(39) = 312, and the remaining sum is 6(46) = 276, so the removed numbers sum to 36. If the smaller is s, then s + 3s = 36, so s = 9 and the greater number is 27. The value 36 is the sum of both removed numbers."
  },
  {
    id: "psd-h375",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Program A</th><th>Program B</th><th>Program C</th><th>Total</th></tr></thead><tbody><tr><td>Completed</td><td>51</td><td>25</td><td>17</td><td>93</td></tr><tr><td>Did not complete</td><td>13</td><td>34</td><td>17</td><td>64</td></tr><tr><td>Total</td><td>64</td><td>59</td><td>34</td><td>157</td></tr></tbody></table>The table summarizes 157 participants in a training study. One of the participants who is not in the \"Program B\" category will be selected at random. What is the probability that the selected one is in the \"Completed\" category?",
    choices: [
      "68/93",
      "68/98",
      "93/157",
      "68/157"
    ],
    answer: 1,
    explanation: "Outside the \"Program B\" column there are 157 − 59 = 98 in total, and 93 − 25 = 68 of them are in \"Completed.\" So the probability is 68/98. Dividing by the grand total 157 answers a different question: the probability of both conditions among all 157."
  },
  {
    id: "psd-h376",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 400 students at a large university was surveyed, and 70% of those surveyed said they use the campus shuttle at least once a week. The margin of error for this estimate, at the 95% confidence level, is 5 percentage points. There are 18,000 students at the university in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "It is plausible that between 11,970 and 13,230 of the 18,000 students use the campus shuttle at least once a week.",
      "Exactly 12,600 of the 18,000 students use the campus shuttle at least once a week.",
      "It is plausible that between 260 and 300 of the 18,000 students use the campus shuttle at least once a week.",
      "It is plausible that between 11,700 and 13,500 of the 18,000 students use the campus shuttle at least once a week."
    ],
    answer: 3,
    explanation: "The interval 70 ± 5 percent, from 65% to 75%, gives a plausible range for the whole population. 65% of 18,000 is 11,700 and 75% of 18,000 is 13,500. A sample estimate does not give an exact count, the interval must be applied to the 18,000 students rather than the sample of 400, and the margin of error is in percentage points, not a percent of 70%."
  },
  {
    id: "psd-h377",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Soil 1</th><th>Soil 2</th><th>Soil 3</th><th>Total</th></tr></thead><tbody><tr><td>Germinated</td><td>16</td><td>53</td><td>59</td><td>128</td></tr><tr><td>Did not germinate</td><td>55</td><td>54</td><td>12</td><td>121</td></tr><tr><td>Total</td><td>71</td><td>107</td><td>71</td><td>249</td></tr></tbody></table>The table summarizes 249 seeds planted in an experiment. One of the seeds that is not in the \"Soil 2\" category will be selected at random. What is the probability that the selected one is in the \"Germinated\" category?",
    choices: [
      "75/128",
      "128/249",
      "75/142",
      "75/249"
    ],
    answer: 2,
    explanation: "Outside the \"Soil 2\" column there are 249 − 107 = 142 in total, and 128 − 53 = 75 of them are in \"Germinated.\" So the probability is 75/142. Dividing by the grand total 249 answers a different question: the probability of both conditions among all 249."
  },
  {
    id: "psd-h378",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot shows the relationship between x, the temperature, in degrees Celsius, and y, the number of drinks sold at a kiosk, for a set of observations. A line of best fit for the data is y = 1.5x + 12. One observation has x = 12 and y = 15. Which of the following is the difference between the actual y-value of this observation and the y-value predicted by the line of best fit (actual minus predicted)?",
    choices: [
      "−3",
      "−15",
      "15",
      "30"
    ],
    answer: 1,
    explanation: "The predicted value is 1.5(12) + 12 = 30. Actual minus predicted is 15 − 30 = −15. Subtracting in the other order gives 15."
  },
  {
    id: "psd-h379",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot shows the relationship between x, the number of weeks since a store opened, and y, its weekly revenue, in hundreds of dollars, for a set of observations. A line of best fit for the data is y = 2.4x + 57. One observation has x = 27 and y = 115.8. Which of the following is the difference between the actual y-value of this observation and the y-value predicted by the line of best fit (actual minus predicted)?",
    choices: [
      "6",
      "51",
      "121.8",
      "−6"
    ],
    answer: 3,
    explanation: "The predicted value is 2.4(27) + 57 = 121.8. Actual minus predicted is 115.8 − 121.8 = −6. Subtracting in the other order gives 6."
  },
  {
    id: "psd-h380",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Soil 1</th><th>Soil 2</th><th>Soil 3</th><th>Total</th></tr></thead><tbody><tr><td>Germinated</td><td>17</td><td>33</td><td>16</td><td>66</td></tr><tr><td>Did not germinate</td><td>52</td><td>52</td><td>54</td><td>158</td></tr><tr><td>Total</td><td>69</td><td>85</td><td>70</td><td>224</td></tr></tbody></table>The table summarizes 224 seeds planted in an experiment. One of the seeds that is not in the \"Soil 3\" category will be selected at random. What is the probability that the selected one is in the \"Germinated\" category?",
    choices: [
      "50/154",
      "50/224",
      "50/66",
      "66/224"
    ],
    answer: 0,
    explanation: "Outside the \"Soil 3\" column there are 224 − 70 = 154 in total, and 66 − 16 = 50 of them are in \"Germinated.\" So the probability is 50/154. Dividing by the grand total 224 answers a different question: the probability of both conditions among all 224."
  },
  {
    id: "psd-h381",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot shows the relationship between x, the number of weeks since a store opened, and y, its weekly revenue, in hundreds of dollars, for a set of observations. A line of best fit for the data is y = 3.5x + 27. One observation has x = 16 and y = 85. Which of the following is the difference between the actual y-value of this observation and the y-value predicted by the line of best fit (actual minus predicted)?",
    choices: [
      "29",
      "83",
      "2",
      "−2"
    ],
    answer: 2,
    explanation: "The predicted value is 3.5(16) + 27 = 83. Actual minus predicted is 85 − 83 = 2. Subtracting in the other order gives −2."
  },
  {
    id: "psd-h382",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Grade 9</th><th>Grade 10</th><th>Grade 11</th><th>Total</th></tr></thead><tbody><tr><td>Owns a pet</td><td>51</td><td>37</td><td>45</td><td>133</td></tr><tr><td>Does not own a pet</td><td>60</td><td>37</td><td>49</td><td>146</td></tr><tr><td>Total</td><td>111</td><td>74</td><td>94</td><td>279</td></tr></tbody></table>The table summarizes 279 students surveyed at a high school. One of the students who is not in the \"Grade 10\" category will be selected at random. What is the probability that the selected one is in the \"Owns a pet\" category?",
    choices: [
      "96/205",
      "96/279",
      "133/279",
      "96/133"
    ],
    answer: 0,
    explanation: "Outside the \"Grade 10\" column there are 279 − 74 = 205 in total, and 133 − 37 = 96 of them are in \"Owns a pet.\" So the probability is 96/205. Dividing by the grand total 279 answers a different question: the probability of both conditions among all 279."
  },
  {
    id: "psd-h383",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot shows the relationship between x, the temperature, in degrees Celsius, and y, the number of drinks sold at a kiosk, for a set of observations. A line of best fit for the data is y = 4.5x + 23. One observation has x = 27 and y = 131.5. Which of the following is the difference between the actual y-value of this observation and the y-value predicted by the line of best fit (actual minus predicted)?",
    choices: [
      "144.5",
      "−13",
      "10",
      "13"
    ],
    answer: 1,
    explanation: "The predicted value is 4.5(27) + 23 = 144.5. Actual minus predicted is 131.5 − 144.5 = −13. Subtracting in the other order gives 13."
  },
  {
    id: "psd-h384",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 7 values in a data set are 7, 34, 22, 20, 44, 36, 46. The value 63 is added to the data set. For the new data set of 8 values, what is the mean minus the median?",
    choices: [
      "0",
      "−29/7",
      "2",
      "−1"
    ],
    answer: 3,
    explanation: "The new data set has sum 272 and 8 values, so the mean is 34. In order, the two middle values are 34 and 36, so the median is 35. The mean minus the median is −1. Using the original median, 34, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h385",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "On a map, 1 centimeter represents 8 kilometers. A park is shown on the map as a region with an area of 12 square centimeters. What is the actual area of the park, in square kilometers?",
    choices: [
      "768",
      "9216",
      "192",
      "96"
    ],
    answer: 0,
    explanation: "Each length is multiplied by 8, so each area is multiplied by 8² = 64. The actual area is 12 × 64 = 768 square kilometers. Multiplying by 8 only scales one dimension."
  },
  {
    id: "psd-h386",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot shows the relationship between x, the temperature, in degrees Celsius, and y, the number of drinks sold at a kiosk, for a set of observations. A line of best fit for the data is y = 1.8x + 47. One observation has x = 10 and y = 50. Which of the following is the difference between the actual y-value of this observation and the y-value predicted by the line of best fit (actual minus predicted)?",
    choices: [
      "65",
      "32",
      "15",
      "−15"
    ],
    answer: 3,
    explanation: "The predicted value is 1.8(10) + 47 = 65. Actual minus predicted is 50 − 65 = −15. Subtracting in the other order gives 15."
  },
  {
    id: "psd-h387",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The width of a rectangular parking lot is increased by 10%, and its length is decreased by 40%. Which of the following describes the change in the area of the parking lot?",
    choices: [
      "It decreases by 4%.",
      "It decreases by 34%.",
      "It decreases by 30%.",
      "It increases by 50%."
    ],
    answer: 1,
    explanation: "The new area is (1 + 0.1)(1 − 0.4) = 0.66 times the original area, so the area decreases by 34%. Simply combining the percents as 10 − 40 ignores the product term, 0.1 × 0.4 = 0.04."
  },
  {
    id: "psd-h388",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 45 liters of a 40% acid solution. How many liters of pure water must be added so that the solution is 25% acid?",
    choices: [
      "27",
      "135/8",
      "72",
      "27/4"
    ],
    answer: 0,
    explanation: "The amount of acid stays at 0.4(45) = 18 liters. After adding x liters of water, 18 = 0.25(45 + x), so 45 + x = 72 and x = 27. The value 72 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h389",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 300 parts in 4.5 hours. Machine B works at a constant rate that is 50% greater than Machine A's rate. How many minutes does it take Machine B to produce 200 parts?",
    choices: [
      "270",
      "90",
      "180",
      "120"
    ],
    answer: 3,
    explanation: "Machine A's rate is 300/4.5 = 66.67 parts per hour, so Machine B's rate is 66.67 × 1.5 = 100 parts per hour. Producing 200 parts takes 200/100 hours, which is 120 minutes. Reducing Machine A's time by 50% gives 90, which is not the same as increasing the rate by 50%."
  },
  {
    id: "psd-h390",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a tour group, the ratio of adults to children is 5 to 7. After 9 adults and 6 children are added, the ratio of adults to children becomes 4 to 5. How many adults and children combined were in the group before any were added?",
    choices: [
      "35",
      "99",
      "49",
      "84"
    ],
    answer: 3,
    explanation: "Let the original numbers be 5k adults and 7k children. Then (5k + 9)/(7k + 6) = 4/5, so 5(5k + 9) = 4(7k + 6), −3k = −21, and k = 7. The original total is 12(7) = 84. The value 99 is the total after the additions."
  },
  {
    id: "psd-h391",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 12 numbers with a mean of 60. Two numbers are removed from the data set, and the mean of the remaining 10 numbers is 58. If one of the removed numbers is 4 times the other, what is the greater of the two removed numbers?",
    choices: [
      "112",
      "140",
      "28",
      "328/5"
    ],
    answer: 0,
    explanation: "The original sum is 12(60) = 720, and the remaining sum is 10(58) = 580, so the removed numbers sum to 140. If the smaller is s, then s + 4s = 140, so s = 28 and the greater number is 112. The value 140 is the sum of both removed numbers."
  },
  {
    id: "psd-h392",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot shows the relationship between x, the number of weeks since a store opened, and y, its weekly revenue, in hundreds of dollars, for a set of observations. A line of best fit for the data is y = 3.5x + 33. One observation has x = 19 and y = 104.5. Which of the following is the difference between the actual y-value of this observation and the y-value predicted by the line of best fit (actual minus predicted)?",
    choices: [
      "38",
      "99.5",
      "5",
      "−5"
    ],
    answer: 2,
    explanation: "The predicted value is 3.5(19) + 33 = 99.5. Actual minus predicted is 104.5 − 99.5 = 5. Subtracting in the other order gives −5."
  },
  {
    id: "psd-h393",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a bicycle was increased by 15%. Later, the new price was decreased by 40%, and the resulting price was $345. What was the price of the bicycle, in dollars, before both changes?",
    choices: [
      "$460",
      "$410.55",
      "$500",
      "$420"
    ],
    answer: 2,
    explanation: "If the original price is P, the final price is P(1 + 0.15)(1 − 0.4) = 0.69P. Setting 0.69P = 345 gives P = 500. Combining the changes into a single 25% decrease gives 460, which ignores that the 40% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h394",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Program A</th><th>Program B</th><th>Program C</th><th>Total</th></tr></thead><tbody><tr><td>Completed</td><td>36</td><td>38</td><td>19</td><td>93</td></tr><tr><td>Did not complete</td><td>57</td><td>45</td><td>28</td><td>130</td></tr><tr><td>Total</td><td>93</td><td>83</td><td>47</td><td>223</td></tr></tbody></table>The table summarizes 223 participants in a training study. One of the participants who is not in the \"Program C\" category will be selected at random. What is the probability that the selected one is in the \"Completed\" category?",
    choices: [
      "93/223",
      "74/176",
      "74/93",
      "74/223"
    ],
    answer: 1,
    explanation: "Outside the \"Program C\" column there are 223 − 47 = 176 in total, and 93 − 19 = 74 of them are in \"Completed.\" So the probability is 74/176. Dividing by the grand total 223 answers a different question: the probability of both conditions among all 223."
  },
  {
    id: "psd-h395",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 7 values in a data set are 32, 49, 28, 13, 52, 43, 51. The value 0 is added to the data set. For the new data set of 8 values, what is the mean minus the median?",
    choices: [
      "−4",
      "−9.5",
      "1",
      "−33/7"
    ],
    answer: 0,
    explanation: "The new data set has sum 268 and 8 values, so the mean is 33.5. In order, the two middle values are 32 and 43, so the median is 37.5. The mean minus the median is −4. Using the original median, 43, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h396",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot shows the relationship between x, the number of weeks since a store opened, and y, its weekly revenue, in hundreds of dollars, for a set of observations. A line of best fit for the data is y = 2.5x + 23. One observation has x = 4 and y = 19. Which of the following is the difference between the actual y-value of this observation and the y-value predicted by the line of best fit (actual minus predicted)?",
    choices: [
      "−14",
      "14",
      "9",
      "33"
    ],
    answer: 0,
    explanation: "The predicted value is 2.5(4) + 23 = 33. Actual minus predicted is 19 − 33 = −14. Subtracting in the other order gives 14."
  },
  {
    id: "psd-h397",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A solid cube of steel has an edge length of 0.15 meter. The density of steel is 7.8 grams per cubic centimeter. What is the mass of the cube, in kilograms? (1 meter = 100 centimeters and 1 kilogram = 1,000 grams)",
    choices: [
      "1.755",
      "26,325",
      "0.026325",
      "26.325"
    ],
    answer: 3,
    explanation: "The edge is 0.15 × 100 = 15 centimeters, so the volume is 15³ = 3,375 cubic centimeters. The mass is 3,375 × 7.8 = 26,325 grams, or 26.325 kilograms. Converting only one dimension of a cubic unit, or skipping the gram-to-kilogram step, gives one of the other values."
  },
  {
    id: "psd-h398",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 480 parts in 3 hours. Machine B works at a constant rate that is 50% greater than Machine A's rate. How many minutes does it take Machine B to produce 400 parts?",
    choices: [
      "225",
      "75",
      "100",
      "150"
    ],
    answer: 2,
    explanation: "Machine A's rate is 480/3 = 160 parts per hour, so Machine B's rate is 160 × 1.5 = 240 parts per hour. Producing 400 parts takes 400/240 hours, which is 100 minutes. Reducing Machine A's time by 50% gives 75, which is not the same as increasing the rate by 50%."
  },
  {
    id: "psd-h399",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The enrollment at Ridgeview High School increased by 60% from 2010 to 2015. The enrollment at Ridgeview High School in 2020 was 20% less than it was in 2010. By what percent did the enrollment at Ridgeview High School decrease from 2015 to 2020?",
    choices: [
      "100%",
      "40%",
      "80%",
      "50%"
    ],
    answer: 3,
    explanation: "If the 2010 value is 100, the 2015 value is 160 and the 2020 value is 80. The decrease from 2015 to 2020 is 160 − 80 = 80, and 80/160 = 0.5, or 50%. Adding the percents gives 80%, but that decrease is measured from the larger 2015 value."
  },
  {
    id: "psd-h400",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A solid cube of lead has an edge length of 0.4 meter. The density of lead is 11.3 grams per cubic centimeter. What is the mass of the cube, in kilograms? (1 meter = 100 centimeters and 1 kilogram = 1,000 grams)",
    choices: [
      "0.7232",
      "723.2",
      "723,200",
      "18.08"
    ],
    answer: 1,
    explanation: "The edge is 0.4 × 100 = 40 centimeters, so the volume is 40³ = 64,000 cubic centimeters. The mass is 64,000 × 11.3 = 723,200 grams, or 723.2 kilograms. Converting only one dimension of a cubic unit, or skipping the gram-to-kilogram step, gives one of the other values."
  },
  {
    id: "psd-h401",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The length of a rectangular poster is increased by 10%, and its width is decreased by 40%. Which of the following describes the change in the area of the poster?",
    choices: [
      "It increases by 50%.",
      "It decreases by 4%.",
      "It decreases by 34%.",
      "It decreases by 30%."
    ],
    answer: 2,
    explanation: "The new area is (1 + 0.1)(1 − 0.4) = 0.66 times the original area, so the area decreases by 34%. Simply combining the percents as 10 − 40 ignores the product term, 0.1 × 0.4 = 0.04."
  },
  {
    id: "psd-h402",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 450 parts in 3 hours. Machine B works at a constant rate that is 25% greater than Machine A's rate. How many minutes does it take Machine B to produce 100 parts?",
    choices: [
      "30",
      "32",
      "40",
      "50"
    ],
    answer: 1,
    explanation: "Machine A's rate is 450/3 = 150 parts per hour, so Machine B's rate is 150 × 1.25 = 187.5 parts per hour. Producing 100 parts takes 100/187.5 hours, which is 32 minutes. Reducing Machine A's time by 25% gives 30, which is not the same as increasing the rate by 25%."
  },
  {
    id: "psd-h403",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The population of Millbrook increased by 25% from 2012 to 2016. The population of Millbrook in 2020 was 40% less than it was in 2012. By what percent did the population of Millbrook decrease from 2016 to 2020?",
    choices: [
      "108.33%",
      "15%",
      "52%",
      "65%"
    ],
    answer: 2,
    explanation: "If the 2012 value is 100, the 2016 value is 125 and the 2020 value is 60. The decrease from 2016 to 2020 is 125 − 60 = 65, and 65/125 = 0.52, or 52%. Adding the percents gives 65%, but that decrease is measured from the larger 2016 value."
  },
  {
    id: "psd-h404",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a bicycle was increased by 50%. Later, the new price was decreased by 30%, and the resulting price was $210. What was the price of the bicycle, in dollars, before both changes?",
    choices: [
      "$175",
      "$200",
      "$182",
      "$136.50"
    ],
    answer: 1,
    explanation: "If the original price is P, the final price is P(1 + 0.5)(1 − 0.3) = 1.05P. Setting 1.05P = 210 gives P = 200. Combining the changes into a single 20% increase gives 175, which ignores that the 30% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h405",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The length of a rectangular solar panel is increased by 15%, and its width is decreased by 25%. Which of the following describes the change in the area of the solar panel?",
    choices: [
      "It decreases by 3.75%.",
      "It decreases by 13.75%.",
      "It increases by 40%.",
      "It decreases by 10%."
    ],
    answer: 1,
    explanation: "The new area is (1 + 0.15)(1 − 0.25) = 0.8625 times the original area, so the area decreases by 13.75%. Simply combining the percents as 15 − 25 ignores the product term, 0.15 × 0.25 = 0.0375."
  },
  {
    id: "psd-h406",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt: "A scatterplot shows the relationship between x, the number of hours a plant was exposed to light each day, and y, its height, in centimeters, for a set of observations. A line of best fit for the data is y = 2.4x + 26. One observation has x = 27 and y = 80.8. Which of the following is the difference between the actual y-value of this observation and the y-value predicted by the line of best fit (actual minus predicted)?",
    choices: [
      "90.8",
      "−10",
      "16",
      "10"
    ],
    answer: 1,
    explanation: "The predicted value is 2.4(27) + 26 = 90.8. Actual minus predicted is 80.8 − 90.8 = −10. Subtracting in the other order gives 10."
  },
  {
    id: "psd-h407",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 9 values in a data set are 39, 43, 29, 13, 54, 15, 45, 26, 27. The value 4 is added to the data set. For the new data set of 10 values, what is the mean minus the median?",
    choices: [
      "1.5",
      "0.5",
      "−5",
      "10/3"
    ],
    answer: 0,
    explanation: "The new data set has sum 295 and 10 values, so the mean is 29.5. In order, the two middle values are 27 and 29, so the median is 28. The mean minus the median is 1.5. Using the original median, 29, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h408",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A solid cube of brass has an edge length of 0.5 meter. The density of brass is 8.5 grams per cubic centimeter. What is the mass of the cube, in kilograms? (1 meter = 100 centimeters and 1 kilogram = 1,000 grams)",
    choices: [
      "1.0625",
      "21.25",
      "1,062,500",
      "1,062.5"
    ],
    answer: 3,
    explanation: "The edge is 0.5 × 100 = 50 centimeters, so the volume is 50³ = 125,000 cubic centimeters. The mass is 125,000 × 8.5 = 1,062,500 grams, or 1,062.5 kilograms. Converting only one dimension of a cubic unit, or skipping the gram-to-kilogram step, gives one of the other values."
  },
  {
    id: "psd-h409",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 120 parts in 3 hours. Machine B works at a constant rate that is 25% greater than Machine A's rate. How many minutes does it take Machine B to produce 500 parts?",
    choices: [
      "600",
      "750",
      "937.5",
      "562.5"
    ],
    answer: 0,
    explanation: "Machine A's rate is 120/3 = 40 parts per hour, so Machine B's rate is 40 × 1.25 = 50 parts per hour. Producing 500 parts takes 500/50 hours, which is 600 minutes. Reducing Machine A's time by 25% gives 562.5, which is not the same as increasing the rate by 25%."
  },
  {
    id: "psd-h410",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 18 numbers with a mean of 29. Two numbers are removed from the data set, and the mean of the remaining 16 numbers is 30. If one of the removed numbers is 2 times the other, what is the greater of the two removed numbers?",
    choices: [
      "42",
      "14",
      "28",
      "8"
    ],
    answer: 2,
    explanation: "The original sum is 18(29) = 522, and the remaining sum is 16(30) = 480, so the removed numbers sum to 42. If the smaller is s, then s + 2s = 42, so s = 14 and the greater number is 28. The value 42 is the sum of both removed numbers."
  },
  {
    id: "psd-h411",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The width of a rectangular poster is increased by 40%, and its length is decreased by 25%. Which of the following describes the change in the area of the poster?",
    choices: [
      "It increases by 15%.",
      "It increases by 5%.",
      "It decreases by 10%.",
      "It increases by 10%."
    ],
    answer: 1,
    explanation: "The new area is (1 + 0.4)(1 − 0.25) = 1.05 times the original area, so the area increases by 5%. Simply combining the percents as 40 − 25 ignores the product term, 0.4 × 0.25 = 0.1."
  },
  {
    id: "psd-h412",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A solid cube of steel has an edge length of 0.1 meter. The density of steel is 7.8 grams per cubic centimeter. What is the mass of the cube, in kilograms? (1 meter = 100 centimeters and 1 kilogram = 1,000 grams)",
    choices: [
      "0.78",
      "7,800",
      "7.8",
      "0.0078"
    ],
    answer: 2,
    explanation: "The edge is 0.1 × 100 = 10 centimeters, so the volume is 10³ = 1,000 cubic centimeters. The mass is 1,000 × 7.8 = 7,800 grams, or 7.8 kilograms. Converting only one dimension of a cubic unit, or skipping the gram-to-kilogram step, gives one of the other values."
  },
  {
    id: "psd-h413",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 360 parts in 5 hours. Machine B works at a constant rate that is 25% greater than Machine A's rate. How many minutes does it take Machine B to produce 300 parts?",
    choices: [
      "312.5",
      "200",
      "250",
      "187.5"
    ],
    answer: 1,
    explanation: "Machine A's rate is 360/5 = 72 parts per hour, so Machine B's rate is 72 × 1.25 = 90 parts per hour. Producing 300 parts takes 300/90 hours, which is 200 minutes. Reducing Machine A's time by 25% gives 187.5, which is not the same as increasing the rate by 25%."
  },
  {
    id: "psd-h414",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 12 liters of a 45% acid solution. How many liters of pure water must be added so that the solution is 30% acid?",
    choices: [
      "6",
      "9/5",
      "4",
      "18"
    ],
    answer: 0,
    explanation: "The amount of acid stays at 0.45(12) = 5.4 liters. After adding x liters of water, 5.4 = 0.3(12 + x), so 12 + x = 18 and x = 6. The value 18 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h415",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 7 values in a data set are 34, 38, 55, 7, 31, 50, 26. The value 3 is added to the data set. For the new data set of 8 values, what is the mean minus the median?",
    choices: [
      "11.5",
      "3/7",
      "−3.5",
      "−2"
    ],
    answer: 3,
    explanation: "The new data set has sum 244 and 8 values, so the mean is 30.5. In order, the two middle values are 31 and 34, so the median is 32.5. The mean minus the median is −2. Using the original median, 34, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h416",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 16 numbers with a mean of 50. Two numbers are removed from the data set, and the mean of the remaining 14 numbers is 55. If one of the removed numbers is 4 times the other, what is the greater of the two removed numbers?",
    choices: [
      "6",
      "24",
      "−20",
      "30"
    ],
    answer: 1,
    explanation: "The original sum is 16(50) = 800, and the remaining sum is 14(55) = 770, so the removed numbers sum to 30. If the smaller is s, then s + 4s = 30, so s = 6 and the greater number is 24. The value 30 is the sum of both removed numbers."
  },
  {
    id: "psd-h417",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a summer camp group, the ratio of boys to girls is 2 to 5. After 16 boys are added, the ratio of boys to girls becomes 2 to 3. How many boys and girls combined were in the group before any were added?",
    choices: [
      "84",
      "24",
      "60",
      "100"
    ],
    answer: 0,
    explanation: "Let the original numbers be 2k boys and 5k girls. Then (2k + 16)/(5k + 0) = 2/3, so 3(2k + 16) = 2(5k + 0), −4k = −48, and k = 12. The original total is 7(12) = 84. The value 100 is the total after the additions."
  },
  {
    id: "psd-h418",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "On a map, 1 centimeter represents 25 kilometers. A park is shown on the map as a region with an area of 4 square centimeters. What is the actual area of the park, in square kilometers?",
    choices: [
      "2500",
      "100",
      "10000",
      "200"
    ],
    answer: 0,
    explanation: "Each length is multiplied by 25, so each area is multiplied by 25² = 625. The actual area is 4 × 625 = 2500 square kilometers. Multiplying by 25 only scales one dimension."
  },
  {
    id: "psd-h419",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The enrollment at Ridgeview High School increased by 50% from 2005 to 2012. The enrollment at Ridgeview High School in 2019 was 25% less than it was in 2005. By what percent did the enrollment at Ridgeview High School decrease from 2012 to 2019?",
    choices: [
      "75%",
      "50%",
      "25%",
      "100%"
    ],
    answer: 1,
    explanation: "If the 2005 value is 100, the 2012 value is 150 and the 2019 value is 75. The decrease from 2012 to 2019 is 150 − 75 = 75, and 75/150 = 0.5, or 50%. Adding the percents gives 75%, but that decrease is measured from the larger 2012 value."
  },
  {
    id: "psd-h420",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The width of a rectangular poster is increased by 20%, and its length is decreased by 15%. Which of the following describes the change in the area of the poster?",
    choices: [
      "It increases by 3%.",
      "It decreases by 3%.",
      "It increases by 5%.",
      "It increases by 2%."
    ],
    answer: 3,
    explanation: "The new area is (1 + 0.2)(1 − 0.15) = 1.02 times the original area, so the area increases by 2%. Simply combining the percents as 20 − 15 ignores the product term, 0.2 × 0.15 = 0.03."
  },
  {
    id: "psd-h421",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 40 liters of a 45% acid solution. How many liters of pure water must be added so that the solution is 30% acid?",
    choices: [
      "60",
      "20",
      "40/3",
      "6"
    ],
    answer: 1,
    explanation: "The amount of acid stays at 0.45(40) = 18 liters. After adding x liters of water, 18 = 0.3(40 + x), so 40 + x = 60 and x = 20. The value 60 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h422",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 12 numbers with a mean of 58. Two numbers are removed from the data set, and the mean of the remaining 10 numbers is 64. If one of the removed numbers is 3 times the other, what is the greater of the two removed numbers?",
    choices: [
      "−6",
      "42",
      "56",
      "14"
    ],
    answer: 1,
    explanation: "The original sum is 12(58) = 696, and the remaining sum is 10(64) = 640, so the removed numbers sum to 56. If the smaller is s, then s + 3s = 56, so s = 14 and the greater number is 42. The value 56 is the sum of both removed numbers."
  },
  {
    id: "psd-h423",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a camera was increased by 20%. Later, the new price was decreased by 10%, and the resulting price was $162. What was the price of the camera, in dollars, before both changes?",
    choices: [
      "$148.50",
      "$150",
      "$142.56",
      "$145.80"
    ],
    answer: 1,
    explanation: "If the original price is P, the final price is P(1 + 0.2)(1 − 0.1) = 1.08P. Setting 1.08P = 162 gives P = 150. Combining the changes into a single 10% increase gives 147.27, which ignores that the 10% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h424",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 400 employees of a large company was surveyed, and 24% of those surveyed said they prefer a four-day workweek. The margin of error for this estimate, at the 95% confidence level, is 4 percentage points. There are 24,000 employees at the company in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 5,760 of the 24,000 employees prefer a four-day workweek.",
      "It is plausible that between 5,530 and 5,990 of the 24,000 employees prefer a four-day workweek.",
      "It is plausible that between 4,800 and 6,720 of the 24,000 employees prefer a four-day workweek.",
      "It is plausible that between 80 and 112 of the 24,000 employees prefer a four-day workweek."
    ],
    answer: 2,
    explanation: "The interval 24 ± 4 percent, from 20% to 28%, gives a plausible range for the whole population. 20% of 24,000 is 4,800 and 28% of 24,000 is 6,720. A sample estimate does not give an exact count, the interval must be applied to the 24,000 employees rather than the sample of 400, and the margin of error is in percentage points, not a percent of 24%."
  },
  {
    id: "psd-h425",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Grade 9</th><th>Grade 10</th><th>Grade 11</th><th>Total</th></tr></thead><tbody><tr><td>Owns a pet</td><td>32</td><td>14</td><td>49</td><td>95</td></tr><tr><td>Does not own a pet</td><td>52</td><td>45</td><td>52</td><td>149</td></tr><tr><td>Total</td><td>84</td><td>59</td><td>101</td><td>244</td></tr></tbody></table>The table summarizes 244 students surveyed at a high school. One of the students who is not in the \"Grade 9\" category will be selected at random. What is the probability that the selected one is in the \"Owns a pet\" category?",
    choices: [
      "63/244",
      "63/160",
      "63/95",
      "95/244"
    ],
    answer: 1,
    explanation: "Outside the \"Grade 9\" column there are 244 − 84 = 160 in total, and 95 − 32 = 63 of them are in \"Owns a pet.\" So the probability is 63/160. Dividing by the grand total 244 answers a different question: the probability of both conditions among all 244."
  },
  {
    id: "psd-h426",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a guitar was increased by 50%. Later, the new price was decreased by 15%, and the resulting price was $306. What was the price of the guitar, in dollars, before both changes?",
    choices: [
      "$240",
      "$198.90",
      "$175.95",
      "$234.60"
    ],
    answer: 0,
    explanation: "If the original price is P, the final price is P(1 + 0.5)(1 − 0.15) = 1.275P. Setting 1.275P = 306 gives P = 240. Combining the changes into a single 35% increase gives 226.67, which ignores that the 15% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h427",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 7 values in a data set are 34, 14, 39, 47, 5, 49, 25. The value 3 is added to the data set. For the new data set of 8 values, what is the mean minus the median?",
    choices: [
      "−2.5",
      "−25/7",
      "−7",
      "1"
    ],
    answer: 0,
    explanation: "The new data set has sum 216 and 8 values, so the mean is 27. In order, the two middle values are 25 and 34, so the median is 29.5. The mean minus the median is −2.5. Using the original median, 34, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h428",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 13 numbers with a mean of 59. Two numbers are removed from the data set, and the mean of the remaining 11 numbers is 57. If one of the removed numbers is 4 times the other, what is the greater of the two removed numbers?",
    choices: [
      "28",
      "112",
      "140",
      "332/5"
    ],
    answer: 1,
    explanation: "The original sum is 13(59) = 767, and the remaining sum is 11(57) = 627, so the removed numbers sum to 140. If the smaller is s, then s + 4s = 140, so s = 28 and the greater number is 112. The value 140 is the sum of both removed numbers."
  },
  {
    id: "psd-h429",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A solid cube of brass has an edge length of 0.1 meter. The density of brass is 8.5 grams per cubic centimeter. What is the mass of the cube, in kilograms? (1 meter = 100 centimeters and 1 kilogram = 1,000 grams)",
    choices: [
      "8.5",
      "0.0085",
      "0.85",
      "8,500"
    ],
    answer: 0,
    explanation: "The edge is 0.1 × 100 = 10 centimeters, so the volume is 10³ = 1,000 cubic centimeters. The mass is 1,000 × 8.5 = 8,500 grams, or 8.5 kilograms. Converting only one dimension of a cubic unit, or skipping the gram-to-kilogram step, gives one of the other values."
  },
  {
    id: "psd-h430",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a printer was increased by 40%. Later, the new price was decreased by 10%, and the resulting price was $378. What was the price of the printer, in dollars, before both changes?",
    choices: [
      "$249.48",
      "$300",
      "$264.60",
      "$297"
    ],
    answer: 1,
    explanation: "If the original price is P, the final price is P(1 + 0.4)(1 − 0.1) = 1.26P. Setting 1.26P = 378 gives P = 300. Combining the changes into a single 30% increase gives 290.77, which ignores that the 10% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h431",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "On a map, 1 inch represents 25 miles. A park is shown on the map as a region with an area of 3 square inches. What is the actual area of the park, in square miles?",
    choices: [
      "5625",
      "1875",
      "75",
      "150"
    ],
    answer: 1,
    explanation: "Each length is multiplied by 25, so each area is multiplied by 25² = 625. The actual area is 3 × 625 = 1875 square miles. Multiplying by 25 only scales one dimension."
  },
  {
    id: "psd-h432",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A solid cube of granite has an edge length of 0.1 meter. The density of granite is 2.7 grams per cubic centimeter. What is the mass of the cube, in kilograms? (1 meter = 100 centimeters and 1 kilogram = 1,000 grams)",
    choices: [
      "0.27",
      "0.0027",
      "2.7",
      "2,700"
    ],
    answer: 2,
    explanation: "The edge is 0.1 × 100 = 10 centimeters, so the volume is 10³ = 1,000 cubic centimeters. The mass is 1,000 × 2.7 = 2,700 grams, or 2.7 kilograms. Converting only one dimension of a cubic unit, or skipping the gram-to-kilogram step, gives one of the other values."
  },
  {
    id: "psd-h433",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a guitar was increased by 10%. Later, the new price was decreased by 40%, and the resulting price was $198. What was the price of the guitar, in dollars, before both changes?",
    choices: [
      "$249.48",
      "$300",
      "$257.40",
      "$252"
    ],
    answer: 1,
    explanation: "If the original price is P, the final price is P(1 + 0.1)(1 − 0.4) = 0.66P. Setting 0.66P = 198 gives P = 300. Combining the changes into a single 30% decrease gives 282.86, which ignores that the 40% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h434",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The population of Millbrook increased by 20% from 2005 to 2012. The population of Millbrook in 2019 was 10% less than it was in 2005. By what percent did the population of Millbrook decrease from 2012 to 2019?",
    choices: [
      "25%",
      "33.33%",
      "10%",
      "30%"
    ],
    answer: 0,
    explanation: "If the 2005 value is 100, the 2012 value is 120 and the 2019 value is 90. The decrease from 2012 to 2019 is 120 − 90 = 30, and 30/120 = 0.25, or 25%. Adding the percents gives 30%, but that decrease is measured from the larger 2012 value."
  },
  {
    id: "psd-h435",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a summer camp group, the ratio of boys to girls is 7 to 9. After 7 boys are added, the ratio of boys to girls becomes 5 to 6. How many boys and girls combined were in the group before any were added?",
    choices: [
      "224",
      "98",
      "231",
      "126"
    ],
    answer: 0,
    explanation: "Let the original numbers be 7k boys and 9k girls. Then (7k + 7)/(9k + 0) = 5/6, so 6(7k + 7) = 5(9k + 0), −3k = −42, and k = 14. The original total is 16(14) = 224. The value 231 is the total after the additions."
  },
  {
    id: "psd-h436",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A solid cube of lead has an edge length of 0.25 meter. The density of lead is 11.3 grams per cubic centimeter. What is the mass of the cube, in kilograms? (1 meter = 100 centimeters and 1 kilogram = 1,000 grams)",
    choices: [
      "176,562.5",
      "0.1765625",
      "7.0625",
      "176.5625"
    ],
    answer: 3,
    explanation: "The edge is 0.25 × 100 = 25 centimeters, so the volume is 25³ = 15,625 cubic centimeters. The mass is 15,625 × 11.3 = 176,562.5 grams, or 176.5625 kilograms. Converting only one dimension of a cubic unit, or skipping the gram-to-kilogram step, gives one of the other values."
  },
  {
    id: "psd-h437",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Grade 9</th><th>Grade 10</th><th>Grade 11</th><th>Total</th></tr></thead><tbody><tr><td>Owns a pet</td><td>39</td><td>8</td><td>14</td><td>61</td></tr><tr><td>Does not own a pet</td><td>14</td><td>13</td><td>40</td><td>67</td></tr><tr><td>Total</td><td>53</td><td>21</td><td>54</td><td>128</td></tr></tbody></table>The table summarizes 128 students surveyed at a high school. One of the students who is not in the \"Grade 9\" category will be selected at random. What is the probability that the selected one is in the \"Owns a pet\" category?",
    choices: [
      "22/75",
      "61/128",
      "22/128",
      "22/61"
    ],
    answer: 0,
    explanation: "Outside the \"Grade 9\" column there are 128 − 53 = 75 in total, and 61 − 39 = 22 of them are in \"Owns a pet.\" So the probability is 22/75. Dividing by the grand total 128 answers a different question: the probability of both conditions among all 128."
  },
  {
    id: "psd-h438",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The length of a rectangular poster is increased by 40%, and its width is decreased by 25%. Which of the following describes the change in the area of the poster?",
    choices: [
      "It increases by 10%.",
      "It increases by 5%.",
      "It increases by 15%.",
      "It decreases by 10%."
    ],
    answer: 1,
    explanation: "The new area is (1 + 0.4)(1 − 0.25) = 1.05 times the original area, so the area increases by 5%. Simply combining the percents as 40 − 25 ignores the product term, 0.4 × 0.25 = 0.1."
  },
  {
    id: "psd-h439",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a camera was increased by 15%. Later, the new price was decreased by 40%, and the resulting price was $138. What was the price of the camera, in dollars, before both changes?",
    choices: [
      "$164.22",
      "$184",
      "$168",
      "$200"
    ],
    answer: 3,
    explanation: "If the original price is P, the final price is P(1 + 0.15)(1 − 0.4) = 0.69P. Setting 0.69P = 138 gives P = 200. Combining the changes into a single 25% decrease gives 184, which ignores that the 40% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h440",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "On a map, 1 inch represents 8 miles. A park is shown on the map as a region with an area of 6 square inches. What is the actual area of the park, in square miles?",
    choices: [
      "48",
      "2304",
      "384",
      "96"
    ],
    answer: 2,
    explanation: "Each length is multiplied by 8, so each area is multiplied by 8² = 64. The actual area is 6 × 64 = 384 square miles. Multiplying by 8 only scales one dimension."
  },
  {
    id: "psd-h441",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a printer was increased by 50%. Later, the new price was decreased by 40%, and the resulting price was $270. What was the price of the printer, in dollars, before both changes?",
    choices: [
      "$243",
      "$189",
      "$252",
      "$300"
    ],
    answer: 3,
    explanation: "If the original price is P, the final price is P(1 + 0.5)(1 − 0.4) = 0.9P. Setting 0.9P = 270 gives P = 300. Combining the changes into a single 10% increase gives 245.45, which ignores that the 40% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h442",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a summer camp group, the ratio of boys to girls is 3 to 5. After 7 boys and 9 girls are added, the ratio of boys to girls becomes 7 to 11. How many boys and girls combined were in the group before any were added?",
    choices: [
      "35",
      "72",
      "21",
      "56"
    ],
    answer: 3,
    explanation: "Let the original numbers be 3k boys and 5k girls. Then (3k + 7)/(5k + 9) = 7/11, so 11(3k + 7) = 7(5k + 9), −2k = −14, and k = 7. The original total is 8(7) = 56. The value 72 is the total after the additions."
  },
  {
    id: "psd-h443",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A solid cube of granite has an edge length of 0.3 meter. The density of granite is 2.7 grams per cubic centimeter. What is the mass of the cube, in kilograms? (1 meter = 100 centimeters and 1 kilogram = 1,000 grams)",
    choices: [
      "2.43",
      "72.9",
      "72,900",
      "0.0729"
    ],
    answer: 1,
    explanation: "The edge is 0.3 × 100 = 30 centimeters, so the volume is 30³ = 27,000 cubic centimeters. The mass is 27,000 × 2.7 = 72,900 grams, or 72.9 kilograms. Converting only one dimension of a cubic unit, or skipping the gram-to-kilogram step, gives one of the other values."
  },
  {
    id: "psd-h444",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 200 residents of a city was surveyed, and 45% of those surveyed said they support building a new park. The margin of error for this estimate, at the 95% confidence level, is 6 percentage points. There are 60,000 residents of the city in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "It is plausible that between 25,380 and 28,620 of the 60,000 residents support building a new park.",
      "It is plausible that between 78 and 102 of the 60,000 residents support building a new park.",
      "Exactly 27,000 of the 60,000 residents support building a new park.",
      "It is plausible that between 23,400 and 30,600 of the 60,000 residents support building a new park."
    ],
    answer: 3,
    explanation: "The interval 45 ± 6 percent, from 39% to 51%, gives a plausible range for the whole population. 39% of 60,000 is 23,400 and 51% of 60,000 is 30,600. A sample estimate does not give an exact count, the interval must be applied to the 60,000 residents rather than the sample of 200, and the margin of error is in percentage points, not a percent of 45%."
  },
  {
    id: "psd-h445",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 7 values in a data set are 41, 47, 42, 31, 26, 46, 40. The value 3 is added to the data set. For the new data set of 8 values, what is the mean minus the median?",
    choices: [
      "−6",
      "−6.5",
      "6",
      "−2"
    ],
    answer: 0,
    explanation: "The new data set has sum 276 and 8 values, so the mean is 34.5. In order, the two middle values are 40 and 41, so the median is 40.5. The mean minus the median is −6. Using the original median, 41, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h446",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The width of a rectangular parking lot is increased by 30%, and its length is decreased by 25%. Which of the following describes the change in the area of the parking lot?",
    choices: [
      "It increases by 7.5%.",
      "It decreases by 2.5%.",
      "It increases by 5%.",
      "It decreases by 7.5%."
    ],
    answer: 1,
    explanation: "The new area is (1 + 0.3)(1 − 0.25) = 0.975 times the original area, so the area decreases by 2.5%. Simply combining the percents as 30 − 25 ignores the product term, 0.3 × 0.25 = 0.075."
  },
  {
    id: "psd-h447",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>Soil 1</th><th>Soil 2</th><th>Soil 3</th><th>Total</th></tr></thead><tbody><tr><td>Germinated</td><td>27</td><td>24</td><td>24</td><td>75</td></tr><tr><td>Did not germinate</td><td>52</td><td>52</td><td>35</td><td>139</td></tr><tr><td>Total</td><td>79</td><td>76</td><td>59</td><td>214</td></tr></tbody></table>The table summarizes 214 seeds planted in an experiment. One of the seeds that is not in the \"Soil 1\" category will be selected at random. What is the probability that the selected one is in the \"Germinated\" category?",
    choices: [
      "48/214",
      "48/75",
      "75/214",
      "48/135"
    ],
    answer: 3,
    explanation: "Outside the \"Soil 1\" column there are 214 − 79 = 135 in total, and 75 − 27 = 48 of them are in \"Germinated.\" So the probability is 48/135. Dividing by the grand total 214 answers a different question: the probability of both conditions among all 214."
  },
  {
    id: "psd-h448",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 17 numbers with a mean of 33. Two numbers are removed from the data set, and the mean of the remaining 15 numbers is 35. If one of the removed numbers is 2 times the other, what is the greater of the two removed numbers?",
    choices: [
      "2/3",
      "12",
      "24",
      "36"
    ],
    answer: 2,
    explanation: "The original sum is 17(33) = 561, and the remaining sum is 15(35) = 525, so the removed numbers sum to 36. If the smaller is s, then s + 2s = 36, so s = 12 and the greater number is 24. The value 36 is the sum of both removed numbers."
  },
  {
    id: "psd-h449",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 12 numbers with a mean of 27. Two numbers are removed from the data set, and the mean of the remaining 10 numbers is 24. If one of the removed numbers is 3 times the other, what is the greater of the two removed numbers?",
    choices: [
      "63",
      "84",
      "21",
      "45"
    ],
    answer: 0,
    explanation: "The original sum is 12(27) = 324, and the remaining sum is 10(24) = 240, so the removed numbers sum to 84. If the smaller is s, then s + 3s = 84, so s = 21 and the greater number is 63. The value 84 is the sum of both removed numbers."
  },
  {
    id: "psd-h450",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 600 residents of a city was surveyed, and 70% of those surveyed said they support building a new park. The margin of error for this estimate, at the 95% confidence level, is 5 percentage points. There are 80,000 residents of the city in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "It is plausible that between 53,200 and 58,800 of the 80,000 residents support building a new park.",
      "It is plausible that between 52,000 and 60,000 of the 80,000 residents support building a new park.",
      "Exactly 56,000 of the 80,000 residents support building a new park.",
      "It is plausible that between 390 and 450 of the 80,000 residents support building a new park."
    ],
    answer: 1,
    explanation: "The interval 70 ± 5 percent, from 65% to 75%, gives a plausible range for the whole population. 65% of 80,000 is 52,000 and 75% of 80,000 is 60,000. A sample estimate does not give an exact count, the interval must be applied to the 80,000 residents rather than the sample of 600, and the margin of error is in percentage points, not a percent of 70%."
  },
  {
    id: "psd-h451",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt: "<table class=\"data-table\"><thead><tr><th></th><th>District X</th><th>District Y</th><th>District Z</th><th>Total</th></tr></thead><tbody><tr><td>Voted early</td><td>9</td><td>54</td><td>32</td><td>95</td></tr><tr><td>Voted on election day</td><td>14</td><td>49</td><td>19</td><td>82</td></tr><tr><td>Total</td><td>23</td><td>103</td><td>51</td><td>177</td></tr></tbody></table>The table summarizes 177 voters sampled in a county. One of the voters who is not in the \"District Z\" category will be selected at random. What is the probability that the selected one is in the \"Voted early\" category?",
    choices: [
      "95/177",
      "63/126",
      "63/95",
      "63/177"
    ],
    answer: 1,
    explanation: "Outside the \"District Z\" column there are 177 − 51 = 126 in total, and 95 − 32 = 63 of them are in \"Voted early.\" So the probability is 63/126. Dividing by the grand total 177 answers a different question: the probability of both conditions among all 177."
  },
  {
    id: "psd-h452",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a guitar was increased by 30%. Later, the new price was decreased by 40%, and the resulting price was $117. What was the price of the guitar, in dollars, before both changes?",
    choices: [
      "$150",
      "$130",
      "$126",
      "$114.66"
    ],
    answer: 0,
    explanation: "If the original price is P, the final price is P(1 + 0.3)(1 − 0.4) = 0.78P. Setting 0.78P = 117 gives P = 150. Combining the changes into a single 10% decrease gives 130, which ignores that the 40% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h453",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set consists of 18 numbers with a mean of 34. Two numbers are removed from the data set, and the mean of the remaining 16 numbers is 35. If one of the removed numbers is 3 times the other, what is the greater of the two removed numbers?",
    choices: [
      "52",
      "13",
      "51/4",
      "39"
    ],
    answer: 3,
    explanation: "The original sum is 18(34) = 612, and the remaining sum is 16(35) = 560, so the removed numbers sum to 52. If the smaller is s, then s + 3s = 52, so s = 13 and the greater number is 39. The value 52 is the sum of both removed numbers."
  },
  {
    id: "psd-h454",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 200 residents of a city was surveyed, and 35% of those surveyed said they support building a new park. The margin of error for this estimate, at the 95% confidence level, is 5 percentage points. There are 45,000 residents of the city in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "It is plausible that between 14,962 and 16,538 of the 45,000 residents support building a new park.",
      "It is plausible that between 60 and 80 of the 45,000 residents support building a new park.",
      "Exactly 15,750 of the 45,000 residents support building a new park.",
      "It is plausible that between 13,500 and 18,000 of the 45,000 residents support building a new park."
    ],
    answer: 3,
    explanation: "The interval 35 ± 5 percent, from 30% to 40%, gives a plausible range for the whole population. 30% of 45,000 is 13,500 and 40% of 45,000 is 18,000. A sample estimate does not give an exact count, the interval must be applied to the 45,000 residents rather than the sample of 200, and the margin of error is in percentage points, not a percent of 35%."
  },
  {
    id: "psd-h455",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 300 residents of a city was surveyed, and 35% of those surveyed said they support building a new park. The margin of error for this estimate, at the 95% confidence level, is 6 percentage points. There are 18,000 residents of the city in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 6,300 of the 18,000 residents support building a new park.",
      "It is plausible that between 87 and 123 of the 18,000 residents support building a new park.",
      "It is plausible that between 5,922 and 6,678 of the 18,000 residents support building a new park.",
      "It is plausible that between 5,220 and 7,380 of the 18,000 residents support building a new park."
    ],
    answer: 3,
    explanation: "The interval 35 ± 6 percent, from 29% to 41%, gives a plausible range for the whole population. 29% of 18,000 is 5,220 and 41% of 18,000 is 7,380. A sample estimate does not give an exact count, the interval must be applied to the 18,000 residents rather than the sample of 300, and the margin of error is in percentage points, not a percent of 35%."
  },
  {
    id: "psd-h456",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 60 liters of a 50% acid solution. How many liters of pure water must be added so that the solution is 40% acid?",
    choices: [
      "6",
      "75",
      "15",
      "12"
    ],
    answer: 2,
    explanation: "The amount of acid stays at 0.5(60) = 30 liters. After adding x liters of water, 30 = 0.4(60 + x), so 60 + x = 75 and x = 15. The value 75 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h457",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt: "A random sample of 200 households in a county was surveyed, and 20% of those surveyed said they own an electric vehicle. The margin of error for this estimate, at the 95% confidence level, is 4 percentage points. There are 18,000 households in the county in total. Which of the following is the most appropriate conclusion?",
    choices: [
      "Exactly 3,600 of the 18,000 households own an electric vehicle.",
      "It is plausible that between 3,456 and 3,744 of the 18,000 households own an electric vehicle.",
      "It is plausible that between 32 and 48 of the 18,000 households own an electric vehicle.",
      "It is plausible that between 2,880 and 4,320 of the 18,000 households own an electric vehicle."
    ],
    answer: 3,
    explanation: "The interval 20 ± 4 percent, from 16% to 24%, gives a plausible range for the whole population. 16% of 18,000 is 2,880 and 24% of 18,000 is 4,320. A sample estimate does not give an exact count, the interval must be applied to the 18,000 households rather than the sample of 200, and the margin of error is in percentage points, not a percent of 20%."
  },
  {
    id: "psd-h458",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "Machine A produces 360 parts in 4.5 hours. Machine B works at a constant rate that is 50% greater than Machine A's rate. How many minutes does it take Machine B to produce 150 parts?",
    choices: [
      "112.5",
      "168.75",
      "56.25",
      "75"
    ],
    answer: 3,
    explanation: "Machine A's rate is 360/4.5 = 80 parts per hour, so Machine B's rate is 80 × 1.5 = 120 parts per hour. Producing 150 parts takes 150/120 hours, which is 75 minutes. Reducing Machine A's time by 50% gives 56.25, which is not the same as increasing the rate by 50%."
  },
  {
    id: "psd-h459",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a jar, the ratio of red marbles to blue marbles is 3 to 5. After 17 red marbles and 3 blue marbles are added, the ratio of red marbles to blue marbles becomes 8 to 7. How many red marbles and blue marbles combined were in the jar before any were added?",
    choices: [
      "25",
      "15",
      "60",
      "40"
    ],
    answer: 3,
    explanation: "Let the original numbers be 3k red marbles and 5k blue marbles. Then (3k + 17)/(5k + 3) = 8/7, so 7(3k + 17) = 8(5k + 3), −19k = −95, and k = 5. The original total is 8(5) = 40. The value 60 is the total after the additions."
  },
  {
    id: "psd-h460",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The width of a rectangular parking lot is increased by 40%, and its length is decreased by 15%. Which of the following describes the change in the area of the parking lot?",
    choices: [
      "It increases by 25%.",
      "It increases by 6%.",
      "It decreases by 6%.",
      "It increases by 19%."
    ],
    answer: 3,
    explanation: "The new area is (1 + 0.4)(1 − 0.15) = 1.19 times the original area, so the area increases by 19%. Simply combining the percents as 40 − 15 ignores the product term, 0.4 × 0.15 = 0.06."
  },
  {
    id: "psd-h461",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "On a map, 1 inch represents 2.5 miles. A park is shown on the map as a region with an area of 4 square inches. What is the actual area of the park, in square miles?",
    choices: [
      "20",
      "25",
      "100",
      "10"
    ],
    answer: 1,
    explanation: "Each length is multiplied by 2.5, so each area is multiplied by 2.5² = 6.25. The actual area is 4 × 6.25 = 25 square miles. Multiplying by 2.5 only scales one dimension."
  },
  {
    id: "psd-h462",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 20 liters of a 50% acid solution. How many liters of pure water must be added so that the solution is 40% acid?",
    choices: [
      "4",
      "5",
      "25",
      "2"
    ],
    answer: 1,
    explanation: "The amount of acid stays at 0.5(20) = 10 liters. After adding x liters of water, 10 = 0.4(20 + x), so 20 + x = 25 and x = 5. The value 25 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h463",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 30 liters of a 45% acid solution. How many liters of pure water must be added so that the solution is 30% acid?",
    choices: [
      "45",
      "9/2",
      "10",
      "15"
    ],
    answer: 3,
    explanation: "The amount of acid stays at 0.45(30) = 13.5 liters. After adding x liters of water, 13.5 = 0.3(30 + x), so 30 + x = 45 and x = 15. The value 45 is the final volume, not the amount of water added."
  },
  {
    id: "psd-h464",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a guitar was increased by 15%. Later, the new price was decreased by 40%, and the resulting price was $27.60. What was the price of the guitar, in dollars, before both changes?",
    choices: [
      "$34.50",
      "$36.80",
      "$33.60",
      "$40"
    ],
    answer: 3,
    explanation: "If the original price is P, the final price is P(1 + 0.15)(1 − 0.4) = 0.69P. Setting 0.69P = 27.6 gives P = 40. Combining the changes into a single 25% decrease gives 36.8, which ignores that the 40% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h465",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The population of Millbrook increased by 60% from 2010 to 2015. The population of Millbrook in 2020 was 4% less than it was in 2010. By what percent did the population of Millbrook decrease from 2015 to 2020?",
    choices: [
      "66.67%",
      "64%",
      "40%",
      "56%"
    ],
    answer: 2,
    explanation: "If the 2010 value is 100, the 2015 value is 160 and the 2020 value is 96. The decrease from 2015 to 2020 is 160 − 96 = 64, and 64/160 = 0.4, or 40%. Adding the percents gives 64%, but that decrease is measured from the larger 2015 value."
  },
  {
    id: "psd-h466",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A solid cube of aluminum has an edge length of 0.15 meter. The density of aluminum is 2.7 grams per cubic centimeter. What is the mass of the cube, in kilograms? (1 meter = 100 centimeters and 1 kilogram = 1,000 grams)",
    choices: [
      "9,112.5",
      "0.0091125",
      "0.6075",
      "9.1125"
    ],
    answer: 3,
    explanation: "The edge is 0.15 × 100 = 15 centimeters, so the volume is 15³ = 3,375 cubic centimeters. The mass is 3,375 × 2.7 = 9,112.5 grams, or 9.1125 kilograms. Converting only one dimension of a cubic unit, or skipping the gram-to-kilogram step, gives one of the other values."
  },
  {
    id: "psd-h467",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "The price of a printer was increased by 40%. Later, the new price was decreased by 15%, and the resulting price was $285.60. What was the price of the printer, in dollars, before both changes?",
    choices: [
      "$234.60",
      "$240",
      "$228.48",
      "$214.20"
    ],
    answer: 1,
    explanation: "If the original price is P, the final price is P(1 + 0.4)(1 − 0.15) = 1.19P. Setting 1.19P = 285.6 gives P = 240. Combining the changes into a single 25% increase gives 228.48, which ignores that the 15% decrease applies to the larger, already-increased price."
  },
  {
    id: "psd-h468",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 7 values in a data set are 25, 14, 12, 42, 52, 29, 44. The value 98 is added to the data set. For the new data set of 8 values, what is the mean minus the median?",
    choices: [
      "10.5",
      "15/7",
      "−7.5",
      "4"
    ],
    answer: 3,
    explanation: "The new data set has sum 316 and 8 values, so the mean is 39.5. In order, the two middle values are 29 and 42, so the median is 35.5. The mean minus the median is 4. Using the original median, 29, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h469",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "On a map, 1 centimeter represents 50 kilometers. A park is shown on the map as a region with an area of 6 square centimeters. What is the actual area of the park, in square kilometers?",
    choices: [
      "600",
      "300",
      "90000",
      "15000"
    ],
    answer: 3,
    explanation: "Each length is multiplied by 50, so each area is multiplied by 50² = 2500. The actual area is 6 × 2500 = 15000 square kilometers. Multiplying by 50 only scales one dimension."
  },
  {
    id: "psd-h470",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "The 7 values in a data set are 43, 17, 31, 40, 54, 44, 33. The value 70 is added to the data set. For the new data set of 8 values, what is the mean minus the median?",
    choices: [
      "0",
      "1.5",
      "−5.5",
      "−18/7"
    ],
    answer: 0,
    explanation: "The new data set has sum 332 and 8 values, so the mean is 41.5. In order, the two middle values are 40 and 43, so the median is 41.5. The mean minus the median is 0. Using the original median, 40, or taking middle values without sorting gives a different result."
  },
  {
    id: "psd-h471",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt: "A solid cube of granite has an edge length of 0.5 meter. The density of granite is 2.7 grams per cubic centimeter. What is the mass of the cube, in kilograms? (1 meter = 100 centimeters and 1 kilogram = 1,000 grams)",
    choices: [
      "337.5",
      "0.3375",
      "337,500",
      "6.75"
    ],
    answer: 0,
    explanation: "The edge is 0.5 × 100 = 50 centimeters, so the volume is 50³ = 125,000 cubic centimeters. The mass is 125,000 × 2.7 = 337,500 grams, or 337.5 kilograms. Converting only one dimension of a cubic unit, or skipping the gram-to-kilogram step, gives one of the other values."
  },
  {
    id: "psd-h472",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt: "In a tour group, the ratio of adults to children is 2 to 3. After 3 adults and 6 children are added, the ratio of adults to children becomes 9 to 14. How many adults and children combined were in the group before any were added?",
    choices: [
      "24",
      "69",
      "60",
      "36"
    ],
    answer: 2,
    explanation: "Let the original numbers be 2k adults and 3k children. Then (2k + 3)/(3k + 6) = 9/14, so 14(2k + 3) = 9(3k + 6), 1k = 12, and k = 12. The original total is 5(12) = 60. The value 69 is the total after the additions."
  },
  {
    id: "psd-h473",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt: "A chemist has 20 liters of a 24% acid solution. How many liters of pure water must be added so that the solution is 16% acid?",
    choices: [
      "20/3",
      "30",
      "8/5",
      "10"
    ],
    answer: 3,
    explanation: "The amount of acid stays at 0.24(20) = 4.8 liters. After adding x liters of water, 4.8 = 0.16(20 + x), so 20 + x = 30 and x = 10. The value 30 is the final volume, not the amount of water added."
  }
);
