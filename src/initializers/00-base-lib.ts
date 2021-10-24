const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

import { Application, json, urlencoded } from "express";

const baseLib = (app: Application) => {
  // middleware modules provided by Express team
  app.use(json());
  app.use(cors());
  app.use(urlencoded({ extended: false }));

  // additional middleware modules
  app.use(morgan("tiny"));
  app.use(helmet());
};

export default baseLib;
