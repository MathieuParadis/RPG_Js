class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status, hasplayed) {
    super(name, hp, dmg, mana, status, hasplayed);
  }

  heal () {
    this.hp += 8;
    this.mana -= 25;
  }
}