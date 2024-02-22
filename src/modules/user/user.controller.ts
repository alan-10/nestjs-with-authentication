import { Controller, Get } from '@nestjs/common';


@Controller('user')
export class UserController {
  @Get()
  findAll(){
    return `his action returns all users ${process.env.DATABASE_NAME}`;
  }

}
