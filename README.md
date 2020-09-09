# SUPER FUN CODE QUIZ

Test your coding knowledge and beat your highscore! But beware, if you get it wrong you'll lose points!

-----

![Code Quiz](codequiz.png)

## Table of Contents
* [Installation](#installation)
* [Usage](#Usage)
* [Building the Code Quiz](#building-the-code-quiz)
* [Acceptance Criteria](#acceptance-criteria)
* [Credits](#credits)
* [Badges](#badges)
* [Links](#Links)
* [License](#license)

-----

## Installation
1. Follow the GitHub Repository Link in the [Links](#Links) section below.
1. Clone the repository using an SSH key.
1. Open GitBash and use "git clone" to clone the repository.

-----

## Usage
Edit using VSCode after [installation](#installation). HTML, JS and CSS files are provided along with image and gif files used.

#### Javascript

![JS](javascript.png)
![HTML](html.png)

-----

## Building the Code Quiz

The challenges I encountered while building this code quiz mostly involved learning to truly rely on the DOM manipulation rather than the HTML elements. When first starting out, I built out this quiz by creating all of the elements in HTML and then toggling their display depending on the function. While it did function, this became extremely cumbersome to work with and troubleshoot. I eventually started completely fresh and tried to use the least amount of hard coded HTML elements as possible. This gave me much more freedom and I think overall gave me a much more functional application.

Upon first entering the quiz, you will find a start page with a 'Start Quiz' button as well as a navbar with a timer and a button to 'View Highscores'. At any point during the game you can click the 'View Highscores' button and it will take you to the highscores table, however, if you are in the middle of a game or have not yet submitted your initials, it will not save your quiz progress. If you click the 'Start Quiz' button, you will be taken to the first question. As you answer each question the timer will count down from 75. If you get a question wrong, the timer will decrease by 10 seconds and a wrong answer image will display. If you get the question right, the timer will continue to count down as normal and a right answer image will display. The quiz will continue through the questions until you have answered them all OR the timer reaches zero. At this point you will be given your score and will be prompted for your initials. Once submitted you will be taken to the highscores table where you can view previous scores. You can then chose to go back to the start page and play again or clear the highscores. If you do not clear your scores they will stay in your table until you do so.

-----

## Acceptance Criteria

* GIVEN I am taking a code quiz :heavy_check_mark:
* WHEN I click the start button :heavy_check_mark:
* THEN a timer starts and I am presented with a question :heavy_check_mark:
* WHEN I answer a question :heavy_check_mark:
* THEN I am presented with another question :heavy_check_mark:
* WHEN I answer a question incorrectly :heavy_check_mark:
* THEN time is subtracted from the clock :heavy_check_mark:
* WHEN all questions are answered or the timer reaches 0 :heavy_check_mark:
* THEN the game is over :heavy_check_mark:
* WHEN the game is over :heavy_check_mark:
* THEN I can save my initials and score :heavy_check_mark:

-----

## Credits
A big thank you to the instructional staff for putting up with our many layers of confusion with learning javascript.

### Resources:

* [w3schools](https://www.w3schools.com)
* [setInterval - Stack Overflow](https://stackoverflow.com/questions/8779845/javascript-setinterval-not-working)
* [Local Storage Arrays - Stack Overflow](https://stackoverflow.com/questions/13702100/localstorage-array-of-objects-handling#:~:text=Just%20convert%20the%20objects%20to,stringify(objects))
* [Retaining Local Storage Arrays on Refresh - Stack Overflow](https://stackoverflow.com/questions/22726080/how-to-retain-javascript-array-while-page-refresh)
* [Bootstrap CSS](https://getbootstrap.com/)

### Images Used
* [Background Image](https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&w=1000&q=80)
* [Wrong Answer GIF](https://media0.giphy.com/media/VEu2A22WVrTug2la7V/giphy.gif)
* [Right Answer GIF](https://memecrunch.com/meme/C4XQK/yesssss-correct-answer/image.gif?w=580&c=1)


-----

## Badges
![badge](https://img.shields.io/github/issues-raw/aimeecesler/super-fun-code-quiz)

-----

## Links
[Repository Link](https://github.com/aimeecesler/super-fun-code-quiz)

[Deployed Application](https://aimeecesler.github.io/super-fun-code-quiz/)

-----

## License
Copyright &copy; [2020] [Aimee Corbin Esler]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.