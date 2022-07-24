//Retrieve a Value (Part 1)
// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };
// console.log(student['courses']);

//Retrieve a Value (Part 2)
// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
// };
// console.log(jane['location']['country']); 

//Add a Property
// let fido = {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
// };

// fido['age'] = 12;
// fido['favoriteFood'] = 'apple'; 
// console.log(fido); 

// Add property 'age'.
// Add property 'favorite food'.

//Greetings From Jane
// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   greet: function(name) {
//       console.log(`Hej, ${name}!`); 
//   }
// };

// jane.greet('Bobby'); // Hej, Bobby!

//Dot Notation vs Bracket Notation
// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); ////prefix becomes the key 

// let ocean = {};
// let prefix = 'Indian';

// ocean[prefix] = 'Pacific';

// console.log(ocean); //  indian becomes the key

//Is it true? 
// let obj = {
//   num: 42,
//   'property name': 'string value',
//   true: false,
//   fun: function() {
//     console.log('Harr Harr!');
//   },
// };

// for (let prop in obj) {
//   if (prop === true) {
//     console.log("It's true!");
//   }
// }

//the key is a string is not equal to true.

//Car Keys 
// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };

// console.log(Object.keys(vehicle)); 

//Convert an object to a nested array
// let person = {
//   title: 'Duke',
//   name: 'Nukem',
//   age: 33
// };
// const result = []; 
// for (let prop in person) {
//     let pair = []; 
//     pair.push(prop, person[prop]); 
//     result.push(pair); 
// }
// console.log(result);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

//...and vice versa 
// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
// const obj = {}; 
// for (let pair of nestedArray) {
//     obj[pair[0]] = pair[1]; 
// }
// console.log(obj); 

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

//Cloning a Person
// function clone(obj) {
//   let newObj = Object.assign({}, obj); 
//   return newObj; 
// }

// let person = {
//   title: 'Duke',
//   name: {
//     value: 'Nukem',
//     isStageName: true
//   },
//   age: 33
// };

// let clonedPerson = clone(person);
// person.age = 34;

// console.log(person.age);       // 34
// console.log(clonedPerson.age); // 33

// person.name.isStageName = false;
// console.log(person.name.isStageName);       // false
// console.log(clonedPerson.name.isStageName); // false