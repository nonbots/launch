/*
What does the following code log to the console? Try to answer without running the code. Can you explain why the code produces the output it does?
*/
// let RECTANGLE = {
//     area: function () {
//         return this.width * this.height;
//     },
//     perimeter: function () {
//         return 2 * (this.width + this.height);
//     },
// };

// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
//     this.area = RECTANGLE.area();
//     this.perimeter = RECTANGLE.perimeter();
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);
/*
The console logs `NaN` on both `line 21` and `line 22`. On `line 20`, the constructor `Rectangle` is invoked with the values of `2` and `3` passed in as an argument. The constructor returns a new instance of the `Rectangle` object with the value of `this.width` initialized to `2` and the value of `this.height` initialized to `3`. The value of `this.area` is initialized to the return value of `undefined` as well and `this.perimeter`. Since `RETANGLE.area()` and `RECTANGLE.perimeter()` invokes methods that uses values `this.witdh` and `this.height`, and since the current execution context is `RECTANGLE` and the properties of `this.width` and `this. height` is not defined. Thus, their values are `undefined`. When the methods are invoked, the expressions returns `NaN`, since arithmetic operations with `undefined` returns `NaN`. 
*/

/*
How would you fix the problem in the code from problem 1?
*/
// using constructor prototype
// let RECTANGLE = {
//     area: function () {
//         return this.width * this.height;
//     },
//     perimeter: function () {
//         return 2 * (this.width + this.height);
//     },
// };

// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
//     // this.area = RECTANGLE.area();
//     // this.perimeter = RECTANGLE.perimeter();
// }
// Rectangle.prototype.area = RECTANGLE.area;
// Rectangle.prototype.perimeter = RECTANGLE.perimeter;
// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area());
// console.log(rect1.perimeter());

//using call (emplicit execution context)
// let RECTANGLE = {
//     area: function () {
//         return this.width * this.height;
//     },
//     perimeter: function () {
//         return 2 * (this.width + this.height);
//     },
// };

// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
//     this.area = RECTANGLE.area.call(this);
//     this.perimeter = RECTANGLE.perimeter.call(this);
// }
// Rectangle.prototype.area = RECTANGLE.area;
// Rectangle.prototype.perimeter = RECTANGLE.perimeter;
// let rect1 = new Rectangle(2, 3);

// console.log(rect1.area);
// console.log(rect1.perimeter);

/*
Write a constructor function called Circle that takes a radius as an argument. You should be able to call an area method on any objects created by the constructor to get the circle's area. Test your implementation with the following code:
*/
// function Circle(radius) {
//     this.radius = radius;
// }
// Circle.prototype.area = function () {
//     return Math.PI * this.radius ** 2;
// };

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27
// console.log(a.hasOwnProperty("area")); // => false

/*
What will the following code log to the console and why?
*/
// function Ninja() {
//     this.swung = true;
// }

// let ninja = new Ninja();
// Ninja.prototype.swingSword = function () {
//     return this.swung;
// };

// console.log(ninja.swingSword());

/*
The console logs the value `true`. On `line 100`, an instance of the `Ninja` object is created with the property of `swung` set to `true`. On `line 101`, `Ninja`'s function prototype property adds a method of `swingSword` that returns the value of`Ninja`'s `swing property. Now, every instance that is created by `Ninja` delegates calls to the method `swingSword` to the prototype `Ninja`. On `line 105`, the instance `ninja` calls `swingSword` and returns the value the property of `swung` of `ninja` which is `true`.  
*/

/*
What will the following code output and why? Try to answer without running the code.
*/
// function Ninja() {
//     this.swung = true;
// }

// let ninja = new Ninja();

// Ninja.prototype = {
//     swingSword: function () {
//         return this.swung;
//     },
// };

// console.log(ninja.swingSword());
/*
The console logs a `TypeError`. On `line 120`, `Ninja.prototype` is assign a new object that contains the method `swingSword` instead of adding the `swingSword` method to the `prototype` property or mutating it. `Ninja` prototype remain the same as when was first invoked. Thus, JS can't find `swingSword` in the `Ninja` prototype property and logs an error.
*/

/*
Implement the method described in the comments below:
*/

function Ninja() {
    this.swung = false;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object
// Ninja.prototype.swing = function () {
//     this.swung = true;
//     return this;
// };

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();
// // ninjaA.swing();
// // ninjaB.swing();
// // console.log(ninjaA.swung);
// // console.log(ninjaB.swung);
// console.log(ninjaA.swing().swung); // logs `true`
// console.log(ninjaB.swing().swung); // logs `true`
/*
This pattern of "chainable" methods invocations and property accesses on an object requires that methods defined on the prototype always return the context object (in this case, ninjaA and ninjaB).
*/

/*
In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:
*/

// let ninjaA;

// {
//     const Ninja = function () {
//         this.swung = false;
//     };

//     ninjaA = new Ninja();
// }
// console.log(ninjaA);
// // create a `ninjaB` object here; don't change anything else
// // let ninjaB = new ninjaA.constructor();
// let ninjaB = new Ninja();
// console.log(ninjaB, "b");

// console.log(ninjaA.constructor === ninjaB.constructor); // => true
/*
Since a constructor is just a function, you can call it without the new operator. However, that can lead to unexpected results and errors, especially for inexperienced programmers. Write a constructor function that you can use with or without the new operator. The function should return the same result with either form. Use the code below to check your solution:
*/

function User(first, last) {
    (this.last = last), (this.first = first);
    if (!(this instanceof User)) {
        return new User(first, last);
    }
}

User.prototype.name = function () {
    return this.first + " " + this.last;
};

let name = "Jane Doe";
let user1 = new User("John", "Doe");
let user2 = User("John", "Doe");

console.log(name); // => Jane Doe
console.log(user1.name()); // => John Doe
console.log(user2.name()); // => John Doe
