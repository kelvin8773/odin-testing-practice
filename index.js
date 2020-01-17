const capitalize = (string) => string.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

const reverse = (string) => string.split('').reverse().join('');

const Calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;

  return {
    add,
    subtract,
    divide,
    multiply,
  };
})();

const caesarCipher = (() => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const checkUpperCase = char => char === char.toUpperCase();
  const getIndex = char => alphabet.indexOf(char.toLowerCase());

  const encrypt = (string, shift) => {
    let encryptString = '';
    for (let char of string) {
      if (getIndex(char) >= 0) {
        let idx = getIndex(char) + shift;
        if (idx > 25) idx = idx - 26;
        const encryptChar = checkUpperCase(char) ? alphabet[idx].toUpperCase() : alphabet[idx];
        encryptString += encryptChar;
      } else {
        encryptString += char;
      }
    }
    return encryptString;
  }

  const decrypt = (string, unshift) => {
    let decryptString = '';
    for (let char of string) {
      if (getIndex(char) >= 0) {
        let idx = getIndex(char) - unshift;
        if (idx < 0) idx = idx + 26;
        const decryptChar = checkUpperCase(char) ? alphabet[idx].toUpperCase() : alphabet[idx];
        decryptString += decryptChar;
      } else {
        decryptString += char;
      }
    }
    return decryptString;
  }

  return {
    encrypt,
    decrypt
  }

})();

export {
  capitalize,
  reverse,
  Calculator,
  caesarCipher
};
