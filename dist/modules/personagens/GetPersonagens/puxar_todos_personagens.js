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
const typeorm_1 = require("typeorm");
const Personagens_1 = require("../../../entities/Personagens");
function puxar_todos_personagens() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let repoPersonagens = typeorm_1.getRepository(Personagens_1.Personagens);
            let personagens = yield repoPersonagens.find();
            return { msg: "Todos os personagens", dados: personagens };
        }
        catch (err) {
            return { msg: "Houve um erro ao trazer os personagens", dados: false };
        }
    });
}
exports.puxar_todos_personagens = puxar_todos_personagens;
//# sourceMappingURL=puxar_todos_personagens.js.map