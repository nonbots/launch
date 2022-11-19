/*
input: string 
output: boolean

if all strings are upper case  or empty string return true
else return false

*/

// function isUppercase(string) {
//     if (string === '') return true;
//     return string.split('').every(char => char === char.toUpperCase());
// }

// console.log(isUppercase('t'));               // false
// console.log(isUppercase('T'));               // true
// console.log(isUppercase('Four Score'));      // false
// console.log(isUppercase('FOUR SCORE'));      // true
// console.log(isUppercase('4SCORE!'));         // true
// console.log(isUppercase(''));                // true

/*
input: string 
output: string with vowels removed 

- get char array
- filter the array for chars that are not vowels
- return filtered results
*/

// function removeVowels(strings) {
//     return strings.map(string => string.split('').filter(char => !("aeiou".includes(char.toLowerCase()))).join(''));
// }

// console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
// console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
// console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

/*
input: string 
output: object - keys lowercase, uppercase, niether with occurrence num for each

empty string return 0 values for all keys

- iterate through string
check if is NaN
  - check for lowercase
    - char is equal to char lowercase
    - add 1 to lowercase
  - else
    - add 1 to uppercase
   
else
 - add 1 to neither
*/

// function letterCaseCount(string) {
//   const obj = {
//     lowercase: 0,
//     uppercase: 0, 
//     neither: 0
//   };
  
//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx].toLowerCase() >= 'a' && string[idx].toLowerCase() <= 'z') {
//       if (string[idx].toLowerCase() === string[idx]) {
//         obj.lowercase += 1;
//       } else {
//         obj.uppercase += 1;
//       }
//     } else {
//       obj.neither += 1; 
//     }
//   }
//   return obj;
// }

// console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

/*
input: string
output: string with first char in word capitalized

- get words 
- pass words to cb that uppercase first char and concates remainding chars
- return join words

*/

// function wordCap(string) {
//   return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
// }

// console.log(wordCap('four score and seven'));       // "Four Score And Seven"
// console.log(wordCap('the javaScript language'));    // "The Javascript Language"
// console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'


/*
input: string
output: string where cases are swapped

- get words
- pass words to cb that split words 
- pass chars to cb that swap cases
- return chars then join chars
- return words then join words
- return string
*/

// function swapCase(string) {
//   return string.split(' ').map(word => word.split('').map(char => {
//     if (char === char.toLowerCase()) {
//       return char.toUpperCase();
//     } else {
//       return char.toLowerCase();
//     }
//   }).join('')).join(' ');
// }

// console.log(swapCase('CamelCase'));              // "cAMELcASE"
// console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

/*
input: string
output: string case staggered

- declare init empty string result
- iterate through string
  if char index is odd and char is an alphabet
    - concate uppercase char to result
  if char is an alphabet
    - concate lowercase char to result
  else 
    - concate char to result
*/

// function staggeredCase(string) {
//   let result = "";
//   for (let idx = 0; idx < string.length; idx++) {
//     if (idx % 2 === 0 && isAlpha(string[idx])) {
//       result += string[idx].toUpperCase();
//     } else if (isAlpha(string[idx])) {
//       result += string[idx].toLowerCase();
//     } else {
//       result += string[idx];
//     }
//   }
//   return result;
// }

// function isAlpha(char) {
//   return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
// }

// console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
// console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
// console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

/*
input: string
output: string 

- only alpha chars are counted in toggling cases
- declare init alphaCount to 0; 
- declare init result to empty string
- iterate through string
  - if char is alpha and count is even
    - concat uppercase char to result
    - increment alphaCount
  - else alpha 
    - concat lowercase char to result 
    - increment alphaCount
  - else 
    - concat char
- return result
*/

// function staggeredCase(string) {
//   let result = "";
//   let alphaCount = 0;
//   for (let idx = 0; idx < string.length; idx++) {
//     if (alphaCount % 2 === 0 && isAlpha(string[idx])) {
//       result += string[idx].toUpperCase();
//       alphaCount += 1;
//     } else if (isAlpha(string[idx])) {
//       result += string[idx].toLowerCase();
//       alphaCount += 1;
//     } else {
//       result += string[idx];
//     }
//   }
//   return result;
// }

// function isAlpha(char) {
//   return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
// }

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

/*
input: string
output: array of strings, string consist of word and word length

- get words
- pass word to cb to concate word, space, and length of word
- return word, return array
*/

// function wordLengths(string) {
//   if (string === undefined || string.length === 0) {
//     return [];
//   }
//   return string.split(' ').map(word => word + " " + word.length);
// }

// console.log(wordLengths('cow sheep chicken'));
// // ["cow 3", "sheep 5", "chicken 7"]

// console.log(wordLengths('baseball hot dogs and apple pie'));
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// console.log(wordLengths("It ain't easy, is it?"));
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// console.log(wordLengths('Supercalifragilisticexpialidocious'));
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []

/*
input: string(word), string(text) 
output: number of times word apears in text

- get words 
- pass word to cb function that checks word is equal to input word
- returns the words, return words length; 
*/

// function searchWord(wordInput, stringInput) {
//   return stringInput.split(' ').filter(word => word.toLowerCase() === wordInput.toLowerCase()).length;
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// console.log(searchWord('sed', text));      // 3

// function searchWord(wordInput, textInput) {
//   return textInput.split(' ').map(word => {
//     if (word.toLowerCase() === wordInput.toLowerCase()) {
//       return "**" + word.toUpperCase() + "**";
//     } else {
//       return word;
//     }
//   }).join(' ');
// }

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

// console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"

// console.log(3.length;)

// const result = [ [ [1], [2], [3], [4] ], [ ['a'], ['b'], ['c'] ] ].map(element1 => {
//   return element1.forEach(element2 => {
//     return element2.filter(element3 => {
//       console.log(element3.length);
//       return element3.length > 0;
//     });
//   });
// });

// console.log(result);

// let pets = {
//   jerry: {species: "cat", age: 3},
//   luna: {species: "dog", age: 5},
//   goldin: {species: "fish", age: 1}
// };

// function incrementAge(animals) {
// console.log( Object.values(animals).map(animal => {
//     animal.age += 1;
//   }));
// }

// incrementAge(pets);
// console.log(pets);
// const obj = {
//   section1: 'car',
//   section2: undefined
// }
// console.log(obj.section2);

// function test1(){
//   let char = 'a';
//   function test2() {
//     let newchar = 'b';
//     console.log(char);
//   }
//   test2();
// }

// test1();

// let pets = ['dragon', 'turtle']
// let newPets = pets
// pets = []
// console.log(newPets);

// let b = 2;

// function test(a) {
//   a = b;
//   return a;
// }

// test(5);
// console.log(b);
// console.log(a);

// let x = 3; 
// if (x === 3)
//   console.log('x is 3');
//   console.log('x is an odd number');

let numbers = [10, 20, 30];
let moreNumbers = numbers;
numbers[5] = 40;
console.log(moreNumbers);
