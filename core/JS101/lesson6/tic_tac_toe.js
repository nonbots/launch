// VARIABLES
const RL = require('readline-sync');
const MSG = require('./tictactoe_msg.json');
const HORZ_LINE = `---+---+---`;
const INIT_MARK = ' ';
const USER_MARK = 'X';
const COMP_MARK = 'O';
const WIN_SCORE = 5;
const INIT_SCORE = 0;
const MID_PTN = 5;
const P_USER = "user";
const P_COMP = "computer";
const INPUT_NO = 'n';
const INPUT_YES = 'y';
const WIN_KEY_COMBOS = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const board = {};
let isNewGame;

// CALLS
displayIntroInfo();
do {
  let scores = {};
  initObj(scores, INIT_SCORE);

  while (!isGameWinnerFound(scores)) {
    let curPlayer = getPlayerToStart();
    initObj(board, INIT_MARK);
    displayScores(scores);

    while (true) {
      if (curPlayer === P_USER) displayBoard(board);
      choosePtn(curPlayer, board);
      if (isBoardFull(board) || isWinnerFound(board)) break;
      curPlayer = alternatePlayer(curPlayer);
    }

    displayRoundRs(curPlayer, scores, board);
  }

  displayGameRs(scores);
  isNewGame = getValidUserInput(MSG.newGame);
  console.clear();
} while (isNewGame === INPUT_YES);

// FUNCTIONS
function displayIntroInfo() {
  console.clear();
  displayMsg(MSG.welcome);
  displayMsg(MSG.instructions);
  displayMsg(`Be the first to score ${WIN_SCORE} points to win the game.`);
  displayMsg(MSG.instructions2);
}

function initObj(obj, value) {
  if (value === INIT_MARK) {
    for (let ptn = 1; ptn <= 9; ptn++) {
      obj[String(ptn)] = value;
    }
  } else {
    obj[P_COMP] = value;
    obj[P_USER] = value;
  }
}

function isGameWinnerFound(scores) {
  return scores[P_COMP] === WIN_SCORE || scores[P_USER] === WIN_SCORE;
}

function getPlayerToStart() {
  let isFirstMove = getValidUserInput(MSG.firstMove);
  return isFirstMove === INPUT_YES ? P_USER : P_COMP;
}

function displayScores(scores) {
  displayMsg(`Your current score: ${scores[P_USER]}`);
  displayMsg(`Opponent's current score: ${scores[P_COMP]}`);
}

function displayBoard(board) {
  displayRow(board['1'], board['2'], board['3']);
  console.log(HORZ_LINE);
  displayRow(board['4'], board['5'], board['6']);
  console.log(HORZ_LINE);
  displayRow(board['7'], board['8'], board['9']);
}

function choosePtn(curPlayer, board) {
  if (curPlayer === P_USER) {
    let ptn = getValidUserPtn(board);
    setBoard(board, ptn, USER_MARK);
  } else {
    let ptn = getOptPtn(board);
    setBoard(board, ptn, COMP_MARK);
  }
}
function isBoardFull(board) {
  return getAvailPtns(board).length === 0;
}

function isWinnerFound(board) {
  let isWinnerFound = false;
  for (let combo of WIN_KEY_COMBOS) {
    let comboFirstValue = combo[0];
    isWinnerFound = combo.every(key => {
      if (board[comboFirstValue] === ' ') return false;
      if (board[comboFirstValue] === board[key]) return true;
      return false;
    });
    if (isWinnerFound) return isWinnerFound;
  }
  return isWinnerFound;
}

function alternatePlayer(curPlayer) {
  console.clear();
  return curPlayer === P_USER ? P_COMP : P_USER;
}

function displayRoundRs(curPlayer, scores, board) {
  displayBoard(board);
  if (isWinnerFound(board)) {
    if (curPlayer === P_USER) {
      displaySetScore(scores, P_USER);
    } else {
      displaySetScore(scores, P_COMP);
    }
  } else {
    displayMsg(MSG.tie);
  }
}

// HELPER FUNCTIONS
function displaySetScore(scores, player) {
  if (player === P_USER) {
    displayMsg(MSG.won);
  } else {
    displayMsg(MSG.lost);
  }
  setScore(scores, player);
  displayScores(scores);
}

function setScore(scores, player) {
  scores[player] += 1;
}

function setBoard(board, ptn, mark) {
  board[ptn] = mark;
}

function displayGameRs(scores) {
  let msg = scores[P_COMP] < scores[P_USER] ? `${MSG.wonGme}` : `${MSG.lostGme}`;
  displayMsg(msg);
}

function getValidUserInput(msg) {
  displayMsg(msg);
  let input = RL.question("Your answer: ");
  input = input.toLowerCase();
  while (input !== INPUT_YES && input !== INPUT_NO) {
    displayMsg(MSG.invalidInput);
    input = RL.question("Your answer: ");
  }
  return input;
}

function getAvailPtns(board) {
  return Object.keys(board).filter(key => board[key] === INIT_MARK);
}

function getValidRandPtn(board) {
  let availPtns = getAvailPtns(board);
  let availIndex = Math.floor((Math.random() * availPtns.length));
  return availPtns[availIndex];
}

function getOptPtn (board) {
  let ptn = getValidOffDefPtn(board, COMP_MARK);
  if (ptn === null) {
    ptn = getValidOffDefPtn(board, USER_MARK);
  }
  if (ptn === null) {
    ptn = getMidPtn(board, MID_PTN);
  }
  if (ptn === null) {
    ptn = getValidRandPtn(board);
  }
  return ptn;
}

function getValidOffDefPtn(board, marker) {
  for (let combo of WIN_KEY_COMBOS) {
    let values = combo.map(key => board[key]);
    if (values.filter(value => value === marker).length === 2) {
      let ptn = combo.find(key => board[key] === INIT_MARK);
      if (ptn !== undefined) return ptn;
    }
  }
  return null;
}

function getMidPtn(board, MID_PTN) {
  let isAvPtn = getAvailPtns(board).includes(String(MID_PTN));
  return isAvPtn ? MID_PTN : null;
}

function getValidUserPtn(board) {
  let availPtns = getAvailPtns(board);
  let ptn = getUserPtn(displayMsg,board);
  while (!availPtns.includes(ptn)) {
    ptn = getUserPtn(displayMsg, board);
  }
  return ptn;
}

function getUserPtn(displayMsg, board) {
  displayMsg(`Choose a position: ${joinOr(board, ', ')}`);
  return RL.question('Your position (X): ');
}

function joinOr (board, separator, conj) {
  let availPtns = getAvailPtns(board);
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

function displayRow(mark1, mark2, mark3) {
  console.log(`   |   |   `);
  console.log(` ${mark1} | ${mark2} | ${mark3} `);
  console.log(`   |   |   `);
}

function displayMsg(msg) {
  console.log(`=> ${msg}`);
}