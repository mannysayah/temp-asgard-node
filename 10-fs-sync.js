// Built-in Modules
// FS - Sync

const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first);
// console.log(second);

writeFileSync(
    './content/result-sync.txt',
    `Result:\n\t${first}\n\t${second}\n`,
    { flag: 'a' }
);
console.log('done with the FS-Sync task');
console.log('starting the next task...');
