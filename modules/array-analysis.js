const arrayAnalysis = (array) => {
  const getAvg = (arr) => arr.reduce((sum, num) => sum + num, 0) / arr.length;
  const getMin = (arr) => Math.min(...arr);
  const getMax = (arr) => Math.max(...arr);

  return {
    average: getAvg(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  };
};

export {
  arrayAnalysis,
};
