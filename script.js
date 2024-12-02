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
console.log(getComputerChoice());

function getHumanChoice(){
    let userChoice = prompt("Enter Your Choice");

   return userChoice.toUpperCase();
}
console.log(getHumanChoice());





function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            return "It is a tie";
        } 
        else if(humanChoice === "PAPER" && computerChoice === "ROCK" || humanChoice === "ROCK" && computerChoice === "SCISSORS" || humanChoice === "SCISSORS" && computerChoice === "PAPER"){
            humanScore++;
            return `You win! You chose: ${humanChoice} and Computer chose: ${computerChoice}. ${humanChoice} beats ${computerChoice}.`;
        }
        else{
            computerScore++;
            return `You lose! You chose: ${humanChoice} and Computer chose: ${computerChoice}. ${computerChoice} beats ${humanChoice}.`
        }
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(playRound(humanSelection, computerSelection));
}
playGame();
playGame();
playGame();
playGame();
playGame();