/*
What is closure?
A special "envelope" object attached to a function that stores references to variables within the function's lexical scope, which also includes the function itself, that the function was defined in and needs to execute.

What is in a closure?
identifiers that refer to variables within the function's lexical scope, including the function itself that the function was defined in and needs

When is a closure created?
A closure is created when the function is defined, which is during creation phase where the function name is recorded and set to the function declaration and body, and its scope is recorded.

What is the relationship between closures and scope?
closure use scope, specifically lexical scope of where the function is defined, to store the variables that it needs.

What do we mean when we say that closures are defined lexically?
The function's closure has access to all variables that are on the outer scope of where that function was defined, including the function itself, that it needs.

What is partial function application?
1. it applies partial argument(s) to the returned function through the returned function's closure.
2. it applies fewer and remaining argument(s) when the returned function is called.

What is the order of the closure scope chain?
JS first looks for the variable in the function's scope. If it is not found there, JS then looks at the function's closure which stores any references that the function needs to execute that are within the lexical scope of where that function was defined. The function closure is defined when the function is defined and that is when JS looks at outer scope until it reaches the global scope to store the needed references. (This is how scope works in JS)

function func1 () {
  function func2 () {  
    return func1
  }
  return func2
}
let newFunc = func1();
newFunc()

func1 set to function declaration and body, scoped to global, closure stores nothing 
function 2 set to function declaration and body, scoped to func1, closure is stores func1 in closure 

when func1, is called JS looks for the func name and the scope that it is designated to and then calls it. JS looks for fun2 which is scope in func1 an returns the function definition. When newFunc is invokes it does not see the func 1 in it's scope so it looks at it's closure and finds the identifier name there where points JS to the function

///////////////////////////////////////////////////////////////////////////////////////////


*****lexical scope - how the structure of your code determines what variables are accessible or inaccesible at any point in the program. ****
  If a let or const variable is on the inner scope of a block or function it only accessible within the scope or scopes nested inside it
  If let or const variable is on the outer scope of a block or functon it is accessible from the outer and inner scope of that funtion  
  If a var variable is on the inner scope of a block it is actually scope to the function that the block is defined and is accessible only the functions scope or scopes nested inside it
  if a var variable is on the outer scope of a block or function it is accessible to the outer scope and inner scope.

How does `var` differ from `let` and `const`?
An old way to declare variables in JS. It is function declared scope. This means that JS sets the scope of the var variable to the function it is defined in during creation phase. Var varibles in node REPL when declared and intialized to a value will mutate the global object. During creation phase var variables will be set to undefined during creation phase. Let and const is a new way to declare variables in JS. The are blocked scope. This means that JS sets the scope of these variables to the the block they were defined in during creation phase. They also do not mutate the global object and there values are not defined during creation phase

What do we mean by declared scope, visibility scope, and lexical scope?
Declared scope - how an identifer is declare with keywords like let, const and var. 
  let and const, classes? - block scope
  var and function declaration - function scope

lexical scope - the structure of your code of whether variables are declare on the inner or outer scope of a function or block that determines if variables are accessible or inaccessible at any point in the program.

visibility - where a variable is visible (global or local / function or block.) Visibility is determined by declared scope and lexical scope.

What do we mean by global scope and local scope?
It refers to the visibility of a variable which can be global or local / block or function scope depending on the variables declared and lexical scope

What do we mean by inner scope and outer scope?
It refers to a variables lexical scope of whether they are declared on the inner or the outer scope of a funtion or block that determines if variables are accessible or inaccessible at ant point in the program. 

What do we mean by function scope and block scope when talking about declared scope?
It means that a variable can be function scoped if variables are declared with the keyword var or a function declaration and block scope if delcared with a let, const or class? 

What do we mean by function scope and block scope when talking about visibility scope? ( should this not be local function scope and local block scope)
It means the variable are only visible or accessiable in the local functions scope or the local block scope.
////////////////////////////////////////////////////////////////////////////////////////////
*/

//Write some code that uses closure to create private data

///////////NO SO EFFICENT USE OF CLOSURE/////////////////
// function incrementNum(num) {
//   return num += 1;
// }

// function createFunc (num) {
//   return function() {
//     return incrementNum(num);
//   }
// }

