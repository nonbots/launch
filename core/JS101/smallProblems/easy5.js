/*
- 60 minutes in a degree
- 60 seconds in a minute

input: floating point number of angles 
output: string of angle, minutes, and seconds

function dms (takes in floating number)
  - get angle rounded down
  - get minutes
    - number - angle * 60
  -get minutes rounded down
  - get seconds
    - minutes - rounded down minutes * 60 rounded
  - returns string
*/
// function dms(float) {
//   const angleRounded = Math.floor(float);
//   const minutes = (float - angleRounded) * 60; 
//   const minutesRounded = Math.floor(minutes);
//   const secondsRounded = Math.round((minutes - minutesRounded) * 60);
//   let minStr = format(minutesRounded); 
//   let secondStr = format(secondsRounded);
 
//   return `${angleRounded}°${minStr}'${secondStr}`;
// }

// function format(numRounded) {
//   if (numRounded === 0) {
//   return "00";
//   } else if (numRounded < 10){
//   return '0' + numRounded;
//   } else {
//     return String(numRounded);
//   }
// } 

// console.log(dms(30));           // 30°00'00"
// console.log(dms(76.73));        // 76°43'48"
// console.log(dms(254.6));        // 254°35'59"
// console.log(dms(93.034773));    // 93°02'05"
// console.log(dms(0));            // 0°00'00"
// console.log(dms(360));          // 360°00'00" or 0°00'00

/*
input: two array of number 
output: joined array with no duplicates

-method 1 
  - join both array and store in a set convert back to array

-method 2 
  - declare init result empty array
  - join both arrays
  - iterate through array 
    -get curChar
    -iterate through result array
      -check if curChar is equal to element in result
        if so break
      -else
        - add to result
  - return result array
*/

// function union(nums1, nums2) {
//   const result = [];
//   const newArr = nums1.concat(nums2);
//   for (let idx = 0; idx < newArr.length; idx++) {
//     let curChar = newArr[idx];
//     if (!(result.includes(curChar))) {
//     result.push(curChar);
//     }
//   }
//   return result;
// }

// console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

/* 
input: array
output: array with 2 subarrays

- declare init empty result array
- find the length of the array
- find the midpoint use ceil
- slice array from 0 to midpoint
- slice array from midpoint
- push arrays to result
- return array
*/

// function halvsies(array) {
//   const result = []; 
//   const bp = Math.ceil(array.length / 2);
//   result.push(array.slice(0, bp ), array.slice(bp));
//   return result;
// } 

// console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
// console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// console.log(halvsies([5]));                // [[5], []]
// console.log(halvsies([]));                 // [[], []]

/*
sort the array in ascending order 
iterate through the array and find cur number == next number return currNum
*/

// function findDup(array) {
//   array.sort((a,b) => a - b);
//   for ( let idx = 0; idx < array.length; idx++) {
//     if (array[idx] === array[idx + 1]) return array[idx];
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
input: two arrays of numnber and string
output: an interleave array

-declare init empty array result
-iterate through arrays
  -push element from first array then from second
-return result array
*/

// function interleave(nums, chars) {
//   const result = []; 
//   for (let idx = 0; idx < nums.length; idx++) {
//     result.push(nums[idx], chars[idx]);
//   }
//   return result;
// }

// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

/*
input: array of numbers
output: string of floating number round to the thousssands

use reduce to get the product of all numbers in array
divide the procduct by the length of the array
 return used fixed to the 3rd decimal
*/

// function multiplicativeAverage(array) {
//   const product = array.reduce((acc, cur) => acc * cur, 1); 
//   return (product / array.length).toFixed(3); 
// }

// console.log(multiplicativeAverage([3, 5]));                   // "7.500"
// console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

/*
-get the product of each elements at index

input: two array of numbers
output: a single array

-declare init empty result array
-iterate through arrays
  -multiply current elements from both array
  -push to the result array
-return result
*/

// function multiplyList(nums1, nums2) {
//   const result = [];
//   for (let idx = 0; idx < nums1.length; idx++) {
//     result.push(nums1[idx] * nums2[idx]);
//   }
//   return result;
// }

