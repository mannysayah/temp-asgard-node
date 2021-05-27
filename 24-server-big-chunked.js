const http = require('http');
const fs = require('fs');

http
    .createServer(
        (req,res) => {
            // const text = fs.readFileSync('./content/big.txt');
            // res.end(text)
            const fileStream = fs.ReadStream('./content/big.txt');
            fileStream.on('open', () => {
                fileStream.pipe(res);
            });
            fileStream.on('error', (err) => {
                res.end(err);
            });
        }
    )
    .listen(5000)
