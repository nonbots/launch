function age() {
    let rlSync = require("readline-sync"); 
    let myAge = Number(rlSync.question("What is your age?\n")); 
    for (let years = 0; years <= 40; years += 10) {
        if (years === 0) {
            console.log(`You are ${myAge} years old.`); 
        } else {
        console.log(`In ${years} years, you will be ${myAge + years} years old.`); 
    
        }
    }
}
age(); 