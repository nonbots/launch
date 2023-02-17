/*

METHODS

STRINGS:

- SUBSTRING: takes a starting index and an and ending index (exclusive)
  - returns the substring at indices
  
- INDEXOF: takes a value 
   - returns the index where ithe value is found
   - if the value is not found returns -1
   
ARRAY:
- SPLICE: takes a starting index and the number of elements to remove
  - returns an array of the removed elements
  - removes the elements from the calling array
  
- SLICE: takes a starting index and an ending index(exclusive)
  - returns an array of the elements    
  
- MAP: takes a callback 
  - returns an array with the elements transformed
  
- REDUCE: takes a callback
  returns a array or a value
  
- FILTER: takes a callback
  - returns an array of the selected elements

- EVERY: takes a callback 
  - returns a boolean value of ture if all elements from the calling array when passed to the callbackreturns a truthy value

- SOME: takes a callback
  - returns boolean value of true if at least one element from the calling array when passed to the callback returns a truthy value

- INDEXOF: takes a value 
   - returns the index where ithe value is found
   - if the value is not found returns -1
   
- SORT: does and does not take a callback 
  - return a sorted array in ascending order if values are string
  - callback: (a, b) => a - b => sorts numbers in ascending order
  - callback: (a, b) => b - a => sorts numbers in descending order


OBJECTS: 
 
- OBJECTS.ENTRIES: takes an object
  - returns a nested array of subarrays of the key and value pairs

- OBJECTS.KEYS: takes an object
  - returns an array of all the keys in the object

- OBJECTS.VALUES: takes an object
  - returns an array of all the values in the object
  
*/

/*
TYPES OF PROBLEMS:

1.  get the substrtings and then do something with the substrings

2. Array of numbers 
  => return a new transformed array 
  => return the largest sum of a number of consecutive numbers
    - use the slice and reduce method to get the sum of consecutive numbers

3. Count the number of times an element in a string or an array occurs
  - use an object the element as key and occurences as valuea
  ... then do something with that object


4. Manipulate the string in some way

*/

// get leading substring

//'abc' => a, ab, abc
// const string = 'abc';
// function getLeadingSubstring(string, start) {
//   for (let endIdx = start + 1; endIdx <= string.length; endIdx += 1) {
//     console.log(string.substring(start, endIdx));
//   }
// }


// function getSubString(string) {
//   for (let startIdx = 0; startIdx <= string.length; startIdx += 1) {
//     getLeadingSubstring(string, startIdx);
//   }
// }
// getSubString(string);

/*
11:58 12:16 (18 minutes);

Problem:
- input: 
- output: 

- rotates an array by moveing the first element to the end of the array.
- do not modify the passed in array
- if input is not an array return undefined
- if input is an empty array return an empty array
- if the input array only has one element return the passed in array


Examples:

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]); 

rotateArray();                         // undefined
rotateArray(1);                        // undefined

Data structure
create a new array to remove and add elements

Algo:

- if input is not an array return undefined
- if input array length is less than a length of 2 return the passed in array
- created a copy of the passed in array and init to copyArr
- remove first element from copyArr and init removedElem to the removed element
- add removedElem to the end of the array

return copyArr
*/

// function rotateArray(arr) {
//   if (!Array.isArray(arr)) return undefined;
//   if (arr.length < 2) return arr;
//   const arrCopy = arr.slice();
//   let removedElem = arrCopy.shift();
//   arrCopy.push(removedElem);
//   return arrCopy;
// }

// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined

// console.log(rotateArray(['a']));                    // ["a"]
// console.log(rotateArray([]));        

// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
// console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]

/*
12:36 12:53 17 minutes

Problem:
- output:
- input:

- rotates the last count digits of a number
- move the first of the digits that you want to rotate to the end and shift the remainding digits to the left
- probably do not want to mutate the array

Examples:
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912


rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

Data Structure:


Algo:
- convert the number into an array of character numbers
- remove the number at count starting from the right and init to removedNum
  the length of the array - count
- add removedNum to the array at the end
- convert back to a number and return it
*/

// function rotateRightmostDigits(num, count) {
//   let arrNumChars = String(num).split('');
//   let index = arrNumChars.length - count;
//   rotateArray(arrNumChars, index);
//   return Number(arrNumChars.join(''));
  
// }

// function rotateArray(arr, index) {
//   let removedElem = arr.splice(index, 1);
//   arr.push(removedElem);
// }

// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917

/*
1:22 1:38 (16 minutes)

Problem: 
- input: number
- output: rotated number

- move each digit from the right to the end

Examples:

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

Data Structure:
- convert the number to an array of chars of numbers
 
Algo:
- init arrCharNums to arry of char nums
- iterate through the array of char numbers stopping at the second last index
  - on the current number call the rotateArray function
- return the number by first converting it to a string then number
*/

// function  maxRotation(num) {
//   const arrCharNums = String(num).split('');
//   for (let idx = 0; idx < arrCharNums.length - 1; idx++) {
//     rotateArray(arrCharNums, idx);
//   }
//   return Number(arrCharNums.join(''));
// }

// function rotateArray(arr, index) {
//   let removedElem = arr.splice(index, 1);
//   arr.push(removedElem);
// }

// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845

/*
1:50 1:02 12 minutes

Problem:
- input: string (sentence)
- output: sting 

- word of a number converted to a number 

Example:
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

Data Structure:
create an object => {'one': 1..}

Algo:
- iterate through the key pair values in the object 
  - if the key exist in the string 
    - replace the word in the string rassign the string to string
- return the string

*/
// const obj = {
//   zero: 0,
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
// }
// function wordToDigit(sentence) {
//   for (let key in obj) {
//     if (sentence.includes(key)) {
//       sentence = sentence.replaceAll(key, obj[key]);
//     }
//   }
//   return sentence;
// }

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

/*
2:28 : 42 14 minutes

Problem:
- input: nth sequence of the fib (number)
- value at nth sequence (number)

- fib is a sequence of numbers in which each number is the sum of the previous two numners
- first two numbers are 1 and 1 and third is 3

- write a recursive function that 
  - calls itself at least once
  - has an ending condition 
  - result of each recursion are used in each step
  
- computes the nth fib number 

Example:
fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2 => 1, 1, 2 
fibonacci(4);       // 3 => 1, 1, 2, 3
fibonacci(5);       // 5 => 1, 1, 2, 3, 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

Data structure:
base case is when the nth is 1 which returns 0

Algo: 
of the the nth number is 1 return 1

 3 => n - 1 + n - 2 

*/

// function fibonacci(nth) {
//   if (nth < 2) return 1; 
  
//   return fibonacci(nth - 1) + fibonacci(nth - 2);
// }
// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
// console.log(fibonacci(5));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765


/*
2:59
Problem:
- input: number (nth of the sequence)
- output: number value of  nth

- create a procedural method 

Data structure
- array to store the last and second last number in the sequence
-  num1 is 1 and num2 is 1

Algo
- initialized firstSecondNums to [1,1]
- if nth is less than 2 return 1
- start the loop at index at 2, if the index less or equal then nth, increment nth
  - reassign the second element to the first element
- add the first and second element to get the sum and init the second element and return
*/

// function fibonacci(nth) {
//   const firstSecondNums = [1,1];
//   if (nth < 2) return 1;
//   let third; 
//   for ( let idx = 3; idx <= nth; idx++) {
//     third = firstSecondNums[0] + firstSecondNums[1];
//   // console.log(third);
//     firstSecondNums[0] = firstSecondNums[1];
//     firstSecondNums[1] = third;
//   }
//   return third;
// }
// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050

/*
5:29 : 55 (26 minutes)

Problem:
- input: string (always at least one character)
- output: object

- object contains keys: lowercase, uppercase, neither with percentage value to 2 decimal places

example:

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Data Structure:
create an empty object to store key and value pairs

Algo:
init obj to all keys
init lowerCount to 0
init upperCount to 0
inti neither to 0
- iterate through the string
  - if the char is a lowercase and alpha char 
    - increment lowerCount by 1
  - if the char is a uppercase and alpha char
    - increment upperCount by 1
  - else
    - increment neither by 1
for each key:
  -set the value of the count / string length * 100 and convert to two decimal places 

*/
// function letterPercentages(string) {
//   const obj = {
//     lowercase:'',
//     uppercase: '',
//     neither: '',
//   }
//   let lowerCount = 0;
//   let upperCount = 0;
//   let neither = 0;
//   for (let idx = 0; idx < string.length; idx++) {
//     let curChar = string[idx];
//     if (curChar >= 'a' && curChar <= 'z') {
//       lowerCount += 1;
//     } else if (curChar >= 'A' && curChar <= 'Z') {
//       upperCount += 1;
//     } else {
//       neither += 1;
//     }
//   }
//   //console.log(lowerCount, upperCount, neither);
//     obj.lowercase = ((lowerCount / string.length) * 100).toFixed(2); 
//     obj.uppercase = ((upperCount / string.length) * 100).toFixed(2); 
//     obj.neither = ((neither / string.length) * 100).toFixed(2); 
//     return obj;
    
