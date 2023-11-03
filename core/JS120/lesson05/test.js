// console.log(global.__proto__ === Function.prototype);

// const globalPrototype = Object.getPrototypeOf(global);
// console.log(globalPrototype);
// console.log(global.hasOwnProperty("hasOwnProperty"));
// console.log(global.__proto__.hasOwnProperty("hasOwnProperty"));
// console.log(global.hasOwnProperty("constructor"));
// console.log(global.hasOwnProperty("global"));
// console.log(global.__proto__.__proto__ === Object.prototype);


// function compareFn(a, b) {
//   if (a < b) { // the comparison operator works with strings and numbers
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0;
// }
// function compareFn1(a, b) {
//   console.log(typeof a );
//   return a - b; // string - string returns NaN so it doesn't do anything to the calling array
// }
// // console.log(["string","boolean","bar",].sort(compareFn));
// // console.log([4,10,3,].sort(compareFn));
// console.log(["string","boolean","bar",].sort(compareFn1));
// console.log([4,10,3,].sort(compareFn1));
// require("./batman");
// require("./superman");
// let a = 'a';
// global.__proto__.c = 'c';
// d = 'd';
// global.e = 'e';
// console.log(global);
// // console.log(global.constructor);
// // console.log(global.__proto__.constructor);
// console.log(global.__proto__);
// console.log(global.hasOwnProperty('d'));
// console.log(global.hasOwnProperty('e'));


// console.log("TEST1____________________");
// console.log("THIS", this);
// console.log("TEST2____________________");
// [1, 2, 3].forEach(function() {
//   console.log(this);
// }, this); // ==> {} {} {}
// console.log("TEST3____________________");
// [1, 2, 3].forEach(function() {
//   console.log(this);
// }); // ==> global object with a bunch of properties and methods
// console.log("TEST4____________________");
// function func () {
//   console.log(this);
// }

// console.log("IMPLICIT CONTEXT:", func());
  // console.log(global.__proto__ ===  Object.prototype);// default prototype object 

// console.log(global.__proto__.__proto__ == Object.prototype);

// console.log(global.constructor.name);

// //global => {} ----[[Prototype]]--> {} --[[Prototype]] => Object.protoype

// const { log } = require("console");

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// let turk1 = {
//   firstName: 'Nhan',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func(); /// in variable object []
//   console.log(returnVal);
  // staticMethod1 = function() {
  //   console.log("static method 1");
// }

// logReturnVal.staticMethod = function() {
//   console.log("logReturnVal static method");
// }
// logReturnVal.staticVar = "staticVar";

// console.log(Object.getOwnPropertyNames(logReturnVal));
// console.log(logReturnVal.hasOwnProperty("staticMethod1"));
// console.log(global.hasOwnProperty("staticMethod1"));
// logReturnVal(turk.getDescription.bind(turk1));
// console.log(turk.getDescription());
// console.log(logReturnVal.hasOwnProperty("staticMethod1"));
// console.log(global.hasOwnProperty("staticMethod1"));

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }
}

class Human extends Player {
  makeMove(game) {
    rl.question(`${this.name}, enter a cell number to place ${this.symbol}: `, (cellIndex) => {
      game.handleTurn(parseInt(cellIndex) - 1);
    });
  }
}

class Computer extends Player {
  makeMove(game) {
    let cellIndex;
    do {
      cellIndex = Math.floor(Math.random() * 9);
    } while (game.board[cellIndex] !== '');
    console.log(`${this.name} is making a move...`);
    setTimeout(() => {
      game.handleTurn(cellIndex);
    }, 1000);
  }
}

class Game {
  constructor() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.currentPlayer = null;
    this.human = new Human('Human', 'X');
    this.computer = new Computer('Computer', 'O');
  }

  displayBoard() {
    console.log(`
      ${this.board[0]} | ${this.board[1]} | ${this.board[2]}
      ---------
      ${this.board[3]} | ${this.board[4]} | ${this.board[5]}
      ---------
      ${this.board[6]} | ${this.board[7]} | ${this.board[8]}
    `);
  }

  handleTurn(cellIndex) {
    if (this.board[cellIndex] !== '') {
      console.log('That cell is already taken. Please choose another.');
      this.currentPlayer.makeMove(this);
      return;
    }
    this.board[cellIndex] = this.currentPlayer.symbol;
    this.displayBoard();
    this.checkForWin();
    if (!this.isGameOver()) {
      this.currentPlayer = this.currentPlayer === this.human ? this.computer : this.human;
      if (this.currentPlayer === this.computer) {
        this.currentPlayer.makeMove(this);
      }
    }
  }

  isGameOver() {
    return this.board.every(cell => cell !== '');
  }

  checkForWin() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (this.board[a] !== '' && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        console.log(`${this.currentPlayer.name} wins!`);
        this.reset();
        return;
      }
    }
    if (this.isGameOver()) {
      console.log('Tie game!');
      this.reset();
      return;
    }
  }

  reset() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.currentPlayer = this.human;
    this.start();
  }

  start() {
    console.log('Welcome to Tic Tac Toe!');
    this.displayBoard();
    this.currentPlayer = this.human;
  }
}
let game = new Game();
game.start();
game.handleTurn();