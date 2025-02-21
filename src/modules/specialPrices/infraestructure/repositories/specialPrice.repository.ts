import { SpecialPrice, SpecialPriceForm } from "../../domain/interfaces/specialPrices.interface";
import { SpecialPriceRepositoryInterface } from "../../domain/repositories/specialPrice-repository.interface";
import { SpecialPriceModel } from "../models/specialPrices.model";


export class SpecialPriceRepository implements SpecialPriceRepositoryInterface {
    
    async getAllSpecialPrices(): Promise<SpecialPrice[]> {
      const specialPrices = await SpecialPriceModel.find().lean();
      return specialPrices;
    }
  async getSpecialPricesByDocument(document: string):  Promise<SpecialPrice | null> {
      const specialPrice = await SpecialPriceModel.findOne(
        { "subscribedUsers.document": document }, // Busca dentro del array
        { "subscribedUsers": { $elemMatch: { document } } } // Proyecta solo el usuario coincidente
    );

    return specialPrice ? specialPrice : null;
    } 

    async getSpecialPricesByDocuments(document: string):  Promise<SpecialPrice[] | null> {
      const specialPrice = await SpecialPriceModel.find(
        { "subscribedUsers.document": document },
        { "subscribedUsers": { $elemMatch: { document } } }
    );
    return specialPrice ? specialPrice : null;
    } 

    async createSpecialPrice(specialPriceP: SpecialPriceForm): Promise<any> {
      const { productId, name, document, specialPrice } = specialPriceP;

        await SpecialPriceModel.updateOne(
          { productId },
          { $pull: { subscribedUsers: { document } } }
      );

      const updatedSpecialPrice = await SpecialPriceModel.findOneAndUpdate(
          { productId },
          {
              $push: { subscribedUsers: { $each: [{ document, name }], $position: 0 } },
              $setOnInsert: { specialPrice }
          },
          { upsert: true, new: true, returnDocument: "after" }
      ).lean();

      return updatedSpecialPrice;
  }

    async countSpecialPricesByProduct(productId: string): Promise<number> {
      const cantPrices = await SpecialPriceModel.countDocuments({productId});
      return cantPrices;
    }

    async countSpecialPricesByDocumentAndProduct(document: string, productId:string): Promise<number> {
      const cantPrices = await SpecialPriceModel.countDocuments({
        "subscribedUsers.document": document,
        "productId": productId
      });
      return cantPrices;
    }
    
  }