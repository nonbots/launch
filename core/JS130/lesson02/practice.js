/*
Rules for hoisting 

1. Function declarations are hoisted to the top of the function scope or program in which they are defined in because technically they are declared and initialized during creation phase.

2. In conditions where function declarations and var variables have the same name, the `var` is discarded and treated as a reassignment. Var in non strict mode allows for duplicate names 

3. In conditions where both var vairables have the same name, the last `var` variable is discarded and treated as a reassignment. Var in non-strict mode allows for duplicate names 

4. `var` variables are hoisted after function expressions in the  function scope in which it is declared and set to `undefined`. When the code executes the variable is initialized to the value of [value].

5. let, const, classes, class expressions are hoisted to the top of the block scope or after function declaration in function scope and is not defined. When the code executes the variable is initialized to the value of [value].

Creation and Execution Phase
1. On creation phase, JS records the [variable] [name], sets its value to [undefined, var; not defined, (const, let..), function body, function declaration] and sets its scope to [scope].

2. On execution phase, JS looks for the variable [name] in the [scope] and initializes the variable to the value of [value]

3. JS looks fro the variable [name] in the [scope]. The function is invoked and [returns, logs].

*/

// console.log(getName());

// function getName() {
//   return "Pete";
// }

/*
Hosting:
This code demonstates that function declarations get hoisted to the top of their definded function scope.The function declaration `getName` is hoisted to the top of the global scope and set to the function declaration and body. JS is able to accessed `getName` and invoked it. The function returns `"Pete"` instead of throwing a `ReferenceError`. 

Creation and Execution Phase:
On creation phase, JS records the function name `getName`, sets it to the function declaration and body, and sets its scope to the global scope. On execution phase, JS looks for the function `getName` in the global scope and invokes it. The function returns the value `"Pete"`. This code demonstrates what happens during creation and execution phase.
*/

// console.log(bar); // undefined
// var bar = 3;
// console.log(bar); // 3

/*
Hoisting:
The `var` variable `bar` is hoisted to the top of the global scope and is set to `undefined`. The `console.log` method on line `37` logs the stored value of `bar` which is `undefined`.  On line `38,  `bar` is reassigned to the value `3`. The `console.log` method on line `39` logs the stored value of `bar` which is `3`. The code demonstrates how `var` variables set their values to `undefined` when hoisted. 

Creation and Execution Phase
On creation phase, JS records the `var` variable `bar`, sets it to `undefined`, and its scope to the global scope. On execution phase, JS looks up the variable `bar` in the global scope and logs it value of `undefine` on line `37`. On line `38`, `var` on `bar` is discarded and `bar` is reassigned to `3`. The `console.log` method on line `39` logs the stored value of `bar` which is `3`. The code demonstates what happens during creation and execution phase. 
*/

// console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
// let foo;
// // console.log(foo);
/*
Hoisting:
This code demonstrates that `let` variables do not set a value, meaning they are not defined when they are hoisted. `let` variable `foo` is hoisted to the top of the global scope and is not defined. On line `49`, JS throws a `ReferenceError` since `foo`'s value is not defined. 

On line 50, `let` is discarded and `foo` is reassigned to `undefined`. On `line 51`, `console.log` logs the value stored in `foo` which is `undefined`.

Creation Execution Phase: 
On creation phase, JS records the `let` variable name `foo`, does not set a value, unset variable, and sets its scope to the global scope. On execution phase, on line `49`, JS thows a `ReferenceError` when JS looks up the `foo` variable in the global scope and find that its value is unset.
*/

// function foo() {
//   return bar();

//   function bar() {
//     return 42;
//   }
// }
// foo()

/*
Hoisting:
This code demonstrates that function declarations are hoisted at the top of the function scope in which they are defined. The function declaration `bar` is hoisted at the top of the local function scope `foo` and is set to the function declaration and body. When `foo` is invoked on line `69`, `bar` is also invoked on line `63` and returns `42` instead of throwing a `ReferenceError`. 

Creation and Execution Phase:

*/

// function foo() {
//   if (true) {
//     function bar() {
//       console.log("bar");
//     }
//   } else {
//     function qux() {
//       console.log("qux");
//     }
//   }

