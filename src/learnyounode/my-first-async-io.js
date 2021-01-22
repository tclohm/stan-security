'use strict';
const fs = require('fs')

const lines = fs.readFile(process.argv[2], function(err, data) {
	if (err) throw err;
	console.log(data.toString().split('\n').length - 1);
});