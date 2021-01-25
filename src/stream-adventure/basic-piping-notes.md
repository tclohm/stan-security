`5 kinds of streams : 
	readable, 
	writable, 
	tranform, 
	dublex,
	"classic"
`

`readable stream`
### readable streams produce data can be fed into a writable
### tranform, or duplex stream by calling pipe

`rs.push`, chunks push are buffered until a consumer is ready
to read them

`
const Readable = require('stream').Readable;
let rs = Readable()
var c = 97
rs._read = () => {
	rs.push(String.fromCharCode(c++));
	if (c > 'z'.charCodeAt()) rs.push(null)
}
rs.pipe(process.stdout)
`

### readable stream that pushes arbitrary values
### instead of just strings and buffer, make sure
### to create your readable stream with 
### `Readable({ objectMode: true })`

`unshift()` -- put data so the same read logic will fire when
			`read()` gives you more data than you wanted


`Writable = require('stream').Writable
let sw = Writable()
ws._write = function (chunk, enc, next) {
	console.dir(chunk)
	next()
};
process.stdin.pipe(ws)`;