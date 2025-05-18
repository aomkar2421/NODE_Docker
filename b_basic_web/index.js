let randomNumber = parseInt( Math.random()*100+1 );

let submit = document.querySelector("#sbtn")
let userInput = document.querySelector("#guessField")
let guessSlot = document.querySelector(".guesses")
let remaining = document.querySelector(".lastResult")
let lowOrHi = document.querySelector(".lowOrHigh")
let startOver = document.querySelector(".resultParas")

let p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();

        let guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
      alert('PLease enter a valid number');
    } else if (guess < 1) {
      alert('PLease enter a number more than 1');
    } else if (guess > 100) {
      alert('PLease enter a  number less than 100');
    } else {
      prevGuess.push(guess);
      if (numGuess === 11) {
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("You guessed it right");
    }
    else if(guess < randomNumber){
        displayMessage("Number id greater");
    }
    else if(guess > randomNumber){
        displayMessage("Number is Smaller");
    }
    
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
    
}

function endGame( ){
    
}

