// sum of positive divisors - number that can be evenly divided onto the target number, excluding the number itself - aliquot sum 

// iterate from 1 to one less the orig number 
    // if orig mod current number is 0 
    //15 % 1 = 0  add 1 
    //15 % 2 = 1 not zero 
    //15 % 3 = 0  add 3
    // 15 % 5 // add 5 

// return sum 

// if sum is equal to orig number return perfect number 
// if great than orig number return abundant
//  return  deficient number 


// if pass in number is less than 1 
// throw an error
class P {
    static classify(num) {
        let sum = 0;
        if (num < 1) throw new Error();
        for (let div = 1; div < num; div += 1) {
            if (num % div === 0) sum += div; 
        }
        if (sum === num) return "perfect";
        if (sum > num) return "abundant";
        return "deficient";
    } 

}

module.exports = P;