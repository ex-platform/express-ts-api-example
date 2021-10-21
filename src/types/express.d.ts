import pino from "pino";
import { User } from "../entity/User";

declare module "express-serve-static-core" {
  interface Request {
    user: User;
    log: pino
  }
}