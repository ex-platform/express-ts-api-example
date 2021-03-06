import express = require("express");
import baseLib from "./initializers/00-base-lib";
import customMiddleware from "./initializers/01-middlewares";
import generalRouter from "./initializers/02-general-router";
import apiRouter from './initializers/03-api-router'
import errorMiddleware from "./initializers/04-handle-errors";

const application = express();

baseLib(application)
customMiddleware(application)
generalRouter(application)
apiRouter(application)
errorMiddleware(application)

export default application
