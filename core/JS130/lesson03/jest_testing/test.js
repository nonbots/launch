// let a = 14;
// function bar() {
//   if (a === 14) {
//      let a = 24; // You can change this line.

//   } else if (a === 24) {
//      let a = 15; // You can change this line.
//   }
//   console.log(a);
// }
// bar();
// bar();

// 'use strict'
// let foo = 1;

// function Car(numCyl) {
//   this.cylinders = numCyl;
// }

// let honda = new Car(6);

// let bar = {
//   a: 5,
//   test() {
//     this.b = 27;
//   },
// };
// let doTest = bar.test;
// doTest();
// console.log(bar);

// function qux(foo) {
//     return function (bar) {
//       return `${foo} to you, ${bar} `;
//     };
//   }
  
//   let greeting = qux("Good morning");
//   console.log(greeting("Jamie"));
// function subtract(num1, num2) {
//     // if one of hte arguments is missing
//     if (num2 === undefined) {
//         return function(num) {
//             return num1 - num;
//         }
//     } else {
//     return num1 - num2;
//     }
// }



// console.log(subtract(11, 4) === 7); //true
// console.log(subtract(12, 1) === 11); //true
// console.log(subtract(7, 3) === 4); //true

// const subtractFromTen = subtract(10);
// console.log(subtractFromTen(3) === 7); //true
// console.log(subtractFromTen(5) === 5); //true

// function createUtilitiesAccount(){
//     let payments = [];
//     let electricUsage = [];
//     let currentBalance = 0;
//     let transactionId = 0;

//     return {
    
//       getTransactionId(){
//         transactionId += 1;
//         return transactionId;
//       },
  
//       getBalance(){
//         return currentBalance;
//       },
  
//       makePayment(amount) {
//         currentBalance -= amount;
//         payments.push([this.getTransactionId(), amount]);
//       },
//       addUsage(usageAmount) {
//         currentBalance += usageAmount * 0.25;
//         electricUsage.push([this.getTransactionId(), usageAmount]);
//       },
  
//       getPayments(){
//         return payments;
//       },
  
//       getUsage(){
//         return electricUsage;
//       }
//     }
//   }

//   let acc = createUtilitiesAccount();
//   console.log(acc.getPayments());
//   console.log(acc.getTransactionId());
//   acc.makePayment(200);
//   console.log(acc.getPayments());

// let words = [];

// function translate(value) {
//   return value.slice(1) + value[0] + "ay";
// }

// function addWord(value) { ///
//   words.push(value);
// }

// function getWords() {
//   return [...words];
// }

// function pigLatinSentence() { ///
//   return getWords()
//     .map((value) => translate(value))
//     .join(" ");
// }

// addWord("Pig");
// addWord("Latin");
// addWord("sentences");
// addWord("are");
// addWord("hard");
// addWord("to");
// addWord("read");
// console.log(pigLatinSentence());

// module.exports = {addWord, pigLatinSentence};

// try {
//     doSomething(); // error is returned ther
//     console.log("Tried to run doSomething");
//   } catch (error) {
//     if (error instanceof TypeError) {
//       console.log("That's a type error.");
//     } else {
//       doSomethingElse();
//       console.log("Ran doSomethingElse!");
//     }
//   }
//   function doSomethingElse() {
//     try {
//       console.log("Doing something for real");
//       throw new Error("That wasn't right.");
//     } catch (error) {
//       console.log(`OOPS! ${error.message}`);
//     }
//   }

let a = 14;
function bar() {
  if (a === 14) {
    a = 24; // You can change this line.
  } else if (a === 24) {
    let a = 15; // You can change this line.
  }
  console.log(a);
}
bar();
bar();