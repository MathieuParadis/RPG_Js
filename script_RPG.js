const Grace = new Fighter('Grace');
const Ulder = new Paladin('Ulder');
const Moana = new Monk('Moana');
const Draven = new Berzerker('Draven');
const Carl = new Assassin('Carl');
let players = [Grace, Ulder, Moana, Draven, Carl];

const GAME = new Game(players);

while (GAME.turnLeft > 0) {
  GAME.newTurn();
  let turn = new Turn(players, GAME.turnLeft);
  turn.startTurn();
}

GAME.gameOver();


// let turn = new Turn