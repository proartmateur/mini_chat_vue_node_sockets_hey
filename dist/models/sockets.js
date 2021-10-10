"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sockets = void 0;
class Sockets {
    constructor(io) {
        this.io = io;
        this.socketEvents();
    }
    socketEvents() {
        this.io.on('connection', (socket) => {
            socket.on('chat_message', (data) => {
                console.log('chat_message:');
                console.log(data);
                this.io.emit('new_chat_message', data);
            });
        });
    }
}
exports.Sockets = Sockets;
//# sourceMappingURL=sockets.js.map