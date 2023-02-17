const RL = require('readline-sync');
const MSG = require('./RPSSL.json');

const RO = 'rock';
const PA = 'paper';
const SC = 'scissors';
const SP = 'spock';
const LI = 'lizard';
const YES = 'y';
const NO = 'n';
const INIT_SCORE = 0;
const TOTAL_WINS = 5;
const INIT_WIEGHT = 1;
const INIT_INTERVAL = 19;
const WEIGHT_DEC = .6;
const HUMAN_WIN = 1;
const HUMAN_LOST = 0;

const RPSGame = {
  human: createHuman(),

  computer: createComputer(),

  winCombos: {
    rock: [PA, SP],
    paper: [SC, LI],
    scissors: [RO, SP],
    spock: [LI, PA],
    lizard: [RO, SC]
  },

  displayWelcomeMessage() {
    console.log(MSG.welcome);
  },

  computerWin() {
    return this.winCombos[this.human.move].includes(this.computer.move);
  },

  displayRoundWinner() {
    if (this.computerWin()) {
      console.log("Computer wins.");
    } else if (this.human.move === this.computer.move) {
      console.log("It's a tie.");
    } else {
      console.log("You win.");
    }
  },

  setScoreAnalysis() {
    if (this.computerWin()) {
      this.computer.updateScore();
      this.computer.addHumanLost();
    } else if (this.human.move !== this.computer.move) {
      this.human.updateScore();
      this.computer.addHumanWin();
    }
  },

  displayGoodbyeMessage() {
    console.log(MSG.goodbye);
  },

  displayGameWinner() {
    if (this.computer.score > this.human.score) {
      console.log(`You lost. Better luck next time.`);
    } else {
      console.log(`Congrats! You won.`);
    }
  },

  displayScore() {
    this.human.displayScore();
    this.computer.displayScore();
  },

  resetScore() {
    this.human.resetScore();
    this.computer.resetScore();
  },

  displayHistory() {
    this.computer.displayHistory();
    this.human.displayHistory();
  },

  displayRoundWinnerScore() {
    this.displayRoundWinner();
    this.displayScore();
  },

  choseDisplay() {
    this.human.choose();
    this.human.displayChoice();
    this.computer.choose();
    this.computer.displayChoice();
  },

  play() {
    do {
      this.displayWelcomeMessage();
      while ( this.computer.score < TOTAL_WINS &&
      this.human.score < TOTAL_WINS) {
        this.choseDisplay();
        this.setScoreAnalysis();
        this.displayRoundWinnerScore();
      }
      this.displayGameWinner();
      this.human.replayGame();
      this.resetScore();
    } while (this.human.replay === YES);
    this.displayGoodbyeMessage();
    this.displayHistory();
    this.computer.displayAnalysis();
  },
};

function createHumanDisplay() {
  return {
    displayChoice() {
      console.log(`You chose: ${this.move}`);
    },

    displayScore() {
      console.log(`Your score: ${this.score}`);
    },

    displayHistory() {
      console.log("Your moves:", this.history);
    },
  };
}

function createReplay() {
  return {
    replay: null,

    replayGame() {
      this.replay = RL.question(MSG.replay).toLowerCase();
      while (this.replay !== YES && this.replay !== NO) {
        this.replay = RL.question(MSG.replayInvalid);
      }
    },
  };
}

function createHuman() {
  const player = createPlayer();
  const display = createHumanDisplay();
  const replay = createReplay();
  const humanObject = {
    choose() {
      this.move = RL.question(MSG.choose).toLowerCase();
      while (!player.choices.includes(this.move)) {
        this.move = RL.question(MSG.chooseInvalid);
      }
      this.addToHistory();
    },
  };
  return Object.assign(player, display, replay, humanObject);
}

function createAnalysis() {
  const analysis = {
    analysis: {
      rock: [],
      paper: [],
      scissors: [],
      lizard: [],
      spock: [],
    },
    humanWins: [],

    addHumanWin() {
      this.analysis[this.move].push(HUMAN_WIN);
    },
    addHumanLost() {
      this.analysis[this.move].push(HUMAN_LOST);
    }
  };
  const getWins = createGetWins();
  return Object.assign(analysis, getWins);
}

function createGetWins() {
  return {
    getOver60() {
      for (let move in this.analysis) {
        let sum = this.analysis[move].reduce((a,b) => a + b, 0);
        if ((sum / this.analysis[move].length) > WEIGHT_DEC) {
          this.humanWins.push(move);
        }
      }
    },
  };
}

function createWeight() {
  const weight =  {
    weight: {
      rock: INIT_WIEGHT,
      paper: INIT_WIEGHT,
      scissors: INIT_WIEGHT,
      lizard: INIT_WIEGHT,
      spock: INIT_WIEGHT,
    }
  };
  const setWeight = createSetWeight();
  return Object.assign(weight, setWeight);
}

function createSetWeight() {
  return {
    setWeight() {
      for (let move in this.weight) {
        if (!this.humanWins.includes(move)) {
          let winsLen = this.humanWins.length;
          let choicesLen = this.choices.length;
          let remainder = ((1 - WEIGHT_DEC) * winsLen) / (choicesLen - winsLen);
          this.weight[move] = 1 + remainder;
        } else {
          this.weight[move] = WEIGHT_DEC;
        }
      }
    },
  };
}

function createIntervals() {
  return {
    intervals: {},

    setIntervals() {
      this.intervals.ro = Math.ceil(INIT_INTERVAL * this.weight.rock);
      this.intervals.pa = Math.ceil(INIT_INTERVAL * this.weight.paper);
      this.intervals.sc = Math.ceil(INIT_INTERVAL * this.weight.scissors);
      this.intervals.li = Math.ceil(INIT_INTERVAL * this.weight.lizard);
      this.intervals.sp = Math.ceil(INIT_INTERVAL * this.weight.spock);
    },

  };
}

function createRanges() {
  return {
    ranges: {},

    setRanges() {
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
    },
  };
}

function createRandomMove() {
  return {
    randomMove() {
      this.setIntervals();
      this.setRanges();

      let rand = Math.ceil(Math.random() * this.ranges.spE) + 1;
      if (rand >=  this.ranges.roS && rand <= this.ranges.roE) {
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
    },
  };
}

function createDisplay() {
  return {
    displayAnalysis() {
      console.log(MSG.analysis, this.analysis);
    },
    displayHistory() {
      console.log("Computer moves:", this.history);
    },

    displayChoice() {
      console.log(`Computer chose: ${this.move}`);
    },

    displayScore() {
      console.log(`Computer score: ${this.score}`);
    },
  };
}

function createComputer() {
  const player = createPlayer();
  const analysis = createAnalysis();
  const weight = createWeight();
  const intervals = createIntervals();
  const ranges = createRanges();
  const randomMove = createRandomMove();
  const display = createDisplay();
  const choose = {
    choose() {
      this.getOver60();
      this.setWeight();
      this.humanWins = [];
      this.randomMove();
      this.addToHistory();
    },
  };
  return Object.assign(player, analysis, weight, intervals, ranges,
    display, randomMove, choose);
}

function createPlayer() {
  return {
    move: null,
    score: INIT_SCORE,
    choices: [RO, PA, SC, LI, SP],
    history: [],

    addToHistory() {
      this.history.push(this.move);
    },

    updateScore() {
      this.score += 1;
    },

    resetScore() {
      this.score = INIT_SCORE;
    },
  };
}

RPSGame.play();