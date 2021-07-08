class Character {
  constructor(name, hp, dmg, mana, status = 'playing') {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
  }

  takeDamage (damage) {
    this.hp -= damage;
    alert(`${this.name} receives ${damage} damage points`)
  }


  dealDamage (victim) {
    victim.takeDamage(this.dmg);
    alert(`${this.name} inflicts ${this.dmg} damage points to ${victim.name}`)
    
    if (this.didItKill(victim) == true) {
      this.mana += 20;
      victim.changeStatusToLoser();
    }
  }


  isCharacterKilled () {
    return this.hp <= 0 ? true : false;
  }


  changeStatusToLoser () {
    if (this.isCharacterKilled() == true) {
      this.status = 'loser';
      alert(`${this.name} has been killed`)
    }
  }

  changeStatusToWinner () {
    if (this.isCharacterKilled() == false) {
      this.status = 'winner';
    }
  }


  didItKill (victim) {
    return victim.isCharacterKilled() == true ? true : false;
  }
}