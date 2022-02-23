const computerDisplay = document.getElementById("computer-choice");
const playerDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleOutcomes = document.querySelectorAll("button");
let playerChoice;
let computerChoice;
let result;

possibleOutcomes.forEach((possibleOutcome) =>
  possibleOutcome.addEventListener("click", (e) => {
    playerChoice = e.target.id;
    playerDisplay.innerHTML = playerChoice;
    computerPlay();
    winnerLoser(playerChoice, computerChoice);
  })
);

function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);
  console.log(randomNum);

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

// let playerScore = 0;
// let computerScore = 0;

function winnerLoser(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    result = "Its a tie";
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSOR") ||
    (playerChoice === "SCISSOR" && computerChoice === "PAPER") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    result = "Player wins this Round";
  } else if (
    (computerChoice === "ROCK" && playerChoice === "SCISSOR") ||
    (computerChoice === "SCISSOR" && playerChoice === "PAPER") ||
    (computerChoice === "PAPER" && playerChoice === "ROCK")
  ) {
    // console.log(computerScore++);
    result = "Computer wins this Round";
  }
  resultDisplay.innerHTML = result;
}

// function game() {
//   for (i = 1; i <= 5; i++) {
//   let playerChoice;
//   console.log(playerChoice);
//   const computerChoice = computerPlay();
//   console.log(computerChoice);
//   console.log(winnerLoser(playerChoice, computerChoice));
//   }
//   console.log(updateScore(playerScore, computerScore));
// }

// function updateScore(playerScore, computerScore) {
//   console.log(playerScore);
//   console.log(computerScore);
//   if (playerScore > computerScore) {
//     return "Player Wins";
//   } else {
//     return "Computer Wins";
//   }
// }
// console.log(game());