// returns the function incrementNum 
// return function's closure refers num another func incrementNum is called does not see the variable declared inside it, looks at its closure, does not see it, looks at the outer functions closure within its lexcical scope and finds it.
// const incrementNumP = createFunc(5) 
// console.log(incrementNumP()); // num is now 6 

///////////EFFICENT USE OF CLOSURE///////////////////////////////
// function createFunc (num) {
//   return function () {
//     return num += 1;
//   }
// }

// // returns the function incrementNum 
// const incrementNumP = createFunc(5) 
// // return functions closure stores the reference to num, when called it see if num is declared in it, it is not it looks at its closure and it finds it.
// console.log(incrementNumP);
// console.log(incrementNumP()); // num is now 6 

/////////////////CLOSURE IS NOT BEING USED/////////////////////////
// function increment () {
//   return num += 1;
// }

// function createFunc (num) {
//   return increment; 
// }

// // returns the function incrementNum 
// const incrementNumP = createFunc(5) 
// //increment is defined in the global scope and num is not within its lexical scope, it is in the createFunc scope.
// console.log(incrementNumP);
// console.log(incrementNumP()); // num is not declared. When called num is not defined which raises a type error.

///////////////////////////////////////////////////////////////////////////

//Explain why private data is desirable.
 //restrict access to data in order to help protect data integrity and help prevent the developer form depengin on the implementation by foring the developer use the inderface to change the data as you intend it.

//Be able to identify code that gives users of your code a way to alter private data.
/* 
 if one of your method returns a reference to an object, others can mutate the elements in that object 
Example 1:
let arr = todoList.getAllTodos();
arr[0] = undefined;

Example 2: 
let arr = todoList.getAllTodos();
while (arr.length > 0) {
  arr.pop();
}
*/ 

//What are IIFEs?
// immediately invoked function expressions = function expression is defined and invoked at the same time. The function only exist at the point of execution.

//How do you use IIFEs?
/*
1. Parentheses act as a grouping control that tells JS to evaulate the function as an expression. It returns the value of the expression which is the function defintion 
2. the second parentheses calls the function expression 
*/

// console.log(function func (number) {
//   return number + 1;
// }(2));
// console.log(func);
// console.log(func(2));
// function func (number) {
//   return number - 1;
// };
// console.log(func(2));

////////////// DOES NOT WORK /////////////
/* function (){
  return 1;
}();

// console.log((function name (number) {
//   return number + 1;
// })(2));   

// console.log((function (number) {
//   return number + 1;
// })(2));    
// console.log(function (number) {
//   return number + 1;
// }(2)); 
// console.log(function name (number) {
//   return number + 1;
// }(2)); 

//How do you use IIFEs to create private scopes?
// thousands of lines of messy JavaScript code!
function func() {
  console.log("func");
}
console.log((function func (array) {
  let largest = -Infinity;
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 2) === 0 && (array[index] > largest)) {
      largest = array[index];
    }
  }

  return largest;
})([5, 10, 12, 7, 9, 6, 24, -10, -200, 37])); // 24

func();
*/
// more messy JavaScript code

//The grouping parentheses makes JS evaluate the function as an expression that then gets call right after. It is an expression that is evaluated at execution phase then called. It is not stored recorded and scoped during execution phase so it does not conflict with the same name function declared beforehand. function is not create and store in temporary memory and only executed.

//How do you use blocks to create private scopes?
// thousands of lines of messy JavaScript code!
// function func() {
//   console.log("func");
// }
// var num = 3;
// console.log(func()) // func
// {
//   function func() {
//     console.log("newFunc"); // newFunc
//   }
//   console.log(func());
//   var num = 6; 
//   let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
//   let largest = -Infinity;
//   for (let index = 0; index < array.length; index += 1) {
//     if ((array[index] % 2) === 0 && (array[index] > largest)) {
//       largest = array[index];
//     }
//   }
//   console.log(largest); // 24
// }

// func() // newFunc
// console.log(num); // 6
// more messy JavaScript code
//Block create private scope for block scoped variables such as let, const, and classes. However, it does not privately scope for function scoped variables such function declarations or var variables.

