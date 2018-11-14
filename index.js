var wordlist = require("./wordlist.js");
var Word = require("./word.js");
var prompt = require("prompt");
var colors = require("colors/safe");
var printHangman = require("./hangman.js");

//console.log(wordlist);

var currentWord;
var guesses;
var wrongLetters;

//formatting prompt
prompt.message = "";
prompt.delimiter = "";

var schema = {
    properties: {
        letter: {
            description: colors.white("Guess a letter:"),
            pattern: /^[a-zA-Z]$/,
            message: 'Must input alphabetic character.',
            required: true
        },
    }
};

var playAgain = {
    properties: {
        play: {
            description: colors.magenta("Play again?(y/n)"),
            pattern: /^[yn]$/,
            message: "Please input y or n.",
            required: true
        }
    }
}

prompt.start();

//randomly selects hangman word and sets guesses to 10
function nextRound() {
    var randIndex = Math.floor(Math.random() * wordlist.length);
    var randWord = wordlist[randIndex];
    currentWord = new Word(randWord);
    //console.log(randWord);

    guesses = 10;
    wrongLetters = [];
}

//checks if the entirety of a word has been guessed
function wordGuessed() {
    return currentWord.string === currentWord.toString();
}

//starts game of hangman
function startGame() {
    nextRound();
    play();
}

//plays a round of hangman
function play() {
    printHangman(guesses);
    //round in play
    if (!wordGuessed() && guesses > 0) {
        console.log(guesses + " guesses left");
        console.log(currentWord.toString());
        console.log("Wrong: " + wrongLetters.join(","));

        //asking user for a letter
        prompt.get(schema, function (err, result) {
            //error occurs
            if (err) {
                console.log(err);
            }

            //console.log(result);
            var letter = result.letter.toUpperCase();

            var currentString = currentWord.toString();

            //letter already guessed
            if (currentString.includes(letter) || wrongLetters.includes(letter)) {
                console.log(colors.cyan("\nYou already guessed that"));
            }
            //letter not already guessed
            else {
                currentWord.guessLetter(letter);

                //letter guessed incorrectly
                if (!currentWord.string.includes(letter)) {
                    console.log(colors.red("\nINCORRECT"));
                    wrongLetters.push(letter);
                    guesses--;
                }
                //letter guessed correctly
                else {
                    console.log(colors.green("\nCORRECT!"));
                }
            }

            play();
        });
    }
    //game over
    else {
        //out of guesses
        if (guesses === 0) {
            console.log(colors.yellow("Out of guesses. The word was: "));
            console.log(currentWord.string);
        }
        //word guessed
        else {
            console.log(currentWord.toString());
            console.log(colors.yellow("You got it right!"));
        }

        //asking user if they want to play again
        prompt.get(playAgain, function (err, result) {
            //error occurred
            if (err) {
                console.log(err);
            }

            //play again
            if (result.play === 'y') {
                //console.log("Let's play again!");
                console.log("\n");
                nextRound();
                play();
            }
            //quitting game
            else {
                console.log(colors.magenta("Thanks for playing!"));
            }
        });
    }
}

//console.log(wordGuessed());
startGame();