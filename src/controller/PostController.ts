import { NextFunction, Request, Response } from "express";
import {
  BadRequestError,
  Body,
  Delete,
  Get,
  JsonController,
  OnUndefined,
  Param,
  Post,
} from "routing-controllers";
import { Post as Posts } from "../entity/Post";
import { User } from "../entity/User";

@JsonController()
export class UserController {
  @Get("/posts")
  all(request: Request, response: Response, next: NextFunction) {
    return Posts.find({ relations: ['user'] });
  }

  @Get("/posts/:id")
  @OnUndefined(404)
  async one(@Param("id") id: number) {
    return Posts.findOne(id);
  }

  @Post("/posts")
  async save(@Body() post: Posts) {
    const {user, title, body} = post
    const author = await User.findOneOrFail(user.id)
    const postToCreate = new Posts({title, body, user: author})
    return postToCreate.save();
  }

  @Delete("/posts/:id")
  @OnUndefined(204)
  async remove(@Param("id") id: number) {
    const postToDelete = await Posts.findOne(id);
    if (postToDelete) {
      await postToDelete.remove();
      return;
    }
    throw new BadRequestError(`Bad Request.`);
  }
}
