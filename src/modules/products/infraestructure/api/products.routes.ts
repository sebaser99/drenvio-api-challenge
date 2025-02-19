import express from 'express';
import { productController } from '../dependencies';


export const productsRoutes = express.Router();


productsRoutes.get('/getAllProducts', productController.getAllUsers.bind(productController));