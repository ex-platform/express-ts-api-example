import passport = require("passport");


import jwtStrategy from "./jwt";
import localStrategy from "./local";
import kakaoStrategy from "./kakao";
import anonymousStrategy from "./anomy";
import { User } from "../../entity/User";
// import naverStrategy from "./naverStrategy";

const passportConfig = () => {
  passport.serializeUser((user, done) => {
    done(null, (user as User).id);
  });

  passport.deserializeUser(async (userId: number, done) => {
    const user = await User.findOne(userId);
    if (!user) {
      return done("Not exist");
    }
    return done(null, user);
  });

  passport.use("local", localStrategy);
  passport.use("kakao", kakaoStrategy);
  passport.use("jwt", jwtStrategy)
  passport.use("anonymous", anonymousStrategy)
};

export default passportConfig;
