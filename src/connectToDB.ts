import { Document, Schema, Model, SchemaTypes } from "mongoose";
import mongoose from "mongoose";
import { Product, Attributes } from "./interface";


const attributeSchema:Schema = new Schema<Attributes>({
  Description: { type: String, required: true },
  Details: { type: Schema.Types.Mixed, required: true },
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


