"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const express_1 = require("@decorators/express");
const express_validator_1 = require("express-validator");
const message_fake_repository_1 = __importDefault(require("../components/message/infrastructure/persistence/message_fake_repository"));
const message_schema_1 = __importDefault(require("../models/message_schema"));
const validate_fields_1 = require("../middlewares/validate_fields");
const dayjs_1 = __importDefault(require("dayjs"));
const repo = new message_fake_repository_1.default();
const new_message_validations = [
    (0, express_validator_1.body)('id', 'The id field is required and needs to be an UUID v4').isUUID(4),
    (0, express_validator_1.body)('user_name', 'The user_name field is required and needs to be a string at lieat 3 characters')
        .isString().isLength({ min: 3 }),
    (0, express_validator_1.body)('content', 'The content field is required and needs to be a valid string').isString(),
    validate_fields_1.ValidateFields,
];
let MessageController = class MessageController {
    constructor() {
        this.base_route = '/messages';
    }
    // @ts-ignore
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page = 0, limit = 5 } = req.query;
            const from_message = Number(page) * Number(limit);
            console.log(limit);
            console.log(from_message);
            const messages = yield message_schema_1.default.find()
                .sort({ timestamp: -1 })
                .skip(from_message)
                .limit(Number(limit));
            const total = yield message_schema_1.default.count();
            const total_pages = Math.ceil(total / limit);
            res.status(200).json({
                messages,
                page: Number(page),
                limit: Number(limit),
                total,
                total_pages,
            });
        });
    }
    newMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, user_name, content, } = req.body;
            try {
                const message = new message_schema_1.default({
                    id,
                    content,
                    user_name,
                    time: (0, dayjs_1.default)().format('HH:mm'),
                    date: (0, dayjs_1.default)().format('YYYY-MM-DD'),
                });
                yield message.save();
                res.status(201).json({
                    message: 'message created!',
                });
            }
            catch (error) {
                res.status(500).json({
                    message: 'Can not save the message',
                    error,
                });
            }
        });
    }
    getMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const content_query = req.body.content_query;
            console.log(req);
            try {
                const messages = yield message_schema_1.default.find({ content: { $regex: content_query, $options: 'i' } })
                    .sort({ timestamp: -1 });
                if (!messages) {
                    res.status(404).json({
                        error: 'No se encontraron mensajes: ' + content_query,
                    });
                }
                res.status(200).json(messages);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    error: 'Problema con la búsqueda. :(',
                });
            }
        });
    }
    getMessageByDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const content_query = req.body.content_query;
            console.log(req);
            try {
                const messages = yield message_schema_1.default.find({ date: { $regex: content_query, $options: 'i' } })
                    .sort({ timestamp: -1 });
                if (!messages) {
                    res.status(404).json({
                        error: 'No se encontraron mensajes: ' + content_query,
                    });
                }
                res.status(200).json(messages);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    error: 'Problema con la búsqueda. :(',
                });
            }
        });
    }
};
__decorate([
    (0, express_1.Get)('/'),
    __param(0, (0, express_1.Request)()),
    __param(1, (0, express_1.Response)())
], MessageController.prototype, "listAll", null);
__decorate([
    (0, express_1.Post)('/', new_message_validations),
    __param(0, (0, express_1.Request)()),
    __param(1, (0, express_1.Response)())
], MessageController.prototype, "newMessage", null);
__decorate([
    (0, express_1.Post)('/find'),
    __param(0, (0, express_1.Request)()),
    __param(1, (0, express_1.Response)())
], MessageController.prototype, "getMessage", null);
__decorate([
    (0, express_1.Post)('/find_date'),
    __param(0, (0, express_1.Request)()),
    __param(1, (0, express_1.Response)())
], MessageController.prototype, "getMessageByDate", null);
MessageController = __decorate([
    (0, express_1.Controller)('/')
], MessageController);
exports.MessageController = MessageController;
//# sourceMappingURL=message.controller.js.map