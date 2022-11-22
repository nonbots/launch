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