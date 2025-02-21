import { Document } from "mongoose";

  export interface Product extends Document {
    id: string,
    name: string,
    price: number,
    category: string,
    stock: number,
    description: string,
    brand: string,
    sku: string,
    tags: string[],
    createdAt: Date,
    updatedAt: Date 
  }