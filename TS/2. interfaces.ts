interface Address {
  city: string;
  street: string;
  streetNumber?: number;
}

interface User {
  name: string;
  lastname: string;
  address: Address;
}

const user: User = {
  name: 'Marcin',
  lastname: 'Grygierek',
  address: {
      city: 'Warszawa',
      street: 'Główna',
  }
}