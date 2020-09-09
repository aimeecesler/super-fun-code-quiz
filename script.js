var startDiv = document.getElementById("start-div");
var quizDiv = document.getElementById("questions-div");
var gameOverDiv = document.getElementById("game-over-form");
var highscoreDiv = document.getElementById("highscore-div");
var highscore = document.getElementById("highscore");
var timer = document.getElementById("timer");

// global variables
var secondsLeft = 75;
var i = 0;
var highscoreArr = [];

var questionsAndAnswers = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "3. alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within _____.",
    answers: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    correctAnswer: "3. parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    correctAnswer: "4. all of the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    answers: [
      "1. commas",
      "2. curly brackets",
      "3. quotes",
      "4. parentheses",
      "3. quotes",
    ],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "1. JavaScript",
      "2. terminal / bash",
      "3. for loops",
      "4. console log",
    ],
    correctAnswer: "4. console log",
  },
];

// calls default function for start page
startPage();

// default function for start page, sets main header, game description, and start button.
function startPage() {
var startHeader = document.createElement("h1");
startHeader.textContent = "Coding Quiz Challenge";
startDiv.appendChild(startHeader);
var gameIntro = document.createElement("p");
gameIntro.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startDiv.appendChild(gameIntro);
var startButton = document.createElement("button");
startButton.textContent = "Start Quiz";
startDiv.appendChild(startButton);
}