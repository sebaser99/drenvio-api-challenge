import { NextFunction } from "express";
import { ProductManagementValidator } from "../../application/validations/product-management.validations";
import { Request, Response } from "express";
import { ResponseStatus } from "../../../../utils/enums/response-status";
import { CodeAndResponse } from "../../../../utils/types/code-and-response";

export class ProductMiddleware {
    constructor(private readonly _validators: ProductManagementValidator){}

    async validateAdd(req: Request, res: Response, next: NextFunction) {
        const validations = await this._validators.addData(req.body);
        
        if(validations.length > 0) {
            const result: CodeAndResponse = {
                code: ResponseStatus.BAD_REQUEST,
                response: {
                    messages: validations
                }
            };
            
            return res.status(result.code).json(result.response);
        }
    
        next();
    }
}