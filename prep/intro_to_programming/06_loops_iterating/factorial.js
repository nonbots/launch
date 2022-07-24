//EX.2
// function factorial(number) {
//     let result = 1; 
//     for (let num = number; num > 0; num -= 1) {
//         result *= num;  
//     }
//     return result; 
// }
// console.log(factorial(1));     // => 1
// console.log(factorial(2));     // => 2
// console.log(factorial(3));     // => 6
// console.log(factorial(4));     // => 24
// console.log(factorial(5));     // => 120
// console.log(factorial(6));     // => 720
// console.log(factorial(7));     // => 5040
// console.log(factorial(8));     // => 40320

function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

//doubler(5); // => 5
            // => 10
            // => 20
            // => 40
            // => 80
            
//stack 
/*
//does not pass validation and exits the function and starts the cycle of poping 
rest of the function calls.
(logs 80) -> pops
doubler
line 5 doubler -> 80 
(logs 40) -> pops 
doubler
line 5 doubler -> 40 
(logs 20) -> pops
doubler
line 5 doubler -> 20 
(logs 10 ) -> pops 
doubler 
line 5 doubler -> 10 
(logs 5) -> pops 
doubler 
main
*/

//fibonacci
//0, 1, 1, 2, 3, 5, 8, 13, 21
//1,
function fibonacci(number) {
  if (number < 2) return number; // 0 if number is 0, 1 if number is 1
  return fibonacci(number - 1) + fibonacci(number - 2); //
}

// console.log(fibonacci(6));  // => 8
// console.log(fibonacci(20)); // => 6765

/*
call stack            stacks pop 
line 3 fib (2 - 1) -> return 1 
line 3 fib (3 - 1) -> fib(3 - 2) -> fib(2) + fib(1)
line 3 fib (4 - 1) -> fib(4 - 2) -> fib(3) + fib(2)
line 3 fib (5 - 1) -> fib(5 - 2) -> fib(4) + fib(3)
line 3 fibonacci ( 6 -1) -> fib( 6 - 2) -> fib(5) + fib(4) 
main 

call stack 2 



*/
//EX.5 
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
 let result;
// tries += 1;

do {
    result = randomNumberBetween(1, 6);
  tries += 1;
}
while (result <= 2); 

//console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

//EX.6
function factorialRecursion(number) {
    if (number === 1) return 1; 
    return factorialRecursion( number - 1) * number 
    // f(7) * 8 -> returns 5040 * 8 = 40320
    // f(6) * 7 -> returns 720 * 7 = 5040
    // f(5) * 6 -> returns 120 * 6 = 720
    // f(4) * 5 -> returns 24 * 5 = 120
    // f(3) * 4 -> returns 6 * 4 = 24
    // f(2) * 3 -> returns 2 * 3 = 6 
    // f(1) * 2 -> returns 1 * 2 = 2 
    //return 1
}
// console.log(factorialRecursion(1)); 
// console.log(factorialRecursion(2)); 
// console.log(factorialRecursion(3)); 
// console.log(factorialRecursion(4)); 
// console.log(factorialRecursion(5)); 
// console.log(factorialRecursion(6)); 

