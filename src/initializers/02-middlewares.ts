import { Application } from "express";
import { handleErrors, handleNotFound } from "../middlewares/handleErrors";

const middlewares = (app: Application) => {
  app.use(handleNotFound);
  app.use(handleErrors);
};

export default middlewares;
