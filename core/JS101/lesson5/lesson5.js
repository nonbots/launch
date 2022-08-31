//section 2
// console.log(typeof("" + undefined));
// let words = ['go', 'ahead', 'and', 'jump'];
// words.sort((word1, word2) => word1.length - word2.length); 
// console.log(words);

// let myArr = [[18, 7], [3, 12]].forEach(arr => { // for each returns undefined to myArr, no side effect 
//   return arr.map(num => { //map returns [undefined, undefined], no side effect 
//                           //callback has a side effect of console.log, callback returns undefined to map
//     if (num > 5) {        // conditional evaluates to true, checks each num 
//       console.log(num); //console.log prints num to the console
//     }
//   });
// });

// console.log(myArr);

// console.log([18, 7].map(num => {  
//     if (num > 5) { 
//       console.log(num); 
//     }
//   }));

//Example 5: 
// const o = [[1, 2], [3, 4]]; 
// const r = o.map(arr => {
//   return arr.map(num => num * 2);
// });

// console.log(o); 
// console.log(r); 
//[]
// [1,2] => 1 => 2 => [2, 4]
//[[2,4]]
// [3, 4] => 3 => 2 => [6, 8]
//[[2,4], [6,8]]

//action: map, on [[1,2], [3,4]], no se, returns: [[2,4], [6,8]], not use
//action: map cb on [1,2] 1st iteration, no se, returns: [2,4], used by map to push into outer array
//action: innermap on [1,2] 1st iteration, no se, returns: [2,4], returned by map cb
//action: innermap cb, on 1 1st interation, no se, returns 2, use by inner map to push to array
//action: num * 2 on num , no se, returns 2 , yes returned by innermap cb

//Example 6: 
// const array = [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }]; 
// console.log(array.filter(object => {
//   return Object.keys(object).every(key => object[key][0] === key);
// }));

// console.log(array);
//=> [ { c: 'cat', d: 'dog' } ]

//fitlers array, returns selected copy of array, no side effects and return not used
//fitlerCb takes in object (1st iter), returns true, no side effects and return is used by filter to push object to array(transform array)
//every takes in array of keys, returns true, no side effects and return is used by filter cb
//everyCb takes in key (1st it), returns true, no side effects and return is used by every to validate
//object[key][0] === key takes in key and returns true, no side effects and return is used by every cb 

//every check if every element is true in order to return true, same as checking if at least on element is false 
//some check if at least one element is true to return true,

//Example 7
// const array = [[8, 13, 27], ['apple', 'banana', 'cantaloupe']]; 
// array.map(arr => {
//   return arr.filter(item => {
//     if (typeof item === 'number') {    // if it's a number
//       return item > 13;
//     } else {
//       return item.length < 6;
//     }
//   });
// });

// => [ [ 27 ], [ 'apple' ] ]

//map takes in array and returns new array based on the selection criterion, return value is not used and no se
//map cb takes in sub array (1st iteration), returns a copy of the array with elements > 13, return value is used by map to transform array
//filter takes in sub array, returns a a copy of the arry with elements > 13, return value is used in map cb; 
//filter cb takes item in subarray and returns a a numbe only when > than 13, return value is used by filter to select element for array, 
//check if item is a number, returns true, return value is used in if 
//check if item is > 13, returns false, return value is use by filter to no push the elemen to array

//Example 8 
// const array =[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]];
// array.map(element1 => {
//   return element1.forEach(element2 => {
//     return element2.filter(element3 => {
//       return element3.length > 0;
//     });
//   });
// });

// => [ undefined, undefined ]
// map takes in array, returns [undefined, undefined], return not used
// map cb takes in sub array(1st iteration:[[1], [2], [3], [4]] ), returns undefined, return used by map to push to new array 
// forEach takes in sub array, returns undefined, return is used by map cb 
// forEach cb takes in sub array (1st iteration:[1] ), returns [], return is not use,
// filter takes in array [1], return [],  return is used fro forEach cb, 
// filter cb takes in 1, returns false, return is use to select element to be push to array 
// element3.length > 0  takes 1, returns false, return is use for filter cb; 

// let element2 = [1]; 
// console.log(element2.filter(element3 => {
//       return element3.length > 0;
//     }));

//filters returns an emtpy array if all elements are falsy

//Example 9
// const array = [[[1, 2], [3, 4]], [5, 6]]; 
// array.map(arr => {
//   return arr.map(elem => {
//     if (typeof elem === 'number') { // it's a number
//       return elem + 1;
//     } else {                  // it's an array
//       return elem.map(number => number + 1);
//     }
//   });
// });

// map is called on array, passes sub array to cb, returns [[[2,3],[4,5]], [6,7]], 
// map cb takes sub array [[1, 2], [3, 4]], returns [[2,3],[4,5]], and return is used by map to push
// map is called on sub array, passes sub array to cb, returns [[2,3],[4,5]], return is used by cb 
// map cb takes in sub array [1, 2], returns [2,3] and return is used by map to push
// if element is a number, returns false, return is used by if 
// map is called on subarray, passes elements to cb, returns [2,3], and return to map cb 
// map cb takes element returns 2, return value is used push element to map 
// number + 1 takes element and returns 2 return values is by map