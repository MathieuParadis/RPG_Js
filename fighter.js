class Fighter extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, hp = 12, dmg = 4, mana = 40, status, hasplayed);
  }

  //FIXME:
  darkVision (victim) {
    this.dmg = 5;
    this.dealDamage(victim)
    this.dmg = 4;
    // this.takeDamage



    this.mana -= 20;
  }

}
