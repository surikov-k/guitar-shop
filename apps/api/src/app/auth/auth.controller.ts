import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards, } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { LoggedRdo, UserRdo } from './rdo';
import { fillObject } from '@guitar-shop/core';
import { JwtAuthGuard } from '../../common/guards';
import { GetUserPayload } from '../../common/decorators';
import { UserPayload } from '@guitar-shop/shared-types';
import { UserPayloadRdo } from './rdo/user-payload.rdo';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'A new user has been successfully created.',
  })
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() dto: RegisterDto) {
    const user = await this.authService.register(dto);
    return fillObject(UserRdo, user);
  }

  @Post('login')
  @ApiResponse({
    status: HttpStatus.OK,
    type: LoggedRdo,
    description: 'The user has been successfully logged in',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Password or Login is wrong.',
  })
  public async login(@Body() dto: LoginDto) {
    const user = await this.authService.verify(dto);
    const { accessToken } = await this.authService.login(user);
    return fillObject(LoggedRdo, { ...user, accessToken });
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    type: UserPayloadRdo,
    status: HttpStatus.OK,
    description: 'Check user status',
  })
  async checkAuth(@GetUserPayload() payload: UserPayload) {
    return fillObject(UserPayloadRdo, payload);
  }
}
