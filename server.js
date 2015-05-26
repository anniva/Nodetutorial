var http = require('http');
var port = process.env.PORT || 3000; // process.env > Reads the server environment variables // Just something you can access and use... 

var ac = require('./index.js'); //import the index file
var fs = require('fs');
var index = fs.readFileSync(__dirname + '/index.html');

http.createServer(function handler(request, response){	// Importing the http module that enables to create servers... 

console.log(request.url);
var url = request.url;
	if(url.length===1){
		response.writeHead(200, {'Content-Type':'text/html'});
		response.end(index.toString());
	}

response.end('Hello World!');

}).listen(3000);

