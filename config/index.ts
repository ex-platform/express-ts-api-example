import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

require('dotenv').config({ path: ".env" })

import db from './typeorm'

interface Config {
  port: number,
  isProdMode: boolean,
  secretKey: string,
  cookieSecret: string,
  db: MysqlConnectionOptions
}

const config: Config = {
  db,
  port: parseInt(process.env.PORT) || 3000,
  isProdMode: process.env.NODE_ENV === "production" || false,
  secretKey: process.env.SECRET_KEY || "your-secret-whatever",
  cookieSecret: process.env.COOKIE_SECRET || "your-cookie-secret"
}

export default config
