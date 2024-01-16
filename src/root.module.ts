import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: '127.0.0.1',
        port: 5432,
        username: configService.get('USERNAME'),
        password: configService.get<string>('PASSWORD'),
        database: configService.get('DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    BookModule,
    VendorModule,
  ],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
