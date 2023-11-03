//Truthy vs Falsy 
/*
falsy: 
undefined
0 
"" or ''
false
null
NaN 
-0
0n
*/

//Yes?No?Part 1
// let randomNumber = Math.round(Math.random());
// if (randomNumber) {
//     console.log('No')
// } else {
//     console.log('Yes'); 
// }

//Yes?No?Part 2
// let randomNumber = Math.round(Math.random());
// randomNumber ? console.log('No') : console.log('Yes'); // 1 is truthy and 0 is falsy 

//Check the Weather, Part 1
// let weather = 'sunny';
// weather = 'cloudy'; 

// if (weather === 'sunny') {
//     console.log("It's a beautiful day!"); 
// } else if (weather === 'rainy') {
//     console.log("Grab your umbrella.")
// } else {
//     console.log("Let's stay inside.")
// }

//Switch 
// let animal = 'horse';

// switch (animal) {
//   case 'duck':
//     console.log('quack');
//   case 'squirrel':
//     console.log('nook nook');
//   case 'horse':
//     console.log('neigh');
//   case 'bird':
//     console.log('tweet tweet');
//   default:
//     console.log('*cricket*');
// } 
//neigh
//tweet tweet 
//*cricket*

//Check the Weather, Part 2
// let weather = 'sunny' 

// switch (weather) {
//     case 'sunny':
//         console.log("It's a beautiful day!");
//         break; 
//     case 'rainy':
//         console.log("Grab your unbrella."); 
//     default: 
//         console.log("Let's stay inside.");
// }

//Logical Conditions 1 
// if (false || true) {
//   console.log('Yes!');
// } else {
//   console.log('No...');
//}
// 'Yes!'

//Logical Conditions 2 
// if (true && false) {
//   console.log('Yes!');
// } else {
//   console.log('No...');
// }
// 'No'

//Logical Conditions 3 
// let sale = true;
// let admissionPrice = !sale ? 5.25 : 3.99;

// console.log('$' + admissionPrice); // 3.99

//Are we moving? 
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving); // true; 

// you need the parentheses because && takes precedent over ||.