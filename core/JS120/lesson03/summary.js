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
      - constructor's prototype object (function prototype): an object that the constructor uses as the object prototype for the object it creates, the constructor's prototype object.
    c. overriding the prototype
      - overriding a to an individual object can be done if you reassign the method to a different function.

      - all functions have prototype propery
  6. Static and Instance Properties and Methods
    a. instance - individual objects of a specific data type
      -  properties of instances are not properties of the constructor
    b. instance methods
      - stored in the object's instances but in the prototype's prototype property 
    c. static properties
      - defined and accessed directly from the constructor and belongs to the type not the instances or prototype
    d. static methods 
      - define and accessed directly from the constructor and belongs to the type not the instances of prototype (ex. Array.isArray, Date.now, Object.assign)
  7. Built-in Constructors
    a. Array 
      - first parameter takes a length
      - if more than one parameter adds those values into the new array
      - .fill method determines what the values are
      - array.prototype
        - its prototype properties contain methods like forEach, map, filter, includes, etc called instance methods of the Array type
      - static array methods
        - array.isArray return if a argument is an array or not (used to differentiate between array and objects since array are also objects)
        - array.from takes an array-like object and returns an array
          > Array.from({0: 'a', 1: 'b', 2: 'c', length: 3})
          ['a', 'b', 'c']
    b. Object
      - Object.prototype : all objects have access to the instance methods defined in Object.prototype such as .hasOwnPropetry, isPrototypeOf, etc. 
      - since array are objects these methods can also be used where the key is the index of the array
      - array.prototype inherits from object.prototype
      - Object.prototype.toString returns a string representation of the obejdt that it's called on and is inherited by arrays, functions, and dates
      - static Object methods 
        - assign, create, entries, freeze, isFrozen, keys, values
    c. Date
      - creates objects that represent a specific date and time. 
      - Date prototype
        - toString returns a string of date
        - getFullYear returns only the year
        - getDay return the day of the week
    d. String 
      - has primitive strings and object strings (string are in reality objects)
      - use new to create a string object
      - used to call methods a primitive strings where the primitive string is wraps the string behind teh scences to access the property or methods and then discards the warpper when it is done and the method returns a primitive
      - omitting the new keyword whe creating the object returns a string and converts argument into a string.
    d. Number and Boolean
      - same as strings
      - avoid creating string, number and boolean objects explicitly
    f. Extending Built-In Prototypes
      - methods can be added to a type by adding method to the constructor's prototype property
      - base practice to not add methods to prototype property since it others might not be aware of them
    g. Array Methods for String
      - methods are not tied to an object type through the use of explicit context-binding ao the a method from another object can be applied to a different object type called method borrowing
      - array methods are useful with string objects
  8. ES6 Classes
    - a more familiar way for OOP programmers from other languages to create contructors and prototypes
    - class declaration
      - defining the getArea method gets placed in Rectangle.prototype
      - must use new to create an instance
    - class expressions
      - expression can be assigned to a variable
    - first class : a value that can be passed into a function, returned from a function and assigned to a variable
    - first-class object thus has stat methods and properties
    - static method are on the class of type 
    - methods, instance or object methods are on the instance and are on the prototypes's prototype property
    - static methods can be define in the class by using `static` or the `class.method` (adding the static method directly on the class (constructor))
    - static properties uses the static keyword is shared by all instances
    - caveats
      - in strict mode
      - class declartions are not hoisted
        -is declared but not initialized unit the definition gets executed
      - must use new keyword
      - cannot reassign the prototype object  
*/
