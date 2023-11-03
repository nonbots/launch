/*
4:23 (9 minutes)
Problem
- input: object 
- output: array (each element represents a key value pair in the form of an array)

Examples 

- toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

- toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

- toArray({}) ➞ []

Data strucure
- nested array of subarrays that store the key and value 

Algo
- convert the object to a nest array of the key pair values
- return the array
*/

// function toArray(obj) {
//     return Object.entries(obj);
// }

// console.log(toArray({ a: 1, b: 2 }));// ➞ [["a", 1], ["b", 2]]

// console.log(toArray({ shrimp: 15, tots: 12 })); // ➞ [["shrimp", 15], ["tots", 12]]

// console.log(toArray({})); // ➞ []

/*
4:34 (11 minutes)
Problem
- input: string
- string: number (count) of the vowels contianed within it

Example
countVowels("Celebration") ➞ 5
countVowels("Palm") ➞ 1
countVowels("Prediction") ➞ 4

Data Structure
- using an array to store the vowels and accessing it length

Algo
- filter out only the vowels in a new array
- return the array's length
*/

// function countVowels(string) {
//     return string.split('').filter(char => 'aeiou'.includes(char)).length;
// }

// console.log(countVowels("Celebration")) // ➞ 5

// console.log(countVowels("Palm")) //➞ 1

// console.log(countVowels("Prediction")) // ➞ 4

/*
4:46 (5:10)
Problem 
- input:
- output:

Examples
1, 3, 6, 10, 15, 21
+2 +3 + 4 + 5 + 6
triangle(1) ➞ 1

triangle(6) ➞ 21

triangle(215) ➞ 23220

Data Structure


Algo
- dots with the number 1
- incrementNum to start
- loop input number of times starting at 1 and ending at 6
  - incrementNum by 1
  - increment dots by incrementNum
- return dots
*/

// function triangle(count) {
//   let dotCount = 0;
//   let incrementNum = dotCount;
//   for (let countNum = 0; countNum < count; countNum += 1) {
//     incrementNum += 1;
//     dotCount += incrementNum;
//   }
//   return dotCount;
// }
// console.log(triangle(0)) // ➞  0

// console.log(triangle(1)) // ➞ 1

// console.log(triangle(6)) // ➞ 21

// console.log(triangle(215)) //➞ 23220

/*
5:10 (14 minutes)
Problem 
- input: string
- output: string

- where each letter is printed twice

Example
doubleChar("String") ➞ "SSttrriinngg"

doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") ➞ "11223344!!__  "

Data Structure 
create a new empty string

Algo
-init an empty string called result
- iterate through the string
  - concate to result the current char repeate twice
- return result
*/

// function doubleChar(inputString) {
//   let result = '';
//   for (let idx = 0; idx < inputString.length; idx += 1) {
//     result += inputString[idx].repeat(2);
//   }
//   return result;
// }

/*
Data Structure
- create an emtpy string
Algo
- init result to empty string
- iterate through the string
  - if the current char is not the same char in the last index of the result
  - append the char to result
-return result
*/

// function doubleChar(inputString) {
//   let result = '';
//   for (let idx = 0; idx < inputString.length; idx += 1) {
//     if (inputString[idx] !== result[result.length - 1]) {
//       result += inputString[idx];
//     }
//   }
//   return result;
// } 

// console.log(doubleChar("String")) //➞ "SSttrriinngg"
// console.log(doubleChar("Hello World!")) // ➞ "HHeelllloo  WWoorrlldd!!"
// console.log(doubleChar("1234!_ ")) // ➞ "11223344!!__  "

/*
5:30 27 minutes
Problem
- input: string
- output: number of potatoes that are in a string

Example

potatoes("potato") ➞ 1

potatoes("potatopotato") ➞ 2

potatoes("potatoapple") ➞ 1

Data Structure

Algo
init count to 0
init position to 0

- while isIndexFound does not return -1 
  - increment count by 1
  - reassign position to indexFound + 1

- define isIndexFound (string, position)
  - get the index of the first occurrence of 'potato' at position and return
*/

