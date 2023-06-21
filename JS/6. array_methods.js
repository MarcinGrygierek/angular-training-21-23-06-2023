const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const onlyEven = [];

for(let i = 0; i < array.length; i++) {
  if(array[i] % 2 === 0) onlyEven.push(array[i]);
}

const squares = [];

for(let i = 0; i < onlyEven.length; i++) {
  squares.push(onlyEven[i] ** 2);
}

let sum = 0;
for(let i = 0; i < squares.length; i++) {
  sum += squares[i];
}

console.log(onlyEven);
console.log(squares);
console.log(sum);

// Funkcyjnie
const result = array
  .filter(val => val % 2 === 0)
  .map(val => val ** 2)
  .reduce((acc, curr) => acc + curr)

console.log(result);

const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.slice(1, 3), arr2);
console.log(arr2.splice(1, 3), arr2);