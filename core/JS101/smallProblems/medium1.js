/* 
input: bigInt
What about zero or empty string
output: index (number)

1 + 1 = 2  [1,1,2]
1 + 2 = 3  [1,1,2,3]
2 + 3 = 4  [1,1,2,3,4]
length + (length - 1)

- use an array to poplutate the sequence

- declare init fib to array [1,1]
- if number is 1 
  - return [1]
- while the length of the last number in fib is not equal to length
  - add to the array the sum of the last and second last num in array
- return the length of the array append with 'n'

- define a isEqualLength (number)
  - returns converted number to string and get length
*/


// function findFibonacciIndexByLength(numLength){
//   const fib = [1n,1n];
//   if (numLength === 1n) return 1n;
  
//   while (isEqualLength(BigInt(fib[fib.length - 1])) !== numLength) {
//     let value1 = BigInt(fib[fib.length - 1]);
//     let value2 =BigInt(fib[fib.length - 2]);
//     let value = BigInt( value1 + value2 );
//     fib.push(value);
//   }
//   return BigInt(fib.length);
// }

// function isEqualLength(num) {
//   return BigInt(String(num).length);
// }

/*
input: BigInt - number of digits
output: BigInt - sequence number

- a length of 1n is 1n in sequence
1 1 2 3 5 8 13
1 + 1 = 2 // initialize first to 1 and second to 1
1 + 2 = 3 // reasign first to second and second to previous result
2 + 3 = 5

intialize count to 0;
initialize first to 1
initialize second to 1
initialize fibSeq to first + second
do 
  fibSeq = first + second
  first = second
  second = fibSeq
  increment count
  while (fibs digits is !== to numDigits)

define numberOfDigits (num) 
  return convert number to string then get length 

*/

// function numberOfDigits(num){
//   return BigInt(String(num).length);
// }

// function findFibonacciIndexByLength(numDigits) {
//   let count = 2n;
//   let first = 1n; 
//   let second = 1n;
//   let fibSeq;
//   if (BigInt(numDigits) === 1n) return 1n;
//   do {
//     fibSeq = first + second;
//     count += 1n; 
//     first = second;
//     second = fibSeq;
//   } while (numberOfDigits(fibSeq) !== numDigits); 
//   return count;
// }

// console.log(findFibonacciIndexByLength(1n) === 1n);
// console.log(findFibonacciIndexByLength(2n) === 7n);
// console.log(findFibonacciIndexByLength(3n) === 12n);
// console.log(findFibonacciIndexByLength(10n) === 45n);
// console.log(findFibonacciIndexByLength(16n) === 74n);
// console.log(findFibonacciIndexByLength(100n) === 476n);
// console.log(findFibonacciIndexByLength(1000n) === 4782n);
// console.log(findFibonacciIndexByLength(10000n) === 47847n);



//Q5
// var o = {
//   name: 'student'
// };
// console.log(o)
// o.self = o
// console.log(o)
// console.log(o.self);
// o.self.self= {};
// // what's the value of o?
// console.log(JSON.stringify(o));

// const arr = [];
// arr[3] = 4
// console.log(arr);

// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;
// let result = randomNumberBetween(1, 6);
// tries += 1;

// while (result <= 2) {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// }

// console.log('It took ' + String(tries) + ' tries to get a nu`mber greater than 2');

/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.
If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly
*/

/*
input - array of elements
ouput - a new array 


- return undefined if input is not an array 
- return empty array if input is an empty array
- copy the input array to the empty array
- the first element is removed and appended to the end of the array
  - init firstElement = remove first element from array.
  - append first element to copy array
*/

// function rotateArray(inputArr) {
//   if (!Array.isArray(inputArr)) return undefined; 
//   if (inputArr.length === 0) return [];
//   const copyArr = inputArr.slice();
//   let firstElement = copyArr.splice(0,1);
//   copyArr.push(firstElement[0]);
//   return copyArr;
// }

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]

/*
input - number, number - digit of the number
output - the rotated number 

-convert number to string
-split to characters in an array
-get the char at digit number and remove char 
-append removed char to the end of the array
-convert elements to string
-convert to number and return
*/

