/*
input : positive integer
output: integer - sum of digits

use method calls
use array to store numbers

- get digits in an array
- get sum
  - add current number to sum
  - return sum
*/

// function sum(num) {
//   const strDigits = num.toString().split('');
//   strDigits;
//   return strDigits.reduce((acc, cur) => {
//     return acc + Number(cur);
//   },0);
// }

// console.log(sum(23));           // 5
// console.log(sum(496));          // 19
// console.log(sum(123456789));    // 45

/*
input: array of numbers
output: array of numbers sorted in ascending order by string value

- integer from 0 - 19 

- convert number to string value
  - create an object : map number to string 
  - create an array with mapped string
- sort the numbers in ascending order base on string value
  - sort the array
  - create new array with numbers mapped from the string value
  - return the array
*/

// const obj = {
//   0: "zero",
//   1: "one",
//   2: "two",
//   3: "three",
//   4: "four",
//   5: "five",
//   6: "six",
//   7: "seven",
//   8: "eight",
//   9: "nine",
//   10: "ten",
//   11: "eleven",
//   12: "twelve",
//   13: "thirteen", 
//   14: "fourteen", 
//   15: "fifteen",
//   16: "sixteen",
//   17: "seventeen", 
//   18: "eighteen",
//   19: "nineteen"
// }

// function getStrings(nums, obj) {
//   const strVals = [];
//   for (let idx = 0; idx < nums.length; idx++) {
//     strVals.push(obj[nums[idx]]);
//   }
//   return strVals;
// }

// function getSortedStrVal(strVals) {
//   const sortedStrVals = strVals.sort();
//   return sortedStrVals.map(str => {
//     for (let key in obj){
//       if (obj[key] === str) return Number(key);
//     }
//   });
// }

// const strVals = getStrings([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], obj);
// console.log(getSortedStrVal(strVals));

/*
input:  two number arrays
        no empty arrays
        
output: array with products of pairs from each array
        sorted in ascending ordering

- iterate through 1st array 
  - iterate through 2nd array
    - returns product of 1st and 2nd element
  - returns array of products
- returns array of arrays of products
- returns join the array and sort array
*/

// function multiplyAllPairs(arr1, arr2) {
//   return arr1.map(num1 => arr2.map(num2 => num1 * num2)).flat().sort((a,b) => a - b);
// }

// console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

/*
input:  string
        empty strings?
        
output: array of subs with only the same leading char in ascending order

// a
// ab
// abc

// b
// bc

// c

outer loop starts at 0 and ends at the end of string
inner loop starts at the at start of outer loop and ends at end of string

- declare init substring array
- iterate through starting char
  - iterate through ending char
    - get substring by grabing the starting char and the ending char index
    - if substring starts with the first char of string
      - push to substring
-sort the array of string in ascending order
-return sub array

*/

// function leadingSubstrings(string) {
//   const subString = [];
//   for (let start = 0; start < string.length; start++) {
//     for (let end = start; end < string.length; end++) {
//       let curSub = string.substring(start, end + 1); 
//       if (curSub[0] === string[0]) subString.push(curSub);
//     }
//   }
//   return subString;
// }

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


// function substrings(string) {
//   const subs = [];
//   for (let start = 0; start < string.length; start++) {
//     for (let end = start; end < string.length; end++) {
//       subs.push(string.substring(start, end + 1));
//     }
//   }
//   return subs;
// }

// console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

// function substrings(string) {
//   let substrings = [];
//   for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
//     let substring = string.substring(startIndex);
//     console.log("substring", substring);
//     substrings = substrings.concat(leadingSubstrings(substring));
//   }

//   return substrings;
// }

// function leadingSubstrings(string) {
//   let substrings = [];
//   for (let length = 1; length <= string.length; length += 1) {
//     substrings.push(string.slice(0, length));
//   }
//   console.log("leading", substrings);
//   return substrings;
// }

// console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

/*

get chars
-use reduce
a
ab
abc
remove  first element

-iterate through char 
  - get substring

*/

