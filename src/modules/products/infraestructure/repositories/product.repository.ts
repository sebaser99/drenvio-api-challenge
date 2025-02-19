import { Product } from "../../domain/interfaces/product.interface";
import { ProductRepositoryInterface } from "../../domain/repositories/product-repository.interface";
import { ProductModel } from "../models/product.model";

export class ProductRepository implements ProductRepositoryInterface {
    async getAllProducts(): Promise<Product[]> {
        const products = await ProductModel.find();
        return products.map((product) => new Product(
            product.id,
            product.name,
            product.price,
            product.category,
            product.stock,
            product.description,
            product.brand,
            product.sku,
            product.tags,
            product.createdAt,
            product.updatedAt
          ));
    }

    async create(product: Product): Promise<Product> {
      const newProduct = await ProductModel.create(product);
      return new Product(
        newProduct.id,
        newProduct.name,
        newProduct.price,
        newProduct.category,
        newProduct.stock,
        newProduct.description,
        newProduct.brand,
        newProduct.sku,
        newProduct.tags,
        newProduct.createdAt,
        newProduct.updatedAt
      );
    }
  
    async findBySku(sku: string): Promise<Product | null> {
      const product = await ProductModel.findOne({ sku });
      return product
        ? new Product(
            product.id,
            product.name,
            product.price,
            product.category,
            product.stock,
            product.description,
            product.brand,
            product.sku,
            product.tags,
            product.createdAt,
            product.updatedAt
          )
        : null;
    }
  
    async updateStock(sku: string, stock: number): Promise<void> {
      await ProductModel.updateOne({ sku }, { stock });
    }

    async updateProduct(sku: string, product: Product): Promise<void> {
        await ProductModel.updateOne({ sku }, product);
      }
  
    async delete(sku: string): Promise<void> {
      await ProductModel.deleteOne({ sku });
    }
  }