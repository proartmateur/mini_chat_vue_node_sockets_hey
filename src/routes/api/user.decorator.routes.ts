import { Router } from "express";
import { attachControllers } from "@decorators/express";
import { UsersDecoratorController } from "../../controllers/user.decorator.controller";

const router = Router();
attachControllers(router, [UsersDecoratorController]);

export default router;
