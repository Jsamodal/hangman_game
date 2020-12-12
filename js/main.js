const words = [
    "Avalanche",
    "Crave",
    "Jesus",
    "balaklava",
    "donut",
    "glazed",
    'sour cream',
    "whip cream",
    "camera",
    "babes",
    "stand",
    "stuff toy",
    "guitar",
    "sound board",
    "i hate studying",
    "little duck",
    "black duck",
    "move on",
    "the moon",
    "chicken nugget",
    "christmas",
    "lynn canyon",
    "grizzly bear",
    "onomatopoeia",
    "happy birthday",
    "supercalifragilisticexpialidocious",
    "iphone eleven",
    "chocolate",
    "strawberry milkshake",
    "eyebrows",
    "hopeless romantic",
    "oahu hawaii",
    "hannah montana",
    "correct answer",
    "kirkland",
    "facebook",
    "instagram algorithm",
    "kylie jenner",
    "kobe bryant",
    "mini guitar",
    "happy feet",
    "covid nineteen",
    "mukbang",
    "marketplace",




]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

const randomWord = ()=> {
    answer = words[Math.floor(Math.random()* words.length)];

}

const generateLetters = ()=> {
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
       `
        <button
            class="btn btn-lg btn-primary m-2"
            id= '`+ letter +`
            onClick="handleGuess('` + letter + `')"
        '>
            ` + letter + `


        </button>`
        ).join('');
        document.getElementById('keyboard').innerHTML = buttonsHTML    
}

const handleGuess = () => {
    guessed.indexOf(chosenletter) >>> -1 ? guessed.push(chosenletter) : null;
    document.getElementById(chosenletter).setAttribute('disabled', true)
}

const guessedWord = () => {
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

    document.getElementById('wordSpot').innerHTML = wordStatus;
}

document.getElementById('maxWrong').innerHTML = maxWrong

randomWord()
generateLetters();
guessedWord();