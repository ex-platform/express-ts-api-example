import { IsEmail, Length } from "class-validator";
import {
  Entity,
  Column,
  OneToMany,
} from "typeorm";
import Model from "./Model";
import { Post } from "./Post";

@Entity("users")
export class User extends Model {

  @Column()
  @Length(1, 25)
  name: string;

  @Column()
  @Length(1, 80)
  @IsEmail()
  email: string;

  @OneToMany(()=> Post, post => post.user)
  posts: Post[]
}
