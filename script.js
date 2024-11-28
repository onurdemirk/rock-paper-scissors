function getComputerChoice() {
    let value = Math.floor(Math.random() * 3);
    switch(value) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;    
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

console.log(getComputerChoice());
console.log(getHumanChoice());