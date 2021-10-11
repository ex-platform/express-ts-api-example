import passport = require("passport");
import { IStrategyOptions, Strategy, VerifyFunction } from "passport-local";

import { User } from "../entity/User";

const customFields: IStrategyOptions = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback: VerifyFunction = async (email, password, done) => {
  const user = await User.findOne({ email });
  console.log('verifyCallback - user', user)
  if (!user) {
    return done(null, false);
  }

  // TODO: verify username and password
  const isValid = true;

  if (!isValid) {
    return done(null, false);
  }
  console.log('success')
  return done(null, user);
};

const strategy = new Strategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user: any, done) => {
  console.log('Serialize', user)
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  console.log('deserializeUser', userId)
  const user = await User.findOne(userId);
  if (!user) {
    return done("Not exist");
  }
  return done(null, user);
});

export default passport
