
class RN {
    constructor(num) {
      this.num = num;
    }
  static key = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90 ,
   L: 50,
   XL: 40,
   X: 10,
   IX: 9,
   V: 5,
   IV: 4,
   I: 1,
  }
  toRoman() {
    let inputNum = this.num;
    let output = "";
    for(let letter in RN.key){
      let curLetter = letter;
      console.log(curLetter);
      while(inputNum >= RN.key[curLetter]){
        output += curLetter;
        inputNum -= RN.key[curLetter];
      }
    }
    return output;
  }
  }
  
  module.exports = RN;