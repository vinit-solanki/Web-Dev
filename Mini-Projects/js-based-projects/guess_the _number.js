const minNum=1;
const maxNum=100;
let rNum=Math.floor(Math.random()*(maxNum-minNum+1))+minNum;
// let rNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const startOver = document.querySelector('.resultParas');
const lowOrHi = document.querySelector('.lowOrHi'); // Define this element
const p = document.createElement('p');

let prevGuess = [];
let count = 0;
let maxCounts = 10;
let playGame = true;
  
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100.");
    } else {
        prevGuess.push(guess);
        if (count === maxCounts) {
            displayGuess(guess);
            displayMessage(`Game Over! Random number was ${rNum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === rNum) {
        displayMessage("You guessed it right!");
        endGame();
    } else if (guess < rNum) {
        displayMessage("Number is too low...");
    } else if (guess > rNum) {
        displayMessage("Number is too high...");
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    count++;
    remaining.innerHTML = `${maxCounts - count}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', function () {
        rNum = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        count = 0;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${maxCounts - count}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
