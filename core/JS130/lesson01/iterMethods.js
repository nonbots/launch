// function reduce(numbers, callback, initVal) {
//   let accum = initVal; 
//   let start = 0;
//   if (accum === undefined) {
//     start = 1;
//     accum = numbers[0];
//   }
//   for (let i = start; i < numbers.length; i += 1) {
//     accum = callback(accum, numbers[i]);
//   }
//   return accum;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
// console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
// console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(reduce(stooges, (reversedStooges, stooge) => {
//   reversedStooges.unshift(stooge);
//   return reversedStooges;
// }, []));
// // => ["Curly", "Larry", "Mo"]

// function filter(numbers, cb) {
//   return numbers.reduce((acc, num) => {
//     if (cb(num)) {
//       acc.push(num);
//     }
//     return acc; 
//   }, []);
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

// function map(numbers, cb) {
//   return numbers.reduce((acc, num) => {
//     acc.push(cb(num));
//     return acc; 
//   },[]) 
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

// function objMap(obj, cb) {
//   let newObj = {};
//   for (let prop in obj) {
//     console.log(obj[prop]);
//     newObj[prop] = cb(obj[prop]);
//   }
//   return newObj;
// }

// console.log(objMap({a:"z", b:"y"}, (val) => val + val ));
// function objReduce(obj, cb, init) {
//   let newObj = {};
//   let accum = 0;
//   if (init !== undefined) {
//     for (let prop in obj) {
//       obj[prop].unshift(init);
//     }
//   }
//   for (let prop in obj) {
//     let arr = obj[prop];
//     for (let i = 0; i < arr.length; i += 1) {
//       accum = cb(accum, arr[i]);
//     }
//     newObj[prop] = accum;
//     accum = 0; 
//   }
//   return newObj;
// }
// console.log(objReduce({a:[1,2,3], b:[4,43,2]}, (accum, number) => accum + number, 1));
// console.log(objReduce({a:[1,2,3], b:[4,43,2]}, (accum, number) => accum + number));