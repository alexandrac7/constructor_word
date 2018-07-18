
var inquirer = require("inquirer");

var Letter = require("./letter");

var Word = require("./word");

var correctGuesses = [];

var lettersGuessed = [];

Game();

function Game() {


    var word = new Word();
    word.generateLetters();
    console.log(word.display())
    var guessesRemaining = 10;

    this.guess = function () {
        inquirer.prompt({
            message: "Choose a letter.",
            type: "input",
            name: "guess"
        }).then(function (res) {
            //Check if right?
            word.guess(res.guess);
            console.log(word.display());
            //Remove guesses
            guessesRemaining--;

            //Meant to prompt user if they want to play again and reset, but I'm getting some wild errors.
            if (guessesRemaining > 0) {
                guess();
            }
            else console.log("You lose! Play again?")
            inquirer.prompt({
                choices: ["Yes", new inquirer.Separator(), "No"]
            }).then(function (res) {
                Game();
                //Check if right?
            });

        });
    }

    guess();


}

