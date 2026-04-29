// I need a function that returns ´Rock´, ´Paper´or ´Scissors´randomly
// Create a function that give me a random number 0 , 1 or 2
// Associate the random number to a element in the game

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)

    if (num === 0) return 'rock'
    if (num === 1) return 'paper'
    return 'scissors'
}


let humanScore = 0;
let computerScore = 0;

 function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!"
        }

        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++
            return 'You win! Rock beats Scissors'
        }

        if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++
            return 'You win! Paper beats Rock'
        }

        if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++
            return 'You win! Scissors beats Paper'
        }

        computerScore++
        return `You lose! ${computerChoice} beats ${humanChoice}`
    }

// console.log(playGame())

const buttons = document.querySelectorAll(".choice-btn");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        const resultMessage = document.querySelector(".result-message");
        
        console.log(playRound(humanChoice, computerChoice));

        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;

        if (humanScore === 5) {
            resultMessage.textContent = "You win the game!";
        }

        if (computerScore === 5) {
            resultMessage.textContent = "Computer wins the game!";
        }
    });
});

