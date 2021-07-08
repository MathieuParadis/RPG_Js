class Assassin extends Character {
  constructor(name, hp = 6 , dmg = 6, mana = 20, status) {
    super(name, hp, dmg, mana, status);
  }

  //FIXME:
  shadowHit () {
    this.hp += 8;
    this.mana -= 20;
  }
}