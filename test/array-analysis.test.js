import { arrayAnalysis } from '../modules/array-analysis';

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