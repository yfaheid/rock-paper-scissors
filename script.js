function getComputerChoice() {
    const number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        return 'rock';
    }
    else if (number === 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'rock' && playerSelection === 'paper') {
        result = 'You win! Paper beats rock';
    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        result = 'You win! Scissors beats paper';
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        result = 'You win! Rock beats scissors';
    }
    else if (computerSelection === playerSelection) {
        result = 'It\'s a tie!';
    }
    else {
        result = 'You lose';
    }
    return result;
}

const buttons = document.querySelectorAll('button');
let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0;
const body = document.querySelector('body')
const resultDiv = document.createElement('div')
const scoreDiv = document.createElement('div')


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    resultDiv.textContent = result;
    body.appendChild(resultDiv);
    scoreDiv.textContent = 'wins: ' + winCounter + ' losses: ' + lossCounter + ' ties: ' + tieCounter;
    body.appendChild(scoreDiv);
    if (result.includes('win')) {
        winCounter ++;
    }
    if (result.includes('lose')) {
        lossCounter ++;
    }
    if (result.includes('tie')) {
        tieCounter ++;
    }
    
    if (winCounter == 5) {
        body.textContent = 'You win!';
    }
    if (lossCounter == 5) {
        body.textContent = 'You lose';
    }    
  });
});
