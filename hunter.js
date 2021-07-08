class Hunter extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, hp = 11, dmg = 5, mana = 70, status, hasplayed);
  }

  hunterFest (victim) {
    this.dmg = 9;
    this.dealDamage(victim)
    this.dmg = 5;
    this.mana -= 30;
    this.hp -= 3
  }
}
