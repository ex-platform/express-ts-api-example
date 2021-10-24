import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import config from "../../../config";

const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: config.secretKey,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Token"),
  },
  ({ id }, done) => {
    done(null, { userId: id });
  }
);

export default jwtStrategy;
