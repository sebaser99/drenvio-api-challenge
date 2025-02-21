
import { Request, Response } from "express";
import { SpecialPricesManagement } from "../../application/use-cases/specialPrices";

export class SpecialPricesController  {
    constructor(
        private readonly _specialPricesManagement : SpecialPricesManagement
    ){}
    async getAllSpecialPrices(req: Request, res: Response){
        const {code, response} = await this._specialPricesManagement.getAllSpecialPrices();
        res.status(code).json(response);
    }

    async createSpecialPrice(req: Request, res: Response){
        const {code, response} = await this._specialPricesManagement.createSpecialPrice(req.body);
        res.status(code).json(response);
    }

    async getUserSpecialPrice(req: Request, res: Response){
        const {code, response} = await this._specialPricesManagement.getUserSpecialPrice(req.params.id);
        res.status(code).json(response);
    }
}