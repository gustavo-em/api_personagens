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
function personagen_caracteristicas(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let repoPersonagens = typeorm_1.getRepository(Personagens_1.Personagens);
            let personagens_carac = yield repoPersonagens.find({
                where: {
                    id: id
                },
                relations: ['caracteristicas']
            });
            return {
                msg: "Personagens com caracteristicas",
                dados: personagens_carac
            };
        }
        catch (err) {
            return {
                msg: err,
                dados: false
            };
        }
    });
}
exports.personagen_caracteristicas = personagen_caracteristicas;
//# sourceMappingURL=personagen_caracteristicas.js.map