import {
  Controller,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './data/user.dto';
import { UserPipe } from './pipes/user.pipe';
import { UserGuard } from './user.guard';
@Controller(`user`)
@UseGuards(new UserGuard())
export class UserController {
  constructor(private userService: UserService) {}

  @Get(`/getUsers`)
  getUser(): Array<User> {
    return this.userService.getUser();
  }

  @Patch(`/updateUser`)
  updateUser(@Body(new UserPipe()) user: User): string {
    return this.userService.updateUser(user);
  }

  @Delete(`/deleteUserById/:id`)
  deleteUser(@Param() params): string {
    return this.userService.deleteUser(params.id);
  }
}
