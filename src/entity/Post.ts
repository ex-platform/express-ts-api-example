import {
  Entity,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import Model from "./Model";
import { User } from "./User";

@Entity("posts")
export class Post extends Model {

  @Column()
  title: string;

  @Column()
  body: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(()=> User)
  user: User;
}
