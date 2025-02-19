import express, { Application } from "express";
import { productsRoutes } from "../../../modules/products/infraestructure/api/products.routes";
import { RouteGroup } from "../../domain/interfaces/route-group.interface";
import cors from "cors";

export class AppRoutes {
    routeGroup: RouteGroup[] = [
      {
        path: '/products',
        router: productsRoutes
      },
      
     
    ]

    constructor(private readonly _app: Application){}

    init(){
        this.middlewares();

        this.routeGroup.forEach(route => this._app.use(route.path, route.router));
    }

    middlewares(){
      this._app.use(cors());
      
      this._app.use(express.json());

      this._app.use(express.static('public'));

    }
}