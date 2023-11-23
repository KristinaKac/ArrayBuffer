import { Bowerman } from '../js/Bowerman';
import { Swordsman } from '../js/Swordsman';
import { Magician } from '../js/Magician';
import { Daemon } from '../js/Daemon';
import { Undead } from '../js/Undead';
import { Zombie } from '../js/Zombie';
import { Character } from '../js/Character';
import { MathArrayBuffer } from '../js/MathArrayBuffer';
import { ArrayBufferConverter } from '../js/ArrayBufferConverter';

test.each([
  ['I', Character, 'Bowerman'],
  ['IvanPetrovich', Character, 'Bowerman'],
  ['I', Bowerman, 'Bowerman'],
  ['IvanPetrovich', Bowerman, 'Bowerman'],
])('testing checkName - name: %s, object: %s, type: %s', (name, Player, type) => {
  expect(() => {
    const ivan = new Player(name, type);
    ivan.checkName();
  }).toThrowError('Количество символов должно быть от 2х до 10');
});

test.each([
  [Character, 'Player'],
  [Bowerman, 'Player'],
  [Zombie, 'Player'],
  [Undead, 'Player'],
  [Daemon, 'Player'],
  [Magician, 'Player'],
  [Swordsman, 'Player'],
])('testing function - checkType: object %s', (Player, type) => {
  expect(() => {
    const player = new Player('Ivan', type);
  }).toThrowError('Должен быть один из типов: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('testing error of function - levelUp for Character', () => {
  expect(() => {
    const ivan = new Character('Ivan', 'Zombie', 30, 40);
    ivan.health = -10;
    ivan.levelUp();
  }).toThrowError('Нельзя повысить левел умершего');
});

test.each([
  [Character, 'Bowerman'],
  [Bowerman, 'Bowerman'],
  [Zombie, 'Zombie'],
  [Undead, 'Undead'],
  [Daemon, 'Daemon'],
  [Magician, 'Magician'],
  [Swordsman, 'Swordsman'],
])('testing error of function - levelUp: %s', (Player, type) => {
  expect(() => {
    const ivan = new Player('Ivan', type);
    ivan.health = -10;
    ivan.levelUp();
  }).toThrowError('Нельзя повысить левел умершего');
});

test.each([
  [Character, 'Bowerman'],
  [Bowerman, 'Bowerman'],
  [Zombie, 'Zombie'],
  [Undead, 'Undead'],
  [Daemon, 'Daemon'],
  [Magician, 'Magician'],
  [Swordsman, 'Swordsman'],
])('testing error of function - damage: %s', (Player, type) => {
  expect(() => {
    const ivan = new Player('Ivan', type);
    ivan.health = -10;
    ivan.damage();
  }).toThrowError('Игрок уже умер');
});

test('testing of function - damage for Character', () => {
  const ivan = new Character('Ivan', 'Zombie');
  const result = ivan.damage(30);
  expect(result).toBe();
});

test('testing of function - levelUp for Character', () => {
  const ivan = new Character('Ivan', 'Daemon');
  const result = ivan.levelUp();
  expect(result).toEqual();
});

test('testing class ArrayBufferConverter: function load', () => {
  const converter = new ArrayBufferConverter();
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const buffer = new ArrayBuffer(data.length * 2);
  const bufferView = new Uint16Array(buffer);
  for (let i = 0; i < bufferView.length; i++) {
    bufferView[i] = data.charCodeAt(i);
  }
  const result = converter.load(buffer);
  expect(result).toEqual(['{', '"', 'd', 'a', 't', 'a', '"', ':', '{', '"',
    'u', 's', 'e', 'r', '"', ':', '{', '"', 'i', 'd', '"', ':', '1', ',', '"',
    'n', 'a', 'm', 'e', '"', ':', '"', 'H', 'i', 't', 'm', 'a', 'n', '"', ',',
    '"', 'l', 'e', 'v', 'e', 'l', '"', ':', '1', '0', '}', '}', '}']);
});

test('testing class ArrayBufferConverter: function toString', () => {
  const converter = new ArrayBufferConverter();
  const data = ['{', '"', 'd', 'a', 't', 'a', '"', ':', '{', '"',
    'u', 's', 'e', 'r', '"', ':', '{', '"', 'i', 'd', '"', ':', '1', ',', '"',
    'n', 'a', 'm', 'e', '"', ':', '"', 'H', 'i', 't', 'm', 'a', 'n', '"', ',',
    '"', 'l', 'e', 'v', 'e', 'l', '"', ':', '1', '0', '}', '}', '}'];
  const result = converter.toString(data);
  expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('testing class MathArrayBuffer: function get set __attack', () => {
  const magician = new Magician('Ivan', 'Magician');
  magician.cell = 4;
  magician.attack = 100;
  magician.stoned = true;
  expect(magician.attack).toBe(65);
});

test('testing class MathArrayBuffer: function get set __attack', () => {
  const magician = new Magician('Ivan', 'Magician');
  magician.cell = 4;
  magician.attack = 100;
  magician.stoned = false;
  expect(magician.attack).toBe(70);
});

test('testing class MathArrayBuffer: function get set __stoned', () => {
  const magician = new Magician('Ivan', 'Magician');
  magician.stoned = true;
  expect(magician.stoned).toBe(true);
});

test('testing class MathArrayBuffer: function get set __stoned', () => {
  const magician = new Magician('Ivan', 'Magician');
  magician.cell = 9;
  expect(magician.__stoned).toBe();
});

test('testing class MathArrayBuffer: function get set __cell', () => {
  const magician = new Magician('Ivan', 'Magician');
  magician.cell = 6;
  expect(magician.cell).toBe(6);
});

test('testing error class MathArrayBuffer: function get set __cell', () => {
  expect(() => {
    const magician = new Magician('Ivan', 'Magician');
    magician.cell = 15;
    magician.attack = 100;
    magician.stoned = true;
  }).toThrowError('Клетки должны быть от 1 до 10');
});
