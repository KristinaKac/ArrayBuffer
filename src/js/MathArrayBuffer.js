import { Bowerman } from './Bowerman';
import { Character } from './Character';

export class MathArrayBuffer extends Character {
  constructor(name, type) {
    super(name, type);
    this.attackPercent = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
    this._stoned = false;
    this._attack;
    this._cell;
  }

  get cell() {
    return this._cell;
  }

  set cell(value) {
    if (value <= 0 || value >= 11) {
      throw new Error('Клетки должны быть от 1 до 10');
    }
    this._cell = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    if (this._cell) {
      this._attack = Math.round((this._attack * this.attackPercent[this._cell - 1]) / 100);
      this._stoned ? this._attack = this._attack - Math.round(Math.log(this._cell)) * 5 : this._attack;
    }
    return this._attack;
  }

  set attack(value) {
    this._attack = value;
  }
}

let s = new MathArrayBuffer('Ivan', 'Daemon');

s.cell = 4;
s.attack = 100;
s.stoned = false;

console.log(s.attack)