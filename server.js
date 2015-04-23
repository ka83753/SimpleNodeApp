var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World from Distelli. Your Node.js applicatoin is working!\n');
}).listen(8080);

console.log('Server started');
