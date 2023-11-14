interface Product {
  [x: string]: any;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  attribute: Attributes[];
  count: number;
  quantity: number;
}

interface Attributes {
  Description: string;
  Details: number | string;
}

interface UsersInterface {
  save(): unknown;
  id: number;
  userName: string;
  email: string;
  password: string;
}

interface UserValid {
  email: string,
  password: string
}

interface productCart {
  productId: string
  quantity: number
}

interface Cart {
  userId:string,
  product:productCart[]
}



export { 
  Product, 
  Attributes, 
  UsersInterface,
  UserValid ,
  Cart,
  productCart
};