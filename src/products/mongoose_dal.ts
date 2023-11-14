import { ProductModel } from "../connectToDB"
import { Product } from "../interface";


type CollectionResult = Promise<Product[] | Error | null>;

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


const getTopCategory = async ():CollectionResult => {
  try {
    const result:Product [] = await ProductModel.aggregate([
      {
        $group: {
          _id: "$category",
          clickCount: { $sum: "$count" }
        }
      },
      {
        $sort: { clickCount: -1 }
      },
      {
        $limit: 3
      },
      {
        $project: {
          _id: 0,
          category: "$_id",
          clickCount: 1
        }
      }
    ]);
    console.log('result:', result);
    console.log('Data fetched successfully');
    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; 
  }
};

interface updateQuantity {
  productId: string,
  quantity: number
}

const updateQuantity = async (product: updateQuantity): CollectionResult => {
  try {
    const { productId, quantity } = product;
    const updatedProduct: Product | null = await ProductModel.findOneAndUpdate(
      { _id: productId, quantity: { $gt: quantity } },  
      { $set: { quantity: quantity } },
      { new: true }
    );

    if (!updatedProduct) {
      console.log('The product has not updated - the new quantity is greater than the existing quantity');
      return null;
    }

    console.log('product update successfully!');
    return [updatedProduct.toObject()]; 
  } catch (error) {
    console.error('Error updating the product:', error);
    throw error;
  }
};



const productDal = {
  getAllProducts,
  getProductsByCategory,
  getTopCategory,
  updateQuantity
}


export default productDal