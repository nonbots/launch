// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

// init result to an empty array
// iterate through the array to get current number
// init count to 0
// iterat through the array again to get the other number
// increment the count by 1 if other number is less than current number
// return result
class Smaller {
  constructor(nums) {
    this.nums = nums;
  }
  getNums() {
    let result = [];
    for (let idx = 0; idx < this.nums.length; idx += 1) {
      let lessNums = [];
      let num1 = this.nums[idx];
      for (let jIdx = 0; jIdx < this.nums.length; jIdx += 1) {
        let num2 = this.nums[jIdx];
        if (num2 < num1 && (!lessNums.includes(num2))) lessNums.push(num2);
      }
      result.push(lessNums.length);
    }
    return result;
  }
}

module.exports = Smaller;

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]