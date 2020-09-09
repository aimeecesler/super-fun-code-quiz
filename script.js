var startDiv = document.getElementById("start-div");
var quizDiv = document.getElementById("questions-div");
var resultsDiv = document.getElementById("results-div");
var gameOverDiv = document.getElementById("game-over-form");
var highscoreDiv = document.getElementById("highscore-div");
var viewHighscores = document.getElementById("highscore");
var timer = document.getElementById("timer");

// global variables
var secondsLeft = 75;
var questionIndex = 0;
var endScore;
var initials;
var answerindex;
var highscoreArr = [];
var timerInterval;

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
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correctAnswer: "3. quotes",
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
  timer.textContent = "Timer: 0";
  // create header element
  var startHeader = document.createElement("h1");
  startHeader.textContent = "Coding Quiz Challenge";
  startDiv.appendChild(startHeader);
  // create p element
  var gameIntro = document.createElement("p");
  gameIntro.textContent =
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
  startDiv.appendChild(gameIntro);
  // create start button
  var startButton = document.createElement("button");
  startButton.textContent = "Start Quiz";
  startDiv.appendChild(startButton);

  // event listener for start button
  startButton.addEventListener("click", function () {
    i = 0;
    startTimer();
    renderQuestions();
  });

  viewHighscores.addEventListener("click", function () {
    gotoHighscores();
  });
}

// function to start timer
function startTimer() {
  var timerInterval = setInterval(function () {
    timer.textContent = "Timer: " + secondsLeft;
    secondsLeft--;
    if (secondsLeft < 0 || questionIndex === questionsAndAnswers.length) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

// function to render questions
function renderQuestions() {
  i = 0;
  // clear out the start div contents
  startDiv.innerHTML = "";

  quizDiv.innerHTML = "";
  // stop at the end of the q&a array
  if (questionIndex === questionsAndAnswers.length) {
    return;
  }
  // create header and add question
  var questionHeader = document.createElement("h2");
  questionHeader.textContent = questionsAndAnswers[questionIndex].question;
  quizDiv.appendChild(questionHeader);
  // create list
  var optionList = document.createElement("ul");
  // loop through the potential answers and make list items for each
  for (var answerindex = 0; answerindex < 4; answerindex++) {
    var answerListEl = document.createElement("li");
    var answerButton = document.createElement("button");
    answerButton.textContent =
      questionsAndAnswers[questionIndex].answers[answerindex];
    answerListEl.appendChild(answerButton);
    optionList.appendChild(answerListEl);
  }
  quizDiv.appendChild(optionList);
  // listen for the click
  quizDiv.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    resultsDiv.innerHTML = "";
    if (event.target.matches("button")) {
      // if it is the correct answer
      if (
        event.target.textContent ==
        questionsAndAnswers[questionIndex].correctAnswer
      ) {
        var results = document.createElement("p");
        results.textContent = "Correct!";
        resultsDiv.appendChild(results);
        questionIndex++;
        renderQuestions();
      }
      // if it is the wrong answer
      else {
        secondsLeft = secondsLeft - 10;
        var results = document.createElement("p");
        results.textContent = "Wrong!";
        resultsDiv.appendChild(results);
        questionIndex++;
        renderQuestions();
      }
    }
  });
}

// function to go to the game over form
function gameOver() {
  //   clear results div
  resultsDiv.innerHTML = "";
  // create header
  var endGameHeader = document.createElement("h2");
  endGameHeader.textContent = "All done!";
  gameOverDiv.appendChild(endGameHeader);
  //   create paragraph
  var endScore = secondsLeft + 1;
  var endScoreEl = document.createElement("p");
  endScoreEl.setAttribute("class", "col-lg-12");
  endScoreEl.textContent = "Your final score is " + endScore + "!";
  gameOverDiv.appendChild(endScoreEl);
  //   create form
  var highscoreForm = document.createElement("form");
  highscoreForm.setAttribute("class", "form-inline col-lg-12");
  var formLabel = document.createElement("label");
  formLabel.setAttribute("class", "form-group mb-2");
  formLabel.textContent = "Enter Initials";
  highscoreForm.appendChild(formLabel);
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "form-control mr-2 ml-2 mb-2");
  highscoreForm.appendChild(input);
  var submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  highscoreForm.appendChild(submitButton);
  gameOverDiv.appendChild(highscoreForm);

  //   add event listener for submit button
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var initialsEntered = input.value;
    highscoreArr.push({ initials: initialsEntered, score: endScore });
    localStorage.setItem("highscores", JSON.stringify(highscoreArr));
    gotoHighscores();
  });
}

// function to go to the list of highscores
function gotoHighscores() {
  // clear the game over div
  gameOverDiv.innerHTML = "";
  //   create header
  var highscoreHeader = document.createElement("h2");
  highscoreHeader.textContent = "Highscores!";
  highscoreDiv.appendChild(highscoreHeader);
  //   create table
  var highscoreTable = document.createElement("table");
  highscoreTable.setAttribute("class", "table");
  //   create table headers
  var tableHeaderRow = document.createElement("tr");
  var tableInitialsHeader = document.createElement("th");
  var tableScoreHeader = document.createElement("th");
  tableInitialsHeader.textContent = "Initials";
  tableScoreHeader.textContent = "Score";
  tableHeaderRow.appendChild(tableInitialsHeader);
  tableHeaderRow.appendChild(tableScoreHeader);
  highscoreTable.appendChild(tableHeaderRow);

  //   for loop to iterate through local storage array to show scores
  for (
    var highscoreIndex = 0;
    highscoreIndex < highscoreArr.length;
    highscoreIndex++
  ) {
    //   create table rows and elements for initials and scores
    var highscoreRow = document.createElement("tr");
    var tableInitials = document.createElement("td");
    var tableScores = document.createElement("td");
    var storageScores = JSON.parse(localStorage.getItem("highscores"));
    tableInitials.textContent = storageScores[highscoreIndex].initials;
    tableScores.textContent = storageScores[highscoreIndex].score;
    highscoreRow.appendChild(tableInitials);
    highscoreRow.appendChild(tableScores);
    highscoreTable.appendChild(highscoreRow);
  }
  //   append table to main div
  highscoreDiv.appendChild(highscoreTable);

  //   create back button
  var backBtn = document.createElement("button");
  backBtn.setAttribute("class", "mr-2");
  backBtn.textContent = "Go Back";
  highscoreDiv.appendChild(backBtn);
  //   create clear button
  var clearBtn = document.createElement("button");
  clearBtn.textContent = "Clear Highscores";
  highscoreDiv.appendChild(clearBtn);

  // event listener for back button
  backBtn.addEventListener("click", function (event) {
    //   if button is clicked clear the highscore div and go to the start page
    highscoreDiv.innerHTML = "";
    startPage();
  });
}
