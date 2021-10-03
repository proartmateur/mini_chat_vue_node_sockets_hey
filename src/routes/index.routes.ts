import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("HOLA EXPRESS TS alias");
});


export default router;
