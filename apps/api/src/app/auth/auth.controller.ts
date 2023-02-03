import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { fillObject } from '@guitar-shop/core';
import { UserRdo } from './rdo/user.rdo';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(@Body() dto: RegisterDto) {
    const user = await this.authService.register(dto);
    return fillObject(UserRdo, user);
  }

  @Post('login')
  public async login(@Body() dto: LoginDto) {
    const user = await this.authService.verify(dto);
    const loggedUser = await this.authService.login(user)
    return fillObject(UserRdo, loggedUser);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    const user = await this.authService.get(parseInt(id, 10));
    return fillObject(UserRdo, user);
  }
}
