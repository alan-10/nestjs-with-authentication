import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async sinIn(email: string, password: string) {
    
    const user = await this.userService.findUserByEmail(email);
    
    if (!user) {
      throw new HttpException('Email or Password invald', HttpStatus.UNAUTHORIZED);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new HttpException('Email or Password invald', HttpStatus.UNAUTHORIZED);
    }

    const payload = {sub: user.id, userName: user.name }

    const acessToken = await this.jwtService.signAsync(payload)
    

    delete user.password


    return {
      ...user,
      acessToken,
    } 

  }

}
