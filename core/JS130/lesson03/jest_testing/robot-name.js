// generate a random name 
  // first two capital letters 
  // last 3 numbers 
// check for name collisions

class RobotName {
  constructor () {
    this.newName = this.getName();
    while (RobotName.ranName === this.newName) {
      this.newName = this.getName();
    }
    RobotName.ranName = this.newName; 
    
  }
  static ranName; 
  name() {
    console.log("newNAME", this.newName, "ranName", RobotName.ranName);
    if (this.name === undefined) this.newName = this.getName();
  return this.newName;
  }

  getName() {
    return `${this.getRandLetter(26)}${this.getRandLetter(26)}${this.getRandNum(10)}${this.getRandNum(10)}${this.getRandNum(10)}`;
  }

  getRandNum(max) {
    return Math.floor(Math.random() * max);
  }

  getRandLetter(max) {
    let code = this.getRandNum(max) + 65; 
    return String.fromCharCode(code);
  }
  reset() {
    this.newName = undefined;
  }
}

module.exports = RobotName;