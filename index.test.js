import {
  capitalize,
  reverse,
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




