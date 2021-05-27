// Create big file!

const { writeFileSync } = require('fs');

for(let i=0; i <100000; i++) {
    writeFileSync('./content/big.txt', `Asgard user id ${i}\n`, { flag : 'a'})
}
