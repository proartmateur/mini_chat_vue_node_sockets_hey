export class Sockets {
  private io

  constructor(io) {
    this.io = io
    this.socketEvents()
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
      socket.on('chat-message', (data) => {
        console.log('chat-message:')
        console.log(data)
        this.io.emit('new-chat-message', data)
      })
    })
  }
}
