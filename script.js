function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSOR";
  }
}

let playerScore = 0;
let computerScore = 0;

function winnerLoser(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Its a tie";
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSOR") ||
    (playerChoice === "SCISSOR" && computerChoice === "PAPER") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    console.log(playerScore++);
    return "Player wins this Round";
  } else if (
    (computerChoice === "ROCK" && playerChoice === "SCISSOR") ||
    (computerChoice === "SCISSOR" && playerChoice === "PAPER") ||
    (computerChoice === "PAPER" && playerChoice === "ROCK")
  ) {
    console.log(computerScore++);
    return "Computer wins this Round";
  }
}

function game() {
  for (i = 1; i <= 5; i++) {
    let playerInput = prompt("Please enter ROCK, PAPER or Scissor: ");
    let playerChoice = playerInput.toUpperCase();
    console.log(playerChoice);
    const computerChoice = computerPlay();
    console.log(computerChoice);
    console.log(winnerLoser(playerChoice, computerChoice));
  }
  console.log(updateScore(playerScore, computerScore));
}

function updateScore(playerScore, computerScore) {
  console.log(playerScore);
  console.log(computerScore);
  if (playerScore > computerScore) {
    return "Player Wins";
  } else {
    return "Computer Wins";
  }
}
console.log(game());
