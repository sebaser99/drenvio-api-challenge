import { Product } from "../interfaces/product.interface";

export interface ProductRepositoryInterface {
    getAllProducts(): Promise<Product[]>;
    create(product: Product): Promise<Product>;
    updateProduct(sku: string, product: Product): Promise<void>;
    findBySku(sku: string): Promise<Product | null>;
    findById(id: string): Promise<Product | null>;
    updateStock(sku: string, stock: number): Promise<void>;
    delete(sku: string): Promise<void>;
  }