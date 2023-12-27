import { Controller, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './data/user.dto';

@Controller(`user`)
export class UserController {
  constructor(private userService: UserService) {}

  @Get(`/getUsers`)
  getUser(): Array<User> {
    return this.userService.getUser();
  }

  @Patch(`/updateUser`)
  updateUser(@Body() user: User): string {
    return this.userService.updateUser(user);
  }

  @Delete(`/deleteUserById/:id`)
  deleteUser(@Param() params): string {
    return this.userService.deleteUser(params.id);
  }
}
