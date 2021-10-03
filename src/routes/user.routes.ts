import { UserController } from "../controllers/user.controller";
import { Router, Request, Response } from "express";


const router = Router();
const userController = new UserController();

router.get("/", userController.index);
router.put("/:id", userController.modify);

export default router;