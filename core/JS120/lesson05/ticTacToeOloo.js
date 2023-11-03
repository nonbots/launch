const RL = require('readline-sync');
const MSG = require('./tictactoe_msg.json');
const DisplayMsg = {
  displayMsg(msg) {
    console.log(`=> ${msg}`);
  }
};
//create board object
const Board = {
  INIT_MARK: ' ',
  HUMAN_MARK: 'X',
  COMP_MARK: 'O',
  HORZ_LINE: `---+---+---`,
  MID_PTN: 5,
  init() {
    this.marks = {};
    for (let ptn = 1; ptn <= 9; ptn++) {
      this.marks[String(ptn)] = Board.INIT_MARK;
    }
    return this;
  },
  displayRow(mark1, mark2, mark3) {
    console.log(`   |   |   `);
    console.log(` ${mark1} | ${mark2} | ${mark3} `);
    console.log(`   |   |   `);
  },
  displayBoard() {
    this.displayRow(this.marks['1'], this.marks['2'], this.marks['3']);
    console.log(Board.HORZ_LINE);
    this.displayRow(this.marks['4'], this.marks['5'], this.marks['6']);
    console.log(Board.HORZ_LINE);
    this.displayRow(this.marks['7'], this.marks['8'], this.marks['9']);
  },
  getAvailPtns() {
    let cb = key => this.marks[key] === Board.INIT_MARK;
    return Object.keys(this.marks).filter(cb);
  },
  isBoardFull() {
    return this.getAvailPtns().length === 0;
  },
  joinOr(separator, conj) {
    let availPtns = this.getAvailPtns();
    if (availPtns.length === 1) {
      return availPtns[0];
    }
    if (availPtns.length === 2 && conj === undefined) {
      return `${availPtns[0]} or ${availPtns[1]}`;
    } else if (availPtns.length === 2 ) {
      return `${availPtns[0]} ${conj} ${availPtns[1]}`;
    }
    let availLastPtn = availPtns.splice(availPtns.length - 1);
    let availPtnsTrans = availPtns.join(separator);
    if (conj === undefined) {
      return `${availPtnsTrans}, or ${availLastPtn}`;
    }
    return `${availPtnsTrans}, ${conj} ${availLastPtn}`;
  },
  setBoard(ptn, marker) {
    this.marks[ptn] = marker;
  }
};

