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
const puxar_todos_personagens_1 = require("./puxar_todos_personagens");
class GetPersonagensController {
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let personagens_or_false = yield puxar_todos_personagens_1.puxar_todos_personagens();
            if (personagens_or_false.dados === false) {
                return res.status(404).json(personagens_or_false);
            }
            return res.json(personagens_or_false);
        });
    }
}
exports.GetPersonagensController = GetPersonagensController;
//# sourceMappingURL=GetPersonagensController.js.map