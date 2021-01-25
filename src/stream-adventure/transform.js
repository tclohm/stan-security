const through = require('through2');

// MARK: -- my solution
function write (buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase())
	next()
}

function end (done) {
	done()
}

const stream = through(write, end);


process.stdin.pipe(stream).pipe(process.stdout);

// MARK: -- their solution
// const tr = through((buffer, _, next) => {
// 	this.push(buffer.toString().toUpperCase())
// 	next()
// })
// process.stdin.pipe(tr).pipe(process.stdout)