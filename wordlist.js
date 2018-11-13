var fs = require("fs");

var list = fs.readFileSync("words.txt", "utf8");
//console.log(list);
var wordlist = list.split("\r\n");
//console.log(wordlist);
module.exports = wordlist;