// }

// console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/*
8:59 : 24 ( 25 minutes)

Problem:
- input: three numbers that are lengths of the sides
- output: string 

- rules:
  
  - invalid triangle:  
    - the sum of the two shortest sides are less than the length of the longest side
    - no lengths are 0
  
  - equilateral: all three sides are the same in length
  - isoceles: two sides are the same in length
  - scalene: no sides the the same in length

Examples:
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

Data Structure:
store all three sides in array

Algo:

init sortedSides to and array of all the input number in ascending order

- check if the triangle is valid first
  - if any of the lengths are 0 
  - if sum of the two shorter sides are less than the longest side
- return invalid

- check if equilateral 
   - check if side1 is equal to side2 and side1 is equal to side3
   - return equilateral
- else if side1 is not equal to side2 and side1 is not equal to side3 //
  - return scalene
// 1.5, 3, 3  
*/

// function triangle(side1, side2, side3) {
//   const sortedSides = [side1, side2, side3].sort((a,b) => a - b);
//   if (sortedSides[0] === 0) return 'invalid';
//   if (sortedSides[0] + sortedSides[1] < sortedSides[2]) return 'invalid';
//   if (sortedSides[0] === sortedSides[1] && sortedSides[0] === sortedSides[2]) return 'equilateral';
//   if (sortedSides[0] !== sortedSides[1] && sortedSides[0] !== sortedSides[2] && sortedSides[1] !== sortedSides[2]) return 'scalene';
//   return 'isosceles'
// }


// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

/*
10:34 50 (16 minutes)

Problem:
- input:
- output:

- determine if a triangle is right, acute or obtuse

- valid triangle:
  - all the angles must sum to 180
  - every angle is greater than 0
  
- right: one angle is 90
- acute: all angles are less than 90 
- obtuse: one angle is greater than 90

Example:
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"

Data Structure:
- store the angles in an array stored in ascending order

Algo:

- init sortedAngles to a sorted array of angles in ascending order

- check if the first element is 0 returh invalid
- check if the sum of the angles is not 180 return invalid

check if one of the angles is 90 return right
check if one of the angles is greater than 90 return obtuse

return acute

*/

// function triangle(angle1, angle2, angle3) {
//   const sortedAngles = [angle1, angle2, angle3].sort((a,b) => a - b);
//   if (sortedAngles[0] === 0 || sortedAngles[0] + sortedAngles[1] + sortedAngles[2] !== 180) return 'invalid';
//   if (sortedAngles.includes(90)) return 'right'
//   let isObtuse = sortedAngles.some(angle => angle > 90); 
//   if (isObtuse) return 'obtuse';
//   return 'acute';
// }
// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"

/*
11:12 31 (19 mminutes)
Problem:
- input: number (could not be a feature number)
- output: number ( next feature number)

- feature number
  - odd 
  - multiple of 7
  - all digit occur only once
  
- largest number is 9876543201

Example:

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

Data Structure: 



Algo:

init num to the input number plus 1
- while the input number is less than 9876543201 
  - if the number is a multiple of 7 && odd && all digit occur only once 
    - return the number 
  - else increment the number by 1 
- return 'There is no possibel number'

define uniqueDigits(num)
- convert to an array of string numbers
 - sort the numbers 
 - iterate through the array 
  - if the next number is the same as the current number 
    - return false
- return true
*/

// function featured(inputNum) {
// let num = inputNum;
//   while (num <= 9876543201) {
//     num += 1;
//     if (num % 7 === 0 && num % 2 === 1 && isUniqueDigits(num)) {
//       return num;
//     }
//   }
//   return 'There is no possible number'
// }

// function isUniqueDigits(num) {
//   const numChars = String(num).split('').sort();
//   for (let idx = 0; idx < numChars.length; idx++) {
//     if (numChars[idx] === numChars[idx + 1]) return false
//   }
//   return true;
// }

// console.log(isUniqueDigits(12));           // 21
// console.log(isUniqueDigits(997)); 


// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

/*
1:32 : 45 (13 minutes)

Problem:
- input: number (count)
- output: number ( the difference)

- computes the difference between the square of the sum of the first count positive integers and the sum of th sqaures fo the fist count positive integers

Examples:

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(3); // 1 => ( 1)**2 - 1**2 = 0

Data Structure:

Algo:
init sum1 to 0; 
init sum2 to 0;
- while the count is greater than 0
  - increment sum1 by count
  - squared count and increment by current sum2 value
  - decrement count by 1

return the difference of sum1 squared and sum2

*/
// function sumSquareDifference(count) {
//   let sum1 = 0;
//   let sum2 = 0;
//   while (count > 0) {
//     sum1 += count;
//     sum2 += count**2
//     count -= 1;
//   }
//   return sum1**2 - sum2;
// }

// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(100));    // 25164150

/*
Problem
- input: string of digits
- output: a number representation of the string digits

- rules: 
  - can not ust parseInt and Number method
  - only positive
  
Example: 
'4321' => 4321
'570' => 570

data structure:
- create an object that stores the string number as key and it number value as a value
0 => 0 + 4 = 4 * 10 = 40   
40 => 40 + 3 = 43 * 10 = 430
430 => 430 + 2 = 432 * 10 = 4320 
4320 => 4320 + 1 = 4321 

Algo:
- init result to 0
- iterate through the string
  - use the current char to get the number value
  - add to the current result value the the number value
  - if at the not at the last element in the arry
    - mutiply the current result by 10
- return the result

*/
// const obj = {
//   0: 0,
//   1: 1,
//   2: 2,
//   3: 3,
//   4: 4,
//   5: 5,
//   6: 6,
//   7: 7,
//   8: 8, 
//   9: 9
// }

// function stringToInteger(stringInput) {
//   let result = 0; 
//   for (let idx = 0; idx < stringInput.length; idx++) {
//     let digit = obj[stringInput[idx]];
//     result += digit;
//     if (idx + 1 < stringInput.length) {
//       result *= 10;
//     }
//   }
//   return result;
// }
// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

/*
6:12
Problem:
- input: array of numbers
- output: mutated the same array in ascending order

- sort the numbers in a array in ascending order inplace

Examples: 
- strings are sorted in alphabetical order

Data Structure:

Algo:

- iterate through array length number of times
  - init isSwap to false
  - iterate through each number ( iterate one number less after each iteration)
    - if the current number is greater than the next number
      - swap the number
      - int isSwap to true
      
  - if isSwap is false return array
return the array

*/
// function bubbleSort(arr) {
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     let isSwapped = false;
//     for (let idxNum = 0; idxNum < arr.length - idx; idxNum += 1) {
//       if (arr[idxNum] > arr[idxNum + 1]) {
//         let temp = arr[idxNum];
//         arr[idxNum] = arr[idxNum + 1];
//         arr[idxNum + 1] = temp;
//         isSwapped = true;
//       }
//     }
//     if (!isSwapped) return arr;
//   }
//   return arr;
// }



// let array1 = [5, 3];
// console.log(bubbleSort(array1));
// console.log(array1);    // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// console.log(bubbleSort(array2));
// console.log(array2);    // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// console.log(bubbleSort(array3));
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/*
1: 46

Problem:
- input: text (of sentences)
- output: string (the longest sentence and the number of words in the sentence)

- sentences end with ., !, ?
- any sequence of characters that are not spaces or sentence-ending  as a word --
- perserve the punctuation from the end of the sentence.

Examples:

Data Structure:
return a new array that contains each sentence and add the sentence to a new array
- convert the each sentence to an array of words to get its length

Algo:

- getSentences (text)
  - init sentences to an empty array
  - init sentence to empty string
  - iterate through the text
    - append current char to sentence
    - if the current char is a !.? 
      - add the sentence to sentences
      - reassign sentence to empty string
  - return sentences

- init largestSentence to empty string
- init largestCount to 0
- iterate through sentences 
  - convert sentence to an array of words get the its length
  - if the length is greater than largestCount
    - reassign largestCount to length
    - reassign largestSentence current sentence
- print out largestSentence and largestCount


get the sentence with the longest word

- longestlength init to 0
- sentence to emtpy string
- longestWord inti to empty string
- iterate through each sentence
  - iterate through each word
    - get the length of each word
    - if the current length is greater than the current longestLength
      - reassign the longestLength
      - reassign the sentence to currentSentence
- log sentence and wordlength

*/

