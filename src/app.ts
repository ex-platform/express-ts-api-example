import express = require("express");
import baseLib from "./initializers/00-base-lib";
import generalRouter from "./initializers/01-general-router";
import middlewares from "./initializers/02-middlewares";

const application = express();

baseLib(application)
generalRouter(application)
middlewares(application)

export default application
