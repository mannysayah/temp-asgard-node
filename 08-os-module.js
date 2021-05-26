// Built-in Modules
// OS

const os = require('os');

/* or destructure the ones you need only
const {} = require('os')  */

// current user info
const user = os.userInfo();
console.log(user);

// system uptime
console.log(`The System Uptime is ${os.uptime()} seconds.`);

// some more
const currentOS = {
    name    : os.type(),
    release : os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS);

