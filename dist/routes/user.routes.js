"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
const userController = new user_controller_1.UserController();
router.get("/", userController.index);
router.put("/:id", userController.modify);
exports.default = router;
//# sourceMappingURL=user.routes.js.map