import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/data/user.dto';
import { UserPipe } from '../users/pipes/user.pipe';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @HttpCode(201)
  async signup(@Body(new UserPipe()) user: User) {
    try {
      const result = await this.authService.signup(user);
      return { message: 'Signup successfully done', data: result };
    } catch (error) {
      return { message: 'error', error: error.message };
    }
  }
  @Post('/login')
  @HttpCode(201)
  async login(@Body() data: any) {
    try {
      const result = await this.authService.login(data);
      return { message: 'Login successfully done', data: result };
    } catch (error) {
      return { message: 'error', error: error.message };
    }
  }
}
