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


alert(getComputerChoice());