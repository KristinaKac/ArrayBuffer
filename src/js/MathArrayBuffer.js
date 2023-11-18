import { Bowerman } from './Bowerman';
import { Character } from './Character';

export class MathArrayBuffer extends Character {
  constructor(name, type) {
    super(name, type);
    this.attackPercent = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
  }

  get __cell() {
    return this.cell;
  }

  set __cell(cell) {
    if (cell <= 0 || cell >= 11) {
      throw new Error('Клетки должны быть от 1 до 10');
    }
    this.cell = cell;
  }

  get __stoned() {
    return this.stoned;
  }

  set __stoned(cell) {
    this.__cell = cell;
    this.stoned = Math.round(Math.log(this.cell)) * 5;
  }

  get __attack() {
    return this.attack;
  }

  set __attack(cell) {
    this.__cell = cell;
    this.attack = Math.round((this.attack * this.attackPercent[this.cell - 1]) / 100);
  }
}
