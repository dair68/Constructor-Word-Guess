//Letter constructor. Defaults to 'E' if no letter provided 
function Letter(letter = 'E') {
    //ensuring letter is an alphabetic character
    var re = /[a-zA-Z]/;
    console.assert(re.test(letter), {
        letter: letter,
        error: "letter must be alphabetic character"
    });

    //ensuring letter is length 1
    console.assert(letter.length === 1, {
        letter: letter,
        error: "letter must be length 1"
    });

    this.letter = letter;
    this.placeholder = "\u2014"; //em dash
    this.guessed = false;
}

//returns the underlying character if already guessed, placeholder otherwise
Letter.prototype.toString = function () {
    //letter guessed correctly
    if (this.guessed) {
        return this.letter;
    }
    //letter not yet guessed
    else {
        return this.placeholder;
    }
}

//checks if a character matches Letter object. Updates the guessed property if so
Letter.prototype.guess = function (letter) {
    //letter guessed correctly
    if (letter.toLowerCase() === this.letter || letter.toUpperCase() === this.letter) {
        this.guessed = true;
    }
}

// var e = new Letter('E');
// e.guess('f');
// console.log(e.toString());

module.exports = Letter;