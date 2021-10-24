import "reflect-metadata";
import { Application } from "express";

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

// import _passport from "./passport";
import authRouter from "../api/auth";
import userRouter from "../api/users";

// create express app
const app: Application = express();

// set up express app
// app.use(express.json());
// if (config.isProdMode) {
//   app.set("trust proxy", 1);
// }
// app.use(_session);
// app.use(morgan("tiny"));
// app.use(helmet());
// app.use(pino)
// app.use(_passport.initialize());
// app.use(_passport.session());

// // router
// app.use(authRouter.prefix, authRouter.router);
// app.use(userRouter.prefix, userRouter.router);
// app.get("/", function (req, res, next) {
//   if (req.session.view === undefined) {
//     req.session.view = 1;
//   } else {
//     req.session.view = req.session.view + 1;
//   }
//   // req.log.info("hello world")
//   req.log.info('Hello world')
//   res.send(`Views: ${req.session.view}`);
// });

export default app;
