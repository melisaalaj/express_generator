const fs = require('fs')


const promis = new Promise((resolve, reject) => {

    fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if(err){
        reject()
    } else {
        resolve()
    } });

});

const promisRead = new Promise((resolve, reject) => {

    fs.readFile('mynewfile3.txt', (err) => {
        if(err){
            reject()
        } else {
            resolve()
        } 
    });

})

promis.then(function () {
    console.log('File written successfully!')
}).catch(function() {
    console.log('Could not write file')
})

promisRead.then(function () {
    console.log('File read successfully!')
}).catch(function() {
    console.log('Could not read file')
})