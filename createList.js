var fs = require("fs");
var words;

//words in words.txt generated randomly from https://www.randomlists.com/random-words
fs.readFile("words.txt", 'utf8', function (err, data) {
    //error occurs
    if (err) {
        console.log(err);
    }

    //console.log(data);

    words = data.split('\r\n');
    module.exports = {
        words:words
    };
    //console.log(module.exports);
});



