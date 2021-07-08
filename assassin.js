class Assassin extends Character {
  constructor(name, hp = 6 , dmg = 6, mana = 20, status, hasplayed) {
    super(name, hp, dmg, mana, status, hasplayed);
  }

  //FIXME:
  shadowHit () {
    this.hp += 8;
    this.mana -= 20;
  }
}