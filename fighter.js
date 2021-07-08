class Fighter extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, hp = 12, dmg = 4, mana = 40, status, hasplayed);
    this.spe = 'Dark vision';
    this.speactivated = false;
  }

  specialMove(victim) {
    this.dmg = 5;
    alert(`${this.name} uses ${this.spe} on ${victim.name}`);
    this.dealDamage(victim);
    this.dmg = 4;
    this.speactivated = true;
  }

  seeSpecialMove() {
    alert(`${this.spe}\n- Causes 5 damage points to the enemy.\n- Attenuates the damages by 2 points per hit, til then end of the turn.`);
  }

  takeDamage(damage) {
    if (this.speactivated == true) {
      damage -= 2;
      this.hp -= damage;
      alert(`${this.name} uses ${this.spe} to attenuate the damages. \n${this.name} only receives ${damage} damage points. \n${this.name} gots ${this.hp} hp left.`);
    } else {
      this.hp -= damage;
      alert(`${this.name} receives ${damage} damage points. \n${this.name} gots ${this.hp} hp left.`);
    }
  }

  resetSpe() {
    this.speactivated = false;
  }
}
