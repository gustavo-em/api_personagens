import { Request, Response } from "express";
import { puxar_todos_personagens } from "./puxar_todos_personagens";

export class GetPersonagensController {
    async execute(req: Request, res: Response){
        let personagens_or_false = await puxar_todos_personagens()

        if(personagens_or_false.dados === false){
            return res.status(404).json(personagens_or_false)
        }

        return res.json(personagens_or_false)
    }
}