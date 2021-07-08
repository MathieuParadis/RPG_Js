class Game {
  constructor(players, turnLeft = 10) {
    this.players = players;
    this.turnLeft = turnLeft;
  }

  newTurn() {
    this.turnLeft -= 1;
  }

  playersAlive() {
    return this.players.filter(player => player.status == 'playing' || player.status == 'winner');
  }

  displayWinners() {
    let winners = players.filter(player => player.status == 'winner');
    return winners.length == 1 ? alert(`The winner is ${winners[0].name}`) : alert(`The winners are ${winners.map(winner => winner.name)}`);
  }

  gameOver() {
      alert("Game Over");

      //Change status of remaining players to winner
      this.playersAlive().map(player => player.changeStatusToWinner());
      this.displayWinners();
    }
  
  
  DidSomeoneWin() {
    if (this.turnLeft == 0 || this.playersAlive().length == 1) {
      return true;
    } 
  }

  watchStats(players) {
    players.map(player => alert(`Name: ${player.name} \nClass: ${player.constructor.name} \nHP: ${player.hp} \nDamage: ${player.dmg} \nMana: ${player.mana}`));
  }
}