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

// function playGame() {


//     function playRound(humanChoice, computerChoice) {
//         if (humanChoice === computerChoice) {
//             return "It's a tie!"
//         }

//         if (humanChoice === 'rock' && computerChoice === 'scissors') {
//             humanScore++
//             return 'You win! Rock beats Scissors'
//         }

//         if (humanChoice === 'paper' && computerChoice === 'rock') {
//             humanScore++
//             return 'You win! Paper beats Rock'
//         }

//         if (humanChoice === 'scissors' && computerChoice === 'paper') {
//             humanScore++
//             return 'You win! Scissors beats Paper'
//         }

//         computerScore++
//         return `You lose! ${computerChoice} beats ${humanChoice}`
//     }

//     let humanSelection 
//     (playRound(humanSelection, computerSelection))
  

//     if (humanScore > computerScore) {
//         return 'Congratulations! You win!'
//     }

//     if (humanScore === computerScore) {
//         return "It's a Tie"
//     }

//     return "You lose!"
// }

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

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice();

        console.log("Human choice:", humanChoice);
        console.log("Computer choice:", computerChoice);
        console.log(playRound(humanChoice, computerChoice));
    });
});