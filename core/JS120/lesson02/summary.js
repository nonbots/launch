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
*/
