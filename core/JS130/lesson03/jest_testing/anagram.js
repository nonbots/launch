
// anagram contrustor takes in string 
// match method takes in array of string that checks if each string is an anagram of the instance passed in string 
// returns an array of anagram strings

//anagram - the same amount of characters in one string as the other but arranged differently

// is case sensitive 

// filter for a new array where strs are anagram 

// isAnagram (str)
  // if str is equal to instance str  return false 
  // boths strings
  // convert string to array of chars
  // sort the chars in ascending
  // if both string are the same return true
    // else 
  // return false
  
  // returns boolean
class Anagram {
  constructor(str) {
    this.str = str.toLowerCase();
  }
  match(strs) {
    return strs.filter(str => this.isAnagram(str.toLowerCase()))
  }

  isAnagram(str) {
    if (this.str === str || this.str.length !== str.length) return false;
    let instanceStr = this.str.split("").sort().join("");
    let newStr = str.split("").sort().join("");
    return instanceStr === newStr;
  }
}

module.exports = Anagram;
