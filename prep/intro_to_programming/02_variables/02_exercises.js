//EX.1
const NAME = 'Victor'

// console.log(`Good Morning, ${NAME}.`); 
// console.log(`Good Afternoon, ${NAME}.`); 
// console.log(`Good Evening, ${NAME}.`); 


const TIME_OF_DAY = ['Morning', 'Afternoon', 'Evening'];
function greet(greetings) {
    //loop through GREETINGS
    for (let i = 0; i < TIME_OF_DAY.length; i++) {
        //get current greeting
        let curTime = TIME_OF_DAY[i]; 
        //interprolate current greeting to string
        let greet = `${curTime}, Victor.`; 
        //log string
        console.log(greet); 
    }
}

//call greet
//greet(TIME_OF_DAY);

//EX.2 
const AGE = 20; 
// console.log(`In 10 years, you will be ${AGE + 10} years old.`); 
// console.log(`In 20 years, you will be ${AGE + 20} years old.`); 
// console.log(`In 30 years, you will be ${AGE + 30} years old.`); 
// console.log(`In 40 years, you will be ${AGE + 40} years old.`); 

//EX.3 
/*
The variable is declared inside a block scope and console.log(foo) is called 
outside the block scope. It does not have access to the block scope and will 
return an error since foo does not exist in the outter/gobal scope.
*/

//EX.4
/*
The console will log : 

Good Morning, Victor. 
Good Afternoon, Victor. 
Good Evening, Victor. 

And then log an error because the variable NAME cannot be reassigned to 'Joe' 
since it is a const variable.
*/

//EX.5
/*
The console will log bar because it will look for foo in the scope that it
is logging from (the foo variable outside of the block scope) which is assigned to 'bar'. 
*/

//EX.6
/*
Line 1 assigns a string 'bar' to a constant variable called FOO.
Line 2 starts a block scope.
Line 3 assing a string 'qux' to a constant variable called FOO. This does not 
through an error because the variable FOO is a different and new variable since 
it is declared in a different scope even though it shares the same name. 
Line 4 exists the block scope
Line 6 is logging the value, 'bar',  of FOO that is in the outter scope. 
*/