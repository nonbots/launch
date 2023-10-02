
// 0 = 24 hours 
//1440 mins /hour
class Clock {
  constructor(...times) {
    this.times = times;
  }
  static at(hours, mins) {
    if (mins === undefined) mins = 0; 
    let finalTotalMins = Clock.getTotalMins(hours, mins);
    // console.log("FINMINS", finalTotalMins);
    let finalHours = Clock.getHours(finalTotalMins);
    // console.log("FINHOUR",finalHours);
    let finalMins = Clock.getMins(finalTotalMins);
    // console.log("FINMINS", finalMins);
    // returns an object that has a method called string 
    return new Clock(finalHours, finalMins);
   
  }
  static getHours(totalHours) {
    // console.log("HOURS", )
   return Math.floor(totalHours / 60);
  }
  static getMins(totalMins) {
    return totalMins % 60;
  }
  toString() {
    return `${Clock.format(this.times[0])}:${Clock.format(this.times[1])}`;
  }
  static format(time) {
    if (time === 0 ) {
      return "00";
    } else if (time < 10) {
      return `0${time}`
    } else {
      return String(time);
    }
  }
  static getTotalMins(hours, mins) {
    console.log(hours, mins);
    let totalMin = (hours * 60) + mins; // 0 + -50  0 30 = -30 --if negative 1440 - mins 1440 -1444 4
    while (totalMin < 0) {
      totalMin = 1440 + totalMin;  // -4
    } 
    console.log("TOTALMINS", totalMin);
    return totalMin % 1440 === 0 ? 1440 : totalMin % 1440; // -50 % 1440
  }

   add(mins) {
    this.times[1] += mins;
    console.log("ADD MINS");
    let totalMins = Clock.getTotalMins(this.times[0], this.times[1])
    // console.log("ADD TOTAL MINS", totalMins);
    let hours = Clock.getHours(totalMins);
    let minutes = Clock.getMins(totalMins);
    return new Clock(hours, minutes);
  }
  subtract(mins) {
    // console.log("TIME",this.times);
    this.times[1] -= mins;
    console.log("SUBTRACT MINS");
    let totalMins = Clock.getTotalMins(this.times[0], this.times[1]);
    // while (totalMins < 0) {
    //   this.times[0] = 1440;
    //   totalMins = Clock.getTotalMins(this.times[0], this.times[1]);
    // }
    // minutes is negative 
    
    // console.log("SUBTRACT", totalMins)
    console.log("ADD TOTAL MINS", totalMins);
    let hours = Clock.getHours(totalMins);
    let minutes = Clock.getMins(totalMins);
    return new Clock(hours, minutes);
  }
  isEqual(clock) {
    if (this.times[0] === clock.times[0] && this.times[1] === clock.times[1]) return true;
    return false;
  }
}

module.exports = Clock;