import { deprecate } from "util";
import { ObjectId } from 'mongodb'

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  attribute: Attribute[];
  count: number;
  quantity: number;
}
interface Attribute {
  Description: string;
  Details: number | string;
}

interface RequestBody {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {rate:number, count:number};
    quantity: number;
  }



export { Product, RequestBody}