const words = [
    "Avalanche",
    "Crave",
    "Jesus",
    "balaklava",
    "donut",
    "glazed",
    "camera",
    "babes",
    "stand",
    "guitar",
    "nugget",
    "christmas",
    "onomatopoeia",
    "happy birthday",
    "supercalifragilisticexpialidocious",
    "iphone",
    "chocolate",
    "milkshake",
    "eyebrows",
    "romantic",
    "hawaii",
    "answer",
    "kirkland",
    "facebook",
    "algorithm",
    "kylie",
    "kobe",
    "mini",
    "happy",
    "covid",
    "mukbang",
    "marketplace",
    "bashful",
    "instagram",
    "lethargic",
    "ragnarok",
    "password",
    "ghasted",
    "software",
    "javascript",
    "agreeable",
    "imaginative",
    "ebeneezer",
    "conscientiousness",
    "neuroticism",
    "paris",
    "love",
    "wheel",
    "lettuce",
    "penguin",
    "experiences",








]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

//generates a word for the user to guess and stores it to the answer variable
function randomWord() {
  answer = words[Math.floor(Math.random() * words.length)];
}

// genereates the letters for the user so the user could guess the question
function generateLetters() {
  let lettersHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = lettersHTML;
}

//handles the guess of the user and checks if the letter is in the answer or not

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord(); //
    gameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    gameLost();
    updateHangman();
  }
}

//grabs picture from the images file
//updates the hangman picture everytime the user makes a mistake
function updateHangman() {
  document.getElementById('hangman').src = './images/gallows' + mistakes + '.jpg';
}

//compares if wordStatus is the same as the answer 
//alerts and resets the game if the user has won the game
function gameWon() {
  if (wordStatus === answer) {
    alert('Congratulations! you win!')
    reset();
  }
}

//compares the number of mistakes is equal to maxWrong
//alerts that the user lost the game and shows the user the answer then resets the game
function gameLost() {
  if (mistakes === maxWrong) {
      alert(`The answer was: ${answer}, You Lost... ` )
      reset();
    
  }
}

//updates the blank letters when the user press the same letters that the answer has
function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpot').innerHTML = wordStatus;
}

//notifies the user if the user makes a mistake
function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

// resets the game
function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangman').src = './images/gallows0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateLetters();
}

//shows the user that the user can only make 6 mistakes
document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateLetters();
guessedWord();