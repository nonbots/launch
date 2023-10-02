// 'use strict';
// function bind (func, context, ...args) {
//   return function() {
//     // console.log("OTHERS", others);
//     return func.apply(context,[...args]);
//   }
// }
// let obj = {works: "works"};
// let newFunc = function (that) {
//   // console.log(that, "IN FUNC");
//   console.log(this, that);
// }

// // let newNewFunc = newFunc.bind(obj, "that", "there", "here");
// let newNewFunc = bind(newFunc, obj, "thereof", "there", "here");
// // console.log(newNewFunc);
// newNewFunc();

// function bind (func, context, ...moreArgs) {
//   return function(...args) {
//     let moreArgs1 = moreArgs;
//     console.log("MORARGS1", moreArgs1);
//     let args2 = args;
//     console.log("ARGS2", args2);
//     let fullArgs = [...moreArgs1, ...args2];
//     console.log(fullArgs, "FULLARGS");
//     return func.apply(context,fullArgs);
//   }
// }
// let obj = {works: "works"};
// let newFunc = function (...that) {
//   console.log(that, "IN FUNC");
//   console.log(this, that);
// }

// // let newNewFunc = newFunc.bind(obj, "that", "there", "here");
// let newNewFunc = bind(newFunc, obj, "me", "she");
// // console.log(newNewFunc);
// newNewFunc("here", "there");

// function newStack () {
//   let stack = [];
//   let index = 0;
//   return {
//     push(val) {
//       stack[index] = val;
//       index += 1;
//     }, 
//     pop() {
//       if (stack.length === 0) { 
//         console.log("stack is empty");
//     } else {
//       stack.length -= 1;
//       index -= 1; 
//     }
//     },
//     printStack() {
//       console.log("CURRENT STACK");
//       if (stack.length === 0) {
//         console.log("stack is empty")
//       } else {
       
//         stack.forEach(item => console.log(item));
//       }
   
//     }
//   }
// }

// let stack = newStack();
// stack.printStack();
// stack.push(1);
// stack.printStack();
// stack.push(2);
// stack.printStack();
// stack.pop();
// stack.printStack();
// stack.pop();
// stack.printStack();
// stack.pop();

// function delegate(context, methodName, ...args) {
//   return function(...moreArgs) {
//     context[methodName].apply(context, [...args, ...moreArgs]);
//   }
// }

// let foo = {
//   name: 'test',
//   bar: function(greeting) {
//     console.log(greeting + ' ' + this.name);
//   },
// };

// let baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// console.log(baz.qux);
// baz.qux();   // logs 'hello test';

// foo.bar = function() { console.log('changed'); };

// baz.qux();          // logs 'changed'

// const createAccount = function(){ 
//   function generateName() {
//     let name = []
//     for (let i  = 0; i < 16; i += 1) {
//       let letter = String.fromCharCode(Math.floor((Math.random() * 26) + 97)); 
//       name.push(letter);
//     }
//     return name.join("");
//   }
// return function createObj () {
//   let PEmail; 
//   let PPassword;
//   let PFirstName;
//   let PLastName;
  
//   return {
//   init(email, password, firstName, lastName) {
//     PEmail = email;

//     PPassword = password;
//     PFirstName = firstName; 
//     PLastName = lastName;
//     // console.log("SET PASSWORD:", PPassword);
//     console.log("SET EMAIL:", PEmail, PFirstName, PLastName, PPassword);
//     this.displayName = generateName();
//     return this;
//   }, 

//   reanonymize(password) {
//     if (PPassword === password) {
//       this.displayName = generateName();
//       return true
//     } else {
//       return "Invalid Password";
//     }
//   }, 
//   resetPassword(password, newPassword){
//     if(PPassword === password) {
//       PPassword = newPassword;
//       return true;
//     } else {
//       return "Invalid Password";
//     }
//   }, 
//   getFirstName(password) {
//     console.log("SAVED PASSWORD:", PPassword, password);
//     if (PPassword === password) {
//       // console.log("HERE:", PFirstName)
//       return PFirstName;
//     } else {
//       return "Invalid Password";
//     }
//   },
//   getLastName(password) {
//     if (PPassword === password) {
//       return PLastName;
//     } else {
//       return "Invalid Password";
//     }
//   }, 
//   getEmail(password) {
//     if (PPassword === password) {
//       return PEmail;
//     } else {
//       return "Invalid Password";
//     }
//   }, 
// }
//  }
// }
// let obj1 = createAccount()();

// let fooBar = Object.create(obj1).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(obj1);
// // console.log("FOOBAR", fooBar);
// console.log(fooBar.getFirstName);                     // returns the firstName function
// console.log(fooBar.getEmail);                         // returns the email function
// console.log(fooBar.getFirstName('123456'));           // logs 'foo'
// console.log(fooBar.getFirstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// // console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// // console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

// let obj2 = createAccount()();

// let bazQux = Object.create(obj2).init('baz@qux.com', '123456', 'baz', 'qux');

