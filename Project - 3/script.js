let computerGuess;
let userGuessLog = [];
let attempts = 0;
let maxGuesses = 10;

function gameEnded() {
    document.getElementById('newGameButton').style.display = 'inline';
    document.getElementById('easyBtn').style.display = 'none';
    document.getElementById('hardBtn').style.display = 'none';
    document.getElementById('inputBox').setAttribute('readonly', 'readonly');
}

function easyMode() {
    maxGuesses = 10;
    document.getElementById('easyBtn').className = 'activeEasyBtn';
    document.getElementById('hardBtn').className = '';
}

function hardMode() {
    maxGuesses = 5;
    document.getElementById('hardBtn').className = 'activeHardBtn';
    document.getElementById('easyBtn').className = '';
}

function newGame() {
    window.location.reload();
}

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    document.getElementById('newGameButton').style.display = 'none';
}

function compareGuess() {
    let userGuess = " " + document.getElementById('inputBox').value;
    // console.log(userGuess);

    userGuessLog.push(userGuess);
    // console.log(userGuessLog);
    document.getElementById('guessLog').innerHTML = userGuessLog;

    attempts++;
    document.getElementById('attempts').innerHTML = attempts;

    if (userGuessLog.length < maxGuesses) {
        if (userGuess > computerGuess) {
            document.getElementById('textOutPut').innerHTML = 'Your guess is too high';
            document.getElementById('inputBox').value = "";
        } else if (userGuess < computerGuess) {
            document.getElementById('textOutPut').innerHTML = 'Your guess is too low';
            document.getElementById('inputBox').value = "";
        } else {
            document.getElementById('textOutPut').innerHTML = 'Correct! You guessed it in ' + attempts + ' attempts';
            document.getElementById('container').style.backgroundColor = 'rgb(19, 63, 46)';
            gameEnded();
        }
    } else {
        if (userGuess > computerGuess) {
            document.getElementById('textOutPut').innerHTML = 'You lose!' + '<br> The number was ' + computerGuess;
            document.getElementById('container').style.backgroundColor = 'rgb(198, 70, 53)';
            gameEnded();
        } else if (userGuess < computerGuess) {
            document.getElementById('textOutPut').innerHTML = 'You lose!' + '<br> The number was ' + computerGuess;
            document.getElementById('container').style.backgroundColor = 'rgb(198, 70, 53)';
            gameEnded();
        } else {
            document.getElementById('textOutPut').innerHTML = 'Correct! You guessed it in ' + attempts + ' attempts';
            document.getElementById('container').style.backgroundColor = 'rgb(19, 63, 46)';
            gameEnded();
        }
    }
}