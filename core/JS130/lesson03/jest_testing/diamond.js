// static make Diamond method   
  // input: letter (uppercase)
  // output: string of the diamond

// the char alpha position represent the amount of spaces  midpoint 
// midpoint representing starting spaces
// iterate through each row (char position times 2 - 1 times)

  // init space to char position -1 
  // iterate to add space space times
  // decrement spaces 
  // add char 

  // if space equals to 
  // init 

  class Diamond {
    static makeDiamond(letter){
      let mid = letter.charCodeAt() - 64;
      let numRow = (mid * 2) - 1; 
      let space = mid - 1;
      let midSpace = 1; 
      let char = "A";
      let result = "";
      for (let curRow = 1; curRow <= numRow; curRow += 1) {
        let row = "";
        row = Diamond.makeSpaces(row, space);
        row += char;
        if(Diamond.isBtwSecondFirstLastRows (curRow, numRow)) {
          row = Diamond.makeSpaces(row, midSpace);
          row += char;
        }
        row = Diamond.makeSpaces(row, space);
        result += row + "\n";
         
        if (curRow < mid) {
          space -= 1;
          char = Diamond.nextChar(char);
          if (Diamond.isBtwSecondFirstLastRows(curRow, numRow)) {
            midSpace += 2;
          }
        } else {
          space += 1;
          char = Diamond.preChar(char);
          if (Diamond.isBtwSecondFirstLastRows(curRow, numRow)) {
            midSpace -= 2;
          }
        }
    }
    return result;
    }
    
    static makeSpaces(row, space) {
      for (let i = 1; i <= space; i += 1) {
        row += " ";
      }
      return row;
    }
    static nextChar(char) {
      let code = char.charCodeAt() + 1; 
      console.log("CODE", code);
      return String.fromCharCode(code);
    }
    static preChar(char) {
      let code = char.charCodeAt() - 1; 
      return String.fromCharCode(code);
    }
    static isBtwSecondFirstLastRows (curRow, numRow) {
      return curRow > 1 && curRow < numRow;
    }
  }
module.exports = Diamond;