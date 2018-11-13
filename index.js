var wordlist = require("./wordlist.js");
var Word = require("./word.js");
var prompt = require("prompt");

//console.log(wordlist);

var currentWord;
var guesses;
var guessedLetters;

var schema = {
    properties: {
      letter: {
        pattern: /^[a-zA-Z]$/,
        message: 'Must input alphabetic character.',
        required: true
      },
    }
  };

//randomly selects hangman word and sets guesses to 10
function nextRound() {
    var randIndex = Math.floor(Math.random() * wordlist.length);
    var randWord = wordlist[randIndex];
    currentWord = new Word(randWord);
    //console.log(randWord);

    guesses = 10;
    guessedLetters = [];

    //setting up prompt
    prompt.start();
}

//checks if the entirety of a word has been guessed
var wordGuessed = function () {
    return currentWord.string === currentWord.toString();
}

//starts game of hangman
function startGame() {
    nextRound();
    play();
}

//plays a round of hangman
function play() {
    //round in play
    if (!wordGuessed() && guesses > 0) {
        console.log("\n" + guesses + " guesses remaining");
        console.log(currentWord.toString());
        //asking user for a letter
        prompt.get(schema, function (err, result) {
            //error occurs
            if (err) {
                console.log(err);
            }

            //console.log(result);
            var letter = result.letter;

            //letter not already guessed
            if(!guessedLetters.includes(letter)) {
                currentWord.guessLetter(letter);
                guessedLetters.push(letter);

                //letter guessed incorrectly
                if(!currentWord.string.includes(letter)) {
                    console.log("Incorrect");
                    guesses--;
                }
                //letter guessed correctly
                else {
                    console.log("Correct");
                }
            }
            //letter already guessed
            else {
                console.log("You already guessed that");
            }
            
            play();
        });
    }
    //word guessed
    else if(wordGuessed()) {
        console.log("\n"+currentWord.toString());
        console.log("You got it right! Next word!");
    }
    //out of guesses
    else if(guesses === 0) {
        console.log("\nOut of guesses. The word was: ");
        console.log(currentWord.string);
    }
}

//console.log(wordGuessed());
startGame();