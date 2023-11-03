// VARIABLES AND CALLS
const RL = require('readline-sync');

const MESSAGES = require('./calculator_messages.json');

// intro message
prompt(MESSAGES.en.welcome + '\n' + MESSAGES.en.pickLanguage + '\n');
prompt(MESSAGES.fr.welcome + '\n' + MESSAGES.fr.pickLanguage);

// prompts user input and returns valid language
let lang = RL.question();
lang = validateLanguage(lang, requestValidInput);
let newCalInput;

/*
runs calculator and getValidInput once before evaluting condition
loops through statements if user choose to do a new calculation
*/
do {
  calculator();
  newCalInput = getValidInput(MESSAGES[lang].newCal, validateNewCal);
} while (newCalInput === 'y');

// FUNCTIONS
/*
prompts the user for an input
returns a valid input based on the callback
*/
function getValidInput(message, cb) {
  prompt(message);
  let input = RL.question();
  return cb(input, requestValidInput);
}

/*
retieves valid numbers and operation to be passed to getCalculation
log the result in the console
*/
function calculator() {
  console.clear();
  let num1 = getValidInput(MESSAGES[lang].firstNumber, validateNum);
  let num2 = getValidInput(MESSAGES[lang].secondNumber, validateNum);
  let operation = getValidInput(MESSAGES[lang].operation, validateOperation);
  let output = getCalculation(num1, num2, operation);
  console.log(`Answer: ${num1} ${operation} ${num2} = ${output}`);
}

// returns the result, a number, based on the operation chosen by the user
function getCalculation(input1, input2, operation) {
  let output;
  switch (operation) {
    case '*':
      output = input1 * input2;
      break;
    case '/':
      output = input1 / input2;
      break;
    case '+':
      output = input1 + input2;
      break;
    case '-':
      output = input1 - input2;
      break;
  }
  if (isNaN(output) || output === Infinity) return 'undefined';
  return output;
}

// HELPER FUNCTIONS
//prompts user user input until 'en' or 'fr' is returned
function validateLanguage(input, cb) {
  while (input !== 'en' && input !== 'fr') {
    input = cb(MESSAGES.en.invalidLanguage + '\n' + MESSAGES.fr.invalidLanguage);
  }
  return input;
}
// prompts user input until 'y' or 'n' ir returned
function validateNewCal(input, cb) {
  while (input !== 'n' && input !== 'y') {
    input = cb(MESSAGES[lang].invalidNewCal);
  }
  console.clear();
  return input;
}

// prompts user input until a number is returned
function validateNum(num, cb) {
  while (isNaN(num) || num.trim() === "") {
    num = cb(MESSAGES[lang].invalidNumber);
  }
  return Number(num);
}

// prompts user input until '+', '-', '/', or '*' is returned
function validateOperation(operation, cb) {
  while (operation !== '*' &&
        operation !== '/' &&
        operation !== '-' &&
        operation !== '+') {
    operation = cb(MESSAGES[lang].invalidOperation);
  }
  return operation;
}

// prompts the user for an input and returns user input
function requestValidInput(message) {
  prompt(message);
  return RL.question();
}

//logs the message to the user with a marker
function prompt(message) {
  console.log(`=> ${message}`);
}