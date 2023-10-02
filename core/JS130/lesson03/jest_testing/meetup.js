// objects takes in month and year
// day takes in dayName and ocurrence 
// static dayNames array ["Sunday", "Monday", "Tuesday" /* , … */];
// init occurNum to 0
// convert occurrence to number
// interate days times in the month (how to get the total number of days)
  //create a new Date object with year month and days
  // get the day num, convert day num to day name
  // check if day name is the same as passed in dayName 
  // if occurrence is the same is converted occurrence 
    // return the date object 


class Meetup {
  constructor(year, month) {
    this.month = month; 
    this.year = year;
  }

  static weekNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

  static occurNums = {first: 1, second: 2, third: 3, fourth: 4, fifth: 5}

  day(dayName, occurName) {
    let dates = [];
    let occurNum = Meetup.occurNameToNum(occurName);

    for (let dayNum = 1; dayNum <= 31; dayNum += 1) {
      let curDay = new Date(this.year, this.month - 1, dayNum);
      let curDayNum = curDay.getDay();
      let curDayName = Meetup.weekNames[curDayNum];
      // if occurName is teenth and dayNum is inclusive from 10 to 19 
        // 
      if ((occurName === "teenth") && (curDayName === dayName.toLowerCase()) && (dayNum >= 13 && dayNum <= 19)) return curDay;
      if (((curDayName === dayName.toLowerCase()) && (this.month - 1 === curDay.getMonth()))) {
        dates.push(curDay);
      }
      // if(occurName.toLowerCase() === "teenth" &)

      if (dates.length === occurNum) return dates[dates.length - 1];
    }

    if (dates.length !== 0 && occurName.toLowerCase() === "last") {
      return dates[dates.length - 1];
    }
    return null;
  }

  static occurNameToNum(occurName) {
    return Meetup.occurNums[occurName.toLowerCase()];
  }
  last(dayName) {
    let dates = [];
    for (let dayNum = 1; dayNum < 31; dayNum += 1) {
      let curDay = newDate(this.year, this.month -1, dayNum);
      let curDayNum = curDay.getDay();
      let curDayName = Meetup.weekNames[curDayNum];
      if(curDayName === dayName.toLowerCase()) {
        console.log(dates);
        dates.push(curDay);
      }
    }
    return dates[dates.length - 1];
  }
}

module.exports = Meetup;