// // Note that the following two lines of code are correct as written.
// // There are no mistakes. We are attempting to demonstrate that the
// // code does not work as might be intended.
// console.log( "TEST HERE", fooBar.getFirstName('123456'));           // logs 'baz' but should log foo.
// console.log(fooBar.getEmail('123456'));   
// console.log( "TEST HERE", bazQux.getFirstName('123456'));           // logs 'baz' but should log foo.
// console.log(bazQux.getEmail('123456'));       

// function sum(...values) {
//   // values = Array.prototype.slice.call(arguments);

//   return values.reduce(function(a, b) {
//     return a + b;
//   });
// }

// console.log(sum(1, 4, 5, 6)); // 16

// function formatName(firstName, middleName, lastName) {
//   return `${lastName}, ${firstName} ${middleName[0]}.`;
// }

// fullName = ['James', 'Tiberius', 'Kirk'];

// console.log(formatName(...fullName));
// logs: Kirk, James T.

// var foo = 10;

// function bar() {
//   if (foo > 20) {
//     var foo = 50;
//   }

//   console.log(foo);
//   foo += 10;
// }

// bar();
// bar();
// bar();

// console.log(foo());

// function foo() {
//   console.log('Waiting for bar!');
// }

// function foo() {
//   console.log(foo);
//   function bar() {
//     console.log('bar again');
//   }

//   bar();

//   function bar() {
//     console.log('bar again and again');
//   }
// }

// let func = function () {console.log("is working")};
// func.call(null);

// 
// let left = 1;
// let right = 2; 
// // console.log(((left, right) => left + right)(3, 5));

// console.log(return function() {
//   return left + right;
// }());

// let obj = { bar: 1, qux: 2, baz: 3 };
// let { bar, qux, baz } = obj;
// console.log(bar);
// console.log(qux);
// console.log(baz);

// throw new Error("This is an error!");

// console.log(foo());

// function foo() {
//   console.log('Waiting for bar!');
// }

// function foo() {
//   console.log(foo);
//   function bar() {
//     console.log('bar again');
//   }

//   bar();

//   function bar() {
//     console.log('bar again and again');
//   }
// }

// foo in global (reassigned)
  // bar in foo function local scope (reassigned)

// invoke foo
  //logs out foo function definition
  // invokes bar 
    //logs out 'bar again and again
    // console.log returns undefined


// var foo = 10;

// function bar() {
//   if (foo > 20) {
//     var foo = 50;
//   }

//   console.log(foo);
//   foo += 10;
// }

// bar();
// bar();
// bar();

// foo is undefined in global
// function bar in global
// foo is undefined in local function bar 

// foo is 10 

// undefined > 20 is false 
// logs foo which is undefined 
// foo in local is NaN
// discards execution done in the function execution

// go back to steps 328 2 more times

// function foo() {
//   if (true) {
//      var bar = function bar() {
//       console.log("bar");
//     }
//   } else {
//      var qux = function qux() {
//       console.log("qux");
//     }
//   }

//   console.log(bar);
//   bar();

//   console.log(qux);
//   qux();
// }
// foo();

// function Child(age) {
//   this.age = age;
// };

// Child.prototype.setAge = function(newAge) {
//   age = newAge;
// }

// let leigh = new Child(5);
// leigh.setAge(6);
// console.log(leigh.age); // 5; expected 6
// function getValue() {
//   console.log(age);
// }

// getValue();
// 'use strict';
// console.log(0.12379);     // So is this
// console.log(01);   // 1234567
// console.log(01.12345678);   // 1234567
// 'use strict';
// let works = {works: "works"};
// function func () {
//   console.log(works);
// }
// func();
// delete works.works;
// delete works;
// func();

// console.log(works);
// let newWorks = works;
// let obj = {
//   works: works 
// }
// delete obj.works; 
// console.log(obj);
// console.log(obj.works);
// console.log(newWorks);
// console.log(let);
// console.log(01234567);   // 1234567

// let a = "works";
// let b = "worksWorks";
// function func (a, a ) {
//  console.log(a);
// }

// func("a", "c"); 

// "use strict";

// function foo() {
//   // console.log(bar);
//   bar = 3.1415; // ReferenceError: bar is not defined
// }

// foo();
// console.log(bar);
// console.log(Array);
// console.log(this);
// function q()
// function f(foo, values) {
//   with (foo) {
//     console.log(values);
//   }
// }
// let obj = { msg: "msg", foo: "foo", bar: "bar", qux :"qux" };
// let obj = ["msg", "foo", "bar", "qux"];
// function xyzzy(msg, foo, bar, qux) {
//   console.log(msg);
//   return {
//     foo: foo,
//     bar: bar,
//     qux: qux,
//     log: function() {
//       console.log(msg);
//     },
//   };
// }
// let obj1 = xyzzy(...obj);
// console.log(obj1.foo);

// let obj = { bars: 1, qux: 2, baz: 3 };
// let { bar, qux, baz } = obj;
// console.log(bar)
// function div(first, second) {
//   if (second === 0) {
//     throw new TypeError("error");
//   }

//   return first / second;
// }

// let result = div(1, 0); // Error: Divide by zero!
// console.log(result);    // not run

// function func () {
//   return left + right;
// }

// console.log(func(3,5));

let array = [1,2,3,4]
let [ ...newArray ] = array;
console.log(newArray)