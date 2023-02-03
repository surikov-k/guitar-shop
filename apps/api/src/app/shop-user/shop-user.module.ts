import { Module } from '@nestjs/common';
import { ShopUserRepository } from './shop-user.repository';

@Module({
  providers: [ShopUserRepository],
  exports: [ShopUserRepository],
})
export class ShopUserModule {}
