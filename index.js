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

export {
  capitalize,
  reverse,
  Calculator,
};
