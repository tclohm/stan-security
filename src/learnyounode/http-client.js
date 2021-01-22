const http = require('http');

// MARK: -- my solution
// http.get(process.argv[2], (res) => {
// 	let rawData = [];

// 	res.on('data', (chunk) => { 
// 		rawData.push(chunk.toString()) 
// 	});
// 	res.on('end', () => {
// 		try {
// 			rawData.forEach(d => console.log(d))
// 		} catch (e) {
// 			console.error(`Error: ${e.message}`);
// 		}
// 	});
// });

// MARK: -- their solution
http.get(process.argv[2], (res) => {
	res.setEncoding('utf8')
	res.on('data', console.log)
	res.on('error', console.error)
}).on('error', console.error)