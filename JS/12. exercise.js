const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getAverageOfEvensSquares = (arr) => {
  const onlyEvens = arr
    .filter(val => val % 2 === 0)
    .map(val => val ** 2);

  const sum = onlyEvens
    .reduce((acc, curr) => acc + curr, 0);

  return sum / onlyEvens.length;
}

console.log(getAverageOfEvensSquares(original));

