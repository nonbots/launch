
//CLASS
// class Thing1 {
//   constructor() {

//   }
//   method1() {

//   }
// }

// class Thing2 extends Thing1 {
//   constructor() {
//     super();
//     //other state
//   }
//   method1() {

//   }
// }

//CONSTRUCTOR/PROTOTYPE

// function Person(name){
//   this.name = name;
// }
// Person.prototype.walks = function(){
//   console.log("is walking")
// }

// function Student(name) {
//   Person.call(this, name);
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;


// let student = new Student("Nhan");
// console.log(student.walks());

//OLOO

// PersonPrototype = {
//   init(name){
//     this.name = name;
//     return this;
//   },
//   walks(){
//     console.log("is walking");
//   }
// }

// const Person = Object.create(PersonPrototype);
// const Student = Object.create(Person);
// let student = Object.create(Student).init("Nhan");
// console.log(student.walks());
// OBJECTS FACTORIES

// function makeRobot(intellLevel, modelNum) {
//   return{
//     intellLevel,
//     modelNum,
//     solveProblems(){
//       console.log("solving problems");
//     }
//   }
// }

// function makeHumanoid(intellLevel, modelNum) {
//   const Robot = makeRobot(intellLevel, modelNum);
//   const Humanoid = {
//     walk(){
//       console.log("is walking")
//     },
//     talk(){
//       console.log("is talking");
//     }
//   }
//   return Object.assign(Humanoid, Robot);
// }

// let humanoid  = makeHumanoid(5, 3243);
// humanoid.talk();
// humanoid.walk();

// const walkTalkMixin = {
//   walk(){
//     console.log("is walking")
//   },
//   talk(){
//     console.log("is talking");
//   }
// }
// function makeRobot(intellLevel, modelNum) {
//   return{
//     intellLevel,
//     modelNum,
//     solveProblems(){
//       console.log("solving problems");
//     }
//   }
// }

// function makeHumanoid(intellLevel, modelNum) {
//   const Robot = makeRobot(intellLevel, modelNum);
//   const Humanoid = {}
//   return Object.assign(Humanoid, Robot, walkTalkMixin);
// }

// function makeHuman(name, age) {
//   const Human = {};
//   return Object.assign(Human, walkTalkMixin);
// }
// let humanoid  = makeHumanoid(5, 3243);
// humanoid.talk();
// humanoid.walk();

// let human = makeHuman("Mary", 34);
// human.talk();
// human.walk();

// let greeter = {
//   a: "hello",
//   b: "world",
//   greet() {
//     function sayHello() {
//       console.log(`${this.a} ${this.b}`);
//     }

//     sayHello.call(this);
//   },
// };

// greeter.greet(); 


// let greeter = {
//   a: "hello",
//   b: "world",
//   greet() {
//     let self = this;
//     function sayHello() {
//       console.log(`${self.a} ${self.b}`);
//     }

//     sayHello();
//   },
// };

// greeter.greet(); 

// let str1 = new String("Hello, world");
// let str2 = new String("Hello, world");
// console.log(str1 === str2);

/*
player
  name, health = 100, strength = 2-12, intelligence 1-12 
  health strength and intelligence is intialized ROLLDICE
  hurtMethod(decrease to Health)  : change health
  healMethod(increase to health) : change health

  mixin: wearArmor, removeArmor, attachArmmor (warriors and paladins)

  mixin: castSpells(spell) (all except warrior)

subtype of Player
  - warrior
    - strength + 2 
    - range 4 - 14 
  - paladin
  - magician
    - bard
      create potions
*/
// class Game {
// constructor() {
//   //init characters
// }
//  rollDice(){}
// }

// const warriorPaladinMixIns = {
//   wearArmor(){},
//   removeArmor(){},
//   attachArmmor(){} 
// }

// const castSpellsMixins = {
//   castSpell(spell) {}
// }
// class Player {
//   constructor(name) {
//     this.name = name;
//     this.health = this.rollDice();
//     this.strength = this.rollDice();
//     this.intelligence = this.rollDice();
//   }
//   rollDice(){}
//   hurt(decreaseBy){}
//   heal(increaseBy){}
// }

