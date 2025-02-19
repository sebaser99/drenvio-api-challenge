import { Schema, model } from "mongoose";
import { Product } from "../../domain/interfaces/product.interface";


const ProductSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

    export const ProductModel = model<Product>("productos", ProductSchema);