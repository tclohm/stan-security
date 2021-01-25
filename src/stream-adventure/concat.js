const concat = require('concat-stream') 

process.stdin.pipe(concat((chunk) => {
	const string = chunk.toString()
						.split('')
						.reverse()
						.join('')
	process.stdout.write(string)
}))