// for(var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i); // ok

// for(let j = 0; j < 10; j++) {
//   console.log(j);
// }

// console.log(j); // nie ok

// hoisting
foo(); // ok

function foo() {
  console.log('FOO');
}

console.log(bar); // nie dostaniemy błędu

var bar = 1000;

console.log(baz); // błąd
const baz = 10;
