import { capitalize } from '../modules/capitalize';

test('Capitalize', () => {
  expect(capitalize('hello world!')).toBe('Hello World!');
  expect(capitalize('javascript')).toBe('Javascript');
  expect(capitalize('')).toBe('');
});
