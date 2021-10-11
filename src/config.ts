require('dotenv').config({ path: ".env" })

interface Config {
  isProdMode: boolean,
  secretKey: string,
}

const config: Config = {
  isProdMode: process.env.NODE_ENV != "development" || false,
  secretKey: process.env.SECRET_KEY || "your-secret-whatever"
}

export default config
