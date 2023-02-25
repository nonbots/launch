/*
The code below should output "Christopher Turk is a Surgeon". Without running the code, what will it output? If there is a difference between the actual and desired output, explain the difference.
*/
// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };
// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }
// logReturnVal(turk.getDescription);

/*
The code logs `"undefined undefined is a undefined"`. On `line 17`, `logReturnVal` is called with `turk`'s property `getDescription` which is a reference to a function passed in as an argument. Since the function is being passed as an argument it is striped of its execution context which was `turk`. The function now is bound to `global` object. When `func` is invoked on `line 14`, `returnVal` is initialized to `"undefined undefined is a undefined"` since `this.lastName`, `this.firstName`, and `this.occupation` does not exist in the `global` object. The string value is logged to the console on `line 15`.
*/

/*
Modify the program from the previous problem so that logReturnVal accepts an additional context argument. If you then run the program with turk as the context argument, it should produce the desired output.
*/

// let turk = {
//     firstName: "Christopher",
//     lastName: "Turk",
//     occupation: "Surgeon",
//     getDescription() {
//         return (
//             this.firstName +
//             " " +
//             this.lastName +
//             " is a " +
//             this.occupation +
//             "."
//         );
//     },
// };
// function logReturnVal(func, context) {
//     let returnVal = func();
//     console.log(func.call(context));
// }
// logReturnVal(turk.getDescription, turk);

/*
Suppose that we want to extract getDescription from turk, but we always want it to execute with turk as its execution context. How would you modify your code to do that?
*/

// let turk = {
//     firstName: "Christopher",
//     lastName: "Turk",
//     occupation: "Surgeon",
//     getDescription() {
//         return (
//             this.firstName +
//             " " +
//             this.lastName +
//             " is a " +
//             this.occupation +
//             "."
//         );
//     },
// };
// let newFunc = turk.getDescription.bind(turk);
// console.log(newFunc());

/*
Consider the following code:
Will this code produce the following output? Why or why not?
The Elder Scrolls: Arena
The Elder Scrolls: Daggerfall
The Elder Scrolls: Morrowind
The Elder Scrolls: Oblivion
The Elder Scrolls: Skyrim
*/
// const TESgames = {
//     titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
//     seriesTitle: "The Elder Scrolls",
//     listGames: function () {
//         this.titles.forEach(function (title) {
//             console.log(this.seriesTitle + ": " + title);
//         });
//     },
// };

// TESgames.listGames();
/*
The code logs `"undefined : Arena .... "` instead of the expected output. On `line 83-86`, `listGames` is set to an anonymous function that takes a callback. The callback is bound to the `global` object, thus it does not have the properties of `seriesTitle` and returns undefine on each iteration of the callback for 'this.seriesTitle`.  
*/
/*
Use let self = this; to ensure that TESgames.listGames uses TESGames as its context and logs the proper output.
*/
// const TESgames = {
//     titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
//     seriesTitle: "The Elder Scrolls",
//     listGames: function () {
//         let self = this;
//         this.titles.forEach(function (title) {
//             console.log(self.seriesTitle + ": " + title);
//         });
//     },
// };

// TESgames.listGames();
/*
The forEach method provides an alternative way to supply the execution context for the callback function. Modify the program from the previous problem to use that technique to produce the proper output:
*/
// const TESgames = {
//     titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
//     seriesTitle: "The Elder Scrolls",
//     listGames: function () {
//         this.titles.forEach(function (title) {
//             console.log(this.seriesTitle + ": " + title);
//         }, TESgames);
//     },
// };

// TESgames.listGames();

/*
Use an arrow function to achieve the same result:
*/
// const TESgames = {
//     titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
//     seriesTitle: "The Elder Scrolls",
//     listGames: function () {
//         this.titles.forEach((title) => {
//             console.log(this.seriesTitle + ": " + title);
//         });
//     },
// };

// TESgames.listGames();

/*
Consider the following code:
What will the value of foo.a be after this code runs?
*/

// let foo = {
//   a: 0,
//   incrementA: function() {
//     function increment() {
//       this.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

/*
The value of `a` is `0` after the program finishes running. On `line 145`, `incrementA` is set to an anonymous function which in its body has the function  `increment` declared. Since `increment is bound to the `global` object, `this.a` refers to the property `a` in the `global` object which returns `undefined ` since it does not exits. When added to `1` the exoression returns `NaN`. Since `a` in `foo` was never accessible from it remains the value of `0`. 
*/
/*
Use one of the methods we learned in this lesson to invoke increment with an explicit context such that foo.a gets incremented with each invocation of incrementA.
*/

// let foo = {
//     a: 0,
//     incrementA: function () {
//         let newFunc = function increment() {
//             this.a += 1;
//         }.bind(this);

//         newFunc();
//     },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a);

// let foo = {
//     a: 0,
//     incrementA: function () {
//         let self = this;
//         function increment() {
//             self.a += 1;
//         }

//         increment();
//     },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a);

// let foo = {
//     a: 0,
//     incrementA: function () {
//         function increment() {
//             this.a += 1;
//         }
//         increment.bind(this)();
//     },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a);
// let foo = {
//     a: 0,
//     incrementA: function () {
//         (() => (this.a += 1))();
//     },
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a);
