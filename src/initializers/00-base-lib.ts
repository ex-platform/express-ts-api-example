const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const session = require("express-session");

import { Application, json, urlencoded } from "express";
import config from "../../config";
import sessionOption from "../../config/session";

const baseLib = (app: Application) => {
  // middleware modules provided by Express team
  app.use(json());
  app.use(cors());
  app.use(urlencoded({ extended: false }));
  app.use(session(sessionOption));
  if (config.isProdMode) {
    app.set("trust proxy", 1);
  }

  // additional middleware modules
  app.use(morgan("tiny"));
  app.use(helmet());
};

export default baseLib;
