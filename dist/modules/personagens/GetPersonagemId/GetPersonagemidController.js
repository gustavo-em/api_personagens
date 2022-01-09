"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const personagen_caracteristicas_1 = require("./personagen_caracteristicas");
class GetPersonagemidController {
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            let personagens = yield personagen_caracteristicas_1.personagen_caracteristicas(id);
            if (personagens.dados === false) {
                return res.status(404).json({ erro: personagens.msg });
            }
            return personagens;
        });
    }
}
exports.GetPersonagemidController = GetPersonagemidController;
//# sourceMappingURL=GetPersonagemidController.js.map