var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;
var highScore = 10;

var userName = readlineSync.question(chalk.yellow.bold("What's your name? "));
console.log(chalk.yellow.bold("Welcome " + userName + " - Are you ready for marvel quiz? "));
console.log("------------------------------------")

function quiz(ques, ans) {

  ques = readlineSync.question(chalk.cyan(ques));

  if (ques == ans) {
    console.log(chalk.green("Right!"));
    score = score + 1
  } else {
    console.log(chalk.red("Wrong!"));
  }
}

var questions = [
{
  question: "1 - What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? ",
  answer: 2008
},

{
  question: "2 - What is the name of Thor’s hammer? ",
  answer: "Mjolnir"
},

{
  question: "3 - In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?",
  answer: "That they are putting a team together"
},

{
  question: "4 - What is Captain America’s shield made of? ",
  answer: "Vibranium"
},

{
  question: "5 - Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
  answer: "jarvis"
},

{
  question: "6 - What is the real name of the Black Panther? ",
  answer: "T’Challa"
},

{
  question: "7 - Who does the Mad Titan sacrifice to acquire the Soul Stone? ",
  answer: "Gamora"
},

{
  question: "8 - What type of doctor is Stephen Strange? ",
  answer: "Neurosurgeon"
},

{
  question: "9 - Who killed Tony Stark’s parents? ",
  answer: "The winter soldier"
},

{
  question: "10 - In which film’s post-credit scene did Thanos first appear?",
  answer: "The Avenger"
}
]



for (i = 0; i < questions.length; i++){
  var userAns = questions[i];
  quiz(userAns.question, userAns.answer);
}


console.log(chalk.yellow.bold("Your score is " + score));
console.log("------------------------------------")

if (score > highScore) {
  console.log(chalk.green("Congratulations! You beat the high score"));
} else {
  console.log(chalk.cyan("The highest score is " + highScore));
  console.log(chalk.yellow("Better luck next time! "));
}