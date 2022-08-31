//Q1
//add an additional space on each iteration
//init space with empty string
// const str = "The Flintstones Rock!"
// //int string
// let space = ''
// let count = 10; 
// //loop 10 times
// while (count > 0) {
//   //log the space and string
//    console.log(space + str);
//    //add a space to space
//    space += ' ';
//    // decrement count
//    count--;
//}

//Q2
// let munstersDescription = "The Munsters are creepy and spooky.";
// let newString = munstersDescription.split('').filter(char => char.toUpperCase() === char ? char.toLowerCase(): char.toUpperCase()).join(''); 

// console.log(newString);

//Q3
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0){
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;
// }

// console.log(factors(10));
// console.log(factors(0));

//Q4
// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }
//the first mutates the array the second on creates a whole new array 

//Q5
// console.log(0.3 + 0.6); 
// console.log(0.3 + 0.6 === 0.9); 
//computers can't represent floating-point number acurrately

//Q6
// let nanArray = [NaN];

// console.log(nanArray[0] === NaN);
// false, use isNaN(); 

//Q7
// let answer = 42;

// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }

// let newAnswer = messWithIt(answer);

// console.log(answer - 8);

//Q8
// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" }
// };

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }
// messWithDemographics(munsters);
// console.log(munsters);
//console.log(Object.values(munsters));

//Q9
//paper, rock
//paper, rock 
//paper
// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }

// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

//Q10
// function foo(param = "no") {
//   return "yes";
// }

// function bar(param = "no") {
//   return param === "no" ? "yes" : "no";
// }

// console.log(bar(foo()));