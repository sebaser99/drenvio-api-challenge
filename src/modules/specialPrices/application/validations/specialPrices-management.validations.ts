import { Messages } from "../../../../utils/enums/messages";
import utils from "../../../../utils/utils";

export class SpecialPricesManagementValidator {
    constructor(){}
    messages: string[] = [];

    async addData(specialPrice: any) : Promise<string[]> {
        if(utils.isEmpty(specialPrice.user)) {
            this.messages.push(`${Messages.REQUIRED_FIELD} [ Usuario ].`);
        }
        if(utils.isEmpty(specialPrice.productId)) {
            this.messages.push(`${Messages.REQUIRED_FIELD} [ Id Producto ].`);
        }
        if(utils.isEmpty(specialPrice.specialPrice)) {
            this.messages.push(`${Messages.REQUIRED_FIELD} [ Precio Especial ].`);
        }
        return this.messages;
    }
}