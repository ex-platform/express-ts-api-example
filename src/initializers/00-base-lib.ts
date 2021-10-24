const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

import { Application, json, urlencoded } from "express";
import { handleErrors } from "../middlewares/handleErrors";
import catchAsync from "../utils/catchAsync";

const baseLib = (app: Application) => {
  // middleware modules provided by Express team
  app.use(json());
  app.use(cors());
  app.use(urlencoded({ extended: false }));

  // additional middleware modules
  app.use(morgan("tiny"));
  app.use(helmet());

  app.get('/', catchAsync(async (req, res, next) => {
    throw new Error('can you catch it?')
  }))

  app.use(handleErrors)
};

export default baseLib;
