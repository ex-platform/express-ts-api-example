import { Application } from "express";
import { handleErrors, handleNotFound } from "../middlewares/handleErrors";

const errorMiddleware = (app: Application) => {
  app.use(handleNotFound);
  app.use(handleErrors);
};

export default errorMiddleware;