//   console.log(bar);
//   bar();

//   console.log(qux);
//   qux();
// }
// foo();

/*
This code demonstrates unpredictable results when declaring and defining a function in a block scope. The function `bar` is defined in the if block and the function `qux` is defined in the else block. Since the functions `bar` and `qux` are function scoped, both functions are hoisted to the top of the `foo` local function scope. Since, they are not block scoped, console.log couls out out different output depending on the engine that runs the code. Usind function expression inside block will log out the intended output of the bar function, then the value `"bar"`, and then throwing a "ReferenceError" in the case of declaring with `let` or `undefined` and then throwing an typeError when declaring with `var`. Thus, it is best to use function expressions in block scope to get the intended results.
*/

// console.log(hello());

// var hello = function () {
//   return 'hello world';
// };
/*
Hoisting:
This code demonstrated that `var` variables are hoisted to the top of the function scope in which they are defined after function declartions and set to a value of `undefined`. The `var` variable `hello is hoisted at the top of the global scope and set to a value of `undefined`. On line `102`, JS throws a `TypeError` since `undefined` is a data type that can not be invoked.
*/

// bar();             // logs "world"
// var bar = 'hello';

// function bar() {
//   console.log('world');
// }

/*
This code demonstrates the function declarations are hoisted to the top of the function scope in which they were defined. The function delcaration `bar` is hoisted to the top of the global scope and set to reference the function declaration and body. Thus, on line `112`, `bar` has access to the function, invokes it and logs `"world"`
*/

// bar();              // logs undefined
// var foo = 'hello';

// function bar() {
//   console.log(foo);
// }

/*
This code demonstrations what JS really does with `var` variables and functions during the creation and execution phase. On creation phase, JS records the `var` variable name `foo`, sets its value to `undefined`, and sets its scope to the global scope. On line `126 -127`, JS records the function name `bar`, sets its value to the function declaration and body, and sets it scope to the global scope. On execution phase, on line `123`, JS looks for `bar` in the global scope. the function that `bar` refers to is invoked and it logs the current stored value of `foo` which when JS looks up for it is `undefined`. This code snippet exposes that `var` is assigned to the `undefined` during the creation phase before any execution starts. The hoisting model fails to do this.
*/


// let foo = "hello";

// function foo() {
//   console.log("hello");
// }


/*
This code exmaple demostrates what JS really does with `let` variables and functions during the creation and execution phase. On creation phase, JS moves sequential down the program and records the `let` variable name `foo`, does not set a value, and sets its scope to the global scope. When it encounters the function and `foo` it throws a `SyntaxError` since that name was already recorded and JS `let` variable can not be duplicated. This shows the one of the flaws of hoisting since it does not differentiate between creation and execution phase.
*/
// function foo() {
//   console.log("hello");
// }

// let foo = "hello";
/*
This code demonstrates what JS really does with `let` variables and function declarations. On creation phase, JS sequentially records the function name `foo`, sets it value to the function declaration and body, and sets its scope to the function scope. It then encounter another variable name `foo` and throw a `syntaxError` since `let` variable can not have duplicate names. The shows the flaw with the hoisting model since it does not differentiate between creation and execution phase. One would mistaken that the error happened at execution.
*/

// var foo = function() {
//   console.log("Bye");
// };

// function foo() {
//   console.log("Hello");
// }

// foo();

/*


5:10 ( 7 minutes)

This code demonstrates that function declarations are hoisted at the top of the function scope in which it is defined in and that function expressions declared with `var` variables are hoisted at the top of the function scope in which they are defined in after function declarations. Thus the hoist version would look like this:

```Javascript
function foo() {
  console.log("Hello");
}
foo = function 
foo()
```
On line `` the `var` declare with `foo` is discard and `foo` is reassigned to the function declaration and body. Thus on the invocation of `foo` on line ` `, the function logs to the console. "`Bye`"
*/

// for (var index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     var foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo);
// console.log(index);

