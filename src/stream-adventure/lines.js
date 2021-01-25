const split2 = require('split2');
const through = require('through2');

// let count = 0

// const tr = through((buffer, _, next) => {
// 	const line = buffer.toString()
// 	this.push(count % 2 === 0 
// 		? line.toLowerCase() + '\n' 
// 		: line.toUpperCase() + '\n'
// 	)
// 	count += 1
// 	next();
// });

// process.stdin
// 	   .pipe(split2())
// 	   .pipe(tr)
// 	   .pipe(process.stdout)

// MARK: -- my solution
let count = 0;

function write(buffer, encoding, next) {
	const line = buffer.toString();
	this.push(count % 2 === 0
		? line.toLowerCase() + '\n'
		: line.toUpperCase() + '\n'
	);
	count += 1;
	next();
}

function end(done) {
	done()
}

const tr = through(write, end)

process.stdin.pipe(split2())
			 .pipe(tr)
			 .pipe(process.stdout);