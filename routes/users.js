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

  const eventObj = () => {
    const obj1 = {init: 'Node', version: 18};
    console.log(obj1);
  }

  event.addListener('event1', eventObj);

  event.emit('testEvent');
  event.emit('event1');

  console.log(event.listenerCount('event1'))
  event.removeListener('testEvent', testEventFun);

  res.send('');
});

module.exports = router;
