/*
What method can we use to bind a function permanently to a particular execution context?

bind
*/

/*
What will the following code log to the console?
*/
// let obj = {
//     message: "JavaScript",
// };
// function foo() {
//     console.log(this.message);
// }
// foo.bind(obj);

/*
The code logs nothing. On `line 10`, `obj` is declared and initialized to a reference to an object containing the property `message` set to a string value of `JavaScript`. On `line 13`, the function `foo` is declared which calls the `console.log` with `this.message` passed in as a argument. On `line 16`, `foo` calls the `bind` method which returns a new function with `obj` permanently set as the current value of `this`. `obj` is now the execution context of `foo`. Thus `this.message` refers to `obj`'s propetry `message` which is a string value of `"JavaScript"`.
*/

/*
What will the following code output?
*/
// let obj = {
//     a: 2,
//     b: 3,
// };
// function foo() {
//     return this.a + this.b;
// }
// let bar = foo.bind(obj);
// console.log(foo());
// console.log(bar());
/*
The code logs `NaN` on `line 33` and the value of `5` on `line 34`. The code demonstrates the implicit execution context and explicit execution context. On `line 25 - 28`, `obj` is declared and initialized to a reference of an object with two properties `a` and `b`. On `line 29 - 31`, the `foo` function is declared and returns `this.a + this.b`. Since `foo` is invoked on `line 33`, within the global scope, `this.a` and this.b` implicitly refers to the `global` object which has a value of `undefined` since property `a` does not exist in the `global` object. `undefined + undefinded` returns `NaN. On `line 32`, `bar` is declared and initialized to a reference of a function returned when `foo` calls `bind`. The method returns a function that permanently binds the pass in obj , `obj` as the current value of `this` or as the execution context of `foo`. 
*/

/*
What will the code below log to the console?
*/
// let positivity = {
//     message: "JavaScript makes sense!",
// };
// let negativity = {
//     message: "JavaScript makes no sense!",
// };
// function foo() {
//     console.log(this.message);
// }
// let bar = foo.bind(positivity);
// negativity.logMessage = bar;
// negativity.logMessage();
/*
The code logs `"JavaScript makes sense!"`. On `line 51`, `bar` is declared and initialized to a reference of a function returned by `bind`. `foo` calls `bind` which takes a referenced object `positivity` as an argument. It returns a new function that is permanently binded to `positivity`. Now `bar` execution context and `this` value is `positivity. On `line 52`, the property of `logMessage` is added to `negtivity` and set to the `bar`. On `line 53`, `negativity` 's property 'logMessage` is invoked logs the the console `'JavaScript makes sense!'`, `bar` execution context was explicitly set to `positivity`. 
*/

/*
What will the code below output?
*/
let obj = {
    a: "Amazebulous!",
};
let otherObj = {
    a: "That's not a real word!",
};
function foo() {
    console.log(this.a);
}
let bar = foo.bind(obj);
bar.call(otherObj);
/*
The code logs `"Amazebulous!"`. On `line 70`, `bar` is declared and initialized to a reference of the return function from `bind`. `foo` calls `bind` which takes a reference to `obj`. The method return a new function that is explicitly and permanently bound to `obj`. `obj` is now the current value `this` and `bar`'s execution context. On `line 71`, the console.logs `"Amazebulous!"`since `bind` permanently bounds `bar` to `obj`. When 'bar` calls `call` tries to set `otherObj` as the new execution context it is unable to do so. 
*/
