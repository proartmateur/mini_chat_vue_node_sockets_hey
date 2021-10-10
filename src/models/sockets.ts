export class Sockets {
  private io

  constructor(io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
      socket.on('chat_message', (data) => {
        console.log('chat_message:')
        console.log(data)
        this.io.emit('new_chat_message', data)
      })
    })
  }
}
