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
function playGame(){
  // for (let i = 1; i <= 5; i++){
    // let computerChoice = getComputerChoice();
  //   let userChoice = prompt("What is your choice").toLowerCase();
    
    const rockButton = document.createElement('button');
    rockButton.value = "rock";
    rockButton.textContent = "Rock";
    const paperButton = document.createElement('button');
    paperButton.value = "paper";
    paperButton.textContent = "Paper";
    const scissorsButton = document.createElement('button');
    scissorsButton.value = "scissors";
    scissorsButton.textContent = "Scissors";
    const container = document.querySelector('.container');

    const divText = document.createElement('div');
    
    
   
    container.appendChild(rockButton)
    container.appendChild(paperButton)
    container.appendChild(scissorsButton)

    const divText2 = document.createElement('div');

    container.appendChild(divText2);
    container.appendChild(divText);
    
    divText.style.fontWeight = 'bold';


    let count = 1;
    const buttons = document.querySelectorAll('button')
    // for (let i = 1; i <= 5; i++){
      buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
          let userChoice = button.value;
          divText2.textContent = `Round ${count++}: 
          ${singleRound(getComputerChoice(), userChoice)}
          The Score is: You: ${userScore} Computer: ${computerScore}`;
          
          if (count > 5){
            buttons.forEach(button => button.disabled = true);
            if (computerScore < userScore){
              divText.textContent = `You won after 5 rounds.The Score is: You: ${userScore} Computer: ${computerScore}`;
            } else if (computerScore > userScore){
              divText.textContent =`You lost after 5 rounds. The Score is: You: ${userScore} Computer: ${computerScore}`;
            } else {
              divText.textContent =`There is a tie after 5 rounds. The Score is: You: ${userScore} Computer: ${computerScore}`;
            }
          
          };
        });
      });
    
  }

playGame()