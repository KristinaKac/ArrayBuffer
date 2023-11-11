import { Character } from './Character';

export class MathArrayBuffer extends Character {
  constructor(name, type) {
    super(name, type);
    this.attackPercent = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

    this.attack;
  }

  get stoned() {
    return this.attack;
  }

  set stoned(cell) {
    console.log(Math.round(Math.log(cell) * 5));
    this.attack -= Math.round(Math.log(cell) * 5);
    if (this.attack < 0) {
      this.attack = 0;
    }
  }

  get __attack() {
    return this.attack;
  }

  set __attack(cell) {
    if (cell <= 10 && cell >= 1) {
      this.attack = (this.attack * this.attackPercent[cell - 1]) / 100;
    }
  }
}
