import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service'
import { CreateUserDTO } from './dto/create-user.dto'


@Controller('user')
export class UserController {

  constructor(private userService: UserService) { }

  @Post()
  async create(@Body() createUser: CreateUserDTO) {
    return await this.userService.create(createUser)
  }



}
