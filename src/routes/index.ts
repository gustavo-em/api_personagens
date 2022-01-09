import { Router } from "express";
import { personagensRouter } from "./personagens.route";


let router = Router()

router.use('/personagens', personagensRouter)

export {router}