// function rotateRightmostDigits(num, digit) {
//   const charNums = String(num).split('');
//   let removedEleArr = charNums.splice(charNums.length - digit, 1); 
//   charNums.push(removedEleArr[0]);
//   return Number(charNums.join('')); 
// }

// function rotateRightmostDigits(num, digit) {
//   let numString = String(num);
//   let first = numString.slice(0, numString.length - digit);
//   let second = numString.slice(numString.length - digit);
//   return first + rotate(second);
// }

// function rotate(second) {
//   return second.slice(1) + second[0];
// }

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917

/*
input - number 
output - number 

7 => [35291]+ [7]
2 => [32917] + [5]

-convert number to string of numbers
-loop through each string of numbers
  -shift each number starting at the left of the left
  -concate array to one new array and reassign to string of numbers
- join array and convert to number
*/

// function maxRotation(nums) {
//   let result = String(nums).split('');
//   for (let idx = 0; idx < result.length; idx++) {
//     // result = rotate(idx, result);
//     rotate(idx, result);
//   }
//   return Number(result.join(''));
// } 

// function rotate(idx, result) {
//   let elemRemoved = result.splice(idx,1);
//   result.push(elemRemoved[0]);
//   // result = result.concat(elemRemoved);
//   // return result;
// }

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845


/*
input = number
output = number

create a new array

-convert number to string
-loop through the string
  - dec/init first string that contains the first to the previous current index elements 
  - convert both string to a single array and reassign array to stringNums
  
- declare function rotateElements (secondArr)
  - create new array with the starting with the second element
  - create new array of first element
  - convert both arrays to a single array and return
  
slice (0, idx)
slice (idx)
slice (1) concat slice(0)
*/

// function maxRotation(num) {
//   let stringNums = String(num);
//   for (let idx = 0; idx < stringNums.length; idx++) {
//     stringNums = stringNums.slice(0,idx).concat(rotateElements(stringNums.slice(idx)))
//   }
//   return Number(stringNums); 
// }

// function rotateElements(second) {
//   return second.slice(1).concat(second[0]); 
// }

// function maxRotation(num) {
//   let numLength = String(num).length;
//   for (let idx = numLength; idx >= 2; idx--) {
//     num = rotateRightmostDigits(num, idx); 
//   }
//   return Number(num);
// }

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845

// function minilang(command) {
//   let register = 0;
//   const stack = [];
//   const commands = command.split(' ');
//   commands.forEach(com => {
//     switch (com) {
//       case 'PRINT': 
//         console.log(register);
//         break;
//       case "PUSH": 
//         stack.push(register);
//         break;
//       case "MULT":
//         register *= stack.pop();
//         break;
//       case "ADD":
//         register += stack.pop();
//         break;
//       case "POP":
//         register = stack.pop();
//         break;
//       case "DIV":
//         register = Math.floor(register / stack.pop());
//         break;
//       case "REMAINDER":
//         register %= stack.pop();
//         break;
//       case "SUB":
//         register -= stack.pop();
//         break;
//       default:
//         register = Number(com);
//         break;
//     }
//   })
  
// }

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// //5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// //6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)




/*
input - string of words
output - new string of words

convert number word to digit character

-convert the string of words to array of words.

-loop through array
  - dec/init chars to array of chars
  - dec/init nonAlpha to return value of getNonAlpha
  - convert chars to word init word
  -if current word is a number word
    -reassign word to to  the digit character 
  -append nonAlpha to word
  
-return convert words into string 

function getNonAlpha (chars)
  -dec/init nonAlpha empty string 
  -loop through chars 
    - if char is not a letter 
      - remove character and append to nonAlpha 
  -return nonAlpha
*/

const mapNumWords = {
  'zero': '0', 
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
}

// function wordToDigit(string) {
//   return string.split(' ').map(word => {
//     const chars = word.split('');
//     let nonAlpha = getNonAlpha(chars);
//     let editedWord = chars.join('');
//     let convertedWord = convertWord1(editedWord);
//     return convertedWord + nonAlpha;
//   }).join(' ');
// }

