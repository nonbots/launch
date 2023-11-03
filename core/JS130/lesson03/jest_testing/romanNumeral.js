// test numbers to 3000
// start from left to right 
 // 1 => I 
 // 4 => IV
 // 5 => V 
 // 9 => IX
 // 10 => X
 // 40 => XL
 // 50 => L 
 // 100 => C 
 // 400 => CD
 // 500 => D
 // 900 => CM
 // 1000 => M
// get an array of values sort in descending order in value

// while current value is greater than 0  
  //if current value in second array is greater or equal to current value in array 1 add the letter to string associated with value and decrement current value 
  // 

// return string
 // 1024 => [1000, 20, 4] MXXIV
  // 1024 => [1000, 20, 6] MXXIV
 // get the place values 


class RomanNumeral{
  constructor(num) {
    this.num = num;
  }
  static romanNumMap = {
    I: 1, 
    IV: 4, 
    V: 5,  
    IX: 9, 
    X: 10,
    XL: 40,
    L: 50,  
    XC: 90, 
    C: 100, 
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  }
  toRoman() {
    let result = "";
    let placeVals = this.getPlaceVals();
    let vals = Object.entries(RomanNumeral.romanNumMap).sort((a,b) => b[1] - a[1]); //[]
    console.log(vals);
    for (let i = 0; i < placeVals.length; i += 1) {
      let currentVal = placeVals[i];
      for (let j = 0; j <vals.length; j += 1) {
        let curVal2 = vals[j][1];
        while (currentVal >= curVal2) {
          console.log(currentVal, curVal2);
          result += vals[j][0];
          currentVal -= curVal2;
        }
    }
    }
    return result;
  }
  getPlaceVals() {
    let placeVals = [];
    let num = this.num;
    let power = 0; 
    while (num > 0) {
      let place = 10**power;
      placeVals.unshift((num % 10) * place); //[20, 2]
      num = Math.floor(num / 10); 
      power += 1; 
    }
    return placeVals;
  }
}

module.exports = RomanNumeral;