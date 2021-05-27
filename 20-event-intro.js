const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) => {
    console.log(`data received! ${name} is ${age} years old.`);
});

customEmitter.on('response', () => {
    console.log(`data updated!!!`);
});

customEmitter.emit('response', 'John', 35);
