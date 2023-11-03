//Retangle
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getArea(){
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(length){
    super(length,length);
  }
}
// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25
// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

//Fake Cat
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype); // cat.prototype only stores methods?
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.
// console.log(Cat.prototype.hasOwnProperty('speaks'));
// console.log(Cat.prototype.constructor.name);

//Complete the Program - Cats!
// class Pet {
//   constructor(name, age, description) {
//     this.name = name;
//     this.age = age;
//     this.description = description;
//   }
//   info() {
//     return `My cat ${this.name} is ${this.age} and has ${this.description} fur.`
//   }
// }

// class Cat extends Pet {

// }

// let pudding = new Cat('Pudding', 7, 'black and white');
// let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

// console.log(pudding.info());
// console.log(butterscotch.info());

//Animals

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, "dog", status);
//     this.master = master;
//   }
//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, "cat", status);
//   }
//   introduce() {
//     return super.introduce() + " Meow meow!";
//   }
// }

// let cat = new Cat("Pepe", 2, "happy");
// console.log(cat.introduce());
// console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// // logs true

// let dog = new Dog("Doggie", 4, "sad", "Dan");
// console.log(dog.greetMaster());

// class Vehicle {
//   constructor (make, model) {
//     this.make = make;
//     this.model = model;
//   }
//   info () {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Car extends Vehicle {
//   getWheels() {
//     return 4;
//   }
// }
// class Motorcycle extends Vehicle {
//   getWheels() {
//     return 2;
//   }
// }
// class Truck extends Vehicle {
//   constructor(make, model, payload) {
//     super(make, model);
//     this.payload = payload;
//   }
//   getWheels() {
//     return 6;
//   }
// }

// class Person {
//   greeting (text) {
//     console.log(text);
//   }
// }

// class Shouter extends Person {
//   greeting (text) {
//     super.greeting(text.toUpperCase());
//   }
// }
// let person = new Person();
// let shouter = new Shouter();

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); 

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "strolls";
//   }
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   }
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "saunters";
//   }
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   }
// }

// class Cheetah {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "runs";
//   }
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   }
// }

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

//create Pet class with type and name as constructor parameters
//create Owner class with name asa constructor parameter
//create Shelter class and adopt method that takes in instance of owner and pet
//use an object to store shelter where the owner is the key and the pet are elements in an array as value
//create a printAdoptions method that gets the key of the owner and iterates throug the value array of pets

class Pet {
  constructor(animal, name) {
    this.animal = animal
    this.name = name;
  }
  info() {
    return `a ${this.animal} named ${this.name}`;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  numberOfPets() {
    return this.pets.length;
  }

  printPets() {
    this.pets.forEach(pet => console.log(pet.info()));
  }
}

class Shelter {
  constructor() {
    this.owners = {};
  }

  adopt(owner, pet) {
    owner.addPet(pet);
    if (!this.owners[owner.name]) {
      this.owners[owner.name] = owner;
    }
  }

  printAdoptions() {
    for(let name in this.owners) {
      console.log(`${name} has adopted the following pets:`);
      this.owners[name].printPets();
      console.log("");
    }
  }
}

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding      = new Pet('cat', 'Pudding');
// let darwin       = new Pet('bearded dragon', 'Darwin');
// let kennedy      = new Pet('dog', 'Kennedy');
// let sweetie      = new Pet('parakeet', 'Sweetie Pie');
// let molly        = new Pet('dog', 'Molly');
// let chester      = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(shelter.owners);
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

class Banner {
  constructor(message) {
    this.message = message;
    this.msgLength = this.message.length;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    //repeat the length of the input string plus 2 and plus signs at the end 
    // let length = this.message.length;
    return `+-${"-".repeat(this.msgLength)}-+`;
  }


  emptyLine() {
    //add "| " and length of input string " |"
    // let length = this.message.length;
    return  `| ${" ".repeat(this.msgLength)} |`;
  }

  messageLine() {
    return `| ${this.message} |`
  }
}

// let banner1 = new Banner('To boldly go where no one has gone before.');
// banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
// let banner2 = new Banner('');
// banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+
