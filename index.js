const capitalize = string => {
  return string.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
};

const reverse = string => {
  return string.split('').reverse().join('');
};


export {
  capitalize,
  reverse
}

