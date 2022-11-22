/*
Problem: 

- input: array of numbers
- output: an array the contain the counts for each number

- find out how many numbers in the array are smaller that it
- only unique numbers are counted

Ex:

- [8, 1, 2, 2, 3] =>  new array => is the number included in the array [1, 2, 3]
- if array contains 1 number append 0
- if an empty array return an empty array?

Data Structure:

- create an empty array on each iteration to store the numbers

Algo:
- init result to empty array
- iterate through each number to compare
  - init lessThanArr to empty array
  - iterate through each number to compare with outer number
    - if inner number is less than outer number
      - if the number is not included in LessThanArr
        - add to the lessThanArr array
  -add the length of lessThanArr to the result
-return result

*/

// function smallerNumbersThanCurrent(arr) {
//   const result = [];
//   for (let idxOuter = 0; idxOuter < arr.length; idxOuter++) {
//     const lessThanArr = [];
//     for (let idxInner = 0; idxInner < arr.length; idxInner++) {
//       if (arr[idxInner] < arr[idxOuter] && !lessThanArr.includes(arr[idxInner])) {
//         lessThanArr.push(arr[idxInner]);
//       }
//     }
//     result.push(lessThanArr.length);
//   }
//   return result;
// }

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]

/*
Problem: 
- input: array of numbers
- output: number 

- return minimum sum of 5 conscetive numbers in the array
- if input array is less than 5 return null 

Example: 
[1, 2, 3, 4]) === null // less than 5 
[1, 2, 3, 4, 5, -5]) === 9
15, 9, 
[1, 2, 3, 4, 5, 6] 15
15 20

Data structure:
on each iteration get a new array of length 5

Algor: 


- if the array is less than five return null
- init smallest sum init to the sum of the first five numbers
- iterate through the starting number in the array starign at 1
  - init newArr to the from the starting until there are five elements in the array
  - if newArr has five elements
    - if the sum of newArr is less than smallest sum 
      - reassign smallest sum
  - return smallest sum

define getSum (newArr)
  - return the sum of all the numbers in the array
*/

// function minimumSum(arr) {
//   if (arr.length < 5) return null;
//   let smallestSum = getSum(arr.slice(0, 5));
//   // console.log('here',arr.slice(0, 5));
//   for (let start = 1; start < arr.length; start++) {
//     const newNums = arr.slice(start, start + 5);
//   // console.log(newNums);
//     if (newNums.length === 5) {
//       let sum = getSum(newNums);
//       if (sum < smallestSum) {
//         smallestSum = sum;
//       }
//     } else {
//       return smallestSum;
//     }
//   }
// }

// function getSum (nums) {
//   return nums.reduce((acc, pre) => acc + pre, 0);
// }


// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// console.log([1,3].splice(1,2))

/*
Problem: 
- input: string
- output: string
- same sequence of characters with every 4th character in every second word converted to uppercase

Example:
'Lorem Ipsum is simply dummy text of the printing world'
'Lorem IpsUm is simPly dummy texT of the printing worLd'

Data structure:
- convert string to an array of words
- skip every world starting at the first second word

- convert string to array of chars
- iterate through every 4th letter and convert to uppercase
- 0, 1, 2, 3*, 4, 5, 6, 7*

Algor:
- convert string to array of words
- iterate through every word starting at the second word
  - if the index is and odd number
    - iterate through the word
      - if the index plus 1 is divisible by 4
        - convert the char to uppercase
      - else return char as 
    - return word
  - return word as is 
- return array of transformed string convert to string
*/

// function toWeirdCase(inputString) {
//   return inputString.split(' ').map((word, wordIdx) => {
//     if (wordIdx % 2 === 1) {
//       //console.log(word);
//       return word.split('').map((char, charIdx) => {
//         //console.log(charIdx);
//         if ((charIdx + 1) % 4 === 0) {
//           //console.log(char);
//           return char.toUpperCase();
//         } else {
//           return char;
//         }
//       }).join('');
//     } else {
//       return word;
//     }
//   }).join(' ');
// }
// console.log(
  // toWeirdCase('Lorem Ipsum is simply dummy text of the printing world'));
