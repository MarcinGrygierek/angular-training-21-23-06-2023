const user = {
  name: 'Marcin',
  lastname: 'Grygierek',
  address: {
    city: 'Warszawa',
    street: 'Główna'
  }
}

const userStreet = user.address.street;
const userCity = user.address.city;

const { name, address: { street } } = user;
console.log(name, street);

const simpleUser = {
  name,
  street
}

const arr = [1, 2, 3, 4, 5, 6];
const [first, ...newArr] = arr;
console.log(first, newArr);

const [,,, fourth] = arr;
console.log(fourth);