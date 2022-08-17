const RL = require('readline-sync');
const MESSAGES = require('./mortgage_calculator.json');

let newCal;

// prompts welcone message
prompt(MESSAGES.welcome);

// executes block once, if user wants make a new calculation then execute block
do {
  // prompts and returns valid loan amount
  let amt = getValidAmt(getInput);
  // prompts and returns valid APR amount
  let apr = getValidAPR(getInput);
  // prompts and returns valid year and month duration
  let yearDur = getValidDur(MESSAGES.yearDur, getInput);
  let monthDur = getValidDur(MESSAGES.monthDur, getInput);
  // while both yearDur and monthDur is 0
  while (yearDur === 0 && monthDur === 0) {
    //logs year and month can not both be 0
    prompt(MESSAGES.invalidYearMonth);
    yearDur = getValidDur(MESSAGES.yearDur, getInput);
    monthDur = getValidDur(MESSAGES.monthDur, getInput);
  }
  // returns monthly payment
  let monthlyPayment = getCalculation(amt, apr, yearDur, monthDur);
  //clears terminal
  console.clear();
  console.log("Monthly payment:", monthlyPayment.toFixed(2));
  // prompts and returns valid input if user want to do a new calculation
  newCal = getValidNewCal(getInput);
  // clears terminal
  console.clear();
  // if the user chooses 'y' continue with a new calculation
} while (newCal === 'y');


// returns the monthly payment
function getCalculation(amt, apr, yearDur, monthDur) {
  let monthlyInterestRate = (apr / 100) / 12;
  let months = (yearDur * 12) + monthDur;
  return  (amt * (monthlyInterestRate /
          (1 - Math.pow((1 + monthlyInterestRate), (-months)))));
}

// prompts the user until a whole and positive number is returned
function getValidAmt(getInput) {
  let amt = getInput(MESSAGES.amt);
  while (Number(amt) < 1 || Number.isNaN(Number(amt)) || amt.trim() === '' ||
    !Number.isInteger(Number(amt))) {
    amt = getInput(MESSAGES.invalidAmt);
  }
  return Number(amt);
}

// prompts the user until a whole and postive number from 0 - 100 is returned
function getValidAPR(getInput) {
  let apr = getInput(MESSAGES.apr);
  while (Number(apr) < 0 || Number(apr) > 100 ||
  !Number.isInteger(Number(apr)) || Number.isNaN(Number(apr)) ||
  apr.trim() === '') {
    apr = getInput(MESSAGES.invalidAPR);
  }
  return Number(apr);
}

// prompts the user until a whole and positive number is returned
function getValidDur(message, getInput) {
  let dur = getInput(message);
  while (!Number.isInteger(Number(dur)) || Number.isNaN(Number(dur)) ||
  dur.trim() === '' || Number(dur) < 0) {
    dur = getInput(MESSAGES.invalidDur);
  }
  return Number(dur);
}

// prompts the user until a 'y' or 'n' is returned
function getValidNewCal(getInput) {
  let newCal = getInput(MESSAGES.newCal);
  while (newCal !== 'y' && newCal !== 'n') {
    newCal = getInput(MESSAGES.invalidNewCal);
  }
  return newCal;
}

// returns the users input
function getInput(message) {
  prompt(message);
  return RL.question();
}

// prompts the user with a message and marker
function prompt(message) {
  console.log(`=> ${message}`);
}