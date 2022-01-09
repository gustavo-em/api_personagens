import { Router } from "express";
import { GetPersonagemidController } from "../modules/personagens/GetPersonagemId/GetPersonagemidController";
import { GetPersonagensController } from "../modules/personagens/GetPersonagens/GetPersonagensController";

let personagensRouter = Router()


personagensRouter.get('/todos', new GetPersonagensController().execute)
personagensRouter.post('/:id', new GetPersonagemidController().execute)

export { personagensRouter}