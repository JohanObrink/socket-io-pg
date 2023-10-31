import { adapter } from '@socket-io-pg/adapter'
import { Server } from 'socket.io'

const server = new Server({
  adapter,
})

server.on('connection', (socket) => {
  console.log(`connection ${socket.id}`)
  socket.join('room1')
  socket.join('room2')
  socket.join('room3')
  socket.join('room4')
  socket.join('room5')
})

server.listen(3000)
console.log('gateway listening')
