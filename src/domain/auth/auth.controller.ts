import {
  Controller,
  Post,
  HttpStatus,
  Body,
  Get,
  Request
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { Public } from './public.route.decoretor';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Public()
  @Post('/login')
  async signIn(@Body() loginDTO: LoginDTO) {
    return await this.authService.sinIn(loginDTO.email, loginDTO.password);
  }


  @Get('profile')
  getProfile(@Request() request) {
    return request.user;
  }

}
