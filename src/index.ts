import dotenv from 'dotenv';
import express, { Application } from 'express';
import { Server } from './config/server';
import { databaseConnect } from './config/database';
import { AppRoutes } from './shared/infraestructure/api/shared.routes';


async function index(){
    try {
      
        dotenv.config();
        const app: Application = express();

        const server = new Server(app);

        const appRoutes = new AppRoutes(app);
        databaseConnect();
        appRoutes.init();
        server.raise();
    } catch(error){
        console.debug(error);
    }
}

export  default index;
index();
