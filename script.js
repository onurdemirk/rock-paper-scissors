function getComputerChoice() {
  let value = Math.floor(Math.random() * 3);
  switch (value) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

const computer = document.querySelector(".computer");
const finalScore = document.querySelector("#finalScore");
const computerChoiceImg = document.createElement("img");
const computerChoiceText = document.createElement("p");
const gameScore = document.createElement("p");
const scoreMessage = document.querySelector("#scoreMessage");

let disableButtons = () => {
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

let enableButtons = () => {
  buttons.forEach((button) => {
    button.disabled = false;
  });
};

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    playGame(humanChoice);
  });
});

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    computerChoiceImg.src = `/img/${computerChoice}.png`;
    computerChoiceImg.alt = `${computerChoice}`;
    computerChoiceText.textContent = `Computer chooses: ${computerChoice
      .charAt(0)
      .toUpperCase()}${computerChoice.slice(1)}`;
    gameScore.textContent = "It's a draw";
    finalScore.textContent = "";
    computer.appendChild(finalScore);
    computer.appendChild(computerChoiceImg);
    computer.appendChild(computerChoiceText);
    computer.appendChild(gameScore);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    computerChoiceImg.src = `/img/${computerChoice}.png`;
    computerChoiceImg.alt = `${computerChoice}`;
    computerChoiceText.textContent = `Computer chooses: ${computerChoice
      .charAt(0)
      .toUpperCase()}${computerChoice.slice(1)}`;
    gameScore.textContent = `You win! ${humanChoice} beats ${computerChoice}, choose again!`;
    computer.appendChild(computerChoiceImg);
    computer.appendChild(computerChoiceText);
    computer.appendChild(gameScore);
    humanScore++;
  } else {
    computerChoiceImg.src = `/img/${computerChoice}.png`;
    computerChoiceImg.alt = `${computerChoice}`;
    computerChoiceText.textContent = `Computer chooses: ${computerChoice
      .charAt(0)
      .toUpperCase()}${computerChoice.slice(1)}`;
    gameScore.textContent = `You lose! ${computerChoice} beats ${humanChoice}, choose again!`;
    computer.appendChild(computerChoiceImg);
    computer.appendChild(computerChoiceText);
    computer.appendChild(gameScore);
    computerScore++;
  }

  scoreMessage.textContent = `Your Score: ${humanScore} - Computer Score: ${computerScore}`;
}

function playGame(humanChoice) {
  const computerSelection = getComputerChoice();
  playRound(humanChoice, computerSelection);

  if (humanScore === 5) {
    finalScore.textContent = "CONGRATULATIONS! You Win!";
    disableButtons();

    const resetButton = document.createElement("button");
    resetButton.textContent = "Play again?";
    resetButton.style.cursor = "pointer";
    resetButton.addEventListener("click", resetGame);

    computerChoiceImg.src = "";
    computerChoiceImg.alt = "";
    computerChoiceText.textContent = "";
    gameScore.textContent = "";

    computer.appendChild(finalScore);
    computer.appendChild(resetButton);
  } else if (computerScore === 5) {
    finalScore.textContent = "GAME OVER! Computer Wins!";
    disableButtons();

    const resetButton = document.createElement("button");
    resetButton.textContent = "Try again?";
    resetButton.style.cursor = "pointer";
    resetButton.addEventListener("click", resetGame);

    computerChoiceImg.src = "";
    computerChoiceImg.alt = "";
    computerChoiceText.textContent = "";
    gameScore.textContent = "";

    computer.appendChild(finalScore);
    computer.appendChild(resetButton);
  }
}

let resetGame = (event) => {
  humanScore = 0;
  computerScore = 0;

  computerChoiceImg.src = "";
  computerChoiceImg.alt = "";
  computerChoiceText.textContent = "";
  gameScore.textContent = "";
  finalScore.textContent = "";
  scoreMessage.textContent = `Your Score: ${humanScore} - Computer Score: ${computerScore}`;

  const resetButton = event.target;
  resetButton.remove();

  enableButtons();
};
