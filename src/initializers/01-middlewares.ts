import { Application } from "express";
import passport = require("passport");

import passportConfig from '../middlewares/passport'
import _pino from "../middlewares/pino";

const customMiddleware = (app: Application) => {
  passportConfig()
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(_pino)
};

export default customMiddleware;
