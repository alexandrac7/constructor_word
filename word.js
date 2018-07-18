var Letter = require("./letter");


function Word() {
    this.letters = [];


    this.generateLetters = function () {
        var wordBank = ["Lager", "Ale", "Pilsner", "Kolsch", "Amber", "Blonde"];
        var stringArray = wordBank[Math.floor(Math.random() * wordBank.length)].split('');
        for (var i = 0; i < stringArray.length; i++) {
            this.letters.push(new Letter(stringArray[i]))
        }
    };

    this.display = function () {
        var displayedWord = "";
        for (var i = 0; i < this.letters.length; i++) {
            displayedWord += this.letters[i].display();
        }
        return displayedWord
    };


    this.guess = function(g) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].guess(g);
        }
    };
};


module.exports = Word;

