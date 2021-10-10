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
  Put,
} from "routing-controllers";
import { User } from "../entity/User";

@JsonController()
export class UserController {
  @Get("/users")
  all(request: Request, response: Response, next: NextFunction) {
    return User.find();
  }

  @Get("/users/:id")
  @OnUndefined(404)
  async one(@Param("id") id: number) {
    return User.findOne(id, {relations: ['posts']});
  }

  @Post("/users")
  save(@Body() user: User) {
    return User.save(user);
  }

  @Put("/users/:id")
  async update(@Param("id") id: number, @Body() user: User) {
    const userToUpdate = await User.findOne(id);
    const { name, email } = user;
    if (userToUpdate) {
      userToUpdate.name = name || userToUpdate.name;
      userToUpdate.email = email || userToUpdate.email;
      return userToUpdate.save();
    }
    throw new BadRequestError(`Bad Request.`);
  }

  @Delete("/users/:id")
  @OnUndefined(204)
  async remove(@Param("id") id: number) {
    const userToDelete = await User.findOne(id);
    if (userToDelete) {
      await userToDelete.remove();
      return;
    }
    throw new BadRequestError(`Bad Request.`);
  }
}
