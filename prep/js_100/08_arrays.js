//First Element 
// function first(array) {
//     return array[0]; 
// }
// console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'
// console.log(first([])); // 'undefined'

//Last Element 
// function last(array) {
//     return array[array.length - 1]; 
// }
// console.log(last(['Earth', 'Moon', 'Mars'])); // 'Mars'

//Add + Delete
// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// energy.shift()
// energy.push('geothermal'); 
// console.log(energy); 

//Alphabet 
// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// console.log(alphabet.split('')); 

//Filter 
// function equalAbove100(scores) {
//     let count = 0; 
//     for (let score of scores) {
//         //console.log(score); 
//         if (score >= 100) {
//             count += 1; 
//         }
//     }
//       return count;
// }
// let scores = [96, 47, 113, 89, 100, 102];
// console.log(equalAbove100(scores)); 

//Vocabulary 
// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// vocabulary.forEach(words => words.forEach(word => console.log(word))); 
// Expected output:
// happy
// cheerful
// merry
// etc...

//Equality 
// let array1 = [2, 6, 4];
// let array2 = [2, 6, 4];

// console.log(array1 === array2); //false
/*
returns false because array1 and array2 are stored in different memory locations 
and thus are two seperate objects. 
*/

//Type 
// function filter(input) {
//   // Is input an array?
//   return Array.isArray(input); 
// }

// console.log(filter('r'));
// console.log(filter(['r']));

//Travel 
// function contains(location, destinations) {
//     for (let des of destinations) {
//         if (des === location) {
//             return true; 
//         }
//     }
//     return false; 
// }

// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];

// console.log(contains('Barcelona', destinations)); // true
// console.log(contains('Nashville', destinations)); // false

//Passcode 
// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// console.log(passcode.join('-')); 

//Checking items off the grocery list 
// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// for (let i = 0; i < groceryList.length; ) {
//      console.log(groceryList.shift()); 
// }

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

// console.log(groceryList); // []