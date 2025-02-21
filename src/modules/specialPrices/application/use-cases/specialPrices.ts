import { ResponseStatus } from "../../../../utils/enums/response-status";
import { CodeAndResponse } from "../../../../utils/types/code-and-response";
import utils from "../../../../utils/utils";
import { SpecialPriceRepository } from "../../infraestructure/repositories/specialPrice.repository";
import { specialPriceController } from '../../infraestructure/dependencies';
import { SpecialPrice, SpecialPriceForm } from "../../domain/interfaces/specialPrices.interface";
import { ProductRepository } from "../../../products/infraestructure/repositories/product.repository";
import constants from "../../../../config/constants";
import { Messages } from "../../../../utils/enums/messages";




export class SpecialPricesManagement {
    constructor(
        private readonly _repository: SpecialPriceRepository,
        private readonly _productRepository: ProductRepository
    ){}
    async getAllSpecialPrices():Promise<CodeAndResponse>{
        try {
            const specialPrices = await this._repository.getAllSpecialPrices();
            return {
                code: ResponseStatus.SUCCESS,
                response: {
                    data: specialPrices
                }
            };
        } catch(err){
            console.debug(err);
            return utils.getResponseError();
        }
    }

    async createSpecialPrice(newSpecialPrice: SpecialPriceForm):Promise<CodeAndResponse>{
        try {
           
            const count = await this._repository.countSpecialPricesByProduct(newSpecialPrice.productId);
           
            if(count === 0){
                const product = await this._productRepository.findById(newSpecialPrice.productId);
                if(product){
                    newSpecialPrice.specialPrice = (product.price - ((product.price * constants.discount)/100))
                }else {
                    return {

                        code: ResponseStatus.BAD_REQUEST,
                        response: {
                            messages: [Messages.PRODUCT_NOT_EXISTS]
                        }
                    }  
                }
            } else {
                const countS = await this._repository.countSpecialPricesByDocumentAndProduct(newSpecialPrice.document, newSpecialPrice.productId);
                if(countS > 0){
                    const user = await this._repository.getSpecialPricesByDocument(newSpecialPrice.document);
                    return {
                        code: ResponseStatus.BAD_REQUEST,
                        response: {
                            messages: [Messages.ALREADY_SPECIAL_PRICES],
                            data: user
                        }
                    }  
                }
            }
            const specialPrices = await this._repository.createSpecialPrice(newSpecialPrice);
            return {
                code: ResponseStatus.SUCCESS,
                response: {
                    data: specialPrices
                }
            };
        } catch(err){
            console.debug(err);
            return utils.getResponseError();
        }
    }

    async getUserSpecialPrice(id: string ){
        try {
            const user = await this._repository.getSpecialPricesByDocuments(id);
            return {
                code: ResponseStatus.SUCCESS,
                response: {
                    data: user
                }
            };
        } catch(err){
            console.debug(err);
            return utils.getResponseError();
        }
    }
}