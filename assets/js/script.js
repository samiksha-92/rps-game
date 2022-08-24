let userScore = 0;
let compScore = 0;

/**Caching the DOM Elements for future use **/
let userScoreSpan = document.getElementById("user-score");
let compScoreSpan = document.getElementById("comp-score");
let result = document.querySelector(".result > p");


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
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    let littleUser = "user".fontsize(3).sub();
    let littleComp = "comp".fontsize(3).sub();
    result.innerHTML = `${convertToWord(userChoice)} ${littleUser} beats ${convertToWord(computerChoice)} ${littleComp}  .You win 🥳`;
    document.getElementById(userChoice).classList.add("green-shadow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("green-shadow");

    }, 1000);

}

function lose(userChoice, computerChoice) {
    compScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    let littleUser = "user".fontsize(3).sub();
    let littleComp = "comp".fontsize(3).sub();
    result.innerHTML = `${convertToWord(computerChoice)} ${littleComp} beats ${convertToWord(userChoice)} ${littleUser}  .You lost 🙈`;
    document.getElementById(userChoice).classList.add("red-shadow");
    setTimeout(function () {
        document.getElementById(userChoice).classList.remove("red-shadow");

    }, 1000);


}



function draw(userChoice, computerChoice) {
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    let littleUser = "user".fontsize(3).sub();
    let littleComp = "comp".fontsize(3).sub();
    result.innerHTML = `${convertToWord(userChoice)} ${littleUser} equals ${convertToWord(computerChoice)} ${littleComp}  .It's a draw ✌🏻`;


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
            break;


    }

}