//How do you use IIFEs to create private data?
// lets you create more convenient code where the function expression returns a function with a closure that refers to private data and then envokes it right away. 
/*

- What is hoisting?
// When variables are raise to the top of the function or block depending on its type. 
  // function scope declarations move to the top of the function 
  // block scope declaration move to the top of the block

- How do `var`, `let`, and `const` interact with hoisting? How do they differ?
Var and function declarations are function declared scope meaning they raise to the top the the function they are declared in. They are set to a value of undefined. Var variables are raised after function declarations.

Let, const, and classes are blocked scope meaning they raise to the top of the block they area declared in. And if declared in a function they a raised to the top after function declarations. They are not set a value.
  

- How do functions and classes interact with hoisting? How do they differ?
// function declaration goes to the top of the function it is declared in and set to the function declaration and body.
// class declaration gotes to the top of the block scope it is declated in and if declared in a function goes to the top of the function after the function declaration and not set to any value.

- What part does hoisting play in the way a specific program works?
// hoisting is a mental model that attempt to conceptualize how hoisting really works in JS. This invovles what JS does to variables during creation and execution phase.

- How does hoisting really work? 
JS first goes through the program from top to bottom and records the variable names, sets or not set them to the appropriate values and records the scope during the creation phase. On the execution phase, JS goes through the program from top to bottom for any executable code, it then looks at it records for the variable name and it's designate scope and executes the code. 

- What is the temporal dead zone?
Block scope variables like let, const, and class declarations are not set to any value during creation phase. If you are to ask for a value of such variable before it is declaring and initializing it you will get an reference error where the variable was not initialized.

- What is strict mode? How does it differ from sloppy mode?
// strict mode is  optional lexically applied mode the modifies the semantics of JS and prevents certain kinds of errors asnd syntax. 
1. It eliminates some silent errors that occur in sloppy mode by having JS throw errors
2. prevents some code that can inhibit JS ability to optimize a program so that it runs faster
3. prohibits using names and syntax that my conflict with future versions of JS. Sloppy mode do not have these features.

- How do you enable strict mode at the global or function level?
Strict mode is lexically scope meaing it only applies to code within the scope it is declared. Strict mode is not hoisted so you have to declare it at the top of the function. To apply it globally you have to declare the pragma at the top of the global scope and to apply it at a function leve  you have to declare the pragma at the top of the local function.

- Describe how code behaves under both strict and sloppy mode.
// silent errors
//1. variable declared without keywords like let, const and var in node files are set to the global object 
// Must declare variables with let, const or var if not throws a reference error. 
// Helps when forgetting to setting properties on a object with the keyword this, JS throws a reference error.
//2. function invocations set an implicit execution context to the global object.
// Function invocations are set to `undefined`.
// Both prevents unintended mutation of the global object 
//
//3. Cannot declare two function parameters with the same name 
//4. cannot delete property name in the global object
//5. leading zero with no 8 or 9 digits raises an syntax error
//6. leading zero rasies syntax error

// names and syntax conflicts 
1. cannot use let var, etc for naming variables

// others
1. cannot use with
3. disables access to some properties of arguments object 
4. forbits binding of eval and argument


- When is strict mode enabled automatically?
// in the body of a class and JS modules

- When should you use (or not use) strict mode?
You should use strict mode globally if you are starting on a whole new project. You should use strict mode locally if you are coding a new functionality on an exisiting project. You should not use strict mode, if you are modifying an existing functionality on an existing project that is not using strict mode. This could disable the functionality of the existing code.

- What are concise property initializers?
we use the the name of the property we want o initialize, and JS lookd for a variable with the same name to use as the initila value

- What are concise methods?
// eliminate the : and word function, JS use the function name as an identifer as well?

- What is object/array destructuring?
destructuring lets you perform multiple assignments in a single expression
Object destructuring 
// Object destructuring - the left hand side or parameter pulls out the need properties on from the object on the right hand side and store them in variables on the left hand side
// Array destructiromg - the left hand side or paramater pulls out the need values from the array on the right hand side and stores them in variables on the left hand side. 
// you can use destructuring in function parameters
// use commas for skip any element you do not what to destruct in an array
// use the rest syntax to group elements together to a another array 

- What is spread/rest syntax?
// spread syntax spread all the element in an object or array into individual elements 
// rest syntax groups all individual elenents in an object or array.

*/

