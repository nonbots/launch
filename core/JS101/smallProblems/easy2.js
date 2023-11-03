const rl = require("readline-sync");
/*
2:49
- input: array - 2 or more elements, object - 2 keys
- use join to print out name
- use dot notation to grab title and occupation values
- output: logs the greating and tile and occupation
*/
// function greetings(array, object) {
//     return `Hello, ${array.join(' ')}! Nice to have a ${object.title} ${object.occupation} around.`;
// }

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
//2:57

/*
- input: string (user name)
    -if string includes a ! 
        log in uppercase
    -else 
        -log normal greeting
- output: string 
*/

// function greet(string) {
//   if (string.includes('!')) {
//     string = string.substring(0,string.length -1);
//     console.log(`HELLO ${string.toUpperCase()}. WHY ARE WE SCREAMING?`)}
//   else {
//     console.log(`Hello ${string}.`);
//   }
    
// }

// function getInput() {
//   return rl.question("What is your first name? ");
// }
// const name = getInput();
// greet(name);

/*
- input: two number
  number1 * number2
- returns: number of sum
*/
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// console.log(multiply(5, 3) === 15); // logs true

// function square(num) {
//   return num ** 2;
// }

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// function getCal(num1, num2) {
//   console.log(`${num1} + ${num2} = ${num1 + num2}`);
//   console.log(`${num1} - ${num2} = ${num1 - num2}`);
//   console.log(`${num1} * ${num2} = ${num1 * num2}`);
//   console.log(`${num1} / ${num2} = ${num1 / num2}`);
//   console.log(`${num1} % ${num2} = ${num1 % num2}`);
//   console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
// }

// const num1 = Number(rl.question("Enter the first number: ")); 
// const num2 = Number(rl.question("Enter the second number: "));

// getCal(num1, num2);

/*
3:51
- input: string
  - create an array of word
  - get value at second last index of array
- returns second last word
*/

// function penultimate(string) {
//   const words = string.split(' ');
//   return words[words.length - 2];
// }

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true
//3:55

/*
- input: any two values
- check if first value is truthy and second value is falsy  or first value is falsy and second values is truthy
  - return true
- returns false
- returns: boolean
*/
///////GO OVER THIS CONCEPT////////
// function xor(num1, num2) {
//   //console.log('r', (num1) || (num2));
//   if ((num1 && !num2) || (!num1 && num2)) return true;
//   return false;
// }

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);


/*
- input: array of values
- declare init empty array result
- iterate through array, starting at index 0, incrementing 2 indices, stop when over array length
  - push current value to result
- returns: array of every even index value
*/

// function oddities(array) {
  // const result = [];
  // for (let idx = 0; idx < array.length; idx += 2) {
  //   result.push(array[idx]);
  // }
  // return result;
  
  // return array.filter((value, idx) => idx % 2 === 0);
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

/*
- input: string
- delcare init place to 1 
- declare and init curValue to 0;
  - loop through the string 
    -get the number of the char
    - get numPlace by multiplying number and place // 1 * 1 = 1, 
    - reassign to curValue by adding numPlace to curValue 
    - increment place by multiplying by 10 
- return: number
*/

// function stringToInteger(string) {
//   let placeVal = 1; 
//   let curVal = 0; 
//   for (let char = string.length - 1; char >= 0; char--) {
//     if (string[char] === '-') {
//       curVal *= -1;
//       console.log('neg', curVal);
//     } else if  (string[char] === '+'){
//       curVal *= 1;
//     } else {
//       let num = (string.charCodeAt(char) - 48) * placeVal;
//       curVal += num;
//       placeVal *= 10;
//     }
//   }
//   console.log(curVal);
//   return curVal;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("-570") === -570); // logs true
// console.log(stringToInteger("+100") === 100); // logs true


//hexadecimalToInteger('4D9f') === 19871;

/*
- input: number
- declare init empty array
- get totalDigit: input: number
  - declare init count to 0
  - while num is greater than 0
    - reassign num to num / 10 42 42/10 = 4 => 1, 4/10 .4 => 2 
    - increment count
  - return count
- get string, input: number, numDigit
   - placeVal = 10 ** (numDigit - 1)  
   - while (number > 0) 
    - get digit = floor 4321 / place
    - push digit to empty arry 
    - divide placeVal return array
    
- call fromCharCode(...array) logs string 
- output: string

*/
// function getTotalDigit(number) {
//   let count = 0;
//   while (number > 0) {
//     number = Math.floor(number / 10);
//     count++;
//   }
//   return count;
// }

// function numberToString(totalDigit, number) {
//   let placeVal = 10 ** (totalDigit - 1);
//   const digits = [];
//   while (number < 0) {
//     number = Math.floor(number / placeVal); 
//     let codeNum = String.fromCharCode(number);
    
//   }
// }
// //console.log(getTotalDigit(30805));
// console.log(String.fromCharCode(1));

// const obj = {
//   0: "0",
//   1: "1", 
//   2: "2", 
//   3: "3", 
//   4: "4",
//   5: "5", 
//   6: "6",
//   7: "7",
//   8: "8", 
//   9: "9"
// }

// function integerToString(num) {
//   let nums = [];
//   if (num === 0) return obj[0];
//   let absNum = Math.abs(num);
//   while (absNum > 0) { 
//     let digit = absNum % 10; 
//     let stringDigit = obj[digit];
//     nums.unshift(stringDigit);
//     absNum = Math.floor(absNum / 10); 
//   }
//   let string = nums.join('');
//   return num < 0 ? string = "-" + string : string = "+" + string;
// }

// console.log(integerToString(4321));        // "4321"
// console.log(integerToString(0));           // "0"
// console.log(integerToString(5000));        // "5000"
// console.log(integerToString(1234567890)); // "1234567890"

// console.log(integerToString(4321) === "+4321");
// console.log(integerToString(-123) === "-123");
// console.log(integerToString(0) === "0");