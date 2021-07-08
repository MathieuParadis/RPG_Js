class Wizard extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, hp = 10, dmg = 2, mana = 200, status, hasplayed);
  }

  fireball (victim) {
    this.dmg = 7;
    this.dealDamage(victim)
    this.dmg = 2;
    this.mana -= 25;
  }
}
