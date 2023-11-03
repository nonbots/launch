//Section 7 
//input - array of numbers
//output - array of numbers where odd indices are values are double (existing array)

//loop through array, start a index 1 and increment 2 positions each time
// const array = [3,3,1,15]; 
// let multiplier = 4; 

// function func(array, muliplier) {
//     let newArray = []; 
//     for (let i = 0; i < array.length; i += 1) {
//         // double value at index
//         if (i % 2 === 1) {
//             newArray.push(array[i] * multiplier); 
//         } else {
//             newArray.push(array[i]); 
//         }
//     }
//     return newArray;
// }
// console.log(func(array, multiplier)); 
// console.log(array); 

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// let produceKeyValues = Object.entries(produce);
// // produceKeyValues contains:
// //   [['apple', 'Fruit'],
// //    ['carrot', 'Vegetable'],
// //    ['pear', 'Fruit'],
// //    ['broccoli', 'Vegetable']]

// produceKeyValues.forEach(keyValue => {
  
//   let [ key, value ] = keyValue;
//   console.log([key, value])
//   console.log(`${key} is a ${value}`);
// });
// // logs:
// // apple is a Fruit
// // carrot is a Vegetable
// // pear is a Fruit
// // broccoli is a Vegetable

// let oddNumbers = [1, 2, 3].filter(num =>num % 2 === 1);

// console.log(oddNumbers); // => [1, 3]


// let arr = ['a', 'b', {c: 'foo'}];
// let obj = arr[2];

// console.log(arr.includes(obj)); // => true

//Section 11

// console.log([1, 2, 3].every(num => {
//   return num = num * 2;
// }));

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// let obj = {};
// flintstones.forEach((name, idx) => {
//     obj[name] = idx; 
// })
// console.log(obj);

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };
// const initValue = 0; 
// const result = Object.values(ages).reduce((previousValue, currValue) => previousValue + currValue, initValue); 
// console.log(result);

// let totalAges = 0; 
// Object.values(ages).forEach(age => totalAges += age);
// console.log(totalAges); 


// const array = Object.values(ages); 
// console.log(Math.min(...array)); 

// let statement = "The Flintstones Rock";

// let obj = {};
// statement.split('').forEach(char => {
//   if (char in obj) {
//       obj[char] += 1; 
//   } else if (char !== ' ') {
//       obj[char] = 1; 
//   }
// })
// console.log(obj);
// let text = 'ere df'; 
// let n = ['d','o']; 
// n[0] = n[0].toUpperCase();
// console.log(n);
// let obj = {'t': 6}
// console.log(n[1.555]);
// console.log(obj.x);
// console.log(text.split(' '));

// const a = [4,3]; 
// console.log(a.indexOf(-9));
// a.length = 1; 
// console.log(a); 
// a.length = 2; 
// console.log(a);
// const b = [4,3,{'r': 5}]; 
// b.length = 5; 
// console.log(b.length);
// console.log(Object.keys(b).length); 
// console.log('here');
// b.forEach(num => {
     
//     if ( num === 4) {
       
//         return true; 
//     }
//     console.log(num);
// }); 
// let result = [1, 2, 3, 4, 5].forEach(num => num + 1);
// console.log(result); // []

// let obj = { 
//     1: 'a',
//     2: undefined 
// }
// console.log(obj.hasOwnProperty('x')); 
// console.log(Object.keys(obj).includes('x'));
//  console.log(obj['1']);

// const words = ['spray', 'limit', 'elite', ['exuberant', 'new'], 'destruction', 'present']

// const result = words.filter((word, i) => i === 3);

// console.log('RES:', result);
// result[0][1]= 'newnew'; 
// console.log('TR:', result);
// console.log('OG:', words);


// const words1 = ['spray', 'limit', 'elite', ['exuberant', 'new'], 'destruction', 'present']

// const result1 = words1.map(word => word);

// console.log(result1);
// result1[3][1] = 'newnew'; 
// console.log(words1); 
// console.log(result1);
