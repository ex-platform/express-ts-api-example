import { NextFunction, Request, Response } from "express";
import {
  BadRequestError,
  Body,
  Delete,
  Get,
  JsonController,
  NotFoundError,
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
  async one(@Param("id") id: number) {
    const user = await User.findOne(id);
    if (user) {
      return user;
    }
    throw new NotFoundError(`User not found.`);
  }

  @Post("/users")
  save(@Body() user: User) {
    return User.save(user);
  }

  @Put("/users/:id")
  async update(@Param("id") id: number, @Body() user: User) {
    const userToUpdate = await User.findOne(id);
    if (userToUpdate) {
      userToUpdate.id = id
      return userToUpdate.save()
    }
    throw new BadRequestError(`Bad Request.`)
  }

  @Delete("/users/:id")
  async remove(@Param("id") id: number) {
    const userToUpdate = await User.findOneOrFail(id);
    return userToUpdate.remove();
  }
}
