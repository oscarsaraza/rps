import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

rl.question("Rock, Paper, or Scissors? ", (answer) => {
  const result = roundResult(answer, getComputerChoice());
  console.log(result);
  rl.close();
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

function roundResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}
