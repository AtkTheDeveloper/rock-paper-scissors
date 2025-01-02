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
        let userChoice = e.target.textContent;
        choice(userChoice);
    })
}
}

let humanScore = 0;
let computerScore = 0;

function playGame(){

    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            div.textContent = "It is a tie";
        } 
        else if(humanChoice === "PAPER" && computerChoice === "ROCK" || humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "PAPER"){
            humanScore++;
            div.textContent = `You win! You chose: ${humanChoice} and Computer chose: ${computerChoice}. ${humanChoice} beats ${computerChoice}.`;
        }
        else{
            computerScore++;
            div.textContent = `You lose! You chose: ${humanChoice} and Computer chose: ${computerChoice}. ${computerChoice} beats ${humanChoice}.`;
        }
    }
    //Round 1
    getHumanChoice((userChoice) => {
        const humanSelection1 = userChoice;
        const computerSelection1 = getComputerChoice();
        console.log(playRound(humanSelection1, computerSelection1));
    });

    // //Round 2
    //  const humanSelection2 = getHumanChoice();
    //  const computerSelection2 = getComputerChoice();
    //  console.log(playRound(humanSelection2, computerSelection2));

    // //Round 3
    // const humanSelection3 = getHumanChoice();
    // const computerSelection3 = getComputerChoice();
    // console.log(playRound(humanSelection3, computerSelection3));

    // //Round 4
    //  const humanSelection4 = getHumanChoice();
    //  const computerSelection4 = getComputerChoice();
    //  console.log(playRound(humanSelection4, computerSelection4));

    // //Round 5
    // const humanSelection5 = getHumanChoice();
    // const computerSelection5 = getComputerChoice();
    // console.log(playRound(humanSelection5, computerSelection5));

    // alert(`Your total score is: ${humanScore} and computer's score is: ${computerScore}.`)

    // if(humanScore > computerScore){
    //     alert("Hurray! You won the game");
    // } else{
    //     alert("Sorry you lost! Computer Won");
    // }
}

playGame();