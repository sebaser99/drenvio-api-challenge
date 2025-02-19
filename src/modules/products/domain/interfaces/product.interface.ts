  export class Product {
    constructor(
      public readonly id: string,
      public name: string,
      public price: number,
      public category: string,
      public stock: number,
      public description: string,
      public brand: string,
      public sku: string,
      public tags: string[],
      public createdAt: Date,
      public updatedAt: Date
    ) {}
  }