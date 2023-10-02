/*
static verse method
  input: number 
  output: string

  if zero make placeholder string 'no more'
  return the string with num as placholder in string literal 

static verses method
  input: numbers
  output: string

  iterate through the numbers 
   call verse



staice lyrics
  output: string
  iterate from 99 to 0 
    // call verse 
*/
class BeerSong {
  static verse(num) {
    
    let str1 = BeerSong.isZero(num);
    let str2 = BeerSong.isPlural(num);
    let first = `${BeerSong.capitalize(str1)} bottle${str2} of beer on the wall, ${str1} bottle${str2} of beer.\n`

    num -= 1;
    let second;
    if (num < 0) {
      second = `Go to the store and buy some more, 99 bottles of beer on the wall.\n`
    } else {
      str1 = BeerSong.isZero(num);
      str2 = BeerSong.isPlural(num);
      console.log(str1);
      let str3 = str1 === 'no more' ? "it" : "one";

      second = `Take ${str3} down and pass it around, ${str1} bottle${str2} of beer on the wall.\n`
    }
    return first + second;
  }

  static verses(...nums) {
    let result = ""
    for (let i = 0; i < nums.length; i += 1) {
      let curNum = nums[i];
      result += BeerSong.verse(curNum) + "\n";
    }
    // console.log("RESULT", result);
    return result;
  }

  static lyrics() {
    let result = "";
    for (let i = 99; i >= 0; i -= 1) {
      result += BeerSong.verse(i) + "\n";
    }
    console.log("RESULT", result);
    return result;
  }


  static isPlural(num) {
    return (num > 1) || (num === 0) ? "s" : "";
  }
  static capitalize(num) {
  if (num === 'no more') {
      return num[0].toUpperCase() + num.slice(1);
    } else {
      return num;
    }
  }
  static isZero(num) {
    return num === 0 ? "no more" : num; 
  }
}

module.exports = BeerSong;