// function longestSentence(longText) {
//   const sentences = getSentences(longText);
//   let longestLength = 0; 
//   let sentenceWithWord = '';
//   let longestWord = '';
//   sentences.forEach(sentence => {
//     sentence.split(' ').forEach(word => {
//       let length = word.length;
//       if (length > longestLength) {
//         longestLength = length;
//         longestWord = word;
//         sentenceWithWord = sentence; 
//       }
//     });
//   });
//   console.log(longestWord, longestLength, sentenceWithWord);
// }

// // function longestSentence(longText) {
// //   const sentences = getSentences(longText);
// //   let longestSentence = '';
// //   let longestCount = 0;
// //   sentences.forEach(sentence => {
// //     let length = sentence.split(' ').length;
// //     if (length > longestCount) {
// //       longestCount = length;
// //       longestSentence = sentence;
// //     }
// //   });
// //   console.log(longestSentence + '\n' +  'The longest sentence has ' + longestCount + ' words'); 
// // }

// function getSentences(longText) {
//   const sentences = [];
//   let sentence = '';
//   for (let idx = 0; idx < longText.length; idx += 1) {
//     let curChar = longText[idx];
//     sentence += curChar;
//     if ('.!?'.includes(curChar)) {
//       sentences.push(sentence.trim());
//       sentence = '';
//     }
//   }
//   return sentences;
// }


// let longText =
//   'Four score and seven years ago our fathers brought forth on this ' +
//   'continent a new nation, conceived in liberty, and dedicated to the ' +
//   'proposition that all men are created equal. Now we are engaged in a ' +
//   'great civil war, testing whether that nation, or any nation so ' +
//   'conceived and so dedicated, can long endure. We are met on a great ' +
//   'battlefield of that war. We have come to dedicate a portion of that ' +
//   'field, as a final resting place for those who here gave their lives ' +
//   'that that nation might live. It is altogether fitting and proper that ' +
//   'we should do this.';

// let longerText = longText +
//   'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
//   'we can not hallow this ground. The brave men, living and dead, who ' +
//   'struggled here, have consecrated it, far above our poor power to add ' +
//   'or detract. The world will little note, nor long remember what we say ' +
//   'here but it can never forget what they did here. It is for us the ' +
//   'living, rather, to be dedicated here to the unfinished work which ' +
//   'they who fought here have thus far so nobly advanced. It is rather ' +
//   'for us to be here dedicated to the great task remainingererwerwer before us -- ' +
//   'that from these honored dead we take increased devotion to that ' +
//   'cause for which they gave the last full measure of devotion -- that ' +
//   'we here highly resolve that these dead shall not have died in vain ' +
//   '-- that this nation, under God, shall have a new birth of freedom -- ' +
//   'and that government of the people, by the people, for the people, ' +
//   'shall not perish from the earth.';

// console.log(longestSentence(longText));
// // // Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
// // //
// // // The longest sentence has 30 words.

// console.log(longestSentence(longerText));
// // // // It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
// // // //
// // // // The longest sentence has 86 words.

// console.log(longestSentence("Where do you think you're going? What's up, Doc?"));
// // // // Where do you think you're going?
// // // //
// // // // The longest sentence has 6 words.

// console.log(longestSentence("To be or not to be! Is that the question?"));
// // // // To be or not to be!
// // // //
// // // // The longest sentence has 6 words.


/*
3:44 - 51 (7 minutes)
Problem:
- input: integer (positive or negative or 0)
- output: boolean

- returns true if the number's absolute value is odd and false if even

Examples:

Data Structure:

Algo:
- convert input number to it's absolute value
- if number when divided by 2 has a remainder of 1
  - return true
- else
  - return false

*/

// function isOdd(number) {
//   number = Math.abs(number);
//   if (number % 2 === 1) return true;
//   return false;
// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

/*
3:57 4:01 (4 minutes)
- input: none
- output: none

- log all odd numberd from 1 to 99 to the console on each seperate line

Algo
- loop starting from 1 to 99 and increment by 2 each time
*/
// for (let num = 1; num <= 99; num += 2) {
//   console.log(num);
// }

// for (let num = 2; num <= 99; num += 2) {
//   console.log(num);
// }

/*
4:04 - 11 (7 minutes);
Problem:
- input: length and width in meters
- output: none

- logs the area of the roomm to the console in both meters and square feet
- 1 sq. meter = 10.7639 sq. feet

Data Structure:


Algo:
- get the area in meters
  - width times length
- get the araa in feet
  - area in meters times 10.7639
*/

// function area(width, length) {
//   let areaMeter = width * length;
//   let areaFeet = areaMeter * 10.7639;
//   console.log(areaMeter,'meter squared');
//   console.log(areaFeet,'feet squared');
// }

// area(10, 7);

/*
Problem:
- input: numbers of the bill and tip percentage
- output: none

- find the tip and log both the tip and the total bill

Data Structure:

Algo:
- init tip to bill times (the tip percentage divide by 100)
- init total by adding to tip and bill total

- print the tip and total

*/

// function tipCal(bill, tipPercentage) {
//   let tip = bill * (tipPercentage / 100);
//   let total = bill + tip;
  
//   console.log ('tip:', tip, 'total:', total);

// }

// tipCal(200, 15);


/*
4:38 - 50 
Problem:
- input: integer greater than 0, string of 'sum' or 'product'
- output: number (sum or product)

- sum or product of all the numbers between i and the input number inclusive

Examples:

5, sum => 5 + 4 + 3 + 2 + 1 = 15

Data Structure: 

Algo:

init result = number
decrement number by 1
- while the number is greater than 0
  - if (operation = 'sum') {
    add current result with number
  } else {
    multiply current result with number
  }
  decrement number by 1
*/

// function sumProduct(number, operation) {
//   let result = number;
//   number -= 1;
//   while (number > 0) {
//     if (operation === 'sum') {
//       result += number;
//     } else {
//       result *= number;
//     }
//     number -= 1;
//   }
//   return result;
// }

// console.log(sumProduct(6, 'product'));

/*
7:24 - 34 ( 10 minutes)

Problem:
- input: two strings ( string are of different lengths)
- output: string

- determines the length of the two strings
- returns the result of concatenating the shorter string, the longer string and then the shorter string once again.

Examples:

Data Structure:

return a new string

Algo:
- if str1's length is smaller than str2's length
  - return concatenation with str1, then str2, then str1
- return concatenation with str2, then str1, then str2

*/

// function shortLongShort(str1, str2) {
//   if (str1.length < str2.length) return str1 + str2 + str1;
//   return str2 + str1 + str2;
// }

// console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
// console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
// console.log(shortLongShort('', 'xyz'));         // "xyz"

/*
7:38
Problem
- input: year greater than 0
- output: boolean ( if is a leap year)

- leap years occur in every year that is evenly divisible by 4
- unless the year is also dividble by 100
- unless the year is aldo divisible by 400

example:
2016 divisible by 4 not 100 => true
2015 not divisible by 4  => false
2100 divisible by 4 and 100 not by 400 => false
2400 divisible by 4 and 100 and 400 => true

Data Structure:

Algo:
- if divisible by 4 
  - not divisible by 100
    - return true
  - else
   - divisible by 400
    - return true
  - else return false
- else 
  - return false

*/

// function isLeapYear(year) {
//   if (year <= 1752 && year % 4 === 0) return true;
//   if (year % 4 === 0 ) {
//     if (year % 100 !== 0) {
//       return true;
//     } else {
//       if (year % 400 === 0) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   } else {
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

