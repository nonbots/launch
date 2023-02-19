/*
What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.
*/
let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);
/*
The code logs to the console the number value of `2`. On `line 4`, the `qux` is declared and initialized to a reference to an object. On  `line 5`, `baz` is declared and initialized to a reference of a new object that inherits the properties of `qux`. `baz` now has access to the properties of `qux`. Thus on `line 6`, the  `baz` has access to the property of `foo` which returns a value of 1 and `qux`'s property of `foo` is it's own property. The epression of `1 + 1 ` returns `2` to the console and is logged.  
*/

/*
What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.
/*

*/
