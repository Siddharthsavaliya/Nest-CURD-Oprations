import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserGuard implements CanActivate {
  public userName = 'Demo';
  public password = 'Demo123';
  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    if (
      request.header('userName') === undefined &&
      request.header('password') === undefined
    ) {
      return false;
    }

    return (
      request.header('userName') === this.userName &&
      request.header('password') === this.password
    );
  }
}
