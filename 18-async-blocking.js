const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Asgard Home');
    } 
    else if(req.url === '/about') {
        // Blocking Code
        for(let i=0; i<1000; i++) {
            for(let j=0; j<1000; j++) {
                console.log(`${i}:${j}`);
            }     
        }
        res.end('Asgard is not a place. It never was.');
    }
    else {
        res.end('404 - Not found!');       
    }
});

server.listen(5000, () => {
    console.log('Asgard is listening on port 5000....');
});