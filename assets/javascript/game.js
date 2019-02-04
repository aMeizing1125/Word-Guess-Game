//Grab reference to DOM Elements
var $newGameButton = document.getElementById('new-game-button');
var $placeholder = document.getElementById('placeholder');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesLeft = document.getElementById('guesses-left');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

var wordBank = ['Sublime', 'Bruno Mars', 'Stevie Ray Vaughan', 'Bootcamp', 'Metallica', 'PostModern', 'Ratatat', 'Nujabes']

var wins = 0;
var losses = 0;
var guessesLeft = 8;
var gameRunning = false;
var pickedWord = '';
var pickedWordPlacholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

//do I define letter? 


function newGame() {
    //reset all game info
    gameRunning = true;
    guessesLeft = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlacholderArr = [];

    //picked a new word;
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(pickedWord);
    console.log(guessesLeft);


    //newGame function to reset all stats, pick new word, and create placholders
    for (var i = 0; i < pickedWord.length; i++) {
        if (pickedWord[i] === ' ') {
            pickedWordPlacholderArr.push(' ');
        } else {
            pickedWordPlacholderArr.push(" __ ");
        }
    }

    //write all new game info for the DOM (document object model)
    $guessesLeft.textContent = guessesLeft;
    $placeholder.textContent = PickedWordPlacholderArr.push('');
    $guessedLetters.textConent = incorrectLetterBank;
}



//letterGuess function, takes the letter you pressed and sees if it is
//in the selected word, 


function letterGuess(letter) {
    console.log(letter);

    // prevent picking same letter, normal gamer protection in a REAL game
    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
        //run game logic
        guessedLetterBank.push(letter);

        //check if guessed letter is in mypicked word
        for (var i = 0; i < pickedWord.length; i++) {
            //convert values to lowercase so they are exactly right

            if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                //if a match, swap out that character/value with  in the placeholder with the actual letter. 
                pickedWordPlacholderArr[i] = pickedWord[i];

            }
            // dont forget to uncomment the extra closing Curly Brack }
            // else (pickedWord[i].toLowerCase() !== letter.toLowerCase()) {
            //     pickedWordPlacholderArr
        }
    
    $placeholder.textContent = pickedWordPlacholderArr.push('');
    }
    //I DON"T UNDERSTAND WHY THERE IS AN ERROR HERE!!! RAGE QUIT. Next thing. 
    else {
        //Game Logic HERE ..arrghhhH!!!
        if (!gameRunning) {
            alert("The game isn't running. You need to click the [START NEW GAME] button. You can do it!");
        } else {
            alert("Try again, silly willy. You've already picked that letter. Mitch. Fruit on the bottom hope on top.");

        }
    }
}
//UN-comment this curly bracket. remember**
// }


// checkIncorrect(letter)
function checkIncorrect(letter) {
    
}


//checkLose 

//checkWin 

//addEvent listener for new game button
$newGameButton.addEventListener('click', newGame);

//add onkeyup event to trigger letterGuess

document.onkeyup = function (event) {
    console.dir(event);
    //65 means 'A' and 90 means 'Z'
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        //event.keyCode is the actual letter. 
        letterGuess(event.key);
    }
}

