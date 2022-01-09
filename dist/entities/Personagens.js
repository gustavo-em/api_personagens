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
const typeorm_1 = require("typeorm");
const CaracteristicasPersonagens_1 = require("./CaracteristicasPersonagens");
let Personagens = class Personagens {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", Number)
], Personagens.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToMany(() => CaracteristicasPersonagens_1.CaracteristicasPersonagens, (car_per) => car_per.personagem),
    __metadata("design:type", Array)
], Personagens.prototype, "caracteristicas", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Personagens.prototype, "nome", void 0);
Personagens = __decorate([
    typeorm_1.Entity('personagens')
], Personagens);
exports.Personagens = Personagens;
//# sourceMappingURL=Personagens.js.map