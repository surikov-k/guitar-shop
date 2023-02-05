import { Module } from '@nestjs/common';
import { ShopItemService } from './shop-item.service';
import { ShopItemController } from './shop-item.controller';
import { ShopItemRepository } from './shop-item.repository';

@Module({
  controllers: [ShopItemController],
  providers: [ShopItemService, ShopItemRepository],
})
export class ShopItemModule {}
