"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetPersonagemidController_1 = require("../modules/personagens/GetPersonagemId/GetPersonagemidController");
const GetPersonagensController_1 = require("../modules/personagens/GetPersonagens/GetPersonagensController");
let personagensRouter = express_1.Router();
exports.personagensRouter = personagensRouter;
personagensRouter.get('/todos', new GetPersonagensController_1.GetPersonagensController().execute);
personagensRouter.post('/:id', new GetPersonagemidController_1.GetPersonagemidController().execute);
//# sourceMappingURL=personagens.route.js.map