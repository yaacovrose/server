import { Request, Response } from 'express'
import productService from "./service"
import { Product } from "../interface.js";

type ProductResult = Product[] | Error | string

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products: ProductResult  = await productService.getAllProducts();
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

const getTopCategory = async (req: Request, res: Response) => {
    try {
        const products: Product[] | string | Error = await productService.getTopCategory();
        res.status(200).json(products)
    } catch (err) {
        throw err
    }
}

const updateQuantity = async (req: Request, res: Response) => {
    try {
      const productToUpdate = req.body
  
      const quantityUpdate = await productService.updateQuantity(productToUpdate);
      if (!quantityUpdate)
        throw new Error("Could not update this product to this user");
      return res.send('quantity updated successfully!');
    } catch (error) {
      return error
    }
  };



const productController = {
    getAllProducts,
    getProductsByCategory,
    getTopCategory,
    updateQuantity
}

export default productController 