class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status, hasplayed) {
    super(name, hp, dmg, mana, status, hasplayed);
    this.spe = 'Healing lighting';
  }

  specialMove(victim) {
    this.dmg = 4;
    alert(`${this.name} uses ${this.spe} on ${victim.name}`);
    this.dealDamage(victim);
    alert(`${this.name} gains 5 health points`);
    this.dmg = 3;
    this.hp += 5;
    this.mana -= 40;
  }

  seeSpecialMove() {
    alert(`${this.spe}\n- Causes 4 damage points to the enemy.\n- Restores 5 health points.\n- Costs 40 mana points.`);
  }
}