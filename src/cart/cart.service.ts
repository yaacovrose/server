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

const updateCart = async (userId:string,cart:Cart) => {

  try {
    const updatedCart = await CartModel.findOneAndUpdate(
      { userId: userId },
      cart,
      { new: true } 
    );
    if (updatedCart) {
      console.log("Cart updated successfully:", updatedCart);
    } else {
      console.log("No cart found for the given userId:", userId);
    }
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
}


const deleteCart = async (userId: string) => {

  try {
    const cart = await CartModel.findOneAndDelete({userId:userId});
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