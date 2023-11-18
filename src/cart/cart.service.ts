import { CartModel } from "../connectToDB";
import { Cart,productCart } from "../interface";

type CollectionResult = Promise<Cart |{}>;

const getCartById = async (userName:string): CollectionResult => {
    
    try {
      const cart = await CartModel.find({userName:userName});
      return cart
    } 
    catch (error) {
      console.error('Error fetching cart:', error);
      throw error; 
    }
  };

const updateCart = async (userName:string,cart:Cart) => {

  try {
    const updatedCart = await CartModel.findOneAndUpdate(
      { userName: userName },
      cart,
      { new: true,upsert: true  } 
    );
    if (updatedCart) {
      console.log("Cart updated successfully:", updatedCart);
    } else {
      console.log("No cart found for the given userId:", userName);
    }
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
}


const deleteCart = async (userName: string) => {

  try {
    const cart = await CartModel.findOneAndDelete({userName:userName});
    return cart
  } 
  catch (error) {
    console.error('Error in delete:', error);
    throw error; 
  }
};










const cartService = {
    getCartById,
    updateCart,
    deleteCart
}
export default cartService