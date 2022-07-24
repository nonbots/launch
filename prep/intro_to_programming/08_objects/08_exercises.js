//EX.1
// let person = {
//   name:       'Bob',
//   occupation: 'web developer',
//   hobbies:    'painting',
// };

// console.log(person.name); 
// console.log(person['name']); 

//EX.2
// All non-string values will be coerced to strings when set as a key in an object.

//EX.3
// let myArray = {
//   0:  'Nhan',
//   1:   'Bui',
//   2:   'Nhan Bui',
//   length: 3
// };

// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

//EX.4
// let obj = {
//   b: 2,
//   a: 1,
//   c: 3,
// };

// const keys1 = Object.keys(obj); 
// keys1.forEach((key, index, keys) => keys[index] = key.toUpperCase()); 
// console.log(keys1); 
// console.log(obj); 

//EX.5 
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let child = Object.create(myProtoObj); 
 
//EX.6 
// "foo" -> primitive
// 3.1415 -> primitive
// [ 'a', 'b', 'c' ] -> object
// false -> primitive
// foo -> neither
// function bar() { return "bar"; } -> object
// undefined -> primitve
// { a: 1, b: 2 } -> object

//EX.7 
// child['qux'] =  3; 
// let objKeys = Object.keys(child);
// objKeys.forEach(function(key) {
//   console.log(key);
// });

// for (let key in child) {
//   console.log(key);
// }

// for (let key in child) {
//   if (child.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

//EX.8
// let objToCopy = {
//   foo: 1,
//   bar: 2,
//   qux: 3,
// };

// function copyObj(obj, keys) {
//   const copiedObj = {};
//   if(keys) {
//     keys.forEach(key => copiedObj[key] = obj[key]); 
//     return copiedObj; 
//   } else {
//     return Object.assign(copiedObj, obj); 
//   }
 
// }

//   let newObj = copyObj(objToCopy);
//   console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }

//EX.9 
// let foo = {
//   a: 'hello',
//   b: 'world',
// };

// let qux = 'hello';

// function bar(argument2) {
// // argument1.a = 'hi';
// // argument2 = 'hello here'; 
// // console.log(argument2); 
//   argument2 = 'hi';
//   console.log(argument2); 
// }
// function change(qux) {
//  qux = 'hi'; 
//  return qux; 
// }

// console.log(change(qux));

// //console.log(foo.a);
// console.log(qux);


//EX.10 
//[1, 2, ["a", ["b", false]], null, {}]
//primitive values -> 1, 2, "a", "b". false, null
//objects -> {}, [1, 2, ["a", ["b", false]], null, {}], ["a", ["b", false]], ["b", false]

//EX.11
// let obj = {
//   foo: { a: "hello", b: "world" },
//   bar: ["example", "mem", null, { xyz: 6 }, 88],
//   qux: [4, 8, 12]
// };

// obj['bar'][3]['xyz'] = 606; 
// console.log(obj); 