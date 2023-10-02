const readline = require("readline-sync");
// Objects linking other objects
//supertype
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const Board = {
  initialize() {
    for (let square = 1; square <= 9; square++) {
      this.squares[String(square)] = INITIAL_MARKER;
    }
    return this.squares;
  },
  display() {
    console.clear();

    console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  
    console.log('');
    console.log('     |     |');
    console.log(`  ${this.squares['1']}  |  ${this.squares['2']}  |  ${this.squares['3']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${this.squares['4']}  |  ${this.squares['5']}  |  ${this.squares['6']}`);
    console.log('     |     |');
    console.log('-----+-----+-----');
    console.log('     |     |');
    console.log(`  ${this.squares['7']}  |  ${this.squares['8']}  |  ${this.squares['9']}`);
    console.log('     |     |');
    console.log('');
  },
  emptySquares() {
    return Object.keys(this.squares).filter(key => this.squares[key] === ' ');
  },
  someoneWon() {
    return this.detectWinner();
  },
  detectWinner() {
    let winningLines = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
      [1, 5, 9], [3, 5, 7]             // diagonals
    ];
  
    for (let line = 0; line < winningLines.length; line++) {
      let [ sq1, sq2, sq3 ] = winningLines[line];
  
      if (
          this.squares[sq1] === HUMAN_MARKER &&
          this.squares[sq2] === HUMAN_MARKER &&
          this.squares[sq3] === HUMAN_MARKER
      ) {
        return 'Player';
      } else if (
          this.squares[sq1] === COMPUTER_MARKER &&
          this.squares[sq2] === COMPUTER_MARKER &&
          this.squares[sq3] === COMPUTER_MARKER
      ) {
        return 'Computer';
      }
    }
  
    return null;
  },
  boardFull() {
    return this.emptySquares().length === 0;
  },
   init() {
    this.squares = {};
    return this;
  }
}

let board = Object.create(Board).init()

const Human = {
  playerChoosesSquare(board, game) {
    let square;

  while (true) {
    game.prompt(`Choose a square (${board.emptySquares().join(', ')}):`);
    square = readline.question().trim();
    if (board.emptySquares().includes(square)) break;
    game.prompt("Sorry, that's not a valid choice.");
  }
  board.squares[square] = HUMAN_MARKER;
  },
}

const Computer = {
  computerChoosesSquare(board) {
    let randomIndex = Math.floor(Math.random() * board.emptySquares().length);
    let square = board.emptySquares()[randomIndex];
    board.squares[square] = COMPUTER_MARKER;
  }
}

const TTTGame = {
  prompt(msg) {
    console.log(`=> ${msg}`)
  },
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
  },

  init(){
    this.board = Object.create(Board).init();
    this.human = Object.create(Human)
    this.computer = Object.create(Computer)
    return this;
  }
}

let game = Object.create(TTTGame).init();
game.play();