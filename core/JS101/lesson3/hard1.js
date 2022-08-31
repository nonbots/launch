//Q1
// function first() {
//   return {
//     prop1: "hi there"
//   };
// }

// function second() {
//   return
//   {
//     prop1: "hi there"
//   };
// }

// console.log(first());  // {prop: "hi there"}
// console.log(second()); //undefined

//Q2
// let object = { first: [1] };
// let numArray = object["first"];
// numArray.push(2);

// console.log(numArray); //  => "[1, 2]"
// console.log(object); //
// //assigning values from an object also actually stores the reference to that value

//Q3
// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

//Q4
// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   let numLength = dotSeparatedWords.length; 
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word) || numLength !== 4) {
//       return false;
//     }
//   }

//   return true;
// }

// function isAnIpNumber(word) {
//     //console.log(Number.isInteger(Number(word)));
//     return Number.isInteger(Number(word)) && (Number(word) >= 0 && Number(word) <= 255); 
// }        

// console.log(isDotSeparatedIpAddress('10.4.5.110.2'));