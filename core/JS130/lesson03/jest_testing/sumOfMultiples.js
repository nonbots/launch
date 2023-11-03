// use of static method to
  // takes in a natural number 
  // set of number are set to default of 3 and 5 

// instantiation of object takes in set of numbers
// use of instance method to
  // takes in natural number 

// init sum to 0 
// iterate starting with the smaller number increment 1 to the natural number - 1
  // if the current number mod any of the number is equal to 0 
    //add the number to sum 
// return sum 
class SumOfMultiples {
  constructor(...nums) {
    this.nums = nums;
  }
  to(natNum) {
    let sum = 0; 
    let min = Math.min(...this.nums);
    for (let num1 = min; num1 < natNum; num1 += 1) {
      if (this.nums.some(num => num1 % num === 0)) sum += num1;
    }
    return sum;
  }
  static to(natNum) {
    return new SumOfMultiples(3, 5).to(natNum);
  }
}

module.exports = SumOfMultiples;