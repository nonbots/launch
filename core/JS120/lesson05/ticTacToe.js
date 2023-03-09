// MODULES
const RL = require('readline-sync');
const MSG = require('./tictactoe_msg.json');

// CONSTANTS
const HORZ_LINE = `---+---+---`;
const INIT_MARK = ' ';
const HUMAN_MARK = 'X';
const COMP_MARK = 'O';
const WIN_SCORE = 5;
const INIT_SCORE = 0;
const MID_PTN = 5;
const P_HUMAN = "human";
const P_COMP = "computer";
const INPUT_NO = 'n';
const INPUT_YES = 'y';


//MIX-IN FOR PLAYER AND GAME CLASSES
const DisplayMsg = {
  displayMsg(msg) {
    console.log(`=> ${msg}`);
  }
};

// BOARD CLASS
class Board {
  constructor() {
    this.marks = {};
    for (let ptn = 1; ptn <= 9; ptn++) {
      this.marks[String(ptn)] = INIT_MARK;
    }
  }
  // initMarks() {
  //   for (let ptn = 1; ptn <= 9; ptn++) {
  //     this.marks[String(ptn)] = INIT_MARK;
  //   }
  // }
  displayRow(mark1, mark2, mark3) {
    console.log(`   |   |   `);
    console.log(` ${mark1} | ${mark2} | ${mark3} `);
    console.log(`   |   |   `);
  }
  displayBoard() {
    this.displayRow(this.marks['1'], this.marks['2'], this.marks['3']);
    console.log(HORZ_LINE);
    this.displayRow(this.marks['4'], this.marks['5'], this.marks['6']);
    console.log(HORZ_LINE);
    this.displayRow(this.marks['7'], this.marks['8'], this.marks['9']);
  }
  getAvailPtns() {
    return Object.keys(this.marks).filter(key => this.marks[key] === INIT_MARK);
  }
  isBoardFull() {
    return this.getAvailPtns().length === 0;
  }
  joinOr (separator, conj) {
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
  }
}

//PLAYER SUPER CLASS
class Player {
  constructor () {
    this.score = INIT_SCORE;
  }
  setScore () {
    this.score += 1;
  }
  getScore () {
    return this.score;
  }
}

// HUMAN SUB-CLASS
class Human extends Player {
  constructor() {
    super();
  }
  getValidUserPtn(board) {
    let availPtns = board.getAvailPtns();
    let ptn = this.getUserPtn(board);
    while (!availPtns.includes(ptn)) {
      ptn = this.getUserPtn( board);
    }
    return ptn;
  }
  getUserPtn(board) {
    this.displayMsg(`Choose a position: ${board.joinOr( ', ')}`);
    return RL.question('Your position (X): ');
  }
  choosePtn(board) {
    let ptn = this.getValidUserPtn(board);
    this.setBoard(board, ptn);
  }
  setBoard(board, ptn) {
    board.marks[ptn] = HUMAN_MARK;
  }
}

// COMPUTER SUB-CLASS
class Computer extends Player {
  constructor() {
    super();
  }
  choosePtn(board, WIN_KEY_COMBOS) {
    let ptn = this.getOptPtn(board, WIN_KEY_COMBOS);
    this.setBoard(board, ptn);
  }
  setBoard(board, ptn) {
    board.marks[ptn] = COMP_MARK;
  }
  getOptPtn (board,WIN_KEY_COMBOS) {
    let ptn = this.getValidOffDefPtn(board, COMP_MARK,WIN_KEY_COMBOS);
    if (ptn === null) {
      ptn = this.getValidOffDefPtn(board, HUMAN_MARK, WIN_KEY_COMBOS );
    }
    if (ptn === null) {
      ptn = this.getMidPtn(board, MID_PTN);
    }
    if (ptn === null) {
      ptn = this.getValidRandPtn(board);
    }
    return ptn;
  }
  getValidOffDefPtn(board, marker,WIN_KEY_COMBOS) {
    for (let combo of WIN_KEY_COMBOS) {
      let values = combo.map(key => board.marks[key]);
      if (values.filter(value => value === marker).length === 2) {
        let ptn = combo.find(key => board.marks[key] === INIT_MARK);
        if (ptn !== undefined) return ptn;
      }
    }
    return null;
  }
  getMidPtn(board) {
    let isAvPtn = board.getAvailPtns().includes(String(MID_PTN));
    return isAvPtn ? MID_PTN : null;
  }
  getValidRandPtn(board) {
    let availPtns = board.getAvailPtns();
    let availIndex = Math.floor((Math.random() * availPtns.length));
    return availPtns[availIndex];
  }
}
Object.assign(Player.prototype,DisplayMsg);

