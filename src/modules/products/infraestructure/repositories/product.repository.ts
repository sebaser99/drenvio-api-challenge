import { Product } from "../../domain/interfaces/product.interface";
import { ProductRepositoryInterface } from "../../domain/repositories/product-repository.interface";
import { ProductModel } from "../models/product.model";

export class ProductRepository implements ProductRepositoryInterface {
    async getAllProducts(): Promise<Product[]> {
        const products = await ProductModel.find().lean();
        return products;
    }

    async create(product: Product): Promise<Product> {
      const newProduct = await ProductModel.create(product);
      return newProduct.toObject();
    }
  
    async findBySku(sku: string): Promise<Product | null> {
      const product = await ProductModel.findOne({ sku }).lean();
      return product;
    }

    async findById(id: string): Promise<Product | null> {
      const product = await ProductModel.findById(id).lean();
      return product;
    }
  
    async updateStock(sku: string, stock: number): Promise<void> {
      await ProductModel.updateOne({ sku }, { stock }).lean();
    }

    async updateProduct(sku: string, product: Product): Promise<void> {
        await ProductModel.updateOne({ sku }, product);
      }
  
    async delete(sku: string): Promise<void> {
      await ProductModel.deleteOne({ sku });
    }
  }