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

console.log(getComputerChoice())

