console.log("Logged into Js file");

// Function to get computer's choice
function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice <= 0.33) {
        return "rock";
    } else if (computerChoice <= 0.66 && computerChoice >= 0.33) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Variables to keep track of scores
let humanScore = 0;
let computerScore = 0;

// Function to play a round between computer and human
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let hmChoice = humanChoice.toLowerCase();
    let compChoice = computerChoice.toLowerCase();

    // Get the result div element by its ID
    let resultDiv = document.querySelector('#result');

    // Compare choices and determine the winner
    if (hmChoice == compChoice) {
        resultDiv.textContent = `Computer chose ${compChoice} too! It's a draw.`;
        humanScore++;
        computerScore++;
    } else if (
        (hmChoice == "rock" && compChoice == "scissors") ||
        (hmChoice == "paper" && compChoice == "rock") ||
        (hmChoice == "scissors" && compChoice == "paper")
    ) {
        resultDiv.textContent = `Computer chose ${compChoice}, you won!`;
        humanScore++;
    } else {
        resultDiv.textContent = `Computer chose ${compChoice}, you lost.`;
        computerScore++;
    }

    // Update the result div with the current scores
    resultDiv.textContent += `\nYour score: ${humanScore}\nComputer score: ${computerScore}`;
}

// Event listeners for buttons
document.querySelector('#rock').addEventListener('click', () => playRound("rock"));
document.querySelector('#paper').addEventListener('click', () => playRound("paper"));
document.querySelector('#scissors').addEventListener('click', () => playRound("scissors"));