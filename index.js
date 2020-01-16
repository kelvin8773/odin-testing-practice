const capitalize = (string) => string.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

const reverse = (string) => string.split('').reverse().join('');

export {
  capitalize,
  reverse,
};
