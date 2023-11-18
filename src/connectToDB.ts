import { Document, Schema, Model, SchemaTypes } from "mongoose";
import mongoose from "mongoose";
import { Product, Attributes, UsersInterface, Cart, productCart } from "./interface";
import { number } from "joi";


const attributeSchema:Schema = new Schema<Attributes>({
  key: { type: String, required: true },
  value: { type: Schema.Types.Mixed, required: true },
});


const productSchema:Schema = new Schema<Product>({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  attribute: { type: [attributeSchema], required: true },
  count: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const usersSchema:Schema = new Schema<UsersInterface>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const productCartSchema:Schema = new Schema<productCart>({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },

});

const cartSchema:Schema = new Schema<Cart>({
  userId: { type: String, required: true },
  product: { type: [productCartSchema], required: true },

});


export const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://store_23:store_23@cluster0.kcamuno.mongodb.net/store_db?retryWrites=true&w=majority');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}


export const ProductModel: Model<Product> = mongoose.model<Product>('product', productSchema)

export const  CartModel: Model<Cart> = mongoose.model<Cart>('cart', cartSchema)

export const UsersModel: Model<UsersInterface> = mongoose.model<UsersInterface>('users', usersSchema)
