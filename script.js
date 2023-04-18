/*
function getPlayerChoice() {
    let playerChoice;
    playerChoice = prompt("What do you choose?");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice !== "rock" && playerChoice !== "scissors" && playerChoice !== "paper") {
        alert("You have not made a valid selection. This game is invalid.");
        playerChoice = null;
    }
    console.log(playerChoice);
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    let roundResult;
    if (playerSelection == null) {
        roundResult = "noResult";
    } else if (playerSelection == computerSelection) {
        roundResult = "tie";
    } else if ( playerSelection == "rock" && computerSelection == "scissors" ||
                playerSelection == "scissors" && computerSelection == "paper" ||
                playerSelection == "paper" && computerSelection == "rock") {
        roundResult = "playerWin"   ;
    } else {
        roundResult = "computerWin";
    }
    console.log(roundResult);
    return roundResult
}

function game() {
    let playerWinCount = 0
    let computerWinCount = 0;
    let roundResult;

    roundResult = playRound(getPlayerChoice(),getComputerChoice());
    if (roundResult == "playerWin") {
        playerWinCount ++;
    } else if (roundResult == "computerWin") {
        computerWinCount ++;
    } else if (roundResult == "tie") {
    } else {
    }
    console.log(`Player: ${playerWinCount}, Computer: ${computerWinCount}`);
    
    roundResult = playRound(getPlayerChoice(),getComputerChoice());
    if (roundResult == "playerWin") {
        playerWinCount ++;
    } else if (roundResult == "computerWin") {
        computerWinCount ++;
    } else if (roundResult == "tie") {
    } else {
    }
    console.log(`Player: ${playerWinCount}, Computer: ${computerWinCount}`);
    
    roundResult = playRound(getPlayerChoice(),getComputerChoice());
    if (roundResult == "playerWin") {
        playerWinCount ++;
    } else if (roundResult == "computerWin") {
        computerWinCount ++;
    } else if (roundResult == "tie") {
    } else {
    }
    console.log(`Player: ${playerWinCount}, Computer: ${computerWinCount}`);
    
    roundResult = playRound(getPlayerChoice(),getComputerChoice());
    if (roundResult == "playerWin") {
        playerWinCount ++;
    } else if (roundResult == "computerWin") {
        computerWinCount ++;
    } else if (roundResult == "tie") {
    } else {
    }
    console.log(`Player: ${playerWinCount}, Computer: ${computerWinCount}`);
    
    roundResult = playRound(getPlayerChoice(),getComputerChoice());
    if (roundResult == "playerWin") {
        playerWinCount ++;
    } else if (roundResult == "computerWin") {
        computerWinCount ++;
    } else if (roundResult == "tie") {
    } else {
    }
    console.log(`Player: ${playerWinCount}, Computer: ${computerWinCount}`);

    if (playerWinCount == computerWinCount) {
        console.log(`Final score\nPlayer: ${playerWinCount}, Computer: ${computerWinCount}\nIt's a tie!`);
    } else if (playerWinCount > computerWinCount) {
        console.log(`Final score\nPlayer: ${playerWinCount}, Computer: ${computerWinCount}\nPlayer wins!`);
    } else {
        console.log(`Final score\nPlayer: ${playerWinCount}, Computer: ${computerWinCount}\nComputer wins!`);
    }
}

game();

*/

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    if (button.id=='rock' || button.id=='paper' || button.id=='scissors') {
        button.addEventListener('click', function () {
            //This is an anonymous function. Because it was called as part of the addEventListener method, if I list any arguments, it will get the event object passed in as the first argument. I can call this argument whatever I like (e.g. 'myEvent', or 'bananas'). I don't need the event object, just the button.id, so no arguments are named in the anonymous function.
            playRound(button.id);
            //The button id could instead by found by passing in the event object as an argument (e.g. as myEvent), and then finding the button id with myEvent.target.id
        });
        //An alternative syntax here is...
        //button.addEventListener('click', () => getPlayerChoice(button.id));
        //If I needed the event object as well, it would instead be...
        //button.addEventListener('click', myEvent => getPlayerChoice(myEvent, button.id));
    };
});
const roundOutcome = document.getElementById('roundText');
const gameScore = document.getElementById('scoreText');
const gameOutcome = document.getElementById('gameText');

function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.random() * 3;
    if (randomNumber <=1) {
        computerChoice = "rock";
    } else if (randomNumber <=2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
};

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let roundResult;
    if (playerSelection == computerSelection) {
        roundResult = "tie";
    } else if ( playerSelection == "rock" && computerSelection == "scissors" ||
                playerSelection == "scissors" && computerSelection == "paper" ||
                playerSelection == "paper" && computerSelection == "rock") {
        roundResult = "playerWin";
        playerWinCount++;
    } else {
        roundResult = "computerWin";
        computerWinCount++;
    }
    console.log(`Player: ${playerSelection}, Computer: ${computerSelection}, Result: ${roundResult}`);
    console.log(`Current score: ${playerWinCount}:${computerWinCount}`);

    roundOutcome.textContent=(
        `Player: ${playerSelection}, Computer: ${computerSelection}, Result: ${roundResult}`
    );
    gameScore.textContent=(`Current score: ${playerWinCount}:${computerWinCount}`);
    if (playerWinCount >= 5 || computerWinCount >=5) {
        endGame();
    };
};

let playerWinCount = 0
let computerWinCount = 0;

function endGame(){
    let winner;
    if (playerWinCount > computerWinCount) {
        winner = prompt("You've won! Enter your name");
    } else {
        winner = "Computer";
    }
    gameScore.textContent=(`Final score: ${playerWinCount}:${computerWinCount}`);
    gameOutcome.textContent=(`Game over! Winner is ${winner}.`);
};