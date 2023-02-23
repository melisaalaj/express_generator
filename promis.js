const promis = new Promise((resolve, reject) => {
    const i = 1;

    if(i===2){
        resolve()
    } else {
        reject()
    }
});

promis.then(function () {
    console.log('Pass')
}).catch(function() {
    console.log('Error')
})