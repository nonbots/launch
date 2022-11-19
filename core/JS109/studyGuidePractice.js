/*
Problem: 
- input: positive number 
- output: next bigger number formed by the same digits
- if no bigger number is found return -1
Example: 
12 => 21
513 => 531 
231 => 321

354 => 435
slice (0,1)
4365 => 4365
4 5 where to put 3?

if 3 < 5 place it before 5 
else after



//if it is a small number, stick to the the left most place 
// if larger number stick to the right most


2017 => 2071

9 // returns -1
111 => -1
531 => -1

Data: use an array to store the string representation of the numbers

Algor:
-if number is less than 10 return -1

- convert number to string of numbers
- iterate through the string of numbers starting from the right most digit
  - iterate through each string number
    - check if the current digit is bigger than the each digit
      - remove the current digit and assign to rmNum
      - if the digit removed was at index 0
        - push to new array then concat
      - get the first half
        - append rmNum to array
      - append second half
      - join the array and convert back to a number and return
return -1  

*/

// function nextBiggerNum(num) {
//   if (num < 10) return -1;
  
//   const arr = String(num).split('');
//   for (let numIdx = arr.length - 1; numIdx > 0; numIdx--) {

//     for (let num2Idx = numIdx - 1; num2Idx >= 0; num2Idx--) {
//       if (arr[numIdx] > arr[num2Idx]) {

//         let result = [];
//         let rmNum = arr.splice(numIdx, 1)[0];
//         // console.log(rmNum);
//         // console.log('num2Idx', num2Idx);
//         if (num2Idx === 0) {
//           result.push(rmNum);
//           result = result.concat(arr);
//         } else {
//           result = arr.splice(0,num2Idx);
//           // console.log(result);
//           result.push(rmNum);
//           result = result.concat(arr);
//         }
//         // console.log(arr);
//         // console.log(result);
//         return Number(result.join('')); 
//       }
//     }
//   }
//   return -1;
// }
// // console.log(nextBiggerNum(513));

// console.log(nextBiggerNum(9) === -1);
// console.log(nextBiggerNum(12) === 21);
// console.log(nextBiggerNum(513) === 531);
// console.log(nextBiggerNum(2017) === 2071);
// console.log(nextBiggerNum(111) === -1);
// console.log(nextBiggerNum(531) === -1);
// console.log(nextBiggerNum(123456789) === 123456798);
// console.log(nextBiggerNum(354) === 435);

/*
Problem: 
- input: two strings
- output: boolean

- substring of first string can be rerranged to match str2

Ex: 
'srkqodlw' => 'world' // true
'cedewaraaosoqqyt' => 'codewars'

Data Structure: 
array to store the first word

Algor: 
- init an array from the string string with all the characters
- iterate through the second string
  - iterate through the array
    - if the current char from first string equals the current char in the array
      - remove the character from the array 
      - break
    - else
  - return false
- return true
*/

// function scramble(str1, str2) {
//   const chars = str1.split('');
//   for (let idx = 0; idx < str2.length; idx++) {
//     let isFound = false;
//     for (let arrIdx = 0; arrIdx < chars.length; arrIdx++) {
//       if (str2[idx] === chars[arrIdx]) {
//         chars.splice(arrIdx,1);
//         //console.log('here');
//         isFound = true;
//         break;
//       }
//     }
//     if (!isFound) return false;
//   }
//   return true;
// }

// console.log(scramble('javaass', 'jjss'));

// console.log(scramble('srkqodlw', 'world'));
// console.log(scramble('cedewaraaossoqqyt', 'codewars'));
// console.log(scramble('katas', 'steak'));
// console.log(scramble('scriptjava', 'javascript'));


/*
Problem: 
- input: string (lowercase)
- output: boolean

- can the inputstring's be constructed by its substrings

Ex: 
//abab
a
ab
aba
abab
b
ba
bab
a
ab
b

//abcd
a
ab
abc
abcd
b
bc
bcd
c
cd
d

Data Structure: 
store substring in an array

Algor: 
- generate substrings and store in an array except for the substrings of the same length
- iterate through the substrings
  - init result to ''
  - while the substring is less than or equal to the input string
    - reassign the current result with the appended substring
  - if the current result is equal to input string
    - return true
- return false

- getSubstring (inputString)
  - init substrings to []
  - iterate through start of inputString
    - iterate through end of inputString
      - get the substring from the start and end + 1 
      - if substring is less than length of inputString
        - add the string to the substrings
  - return the substrings
*/

/// repeat method
// function repeatedSubStringPattern(inputString) {
//   const substrings = getSubstrings(inputString);
//   for (let idx = 0; idx < substrings.length; idx++) {
//     let result = '';
//     let curSub = substrings[idx];
//     //console.log(curSub);
//     // while (result.length < inputString.length) {
//     //   result += curSub;
//       //console.log("R:", result);
//       if (curSub.repeat(inputString.length/curSub.length) === inputString) return true
//     }
//     // if (result === inputString) return true;
//   //}
//   return false;
// }