/*
Friday
- What are the benefits of using modules?
1. smaller and less complex self-contained pieces of code is easier to understand and work with 
2. keeps cohesion of code over time since each module does a specific task
3. allows for reuse of code
4. 4. allows for others to work on the same project withour conflict since each person is focus on a particular task
5. allows for encapsulation of data without explicitly using complicated use of closure 

- How do you use and create CommonJS modules?
 1. module.exports property refers to the object that is exported into the importing module. A variable is declared and intialized to that value. 

- How do CommonJS modules pass exported items to the importing module?
via the module.exports property which is can be assignd to any value. The variable in the importing module stores the value or reference to the 

- What are ES6 modules?
loads remote modules ayschronously within the node environment on your local computer

- What are the differences between CommonJS and ES6 modules?
CommonJs is synchronous and ES6 is asychronous.

- What is the CommonJS variable `module`?
the current file?

- What are exceptions?
objects of error type thrown or returned when an exceptional event has occurred.
- Given an exception error message, identify the exception type and understand the meaning.
reference error
syntax error
Internal error

- What are the terms raise, throw, re-throw, and catch?
raise an exception internally by Js or explicitly to indiciate an expectional event has occurred. You can rethrow an error after catching it. you can catch an error in the try blocl

- What is the syntax for the `throw` and `try/catch` statements?
throw new Error("this is an error")
try {
  code
}cathc(error) {
  do something
}

- What is the program flow for an exception?
when an exception is thrown it looks inside the function it was thrown to see if it is contained within a try block if not the exception bubbles up or is return to outer scope until it finds a try block. If it doesn't find out in the global scope ther program terminates and logs the error.

- How do you throw an exception?
throw new Error("this is an error")

- What data types can be thrown as an exception?

- What Happens When A Program Throws An Exception?
 the error is returned to indicate an exceptional event has occurred and if it is not caught the program terminates.

- When should you use exceptions?
to indicate an expectional event has occured.

- What 5 side effects can a function have?
- mutates a non local variable that refers to an object
- reassigns a non local variable
- raises an exception 
- read or writes to a non local resource 
- calls another function that produces a side effect not confined to the calling function.

- What is a pure function?  
it has no side effects AND 
given the same arguments, it returns the same value in the functions lifetime. The consist return value depends on the arguments passed into the function.

- What commands you you need to run to install and set up jest?
npm install jest -g to install globally 
create folder and create a jest.config.js file in the folder 
create a temp.test.js file 
run jest temp.test.js to excute the file 

- What are the main jest functions?
1. call describe method which takes a description string, and a callback that callas the tests inside. Structure your tests into logical sections
2. call test method which takes a description string, and a callback that calls the assertion 
1. assertion or expectations is the verification step that confirms that you program did what it should. It test whether the return value of a function or method matches the expected results.
example:
expect(...).toBe
 a. actual value - the value returned of the function/method we want to test 
 a. expect - a function returns an object that includes a variety of matcher methods
 b. matcher function asserts something about the value. IT  compares it to the actual value pass  to expect with the expected value passed into the it. it does not return a meaningful value but informs Jest tof the results which Jest treats as a fail or success.

- What is SEAT?
  1. set up the necessary object use before each to reset the object back to its initial state before each test. Can also happen within test if setup is unique.
  2. execute the code against the object we're testing in the  (expect value is returned)
  3. assert the results of executions (matcher asserts the value)
  4. tear down and clean up lingering artifacts; use after each ( clean up files, log something or  close a database connection)

- What are some common jest matchers?
1. toBe - check if reference is the same 
2. toEqual - samw as to be but checks if the value inside the values inside the objects are the same
3. toBeUndefined - if undefined
4. toThrow - if an error is thrown
5. toBeNull - if is null
6. toBeTruthy - if value truthy
7. toContain - check if values in an array or substring in a string exist 
8. not - property will invert the return value of the matchers

- Explain `expect` and matchers (`toBe` and `toEqual` especially)
 expect is a function the takes in an actual value returned from the function or method to be tested and which is used by the matcher, it returns an object that contains matcher methods.  to be test for reference equality while toEqual test if values in an object are the same not references.

- What does code coverage refer to?
how much of our program code was tested by a test suit. coverage based on the percentage of functions or methods called by your tests or by the percentage of lines of code that executed in as a result of the test. One metric to gauge code quality and reliability

- What do branches refer to when talking about JEST testing?

????
*/

