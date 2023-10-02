// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.
/*
input: string
output: char (occurs least often in the string, 
    return first occurrence if tie)
- chars are case - insensitive
- spaces count as chars
*/

// get occurrence
// lowercase the string
// iterate through the string
    // if char does not exist in obj
        // set char to value of 1
    // else
        // increment by 1

// get the pairs
    // sort the pairs base on second value 
        // return the first pair's firs value
// Examples:
class LCC {
    constructor(str) {
        this.str = str;
    }

    getLlc() {
        let occur = this. getOccur();
        let entries = Object.entries(occur);//[[a: 1],....]
        return entries.sort((entity1, entity2) => {
            return entity1[1] - entity2[1];
        })[0][0];
    }

    getOccur() {
        let occur = {};
        for (let idx = 0; idx < this.str.length; idx += 1) {
            let char = this.str[idx].toLowerCase();
            // console.log("CHAR", char);
            if (!(char in occur)) {
                occur[char] = 1;
            } else {
                occur[char] += 1;
            }
        }
        return occur;
    }
    

}

module.exports = LCC;
// console.log(leastCommonChar("Hello World") === "h");
// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
//                             "t");
// console.log(leastCommonChar("Mississippi") === "m");
// console.log(leastCommonChar("Happy birthday!") === ' ');
// console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".