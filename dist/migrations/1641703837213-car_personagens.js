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
class carPersonagens1641703837213 {
    constructor() {
        this.name = 'carPersonagens1641703837213';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "caracteristicas_personagens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "personagemId" uuid, CONSTRAINT "PK_eff05c90a12a0e7d0829c590269" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "caracteristicas_personagens" ADD CONSTRAINT "FK_328c5b28c50b71274f1d3b1abab" FOREIGN KEY ("personagemId") REFERENCES "personagens"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "caracteristicas_personagens" DROP CONSTRAINT "FK_328c5b28c50b71274f1d3b1abab"`);
            yield queryRunner.query(`DROP TABLE "caracteristicas_personagens"`);
        });
    }
}
exports.carPersonagens1641703837213 = carPersonagens1641703837213;
//# sourceMappingURL=1641703837213-car_personagens.js.map