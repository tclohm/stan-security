'use strict';
const http = require('http');
const bl = require('bl');

const result = [];
let count = 0;

function print() {
	for (let i = 0; i < 3; i++) {
		console.log(result[i])
	}
}

function httpGet (index) {
	http.get(process.argv[2 + index], (res) => {
		res.pipe(bl((err, data) => {
			if (err) { return console.error(err) }
			result[index] = data.toString()
			count++

			if (count === 3) { print() }
		}))
	})
}

for (let i = 0; i < 3; i++) {
	httpGet(i);
}