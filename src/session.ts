const session = require("express-session");
const FileStore = require("session-file-store")(session);

import config from "./config";

declare module 'express-session' {
  interface SessionData {
    view: number | undefined;
  }
}

interface CookieOptions {
  secure?: boolean | "auto" | undefined;
}

interface Session {
  secret: string;
  resave: boolean;
  saveUninitialized: boolean;
  cookie: CookieOptions;
  store: any;
}

const sess: Session = {
  secret: config.secretKey,
  resave: false,
  saveUninitialized: true,
  cookie: {},
  store: new FileStore(),
};

if (config.isProdMode) {
  sess.cookie.secure = true;
}

const _session = session(sess);

export default _session;
