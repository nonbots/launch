
class Triangle {
 constructor(s1, s2, s3) {
  this.sides = [s1, s2, s3].sort((a,b) => a - b); 
  if (this.isInvalid()) {
    throw new Error();
  }
 }
  kind() {
    if (this.isEquilateral()) return "equilateral";
    if(this.isIsosceles()) return "isosceles";
    return "scalene";

  }
  isEquilateral() {
    return this.sides.every(side => side === this.sides[0]);
  }
  isIsosceles() {
    return (this.sides[0] === this.sides[1]) || (this.sides[1] === this.sides[2]);
  }
  isInvalid() {
    return this.isSomeLessThanEqualZero() || this.isSumLengthInvalid();
  }
  isSomeLessThanEqualZero() {
    return this.sides[0] <= 0;
  }

  isSumLengthInvalid() {
    return (this.sides[0] + this.sides[1]) <= this.sides[2];
  }

}

module.exports = Triangle

