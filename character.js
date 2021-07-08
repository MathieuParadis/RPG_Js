class Character {
  constructor(name, hp, dmg, mana, status = 'playing', hasplayed = false) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
    this.hasplayed = hasplayed;
  }

  takeDamage(damage) {
    this.hp -= damage;
    alert(`${this.name} receives ${damage} damage points. \n${this.name} gots ${this.hp} hp left.`);
  }

  dealDamage(victim) {
    alert(`${this.name} inflicts ${this.dmg} damage points to ${victim.name}.`);
    victim.takeDamage(this.dmg);

    if (this.didItKill(victim) == true) {
      this.mana += 20;
      victim.changeStatusToLoser();
      alert(`${this.name} gains 20 mana points from killing ${victim.name}.`);
    }
  }

  specialMove() {}

  seeSpecialMove() {}

  isCharacterKilled() {
    return this.hp <= 0 ? true : false;
  }

  changeStatusToLoser() {
    if (this.isCharacterKilled() == true) {
      this.status = 'loser';
      alert(`${this.name} has been killed`);
    }
  }

  changeStatusToWinner() {
    if (this.isCharacterKilled() == false) {
      this.status = 'winner';
    }
  }

  didItKill(victim) {
    return victim.isCharacterKilled() == true ? true : false;
  }

}