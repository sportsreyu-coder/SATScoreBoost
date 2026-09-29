// Math — Problem-Solving and Data Analysis
// Skills: ratios/rates/proportions, percentages, one- and two-variable data,
// probability, sample inference, evaluating statistical claims
// All content is original, written for this practice site.

QUESTIONS.push(
  {
    id: "pd-1",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 1,
    prompt: "A car travels 270 miles using 9 gallons of gas. What is the car's fuel efficiency, in miles per gallon?",
    choices: ["30", "27", "9", "270"],
    answer: 0,
    explanation: "270 miles ÷ 9 gallons = 30 miles per gallon.",
  },
  {
    id: "pd-2",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 1,
    prompt:
      "In a class of 32 students, the ratio of boys to girls is 3:5. How many girls are in the class?",
    choices: ["20", "12", "15", "17"],
    answer: 0,
    explanation: "The ratio has 8 total parts. Girls = (5/8) · 32 = 20.",
  },
  {
    id: "pd-3",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 1,
    prompt: "A stock rose in value from $40 to $52. What was the percent increase?",
    choices: ["30%", "12%", "23%", "33%"],
    answer: 0,
    explanation: "Percent increase = (52 − 40)/40 × 100 = 12/40 × 100 = 30%.",
  },
  {
    id: "pd-4",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt: "What is 20% of 60% of 500?",
    choices: ["60", "100", "120", "50"],
    answer: 0,
    explanation: "60% of 500 = 300. 20% of 300 = 60.",
  },
  {
    id: "pd-5",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 1,
    prompt:
      "A data set is 3, 5, 5, 7, 9, 50. Which measure of center is most affected by the value 50?",
    choices: ["The mean", "The median", "The mode", "Neither the mean nor the median"],
    answer: 0,
    explanation:
      "The mean is sensitive to extreme values (outliers), while the median, based on position, changes little when one extreme value is present.",
  },
  {
    id: "pd-6",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 2,
    prompt: "Which of the following data sets has the greatest standard deviation?",
    choices: ["{1, 10, 10, 19}", "{10, 10, 10, 10}", "{5, 10, 10, 15}", "{9, 10, 10, 11}"],
    answer: 0,
    explanation:
      "Standard deviation measures spread from the mean. {1, 10, 10, 19} has the widest spread of values around its mean, giving it the greatest standard deviation.",
  },
  {
    id: "pd-7",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 2,
    prompt:
      "A scatterplot of study hours versus test score has a line of best fit given by y = 5x + 60, where x is hours studied and y is the test score. What does the slope of this line represent?",
    choices: [
      "Each additional hour of study is associated with an increase of 5 points on the test.",
      "A student who studies 0 hours is predicted to score 5 points.",
      "Each additional point on the test requires 5 more hours of study.",
      "The maximum possible test score is 5.",
    ],
    answer: 0,
    explanation:
      "In a linear model y = mx + b, the slope m represents the change in y per unit increase in x — here, 5 additional points per additional hour studied.",
  },
  {
    id: "pd-8",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 1,
    prompt:
      "A bag contains 4 red, 3 blue, and 5 green marbles. What is the probability of randomly drawing a blue marble?",
    choices: ["1/4", "1/3", "3/5", "1/12"],
    answer: 0,
    explanation: "There are 12 total marbles, and 3 are blue, so the probability is 3/12 = 1/4.",
  },
  {
    id: "pd-9",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt:
      "Of 200 students, 120 play sports; of those, 80 also play an instrument. Of the 80 students who don't play sports, 50 play an instrument. What is the probability that a randomly selected student who plays an instrument also plays sports?",
    choices: ["8/13", "80/200", "80/120", "50/130"],
    answer: 0,
    explanation:
      "Total instrument players = 80 + 50 = 130. Of those, 80 also play sports, so the probability is 80/130 = 8/13.",
  },
  {
    id: "pd-10",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 2,
    prompt:
      "A poll of 400 randomly selected voters found that 220 favor a proposal. Based on this sample, what is the best estimate of the percentage of all voters who favor the proposal?",
    choices: ["55%", "220%", "400%", "45%"],
    answer: 0,
    explanation: "220/400 = 0.55 = 55%.",
  },
  {
    id: "pd-11",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 2,
    prompt: "Which change would most directly decrease the margin of error of a survey estimate?",
    choices: [
      "Increasing the sample size",
      "Decreasing the sample size",
      "Asking a more biased question",
      "Surveying fewer people from the population",
    ],
    answer: 0,
    explanation:
      "Margin of error generally decreases as sample size increases, because larger samples produce more precise estimates of the population.",
  },
  {
    id: "pd-12",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 2,
    prompt:
      "A student scored 80 on a test worth 30% of the final grade and 90 on a test worth 70% of the final grade. What is the student's weighted average?",
    choices: ["87", "85", "88", "86"],
    answer: 0,
    explanation: "0.30(80) + 0.70(90) = 24 + 63 = 87.",
  },
  {
    id: "pd-13",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 1,
    prompt:
      "A printer prints 45 pages in 3 minutes at a constant rate. How many pages will it print in 20 minutes?",
    choices: ["300", "45", "225", "60"],
    answer: 0,
    explanation: "Rate = 45/3 = 15 pages per minute. In 20 minutes: 15 × 20 = 300 pages.",
  },
  {
    id: "pd-14",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 1,
    prompt:
      "A recipe that serves 4 people requires 250 grams of flour. How many grams of flour are needed to serve 10 people at the same ratio?",
    choices: ["625", "600", "1000", "400"],
    answer: 0,
    explanation: "250 × (10/4) = 250 × 2.5 = 625 grams.",
  },
  {
    id: "pd-15",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 2,
    prompt:
      "A study concludes that 'most people exercise regularly' based on a survey of visitors to a gym. What is the main flaw in this conclusion?",
    choices: [
      "The sample is not representative of the general population.",
      "The sample size is too large to be useful.",
      "Gym visitors cannot be surveyed accurately.",
      "Exercise habits cannot be measured through surveys.",
    ],
    answer: 0,
    explanation:
      "Surveying only gym visitors overrepresents people who already exercise, so the sample cannot be generalized to the population as a whole.",
  },
  {
    id: "pd-16",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt:
      "A jar contains 5 red and 7 blue candies. Two candies are drawn at random without replacement. What is the probability that both are red?",
    choices: ["5/33", "25/144", "5/12", "4/11"],
    answer: 0,
    explanation:
      "P(both red) = (5/12) × (4/11) = 20/132 = 5/33.",
  },
  {
    id: "pd-17",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt: "After a 20% discount, a shirt costs $32. What was the shirt's original price?",
    choices: ["$40", "$38.40", "$44", "$36"],
    answer: 0,
    explanation: "If the original price is p, then 0.80p = 32 → p = 40.",
  },
  {
    id: "pd-18",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 2,
    prompt:
      "In a scatterplot with a line of best fit, a data point lies far above the line. What does this indicate about that data point?",
    choices: [
      "Its actual value is greater than the value predicted by the line.",
      "Its actual value is less than the value predicted by the line.",
      "It lies exactly on the line of best fit.",
      "It cannot be used to evaluate the model.",
    ],
    answer: 0,
    explanation:
      "A point above the line of best fit has an actual y-value greater than the model's predicted value at that x.",
  },
  {
    id: "pd-19",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 1,
    prompt: "An alloy is 40% copper by mass. How many kilograms of copper are in 25 kilograms of the alloy?",
    choices: ["10", "15", "4", "40"],
    answer: 0,
    explanation: "0.40 × 25 = 10 kilograms.",
  },
  {
    id: "pd-20",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 2,
    prompt: "A fair coin is flipped 3 times. What is the probability of getting at least one heads?",
    choices: ["7/8", "1/8", "3/8", "1/2"],
    answer: 0,
    explanation:
      "P(at least one heads) = 1 − P(no heads) = 1 − (1/2)³ = 1 − 1/8 = 7/8.",
  },
  {
    id: "pd-21",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 1,
    prompt:
      "A data set has a mean of 70 and a standard deviation of 5. What value is 2 standard deviations above the mean?",
    choices: ["80", "75", "72", "85"],
    answer: 0,
    explanation: "70 + 2(5) = 70 + 10 = 80.",
  },
  {
    id: "pd-22",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 1,
    prompt:
      "In a survey, 60 of 150 respondents preferred Option A. What percent of respondents preferred a different option?",
    choices: ["60%", "40%", "90%", "30%"],
    answer: 0,
    explanation: "150 − 60 = 90 respondents preferred another option. 90/150 = 0.60 = 60%.",
  },
  {
    id: "pd-23",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 2,
    prompt:
      "A distribution of household incomes is strongly right-skewed, with a small number of very high incomes. Which is most likely true of the mean and median?",
    choices: [
      "The mean is greater than the median.",
      "The median is greater than the mean.",
      "The mean and median are equal.",
      "The relationship cannot be determined.",
    ],
    answer: 0,
    explanation:
      "In a right-skewed distribution, a few very high values pull the mean upward more than they affect the median, so the mean exceeds the median.",
  },
  {
    id: "pd-24",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 2,
    prompt: "A car travels at 90 kilometers per hour. What is this speed in meters per second?",
    choices: ["25", "15", "30", "90"],
    answer: 0,
    explanation: "90 km/h = 90,000 m / 3,600 s = 25 m/s.",
  },
  {
    id: "pd-25",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 2,
    prompt:
      "A company wants to estimate the average commute time for all of its employees. Which sampling method would produce the most reliable estimate?",
    choices: [
      "Randomly selecting 200 employees from the full employee roster",
      "Asking only employees who arrive earliest each day",
      "Surveying employees who volunteer to respond",
      "Asking only employees in the company's headquarters office",
    ],
    answer: 0,
    explanation:
      "A random sample drawn from the entire employee roster is representative of the whole population, unlike the biased methods in the other choices.",
  },
  {
    id: "pd-26",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt:
      "A scatterplot shows a linear relationship between hours studied (x) and exam score (y), modeled by y = 55 + 4x. Based on this model, how many additional hours of studying are needed to raise a predicted score from 75 to 91?",
    choices: ["4", "5", "9", "16"],
    answer: 0,
    explanation:
      "Solving 75 = 55 + 4x gives x = 5; solving 91 = 55 + 4x gives x = 9. The additional hours needed is 9 − 5 = 4.",
  },
  {
    id: "pd-27",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt:
      "A survey of 200 students found that 120 play a sport and 80 play an instrument, with 30 students doing both. What is the probability that a randomly selected student who plays a sport also plays an instrument?",
    choices: ["1/4", "3/20", "1/6", "2/5"],
    answer: 0,
    explanation:
      "This is a conditional probability: P(instrument | sport) = (students who do both) / (students who play a sport) = 30/120 = 1/4.",
  },
  {
    id: "pd-28",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt: "A data set has a mean of 50 and a standard deviation of 4. Which value is exactly 2 standard deviations above the mean?",
    choices: ["58", "54", "46", "62"],
    answer: 0,
    explanation: "2 standard deviations above the mean is 50 + 2(4) = 58.",
  },
  {
    id: "pd-29",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt:
      "A factory produces widgets at a constant rate. If it produces 450 widgets in 6 hours, how many widgets does it produce in 1 minute?",
    choices: ["1.25", "0.75", "1.5", "2"],
    answer: 0,
    explanation: "The rate is 450/6 = 75 widgets per hour, and 75/60 = 1.25 widgets per minute.",
  },
  {
    id: "pd-30",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 2,
    prompt:
      "A map has a scale of 1 inch to 15 miles. If two cities are 4.5 inches apart on the map, how many miles apart are they in reality?",
    choices: ["67.5", "60", "75", "54"],
    answer: 0,
    explanation: "4.5 inches × 15 miles per inch = 67.5 miles.",
  },
  {
    id: "pd-31",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt:
      "A random sample of 50 voters from a city found that 60% support a proposed measure, with a margin of error of 5 percentage points. Which is the most reasonable conclusion?",
    choices: [
      "Between about 55% and 65% of all city voters likely support the measure.",
      "Exactly 60% of all city voters support the measure.",
      "Fewer than half of all city voters support the measure.",
      "The sample is too small to draw any conclusion.",
    ],
    answer: 0,
    explanation:
      "A margin of error defines a plausible range around the sample estimate: 60% ± 5 percentage points gives an interval of about 55% to 65% for the full population.",
  },
  {
    id: "pd-32",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt:
      "A store increases the price of an item by 20% and then applies a 20% discount to the new price. Compared to the original price, the final price is:",
    choices: [
      "4% less than the original price",
      "The same as the original price",
      "4% more than the original price",
      "20% less than the original price",
    ],
    answer: 0,
    explanation:
      "Multiplying by 1.20 then 0.80 gives an overall factor of 0.96, which is 4% less than the original price.",
  },
  {
    id: "pd-33",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt:
      "A line of best fit for a data set is given by y = 3x + 2. If the actual y-value for x = 5 is 20, what is the residual?",
    choices: ["3", "−3", "17", "20"],
    answer: 0,
    explanation:
      "The predicted value is 3(5) + 2 = 17. The residual is actual minus predicted: 20 − 17 = 3.",
  },
  {
    id: "pd-34",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 1,
    prompt:
      "A school has a ratio of teachers to students of 2:35. If the school has 70 teachers, how many students does it have?",
    choices: ["1225", "1190", "1260", "700"],
    answer: 0,
    explanation:
      "The ratio 2:35 scales by a factor of 70/2 = 35. So students = 35 × 35 = 1225.",
  },
  {
    id: "pd-35",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 1,
    prompt:
      "A hose fills a 60-gallon tank in 15 minutes at a constant rate. How many gallons does it fill in 4 minutes?",
    choices: ["16", "15", "4", "240"],
    answer: 0,
    explanation: "The rate is 60/15 = 4 gallons per minute. In 4 minutes: 4 × 4 = 16 gallons.",
  },
  {
    id: "pd-36",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 1,
    prompt: "A laptop originally priced at $800 is on sale for 25% off. What is the sale price?",
    choices: ["$600", "$700", "$575", "$625"],
    answer: 0,
    explanation: "25% off means paying 75% of the price: 0.75 × 800 = $600.",
  },
  {
    id: "pd-37",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 1,
    prompt:
      "The data set 12, 15, 15, 18, 20 has a mean of 16. What is the sum of the deviations of each value from the mean?",
    choices: ["0", "16", "5", "80"],
    answer: 0,
    explanation:
      "The sum of deviations from the mean is always 0, since the mean is the balancing point of the data: (−4) + (−1) + (−1) + 2 + 4 = 0.",
  },
  {
    id: "pd-38",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 1,
    prompt:
      "A scatterplot of weekly hours worked (x) versus weekly pay (y, in dollars) has a line of best fit given by y = 15x + 20. According to this model, what is the predicted weekly pay for someone who works 30 hours?",
    choices: ["$470", "$450", "$500", "$420"],
    answer: 0,
    explanation:
      "Substitute x = 30 into y = 15x + 20: y = 15(30) + 20 = 450 + 20 = 470, so the predicted weekly pay is $470.",
  },
  {
    id: "pd-39",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 1,
    prompt: "A standard six-sided die is rolled once. What is the probability of rolling a number greater than 4?",
    choices: ["1/3", "1/2", "2/3", "1/6"],
    answer: 0,
    explanation:
      "Rolling a 5 or 6 satisfies the condition, giving 2 favorable outcomes out of 6: 2/6 = 1/3.",
  },
  {
    id: "pd-40",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 1,
    prompt:
      "A group of 50 people includes 30 who own a car. Of the car owners, 18 also own a bike. What is the probability that a randomly selected car owner also owns a bike?",
    choices: ["3/5", "18/50", "3/10", "5/3"],
    answer: 0,
    explanation:
      "P(bike | car) = (car owners who also own a bike) / (total car owners) = 18/30 = 3/5.",
  },
  {
    id: "pd-41",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 1,
    prompt:
      "A random sample of 250 shoppers found that 100 prefer online shopping over in-store shopping. Based on this sample, what percentage of all shoppers would be expected to prefer online shopping?",
    choices: ["40%", "25%", "60%", "10%"],
    answer: 0,
    explanation: "100/250 = 0.40 = 40%, so the sample suggests about 40% of all shoppers prefer online shopping.",
  },
  {
    id: "pd-42",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 1,
    prompt:
      "A researcher wants to estimate the average height of adult men in a country. Which method would introduce the least bias?",
    choices: [
      "Randomly selecting adult men from across the entire country",
      "Measuring only men on a professional basketball team",
      "Measuring only men who visit a particular gym",
      "Measuring only men in one small town",
    ],
    answer: 0,
    explanation:
      "A random sample drawn from the entire population avoids the bias introduced by selecting from a narrow or unrepresentative subgroup.",
  },
  {
    id: "pd-43",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 2,
    prompt:
      "A paint mixture uses blue and yellow paint in a ratio of 5:3 to make green paint. If a batch uses 9 liters of yellow paint, how many total liters of green paint does the batch make?",
    choices: ["24", "20", "15", "27"],
    answer: 0,
    explanation:
      "Yellow is 3 parts and equals 9 liters, so each part is 3 liters. Blue is 5 parts = 15 liters. Total = 15 + 9 = 24 liters.",
  },
  {
    id: "pd-44",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 2,
    prompt:
      "A cyclist travels 5 kilometers in 20 minutes at a constant speed. At this rate, how many kilometers will the cyclist travel in 1.5 hours?",
    choices: ["22.5", "15", "18.75", "20"],
    answer: 0,
    explanation:
      "The rate is 5/20 = 0.25 kilometers per minute. In 90 minutes (1.5 hours): 0.25 × 90 = 22.5 kilometers.",
  },
  {
    id: "pd-45",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 2,
    prompt:
      "A company's revenue increased by 15% in the first year and then decreased by 10% in the second year. What was the overall percent change in revenue over the two years?",
    choices: ["3.5% increase", "5% increase", "5% decrease", "2.5% increase"],
    answer: 0,
    explanation: "Multiplying by 1.15 and then 0.90 gives 1.15 × 0.90 = 1.035, an overall increase of 3.5%.",
  },
  {
    id: "pd-46",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 2,
    prompt:
      "Two data sets have the same mean, but data set A has a standard deviation of 2 and data set B has a standard deviation of 8. Which statement is best supported?",
    choices: [
      "The values in data set B are more spread out from the mean than the values in data set A.",
      "The values in data set A are more spread out from the mean than the values in data set B.",
      "Data sets A and B have identical distributions.",
      "Data set B has a smaller range than data set A.",
    ],
    answer: 0,
    explanation:
      "A higher standard deviation indicates greater spread of values around the mean, so data set B's values are more spread out than data set A's.",
  },
  {
    id: "pd-47",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 2,
    prompt:
      "A scatterplot shows a strong negative linear association between the age of a car (x, in years) and its resale value (y, in dollars), modeled by y = 18000 − 1200x. Based on this model, what is the predicted resale value of a car that is 6 years old?",
    choices: ["$10800", "$12000", "$9600", "$7200"],
    answer: 0,
    explanation: "Substitute x = 6: y = 18000 − 1200(6) = 18000 − 7200 = $10800.",
  },
  {
    id: "pd-48",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 2,
    prompt:
      "A spinner is divided into 8 equal sections numbered 1 through 8. What is the probability that a single spin lands on an even number or a number greater than 6?",
    choices: ["5/8", "3/4", "1/2", "7/8"],
    answer: 0,
    explanation:
      "Even numbers: {2, 4, 6, 8}. Numbers greater than 6: {7, 8}. Combined without double-counting 8: {2, 4, 6, 7, 8}, which is 5 outcomes out of 8, so the probability is 5/8.",
  },
  {
    id: "pd-49",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 2,
    prompt:
      "A survey of 300 customers found that 180 bought a beverage. Of those who bought a beverage, 45 also bought a snack. Of the 120 customers who did not buy a beverage, 30 bought a snack. What is the probability that a randomly selected customer who bought a snack also bought a beverage?",
    choices: ["3/5", "45/180", "45/300", "30/75"],
    answer: 0,
    explanation:
      "Total snack buyers = 45 + 30 = 75. Of those, 45 also bought a beverage, so the probability is 45/75 = 3/5.",
  },
  {
    id: "pd-50",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 2,
    prompt:
      "A random sample of 500 residents found that 340 support building a new park, with a margin of error of 4 percentage points. Which of the following is the most reasonable conclusion about all residents?",
    choices: [
      "Between about 64% and 72% of all residents likely support the new park.",
      "Exactly 68% of all residents support the new park.",
      "At least 72% of all residents support the new park.",
      "Fewer than 64% of all residents support the new park.",
    ],
    answer: 0,
    explanation:
      "The sample estimate is 340/500 = 68%. With a margin of error of 4 percentage points, the plausible range for the population is about 64% to 72%.",
  },
  {
    id: "pd-51",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Evaluating statistical claims",
    difficulty: 2,
    prompt:
      "A news article claims that 'eating chocolate causes people to live longer,' based on an observational study that found chocolate eaters had longer average lifespans than non-eaters. What is the main flaw in this claim?",
    choices: [
      "The observational study shows correlation, not that chocolate causes longer life, since other factors may explain the link.",
      "Observational studies can never be used to detect any association between variables.",
      "The lifespans of chocolate eaters and non-eaters cannot be compared at all.",
      "The claim would only be flawed if the sample size were smaller than 100.",
    ],
    answer: 0,
    explanation:
      "An observational study can show an association, but without random assignment it cannot establish that chocolate causes longer life; other factors (confounding variables) could explain the pattern.",
  },
  {
    id: "pd-52",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios and proportions",
    difficulty: 3,
    prompt:
      "A recipe calls for flour, sugar, and butter in the ratio 5:2:1 by weight. If a baker uses 12 ounces of sugar, how many total ounces of the three ingredients combined does the baker use?",
    choices: ["48", "40", "36", "60"],
    answer: 0,
    explanation:
      "Sugar is 2 parts and equals 12 ounces, so each part is 6 ounces. Flour = 5 × 6 = 30 ounces, butter = 1 × 6 = 6 ounces. Total = 30 + 12 + 6 = 48 ounces.",
  },
  {
    id: "pd-53",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and units",
    difficulty: 3,
    prompt:
      "Machine A fills 240 bottles per hour, and Machine B fills 360 bottles per hour. If both machines run together at their constant rates, how many minutes will it take to fill 1000 bottles?",
    choices: ["100", "60", "120", "83.3"],
    answer: 0,
    explanation:
      "Combined rate = 240 + 360 = 600 bottles per hour = 10 bottles per minute. Time to fill 1000 bottles = 1000/10 = 100 minutes.",
  },
  {
    id: "pd-54",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: 3,
    prompt:
      "A store marks up the wholesale cost of an item by 40% to set the retail price. During a sale, the retail price is discounted by 30%. If the sale price is $98, what was the original wholesale cost?",
    choices: ["$100", "$98", "$140", "$70"],
    answer: 0,
    explanation:
      "Retail price = 1.40c. Sale price = 0.70 × 1.40c = 0.98c. Setting 0.98c = 98 gives c = 100.",
  },
  {
    id: "pd-55",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "One-variable data",
    difficulty: 3,
    prompt:
      "A data set of 9 values has a mean of 40. When a 10th value is added, the new mean becomes 42. What is the value of the 10th data point?",
    choices: ["60", "42", "48", "50"],
    answer: 0,
    explanation:
      "The original sum is 9 × 40 = 360. The new sum with 10 values is 10 × 42 = 420. The 10th value is 420 − 360 = 60.",
  },
  {
    id: "pd-56",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-variable data",
    difficulty: 3,
    prompt:
      "A line of best fit is given by y = 4x + 38. For a particular data point at x = 12, the residual is −5. What is the actual y-value of that data point?",
    choices: ["81", "91", "86", "76"],
    answer: 0,
    explanation:
      "The predicted value at x = 12 is 4(12) + 38 = 86. Since residual = actual − predicted, the actual value is 86 + (−5) = 81.",
  },
  {
    id: "pd-57",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Probability",
    difficulty: 3,
    prompt:
      "A box contains 4 red, 6 blue, and 2 green pens. Two pens are drawn at random without replacement. What is the probability that the first pen is red and the second pen is blue?",
    choices: ["2/11", "1/11", "4/11", "24/144"],
    answer: 0,
    explanation: "P(red then blue) = (4/12) × (6/11) = 24/132 = 2/11.",
  },
  {
    id: "pd-58",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Conditional probability",
    difficulty: 3,
    prompt:
      "A company survey of 500 employees found that 300 work remotely at least part-time. Of the employees who work remotely, 180 have more than 5 years of experience. Of the 200 employees who do not work remotely, 60 have more than 5 years of experience. What is the probability that a randomly selected employee with more than 5 years of experience works remotely?",
    choices: ["3/4", "180/300", "180/500", "60/240"],
    answer: 0,
    explanation:
      "Total employees with more than 5 years of experience = 180 + 60 = 240. Of those, 180 work remotely, so the probability is 180/240 = 3/4.",
  },
  {
    id: "pd-59",
    module: "math",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: 3,
    prompt:
      "A random sample of 800 adults found that 456 support a new transportation policy, with a margin of error of 3 percentage points. Which statement is most consistent with this result?",
    choices: [
      "It is plausible that between 54% and 60% of all adults support the policy.",
      "Exactly 57% of all adults support the policy.",
      "The true population percentage must be exactly 54% or 60%.",
      "The sample size is too small to estimate a population percentage.",
    ],
    answer: 0,
    explanation:
      "The sample percentage is 456/800 = 57%. With a margin of error of 3 percentage points, the plausible range for the population is 57% − 3% = 54% to 57% + 3% = 60%.",
  }
);
