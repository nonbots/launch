/*
 Name the Constructor 
 Update the following code so that, instead of logging the values, each statement logs the name of the constructor to which it belongs
*/

// console.log(new String("Hello").constructor.name);
// console.log([1,2,3].constructor.name);

// console.log("FIRST",Object.getPrototypeOf([1,2,3]).constructor.name);// uses the Object method to access the prototype object which is Object itself to access the constructor method 
// console.log({name: 'Srdjan'}.constructor.name); /// looks up the prototype chain at  Object to access the constructor method
// console.log({name: 'Srdjan'}.hasOwnProperty('constructor'));
// console.log(Object.hasOwnProperty('constructor'));
// console.log(Object.prototype.hasOwnProperty('constructor'));
// console.log(Object);//*****Object is a constructor function that creates instances ****
/*
/*
constuctor function / class
*** Because in JS function are objects 
function Player() {
  this.name  // this refers to the property that belongs to Player 
  }
}
the constructor function player has a prototype property that can be used to store common methods that all players share
*/
function player() {

}
//whenever a function is declared and since functions are objects in javascript the function inherits the properties of the Object.prototype
// console.log("PLAYER===>", player);
// console.log("PLAYER===>", player.prototype);
// console.log("PLAYER===>", Object.getPrototypeOf(player.prototype));
// console.log("PLAYER===>", player.prototype.hasOwnProperty(constructor));

// console.log(Object.prototype.constructor);// 


// let obj = {};
// console.log(Object.getPrototypeOf(obj));
// console.log("OBJ_PROTO", Object.prototype);
// console.log("HERE", Object.getPrototypeOf(Object));

// console.log("HERE", Object.getPrototypeOf(Object));
// what happens when I create a function 

///MDN
//// contructor method is for creting and initializing an object instance of that class 

//use typeof an array method isArray to get type 
//must wrap the sting into an object type 
//get the constructor by accessing the prototype of the object and getting the property of contructor 

/*
PROTOTYPAL INHERITANCE 
- the object that you inherit properties and methods from is called the prototype.
- the inheriting object doesn't receive any properteies or methods of its own. It delegates property and method access to its prototype.
** JS objects us an internal [[Prototype]] property to keep track of their prototype. When inheritance takes place the new object's [[Prototype]] property gets assigned to the prototype object.
** [[Protottype]] is an internal property and can not be access directly. However you can access and replace its value with Object methods.
  - Object.getPrototypeOf
  - Object.setPrototypeOf
** objects hold reference to their prototype objects through their internal [[Prototype]] property

OBJ => address => prototype
*/
//  let a = {}
// console.log(Object.getPrototypeOf(a))
/*
The DEFAULT PROTOTYPE OBJECT is the prototype for all objects created by using the object literal syntax.
** The DEFAULT PROTOTYPE OBJECT is the FUNCTION PROTOTYPE of the OBJECT CONSTRUCTOR, OBJECT.PROTOTYPE
** OBJECT.PROTOTYPE provides the DEFAULT PROTOTYPE
*/

/*
JS has string primitives and string objects 
  - JS in the background warps the string primitive in a string object so that it has access to the methods from the string constructor
*/
// console.log(Object.prototype.constructor.name);

/*
- Create an emtpy class named Cat
- create an instance of Cat and assign it to a variable named kitty
- add a constructor method that logs to the console "I'm a cat!" when new Cat object id initialized
*/
class Cat {
  constructor(name) {
    this.name = name;
  }
  greeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }
  static genericGreeting() {
    console.log("Hello! I'm a cat!");
  }
  rename(newName) {
    this.name = newName;
  }
}

let kitty = new Cat("Sophie");
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe
Cat.genericGreeting();
// kitty.greeting();
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(kitty)));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(kitty)));
// console.log(Object.getPrototypeOf(Object));
// let a= {};
// console.log("FIRST",Object.getPrototypeOf(a));
// console.log("FIRST",Object.getPrototypeOf(Object.getPrototypeOf(a)));

// console.log(Object.getPrototypeOf(Object.prototype));

// console.log(Object.getPrototypeOf(kitty));

class Person{
  constructor(name = "John Doe"){
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe