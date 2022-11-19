/*
input: string
output: string

-doubles every character in the string
-declare init new string to empty string
-iterate through string and concate two of each char to new string
*/

// function repeater(string) {
//   let newStr = " ";
//   for (let idx = 0; idx < string.length; idx++) {
//     newStr += string[idx] + string[idx];
//   }
//   return newStr
// }

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

/*
8:19

input: string
output: string

double only consonant: no vowels and must be alpha chars

-declare init result as empty string
-declare init vowel string
-iterate through the string 
  -if char is a consonant use include
    - double the char
return result
*/
// function doubleConsonants(string) {
//   let result = " ";
//   let vowels = "aeiou";
//   for (let idx = 0; idx < string.length; idx++) {
//     if(!(vowels.includes(string[idx])) && (string[idx].toLowerCase() >= 'a' && string[idx].toLowerCase() <= 'z')) {
//       result += string[idx] + string[idx];
//     } else {
//       result += string[idx];
//     }
//   }
//   return result;
// }

// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""

//8:35

/*
8:38

input: positive integer
output: positive integer reversed

convert to string
reverse string
 split to chars
 call reverse on chars, then join
return once converted back to a number
*/

// function reverseNumber(num) {
//   return Number(String(num).split('').reverse().join(''));
// } 

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
// console.log(reverseNumber(1));        // 1

//8:45

/*
input: string
output: string of the middle char(s)

get the length of the string
get the midpoint of the string
  even will give a whole number as a midpoint 
    get the charp before and at midpoint
  odd will give a floating number , floor it
    get the midpoint char
*/

// function centerOf(str) {
//   let result = " "
//   let midpoint = str.length / 2;
//   let isEven = str.length % 2 === 0;
//   return isEven ? str[midpoint- 1] + str[midpoint] : str[Math.floor(midpoint)];
// }

// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"

/*
input: negative or positive number
output: negative or positive number

- if input is positive number return the negative of that number
- if input is negative number return as is 
*/

// function negative(number) {
//   return (number >= 0) ? number * -1 : number;
// }

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0

/*
10:10
input: number
output: array of number 

- gets all the numbers from 1 to the input number 

- declares and inits an empty array result
- while loop that checks if the number is greater than 0 
  unshifts the number to result
  decrement number
- returns result
*/

// function sequence(num) {
//   const result = [];
//   while (num > 0) {
//     result.unshift(num);
//     num--;
//   }
//   return result;
// }

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));   // [1, 2, 3]
// console.log(sequence(1));    // [1]

//10:07

/*
input: string - first name, a space, and a last name
output: string - a last name, a comma, a space, first name

- declare and init empty string result
- get string into a collection of words
- retrieve the second word, concate comma and space, retrieve first word
- return it
*/

// function swapName(inputStr) {
//   let result = " ";
//   let words = inputStr.split(' ');
//   return words[1] + ", " + words[0];
// }

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

/*
input: number - count, number - starting number of sequence
output: array, where length is count and the elements are multiples of the start number

- declare and init an empty array result
- iterate count times: start at 1, start <= count, increment by 1
  - get the multiple by mulitplying the starting number with the current index
  - add multiple to result 
- return result 
*/

// function sequence(count, startNum) {
//   const result = [];
//   for (let start = 1; start <= count; start++) {
//     let multiple = startNum * start;
//     result.push(multiple);
//   }
//   return result;
// }

// console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []

/*
input - string
output - string, where words are put in reversed order

- using an array

- get the collection of words
- reverse the collection
- join the collection and return

*/

// function reverseSentence(inputStr) {
//   return inputStr.split(' ').reverse().join(' ');
// } 

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

