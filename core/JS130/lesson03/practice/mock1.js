/*
1. Write a JavaScript function named delayLog that loops through the numbers from 1 to 10, and logs each number after that number of seconds. It should log 1 after 1 second, 2 after 2 seconds, and so on.

> delayLog();
1  // 1 second later
2  // 1 second later (2 seconds after start)
3  // 1 second later (3 seconds after start)
4  // etc...
5
6
7
8
9
10
*/
function delayLog() {
  for (let i = 1; i <= 10; i += 1) {
    // logs each number after that number of seconds 
    setTimeout(() => console.log(i), i + 1000);
  }
}

delayLog();

/*
2. List what actions that would cause a function call to product side effects

1. reassigns a non-local variable 
2. mutates a non -local variable that refers to an object 
3. raises an exception
4. writes or reads to non-local resources
5. calls a function that produces side effects that are not confined to the calling function. 

*/

/*
3. Rewrite the following code using classic JavaScript syntax:

function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(...array);

*/
function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

let array = [2, 3, 5];
let result = product(array[0], array[1], array[2]);

// let array = [2, 3, 5];
// let result = product(...array);
// console.log(result);

/*
4.Consider the following code from a practice problem in an earlier lesson:

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);
let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);
Rewrite this code using an IIFE. Your solution should no longer need the name foo.
*/
let bar = (function (start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

/*
5.Consider the following code and output:

> countdown(7)
7
6
5
4
3
2
1
0
Replace the invocation of countdown with an IIFE that produces the same results.

*/
(function (start) {
  while (start >= 0) {
    console.log(start);
    start -= 1;
  }
})(7);

/*
7.Without running the following code, determine what value it logs on the last line. Explain how the program arrived at that final result.

Copy Code
function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);
let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);


On line `122`, `bar` refers to a returned function from the invocation of `foo(2)` which stores a reference to `prod` variable in it's closure. On the next line, result is initialized to the return value of the invocation of `bar(3)` since on line `116`, `2 * 3` is `6` and `prod` is reassigned to that value which the function has access to via it's closure. Similarly, on line `124`, the invocation of `bar(4)` returns `24`from the expression`6 * 4`. That is added to result which is now reassigned to `30`. On the next line `bar(5)` returns `120` which is then added to `result` which is `130`. `130` is logged to the console on line `126`. The code demonstrates closure and it makes`prod` a private data that can only be updated when calling the returned function.
*/


/*
8.Let's move the variable declaration into makeCounter now. What do the 4 console.log statements at the end of this program print? Try to answer without running the code:

Copy Code
function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

This prints 1, 2 and then 1 and 2 
*/

/*
9.What happens if we create two functions from makeCounter? explain why 

Copy Code
let incrementCounter1 = makeCounter();
let incrementCounter2 = makeCounter();

console.log(incrementCounter1()); // 1
console.log(incrementCounter1()); // 2
console.log(incrementCounter1()); // 3

console.log(incrementCounter2()); // 1
console.log(incrementCounter2()); // 2

console.log(incrementCounter1()); // 4

The return functions' closures, `increamentCounter1` and `increamentCounter2`, each store references to different `counter` variable because on each invocation of `makeCounter`, `counter` is declared and initialized to 0. The different `counter`s are different variables stored in different places in memory. Thus when `increamentCounter1` is invokes three times the return values are `1`, `2`, and then `3` and when `incrementCounter2` was invokes twice afterwards the return values are `1`, `2` and then `incrementCounter1` is invokes again and returns `4`.   
*/

/*
10.Rewrite the code below using let instead of var. Your goal here is to change the way the variables are declared without altering the output of the program.

Copy Code
function foo(condition) {
  console.log(bar);

  qux = 0.5772;

  if (condition) {
    var qux = 3.1415;
    console.log(qux);
  } else {
    var bar = 24;

    var xyzzy = function() {
      var qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);
*/
function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    let qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    let xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}


/*
11.Without running the following code, determine what it logs to the console:

Copy Code
var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();

var bar = undefined
function foo () {
  var bar = undefined;
}

bar = 82;
foo()
function foo() {
  bar = undefind - 42 = NaN
}

logs `NaN`, On creation phase, JS records, `bar` and assigns it to `undefined`, and sets the scope to the global scope. It then records, `foo` and sets it the the function declaration and body and its scope to the global scope. It records `bar` on line `237`, sets its value to `undefinded` and it's scope the the function `foo`. On execution phase, JS finds foo in global scope calls it and it access `bar` in the function `foo` scope and returns `undefined`. `undefined - 42` returns `NaN` to `bar` in the function scope. Thus, on line `238`, the console logs `NaN`. 


*/

/*
12.What is logged and why?
console.log(hello());

function hello() {
  return 'hello world';
}

The code logs `"hello word"` because according to the hoisting model, function declarations are hoist to the top of the function they are defined in. The function name is initialized to its function declaration and body. This the code looks to be rearrange like this: 


function hello() {
  return 'hello world';
}

console.log(hello());

And console.log is able to call the function and logs the returned value.
*/

/*
13.What is logged and why?
bar();              // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}

On creation phase, Js records `foo` variable name, sets the value to `undefined` and scopes it to the global scope. Then it records, `bar` variable and sets the values to the function delcartion and body and scopes it ot the glabol scope. 

On execution phase, JS looks up `bar` and then calls the function. It looks up the value of `foo` in the gloabl scope pass in as an argument to `console.log` and returns `undefined` and `console.log` logs it to the console. 
*/


/*
14.In what sequence will the JavaScript runtime run the following lines of code? Number them from 1-8 to show the order of execution.

Copy Code
setTimeout(function() {   //
  console.log('Once');    //1
}, 1000);

setTimeout(function() {   //
  console.log('upon');    //3
}, 3000);

setTimeout(function() {   //
  console.log('a');       //2
}, 2000);

setTimeout(function() {   //
  console.log('time');    //4
}, 4000);

This is because, setTimout is an asychronous function that does not block JS from executing other lines of code after it even when it has not finished running. This is because, `setTimeout` pushes the callback to the api stack which allows to run other code. The callback is in the api stack for the delay amount of time and is then added to the quene on which the callback are push into the JS stack one by one when JS has finishe running on of the previous code. 
*/

/*
15.invoke your sum function using both a list of numbers and spread syntax from an array of numbers.
sum(...numbers)

*/

/*
16JavaScript also hoists functions and classes. Which of the following statements are correct? Select all that apply.

Toggle Answer Display
Your Answer
A
Class definitions can be hoisted.  not definitions but declarations

B
Hoisting lets you invoke a function before execution reaches its declaration. yes 

C
Named function expressions are hoisted.yes 

D
Hoisting lets you access a class before execution reaches its declaration 


***FACT***Hoisting raises names of variables, function, and classes to the top of htier scope.

**FACT*** Hoisting does not happen for variables declared with let, const, or class definitions 

***FACT*** Hoisting lets you invoke a function before execution reaches its delcation 
*/



/*
17. When to use strict mode 

A When adding a new function or method to an existing codebase that does not use strict mode. yes

B
When updating a function or method in an existing codebase that does not use strict mode.y

C
When writing new applications. yes

D
Always. 

*/

/*
18.What is happening in this code block?
let foo = (function() {
  return (function() {
    return 10;
  })() + 5;
})();

console.log(foo);       // => 15
An IIFE is is defined and invoked at the same time. In side the IIFE is another IIFE that is defined and called at the same time. That IIFE returns `5` to the outer IIFE which is than added to `5` which the other IIFE return `10`.
*/

/*
19.In a process called hoisting, JavaScript appears to reorganize code in such a way that certain declarations and definitions appear to be moved around. While this organization doesn't really occur, it's a useful mental model for understanding scope in a JavaScript program.

Rewrite the following code in a way that shows what the code would look like if hoisting were a real process that actually reorganized your code. The intent here is to clearly show how and when the various identifiers in this program are defined with respect to the code that actually gets executed.

Copy Code
Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

class Image {
  constructor(file) {
    this.file = file;
  }
}

var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);
*/

/*
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

let Image = not values set;
var catImage = undefined;
var pudding = undefind;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

execution 

  Image =  {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png") //{file: cat.png}
pudding = new Pet("Pudding", catImage) //{name: "Pudding", image: {file:"cat.png"}}

*/


/*
6.In this problem, we'll build a simple todo list program that uses the techniques we've seen in this assignment.

Write a makeList function that creates and returns a new function that implements a todo list. The returned function should have the following behavior:

When called with an argument that is not already on the list, it adds that argument to the list.
When called with an argument that is already on the list, it removes the element from the list.
When called without arguments, it prints all of the items on the list. If the list is empty, it prints an appropriate message.
Copy Code
> let list = makeList();
> list();
The list is empty.

> list("make breakfast");
make breakfast added!

> list("read book");
read book added!

> list();
make breakfast
read book

> list("make breakfast");
make breakfast removed!

> list();
read book
*/


/*
20.Modify the makeList function so that it returns an object that provides the interface shown above, including add, list, and remove methods.
> let list = makeList();
> list.add("peas");
peas added!

> list.list();
peas

> list.add("corn");
corn added!

> list.list();
peas
corn

> list.remove("peas");
peas removed!

> list.list();
corn

*/

//https://launchschool.com/exercises/fd2aaf29

/*
has no sode effects 
Given the same set of arguments, the function always returns the same value during the function's lifetime. Th return value depends soley on its arguments

has no side effects and 
given the same set of arguments, the function always returns the same value during the functions lifetime. It returns a consistent return value depending on the agruments.


side effect include when a function call

reassigns a non local variable
mutates a non local variable that stores an object
raises an error
reads or write to non local resources 
invokes another function that products a side effect that is not confined within the calling function.
*/

//exceptions are error type object that inidicate an exceptional event has occurred in a program.

// to raise or throw an exception is when JS internally return an error object that inidicate thatn an exceptional even has occured in a program
// You can also explicitly throw your own error by 
// throw new Error("this is an error")

// you can rethrow an error after recovering from it in a catch block 

// try {
  // code
//}catch (error) {
  // throw error
//}

// to catch an error to detect when an exeception is thrown and then to attempt to recover from the error


// Throw exceptions when you can't ignore the problem and can't recover from local code. 

// when catching an exception can you recover from the exception and you do it without raising another exception.