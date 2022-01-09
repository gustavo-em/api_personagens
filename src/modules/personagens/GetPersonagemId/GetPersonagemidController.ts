import { personagen_caracteristicas } from "./personagen_caracteristicas"
import { Request, Response } from "express";
export class GetPersonagemidController {
    async execute(req: Request, res: Response){
        const { id } = req.params
        let personagens = await personagen_caracteristicas(id)

        if(personagens.dados === false ){
            return res.status(404).json({erro: personagens.msg})
        }

        return personagens
    }
}