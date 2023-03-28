'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let checkBtn = document
  .querySelector('.check')
  .addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    //no number
    if (!guess) {
      displayMessage('Please enter valid number');
    }

    //win
    else if (guess === number) {
      displayMessage('You won!');
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = 'green';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }

    //wrong(too high/too low combined)
    else if (guess !== number) {
      if (score > 1) {
        displayMessage(
          guess > number ? 'Enter lower number' : 'Enter higher number'
        );
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You lost!');
        document.querySelector('.score').textContent = 0;
        document.body.style.backgroundColor = 'red';
      }
    }
  });

let playAgain = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing');

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = null;
  });
