function getComputerChoice(){
    let random = (Math.floor(Math.random() * 3));

    if(random === 0){
        return "Rock";
    } else if(random === 1){
        return "Paper";
    } else if(random === 2){
        return "Scissors";
    }
}
console.log(getComputerChoice());

function getHumanChoice(){
    let userChoice = prompt("Enter Your Choice");

   return userChoice.toUpperCase();
}
console.log(getHumanChoice());