// class Warrior extends Player {
//   constructor(name) {
//     super(name);
//     this.strength += 2;
//   }
// }
// Object.assign(Warrior.prototype, warriorPaladinMixIns);

// class Paladin extends Player {
//   constructor(name) {
//     super(name);
//   }
// }
// Object.assign(Paladin.prototype, warriorPaladinMixIns, castSpellsMixins);

// class Magician extends Player {
//   constructor(name) {
//     super(name);
//     this.intelligence += 2;
//   }
// }
// Object.assign(Magician.prototype, castSpellsMixins);

// class Bard extends Magician {
//   constructor(name) {
//     super(name);
//   }
//   createPotions(){}
// }

// let warrior = new Warrior("warrior");
// let paladin = new Paladin("paladin");
// let magician = new Magician("magician");
// let bard = new Bard("bard");
// console.log(warrior);
// console.log(paladin);
// console.log(magician);
// console.log(bard);
// warrior.wearArmor();
// bard.hurt();
// bard.createPotions();



// function Book(title, author) {
//   this.title = title;
//   this.author = author;
//   Book.books.push(this);
// }

// Book.prototype.read = function () {
//   console.log(`Reading ${this.title}`);
// };

// Book.books = [];
// Book.allTitles = function() {
//   return Book.books.map(book => book.title);
// }
// let book1 = new Book("newTitle1", "Nhan");
// let book2 = new Book("newTitle2", "Mary");
// let book3 = new Book("newTitle3", "Bob");
// console.log(Book.allTitles());

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//     Book.books.push(this);
//   }

//   read() {
//     console.log(`Reading ${this.title}`);
//   };

//   static books = [];
//   static allTitles() {
//     return Book.books.map(book => book.title);
//   }
// }

// let book1 = new Book("newTitle1", "Nhan");
// let book2 = new Book("newTitle2", "Mary");
// let book3 = new Book("newTitle3", "Bob");
// console.log(Book.allTitles());

// console.log('123' === '123');
// console.log(new String('123') === new String('123'));
// let strPrimitve = "123"
// strPrimitve = "124"

// let strObj = new String("123");
// console.log(strObj.length = 4);
// console.log(strObj.length);
// console.log(strObj.length);

// function Book(title, author) {
//   this.title = title;
//   this.author = author;
//   Book.titles.push(this.title);
// }

// Book.prototype.read = function () {
//   console.log(`Reading ${this.title}`);
// };

// Book.titles = [];
// Book.allTitles = function() {
//   return Book.titles;
// }
// let book1 = new Book("newTitle1", "Nhan");
// let book2 = new Book("newTitle2", "Mary");
// let book3 = new Book("newTitle3", "Bob");
// console.log(Book.allTitles());

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//     Book.titles.push(this.title);
//   }

//   read() {
//     console.log(`Reading ${this.title}`);
//   };

//   static titles = [];
//   static allTitles() {
//     return Book.titles;
//   }
// }

// let book1 = new Book("newTitle1", "Nhan");
// let book2 = new Book("newTitle2", "Mary");
// let book3 = new Book("newTitle3", "Bob");
// console.log(Book.allTitles());


// console.log("323".concat('dfsd'));
// function Animal(name) {
//   // some statements
// }

// Animal.prototype = {
//   speak: function () {
//     // some statements
//   },
// };

// function Dog() {}
// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.barks = function () {
//   (console.log("is barking"));
// };
// let dog = new Dog("Larry");
// dog.barks(); // logs is barking

// const warriorPaladinMixIns = {
//   removeArmor(){},
//   attachArmor(){} 
// }

// const castSpellsMixins = {
//   castSpell(spell) {}
// }
// class Character {
//   constructor(name) {
//     this.name = name;
//     this.health = 100;
//     this.strength = this.rollDice();
//     this.intelligence = this.rollDice();
//   }
//   rollDice(){
//     return Math.floor(Math.random() * (12 - 2) + 2);
//   }
//   hurt(decreaseBy){
//     this.health -= decreaseBy
//   }
//   heal(increaseBy){
//     this.health += increaseBy
//   }
// }

