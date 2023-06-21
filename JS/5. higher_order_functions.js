setTimeout(() => {
  console.log('Test');
}, 1000)

const callApi = (url, callback) => {
  const result = getResultFromApi(url); 
  callback(result);
}

