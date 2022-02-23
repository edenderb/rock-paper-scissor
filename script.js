const computerDisplay = document.getElementById("computer-choice");
const playerDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleOutcomes = document.querySelectorAll("button");
const winnerDisplay = document.getElementById("winner");
const computerScoreDisplay = document.getElementById("computer-score-display");
const playerScoreDisplay = document.getElementById("player-score-display");
const playerInput = document.getElementById("player-input");
const refreshButton = document.getElementById("refresh");
let playerChoice;
let computerChoice;
let result;
let winner;

possibleOutcomes.forEach((possibleOutcome) =>
  possibleOutcome.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerDisplay.innerHTML = playerChoice;
    computerPlay();
    winnerLoser(playerChoice, computerChoice);

    updateScore(playerScore, computerScore);
  })
);

function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    computerChoice = "ROCK";
  }
  if (randomNum === 1) {
    computerChoice = "PAPER";
  }
  if (randomNum === 2) {
    computerChoice = "SCISSOR";
  }
  computerDisplay.innerHTML = computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function winnerLoser(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    result = "Its a tie";
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSOR") ||
    (playerChoice === "SCISSOR" && computerChoice === "PAPER") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    playerScore++;
    result = "Player wins this Round";
  } else if (
    (computerChoice === "ROCK" && playerChoice === "SCISSOR") ||
    (computerChoice === "SCISSOR" && playerChoice === "PAPER") ||
    (computerChoice === "PAPER" && playerChoice === "ROCK")
  ) {
    computerScore++;
    result = "Computer wins this Round";
  }
  resultDisplay.innerHTML = result;
  updateScore(playerScore, computerScore);
}

function updateScore(playerScore, computerScore) {
  computerScoreDisplay.textContent = computerScore;
  playerScoreDisplay.textContent = playerScore;

  if (playerScore === 5) {
    winner = "Player Wins the game";
    winnerDisplay.innerHTML = winner;
    playerInput.style.display = "none";
    refreshButton.style.display = "block";
  } else if (computerScore === 5) {
    winner = "Computer Wins the Game";
    winnerDisplay.innerHTML = winner;
    playerInput.style.display = "none";
    refreshButton.style.display = "block";
  }
}

refreshButton.addEventListener("click", () => location.reload());
