// Computer random choice

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

let computerSelection = computerPlay();
let playerSelection;
let computerScore = 0;
let playerScore = 0;




const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      playerSelection = img.alt.toLowerCase();
      console.log(playerSelection);
      
      updateScore(playRound(playerSelection, computerSelection));

    if (playerScore === 5 || computerScore === 5){
        declareWinner();
        resetGame(); 
    }
    });
});   



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

const text = document.querySelector("#text");    
const player = document.querySelector("#player-score");
const computer = document.querySelector("#computer-score");


    if (winner === "tie"){
        text.innerText = "It's a tie!";
        return "Tie game!";
    } else if (winner === "player"){
        text.innerText = "Congrats! You won this round!";
        playerScore++;
    } else if (winner === "computer"){
        text.innerText = "Oops! You lost this round, try again!";
        computerScore++;
    }   
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
}

// When the game ends (5 points)

const returnMainBtn = document.querySelector("#retry-btn");
returnMainBtn.style.visibility = "hidden";
returnMainBtn.addEventListener("click",() => location.reload());

function declareWinner(){
    
    if (playerScore > computerScore){
        text.innerText = "Congrats! You won!";
        returnMainBtn.style.visibility = "visible";
        returnMainBtn.innerText = "PLAY AGAIN";
    } else {
        text.innerText = "You lost...";
        returnMainBtn.style.visibility = "visible";
        returnMainBtn.innerText = "TRY AGAIN?";
    }

}


function resetGame(){
    text.innerText = "";
    playerScore = 0;
    computerScore = 0;
}
