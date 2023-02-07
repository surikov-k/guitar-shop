import { Module } from '@nestjs/common';
import { OrderItemRepository } from './order-item.repository';

@Module({
  imports: [],
  providers: [OrderItemRepository],
  exports: [OrderItemRepository]
})
export class OrderItemModule {}
