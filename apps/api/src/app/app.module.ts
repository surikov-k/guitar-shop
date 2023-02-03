import { Module } from '@nestjs/common';
import { ShopUserModule } from './shop-user/shop-user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ShopUserModule, AuthModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
