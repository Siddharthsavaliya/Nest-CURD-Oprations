import { Injectable } from '@nestjs/common';
import { User } from '../users/data/user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  public user: User[] = [];

  constructor(private readonly jwtService: JwtService) {}

  async signup(user: User) {
    try {
      this.user.push(user);

      const payload = { sub: user.id, username: user.email };

      return { token: this.jwtService.sign(payload) };
    } catch (error) {
      throw new Error('Signup failed');
    }
  }
  async login(data: any) {
    try {
      const userData = this.user.find(
        (currentUser) => currentUser.email === data.email,
      );
      if (!userData) {
        throw 'User not exist in database';
      }

      const payload = { sub: userData.id, username: userData.email };

      return { token: this.jwtService.sign(payload) };
    } catch (error) {
      throw new Error(error);
    }
  }
}