// GAME CLASS
class Game {
  static WIN_KEY_COMBOS = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];
  constructor() {
    this.firstPlayer = null;
    this.newGame = null;
    this.curPlayer = null;
    this.human = new Human();
    this.computer = new Computer();
    this.board = new Board();
  }
  initGame() {
    this.human = new Human();
    this.computer = new Computer();
    // this.board = new Board();
  }
  initRound() {
    this.setFirstPlayer();
    this.curPlayer = this.firstPlayer;
    // this.board.initMarks();
    this.board = new Board();
    this.displayScores();
  }
  endGame() {
    this.displayGameRs();
    this.isNewGame = this.getValidUserInput(MSG.newGame);
    this.clearDisplay();
  }
  playRound() {
    while (true) {
      if (this.curPlayer === P_HUMAN) {
        this.board.displayBoard();
        this.human.choosePtn(this.board, Game.WIN_KEY_COMBOS);
      } else {
        this.computer.choosePtn(this.board, Game.WIN_KEY_COMBOS);
      }
      if (this.board.isBoardFull() || this.isRoundWinnerFound()) break;
      this.curPlayer = this.alternatePlayer();
    }
  }
  play() {
    this.displayIntroInfo();
    do {
      this.initGame();
      while (!this.isGameWinnerFound()) {
        this.initRound();
        this.playRound();
        this.displayRoundRs();
      }
      this.endGame();
    } while (this.isNewGame === INPUT_YES);
  }
  clearDisplay() {
    console.clear();
  }
  displayIntroInfo() {
    console.clear();
    this.displayMsg(MSG.welcome);
    this.displayMsg(MSG.instructions);
    this.displayMsg(`Be the first to score ${WIN_SCORE} points to win the game.`);
    this.displayMsg(MSG.instructions2);
  }
  isGameWinnerFound() {
    return this.computer.getScore() === WIN_SCORE ||
    this.human.getScore() === WIN_SCORE;
  }
  setFirstPlayer() {
    let isFirstPlayer = this.getValidUserInput(MSG.firstMove);
    if (isFirstPlayer === INPUT_YES) {
      this.firstPlayer = P_HUMAN;
    } else {
      this.firstPlayer = P_COMP;
    }
  }
  getValidUserInput(msg) {
    this.displayMsg(msg);
    let input = RL.question("Your answer: ");
    input = input.toLowerCase();
    while (input !== INPUT_YES && input !== INPUT_NO) {
      this.displayMsg(MSG.invalidInput);
      input = RL.question("Your answer: ");
    }
    return input;
  }
  displayResultSetScore() {
    if (this.curPlayer === P_HUMAN) {
      this.displayMsg(MSG.won);
      this.human.setScore();
    } else {
      this.displayMsg(MSG.lost);
      this.computer.setScore();
    }
    this.displayScores();
  }
  displayScores() {
    this.displayMsg(`Your current score: ${this.human.getScore()}`);
    this.displayMsg(`Opponent's current score: ${this.computer.getScore()}`);
  }
  displayGameRs() {
    let msg = this.computer.getScore() < this.human.getScore() ? `${MSG.wonGme}` : `${MSG.lostGme}`;
    this.displayMsg(msg);
  }
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
  }
  alternatePlayer() {
    console.clear();
    return this.curPlayer === P_HUMAN ? P_COMP : P_HUMAN;
  }
  displayRoundRs() {
    this.board.displayBoard();
    if (this.isRoundWinnerFound()) {
      if (this.curPlayer === P_HUMAN) {
        this.displayResultSetScore();
      } else {
        this.displayResultSetScore();
      }
    } else {
      this.displayMsg(MSG.tie);
    }
  }
}
Object.assign(Game.prototype,DisplayMsg);

const game = new Game();
game.play();
