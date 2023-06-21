const handle = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('SUCCESS');
      } else {
        reject('ERROR');
      }
    }, Math.round(Math.random() * 5000))
  });

  const result = await promise;
  console.log(result);
}

console.log('PRZED AWAIT');

try {
    // nie zawsze zadziała - zalezy od przeglądarki/wersji node - nowy standard zezwala na uzycie await bezpośrednio w module
    await handle();
} catch(e) {
    console.log(e);
}

console.log('PO AWAIT');