class Ana {
    constructor(word) {
        this.word = word.toLowerCase();
    }
    // current words contains only the same number of chars as the word passed in 
    match(words) {
        let result = [];
        for (let i = 0; i < words.length; i += 1) {
            if(this.isAna2(words[i].toLowerCase())) result.push(words[i]);
        }
    return result;
    }

    isAna(word) { 
        if (word.toLowerCase() === this.word) return false; // if the curren word is the same as the passed in word return false
        let charWord = word.toLowerCase().split(""); // convert current word into an array 
        for (let i = 0; i < this.word.length; i += 1) { // iterate through the passed in word
            let index = charWord.indexOf(this.word[i]);  // get the index of the current char of the current word 
            if (index > -1) {    // if index is found
                charWord.splice(index, 1); //remove the char from the index 
            } else {
                return false; // if not found is not an anagram
            }
            if((charWord.length === 0) && (i != word.length - 1)) return false; // if all the letters from the  current words are removed bu there are more letters to the passed in word not an anagram
        }
        if(charWord.length === 0) return true; // if all letters are removed and passed in word is done interating is anagram
        return false; // else non anagram 
    }
    isAna2(word) {
        if (word.toLowerCase() === this.word) return false;
        if (word.split("").sort().join("") === this.word.split("").sort().join("")) return true;
        return false;
    }
}

// iterate through the words 
    // if current words is an anagram 

        // add current word to array
// return array

// is arrgran (current word)
    // if current char of current word is in passed in word
        // remove the char 
    // return false 
// if passed in array is empty return true else false 

module.exports = Ana;