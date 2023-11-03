class Test {}
class Test2 {}

// exports =>  {}
// module.exports => {} if not reassigned to another object 
// both point to the main/global function's execution context
// console.log(exports === this); // true
// console.log(module.exports === this) // true

// module.exports => another object with variables {variables...} when reassigned to another object. 
// this will only export the variable inside the object.
module.exports = {Test, Test2};
module.exports.a = "this is a";
// console.log(module.exports === this) //false

// exports still points to main/global function's execution context
// console.log(exports === this); // true

// Thus you can add a methods to the main/global function's execution context like so. Here we are mutating the object. This used if we want to add properties to existing export.
// exports.newFunc = () => console.log("newFunc");
// this.newFunc2 = () => console.log("newFunc2");
// this.newFunc3 = () => console.log("newFunc3");
// exports.a = "this is a";
// the method are now in `this` object 
// console.log(this) //{newfunc..., newfunc2}

// you can call one of them like this
// this.newFunc2(); // "newFunc"


/****
 If the file does not use module.export and if the file is exported to another file via require js will assign the variable a reference to exports which references that module's main function execution context 
 
 HOWEVER, if you use module.export the variable in the other file refer to an entirely new object that only has the variables explicitly added to it and if not an object the one variable assign to it. Thus it will not have any existing variables in the this object.  
 */

 /*
  In node, `var` variable declarations will add the identifier to the global object. 
  In node within a file in non-strict mode, declaring a variable without a let, const, or var keyword will add the identifier to the global object. However, if you use let, const, or var, JS creates a function scoped variable not a global varaible since the program is wrapped in a wrapper function, a feature of commonJS modules. 



  `var`, and function delcations are functions
  function body are function
  var variables and function declarations are function declared scope
  function declared variables are visibile within the function it is defined or any other functions or blocks that are inside the defined function scope.

  if,else, while, do...while, for, which and try... catch are blocks 
  let, const, class and class expressions variables are block declared scope
  block declared variables are visiable within the block it is defined or any other blocks that are inside the defined block scope. You should try to avoid nesting function declarations inside a block since function declarations are not block scoped and will result in unexpected behavior.

  
 */
// "use strict";
//   let obj = {
//     a: 5,
//     go() {
//       this.a = 42;
//     },
//   };
  
//   let doIt = obj.go;
//   doIt(); // this is the global object  // strict: this is undefined. get propery a of undefined will result in a type error
  // console.log(obj.a); // 5
  // console.log(global.a); //42
// "use strict";
//   function func () {
//     console.log(this) // global object
//   }

//   func();

/* strict mode 
1a. can not declare variables with let, const or var (prevent creating and assigning or reassign properties on the global object)
1b. can not create a property with using this (the instance) (prevent mutating the global object)
2. local function execution context is set to undefined  (prevent mutating the global object )
3a. cannot have leading 0
3b. cannot use octo number  (begins with 0 and does not contain digits 8 of 9)
*/ 

// function Child(age) {
//   this.age = age;
// };

// Child.prototype.setAge = function(newAge) {
//   age = newAge; // setting to the global object 
// }

// let leigh = new Child(5);
// leigh.setAge(6);
// console.log(leigh.age); // 5; expected 6
// console.log(global.age);
// "use strict";
// const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
// const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
//          "10", "Jack", "Queen", "King", "Ace"];

// function createDeck() {
//   const allCards = () => {
//     return SUITS.reduce((deck, suit) => {
//       RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
//       return deck;
//     }, []);
//   };

//   const deck = allCards();
//   shuffle(deck);

//   return deck;
// }

// function shuffle(deck) {
//   for (let counter = 0; counter < 400; counter += 1) {
//     let randomIndex1 = randomCardIndex();
//     let randomIndex2 = randomCardIndex();
//     let tempCard = deck[randomIndex1];
//     deck[randomIndex1] = deck[randomIndex2];
//     deck[randomIndex2] = tempCard;
//   }

//   function randomCardIndex() {
//     return Math.floor(Math.random() * deck.length);
//   }
// }

// console.log(createDeck());

// SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
// RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
//          "10", "Jack", "Queen", "King", "Ace"];

// function createDeck() {
//   allCards = () => {
//     return this.SUITS.reduce((deck, suit) => {
//       this.RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
//       return deck;
//     }, []);
//   };

//   deck = allCards();
//   shuffle(deck);

//   return deck;
// }

// function shuffle(deck) {
//   for (counter = 0; counter < 0400; counter += 1) {
//     randomIndex1 = randomCardIndex();
//     randomIndex2 = randomCardIndex();
//     tempCard = deck[randomIndex1];
//     deck[randomIndex1] = deck[randomIndex2];
//     deck[randomIndex2] = tempCard;
//   }

//   function randomCardIndex() {
//     return Math.floor(Math.random() * this.deck.length);
//   }
// }

// console.log(createDeck());