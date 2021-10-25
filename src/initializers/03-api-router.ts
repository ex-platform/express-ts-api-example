import { Application } from "express";
import authRouter from "../api/auth";
import userRouter from "../api/users";

const routers = [authRouter, userRouter]

const apiRouter = (app: Application) => {
  for (const router of routers) {
    app.use(router.prefix, router.router)
  }
};

export default apiRouter;
