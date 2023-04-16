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
    console.log(computerChoice);
    return computerChoice;
}

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