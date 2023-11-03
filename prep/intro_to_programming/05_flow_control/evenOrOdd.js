//EX.2
// function evenOrOdd(number) {
//     return number % 2 === 0 ? console.log('even') : console.log('odd'); 
// }

// evenOrOdd(5); 

//EX.3 - Method 1
// function evenOrOdd(number) {
//     return typeof number === 'number' ? (number % 2 === 0 ? console.log('even') : console.log('odd')) : console.log("input is not a number"); 
// }

//EX.3 - Method 2
function evenOrOdd(number) {
    if (typeof number === "number") {
        if(number % 2 === 0) {
            console.log('even');
        } else {
            console.log('odd'); 
        }
    }else {
        console.log('not a number'); 
    }
} 
// evenOrOdd(null); 

//EX.4
/*
The program will go through each case to see if it matches with the passed parameter.
It finds that case '113' matches and will log 'Product 2'. The program will continue
to log the stings in cases that follow since there are no break statements after the
console logs. 
*/

//EX.5 
/*
if (foo()) {
    return 'bar'
} else {
    return qux(); 
}
*/

//EX.6 
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

//isArrayEmpty([]);
/*
The function will log 'Not Empty', because the arr is a truthy and that is coerced 
to true. Validating if an array is empty would require using the length method on 
arr to check if the length is 0.
*/