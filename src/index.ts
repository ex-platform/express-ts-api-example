import "reflect-metadata";
import { createConnection } from "typeorm";
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

import { Application } from "express";
import userRouter from "./api/users";
import config from "./config";
import _session from "./session";

createConnection()
  .then(async (connection) => {
    // create express app
    const app: Application = express();

    // set up express app
    app.use(express.json());
    if (config.isProdMode) {
      app.set("trust proxy", 1);
    }
    app.use(_session);
    app.use(morgan("tiny"));
    app.use(helmet());

    // router
    app.get("/debug-session", function (req, res, next) {
      console.log(req.session);
      if (req.session.view === undefined) {
        req.session.view = 1;
      } else {
        req.session.view = req.session.view + 1;
      }
      res.send(`Views: ${req.session.view}`)
    });
    app.use("/users", userRouter);

    // start express server
    app.listen(3000);

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