/*
Saturday
- What is npm?
npm database - part of the node installation; database that hosts hundreds of thousands of free code packages you download and use in your project. 
node package manger - command the comes with node that manages your packages (dependencies) that you need for your project 
 1. packages - node project with files and subdirectories inside it. package of code that you can download, install, and use in your code or system
  a. types
    1. executable command in terminal
      jest 
      eslint
    2. programming interface 
      readline-sync
  2. visiability 
    a. global - use  npm install `package` -g; on /usr/local/lib/node or /usr/local/lib/node_modules
    b. local  - use npm install lodash --save in the project directory you want create the node_modules folder and intall lodash inside it.

 2. package.json file 
 3. automating with scripts

- What is npx and when do we use it?
to run a local executable package instead of the global version. If the package is nowhere to be found it downloads and uses a temporary verson of the package.

//Package.json and package-lock.json files allows you to work on a project with multilpe contributors or needs to fun on different machines.

- What is the `package.json` file and how do you initialize one?
A configuration file in JSON format that contains information about the project and the project’s dependencies and their versions, and store configuration settings. 

run npm init to create a package.json file. 
2 Ways to add dependency to package.json

You can add dependencies to the file  And save the file 
Run `npm install` to install the dependencies on the package.json directory and  builds a the package-lock.json
- OR 
- What does the `--save` flag do?
installs your the package locally as a dev dependency in the modules folder that it first finds, if none is found it created one the directory that you ran your command in. 
use npm install `name` --save to install package and save to both package.json and package-lock json


- What is the `package.lock.json` file?
Shows the versions of the packages that npm installed and dependencies of each package version. The next time npm installs, it looks at the package-lock.json and installs the versions specified there. You must add package-lock.json to git repo so others can install the correct package versions.



- Where are a programs dependencies stored?
in the node_modules, if it doesn't find one in the directory hierarchy, it creates one in teh directory where the command was ran.

- Should node modules be stored in git? How about package.json?
modules no, 
package-lock.json yes 

- What is the difference between local and global modules?
local modules only apply to projects with the local directly 
global modules apply to all projects (different versions of it are not needed)

- What's the difference between `dependencies` vs `devDependencies`?
devDependencies - development dependencies during the development phase of a project
 use --save-dev to add development dependencies to the devDependencies property in package.json

 dependencies property in package.json is for production use --save od -S or nothing at all in for mpm version 5 and plus since it is default to dependencies property


- How can you remove a dependency from `package.json`?
npm uninstall `package` --save
npm uninstall `package` --save-dev
npm prune - updates dependencies in package.json

- Where are npm scripts defined and why are they useful?
automate repetitive tasks such as building a project, minifyinf files, and deleting temprorary files and folders
you can you it to shorten a task by assigning the a series of commands to a shorter command. 
in the scripts property in package.json
scripts object takes a series of key/value pairs in which the key is the name of the script and the value is the script you want to run

- What is transpilation and what are its advantages?
the process of converting source code written in one language into another with a similar level of abstraction to the original code. In JS, taking, code written in a superset of JS and rewriting it as plain JS, newer to older versions of JS to work with runtime environments. Let developers use the newest version of JS without worry about compatiability of runtime.

- What is Babel and what does it do?
a transpiler that converts es6 + code to es5 code
install babel locally as dev 
npx babel lib --out-dir dist --presets=@babel/preset-env
- preset is a plug-in that hass all the information needed to compile one version of JS to another
add the  --presets option to babel coman which tells Babel what presets it should us.
- tells Babel to transiple all JS files in the lib directory and to output the resulting code with the same names to the dist directry.

run npx babel `lib` --out-dir dist 
transpiles all JS files in the lib directory and output it in the file in the dist directory

- What is the difference between synchronus and asynchronus?
syrchronus is blocking meaning that each line of code runs and finishs before the next line of code in executed
asynchronus is non blocking meaning that when a async line of code runs the it is set to run on the api stack as the JS stack continues to run next line of code. 

- What is `setTimeout` and how do you use it?
setTimeout takes a callback and a delay which tells the api stack how long to keep the callback and then push it to the queue  when all the code in JS stack finished executing each callback is poped from the stack, push on to the JS to be executed until the queue is empty. 

- What is `setInterval` and how do you use it?
set interval push the callback to the api at the set interval  until the returned identifier to the clearInterval function will end the callback from being pushed to the api 
- What are promises?

- What do the `async` and `await` keywords do?
sugar syntax of of promises 
async keyword before function to tell JS that function is async 
await tell the function after it to tell the code to wait until the make request id finished and then execute the next line.  While it waits to finish executing the JS stack will continue to run the next lines of come outside the function.
use try catch statment to catch errors

- What is the event loop?
if the stack is empty, the queue pops the callback to the stack to be executed unitl the queue is empty.
*/

