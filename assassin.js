class Assassin extends Character {
  constructor(name, hp = 6 , dmg = 6, mana = 20, status, hasplayed) {
    super(name, hp, dmg, mana, status, hasplayed);
    this.spe = 'Shadow hit';
    this.target = 0;
    this.successful = 0;
  }

  specialMove(victim) {
    alert(`${this.name} uses ${this.spe} on ${victim.name}`);
    this.mana -= 20;
    this.target = victim;
  }

  seeSpecialMove() {
    alert(`${this.spe}\n- This attack takes effect on the next turn, and causes 7 damages point to the enemy.\n- If the attack is successful, i.e. killed the target, all damages are cancelled for the next turn.\n- If it fails the assassin loses 7 health points as well.\n- Costs 20 mana points`);
  }

  assassination() {
    this.dmg = 7;
    alert(`${this.name} attemps an assassination on ${this.target.name}`);
    this.dealDamage(this.target);
    this.dmg = 6;

    if (this.target.isCharacterKilled() == true) {
      alert('Assassination successful');
      this.successful = 1;
    } else {
      alert('Assassination failed');
      this.successful = -1;
      this.takeDamage(7);
    }
    this.target = 0;
  }

  takeDamage(damage) {
    if (this.successful == 1) {
      damage = 0;
      alert(`${this.name} uses the special effect of ${this.spe} to cancel the attack. \n${this.name} got ${this.hp} hp left.`);
    } else {
      this.hp -= damage;
      alert(`${this.name} receives ${damage} damage points. \n${this.name} got ${this.hp} hp left.`);
    }
  }


}
