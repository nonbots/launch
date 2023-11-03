
// input: number starting from 1 to number, a set of numbers 
// sum of all the multiples of the number in the set that are least than the natural number 
// return num sum 

// 1... 19  find the multiples of 3 or 5 if a set is not given else use given set 

//
class Mult {
static to(num) {
 let obj = new Mult(3,5);
 return obj.to(num);
};
constructor (...set) {
    this.set = set;
}
to(num) {
    let sum = 0;
    for (let multiple = 1; multiple < num; multiple += 1) {
        for(let i = 0; i < this.set.length; i += 1) {
            let div = this.set[i];
            if (multiple % div === 0) {
                sum += multiple;
                break;
            }
        }
    } 
    return sum;
}
}

module.exports = Mult;