// console.log(
//   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
//               'Lorem IpsUm is simPly dummy texT of the printing worLd');
// console.log(
//   toWeirdCase('It is a long established fact that a reader will be distracted') ===
//               'It is a lonG established facT that a reader wilL be disTracTed');
// console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
// console.log(
//   toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
//               'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');
              
/*
Problem:
- input: array of integers
- output: array of integers containing 2 numbers

- returns two numbers that are closest together in value
- what if an array has only 1 value?

Examples:
console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

Data Structure:

init a result array to store the two numbers


Algo:
- init smallestDiff to 0, 25, 10, 6, 5, 4
- inti smallestNums to empty array [5, 25]
- iterate through each outer number 
  - iterate through each inner number starting at the outer number plus 1
    - if the difference between two numbers is less than smallestDiff 
    5, 25 => 20, 5, 15 => 10, 5, 11 => 6, 5, 20 => 15
      - reassign the numbers at index 1 and 1
- return smallestNums
*/

// function closestNumbers(nums) {
//   let smallestDiff = Math.abs(nums[0] - nums[1]);
//   const smallestNums = [nums[0], nums[1]];
//   for (let num1Idx = 0; num1Idx < nums.length; num1Idx++) {
//     let num1 = nums[num1Idx];
//     for (let num2Idx = num1Idx + 1; num2Idx < nums.length; num2Idx++) {
//       let num2 = nums[num2Idx];
//       let diff = Math.abs(num1 - num2) 
//       if (diff < smallestDiff) {
//         smallestDiff = diff 
//         smallestNums[0] = num1;
//         smallestNums[1] = num2;
//       }
//     }
//   }
//   return smallestNums
// }

// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]

/*
Problem:
- input: string
- output: string (single character)

- return char that occurs least often in the given string.
- if more than one character occurs least return the one that appears first
- case insensitive
- spaces count as a character
Examples:
console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

Data Structures:
-store a chars as keys and the value as number of occurances


Algo:
- lowercase all string input
- init occurances to an empty obj
- iterate through the string input
  - if the key does not exist 
    - create the key and set value to 1
  - else 
    - increment value at key by 1
    
- get the value of the object then sort in ascending order
- get the first value in the array an set as smallest
- get the array of key values in a array
- find the first occurrance of smallest in the nested array 
- return the first value in the array
 
*/

// function getOccurrences(inputString) {
//   inputString = inputString.toLowerCase();
//   let occurances = {};
//   for (let idx = 0; idx < inputString.length; idx++){
//     if (inputString[idx] in occurances) {
//       occurances[inputString[idx]] += 1;
//     } else {
//       occurances[inputString[idx]] = 1;
//     }
//   }
//   return occurances;
// }

// function leastCommonChar(inputString) {
//   const occurrances = getOccurrences(inputString); 
//   //return occurrances;
//   let smallestOccur = Object.values(occurrances).sort((a,b) => a - b)[0];
//   const keyValues = Object.entries(occurrances)
//   //console.log(keyValues);
//   for (let subArr = 0; subArr < keyValues.length; subArr++) {
//     if (keyValues[subArr][1] === smallestOccur) return keyValues[subArr][0];
//   }
// }


// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
//                             "t");
// console.log(leastCommonChar("Mississippi") === "m");
// console.log(leastCommonChar("Happy birthday!") === ' ');
// console.log(leastCommonChar("aaaaaAAAA") === 'a')

/*A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.*/


/*
Problem: 
- input: three lengths of the triangle
- output: string

rule:
'equilateral' (all three sides are equal)
'isosceles' (2 sides are equal)
'scalene' ( all sides are different)
'invalid' ( either sides are 0), ( if the sum of the 2 shorters sides less in  length than largest length

Data Structure:


Algo:
  - if all three lengths are the same return 'equalateral'
  - if any of the lengths is 0 return 'invalid'
  - find the largest length
  - 
  - find the sum of the 2 smaller lengths
  - if the sumOfsmallest is < largest return 'invalid'
  - find scalene: compare num1 is not equal to num2 and num1 is not equal to num3
    -return 'scalene'
  -else 
    - return 'isosceles'
*/


// triangle(3, 3, 3);        // "equilateral"
// triangle(3, 3, 1.5);      // "isosceles"
// triangle(3, 4, 5);        // "scalene"
// triangle(0, 3, 3);        // "invalid"
// triangle(3, 1, 1);        // "invalid"
