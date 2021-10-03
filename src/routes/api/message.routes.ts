import { Router } from "express";
import { attachControllers } from "@decorators/express";
import { MessageController } from "../../controllers/message.controller";

const router = Router();
attachControllers(router, [MessageController]);

export default router;
