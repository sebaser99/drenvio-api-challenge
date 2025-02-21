import { ProductRepository } from "../../products/infraestructure/repositories/product.repository";
import { SpecialPricesManagement } from "../application/use-cases/specialPrices";
import { SpecialPricesManagementValidator } from "../application/validations/specialPrices-management.validations";
import { SpecialPricesMiddleware } from "./api/specialPrice.middleware";
import { SpecialPricesController } from "./api/specialPrices.controller";
import { SpecialPriceRepository } from "./repositories/specialPrice.repository";


//Repositorio - Infraestructure
const specialPriceRepository = new SpecialPriceRepository();
const productRepository = new ProductRepository();

//Application
const specialPriceManagement = new SpecialPricesManagement(specialPriceRepository, productRepository);
const specialPriceManagementValidator = new SpecialPricesManagementValidator();

//infraestructure
export const specialPriceController = new SpecialPricesController(specialPriceManagement);
export const specialPriceMiddleware = new SpecialPricesMiddleware(specialPriceManagementValidator);