
/*
input - string
output - object 
lowercase: percent of lowercase chars
uppercase: percent of uppercase chars
neither: percent of neither (difference of the sum of upper and lowercase)

string will contain at least one char

-dec/init empty object result
-dec/init chars to array of chars from input string
-dec/init lowerCaseLength to return value of getCharsLength
-add key lowercase and set to return value of  getPercentage to result
-dec/init upperCaseLength to return value of getCharsLength
-add key uppercase and set to return value of  getPercentage to result
-add key neither and set to the difference of the sum of uppercase and lowercase value

define getCharsLength (chars, cb)
  filter the chars base on callback 
  return the length of the returned array from filter

define islowerCase (char)
  return if char is lowerCase
  
define isUpperCase (char)
  return if char is uppercase
 
define getPercentage (count)
    - return count / string's length and round 2 decimals out
*/

// function letterPercentages(inputString) {
//   const result = {};
//   const chars = inputString.split('');
//   result.lowercase = getPercentage(chars, inputString, isLowerCase);
//   result.uppercase = getPercentage(chars, inputString, isUpperCase);
//   result.neither = (100 - (parseFloat(result.lowercase )+ parseFloat(result.uppercase))).toFixed(2);
//   return result;
// }


// function getPercentage(chars, inputString, cb) {
//   let length = getCharsLength(chars, cb); 
//   return ((length / inputString.length) * 100).toFixed(2);
// }
 
// function getCharsLength(chars, cb) {
//   return chars.filter(cb).length;
// }

// function isLowerCase(char) {
//   return char >= 'a' && char <= 'z';
// }
// function isUpperCase(char) {
//   return char >= 'A' && char <= 'Z';
// }



// console.log(letterPercentages('abCdef 123'));
// // // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages('AbCd +Ef'));
// // // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages('123'));
// // // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


/*
input - three numbers representing lengths of the sides of a triangle
output - string of either invalid, scalene, isosceles, or equaliateral

use an array to store the numbers

- declare init numbers to [first, second, third]

- getlargest number 
  - sort the numbers to ascending 
  - remove number at the end of array and return
  
- declare init largerstNum to return of getLargestNum

- if  numbers in array are eqaul to largest number 
    - print equilateral
- if the sum of numbers in array of is less or equal to the largest number 
    - print invalid
- else if the two other numbers are the same 
    - print isosceles
- else
    - print scalene
*/

// function triangle(first, second, third) {
//   const numbers = [first, second, third];
//   let largestNum = getLargestNum(numbers);
  
//   if ( largestNum === numbers[0] && largestNum === numbers[1]) {
//     return 'equilateral';
//   } else if (numbers[0] + numbers[1] <= largestNum) {
//     return 'invalid';
//   } else if (numbers[0] === numbers[1] || numbers[0] === largestNum || numbers[1] === largestNum) {
//     return 'isosceles';
//   } else {
//     return 'scalene';
//   }
  
// }

// function getLargestNum(numbers) {
//   numbers.sort((a,b) => a - b);
//   return numbers.pop();
// }


// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

/*
input - number of angles
output - acute, right, obtuse, or invalid

-check if all three angles === 180 or no angles are equal to 0
  check if one of the number is 90 
    print right
  check if one of the is greater that 90
    -print obtuse
  else 
    -print acute
-else
  -print invalid
*/

// function triangle(angle1, angle2, angle3) {
//   if (angle1 + angle2 + angle3 === 180 && ( angle1 !== 0 && angle2 !== 0 && angle3 !== 0)) {
//     if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
//       return 'right';
//     } else if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
//       return 'obtuse';
//     } else {
//       return 'acute';
//     }
//   } else {
//     return 'invalid'
//   }
// } 

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"


/*
input - feature number
output - next feature number

featured of feature number
- multiple of 7
- odd
- unique digits
- limit at 9876543201


- dc/init multiple to the input number
- while input is less than or equal to 9876543201 
  - increment multiple by 7
  - check if multiple id odd and digits are unique
- return 'no next feature number'

function isUniqueDigits (multiple)
 - convert to string and split to arry of chars, sort the chars
 - loop through the char
    - check if current char is the same as the next char
      - return false
 - return true
 
 - get the next multiple of 7 from the input
   - get the result of the input number / 7  then times 7 rounded down to a whole number
   - add result to 7
 
*/

// function featured(numInput) {
//   let multiple = numInput;
//   while (multiple < 9876543201) {
//     multiple = getMultiple(multiple); 
//     // console.log('m:', multiple);
//     if (multiple % 2 === 1 && isUniqueDigits(multiple)) return multiple;
//   }
//   return 'no next feature number found';
// }

