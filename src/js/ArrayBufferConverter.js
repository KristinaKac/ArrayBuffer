export class ArrayBufferConverter {
  constructor() {
    this.arr = [];
    this.str = '';
  }

  load(buffer) {
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < bufferView.length; i++) {
      this.arr.push(String.fromCharCode(bufferView[i]));
    }
    return this.arr;
  }

  toString(array) {
    for (let i = 0; i < array.length; i++) {
      this.str += array[i];
    }
    return this.str;
  }
}
