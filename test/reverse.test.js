import { reverse } from '../modules/reverse';

test('reverse String', () => {
  expect(reverse('hello')).toBe('olleh');
  expect(reverse('Howdy')).toBe('ydwoH');
  expect(reverse('Greetings from Earth')).toBe('htraE morf sgniteerG');
});