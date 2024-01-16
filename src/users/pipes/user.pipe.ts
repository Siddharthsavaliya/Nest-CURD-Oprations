import { BadRequestException, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { User } from '../data/user.dto';
import { validate } from 'class-validator';
export class UserPipe implements PipeTransform {
  async transform(value: any): Promise<any> {
    //class transformer obj convert class
    const bookClass = plainToInstance(User, value);
    // class validation
    const errors = await validate(bookClass);
    if (errors.length > 0) {
      throw new BadRequestException(
        'Validation failed: ' + JSON.stringify(errors),
      );
    }
    console.log(value, typeof value);
    return value;
  }
}