// function getSubstrings(inputString) {
//   const substrings = [];
//   for (let start = 0; start < inputString.length; start++) {
//     for (let end = start + 1; end <= inputString.length; end++) {
//       let substring = inputString.substring(start, end);
//       if (substring.length < inputString.length) {
//         substrings.push(substring);
//       }
//     }
//   }
// }
// function getSubstrings(inputString) {
//   const substrings = []; 
//   for (let idx = 0; idx < Math.floor(inputString.length / 2); idx++) {
//     substrings.push(inputString.substr(0, idx + 1));
//   }
//   return substrings;
// }
// console.log(getSubstrings('ababc'));

// console.log(repeatedSubStringPattern('abab'));
// console.log(repeatedSubStringPattern('aba'));
// console.log(repeatedSubStringPattern('aabaaba'));
// console.log(repeatedSubStringPattern('abaababaab'));
// console.log(repeatedSubStringPattern('abcabcabcabc'));

/*
Problem: 
- input: array of lowercase strings
- output: array of charaters

- return an array of all characters that show up within the given array (including duplicates)


Example: 

'a', 'b' => []
'ab', 'bc' => [b]
'bella', 'label', 'roller' => ['e', 'l', 'l']

Algor: 
- init a result empty array
- iterate through the chars of the first element //b, e
  - init count to 0
  - init curChar
  - iterate through the array starting at the second element //true,false // true, true 
    - check if the current char is not found in the current string
      - break
    - else 
      - curChar assigned to return value of the removed char
      - increment count
  - if count === input arrry's length - 1, 
    - add the char to the new array
- return the result array
*/

// function commonChars(arr) {
//   const result = [];
//   const firstWord = arr.shift();
//   arr = nestedArr(arr);
//   for (let idx = 0; idx < firstWord.length; idx++) {
//     let count = 0; 
//     let curChar;
//     let curFirstChar = firstWord[idx];
//     for (let wordIdx = 0; wordIdx < arr.length; wordIdx++) {
//       let index = arr[wordIdx].indexOf(curFirstChar);
//       if (index === -1) {
//         break;
//       } else {
//         curChar = arr[wordIdx].splice(index, 1)[0];
//         count += 1;
//       }
//     }
//     if (count === arr.length) {
//       result.push(curChar);
//     }
//   }
//   return result;
// }

// function nestedArr (arr) {
//   let result = [];
//   for (let idx = 0; idx < arr.length; idx++) {
//     result.push(arr[idx].split(''));
//   }
//   return result;
// }

// console.log(commonChars(['a', 'b']));
// console.log(commonChars(['ab', 'bc']));
// console.log(commonChars(['bella', 'label', 'roller']));
// console.log(commonChars(['cool', 'lock', 'cook']));
// console.log(commonChars(['hello', 'goodbye', 'booya', 'random']));
// console.log(commonChars(['aabbaaaa', 'ccddddd', 'eeffee', 'ggrrrrr', 'yyyzzz']));

/*
Problem: 
- input: 2 strings
- output: boolean

- find out if there is a substring that appears in both strings
- substrings that are longer than one character
- not case-sensitive

Ex:
- something => so, som
- Home
-''
- fun => fu, fun

- compare the str1 current char to str2 current char 
- convert strings to arrays of chars 
  - iterate through str1
    - get the index of where arr1 char can be found in arr2 (chars lowered case)
    - if not -1 (found)
        - check if the next chars are also the same
          - return true
  - return false 


- get substring 
- check get the index where char is found in substring
- change chars 2 
*/

// function subStringTest(str1, str2) {
//   const chars1 = getLowerCaseChars(str1)
//   let chars2 = getLowerCaseChars(str2);

//   for (let idx = 0; idx < chars1.length; idx++) {
//   // console.log(chars2);
//     let index = chars2.indexOf(chars1[idx]);
//   // console.log(index);
//     if (index !== -1) {
//     // console.log(chars1[idx + 1], chars2[index + 1]);
//       if (chars1[idx + 1] === chars2[index + 1]) {
//         return true;
//     } else {
//       chars2 = chars2.slice(index + 1);
//       //console.log(index, chars2);
//       idx -= 1;
//     }
//   }
//   }
//   return false;
// }


// function getLowerCaseChars(str) {
//   return str.split('').map(char => char.toLowerCase());
// }

/*
Algo:
- convert all input string to lower case
- get all substrings with a length of 2 only of str1
- loop through substrings
  - if substring is includes in second string return true
- return false

define getSubstrings(str1)
  - init result to empty array
  - iterate through the str1 (-1)
    - append the substring starting at current idx and ending at next index
  - return the substring
  
Ex: 

so, om, me, et, th, ti, in, ng
home => om // true
*/

// function getSubstring(str1) {
//   const subs = [];
//   for (let idx = 0; idx < str1.length - 1; idx++) {
//     subs.push(str1.substring(idx, idx + 2)); 
//   }
//   return subs;
// }

