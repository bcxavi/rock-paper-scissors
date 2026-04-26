// I need a function that returns ´Rock´, ´Paper´or ´Scissors´randomly
// Create a function that give me a random number 0 , 1 or 2
// Associate the random number to a element in the game

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)

    if (num === 0) return 'rock'
    if (num === 1) return 'paper'
    return 'scissors'
}

function getHumanChoice() {
    let choice = prompt("What's your choice (rock, paper or scissors)")
    return choice.toLowerCase()
}

function playGame() {
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

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        console.log(playRound(humanSelection, computerSelection))
    }

    if (humanScore > computerScore) {
        return 'Congratulations! You win!'
    }

    if (humanScore === computerScore) {
        return "It's a Tie"
    }

    return "You lose!"
}

console.log(playGame())