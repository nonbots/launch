let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

/*
The console logs `undefined`. Since `this` is used outside a method of the `person` object, it is bounded to the `Gobal` object. Since the string values assigned to  `firstName` and `lastName` properties are part of the`person` object and not the `Global` object, properties `firstName` and `lastName` are undefined. The expression of `undefined + undefinded` returns `NaN`.
this refers to the to the object that contains that method. You can use `this` in a constructor function to refer to properties of the current object. 
*/

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(number => this.name + ' ' + number);
//   },
// };
// console.log(franchise.allMovies());
// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     let context = this; 
//     return [1, 2, 3].map(function(number) {
//       return context.name + ' ' + number;
//     });
//   },
// };
// console.log(franchise.allMovies());

// let franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     },this);
//   },
// };

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};
console.log(franchise.allMovies());

/*
The method `allMovies` returns the string value of `undefined 1`, `undefined 2`, and `undefined 3`. The method consists of the `map` high-order function that passes in a function (callback) as a arugment which causes the function to strip of the execution context which is the object `franchise`. This is now bounded to the `Gobal` object. Since the properties of `name` is not defined in the `Object`. The expression `this.name + ' ' + number returns `undefined 1`, `undefined 2`, and `undefined 3`. To fix this an arrow function can be used since arrow functions `this` value is define by where it is use. In this case, since allMovies execution context is `franchise`, it takes on `franchise` as the execution context as well. 
*/

/*
Binding this refers a call that binds `this` to a specific object when the function or method is called. 
///WHY CAN"T WE USE CALL. requires function to be invoked
*/

function myFilter(array, func, context) {
  let result = [];

  array.forEach(function(value) {
    if (func.call(context, value)) {
      result.push(value);
    }
  });

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
}

console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter)); // returns [5, 6, 9]