// function potatoes(word) {
//   let count = 0;
//   let position = 0;
//   while (isIndexFound(word, position) !== -1) {
//     count += 1;
//     position = isIndexFound(word, position) + 1;
//   }
//   return count;
// }

// function isIndexFound (string, position) {
//   return string.indexOf('potato', position);
// }

// console.log(potatoes("potato")) // ➞ 1

// console.log(potatoes("potatopotato")) // ➞ 2

// console.log(potatoes("potatoapple")) //➞ 1

/*
6:10
Problem
- input: integer
- output: number

- factorial of the integer

Example
factorial(3) ➞ 6  //  3  * 2 * 1 = 6 

factorial(5) ➞ 120  //  

factorial(13) ➞ 6227020800

Data Structure

Algo 
- init factorial to 1 
- start looping at 1 to the input number
  - multiply the current factorial value to num of current loop
- return factorial
*/

// function factorial(count) {
//   let fact = 1; 
//   for (let num = fact; num <= count; num += 1) {
//     fact *= num;
//   }
//   return fact;
// }
// console.log(factorial(3)) // ➞ 6

// console.log(factorial(5)) // ➞ 120

// console.log(factorial(13)) //➞ 6227020800

/*
6:26 (10 minutes)
Problem
- input: string
- output: string with all vowels removed

Example:

removeVowels("I have never seen a thin person drinking Diet Coke.")
➞ " hv nvr sn  thn prsn drnkng Dt Ck."

removeVowels("We're gonna build a wall!")
➞ "W'r gnn bld  wll!"

removeVowels("Happy Thanksgiving to all--even the haters and losers!")
➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"


Data structure


Aglo
- only get all the chars that are not vowels
- convert the string to an array of chars
- select only the chars that are not vowels
- convert the new array to string
- return the string

*/

// function removeVowels(inputString) {
//   return inputString.split('').filter(char => !('aeiou'.includes(char))).join('');
// }

// console.log(removeVowels("I have never seen a thin person drinking Diet Coke."));
// //➞ " hv nvr sn  thn prsn drnkng Dt Ck."

// console.log(removeVowels("We're gonna build a wall!"));
// //➞ "W'r gnn bld  wll!"

// console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"))
// //➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

/*
6:37 (8 minutes)
Problem
- input: string representation of a number
- output: string respresention of a number with the trailin or leading zeros

Example
removeLeadingTrailing("230.000") ➞ "230"

removeLeadingTrailing("00402") ➞ "402"

removeLeadingTrailing("03.1400") ➞ "3.14"

removeLeadingTrailing("30") ➞ "30"

Data Structure


Algo
- convert to number and then back to string

*/

// function removeLeadingTrailing(stringNum) {
//   return String(Number(stringNum));
// }

// console.log(removeLeadingTrailing("230.000"))// ➞ "230"

// console.log(removeLeadingTrailing("00402"))// ➞ "402"

// console.log(removeLeadingTrailing("03.1400"))// ➞ "3.14"

// console.log(removeLeadingTrailing("30"))// ➞ "30"


/*
6:45
Problem
- input:string
- output: number (index of the first vowel in a string)

Data Structure

Algo
- convert the input string to all lowercase
- iterate through the string
  - if the char is a vowel
  - return the index

*/

// function firstVowel(inputString) {
//   inputString = inputString.toLowerCase();
//   for (let idx = 0; idx < inputString.length; idx += 1) {
//     if ('aeiou'.includes(inputString[idx])) {
//       return idx;
//     }
//   }
// }

// console.log(firstVowel("apple")) //➞ 0

// console.log(firstVowel("hello")) //1

// console.log(firstVowel("STRAWBERRY")) // ➞ 3

// console.log(firstVowel("pInEaPPLe")) // ➞ 1

