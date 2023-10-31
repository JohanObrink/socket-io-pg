import { pool } from '@socket-io-pg/adapter'
import { Emitter } from '@socket.io/postgres-emitter'

const emitter = new Emitter(pool)
const rooms = ['room1', 'room2', 'room3', 'room4', 'room5']

const emit = (msg: string) => {
  console.log(`emit ${msg}`)
  //const roomNum = Math.floor(Math.random() * rooms.length)
  for (let roomNum = 0; roomNum < rooms.length; roomNum++) {
    const room = rooms[roomNum]
    emitter.to(room).emit('message', msg)
  }
}

setInterval(() => emit('SPAM'), 1)
