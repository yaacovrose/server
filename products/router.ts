 import express from "express";
import productController from "./controller"
import { Router } from "express-serve-static-core";


const productRouter: Router = express.Router();

productRouter.get('/', productController.getAllProducts);
productRouter.get('/:category', productController.getProductsByCategory);

export default productRouter;