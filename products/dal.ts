import { promisify } from 'util';
import * as fs from 'node:fs';
import {Product, RequestBody} from '../interface';
import { db } from '../connect';
import main from '../connect';
import { WithId, Collection, Document } from 'mongodb';




const getAllData = async ():Promise<WithId<Product>[]> => {
    const collection:Collection = db.collection('products')
    try {
        const result: WithId<Document>[] = await collection.find({}).toArray();
        const castedResult: WithId<Product>[] = result as WithId<Product>[];
        console.log('Data fetched successfully');
    return castedResult;
    } catch (err) {
        console.error('Error fetching data:', err);
        throw err; 
    }
}

const getProductsByCategory = async (id:number):Promise<Product> => {
    const collection:Collection = db.collection('products')
    try {
        const result:Product = await collection.find({id:id}).toArray();
        console.log('Data fetched successfully');
        return result; 
    } catch (err) {
        console.error('Error fetching data:', err);
        throw err; 
    }
}

// const addProduct = async (product: RequestBody) => {
//     const collection:Collection = db.collection('products');
//     try {
//         const result = await collection.insertOne(product);
//         return 'product added successfully'
//     } catch (err) {
//         return false
//     }
// }

// const updateProduct = async (id: number, product: RequestBody):Promise<string | Error> => {
//     const collection:Collection = db.collection('products');
//     try {
//         const result = await collection.updateOne(
//             {id: id},
//             {$set: product}
//         );
//         return 'product updated successfully'
//     } catch (err) {
//         return new Error
//     }
// }


// const deleteProduct = async (id: number):Promise<string | Error> => {
//     const collection:Collection = db.collection('products');
//     try {
//         const result = await collection.deleteOne({id: id});
//         return 'product deleted successfully';
//     } catch (err) {
//         return new Error
// }
// }


 


const productDal = {
    // writeFiles,
    // readFiles,
    getAllData,
    // getProductById,
    // addProduct,
    // updateProduct,
    // deleteProduct
}


export default productDal;