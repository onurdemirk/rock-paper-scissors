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
        console.log("Scoreless!!!!");
    }

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore += 1;

    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore += 1;

    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore += 1;

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore += 1;

    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
    } 
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

function playGame() {

    while(humanScore !== 5 && computerScore !== 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === 5) {
         console.log("You Win!");
    } else if (computerScore == 5) {
         console.log("Computer Win!");
}
}

playGame();