const PlayerPrototype = {
  INIT_SCORE: 0,
  initialize() {
    this.score = this.INIT_SCORE;
    return this;
  },
  setScore() {
    this.score += 1;
  },
  getScore() {
    return this.score;
  }
};
Object.assign(PlayerPrototype,DisplayMsg);
//create human sub object
// let player = Object.create(PlayerPrototype).initialize();
// console.log("PLAYER",player);
const Human = Object.create(PlayerPrototype);
Human.init = function() {
  return this.initialize();
};
Human.INPUT_NO = 'n';
Human.INPUT_YES = 'y';
Human.P_HUMAN = 'human';
Human.getValidUserInput = function(msg) {
  this.displayMsg(msg);
  let input = RL.question("Your answer: ");
  input = input.toLowerCase();
  while (input !== Human.INPUT_YES && input !== Human.INPUT_NO) {
    this.displayMsg(MSG.invalidInput);
    input = RL.question("Your answer: ");
  }
  return input;
};
// let human = Object.create(Human).init();
// console.log("HUMAN",human);
//create computer sub object
const Computer = Object.create(PlayerPrototype);
Computer.init = function() {
  return this.initialize();
};
Computer.P_COMP = "computer";
//create game object
const Game = {
  WIN_KEY_COMBOS: [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ],
  WIN_SCORE: 5,
  init() {
    this.firstPlayer = null;
    this.newGame = null;
    this.curPlayer = null;
    this.human = null;
    this.computer = null;
    this.board = null;
    return this;
  },
  initGame() {
    this.human = Object.create(Human).init();
    this.computer = Object.create(Computer).init();
  },
  initRound() {
    this.setFirstPlayer();
    this.curPlayer = this.firstPlayer;
    this.board = Object.create(Board).init();
    this.displayScores();
  },
  endGame() {
    this.displayGameRs();
    this.isNewGame = this.human.getValidUserInput(MSG.newGame);
    this.clearDisplay();
  },
  playRound() {
    while (true) {
      if (this.curPlayer === Human.P_HUMAN) {
        this.board.displayBoard();
        this.choosePtn(Board.HUMAN_MARK, this.getValidUserPtn.bind(this));
      } else {
        this.choosePtn(Board.COMP_MARK, this.getOptPtn.bind(this));
      }
      if (this.board.isBoardFull() || this.isRoundWinnerFound()) break;
      this.curPlayer = this.alternatePlayer();
    }
  },
  playGame() {
    this.displayIntro();
    do {
      this.initGame();
      while (!this.isGameWinnerFound()) {
        this.initRound();
        this.playRound();
        this.displayRoundRs();
      }
      this.endGame();
    } while (this.isNewGame === Human.INPUT_YES);
  },
  clearDisplay() {
    console.clear();
  },
  displayIntro() {
    this.clearDisplay();
    this.displayMsg(MSG.welcome);
    this.displayMsg(MSG.instructions);
    this.displayMsg(`Be the first to score ${Game.WIN_SCORE} points to win the game.`);
    this.displayMsg(MSG.instructions2);
  },
  isGameWinnerFound() {
    return this.computer.getScore() === Game.WIN_SCORE ||
    this.human.getScore() === Game.WIN_SCORE;

  },
  setFirstPlayer() {
    let isFirstPlayer = this.human.getValidUserInput(MSG.firstMove);
    if (isFirstPlayer === Human.INPUT_YES) {
      this.firstPlayer = Human.P_HUMAN;
    } else {
      this.firstPlayer = Human.P_COMP;
    }
  },
  displayResultSetScore() {
    if (this.curPlayer === Human.P_HUMAN) {
      this.displayMsg(MSG.won);
      this.human.setScore();
    } else {
      this.displayMsg(MSG.lost);
      this.computer.setScore();
    }
    this.displayScores();
  },
  displayScores() {
    this.displayMsg(`Your current score: ${this.human.getScore()}`);
    this.displayMsg(`Opponent's current score: ${this.computer.getScore()}`);
  },
  displayGameRs() {
    let msg = this.computer.getScore() < this.human.getScore() ? `${MSG.wonGme}` : `${MSG.lostGme}`;
    this.displayMsg(msg);
  },
  isRoundWinnerFound() {
    let isWinnerFound = false;
    for (let combo of Game.WIN_KEY_COMBOS) {
      let comboFirstVal = combo[0];
      isWinnerFound = combo.every(key => {
        if (this.board.marks[comboFirstVal] === ' ') return false;
        if (this.board.marks[comboFirstVal] === this.board.marks[key]) {
          return true;
        }
        return false;
      });
      if (isWinnerFound) return isWinnerFound;
    }
    return isWinnerFound;
  },
  alternatePlayer() {
    this.clearDisplay();
    return this.curPlayer === Human.P_HUMAN ? Computer.P_COMP : Human.P_HUMAN;
  },
  displayRoundRs() {
    this.board.displayBoard();
    if (this.isRoundWinnerFound()) {
      if (this.curPlayer === Human.P_HUMAN) {
        this.displayResultSetScore();
      } else {
        this.displayResultSetScore();
      }
    } else {
      this.displayMsg(MSG.tie);
    }
  },
  /////computer methods
  choosePtn(marker,cb) {
    let ptn = cb();
    this.board.setBoard(ptn, marker);
  },
  getMidPtn() {
    let isAvPtn = this.board.getAvailPtns().includes(String(Board.MID_PTN));
    return isAvPtn ? Board.MID_PTN : null;
  },
  getValidRandPtn() {
    let availPtns = this.board.getAvailPtns();
    let availIndex = Math.floor((Math.random() * availPtns.length));
    return availPtns[availIndex];
  },
  getValidOffDefPtn(marker) {
    for (let combo of Game.WIN_KEY_COMBOS) {
      let values = combo.map(key => this.board.marks[key]);
      if (values.filter(value => value === marker).length === 2) {
        let ptn = combo.find(key => this.board.marks[key] === Board.INIT_MARK);
        if (ptn !== undefined) return ptn;
      }
    }
    return null;
  },
  getOptPtn() {
    let ptn = this.getValidOffDefPtn(Board.COMP_MARK);
    if (ptn === null) {
      ptn = this.getValidOffDefPtn(Board.HUMAN_MARK);
    }
    if (ptn === null) {
      ptn = this.getMidPtn();
    }
    if (ptn === null) {
      ptn = this.getValidRandPtn();
    }
    return ptn;
  },
  getValidUserPtn() {
    let availPtns = this.board.getAvailPtns();
    let ptn = this.getUserPtn();
    while (!availPtns.includes(ptn)) {
      ptn = this.getUserPtn();
    }
    return ptn;
  },
  getUserPtn() {
    this.displayMsg(`Choose a position: ${this.board.joinOr( ', ')}`);
    return RL.question('Your position (X): ');
  }
};
Object.assign(Game,DisplayMsg);
const game = Object.create(Game).init();
game.playGame();