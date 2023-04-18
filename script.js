let playerWinCount;
let computerWinCount;

const roundOutcome = document.getElementById('round-text');
const gameScore = document.getElementById('score-text');
const buttons = document.querySelectorAll('button');
const resetButton = document.getElementById('reset-button');

setUpGame();

function setUpGame() {
    playerWinCount = 0
    computerWinCount = 0;
    roundOutcome.textContent=`Start by selecting one of the options above. First to 5 wins.`;
    gameScore.textContent=`Current score: ${playerWinCount} : ${computerWinCount}`;
    resetButton.classList.add('hidden-button');
    resetButton.removeEventListener('click', setUpGame);
    buttons.forEach((button) => {
        if (button.id=='Rock' || button.id=='Paper' || button.id=='Scissors') {
            button.addEventListener('click', handleClick);
            button.classList.remove('disabled-button');
        };
    });
};

function handleClick(event) {
    playRound(event.target.id)
};

function getComputerChoice() {
    let computerChoice;
    let randomNumber = Math.random() * 3;
    if (randomNumber <=1) {
        computerChoice = "Rock";
    } else if (randomNumber <=2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
};

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let roundResult;
    if (playerSelection == computerSelection) {
        roundResult = "Tie";
    } else if ( playerSelection == "Rock" && computerSelection == "Scissors" ||
                playerSelection == "Scissors" && computerSelection == "Paper" ||
                playerSelection == "Paper" && computerSelection == "Rock") {
        roundResult = "Player Wins";
        playerWinCount++;
    } else {
        roundResult = "Computer Wins";
        computerWinCount++;
    }
    console.log(`Player: ${playerSelection}, Computer: ${computerSelection}, Result: ${roundResult}`);
    console.log(`Current score: ${playerWinCount}:${computerWinCount}`);

    roundOutcome.textContent=(
        `Last round: (Player) ${playerSelection} vs. ${computerSelection} (Computer). Result: ${roundResult}.`
    );
    gameScore.textContent=(`Current score: ${playerWinCount} : ${computerWinCount}`);
    if (playerWinCount >= 5 || computerWinCount >=5) {
        endGame();
    };
};

function endGame(){
    let winner;
    if (playerWinCount > computerWinCount) {
        winner = prompt("You've won! Enter your name below.");
        if (winner == null) winner = "you";
    } else {
        winner = "Computer";
    }
    gameScore.textContent=(
        `Game over! The final score is ${playerWinCount} : ${computerWinCount}. Congratulations ${winner}!`);
    resetButton.classList.remove('hidden-button');
    resetButton.addEventListener('click', setUpGame);
    buttons.forEach((button) => {
        if (button.id=='Rock' || button.id=='Paper' || button.id=='Scissors') {
            button.removeEventListener('click', handleClick);
            button.classList.add("disabled-button");
        };
    });
};