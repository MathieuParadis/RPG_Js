class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status, hasplayed) {
    super(name, hp, dmg, mana, status, hasplayed);
    this.spe = 'Heal';
  }

  specialMove() {
    this.hp += 8;
    this.mana -= 25;
    alert(`${this.name} uses ${this.spe} and gains 8 health points.`);
  }

  seeSpecialMove() {
    alert(`${this.spe}\n- Restores 8 health points.\n- Costs 25 mana points.`);
  }
}