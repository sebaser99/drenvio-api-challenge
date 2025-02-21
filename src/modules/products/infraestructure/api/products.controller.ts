import { ProductManagement } from "../../application/use-cases/product-management";
import { Request, Response } from "express";

export class ProductController  {
    constructor(
        private readonly _productManagement : ProductManagement
    ){}
    async getAllProducts(req: Request, res: Response){
        const {code, response} = await this._productManagement.getAllProducts();
        res.status(code).json(response);
    }
}