"use strict";
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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const index_routes_1 = __importDefault(require("../routes/index.routes"));
const message_routes_1 = __importDefault(require("../routes/api/message.routes"));
const mongo_connection_1 = __importDefault(require("../db/mongo_connection"));
const sockets_1 = require("./sockets");
class Server {
    constructor() {
        this.port = process.env.PORT || '3000';
        this.base_route = `/${process.env.APP_BASE_ROUTE}`;
        this.public_route = '/public';
        this.public_dir = path_1.default.resolve(__dirname, '../', 'public');
        this.dbConnection();
        this.app = (0, express_1.default)();
        this.server = new http_1.default.Server(this.app);
        this.io = new socket_io_1.default.Server(this.server, {
            cors: {
                origin: 'http://localhost:3006',
            },
        });
        this.middlewares();
        this.routes();
        this.sockets();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, mongo_connection_1.default)();
        });
    }
    sockets() {
        const sockets = new sockets_1.Sockets(this.io);
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        const static_base_route = `${this.base_route}${this.public_route}`;
        this.app.use(static_base_route, express_1.default.static(this.public_dir));
    }
    routes() {
        this.app.use(`${this.base_route}`, index_routes_1.default);
        this.app.use(`${this.base_route}/api/messages`, message_routes_1.default);
    }
    listen() {
        // this.app.listen(this.port, () => {
        //   console.log(`HTTP_OK: App listening at http://localhost:${this.port}`)
        // })
        this.server.listen(this.port, () => {
            console.log(`HTTP_OK: App listening at http://localhost:${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map