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
            pickedWordPlacholderArr.push("__ ");
        }
    }

    //write all new game info for the DOM (document object model)
    //how do I convert the numbers into letters? I tried this. thing. 
    //I looked at several articles at like 6. .. My brain no worky good. 


    $guessesLeft.textContent = guessesLeft;
    $placeholder.textContent = pickedWordPlacholderArr.push('');
    $guessedLetters.textContent = incorrectLetterBank.push('$guessedLetters');
}

//letterGuess function, takes the letter you pressed and sees if it is
//in the selected word, 
// my letter guess never actually drops when I select the wrong letter. BUG FIX*****

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
        }
//I don't really get join. I stole it from some where. I do know push doesn't work. Tried that. 
        $placeholder.textContent = pickedWordPlacholderArr.join('');
        checkIncorrect(letter); 
    }
    //I DON"T UNDERSTAND WHY THERE IS AN ERROR HERE!!! RAGE QUIT. Next thing. 
    else {
        //Game Logic HERE ..arrghhhH!!!
        if (!gameRunning) {
            alert("The game isn't running. You need to click the [START NEW GAME] button. You can do it!");
        } else {
            alert("Try again, silly willy. You've already picked that   letter. Mitch. Fruit on the bottom hope on top.");
        }
    }
}

// checkIncorrect(letter)
function checkIncorrect(letter) {
    //checking to see if letter didn't make it onto pickedWordplacholder.
    if (
        pickedWordPlacholderArr.indexOf(letter.toLowerCase()) === -1
        &&
        pickedWordPlacholderArr.indexOf(letter.toUpperCase()) === -1 ) {
        guessesLeft--; 
       // Add incorrect letter to incorrectBank
        incorrectLetterBank.push(letter);
        $guessLetters.textContent = incorrectLetterBank.join(' ');
        $guessesLeft.textContent = guessesLeft; 

    }
}


//checkLose 

function checkLoss() {
    if (guessesLeft === 0) {
        losses++;
        gameRunning = false;
        $losses.textContent = losses;
        alert('loser')
    }
    }

//checkWin 
//after you complete the first word it doesn't ever prompt you to the next level. 
//and when you type a letter that isn't listed it shows a number in the blanks until you select the first letter. 
//fix these bugs.... after a nap***** DON"T FORGET

function checkWin() {
    if (pickedWord.toLowerCase() === pickedWordPlacholderArr.join('').toLowerCase() ){
    
    wins++;
    gameRunning = false;
    $wins.textContent = wins;
    alert('winner winner! We are the champions my friends!')
}
checkWin();
}



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

