"use strict";
// function findLargest() {
//   let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
//   let largest = -Infinity;
//   for (let index = 0; index < array.length; index += 1) {
//     if ((array[index] % 2) === 0 && (array[index] > largest)) {
//       largest = array[index];
//     }
//   }

//   return largest;
// }

// console.log((function findLargest() {
//   let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
//   let largest = -Infinity;
//   for (let index = 0; index < array.length; index += 1) {
//     if ((array[index] % 2) === 0 && (array[index] > largest)) {
//       largest = array[index];
//     }
//   }

//   return largest;
// })()); // 24
// var one = 2;
// {
//   var array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
//   var one = 1; 
//   let largest = -Infinity;
//   for (let index = 0; index < array.length; index += 1) {
//     if ((array[index] % 2) === 0 && (array[index] > largest)) {
//       largest = array[index];
//     }
//   }
//   console.log(one);
//   console.log(largest); // 24
// }
// console.log(one);


// const name = (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// }());

// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// console.log(sum += (function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers));

// sum += sum(numbers);  // ?

// ((number) => {
//   for(let i = number; i >= 0; i -= 1) {
//     console.log(i);
//   }  
// })(7);

// countdown(7);

// let bar = (function (start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   }
// })(2);

// // let bar = foo(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   // missing code
//   return {type: animalType, age: age, colors: colors};
// }

// let { type, age, colors } = qux();
// console.log(type);    // cat
// console.log(age);     // 9
// console.log(colors);  // [ 'black', 'white' ]

// function func([first,middle1, middle2, middle3,last]) {
//   return {
//     first,
//     middle: [middle1, middle2, middle3].sort(),
//     last
//   }
// }

// let array = ["a", "b", "c", "d", "e"];
// console.log(func(array));


/* 
Create a deep copy of the data structure assigned to the superheros
variable members property without using JSON.stringify & JSON.parse.

Demonstrate that you have truly made a deep copy of superheros (with respect to nested object members)

*/
// object, consisting of key value pairs, one key holds a nested array of objects, each nested object has a key/value pair that points to an array 

// let name = claim(5);   // Claim 5 bytes of memory for use by name
// if (memoryNotAllocated(name)) {
//   throw new Error("Memory allocation error!");
// }

// copy(name, "Sarah");  // Copies "Sarah" into claimed memory referenced by name
// console.log(name);    // Do something with object referenced by name
// release(name);        // Release memory for use by others