/*
input: string 
output: string

- all words 5 or more in length should be reversed
- input string consist of only letters an spaces

- use array to store words 

- get array of words
- declare init result array as empty
- iterate through array of words
  - check if word length is 5 or greater, if so
      - reverse the word and add to array
  - else add word to array
- join the words and return

*/
// function reverseWords(inputStr) {
//   const result = [];
//   const words = inputStr.split(' ');
//   for (let idx = 0; idx < words.length; idx++) {
//     if (words[idx].length >= 5) {
//       result.push(words[idx].split('').reverse().join(''));
//     } else {
//     result.push(words[idx]);
//     }
//   }
//   return result.join(' ');
// }

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

/*
input: array of elements
output array of elements, reversed, the same object mutated

-swap the first element with the last element, the second with the second last
-to stop looping find the break point
if length is even than the midpoint is length / 2 - 1
if length ie odd than the breakpoint would be length /2, round down, then - 1

-define the reverse funtion (array)
  - iterate through the array, stop at breakpoint
    - calls swap
  - return array

-define breakpoint function (array)
  -if length is even
    -length / 2 -1
  -else 
    -length / 2, round down then - 1
  returns breakpoint

-define swap function (first, second, array)
  -declare init temp to first
  -reassign first to second 
  -reassign second temp
*/

// function reverse(array) {
//   let bpIndex = getBpIndex(array);
//   for (let idx = 0; idx <= bpIndex; idx++) {
//     let firstVal = array[idx];
//     let firstIdx = idx;
//     let secIdx = array.length - (idx + 1);
//     let secondVal = array[secIdx]; //4 - 1 = 3, 4 - 2 = 2  
//     swap(firstVal, secondVal, array, firstIdx, secIdx);
//   }
//   return array;
// }

// function getBpIndex(array) {
//   if (array.length % 2 === 0) {
//     return (array.length / 2) - 1;
//   } else {
//     return (Math.floor(array.length / 2) - 1);
//   }
// }

// function swap(firstVal, secondVal, array, firstIdx, secIdx) {
//   let temp = firstVal; 
//   array[firstIdx] = secondVal;
//   array[secIdx] = temp;
// }

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true

/*
Problem/ Examples
input: string
output: boolean

Data / Algor
-use an array to store all strings

- define function getParenthesis
  - declare init empty array
  - iterate through string
    - if char is included in '()'
      -add char to array
  -return array

-define function isBalanced
  -check if first parenthesis is ) or ending is ( or parenthesis length is odd, if not
    -iterate through the first half of array parathesis
      -if check if the first and last parathesis is not () and )(
       - return false
  - return true
  
()(), ())), (((), ()() || (()) (()())
*/

// function getParenthesis(inputStr) {
//   const parenthesis = [];
//   for (let idx = 0; idx < inputStr.length; idx++) {
//     if ("()".includes(inputStr[idx])) {
//       parenthesis.push(inputStr[idx]);
//     }
//   }
//   return parenthesis;
// }

// function getParenthesis1(inputStr) {
//   return inputStr.split('').filter(char => "()".includes(char));
// }

// function isBalanced(inputStr) {
//   const parenthesisArr = getParenthesis1(inputStr);
//   const firtPar = parenthesisArr[0];
//   const lastPar = parenthesisArr[parenthesisArr.length - 1]; 
//   const isOdd = parenthesisArr.length % 2 === 1;
//   //console.log("array", parenthesisArr);
//   //console.log("isOdd", isOdd);
//   if (isOdd || firtPar === ')' || lastPar === '(') {
//     return false;
//   } else {
//     for (let idx = 0; idx < parenthesisArr.length; idx++) {
//       let firstPar = parenthesisArr[idx];
//       let secondPar = parenthesisArr[parenthesisArr.length - (idx + 1)];
//       if (!(firstPar === '(' && secondPar === ')') && !(firstPar === ')' && secondPar === '(')) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);//
// console.log(isBalanced("What (is this?") === false);//
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);//
// console.log(isBalanced("Hey!") === true);//
// console.log(isBalanced(")Hey!(") === false);//
// console.log(isBalanced("What ((is))) up(") === false);//


console.log([[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
}));