const userInput = document.getElementById("guessField");
const submit = document.getElementById("subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
let randomNumber = parseInt(Math.random() * 100 + 1);
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");
let prevGuess = [];
let numbGuess = 1;
let playGame = true;

submit.addEventListener('click',function(e){
    e.preventDefault();
    if(playGame){
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    }
})
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`please enter a valid number`);
  } else if (guess < 1) {
    alert(`please enter a number more than 1`);
  } else if (guess > 100) {
    alert(`please enter a number less than 100`);
  } else {
    prevGuess.push(guess);
    if (numbGuess === 11) {
      displayGuess(guess);
      displayMessage(`game is over . Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`the number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`the number is too high`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  ;`;
  numbGuess++;
  remaining.innerHTML = `Remaining guesses are ${11 - numbGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;    
}
function endGame() {
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">'🔁'</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame() {
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random() * 100 + 1);
        prevGuess=[];
        numbGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML = `Remaining guesses are ${11 - numbGuess}`;
        playGame=true;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true;
        lowOrHi.innerHTML=' '
    })
}
