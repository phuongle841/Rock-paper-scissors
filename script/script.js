const choseRock = document.querySelector("#rock");
const chosePaper = document.querySelector("#paper");
const choseScissors = document.querySelector("#scissors");
const decisions = [choseRock, chosePaper, choseScissors];
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
let playerScore = 0;
let computerScore = 0;
let rounds = 5;
function CheckGame(win) {
  if (win === "win") {
    playerScore++;
    updateResultPlayerScore(playerScore);
  } else if (win === "lose") {
    computerScore++;
    updateResultComputerScore(computerScore);
  }
  if (playerScore === rounds || computerScore === rounds) {
    // call the winner
    console.log("working?");
    callOutWinner();
  }
}

function updateComputerInterface(computerSelection) {
  const computer = document.querySelector(".computer");
  computer.textContent = computerSelection;
}
function updateResultBox(winnerSlogan) {
  const resultBox = document.querySelector(".resultBox");
  resultBox.textContent = winnerSlogan;
}
function updateResultPlayerScore(score) {
  const playerScore = document.querySelector(".playerScore");
  playerScore.textContent = score;
  return true;
}
function updateResultComputerScore(score) {
  const playerScore = document.querySelector(".computerScore");
  playerScore.textContent = score;
  return true;
}
function makeWinnerBanner(winner) {
  document.body.innerHTML = "";
  let winnerBanner = document.createElement("p");
  winnerBanner.textContent = `${winner} have win this challenge`;
  document.body.classList.add("winningState");
  document.body.appendChild(winnerBanner);
}
function callOutWinner() {
  let winner = "";
  if (computerScore == 5) {
    winner = `computer`;
  } else {
    winner = `player`;
  }
  makeWinnerBanner(winner);
}
decisions.forEach((decision) => {
  decision.addEventListener("click", (e) => {
    let playerSelection = `${e.target.getAttribute("id")}`;
    let computerSelection = getComputerChoice();
    let win = getWinner(playerSelection, computerSelection);
    let winnerSlogan = `${win}`;
    updateComputerInterface(computerSelection);
    updateResultBox(winnerSlogan);
    CheckGame(win);
  });
});