// class Warrior extends Character {
//   constructor(name) {
//     super(name);
//     this.strength += 2;
//   }
// }
// Object.assign(Warrior.prototype, warriorPaladinMixIns);

// class Paladin extends Character {
//   constructor(name) {
//     super(name);
//   }
// }
// Object.assign(Paladin.prototype, warriorPaladinMixIns, castSpellsMixins);

// class Magician extends Character {
//   constructor(name) {
//     super(name);
//     this.intelligence += 2;
//   }
// }
// Object.assign(Magician.prototype, castSpellsMixins);

// class Bard extends Magician {
//   constructor(name) {
//     super(name);
//   }
//   createPotions(){}
// }

// let warrior = new Warrior("warrior");
// let paladin = new Paladin("paladin");
// let magician = new Magician("magician");
// let bard = new Bard("bard");
// console.log(warrior);
// console.log(paladin);
// console.log(magician);
// console.log(bard);
// warrior.attachArmor();
// warrior.removeArmor();
// paladin.attachArmor();
// paladin.removeArmor();
// paladin.castSpell("zip");
// bard.createPotions();
// bard.hurt(5);
// console.log(bard.health); //95
// bard.heal(1);
// console.log(bard.health); //96
// warrior.hurt(5);
// console.log(warrior.health); //95
// warrior.heal(1);
// console.log(warrior.health); //96
// magician.hurt(5);
// console.log(magician.health); //95
// magician.heal(1);
// console.log(magician.health); //96
// paladin.hurt(5);
// console.log(paladin.health); //95
// paladin.heal(1);
// console.log(paladin.health); //96
// bard.castSpell("zap");
// bard.castSpell("zap");

// const armorMixIn = {
//   removeArmor(){},
//   attachArmor(){} 
// }

// const castSpellMixin = {
//   castSpell(spell) {}
// }
// class Character {
//   constructor(name) {
//     this.name = name;
//     this.health = 100;
//     this.strength = this.rollDice();
//     this.intelligence = this.rollDice();
//   }
//   rollDice(){
//     return Math.floor(Math.random() * (12 - 2) + 2);
//   }
//   hurt(decreaseBy){
//     this.health -= decreaseBy;
//   }
//   heal(increaseBy){
//     this.health += increaseBy;
//   }
// }

// class Warrior extends Character {
//   constructor(name) {
//     super(name);
//     this.strength += 2;
//   }
// }
// Object.assign(Warrior.prototype, armorMixIn);

// class Paladin extends Character {
//   constructor(name) {
//     super(name);
//   }
// }
// Object.assign(Paladin.prototype, armorMixIn, castSpellMixin);

// class Magician extends Character {
//   constructor(name) {
//     super(name);
//     this.intelligence += 2;
//   }
// }
// Object.assign(Magician.prototype, castSpellMixin);

// class Bard extends Magician {
//   constructor(name) {
//     super(name);
//   }
//   createPotions(){}
// }

// let warrior = new Warrior("warrior");
// let paladin = new Paladin("paladin");
// let magician = new Magician("magician");
// let bard = new Bard("bard");
// console.log(warrior);
// console.log(paladin);
// console.log(magician);
// console.log(bard);
// warrior.attachArmor();
// warrior.removeArmor();
// paladin.attachArmor();
// paladin.removeArmor();
// bard.hurt(5);
// console.log(bard.health); //95
// bard.heal(1);
// console.log(bard.health); //96
// warrior.hurt(5);
// console.log(warrior.health); //95
// warrior.heal(1);
// console.log(warrior.health); //96
// magician.hurt(5);
// console.log(magician.health); //95
// magician.heal(1);
// console.log(magician.health); //96
// paladin.hurt(5);
// console.log(paladin.health); //95
// paladin.heal(1);
// console.log(paladin.health); //96
// bard.castSpell("zap");
// paladin.castSpell("zip");
// bard.createPotions();
// warrior.castSpell("zappy"); // method not found 
// magician.attachArmor(); // method not found
// bard.removeArmor(); // method not found 
// magician.createPotions(); // method not found
// warrior.createPotions(); //method not found
// paladin.createPotions(); //method not found

