const { Writable } = require('stream');

class WritableStream extends Writable {
	// chunk, value to be written 
	//	commonly a buffer converted
	//	from the string passed to stream.write
	_write(chunk, encoding, callback) {
		if (!chunk) {
			callback(Error("give me something"))
		}
		const string = chunk.toString();
		console.log(`writing: ${string}`)
		callback()
	}
}

const writestream = new WritableStream();
process.stdin.pipe(writestream);