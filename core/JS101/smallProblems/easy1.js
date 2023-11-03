const rl = require("readline-sync");

/*
11:44 - 48
input - integer ( positive, negative, or zero), valid integer value
output - boolean (true)

-checks if the interger's absolute valid is odd 
- use modulo to check if a number is odd 
- if so return true else return false
test
-1 => 1 mod 2 => 1 => odd 
0 => 0 node 2 => 0 => even
*/

// function isOdd(num) {
//   return Math.abs(num) % 2 === 1;
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// 11:51

/*
11:58

-loop from 1 to 100 
  - check for odd number
    - log the odd number 
11:59
*/
// function logOdd() {
//   for (let count = 1; count <= 99; count++) {
//     if (count % 2 === 1) {
//       console.log(count);
//     }
//   }
// }
// logOdd();

//12.02

// function logEven() {
//   for (let count = 2; count <= 99; count += 2) {
//     console.log(count);
//   }
// }
// logEven();

/*
12.07
-input: integers for length and width
-output - nunbers in both meters2 and feet2

-prompt the user for a width
-prompt the user for a length
-multiply the length and width to get area in meters
-log the area
-convert to area to feet
-log the area
12:13
*/
// function getArea(lengthMeters, widthMeters) {
//   let areaMeters = lengthMeters * widthMeters;
//   let areaFeet = (areaMeters * SQMETER_TO_SQFEET).toFixed(2);
//   console.log(`The area is ${areaMeters} square meters or ${areaFeet} square feet`);
// } 

// function getInput(msg) {
//   return rl.question(msg);
// }

// const SQMETER_TO_SQFEET = 10.7639;
// const lengthMeters = parseFloat(getInput("Enter length in meters: "));
// const widthMeters = parseFloat(getInput("Enter width in meters: "));

// getArea(lengthMeters, widthMeters);
//12:22

/*
12:51
-input: numbers

function getInput (msg)
  -prompt (msg) 
  -return input
  
delcare and initi billAmt to return value of call getInput for bill amount
declare and initi tipRate to retur value of call getInput for tip rate

function getTipTotal (billAmt, tipRate)
  - tip = billAmt * tipRate / 100 
  - log tip
  - total =billAmt + tip
  - log total
  
call getTipTotal 
- output: log the tip and total bill

1:02
*/

// function getInput(msg) {
//   return rl.question(msg);
// }

// //outputs are string so make sure to coerce to numbers witl decimals, parseFloat
// const billAmt = parseFloat(getInput("Enter bill amount: ")); 
// const tipRate = parseFloat(getInput("Enter tip rate (percentage): "));

// function displayTipTotal(billAmt, tipRate) {
//   let tip = billAmt * (tipRate / 100);//toFixed takes in a number and returns a string
//   let total = billAmt + tip
//   console.log(`The tip is $${tip.toFixed(2)} and the total is $${total.toFixed(2)}`);
// }

// displayTipTotal(billAmt, tipRate);
//1:20

/*
1:25
- input: number > 0
- input: '+' or '*'

- function getValidRange
  - declare init num = Number(prompt) 
  - while num is not > 0 
    -prompt
  - return string of input

-function getValidOperation
  - decalre init op = prompt
  - while prompt is not 's' and not 'p'
    -prompt
  -return op

- declare init endRange to a number 
- declare init operation to a char

- function getCal
  - input: ending number, string of operation
  - declare init curVal = 0
  - loop through range 
      if "p"
        timesNum(curVal, curCount)
      if ('s')
        addNum(curVal, curCount)
  - logs the range and the calculation
  
  function addNum 
   - takes in a num
   - returns curent num + num;
  
  function timesNum
   - takes in a num 
   - return current num * num
   
   call get Cal, pass in endRange and operation
*/

// function getValidRange() {
//   let num = Number(rl.question("Enter an integer greater than 0: "));
//   while (num <= 0) {
//     num = Number(rl.question("Enter an integer greater than 0: "));
//   }
//   return num;
// }

// function getValidOperation() {
//   let operation = rl.question("Enter 's' for sum or 'p' for product: ");
//   while (operation !== 's' && operation !== 'p') {
//     operation = rl.question("Enter 's' for sum or 'p' for product: "); 
//   }
//   return operation;
// }

// const operation = getValidOperation(); //string
// const endRange = getValidRange();

// function getCal (operation, endRange) {
//   let curVal;
//   let operationMark;
//   if (operation === 's') {
//     operationMark = 'sum' ;
//     curVal = 0;
//     } else {
//       operationMark = 'product';
//       curVal = 1;
//     }
//   for (let range = 1; range <= endRange; range++) {
//     if (operation === 's') curVal = add(curVal, range);
//     if (operation === 'p') curVal = product(curVal, range);
//   }
//   console.log(`The ${operationMark} of the integers between 1 and ${endRange} is ${curVal}`);
// }

