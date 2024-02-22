import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      // isGlobal: true
    }),
    // TypeOrmModule.forRoot({
      // type: 'postgres',
      // host: 'localhost',
      // port: Number(process.env.DATABASE_PORT),
      // username: process.env.DATABASE_USER_NAME,
      // password: process.env.DATABASE_PASSWORD,
      // database: process.env.DATABASE_NAME,
      // // entities: [], 
      // synchronize: true,
    // }),
    UserModule
  ],
  controllers: [],
})
export class AppModule { }
