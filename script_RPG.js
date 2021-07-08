const Grace = new Fighter('Grace');
const Ulder = new Paladin('Ulder');
const Moana = new Monk('Moana');
const Draven = new Berzerker('Draven');
const Carl = new Assassin('Carl');
const Gandalf = new Wizard('Gandalf');
const Geralt = new Hunter('Geralt');
let players = [Grace, Ulder, Moana, Draven, Carl, Gandalf, Geralt];
let p = [Carl, Moana]

const GAME = new Game(p);

alert("Welcome to THE JUNGLE");


while (GAME.turnLeft > 0 && !GAME.DidSomeoneWin()) {
  GAME.newTurn();
  let turn = new Turn(p, GAME.turnLeft);
  turn.startTurn();
  turn.turnPlay();
}

GAME.gameOver();
