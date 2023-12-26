import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
@Module({
  imports: [UsersModule],
  controllers: [UserController],
  providers: [UserService],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
