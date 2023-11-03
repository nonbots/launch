const RL = require("readline-sync");
const MSG = require("./RPSSL.json");

const RO = "rock";
const PA = "paper";
const SC = "scissors";
const SP = "spock";
const LI = "lizard";
const YES = "y";
const NO = "n";
const INIT_SCORE = 0;
const TOTAL_WINS = 5;
const INIT_WEIGHT = 1;
const INIT_INTERVAL = 19;
const WEIGHT_DEC = 0.6;
const HUMAN_WIN = 1;
const HUMAN_LOST = 0;
const INIT_RO_WINLOSTS = [];
const INIT_PA_WINLOSTS = [];
const INIT_SC_WINLOSTS = [];
const INIT_LI_WINLOSTS = [];
const INIT_SP_WINLOSTS = [];
const INIT_MOVESOVER60 = [];
const INIT_INTERVALS = {};
const INIT_RANGES = {};
const INIT_HISTORY = [];

function Player() {
  this.move = null;
  this.score = 0;
  this.choices = [RO, PA, SC, LI, SP];
  this.history = INIT_HISTORY;
}

Player.prototype.addToHistory = function () {
  this.history.push(this.move);
};

Player.prototype.updateScore = function () {
  this.score += 1;
};

Player.prototype.resetScore = function () {
  this.score = INIT_SCORE;
};

function Human() {
  Player.call(this);
  this.replay = null;
}
Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

Human.prototype.displayChoice = function () {
  console.log(`Your chose: ${this.move}`);
};
Human.prototype.displayScore = function () {
  console.log(`Your score: ${this.score}`);
};
Human.prototype.displayHistory = function () {
  console.log(`Your moves: ${this.history}`);
};
Human.prototype.clearDisplay = function () {
  console.clear();
};
Human.prototype.replayGame = function () {
  this.replay = RL.question(MSG.replay).toLowerCase();
  while (this.replay !== YES && this.replay !== NO) {
    this.replay = RL.question(MSG.replayInvalid);
  }
  this.clearDisplay();
};
Human.prototype.choose = function () {
  this.move = RL.question(MSG.choose).toLowerCase();
  while (!this.choices.includes(this.move)) {
    this.move = RL.question(MSG.chooseInvalid);
  }
  this.addToHistory();
  this.clearDisplay();
};

function Computer() {
  Player.call(this);
  this.humanWinLost = {
    rock: INIT_RO_WINLOSTS,
    paper: INIT_PA_WINLOSTS,
    scissors: INIT_SC_WINLOSTS,
    lizard: INIT_LI_WINLOSTS,
    spock: INIT_SP_WINLOSTS,
  };
  this.movesOver60 = INIT_MOVESOVER60;
  this.weight = {
    rock: INIT_WEIGHT,
    paper: INIT_WEIGHT,
    scissors: INIT_WEIGHT,
    lizard: INIT_WEIGHT,
    spock: INIT_WEIGHT,
  };
  this.intervals = INIT_INTERVALS;
  this.ranges = INIT_RANGES;
}

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.displayWinLost = function () {
  console.log(MSG.humanWinLost, this.humanWinLost);
};
Computer.prototype.displayHistory = function () {
  console.log(`Computer moves: ${this.history}`);
};
Computer.prototype.displayChoice = function () {
  console.log(`Computer chose: ${this.move}`);
};
Computer.prototype.displayScore = function () {
  console.log(`Computer score: ${this.score}`);
};
Computer.prototype.addHumanWin = function () {
  this.humanWinLost[this.move].push(HUMAN_WIN);
};
Computer.prototype.addHumanLost = function () {
  this.humanWinLost[this.move].push(HUMAN_LOST);
};
Computer.prototype.addMoveOver60 = function () {
  for (let move in this.humanWinLost) {
    let sum = this.humanWinLost[move].reduce((a, b) => a + b, 0);
    if (sum / this.humanWinLost[move].length > WEIGHT_DEC) {
      this.movesOver60.push(move);
    }
  }
};
Computer.prototype.setWeight = function () {
  for (let move in this.weight) {
    if (!this.movesOver60.includes(move)) {
      let movesLen = this.movesOver60.length;
      let choicesLen = this.choices.length;
      let remainder = ((1 - WEIGHT_DEC) * movesLen) / (choicesLen - movesLen);
      this.weight[move] = 1 + remainder;
    } else {
      this.weight[move] = WEIGHT_DEC;
    }
  }
};
Computer.prototype.setIntervals = function () {
  this.intervals.ro = Math.ceil(INIT_INTERVAL * this.weight.rock);
  this.intervals.pa = Math.ceil(INIT_INTERVAL * this.weight.paper);
  this.intervals.sc = Math.ceil(INIT_INTERVAL * this.weight.scissors);
  this.intervals.li = Math.ceil(INIT_INTERVAL * this.weight.lizard);
  this.intervals.sp = Math.ceil(INIT_INTERVAL * this.weight.spock);
};
Computer.prototype.setRanges = function () {
  this.ranges.roS = 1;
  this.ranges.roE = this.ranges.roS + this.intervals.ro;
  this.ranges.paS = this.ranges.roE + 1;
  this.ranges.paE = this.ranges.paS + this.intervals.pa;
  this.ranges.scS = this.ranges.paE + 1;
  this.ranges.scE = this.ranges.scS + this.intervals.sc;
  this.ranges.liS = this.ranges.scE + 1;
  this.ranges.liE = this.ranges.liS + this.intervals.li;
  this.ranges.spS = this.ranges.liE + 1;
  this.ranges.spE = this.ranges.spS + this.intervals.sp;
};

