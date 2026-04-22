var os = require('os');

let memoryAvailable = os.totalmem();
let freeMemoryAvailable = os.freemem();
let osPlatform = os.platform();
let numOfCPUCores = os.cpus().length;

console.log(memoryAvailable);
console.log(freeMemoryAvailable);
console.log(osPlatform);
console.log(numOfCPUCores);