/*
Problem 
- input: array
- output: nested array for each element in the orginal array

- nested array must be filled with the corresponding element in the original array
- each nested array has the same amount of elements as the original array

examples
multiply([4, 5]) ➞ [[4, 4], [5, 5]]



multiply(["*", "%", "$"]) ➞ [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]]

multiply(["A", "B", "C", "D", "E"]) ➞ [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"], ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]]


Data Structure
- creating a result array to store all the subarrays
- creating a subarrary to store the elements on each iteration

Aglo
- init result array
- iterate through the numbers
  - init an empty array
  - iterate array length number of times
    - add the current number length number of times to a new array
  - add the array to the result array
- rturn reult

*/

// function multiply(elements) {
//   const result = [];
//   for (let idx = 0; idx < elements.length; idx += 1) {
//     console.log(elements[idx]);
//     const sub = [];
//     for (let count = 1; count <= elements.length; count += 1) {
//       // console.log(elements[idx]);
//       sub.push(elements[idx]);
//     }
//     result.push(sub);
//   }
//   return result;
// }

// console.log(multiply([4, 5])); // ➞ [[4, 4], [5, 5]]);

// console.log(multiply(["*", "%", "$"]));// ➞ [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]]);

// console.log(multiply(["A", "B", "C", "D", "E"]));//➞ [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"], ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]]);

/*
Problem
- input: array of names 
- output: string of first character sorted in alphabetical order

Examples
society_name(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

society_name(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

society_name(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"

Data structure
- array (sort) => string of first char for each name

Algo
- init result to empty string
- create a copy of the array
- sort the copy array in ascending order
- iterate through each name
  - append the first char of the current name to result
- return result
*/

// function society_name(names) {
//   let result = '';
//   const namesCopy = names.slice();
//   namesCopy.sort();
  
//   for (let idx = 0; idx < namesCopy.length; idx += 1) {
//     result += namesCopy[idx][0];
//   }
//   return result;
// }

// console.log(society_name(["Adam", "Sarah", "Malcolm"])) // ➞ "AMS"

// console.log(society_name(["Harry", "Newt", "Luna", "Cho"])) // ➞ "CHLN"

// console.log(society_name(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])) // ➞ "CJMPRR"

/*
Problem
- input: array of integers (n)
- output: sum of the first (n) numbers in the array

Example
slice_sum([1, 3, 2], 2) ➞ 4
slice_sum([4, 2, 5, 7], 4) ➞ 18
slice_sum([3, 6, 2], 0) ➞ 0

Data Structure

Aglo
- init sum to 0
- iterate from index 0 to the when index is less than n, increment index
  - add current number to sum
- return sum
*/

// function slice_sum(arr, n) {
//   let sum = 0; 
//   for (let idx = 0; idx < n; idx += 1) {
//     sum += arr[idx];
//   }
//   return sum;
// }

// console.log(slice_sum([1, 3, 2], 2))// ➞ 4

// console.log(slice_sum([4, 2, 5, 7], 4)) // ➞ 18

// console.log(slice_sum([3, 6, 2], 0)) // ➞ 0

/*
11:07
Problem
- input: array of integers
- output: a new array with the elements mirrored


Examples
mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]

mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

Data Structure
- return a new array

Algo
- get the first array and concate it with the array of just the first and second last elements reversed
- return the new array
*/

// function mirror(arr) {
//   return arr.concat(arr.slice(0, arr.length - 1).reverse());
// }

// console.log(mirror([0, 2, 4, 6])); // ➞ [0, 2, 4, 6, 4, 2, 0]
// console.log(mirror([1, 2, 3, 4, 5])); // ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
// console.log(mirror([3, 5, 6, 7, 8])); // ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]

/*
11:22 (9 minutes)
Problem
- input: arry and string
- output: none


- every bar needs to be on a new line and its lenght corresponds to the numbers in the array
- print a histogram

Examples
histogram([1, 3, 4], "#") ➞ "#\n###\n####"

#
###
####

histogram([6, 2, 15, 3], "=") ➞ "======\n==\n===============\n==="

======
==
===============
===

histogram([1, 10], "+") ➞ "+\n++++++++++"

+
++++++++++

Data structure

algo
- iterate through each number in the array
  - repeat the character current number of times and log to the console
*/

