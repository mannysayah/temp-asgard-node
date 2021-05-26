// HTTP Module
const http = require('http');

const server = http.createServer((req,res)=>{
    //console.log(req);
    if (req.url === "/") {
        res.end('Welcome to Asgard');
    }
    else if (req.url === "/about") {
        res.end('Asgard is not a place. It never was.');
    }
    else {
        res.end('<h1>404 - Page Not Found!</h1><p>Please go back <a href="/">home</a> and start over.</p>');
    }
});

server.listen(5000);
