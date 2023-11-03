// isValid => returns true if triangle is a valid else false 
// isNotValid => returns true if not valid => catch an expectation 
  // if any number is equal or less than 0 
  // check if first number in array is 0
  // 2,7, 1 => invalid
  //sort the numbers first, add the first two, check if sum is greater than third number
  // put the sides into an array and sort 


class Tri {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3].sort((a,b) => a - b);
    if (this.sides[0] <= 0 || (this.sides[0] + this.sides[1] <= this.sides[2])) throw new Error();
  }
  kind(){
   if (this.sides.every(side => side === this.sides[0])) return 'equilateral'; 
   if (this.sides[0] === this.sides[1] || this.sides[1] === this.sides[2]) return 'isosceles';
   return `scalene`;
  }
}

module.exports = Tri;


console.log("this works");
// test
// check for what is is being called:
// the constructor 
// a method
// method chaining which involves the previous method returning an oject of the new instance to call its methods.