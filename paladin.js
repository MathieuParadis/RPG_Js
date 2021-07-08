class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status) {
    super(name, hp, dmg, mana, status);
  }

  healingLighting (victim) {
    this.dmg = 4;
    this.dealDamage(victim)
    this.dmg = 3;
    this.hp += 5;
    this.mana -= 40;
  }
}