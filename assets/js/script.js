let userScore = 0;
let compScore = 0;

/**Caching the DOM Elements for future use **/
let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r >img");

/** May be removed before final submission 
const paper_div = document.getElementById("p > img");
const scissors_div = document.getElementById("s > img"); **/

/**converting letters(r,p,s) into complete word. */
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}


/**Getting Computer choice randomly from choices array */
function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    let randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

/** creating win, lose & draw function */
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    let littleUser = "user".fontsize(3).sub();
    let littleComp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)} ${littleUser} beats ${convertToWord(computerChoice)} ${littleComp}  .You win 🥳`;
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    let littleUser = "user".fontsize(3).sub();
    let littleComp = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(computerChoice)} ${littleComp} beats ${convertToWord(userChoice)} ${littleUser}  .You lost 🙈`;
    console.log("lost");
}



function draw() {
    console.log("it's a draw");

}

/** comparing the userChoice and computerChoice & calling win,lose or draw function */

function runGame(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);


    }

}

/**Getting userChoice and passing the value to runGame function* - To be Deleted before final submission/
function main() {

    /**Adding event listeners to r,p,s divs */

function main() {
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