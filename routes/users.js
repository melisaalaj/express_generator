const express = require('express');
const router = express.Router();
const EventEmitter = require('events');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const event = new EventEmitter();

  const runEventListener = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let even = [];
      for(let i = 0; i < numbers.length; i++) {
       if(numbers[i] % 2 == 0)
       even.push(numbers[i]);
      }
  
      console.log(`Even numbers in an array are: ${even}`);
  }

  event.addListener('EvenEvent', runEventListener)

  event.emit('runEvent_1')

  res.send('');
});

module.exports = router;
