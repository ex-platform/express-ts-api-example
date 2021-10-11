import { validate } from "class-validator";
import { Request, Response, Router } from "express";

import {
  badRequest,
  created,
  noContent,
  notFound,
  ok,
} from "../utils/response";
import { User } from "../entity/User";
import { loginRequired } from "./auth";
import { CustomRouter } from "../utils/router";

const router = Router();

// CREATE
router.post("/", async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const user = User.create({ name, email });
  const errors = await validate(user);

  if (errors.length > 0) {
    return badRequest(res, errors);
  }

  await user.save();
  return created(res, user);
});

// READ
router.get("/", async (req: Request, res: Response) => {
  const users = await User.find();
  return ok(res, users);
});

// UPDATE
router.put("/:id", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const userToUpdate = await User.findOne(req.params.id);

  if (!userToUpdate) {
    return badRequest(res);
  }

  userToUpdate.name = name || userToUpdate.name;
  userToUpdate.email = email || userToUpdate.email;
  await userToUpdate.save();
  return ok(res, userToUpdate);
});

// DELETE
router.delete("/:id", async (req: Request, res: Response) => {
  const userToDelete = await User.findOne(req.params.id);
  if (!userToDelete) {
    return badRequest(res);
  }

  await userToDelete.remove();
  return noContent(res);
});

// FIND
router.get("/:id", loginRequired, async (req: Request, res: Response) => {
  const userToFind = await User.findOne(req.params.id);
  if (!userToFind) {
    return notFound(res);
  }

  return ok(res, userToFind);
});

const userRouter: CustomRouter = {
  router,
  prefix: "/users",
};

export default userRouter;