/**
 1. OOP - a programming paradigm that models how objects in the real world interact. It does this by organizing a program using objects. OOP includes concepts such as: abstraction: taking code and abstracting it into higher level concept like objects in the real world., encapsulation, inheritance, and polymorphism


 how objects in the real world interact by organizing a program using objects. It includes concepts like abstraction, encapsultion, inheritance, and polymorphism

encapsulation refers to when related state and behavior are combined into an object. This is how objects in real life are modelled in OOP.

inheritance is a concept that refers to how objects inherit properties from another a subtype and a supertype. In prototypal inheritance which is innate to JS objects inherit properties from other objects. 

instance methods are methods that instances created by the constructor inherit from and thus have access to through prototypal delegation on the prototype chain. This methods are on the constuctor's prototype object. 

static methods are methods that are referred to on the constructor. This means that they are accessible from the constructor object and an instance does not need to be created to use the method. 

The constructor object is not part of the prototype chain of the instances created by the constructor. It is not a method the can be accessed through protoypal delegation.

object inherit from another object 
sub type/class inherit from a super type/class

sub class inherits from only one super class or type 
sub class or type inherits from more than one super class or type

JS tries to mimic multiple inheritance by using mix ins which are methods that belong that would belong to another class are referred to in an object. The references to those methods in that object are copied to the class or type's prototype object. 


 */

// const teacherMixin = { // Both undergraduateTA and GraduateTA are also teachers but in JS we can not implement multiple inheritance thus we will use mix-ins to add behavior of a teacher to those sub classes. 
//   teach() {
//     console.log("is teaching");
//   },
//   grade() {
//     console.log("is grading");
//   }
// }

// class Student { // I am creating a super class called student
//   study() { // I am creating a instance method study and move
//     console.log("is studying");
//   }
//   move() {
//     console.log("is walking");
//   }
// }

// class UndergraduateTA extends Student {} // I am creating a sub class UndergraduateTA that inherits from Student
// Object.assign(UndergraduateTA.prototype, teacherMixin); //The behavior of teacher is added to the undergraduateTA prototype object where all instances of undergraduateTA will have access to and share. 

// class GraduateTA extends Student { // I am creating a sub class GraduateTA that inherits from Student
//   study() { // 
//     console.log("studying about a specialization");
//   }
// }

// Object.assign(GraduateTA.prototype, teacherMixin); // The behavior of teacher is added to the GraduateTA prototype object where all instances of GraduateTA will have access to and share. 

// class Highschooler extends Student {} // I am creating a sub class Highschooler that inherits from Student

// class Fish {
//   move() {
//     console.log("is swimming");
//   }
// }

// let ta = new UndergraduateTA(); // ta refers to an instance of undergraduateTA 
// // Polymorphism is when different types respond to the same method signature.

// // When we don't care what type of object is calling the method we're using polymorphism. 

// ta.study(); // ta delegates to the UndergraduteTA prototype object the study method in the prototype chain. This is because ta inherits properties from UndergraduteTA prototype object. Since study is closer to the calling object in the prototype chain, it overrides the study method higher up the chain. Thus the method reproduces a different response. This is call polymorphism through inheritance with overriding. 

// ta.teach(); // ta delegates to the UndergraduateTA prototype object the study method in the prototype chain. This is becaus ta inherits properties from UndergraduteTA prototype object.

// let fish = new Fish();
// // Ducktyping refers to when unrelated types respond the same method signature. 
// [ta, fish].forEach(entity => entity.move());

// function makeStudent(first, last) {
//   return {
//     first,
//     last,
//     fullName: this.first + " " + this.last,
//     getName() {
//       console.log(this.fullName, this.screwDriver);
//     }
//   }
// }
// // let first;
// // let last;
// let student = makeStudent("Nhan", "Bui");

