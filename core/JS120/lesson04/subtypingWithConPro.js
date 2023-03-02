/*
Consider the following code:
*/
function Greeting() {}
Greeting.prototype.greet = function (message) {
    console.log(message);
};

function Hello() {}
Hello.prototype = Object.create(Greeting.prototype);
Hello.prototype.hi = function () {
    this.greet("Hello!");
};

function Goodbye() {}
Goodbye.prototype = Object.create(Greeting.prototype);
Goodbye.prototype.bye = function () {
    this.greet("Goodbye");
};

/*
What happens in each of the following cases? Try to answer without running the code.
*/
// let hello = new Hello();
// hello.hi();
/*
The console logs `"Hello!"`. This is because `hi` is a method on `Hello`'s prototype property and the `hello` instance delegates the method call to the protoype `Hello`. ???
*/

// let hello = new Hello();
// hello.bye();
//logs a TypeError, the method is not found in the protoype chain

// let hello = new Hello();
// hello.greet();
//logs undefined, since `great message` exist in the `Greeting` prototype but `message` is implicitly initialized to `undefined`.

// let hello = new Hello();
// hello.greet('Goodbye');
//logs `"Goodbye"`

// Hello.hi();
// This raises a `TypeError`. The`hi` method is defined on the `Hello.prototype`, not `Hello` constructor. Thus onley instances of `Hello` haved access to `hi`.

// Hello.prototype.hi();
// console.log(typeof Hello);
