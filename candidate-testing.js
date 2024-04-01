const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? ",];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ")
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i=0; i < questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i]); console.log("")
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log(`1) ${questions[0]}\nYour Answer: ${candidateAnswers[0]}\nCorrect Answer: ${correctAnswers[0]}`,
  `\n\n2) ${questions[1]}\nYour Answer: ${candidateAnswers[1]}\nCorrect Answer: ${correctAnswers[1]}`,
  `\n\n3) ${questions[2]}\nYour Answer: ${candidateAnswers[2]}\nCorrect Answer: ${correctAnswers[2]}`,
  `\n\n4) ${questions[3]}\nYour Answer: ${candidateAnswers[3]}\nCorrect Answer: ${correctAnswers[3]}`,
  `\n\n5) ${questions[4]}\nYour Answer: ${candidateAnswers[4]}\nCorrect Answer: ${correctAnswers[4]}`);
  

  
  numCorrectAnswers = Number(candidateAnswers[0] === correctAnswers[0]);
  numCorrectAnswers = numCorrectAnswers + Number(candidateAnswers[1] === correctAnswers[1]);
  numCorrectAnswers = numCorrectAnswers + Number(candidateAnswers[2] === correctAnswers[2]);
  numCorrectAnswers = numCorrectAnswers + Number(candidateAnswers[3] === correctAnswers[3]);
  numCorrectAnswers = numCorrectAnswers + Number(candidateAnswers[4] === correctAnswers [4]);

 
  let grade = numCorrectAnswers/5*100;  //TODO 3.2 use this variable to calculate the candidates score. (Number of Correct Answers) / (Number of Quiz Questions) * 100
  console.log(`\n>>> Overall Grade: ${grade}% (${numCorrectAnswers} of 5 responses correct)<<<`);
 if (numCorrectAnswers >= 4) {
  console.log('>>> Status: PASSED <<<')
 } else {
  console.log('>>> Status: FAILED <<<')
 }
  return grade
  
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + "!\n");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};