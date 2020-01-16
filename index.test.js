import { capitalize } from './index';

test('Capitalize', () => {
  expect(capitalize('hello world!')).toBe('Hello World!');
  expect(capitalize('javascript')).toBe('Javascript');
  expect(capitalize('')).toBe('');
});




