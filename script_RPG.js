const Grace = new Fighter('Grace');
const Ulder = new Paladin('Ulder');
const Moana = new Monk('Moana');
const Draven = new Berzerker('Draven');
const Carl = new Assassin('Carl');
const Gandalf = new Wizard('Gandalf');
const Geralt = new Hunter('Geralt');
let players = [Grace, Ulder, Moana, Draven, Carl, Gandalf, Geralt];

const GAME = new Game(players);

alert("Welcome to THP Battle Royal!");
alert("Press enter to launch a party.");
alert("Great, lets, go!");


while (GAME.turnLeft > 0 && !GAME.DidSomeoneWin()) {
  GAME.newTurn();
  let turn = new Turn(players, GAME.turnLeft);
  turn.startTurn();
  turn.turnPlay();
}

GAME.gameOver();
