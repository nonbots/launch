const readline = require("readline-sync");
//board, player, computer, human, game 
//computer => player
//human => player 

//game collaborate with computer and human 
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

class Board {
  constructor() {
    this.board = {};
  }

  initialize() {
    for (let square = 1; square <= 9; square++) {
      this.board[String(square)] = INITIAL_MARKER;
    }
    return this.board;
  }

  display() {
    console.clear();

    console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  
    console.log('');
    console.log('     |     |');
    console.log(`  ${this.board['1']}  |  ${this.board['2']}  |  ${this.board['3']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${this.board['4']}  |  ${this.board['5']}  |  ${this.board['6']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${this.board['7']}  |  ${this.board['8']}  |  ${this.board['9']}`);
    console.log('     |     |');
    console.log('');
  }
  emptySquares() {
    return Object.keys(this.board).filter(key => this.board[key] === ' ');
  } 
  someoneWon() {
    return this.detectWinner();
  }
  detectWinner() {
    let winningLines = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
      [1, 5, 9], [3, 5, 7]             // diagonals
    ];
  
    for (let line = 0; line < winningLines.length; line++) {
      let [ sq1, sq2, sq3 ] = winningLines[line];
  
      if (
          this.board[sq1] === HUMAN_MARKER &&
          this.board[sq2] === HUMAN_MARKER &&
          this.board[sq3] === HUMAN_MARKER
      ) {
        return 'Player';
      } else if (
          this.board[sq1] === COMPUTER_MARKER &&
          this.board[sq2] === COMPUTER_MARKER &&
          this.board[sq3] === COMPUTER_MARKER
      ) {
        return 'Computer';
      }
    }
  
    return null;
  }
  boardFull() {
    return this.emptySquares().length === 0;
  }
}


class Computer{
  computerChoosesSquare(board) {
    let randomIndex = Math.floor(Math.random() * board.emptySquares().length);
    let square = board.emptySquares()[randomIndex];
    board.board[square] = COMPUTER_MARKER;
  }
} 

class Human {
  playerChoosesSquare(board, game) {
    let square;

  while (true) {
    game.prompt(`Choose a square (${board.emptySquares().join(', ')}):`);
    square = readline.question().trim();
    if (board.emptySquares().includes(square)) break;
    game.prompt("Sorry, that's not a valid choice.");
  }
  //board[square] = HUMAN_MARKER
  board.board[square] = HUMAN_MARKER;
  }
}

class TTTGame {
  constructor() {
    this.board = new Board()
    this.human = new Human();
    this.computer = new Computer();
  }
  // what objects should collaborate with game?
  prompt(msg) {
    console.log(`=> ${msg}`)
  }

  play() {

    while (true) {
    this.board.initialize();
      while (true) {
        this.board.display();     
        this.board.display();
        this.human.playerChoosesSquare(this.board, this);

        if (this.board.someoneWon() || this.board.boardFull()) break;
    
        this.computer.computerChoosesSquare(this.board);
        if (this.board.someoneWon() || this.board.boardFull()) break;
      }
    
      this.board.display();
    
      if (this.board.someoneWon()) {
        this.prompt(`${this.board.detectWinner()} won!`);
      } else {
        this.prompt("It's a tie!");
      }
    
      this.prompt('Play again?');
      let answer = readline.question().toLowerCase()[0];
      if (answer !== 'y') break;
    }
    
    this.prompt('Thanks for playing Tic Tac Toe!');
  }
}
// game.play()

let game = new TTTGame();
game.play();
// let board = new Board();
// board.initialize();
