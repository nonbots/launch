/*
What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.
*/
// let qux = { foo: 1 };
// let baz = Object.create(qux);
// console.log(baz.foo + qux.foo);
/*
The code logs to the console the number value of `2`. On `line 4`, the `qux` is declared and initialized to a reference to an object. On  `line 5`, `baz` is declared and initialized to a reference of a new object that inherits the properties of `qux`. `baz` now has access to the properties of `qux`. Thus on `line 6`, the  `baz` has access to the property of `foo` which returns a value of 1 and `qux`'s property of `foo` is it's own property. The epression of `1 + 1 ` returns `2` to the console and is logged.  
*/

/*
What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.
*/
// let qux = { foo: 1 };
// let baz = Object.create(qux);
// baz.foo = 2;
// console.log(baz.foo + qux.foo);
/*
The console logs the value of `3`. On `line 14`, `qux` is declared and initialized to the reference of the object `{foo: 1}`. On `line 15`, `baz` is declared and initialized to a reference to an object that now inherits the properties of `qux`. On `line 16`, the property `foo` of `baz` is assigned the value of `2`. Since the initialization is to `foo`'s own property it does not change `foo`'s inherited property of `foo` of `1` from its prototype `qux`. The console returns the summation of `baz`'s `foo` property, `1` and `qux`'s `foo` property, `2` which is `3`. 
*/

/*
What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.
*/

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// qux.foo = 2;
// console.log(baz.foo + qux.foo);

/*
The console logs the value of `4`. On `line 26`, `qux` is declared and initialized to the reference of the object, `{foo: 1}`. On `line 27`, `baz` is declared and initialized to the reference of a new object that inherits the properties of `qux`. On `line 28`, the `qux`'s property `foo` is reassigned the value of `2`. Since the `baz`'s `foo` property is accessed through `qux`, on `line 29` it returns the value of `2` and `qux`'s own property `foo` returns `2`. The console logs the summation value of `4`.
*/

/*
As we saw in problem 2, the following code creates a new property in the baz object instead of assigning the property in the prototype object.
Write a function that searches the prototype chain of an object for a given property and assigns it a new value. If the property does not exist in any of the prototype objects, the function should do nothing. The following code should work as shown:
*/
/*
fooC => fooB => fooA  
start a fooC then move up the prototype chain
use the hasOwnProperty to check if the property is in the object 
if so reassign 
else
continue up the chain by getting the getting the prototypeof 

init current object to fooA
while the current object does not have constructor as property
   if the current object has a the passed in a property
    reassign the value at that propery to the third pass in value
    break
*/
// function assignProperty(obj, key, value) {
//     let curObj = obj;
//     while (curObj !== null) {
//         console.log("here", curObj);
//         if (curObj.hasOwnProperty(key)) {
//             curObj[key] = value;
//             break;
//         }
//         curObj = Object.getPrototypeOf(curObj);
//     }
// }
// let fooA = { bar: 1 };
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

// console.log("D", Object.getPrototypeOf(Object.prototype));
// // console.log(Object.getPrototypeOf(fooB));

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false

/*
Consider the following two loops:
If foo is an arbitrary object, will these loops always log the same results to the console? Explain why they do or do not. If they don't always log the same information, show an example of when the results differ.
*/
// let bar = { a: 1, b: 2 };
// let foo = Object.create(bar);
// foo.a = 3;
// foo.c = 4;

// for (let property in foo) {
//     console.log(`${property}: ${foo[property]}`);
// }
// Object.keys(foo).forEach((property) => {
//     console.log(`${property}: ${foo[property]}`);
// });

/*
How do you create an object that doesn't have a prototype? How can you determine whether an object has a prototype?
*/

// console.log("KEYS", Object.keys(foo));
/*
These loop will not always log the same result to the console. The first example uses a `for/in` loop which will log all enumerable properties of the object  The second example will log only enumerable properties that are own by the th object since the `Object.keys` method returns a reference to a new array with only enumerable properties owned by the objectwhich when the values are passed to the `forEach` method will only log the key values and values of that those key in `foo`. 

let bar = { a: 1, b: 2 };
let foo = Object.create(bar);
foo.a = 3;
foo.c = 4;

a: 3        // from foo
c: 4        // from foo
b: 2        // from bar

a: 3        // from foo
c: 4        // from foo
*/
/*
How do you create an object that doesn't have a prototype? How can you determine whether an object has a prototype?

You can create a object that does not have a prototype by using Object.create(null). You can use the Object.getPrototypeOf(obj) to determine if there is a prototype. This should return null.


*/