// function isUniqueDigits(multiple) {
//   const chars = String(multiple).split('').sort();
//   for (let idx = 0; idx < chars.length; idx++){
//     if (chars[idx] === chars[idx + 1]) return false;
//   }
//   return true;
// }

// function getMultiple(inputNum) {
//   if (inputNum % 7 === 0) return inputNum + 7;
//   return (Math.floor(inputNum / 7) * 7) + 7; 
// }

// console.log(getMultiple(20));
// console.log(isUniqueDigits(1986));
// console.log(isUniqueDigits(22));
 
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
input: number year
output: number of months 

find fridays that fall on the 13th day of the month on a given year
return number of months

year is greater than 1752

declare and initialized count to 0
use the date object

- iterate through the months of that year
  - pass into date the inputyear and 13th day to date 
  - declare and initialize the date to return value of date object
  - get the day of the week 
  - if the day of the week is Firday 
    - increment count
- return count

*/

// function fridayThe13ths(inputYear) {
//   let count = 0;
//   for (let month = 0; month < 12; month++) {
//     let date = new Date(inputYear, month, 13);
//     let day = date.getDay();
//     if (day === 5) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(new Date(1995, 11, 17));

// console.log(fridayThe13ths(1986));      // 1
// console.log(fridayThe13ths(2015));      // 3
// console.log(fridayThe13ths(2017));      // 2

/*
input - number count 
output - difference of the square of the sum of each count and the sum of the squares of each count

dec/init sumCount to 0
dec/init sumSquare to 0

while number is greater or equal to 1
  - add number to sumCount
  - square each number and add to sumSquare
  - decrement number;

return the difference of sumCount squared and sumSquared

recursive method?
*/

// function sumSquareDifference(inputNum) {
//   let sumCount = 0;
//   let sumSquare = 0;

//   while (inputNum >= 1) {
//     sumCount += inputNum;
//     sumSquare += inputNum ** 2;
//     inputNum -= 1; 
//   }
//   return (sumCount **2) - sumSquare;
// }


// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(100));    // 25164150


/*
input - unsorted array
output - sorted array from smallest number to largest number (in place)

- loop by the number of elements in the array
  - declare and init a variable isSwapped to false
  - loop through the current element
  - the larger elements bubbles to the end of the array so those indexes do not need to be checked
    - declare init the current element and the next element
    - if the current element is greater than its next element
      -swap elements
      -reassign isSwapped ot false
  - if isSwapped is false
  - break
- return array


[6, 2, 7, 1, 4], [1, 6, 7, 2, 4]
[2, 6, 1, 4, 7]
[2, 1, 4, 6, 7]
[1, 2, 4, 6, 7]

check if outer iteration is has swapped any elements
declare an init a variable isSwapped to false 
if an element has been swapped 
  reassign isSwappped to true;
if is isSwapped is false 
  break from the loop

*/

// function bubbleSort(inputArr) {
//   for (let i = 0; i < inputArr.length; i++) {
//     let isSwapped = false;
//     for (let j = 0; j < inputArr.length - i; j++) {
//       let currentNum = inputArr[j];
//       let nextNum = inputArr[j+1];
//       if (currentNum > nextNum) {
//         swap(currentNum, nextNum, inputArr, j);
//         isSwapped = true;
//       }
//     }
//     if (!isSwapped) {
//       return inputArr;
//     }
//   }
//   return inputArr;
// }

// function swap(currentNum, nextNum, inputArr, j) {
//   // console.log(currentNum, nextNum);
//   inputArr[j] = nextNum;
//   inputArr[j + 1] = currentNum;
//   // console.log('sort', inputArr);
// }


// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// let array2 = [6, 2, 7, 1, 4];  
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/*

input - string of sentences
output - longest sentence, number of words in sentence

- sentence end in ., ! or ?
- any thing that does not end a sentence is treated as a word

- use an array to store the sentence and the word count

dc/init sentence to ""
- loop through the input string 
  - if the curren1 char is not a ., !, or ? 
    - create and array and push in each char
    - if the the current char is a space 
      push to the second of the array an the current word count
  - increment word count by 1 
  - add punctation to the first element of array
  
-dec/init largest number
-loop through array to find the largest number
  - reassign largerst number to current number if larger than largest
-print largest

-access longest string and print





- declare init sentence to empty array
- declare init currentString to empty string
- getSentence function
- loop through text 
  - concat each char to currentString
    - if char includes a '!?.' 
      - trim currentString
      - add the currentString to sentence.


- declare init longestSentence to empty string
- declare init longestWordCount to 0;   

- loop through sentence 
  - get array of words and get array length
  - if array length is greater than longestWordCount
    - reassign longerstWordCount to array length 
    - reassign longestSentence to current sentence
  
log longestSentence and longestWordCount
*/

