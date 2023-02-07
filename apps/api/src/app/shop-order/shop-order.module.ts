import { Module } from '@nestjs/common';
import { ShopOrderService } from './shop-order.service';
import { ShopOrderController } from './shop-order.controller';
import { ShopOrderRepository } from './shop-order.repository';
import { OrderItemModule } from '../order-item/order-item.module';
import { DoesShopItemExistConstraint } from '../common/validators';
import { ShopItemRepository } from '../shop-item/shop-item.repository';
import { ShopItemModule } from '../shop-item/shop-item.module';

@Module({
  imports: [ShopItemModule, OrderItemModule],
  providers: [ShopOrderService, ShopOrderRepository, ShopItemRepository, DoesShopItemExistConstraint],
  controllers: [ShopOrderController],
})
export class ShopOrderModule {}
