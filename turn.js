class Turn extends Game {
  constructor(players, turnLeft) {
    super(players, turnLeft );
    this.turnNumber = 10 - turnLeft;
  }

  startTurn() {
    alert(`It's turn ${this.turnNumber}`);
    this.playersAlive().map(player => player.hasplayed = false);
  }

  pickPlayerRandomly(players) {
    let randomPlayer = players[Math.floor(Math.random() * players.length)];
    alert(`${randomPlayer.name}, it is your turn`);
    return randomPlayer;
  }

  playerActionsMenu(player) {
    let playerResponse = prompt(`${player.name}, what would you like to do ? \nPress [1] to see the stats of the other players, \nPress [2] to attack another player`);

    switch (playerResponse) {
      case '1':
        this.watchStats();
        this.playerActionsMenu(player);
      break;

      case '2':
        this.chooseTarget(player);      
      break;
       
      default:
        alert('Sorry, I did not understand. Please try again!');
        this.playerActionsMenu(player);
    }
  }

  chooseTarget(player) {
    //Removing oneself fron the targets 
    let targets = this.playersAlive().filter(target => target != player);

    //Array of indexes of target, later used to match the user response with targets array
    let indexes = Array.from(Array(targets.length).keys());

    //Code to get the whole question in one prompt only
    let question = `${player.name}, Who would you like to attack ?`;
    for (let i in targets) {
      question += `\nPress [${i}] to attack ${targets[i].name}`;
    }
    let playerResponse = prompt(question);


    if (indexes.includes(parseInt(playerResponse))) {
      player.dealDamage(targets[parseInt(playerResponse)]);
    } else {
      alert('Sorry, I did not understand. Please try again!');
      this.chooseTarget(player);
    }

    player.hasplayed = true;
  }


  playersAliveAndHaventPlayed() {
    return this.playersAlive().filter(player => player.hasplayed == false);
  }


  turnPlay() {
    while (this.playersAliveAndHaventPlayed().length > 0) {
      this.playerActionsMenu(this.pickPlayerRandomly(this.playersAliveAndHaventPlayed()));
    }
  }





}