// console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

/*
input: number
output: array of number of digits

declare and init empty array result
while number number is greater than 0
  get last digit and unshift to array
  divide number by 10 and reassign number
return result
*/

// function digitList(num) {
//   const result = []; 
//   while (num > 0) {
//     result.unshift(num % 10); 
//     num = Math.floor(num / 10);
//   }
//   return result;
// } 

// console.log(digitList(12345));       // [1, 2, 3, 4, 5]
// console.log(digitList(7));           // [7]
// console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444));         // [4, 4, 4]

/*
input: array of strings
output: log string of each element and occurrences

transformed array into object where string are keys and values are occurences
- loop through object and log key and values
*/

// function countOccurrences(vehicles) {
//   const vhObj = {}; 
//   vehicles.forEach(vehicle => {
//     if (vehicle in vhObj) {
//       vhObj[vehicle] += 1;
//     } else {
//       vhObj[vehicle] = 1; 
//     }
//   });
//   for (let vehicle in vhObj) {
//     console.log(`${vehicle} => ${vhObj[vehicle]}`);
//   }
// }

// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

/*
input: array of numbers
output: average number round down

use reduce to find sum of elements in array
get average by dividing sum by array length
return averagae round down

*/

// function average(array) {
//   const sum = array.reduce((acc, cur) => acc + cur, 0);
//   return Math.floor(sum / array.length);
// }

// console.log(average([1, 5, 87, 45, 8, 8]));       // 25
// console.log(average([9, 47, 23, 95, 16, 52]));    // 40

/*
input - negative or postive number
output - string of time

object stores hours and minutes

getBefore (num)
  convert number to positive and get remainder time of day to totatTime
  if less than 60, set minutes 
  else if total minutes / 60 >= 24
    set hours 
    set minutes

getAfter (num)
  call getBefore (num)
  set hours = 24 - hours
  set hours = 60 - minutes
  
formatTime (arrayTime)
  if time is === 0  
   return concat 00
  else if time is < 10 
   return concate 0 to time
    
timeOfDay (num) 
  declare init time
  call getBefore(num)
  if num is less than 10
    call getAfter
  return formatTime(time.hour) + formatTime(time.min)
*/

function timeOfDay(num) {
  const time = {};
  getBefore(num, time);
  if (num < 0) getAfter(num, time);
  return formatTime(time, 'hours') + ':' + formatTime(time, 'mins');
}

function getBefore(num, time) {
  const totalTime = Math.abs(num) % 1440; // 1440 minutes in a day (60 * 24)
  time.hours = Math.floor(totalTime / 60); 
  time.mins = totalTime % 60; 
}

function getAfter(num, time) {
  getBefore(num, time);
  if (time.mins > 0) {
    time.hours = 23 - time.hours;
  } else {
    time.hours = 24 - time.hours;
  }
  time.mins = 60 - time.mins;
}


function formatTime(time, timeType) {
  if (time[timeType] === 0) {
    return "00";
  } else if (time[timeType] < 10) {
    return "0" + time[timeType];
  } else {
    return String(time[timeType]);
  }
}

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(0));
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(-3));
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(35));
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(-1437));
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(3000));
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(800));
// console.log(timeOfDay(-4231) === "01:29");
// console.log(timeOfDay(-4231));

/*
input: string of hour and minutes
output: number of total minutes

24:00 => 24 hours => 1440 minutes

beforeMidnight
  get the hours and minutes
  multiply hours by 60 and add remainding minutes
  return minutes

afterMidnight
  declare init minutes from return value of beforeMidnight
  return 1440 - minutes
*/

// function afterMidnight(string) {
//   if (string === "24:00") return 0;
//   const time = string.split(":");
//   console.log((Number(time[0]) * 60) + Number(time[1]));
//   return (Number(time[0]) * 60) + Number(time[1]);
// } 

// function beforeMidnight(string) {
//   if (string === "24:00" || string === "00:00") return 0;
//   const minutes = afterMidnight(string);
//   return 1440 - minutes
// }

// console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
// console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
// console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);