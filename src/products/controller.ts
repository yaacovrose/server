import { Request, Response } from 'express'
import productService from "./service"
import { Product } from "../interface.js";

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products: Product[] | Error = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (err) {
        throw err
    }
};

const getProductsByCategory = async (req: Request, res: Response) => {
    try {
        const category: string = req.params.category;
        const products: Product[] | string | Error = await productService.getProductsByCategory(category);
        res.status(200).json(products)
    } catch (err) {
        throw err
    }
}


const productController = {
    getAllProducts,
    getProductsByCategory,
}

export default productController 