var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World from Distelli. Your Node.js application is working!\n');
}).listen(8004);

console.log('Server started');
