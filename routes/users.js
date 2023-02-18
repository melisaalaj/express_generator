var express = require('express');
var router = express.Router();
const EventEmitter = require('events');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const event = new EventEmitter();

  const runEventListener = () => {
    return ("Hello from events");
  }
  event.addListener('runEvent_1', runEventListener)

  const testEventFun = ()=> {
    console.log("only test");
  }

  event.addListener('testEvent', testEventFun)

  event.emit('testEvent');

  console.log(event.listenerCount(event))

  res.send('');
});

module.exports = router;
