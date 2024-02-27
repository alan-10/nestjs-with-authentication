import { Controller, Post, HttpCode, HttpStatus, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  
  @Post('/login')
  async signIn(@Body() loginDTO:LoginDTO ) {
    return await this.authService.sinIn(loginDTO.email, loginDTO.password);
  }

}
