// targeting divs
var startDiv = document.getElementById("start-div");
var quizDiv = document.getElementById("questions-div");
var resultsDiv = document.getElementById("results-div");
var gameOverDiv = document.getElementById("game-over-form");
var highscoreDiv = document.getElementById("highscore-div");

// targeting navbar elements
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

// q&a array
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
  startButton.setAttribute("class", "btn");
  startButton.textContent = "Start Quiz";
  startDiv.appendChild(startButton);

  // event listener for start button
  startButton.addEventListener("click", function () {
    startTimer();
    renderQuestions();
  });
  // event listener for highscore button
  viewHighscores.addEventListener("click", function () {
    gotoHighscores();
  });
}

// function to start timer
function startTimer() {
  var timerInterval = setInterval(function () {
    timer.textContent = "Timer: " + secondsLeft;
    secondsLeft--;
    // stop the timer if it reaches zero or if the last question has been answered
    if (secondsLeft < 0 || questionIndex === questionsAndAnswers.length) {
      clearInterval(timerInterval);
      setTimeout(gameOver, 1000);
    }
  }, 1000);
}

// function to render questions
function renderQuestions() {
  // clear out the start div contents
  startDiv.innerHTML = "";
  //   clear the results div contents
  resultsDiv.innerHTML = "";

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
  optionList.setAttribute("class", "col-lg-12");
  // loop through the potential answers and make list items for each
  for (
    var answerindex = 0;
    answerindex < questionsAndAnswers[questionIndex].answers.length;
    answerindex++
  ) {
    var answerListEl = document.createElement("li");
    var answerButton = document.createElement("button");
    answerButton.setAttribute("class", "btn");
    answerButton.textContent =
      questionsAndAnswers[questionIndex].answers[answerindex];
    answerListEl.appendChild(answerButton);
    optionList.appendChild(answerListEl);
  }
  quizDiv.appendChild(optionList);
  // listen for the click
  quizDiv.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    if (event.target.matches("button")) {
      // if it is the correct answer
      if (
        event.target.textContent ==
        questionsAndAnswers[questionIndex].correctAnswer
      ) {
        quizDiv.innerHTML = "";
        var results = document.createElement("img");
        results.setAttribute("src", "./right.gif");
        results.setAttribute("alt", "correct answer meme");
        resultsDiv.appendChild(results);
        questionIndex++;
        // show image for one second before moving on to next question
        setTimeout(renderQuestions, 1000);
      }
      // if it is the wrong answer
      else {
        secondsLeft = secondsLeft - 10;
        quizDiv.innerHTML = "";
        var results = document.createElement("img");
        results.setAttribute("src", "./wrong.gif");
        results.setAttribute("alt", "wrong answer meme");
        resultsDiv.appendChild(results);
        questionIndex++;
        // show image for one second before moving on to next question
        setTimeout(renderQuestions, 1000);
      }
    }
  });
}

// function to go to the game over form
function gameOver() {
  quizDiv.innerHTML = "";
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
  //   create for label
  var formLabel = document.createElement("label");
  formLabel.setAttribute("class", "form-group mb-2");
  formLabel.textContent = "Enter Initials";
  highscoreForm.appendChild(formLabel);
  //   create form input
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "form-control mr-2 ml-2 mb-2");
  highscoreForm.appendChild(input);
  //   create form submit button
  var submitButton = document.createElement("button");
  submitButton.setAttribute("class", "btn");
  submitButton.textContent = "Submit";
  highscoreForm.appendChild(submitButton);
  gameOverDiv.appendChild(highscoreForm);

  //   add event listener for submit button
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    // create variable for initials input
    var initialsEntered = input.value;
    // if local storage is empty then just push the object to the array and set the array to local storage
    if (JSON.parse(localStorage.getItem("highscores")) == null) {
      highscoreArr.push({ initials: initialsEntered, score: endScore });
      localStorage.setItem("highscores", JSON.stringify(highscoreArr));
    }
    // if the highscore array is not empty then just push the object to the array and set the array to local storage
    else if (highscoreArr.length > 0) {
      highscoreArr.push({ initials: initialsEntered, score: endScore });
      localStorage.setItem("highscores", JSON.stringify(highscoreArr));
    }
    // if there is something in local storage but not the array, then push the local storage to your array then add new objects and set the array to local storage
    else {
      var highscoreStorage = JSON.parse(localStorage.getItem("highscores"));
      for (var i = 0; i < highscoreStorage.length; i++) {
        highscoreArr.push(highscoreStorage[i]);
      }
      highscoreArr.push({ initials: initialsEntered, score: endScore });
      localStorage.setItem("highscores", JSON.stringify(highscoreArr));
    }
    gotoHighscores();
  });
}

// function to go to the list of highscores
function gotoHighscores() {
  // clear the start div (for if View Highscore is clicked on the start page)
  startDiv.innerHTML = "";
  // clear the game over div
  gameOverDiv.innerHTML = "";
  // clear the highscore div just in case there is already data there so you don't get a duplicate table
  highscoreDiv.innerHTML = "";
  //   create header
  var highscoreHeader = document.createElement("h2");
  highscoreHeader.setAttribute("class", "col-lg-12");
  highscoreHeader.textContent = "Highscores!";
  highscoreDiv.appendChild(highscoreHeader);
  //   create table
  var highscoreTable = document.createElement("table");
  highscoreTable.setAttribute("class", "table col-lg-12");
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
  var buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "col-lg-12");
  var backBtn = document.createElement("button");
  backBtn.setAttribute("class", "mr-2 btn");
  backBtn.textContent = "Go Back";
  buttonDiv.appendChild(backBtn);
  //   create clear button
  var clearBtn = document.createElement("button");
  clearBtn.setAttribute("class", "btn");
  clearBtn.textContent = "Clear Highscores";
  buttonDiv.appendChild(clearBtn);
  highscoreDiv.appendChild(buttonDiv);

  // event listener for back button
  backBtn.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    //   if button is clicked clear the highscore div and go to the start page
    highscoreDiv.innerHTML = "";
    questionIndex = 0;
    secondsLeft = 75;
    startPage();
  });

  // event listener for clear button
  clearBtn.addEventListener("click", function (event) {
    event.stopImmediatePropagation();
    // if button is clicked, clear highscore array and local storage, reload highscore div
    highscoreArr = [];
    localStorage.clear();
    highscoreDiv.innerHTML = "";
    return gotoHighscores();
  });
}
