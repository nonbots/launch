//Problem 1
// let arr = ['10', '11', '9', '7', '8'];
// const r = arr.sort((a,b) => Number(b) - Number(a)); 
// console.log(r); 
// console.log(arr);
//minus operator coerces string to numbers, works without Number function as well

//Problem 2
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];
// console.log(books.sort((a,b) => Number(a.published) - Number(b.published))); 

//Problem 3 
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3]);

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1].third[0]);

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2].third[0][0]);

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1.b[1]); 

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// console.log(Object.keys(obj2.third)[0]); 

//Problem 4
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4
// console.log(arr1); 

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2]= 4; 
// console.log(arr2); 

// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4; 
// console.log(obj1); 

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4; 
// console.log(obj2);

//Problem 5

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

//method 1 
// //filter 
// const males = Object.values(munsters).filter(person => person.gender === "male");
// //reduce
// const r = males.reduce((pre, cur) => pre + cur.age, 0);
// console.log(r);

//method 2 
// let total = 0; 
// for (let munster in munsters) {
//   if (munsters[munster].gender === 'male') {
//     total += munsters[munster].age; 
//   }
// }
// console.log(total); 

//method 3 
// let total = 0;
// Object.values(munsters).forEach(munster => {
//   if (munster.gender === 'male') {
//     total += munster.age; 
//   }
// })
// console.log(total);

//Problem 6 

// for (name in munsters) {
//   console.log(`${name} is a ${munsters[name].age}-year-old ${munsters[name].gender}`);
// }

//Problem  7 
// let a = 2;
// let b = [5, 8];
// let arr = [a, b];
// //[2,[5,8]]
// console.log(arr);

// arr[0] += 2; //4
// arr[1][0] -= a; //3
// //[4,[3,8]]
// console.log(arr);

//Problem 8

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// obj => array of array of existing vowels
// const vowelsArr = [];
// console.log(Object.values(obj));
// Object.values(obj).forEach(words => { 
//   console.log('words', words);
//   const item = []; 
//   words.forEach(word => {
//   item.push(word.split('').filter(char => char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'));
//   });
//   vowelsArr.push(item);
// });
// console.log('Result', vowelsArr);

//obj => object with key and array of existing vowels
// const vowelchars = 'aeiou'; 
// const newObj = {}; 
// Object.values(obj).forEach((words, i) => {
//   const item = [];
// words.forEach(word => {
//   item.push(word.split('').filter(char => vowelchars.includes(char)));
// }); 
// newObj[i + 1] = item; 
// });

// console.log(newObj);

//Problem 9 
//let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
//go into the outer array 
    //check if element is number or string, if string
      //sort array using default
      //push to new array 
    // if number 
      // sort array using cb 
      //push to new array
      
//map => subelement.sort()

// const result = arr.map(subElem => {
//   if (typeof subElem[0] === 'string') {
//     return subElem.slice().sort(); 
//   } else {
//     return subElem.slice().sort((a,b) => a - b); 
//   }
// }); 
// console.log(result);
// console.log(arr);

//Problem 10
// const result = arr.map(subElem => {
//   if (typeof subElem[0] === 'string') {
//     return subElem.slice().sort().reverse(); 
//   } else {
//     return subElem.slice().sort((a,b)   => b - a); 
//   }
// }); 
// console.log(result);
// console.log(arr);

// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
// arr.map(subArr => {
//   return subArr.slice().sort((a, b) => {
//     if (typeof a === 'number') {
//       return b - a;
//     }

//     if (a < b) {
//       return 1
//     } else if (a > b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// });

// b < c, 1, sort a after b, [c, b, a]
// > 0 a goes after b 
// < 0 a goes before b 
// === keep order 
// => [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]

//Problem 11
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// const result = arr.map(obj => {
//   let newObj = {}; 
//   for (key in obj) {
//     newObj[key] = obj[key] + 1; 
//   }
//   return newObj;  
// }); 

// console.log(result); 
// console.log(arr);

//Problem 12 
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// const result = arr.map(subArr => subArr.filter(elem => elem % 3 === 0)); 
// console.log(result); 
// console.log(arr); 
// result[1][0] = 'changed'; 
// console.log(arr);
// console.log(result);

//Problem 13 
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

//use sort(a - b) to compare sum of odd numbers 
// const result = arr.sort((a,b) => {
//   return getOddTotal(b) - getOddTotal(a); 
// })
// console.log(result);

// function getOddTotal(arr) {
//   return arr.reduce((acc, num) => {
//   if (num % 2 === 1) {
//     acc = acc + num
//   }
//   return acc; 
//   },0); 
// }
// console.log(getOddTotal([4,5,7])); 

//Problem 14 
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };

//obj => [["Red", "Green"], "MEDIUM"...]
//Method 1 
// const result = []; 
// for (item in obj) {
//   if (obj[item].type === 'fruit') {
//     result.push(obj[item].colors. map(color => color[0].toUpperCase() + color.slice(1))); 
//   } else {
//     result.push(obj[item].size.toUpperCase()); 
//   }
// }
// console.log(result);
// console.log(obj); 

//method 2 
// console.log(Object.values(obj)); 
// const result = Object.values(obj).map(item => {
//   if (item.type === 'fruit') {
//     return item.colors.map(color => color[0].toUpperCase() + color.slice(1)); 
//   } else {
//     return item.size.toUpperCase(); 
//   }
// }); 
// console.log(result);
// console.log(obj); 

//Problem 15
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// for (let item of arr) {
//   console.log(item); 
//   for(let key in item) {
//     console.log(item[key]); 
//   }
// }
//filter => every
// const result = arr.filter(obj => {
//   for (let key in obj){
//   let isAllEven = obj[key].every(num => num % 2 === 0);
//   if (!isAllEven) {
//       return false; 
//     }
//   }
//   return true; 
// });
// console.log(result);

//Problem 16 
// let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
// const obj = {};
// arr.forEach(subArr => {
//   obj[subArr[0]] = subArr[1]; 
// });
// console.log(obj);

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

//Problem 17 
//get a random letter in lowercase 
//get the code point for a - z (97 - 122);


//get a random letter number single digit number; 
//
// function getRandomNum() {
//   return Math.floor(Math.random() * 10);
// }
// function getRandomChar() {
//   return String.fromCodePoint(Math.floor(Math.random() * 26) + 97);
// }

// function getFourDigit() {
//   return getRandomChar() + getRandomNum() + getRandomChar() + getRandomChar(); 
// }
// function getSection1() {
//   return getRandomChar() + getRandomNum() + getRandomNum() + getRandomChar() + getRandomNum()+ getRandomNum()+ getRandomChar() + getRandomNum(); 
// }

// function getUUID() {
//   return getSection1() + '-' + getFourDigit() + '-' +  getFourDigit() + '-' + getFourDigit(); 
// }

// console.log(getUUID());

// let test = []; 
// console.log(test.shift()); 
// console.log(test); 
