// stream, abstract interface 
// for working with streaming data
// pipe allows for connection of the 
//output (read)
// and input (write)
const fs = require('fs')

fs.createReadStream(process.argv[2])
	.pipe(process.stdout)