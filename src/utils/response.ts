import { NextFunction, Request, Response } from "express";

export function ok<T>(res: Response, data: T) {
  return res.status(200).json(data);
}

export function created<T>(res: Response, data: T) {
  return res.status(201).json(data);
}

export function noContent(res: Response) {
  return res.status(204).json({ message: "No Content" });
}

export function badRequest(res: Response, err?: any) {
  err ??= "Bad Request";
  return res.status(400).json({ error: err });
}

export function unauthorized(res: Response) {
  return res.status(401).json({ error: "Unauthorized" });
}

export function notFound(res: Response) {
  return res.status(404).json({ error: "Not Found" });
}