// function histogram(arr, char) {
//   arr.forEach(count => console.log(char.repeat(count)));
// }

// console.log(histogram([1, 3, 4], "#")); //➞ "#\n###\n####"

// #
// ###
// ####

// console.log(histogram([6, 2, 15, 3], "=")); //➞ "======\n==\n===============\n==="

// ======
// ==
// ===============
// ===

// console.log(histogram([1, 10], "+")); //➞ "+\n++++++++++"

// +
// ++++++++++

/*
11:37 (7 minutes)
Problem
- input: array of integers from 1 to 10
- output: returns the missing number

- array is unsorted
- only on missing number

Examples
missing_num([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

missing_num([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

missing_num([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7

Data Structure
array => number ( missing number)

Algo
- iterate through num starting from 1 to 10 
  - if the num is not included in the input array 
    - return the num
*/

// function missing_num(arr) {
//   for (let num = 1; num <= 10; num += 1) {
//     if (!arr.includes(num)) {
//       return num
//     }
//   }
// } 

// console.log(missing_num([1, 2, 3, 4, 6, 7, 8, 9, 10])) // ➞ 5

// console.log(missing_num([7, 2, 3, 6, 5, 9, 1, 4, 8])) // ➞ 10

// console.log(missing_num([10, 5, 1, 2, 4, 6, 8, 3, 9])) // ➞ 7

/*
11:54
Problem
- input: string
- output: returns the left most digit

- each string will have at least 2 numbers

examples:
left_digit("TrAdE2W1n95!") ➞ 2

left_digit("V3r1ta$") ➞ 3

left_digit("U//DertHe1nflu3nC3") ➞ 1

left_digit("J@v@5cR1PT") ➞ 5

Data Structure
- string => get the first number in the string

Algo
- iterate through the string
  - if the string is a number
    - return the number

*/

// function left_digit(string) {
//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (!isNaN(Number(string[idx]))) {
//       return Number(string[idx]);
//     }
//   }
// }

// console.log(left_digit("TrAdE2W1n95!")) //➞ 2

// console.log(left_digit("V3r1ta$")) // ➞ 3

// console.log(left_digit("U//DertHe1nflu3nC3")) // ➞ 1

// console.log(left_digit("J@v@5cR1PT")) // ➞ 5

/*
12: 12
Problem
- input: nested array of subarrays, number value
- ouptut: boolean

- value is omnipresent if it exists in every subarray inside the main array

Example:
is_omnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true

is_omnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false

is_omnipresent([[5], [5], [5], [6, 5]], 5) ➞ true

is_omnipresent([[5], [5], [5], [6, 5]], 6) ➞ false


Data Structure
- nested array, number => boolean (if the number exist in every array)

Algo
- iterate through the subarrays ( if every subarray returns true)
   - check if at least on element in the subarray is equal to the number, if false 
     - return false
- returns true if every subarray returns true else return false
*/

// function is_omnipresent(arr, target) {
//   return arr.every(sub => {
//     // console.log(sub);
//     return sub.some(num => {
//       // console.log( target, '===', num);
//       return target === num}
//       );
//   });
// }

// console.log(is_omnipresent([[1, 1], [1, 1], [5, 1], [6, 1]], 1)) // ➞ true

// console.log(is_omnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)) // ➞ false

// console.log(is_omnipresent([[5], [5], [5], [6, 5]], 5)) // ➞ true

// console.log(is_omnipresent([[5], [5], [5], [6, 5]], 6)) // ➞ false

/*
Problem
- input: number
- output: corresponding value of the index in the fib series

- fib sequence: 1,1,2,3,5,8,13, 21, 34
- if the sequence number is at 1 or less return 1

Example

fibonacci(3) ➞ 3  /   2 + 1 = 3 
fibonacci(7) ➞ 21  // 
fibonacci(12) ➞ 23

- fib(1) => returns 1
- fib(2) => fib(1) + fib(0)  
- fib(3) => fib(2) + fib(1)

- fib(n) => fib(n - 1) + fib(n - 2)

Data Strucure
nth number => value of nth number 

Algo
- if nth number is less than or equal to 2 return 1
- return fib(nth - 1) + fib(nth -2) 
*/

