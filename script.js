function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    switch(value) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";   
    }
}

function getHumanChoice() {
    while (true) {
        let userInput = prompt("Choose: Rock, Paper, Scissors ?");
        if (!userInput) {
            alert("Input cannot be empty");
            continue;
        }

        userInput = userInput.toLowerCase();

        if (userInput === "rock" ||  userInput === "paper" || userInput === "scissors") {
            return userInput;
        } else {
            alert("Invalid choice! Please choose Rock, Paper, or Scissors.");
        }
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

function playGame() {

    while(humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === 5) {
         console.log("CONGRATULATIONS! You Win!");
    } else if (computerScore === 5) {
         console.log("GAME OVER! Computer Wins!");
}
}

const button = document.getElementById("button");
button.addEventListener("click", function() {
    playGame()
});