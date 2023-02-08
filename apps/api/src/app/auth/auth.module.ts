import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ShopUserModule } from '../shop-user/shop-user.module';
import { getJwtConfig } from '../../config';
import { AccessTokenStrategy } from '../../common/strategies';
import { IsEmailUniqueConstraint } from '../../common/validators';

@Module({
  imports: [
    ShopUserModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, IsEmailUniqueConstraint, AccessTokenStrategy],
})
export class AuthModule {}
