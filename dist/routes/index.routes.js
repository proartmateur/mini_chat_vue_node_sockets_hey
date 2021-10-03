"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Chat API REST");
});
exports.default = router;
//# sourceMappingURL=index.routes.js.map