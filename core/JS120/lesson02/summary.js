/*
1. Objects
  a.  a collection of properties wher each property has a key (string) and value 
  b. dot notation is a member access notation. requires valid variable names.
  c. bracket notation is a computated member access notation. Computed on the fly as expression between the brackets gets evaluated as a string and used to reference the property.
  b. accessing a property that does not exist or a property set to undefined returns undefined
    - use in operator to check a property exist 
    - use hasOwnProperty to check if the property is owned by the object and not inherited from another.
    - use Object.keys to get the array of enumerable properties
    - use Object.getOwnPropertyNames returns the array of all properties.

2. Object Prototypes
  a. object factories 
    - returns objects that represent data of a specific type
    - reuses code
  b. prototype 
    - the object that another object inherit properties and methods from.
  c. Object.create 
    - creates a new object that inherits properties from an existing object (the prototype object). The new object has access to all the properties and methods that the prototype object has. 
    let a = {
      foo: 1,
      bar: 2,
    };

    let b = Object.create(a);
    b.foo; // => 1

    The new object doesn't recieve properties or methods of its own. It delegates property and method access to its prototype.
    > let a = { foo: 1, bar: 2 }
    undefined

    > let b = Object.create(a)
    undefined

    > b.foo
    1

    > b
    {}
  d. hasOwnProperty
    - takes the name of a property as a string and returns true if the object has a property by the name if not false.
  e. [[Prototype]]
    - object internal property that gets assigned to the prototype object. It can not be access directly in code

  f. Object.getPrototypeOf()
    - takes an object as an argument and returns its prototype object
  g. Object.setPrototypeOf()
    - sets the protoype object of an object
  h. default prototype
    - the function prototype of the Object constructor, Object.prototype. 
  i. iteration 
    - for/in loop iterates through the objects and the objects in its prototype chain properties. Using has own will only iterate through properties that the object own.
  j. Object.keys method will only return the keys of its 'own property
  k. Object.prototype.propertyIsEnumerable
    - checks if a property is enumerable.
    - most properties and method of the built in types are not enumerable.

let arr = [1, 2, 3];
console.log(arr.propertyIsEnumerable("length")); // false
console.log(arr.propertyIsEnumerable("2")); // true
console.log(arr.propertyIsEnumerable("forEach")); // false
console.log(Array.prototype.propertyIsEnumerable("forEach")); // false

function Foo() {
    this.bar = "qux";
    console.log(this.bar);
} // id this not a function, you can create a new instance of an function?
console.log("test", Foo());
console.log("test2", Foo.prototype);
Foo.prototype.baz = function () {};
console.log("test3", Foo.prototype);
console.log("test4", Foo.prototype.baz);
let foo = new Foo();
console.log("foo", foo);
console.log(foo.propertyIsEnumerable("bar")); // true
console.log(Object.getPrototypeOf(foo).propertyIsEnumerable("baz")); // true
console.log(Object.getPrototypeOf(foo).propertyIsEnumerable("constructor")); // true

Prototype Chain
let a = {
  foo: 1,
};

let b = {
  bar: 2,
};

let c = {
  baz: 3,
};

Object.setPrototypeOf(c, b);
Object.setPrototypeOf(b, a);

console.log(c.bar); // => 2
console.log(c.foo); // => 1

`c` prototype property is assign to `b`. `c` inherits the properties of `b`. `b` prototype property is assign to `a`. `b` inherits the properties of `a`. Thus, `c` also inherits properties from `a`.

`b` is the prototype of `c` and `a` is the prototype of `b`. Thus all properties from `a` or `b` are accessible on  `c`. `b` and `a` are part of the prototype chain of object `c`. The default prototype ( the prototype of of object `a`)
c --> b --> a --> Object.prototype --> null
*/
// let a = {
//     foo: 1,
// };

// let b = {
//     bar: 2,
// };

// let c = {
//     baz: 3,
// };

// Object.setPrototypeOf(c, b);
// Object.setPrototypeOf(b, a);
// console.log("A", Object.getPrototypeOf(c));
// console.log("B", Object.getPrototypeOf(b));
// console.log("C", Object.getPrototypeOf(a));
// console.log("D", Object.getPrototypeOf(Object.prototype));
// console.log("A", c._proto_);
// console.log("B", b._proto_);
// console.log("C", a._proto_);

