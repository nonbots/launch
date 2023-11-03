/*
1. Programming Paradigm
  a. Object-Oriented 
    - a style that uses objects to organize a program
  b. Prodedural 
    - a style that uses a series of steps that is performed one after the other
  c. Functional
    - a style that passes function to other methods or functions (high order functions)
2. Advantages 
  a. higher-level abstraction helps break down and solve problems 
  b. reduce dependencies and makes for easier maintenance
  c. flexible and understandable code
3. Disadvantages
  a. may lead to inefficient code 
  b. more memory and more computing power
4. Encapsulation
  a. combining state and behavior into an object.
  b. JavaScript does not support access restriction. However, # has been implement as a private data type
  c. In other OOP languages, the use of "private" keyword is used to restrict other objects from directly accesssing the object's state from other object. The use of an interface such as getter and setter methods are used to access and change the state.

5. Objects
  a. object literals consist of a pair of opening and closing curly braces.
  b. methods are added by adding a function as a property 
  c.this keyword is used to access properties and methods of an object.
  d. properties refer to both methods and properties of an object.

6. Factory Objects 
  a. the creation of objects through the use of a factory function pattern. 
  b. The function returns an object with a particular set of methods and properties.
  Object.assign be used to return a new object with all the properties and methods of the passed in referenced objects

7. Advantages
  a. reduce code duplication 
  b. avoid the tedium and errors that result from copying and pasting to create multiple objects of the same type.

8. Classical approach to planning object-oriented application
  a. write a textual description of the problem 
  b. extract significant nouns and verbs from the description
  c. organize and associate the verbs and nouns
*/
// 'use strict'
// console.log("caa" < "can")// true;


// console.log(['arc', 'bat', 'cape', 'ants', 'cap' ].sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// })); // => [ 1, 2, 4, 9, 11, 21, 107 ]
// console.log('1' > '2');
// console.log(Number("1"));
// console.log(Number('s'));
// console.log("Blue" - "Humpback");
// console.log(["1", "3", "2"].sort((a, b) => a - b));
// console.log(["Blue", "Humpback", "Beluga"].sort((a, b) => a - b));
// let title ="Nhan";
// let author = "Bui";
// let book = {
//   title: "Snow Crash",
//   author: "Neal Stephenson",
//   getDescription() {
//     return `${this.title} by ${this.author}`;
//   },
// };
// console.log(book.getDescription());
// 'use strict';
let a = {
  foo: 1,
  bar: 2,
};
// console.log(Object.getPrototypeOf(a) === Object.prototype);
// console.log("GLOBAL", global);
// console.log(global.constructor.name);
// console.log("OBJECT", Object);
// console.log("OBJECT.PROTOTYPE", Object.prototype);
// let b = Object.create(a);
// b.foo; // => 1
// function func() {
//   console.log(this);
// }

// func();

// [1, 2, 3].forEach(function() {
//   console.log(this)
// }) // ==> global

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  console.log("This is `this`", this);
  this.bark = function() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  };
}

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
/*
JS takes the following steps when you invoke a function with new:
1. It creates a new object
2. It set the prototype of the new object to the object that is referenced by the constructors's prototype property
  //obj.[[Prototype]] = constructor.prototype => {}
3. It sets the value of `this` for use inside the function to point to the new object 
4. It invokes the function. Since this refers to the new object, we use it within the function to set the object's properties and methods.
5. Once the function finishes running, new returns the new object even though we don't explicitly return anything
*/
// console.log(Object.prototype.constructor);
// console.log(Object.constructor);
// console.log(Object.__proto__);
// console.log(Function.prototype);
// console.log(Object.__proto__  === Function.prototype);
// console.log(Object.__proto__  === Function.__proto__);
// console.log(Function.prototype.__proto__ === Object.prototype);

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func.call(turk);
//   console.log(returnVal);
// }
// // logReturnVal(() => turk.getDescription());
// console.log(Array.__proto__.constructor);
// console.log(Array.constructor);
// console.log(Array.__proto__.hasOwnProperty('constructor'));
// console.log(Array.__proto__.hasOwnProperty('hasOwnProperty'));
this.num = 5;
console.log(this.num);
console.log(this);
