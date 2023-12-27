import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
