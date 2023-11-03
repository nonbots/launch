/*
What will the following code output? Try to determine the results without running the code.
*/
// function func() {
//     return this;
// }
// let context = func();
// console.log(context);

/*
The console logs the `global` object. On `line 4 - 6`, the `func` function is declared. On `line 5`, the function returns `this`. On `line 7`, `context` is declared and initialized to a reference to the function invocation of `func`.  On `line 8`, `context` invokes the `func` function which returns the object `global` since `this` in this context refers implicitly to the object in the global context.
*/

/*
What will the following code output? Explain the difference, if any, between this output and that of problem 1.
*/
let obj = {
    func: function () {
        return this;
    },
};

let context = obj.func();
console.log(context);
/*
The code logs `obj`. On `line 17`, `obj` is declared and initialized to an invocation of a reference to an object that contains the property `func` set to a reference of an anonymous function that returns `this`. `this` returns the implicit context of the anonymous function which is `obj`.  Unlike the previous problem where the execution context is the `global` object.
*/

/*
What will the following code output?
*/
// message = "Hello from the global scope!";
// function deliverMessage() {
//     console.log(this.message);
// }
// deliverMessage();
// let foo = {
//     message: "Hello from the function scope!",
// };
// foo.deliverMessage = deliverMessage;
// foo.deliverMessage();
/*
The console logs `Hello from the global scope!` on `line 36` and `Hello from the function scope!` on `line 41`. On `line 32`, `message` is added to the `global` object and intialized to the string value. On `line 36`, the function `deliverMessage` is invoked. On `line 3`, `this` implicitly refers to the current execution context which is the `global` object. On `line 37`, `foo` is declared and initialized to a reference to an object which contains the property  `message` set to a string value. On `line 40`, the property `deliverMessage` set a reference of the function `deliverMessage` to `foo`. On `line 41`, `foo`'s property `deliverMessage` is invoked and returns the current execution context of `this` which is the string value of `foo`'s property 'message'. 
*/

/*
Take a look at the following code snippet. Use call to invoke the add method but with foo as execution context. What will this return?
*/
// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//    a: 'abc',
//    b: 'def',
//    add: function() {
//      return this.a + this.b;
//    },
// };
// bar.add.call(foo); // => 3
