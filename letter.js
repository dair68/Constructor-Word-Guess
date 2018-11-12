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
    this.placeholder = '_';
    this.guessed = false;
}

//prints letter to console if guessed correctly, otherwise displays placeholder
//displays letter as however casing it is stored if display passed in as "default"
//can specify display as "uppercase" or "lowercase" instead
Letter.prototype.print = function (display = "default") {
    //ensuring display parameter is valid input
    var validDisplay = ["default", "uppercase", "lowercase"];
    console.assert(validDisplay.includes(display), {
        display: display,
        error: "display can only be set to \'default\', \'uppercase\', or \'lowercase\'" 
    });

    //letter guessed correctly
    if (this.guessed) {
        var displayedLetter = this.letter;

        //displaying in uppercase
        if(display === "uppercase") {
            displayedLetter = displayedLetter.toUpperCase();
        }
        //displaying in lowercase
        else if(display === "lowercase") {
            displayedLetter = displayedLetter.toLowerCase();
        }
        
        console.log(displayedLetter);
    }
    //letter not yet guessed
    else {
        console.log(this.placeholder);
    }
}

//checks if a character matches Letter object. Updates the guessed property if so
Letter.prototype.guess = function (letter) {
    //letter guessed correctly
    if (letter.toLowerCase() === this.letter || letter.toUpperCase() === this.letter) {
        this.guessed = true;
    }
}

var e = new Letter('E');
e.guess('e');
e.print();