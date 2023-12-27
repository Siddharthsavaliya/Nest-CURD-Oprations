import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { JwtMiddleware } from 'src/middleware/jwt.middleware';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    JwtModule.register({
      secret: 'demo123',
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes(UserController);
  }
}
