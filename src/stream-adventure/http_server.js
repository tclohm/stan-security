const http = require('http')
const through = require('through2')

function write (buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase())
	next()
}

function end (done) {
	done()
}

const stream = through(write, end)

const server = http.createServer((req, res) => {
	if (req.method === 'POST') req.pipe(stream).pipe(res)
	else res.end('send a POST\n')
})

server.listen(Number(process.argv[2]))