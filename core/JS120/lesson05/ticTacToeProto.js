'use strict';
// MODULES
const RL = require('readline-sync');
const MSG = require('./tictactoe_msg.json');

const DisplayMsg = {
  displayMsg(msg) {
    console.log(`=> ${msg}`);
  }
};

function Board() {
  this.marks = {};
  for (let ptn = 1; ptn <= 9; ptn++) {
    this.marks[String(ptn)] = Board.INIT_MARK;
  }
}

Board.INIT_MARK = ' ';
Board.HUMAN_MARK = 'X';
Board.COMP_MARK = 'O';
Board.HORZ_LINE = `---+---+---`;
Board.MID_PTN = 5;

Board.prototype.displayRow = function(mark1, mark2, mark3) {
  console.log(`   |   |   `);
  console.log(` ${mark1} | ${mark2} | ${mark3} `);
  console.log(`   |   |   `);
};
Board.prototype.displayBoard = function() {
  this.displayRow(this.marks['1'], this.marks['2'], this.marks['3']);
  console.log(Board.HORZ_LINE);
  this.displayRow(this.marks['4'], this.marks['5'], this.marks['6']);
  console.log(Board.HORZ_LINE);
  this.displayRow(this.marks['7'], this.marks['8'], this.marks['9']);
};
Board.prototype.getAvailPtns = function() {
  let cb = key => this.marks[key] === Board.INIT_MARK;
  return Object.keys(this.marks).filter(cb);
};
Board.prototype.isBoardFull = function() {
  return this.getAvailPtns().length === 0;
};
Board.prototype.joinOr = function (separator, conj) {
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
};

Board.prototype.setBoard = function(ptn, marker) {
  this.marks[ptn] = marker;
};

function Player() {
  this.score = Player.INIT_SCORE;
}
Player.INIT_SCORE = 0;

Player.prototype.setScore = function() {
  this.score += 1;
};
Player.prototype.getScore = function() {
  return this.score;
};
Object.assign(Player.prototype,DisplayMsg);

function Human() {
  Player.call(this);
}
Human.INPUT_NO = 'n';
Human.INPUT_YES = 'y';
Human.P_HUMAN = 'human';

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;
Human.prototype.getValidUserInput = function(msg) {
  this.displayMsg(msg);
  let input = RL.question("Your answer: ");
  input = input.toLowerCase();
  while (input !== Human.INPUT_YES && input !== Human.INPUT_NO) {
    this.displayMsg(MSG.invalidInput);
    input = RL.question("Your answer: ");
  }
  return input;
};

function Computer() {
  Player.call(this);
}
Computer.P_COMP = "computer";
Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

function Game() {
  this.firstPlayer = null;
  this.newGame = null;
  this.curPlayer = null;
  this.human = null;
  this.computer = null;
  this.board = null;
}

Game.WIN_KEY_COMBOS = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
Game.WIN_SCORE = 5;

Game.prototype.initGame = function() {
  this.human = new Human();
  this.computer = new Computer();
};
Game.prototype.initRound = function() {
  this.setFirstPlayer();
  this.curPlayer = this.firstPlayer;
  this.board = new Board();
  this.displayScores();
};
Game.prototype.endGame = function() {
  this.displayGameRs();
  this.isNewGame = this.human.getValidUserInput(MSG.newGame);
  this.clearDisplay();
};
Game.prototype.playRound = function() {
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
};

Game.prototype.playGame = function() {
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
};
Game.prototype.clearDisplay = function() {
  console.clear();
};
Game.prototype.displayIntro = function() {
  this.clearDisplay();
  this.displayMsg(MSG.welcome);
  this.displayMsg(MSG.instructions);
  this.displayMsg(`Be the first to score ${Game.WIN_SCORE} points to win the game.`);
  this.displayMsg(MSG.instructions2);
};
Game.prototype.isGameWinnerFound = function() {
  return this.computer.getScore() === Game.WIN_SCORE ||
  this.human.getScore() === Game.WIN_SCORE;

};
Game.prototype.setFirstPlayer = function() {
  let isFirstPlayer = this.human.getValidUserInput(MSG.firstMove);
  if (isFirstPlayer === Human.INPUT_YES) {
    this.firstPlayer = Human.P_HUMAN;
  } else {
    this.firstPlayer = Human.P_COMP;
  }
};
Game.prototype.displayResultSetScore = function() {
  if (this.curPlayer === Human.P_HUMAN) {
    this.displayMsg(MSG.won);
    this.human.setScore();
  } else {
    this.displayMsg(MSG.lost);
    this.computer.setScore();
  }
  this.displayScores();
};
Game.prototype.displayScores = function() {
  this.displayMsg(`Your current score: ${this.human.getScore()}`);
  this.displayMsg(`Opponent's current score: ${this.computer.getScore()}`);
};
Game.prototype.displayGameRs = function() {
  let msg = this.computer.getScore() < this.human.getScore() ? `${MSG.wonGme}` : `${MSG.lostGme}`;
  this.displayMsg(msg);
};
Game.prototype.isRoundWinnerFound = function() {
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
};
Game.prototype.alternatePlayer = function () {
  this.clearDisplay();
  return this.curPlayer === Human.P_HUMAN ? Computer.P_COMP : Human.P_HUMAN;
};
Game.prototype.displayRoundRs = function() {
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
};
/////computer methods
Game.prototype.choosePtn = function(marker,cb) {
  let ptn = cb();
  this.board.setBoard(ptn, marker);
};

Game.prototype.getMidPtn = function () {
  let isAvPtn = this.board.getAvailPtns().includes(String(Board.MID_PTN));
  return isAvPtn ? Board.MID_PTN : null;
};
Game.prototype.getValidRandPtn = function () {
  let availPtns = this.board.getAvailPtns();
  let availIndex = Math.floor((Math.random() * availPtns.length));
  return availPtns[availIndex];
};
Game.prototype.getValidOffDefPtn = function(marker) {
  for (let combo of Game.WIN_KEY_COMBOS) {
    let values = combo.map(key => this.board.marks[key]);
    if (values.filter(value => value === marker).length === 2) {
      let ptn = combo.find(key => this.board.marks[key] === Board.INIT_MARK);
      if (ptn !== undefined) return ptn;
    }
  }
  return null;
};
Game.prototype.getOptPtn = function() {
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
};
///Human Methods
Game.prototype.getValidUserPtn = function () {
  let availPtns = this.board.getAvailPtns();
  let ptn = this.getUserPtn();
  while (!availPtns.includes(ptn)) {
    ptn = this.getUserPtn();
  }
  return ptn;
};
Game.prototype.getUserPtn = function() {
  this.displayMsg(`Choose a position: ${this.board.joinOr( ', ')}`);
  return RL.question('Your position (X): ');
};
Object.assign(Game.prototype,DisplayMsg);

const game = new Game();
game.playGame();