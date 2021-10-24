const jwt = require("jsonwebtoken");

import { IsEmail, Length } from "class-validator";
import { Entity, Column, OneToMany } from "typeorm";
import config from "../../config";

import Model from "./Model";
import { Post } from "./Post";

export const ProviderType = {
  EMAIL: 1,
  NAVER: 2,
  KAKAO: 4,
  ANOMY: 8,
};

@Entity("users")
export class User extends Model {
  @Column()
  @Length(1, 25)
  name: string;

  @Column()
  @Length(1, 80)
  @IsEmail()
  email: string;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @Column({ type: "nvarchar" })
  password: string;

  @Column({ default: 0 })
  provider: number;

  @Column()
  socialId: string;

  generateJWT() {
    return jwt.sign(
      {
        id: this.id,
      },
      config.secretKey,
      { expiresIn: "60 days" }
    );
  }

  // getAuthJSON() {
  //   return {
  //     name: this.name,
  //     email: this.email,
  //     token: this.generateJWT()
  //   }
  // }

  // getProfileJSON() {
  //   return {
  //     name: this.name,
  //     email: this.email,
  //   }
  // }
}
