export const caesarCipher = (() => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const checkUpperCase = (char) => char === char.toUpperCase();
  const getIndex = (char) => alphabet.indexOf(char.toLowerCase());

  const encrypt = (string, shift) => {
    let encryptString = '';
    for (const char of string) {
      if (getIndex(char) >= 0) {
        let idx = getIndex(char) + shift;
        if (idx > 25) idx -= 26;
        const encryptChar = checkUpperCase(char) ? alphabet[idx].toUpperCase() : alphabet[idx];
        encryptString += encryptChar;
      } else {
        encryptString += char;
      }
    }
    return encryptString;
  };

  const decrypt = (string, unshift) => {
    let decryptString = '';
    for (const char of string) {
      if (getIndex(char) >= 0) {
        let idx = getIndex(char) - unshift;
        if (idx < 0) idx += 26;
        const decryptChar = checkUpperCase(char) ? alphabet[idx].toUpperCase() : alphabet[idx];
        decryptString += decryptChar;
      } else {
        decryptString += char;
      }
    }
    return decryptString;
  };

  return {
    encrypt,
    decrypt,
  };
})();
