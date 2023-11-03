/*
input: template (template literal)
output: string 

store replace text in nested array

- iterate through all nested array 
  - randomly pick a word from each subarray
  - replace word with word to be replaced in template iteral
- return the string

funtion replaceWord (subarray)
  - randomly access the index from 0 to the last index of the array
  - return the word by referencing the subarray with the randomly generated index

*/

// const replacements = {
// adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'], 
// nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
// verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
// adverbs: ['easily', 'lazily','noisily','excitedly']
// };

// function mablibs(template) {
//   const words = template.split(' ');
//   console.log(words);
//   words.forEach(word => {
//     console.log('WORD', word);
//     if (word.includes('%{adjective}') || word.includes('%{noun}') || word.includes('%{verb}') || word.includes('%{adverb}')) {
//       let key = getAlpha(word);
//       console.log('KEY', key);
//       template = template.replace(word, replaceWord(replacements[key]));
//       console.log('LOG', template);
//     }
//   });
//   return template;
// }
  
// function getAlpha(word) {
//   return word.split('').filter(chars => chars >= 'a' && chars <= 'z').join('') + 's';
// }

// function replaceWord(subarray) {
//   let index = Math.floor(Math.random() * subarray.length);
//   return subarray[index];
// }

// let template1 =
//   "The %{adjective} brown %{noun} %{adverb} " +
//   "%{verb} the %{adjective} yellow " +
//   "%{noun}, who %{adverb} %{verb} his " +
//   "%{noun} and looks around.";

// console.log(mablibs(template1));


/*
input: reference to nested array 
output: a new reference to a new transposed array

declare init empty array, transposed
iterate through each element in the subarray
  - declare init an empty subarray
  iterate through each subarray
    - push the first element to subarray
  -push subarray to transposed array
-return transposed array

*/

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// const matrix = [
//   [1, 5, 8, 5],
//   [4, 7, 2, 0],
//   [3, 9, 6, 1]
// ];

// function transpose(matrix) {
//   const transposed = [];
//   for (let col = 0; col < matrix[0].length; col++) {
//     const subarray = []; 
//     for (let row = 0; row < matrix.length; row++) {
//     subarray.push(matrix[row][col]);
//     }
//     transposed.push(subarray);
//   }
//   return transposed;
// }

// let newMatrix = transpose(matrix);



// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]

// console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
// console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
// console.log(transpose([[1]]));                     // [[1]]
// console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]


// function rotate90(matrix) {
//   const transposed = [];
//   for (let col = 0; col < matrix[0].length; col++) {
//     const subarray = []; 
//     for (let row = matrix.length - 1; row >= 0; row--) {
//     subarray.push(matrix[row][col]);
//     }
//     transposed.push(subarray);
//   }
//   return transposed;
// }

// let matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// let matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0, 8],
// ];

// let newMatrix1 = rotate90(matrix1);
// let newMatrix2 = rotate90(matrix2);
// let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]


/*
input: two arrays 
output: new reference to new array merge in ascending order

- declare init a copy of the passed in arrays

- declare and init an empty array
- if none of the arrays are emtpy 
  - if the first element is the first array is greater than the second
    - remove and append the element from the first array to the result array  
- if the first array is emtpty 
  - append the second array to the first else vice versa
*/

// function merge(arr1, arr2) {
//   const copyArr1 = arr1.slice();
//   const copyArr2  = arr2.slice();
//   const result = [];
  
//   while (copyArr1.length !== 0 && copyArr2.length !== 0) {
//     if (copyArr1[0] > copyArr2[0]) {
//       result.push(copyArr2.shift());
//     } else {
//       result.push(copyArr1.shift());
//     }
//   }
//   //console.log(result);
//   if (copyArr1.length === 0) {
//     return result.concat(copyArr2);
//   } else {
//     return result.concat(copyArr1);
//   }
}

// console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2]))         // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
// console.log(merge([1, 4, 5], []));             // [1, 4, 5]

/*

input: array 
output: new reference to new array. 

declare and initi a copy of first half of the array 
declare and initi a copy of the second half of the array
- sort the arrays 
- call the merge function
*/

// function mergeSort(arr) {
//   let midLength = Math.floor(arr.length / 2); 
//   const arr1 = arr.slice(0, midLength); 
//   const arr2 = arr.slice(midLength); 
//   sort(arr1); 
//   sort(arr2);
//   return merge(arr1, arr2);
  
// }

// function sort(arr) {
//   // loop through each element in arr 
//   for (let lengthIdx = 0; lengthIdx < arr.length; lengthIdx++) {
//     // declare init isSwapped to false
//     let isSwapped = false;
//     // loop the the current element (loop one least element )
//     for (let numIdx = 0; numIdx < arr.length - lengthIdx; numIdx++) {
//       // if the current element is greater than the next element 
//       if (arr[numIdx] > arr[numIdx + 1]) {
//         let temp = arr[numIdx + 1];
//         arr[numIdx + 1] = arr[numIdx]; 
//         arr[numIdx] = temp;
//       }
//       // swap
//       // reassign isSwapped to true
//       isSwapped = true;
//     }
//     if(!isSwapped) {
//       return arr;
//     }
//   }    
//   return arr;
// }

/*
input: array of numbers
output: new reference of array sorted in ascending order 

base case: when the lenght of each subarray is 1 
return the element in the subarray 

declare and init arr1 to the first half of the input array 
declare and init arr2 to the second half of the input array
call the merge to store the arr1 and arr2

call merge to sort the two subarray into a new array

*/

// function mergeSort(arr) {
//   if(arr.length === 1) return arr; 
  
//   let arr1 = arr.slice(0, arr.length/2); 
//   let arr2 = arr.slice(arr.length/2);
//   arr1 = mergeSort(arr1);
//   arr2 = mergeSort(arr2);
  
//   return merge(arr1, arr2);
// }

// console.log(mergeSort([9, 5,5,7, 1]));

// console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
// console.log(mergeSort([5, 3]));                 // [3, 5]
// console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

// console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

/*
input: reference to an array of strings or numbers, searchItem
output: the index of the searched value in the reference array

1, 2, 5, 7, 9, 9 // find  8
7, 9, 9
7, since low high index are equal 

low = 1, high = 5 

- declare and init a low and high range 
- declare mid and initialized to mid index of range

- while the low index is less than high index
  - if equal to searchItem 
    - return the index of the searchItem
  - else if the searchItem is less than the midpoint item 
    - access the midpoint of the first half
  - else 
    - access the midpoint of the second half
-return -1


['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
*/

// function binarySearch(arr, value) {
//   let lowIdx = 0; 
//   let highIdx = arr.length - 1; 
  
//   while (lowIdx <= highIdx) {
//     let midIdx = Math.floor((highIdx - lowIdx) / 2) + lowIdx; // 9 / 2 = 4.5 = 4 
//     // 9 - 5 = 4 / 2 = 2 + 5 = 7
//     console.log('l:', lowIdx, 'h:', highIdx);
//     if (arr[midIdx] === value) {
//       return midIdx;
//     } else if (arr[midIdx] < value) {
//       lowIdx = midIdx + 1  // 5 - 9 
//     } else {
//       highIdx = midIdx - 1;
//     }
//   }
//   return -1;
// } 


// let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
// console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
// console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6