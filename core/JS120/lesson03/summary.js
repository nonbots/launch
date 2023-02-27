/*
1. Encapsulation: the combining of state and behavior into an object. 

"Instantiated an object using object literal syntax"
let employee = {
  baseSalary: 6000,
  overtime: 10,
  rate: 50,
  computeWage: function() {
    return this.baseSalary + (this.overtime * this.rate)
  }
}

2. Factory functions (object factory functions, factory object creation pattern) : creates multiple objects of th same "type" by returning the instance of the object
  a. disadvantages
    - every instance of the object has a full copu of hte methods. This cause redundancy and heavy on memory.
    - it is impossible to identify the "type" of the instance once created

3. Object Orientation 
  a. maintenance is easier when the scope of changes is limited
  b. data and behavior that manipulate the data are put into containers (objects) 
  c.OOP answers:
    - what are the important concepts in the program
    - what are the properties of a vehicle 
    - how do we create vehicles
    - what operations can be perform on a vechicle
    - should new properties and methods be added
  d. Objects:
    - organize related data and code together
    - useful when a program needs more than one instance of something
    - become more useful as the codebase increases in size
  4. Constructors - a factory like function 
    - define a constructor function and then invoke it each time to create an object of that type.
    - call it with the new keyword
    - use this to set the object's properties and methods
    - don't supply an explicit return value 
    a. new:
      - creates a new object
      - sert the prototype of the new object to the objct that is referenced by the constructor's protoype property
      - sets the value of this for use inside the function to point to the new object
      - invokes the function and this is used to set the object's properties and methods
      - new returns the new objet even though there is not explicit return in the function
    - arrow functions do not have new so it can't use new
    - new can be used by methods inside an object with an anonymous function 
    - new does not work with built in objects and methods (what about new Date()) and generators
    - the constructor returns objects that are explicitly returned and ignores primitives
  b. supplying constructor arguments with plain objects
    - reduces bugs 
    - use assign to simplify the code,but this can cause bugs if there are additional properties tha car object does not have.
  c. instanceof lets us determine whether a given constrictore created an object
  d. implicit execution context
    - funtion call, implicit context is the global object
    - method call, implicit context is the object 
      - method call of a nested function stripes the execution context of the object and is instead the global object 
    - function call with new, inplicit context is the new object 

  e.What happens if you run the following code? Why?
    function Lizard() {
      this.scamper = function() {
        console.log("I'm scampering!");
      };
    }
    The console throws a TypeError. On `line 7`, the `Lizard` function is invoked, but since there is no keyword `new` provided before the invocation, a new object was not created and `this.scamper` is not bound to an object and instead gets assigned to `undefined`. `Lizzy` is initialized to `undefined`. On `line 8`, calling the `scamper` function` which is set to `undefined` throws an error. 

let lizzy = Lizard();
lizzy.scamper(); // ?
  5. Constructors With Prototypes
    a. Method delegation to prototypes 
      - share methods by putting them in the prototype object. If an object doesn't contain a requested method, JS searches the prototype chain to ring the method.
      - define a method onc in the prototype object and the inheriting objects delegate the method calls to the prototype
    b. Constructor prototype Property 
      - constructor creates an object whose prototype reference the Foo.prototype
      - constructor's prototype object (function prototype): an object that he constructore useds as the object prototype for the object it creates, the constructor's prototype object.
    c. overriding the prototype
      - overriding a to an individual object can be done if you reassign the method to a different function.

      - all functions have prototype propery
  6. Static and Instance Properties and Methods

  7. Built-in Constructors
  8. ES6 Classes
*/
