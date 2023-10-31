import { io } from 'socket.io-client'

const { SOCKET_HOST1, SOCKET_HOST2 } = process.env

let sockets = 0
const connect = (host: string, num = ++sockets) => {
  const socket = io(host, {
    transports: ['websocket'],
  })
  socket.on('connect', () => {
    console.log(`socket${num}:connected`)
  })
  socket.on('message', (msg) => {
    console.log(`socket${num}:message:${msg}`)
  })
  socket.io.on('close', () => {
    console.log(`socket${num}:close`)
  })
  socket.io.on('open', () => {
    console.log(`socket${num}:open`)
  })
  socket.io.on('error', (err) => {
    console.log(`socket${num}:error`, err)
  })
  return socket
}

connect(SOCKET_HOST1)
connect(SOCKET_HOST2)
