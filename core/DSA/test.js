
// function testFunc() {
//     console.log("this is testFunc");
// }
// let Avar = "this is a variable is the global scope";

// AVarwithoutKeyWord = "This a  variable without keyword";

// // console.log(global);
// // console.log(global.testFunc);
// console.log(global);
// console.log(global.Avar);
// console.log(global.AVarwithoutKeyWord);

console.log(this === global)//?
console.log(this === exports)// true 


// this is refering the execution context of the IIFE a different object which is not the global object. 