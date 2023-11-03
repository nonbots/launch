//EX.1 
// let array1 = [1, 2, 3];
// let array2 = array1;
// array1[1] = 4;
// console.log(array2); //1, 4, 3

//EX.2
//Greeting is a not defined

//EX.3
// console.log(Math.sqrt(37)); 

//EX.4
// const a = [1, 6, 3, 2];
// const b = [-1, -6, -3, -2]; 

// console.log(Math.max(...a)); 
// console.log(Math.max.apply(Math, b)); 
// console.log(Math.max(2,2)); 

//EX.5
// function doSomething(string) {
//   return string.split(' ').reverse().map((value) => value.length);
// }

/*
The function splits the string where there is a space and stores each word in 
an array. It then reversed the array of words and passes each element to get 
its lenght and stores the lenght in an array for each element. It then returns
the array.
*/

//EX.6
// let words = [
//   'laboratory',
//   'experiment',
//   'flab',
//   'Pans Labyrinth',
//   'elaborate',
//   'polar bear',
// ];

// function allMatches(words, reg) {
//     const matchedWords = []; 
//     for(let word of words){
//         if(reg.test(word)) {
//             matchedWords.push(word); 
//         }
//     }
//     return matchedWords; 
// }

// function allMatches(words, reg) {
//     const matchedWords = words.filter(word => reg.test(word)); 
//     return matchedWords; 
// }
//console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

//EX.7
/*
Exception handling is the process of catching errors that might occur in 
the program so the something can be done about it. It involves a try
block catches the error, a catch block that do something when the error is caught
and a finally block that run regardless. 
*/

//Ex.8
// function isNotANumber(value) {
//   return value !== value;
// }

// console.log(isNotANumber('5'/ 3)); 

//EX.9
// function NegZero(value) {
//     if (1 / value === Infinity) {
//         return false
//     }
//     return true; 
// }
// console.log(NegZero(-0)); // true
// console.log(NegZero(0)); // false

//EX.10
// let y = "5"; 
// y++; // "5" = "5" + 1
// console.log(y); 