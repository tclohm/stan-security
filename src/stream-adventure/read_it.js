const { Readable } = require('stream')

// MARK: -- my solution
// const readable = new Readable({
// 	read() {
// 		console.log(process.argv[2])
// 	}
// })

// readable.on('data', (chunk) => {
// 	console.log(chunk)
// })


// MARK: -- their solution
// class ReadableStream extends Readable {
// 	_read (size) {}
// }

// const stream = new ReadableStream(process.argv[2])
// stream.push(process.argv[2])
// stream.pipe(process.stdout)

// MARK: -- other solution
const stream = new Readable({})
stream._read = () => {}
stream.push(process.argv[2])
stream.pipe(process.stdout)