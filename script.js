const div = document.createElement('div');
document.body.appendChild(div);

function getComputerChoice() {
    let random = (Math.floor(Math.random() * 3));

    if (random === 0) {
        return "ROCK";
    } else if (random === 1) {
        return "PAPER";
    } else if (random === 2) {
        return "SCISSORS";
    }
}

function getHumanChoice(choice) {
    const buttons = document.querySelectorAll('button');
    for (const button of buttons) {
        button.addEventListener('click', (e) => {
            let userChoice = e.target.textContent;
            choice(userChoice.toUpperCase());
        });
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            div.textContent = "It is a tie";
        }
        else if (humanChoice === "PAPER" && computerChoice === "ROCK" || humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "PAPER") {
            humanScore++;
            div.textContent =`You win!`;
        }
        else {
            computerScore++;
            div.textContent =`You lose!`;
        }
    }
    //Round 1
    getHumanChoice((humanSelection1) => {
        const computerSelection1 = getComputerChoice();
        playRound(humanSelection1, computerSelection1);
    });

//Round 2
getHumanChoice((humanSelection2) => {
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);
});

//Round 3
getHumanChoice((humanSelection3) => {
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);
});

//Round 4
getHumanChoice((humanSelection4) => {
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);
});

//Round 5
getHumanChoice((humanSelection5) => {
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);
});

}
playGame();