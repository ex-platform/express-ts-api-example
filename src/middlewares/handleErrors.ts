import type { ErrorRequestHandler, RequestHandler, Response } from "express";

import config from "../../config";

class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

const handleNotFound: RequestHandler = (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
};

const handleErrors: ErrorRequestHandler = (err: AppError, req, res, next) => {
  // Send Error - Prod
  if (config.isProdMode) {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
    // Programming or other unknown error
    req.log.warn(`ERROR 💥: ${err}`);
    return res
      .status(500)
      .json({ status: "error", message: "Something went very wrong!" });
  }
  // Send Error - Dev
  req.log.warn(err.stack);
  return res.status(err.statusCode).json({ err });
};

export { handleErrors, handleNotFound, AppError };
