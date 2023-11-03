/*
instance takes in string of digits
returns all possible consecutive number series of a specific length in subarray in an array 

if length is string is longer than lenght of subset throw an error

*/

class Series {
 constructor(str) {
  this.str = str;
 }

 slices(subLength) {
  if (this.str.length < subLength) throw new Error();
  let result = [];
  // iterate through the string 
    // grab the string from starting index to starting index plus subLength 
    // convert string to an array of strings, transform each string to numbers, add to result
  for (let i = 0; i <= this.str.length - subLength; i += 1) {
    let sub = this.str.slice(i, i + subLength);
    result.push(sub.split('').map(str => Number(str)));
  }
  return result;
 }
}

module.exports = Series;