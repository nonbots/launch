// EX.1 
const PERSON = {
    "firstName": "Nhan",
    "lastName": "Bui"
}

const FULL_NAME =`${person["firstName"]} ${person["lastName"]}`;  
//console.log(FULL_NAME);

//EX.2 
let num = 4936; 

const ONES = num % 10;          // 6 
num = (num - ONES) / 10;        //493
const TENS = num % 10;          // 3
num = (num - TENS) / 10;        //49
const HUNDREDS = num % 10;      // 9
num = (num - HINDREDS) / 10;    //4
const THOUSANDS = num;//4
// console.log(
// `thousands place is ${THOUSANDS}
// hundreds place is ${HUNDREDS}
// tens place is ${TENS}
// ones place is ${ONES}`
//             ); 

//EX.3 
/*
'true' -> String 
false -> boolean
1.5 -> number
2 -> number
undefined -> undefined
{foo: 'bar'}  -> object
*/

//EX.4
/*
This code logs '510' instead of 15 because Javascript recognizes 
the value 5 as a string. A string can not be added to another number 
so it coerced 10 into a string type from a number and concatenates the strings
together to get '510'.
*/

//EX.5
//console.log(Number('5') + 10); 
//console.log(parseInt('5') + 10); 

//EX.6
//console.log(`The value of 5 + 10 is ${Number('5') + 10}.`); 

//EX.7 
//No, undefined will be logged at line three.

//EX.8
const NAMES = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin']; 

//EX.9
const PETS = {asta: 'dog', butterscotch: 'cat', pudding: 'cat', neptune: 'fish', darwin: 'lizard'}; 

//EX.10 
//false

//EX.11
//3

//EX.12
//true