'use strict';
const fs = require('fs');
const path = require('path');

module.exports = function(dirname, filter, callback) {
	fs.readdir(dirname, 'utf8', function (err, data) {
		if (err) { return callback(err) }
		callback(null, data.filter(entry => {
			return path.extname(entry) === "." + filter
		}))
	})
	
}

