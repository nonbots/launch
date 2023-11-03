//Ex.1 
// console.log("These aren't the droids you're looking for.".length); 

//EX.2
// console.log('confetti floating everywhere'.toUpperCase()); 

//EX.3
// function repeat(frequency, string) {
//     let repeatedString = '';
//     for (let count = 0; count < frequency; count += 1) {
//         repeatedString += string; 
//     }
//     return repeatedString; 
// }

// console.log(repeat(3, 'ha')); // 'hahaha'

//EX.4
// const string = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'
// console.log(string); 

//EX.5
// let string1 = 'Polar Bear';
// let string2 = 'Polar bear';
// let string3 = 'Penguin';

// function equal(str1, str2, str3) {
//      if (str1.toLowerCase() === str2.toLowerCase() && str1.toLowerCase() === str3.toLowerCase()){
//          return true; 
//      }
//      return false; 
// }

// console.log(equal(string1, string2, string3)); 

//EX.6 
// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
// console.log(byteSequence.includes('x')); 

//EX.7 
// function isBlank(string) {
//     if (string){
//         return false; 
//     }
//     return true; 
// }
// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // false
// console.log(isBlank(''));     // true

//EX.8 
// function isBlank(string) {
//     if (string && !string.includes(' ')) {
//         return false;
//     }
//     return true; 
// }

// function isBlank(string) {
//   return string && !string.includes(' ') ? false : true; 
// }
// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // true
// console.log(isBlank(''));     // true

//EX.9
// function capitalizeWords(string) {
//     const words = string.split(' '); 
//     let capString = ''; 
//     for (let i = 0; i < words.length; i += 1) {
//         let word = words[i]; 
//         let capWord = word[0].toUpperCase() + word.slice(1); 
//          if (i < words.length - 1) {
//              capWord += " "; 
//          }
//         capString += capWord; 
//     }
//     //console.log(string.length + ' ' + capString.length); 
//     return capString; 
// }


// function capitalizeWords(string) {
//         const capWords = []; 
//         string.split(' ').forEach(word => {
//         let letters = word.split('');
//         letters[0] = letters[0].toUpperCase();
//         let wordJoined = letters.join(''); 
//         capWords.push(wordJoined); 
//     }); 
//   return capWords.join(' ');
//     //console.log(capWords.join(' ').length); 
// }
// const result = capitalizeWords('launch school tech & talk');
// console.log(result); 

