import express = require("express");
import baseLib from "./initializers/00-base-lib";

const application = express();

baseLib(application)

export default application
