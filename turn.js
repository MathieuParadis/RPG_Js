class Turn extends Game {
  constructor(players, turnLeft) {
    super(players, turnLeft );
    this.turnNumber = 10 - turnLeft;
  }

  startTurn() {
    alert(`It's turn ${this.turnNumber}`);
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
    let targets = this.playersAlive();
    let question = `Who would you like to attack ?`

    for (let i in targets) {
      question += `\nPress [${i}] to attack ${targets[i].name}`;
    }

    let playerResponse = prompt(question);
    
    
      switch (playerResponse) {
      
        case `0`:
          alert("Frstdhyjfugih");
        break;

        case 1:
          alert("Frstdhyjfugih");
        break;
  
        default:
          alert('Sorry, I did not understand. Please try again!');
          this.chooseTarget(player);
        }
  

    
  }

  // puts "a - chercher une meilleur arme"
  // puts "s - chercher à se soigner"
  // print "\n"

  // puts "attaquer un joueur en vue :"
  //   for i in 0..@enemies_in_sight.length-1
  //     print "#{i} - "

  //     if @enemies_in_sight[i].life_points == 0
  //       puts "#{@enemies_in_sight[i].name} est mort, tu ne peux plus l'attaquer"
  //     else
  //       print "#{@enemies_in_sight[i].show_state}"
  //     end
  //     i += 1
  //   end

  //   print "\n"
  //   print "> "
  //   gets.chomp
  // end

}