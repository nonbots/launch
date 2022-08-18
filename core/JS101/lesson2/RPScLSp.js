// VARIABLES AND CALLS
const RL = require('readline-sync');
const MSG = require('./RPScLSp_messages.json');

const CHOICES = ['r', 'sc', 'p', 'l', 'sp'];
let scoreBoard = {
  comp: 0,
  user: 0
};
let newGame;
let roundNumber = 1;

console.clear();
displayMessage(MSG.welcome);

do {
  while (scoreBoard.comp < 5 && scoreBoard.user < 5) {
    let userChoice = getValidChoice(getInput, roundNumber);
    let compChoice = getRandomChoice(CHOICES);
    let roundRes = getRoundRes(compChoice, userChoice, createRoundRes);
    updateScore(roundRes, scoreBoard);
    displayRoundRes(roundRes, scoreBoard);
    roundNumber++;
  }
  console.clear();
  displayGameRes(scoreBoard);
  newGame = getValidNewGame(getInput);
  scoreBoard.comp = 0;
  scoreBoard.user = 0;
  roundNumber = 1;
} while (newGame === 'y');

// FUNCTIONS
function getRoundRes(compChoice, userChoice,cb) {
  if (compChoice === userChoice) {
    return cb('none', compChoice, userChoice, "It's a tie!");
  } else if ((compChoice === 'r' && userChoice === 'p') ||
            (compChoice === 'r' && userChoice === 'sp') ||
            (compChoice === 'sc' && userChoice === 'r') ||
            (compChoice === 'sc' && userChoice === 'sp') ||
            (compChoice === 'p' && userChoice === 'sc') ||
            (compChoice === 'p' && userChoice === 'l') ||
            (compChoice === 'l' && userChoice === 'r') ||
            (compChoice === 'l' && userChoice === 'sc') ||
            (compChoice === 'sp' && userChoice === 'l')) {
    return cb('user', compChoice, userChoice, "You won!");
  } else {
    return cb('computer', compChoice, userChoice, "You lost!");
  }
}

function displayGameRes(scoreBoard) {
  if (scoreBoard.comp > scoreBoard.user) {
    console.log(`${MSG.resDas} You lost! Better luck next time ${MSG.resDas}
    Computer score: ${scoreBoard.comp} Your score: ${scoreBoard.user}`);
  } else {
    console.log(`${MSG.resDas} Congratulations! You Won! ${MSG.resDas}
    Computer score: ${scoreBoard.comp} Your score: ${scoreBoard.user}`);
  }
}

function displayRoundRes(rdRes,scoreBoard) {
  let lb1 = 'Computer Choice:';
  let lb2 = 'Your Choice:';
  console.log(`=> ${lb1} ${rdRes.compChoice} ${lb2} ${rdRes.userChoice}
   Result: ${rdRes.message}
   Computer Score: ${scoreBoard.comp} Your Score: ${scoreBoard.user}`);
}

function updateScore(roundRes, scoreBoard) {
  if (roundRes.winner === 'computer') {
    scoreBoard.comp += 1;
  } else if (roundRes.winner === 'user') {
    scoreBoard.user += 1;
  }
}

function getValidChoice(cb, roundNumber) {
  console.log(`${MSG.rdDas} ROUND ${roundNumber} ${MSG.rdDas}`);
  let choice = cb(MSG.shoot, displayMessage);
  while (choice !== 'l' && choice !== 'r' && choice !== 'p' &&
  choice !== 'sc' && choice !== 'sp') {
    choice = cb(MSG.invalidShoot, displayMessage);
  }
  return choice;
}

function getValidNewGame(cb) {
  let newGame = cb(MSG.newGame, displayMessage);
  while (newGame !== 'y' && newGame !== 'n') {
    newGame = cb(MSG.invalidNewGame, displayMessage);
  }
  console.clear();
  return newGame;
}

function getRandomChoice(COMP_CHOICES) {
  return COMP_CHOICES[Math.floor(Math.random() * COMP_CHOICES.length)];
}

// HELPER FUNCTIONS
function createRoundRes(winner, compChoice, userChoice, message) {
  let roundRes = {};
  roundRes['winner'] = winner;
  roundRes['compChoice'] = compChoice;
  roundRes['userChoice'] = userChoice;
  roundRes['message'] = message;
  return roundRes;
}

function getInput(message, cb) {
  cb(message);
  return  RL.question();
}

function displayMessage(message) {
  console.log(`=> ${message}`);
}

