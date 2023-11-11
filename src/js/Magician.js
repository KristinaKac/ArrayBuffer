import { MathArrayBuffer } from './MathArrayBuffer';

export class Magician extends MathArrayBuffer {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
