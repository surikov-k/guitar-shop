import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ShopUserModule } from '../shop-user/shop-user.module';
import { IsEmailUniqueConstraint } from '../common/validators';

@Module({
  imports: [ShopUserModule],
  controllers: [AuthController],
  providers: [AuthService, IsEmailUniqueConstraint],
})
export class AuthModule {}

