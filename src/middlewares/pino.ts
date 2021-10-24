import type { RequestHandler } from "express"

import pino from 'pino'

const _pino:RequestHandler = (req, res, next) => {
  req.log = pino()
  next()
}
export default _pino
