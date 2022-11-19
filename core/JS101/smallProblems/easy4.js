const rl = require('readline-sync');

/*
- generate random number from 20 to 120 inclusive

input: none
- math random generates random decimal from 0 to 1(exclusive)? 
- multiplying the number would scale the result from 1 to number being multiplied - 1
- (0 * 101) + 20 => get numbers from 20 to 120
output: string
*/
// function logAge() {
//   let age = Math.floor(Math.random() * 101) + 20;
//   console.log(`Teddy is ${age} years old!`);  
// }

// logAge();

/*
- find if last number matches with the pervious numbers

input: seperate numbers
output: logs a string of the last number and the previous numbers

function getNums
  - return array of nums 
function searh - passes in nums
  - check if last num in array is equal previous elements
    -declare init last element with pop
    -call include on nums and pass in last element, assign return value to isFound
  - log string  
    - if found log number appears else number does not appear
*/

// function getInputs() {
//     const nums = [];
//     for (let idx = 1; idx <= 6; idx++) {
//       nums.push(rl.question(`Enter the ${idx} number: `));    
//     }
//   return nums;
// }

// const nums = getInputs();

// function search(nums) {
//   const lastNum = nums.pop();
//   const isFound = nums.includes(lastNum);
//   if (isFound) {
//     console.log(`The number ${lastNum} appears in ${nums.toString()}`);
//   } else {
//     console.log(`The number ${lastNum} does not appear in ${nums.toString()}`);
//   }
// }

// search(nums);


/*
input: age - number, age to retire - number
output: string - current year, year to retire and number of years

function getInput
  -returns number
  
function displayRetirementPlan
  -use Date to get currentYear 
  - get yearsToRetirement: age to retire - current age
  -get retirementYear: current year + years to retirement
*/

// const age =  Number(rl.question("What is your age? "));
// const retireAge = Number(rl.question("At what age would you like to retire? "));

// function retirementPlan(age, retireAge) {
//   const curYear = new Date().getFullYear();
//   console.log(typeof curYear);
//   const yearsToRetire = retireAge - age;
//   const retireYear= curYear + yearsToRetire;
//   console.log(`It's ${curYear}. You will retire in ${retireYear}. You have only ${yearsToRetire} years of work to go!`);
// }

// retirementPlan(age, retireAge);

/*
- all characters matter

input: string
output: bolean

-use reverse 
-compare orginal and reverse string
*/

// function isPalindrome(inputString) {
//   return inputString === inputString.split('').reverse().join('');
// }
// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

/*
define is RealPalindrome (string)
  - reassign string to lowercase chars 
  - calls getAlphaNumVal(string) and reassigns value to string
  - calls isPalindrome (string) return boolean value 

define getAlphaNumVal(string)
  - filter for char only chars that are from a to z and  char from 0 to 9 joins chars 
  - returns string
*/

// function getAlphaNumVal(string) {
//   return string.split('').filter(isAlphaNumValCb).join('');
// }

// function isAlphaNumValCb(char) {
//   return (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')
// }

// function isPalindrome(inputString) {
//   return inputString === inputString.split('').reverse().join('');
// }

// function isRealPalindrome(inputString) {
//   inputString = inputString.toLowerCase();
//   inputString = getAlphaNumVal(inputString);
//   return isPalindrome(inputString);
// }

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

/*
turn number into strings
*/

// function isPalindromicNumber(num) {
//   return num === Number(num.toString().split('').reverse().join(''));
// }

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

/*

input: array of nums
output: new array of nums

-declare init empty array result
-declare init total = 0;
-iterate through array
  - add current number to total
  - push to result
return result;
*/

// function runningTotal(nums) {
//   const result = [];
//   let total = 0; 
//   for (let idx = 0; idx < nums.length; idx++) {
//     total += nums[idx];
//     result.push(total);
//   }
//   return result;
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []

/*
input: string
output: object - keys(word lengths) and values(occurances)

-get words
-declare init empty object
-iterate through words
  -get length of word
  -check if length exists in object if not
    - add length as key and value of 1
  -else
    -increment value by one
*/

function wordSizes(string) {
  const obj = {};
  if (string.length === 0) return obj;
  const words = string.split(' ');
  for (let idx = 0; idx < words.length; idx++) {
    let curWord = words[idx];
    let curWordLength = findWordLength(curWord);
    if (curWordLength in obj) {
      obj[curWordLength] += 1;
    } else {
      obj[curWordLength] = 1;
    }
  }
  return obj;
}

/*
get the an array of chars
find if the words contains a non letter char 
`iterate through the char to check if current char is a non letter 
` return true
return false
*/
// function findWordLength(word) {
//   let chars = word.toLowerCase().split('');
//   return chars.filter(char => char >= 'a' && char <= 'z').length
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}


/*
input: string
output: reversed string

- get words
- declare init result array
- iterate through words
 - reverse word
 - push reversed word to result
- return result as a string
*/

function swap (string) {
  const words = string.split(' ');
  let result = [];
  for (let idx = 0; idx < words.length; idx++) {
    result.push(swapWord(words[idx]));
  }
  return result.join(' ');
}

function swapWord(word) {
  const chars = word.split('');
  for (let idx = 0; idx < Math.floor(word.length/2); idx++) {
    let firstChar = chars[idx];
    let firstIdx = idx;
    let secondIdx = chars.length - (idx + 1);
    let secondChar = chars[secondIdx];
    let temp = firstChar;
    chars[firstIdx] = secondChar;
    chars[secondIdx] = temp;
  }
  return chars.join('');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"