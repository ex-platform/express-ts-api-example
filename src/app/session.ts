const session = require("express-session");
const FileStore = require("session-file-store")(session);

import config from "./config";

declare module "express-session" {
  interface SessionData {
    view: number | undefined;
  }
}

interface CookieOptions {
  secure?: boolean | "auto" | undefined;
  maxAge: number;
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
  store: new FileStore(),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
  },
};

if (config.isProdMode) {
  sess.cookie.secure = true;
}

const _session = session(sess);

export default _session;
