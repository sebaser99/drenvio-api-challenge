import { SpecialPrice, SpecialPriceForm } from "../interfaces/specialPrices.interface";



export interface SpecialPriceRepositoryInterface {
    getAllSpecialPrices(): Promise<any>;
    createSpecialPrice(specialPrice: SpecialPriceForm): Promise<SpecialPrice>;
    getSpecialPricesByDocument(document: string):  Promise<SpecialPrice | null>;
    countSpecialPricesByProduct(productId: string):Promise<number>;
    countSpecialPricesByDocumentAndProduct(document: string, product: string):Promise<number>;
    getSpecialPricesByDocuments(document: string):  Promise<SpecialPrice[] | null>;
    // updateSpecialPrice(sku: string, specialPrice: SpecialPrice): Promise<void>;
    // findBySku(sku: string): Promise<SpecialPrice | null>;
    // updatePrice(sku: string, price: number): Promise<void>;
    // delete(sku: string): Promise<void>;
  }