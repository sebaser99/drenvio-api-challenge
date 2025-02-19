import { ProductManagement } from "../application/use-cases/product-management";
import { ProductManagementValidator } from "../application/validations/product-management.validations";
import { ProductMiddleware } from "./api/product.middleware";
import { ProductController } from "./api/products.controller";
import { ProductRepository } from "./repositories/product.repository";

//Repositorio - Infraestructure
const productRepository = new ProductRepository();

//Application
const productManagement = new ProductManagement(productRepository);
const productManagementValidator = new ProductManagementValidator();

//infraestructure
export const productController = new ProductController(productManagement);
export const productMiddleware = new ProductMiddleware(productManagementValidator);