// function subStringTest(str1, str2) {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();
 
//   const str1Subs = getSubstring(str1);
//   return str1Subs.some(sub =>str2.includes(sub));
// }


// console.log(subStringTest('Something', 'Fun'));
// console.log(subStringTest('Something', 'Home'));
// console.log(subStringTest('Something', ''));
// console.log(subStringTest('', 'Something'));
// console.log(subStringTest('BANANA', 'banana'));
// console.log(subStringTest('test', 'lllt'));
// console.log(subStringTest('test', 'llltte'));
// console.log(subStringTest('', ''));
// console.log(subStringTest('1234567', '541265'));


/*
Problem: 
- find the longest common prefix string amongst an array of strings
- input: array of strings
- output: if exist return the substring if not return empty string

EX: 

[flower, flow, flight]
- init commonSubs to return referenced array of getSubString (first string)
- iterate through each string

- define getsubstring (str)
  - init sub to empty array
  - iterate through the string
    - append the sub from the first char to the last char
  - return the sub array

- get the common substrings between two string
  - init subs to empty array
  - iterate through the substring 
    - check if they are include in the preceding substring
      - append the string to a new array
  - return the new sub array
  
  
- return the last substring
*/

/*
Algo 

check the first char in each string, if not equal to each other return false
else check the next char 
if equal chck the next char 
else if not return the current prefix

- init prefix to empty string
- init firstWord to the return string of removing the first string from the array
- iterate through all the chars of firstWord
  - while all the chars are equal to each other 
    - add the current char to prefix
  - return the prefix

- areCharsEqual (char, array, idx)
  - iterate through the strings
    - if char !== string at idx
    - return false
  - return true  

*/

// function getCommonPrefix(arr) {
//   let prefix = '';
//   let firstWord = arr.shift();
  
//   for (let idx = 0; idx < firstWord.length; idx++) {
//     let char = firstWord[idx];
//     if (areCharsEqual(char, arr, idx)){
//       prefix += firstWord[idx];
//     } else {
//     return prefix;
//     }
//   }
// }

// function areCharsEqual(char, array, idx) {
//   for( let stringIdx = 0; stringIdx < array.length; stringIdx++) {
//     return char !== array[stringIdx][idx] ? false : true;
//   }
// }

// function getCommonPrefix(arr) {
//   let prefix = '';
//   let firstWord = arr.shift();
  
//   for (let idx = 0; idx < firstWord.length; idx++) {
//     let char = firstWord[idx];
//     let isEqual = true;
//     for (let stringIdx = 0; stringIdx < arr.length; stringIdx++) {
//     if (char !== arr[stringIdx][idx]) {
//       isEqual = false;
//     } 
//     }
//     if (isEqual) {
//       prefix += firstWord[idx];
//     }
//   }
//   return prefix;
// }

// console.log(getCommonPrefix(['flower', 'flow', 'flight']));
// console.log(getCommonPrefix(['dog', 'racecar', 'car']));
// console.log(getCommonPrefix(['dog', 'dracecar', 'dcar']));


/*
Problem: 
- input: array of integers
- output: boolean

- find if the sum of all the numbers to the left of n is equal to the sum to the right

Example: 
[1,2,3,4,3,2,1]

sum to the right: 
0, 1, 3, 6
sum to the left: 
16, 15, 12, 6

index at 3

Data Structure: 

Algo:

- get the sum of all the numbers an assign to rightTotal
- init leftTotal to 0
- if leftTotal === rightTotal return true
- iterate through the array of numbers starting at element 1
  - reassign left to the sum of the current total and previous number
  - reassign right to the difference fo the currentTotal and previous number
  - if leftTotal === rightTotal
    - return true
- return false   

*/

/* 
1, 2, 3

0, 1, 3
5, 3, 0

Algo:

init leftTotal to 0; 

- iterate through the numbers
  - init rightNums to an array of numbers to the right of the current number
  - get the summation of number from the right of the current number
  - if previous number is undefined
    - reassign leftTotal to 0
    - else to current value plus the previous number
  - if rightTotal === rightTotal
    - return true
-return false
*/

// function findEvenIndex(numbers) {
  let leftTotal;
  for (let idx = 0; idx < numbers.length; idx++) {
    let rightNums = numbers.slice(idx + 1);
    let rightTotal = rightNums.reduce((acc,num) => acc + num,0);
    //console.log(rightTotal);
    if (numbers[idx - 1] === undefined) {
       leftTotal = 0
    } else {
      leftTotal += numbers[idx - 1];
    }
   // console.log('L', leftTotal);
    if (leftTotal === rightTotal) return idx;
  }
  return -1;
}
// console.log(findEvenIndex([1,2,3]));
console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([1,2,3,4,5,6]));
console.log(findEvenIndex([20,10,30,10,10,15,35]));
console.log(findEvenIndex([20,10,-80,10,10,15,35]));
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]));

