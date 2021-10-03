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
exports.UsersDecoratorController = void 0;
const express_1 = require("@decorators/express");
const user_sequelize_repository_1 = __importDefault(require("../components/user/infrastructure/persistence/user_sequelize_repository"));
const repo = new user_sequelize_repository_1.default();
let UsersDecoratorController = class UsersDecoratorController {
    constructor() {
        this.base_route = '/learning_node';
    }
    listAll(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield repo.list();
            res.status(200).json({
                users,
            });
        });
    }
    getData(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield repo.find(id);
                if (!user) {
                    res.status(404).json({
                        error: 'No existe el usuario con id: ' + id,
                    });
                }
                res.status(200).json(user);
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
    (0, express_1.Get)('/users'),
    __param(0, (0, express_1.Response)())
], UsersDecoratorController.prototype, "listAll", null);
__decorate([
    (0, express_1.Get)('/users/:id'),
    __param(0, (0, express_1.Response)()),
    __param(1, (0, express_1.Params)('id'))
], UsersDecoratorController.prototype, "getData", null);
UsersDecoratorController = __decorate([
    (0, express_1.Controller)('/')
], UsersDecoratorController);
exports.UsersDecoratorController = UsersDecoratorController;
//# sourceMappingURL=user.decorator.controller.js.map