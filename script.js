let computerScore = 0;
let userScore = 0;

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
    return "Tie! You chose the same as computer."
  } else if (userChoice === "rock"){
    if (computerChoice === "scissors"){
      userScore++;
      return "You Win! Rock beats Scissors."
    } else if (computerChoice === "paper"){
      computerScore++;
      return "You Loose! Paper beats Rock."
    }
  } else if (userChoice === "paper"){
    if (computerChoice === "rock"){
      userScore++;
      return "You Win! Paper beats Rock."
    } else if (computerChoice === "scissors"){
      computerScore++;
      return "You Loose! Scissors beats Paper."
    } 
  } else if (userChoice === "scissors"){
    if (computerChoice === "rock"){
      computerScore++;
      return "You Loose! Rock beats Scissors."
    } else if (computerChoice === "paper"){
      userScore++;
      return "You Win! Scissors beats Paper."
    }
  }
}

function playGame(){
  const container = document.querySelector('.container');

  // buttons
  const rockButton = document.createElement('button');
  rockButton.value = "rock";
  rockButton.textContent = "Rock";
  container.appendChild(rockButton)

  const paperButton = document.createElement('button');
  paperButton.value = "paper";
  paperButton.textContent = "Paper";
  container.appendChild(paperButton)

  const scissorsButton = document.createElement('button');
  scissorsButton.value = "scissors";
  scissorsButton.textContent = "Scissors";
  container.appendChild(scissorsButton)

  
  // Div for text for final result after 5 rounds
  const divFinalText = document.createElement('div');
  container.appendChild(divFinalText);
  divFinalText.style.fontWeight = 'bold';

  // Div for text for each round score
  const divRoundText = document.createElement('div');
  container.appendChild(divRoundText);

  let roundCounter = 1;
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let userChoice = button.value;
      divRoundText.textContent = `Round ${roundCounter++}: 
      ${singleRound(getComputerChoice(), userChoice)}
      The Score is: You: ${userScore} Computer: ${computerScore}`;
      if (computerScore === 5 || userScore === 5){
        buttons.forEach(button => button.disabled = true);
        if (computerScore < userScore){
          divFinalText.textContent = `You won. The Final Score is: You: ${userScore} Computer: ${computerScore}`;
        } else if (computerScore > userScore){
          divFinalText.textContent =`You lost. The Final Score is: You: ${userScore} Computer: ${computerScore}`;
        } else {
          divFinalText.textContent =`There is a tie. The Final Score is: You: ${userScore} Computer: ${computerScore}`;
        }
      };
    });
  });
}

playGame()