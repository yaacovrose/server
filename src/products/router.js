"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("./controller");
var productRouter = express_1.default.Router();
productRouter.get('/', controller_1.default.getAllProducts);
productRouter.get('/:category', controller_1.default.getProductsByCategory);
exports.default = productRouter;
