import { Injectable } from '@nestjs/common';

import { ShopOrderRepository } from './shop-order.repository';
import { OrderItemRepository } from '../order-item/order-item.repository';
import { CreateOrderDto } from './dto';
import { ShopOrderEntity } from './shop-order.entity';
import { OrderQuery } from './query';

@Injectable()
export class ShopOrderService {
  constructor(
    private readonly orderRepository: ShopOrderRepository,
    private readonly orderItemRepository: OrderItemRepository
  ) {}

  public async create(userId: number, dto: CreateOrderDto) {
    const orderItems = await this.orderItemRepository
      .createMany(dto.orderItems);

    const orderEntity = new ShopOrderEntity({
      userId,
      orderItems,
      totalPrice: orderItems.reduce((total, item) => total + item.sum, 0),
      totalQuantity: orderItems.reduce((total, item) => total + item.quantity, 0),
    })

    return this.orderRepository.create(orderEntity);
  }

  public async getAll(query: OrderQuery) {
    return this.orderRepository.find(query)
  }

  public async get(id: number) {
    return this.orderRepository.findById(id);
  }

  public async delete(id: number) {
    await this.orderRepository.destroy(id)
  }
}
