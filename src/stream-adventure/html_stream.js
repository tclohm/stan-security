const trumpet = require('trumpet')
const fs = require('fs')
const tr = trumpet()
const through = require('through2')

function write (buffer, encoding, next) {
	this.push(buffer.toString().toUpperCase())
	next()
}

function end (done) {
	done()
}

const stream = through(write, end)

const loud = tr.select('.loud').createStream()
loud.pipe(through(write, end)).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)