// function fib(nth) {
//   if (nth <= 2) return 1;
//   console.log('push', nth);
//   return fib(nth - 1) + fib(nth - 2);
// } 
// // console.log(fib(0));
// // console.log(fib(1));
// // console.log(fib(2));
// // console.log(fib(3));
// // console.log(fib(4));
// console.log(fib(5));

/*
4:39 54 (15 minutes)
Problem
- input: string
- output a coded version of the string

Examples
- rules:
a = 4
i = 1 
s = 5
d = 0

Data Structures


Algo
init an empty string result
- iterate through the string 
  - if the current char is 'a'
    - replace with a '4'
  - else if the current char is 'e'
    - replace with a '3'
  else if the curent char is a 'i'
    -replace with a '1'
  else if the current char is a 'o'
    - repalce iwht a '0'
  else is the current char is a 's'
    replace witha a '5'
  else
    - append the current char
return result
*/

// function hacker_speak(inputString) {
//   let result = '';
//   for (let idx = 0; idx < inputString.length; idx += 1) {
//     let curChar = inputString[idx];
//     if (curChar === 'a') {
//       result += '4';
//     } else if (curChar === 'e') {
//       result += '3';
//     } else if ( curChar === 'i') {
//       result += '1';
//     } else if (curChar === 'o') {
//       result += '0';
//     } else if (curChar === 's') {
//       result += '5'
//     } else {
//       result += curChar
//     }
//   }
//   return result;
// }

// console.log(hacker_speak("javascript is cool")) // ➞ "j4v45cr1pt 15 c00l"

// console.log(hacker_speak("programming is fun")) // ➞ "pr0gr4mm1ng 15 fun"

// console.log(hacker_speak("become a coder")) // ➞ "b3c0m3 4 c0d3r"


/*
9:37 30 minutes
Problem
- input: two integer
- output: number (largest prime)

- finds the largest prime within the range of the two integers
- the range is inclusive 
- there will always be a prime number is the range

examples
fat_prime(2, 10) ➞ 7
# range [2, 3, 4, 5, 6, 7, 8, 9, 10] and the largest prime is 7.

fat_prime(10, 2) ➞ 7
# [10, 9, 8, 7, 6, 5, 4, 3, 2] and the largest prime is 7.

fat_prime(4, 24) ➞ 23
# range [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] the largest prime is 23.

Data Structure


Algo
- get the smaller input number 
- get the larger input number 
- declare largest prime
- iterate starting from the small number to the large number
  - if the current number is a prime and it is larger or undefined
    - reassign largest prime to current number
- return larges prime

- define isPrime (curNum)
  - iterate from 2 to curNum - 1
    - if curNum is divisible by current number
      - return false
- return true
*/

// function fat_prime(num1, num2) {
//   let small = Math.min(num1, num2);
//   let large = Math.max(num1, num2);
//   let largestPrime;
//   for (let start = small; start <= large; start += 1) {
//     //console.log(isPrime(start));
//     if (isPrime(start) && (start > largestPrime || largestPrime === undefined)) {
//       //console.log(largestPrime);
//       largestPrime = start;
//     }
//   }
//   return largestPrime;
// }

// function isPrime(curNum) {
//   for (let count = 2; count < curNum; count += 1) {
//     if(curNum % count === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(fat_prime(2, 10)); //➞ 7
// //# range [2, 3, 4, 5, 6, 7, 8, 9, 10] and the largest prime is 7.

// console.log(fat_prime(10, 2)) // ➞ 7
// //# [10, 9, 8, 7, 6, 5, 4, 3, 2] and the largest prime is 7.

// console.log(fat_prime(4, 24)) //➞ 23
// //# range [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] the largest prime is 23.

// console.log(isPrime(5));
// console.log(isPrime(10));

