import bcrypt = require("bcrypt");

import { Strategy } from "passport-local";
import { User } from "../../entity/User";

const localStrategy = new Strategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    // Is there a User?
    const user = await User.findOne({ email });
    if (!user) {
      return done(null, false);
    }
    // Is the password right?
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return done(null, false);
    }

    return done(null, user);
  }
);

export default localStrategy
