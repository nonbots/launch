'use strict';
const set1 = require('./custom-set.js');

console.log(module);

function logThis() {
  return this;
}
// logThis();
console.log(undefined === logThis());
console.log(globalThis === this);
console.log(exports === this);