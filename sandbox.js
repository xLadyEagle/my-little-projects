
function computerPlay () {
const random = (Math.floor(Math.random()*3));    
    if (random === 0) {
        return "rock";
    } else if (random === 1){
        return "paper"; 
    } else if (random === 2){
        return "scissors";
    }    
}

console.log(computerPlay());

const computerScore = 0;
const playerScore = 0;


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (computerSelection == playerSelection) {
        return "tie";
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")) {
        return "computer";
  } else if (  
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")) {
         return "player";  
    }
}


function updateScore(winner){
    if (winner === "tie"){
        return "Tie game!";
    } else if (winner === "player"){
        playerScore++;
    } else if (winner === "computer"){
        computerScore++;
    }
}


  const computerSelection = computerPlay();
  updateScore(getWinner(playerSelection, computerSelection));

  // const playerSelection = prompt("Choose your weapon! Rock, paper or scissors?");