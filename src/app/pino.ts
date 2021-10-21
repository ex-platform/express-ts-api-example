import { NextFunction, Request, Response } from "express"

import pino from 'pino'

const logger = function (req:Request, res:Response, next:NextFunction) {
  req.log = pino()
  next()
}
export default logger
