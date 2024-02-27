import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entity/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { HttpException, HttpStatus } from '@nestjs/common'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>) { }

  async create(user: CreateUserDTO): Promise<User> {


    const userAlreadExists = await this.findUserByEmail(user.email);

    if (userAlreadExists) {
      throw new HttpException('Email alread exists', HttpStatus.CONFLICT);
    }

    const salt = await bcrypt.genSalt();

    const hashPassword = await bcrypt.hash(user.password, salt);

    user.password = hashPassword;

    const userCreated = await this.userRepository.save(user);

    delete userCreated.password;

    return userCreated;

  }

  async findUserByEmail(email: string): Promise<User> {

    if (!email) {
      throw new HttpException('invalid email',HttpStatus.NOT_FOUND);
    }

    return await this.userRepository.findOneBy({ email: email });
  }

}
