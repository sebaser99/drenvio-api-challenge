import { Schema, model } from "mongoose";
import { SpecialPrice } from "../../domain/interfaces/specialPrices.interface";


const SpecialPriceSchema = new Schema<SpecialPrice>(
  {
    subscribedUsers: [{
      document: { type: String, required: true },
      name: { type: String, required: true },
    }],
    productId: { type: String, required: true },
    specialPrice: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

    export const SpecialPriceModel = model<SpecialPrice>("SpecialPrice", SpecialPriceSchema, "preciosEspecialesRodriguez99");