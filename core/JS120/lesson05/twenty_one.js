const RL = require("readline-sync");
const MSG = require("./twenty_one.json");

class Deck {
  static SUIT_NAMES =  ["Clubs", "Diamonds", "Hearts", "Spaces"];
  static SUIT_CARDS = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven",
    "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
  static SUIT_MAP = {Ace : "ace", Two : 2, Three : 3, Four : 4, Five : 5,Six : 6,
    Seven : 7, Eight : 8, Nine : 9, Ten : 10, Jack : 10, Queen : 10, King : 10};
  constructor() {
    this.deck = Deck.SUIT_NAMES.map(suitName =>
      Deck.SUIT_CARDS.map(suitCard =>
        suitCard + " of " + suitName)).flat();
    // this.deck = ['Ace of Clubs', 'Three of Clubs', 'Nine of Clubs'];
  }
  getShuffledDeck() {
    for (let shuffle = 1; shuffle <= 3; shuffle++) {
      this.deck = this.splitDeck(0);
      this.deck = this.shuffleDeck();
    }
  }
  shuffleDeck() {
    const half = Math.floor(this.deck.length / 2);
    const firstHalf = this.deck.splice(0, half);
    const secondHalf = this.deck.splice(0);
    while (firstHalf.length > 0) {
      this.deck.push(firstHalf.pop(), secondHalf.pop());
    }
    if (secondHalf.length > 0) this.deck.push(secondHalf.splice(0).flat());
    return this.deck.flat();
  }
  splitDeck(start) {
    let randNumSub = this.getRandNum();
    let newDeck = [];
    for (let sub = start; sub < this.deck.length; sub += randNumSub) {
      newDeck.push(this.deck.slice(sub, sub + randNumSub));
    }
    return newDeck;
  }
  getRandNum() {
    return Math.floor(((Math.random() * (5 - 1)) + 1) );
  }
  getDeck() {
    return this.deck;
  }
}

class Player {
  constructor() {
    this.hand = [];
    this.total = 0;
    this.score = 0;
    this.busted = false;
  }
  getScore() {
    return this.score;
  }
  addScore() {
    this.score += 1;
  }
  resetScore() {
    this.score = 0;
  }
  resetHand() {
    this.hand = [];
  }
  getHand() {
    return this.hand;
  }

  getTotal() {
    return this.total;
  }
  addTotal(val) {
    this.total += val;
  }
  resetTotal() {
    this.total = 0;
  }
  getDealtCard() {
    let hand = this.getHand();
    return hand.slice(hand.length - 1)[0];
  }
  getBusted() {
    return this.busted;
  }
}

class User extends Player {
  static CONTINUE = 'c';
  static YES = 'y';
  static NO = 'n';
  static HIT = 'h';
  static STAY = 's';
  constructor() {
    super();
    this.choice = null;
    this.newGame = null;
  }

  isHit(choice) {
    return choice === User.HIT;
  }
  isStay(choice) {
    return choice === User.STAY;
  }
}

class Dealer extends Player {
  constructor() {
    super();
  }
}

class Game {
  static INSTRUCTIONS = [MSG.instruction1, MSG.instruction2, MSG.instruction3,
    MSG.instruction4, MSG.instruction5, MSG.instruction6, MSG.instruction7];
  static WIN_NUM = 2;
  static MAG_NUM = 21;
  constructor() {
    this.user = null;
    this.dealer = null;
    this.deck = null;
    this.newGame = null;
  }
  initGame() {
    this.user = new User();
    this.dealer = new Dealer();
    // this.deck = new Deck();
  }
  initRound() {
    this.deck = new Deck();
    this.deck.getShuffledDeck();
    this.resetHandTotal();
    this.initHand(this.deck);
    this.displayDealResult();
  }
  playRound() {
    while (true) {
      this.user.choice = this.getValidInput(MSG.stayHit, MSG.invalidStayHit, User.HIT, User.STAY);
      this.hit(this.user);
      if (this.user.isStay(this.user.choice) || this.isBusted(this.user)) break;
    }
    if (this.isBusted(this.user)) {
      this.incrementWinnerScore(MSG.lost);
      this.displayRoundResult(MSG.lost);
    } else {
      this.dealersPlay();
    }
  }
  playGame() {
    this.displayIntro();
    do {
      this.initGame();
      while (!this.isGameWinnerFound()) {
        this.initRound();
        this.playRound();
      }
      this.displayGameResult();
      this.newGame = this.getValidInput(MSG.newGame, MSG.invalidNewGame, User.YES, User.NO);
    } while (this.newGame === User.YES);
  }
  displayGameResult() {
    if (this.user.getScore() > this.dealer.getScore()) {
      console.log(`${MSG.halfDiv}${MSG.gameWon}${MSG.halfDiv}`);
    } else {
      console.log(`${MSG.halfDiv}${MSG.gameLost}${MSG.halfDiv}`);
    }
  }
  deal(player) {
    this.addHand(player);
    this.setTotal(player);
  }
  addHand(player) {
    player.getHand().push(this.draw(this.deck));
  }
  draw() {
    return this.deck.getDeck().shift();
  }
  hit(player) {
    if (player.isHit(player.choice)) {
      this.deal(player);
      this.displayDealResult();
    }
  }
  getValidInput(msg, invalidMsg, validInput1, validInput2) {
    let input = this.getInput(msg, MSG.inputMkr).toLowerCase();
    while (input !== validInput1 && input !== validInput2) {
      input = this.getInput(invalidMsg, MSG.inputMkr);
    }
    console.clear();
    return input;
  }
  getInput(msg, marker) {
    this.displayMsg(msg);
    return RL.question(marker);
  }
  next(msg) {
    let input = this.getInput(msg, MSG.nextMkr).toLowerCase();
    while (input !== User.CONTINUE) {
      input = this.getInput(msg, MSG.nextMkr);
    }
    console.clear();
  }
  resetHandTotal() {
    this.user.hand = [];
    this.user.total = 0;
    this.dealer.hand = [];
    this.user.total = 0;
    this.user.busted = false;
    this.dealer.total = 0;
    this.dealer.busted = false;
  }

