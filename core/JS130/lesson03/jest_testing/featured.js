
/*
odd number AND multiple of 7 AND each digit only occurrs once 
input: number 
output: number (next feature number above the input number) 
error message if no next feature number
*/

// increment the number by one each time and check for conditions above to be true  return current number if not return error message

//init number to number plus 1

// while number is less than 9876543201
    //check if odd and multiple of 7 and if all digit are unique 
        // convert to string sort array sort the numbers if the if no adjacent number are the same 
        // increment number by 1
    // else
    // return error message

// return number
class Featured{
    getNext(num) {
        function unique (curNum) {
            let nums = String(curNum).split('').sort();
            for(let i = 0; i < nums.length; i += 1) {   
                if (nums[i] === nums[i + 1])
                return false;
            } 
            return true;
        }

        let number = num + 1;
        while (number <= 9876543201) {
            if (number % 2 === 1 && number % 7 === 0 && unique(number)) return number;
            number += 1;
        } 
        return"There is no possible number that fulfills those requirements.";
    
    }
}
// console.log("HERE");
// let feat = new Featured();
// // console.log(feat);
// console.log(feat.getNext(12)); // logs 21 
module.exports = Featured;