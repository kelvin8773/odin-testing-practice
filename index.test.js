import {
  capitalize,
  reverse,
  Calculator,
  caesarCipher,
  arrayAnalysis,
}
  from './index';

test('Capitalize', () => {
  expect(capitalize('hello world!')).toBe('Hello World!');
  expect(capitalize('javascript')).toBe('Javascript');
  expect(capitalize('')).toBe('');
});

test('reverse String', () => {
  expect(reverse('hello')).toBe('olleh');
  expect(reverse('Howdy')).toBe('ydwoH');
  expect(reverse('Greetings from Earth')).toBe('htraE morf sgniteerG');
});

test('Calculator add', () => {
  expect(Calculator.add(2, 3)).toBe(5);
  expect(Calculator.add(10021, 8)).toBe(10029);
  expect(Calculator.add(0, -2)).toBe(-2);
});

test('Calculator subtract', () => {
  expect(Calculator.subtract(2, 3)).toBe(-1);
  expect(Calculator.subtract(10000, 8)).toBe(9992);
  expect(Calculator.subtract(0, -2)).toBe(2);
});

test('Calculator divide', () => {
  expect(Calculator.divide(3, 3)).toBe(1);
  expect(Calculator.divide(200, 8)).toBe(25);
  expect(Calculator.divide(0, -2)).toBe(-0);
  expect(Calculator.divide(2, 0)).toBe(Infinity);
});

test('Calculator multiply', () => {
  expect(Calculator.multiply(3, 3)).toBe(9);
  expect(Calculator.multiply(212, 3)).toBe(636);
  expect(Calculator.multiply(2, 0)).toBe(0);
});

test('Caesar Cipher encrypt', () => {
  expect(caesarCipher.encrypt('defend the east wall of the castle', 1))
    .toBe('efgfoe uif fbtu xbmm pg uif dbtumf');

  expect(caesarCipher.encrypt('attack at dawn Great Plan!', 5))
    .toBe('fyyfhp fy ifbs Lwjfy Uqfs!');
});

test('Caesar Cipher decrypt', () => {
  expect(caesarCipher.decrypt('efgfoe uif fbtu xbmm pg uif dbtumf', 1))
    .toBe('defend the east wall of the castle');

  expect(caesarCipher.decrypt('ohhoqy oh rokb - Ufsoh Dzob!', 14))
    .toBe('attack at dawn - Great Plan!');
});

test('Array Analysis', () => {
  expect(arrayAnalysis([1, 2, 5, 8, 9]))
    .toStrictEqual({
      average: 5,
      min: 1,
      max: 9,
      length: 5,
    });
  expect(arrayAnalysis([21, 98, 23, 20, -13, -3, 0, 182, 31, 78]))
    .toStrictEqual({
      average: 43.7,
      min: -13,
      max: 182,
      length: 10,
    });
});