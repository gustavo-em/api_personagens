"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personagens_route_1 = require("./personagens.route");
let router = express_1.Router();
exports.router = router;
router.use('/personagens', personagens_route_1.personagensRouter);
//# sourceMappingURL=index.js.map