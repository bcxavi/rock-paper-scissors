let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".choice-btn");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const resultMessage = document.querySelector(".result-message");

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);

    if (num === 0) return "rock";
    if (num === 1) return "paper";
    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats Scissors";
    }

    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock";
    }

    if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats Paper";
    }

    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
}

function updateScoreDisplay() {
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

function checkWinner() {
    if (humanScore === 5) {
        resultMessage.textContent = "You win the game!";
        return true;
    }

    if (computerScore === 5) {
        resultMessage.textContent = "Computer wins the game!";
        return true;
    }

    return false;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (humanScore === 5 || computerScore === 5) return;

        const humanChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice();

        const roundResult = playRound(humanChoice, computerChoice);

        console.log("Human:", humanChoice);
        console.log("Computer:", computerChoice);
        console.log(roundResult);

        resultMessage.textContent = roundResult;

        updateScoreDisplay();
        checkWinner();
    });
});