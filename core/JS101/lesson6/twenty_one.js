// VARIABLES
const RL = require("readline-sync");
const MSG = require("./twenty_one.json");
const USER = "user";
const DEALER = "dealer";
const HIT = 'h';
const STAY = 's';
const MAG_NUM = 21;
const HAND = "hand";
const TOTAL = "total";
const SCORE = "score";
const YES  = 'y';
const NO = 'n';
const CONTINUE = 'c';
const WIN_NUM = 5;
const INSTRUCTIONS = [MSG.instruction1, MSG.instruction2, MSG.instruction3,
  MSG.instruction4, MSG.instruction5, MSG.instruction6, MSG.instruction7];
const SUIT_NAMES = ["Clubs", "Diamonds", "Hearts", "Spaces"];
const SUIT_CARDS = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven",
  "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
const SUIT_MAP = {Ace : "ace", Two : 2, Three : 3, Four : 4, Five : 5,Six : 6,
  Seven : 7, Eight : 8, Nine : 9, Ten : 10, Jack : 10, Queen : 10, King : 10};
let isNewGame;

// CALLS
do {
  displayIntro();
  let ledger = initLedger();
  while (!isGameWinnerFound(ledger)) {
    let player = USER;
    let deck = initDeck();
    deck = getShuffledDeck(deck);
    resetHandTotal(ledger);
    initHand(ledger, deck, player);
    displayDealResult(ledger, player);
    while (true) {
      let choice = getValidInput(MSG.stayHit, MSG.invalidStayHit, HIT, STAY);
      hit(deck, ledger, USER, choice);
      if (isStay(choice) || isBusted(player, ledger)) break;
    }
    if (isBusted(player, ledger)) {
      incrementWinnerScore(MSG.lost, ledger);
      displayRoundResult(ledger, MSG.lost);
    } else {
      player = DEALER;
      dealersPlay(deck, ledger, player);
    }
  }
  displayGameResult(ledger);
  isNewGame = getValidInput(MSG.newGame, MSG.invalidNewGame, YES, NO);
} while (isNewGame === YES);

//FUNCTIONS
function displayIntro() {
  console.log(`${MSG.halfDiv}${MSG.welcome}${MSG.halfDiv}`);
  for (let idx = 0; idx < INSTRUCTIONS.length; idx++) {
    console.log(INSTRUCTIONS[idx]);
  }
  console.log();
  next(MSG.nextRound, CONTINUE);
}

function initLedger() {
  return {
    user: {hand: [], total: 0, score: 0},
    dealer: {hand: [], total: 0, score: 0}
  };
}

function initDeck() {
  return SUIT_NAMES.map(suitName =>
    SUIT_CARDS.map(suitCard =>
      suitCard + " of " + suitName)).flat();
}

function getShuffledDeck(deck) {
  for (let shuffle = 1; shuffle <= 3; shuffle++) {
    deck = splitDeck(deck, 0);
    deck = shuffleDeck(deck);
  }
  return deck;
}

function initHand(ledger, deck) {
  for (let draw = 1; draw <= 2; draw++) {
    deal(ledger, deck, DEALER);
    deal(ledger, deck, USER);
  }
}

function resetHandTotal(ledger) {
  setLedgerVal(ledger, USER, HAND, []);
  setLedgerVal(ledger, USER, TOTAL, 0);
  setLedgerVal(ledger, DEALER, HAND, []);
  setLedgerVal(ledger, DEALER, TOTAL, 0);
}

function isGameWinnerFound(ledger) {
  let userScore = getLedgerVal(ledger, USER, SCORE);
  let dealerScore = getLedgerVal(ledger, DEALER, SCORE);
  return userScore === WIN_NUM || dealerScore === WIN_NUM;
}

function getValidInput(msg, invalidMsg, validInput1, validInput2) {
  let input = getInput(msg, MSG.inputMkr).toLowerCase();
  while (input !== validInput1 && input !== validInput2) {
    input = getInput(invalidMsg, MSG.inputMkr);
  }
  console.clear();
  return input;
}

function hit(deck, ledger, player, choice) {
  if (isHit(choice)) {
    deal(ledger, deck, player);
    displayDealResult(ledger, player);
  }
}

function isHit(choice) {
  return choice === HIT;
}

function isStay(choice) {
  return choice === STAY;
}

function isBusted(player, ledger) {
  let curTotal = evalTotal(ledger, player);
  return curTotal > MAG_NUM;
}

function dealersPlay(deck, ledger, player) {
  let dealerTotal = evalTotal(ledger, DEALER);
  while (true) {
    if (dealerTotal > 15 || isBusted(player,ledger)) break;
    deal(ledger, deck, player);
    dealerTotal = evalTotal(ledger, player);
  }
  if (isBusted(player,ledger)) {
    incrementScore(ledger, USER);
    displayRoundResult(ledger, MSG.won);
  } else {
    let result = getStayResult(ledger);
    incrementWinnerScore(result, ledger);
    displayRoundResult(ledger, result);
  }
}

function displayGameResult(ledger) {
  let userScore = getLedgerVal(ledger, USER, SCORE);
  let dealerScore = getLedgerVal(ledger, DEALER, SCORE);
  if (userScore > dealerScore) {
    console.log(`${MSG.halfDiv}${MSG.gameWon}${MSG.halfDiv}`);
  } else {
    console.log(`${MSG.halfDiv}${MSG.gameLost}${MSG.halfDiv}`);
  }
}

//HELPER FUNCTIONS
function splitDeck(deck, start) {
  let randNumSub = getRandNum();
  let newDeck = [];
  for (let sub = start; sub < deck.length; sub += randNumSub) {
    newDeck.push(deck.slice(sub, sub + randNumSub));
  }
  return newDeck;
}

