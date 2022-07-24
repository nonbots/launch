//Style Guide
// let iceCreamTaste = 'chocolate'; 
// let iceCreamDensity = 10; 

// while (iceCreamDensity > 0) {
//     console.log('Drip...');
//     iceCreamDensity -= 1; 
// }

// console.log('The ' + iceCreamTaste + ' ice cream melted.'); 

//Data Types
/*
Primitives: 
Number
String
Boolean 
undefined
Symbol
BigInt
null (depends, sometimes considered an object)
*/

//Largest Number 
// const largestNum = Number.MAX_VALUE;
// console.log(largestNum); 

//Arithmetic Operator Precedence 
// console.log(4 * 5 + 3 ** 2 / 10) //20.9

//Date 
// console.log(Date.now()); 

//Which year is this? 
// console.log(new Date().getYear()); 
// console.log(new Date().getFullYear()); 

//Argument Signatures 
/*
Array.prototype.join() takes in one of no arguments. Taking no arguments will 
default to a ',' as a seperator. More than one arguments will result in the 
first argument being applied and the remainder being ignored.
*/

//String Concatenation
// console.log("Nhan " + "Bui"); 
// console.log("Nhan ".concat("Bui")); 

//SyntaxError 
// let speedLimit = 60;
// let currentSpeed = 80;

// if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
//   console.log('"People are so bad at driving cars ' +
//     'that computers don\'t have to be that good to be much better." ' +
//     '-- Marc Andreessen');
// }

//TypeError 
let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}