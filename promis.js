function reverseString(str) {
    return new Promise((resolve, reject) => {
      if (typeof str !== 'string') {
        reject(new Error('Input must be a string'));
      } else {
        const reversed = str.split('').reverse().join('');
        resolve(reversed);
      }
    });
  }

  reverseString('Hello')
  .then((reversed) => {
    console.log(reversed); 
  })
  .catch((error) => {
    console.error(error); 
  });

