//What is my value? 
//Part 1 
// console.log(greeting);

// var greeting = 'Hello world!';

//logs undefined; 

//Part 2 
// console.log(greeting);

// let greeting = 'Hello world!';

//ReferenceError: cannot access greeting for inilialization.

//Part 3 
// if (true) {
//   let myValue = 20;
// }

// console.log(myValue);

//Reference error, myValue does not exist in the outter scope. 

//Part 4 
// function myFunction() {
//   let a = 1;

//   if (true) {
//     console.log(a);
//   }
// }

// myFunction();

// will log 1; 

//Part 5 
// function myFunction() {
//   let a = 1;

//   if (true) {
//     try {
//     console.log("first: " + a);
//     }catch (e) {
//         console.log('a is not defined yet'); 
//     }
//     let a = 2;
//     console.log(a);
//   }
// }

// myFunction();

// Since a is initialized after the log method, the method does not have access 
// to the variable. ReferenceError. 

//Part 6 
// let a = 5;
// let b = false;

// if (a > 4) {
//   let b = true;
// }

// console.log(b);

//logs false, variable b in the inner scope is a different vavriable from b in the
//outter scope. 

//Part 7 
// let a = 1;

// function myFunction() {
//   console.log(a);

// }

// myFunction();
// // logs 1. inner scopes have access to outter scopes. 

//Part 8 
// let a = 1;

// function myFunction(a) {
//   console.log(a);
// }

// let b = 2;

// myFunction(b);

//2 

//Part 9 
// const a = 1;

// function myFunction() {
//   a = 2;
// }

// myFunction(a);

//const a cannot be reassigned. TypeError

//Part 10 
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
//changes firstName to from John to Jane. 