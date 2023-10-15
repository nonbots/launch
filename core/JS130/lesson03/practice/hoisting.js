var foo = function() {
    console.log("Bye");
  };
  
  function foo() {
    console.log("Hello");
  }
  
  foo();

/*
The code logs `"Bye"`, the hoisted version looks like this: 

function foo() {console.log("Hello")} 

foo = function() {console.log("Bye")}
foo()

`foo` function declaration is raised up to the top of the global scope. Since the variable `var foo` and the function declaration `foo` share the same name, the `var` declaration is discarded.
foo is reassigned and refers to the anonymous function. When envoked logs `"Bye" to the console.
*/


  for (var index = 0; index < 2; index += 1) {
    console.log(foo); // undefined "Hello"
    if (index === 0) {
      var foo = "Hello"; // foo = "Hello"
    } else {
      foo = "Bye"; //foo = "Bye"
    }
  }
  
  console.log(foo); // "Bye: 
  console.log(index);  // 2

  /*
  The code logs `undefined`, `"Hello"`, `"Bye"`, and then `2`. During the creation phase, the code is hoisted like so: 

  var index = undefined;
  var foo = undefined;
for (index = 0; index < 2; index += 1) {
    console.log(foo); 
    if (index === 0) {
      foo = "Hello"; 
    } else {
      foo = "Bye"
    }
  }

  On execution phase `index` is assigned to `0` on the first iteration of the for loop. Since `var foo` is a function scoped variable it  is raised as the second variable in the global scope and set to `undefined`, the `console.log` method logs `undefined`. The if condition of `index === 0` evaluates to true so `foo` gets reassigned to `"Hello"`. On the second iteration, the console.log method logs `"Hello"`. Since the if clause evaluates to false the else clause is executed and `foo` is reassigned to `"Bye"`. The for loop finished executing and the console.log method on line `33` logs, "Bye" which is the current value of `foo`. On the next line it logs `2` which is the value of `index`. The program has access to `index` since index is a `var` variable is function scoped that is hoisted to the top of the global scope.
  */

  bar();

var bar = function() {
  console.log("foo!");
};

  /*
This code throws a type error. The code demonstrates that `var` declared variables are function scoped and gets hoisted to the top of the function they are defined in and set to a value of `undefined`. Since `bar` is declared with `var`, it is set to `undefined` during creation phase, when `bar` is invoked on line `53` which is `undefined`, JS throws a type error since `udnefined` is not a function that can be invoked. The hoisted version looks like this: 

var bar = undefined;
bar();
bar = function() {
    console.log("foo!")
}

change the function expression into a function delcaration for this code to work
  */

  var bar = 82;
function foo() {
  var bar = bar - 42;
  console.log(bar);
}

foo();

/*
This code logs `NaN`.  On `line 73`, during creation phase, the local  `var` declared variable `bar` is function scoped and is hosted to the top of the `foo` function and set to undefined. On execution,`foo` is invoked. The expression `bar` returns `undefined` in the expression `bar - 42`, on `line 73`. `undefined - 42` returns `NaN` and is assigned to `bar`. `NaN` is logged to the console on `line 74`.
*/
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

/*

*/
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

  /*
    
  function Pet(name, image) {
    this.name = name;
    this.image =  image;
  }
  let Image;
  var catImage;
  var pudding;
  Pet.prototype.walk

  Image = class Image{}
  catImage = new Image()
  pudding = new Pet()


  */

  console.log(getName());

function getName() {
  return "Pete";
}

/*
The function declaration `getName` is hoisted to the top of the global function scope along with it's function declaration and body during creation phase. On execution phase when when `getName` it invoked, JS calls the reference function by which the function returns `"Pete"` and is logged to the console. The hoisted version of the code looks like this 

Function getName() {
    return "Pete";
}

console.log(getName());
*/

  console.log(bar); 
  var bar = 3;
  console.log(bar);

  /*
The code logs `undefined` on `line 150` and `3` on `line 152`. The code demonstrates how `var` declared variables in this case, `bar, are hoisted to the top of the function the are defined in, the this case, global function, and set to `undefined` during creation phase. On execution phase, `undefined` is logged to the console on line `150` and the on `line `151`, bar is assigned to `3` and then is logged to the console on `line `152`. 
  */
  console.log(foo); 
  let foo;
