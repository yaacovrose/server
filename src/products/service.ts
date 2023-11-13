import { Product, Attributes } from "../interface";
import productDal from "./mongoose_dal"


const getAllProducts = async (): Promise<Product[] | Error | string> => {
    try {
        const allProducts: Product[] | Error = await productDal.getAllProducts();
        return allProducts;
    } catch (err) {
        throw err
    }
}

const getProductsByCategory = async (category: string): Promise<Product[] | string | Error> => {
    try {
        const products: Product[] | Error = await productDal.getProductsByCategory(category);
        if (products) {
            return products;
        } 
        return "category not found";
    } catch (err) {
        throw err
    }
}

const getTopCategory = async (): Promise<Product[] | string | Error> => {
    try {
        const products: Product[] | Error = await productDal.getTopCategory();
        if (products) {
            return products;
        } 
        return "category not found";
    } catch (err) {
        throw err
    }
}

const productService = {
    getAllProducts,
    getProductsByCategory,
    getTopCategory
}

export default productService