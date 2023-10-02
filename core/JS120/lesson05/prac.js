/*
1. Using constructor/pseudoclassical model, create code that models a constructor function called `Celebrity`.  All celebrities are famous.  All celebrities can do interviews for magazines.  All celebrities have Instagrams.  All celebrities have straight teeth.  All celebrities are attractive.  All celebrities have names.

There are certain kinds of celebrities: Singers, Athletes, Actors, and Dancers.

Athletes can perform their sports.  Athletes perform in sporting events.

Singers can sing and dance.

Actors can act.

Dancers can dance.

Some celebrities can do multiple things.  Britney Spears can sing, dance, and act.  Justin Timberlake can sing, dance, and act.  Adam Levine can cheat  on his wife.  Tiger Woods cheated on his wife.

Justin Timberlake attended LeBron James' basketball game.  They high-fived at half time.


2.  Do the same thing as #1 but in class syntax.

Specific Topics of Interest
Objects, object factories, constructors and prototypes, OLOO, and ES6 classes
Methods and properties; instance and static methods and properties
Prototypal and pseudo-classical inheritance
Encapsulation
Polymorphism
Collaborator objects
Single vs multiple inheritance
Mix-ins; mix-ins vs. inheritance
Methods and functions; method invocation vs. function invocation
Higher-order functions
The global object
Method and property lookup sequence
Function execution context and this
Implicit and explicit execution context
Dealing with context loss
call, apply, and bind
Object.assign and Object.create
Built-in constructors like Array, Object, String and Number
Reading OO code


*/

/*
Celebrities are famous (state)
have Instagram (state)
straight teeth (state)
attractive (state)
names (state)

do interviews (behavior)


type:
singers
  sing (behavior)
  dance (behavior)
athletes
  perform sports (behavior)
actors
  act (behavior)
dancers
  dance (bahavior)


 performer who is a singer inherit dancer.prototype and actor.prototype 
 create britney and justin from the performer constructor

instance 
  Britney spears (singer dancer and actor)
  Justin (singer dancer and actor)
    high fives (behavior)
    attends basketball game (behavior)
  Adam Levine (singer)
    cheat (behavior)
    sing (behavior)
  Tiger Woods (athlete)
    plays sports (behavior)
    cheats (behavior)
  Lebron James 
    plays sports 
    high fives
    attends baskeball game (behavior)


Justin collaborates with Lebron James

//throw in the instanceof operator to show you know how it works
*/

const danceMixin = {
  dance() {
    console.log(`${this.name} is dancing.`);
  }
}

function Celebrity(name) {
  this.famous = true;
  this.hasInstagram = true;
  this.hasStraightTeeth = true;
  this.isAttractive = true;
  this.name = name;
}

Celebrity.prototype.doInterview = function() {
  console.log(`${this.name} is doing an interview.`);
}

function Singer(name) {
  Celebrity.call(this, name);
}

Singer.prototype = Object.create(Celebrity.prototype);
Singer.prototype.constructor = Singer;

Singer.prototype.sing = function() {
  console.log("singing");
}


Object.assign(Singer.prototype, danceMixin);

function Dancer(name) {
  Celebrity.call(this,name);
}

Dancer.prototype = Object.create(Celebrity.prototype);
Dancer.prototype.constructor = Dancer;

Object.assign(Dancer.prototype, danceMixin);


function Athlete(name) {
  Celebrity.call(this,name);
}

Athlete.prototype = Object.create(Celebrity.prototype);
Athlete.prototype.constructor = Athlete;

Athlete.prototype.playSports = function() {
  console.log("playing sports");
}
//polymorphism through inheritance and overriding.
Athlete.prototype.doInterview = function () {
  console.log(`${this.name} is doing an interview at the stadium`)
}
function Actor(name) {
  Celebrity.call(this,name);
}

Actor.prototype = Object.create(Celebrity.prototype);
Actor.prototype.constructor = Actor;

Actor.prototype.act = function() {
  console.log("acting");
}

function Performer(name) {
  Celebrity.call(this, name);
}
Performer.prototype = Object.create(Celebrity.prototype)
Performer.prototype.constructor = Performer;
Object.assign(Performer.prototype, Actor.prototype, Dancer.prototype, Singer.prototype);


let lucy = new Dancer("Lucy")
//polymorphism thorugh interitance??
lucy.dance(); 

let britney = new Performer('britney');
console.log(britney);

let justin = new Performer('justin');
console.log(justin);


justin.doHighFive = function() {
  console.log(`${this.name} is high fiving ${this.friend.name}`);
}

justin.attendsGame = function() {
  console.log("attending game");
}

let tiger = new Athlete("tiger");
tiger.cheats = function() {
  console.log(`${this.name} cheating with 100 women.`);
}
tiger.doInterview()

//not polymorphism because objects are of not different type.
tiger.playSports = function() {
  console.log(`${this.name} playing golf`);
}

//not polymorphism because objects are of not different type.
let lebron = new Athlete("lebron");
lebron.playSports = function() {
  console.log(`${this.name} playing basketball`);
}
justin.friend = lebron;

let adam = new Singer("adam");
adam.cheats = function() {
  console.log(`${this.name} cheating with ${this.mistress.name}`);
}

adam.mistress = britney;
justin.doHighFive();
adam.cheats();
tiger.cheats();
lebron.playSports();
justin.doInterview();

console.log(justin instanceof Performer);
console.log(justin instanceof Actor);
console.log(justin instanceof Celebrity);


// Polymorphism - when objects with different types repond in different ways to the same method name invocation. Data of different types respond in a different way to a common interface.

  // through inheritance - instead of providing its own method, through inheritance the behavior of the super type is acquired.
  // Example 1
    function Parent(name) {
      this.name = name;
    }

    Parent.prototype.speak = function() {
      console.log(`${this.name} speaks English.`);
    }
    function Child(name) {
      Parent.call(this, name);
    }
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;

    let child = new Child("Sandy");
    child.speak();

    // through inheritance and overriding - the speak method of stepChild overrides the move method inherited from the Parent super class 
    function StepChild(name) {
      Parent.call(this,name) 
    }
    StepChild.prototype = Object.create(Parent.prototype);
    StepChild.prototype.constructor = StepChild;
   
     StepChild.prototype.speak = function() {
      console.log(`${this.name} speaks English and Japanese.`);
    }

    let stepChild = new StepChild("Ben");
    console.log(stepChild.speak());

    // Example 2
    function Fruits() {
      this.fruits = ["Banana", "apple"];
    }

    Fruits.prototype.toString = function() {
      console.log(this.fruits.join(","));
    }

    let fruits = new Fruits();
    console.log(fruits.toString()); // "banana, apple"


    //Example 3
    console.log([1, 2, 3].toString());
    console.log(Array.prototype.hasOwnProperty("toString"));
    console.log(Object.prototype.hasOwnProperty("toString"))

  // through ducktyping - objects of different (unrelated) types both respond to the same method name invocation.
    // takes in the same number of arguments
    //uses the sam method name
  //  function Truck() {
  //   makesSound() {
  //     console.log("Vroomm");
  //   }
  //  } 

  //  function Dog() {
  //   makesSound() {
  //     console.log("woof");
  //   }
  //  }
