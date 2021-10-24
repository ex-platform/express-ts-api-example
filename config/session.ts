import config from ".";

const sessionOption = {
  httpOnly: true,
  resave: false,
  saveUninitialized: false,
  secure: false,
  secret: config.cookieSecret,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    secure: false
  }
  // TODO: redisStore
}

if (config.isProdMode) {
  sessionOption.cookie.secure = true;
  sessionOption.secure = true
}

export default sessionOption
