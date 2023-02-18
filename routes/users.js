const express = require('express');
const router = express.Router();
const EventEmitter = require('events');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  const event = new EventEmitter();

  class Counter extends EventEmitter {
    //value; 

    constructor(value) {
      super();
      this._value = value;
  }

    get getValue() {
      console.log(this._name)
    }

    set setValue(newValue) {
      this.value = newValue;
      event.emit('increment', this.value);
    }

  }

  const counter = new Counter(2);
  
  event.addListener('increment', (value)=> {
    console.log("Counter value: " + counter.getValue());
    counter.setValue= 4;
  })
  
  res.send('');
});

module.exports = router;
