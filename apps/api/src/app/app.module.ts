import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ShopUserModule } from './shop-user/shop-user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ENV_FILE_PATH } from './app.constants';
import { validateEnvironment } from './env.validation';

@Module({
  imports: [
    ShopUserModule,
    AuthModule,
    PrismaModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      validate: validateEnvironment,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