/*
if the number and any numbers below it are divisible meaning no remainders
what is prime. Has no factors than other than 1 and itself?
Find all the factors of:
17
1 X 17 = 17
20
1 X 20 = 20
2 X 10 = 20
4 X 5 = 20

20 % 19 = 1
20 % 18
20 % 15
20 % 10 = 0
20 % 5 = 0

factors that make up 20 

multiple of  20 40 60
factors of 20
factors are numbers that produce the product (20)
is 20 a multiple of 19...2
is 19...2 a factor of 20
20 % 19
20 % 10

multiple of 5

5 X 0 = 0
5 X 1 = 5
5 X 2 = 10
5 X 3 = 15
5 X 4 = 20
5 X 5 = 25
5 X 6 = 30
5 X 7 = 35
5 X 8 = 40

3 X 0 = 0
3 X 1 = 3
3 X 2 = 6
3 X 3 = 9
3 X 4 = 12 
3 X 5 = 15

/*
1:57
Problem:
- input: number 
- output: number 

- computes the sum of all numbers between 1 and some other number, inclusive that are multiples of 3 or 5.

Examples:
multisum(3);       // 3 => 3 
multisum(5);       // 8 => 5 + 3 
multisum(10);      // 33 =>  5 + 3 + 10 + 6 + 9
multisum(1000);    // 234168 

Data Structure:
using mod gets the remainder when two numbers are divided
is the number divisible by 3 meaning it does not have a remainder
numbers divisible by 3 
is 10...1 a multiple of 3
is 3  a factor of 10...1
10 % 3 = 1
9 % 3 = 0
8 % 3 = 2
7 % 3 = 1
6 % 3 = 0 3 % 6 = 3 
5 % 10 = remainder is 2

To find if a number is a multiple of another number:
number1 % number2 is equal to 0 meaning there is no remainder

To find if a number is prime 
  - check if the number and all numbers below are not divisible (has reminders)

to find if a number is a prime 

Algo:
- init sum to 0
- while the input number is greater than 0
  - if the number is a multiple of 3 or 5
    - add the number to sum
  - decrement input number by 1
- return sum
*/

// function multisum(num) {
//   let sum = 0;
//   while (num > 0) {
//     if (num % 3 === 0 || num % 5 === 0) {
//       sum += num;
//     }
//     num -= 1;
//   }
//   return sum;
// }

// console.log(multisum(3));       // 3
// console.log(multisum(5));       // 8
// console.log(multisum(10));      // 33
// console.log(multisum(1000));    // 234168

/*
4:43 - 53 (10 minutes)
Problem
- input: string
- output: UTF-16 string value of a string 

- UTF-16 value is the sum of the UTF-16 values of every character in the string

Example

Data Structure:


Algo:
- init sum to 0
- iterate through each character in the string
  - get the UTF value of the current character and add it to sum
return the sum
  
*/

// function utf16Value(string) {
//   let sum = 0;
//   for (let idx = 0; idx < string.length; idx +=1) {
//     sum += string[idx].charCodeAt();
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

/*
6:44 7: 08 24
Problem:
- input: two positive integers and string operation
- output: number

- round down number in division
- if divided by 0 return 'cannot divide by 0'

Example:
- 23, 0, '/' => cannot divide by zero
- 23, 17, '/' => 1 

Structure Data:

Algo:
- if operation is +
  - add the inputs together and return
- else if operation is -
   - substract the second number by the first and return
- else if operation is *
  - multiply the numbers and return
- else if **
  - get the squared of the number
- else if %
  - if second number is 0 
    return 'cannot divide by 0'
  - return the remainder of the  numbers 
else 
  - if second number is 0 
    return 'cannot divide by 0'
  - return the quotient of the numbers and round down
*/

// function cal(num1, num2, operation) {
//   if (operation === '+') return num1 + num2;
//   if (operation === '-') return num1 - num2;
//   if (operation === '*') return num1 * num2;
//   if (operation === '**') return num1 ** num2;
//   if (operation === '/') {
//     if (num2 === 0) return 'cannot divide number';
//     return Math.floor(num1 / num2);
//   }
//   if (operation === '%') {
//     if (num2 === 0) return 'cannot divide number'
//     return num1 % num2;
//   }
// }

// console.log (cal(20,8,'/'));

/*
Problem: 
- input: 2 values
- output: boolean

- || operator returns a truthy value if either or both of its operands are truthy ex. 2 || 0 returns 2,  2 || 4 returns 2, 0 || '' returns 0
- && operator returns a truthy value of both are truthy ex 2 && 4  returns 4, 2 && 0 returns 0
- returns true if exactly one of its arguments is truthy

if the first value is truthy then the second value is falsy
if the first value is falsy then the second value is truthy


*/
// function xor(val1, val2) {
//   if (val1) {
//     if (!val2) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     if (val2) {
//       return true
//     } else {
//       return false;
//     }
//   }
// }

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

/*
10:11 - 19 (8 minutes)
Problem:
- output: array of values
- input: array 

- returns an array the contains every other element in the passed in array.
- returns a new array?
- if input is empty array return empty

Example:

Data Structure:
- create a new array to return the array with the required elements so not to mutate the input array

Algo:
- iterate through the values in the array
   - if the index is even 
    - add the element to a new array
- return the array

- select each element from the array where the current index is even 
- returns a new array of the selected elements
*/

// function oddities(arr) {
//   return arr.filter((element, idx) => idx % 2 === 0);
// }

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

/*
10:31 11:02
Problem:
- input: string
- output: number

- convert string to number without using any built-in methods
- if a number is has a + (postive) return a positive number
- if a number has a - (negative) return a negative number


Example: 
'4321' => 4321
'-570 '=> -570
'+100' => 100

Data structure: 

Algo:
init convertPosNeg to 1
- if the first char is a '-' 
  reassign convertPosNeg to -1 
  - reassign string to the second char and onward
- else if the first char is a '+' 
  - reassign string to the second char and onward
  
- convertStringToNumber (str) 
  init result to 0
  - interate through char 
    - convert char to number and then add to result 
    - if not the last number 
      - multiply result by 10 and ressign to result
  - return result

return number times convertPosNeg

*/

// const key = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// function stringToSignedInteger(str) {
//   let convertPosNeg = 1;
//   if (str[0] === '-') {
//     convertPosNeg = -1;
//     str = str.slice(1);
//   } else if (str[0] === '+') {
//     str = str.slice(1);
//   }
//   return convertStringToNumber(str) * convertPosNeg;
// }

// function convertStringToNumber(str) {
//   let result = 0;
//   for (let idx = 0; idx < str.length; idx += 1) {
//     result += key.indexOf(str[idx]);
//     if (!(idx === str.length - 1)) {
//       result *= 10;
//     }
//   }
//   return result;
// }

// console.log(stringToSignedInteger("4321")); // logs true
// console.log(stringToSignedInteger("-570")); // logs true
// console.log(stringToSignedInteger("+100")); // logs true

// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

/*
11:13 (20 minutes)
Problem
- input: number
- output: string

- converts a non-negative nemuber to a string representation
- cannot use any built-in functions or methods

Examples:
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"
 
Data Structure: 
- using an array to store the string representation of the number and the number as the index to convert number ot string

- 4321 % 10 = 1 
- 4321 / 10 = 432 round down

Algo:
  init result to empty string
  => get the number into digits
  - while the input number is greater than 0
    - init digit to the remainder of the number / 10
    => convert the digits to strings
    - init stringDigit to the string value at number indes of key array
    - append each string to current result
    - divide the number by 10 and round down and reassign to number
  - return result
*/
// const key = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// function integerToString(num) {
//   if (num === 0) return '0';
//   let sign = '';
//   // console.log(num);
//   if (Math.sign(num) === -1) {
//     sign = '-';
//     num *= -1;
//     // console.log(sign);
//   } else if (Math.sign(num) === 1) {
//     sign = '+';
//   }
//   let result = '';
//   while (num > 0) {
//     let digit = num % 10;
//     let stringDigit = key[digit];
//     result = stringDigit + result;
//     num = Math.floor(num / 10);
//   }
//   // console.log(result);
//   return result = sign + result;
// }

// console.log(integerToString(4321));        // "4321"
// console.log(integerToString(0));           // "0"
// console.log(integerToString(5000));        // "5000"
// console.log(integerToString(1234567890));  // "1234567890"
// console.log(integerToString(4321) === "+4321");
// console.log(integerToString(-123) === "-123");
// console.log(integerToString(0) === "0");

/*
12:04 17 ( 13 minutes)
Problem
- input: string
- output: string

- returns a new string tha contains the value of the original string with all consecutive deuplicate characters collapsed into a single character

examples:
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Data Structure: 
result =>  'daily double'
'd => is the current character in result d? no then append else don't
d => yes
a => no
a => yes
i + > no
illyy ddoouubbllee'

Algo:
- init result to empty string
- iterate through the string
  - if the current char is not equal to the last char in result
    - append the char to the current result
- return result
*/

// function crunch(str) {
//   let result = '';
//   str = str.split('');
//   str.forEach(char => {
//     if (!(char === result[result.length - 1])) {
//       result += char;
//     }
//   });
//   return result;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

/*
can not use for each on a string!!!!!!!!
**/

/*
12:32 : 55 (23 minutes)
Problem
- input: string
- output: string with box

- takes a sort line of text and write it to the console log within a box

Examples:
logInBox('To boldly go where no one has gone before.');
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

- horizontal line on the top and bottom
- padding on top and bottom and the sides of one line and space
- vertical line on the left and right

Data Structure:

Algo:

- define createLine function (end, mid)
  - int string to '+' 
  - iterate the input string's length and append '-' append '+' at the end

- call createLine and pass in '+' and '-'
- call createLine and pass in '|' and ' '
- print '| ' and input string and ' |'
- call createLine and pass in '|' amd ' '
- call createLine and pass in '+' and '-'

*/

