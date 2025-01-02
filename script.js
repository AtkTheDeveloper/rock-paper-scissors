const div = document.createElement('div');
document.body.appendChild(div);

function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * 3)];
}

let humanScore = 0;
let computerScore = 0;
let round = 1;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        div.textContent = `Round ${round}: It's a tie! Choose again.`;
        return false; // No round winner, tie needs to be resolved
    } else if (
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        humanScore++;
        div.textContent = `Round ${round}: You Win! ${humanChoice} beats ${computerChoice}.`;
        return true; // Human wins the round
    } else {
        computerScore++;
        div.textContent = `Round ${round}: You Lose! ${computerChoice} beats ${humanChoice}.`;
        return true; // Computer wins the round
    }
}

function handleClick(e) {
    if (round > 5) {
        return; // Prevent further clicks if the game is over
    }

    const userChoice = e.target.textContent;
    const computerSelection = getComputerChoice();

    const hasWinner = playRound(userChoice, computerSelection);

    if (hasWinner) {
        round++; // Only increment the round if there's a winner
    }

    if (round > 5) {
        // Game over: Display final results
        if (humanScore > computerScore) {
            div.textContent += ` Final Score: You ${humanScore} - Computer ${computerScore}. Hurray! You won the game!`;
        } else if (humanScore < computerScore) {
            div.textContent += ` Final Score: You ${humanScore} - Computer ${computerScore}. Sorry, Computer won the game!`;
        } else {
            div.textContent += ` Final Score: You ${humanScore} - Computer ${computerScore}. It's a draw!`;
        }

        // Disable buttons after game ends
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.disabled = true);
    }
}

function playGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener("click", handleClick);
    });
}

playGame();
