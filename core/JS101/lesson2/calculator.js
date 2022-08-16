// VARIABLES AND CALLS

const rl = require('readline-sync');

prompt('Welcome to Calulator');

let num1 = getNumber('first');

let num2 = getNumber('second');

let operation = getOperation();

let output = getCalculation(num1, num2, operation);

console.log(`Answer: ${num1} ${operation} ${num2} = ${output}`);


// FUNCTIONS

// prompts a user input and returns a valid input, a number
function getNumber(inputValue) {
  prompt('Enter the ' + inputValue + ' number');
  let num = rl.question();
  return validateNum(num, requestValidInput);
}

// prompts a user input and return a valid opertion
function getOperation() {
  prompt(`Enter the operation: 
  Enter '*' for multiply 
  Enter '+' for plus 
  Enter '-' for minus 
  Enter '/' for divide`);
  let operation = rl.question();
  return validateOperation(operation, requestValidInput);
}

// returns the result, a number, after numbers go through operation
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

// prompts user input until a number is returned
function validateNum(num, cb) {
  while (isNaN(num) || num.trim() === "") {
    num = cb('number');
  }
  return Number(num);
}

// prompts user input until '+', '-', '/', or '*' is returned
function validateOperation(operation, cb) {
  while (operation !== '*' &&
        operation !== '/' &&
        operation !== '-' &&
        operation !== '+') {
    operation = cb(operation, 'operation');
  }
  return operation;
}

// prompts the user for input when invalid and returns user input
function requestValidInput(value) {
  prompt('Enter a valid ' + value);
  return rl.question();
}

// logs the message to the user
function prompt(message) {
  console.log(`=> ${message}`);
}
