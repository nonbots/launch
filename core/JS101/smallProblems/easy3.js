const rl = require("readline-sync");
/*
- get rid of consecutive duplicates
- input: string
- declare init empty string result
- iterate through the string
  - get current string
  - if current string is undefined or not equal to the last char
    - concate to result
- output: new string
*/

// function crunch(string) {
//   let result = "";
//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx] !== result[result.length -1]) {
//       result += string[idx];
//     }
//   }
//   return result;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

/*

- get the length of the string + padding to get length of horizonatal lines
  - add + 
  - iterate through string length + padding
  - add +
  
- add horizontal padding 
  - add |
  - iterate through string length + padding
  - add |
  
- add | to both sides of string + | 

- input: string
- output: new string

*/

// function getHorzLine(end, inBtw, string) {
//   let str = '';
//   str += end;
//   for (let dash = 1; dash <= string.length + 2; dash++) {
//     str += inBtw;
//   }
//   str += end;
//   console.log(str);
// }

// function logInBox(string ) {
//   getHorzLine('+', '-', string);
//   getHorzLine('|', ' ', string);
//   console.log('|', string, '|' );
//   getHorzLine('|', ' ', string); 
//   getHorzLine('+', '-', string);
// }

// logInBox('To boldly go where no one has gone before.');
// logInBox('');

/*
- input: number
- iterate number of times                                     //1,2,3,4,5 => 1 % 2 = 1, 0, 1, 0, 1
  - get array value at index 0 then 1 cyle back to 0 then 1   //0,1,0,1,0
  - concate alternating 0 or 1, starting with 1
- output: string
*/

// function stringy(length) {
//   let result = '';
//   for (let count = 1; count <= length; count++) {
//     let charNum = String(count % 2);
//     result += charNum;
//   }
//   return result;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

/*'
- first two numbers 1, 1 are by definition
- each subsequent num is the sum of the previous two

- input: nth fib num (bigInt), always an integer greater or equal to two 
  - declare init count to 2
  1: 1, n1 = 1
  2: 1, n2 = 1 
  3: 1 + 1 = 2, fib = n1 + n2 n1 = n2, n2 = fib, count++ fib digits is < than length loop
- returns bigInt number

*/


/* 
- chars include " " and stars
- outer loop creates the number of rows
- inner loop create the number of stars starign with 1 an increments by one each time
- the reverse is true for spaces stars with 4 and decrements by one each time

- input: number of rows 
- output: string of stars with number of rows

- iterate through nth times 
  - iterate each char in row add ' ' starting at 1 and ending at nth number - nth times
    -log " "
  - iterate each char in row add '*' starting at 1 and ending at nth times
    - log '*'
*/

// function triangle(totalRows) {
//   for (let row = 1; row <= totalRows; row++) {
//     let str = '';
//     for (let space = 1; space <= totalRows - row; space++) {
//       str += ' ';
//     }
//     for (let star = 1; star <= row; star++) {
//       str += '*';
//     }
//     console.log(str);
//   }
// }

// triangle(5);
// triangle(9);

/*
- getInput from user 
- declare init noun, verb, adjective, abverb
- display mablib

- input: string - noun, verb, adjective, adverb
- output: sting - madlib
*/

// function getInput(msg) {
//   return rl.question(msg);
// }
// const noun = getInput("Enter noun: ");
// const verb = getInput("Enter verb: ");
// const adj = getInput("Enter adjective: ");
// const adverb = getInput("Enter adverb: "); 

// function displayML(noun, verb, adj, adverb) {
//   console.log(`Do you ${verb} your ${adj} ${noun} ${adverb}? That's hilarious!`);
//   console.log(`The ${noun} ${verb}s ${adverb} over the lazy ${noun}`);
//   console.log(`The ${noun} ${adverb} ${verb}s up blue Joe's turtle`);
// }
// displayML(noun, verb, adj, adverb);

/*
- even length number, left and right side are the same
- double the  nummber if not double number 

- determine if the number is a double, if is double  
  - if length is even && if the right side is the same as the left side
    - return number

-determine if the right side is the same as the right side - input: number
  - convert number to string
  - find midpoint of string
  - slice to string1 and string 2
  - compare the two strings
    - returns a boolean value
 
- double the number 
  -return number
  
- input: number 
- output: number
*/
// function isDouble(num) {
//   let midpoint = (String(num)).length / 2;
//   let strNum1 = String(num).slice(0,midpoint); 
//   let strNum2 = String(num).slice(midpoint); 
//   return strNum1 === strNum2;
// } 

