const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('SUCCESS');
    } else {
      reject('ERROR');
    }
  }, Math.round(Math.random() * 5000))
});

console.log('PRZED PROMISE');

promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })

console.log('PO PROMISE');