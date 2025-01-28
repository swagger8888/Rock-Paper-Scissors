console.log("Logged into Js file ")

// function getComputerChoice should be any one of (rock , paper , scissors)
function getComputerChoice(){
    let computerChoice = Math.random();

    if (computerChoice <= 0.33){
        
        return "rock";
    
    }else if (computerChoice <= 0.66 && computerChoice >= 0.33 ){
        
        return "paper";
    
    }else {
        
        return "scissors";
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
      compChoice = computerChoice.toLowerCase();
     
    // if else to compare the options and choose winner 

    //For rock scenes
    if (hmChoice == "rock" && compChoice == "rock"){
        alert("Computer chose rock too! it's a draw")
        humanScore++;
        computerScore++;
    }else if (hmChoice == "rock" && compChoice == "paper"){
        alert("Computer chose Paper, you lost")
        computerScore++;
    }else if (hmChoice == "rock" && compChoice == "scissors"){
        alert("Rock beats paper, congrats you won!")
        humanScore++;
    }
   //for paper scenes
    if (hmChoice == "paper" && compChoice == "paper"){
        alert("Computer chose paper, it's a draw ")
        computerScore++;
        humanScore++;
    }else if (hmChoice == "paper" && compChoice == "rock"){
        alert("Computer chose rock, you won")
        humanScore++;
    }else if (hmChoice == "paper" && compChoice == "scissors"){
        alert("Computer chose scissors, you lost")
        computerScore++;
    }
    // for scissors scenes
    if (hmChoice == "scissors" && compChoice == "scissors"){
        alert("Computer chose scissors, it's a draw")
        humanScore++;
        computerScore++;
    }else if (hmChoice == "scissors" && compChoice == "rock"){
        alert("Computer chose rock, you lost")
        computerScore++;
    }else if (hmChoice == "scissors" && compChoice == "paper"){
        alert("Computer chose paper, you won")
        humanScore++;
    }
}




// Function to play rounds 

function playGame(){
    for ( let i = 0; i<5; i++){
    playRound(getHumanChoice(),getComputerChoice())
    alert(`Your score: ${humanScore}\n computer score: ${computerScore}`)
    }

    if (humanScore > computerScore){
        alert("You have won! Congrats")
    }else if ( computerScore > humanScore){
        alert("You have lost damn! lock in bro")
    }else {
        alert("Damn it's a draw!")
    }

    
}
playGame()