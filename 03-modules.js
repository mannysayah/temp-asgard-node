// Modules

/* Version 1
const names = require('./04-names');
const sayHi = require('./05-utils');

console.log(names);
console.log(sayHi);

sayHi('Sam')
sayHi(names.peter)
sayHi(names.firstname)

*/

// Modules

const {peter, firstname} = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavour');

require('./07-mind-grenade')

// console.log(names);
// console.log(sayHi);
// console.log(data);

sayHi('Sam')
sayHi(peter)
sayHi(firstname)
