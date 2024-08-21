function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * 3)];
        
    }
    

    function getHumanChoice() {
        let choice = prompt("Enter your choice (rock/paper/scissors):").toLowerCase();
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            return choice;
        } else {
            return "invalid choice";
        }
    }

    function playRound() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log("Computer choice:", getComputerChoice());

        if (humanChoice === "invalid choice") {
            console.log("Invalid choice, the round is skipped.");
            return;
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    console.log("Final Scores:");
    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);

    if (humanScore > computerScore) {
        console.log("Congratulations, you won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, the computer won the game.");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();