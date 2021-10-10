"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_dto_1 = require("../../domain/message_dto");
const uuid_1 = require("uuid");
class MessageFakeRepository {
    constructor() {
        this.items = [
            new message_dto_1.MessageDTO((0, uuid_1.v4)(), 'Enrique Nieto Martínez', 'Esto es un mensaje Fake!', '18:50', '2021-10-02'),
            new message_dto_1.MessageDTO((0, uuid_1.v4)(), 'Enrique Nieto Martínez', 'Segundo mensaje!', '18:51', '2021-10-02'),
            new message_dto_1.MessageDTO((0, uuid_1.v4)(), 'Diana Carolina', 'Hola a todos', '18:51', '2021-10-02'),
        ];
    }
    find(content_query) {
        return Promise.resolve(this.items.filter(x => x.content.includes(content_query)));
    }
    list() {
        return Promise.resolve(this.items);
    }
}
exports.default = MessageFakeRepository;
//# sourceMappingURL=message_fake_repository.js.map