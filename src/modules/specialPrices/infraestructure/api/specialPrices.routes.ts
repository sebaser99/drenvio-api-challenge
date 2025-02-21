import express from 'express';
import { specialPriceController, specialPriceMiddleware } from '../dependencies';



export const specialPricesRoutes = express.Router();


specialPricesRoutes.get('/',  specialPriceController.getAllSpecialPrices.bind(specialPriceController));

specialPricesRoutes.post('/',  specialPriceController.createSpecialPrice.bind(specialPriceController));

specialPricesRoutes.get('/user/:id',  specialPriceController.getUserSpecialPrice.bind(specialPriceController));