"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_2 = require("@decorators/express");
const message_controller_1 = require("../../controllers/message.controller");
const router = (0, express_1.Router)();
(0, express_2.attachControllers)(router, [message_controller_1.MessageController]);
exports.default = router;
//# sourceMappingURL=message.routes.js.map