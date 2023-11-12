 import express from "express";
import productController from "./controller"
import { Router } from "express-serve-static-core";


const productRouter: Router = express.Router();

productRouter.get('/', productController.getAllProducts);
productRouter.get('/:category', productController.getProductsByCategory);

// productRouter.post('/', productController.addProduct);

// productRouter.patch('/:id', productController.updateProduct);

// productRouter.delete('/:id', productController.deleteProduct);

export default productRouter;