"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MessageSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, 'The id field is required'],
        unique: true
    },
    user_name: {
        type: String,
        required: [true, 'The user_name field is required'],
    },
    content: {
        type: String,
        required: [true, 'The content field is required'],
    },
    time: {
        type: String
    },
    date: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});
exports.default = (0, mongoose_1.model)('Message', MessageSchema);
//# sourceMappingURL=message_schema.js.map