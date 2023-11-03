/*
Problem
- input: positive number
- output: none

- print the counting from n to 1

- constraint: input is from 1 ot 1000 inclusive

Example:
5
5 - 1 = 4
4 - 1 = 3
3 - 1 = 2
2 - 1 = 1 
1 - 1 = 0

base case: n === 2 return 1

base case: n 

5 => 5 - (5 - 5) => 0
5 => 5 - (5 - 4) => 1

Data Structure


Algo

- if n is equal to 2 print 1
- call the function with ( n - 1) passed in 
- print the return value of each call

*/

// function printNum(num) {
//   if (num === 1) {
//     console.log(num);
//     return;
//   }
//   printNum(num - 1);
//   console.log(num);
// }

// printNum(5);

/*
Problem 
- input: positive number
- output: none

- print the counting from n to 1 and back again

Example
- 3

if input number is equal to 1 print 1 and then RETURN

3 => print 3 => call the function (3 - 1)
2 => print 2 => call the function (2 - 1)
1 => print 1 (meets the condition) and RETURNS nothing pops of the stack

next on stack Func(2) prints num which is 2 pops off
netx on stack Func(3) prints num which is 3 pops off 

*/

// function printNums (num) {
//   if (num === 1) {
//     // console.log(num);
//     // console.log(num);
//     return;
//   }
  
//   console.log(num);
//   printNums(num - 1);
//   console.log(num);
// }

// console.log(printNums(5));

/*
Problem
- input: number (n)
- output: number 

Example:
5
5 * 4 * 3 * 2 * 1 = 120

Data Structures
- base case: input number is equal to 1
f(5) => 5 * f(5 - 1)
f(4) => 4 * f(4 - 1)
f(3) => 3 * f(3 - 1)
f(2) => 2 * f(2 - 1)
f(1) => returns 1 

f(2 - 1) => 1 * 2 = 2
f(3 - 1) => 2 * 3 = 6 
f(4 - 1) => 6 * 4 = 24
f(5 - 1) => 24 * 5 = 120

Algo
- if num equal to 1 return 1;
- return the num times the return value of the function with num - 1
*/

// function factorial(num) {
//   if (num === 1) return 1;
    
//   return num * factorial(num - 1);
  
// }

// console.log(factorial(5));

// console.log(factorial(12));