'use strict';
// const fs = require('fs');

// const directory_path = process.argv[2];
// const extention = process.argv[3];

// fs.readdir(directory_path, (err, list) => {
// 	if (err) throw err;
// 	list.filter(file => {
// 		if (file.includes(`.${extention}`)) console.log(file)
// 	});
// });

// MARK: -- final solution
const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(folder, function (err, files) {
	if (err) console.error(err)
	files.forEach(function (file) {
		if (path.extname(file) === ext) console.log(file)
	})
})