// function add (curVal, curNum) {
//   return curVal + curNum;
// }

// function product (curVal, curNum) {
//   return curVal * curNum;
// }

// getCal(operation, endRange);
//2:13

/*
3:22
- input: number
  - getValidRange
    -prompt for number
    - while not num > 0
      - prompt 
   - returns num 
  -getValidOperation
    return operations (char)
  - declare init nums to return value of getValidNums
  - declare init operation to return value of getValidOperations
  - displayCal, input: nums, operation 
    - declare init numArray to the return value of getArrayNum; 
    - declare init total to the return value of calling reduce on num, input cb
    - delcare init operation check operation and return string value
  - cb input: operation,acc, cur
    if operation is 's' 
      acc + cur
    else 
      acc * cur
  - getArrayNum, input: endRange
    - declare init empty array;
    - loop from 1 to endrange 
      - push num to array
    - return array
  call dislplayCal, input: operation and nums
- output: logs calculation and operation
*/

// function getValidEndRange() {
//   let endRange = Number(rl.question("Enter integer greater than 0: "));
//   while (endRange <= 0 || Number.isNaN(endRange) ) {
//     endRange = rl.question("Enter integer greater than 0: ");
//   }
//   return endRange;
// }

// function getValidOperation() {
//   let operation = rl.question("Enter 's' for sum or 'p' for product: ");
//   while (operation !== 's' && operation !== 'p') {
//     operation = rl.question("Enter 's' for sum or 'p' for product: ");
//   }
//   return operation;
// }

// const endRange = getValidEndRange();
// const operation = getValidOperation();

// function displayCal(endRange, operation) {
//   let nums = getArrayNum(endRange); 
//   let initTotal = operation === 's' ? 0 : 1; 
//   let operationStr = operation === 's' ? "sum" : "product";
//   let total = nums.reduce((acc, cur) => cb(operation, acc, cur), initTotal);
//   console.log(`The ${operationStr} of the integers between 1 and ${endRange} is ${total}`);
// }

// function getArrayNum(endRange) {
//   const numArray = [];
//   for (let count = 1; count <= endRange; count++) {
//     numArray.push(count);
//   }
//   return numArray;
// }

// function cb(operation, acc, cur) {
//   return operation === 's' ? acc + cur : acc * cur;
// }

// displayCal(endRange, operation);
//4:10

/*
4:26

- input: two strings
  - get the length of the first string, declare init to str1Length
  - get the length of the second string, declare init to str2Length
  - if str1Length is < str2Length 
    - return str1 + str2 + str1
    - else return str2 + str1 + str2
- return: string
4:32
*/

// function shortLongShort(str1, str2) {
//   let str1Length = str1.length; 
//   let str2Length = str2.length;
//   return str1Length < str2Length ? str1 + str2 + str1 : str2 + str1 + str2; 
// } 

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

//4:17

/*7:15
- occurrs every year that is divisible by 4 ( year % 4 === 0)
- not when year is also divisable by 100 (year % 100 !== 0)
- when year is also evenly divisible by 400 (year % 400 === 0)
- input: number of year
  - divisible by 4 and not divisable by 100
  - or divisible by 4 and not divisable by 100 and divisible by 400
- returns boolean
7:23
*/
// function isLeapYear(year) {
//   if (year >= 1752) {
//     if ((year % 4 === 0 && year % 100 !== 0)
//         || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) return true;
//     return false;
//   } else {
//     if (year % 4 === 0) return true;
//     return false;
//   }
// }
// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

//7:30

/*

- input: number of end range
- declare init sum to 0
- get the consective number within range that are multiples of 3 or 5
    - iterate from 1 to range 
    - check if current number is divisible by 3 or 5 
      - add the current number to sum
- returns: number of sum
7:44
*/

// function multisum(endRange) {
//   let sum = 0;
//   for (let count = 1; count <= endRange; count++) {
//     if (count % 3 === 0 || count % 5 === 0) sum += count;
//   }
//   return sum;
// }
// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168
//7:49

/*
7:59
- input: string
- declare init sum to 0
- iterate through the string
  - if char is  not ' '
    - add the utf value of char to sum
- returns: number of sum
8:02
*/

// function utf16Value(string) {
//   let sum = 0;
//   for (let idx = 0; idx < string.length; idx++) {
//       sum += string.charCodeAt(idx);
//   }
//   return sum;
// }

// console.log(utf16Value('Four score'));         // 984
// console.log(utf16Value('Launch School'));      // 1251
// console.log(utf16Value('a'));                  // 97
// console.log(utf16Value(''));                   // 0

// // The next three lines demonstrate that the code
// // works with non-ASCII characters from the UTF-16
// // character set.
// const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
// console.log(utf16Value(OMEGA));                  // 937
// console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811

//8:10