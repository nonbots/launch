/*
Use a factory function to create pet objects. The factory should let us create and use pets like this:
*/
// function createPet(type, name) {
//     return {
//         type,
//         name,
//         sleep() {
//             console.log("I am sleeping");
//         },
//         wake() {
//             console.log("I am waking");
//         },
//     };
// }
// let pudding = createPet("Cat", "Pudding");
// console.log(`I am a ${pudding.type}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake(); // I am awake

// let neptune = createPet("Fish", "Neptune");
// console.log(`I am a ${neptune.type}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake(); // I am awake

/*
Use the OLOO pattern to create an object prototype that we can use to create pet objects. The prototype should let us create and use pets like this:
*/
// let PetPrototype = {
//     init(animal, name) {
//         this.animal = animal;
//         this.name = name;
//         return this;
//     },
//     sleep() {
//         console.log("I am sleeping");
//     },
//     wake() {
//         console.log("I am awake");
//     },
// };
// let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping
// pudding.wake(); // I am awake

// let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
// console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
// neptune.sleep(); // I am sleeping
// neptune.wake(); // I am awake

/*
Consider the objects created by the programs in problems 1 and 2. How do objects for the same animal differ from each other?
*/
/*
The factory objects have private properties (state). if any state is stored in the body of the factory function instod of in the resturn object is private to the returned object. They can't be accessed or modified unless one of the object methods exposes the state. The OLOO objects have methods set to the prototype property where they delegate access to those methods through the prototype whereas object factories have there own copy of those methods.
*/
