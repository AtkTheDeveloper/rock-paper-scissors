const div = document.createElement('div');
document.body.appendChild(div);

function getComputerChoice(){
    let random = (Math.floor(Math.random() * 3));

    if(random === 0){
        return "ROCK";
    } else if(random === 1){
        return "PAPER";
    } else if(random === 2){
        return "SCISSORS";
    }
}

function getHumanChoice(choice){
    const buttons = document.querySelectorAll('button');
    for(const button of buttons){
    button.addEventListener("click", (e) => {
        const userChoice = e.target.textContent;
        choice(userChoice);
    }, {once: true});
}
}

let humanScore = 0;
let computerScore = 0;
let round = 1;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        div.textContent = `Round ${round}: It is a tie!`;
    } 
    else if(humanChoice === "PAPER" && computerChoice === "ROCK" || humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        humanScore++;
        div.textContent = `Round ${round}: You Win`;
    }
    else{
        computerScore++;
        div.textContent = `Round ${round}: You Lose!`;
    }
}

function playGame(){

    if(round > 5){
        if(humanScore > computerScore){
            div.textContent = `Your total score is: ${humanScore} and computer's score is: ${computerScore}. Hurray! You won the game`;
        } else{
            div.textContent = `Your total score is: ${humanScore} and computer's score is: ${computerScore}. Sorry you lost! Computer Won`;
        }
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.disabled = true);
        return;
    }


    //Round 1
    getHumanChoice((userChoice) => {
        const computerSelection = getComputerChoice();
        playRound(userChoice, computerSelection);
        round++;
        playGame();
    });
}

playGame();