// Welcome to your first assignment.
// Add your code here. You can do it!
const input = require("readline-sync");

let userQuestions = [
  "1) True or false: 5000 meters = 5 kilometers ?",
  "2) (5 + 3)/2 * 10 = ?",
  '3) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?',
  "4) Who was the first American woman in space?",
  "5) What is the minimum crew size for the International Space Station (ISS)?",
];

let questionAnswers = ["True", "40", "Trajectory", "Sally Ride", "3"];

let personsName = input.question("Please enter your name:", "");
console.log(`Candidate Name: ${personsName}`);

let userInput = [],
  correct = 0,
  percentage = 0;
for (i = 0; i < 5; i++) {
  userInput[i] = input.question(userQuestions[i], "Enter Answer");
  console.log(`Your Answer: ${userInput[i]}`);
  console.log(`Correct Answer: ${questionAnswers[i]}`);

  if (
    userInput[i].replace(/ /g, " ").toLowerCase() ===
    questionAnswers[i].replace(/ /g, " ").toLowerCase()
  ) {
    correct++;
  }
}

percentage = (correct / 5) * 100;

if (percentage >= 80) {
  console.log(
    `>>> Overall Grade: ${percentage}% (${correct} of 5 responses correct)`
  );
  console.log(">>> Status: PASSED <<<");
} else {
  console.log(
    `>>> Overall Grade: ${percentage}% (${correct} of 5 responses correct)`
  );
  console.log(">>> Status: FAILED <<<");
}
