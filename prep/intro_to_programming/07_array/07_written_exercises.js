//EX.1

let array1 = [1, 2, undefined, 4];
//console.log(array1.length); //4

let array2 = [1];
array2.length = 5;
//console.log(array2.length); //5

let array3 = [];
array3[-1] = [1];
//console.log(array3[0]); 

//console.log(array3.length); //1

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
//console.log(array4.length) //3

let array5 = [];
array5[100] = 3;
//console.log(array5.length) //101

//EX.2
// let myArray = [1, 3, 6, 11, 4, 2,
//               4, 9, 17, 16, 0];

// myArray.forEach(function(num) {
//     if (num % 2 === 0) {
//     console.log(num); 
//     }
// })

// myArray.forEach(num => {
//         if (num % 2 === 0) {
//             console.log(num)
//         }
//     }); 

// myArray.filter( num => {
//     if (num % 2 === 0) {
//         console.log(num); 
//     }
    
// }); 

//EX.3
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];
// for (let i = 0; i < myArray.length; i += 1) {
//     //console.log(myArray[i]); 
//     for(let j = 0; j < myArray[i].length; j += 1) {
//       // console.log(myArray[i][j]); 
//         if (myArray[i][j] % 2 === 0) {
//             console.log(myArray[i][j]); 
//         }
//     }
// }

//  myArray.forEach(numArray => 
//     numArray.forEach(num => {
//         if (num % 2 === 0) {
//             console.log(num); 
            
//         }
//     }
// )); 


//EX.4 
// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];

// const stringArray = myArray.map(function(num){
//     if (num % 2 === 0) {
//       return 'even';  
//     }
//     return 'odd'; 
// }); 
// console.log(stringArray); 

//EX.5
// let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

// function findIntegers(things) {
//     return things.filter(thing => Number.isInteger(thing));
// }
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
 
//EX.6 
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// function oddLengths(arr) {
//     const lengths = arr.map(element => element.length); 
//     return lengths.filter(length => length % 2 === 1); 
// }

// console.log(oddLengths(arr)); // => [1, 5, 3]

//EX.7
// let array = [3, 5, 7];
// function sumOfSquares(array) {
//     return array.reduce((accumulator, element) => accumulator + (element**2), 0);
// }
// console.log(sumOfSquares(array)); // => 83

//EX.8 
// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// function oddLengths(arr) {
//      return arr.reduce((accumulator, element) => {
//         let length = element.length;
//         //console.log("Length: " + length); 
//         if (length % 2 === 1) {
//             //accumulator + length; 
//             // accumulator = accumulator + length; 
//             //console.log(accumulator + " + " + length + " = " + (accumulator + length)); 
//             accumulator.push(length); 
//         }
//         //console.log(accumulator); 
//         return accumulator; 
//     }, []); 
// }
// console.log("Result: " + oddLengths(arr)); // => [1, 5, 3]

//EX.9
// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// console.log(numbers1.includes(3)); 
// console.log(numbers2.includes(3)); 
// console.log(numbers3.includes(3)); 

//Ex.10
// let arr = [
//   ["hello", "world"],
//   ["example", "mem", null, 6, 88],
//   [4, 8, 12]
// ];

// arr[1][3] = 606; 

// arr.forEach(function(elements, index, theArray) {
//     elements.forEach(function(element) {
//         if (element === 6) {
//             console.log(element); 
//             theArray[index] = 606; 
//         }
//     }); 
// }); 

// console.log(arr); 
