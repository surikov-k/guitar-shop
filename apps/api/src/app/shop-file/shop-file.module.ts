import { Module } from '@nestjs/common';
import { ShopFileController } from './shop-file.controller';
import { ShopFileService } from './shop-file.service';
import { ShopFileRepository } from './shop-file.repository';
import { ShopItemModule } from '../shop-item/shop-item.module';
import { ShopItemRepository } from '../shop-item/shop-item.repository';

@Module({
  imports: [ShopItemModule],
  controllers: [ShopFileController],
  providers: [ShopFileService, ShopFileRepository, ShopItemRepository],
})
export class ShopFileModule {}
