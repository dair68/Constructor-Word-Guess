var fs = require("fs");

//words randomly generated from https://www.randomlists.com/random-words
var list = fs.readFileSync("words.txt", "utf8");
var wordlist = list.split("\r\n");
module.exports = wordlist;