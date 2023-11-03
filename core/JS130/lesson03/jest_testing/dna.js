// count the number of differences between the dna strands called the minimum number of point muatations (hamming distance)
// class dna creates string
// method hammingDistance 
  //input: string to compare (all caps)
  // compare shorter string
  // empty string => 0 
  // no diff => 0 

// find the shorter string 
  // if instance string is less or equal to passed in string 
    // assign shorter to length of instance str
    // else assing shorter to length of passed in str
// iterate through the storter string
// increment count 
// return count 

class DNA {
  constructor(str1) {
    this.str1 = str1;
  }
  hammingDistance(str2) {
    let shorterStr = this.getShorterStr(str2);
    let longerStr = this.getLongerStr(shorterStr, str2);
    let count = 0;
    // console.log(shorterStr, longerStr);
    for (let i = 0; i < shorterStr.length; i += 1) {
      // console.log(shorterStr[i], '===', longerStr[i]);
      if (shorterStr[i] !== longerStr[i]) count += 1; 
    }
    return count;
  }
  getShorterStr(str2) {
    return this.str1.length <= str2.length ? this.str1 : str2; 
  }
  getLongerStr(shorterStr, str2) {
    return shorterStr === this.str1 ? str2 : this.str1;
  }
}

module.exports = DNA;