const io = require('socket.io-client')
const Primus = require('primus')

const socket = io('<URL>')

socket.io.on('error', error => {
  console.log('error')
  console.log(error)
  console.log(JSON.stringify(error));
})

socket.on('connect', () => {
  console.log('connected')
  console.log(socket.id); // 'G5p5...'
})

socket.onAny((event, ...args) => {
  console.log(`got ${event}`);
})

