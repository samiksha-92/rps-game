let userScore = 0;
let compScore = 0;

/**Caching the DOM Elements for future use **/
let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


/**Getting Computer choice randomly from choices array */
function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];

}

/**creating win, lose & draw function */
function win() {
    console.log("user wins")

}

function lose() {
    console.log("user loses");
}

function draw() {
    console.log("it's a draw");

}

/** comparing the userChoice and compChoice */
function runGame(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win()
            break;
        case "ps":
        case "rp":
        case "sr":
            lose();

            break;
        case "rr":
        case "pp":
        case "ss":
            draw();

    }

}

/**Getting userChoice and passing the value to runGame function*/
function main() {

    /**Adding event listeners to r,p,s divs */

    rock_div.addEventListener("click", function () {
        console.log("clicked");
        runGame("r");
    })

    paper_div.addEventListener("click", function () {
        console.log("clicked");
        runGame("p");
    })

    scissors_div.addEventListener("click", function () {
        console.log("clicked");
        runGame("s");
    })
}