import { Application } from "express";
import passport = require("passport");

import catchAsync from "../utils/catchAsync";

const generalRouter = (app: Application) => {
  app.get(
    "/",
    catchAsync(async (req, res, next) => {
      res.send("Hello World!");
    })
  );

  app.get(
    "/view-count",
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
    "/catch-error",
    catchAsync(async (req, res, next) => {
      throw new Error("can you catch it?");
    })
  );

  app.get("/auth/kakao", passport.authenticate("kakao"));
  app.get(
    "/auth/kakao/callback",
    passport.authenticate("kakao", {
      failureRedirect: "/",
    }),
    (req, res) => {
      res.redirect("/");
    }
  );
};

export default generalRouter;
