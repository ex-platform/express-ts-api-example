import passport = require("passport");

import catchAsync from "./catchAsync";
import { User } from "../entity/User";
import { AppError } from "../middlewares/handleErrors";

const jwtCallback =
  (req, res, next) =>
  async (error, { userId }, info) => {
    if (error) {
      return next(error);
    }

    if (info instanceof Error || info.name === "JsonWebTokenError") {
      return next(new AppError("Unauthorized", 401));
    }

    const user = await User.findOne(userId);
    if (!user) {
      return next(new AppError("Unauthorized", 401));
    }

    req.user = user;
    next();
  };

const required = catchAsync(async (req, res, next) => {
  // prettier-ignore
  passport.authenticate(
    'jwt',
    {session: false},
    jwtCallback(req, res, next),
  )(req, res, next);
});

const optional = catchAsync(async (req, res, next) => {
  passport.authenticate(
    ["jwt", "anonymous"],
    { session: false },
    jwtCallback(req, res, next)
  )(req, res, next);
});

const jwtAuth = {required, optional}

export default jwtAuth
