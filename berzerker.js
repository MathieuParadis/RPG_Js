class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, status, hasplayed) {
    super(name, hp, dmg, mana, status, hasplayed);
  }

  rage () {
    this.dmg += 1;
    this.hp -= 1;
  }
}