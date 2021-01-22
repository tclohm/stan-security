'use strict'
const http = require('http');
const map = require('through2-map');

// write http server that receives POST requests
// convert POST body to uppercase and return to client

const server = http.createServer((req, res) => {

	if (req.method !== "POST") {
		return res.end('send a POST');
	}

	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(res)
	
});

server.listen(Number(process.argv[2]));