"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDTO = void 0;
class MessageDTO {
    constructor(_id, _user_name, _content, _time, _date) {
        this._id = _id;
        this._user_name = _user_name;
        this._content = _content;
        this._time = _time;
        this._date = _date;
    }
    get id() {
        return this._id;
    }
    get user_name() {
        return this._user_name;
    }
    get content() {
        return this._content;
    }
    get time() {
        return this._time;
    }
    get date() {
        return this._date;
    }
}
exports.MessageDTO = MessageDTO;
//# sourceMappingURL=message_dto.js.map