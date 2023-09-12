
function getComputerChoice(n) {
  let choice = ["rock", "paper", "scissors"];
  return choice[n - 1];
}
function getWinner(playerSelection, computerSelection) {
  let decision = undefined;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        decision = `Tie`;
        break;
      case "paper":
        decision = `Lose`;
        break;
      case "scissors":
        decision = `Win`;
        break;
      default:
        console.log("this is a special case needed to be studied");
        break;
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        decision = `Win`;
        break;
      case "paper":
        decision = `Tie`;
        break;
      case "scissors":
        decision = `Lose`;
        break;
      default:
        console.log("this is a special case needed to be studied");
        break;
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "rock":
        decision = `Lose`;
        break;
      case "paper":
        decision = `Win`;
        break;
      case "scissors":
        decision = `Tie`;
        break;
      default:
        console.log("this is a special case needed to be studied");
        break;
    }
  }
  return `you ${decision}! ${playerSelection} vs ${computerSelection}`;
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(getWinner(getComputerChoice(i), getComputerChoice(j)));
  }
}
