// Generate Random Number
let randomNumber = Math.floor(Math.random() * 1000) + 1;
// documents
const guessedNumberInput = document.querySelector('.js-number');
const checkNumberButton = document.querySelector('.js-check');
const resultElement = document.querySelector('.js-result');
const scoreTextElement = document.querySelector('.score');
// score
let score = 0;

// Check on button click
checkNumberButton.addEventListener('click', () => {
  checkNumber();
});

// Check on Enter key press
guessedNumberInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkNumber();
  }
});

function checkNumber() {
  const guessedNumber = parseInt(guessedNumberInput.value, 10);

  if (guessedNumber === randomNumber) {
    resultElement.innerHTML = 'Congratulations! You guessed Correctly. The Random Number is Reset';
    score += 1;
    update();
  } else if (guessedNumber > randomNumber) {
    resultElement.innerHTML = 'Wrong guess! Number is Too High!';
  } else if (guessedNumber < randomNumber) {
    resultElement.innerHTML = 'Wrong guess! Number is Too Low!';
  } else {
    resultElement.innerHTML = 'Error!';
  }
}

function update() {
  scoreTextElement.innerHTML = 'Score (level: hard): ' + score;
  randomNumber = Math.floor(Math.random() * 1000) + 1;
}
