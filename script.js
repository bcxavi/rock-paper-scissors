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