// function createLine(end, mid, str) {
//   let line = end + mid;
//   for(let idx = 0; idx < str.length; idx += 1) {
//     line += mid;
//   }
//   line +=  mid + end;
//   console.log(line);
// }

// function logInBox(str) {
//   createLine('+', '-', str);
//   createLine('|', ' ', str);
//   console.log('| ' + str + ' |');
//   createLine('|', ' ', str);
//   createLine('+', '-', str);
// }


// logInBox('To boldly go where no one has gone before.');
// logInBox('');

/*
Problem
1:05 : 13 (8 minutes)
- input: positive integer
- output: string

- returns a string of alternating 1 and 0 always string with 1 
- length of string matches with integer

Example:
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

Data Structure

Algo:
- init result to empty string
- iterate based on the input number, starting count at 0
  - if the count is even 
    - append '1'
  - else 
    - append '0'
- return result
*/

// function stringy(num) {
//   let result = '';
//   for (let count = 0; count < num; count += 1) {
//     if (count % 2 === 0) {
//       result += '1';
//     } else {
//       result += '0';
//     }
//   }
//   return result;
// }

// console.log(stringy(6));    // "101010"
// console.log(stringy(9));    // "101010101"
// console.log(stringy(4));    // "1010"
// console.log(stringy(7));    // "1010101"

/*
1:15 : 37
Problem
- input: number (the number of digits in the fib number)
- output: number (the first nth with the number of digits)

- input is always an integer greater than or equal 2
- numbers larger than 9007199254740991 needs to use BigInt (n)

Example
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;
// The last example may take a minute or so to run.

Data Structure: 
use BigInt (n)

Algo:
=> compute the fib sequence until the value is equal to the length 

- if length is equal to 1 return 1
- init first to 1
- init second to 1
- declare fib 
- while the value is not equal to the length 
  - assign fib to first + second 
  - reassign first to second
  - reassing second to fib
- return fib

- define isEqualLength (fib, length)
  - convert fib to string, get length 
  - if fib and length are equal 
    - return true
  - return false
*/
// function findFibonacciIndexByLength(length) {
//   if (length === 1) return 1;
//   let first = 1; 
//   let second = 1; 
//   let fib;
//   let count = 2;
//   while (!isEqualLength(fib, length)) {
//     fib = first + second;
//     first = second;
//     second = fib;
//     count += 1;
//   }
//   return count;
// }

// function isEqualLength(fib, length) {
//   let fibLength = String(fib).length;
//   if (fibLength === length) {
//     return true;
//   }
//   return false;
// }

// console.log(findFibonacciIndexByLength(2) === 7);
// console.log(findFibonacciIndexByLength(3) === 12);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10) === 45);
// console.log(findFibonacciIndexByLength(16) === 74);
// console.log(findFibonacciIndexByLength(100) === 476);

/*
2:02
Problem
- input: positive integer (n)
- outputL: none

- logs a right triangle whose sides each have n stars

Example:
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

Data Structure:


Algo:
- iterate line input number of times starting at 1 to input number, increment by 1 //1
  - init str to empty string
  - iterate spaces starting at 1 to input number minus current line number // 5-1 = 4
    - append to str ''
  - iterate stars starting at input number minus current line number to the line input number
    - append to str '*'
  - print str

*/

// function triangle(num) {
//   for (let line = 1; line <= num; line += 1) {
//     let str = '';
//     for (let space = 1; space <= num - line; space += 1) {
//       str += ' ';
//     }
//     for (let star = num - line; star < num; star += 1) {
//       str += '*';
//     }
//     console.log(str);
//     str = ' ';
//   }
 
// }

// triangle(5);

// //     *
// //    **
// //   ***
// //  ****
// // *****

// triangle(9);

// //        *
// //       **
// //      ***
// //     ****
// //    *****
// //   ******
// //  *******
// // ********
// //*********

/*
3:19 (9 minutes)
Problem
- input: string of noun, verb, adverb, and adjective
- output: string

Data Strucure


Algo
print the string along with return string of the inputs
*/

// function madlib(noun, verb, adjective, adverb) {
//   console.log(`Do you walk your blue ${noun} ${adverb}? That's hilarious!
//   The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}. The dog quickly walks up ${adjective} Joe's turtle.` );
// }

// madlib('dog', 'walk', 'blue', 'quickly');

/*
3:30 (17 minutes)
Problem
- input: number
- output: number

- double number is an even-length number whose left-side digits are exactly the same as its right side

- return the number as is if double else return the number multiply by 2

example:
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

Data Structure

Algo
- convert the number to string
  - if number array is not even-length return then number multiply by 2
- split the number into first halve and second half
  - init firstHalf to a substring from the first char to the mid char
  - int secondHalf to a substring from the next char of mid char to the last cahr
  - if first and second half are equal
    - return the number
- return the number multiply by 2
*/

// function twice(num){
//   let numStringLength = String(num).length;
//   if (numStringLength % 2 === 1) return num * 2; 
//   let firstHalf = String(num).substring(0, Math.ceil(numStringLength / 2));
//   let secondHalf = String(num).substring(Math.ceil(numStringLength / 2));
// // console.log(firstHalf, secondHalf);
//   if ( firstHalf === secondHalf) {
//     return num
//   }
//   return num * 2; 
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
3:48
Problem
- input: string
- output: string

- returns a string of with all non-alphabetic characters replaced by spaces
- if one or more non-alphabetic characters occur in a row, you should only have one space in the result 

Example:
cleanUp("---what's my +*& line?");    // " what s my line "

Data Structure


Algo: 
- init result to empty string
- iterate through the string 
  - if alpha (upper and lower case)
    - append character to result
  - else if the last char in result is not a ' '
    - append a space to result
return result
*/

// function cleanUp(text) {
//   let result = '';
//   for (let idx = 0; idx < text.length; idx += 1) {
//     let curChar = text[idx];
//     if (isAlpha(curChar)) {
//       result += curChar;
//     } else if (result[result.length - 1] !== ' ') {
//       result += ' ';
//     }
//   }
//   return result;
// }

// function isAlpha(curChar) {
//   if ((curChar >= 'a' && curChar <= 'z') || (curChar >= 'A' && curChar <= 'Z')) return true;
//   return false;
// }

// console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

/*
8:12 
Problem
- input: number (year)
- output: string (century) begins eith a number ends with the appropriate ending for the number

- new centuries being in years that end with 01 

Example 

- 1901 - 2000 => 20th century
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

Data structure
2000 / 100 = 20 => 20
2001 / 100 = 20.something => 21
1965 / 100 = 19.65 => 20 
256 / 100 = 2.56 => 3rd
if there is a remainder than add 1 to the result

use if else to get the ending
1st 
2nd
3rd
4th
5th
6th
7th
8th
9th
10th
11th 
12th
21st
22nd
23rd

27th
28th

- if number is equal to or greater than 10 and equal or less than 19 => append 'th'
- if the last digit is a 1  => append 'st'
- else if 0 => append 'th'
- else if 2 => append 'nd'
- else if 3 => append 'rd'
- else if greater and equal to 4 and less than equal to 9 => append 'th'

Algo
- define getCenturyNum (num)
  - init century to num divided by 100 and round down
    - if num is not divisible by 100
      - increment century by 1
  - return century
- define getEnding (century)
  - if (century is equal to or greater than 10 and equal to or less than 19)
    - append 'th' to century
  - else 
    - get the last digit of the number
    - if 0 => append 'th'
    - else if 2 => append 'nd'
    - else if 3 => append 'rd'
    - else if greater and equal to 4 and less than equal to 9 => append 'th'
  - return century
-return getEnding
*/

// function century(year) {
//   let century = getCenturyNum(year);
//   return getEnding(century);
// }

// function getEnding(century) {
//   if (century >= 10 && century <= 19) {
//     return century + 'th';
//   } else {
//     let firstDigit = century % 10;
//     if (firstDigit === 0) return century + 'th';
//     if (firstDigit === 1) return century + 'st';
//     if (firstDigit === 2) return century + 'nd';
//     if (firstDigit === 3) return century + 'rd';
//     if (firstDigit >= 4 && firstDigit <= 9) return century + 'th';
//   }
// }

// function getCenturyNum (num) {
//   let century = Math.floor(num / 100);
//   if (num % 100 !== 0) {
//     century += 1;
//   }
//   return century;
// }


