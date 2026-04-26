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

let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!"
    }
    if (humanChoice==='rock' && computerChoice === 'scissors') {
        humanScore++
        return 'You win! Rock beats Scissors'
    }
    if (humanChoice==='paper' && computerChoice === 'rock') {
        humanScore++
        return 'You win! Paper beats Rock'
    }
    if (humanChoice==='scissors' && computerChoice === 'paper') {
        humanScore++
        return 'You win! Scissors beats Paper'
    }
    if (computerChoice==='rock' && humanChoice === 'scissors') {
        computerScore++
        return 'You lose! Rock beats Scissors'
    }
    if (computerChoice==='paper' && humanChoice === 'rock') {
        computerScore++
        return 'You lose! Paper beats Rock'
    }
    else {
        computerScore++
        return 'You lose! Scissors beats Paper'
    }
}
