"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
const app = express_1.default();
const typeorm_1 = require("typeorm");
const routes_1 = require("./routes");
typeorm_1.createConnections().then(() => {
    app.use(body_parser_1.default.json());
    app.use(cors_1.default());
    app.use(routes_1.router);
    app.listen('3333', () => console.log('Server is running'));
});
//# sourceMappingURL=app.js.map