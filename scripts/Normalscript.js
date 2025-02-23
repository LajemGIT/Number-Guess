// Generate Random Number
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Documents
const guessedNumberInput = document.querySelector('.js-number');
const checkNumberButton = document.querySelector('.js-check');
const resultElement = document.querySelector('.js-result');
const scoreTextElement = document.querySelector('.score');

// Load stored score from localStorage, or start at 0 if not available
let score = parseInt(localStorage.getItem("score")) || 0;

// Display stored score
scoreTextElement.innerHTML = 'Score (level: normal): ' + score;

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
    resultElement.innerHTML = '🎉 Congratulations! You guessed Correctly. The Random Number is Reset';
    score += 1;
    update();
  } else if (guessedNumber > randomNumber) {
    resultElement.innerHTML = '📈 Wrong guess! Number is Too High!';
  } else if (guessedNumber < randomNumber) {
    resultElement.innerHTML = '📉 Wrong guess! Number is Too Low!';
  } else {
    resultElement.innerHTML = '❌ Error!';
  }
}

function update() {
  // Update the score display
  scoreTextElement.innerHTML = 'Score (level: normal): ' + score;

  // Save only the score to localStorage
  localStorage.setItem("score", score);

  // Reset the random number for the next round
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
