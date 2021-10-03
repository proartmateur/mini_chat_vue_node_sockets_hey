"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = __importDefault(require("../../../../models/usuario"));
class UserSequelizeRepository {
    list() {
        return usuario_1.default.findAll();
    }
    find(id) {
        return usuario_1.default.findByPk(id);
    }
}
exports.default = UserSequelizeRepository;
//# sourceMappingURL=user_sequelize_repository.js.map