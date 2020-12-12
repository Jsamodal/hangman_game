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

function randomWord() {
  answer = words[Math.floor(Math.random() * words.length)];
}

function generateLetters() {
  let lettersHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
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

//handles the guess of the user 

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    gameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    gameLost();
    updateHangman();
  }
}

function updateHangman() {
  document.getElementById('hangman').src = './images/gallows' + mistakes + '.jpg';
}

function gameWon() {
  if (wordStatus === answer) {
    alert('Congratulations! you win!')
    reset();
  }
}

function gameLost() {
  if (mistakes === maxWrong) {
      alert(`The answer was: ${answer}, You Lost... ` )
      reset();
    
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpot').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangman').src = './images/gallows0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateLetters();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateLetters();
guessedWord();