// function convertWord1(editedWord) {
//   if (editedWord in mapNumWords) {
//     return mapNumWords[editedWord]; 
//   } else {
//     return editedWord;
//   }
// }

// function convertWord(editedWord, words, word) {
//   switch (editedWord) {
//       case 'one':
//         words[word] = '1';
//         break;
//       case 'two':
//         words[word] = '2';
//         break; 
//       case 'three':
//         words[word] = '3';
//         break;
//       case 'four': 
//         words[word] = '4'; 
//         break;
//       case 'five':
//         words[word] = '5';
//         break;
//       case 'six':
//         words[word] = '6';
//         break;
//       case 'seven':
//         words[word] = '7'; 
//         break;
//       case 'eight':
//         words[word] = '8';
//         break;
//       case 'nine': 
//         words[word] = '9';
//         break;
//       case 'zero': 
//         words[word] = '0';
//         break;
//       default:
//         words[word] = editedWord;
//         break;
//     }
// }

// function getNonAlpha(chars) {
//   let nonAlpha = "";
//   for (let idx = 0; idx < chars.length; idx++) {
//     if(chars[idx].toLowerCase() < 'a' || chars[idx].toLowerCase() > 'z') {
//       nonAlpha += chars.splice(idx,1);
//     }
//   }
//   return nonAlpha;
// }

/*
input: string
output string

replace number words with string type digits

-dec/init words to an array of words
-loop through words
  -check if word exist as key, if so
    - replace the word to a key value and return
  -return word
-return word converted as string

*/

function wordToDigit(string) {
  return string.split(' ')
    .map(word => {
      return (getConvertedWord(word.split('').filter(getAlphaCb).join('')) + word.split('').filter(getNonAlphaCb).join(''))
      }).join(' ');
}

function getNonAlphaCb(char) {
   return char.toLowerCase() < 'a' || char.toLowerCase() > 'z';
}

function getAlphaCb(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

function getConvertedWord(alphaWord) {
  if (alphaWord in mapNumWords) {
    return alphaWord.replace(alphaWord, mapNumWords[alphaWord]);
  } else {
    return alphaWord;
  }
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

//1, 1, 2, 3, 5, 8

/*
input - number of sequence
output - value at number of sequence

if number of sequence is 1 and 2 return 1 

1 + 1 = 2 

 fib(3 - 1) + fib(3 - 2), 
 fib(2) + fib(1) 
 returns 1 + 1 = 2 
 
 fib(4 - 1) + fib(4 - 2)
 fib(3) + fib(2)
 fib(2) + fib(1) returns 1 
 returns 1 + retursn 1
 3

*/
let memo ={};
function fibonacci(numSeq) {
  if (numSeq <= 2) {
    return 1;
  } else if (memo[numSeq]) {
    console.log('here', numSeq, memo[numSeq]);
    return memo[numSeq];
  } else {
    console.log('compute');
    memo[numSeq] = fibonacci(numSeq - 1) + fibonacci(numSeq - 2);
    //recursion loop back here
    return memo[numSeq];
  }
}


/*
input - number of fib sequence
output - value of fib sequence


if input is 1 or 2 return 1 

dec/init first to 1
dec/init second to 1
dec/init count to 3
dec/init third 

while number is less than or equal to input 
  increment count
  third is assinged to first + second;
  first reassigned to second
  second reassigned to third 
  
return third 
*/

// function fibonacci(numSeq) {
//   if (numSeq <= 2) return 1;
  
//   let first = 1; 
//   let second = 1; 
//   let count = 3; 
//   let third;
  
//   while (count <= numSeq) {
//     count++;
//     third = first + second;
//     first = second;
//     second = third;
//   }
//   return third;
// }


// function fibonacci(nth) {
//   let previousTwo = [1, 1];

//   for (let counter = 3; counter <= nth; counter += 1) {
//     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
//   }

//   return previousTwo[1];
// }

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(memo);
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765

// console.log(memo);

