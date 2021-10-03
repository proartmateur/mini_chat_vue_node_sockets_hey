import { UserLister } from "../components/user/application/user_lister";
import { Request, Response } from "express";

export class UserController {

    constructor(){
        // empty
    }

    async index(req: Request, res: Response){
        const respuesta = await UserLister.list();
        res.status(200).json(respuesta);
    }

    async modify(req: Request, res: Response){
        const query = req.query;
        const params = req.params;
        const body = req.body;
        res.status(200).json({query, params, body});
    }
}