document.addEventListener("DOMContentLoaded", function() {
var playerScore = 0;
var compScore = 0;
let outputElement = document.getElementById("output");
let player_Score = document.getElementById("player-score");
let comp_Score = document.getElementById("comp-score");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    const array = ["rock", "paper", "scissors"];
    console.log(choice);
    return array[choice];
}

function getPlayerChoice(callback) {
    rockButton.addEventListener("click", () => {
        outputElement.textContent = "Player picked rockk!";
        callback("rock");
    });

    paperButton.addEventListener("click", () => {
        outputElement.textContent = "Player picked paperr!";
        callback("paper");
    });

    scissorButton.addEventListener("click", () => {
        outputElement.textContent = "Player picked scissorss!";
        callback("scissors");
    });
}

function playRound(playerSelection, computerSelection) {
    
        if(playerSelection === "rock" && computerSelection === "scissors") {
            outputElement.textContent = "Player won this round. Player picked rock while Computer picked scissors!";
            playerScore++;
            round++;
        } else if(playerSelection === "rock" && computerSelection === "paper") {
            outputElement.textContent = "Player lost this round. Player picked rock while the Computer picked paper!";
            compScore++;
            round++;
        } else if(playerSelection === "rock" && computerSelection === "rock") {
            outputElement.textContent = "It is a TIE! Both picked rock!";
        } else if(playerSelection === "paper" && computerSelection === "paper") {
            outputElement.textContent = "It is a TIE! Both picked paper";
        } else if(playerSelection === "paper" && computerSelection === "rock") {
            outputElement.textContent = "Player won this round. Player picked paper while the Computer picked rock!";
            playerScore++;
            round++;
        } else if(playerSelection === "paper" && computerSelection === "scissors") {
            outputElement.textContent = "Player lost this round. Player picked paper while the Computer picked scissors!";
            compScore++;
            round++;
        } else if(playerSelection === "scissors" && computerSelection === "scissors") {
            outputElement.textContent = "It is a TIE! Both picked scissors";
        } else if(playerSelection === "scissors" && computerSelection === "paper") {
            outputElement.textContent = "Player won this round. Player picked scissors while the Computer picked paper!";
            playerScore++;
            round++;
        } else if(playerSelection === "scissors" && computerSelection === "rock") {
            outputElement.textContent = "Player lost this round. Player picked scissors while the Computer picked rock!";
            compScore++;
            round++;
        }
        console.log(`compScore is ${compScore} and player Score is ${playerScore}`);       
}

let round = 0;
let gameOver = false;
function game() {
        getPlayerChoice((playerSelection) => {
            if(round < 5) {
                let computerChoice = getComputerChoice();
                console.log(`player pickeddd ${playerSelection}`);
                console.log(`comp pickedddd ${computerChoice}`);
                playRound(playerSelection, computerChoice);
                player_Score.textContent = `Player Score: ${playerScore}`;
                comp_Score.textContent = `Comp Score: ${compScore}`;
                
                } else if(round >= 5) {
                    gameOver = true;
                }
                if (playerScore > compScore && gameOver === true) {
                    outputElement.textContent = `Player Won The Game With ${playerScore} score`;
                } else if(compScore > playerScore && gameOver === true) {
                    outputElement.textContent = `Computer Won The Game With ${compScore} score`;
                }  
        });
      
}
game();
});