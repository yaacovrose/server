import { Product, Attributes } from "../interface";
import productDal from "./mongoose_dal"


const getAllProducts = async (): Promise<Product[] | Error | string> => {
    try {
        const allProducts: Product[] | Error | null = await productDal.getAllProducts();
        if (!allProducts) return "products not found"
        return allProducts;
    } catch (error) {
        return new Error
    }
}

const getProductsByCategory = async (category: string): Promise<Product[] | string | Error> => {
    try {
        const products: Product[] | Error | null = await productDal.getProductsByCategory(category);
        if (products) {
            return products;
        } 
        return "category not found";
    } catch (err) {
        return new Error
    }
}

const getTopCategory = async (): Promise<Product[] | string | Error> => {
    try {
        const products: Product[] | Error | null = await productDal.getTopCategory();
        if (products) {
            return products;
        } 
        return "category not found";
    } catch (err) {
        return new Error
    }
}

interface updateQuantity {
    productId: string,
    quantity: number
}

const updateQuantity = async (product: updateQuantity) => {
    try {
        const productToUpdate: Product[] | Error | string | null = await productDal.updateQuantity(product)
        if (productToUpdate) return productToUpdate;
        return "quantity not updated";
    } catch (err) {
        return err
    }
  };

const productService = {
    getAllProducts,
    getProductsByCategory,
    getTopCategory,
    updateQuantity
}

export default productService