Computer.prototype.randomMove = function () {
  this.setIntervals();
  this.setRanges();

  let rand = Math.ceil(Math.random() * this.ranges.spE) + 1;
  if (rand >= this.ranges.roS && rand <= this.ranges.roE) {
    this.move = RO;
  } else if (rand >= this.ranges.paS && rand <= this.ranges.paE) {
    this.move = PA;
  } else if (rand >= this.ranges.scS && rand <= this.ranges.scE) {
    this.move = SC;
  } else if (rand >= this.ranges.liS && rand <= this.ranges.liE) {
    this.move = LI;
  } else if (rand >= this.ranges.spS && rand <= this.ranges.spE) {
    this.move = SP;
  }
};
Computer.prototype.defenseMove = function () {
  this.addMoveOver60();
  this.setWeight();
  this.movesOver60 = INIT_MOVESOVER60;
  this.randomMove();
  this.addToHistory();
};

function Game() {
  this.human = new Human();
  this.computer = new Computer();
  this.winCombos = {
    rock: [PA, SP],
    paper: [SC, LI],
    scissors: [RO, SP],
    spock: [LI, PA],
    lizard: [RO, SC],
  };
}

Game.prototype.displayWelcomeMessage = function () {
  console.log(MSG.welcome);
};
Game.prototype.computerWin = function () {
  return this.winCombos[this.human.move].includes(this.computer.move);
};
Game.prototype.displayRoundWinner = function () {
  if (this.computerWin()) {
    console.log("Computer wins.");
  } else if (this.human.move === this.computer.move) {
    console.log("It's a tie.");
  } else {
    console.log("You win.");
  }
};
Game.prototype.setScoreAndHumanWinLost = function () {
  if (this.computerWin()) {
    this.computer.updateScore();
    this.computer.addHumanLost();
  } else if (this.human.move !== this.computer.move) {
    this.human.updateScore();
    this.computer.addHumanWin();
  }
};
Game.prototype.displayGoodbyeMessage = function () {
  console.log(MSG.goodbye);
};
Game.prototype.displayGameWinner = function () {
  if (this.computer.score > this.human.score) {
    console.log(`You lost. Better luck next time.`);
  } else {
    console.log(`Congrats! You won.`);
  }
};
Game.prototype.displayScore = function () {
  this.human.displayScore();
  this.computer.displayScore();
};
Game.prototype.resetScore = function () {
  this.human.resetScore();
  this.computer.resetScore();
};

Game.prototype.displayHistory = function () {
  this.computer.displayHistory();
  this.human.displayHistory();
};

Game.prototype.displayRoundWinnerScore = function () {
  this.displayRoundWinner();
  this.displayScore();
};
Game.prototype.choseAndDisplay = function () {
  this.human.choose();
  this.human.displayChoice();
  this.computer.defenseMove();
  this.computer.displayChoice();
};
Game.prototype.play = function () {
  do {
    this.displayWelcomeMessage();
    while (this.computer.score < TOTAL_WINS && this.human.score < TOTAL_WINS) {
      this.choseAndDisplay();
      this.setScoreAndHumanWinLost();
      this.displayRoundWinnerScore();
    }
    this.displayGameWinner();
    this.human.replayGame();
    this.resetScore();
  } while (this.human.replay === YES);
  this.displayGoodbyeMessage();
  this.displayHistory();
  this.computer.displayWinLost();
};
const game = new Game();
game.play();
