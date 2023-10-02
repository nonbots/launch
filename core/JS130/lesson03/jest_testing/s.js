//input: word (modify to uppercase )
// trim empty spaces both ends
// if null return 0
// return: number (score) for the word


// score methogd returns a number the score
// init sum to 0
// sum up the score for each word
// iterate through the word
// get the score by check if the current char is in the key
// if so get the value and add to sore
// return sum

// get an array of the keys
// iterate through the keys
// check if the the key includes the char
// increment the sum by looking up the value of the key in map
// break
// return sum
class Score {
  static scoreMap = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10
  }
  constructor(word) {
    if (word === null) {
      this.word = "";
    } else {
      this.word = word.trim().toUpperCase();
    }
  }
  score1() {
    let sum = 0;
    this.word.split("").forEach(char => {
      for (let key in Score.scoreMap) {
        if (key.includes(char)) sum += Score.scoreMap[key];
      }
    });
    return sum;
  }
  score() {
    let sum = 0;
    let keys = Object.keys(Score.scoreMap);
    for (let jIdx = 0; jIdx < this.word.length; jIdx += 1) {
      for (let idx = 0; idx < keys.length; idx += 1) {
        if (keys[idx].includes(this.word[jIdx])) {
          sum += Score.scoreMap[keys[idx]];
          break;
        }
      }
    }
    return sum;
  }

  static score(word) {
    let obj = new Score(word);
    return obj.score();
  }
}

module.exports = Score;