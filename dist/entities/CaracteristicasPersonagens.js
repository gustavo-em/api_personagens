"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Personagens_1 = require("./Personagens");
const typeorm_1 = require("typeorm");
let CaracteristicasPersonagens = class CaracteristicasPersonagens {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], CaracteristicasPersonagens.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Personagens_1.Personagens, (personagem) => personagem.caracteristicas),
    __metadata("design:type", Personagens_1.Personagens)
], CaracteristicasPersonagens.prototype, "personagem", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CaracteristicasPersonagens.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CaracteristicasPersonagens.prototype, "descricao", void 0);
CaracteristicasPersonagens = __decorate([
    typeorm_1.Entity('caracteristicas_personagens')
], CaracteristicasPersonagens);
exports.CaracteristicasPersonagens = CaracteristicasPersonagens;
//# sourceMappingURL=CaracteristicasPersonagens.js.map