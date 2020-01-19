import { Calculator } from '../modules/calculator';

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
