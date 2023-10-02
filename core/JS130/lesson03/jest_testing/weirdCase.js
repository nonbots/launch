// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

class case2 {
  constructor(string) {
    this.weird = string;
  }
  getCase() {
    let words = this.weird.split(" ");
    // console.log(words);
    // let newWord;
    for(let i = 0; i < words.length; i++){
      if((i%2) == 1){
        let chars = words[i].split("") ///[i,p,s,u,m]
        for(let j = 0; j < chars.length; j++){
          if((j+1) %4 == 0){
            chars[j] = chars[j].toUpperCase();
          } 
        }
        words[i] = chars.join("");
      }
    }
    return words.join(" ");
  }
}

module.exports = case2;

// console.log(
//     toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
//                 'Lorem IpsUm is simPly dummy texT of the printing worLd');
//   console.log(
//     toWeirdCase('It is a long established fact that a reader will be distracted') ===
//                 'It is a lonG established facT that a reader wilL be disTracTed');
//   console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
//   console.log(
//     toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
//                 'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');
  
