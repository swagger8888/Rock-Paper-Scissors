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
