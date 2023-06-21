const a = 10;
const b = a;
const c = 10;

console.log(a === b);
console.log(a === c);

const arr1 = [1, 2, 3];
const arr2 = arr1;
const arr3 = [1, 2, 3];

console.log(arr1 === arr2);
console.log(arr1 === arr3);

const arrCopy = [...arr1];

const user = {
  name: 'Marcin',
  lastname: 'Grygierek',
  address: {
    city: 'Warszawa',
    street: 'Główna'
  }
}

const userCopy = {
  ...user,
  address: {
    ...user.address
  }
}

function foo(...args) {
  console.log(args);
}

foo(1, 2, 3, 4, 5, 6);