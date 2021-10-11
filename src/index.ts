import "reflect-metadata";
import { createConnection } from "typeorm";
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

import { useExpressServer } from "routing-controllers";
import { Application } from "express";

createConnection()
  .then(async (connection) => {
    // create express app
    const app:Application = express();
    useExpressServer(app, {
      controllers: [__dirname + "/controller/*{.js,.ts}"], // register controllers routes in our express app
    });
    app.use(express.json());

    // setup express app here
    app.use(morgan("tiny"));
    // app.use(helmet());

    // start express server
    app.listen(3000);

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
