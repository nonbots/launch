function makePattern(rowNum, charNum, setCharNum) {
  let result = ""
  for (let i = 1; i <= rowNum; i += 1) {
    result += makeRow(charNum, rowNum) + "\n";
    charNum = setCharNum(charNum);
  } 
  return result;
}
function makeRow(charNum, rowNum) {
  let row = ""
  for (let i = 1; i < charNum; i += 1) {
    row += "*\t";
  }
  row = makeChar2(rowNum, charNum, row);
  return row;
}

function makeChar2(rowNum, charNum, row) {
  for (let j = 1; j <= rowNum - (charNum - 1); j += 1) {
    row += "&\t";
  }
  return row;
}
// 5 - 4 = 1 
// 5 - 3 = 2 
// 5 - 2 = 3
// 5 - 1 = 4 
// 5 - 0 = 5
function desChar(charNum) {
  return charNum -= 1;
}

function incrChar(charNum) {
  return charNum += 1;
}


/*
*
*   * 
*   *   *
*
*/
// console.log(makePattern(5,1,incrChar))

/*
- init spaces to n/2(rounded down)
- iterate n times
  - iterate n/2(rounded down) times

- iterate n times
 - if n less than halve of n (rounded)
  - decrement space 
 - else 
  - increment space 

1 - 2 decrement 
3 - 5 increment 
*/

function makeDiamond(char) {
 let n = char.charCodeAt() - 64;//5
 let letter = "A";
 let mid = n;
 let space = mid; 
 let star = 1; 
 let result = "";
 for (let i = 1; i < n * 2; i += 1) {
  let row = "";
  for (let j = 1; j < space; j += 1) {
    row += "*";
  }
  row += letter;

  if(i > 1 && i < (n * 2) - 1) {
    // console.log("i", i);
    for (let k = 1; k <= star; k += 1) { //1
      row += "*"; 
    }
    row += letter;
  }

  for (let j = 1; j < space; j += 1) {
    row += "*";
  }
  if (i < mid) {
    space -= 1; 
    letter = getNextAlpha(letter);
    if(i > 1 && i < n * 2) {
      star += 2;
    }
  } else {
    space += 1; 
    letter = getPreAlpha(letter);
    if(i > 1 && i < n * 2) {
      star -= 2;
    }
  }
  result += row + "\n";
 }
 return result;
}

function getNextAlpha(letter) {
  let code = letter.charCodeAt() + 1;
  return String.fromCharCode(code);
}

function getPreAlpha(letter) {
  let code = letter.charCodeAt() - 1;
  return String.fromCharCode(code);
}

console.log(makeDiamond("B"));
console.log(makeDiamond("D"));
// console.log(makeDiamond("E"));
// console.log(makeDiamond("A"));
// console.log(makeDiamond("C"));

console.log("MOD", module);
console.log("MOD", )