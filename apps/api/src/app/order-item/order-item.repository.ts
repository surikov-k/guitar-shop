import { Injectable } from '@nestjs/common';

import { CrudRepository } from '@guitar-shop/core';
import { OrderItem } from '@guitar-shop/shared-types';
import { OrderItemEntity } from './order-item.entity';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';

@Injectable()
export class OrderItemRepository implements CrudRepository<OrderItemEntity, number, OrderItem> {
  constructor(
    private readonly prisma: PrismaService) {}

  public async create(orderItem: OrderItemEntity): Promise<OrderItem> {
    return this.prisma.orderItem.create({
      data: { ...orderItem.toObject() }
    })
  }

  public async createMany(orderItems: CreateOrderItemDto[]): Promise<OrderItem[]> {
    const createdOrderItems: OrderItem[] = [];

    for (const orderItem of orderItems) {
      const shopItem = await this.prisma.shopItem.findFirst({ where: { id: orderItem.shopItemId } })
      const entity = new OrderItemEntity({ ...orderItem, price: shopItem.price });
      const newOrderItem = await this.create(entity);
      createdOrderItems.push(newOrderItem)
    }
    return createdOrderItems;
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.orderItem.delete({ where: { id } })
  }

  public async findById(): Promise<OrderItem | null> {
    return Promise.resolve(undefined);
  }
}
