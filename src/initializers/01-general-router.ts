import { Application } from "express";

import catchAsync from "../utils/catchAsync";

const generalRouter = (app: Application) => {
  app.get(
    "/",
    catchAsync(async (req, res, next) => {
      console.log('hello')
      res.send("Hello World!");
    })
  );

  app.get(
    "/viewCount",
    catchAsync(async (req, res, next) => {
      if (req.session.viewCount) {
        req.session.viewCount += 1;
      } else {
        req.session.viewCount = 1;
      }
      res.send(`Views: ${req.session.viewCount}`);
    })
  );

  app.get(
    "/catchAsync",
    catchAsync(async (req, res, next) => {
      throw new Error("can you catch it?");
    })
  );
};

export default generalRouter;
