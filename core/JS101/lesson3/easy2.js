//Q1
//repplace every 'important' with 'urgent'
//input string -> new string
// let advice = "Few things in life are as important as house training your pet important dinosaur.";

// // if the string includes the word then replace else stop the loop
// while (advice.includes('important')) {
//     advice = advice.replace('important', 'urgent');
// }

// console.log(advice); 

//Q2
// ways of reversing the array without mutating the original
//uses assign 
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = []; 
// Object.assign(newNumbers, numbers); 
// newNumbers.reverse();
// console.log(newNumbers); // [ 5, 4, 3, 2, 1 ]

// newNumbers = [1, 2, 3, 4, 5];
// newNumbers.sort((num1, num2) => num2 - num1);
// console.log(newNumbers); // [ 5, 4, 3, 2, 1 ]
// console.log(numbers

//uses slice 
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.slice(); 
// newNumbers.reverse();
// console.log(newNumbers); // [ 5, 4, 3, 2, 1 ]

// newNumbers = [1, 2, 3, 4, 5];
// newNumbers.sort((num1, num2) => num2 - num1);
// console.log(newNumbers); // [ 5, 4, 3, 2, 1 ]
// console.log(numbers);

//uses for each 
// let numbers = [1, 2, 3, 4, 5];
// let reversed = [];
// let newNumbers = numbers.forEach(num => {
//   reversed.unshift(num);
// }); 
// console.log(numbers);
// console.log(reversed);

//Q3
//determine if number is included in the array
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1)); 
// console.log(numbers.includes(number2));


//Q4
//put 'Four score and' in front of string
// let prepend = "Four score and "; 
// let famousWords = "seven years ago...";
// console.log(prepend + famousWords);
// console.log(prepend.concat(famousWords));

//Q5
// let array = [1, 2, 3, 4, 5]; 
// //delete array[2];
// array.splice(2,1);
// console.log(array);

//Q6
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// //init a result array
// const result = [];
// //loop through the array 
// for (let name of flintstones) {
//   //check if the element is an array
//   if (Array.isArray(name)) {
//     //loop through the array 
//     for (let inner of name) {
//       //push the element to result
//       result.push(inner);
//     }
//   } else {
//     // push the elemen to result
//     result.push(name);
//   }
// }
// console.log(result);

//Q7

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// console.log([Object.keys(flintstones)[2], flintstones.Barney]);

//Q7
// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers)); 
// console.log(Array.isArray(table));

//Q9
// let title = "Flintstone Family Members";
// // let center = "                           "; 
// // console.log(center + title + center);

// let padding = Math.floor((40 - title.length) / 2);

// title.padStart(padding + title.length);

//Q10
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// console.log(statement1.split('').filter(char => char === 't').length); 
// console.log(statement2.split('').filter(char => char === 't').length); 
