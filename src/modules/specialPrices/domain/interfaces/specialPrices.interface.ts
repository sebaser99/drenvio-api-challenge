import { Document, ObjectId } from "mongoose"

  export interface SpecialPrice extends Document {
 
     id: string,
     subscribedUsers: {
        document: string,
        name: string
      }[],
     productId: string,
     specialPrice:number, 
     createdAt: Date,
     updatedAt: Date
  }

  export interface SpecialPriceForm  {
    document: string,
    name: string
    productId: string,
    specialPrice?:number, 
  
 }