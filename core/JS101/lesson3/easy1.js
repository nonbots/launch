//Q1
// let numbers = [1, 2, 3];
// numbers[6] = 5; 
// no error raise

// console.log(numbers[4]); 
//undefined

//Q2
// function exclamationAtEnd(str) {
//     if (str[str.length -1] === '!') {
//         return true
//     }
//     return false;
// }

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// console.log(exclamationAtEnd(str1)); 
// console.log(exclamationAtEnd(str2));

//Q3
// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log('Spot' in ages);  

//Q4
// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.
// let newStr = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase(); 
// console.log(newStr);


//Q5
// console.log(false == '0'); //false -> 0, '0' -> 0 -> false -> true
// console.log(false === '0 ; // false

//Q6
// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };
// let newAges = {};
// Object.assign(newAges, ages, additionalAges); 
// console.log(newAges);

// console.log(ages);
// console.log(additionalAges);

//Q7
// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";
// console.log(str1.includes('Dino')); 
// console.log(str2.includes('Dino')); 

//Q8
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino"); 
// console.log(flintstones);

//Q10
// let advice = "Few things in life are as important as house training your pet dinosaur.";

// // Expected return value:
// // => 'Few things in life are as important as '
// //find the index of house
// console.log(advice.slice(0, advice.indexOf('house')));
// //get string from index and onward

let a = [1,2]; 
console.log(a); 
let b = a; 
console.log(b); 
b = [4,5];
console.log(b); 
console.log(a);