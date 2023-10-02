    // init total to 0
    // iterate through the string
      // iterate through the pointMap 
        // check if the current array has the current char
          // add the key of value (convert to number) to total
          // break?
      // return total
// uppercase passed in str

class Scrabble {
  constructor(str) {
    if (str === null) {
      this.str = '';
    } else {
      this.str = str.toUpperCase().trim();
    }
  }
  static pointMap = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],	
  4: ["F", "H", "V", "W","Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
  }

  score() {
    return Scrabble.getScore(this.str);
  }

  static score(str) {
    return Scrabble.getScore(str);
  }

   static getScore(str) {
    let score = 0;
    for (let i = 0; i < str.length; i += 1) {
      for (let key in Scrabble.pointMap) {  
        let arr = Scrabble.pointMap[key];
        if (arr.includes(str[i].toUpperCase())){
          score += Number(key);
          break;
        }
      }
    }
    return score;
  }

}
module.exports = Scrabble;