function shuffleDeck(newDeck) {
  const half = Math.floor(newDeck.length / 2);
  const firstHalf = newDeck.splice(0, half);
  const secondHalf = newDeck.splice(0);
  while (firstHalf.length > 0) {
    newDeck.push(firstHalf.pop(), secondHalf.pop());
  }
  if (secondHalf.length > 0) newDeck.push(secondHalf.splice(0).flat());
  return newDeck.flat();
}

function getRandNum() {
  return Math.floor(((Math.random() * (5 - 1)) + 1) );
}

function setLedgerVal(ledger, player, prop, val) {
  ledger[player][prop] = val;
}

function deal(ledger, deck, player) {
  setHand(ledger, player, deck);
  setTotal(ledger, player, deck);
}

function setHand(ledger, player, deck) {
  let hand = getLedgerVal(ledger, player, HAND);
  hand.push(draw(deck));
}

function draw(deck) {
  return deck.shift();
}

function getDealtCard(ledger, player) {
  let hand = getLedgerVal(ledger, player, HAND);
  return hand.slice(hand.length - 1)[0];
}

function setTotal(ledger, player) {
  let total = getLedgerVal(ledger, player, TOTAL);
  let dealtCard = getDealtCard(ledger, player);
  let val = nameToKeyVal(dealtCard, SUIT_MAP);
  if (typeof val === "number") {
    total += val;
    setLedgerVal(ledger, player, TOTAL, total);
  }
}

function evalTotal(ledger, player) {
  let hand = getLedgerVal(ledger, player, HAND);
  let aceCards = hand.filter(card => nameToKeyVal(card, SUIT_MAP) === "ace");
  let total = addAceByFunc(ledger, player, aceCards);
  return total > MAG_NUM ? addAceByOne(ledger, player, aceCards) : total;
}

function nameToKeyVal(card, SUIT_MAP) {
  let cardKey = card.split(" ")[0];
  return SUIT_MAP[cardKey];
}

function addAceByOne(ledger, player, aceVals) {
  let total = getLedgerVal(ledger, player, TOTAL);
  for (let val = 0; val < aceVals.length; val++) {
    total += 1;
  }
  return total;
}

function addAceByFunc(ledger, player, aceVals) {
  let total = getLedgerVal(ledger, player, TOTAL);
  for (let val = 0; val < aceVals.length; val++) {
    total += defineAce(total);
  }
  return total;
}

function defineAce(total) {
  return (total + 11) <= MAG_NUM  ? 11 : 1;
}

function displayDealResult(ledger, player) {
  let card = [getLedgerVal(ledger, DEALER, HAND)[0]];
  let cardVal = revealCard(ledger);
  displayStats(ledger, MSG.uTotal, MSG.dCard, MSG.uScore, MSG.dScore, cardVal);
  console.log(MSG.divider);
  displayMsg(`${MSG.dealer}${formatString(card)}`);
  displayHandTotal(ledger, player);
}

function revealCard(ledger) {
  let card = getLedgerVal(ledger, DEALER, HAND)[0];
  return nameToKeyVal(card, SUIT_MAP);
}

function displayStats (ledger, uLabel1, dLabel1, uLabel2, dLabel2, val) {
  let userCurTotal = evalTotal(ledger, USER);
  let userScore = getLedgerVal(ledger, USER, SCORE);
  let dealerScore = getLedgerVal(ledger, DEALER, SCORE);
  console.log(MSG.curStats);
  console.log(`${uLabel1} ${userCurTotal}      ${dLabel1} ${val}`);
  console.log(`${uLabel2} ${userScore}       ${dLabel2} ${dealerScore}`);
}

function displayHandTotal(ledger, player) {
  let cards = getLedgerVal(ledger, player, HAND);
  let msg = player === USER ? MSG.user : MSG.dealer;
  displayMsg(`${msg}${formatString(cards)}`);
}

function formatString(cards) {
  let formatStr = "";
  for (let card = 0; card < cards.length; card++) {
    formatStr += "   " + cards[card] + "\n";
  }
  return formatStr;
}

function displayRoundResult(ledger, msg) {
  console.clear();
  let total = evalTotal(ledger, DEALER);
  displayStats(ledger, MSG.uTotal, MSG.dTotal, MSG.uScore, MSG.dScore,total);
  console.log(`${MSG.halfDiv}${msg}${MSG.halfDiv}`);
  displayHandTotal(ledger, USER);
  displayHandTotal(ledger, DEALER);
  next(MSG.nextRound, CONTINUE);
}

function next(msg, validInput) {
  let input = getInput(msg, MSG.nextMkr).toLowerCase();
  while (input !== validInput) {
    input = getInput(msg, MSG.nextMkr);
  }
  console.clear();
}

function getInput(msg, marker) {
  displayMsg(msg);
  return RL.question(marker);
}

function displayMsg(msg) {
  console.log(`=> ${msg}`);
}

function getStayResult(ledger) {
  let userTotal = evalTotal(ledger, USER);
  let dealerTotal = evalTotal(ledger, DEALER);
  if (userTotal === dealerTotal) return MSG.tie;
  return userTotal < dealerTotal ? MSG.lost : MSG.won;
}

function incrementWinnerScore(result, ledger) {
  if (result === MSG.won) incrementScore(ledger, USER);
  if (result === MSG.lost) incrementScore(ledger, DEALER);
}

function incrementScore(ledger, player) {
  let score = getLedgerVal(ledger, player, SCORE);
  score += 1;
  setLedgerVal(ledger, player, SCORE, score);
}

function getLedgerVal(ledger, player, prop) {
  return ledger[player][prop];
}