/*
The code throws an a reference error stating that `foo` is not initialized. The code demonstrates that `let` declared variables, in this case, `foo`, are hoisted to the top of the function they are declare in after function declarations and not intialized to any value during creation phase. On execution phase, when JS attempt to log the value of foo, it throws the error.
*/

  console.log(qux); 
const qux = 42;
/*
The code throws an a reference error stating that `foo` is not initialized. The code demonstrates that `const` declared variables, in this case, `qux`, are hoisted to the top of the function they are declare in after function declarations and not intialized to any value during creation phase. On execution phase, when JS attempt to log the value of foo, it throws the error.
*/

console.log(baz); 
/*
The code throws an reference error stating that `baz` is not defined. The code demonstrates the JS throw this specific error when a variable is not declared. 
*/

console.log(hello());

function hello() {
  return 'hello world';
}
/*
This code logs `"hello world"`. The code demostrates the function declarations are hoisted to the top to the function it is defined in, in this case, `hello`, and set to it's function declaration and body during creation phase. On execution phase, `hello` is invoked and return `"hello world"` to the console.
*/

function foo() {
    return bar();
  
    function bar() {
      return 42;
    }
  }
/*
This code will logs different values base on the environment that the code is being run on. This code demonstrates the function declarations in within a function declaration produced unpredicatable behavior and that it is recommanded to use function expressions to declare functions within a function declaration to produce predictable results. 
*/

console.log(hello());

var hello = function () {
  return 'hello world';
};
/*
This code throws a type error. The code demonstrates the `var` declared variables, in this case `hello` is hoisted to the top of the function it is defined in, in this case, the global function and set to `undefined`. On execution phase, invoking `undefined` throws a type error since you can not invoke `undefined`. 
*/

bar();             
var bar = 'hello';

function bar() {
  console.log('world');
}
/*
This code logs `"world"`. The function declaration `bar` is hosted to the top of the global function scope during creation phase. On execution phase, `bar` is invoked and `"world"` is logged to the console. Since the `var bar` variable and function declaration have the same name, the `var` is discard and `bar` is reassigned to `"hello"`. However `bar` is invoked before this reasignment and is not reflected in the logged value.
*/

var bar = 'hello';
bar();            
function bar() {
  console.log('world');
}
/*
The code throws an type error. The function declaration `bar` is hoisted to the top of the global function scope of where it defined and set to it's function declaration and body during creation phase. Since `var bar` and `bar` function declaration share the same name, the `var` is discarded on `bar` and `bar` is reassigned to `"hello"` during execution phase. When `bar` is invoked on `line 214` a type error is throwm since a string can not be invoked.
*/
bar();             
var foo = 'hello';

function bar() {
  console.log(foo);
}

/*
function bar 
var foo 
bar()
On creation phase, `var` variable `foo` name is recorded, set to `undefined` and scoped to the global scope. The function declaration `bar` name is recorded, set to it's function declaration and body and scoped to the global scope. On execution phase. `bar` is invoked and `foo` returns its stored value of `undefined` and to the console.
*/
boo();

function boo() {
  console.log("Boo!");
}

/*
This code demonstrates the function declarations are hoisted to the top of the function scope it is defined it, in this case is `foo`, and set it's function delcaration and body during creation phase. On execution, `boo` is invoked and `"Boo!" is logged to the console. 
*/
let foo = "hello";

function foo() {
  console.log("hello");
}
/*
The code throws a syntax error. On creation phase, `let` variable name, `foo` is recorded, not initialized to anything and scoped to the global scope. Since `foo` is already a name that exists, when JS encounters the `foo` function declaration on `line 242` throws a syntax error stating that identifier has already been declared.
*/

function foo() {
    console.log("hello");
  }
  
  let foo = "hello";

  /*
  Here the error happens when JS encounters the `let` variable `foo` since there is already an identifier `foo` recorded that refers to the `foo` function  during creation phase.
  */