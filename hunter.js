class Hunter extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, hp = 11, dmg = 5, mana = 70, status, hasplayed);
    this.spe = 'Hunter fest';
  }

  specialMove(victim) {
    this.dmg = 9;
    alert(`${this.name} uses ${this.spe} on ${victim.name}`);
    this.dealDamage(victim);
    this.dmg = 5;
    this.mana -= 30;
    this.hp -= 3;
  }

  seeSpecialMove() {
    alert(`${this.spe}\n- Causes 9 damage points to the enemy.\n- Costs 3 health points.\n- Costs 30 mana points.`);
  }
}
