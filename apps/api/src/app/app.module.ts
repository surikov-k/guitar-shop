import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ShopUserModule } from './shop-user/shop-user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ENV_FILE_PATH } from './app.constants';
import { validateEnvironment } from './env.validation';
import { ShopItemModule } from './shop-item/shop-item.module';
import { ItemCommentModule } from './item-comment/item-comment.module';
import { ShopOrderModule } from './shop-order/shop-order.module';
import { OrderItemModule } from './order-item/order-item.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      cache: true,
      envFilePath: ENV_FILE_PATH,
      isGlobal: true,
      validate: validateEnvironment,
    }),
    PrismaModule,
    ItemCommentModule,
    ShopItemModule,
    ShopUserModule,
    ShopOrderModule,
    OrderItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
