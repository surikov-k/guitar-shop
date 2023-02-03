import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ShopUserModule } from '../shop-user/shop-user.module';

@Module({
  imports:[ShopUserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