// // console.log(getCenturyNum(2000));        // "20th"
// // console.log(getCenturyNum(2001));        // "21st"
// // console.log(getCenturyNum(1965));        // "20th"
// // console.log(getCenturyNum(256));         // "3rd"

// console.log(century(2000));        // "20th"
// console.log(century(2001));        // "21st"
// console.log(century(1965));        // "20th"
// console.log(century(256));         // "3rd"
// console.log(century(5));           // "1st"
// console.log(century(10103));       // "102nd"
// console.log(century(1052));        // "11th"
// console.log(century(1127));        // "12th"
// console.log(century(11201));       // "113th"


/*
8:28
Problem
- input: none
- output: none

- randomly generates Teddy's age and logs it to the console
- random number from 20 to 120 inclusive

Data structure

Algo
- use the random method returns a floating-point pseudo-random number that's greater than or equal to 0 and less than 1 
- returns random float from 0 to <1
- use max to scale to the end range of the randomized number 
- use math.floor to round down the number
- get the number from 0 the the max number inclusive

- (20 - 100) 
- to get a random number between two values 
  - start at the min mumber and scale up to the difference of the max and min
  min + Math.random() * (max - min)
*/



// console.log(Math.floor(Math.random() * (120 - 20) + 20));
// console.log(Math.floor(20 + Math.random() * 100));

/*
8:41 52 (11 minutes)
Problem
- input: string
- output: boolean

- palindrome reads the same forwards an backwards
- return true if palindrome else return false
- case sensitive

Examples:
- 'madam' => true
- 'Madam' => false
- 'madam i'm adam' => false
- '356653' => true

Data Structure:

Algo
- init a reverseStr to the reverse of the input string
  - first convert the string to an array of chars then reverse then join to a string
- if the input string is equal to the reverseStr
  - return true
- return false
*/

// function isPalindrome(inputStr) {
//   let reverseStr = inputStr.split('').reverse().join('');
//   if (reverseStr ===  inputStr) return true;
//   return false;
// }


// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

/*
Problem
8:52 9:11 (19 minutes)
- input: string
- output: boolean

- returns true if the string pass is a palindrome else returns false
- case insensitive
- ignore all non-alphanumeric characters


Examples

Data Structure

Algo
- convert all the characters in the input string to lowercase
- filter for only the alphanumeric characters the convert to string and assign to alphaStr
  - if each char is alpha or a number char

call isPalindrome to the and pass in alphaChar 
- returns a boolean value
*/

// function isRealPalindrome(inputStr) {
//   inputStr = inputStr.toLowerCase();
//   const alphaStr = inputStr.split('').filter(char => isAlpha(char) || isNumChar(char)).join('');
//   return isPalindrome(alphaStr);
  
// }

// function isAlpha(char) {
//   if (char >= 'a' && char <= 'z') return true;
//   return false;
// }

// function isNumChar(char) {
//   if (char >= '0' && char <= '9') return true;
//   return false;
// }

// console.log(isAlpha('c'));
// console.log(isAlpha('!'));
// console.log(isAlpha('3'));

// console.log(isNumChar('c'));
// console.log(isNumChar('!'));
// console.log(isNumChar('3'));

// console.log(isRealPalindrome('madam'));               // true
// console.log(isRealPalindrome('Madam'));               // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
// console.log(isRealPalindrome('356653'));              // true
// console.log(isRealPalindrome('356a653'));             // true
// console.log(isRealPalindrome('123ab321'));            // false

/*
9:13 19 ( 6 minutes)
Problem
- input: number
- output: boolean

- returns true if its integer argument is palindromic else return false

Examples
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

Data Structure
using  strings to compare

Algo
- convert the number to a string
- call the isPalindrome with the string passed in 
- returns boolean

*/

// function isPalindromicNumber(num) {
//   let numString = String(num);
//   return isPalindrome(numString);
// }

// console.log(isPalindromicNumber(34543));        // true
// console.log(isPalindromicNumber(123210));       // false
// console.log(isPalindromicNumber(22));           // true
// console.log(isPalindromicNumber(5));            // true

/*
Problem
9:33 46 (13 minutes)
- input: arry of numbers
- output: array with the same number of elements

- each element's value being the running total from the original array

Example

runningTotal([2, 5, 13]);             // [2, 7, 20] 
0 + 2 = 2 
2 + 5 = 7
7 + 13 = 20
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

if array is empty return empty array

Data Structure
init a sum variable that store the current sum of each iteration
init result array to store each sum 

Algo
- edge case for when input is an empty array return empty array
- init sum to 0
- init result to empty array
- iterate through the numbers
  - add the current number to sum 
  - append the sum to result
- return the result
*/

// function runningTotal(arr) {
//   if (arr.length === 0) return arr;
//   let sum = 0; 
//   let result = [];
//   arr.forEach(num => result.push(sum += num));
//   return result;
// }

// console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
// console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
// console.log(runningTotal([3]));                    // [3]
// console.log(runningTotal([]));                     // []

/*
Problem
9:49 
- input: string (empty string and strings eith seperate words)
- output: an object that shows the number of words of different sizes

- words consist of any sequence of non-space characters

Examples

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

Data Structure
- convert to array of words => iterate through each word
 
- store word length as key and occurrences as value in object

Algo
- init an empty object called result
- convert string input to array of words
- iterate through the words
  - if the length of the current word exist
    - increment the value at key by 1
  - else
    - create the length as key and set the value to 1
- return result
*/

// function wordSizes(inputStr) {
//   const result = {};
//   if (inputStr.length === 0) return {};
//   const words = inputStr.split(' ');
//   // console.log('SPLIT', words);
//   for (let idx = 0; idx < words.length; idx += 1) {
//     let length = words[idx].length;
//     if (length in result) {
//       result[length] += 1;
//     } else {
//       result[length] = 1;
//     }
//   }
//   return result;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}

/*
11:49 :02 (13 minutes)
Problem
- input: string
- output: object of key value pairs 

- exclude non letters from the word size count
- filter the word for only alpha chars both upper and lowercase

Examples
- wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
- wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
- wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
- wordSizes('');                                            // {}

Data Structure

Algo

- define alphaString (word)
  - pass each word and filter only characters that are alpha 
  - convert the array into array string and return
*/
// function alphaString (word) {
//   word = word.toLowerCase();
//   return word.split('').filter(char => char >= 'a' && char <= 'z').join('');
// }

// function wordSizes(inputStr) {
//   const result = {};
//   if (inputStr.length === 0) return {};
//   const words = inputStr.split(' ');
//   // console.log('SPLIT', words);
//   for (let idx = 0; idx < words.length; idx += 1) {
//     let word = alphaString(words[idx]);
//     let length = word.length;
//     if (length in result) {
//       result[length] += 1;
//     } else {
//       result[length] = 1;
//     }
//   }
//   return result;
// }

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes(''));                                            // {}

/*
5:03 5:33 29 minutes
Problem
- input: string of words 
- ouput: 

- swaps the first and last letter of every word
- every word contains at least one letter
- string input will always contain at least one word and just words and spaces and no leading trailing or repeated spaces

Example:
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

Data Structure:
string => array of words => swap the first and last chars => a new array of transformed words => converted to string

Algo:
- convert the inputstring to an array of words
- each word in the array has the first char swapped with the last char
- a new array of the transformed word is converted to a to a string with spaces 
- the string is returned

- define swapped (word)
   - return last char of word to the mid substring and then the first char of word concated
  
*/

// function swap(string) {
//   if (string.length === 1) return string;
//   return string.split(' ').map(word => swapped(word)).join(' ');
// }


// function swapped(word) {
//   return word.substring(word.length - 1) + word.substring(1, word.length - 1) + word.substring(0, 1);
// }

// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"

/*
5:49
Problem
- input: floating point number - an angle between 0 and 360
- output: string - angle in degrees(˚), minutes('), and seconds('')
- 60 minutes in a degree
- 60 seconds in a minute

Examples
dms(30);           // 30°00'00" 
dms(76.73);        // 76°43'48" 
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"


*/

/*
6:00
Problem
- input: two array
- output: array containing the union of the values from the two 

- no duplication of values in the returned array 

Example
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

Data Structure
- create an empty array to store the unique values

Algo
- init result array
- join the two input arrays together to one single array
- iterate through the array 
  - if the current number is not in the result array
    - append the current number to result
- return result

*/

// function union(arr1, arr2) {
//   const result = [];
//   const nums = arr1.concat(arr2);
//   nums.forEach(num => {
//     if (!(result.includes(num))) {
//       result.push(num);
//     }
//   });
//   return result;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));

