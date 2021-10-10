import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import {Request, Response} from "express";

import {User} from "./entity/User";
import { useExpressServer } from "routing-controllers";

createConnection().then(async connection => {

    // create express app
    const app = express();
    useExpressServer(app, {
      controllers: [__dirname + '/controller/*{.js,.ts}'] // register controllers routes in our express app
    })
    app.use(express.json());

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
