import productDal from "./dal"
import { Product, RequestBody } from "../interface";



const getAllProducts = async (): Promise<Product[] | Error> => {
    try {
        const allProducts: Product[] | Error = await productDal.getAllData();
        return allProducts;
    } catch (err) {
        throw err
    }
}

const getProductsByCategory = async (category: string): Promise<Product[] | string | Error> => {
    try {
        const products: Product[] = await productDal.getProductsByCategory(category);
        if (products) {
            return products;
        } 
        return "category not found";
    } catch (err) {
        throw err
    }
}

// const addProduct = async (product: req): Promise<string | Error> => {
//     try {
//         const products = await productDal.addProduct(product) 
//         return 'the product has been successfully added';
//     } catch (err) {
//         return new Error;
//     }
// }

// const updateProduct = async (id: number, update: RequestBody): Promise<string | Error> => {
//     try {
//         const isUpdate: string | Error = await productDal.updateProduct(id, update)
//         if (isUpdate){
//             return isUpdate
//         }
//         return 'the update was not successful, try again!'
//     } catch (err) {
//         return new Error
//     }
// }

// const deleteProduct = async (productToDelete: number): Promise<boolean | Error> => {
//     try {
//         const deleted:string | Error = await productDal.deleteProduct()

//         if (deleted) {
//             return true;
//         }
//         return false;

//     } catch (err) {
//         return new Error
//     }
// }


// function id(products: Product[]): number {
//     let maxId: number = 0
//     products.forEach((element: Product) => {
//         if (+element.id > maxId) {
//             maxId = element.id
//         }
//     });
//     const nextId: number = maxId + 1
//     return nextId
// }




const productService = {
    getAllProducts,
    getProductsByCategory,
    // addProduct,
    // updateProduct,
    // deleteProduct
}

export default productService