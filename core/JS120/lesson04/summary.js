/*
1. Intro 
  - leverage prototypal delegation to create object subtypes whihc enables for more code re-use. 
  - using mix-ins enables code re-use.
  - polymorphism
  - OLOO pattern
2. Object Creation with Prototypes
  - Objects Linking to Other Objects - uses prototypes and invovles extracting properties common to all objects of the type to a prototype object. All objects of the same type then inherit from that prototype.
  - methods are set to the prototype 
  - the instance delegates the method call to the prototype and since the instance called the method the property of the instance is changed.
  - the init method on the prototype object creates the properties of an instance
  - advantage of OLOO over factory function
    - memory efficient
    - inherit methods from a single prototype and thus the instances share the same methods
  - factory function advantage over OLOO 
    - objects have private state
4. Subtyping with Constructors and Prototypes
  - Constructors and prototypes let us minic classes in JS where classes are blueprint for creating objects
  - square is a sub-type of reactangle or Rectangle is a super-type of Square
  - restoring the constructor property
    - constructor property of the subclass points to the superclass an will need to be reassigned to the the constructor itself
  - constructor is a property of the the prototype only 
  - three purposes of the constructor
    - gets the class of an object 
    - creates a new instance of an object with the same class
    -invoke a super- constructor
  - constructor reuse 
    - ??????
  - prototypal Inheritance (prototypal delegation, object interitance)
    - an object's internal [[Prototype]] points to another object and the object can delegate method calls to that other object. 
    let humanPrototype = {
  myName() { return this.name; },
  myAge() { return this.age; },
};

let personPrototype = Object.create(humanPrototype);
personPrototype.toString = function() {
  return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
};

let will = Object.create(personPrototype);
will.name = 'William';
will.age = 28;
will.toString(); // => My name is William and I'm 28 years old.

`will` instance inherits from `personPrototype` object which in turns inherits from `humanPrototype` object. `will`s [[prototype]] property refers to `personPrototype`, and the [[Prototype]] property of personPrototype refers to humanPrototype. When `tostring` is invoked, it finds the methods `myName` and myAge` on the `humanPrototype` object.

- psuedo-classical / constructor/prototype pattern
  - use constructor function and a prototype object to create objects and provide common methods for those objects
  - this tries to mimic classes without using classes
  - psuedo-classical intheritance or constructor inheritance 
    - a constructor's prototype object (the object referenced by its prototype property) inherits from another constructor's prototype. sub-type inherits from a super-type
5. Subtyping with Classes
  - extends
  - super
8. Code Reuse with Mixins
  - single inheritance
    - objects can inherit from only one object 
    - an object can have only one prototype object
    - classes can extend only one other class
  - mix-ins
    - a pattern that adds methods and properties from one object to another.
      - uses the assign method of Object
        - add the object containing the method to the passed in object's prototype
  - is a relationship makes sense to use constructor or class inheritance
  - otherwise endow your objects with some capability
9. Polymorphism
  - the ability of object with diffferent types to respond in different ways to the same message through overriding?
  - duck typing 
    - object of different unrelated types respond to the same method name.
  - polymorphism through inheritance 
    - the method is inherited from the super class and overridden in the sub class

*/
let Animal = {};
let Cat = Object.create(Animal);
let fluffy = Object.create(Cat);
console.log(fluffy instanceof Animal);