// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:
// init pairs to empty array
// get all possible pairs
// iterate through array
// add current and next number to pairs
// init smallest to max val
// get difference of pairs
// if smaller than current diff
// reassign to smallest
// reuturn pair

class Closest {
  constructor(nums) {
    this.nums = nums;
  }

  getPair() {
    let allPairs = this.getAllPairs(this.nums);
    return allPairs.sort((pair1, pair2) => {
      let diff1 = Math.abs(pair1[0] - pair1[1]);
      let diff2 = Math.abs(pair2[0] - pair2[1]);
      return diff1 - diff2;
    })[0];
  }
  getAllPairs(nums) {
    let allPairs = [];
    for (let idx = 0; idx < nums.length - 1; idx += 1) {
      for (let jIdx = idx + 1; jIdx < nums.length; jIdx += 1) {
        allPairs.push([nums[idx], nums[jIdx]]);
      }
    }
    return allPairs;
  }
}

module.exports = Closest;
// console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
// console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
// console.log(closestNumbers([12, 7, 17]));             // [12, 7]