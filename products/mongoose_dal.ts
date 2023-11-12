import { ProductModel } from "../connectToDB";
import { Product } from "../interface";


type CollectionResult = Promise<Product[] | Error>;

const getAllProducts = async (): CollectionResult => {
  try {
    const results:Product[] = await ProductModel.find({});
    const data:Product[] = results.map((document) => document.toObject());
    console.log('Data fetched successfully');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};


const getProductsByCategory = async (category: string): CollectionResult => {
  try {
    const results:Product[] = await ProductModel.find({category: category});
    const data:Product[] = results.map((document) => document.toObject());
    console.log('Data fetched successfully');
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};

const productDal = {
  getAllProducts,
  getProductsByCategory
}


export default productDal