function getComputerChoice(n) {
  let choice = ["rock", "paper", "scissors"];
  min = 0;
  max = 2;
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return choice[number];
}
function getWinner(playerSelection, computerSelection) {
  let decision = undefined;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        decision = `tie`;
        break;
      case "paper":
        decision = `lose`;
        break;
      case "scissors":
        decision = `win`;
        break;
      default:
        console.log("this is a special case needed to be studied");
        break;
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        decision = `win`;
        break;
      case "paper":
        decision = `tie`;
        break;
      case "scissors":
        decision = `lose`;
        break;
      default:
        console.log("this is a special case needed to be studied");
        break;
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "rock":
        decision = `lose`;
        break;
      case "paper":
        decision = `win`;
        break;
      case "scissors":
        decision = `tie`;
        break;
      default:
        console.log("this is a special case needed to be studied");
        break;
    }
  }
  return decision;
}
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 5;
  while (playerScore != rounds && computerScore != rounds) {
    // let playerSelection = prompt("pick rock, paper, scissors", undefined);
    playerSelection = getComputerChoice();
    let computerSelection = getComputerChoice();
    let win = getWinner(playerSelection, computerSelection);
    console.log(`${win}. ${playerSelection} vs ${computerSelection}`);
    if (win === "win") {
      playerScore++;
    } else if (win === "lose") {
      computerScore++;
    }
    console.log(`player ${playerScore} vs computer ${computerScore}`);
  }
}
game();
