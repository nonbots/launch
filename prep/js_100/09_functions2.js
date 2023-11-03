//Greet 1
// function greet(greeting = 'Hello') {
//   console.log(greeting + ', world!');
// }

// greet('Salutations'); // logs: Salutations, world!

// greet();              // logs: undefined, world!
//                       // should log: Hello, world!

//Greet 2 
// function greet(greeting = 'Hello', recipient = 'world') {
//   console.log(greeting + ', ' + recipient + '!');
// }

// greet();                                // logs: Hello, world!
// greet('Salutations');                   // logs: Salutations, world!
// greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

//Greet 3 
// function greet() {
//     console.log( `${greeting()}, ${recipient()}!`); 
// }
// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }

// greet(); 

//Calculate BMI
// function calculateBMI(height, weight) {
//     const bmi = weight / height**2;
//     return  (bmi * 10000).toFixed(2); 
// }

// console.log(calculateBMI(180, 80)); // "24.69"

//Calculate Cat Age
// function catAge(humanAge) {
//     if (humanAge === 0) {
//         return 0; 
//     } else if (humanAge === 1) {
//         return 15;
//     } else if (humanAge === 2) {
//         return 24;
//     } else {
//         return 24 + ((humanAge - 2) * 4); 
//     }
// }
// console.log(catAge(0)); // 0
// console.log(catAge(1)); // 15
// console.log(catAge(2)); // 24
// console.log(catAge(3)); // 28
// console.log(catAge(4)); // 32

//Remove Last Char 
// function removeLastChar(string) {
//     let result = string.split('');
//     result.pop(); 
//     return result.join(''); 
// } 

// console.log(removeLastChar('ciao!')); // 'ciao'
// console.log(removeLastChar('hello')); // 'hell'
//Arrow Functions (Part 1)

// const template = 'I VERB NOUN.';

// const sentence = (verb, noun) => template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);


// console.log(sentence('like', 'birds'));
// logs: I like birds.

//Arrow Functions (Part 2)
// let initGame = () => 
//  ({
//     level: 1,
//     score: 0,
//   })
// ;

// let game = initGame();

// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);