import { Module } from '@nestjs/common';
import { ShopUserModule } from './shop-user/shop-user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ShopUserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