// student.getName()

// function repeatThreeTimes(func) {
//   func.call(john); // can't use func.call(john); john is out of scope
//   func.call(john);
//   func.call(john);
// }

// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };

//   repeatThreeTimes(john.greetings); // Strips context
// }

// foo();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined

// function Drink(type, size) {
//   this.type = type;
//   this.size = size;
//   this.fillAmount = 0;
// }

// Drink.prototype.fill = function(amount) {
//   this.fillAmount = amount;
// }

// const coffee = new Drink('coffee', '16 oz.');

// function Function(functionCode) {

// }

// Function.prototype = {
//   constructor: Function,
//   // call
//   // bind
//   // apply
// }

// function Object() {

// }

// Object.prototype = {

// }

// // Function => Function.prototype

// 'use strict';

// // let func = () => console.log(this);
// let func = function() {
//   console.log(this);
// }
// const obj = {
//   name: "Nhan",
//   obj: this,
//   newFunc: func, // since func is defined in the node module wrapper, arrow function takes on the context of the node module wrapper
//   anotherFunc() {
//     // console.log(this);
//      this.newFunc();// still be the node module wrapper since it is where the function is defined an takes on the context of the node module wrapper 
//   },
//   whatIsThisInObj() {
//     console.log(this.obj);
//   }
// }
//        // arrow function   non arrow functions
// func() // wrapper         undefined
// obj.newFunc(); // wrapper   obj
// obj.anotherFunc();  // wrapper  obj
// obj.whatIsThisInObj();// the wrapper  the wrapper



// /*
// Core Truths

// Arrow functions in strict mode on coderpad

// declared and initalized in the global scope => takes on the execution context in 
// */


// // let func = () => console.log(this);

// // function func() {
// //   console.log(this);
// // }

// // // const func = function() {
// // //   console.log(this);
// // // }

// // const obj = {
// //   name: "Nhan",
// //   objExContext: this,
// //   newFunc: func,
// //   testFunc: function() {
// //     console.log(this);
// //   },
// //   anotherFunc() {  
// //      this.newFunc();
// //   },
// //   whatIsThisInObj() {
// //     console.log(this)
// //     console.log(this.obj);
// //   }
// // }
// // // func();
// // // obj.testFunc();
// // // obj.newFunc(); 
// // // obj.anotherFunc();
// // obj.whatIsThisInObj();

// // var first = "Nhan"; // var assigns the first variable to the global object 
// // var last = "Bui";
// // let first = "Nhan";
// // let last = "Bui";

// // function foo() {
// //   // console.log(this);
// // }

// // foo();

// // const obj = {
// //   // thisMainEx: this, //global object
// //   full: this.first + " " + this.last //undefined undefined 
// // }
// // console.log(obj.thisMainEx);
// // console.log(obj.full);

// function func() {
//   console.log(this);
// }

// function func5() {
//   return this;
// }

// const arrowFunc1 = () => console.log(this);

// function func6() {
//    return () => console.log(this);
// }

// const obj = {
//   meth() {
//     console.log(this);
//   },
//   arrowFunc2: () =>  {
//     console.log(this);
//   },
//   func2() {
//     (() => {
//       console.log(this);
//     })();
//   },
//   testFunc() {
//     // arrowFunc1();
//     // this.arrowFunc2();
//     this.func2();
//   }
// }
// // console.log(this === globalThis);
// // let context = func5();
// // console.log(context === undefined);
// // func(); //undefined
// // obj.meth(); // obj
// // arrowFunc1(); // global object. the arrow function takes on the execution context from the surrounding context which in this case is the it the global execution context. The the main global function is invoked, JS sets an implicit an explict execution context to the global object . The arrow function is defined within the execution of the global function and thus when invoked takes on the execution context of hte the global function's execution context which is the the global object. This means that an arrow function defined inside another function has the same context as the outer function's execution context. 
// // obj.arrowFunc2(); // global object 
// // obj.func2();// obj

