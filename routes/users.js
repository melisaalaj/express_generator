const express = require('express');
const router = express.Router();
const os = require('os');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const eol = os.EOL
  console.log(eol);

  const netInt = os.networkInterfaces()
  console.log(netInt);

  const OsArch = os.arch
  console.log("Arch: " + OsArch);

  const osCpus = os.cpus()
  console.log( osCpus)

  const osDevNull = os.devNull
  console.log("Dev Null" + osDevNull);

  const osEndians = os.endianness
  console.log("Endians: " + osEndians);

  const freeMemory = os.freemem
  console.log("Free memory: " + freeMemory);

  const  homeDir = os.homedir
  console.log("Home directory: " + homeDir);

  const  hostName = os.hostname
  console.log("Host name: " + hostName);

  const loadAvg = os.loadavg()
  console.log(loadAvg);


  res.send('');
});

module.exports = router;
