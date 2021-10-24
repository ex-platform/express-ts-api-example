import {
  profile as KakaoProfile,
  Strategy as KakaoStrategy,
} from "passport-kakao";

import { ProviderType, User } from "../../entity/User";

const kakaoStrategy = new KakaoStrategy(
  {
    clientID: process.env.KAKAO_ID,
    clientSecret: "",
    callbackURL: "/auth/kakao/callback",
  },
  async (accessToken, refreshToken, profile: KakaoProfile, done) => {
    try {
      const user = await User.findOne({
        provider: ProviderType.KAKAO,
        socialId: profile.id,
      });
      if (user) {
        done(null, user);
      } else {
        const newUser = await User.create({
          // TODO: korean
          // name: profile.displayName,
          email: profile._json && profile._json.kakao_account_email,
          provider: ProviderType.KAKAO,
          socialId: profile.id,
        });
        newUser.save();
        done(null, newUser);
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }
);

export default kakaoStrategy;