/*
8:45
Problem
- input: array of booleans
- string: number of longest consecutive logge in days

Example
daily_streak([true, true, false, true]) ➞ 2
daily_streak([false, false, false]) ➞ 0
daily_streak([true, true, true, false, true, true]) ➞ 3

Data structure
array => number of the longest streak

Algo
  - boolComp to the first element
  - init largestStreak to 1
  - init streakCount to 1
  - iterate through the array starting at second element
      - if the current bool is equal to boolcomp
        - increment streakCount by 1
      - else 
        - reassign boolComp to the opposite of boolComp
        - reassign streakCount to 1
      - if streakCount is greater than largestStreak
          - reassign largestStreak to streakCount
      

  - return largestStreak

define toggle(boolComp)
  if boolComp is true
    - reassign boolComp to false
  - else
    - reassign to true
*/

// function daily_streak(arr) {
//   let boolComp = arr[0];
//   let largestStreak = 1;
//   let streakCount = 1;
//   for (let idx = 1; idx < arr.length; idx += 1) {
//     if (arr[idx] === boolComp) {
//       //console.log(arr[idx], boolComp);
//       streakCount += 1;
//     } else {
//       boolComp = toogle(boolComp);
//       streakCount = 1;
//       }
//     if (streakCount > largestStreak) {
//       largestStreak = streakCount;
      
//     }
  
//   }
//   return largestStreak;
// }

// let value = true;
// function toogle(boolComp) {
//   value = boolComp ? false : true;
// }



/*
get the longest streaks for true

Data Structure
init largestCount to 0
array of true and false => init count for only true streaks


Aglo
- init largestCount to 0
- init count to 0
- iterate through the boolean
  - if the currrent boolean is true 
    - increment count
  else
    - reassign count to 0 
  - if count is greater than largestCount
      - reassign largest count to count
- return largestCount
*/

