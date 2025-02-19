import { ResponseStatus } from "../../../../utils/enums/response-status";
import { CodeAndResponse } from "../../../../utils/types/code-and-response";
import utils from "../../../../utils/utils";
import { ProductRepository } from "../../infraestructure/repositories/product.repository";



export class ProductManagement {
    constructor(
        private readonly _repository: ProductRepository
    ){}
    async getAllProducts():Promise<CodeAndResponse>{
        try {
            const users = await this._repository.getAllProducts();
            return {
                code: ResponseStatus.SUCCESS,
                response: {
                    data: users
                }
            };
        } catch(err){
            console.debug(err);
            return utils.getResponseError();
        }
    }
}