// console.log(c.bar); // => 2
// console.log(c.foo); // => 1
/*
let arr = [1, 2, 3];
console.log(arr.propertyIsEnumerable("length")); // false
console.log(arr.propertyIsEnumerable("2")); // true
console.log(arr.propertyIsEnumerable("forEach")); // false
console.log(Array.prototype.propertyIsEnumerable("forEach")); // false

function Foo() {
    this.bar = "qux";
    console.log(this.bar);
} // id this not a function, you can create a new instance of an function?
console.log("test", Foo());
console.log("test2", Foo.prototype);
Foo.prototype.baz = function () {};
console.log("test3", Foo.prototype);
console.log("test4", Foo.prototype.baz);
let foo = new Foo();
console.log("foo", foo);
console.log("pro", foo.prototype);
console.log(foo.propertyIsEnumerable("bar")); // true
console.log(Object.getPrototypeOf(foo).propertyIsEnumerable("baz")); // true
console.log(Object.getPrototypeOf(foo).propertyIsEnumerable("constructor")); // true

l.  Object.prototype
  - at the top of all JS prototype chains and its properties are accessible from any JS object.
  - create an  object that doesn't include Object. prototype in its prototype chain by set the prototype property value to null
  
2. Function Expressions
  a. function declaration 
    - first time of running the code, hositing where JS moves the function declarations to the top of the program file in which they are defined or the top of the function in which they are nested.
  b. function definitions are part of an expression.
   - (function foo() {});
   - const foo = function() {
    console.log("this is foo");
  
  - let prompt = function() { // Assign to a  variable
  };

  - [1, 2, 3].forEach(function(elem) { // pass to another function
  console.log(elem);
  });


  - function makeIncrementer(increment) {
      return function(value) { // return to caller
      return value + increment;
      }
    }
  };

  c. anonymous functions 
    - unnamed functions
    - you can name a function expression 
    - let squaredNums = [1, 2, 3].map(function  squareNum(num) {
    return num * num;
    }); // => [1, 4, 9]
    - function name give to a function expression is not visible in the scope that includes that function expression.
  d. function arrows
    - are function expressions and anonymous
    - aere immediately invoked, assigned to variables, or properties, or passed around as arguments and resutrn values.
  e. first-class functions
    - function declarartions can be treated as values
    - should not invoke functions when used as values.
  f. Type of a Function Value
    - functions are of type functions which are objects with its own properties and methods.
3. High Order Functions
  a. JS treats functions as values
    - takes a function as a argument (map.. etc)
    - returns a function
  b. returns a function
    - function factory: creates and returns a new function
    - uses the arguments passed to it to determine the specific job performed by the functon it returns.

    function createGreeter(language) {
  switch (language) {
    case 'en':
      return () => console.log('Hello!');
    case 'es':
      return () => console.log('Hola!');
    case 'fr':
      return () => console.log('Bonjour!');
  }
}

let greeterEs = createGreeter('es');
greeterEs(); // logs 'Hola!'
greeterEs(); // logs 'Hola!'
greeterEs(); // logs 'Hola!'

let greeterEn = createGreeter('en');
greeterEn(); // logs 'Hello!'

4. The Global Object 
  a. global in node.js and window in the browser
5. Implicit and Explicit Execution Context
  a. execution context - the environment in which a function executes. In JS, it mainly refers to the current value of this. determined by how to call the function or method.
  b. execution context can be set explicitly or implicitly when the code does not provide it explicitly also called binding this or setting the binding. a call binds this to a specific object thwn the funtion or method is called.
  c. the implicit context is the global object; in strict mode the implicit context is undefined.
  d.Explicit Execution Context with call
    - functions have a call method which calls a function with an explicit execution context.

    function logNum() {
      console.log(this.num);
    }

    let obj = {
      num: 42
    };

    logNum.call(obj); // logs 42
  e. Explicit Execution Contect with apply
    - uses an array to pass arguments to the function (context, [args...])
  f. this depends on how you invoke it and is not entirely depend on rules of variable scope.

  6. Hard Binding Funcions with Contexts
    a. bind 
      - returns a new function. The new function is permanently bound to the object passed as the first argument. The object passed in is set as the current value of  `this` which is the 
      . Once binded the function's execution context can not be changed.

// let object = {
//     a: "hello",
//     b: "world",
//     foo: function () {
//         return this.a + " " + this.b;
//     },
// };

// let bar = object.foo();
// console.log(bar);
// let bar = object.foo;
// console.log(bar());
// console.log(object.foo());
// let baz = object.foo.bind(object);
// console.log(baz);
// console.log(baz());
7. Dealing with Context Loss I
    a. Method Copied from Object
      - a method is copied out of an object and used elsewhere
      - the object context can be passed in as an argument 
      - bind the function to the object when passing into argument
8. Dealing with Context Loss II
    a. Inner Function Not Using the Surrounding Context
      -
*/
// let obj = {
//     a: "hello",
//     b: "world",
//     foo: function () {
//         function bar() {
//             console.log(this.a + " " + this.b);
//         }

//         bar();
//     },
//     // foo: function () {
//     //     console.log(this.a + " " + this.b);
//     // },
// };

// obj.foo();
/*
`bar` on `line 279` is invoked as a standalone function in the global execution context on the object.
    b. Solutions 
      - preserve context with a variable in outer scope.
      - call inner function with explicit context
      - use bind on the inner function and ger a new function with its execution context permanelty set to the object.
      - use an arrow function; uses the execution context from the surrounding context in which they are defined.
9. Dealing with Context Loss III 
  a. passing functions as arguments can strip them of their intended context objects
  b. function as argument losing surrounding context 
    - preserve the context with a variable in outer scope
    - use bind
    - use arrow function for the callback 
    - use optional thisArg argument are available in some methods that take callbacks
*/
