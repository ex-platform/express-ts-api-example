import { Router } from "express";

export interface CustomRouter {
  prefix: string,
  router: Router
}
