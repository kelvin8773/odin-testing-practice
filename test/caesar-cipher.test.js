import { caesarCipher } from '../modules/caesar-cipher';

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
