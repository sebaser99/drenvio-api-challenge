import {Application} from 'express';
import dotenv from 'dotenv';
dotenv.config();

export class Server {
    constructor(private readonly _app: Application){}

    raise(){
        const port = process.env.PORT;

        this._app.listen(port || '9000', ()=> {
            console.debug(`App listening on port: ${port}`);
        })
    }
}