//PACKAGING - upload your project into an npm module for others to use
// 1. must have a package.json file (name, verson, and main fields)
// 2. have specific directory structure (lib for all js file and test for all this files)
// 3. publish your package (npm publish --access public)
/*
├── dist
│   ├── todo.js
│   └── todolist.js
├── lib
│   ├── todo.js
│   └── todolist.js
├── index.js
├── node_modules
├── package-lock.json
├── package.json
└── test
    └── todolist.test.js
*/

/////////////////////////BIND CLOSURES AND PFA//////////////////////////////
// function myBind(func, context) {
//   return function() {
//     func.apply(context); // apply calls the calling function with the pass in object as the execution context.
//   }
// }
// // `myBind`'s closure stores a reference to `func` and `context`. This allows the function to access the variables during execution.

// // is it a partical function application?
// // `myBind` applies partical arguments to the returned funtion through it's closure
// // the return function calls another function 
// // However it does not:
// // the return function does not supply remaining arguments. 

// //How to make `myBind` use  partical funtion application

// let obj2 = {b:"this is b"};
// function test1(...args) { // takes all the closure and remainding args and collect them in an array
//   console.log("args:", ...args) // seperates the elements in the array to their own elements 
//   return this.b;
// }
// let closureArgs = 1;
// let newFuncTest = test1.bind(obj2, closureArgs, 7); // partial arguments being passed in 
// console.log("newFuncTest:", newFuncTest);
// console.log("Invoking newFuncTest:", newFuncTest("Hey", "Bye")); // remainding arguments being passed in
// function add(num1, num2) {
//   return num1 + num2;
// }

// function myBind1(func, context, ...args1) {
//   return function(...args2) {
//     return func.apply(context, [...args1, ...args2]);
//   }
// }

// let addByTwo = myBind1(add, null, 2); 
// console.log("FUNCTION",  addByTwo);
// console.log("invoke addByTwo:", addByTwo(6)); // logs 8 

// // let newFuncBind1 = myBind1(test1, obj2, "closure arg1", "closure arg2");
// // console.log("Invoke newFuncBind1:");
// // newFuncBind1("this is remaining arg", "this is another remaining arg");


// let obj = {a: "this is a"};

// this.a = "I am the this object of the iife";
// let newFunc = myBind(function(){console.log(this.a)}, obj); // the arrow function does takes on the execution context of where it is defined. wh
// newFunc();



// //
// function test() {
//   console.log(this);
// }

// test(); // should log the global object, but really the execution context of the iife.


/////////////////////////////////////////////////////////////////////

//PRIVATE DATA THROUGH THE USE OF CLOSURE ////////////////

// this demonstrates the use of closure to create `stack` as private data that change only be mutated through using the methods or interface provided by the returned object.
// function newStack() { 
//   const stack = [];
//   return {
//     push(val) {
//       stack.push(val);
//     }, 

//     pop() {
//       return stack.pop();
//     },
//     printStack() {
//       stack.forEach(val => console.log(val));
//     }
//   }
// }

// let stack = newStack();

// stack.push(1);
// stack.push(2);
// stack.printStack();
// stack.pop();
// stack.printStack();


