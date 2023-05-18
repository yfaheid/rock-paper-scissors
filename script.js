function getComputerChoice() {
    const number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        return 'Rock';
    }
    else if (number === 2) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function playRound() {
    playerSelection = prompt('What is your choice?');
    computerSelection = getComputerChoice();
    if (computerSelection === 'Rock' && playerSelection.toLowerCase() === 'paper') {
        return result = 'You win! Paper beats rock';
    }
    else if (computerSelection === 'Paper' && playerSelection.toLowerCase() === 'scissors') {
        return result = 'You win! Scissors beats paper';
    }
    else if (computerSelection === 'Scissors' && playerSelection.toLowerCase() === 'rock') {
        return result = 'You win! Rock beats scissors';
    }
    else if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        return result = 'It\'s a tie!';
    }
    else {
        return result = 'You lose';
    }
}

function game() {
    let winCounter = 0;
    let loseCounter = 0;
    let tieCounter = 0;

    playRound();
    if (result.includes('win')) {
        winCounter++;
    }
    else if (result.includes('lose')) {
        loseCounter++;
    }
    else {
        tieCounter++;
    }
    playRound();
    if (result.includes('win')) {
        winCounter++;
    }
    else if (result.includes('lose')) {
        loseCounter++;
    }
    else {
        tieCounter++;
    }
    playRound();
    if (result.includes('win')) {
        winCounter++;
    }
    else if (result.includes('lose')) {
        loseCounter++;
    }
    else {
        tieCounter++;
    }
    playRound();
    if (result.includes('win')) {
        winCounter++;
    }
    else if (result.includes('lose')) {
        loseCounter++;
    }
    else {
        tieCounter++;
    }
    playRound();
    if (result.includes('win')) {
        winCounter++;
    }
    else if (result.includes('lose')) {
        loseCounter++;
    }
    else {
        tieCounter++;
    }
    
    if (winCounter > loseCounter) {
        return 'you win';
    }
    else if (winCounter === loseCounter) {
        return 'it\'s a tie'
    }
    else {
        return 'you lose';
    }
}