/*
6:43 : 17 minutes
Problem
- input: array
- output array contains two subarrays 

- the first subarray contains the first half of the original array
- the second subarray contains the second half of the original array
- if the original array is odd in length put the middle element in the first array

- consider what happens when the input array is empty? 

Example

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

Data Structure
- create an empty array to store the subarrays
[1,2,4] 

Algo
- init result to an empty array
- find the midpoint of the length of the input array and init to mid
- add a new array containing the elements of the first half of the original array
- add a new array containing the elements of the second half of the original array
- return result


*/

// function halvsies(arr) {
//   const result = [];
//   let mid = Math.ceil(arr.length / 2)// 3/2 = 1. 5 = 2
//   const sub1 = arr.slice(0, mid);
//   const sub2 = arr.slice(mid);
//   result.push(sub1, sub2);
//   return result;
// }

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

/*
7:06 (12 minutes)
Problem
- input: unordered array (contains exactly one value tha occurs twice and every other value occurs once)
- output: number the occurs twice

- finds and returns the duplicate value in the array

Examples
findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

Data Structure

Algo 
- sort the input array from smallest to largest number
- iterate through the array 
  - if the current number and the next number is the same 
    - return the current number

*/

// function findDup(arr) {
//   arr.sort((a, b) => a - b);
//   for (let idx = 0; idx < arr.length; idx += 1) {
//     if (arr[idx] === arr[idx + 1]) return arr[idx];
//   }
// }

// console.log(findDup([1, 5, 3, 1]));                                // 1
// console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73
          
/*
7:20 (9 minutes)
Problem
- input: two arrays
- output: array that contains all elements from both array arguments with each element taken in alternation 
- both input arrays are non-empty and have the same number of elements
- the element in the first array is added first to the new array

Example:
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

Data structure
- create a new array to store elements from both arrays called result
- loop through each array, array length number of times
  - add the current element from the first array to result
  - add the current element from the second array to result
- return result
*/

// function interleave(arr1, arr2) {
//   const result = [];
//   for (let idx = 0; idx < arr1.length; idx += 1) {
//     result.push(arr1[idx], arr2[idx]);
//   }
//   return result;
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

/*
7:31 (10 minutes)
Problem
- input: array of integers
- output: string with value rounded to three decimal places

- multiples all of the integers together and divides the result by the number of entries in the array 

Examples 
console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

Data Structure 


Algo
- init the product to the product of all the numbers in the array
- divide the product by the length of the array, the round it to 3 decimal places, and then return
*/

// function multiplicativeAverage(arr) {
//   let product = arr.reduce((acc, num) => acc * num, 1);
//   return (product / arr.length).toFixed(3); 
//   // console.log(product);
// }

// console.log(multiplicativeAverage([3, 5]));                   // "7.500"
// console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

/*
7:45 (14 minutes)
Problem
- input: two arrays
- output: new array that contains the product of each pair of numbers from the arguments

Examples
- multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

Data Structure
- create a new array that store the product of each element from the subarray

Algo
- init result to an empty array
- loop first array length number of times
  - multiply the current number of the first and second array and append to result
- return result
*/

// function multiplyList(arr1, arr2) {
//   const result = [];
//   for (let idx = 0; idx < arr1.length; idx += 1) {
//     result.push(arr1[idx] * arr2[idx]);
//   }
//   return result;
// }

// console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

/*
8:00 8:33
Problem
- input: number
- output: return a list of the digits (array) starting with the first element being the left most digit

example:
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

Data structure
- create a new empty array called results to store the digits

Algo 
init result to empty array
- while the input number is greater than 0
  - get the last digit by getting remainder of the input number divided by 10, then append to array
  - divide the input number by 10 and reassign the input number
return result
*/

// function digitList(num) {
//   const result = [];
//   while (num > 0) {
//     let lastDigit = num % 10; 
//     result.push(lastDigit);
//     num = Math.floor(num / 10);
//   }
//   return result;
// }

// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]

/*
Problem
- input: array of strings 
- output: sting of the element and the number of occurrences
- consider case senstive
Example
- let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

Data structure
- create an empty object to store the string as key and the occurrence as the value

Algo 
 - init result empty object 
 - iterate through the strings
  - if the current string exist as a key in object
    - increment the occurrence value
  - else 
    - create a key assign value of 1 
  
  - loop through the key value pairs and print each with specified format 
*/

// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// function countOccurrences(vehicles) {
//   let result = {};
//   for (let idx = 0; idx < vehicles.length; idx += 1) {
//     if (vehicles[idx] in result) {
//       result[vehicles[idx]] += 1;
//     } else {
//       result[vehicles[idx]] = 1;
//     }
//   }
//   for (let vehicle in result) {
//     console.log(`${vehicle} => ${result[vehicle]}`)
//   }
// }

// console.log(countOccurrences(vehicles));

// // console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2


/*
9:07 (10 minutes)
Problem
- input: array of integers ( never empty and number are positive)
- output: number (average) rounded down

Example
average([1, 5, 87, 45, 8, 8]);       // 25 94 + 45 139 + 16 154/ 6 = 25.... round down to 25


Data structure
array => number

Algo
- get sum of all the numbers in the array and init to sum
- return the sum divided by the length of the array and the round down
*/

// function average(arr) {
//   let sum = arr.reduce((acc,num) => acc + num, 0);
//   return Math.floor(sum / arr.length);
// }

// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40


/*
9:28 (9: 45) (17 minutes)
Problem
 - input: an array of numbers
 - output: the total number of boomerangs
 
 - boomerang: sub-array of length 3 
 - the first and last digits being the same the the middle being different
 - the middle digit is not the same
 Example 
 [3,7,3], [1, -1, 1], [5, 6, 5]
 
 [3,7,3,2,1,5,1,2,2,-2,2]
 
 3,7,3 yes
 7,3,2 no 
 1,5, 1
 2,-2, 2
 
 Data structure
 totalBoomerang variable to store the total number 

 Algo
 - init totalBoomerang to 0
 - iterate through the array of numbers (stop the iteration when the length is greater then array's length - 2 )
  - init firstNum to the current num
  - init thirdNum to the next next num from the current num
  - if the firstNum is equal to the thirdNum
    - increment totalBoomerang by 1
  - return the totalBoomerang
*/


// function countBoomerangs(nums) {
//   let totalBoomerang = 0;
//   for (let idx = 0; idx < nums.length - 2; idx += 1) {
//     let firstNum = nums[idx];
//     let thirdNum = nums[idx + 2];
//     let secondNum = nums[idx + 1];
//     if (firstNum === thirdNum && firstNum !== secondNum) {
//       totalBoomerang += 1;
//     }
//   }
//   return totalBoomerang;
// }

// console.log(countBoomerangs([3,7,3,2,1,5,1,2,2,-2,2]));
// console.log(countBoomerangs([9,5,9,5,1,1,1]));
// console.log(countBoomerangs([5,6,6,7,6,3,9]));
// console.log(countBoomerangs([4,4,4,9,9,9,9]));


/*
5:49 (minutes)
Problem
- input: string
- output: string

- returns a string where every character is the string is doubled
- if the input string is empty return an empty string

Example
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

Data Structure
returning a new string

Algo
- init an empty string to result 
- iterate through the string
    - reassign result to its current string and the current string repeated twice
- return result
*/

// function repeater(inputString) {
//     let result = '';
//     for (let idx = 0; idx < inputString.length; idx += 1) {
//         result += inputString[idx].repeat(2);
//     }
//     return result;
// }

// console.log(repeater('Hello'));        // "HHeelllloo"
// console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
// console.log(repeater(''));             // ""

/*
6:13 (18 minutes)
Problem
- input: string
- output: string

- double every consonant character in the string

Examples

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

Data Structure


Aglo

- init a result to empty string
- iterate through the string
  - if the current char is a consonants 
    - concate the current char repeat twice to result string
- return result

- define a isConsonants (char)
  - if the char is an alpha and if it is not a vowel
    -return true
-return false

*/

// function doubleConsonants(inputString) {
//     let result = '';
//     for (let idx = 0; idx < inputString.length; idx += 1) {
//       if (isConsonants(inputString[idx])) {
//         result += inputString[idx].repeat(2);
//       } else {
//         result += inputString[idx];
//       }
//     }
//     return result;
// }

// function isConsonants(char) {
//   char = char.toLowerCase();
//   if ((char >= 'a' && char <= 'z') && (!'aeiou'.includes(char))) {
//     return true;
//   }
//   return false;
// }

// console.log(isConsonants('a'));
// console.log(isConsonants('!'));
// console.log(isConsonants('b'));

// console.log(doubleConsonants('String'));          // "SSttrrinngg"
// console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
// console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
// console.log(doubleConsonants(''));                // ""

