/*
I wanted to ask you for help with something. I’m reviewing Sorting, and I understand it quite fully I think, except I can’t explain to myself why the logic of the method can be abbreviated to a-b  What I mean is this:
[2, 11, 9, 4, 107, 21, 1].sort((a, b) => a - b);  instead of:
[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}); // => [ 1, 2, 4, 9, 11, 21, 107 ] 
Or is that just something that happens behind the scenes that we don’t need to know?


Oh, nevermind I just found the answer. I was hung up by the fact that it has to return -1, or 1… whereas when it’s the abbreviated method it only matters whether the result is negative or positive so that the element is sorted relatively, it doesn’t have to return exactly 1 or - 1… LOL ;]
*/


/*

// Patterns that try minic classical inheritance

1. object factory pattern

2. OLOO (object linking other objects) 

3. pseudo classical inheritance 

4. class pattern 

Question 1: 
What are collaborator objects?

Collaborator objects are objects that is part of state of another object. This means that the other object has a property that refers to the collaborator object and is about to access the properties of the collaborator object.

//use within another object. pointer the collabotor (be more precise, does not really safe space)
*/
// Can you show me an example?
// const pet = {
//     name: "Rambo"
// }

// const Person = {
//     pet: pet,
//     name: "Ben"
// }

// The Person.pet property refers to the pet object. This means that the pet object is collaborating with the Person object. This means that the person object can access properties of the pet object. 


// console.log(Person.pet.name) //Rambo

// Question 2: 
// Refering to the pet object. Create a object factory that creates an instance of pet.

// factory objects are objects that are created using the object factory pattern. The object factory pattern is a more efficient way of create objects of the same type. 

/// code: method?

// function createPet(name) {
//     return {
//         name: name
//     }
// }

// let rambo = createPet("Rambo");
// let lily = createPet("lily");
// console.log(rambo);
// console.log(lily);
// console.log(lily instanceof Object)

//Question 3: 


// function createPet(name) {
//     return {
//         name: name,
//         makeSound () {
//           console.log("barkbark");
//         }
//     }
// }

// Can you demonstrate to me where the properties are located within the prototypal chain? 

// With objects created the object factory pattern the properties of the instances are located on the stances itself  

// Question 4:
// Can you explain to me what are the cons of using object factory pattern? And can you proposal another wayt to store the methods? 

// Objects in object factory patterns store all their properties ( state and behavior) on the instance itself). This can cause repetition of code and thus more memory usage which can bloat a program. 

// with OLOO you can create a protoype object that refers to all the common behavior of an instance. 

// const petPrototype = {
//     makeSound ()  {
//         console.log("barkbark");
//     }
// }

// let rambo = Object.create(petPrototype);

// Object.creates a method that creates an object literal and it then assigns the object you pass in, pet Protoype object, to the internal prototype property of the object literal.  


      //[[Prototype]]
//rambo      =>       petProtoype


// rambo.makeSound();

// Can you show were the method is now located?

// console.log(rambo.__proto__);
// console.log(Object.getPrototypeOf(rambo));
// console.log(rambo);
// let rambo = createPet("rambo"); 
// console.log(rambo);



//Question 4: 

// What is execution context? How is an execution context determined? How can an execution context get lost?
// An execution is the context, or site, of the function or method being invoked. 

// An execution context is determine by how the function or method is called. 

// implicit
// function invocation  => undefined (strict) OR the global object (sloppy mode) 
// method call => the calling object 
// constructor invocation => the instance created

// explicit
// bind
// call, apply

const pet = {
    name: "Rambo",
    makeSound ()  {
        console.log(`${this.name} "barkbark"`);
    }
}

const newMakeSound = pet.makeSound; 

newMakeSound(); // undefined
// when we invoke newMakeSound, this is the global object. global.name return undefined 
// newMakeSound is doing a function invocation. This is lost when we created a new variable that refer to the pet make sound method. This strips the context from the pet object 


//Question 5:
// How can we correct this context lost so that the context is pet and not the global object?

// newMakeSound.call(pet);

//Question 6:
// What is another way to correct the context?

// const correctedContextFunc = newMakeSound.bind(pet);
// correctedContextFunc();


// Question 7:
// What is will they console log and why?
// const pet = {
//     name: "Rambo",
//     makeSound ()  {
//         function bark() {
//             console.log(`${this.name} "barkbark"`);
//         }
//         bark(me);
//     }
// }

const pet = {
    name: "Rambo",
    makeSound ()  {
      let that = this;
        function bark() {
            console.log(`${that.name} "barkbark"`);
        }
        bark();
    }
}

// const pet = {
//     name: "Rambo",
//     makeSound ()  { 

//         [1].forEach(function bark(num) {
//           console.log(`${num}: ${this.name} "barkbark"`);
//         })
//     }
// }

pet.makeSound();

// const pet = {
//   name: "Rambo",
//   makeSound ()  { 
//     let that = this;
//       [1].forEach(function bark(num) {
//         console.log(`${num}: ${that.name} "barkbark"`);
//       })
//   }
// }

// pet.makeSound();

// On line 170, we have a function, this is the global object. When we try to access the name property on the global name does not exist and thus retun undefined. 
// you are making a function invocation on lin 170 which has an implicit execution context to the global object in sloppy if strict undefined that woulgd give us type error

// Question 8:
// How would you fix this?

// using lexical scope to access this from the outer scope

// Question 9: Can you create pet instances using the seudo classical inheritance pattern?

// const pet = {
//     name: "Rambo",
//     makeSound ()  {
//         console.log(`${this.name} "barkbark"`);
//     }
// }

// function Pet(petName) {
// //  this.name = petName;
//     Mom.call(this, petName);
// }

// Pet.prototype.makeSound = function() {
//     console.log(`${this.name} barkbark`);
// }

// let rambo = new Pet("rambo");

// rambo.makeSound();
// //Question 10:
// console.log(rambo);
// console.log(Pet.prototype);


//Quesiton 10: What if the pet has a mom and we want pet to inherit from the mom the ability to act cute? How can we accommplish this with the code above?

// function Mom(momName) {
//     this.name = momName;
// }

// Mom.prototype.actCute = function() {
//     console.log(`${this.name} is acting cute`);
// }

// we need to reassign the pet.protoype property to a new object. What is that new object? The object needs to point its internal prototype property to the Mom.prototype object?

// Pet.prototype = Object.create(Mom.prototype);
// Pet.prototype.consrtuctor = Pet;

// let pet = new Pet("rambo");
// pet.actCute();
// console.log(typeof NaN);
// console.log(Number.isNaN(NaN));

//Question 11: multiple inheritance how do you achieve that?

//If you want to create a static property, how would you do it? How about with classes?