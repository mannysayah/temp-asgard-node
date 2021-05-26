// Built-in Modules
// FS - Async

const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    
    // if error
    if(err) {
        console.log(err);
        return;
    }
    // save the content of first
    const first = result;

    // read second
    readFile('./content/second.txt', 'utf8', (err, result) => {
        //if error
        if(err) {
            console.log(err);
            return;
        }
        //save the content of second
        const second = result;
        // write
        writeFile(
            './content/result-async.txt',
            `Result Async:\n\t${first}\n\t${second}\n`,
            { flag : 'a'}, 
            (err, result) => {
                // if error
                if(err) {
                    console.log(err);
                    return;
                }
                // output
                // console.log(result);
                console.log('done with the FS-Async task');
            }
        );
    });
});
console.log('starting the next task...');
