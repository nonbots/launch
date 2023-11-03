/*
octal to decimal conversion
input: string octal number invalid input is octal 0
output: number in decimal

*/

class O {
 constructor(octal) {
    if (octal.split("").some(char => (char.toLowerCase() >= "a" && char.toLowerCase() <= "z") || char.toLowerCase() === "8" || char.toLowerCase() === "9")) {
        this.octal = "0";
    } else {
        this.octal = octal;
    }
 }

 toDecimal() {
    let num = Number(this.octal);
    let sum = 0; 
    let power = 0;
    // while the num is greater than 0 
        // use mod 10 to get last digit 
        // get place value base to the power
        //multiply by digit 
        // add to sum
        // divide num by 10 round down 
        // increment power
    while (num > 0) {
        let digit = num % 10; 
        let placeVal = 8 ** power;
        let val = digit * placeVal;
        sum += val;
        num = Math.floor(num / 10); 
        power += 1;
    }
    return sum; 
 }
}

module.exports = O;