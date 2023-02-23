const fs = require('fs')


const promis = new Promise((resolve, reject) => {

    fs.readdir(__dirname, (err, files) => {
        if (err)
          reject()
        else {
          resolve(files)
        }
      })

});


promis.then((files) => {
        console.log(files);
}).catch(function() {
    console.log('Could not read directory!')
})

