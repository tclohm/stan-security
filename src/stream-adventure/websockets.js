const WebSocket = require('ws')
const ws = new WebSocket('ws://localhost:8099')
const stream = WebSocket.createWebSocketStream(ws, { encoding: 'utf8'})

const hello = "hello\n"

stream.write(hello)
stream.pipe(process.stdout)