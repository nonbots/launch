//perfect numbers have a Aliquot sum equal to original number
// abundant numbers have aliquot sum greater than original number 
// deficient numbers have aliquot sum less than original number

// aliquot sum = comparison of the number and the sum of its positive divisors exclusion the number itself 
/*
10 
 remainder? no, 10 / 1 = 10 
remainder? no, 10 / 2 = 5
remainder? yes, 10 / 3 = 1 
remainder? yes,  / 4 
rmainder? no, 10/5 = 2 
remainder? ye / 6
remainder? yes /7
remiander? yes /8 
remiander? yes /9 

init sum to 0

iterate from 2 to the number  to number 
  if number mod current number has no remainder 
    add the number divided by current number
return sum
*/
// if number is negative throw an error

class PerfectNumber {

 static classify(num) {
  if (num < 0 ) throw new Error();
  let sum = PerfectNumber.getSum(num);
  console.log(sum);
  if (sum === num) {
    return 'perfect';
  } else if (sum < num) {
    return 'deficient';
  } else {
    return 'abundant';
  }
 }
 static getSum(num) {
  let sum = 0;
  for (let curNum = 2; curNum <= num; curNum += 1 ) {
    if (num % curNum === 0){
      sum += (num / curNum);
    }
  }
  return sum;
 }
}

module.exports = PerfectNumber;