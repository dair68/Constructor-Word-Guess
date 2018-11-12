var Letter = require("./letter");

//Word constructor
function Word(word) {
    //ensuring word is a string
    console.assert(typeof word === "string", {
        word: word,
        error: "word must be as string"
    });

    this.letters = [];

    //calling Letter constructor on all characters in string
    for(var i=0; i<word.length; i++) {
        var letter = new Letter(word[i]);
        this.letters.push(letter);
    }
}

//returns string representation of word, based on correctly guessed letters
Word.prototype.toString = function() {
    var word = "";

    //calling toString on all letters in word
    for(var i=0; i<this.letters.length; i++) {
        word += this.letters[i].toString();
    }

    return word;
}

//guesses if a letter is in Word. Replaces all appropriate dashes with letter if so.
Word.prototype.guessLetter = function(letter) {
    //calling guess on all letters in word
    for(var i=0; i<this.letters.length; i++) {
        this.letters[i].guess(letter);
    }
}

var word = new Word("CAT");
word.guessLetter('C');
word.guessLetter('O');
console.log(word.toString());