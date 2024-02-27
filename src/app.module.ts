import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AuthModule } from './domain/auth/auth.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.env'],
      isGlobal: true, 
      load:[configuration]
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (configService: ConfigService) => ({
          type:'postgres',
          host:configService.get('POSTGRES_HOST'),
          port:configService.get('POSTGRES_PORT'),
          username:configService.get('POSTGRES_USER'),
          password:configService.get('POSTGRES_PASSWORD'),
          database:configService.get('POSTGRES_DATABASE'),
          // schema:'public',
          // synchronize: true,
          // logging: true,
          entities:[`${__dirname}/**/*.entity{.ts,.js}`],
      }),
      inject: [ConfigService],
  }),
    UserModule,
    AuthModule
  ],
  controllers: [],
})
export class AppModule { 
  constructor(private dataSource: DataSource){}
}


// POSTGRES_HOST=localhost
// POSTGRES_PORT=5432
// POSTGRES_PASSWORD=123
// POSTGRES_NAME=postgres
// POSTGRES_DB
// POSTGRES_USER=postgres