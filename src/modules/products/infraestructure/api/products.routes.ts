import express from 'express';
import { productController } from '../dependencies';


export const productsRoutes = express.Router();


productsRoutes.get('/', productController.getAllProducts.bind(productController));