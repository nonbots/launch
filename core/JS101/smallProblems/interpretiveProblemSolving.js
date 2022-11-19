/*
Problem 
- switch from 1 to count
- every switch is connected to one light initially off
- every row of switches is toggled on
- then switches 2, 4, 6 (even) switches is toggled off
- then switches of multiples of three is toggled 

- switches are toggled by on multiples which is increment on each pass

- input: total number of switches 
- output: reference to an array of switches that are on

Example

Data Structure
initialize results an empty array [] to store all the on switch values
initialize states an array of falses for all switches

Algorithm

initialize initStates to return referenced array of getInitialStates
calls toggleSwitches (initStates); 
return the return reference arry of getOnSwitches


HELPERS
- getInitialStates (switches)
-initialize states an array of falses for all switches
- return referenced array

- toggleSwitches (initialStates)
- iterate through array count times 
  - iterate through each switch 
    - if switch number is a multiple of count toggle switch 2 % 1, 2 % 2, 2 % 3
      - assign toggle state to the state array, if false assign true if true assign false

- getOnSwitches(states)
- iterate through the states array
  - if state is true 
    - push the switch value to result
- return result

*/

// function getOnSwitches(states) {
//   let result = [];
//   for (let stateIdx = 0; stateIdx < states.length; stateIdx++) {
//     if (states[stateIdx]) {
//       result.push(stateIdx + 1)
//     }
//   }
//   return result;
// }

// function toggleSwitches(initStates) {
// for (let count = 0; count < initStates.length; count++) {
//     initStates = initStates.map((state, idx) => {
//       if ((idx + 1) % (count + 1) === 0) {
//         return (state ? false :true);
//         }
//         return state;
//       });
//   }
//   return initStates;  
// }

// function getInitialStates(switches) {
//   const arr = [];
//   while (switches > 0) {
//     arr.push(false);
//     switches -= 1;
//   }
//   return arr;
// }

// function lightsOn(switches) {
// const initStates = getInitialStates(switches);
// const states = toggleSwitches(initStates);
// return getOnSwitches(states);
// }


// console.log(lightsOn(5));        // [1, 4]
// // Detailed result of each round for `5` lights
// // Round 1: all lights are on
// // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

// console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


/*
Problem:
create a four point diamond

input: number of lines (always be odd)
output: string of number of lines in a diamond shape

Example: 
1, 3
1

--*
-***
*****
-***
--*

1, 3, 5 increment by 2 starting with one 
3, 1 decrement by 2 starting with one

2 1 0 

0, 1 - 1

-*
***
-*

1, 3 - 2

2, 5 - 3 

3, 7 - 4 

4, 9 - 5

get the number of spaces 
- decrement number by 2 until number is greater than 1 
  - increment count 

- iterate to the next row 
  - init string
  - iterate number of spaces decrement by 2
    - reassign string with empty space
  - log the string

*/
// function printTop(rows) {
//   let star = 1;
//   for (let row = rows; row > 0; row--) {
//     let string = '';
//     for (let space = row; space > 0; space--) {
//       string += ' ';
//     }
//     for (let starNum = 1; starNum <= star; starNum++) {
//       string += '*';
//     }
//     star += 2;
//     console.log(string);
//   }
// }

// function diamond(totalRows) {
//   let rows = getSpaces(totalRows);
//   printTop(rows); 
//   printBottom(rows, totalRows);
// }

// function printBottom(rows, totalRows) {
//   let star = totalRows;
//   for (let row = 0; row <= rows; row++) {
//     let string = '';
//     for (let space = 0; space < row; space++) {
//       string += ' ';
//     }
//     for (let starNum = 1; starNum <= star; starNum++) {
//       string += '*';
//     }
//     star -= 2;
//     console.log(string);
//   }
// }

// function getSpaces(num) {
//   let spaces = 0;
//   while (num > 1) {
//     num -= 2;
//     spaces += 1;
//   }
//   return spaces;
// }
// console.log(diamond(9));

// console.log(diamond(1));
// // logs
// //*
// console.log(diamond(3));
// // logs
// // *
// //***
// // *

/*
Problem: 
Is it possible to spell the passed in string with the block where only one character for be use. 
Case-insensitive

Example:
BATCH B, A, T, H 

BUTCH B:0, H:U, G:T, C:P., H:U false

jest J:W, R:E, F:S, G:T

Data structure: 

object - store all the blocks as key starting at a value of 0

{B:0: 1} value is increment to 
{B:0: 2} return false

Algor: 

- iterate through each character in the string 
  - increment the value of the at key 
  - if the value is greater than 2 
    - return false
- return true;

*/ 



// function isBlockWord(inputString) {
//   const blocks = {
// bo: 0,  
// xk: 0, 
// dq: 0,
// cp: 0,
// na: 0,
// gt: 0,
// re: 0,
// fs: 0,
// jw: 0,
// hu: 0,
// vi: 0,
// ly: 0,
// zm: 0
// }
//   let keys = Object.keys(blocks);
//   for (let charIdx = 0; charIdx < inputString.length; charIdx++) {
//     let key  = keys.filter(key => key.includes(inputString[charIdx].toLowerCase())); 
//     blocks[key[0]] += 1;
//   //console.log(charIdx, blocks);
//     if (blocks[key[0]] > 1) return false;
//   }

//   return true;
// }

// console.log(isBlockWord('BATCH'));      // true
// console.log(isBlockWord('BUTCH'));      // false
// console.log(isBlockWord('jest'));       // true
// console.log(isBlockWord('floW'));       // true
// console.log(isBlockWord('APPLE'));      // false
// console.log(isBlockWord('apple'));      // false
// console.log(isBlockWord('apPLE'));      // false
// console.log(isBlockWord('Box'));        // false

// star(7);
// logs
// *  *  *  2 spaces  0 init space
//  * * *   1 space   1 init space
//   ***    0 spaces  2 init spaces
// *******
//   ***
//  * * *
// *  *  *

/*
- iterate through number of half - 2 times of num input
  - init initSpaces to 0
  - init spaces to half - 3
  - iterate through number of stars (half - 2)
    - append star
    - the number of spaces 
  - increment initSpaces by 1 
  - decrement spaces by 1 
*/

function printTop(num) {
  let initSpaces = 0;
  let spaces = ((num - 1) / 2) - 1; 

  for (let rows = 0; rows < ((num - 1) / 2) ; rows++) {
      let string = '';
       for (let inSpaces = 0 ; inSpaces <= initSpaces; inSpaces++) {
      string += ' ';
    }
    for (let seg = 0; seg < 3; seg++) {
   
    string += '*'
    for (let space = spaces; space > 0; space--) {
      string += ' '
    }
    }
    console.log(string);
    initSpaces += 1; 
    spaces -= 1;
  }
}

function printBottom(num) {
    let initSpaces = ((num - 1) / 2) - 1;
  let spaces = 0; 

  for (let rows = 0; rows < ((num - 1) / 2) ; rows++) {
      let string = '';
       for (let inSpaces = initSpaces; inSpaces > 0; inSpaces--) {
      string += ' ';
    }
    for (let seg = 0; seg < 3; seg++) {
   
    string += '*'
    for (let space = 0; space <= spaces; space++) {
      string += ' '
    }
    }
    console.log(string);
    initSpaces -= 1; 
    spaces += 1;
  }
}

function star(num) {
printTop(num);
let string = ' ';
for (let idx = 0; idx < num; idx++) {
  string += '*';
}
console.log(string);
printBottom(num);
}

star(7);

// star(9);