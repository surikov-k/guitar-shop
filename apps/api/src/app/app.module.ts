import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import * as path from 'path';

import { ShopUserModule } from './shop-user/shop-user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ENV_FILE_PATH } from './app.constants';
import { validateEnvironment } from './env.validation';
import { ShopItemModule } from './shop-item/shop-item.module';
import { ItemCommentModule } from './item-comment/item-comment.module';
import { ShopOrderModule } from './shop-order/shop-order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { jwtOptions } from '../config';
import { ShopFileModule } from './shop-file/shop-file.module';

@Module({
  imports: [
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', '../../uploads'),
      serveRoot: '/uploads/',
    }),
    ConfigModule.forRoot({
      cache: true,
      envFilePath: ENV_FILE_PATH,
      isGlobal: true,
      load: [jwtOptions],
      validate: validateEnvironment,
    }),
    PrismaModule,
    ItemCommentModule,
    ShopItemModule,
    ShopUserModule,
    ShopOrderModule,
    OrderItemModule,
    ShopFileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