/*
5:21

```Javascript
var foo; // i = 2, foo = bye 
var index; // i = 2
for (var index = 0; index < 2; index += 1) {
  console.log(foo); // i = 0, foo = undefined ,  i = 1, foo = Hello, 
  if (index === 0) {
    foo = "Hello";// ) i = 0, foo = Hello
  } else {
    foo = "Bye"; // i = 1 ,foo = bye 
  }
}

console.log(foo);
console.log(index);
```

The code demonstrates the `var` variables are function scoped and are hoisted to the top of the function scope in which they are defined in after function declarations. The `var` variables `foo` and `index` are declare and initialize inside the conditions of a for loop and if block which are block scope, but since `var` is function scoped the variables are hoisted to the top of the global scope and both are set to `undefined`. As the for loop iterates, on the first iteration `index` is reassigned to 0, the console logs the value of `foo` which is `undefined`, the ife conditione evulates to true and `foo` is reasigned to `"Hello"`. On the second interation, `index` is `1` and the console logs the value of `foo` which is `"Hello"`. The if condition evalutes to false and ressigns `foo` to  `"bye"`. `index` is reassigned to and the loop exits. the console at  the  ends logs the current values of `foo` and `index` which is `"bye"` and then `2`.
*/

// bar();

// var bar = function() {
//   console.log("foo!");
// };

// bar();

// function bar() {
//   console.log("foo!");
// };

/*
var bar;
bar(); // undefined

 bar = function() {
  console.log("foo!");
};
*/

// var bar = 82;
// function foo() {
//   var bar = bar - 42;
//   console.log(bar);
// }

// foo();

/*
6:01 (10 minutes)
The code demonstrates that `var` variables are hoisted to the function scope in which they are declared in after function declarations and set to a value of `undefined`. As shown in the hoisted verson below :
```javascript
function foo() {
  var bar; // undefined
  bar = bar - 42; // undefined - 42 => NaN
  console.log(bar); // NaN
}
var bar; // undefined
bar = 82;
foo();
```
The `var` variable `bar` hoisted to the top of the local function scope `foo` and set to a value of `undefined`. When `foo` is invoked on line ` `, `bar`'s stored value of `undefined` is subtracted by `42` `bar` and is reassigned to `NaN` which is then logged. 
*/

// function foo(condition) {
//   let bar;
//   console.log(bar);

//   let qux = 0.5772;

//   if (condition) {
//      qux = 3.1415;
//     console.log(qux);
//   } else {
//     bar = 24;

//     let xyzzy = function() {
//       let qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }


// foo(true);
// foo(false);

// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };

// function Pet(name, image) {
//   this.name = name;
//   this.image =  image;
// }

// class Image {
//   constructor(file) {
//     this.file = file;
//   }
// }

// var catImage = new Image("cat.png");
// var pudding = new Pet("Pudding", catImage);

/*
6:25 - 33
Creations phase: 
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}
let  Image; //unset
var catImage; // undefined
var pudding; //undefined

Execution phase: 
Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};
class Image =  {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png") //returns {file: "cat.png"}
pudding = new Pet("Pudding", catImage); //returns {name: "Pudding",{file: "cat.png"}} 
*/
// `use strict`;

// exports.func = (str) => console.log("foo");
// exports.func = (str) => console.log("foo");
// local variables within the main/global function 
// newVar = "newVar here";
// var anotherVar = "another var here";
// console.log(globalThis === global);
// function localFunc() {
//    return this.newVar; // global object 
// }
// console.log("FUNC",  localFunc());
// console.log(global.newVar);
// console.log(global.anotherVar);
// exports.newFunc =  (str) => console.log("newFunc");
// exports.newFunc2 =  (str) => console.log("newFunc2");
// this.newFunc();
// module.exports = (str) => console.log("foo");
// console.log(exports === module.exports);
// console.log(module.foo);
// console.log(export)
// console.log(exports);

// in node.js, the global object is exports
// local function's execution context is the global object 
// global execution context is the exports object 
// console.log("Exports", exports);
// this.newFunc();
// console.log("MODULE.EXPORTS", module.exports);
// // console.log(global.bar);
// /*

// exports => {} (this) main global funtion
// module.exports => {} (this) main global funtion if not reassigned
//
let importModThisObj = require('./practice2.js');

// console.log(importModThisObj);
// console.log(module);
// console.log(exports);
// console.log(module.children[0].exports);
// console.log(importModAssignObj);

