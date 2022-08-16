// VARIABLES AND CALLS
const rl = require('readline-sync');

const messages = require('./calculator_messages.json'); 

prompt(messages.en.welcome + '\n' + messages.en.pickLanguage + '\n');
prompt(messages.fr.welcome + '\n' + messages.fr.pickLanguage);

let language = rl.question(); 
language = validateLanguage(language, requestValidInput); 

let newCalInput;

/*
runs calculator and getValidInput once before evaluting condition
loops through statements if user choose to do a new calculation
*/
do {
  calculator(); 
  newCalInput = getValidInput(messages[language].newCal, validateNewCal)
} while (newCalInput === 'y'); 

// FUNCTIONS
/*
prompts the user for an input
returns a valid input based on the callback
*/
function getValidInput(message, cb) {
  prompt(message); 
  let input = rl.question(); 
  return cb(input, requestValidInput); 
}

/*
retieves valid numbers and operation to be passed to getCalculation
log the result in the console
*/
function calculator() {
  let num1 = getValidInput(messages[language].firstNumber, validateNum);
  let num2 = getValidInput(messages[language].secondNumber, validateNum);
  let operation = getValidInput(messages[language].operation, validateOperation);
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
  return output;
}

// HELPER FUNCTIONS
//prompts user user input until 'en' or 'fr' is returned
function validateLanguage(input, cb) {
  while (input !== 'en' && input !== 'fr') {
    input = cb(messages.en.invalidLanguage + '\n' + messages.fr.invalidLanguage); 
  }
  return input;
}
// prompts user input until 'y' or 'n' ir returned
function validateNewCal(input, cb) {
  while (input !== 'n' && input !== 'y') {
    input = cb(messages[language].invalidNewCal);
  }
  return input; 
}

// prompts user input until a number is returned
function validateNum(num, cb) {
  while (isNaN(num) || num.trim() === "") {
    num = cb(messages[language].invalidNumber);
  }
  return Number(num);
}

// prompts user input until '+', '-', '/', or '*' is returned
function validateOperation(operation, cb) {
  while (operation !== '*' &&
        operation !== '/' &&
        operation !== '-' &&
        operation !== '+') {
    operation = cb(messages.invalidOperation);
  }
  return operation;
}

// prompts the user for an input and returns user input
function requestValidInput(message) {
  prompt(message);
  return rl.question();
}

//logs the message to the user with a marker
function prompt(message) {
  console.log(`=> ${message}`);
}