//////////////// ANTOHER PFA BUT DIFFERENT /////////////////////
// let foo = {
//   name: 'test',
//   bar: function(greeting) {
//     console.log(greeting + ' ' + this.name);
//   },
// };

// let baz = {
//   qux: delegate(foo, 'bar', 'hello'),// this need to return a function in order to be invoked on the next line
// };

// baz.qux();   // logs 'hello test'; // can not invoke a call to a function 
// console.log("AFTER");
// foo.bar = function() { console.log('changed'); };

// baz.qux();          // logs 'changed'

// function delegate (context, methodName, ...args1) {
//   return function(...args2) {
//     return context[methodName].apply(context, [...args1,...args2]);
//   }
// }

// bind returns a whole new function with an explicit context bounded to the function 

// maintians a reference because the returned function is since still referenced by `qux` in `baz`.

//OLOO stores all the common behavior in a prototype object 
// within the prototype object is an init method that is acts ast the constructor that sets the state of the instance and returns that instance 
// let Account = {
//   init(email, password, firstName, lastName, displayName) {
//     this.email = email;
//     this.password = password;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.displayName = this.reanonymize();
//     return this;
//   },

//   reanonymize(password) {
//     let chars = "0123456789abcdefghijklmnopqrstuvwxyz"
//     let result = "";
//     if (this.displayName === undefined) {
//       for (let i = 1; i <= 16; i += 1) {
//         let index =  Math.floor(Math.random() * 35);
//         let char = chars[index];
//         result += char; 
//       }
//       return result;
//     }
//     if(password === this.password) {
//       for (let i = 1; i <= 16; i += 1) {
//         let index =  Math.floor(Math.random() * 35);
//         let char = chars[index];
//         result += char; 
//       }
//       this.displayName = result;
//       return true;
//     }
//     return false;
//   },
//   resetPassword(password, newPassword) {
//     if(password === this.password) {
//       this.password = newPassword;
//       return true;
//     }
//     return "Invalid Password";
//   },
//   getFirstName(password) {
//     if(password === this.password) {
//       return this.firstName;
//     }
//     return "Invalid Password";
//   },

//   getLastName(password) {
//     if(password === this.password) {
//       return this.lastName;
//     }
//     return "Invalid Password";
//   }, 
//   getEmail(password) {
//     if(password === this.password) {
//       return this.email;
//     }
//     return "Invalid Password";
//   }
// }


// Object.creates create an object literal and set the object passed in as the object's prototype object. the object literal calls the init method on the prototype object which returns the object literal with all state initalized to the passed in the values and assigned to bar 
// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.getFirstName('123456'));           // logs 'foo'
// console.log(fooBar.getFirstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

// ///the answer uses closure and to store helper methods in the closurer and and iff that to return the object in which the methods have their own closure.

// creator object - makes sure info is present and valid
// manager object - creates items, updates, deleting, and query about items
// reports object (created by the report manager - returns reports object)- generates reports of an item or all items

// let ReportManager = (function(){
//   let itemsM; 
//   function getItem(SKU) {
//     return itemsM.items.filter(item => item.SKU === SKU.toLowerCase())[0];
//   }
//    return {
//        init(itemManager) {
//          itemsM = itemManager;
//        }, 
       
//        createReporter(SKU) {
//         let item = getItem(SKU);
//          return {
//           itemInfo() {
//             for (let key in item) {
//               console.log(`${key}:${item[key]}`);
//             }
//           }
//          }
//        },

//        reportInStock() {
//         console.log(itemsM.inStock().join(","));
//        }
//      }
//    })();
 
//    // itemCreator which takes in the passed in item property values and it's closure stores reference to filteredName, catWords, cans catFirstWord and isValid
//  let itemCreator = (function(){
//   let filteredName;
//   let catWords;
//   let catFirstWord;
//   function isValid (itemName, category,quantity){
//     filteredName = itemName.split("").filter(char => char != " ");
//     catWords = category.split(" ");
//     catFirstWord = category.split(" ")[0];
//     return (filteredName.length >= 5 && catWords.length === 1 && catFirstWord.length >=  5 && quantity != undefined);
//  }   
//  return function (itemName, category, quantity){
//   if (isValid(itemName, category, quantity)) {
//          let SKU = filteredName.splice(0, 3).join("") + catFirstWord.split("").splice(0, 2).join("");
//          return {
//           SKU,
//           itemName,
//           category, 
//           quantity 
//          };
//   } else {
//     return {notValid: true}; // the item is a object with notValid property
//   }
//   }
//  })(); 
 
