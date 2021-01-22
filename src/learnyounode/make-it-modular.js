'use strict';
const dir = process.argv[2]
const filterExt = process.argv[3]
require('./mymodule')(dir, filterExt, function(err, list) {
	if (err) return console.error(err);
	
	list.forEach(file => {
		console.log(file)
	})
});