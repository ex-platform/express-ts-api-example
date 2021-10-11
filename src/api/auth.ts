import { NextFunction, Request, Response, Router } from "express";
import { User } from "../entity/User";

import _passport from "../app/passport";
import { unauthorized } from "../utils/response";
import { CustomRouter } from "../utils/router";

const router = Router();

// Login page
router.get("/login", (req: Request, res: Response, next: NextFunction) => {
  return res.send("Login page");
});

// Login
router.post(
  "/login",
  _passport.authenticate("local"),
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return unauthorized(res);
    }

    const user = req.user as User;
    res.redirect(303, "/users/" + user.id);
  }
);

// Logout
router.get("/logout", (req: Request, res: Response, next: NextFunction) => {
  req.logout();
  res.redirect(303, "/auth/login");
});

// TODO:
// Register
router.post(
  "/register",
  (req: Request, res: Response, next: NextFunction) => {}
);

const authRouter: CustomRouter = {
  router,
  prefix: "/auth"
};

export const loginRequired = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/login");
};

export default authRouter;
