class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status) {
    super(name, hp, dmg, mana, status);
  }

  heal () {
    this.hp += 8;
    this.mana -= 25;
  }
}