  setTotal(player) {
    let dealtCard = player.getDealtCard();
    let val = this.nameToKeyVal(dealtCard, Deck.SUIT_MAP);
    if (typeof val === "number") {
      player.addTotal(val);
    }
  }
  initHand() {
    for (let card = 1; card <= 2; card += 1) {
      this.deal(this.user);
      this.deal(this.dealer);
    }
  }
  setBusted(player) {
    let total = this.evalTotal(player);
    if (total > Game.MAG_NUM) player.busted = true;
  }
  isBusted(player) {
    this.setBusted(player);
    return player.getBusted();
  }
  displayRoundResult(msg) {
    console.clear();
    let total = this.evalTotal(this.dealer);
    this.displayStats(MSG.uTotal, MSG.dTotal, MSG.uScore, MSG.dScore, total);
    console.log(`${MSG.halfDiv}${msg}${MSG.halfDiv}`);
    this.displayHandTotal(this.user);
    this.displayHandTotal(this.dealer);
    this.next(MSG.nextRound);
  }
  evalTotal(player) {
    let hand = player.getHand();
    let aceCards = hand.filter(card => this.nameToKeyVal(card, Deck.SUIT_MAP) === "ace");
    let total = this.addAceByFunc(player, aceCards);
    return total > Game.MAG_NUM ?  this.addAceByOne( player, aceCards) : total;
  }
  addAceByOne(player, aceVals) {
    let total = player.getTotal();
    for (let val = 0; val < aceVals.length; val++) {
      total += 1;
    }
    return total;
  }
  addAceByFunc(player, aceVals) {
    let total = player.getTotal();
    for (let val = 0; val < aceVals.length; val++) {
      total += this.defineAce(total);
    }
    return total;
  }
  defineAce(total) {
    return (total + 11) <= Game.MAG_NUM  ? 11 : 1;
  }
  nameToKeyVal(card) {
    let cardKey = card.split(" ")[0];
    return Deck.SUIT_MAP[cardKey];
  }
  displayIntro() {
    console.log(`${MSG.halfDiv}${MSG.welcome}${MSG.halfDiv}`);
    for (let idx = 0; idx < Game.INSTRUCTIONS.length; idx++) {
      console.log(Game.INSTRUCTIONS[idx]);
    }
    console.log();
    this.next(MSG.nextRound);
  }

  isGameWinnerFound() {
    return this.user.getScore() === Game.WIN_NUM || this.dealer.getScore() === Game.WIN_NUM;
  }
  dealersPlay() {
    let dealerTotal = this.evalTotal(this.dealer);
    while (true) {
      if (dealerTotal > 15 || this.isBusted(this.dealer)) break;
      this.deal(this.dealer);
      dealerTotal = this.evalTotal(this.dealer);
    }
    if (this.isBusted(this.dealer)) {
      this.user.addScore();
      this.displayRoundResult(MSG.won);
    } else {
      let result = this.getStayResult();
      this.incrementWinnerScore(result);
      this.displayRoundResult(result);
    }
  }
  incrementWinnerScore(result) {
    if (result === MSG.won) this.user.addScore();
    if (result === MSG.lost) this.dealer.addScore();
  }
  getStayResult() {
    let userTotal = this.evalTotal(this.user);
    let dealerTotal = this.evalTotal(this.dealer);
    if (userTotal === dealerTotal) return MSG.tie;
    return userTotal < dealerTotal ? MSG.lost : MSG.won;
  }
  displayDealResult() {
    let cards = [this.dealer.hand[0]];
    let cardVal = this.revealCard();
    this.displayStats(MSG.uTotal, MSG.dCard, MSG.uScore, MSG.dScore, cardVal);
    console.log(MSG.divider);
    this.displayMsg(`${MSG.dealer}${this.formatString(cards)}`);
    this.displayHandTotal(this.user);
  }
  displayHandTotal(player) {
    let cards = player.getHand();
    let msg = player instanceof User ? MSG.user : MSG.dealer;
    this.displayMsg(`${msg}${this.formatString(cards)}`);
  }
  revealCard() {
    let card = this.dealer.getHand()[0];
    return this.nameToKeyVal(card, Deck.SUIT_MAP);
  }
  formatString(cards) {
    let formatStr = "";
    for (let card = 0; card < cards.length; card++) {
      formatStr += "   " + cards[card] + "\n";
    }
    return formatStr;
  }
  displayStats ( uLabel1, dLabel1, uLabel2, dLabel2, val) {
    let userTotal = this.evalTotal(this.user);
    console.log(MSG.curStats);
    console.log(`${uLabel1} ${userTotal}      ${dLabel1} ${val}`);
    console.log(`${uLabel2} ${this.user.score}       ${dLabel2} ${this.dealer.score}`);
  }
  displayMsg(msg) {
    console.log(`=> ${msg}`);
  }
}

const game = new Game();
game.playGame();
