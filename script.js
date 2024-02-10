function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0){
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}


function singleRound(computerChoice, userChoice) {
  if (computerChoice === userChoice){
    return "Tie! You chose the same as computer"
  } else if (userChoice === "rock"){
    if (computerChoice === "scissors"){
      userScore++;
      return "You Win! Rock beats Scissors"
    } else if (computerChoice === "paper"){
      computerScore++;
      return "You Loose! Paper beats Rock"
    }
  } else if (userChoice === "paper"){
    if (computerChoice === "rock"){
      userScore++;
      return "You Win! Paper beats Rock"
    } else if (computerChoice === "scissors"){
      computerScore++;
      return "You Loose! Scissors beats Paper"
    } 
  } else if (userChoice === "scissors"){
    if (computerChoice === "rock"){
      computerScore++;
      return "You Loose! Rock beats Scissors"
    } else if (computerChoice === "paper"){
      userScore++;
      return "You Win! Scissors beats Paper"
    }
  }
}
