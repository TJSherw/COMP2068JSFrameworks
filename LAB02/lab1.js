// Lab 02 - creating rock paper sissors

// npm install prompt 

//Use require func to use prompt 

const prompt = require('prompt');

// Make func to create the ciomputer selection 
function generateComputerSelection() {

    // generate a number between 0 and 1 -> so it selects either .35, .68 or above
    const randomValue = Math.random();

    // create if statements for when each option gets selected
    // 0 - .34 for paper
    if (randomValue <= 0.34) {
        return 'PAPER';

    // .35 to .67 using else if
    } else if (randomValue <= 0.67) {
        return 'SCISSORS';
    
    // using else to have anything above .67 be rock 
    } else {
        return 'ROCK';
  }
}

// Function to determine the winner
// pass through user selection and computer generated answer
function whoIsWinner(userSelection, computerSelection) {

    // if they are same
    if (userSelection === computerSelection) {
        return "ITS A TIE!";
    
    // creating an else if for the User to WIN
    } else if (

        // user equal rock & cpu = scissors
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') || // OR

        // usr = paper & cpu = rock
        (userSelection === 'PAPER' && computerSelection === 'ROCK') || // OR

        // usr = scissors & cpu = paper
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        // return user wins
        return 'Congratulations! You Won!';

    } else {
        // return comp wins 
        return 'Sorry, Jarvis Won!';
    }
}

// Start the game
prompt.start();

// asynchronously get user input 
// pass array -> user selection 
// execute error or result
prompt.get(['userSelection'], (error, result) => {

    // I didnt add any Error code 

    // make the users input upper case, so it matches choices
    const userSelection = result.userSelection.toUpperCase();

    // make cpu selection using generate function 
    const computerSelection = generateComputerSelection();

    // design 
    console.log(`************************************`);

    // out output user selection
    console.log(`You have selected: ${userSelection}`);

    // design 
    console.log(`************************************`);

    // cpu selection -> Make cpu name Jarvis 
    console.log(`Jarvis selected: ${computerSelection}`);

    // design 
    console.log(`************************************`);

    // make const for game outcome using who is winner func and passing user select and cpu select
    const gameOutcome = whoIsWinner(userSelection, computerSelection);

    // output outcome 
    console.log(gameOutcome);
});

