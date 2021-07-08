class Turn extends Game {
  constructor(players, turnLeft) {
    super(players, turnLeft );
    this.turnNumber = 10 - turnLeft;
  }

  startTurn() {
    alert(`It's turn ${this.turnNumber}`);
    this.setHasplayedToFalse(this.playersAlive());
    this.deactivateFigthersSpe(this.playersAlive());
    this.performAssassination(this.playersAlive())
  }

  pickPlayerRandomly(players) {
    let randomPlayer = players[Math.floor(Math.random() * players.length)];
    alert(`${randomPlayer.name}, it is your turn`);
    return randomPlayer;
  }

  playerActionsMenu(player) {
    let playerResponse = prompt(`${player.name}, what would you like to do ?\nPress [0] to see your own stats \nPress [1] to see the stats of the other players \nPress [2] to attack another player \nPress [3] to see your special move \nPress [4] to use your special move`);

    switch (playerResponse) {
      case '0':
        this.watchStatsCurrentPlayer(player);
        this.playerActionsMenu(player);
      break;

      case '1':
        this.watchStatsOtherPlayers(player);
        this.playerActionsMenu(player);
      break;

      case '2':
        player.dealDamage(this.chooseTarget(player))     
      break;

      case '3':
        player.seeSpecialMove();     
        this.playerActionsMenu(player);
      break;

      case '4':
        if (player.constructor.name == 'Fighter' || player.constructor.name == 'Paladin' || player.constructor.name == 'Wizard'|| player.constructor.name == 'Hunter' || player.constructor.name == 'Assassin') {
          player.specialMove(this.chooseTarget(player));
        } else {
          player.specialMove();
        }    
      break;
       
      default:
        alert('Sorry, I did not understand. Please try again!');
        this.playerActionsMenu(player);
    }

    player.hasplayed = true;
  }

  chooseTarget(player) {
    //Removing oneself fron the targets 
    let targets = this.playersAlive().filter(target => target != player);

    //Array of indexes of target, later used to match the user response with targets array
    let indexes = Array.from(Array(targets.length).keys());

    //Code to get the whole question in one prompt only
    let question = `${player.name}, Who would you like to attack?`;
    for (let i in targets) {
      question += `\nPress [${i}] to attack ${targets[i].name}`;
    }
    let playerResponse = prompt(question);


    if (indexes.includes(parseInt(playerResponse))) {
      return targets[parseInt(playerResponse)];
    } else {
      alert('Sorry, I did not understand. Please try again!');
      this.chooseTarget(player);
    }
  }

  playersAliveAndHaventPlayed() {
    return this.playersAlive().filter(player => player.hasplayed == false);
  }

  turnPlay() {
    while (this.playersAliveAndHaventPlayed().length > 0) {
      this.playerActionsMenu(this.pickPlayerRandomly(this.playersAliveAndHaventPlayed()));
    }
  }

  watchStatsOtherPlayers(player) {
    this.watchStats(this.playersAlive().filter(p => p != player))
  }

  watchStatsCurrentPlayer(player) {
    this.watchStats(this.playersAlive().filter(p => p == player))
  }

  setHasplayedToFalse(players) {
    players.map(player => player.hasplayed = false);
  }

  deactivateFigthersSpe(players) {
    players.filter(player => player.constructor.name == 'Fighter').map(player => player.resetSpeactivatedToFalse());
  }

  // activateAssassinSpe(players) {
  //   players.filter(player => player.constructor.name == 'Assassin').map(player => player.speactivated += 1);
  // }

  deactivateAssassinsSpe(players) {
    players.filter(player => player.constructor.name == 'Assassin').map(player => player.resetSpeactivatedToFalse());
  }

  performAssassination(players) {
    players.filter(player => player.constructor.name == 'Assassin').filter(player => player.target != 0).map(player => player.assassination());
  }
}