// function substrings(string) {
//   const subs = [];
//   for (let start = 0; start < string.length; start++) {
//     for (let end = start; end < string.length; end++) {
//       subs.push(string.substring(start, end + 1));
//     }
//   }
//   return subs;
// }

// function getPalindromes(subs) {
//   return subs.filter(isPalindrome);
// }

// function isPalindrome(sub) {
//   if (sub.length === 1) return false;
//   return sub === sub.split('').reverse().join('');
// }

// function palindromes(string) {
//   const subs = substrings(string);
//   return getPalindromes(subs);
// }

// console.log(palindromes('abcd'));       // []
// console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

/*
input: array of numbers 
output: number - sum of each leading subsequence 


- get each subsequence
  - declare init subs to empty arry
  - iterate through nums length
    - push array element from 0 to length
  return subs
  
- get the sum of each subsequence (subs)
  - pass sub array 
    -to sum each element in subarray
    -returns sum of subarray 
  
- get the sum of the sums of subsequence 
  -pass sum to cb function to sum of each sum 
  -returns sum

*/

// function getSubs(nums) {
//   const subs = [];
//   for (let length = 1; length <= nums.length; length++) {
//     subs.push(nums.slice(0, length));
//   }
//   return subs;
// } 

// function getSums(subs) {
//   return subs.map(sub => sub.reduce((acc, cur) => acc + cur, 0));
// }

// function sumOfSums(nums) {
//   const subs = getSubs(nums); 
//   const sums = getSums(subs); 
//   return sums.reduce((acc, cur) => acc + cur, 0);
  
// }

// console.log(sumOfSums([3, 5, 2]));
// console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// console.log(sumOfSums([4]));              // 4
// console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

/*
input: array of char and num
output: array of strings each repeated num times

- iterates through the array
  - get an array of strings that repeats string num time
- flatten the  array of sub arrays

*/

// function buyFruit(fruitNums) {
//   const result = [];
//   for (let idx = 0; idx < fruitNums.length; idx++) {
//     for (let count = 0; count < fruitNums[idx][1]; count++) {
//       result.push(fruitNums[idx][0]);
//     }
//   }
//   return result;
// }
// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

/*
input: array of objects
output: array of objects with input id 
*/

function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction.id === id); 
}

// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                     { id: 105, movement: 'in',  quantity: 10 },
//                     { id: 102, movement: 'out', quantity: 17 },
//                     { id: 101, movement: 'in',  quantity: 12 },
//                     { id: 103, movement: 'out', quantity: 20 },
//                     { id: 102, movement: 'out', quantity: 15 },
//                     { id: 105, movement: 'in',  quantity: 25 },
//                     { id: 101, movement: 'out', quantity: 18 },
//                     { id: 102, movement: 'in',  quantity: 22 },
//                     { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

/*
if movement is in add 
 else subtract 
*/

// function calQuantity(transactions) {
//   return transactions.reduce((acc, cur) => {
//     if (cur.movement === "in") {
//       return acc + cur.quantity;
//     } else {
//       return acc - cur.quantity;
//     }
//   },0);
// }

// function isItemAvailable(id, transactions) {
//   const items = transactionsFor(id, transactions);
//   const quantity = calQuantity(items);
//   return quantity > 0;
// };

// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                     { id: 105, movement: 'in',  quantity: 10 },
//                     { id: 102, movement: 'out', quantity: 17 },
//                     { id: 101, movement: 'in',  quantity: 12 },
//                     { id: 103, movement: 'out', quantity: 20 },
//                     { id: 102, movement: 'out', quantity: 15 },
//                     { id: 105, movement: 'in',  quantity: 25 },
//                     { id: 101, movement: 'out', quantity: 18 },
//                     { id: 102, movement: 'in',  quantity: 22 },
//                     { id: 103, movement: 'out', quantity: 15 }, ];

// console.log(isItemAvailable(101, transactions));     // false
// console.log(isItemAvailable(103, transactions));     // false
// console.log(isItemAvailable(105, transactions));     // true