import { Request, Response } from 'express'
import productService from "./service"
import { Product, RequestBody } from "../interface.js";

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products: Product[] | Error = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (err) {
        throw err
    }
};

const getProductsByCategory = async (req: Request, res: Response) => {
    const category: string = req.params.category;
    const products: Product[] | string = await productService.getProductsByCategory(category);
    res.status(200).json(products)
}



// const addProduct = async (req: Request, res: Response) => {
//     try {
//         const { title, price, description, category, image, rating, quantity }: RequestBody = req.body;
//         const newProduct: RequestBody = {
//             title,
//             price,
//             description,
//             category,
//             image,
//             rating,
//             quantity
//         }
//         const add: string | Error = await productService.addProduct(newProduct);
//         res.status(200).json(add)
//     }
//     catch (err) {
//         res.status(404).send('product is nut added')
//     }
// }

// const updateProduct = async (req: Request, res: Response) => {
//     try {
//         const id: number = +req.params.id
//         const updateDetails = req.body;
//         const update: string | Error = await productService.updateProduct(id, updateDetails);
//         res.status(200).json({'massage':update})
//     }
//     catch (err) {
//         res.status(404).send('product not updated')
//     }
// }

// const deleteProduct = async (req: Request, res: Response) => {
//     try {
//         const productToDelete: number = +req.params.id
//         const isDeleted: boolean | Error = await productService.deleteProduct(productToDelete);
//         if (isDeleted) {
//             res.status(200).send("Deleted successfuly")
//         } else {
//             res.status(404).send("Not found")
//         }
//     }
//     catch (err) {
//         res.status(400).send('product is not deleted')
//     }
// }




const productController = {
    getAllProducts,
    getProductsByCategory,
    // addProduct,
    // updateProduct,
    // deleteProduct
}

export default productController 