// // let arrowFunc3 = func6();
// // arrowFunc3(); // undefined
// // arrowFunc3.call(obj); // you cannot explicit set an arrow function
// // let arrowFunc4 = func6.call(obj); //logs out obj
// // arrowFunc4();

// function Person() {}

// Person.prototype.walks = function() {
//   console.log("is walking");
// }
// // Person.prototype.constructor = Object;

// function Student() {}

// Student.prototype = Object.create(Person.prototype);
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// let student = new Student();
// console.log(student);
// student.walks();
// //student => student.prototype => Person.prototype => default object =>null
// console.log(student instanceof Student);
// console.log(student instanceof Person);
// console.log(student instanceof Object);
// Student.prototype = {}; // changes the referenc to fht prototype property and the new reference point to an object which points to the default object. 
// student.walks();
// let student2 = new Student();
// // student2.walks();
// // student2.walk()// method not found
// Person.prototype = {};
// // student.prototype =>(here refers to a different chain) object.prototype

// console.log(student instanceof Student);
// console.log(student instanceof Person);
// console.log(student instanceof Object);

// let person = new Person();
// // person.walk(); // method not found
// console.log(person instanceof Student, "1");
// //person => person.prototype => object.protoype => null
// //student => person.prototype => object.prototype => null

// // instance of checks if the constructor  prototype property is pointing to an object  that is part of the prototypal chain
// //
// console.log(person instanceof Person, "2");

// console.log(Object.getPrototypeOf(person) === Person.prototype);
// console.log(student.constructor === Student);
// console.log(student.constructor === Person);

// console.log(Person.prototype.isPrototypeOf(person))
// let obj = { a: 'foo', b: 'bar', c: {z: "zebra", y: "yellow"} };


// What is polymorphism. It is when different types respond in different ways to the same method name. That is data of different types respond to a common interface. 

// through inheritance it is when an instance is aboe to delegate the method to a prototype object in the prototype chain. The object is able to call the same method name to create a response.The object can also have a different respond through overriding when JS delegates the same method name to the closer protoype object in the prototype chain than the prototype object higher up in the chain. 

// class Animal {
//   makeSound() {console.log("...")}
// }

// class JellyFish extends Animal{}
// class Dog extends Animal{
//   makeSound() {
//     console.log("woof woof");
//   }
// }
// [new JellyFish(), new Dog()].forEach(animal => animal.makeSound());
// // through ducktyping 
// // when unrelated types respond to the same. In ducktyping we care if an object as a particular behavior not the class or type of an object. If quack like a duck than we can treat it like a duck. 

// class Car {
//   makeSound() {
//     console.log("Vrrooom");
//   }
// }

// class Cat {
//   makeSound() {
//     console.log("meow")
//   }
// }

// [new Cat(), new Car()].forEach(entity => entity.makeSound());


/*
to when different types respond differently to the same method name. That is data of different types respond to a conmand interface. 
- through inheritance 
*/

class Animal {
  makesSound() {
    console.log("...")
  }
}

class JellyFish extends Animal{} // an instance of jellyfish will be able to delegate make sound to the prototype object in the prototype chain. That is jellyfish is able call the same method name makeSound to create a responds. We can also create a different response by overriding the method 

class Dog extends Animal {
  makesSound() {
    console.log("Woof Woof")
  }
}

// Here the dog instance will delegate the method to the Dog prototype object in the chain since it is closer to the instance in the chain. This is overriding and also polymorphism through inheritance


[new Dog(), new JellyFish()].forEach(animal => animal.makesSound());

// Then there is ducktyping where unrelate types can reponse to the same method name and parameters

class Car {
  makesSound() {
    console.log("Vrrooom");
  }
} 

class Cat {
  makesSound() {
    console.log("Meow");
  }
}

[new Car(), new Cat()].forEach(entity => makesSound())

///here we are concern about the behavior not the type of an object. Behavior can be used to categorized objects. Thus the quote, if a object quacks like a duck, we can treat it as a duck.