// function daily_streak(arr) {
//   let largestcount = 0;
//   let count = 0; 
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     if (arr[idx] === true) {
//       count += 1;
//     } else {
//       count = 0;
//     }
//     if (count > largestcount) {
//       largestcount = count;
//     }
//   }
//   return largestcount;
// }
// console.log(daily_streak([true, true, false, true])) //➞ 2

// console.log(daily_streak([false, false, false])) // ➞ 0

// console.log(daily_streak([true, true, true, false, true, true])) // ➞ 3

/*
10:45
Problem
- input: array of letters
- output: sum of the letters

- add letters: take the value and add then together 
                convert it back to letter?
- letters can wraps

Examples
add_letters(["a"]) ➞ "a"
add_letters(["a", "b"]) ➞ "c"  // 1 + 2 = 3  => c
add_letters(["a", "b", "c"]) ➞ "f"
add_letters(["a", "b", "c", "d", "e", "f"]) ➞ "u"
add_letters(["y", "a"]) ➞ "z"
add_letters(["y", "c"]) ➞ "b"
add_letters(["z", "a"]) ➞ "a"
add_letters(["x", "y", "z"]) ➞ "w" // 24 + 25+ 26  = 75  get remainder  of 26
add_letters([]) ➞ "z"


Data structure
array of characters => get the sum of the characters => get the remainder of the characters => convert back to the character ( sum equvalent)


Algo

how to get the character to map 
a => 1 ... z = 26
get the code value at char and add to sum 
get the char at code value and return

- init sum to 0
- iterate through the chars
  - get the code value of current char ( and add the sum ) 
  - divide the remainder of the sum by 26 and return the remainder
  - covert the remander back to the character UTF representation

*/

// console.log('a'.charCodeAt(0) - 96)
// console.log('z'.charCodeAt(0));

// console.log('`'.charCodeAt(0));
// console.log(String.fromCharCode(0));

// function add_letters(chars) {
//   let alpha = ' abcdefghijklmnopqrstuvwxyz';
//   let sum = 0;
//   for (let idx = 0; idx < chars.length; idx += 1) {
//     // sum += chars[idx].charCodeAt(0) - 96; 
//     sum += alpha.indexOf(chars[idx]);
//     console.log(sum);
//   }
//   //return sum;
//   let remainder = sum % 26; 
//   if (remainder === 0) return 'z';
//   let char = String.fromCharCode(remainder + 96);
//   return char;
//}

// console.log(add_letters(["a"])) //➞ "a"
// console.log(add_letters(["a", "b"])) // ➞ "c"
// console.log(add_letters(["a", "b", "c"])) //➞ "f"
// console.log(add_letters(["a", "b", "c", "d", "e", "f"])) // ➞ "u"
// console.log(add_letters(["y", "a"])) // ➞ "z"
// console.log(add_letters(["y", "c"])) // ➞ "b"
// console.log(add_letters(["z", "a"])) // ➞ "a"
// console.log(add_letters(["x", "y", "z"])) // ➞ "w"
// console.log(add_letters([])) // ➞ "z"

/*
Problem
- input: array of numbers
- output: a new array containin only primes

- returned array must contain primes in the order they appear in the original array

examples:
filter_primes([7, 9, 3, 9, 10, 11, 27]) ➞ [7, 3, 11]

filter_primes([10007, 1009, 1007, 27, 147, 77, 1001, 70]) ➞ [10007, 1009])

filter_primes([1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097]) ➞ [1009, 3, 61, 1087, 1091, 1093, 1097])

Data Structure
- array of numbers => new array of only primes

Algo
- init primes to an empty array
  - iterate through the input array
    - if the current number is a prime (return boolean of isPrime)
      - append the number to primes
- return primes

define isPrime (curNum)
  iterate from 2 called count and continue iterating by 1 if coutn is less than curNum
    if curNum is divisible by count
      return false
  return true
*/

// function filter_primes(arr) {
//   const primes = [];
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     if (isPrime(arr[idx])) {
//       primes.push(arr[idx]);
//     }
//   }
//   return primes;
// }

// function filter_primes(arr) {
// return arr.filter(num => isPrime(num));
// }

// function isPrime(curNum) {
//   if (curNum <= 1) return false;
//   for (let count = 2; count < curNum; count += 1) {
//   // console.log(curNum, '%', count, '=', curNum % count);
//     if (curNum % count === 0) return false;
//   }
//   return true;
// }

// console.log(filter_primes([7, 9, 3, 9, 10, 11, 27])) // ➞ [7, 3, 11]

// console.log(filter_primes([10007, 1009, 1007, 27, 147, 77, 1001, 70])) // ➞ [10007, 1009]

// console.log(filter_primes([1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097]))// ➞ [1009, 3, 61, 1087, 1091, 1093, 1097]

/*
3:17
Problem
- iput: variable number of arguments ( each number representing the number of items in a group)
- output: number of combinations of choices if you would have selected one item from each group

Examplescombinations(2, 3) ➞ 6

combinations(3, 7, 4) ➞ 84
3 * 7 = 21 * 4 = 84 

combinations(2, 3, 4, 5) ➞ 120
6 * 4  = 24 * 5 = 120 

Data structure:
- number inputs => array of numbers
- get the product of all numbers and return 


Algo:
- number inputs => array of numbers
- get the product of all numbers and return 
*/

// function combinations(...numbers) {
//   return numbers.reduce((acc, num) => acc * num, 1);
// }

// console.log(combinations(2, 3)) // ➞ 6

// console.log(combinations(3, 7, 4)) // ➞ 84

// console.log(combinations(2, 3, 4, 5)) // ➞ 120

/*
3:36
Problem
- input: number
- output: array of all the input numbers factors

- no duplicates of the factors
- examples 


factorize(12) ➞ [1, 2, 3, 4, 6, 12]

factorize(4) ➞ [1, 2, 4]

factorize(17) ➞ [1, 17]

Data Structure
- number => array of factors


Algo
- init a factors1 empty array
- init factors2 empty array
- iterate starting from 1 (count) and increment by 1 if count is less than or equal to input number
  - if input number is divisible by count 
    - add the count factors1 array
    - init factor2 to input number divided by count
    - if factor2 is  not included in factor1 array
      - add factor2 to factors2 array
- return a single array with the factors from factors1 and factors2

less time consuming method 
  - find the square root of the input number square root of 12 is 3.somthing round down
*/

// function factorize(multiple) {
//   const factors1 = [];
//   const factors2 = [];
//   let squareRoot = Math.floor(Math.sqrt(multiple))
//   for (let count = 1; count <= squareRoot; count += 1) {
//     if (multiple % count === 0) {
//       factors1.push(count);
//       let factor2 = multiple / count;
//       if (!factors1.includes(factor2)) {
//         factors2.unshift(factor2);
//       }
//     }
//   }
//   return factors1.concat(factors2);
//   // return factors1;
// }

// console.log(factorize(12)) ///[1, 2, 3, 4, 6, 12]

// console.log(factorize(4)) ///[1, 2, 4]

// console.log(factorize(17)) //[1, 17]

/*
4:12
Problem
- input: array of strings
- output: boolean 

- return true if all elements in the array are identical else false

Data Structure
array => boolean

Algo
- init firstChar to the first string in the array
- pass each string to the callback function
- callback check if the current passed in string is equal to the firstChar
- if every char is equal to the first char return tur
*/

// function testJackpot(arr) {
// let firstString = arr[0];
// return arr.every(string => string === firstString);
  
// }


// console.log(testJackpot(["@", "@", "@", "@"])) // ➞ true

// console.log(testJackpot(["abc", "abc", "abc", "abc"])) // ➞ true

// console.log(testJackpot(["SS", "SS", "SS", "SS"])) // ➞ true

// console.log(testJackpot(["&&", "&", "&&&", "&&&&"])) // ➞ false

// console.log(testJackpot(["SS", "SS", "SS", "Ss"])) // ➞ false

/*
7:18
Problem:
- input: object, min number of orders, min number of order prices
- output: array of eligible names for free pizza

-  object consisting of key names and array of pizza prices ordered
- if no eligible names return an empty array

example:
  pizza_points(customers, 5, 20) ➞ ["Spider-Man"]

  pizza_points(customers, 3, 10) ➞ ["Batman", "Spider-Man"]

  pizza_points(customers, 5, 100) ➞ []
  
Data Structure:
  - object of key names set to array of pizza prices => a new array with eligible names
  
Algo:
  - init result array
  - iterate through the object 
    - if the current array length is equal or greater than the min number of orders
    - and the max number in the array is greater or equal to the min price
      - add the key name to the result array 
  - return result array

*/

const customers = {
  "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
  "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
}

// function pizza_points(customers,minNum, minPrice) {
//   const result = [];
//   for (let user in customers) {
//     let arr = customers[user];
//     // console.log(arr);
//     if (isNumofPrice(arr, minPrice, minNum)) {
//       result.push(user);
//     }
//   }
//   return result;
// }

// function isNumofPrice(arr, minPrice, minNum) {
// let count = 0; 
// arr.forEach(price => {
//   if (price >= minPrice) {
//     count += 1;
//   }
// });
// //console.log(count);
// return count >= minNum;
// }

// console.log(pizza_points(customers, 5, 20)) // ➞ ["Spider-Man"]


// console.log(pizza_points(customers, 3, 10)) // ➞ ["Batman", "Spider-Man"]

// console.log(pizza_points(customers, 5, 100)) // ➞ []

/*
8:03
Problem
- input:  array of digits from 1 to 9 and array of number to be made out of the digits
- output: boolean

- return true if you can build the numbers using only the digits you have

- given: array of numbers from 0 to 9

*/


/*
8:09
Problem
- input: number (amount of money), array of coins denominations
- output: number of ways you can make change

coins_combinations(4, [1, 2]) ➞ 3

4 => 1, 2, 4
4 % 1
4 % 2


# 1+1+1+1 = 4 4 % 1 = 0 
# 1+1+2 = 4 4 % 2 = 0 
# 2+2 = 4

coins_combinations(10, [5, 2, 3]) ➞ 4

coins_combinations(11, [5, 7]) ➞ 0
*/

/*
8:20

Problem
- input 
- output

*/