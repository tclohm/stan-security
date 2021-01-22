'use strict'
const length = process.argv.length
let total = 0
for (let i = 2; i < length; i++) {
	total += +process.argv[i]
}
console.log(total);