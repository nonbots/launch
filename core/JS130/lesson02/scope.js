//A block-scoped variable is only visible within the block where it is declared; 
// {
//   let a = "outer block"
//   console.log(a);
//   {
//     let b = " inner block "
//     console.log(a);
//   }
// }

// function foo() {
//     var a = 1;
//     let b = 2;


//   console.log(a); // 1
//   console.log(b); // ReferenceError: b is not defined
// }

// foo();

// function foo(){
//   function bar() {
//       return 3;
//   }
//   return bar();
//   function bar() {
//       return 8;
//   }
// }
// console.log(foo());

// var foo = "hello";

// let foo = "bye";
//creation phase
// var foo = undefined 
//foo = function(){console.log(bye)}
// foo = function () {console.log("Hello")} reassigned 

//foo = function() {console.log{"Bye"}}
// var foo = function() {
//   console.log("Bye");
// };

// function foo() {
//   console.log("Hello");
// }

// foo();


/*
1. Creation phase
finds all of the identifiers in your code and determines their scope at that time and records the names and designates its scope.snytax errors happen at creation phase 

2. Js looks up the identifiers in the associated scope and intializes the identifiers or calls it
*/
// bar();              // logs undefined
// var foo = 'hello';
// function bar() {
//   console.log(foo);
// }

//function bar() {console.log(foo)}
// var foo = undefined 
// bar().. reference error

/*
At creation, the var foo is designated to the global scope and initalized to the undefined and function bar and its body is designated to the global scope. 

At execution, JS looks for bar in the function scope, finds it and invokes the function, and logs foo which is undefined. 
*/

// {
//   function foo() {
//     console.log('A');
//   }
  
//   foo();
  
//   foo = 1;
  
//   function foo() {
//     console.log('B');
//   }
  
//   foo = 2;

//   console.log(foo);
// }

// console.log(foo)

// var bar = 'hello';
// bar();             // raises "TypeError: bar is not a function"

// function bar() {
//   console.log('world');
// }

// let foo = function() {}; // block scoped
// var foo = function() {};// function scoped 
// function foo (){}; // function scoped 


// var foo = function() {
//   console.log("Bye");
// };

// function foo() {
//   console.log("Hello");
// }

// foo();


// var foo = function() {
//   console.log("Bye");
// }; // var foo = undefinded (1. creation)
// // foo = function() {/*..*/} (3. execution)

// function foo() {
//   console.log("Hello");
// }
// //foo = function foo() {console.log("Hello")} (2. creation)

// foo(); // (4. execution) loge Bye 
// for (var index = 0; index < 2; index += 1) {
//   console.log("INDEX", index);
//   console.log(foo);
//   if (index === 0) {
//     var foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log("HERE", foo);
// console.log("HERE", index);

// function foo(condition) {
//   let qux;
//   let bar;
//   let xyzzy ;
//   console.log(bar); //  LOGS UNDEFINED //  LOGS UNDEFINED 

//   qux = 0.5772; //qux = 0.5772 //qux = 0.5772

//   if (condition) {
//     qux = 3.1415;  // qux = 3.1415
//     console.log(qux); // LOGS 3.1415
//   } else {
//      bar = 24; // bar = 24

//      xyzzy = function() {
//       let qux;
//       qux = 2.7183; // qux = 2.7183
//       console.log(qux); //LOGS 2.7183
//     };

//     console.log(qux); // LOGS .05772
//     console.log(xyzzy());//LOGS undefined
//   }

//   qux = 42; // qux = 42
//   console.log(qux); // LOGS 42 // LOGS 42
// }

// foo(true);
// foo(false);





// function Pet(name, image) {
//   this.name = name;
//   this.image = image;
// }
// let Image;
// var catImage;
// var pudding;

// Image = class {
//   constructor(file) {
//     this.file = file;
//   }
// }
// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };

// catImage = new Image("cat.png");
// pudding = new Pet("Pudding", catImage);

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
// //let Image ; 

// var catImage = new Image("cat.png");
// var pudding = new Pet("Pudding", catImage);
// "use strict";
//  function name() {
//   'use strict';
//   car2 = "house";
//   // The rest of the function. Everything from here to the end of
//   // the function runs in strict mode.
// }

// // Strict mode is disabled unless you defined it globally.
// car = "street";
// name();