//  let ItemManager = (function(){
//   function getItem(SKU, items) {
//     return items.filter(item => item.SKU === SKU.toLowerCase())[0];
//   }
//    return {
//     //when create is invoked itemCreator is invoked and return either an valid or invalid object (with only isNotValid property)
//      create(itemName, category, quantity) {
//       let item = itemCreator(itemName, category, quantity);
//        if (item.notValid){
//         return false;
//        } else {
//         this.items.push(item)
//        }
//      },
//      update(SKU, obj) {
//       let item = getItem(SKU,  this.items);
//       Object.assign(item, obj);
//      },
//      delete(SKU) {
//        // get the index at item 
//        let index = getItem(SKU, this.items);
//        this.items.splice(index,1);
//      },
//      items: [], 
 
//      inStock() {
//        return this.items.reduce((acc, item) => {
//         if(item.quantity > 0 ) acc.push(item.itemName);
//         return acc;
//        }, []);
//      }, 

//      itemsInCategory(category) {
//        return this.items.filter(item => item.category === category);
//      }
//    }
   
//  })();
 
 
//  ItemManager.create('basket ball', 'sports', 0); // "valid item"
// ItemManager.create('asd', 'sports', 0);// return true
//  ItemManager.create('soccer ball', 'sports', 5);           // valid item
//  ItemManager.create('football', 'sports'); // return true
//  ItemManager.create('football', 'sports', 3);              // valid item
//  ItemManager.create('kitchen pot', 'cooking items', 0); // return true 
//  ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
 
//  console.log(ItemManager.items); // returns list with the 4 valid items
 
//  ReportManager.init(ItemManager);
 
//  ReportManager.reportInStock(); //logs soccer ball,football,kitchen pot
 
//  ItemManager.update('SOCSP', { quantity: 0 });


//  // returns list with the item objects for football and kitchen pot
//  ItemManager.inStock();

//  // football,kitchen pot
//  ReportManager.reportInStock();
 
//  // returns list with the item objects for basket ball, soccer ball, and football
//  ItemManager.itemsInCategory('sports');
 
//  ItemManager.delete('SOCSP');
//  // returns list the remaining 3 valid items (soccer ball is removed from the list)
//  ItemManager.items;
 
//  let kitchenPotReporter = ReportManager.createReporter('KITCO');
//  kitchenPotReporter.itemInfo();
//  // logs
//  // skuCode: KITCO
//  // itemName: kitchen pot
//  // category: cooking
//  // quantity: 3
 
//  ItemManager.update('KITCO', { quantity: 10 });
//  kitchenPotReporter.itemInfo();
//  // // logs
//  // // skuCode: KITCO
//  // // itemName: kitchen pot
//  // // category: cooking
//  // // quantity: 10

//How can we refactor the function definition below (without changing the function invocation) so that we don't need to use the arguments object?

// function sum() {
//   values = Array.prototype.slice.call(arguments);

//   return values.reduce(function(a, b) {
//     return a + b;
//   });
// }
// function sum(...values) {
//   // values = Array.prototype.slice.call(arguments);

//   return values.reduce(function(a, b) {
//     return a + b;
//   });
// }

// console.log(sum(1, 4, 5, 6)); // 16

//How can we refactor the invocation of the function formatName (without changing the function definition) so that we don't need to grab each element of the array fullName by index?

// function formatName(firstName, middleName, lastName) {
//   return `${lastName}, ${firstName} ${middleName[0]}.`;
// }

// fullName = ['James', 'Tiberius', 'Kirk'];

// console.log(formatName(fullName[0], fullName[1], fullName[2]));
// logs: Kirk, James T.

// function formatName(firstName, middleName, lastName) {
//   return `${lastName}, ${firstName} ${middleName[0]}.`;
// }

// fullName = ['James', 'Tiberius', 'Kirk'];

// console.log(formatName(...fullName));
// logs: Kirk, James T.

