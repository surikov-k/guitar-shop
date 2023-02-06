import { Module } from '@nestjs/common';

import { ShopItemService } from './shop-item.service';
import { ShopItemController } from './shop-item.controller';
import { ShopItemRepository } from './shop-item.repository';
import { ItemCommentModule } from '../item-comment/item-comment.module';

@Module({
  imports: [ItemCommentModule],
  controllers: [ShopItemController],
  providers: [ShopItemService, ShopItemRepository],
})
export class ShopItemModule {}
