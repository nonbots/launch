//Sum 
// function sum(num1, num2) {
//     return num1 + num2; 
// }

// const result = sum(22, 10);
// console.log(result); 

//Log Quote 
// function logQuote(quote) {
//     console.log('Always bet on Javascript.'); 
// }

// logQuote(); 

//Cite the Author 
// function cite(author, quote) {
//     console.log(`${author} said: "${quote}"`); 
// }
// cite('Brendan Eich', 'Always bet on JavaScript.');

//Square Number 
// function squaredNumber(num) {
//     return num ** 2; 
// }

// const result = squaredNumber(3); 
// console.log(result); 

//Display Division
// function multiplesOfThree() {
//   let divisor = 1;

//   for (let dividend = 3; dividend <= 30; dividend += 3) {
//     console.log(dividend + ' / ' + divisor + ' = 3');
//     divisor += 1;
//   }
// }
// // 3 / 1 = 3
// // 6 / 2 = 3
// // 9 / 3 = 3
// // ...

// multiplesOfThree();

//Three-way comparison
// function compareByLength(string1, string2) {
//     if (string1.length < string2.length) {
//         return -1;
//     } else if (string1.length > string2.length) {
//         return 1;
//     } else {
//         return 0; 
//     }
// }

// const result1 = compareByLength('patience', 'perseverance'); 
// const result2 = compareByLength('strength', 'dignity');
// const result3 = compareByLength('humor', 'grace');

// console.log(result1); 
// console.log(result2);
// console.log(result3);

//Transformation 
//console.log('Captain Ruby'.split(" ")[0].concat(" Javascript")); 

//Internationalization 1 
//  function greet(code) {
//      switch (code) {
//          case 'fr': 
//              console.log('Salut!'); 
//              break; 
//       case 'pt':
//             console.log('Olá!'); 
//             break; 
//         case 'de': 
//             console.log('Hallo!');
//             break; 
//         case 'sv': 
//             console.log('Hej!'); 
//             break;
//         case 'af':
//             console.log('Haai!');
//             break; 
//         default:
//             console.log('Hello!'); 
//             break; 
//      }
//  }
 
 
// greet('en'); // 'Hi!'
// greet('fr'); // 'Salut!'
// greet('pt'); // 'Olá!'
// greet('de'); // 'Hallo!'
// greet('sv'); // 'Hej!'
// greet('af'); // 'Haai!'

//Local Part 1 
// function extractLanguage(code) {
//     return code.substr(0,2); 
// }

// console.log(extractLanguage('en_US.UTF-8'));  // 'en'
// console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
// console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

//Local Part 2 
// function extractRegion(code) {
//     return code.substr(3,2); 
// }
// console.log(extractRegion('en_US.UTF-8'));  // 'en'
// console.log(extractRegion('en_GB.UTF-8'));  // 'en'
// console.log(extractRegion('ko_KR.UTF-16')); // 'ko'

//Internationalization 2 
//  function greet(code) {
//      switch (code) {
//          case 'fr': 
//              console.log('Salut!'); 
//              break; 
//       case 'pt':
//             console.log('Olá!'); 
//             break; 
//         case 'de': 
//             console.log('Hallo!');
//             break; 
//         case 'sv': 
//             console.log('Hej!'); 
//             break;
//         case 'af':
//             console.log('Haai!');
//             break; 
//         case 'en':
//             console.log('Hello!'); 
//             break; 
//      }
//  }
 
//   function extractLanguage(code) {
//     return code.substr(0,2); 
// }
 
// function extractRegion(code) {
//     return code.substr(3,2); 
// }
 
//  function localGreet(locale) {
//      let language = extractLanguage(locale); 
//      let region = extractRegion(locale); 
     
//      switch (region) {
//          case 'US': return 'Hey!'; 
//          case 'GB': return 'Hello!'; 
//          case 'AU': return 'Howdy!';
//          default: return greet(language); 
//      }
     
//  }
 
// console.log(localGreet('en_US.UTF-8')); // 'Hey!'
// console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
// console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
// console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
// console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
// console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'