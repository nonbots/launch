
/*
input: string digits
output: all possible consecutive number seris of a specified length in that string
 - if length is greater than string length throw an error 
*/
class Ser {
    constructor(strNum) {
        this.strNum = strNum;
    }
    slices(len) {
        if (len > this.strNum.length) throw new Error();
        const result = [];
        // iterate through start 
        for (let start = 0; start <= this.strNum.length - len; start += 1) {
            result.push(this.strNum.substring(start, start + len).split("").map(char => Number(char)));
        }
           
        return result;

    }
}
// let series = new Ser('37103');
// console.log(series.slices(2));

module.exports = Ser;