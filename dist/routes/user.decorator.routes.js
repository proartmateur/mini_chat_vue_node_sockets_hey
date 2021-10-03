"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_2 = require("@decorators/express");
const user_decorator_controller_1 = require("@controllers/user.decorator.controller");
const router = (0, express_1.Router)();
(0, express_2.attachControllers)(router, [user_decorator_controller_1.UsersDecoratorController]);
exports.default = router;
//# sourceMappingURL=user.decorator.routes.js.map