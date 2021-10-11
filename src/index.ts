import "reflect-metadata";
import { createConnection } from "typeorm";
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

import { Application } from "express";
import userRouter from "./api/users";

createConnection()
  .then(async (connection) => {
    // create express app
    const app: Application = express();

    app.use(express.json());

    // setup express app here
    app.use(morgan("tiny"));
    app.use(helmet());

    app.use("/users", userRouter);

    // start express server
    app.listen(3000);

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
