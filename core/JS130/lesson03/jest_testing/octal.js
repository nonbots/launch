/*
convert octal to decimal
input: string
output: number in decimal

class creates a new object  with string input of octal
object calls decimal and return decimal value

invalids :
   strings
   digit not between 0 and 7 

*/

class Octal {
 constructor(str) {
  this.str = str;
 }
 toDecimal() {
  if (this.str.match(/[^0-7]/)) return 0;
  let power = 0;
  let sum = 0; 
  for (let i = this.str.length - 1; i >= 0; i -= 1) {
    sum += Number(this.str[i]) * (8**power);
    power += 1;
  }
  return sum;
 }
}

module.exports = Octal;