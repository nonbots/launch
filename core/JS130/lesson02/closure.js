// function one () {
//   // function three() {};
//   let a = "apple"
//   function two () {
//     // console.log(three);
//     // return three;
//     return a;
//   }
//  two();
// }

// console.log(one());
// 'use strict';
// let a = "apple"
// function bar() {};
// function b() { 
//   return bar;
// };


// function z() {
// return b();
// }

// console.log(z());

// function makeMultipleLister(number) {
//  return function() {
//   for (let i = 0; i < 100; i += number){
//     if(i !== 0) console.log(i);
//   }
//  }
// }

// let lister = makeMultipleLister(17);
// lister();
// let total = 0;
// function add(number) {
//  return total += number;
// }

// function subtract(number) {
//   return total -= number;
// }


// console.log(add(1));       // 1
// console.log(add(42));      // 43
// console.log(subtract(39)); // 4
// console.log(add(6));       // 10

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2); 
// let result = bar(3); // 2 * 3 = 6
// console.log(result);
// result += bar(4);// 6 * 4 = 24 + 6 = 30 
// console.log(result);
// result += bar(5); // 24 * 5 = 120 + 30 
// console.log(result);

// function later(func, arg){
//   return () => {
//     func(arg);
//   }
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

// function later2(func, arg) {
//   return (arg2) => func(arg, arg2);
// }

// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!


// "use strict";


// function bind(context, func) {
//   return function() {
//     return func.call(context);
//   }
// }

// let obj = {};
// let boundFunc = bind(obj, function() {
//   this.foo = "bar";
// });

// boundFunc();
// console.log(obj); // { foo: 'bar' }


// function makeCounter() {
//   var count = 0;       // declare a new variable // saved in a variable object.
//   return function() {
//     count += 1;        // references count from the outer scope
//     console.log(count);
//   };
// }


// var counter = makeCounter();
// counter(); // 1
// counter(); // 2
// counter(); // 3
// // console.log(counter);
// makeCounter.car = "HERE";
// // console.log(makeCounter.makeCounter);
// // console.log(makeCounter.car);

function increment(start, end) {
  for (let i = start; i <= end; i += 1) {
    console.log(i);
  }
}

function decrement(end, start) {
  for (let i = end; i >= start; i -= 1) {
    console.log(i);
  }
}

function makeCounterLogger(number) {
  return function(number2) {
    if (number > number2) {
     decrement(number, number2);
    } else {
      increment(number, number2);
    }
  }
}

// let countlog = makeCounterLogger(5);
// countlog(8);
// // 5
// // 6
// // 7
// // 8
// // console.log(coutLog)
// countlog(2);
// // 5
// 4
// 3
// 2

function makeList() {
  let list = [];
  return function(arg) {
    if (arg === undefined) {
      if (list.length === 0) {
      console.log("The list is empty.")}
      else {
        // console.log("LOG OUT LIST");
        list.forEach(item => console.log(item));
      }
    }
    if (arg !== undefined) {
      let indexFound = list.indexOf(arg);
      // console.log(indexFound, "INDEX");
      if (indexFound > -1 ) {
        // console.log("HEREHERE", indexFound);
        let item = list.splice(indexFound, 1)[0];
    
        console.log(`${item} removed!`);
      } else {
        // console.log(arg,"TO ADD");
        list.push(arg);
        console.log(`${list[list.length - 1]} is added!`);
      }
    }
  }
}

// let list = makeList();
// console.log(list);
// list();
// // The list is empty.
// // console.log("NEXT CALL__________")
// list("make breakfast");
// // make breakfast added!

// list("read book");
// // read book added!

// list();
// // make breakfast
// // read book

// list("make breakfast");
// // make breakfast removed!

// list();
// // read book
function makeList() {
  let list = [];
    return {
      // let list = [];
    list() {
        if (list.length === 0) {
        console.log("The list is empty.")
      } else {
          // console.log("LOG OUT LIST");
          list.forEach(item => console.log(item));
        }
      },
   add (arg) {
    list.push(arg);
    console.log(`${list[list.length - 1]} is added!`);
   }, 
   remove(arg) {
    let indexFound = list.indexOf(arg);
    let item = list.splice(indexFound, 1)[0];
    console.log(`${item} removed!`);
   }
  }
}

let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn

///Objects also have CLOSURE??!!!