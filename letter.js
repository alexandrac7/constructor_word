
var inquirer = require("inquirer");

var rightLetter = [];



function Letter(ch) {

    this.guessed = false;
    this.character = ch;

    this.guess = function (guess) {
        if (guess == this.character) {
            this.guessed = true;

        }
    }

    this.display = function () {
        if (this.guessed == true) {
            return this.character;
        }
        else {
            return "_"
        }
    }


}




// function Letter(choice, rightLetter, underscore) {

//     this.choice = choice;

//     this.underscore = "_";

//     guessedLetter = process.argv[3]

//     this.display = function (){
//         if (guessedLetter = false) {
//             console.log("Guess again!")
//         }

//         else {
//             rightLetter.push(guessedLetter) 
//             += this.underscore
//         }

//     }


// }

module.exports = Letter;