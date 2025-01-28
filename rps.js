console.log("Logged into Js file ")

// function getComputerChoice should be any one of (rock , paper , scissors)
function getComputerChoice(){
    let computerChoice = Math.random();

    if (computerChoice <= 0.34){
        computerChoice = "rock"
        return computerChoice;
    
    }else if (computerChoice <= 0.67){
        computerChoice = "paper"
        return computerChoice;
    
    }else {
        computerChoice = "scissors"
        return computerChoice;
    }
}

// Computer outputs as expected ✅
// alert(getComputerChoice());

//Function getHumanChoice to get human input 
function getHumanChoice(){
   let  humanChoice = prompt("choose an option", "rock");
   //must return a valid option either rock,paper,scissors
   if ( humanChoice == "rock"){
    return humanChoice;
   }else if (humanChoice == "paper"){
    return humanChoice;
   }else if ( humanChoice == "scissors"){
    return humanChoice;
   }else {
     alert("Please enter a valid option")
   }

}
// Human input works as expected ✅
// getHumanChoice()

//Variables humanScore and computerScore to keep track of scores 
// variables starts with initial value 0

let humanScore = 0;
let computerScore = 0;

// Function to playRound between computer and human 
//must increment the score of the winner each time 
//must display a winner announcement 

function playRound(humanChoice,computerChoice){
    //make human argument case insensitive
     hmChoice = humanChoice.toLowerCase();
     
    // if else to compare the options and choose winner 

    //For rock scenes
    if (hmChoice == "rock" && computerChoice == "rock"){
        alert("Computer chose rock too! it's a draw")
        humanScore++;
        computerScore++;
    }else if (hmChoice == "rock" && computerChoice == "paper"){
        alert("Computer chose Paper, you lost")
        computerScore++;
    }else if (hmChoice == "rock" && computerChoice == "paper"){
        alert("Rock beats paper, congrats you won!")
        humanScore++;
    }
   //for paper scenes
    if (hmChoice == "paper" && computerChoice == "paper"){
        alert("Computer chose paper, it's a draw ")
        computerScore++;
        humanScore++;
    }else if (hmChoice == "paper" && computerChoice == "rock"){
        alert("Computer chose rock, you won")
        humanScore++;
    }else if (hmChoice == "paper" && computerChoice == "scissors"){
        alert("Computer chose scissors, you lost")
        computerScore++;
    }
    // for scissors scenes
    if (hmChoice == "scissors" && computerChoice == "scissors"){
        alert("Computer chose scissors, it's a draw")
        humanScore++;
        computerScore++;
    }else if (hmChoice == "scissors" && computerChoice == "rock"){
        alert("Computer chose rock, you lost")
        computerScore++;
    }else if (hmChoice == "scissors" && computerChoice == "paper"){
        alert("Computer chose paper, you won")
        humanScore++;
    }
}

