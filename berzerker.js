class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, status, hasplayed) {
    super(name, hp, dmg, mana, status, hasplayed);
    this.spe = 'Rage';
  }

  specialMove() {
    this.dmg += 1;
    this.hp -= 1;
    alert(`${this.name} uses ${this.spe}.\n ${this.name} gains 1 damage point and loses 1 health point.`);
  }

  seeSpecialMove() {
    alert(`${this.spe}\n- Increases your damage points by 1.\n- Cost 1 health points everytime you use it.`);
  }
}