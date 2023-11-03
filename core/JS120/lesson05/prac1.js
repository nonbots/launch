
// const danceMixin = {
//   dance() {
//     console.log(`${this.name} is dancing`);
//   }
// }
// class Celebrity {
//   constructor(name) {
//     this.famous = true;
//     this.hasInstagram = true;
//     this.hasStraightTeeth = true;
//     this.isAttractive = true;
//     this.name = name;
//   }
//     doInterview() {
//       console.log( `${this.name} is doing an interview.`)
//     }
// }

// class Singer extends Celebrity{
//   constructor(name) {
//     super(name);
//   }
//   sing() {
//     console.log(`${this.name} is singing.`);
//   }
// }
// Object.assign(Singer.prototype, danceMixin);

// class Dancer extends Celebrity{
//   constructor(name) {
//     super(name);
//   }
// }

// Object.assign(Dancer.prototype, danceMixin);

// class Actor extends Celebrity{
//   constructor(name) {
//     super(name);
//   }
//   act() {
//     console.log(`${this.name} is acting.`);
//   }
// }

// class Athlete extends Celebrity{
//   constructor(name) {
//     super(name);
//   }
//   playSports() {
//     console.log(`${this.name} is playing sports`);
//   }
//   ///duck typing 
//   cheats() {
//     console.log(`${this.name} cheats with their superiors`)
//   }
//  }
// class GovernmentOfficial {
//   constructor(name) {
//     this.name = name;
//   }
//   //duck typing
//   cheats() {
//     console.log(`${this.name} cheats with their inferiors.`)
//   }
// }

//  class Performer extends Celebrity{
//   constructor(name) {
//     super(name);
//   }
//  }
//  Object.assign(Performer.prototype, Singer.prototype, Actor.prototype, Dancer.prototype);

//  let britney = new Performer("britney");
//  let justin = new Performer("justin");
//  let lebron = new Athlete("lebron");
//  let tiger = new Athlete("tiger");
//  let chopin = new Dancer("chopin");
//  let adele = new Singer("adele");

//  // polymorphism through inheritance but not responding differently
//  adele.doInterview();

//  // lebron collaborates with tiger
//  tiger.friend = lebron;
//  tiger.highFives = function() {
//   console.log(`${this.name} is high fiving ${this.friend.name}`);
//  }
// tiger.highFives();

// console.log(justin instanceof Performer);
// console.log(justin instanceof Celebrity);
// console.log(justin instanceof Actor);

// function createCelebrity(name) {
//   return {
//     famous: true,
//     hasInstagram: true,
//     hasStraightTeeth: true,
//     isAttractive: true,
//     name,
//   }
// }

// const danceMixin = {
//   dance() {
//     console.log(`${this.name} is dancing`);
//   }

// }

// function createSinger(name) {
//   const Celebrity = createCelebrity(name);
//   const Singer = {
//     sing() {
//       console.log(`${this.name} is singing.`);
//     } 
//   }
//   return Object.assign(Singer, Celebrity, danceMixin);
// }
// console.log(createSinger("britney"));


// function createDancer(name) {
//   const Celebrity = createCelebrity(name);
//   return Object.assign(danceMixin, Celebrity);
// }


// function createActor(name) {
//   const Celebrity = createCelebrity(name);
//   const Actor = {
//     act() {
//       console.log(`${this.name} is acting.`);
//     }
//   }
//   return Object.assign(Actor, Celebrity);
// }
// function createAthlete(name) {
//   const Celebrity = createCelebrity(name);
//   const Athlete = {
//     playSports() {
//       console.log(`${this.name} is playing sports`);
//     },
//     cheats() {
//       console.log(`${this.name} is cheating with their superiors.`)
//     }
//   }
//   return Object.assign(Athlete, Celebrity);
// }

// function createPerformer(name) {
//   let Singer = createSinger(name);
//   let Dancer = createDancer(name);
//   let Actor = createActor(name);
//   let Performer = {};
//   return Object.assign(Performer, Singer, Dancer, Actor);
// }

// function createGovernmentOfficial(name) {
//   return {
//     name,
//     position: "mayor",
//     meeting() {
//       console.log(`${this.name} is in a meeting`);
//     },
//     ///ducktyping 
//     cheats() {
//       console.log(`${this.name} is cheating with their inferiors`)
//     }
//   }
// }

// let justin = createPerformer("justin");
// let britney = createPerformer("britney")
// let choplin = createDancer("choplin");
// let tiger = createAthlete("tiger");
// let lebron = createAthlete("lebron")
// let sarah = createGovernmentOfficial("sarah");

// tiger.friend = lebron;
// tiger.highFives = function() {
//   console.log(`${this.name} is high fiving ${this.friend.name}`);
// }
// tiger.highFives();

//factory function does not have polymorphism through inheritance since all if it methods are copied and own by the object created.

//OLOO

class Person {
  speak () {
    console.log("speaking")
  }
}

class Father extends Person{
  // speak() {
  //   console.log('overriding')
  // }
}


//two different type of objects that are relate
// they have the same interface (method name) 
// the interface respond in a different way 
let father = new Father();
father.speak();

let person = new Person();
person.speak();

/*

Polymorphism refers to the ability of objects with different types to respond in different ways to the same message (or method invocation); that is, data of different types can respond to a common interface. It's a crucial concept in OO programming that can lead to more maintainable code.

When two or more object types have a method with the same name, we can invoke that method with any of those objects. When we don't care what type of object is calling the method, we're using polymorphism

*/