// function twice(num) {
//   let isLengthEven = String(num).length % 2 === 0; 
//   return isLengthEven && isDouble(num) ? num : num * 2;
// }

// console.log(twice(37));          // 74
// console.log(twice(44));          // 44
// console.log(twice(334433));      // 668866
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676

/*
- get the average of the three numbers
- compare to the average to the letter grade
  - return letter grade

input: three scores of numbers
output: string of grade letter

*/

// function getGrade(num1, num2, num3) {
//   let avg = getAvg(num1, num2, num3);
//   if (90 <= avg && avg <= 100) {
//     console.log('here');
//     return 'A'; 
//   } else if (80 <=avg && avg <= 89) {
//     return 'B';
//   } else if (70 <= avg && avg <= 79) {
//     return 'C';
//   } else if (60 <= avg && avg <= 69) {
//     return 'D'; 
//   } else if (0 <= avg && avg <= 59) {
//     return 'F';
//   }
// }

// function getAvg(num1, num2, num3) {
//   return (num1 + num2 + num3) / 3;
// }

// console.log(getGrade(95, 90, 93));    // "A"
// console.log(getGrade(50, 50, 95));    // "D"

/*
- 'a' - 'z' = 97 - 122
- 'A' - 'Z' = 65 - 90

- delcare init result to empty string
- split into words
- iterate through words 
  declare init consecFound set to false
  - iterate through word
    - check if the char is not a letter
      - if next char is the same current char
        - set consecFound to true
      - else  setFound set to false
        - concat " " to result
    - else concat char to result
  - if consecFound is true 
    - concate "" to result
  - concate " " to result

input: string
output string
*/

// function cleanUp(string) {
//   let result = "";
//   const words = string.split(' ');
  
//   for (let idx = 0; idx < words.length; idx++) {
//     let notAlphaFound = false;
//     let word = words[idx];
//     for (let charIdx = 0; charIdx < words[idx].length; charIdx++) {
//       let curChar = words[idx][charIdx];
//       if(isCharAlpha(word, charIdx)) {
//           result += curChar;
//         } else {
//           let nextChar = charIdx + 1;
//           if (!(isCharAlpha(word, nextChar))) {
//             notAlphaFound = true;
//             if (word.length - 1 === charIdx) {
//               result += '*';
//             }
//           } else {
//             notAlphaFound = false;
//             result += '*';
//           }
//         }
//     }
//     if (notAlphaFound) {
//       result += '';
//     } else {
//       result += '_';
//     }
//   }
//   return result;
// }

// function isCharAlpha(word, charIdx) {
//   return (word.charCodeAt(charIdx) >= 97 && word.charCodeAt(charIdx) <= 122) 
//         || (word.charCodeAt(charIdx) >= 65 && word.charCodeAt(charIdx) <= 90);
// }

// console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

/*

floor 2000 /100 = 20 
floor 2001/100 = 20 + 1 = 21
floor 1965/ 100 = 19 + 1 = 20 

check for remainder
2001 % 100 = 1, true 

st 1,21  
nd 2, 22,
rd 3, 23
th 4, 5, 6, 7, 8, 9 10, 11...20  

input: number
output: string - century
*/

// function century(year) {
//   let century = Math.floor(year / 100);
//   let remainder = year % 100;
//   if (remainder > 0) {
//     century ++;
//   }
//   let strCen = String(century);
  
//   if (!(strCen[strCen.length - 2] === '1')) {
//     if (strCen[strCen.length - 1] === '1') {
//       strCen += "st";
//     } else if (strCen[strCen.length - 1] === '2') {
//       strCen += "nd";
//     } else if (strCen[strCen.length - 1] === '3') {
//       strCen +="rd";
//     } else {
//       strCen += "th";
//     }
//   } else {
//     strCen += "th";
//   }
//   return strCen;
// }

// console.log(century(2000));        // "20th"
// console.log(century(2001));        // "21st"
// console.log(century(1965));        // "20th"
// console.log(century(256));         // "3rd"
// console.log(century(5));           // "1st"
// console.log(century(10103));       // "102nd"
// console.log(century(1052));        // "11th"
// console.log(century(1127));        // "12th"
// console.log(century(11201));       // "113th"
