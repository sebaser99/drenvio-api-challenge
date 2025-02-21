import { NextFunction } from "express";
import { Request, Response } from "express";
import { ResponseStatus } from "../../../../utils/enums/response-status";
import { CodeAndResponse } from "../../../../utils/types/code-and-response";
import { SpecialPricesManagementValidator } from "../../application/validations/specialPrices-management.validations";

export class SpecialPricesMiddleware {
    constructor(private readonly _validators: SpecialPricesManagementValidator){}

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