/*
6:32 (10 minutes)

- input: positive integerProblem
- output: number with its digits reversed

Example:

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

Data structure 
- convert the input number into a string => convert to array of chars => reverse the array => convert to string => convert back to a number

Algo
- convert the input number to string ( returns a new string)
- convert to an array of chars
- reverse the the array, the convert to string
- convert the string back to a number (returns a new string)
- return the number
*/

// function reverseNumber(num) {
//   return Number(String(num).split('').reverse().join(''));
// }

// console.log(reverseNumber(12345));    // 54321
// console.log(reverseNumber(12213));    // 31221
// console.log(reverseNumber(456));      // 654
// console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
// console.log(reverseNumber(1));        // 1

/*
6:42 7:02 (20 minutes)
Problem
- input: non-empty string
- output: middle character of the string

- if the string has an odd length, the middle character is one char
- else the middle character is two char

Example
centerOf('I Love JavaScript'); // "a" 17 /2 = 8.something => round down to get the middle number
centerOf('Launch School');     // " "
centerOf('Launch');            // "un" 6/ 2 = 3 index is the second middle number get the char of the index before that
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

Data Structure


Algo
- determine of the input string length is odd or even
- if odd
  - return the char at the string length divide by 2 rounded down 
- else
  - init second char at the index of length divided by 2 
  - init first char at the index of lenght diviced by 2 - 1 
  - return the concate string of firstChar and secondChar
*/
// function centerOf(inputString) {
//   if (inputString.length % 2 === 1) {
//     return inputString[Math.floor(inputString.length / 2)];
//   } else {
//     let secondChar = inputString[inputString.length / 2];
//     let firstChar = inputString[(inputString.length / 2) - 1];
//     return firstChar + secondChar;
//   }
// }

// console.log(centerOf('I Love JavaScript')); // "a"
// console.log(centerOf('Launch School'));     // " "
// console.log(centerOf('Launch'));            // "un"
// console.log(centerOf('Launchschool'));      // "hs"
// console.log(centerOf('x'));                 // "x"

/*
7:04 (8 minutes)
Problem
- input: number
- output: number that is negative of that number 

- if the input number is already negative return as is

Examples
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

Data Strucure


Algo
- if the input number is negative 
  - return the input number
- else
  - return the input number * 1

*/

// function negative(num) {
//   if (num < 0) {
//     return num;
//   } else {
//     return num * -1;
//   }
// }

// console.log(negative(5));     // -5
// console.log(negative(-3));    // -3
// console.log(negative(0));     // -0

/*
7:21 (9 minutes)
Problem
- input: integer
- output: array

- output array contains all integers between 1 and the argument inclusive in ascending order
- input array will always be a positive integer

Examples
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

Data structure
- using an array to store the numbers

Algo
init newArr to empty array
- starting a loop at 1, if the current number is less than or equal to the input number incrementing by 1 
  - add the current number ot he new array
- return the array
*/

// function sequence(num) {
//   const newArr = [];
//   for (let count = 1; count <= num; count += 1) {
//     newArr.push(count);
//   }
//   return newArr;
// }

// console.log(sequence(5));    // [1, 2, 3, 4, 5]
// console.log(sequence(3));    // [1, 2, 3]
// console.log(sequence(1));    // [1]

/*
7:31 (8 minutes)
Problem
- input: string (first name, space, last name)
- output: string (last name, comma, space, first name)

- Example
swapName('Joe Roberts');    // "Roberts, Joe"

Data structure
string => convert to an array of words => reverse the array => convert to string with ', ' as deliminator


Algo
- convert input string to an array of words
- reverse the array
- convert back to string with ', ' as deliminator
- return the string

*/

// function swapName(stringInput) {
//   return stringInput.split(' ').reverse().join(', ');
}

// console.log(swapName('Joe Roberts'));    // "Roberts, Joe



/*
7:42 (15 minutes)
Problem
- input: string
- output: string

Example
swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"

Data Structure
- 'Karl Oskar Henriksson Ragvals'
- ['Karl',...'Ragvals']
- ['Ragvals'] + ', ' + ['Karl'...]

Algo
- convert the input string to an array of words
- remove the last element from the array and init to first
- conat first to the array of words converts to string with a space as a deliminator
- return the string

*/

// function swapName(inputString) {
//   const words = inputString.split(' ');
//   let last = words.pop();
//   return last + ', ' + words.join(' ');
// }


// console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"


/*
Problem
8:42 (18 minutes)
- input: two integers (count, startNum)
- output: array (contains the same number of elements as the count)

- the value of each element should be a multiple of the starting number
- count will always be greater than or eqaul to 0
- may be any integer
- if count is zero return an empty array

Example:
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

Data structure
- using an array to store the numbers

Algo
- create an array that stores all the multiples of the starting number called result
- start at startNum, increment by the startNum if the result array is less than count
  - add the startNum to the array
- return result
*/

// function sequence(count, startNum) {
//   const result = [];
//   for (let num = startNum; result.length < count; num += startNum) {
//     result.push(num);
//   }
//   return result;
// }

// console.log(sequence(5, 1))          // [1, 2, 3, 4, 5]
// console.log(sequence(4, -7));         // [-7, -14, -21, -28]
// console.log(sequence(3, 0));          // [0, 0, 0]
// console.log(sequence(0, 1000000));    // []

/*
9:04 (8 minutes)
Problem
- input: string
- output: string (containing the words from the string argument in reverse order)

Examples:
'' => ''
'Hello World' => 'Word Hello'
'Reverse the words' => 'words the Reverse'

Data structure
- string
- array of words
- reverse the order of the words in the array
- convert the words back to a string with spaces in between

Algo
- string
- convert to an array of words
- reverse the order of the words in the array
- convert the words back to a string with spaces in between
- return the string
*/

// function reverseSentence(inputString) {
//   return inputString.split(' ').reverse().join(' ');
// }

// console.log(reverseSentence(''));                       // ""
// console.log(reverseSentence('Hello World'));            // "World Hello"
// console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

/*
9:12 (14 minutes)
Problem
- input: string (chars will only be consisting of letters and spaces)
- output: string

- all words with 5 or more letters should have their letters reversed

Examples:
'Professional' => "lanoisseforP" word length is greater or equal to 5

'Walk around the block' => "Walk dnuora the kcolb"
'Launch School' => "hcnuaL loohcS"

Data structure
 - string
 - convert to array of words
 - if the word length is equal to or greater than 5
  - reverse the word
 - convert tranformed array to a string
 
Algo
 - convert to array of words
 - iterate through the array of words
   - if the word length is equal to or greater than 5
    - return the reversed word
   - else
    - return the word
 - convert the returned tranformed array to a string with spaces in between and return it
*/

// function reverseWords(inputString) {
//   return inputString.split(' ').map(word => {
//     if (word.length >= 5) {
//       return word.split('').reverse().join('');
//     } else {
//       return word;
//     }
//   }).join(' ');
// }

// console.log(reverseWords('Professional'));             // "lanoisseforP"
// console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
// console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

/*
9:27 : 45 (18 mintes)
Problem
- input: array 
- output: the same array mutate with elements in reversed order

- reversed the array in its place 
- you cannot use reverse

Example
[1, 2, 3, 4] => [4,3,2,1]
["a", "b", "c", "d", "e"] => ["a", "b", "c", "d", "e"]
["abc"] =>  ["abc"]
[] =>  []

Data Structure 
[1*, 2, 3, 4] temp = 1 
[4, 2*, 3, 1] temp = 2
[4, 3 ,2, 1] 

Algo
- iterate through only the first half of the array
  - init a temp to the current num
  - reassign the current index value to the value of the last index - the current index
  - reasign the value of the last index - the current index to temp
return the array
*/

// function reverse(arr) {
//   for (let idx = 0; idx < arr.length / 2; idx += 1) {
//     let temp = arr[idx];
//     arr[idx] = arr[(arr.length - 1) - idx];
//     arr[(arr.length - 1) - idx] = temp;
//   }
//   return arr;
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
9:42
Problem
- input: string
- output: boolean

- return true if all parentheses in the string are properly balanced
- return false

- balanced : parenteses occur in pairs '(' ')'.

Examples

(+1 (+2 ) +1) 0)

(+1 )0 )+1

(+1(+2 )+1(+2 )+1)0
)-1 ( 0 

if the sequence starts at -1 return false

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

Data Structure
- use a number store the evenness of open and closing parenthese

Algo
- init balanceVal to 0
- iterate through the string
  - if the string is a '('
    - add 1 balanceVal
  - if the string is a ')'
    - minus 1 from balanceVal
  - if (balanceVal is negative) return false
- return if balanceVal is equal to zero
*/



// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);