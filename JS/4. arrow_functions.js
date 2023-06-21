function sum(a, b) {
  return a + b;
}

const sum2 = (a, b) => {
  return a + b;
}

const sum3 = (a, b) => a + b;

function highest(a, b, c) {
  if(a > b) {
    if(a > c) {
      return a;
    } else {
      return c;
    }
  } else if(b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(highest(1, 2, 3));
console.log(highest(3, 2, 1));
console.log(highest(2, 3, 1));

const highest2 = (a, b, c) => a > b ? a > c ? a : c : b > c ? b : c;

console.log(highest2(1, 2, 3));
console.log(highest2(3, 2, 1));
console.log(highest2(2, 3, 1));

const dog1 = {
  name: 'Puszek',
  bark: function() {
    console.log(`${this.name} is barking`, this);
  }
}

const dog2 = {
  name: 'Puszek',
  bark: () => {
    console.log(`${this.name} is barking`, this);
  }
}

dog1.bark();
dog2.bark();