// function getSentence(longText) {
//   const sentences = []; 
//   let currentString = "";
//   for (let idx = 0; idx < longText.length; idx++) {
//     currentString += longText[idx];
//     if (`!.?`.includes(longText[idx])) {
//       sentences.push(currentString.trim());
//       currentString = "";
//     }
//   }
//   return sentences;
// }

// function longestSentence(longText) {
//   let longestSentence = "";
//   let longerWordCount = 0;
//   const sentences = getSentence(longText);
//   sentences.forEach(sentence => {
//     let wordCount = sentence.split(' ').length;
//     if (wordCount > longerWordCount) {
//       longerWordCount = wordCount;
//       longestSentence = sentence;
//     } 
//   });
//   console.log(longestSentence);
//   console.log("The longest sentence has " + longerWordCount + " words.");
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
//   'for us to be here dedicated to the great task remaining before us -- ' +
//   'that from these honored dead we take increased devotion to that ' +
//   'cause for which they gave the last full measure of devotion -- that ' +
//   'we here highly resolve that these dead shall not have died in vain ' +
//   '-- that this nation, under God, shall have a new birth of freedom -- ' +
//   'and that government of the people, by the people, for the people, ' +
//   'shall not perish from the earth.';

// longestSentence(longText)
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

// longestSentence(longerText);
// // It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
// //
// // The longest sentence has 86 words.

// longestSentence("Where do you think you're going? What's up, Doc?");
// // Where do you think you're going?
// //
// // The longest sentence has 6 words.

// longestSentence("To be or not to be! Is that the question?");
// // To be or not to be!
// //
// // The longest sentence has 6 words.


/*
input: nth number of fib sequence
output: value of nth number of fib sequence

procedural method 
78th is the largest number that can be computed with simple operation
0, 1, 2, 3, 4, 5
0, 1, 1, 2, 3, 5
find the 4th value

- declare init count to 2 

- if nth is 0 return 0 
- if nth is 1 or 2 return 1

- declare and init a firstNum to 1 
- delcare and init a secondNum to 1
- delcare fib

- while count less than or equal to nth 
  - reassign fib to firstNum + secondNum //2, 3, 5
  - reassign firstNum to secondNum  // 3
  - reassing secondNum to fib // 5
  - increment count; // 5
- return fib // 5
*/

// function fibonacci(nth) {
//   let count = 3; 
//   if (nth === 0) return 0;
//   if (nth === 1 || nth === 2) return 1;
  
//   let firstNum = 1; 
//   let secondNum = 1; 
//   let fib;
  
//   while (count <= nth) {
//     fib = firstNum + secondNum;
//     firstNum = secondNum;
//     secondNum = fib;
//     count += 1;
//   }
//   return fib;
// }
// console.log(fibonacci(5));
// console.log(fibonacci(20));       // 6765
// console.log(fibonacci(50));       // 12586269025
// console.log(fibonacci(75));       // 2111485077978050

/*
recrusive method

base case when nth is less than 

adds all the consecutive numbers

5 + sum(4) // returns 5 + 10 = 15
    4 + sum(3) // returns 4 + 6 = 10 
        3 + sum(2) // returns 3 + 3 = 6
            2 + sum(1) // return 2 + 1 = 3
               //returns 1  
            
function sum(num) {
  if (sum === 1) {
    return 1;
  }
  sum + sum(sum - 1);
}
fib(nth)

if nth === 1 return 1

return fib(nth - 1) + fib(nth - 2)

0, 1, 2, 3, 4, 5, 6
0, 1, 1, 2, 3, 5, 8  


3 + f(3) = 5
fib(4)
2 + f(2) = 3 
fib(3)
returns 1 + f(1) = 2  
fib(2)
returns 1 + f(0) = 1 
fib(1) 
returns 1

f(2) + f(1) = 2  
fib (2)
f(1) + f(0) = 1 
fib(1) 
returns 1

2 + 3 = 5 

+ fib(2) // returns 

*/

// function fib(fib) {
//   if (fib === 1) {
//     return 1;
//   }
//   return fib(fib - 1) + fib(fib - 2); 
// }

// console.log(fib(5));
// console.log(fib(20));       // 6765
// console.log(fib(50));       // 12586269025
// console.log(fib(75));       // 2111485077978050

//memorization
//   let obj = {};
// function fib(nth) {

//   if (nth <= 2) {
//     return 1;
//   } else if (obj[nth]) {
//     return obj[nth]
//   } else {
//     obj[nth] = fib(nth - 1) + fib(nth - 2);
//     return obj[nth];
//   }

// }

// console.log(fib(5));
// console.log(fib(20));       // 6765
// console.log(fib(50));       // 12586269025
// console.log(fib(75));       // 2111485077978050

