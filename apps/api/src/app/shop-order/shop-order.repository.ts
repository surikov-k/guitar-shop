import { Injectable } from '@nestjs/common';

import { CrudRepository } from '@guitar-shop/core';
import { Order } from '@guitar-shop/shared-types';

import { ShopOrderEntity } from './shop-order.entity';
import { PrismaService } from '../prisma/prisma.service';
import { OrderQuery } from './query';

@Injectable()
export class ShopOrderRepository implements CrudRepository<ShopOrderEntity, number, Order> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: ShopOrderEntity): Promise<Order> {
    const entityData = item.toObject();
    return this.prisma.order.create({
      data: {
        ...entityData,
        orderItems: {
          connect: [...entityData.orderItems]
        }
      },
      include: {
        orderItems: true,
      }
    });
  }

  public async find(query: OrderQuery) {
    const { price, date, limit, page } = query;

    const dateFilter = !date ? undefined : {
      lte: `${date}T23:59:59.999Z`,
      gte: `${date}T00:00:00.000Z`,
    }

    return this.prisma.order.findMany({
      take: limit,
      where: {
        totalPrice: price,
        createdAt: dateFilter
      },
      include: {
        orderItems: true,
      },
      orderBy: { createdAt: 'desc' },
      skip: page > 0 ? limit * (page - 1) : undefined
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.order.delete({ where: { id } })
  }

  public async findById(id: number): Promise<Order | null> {
    return this.prisma.order.findFirst({
      where: { id },
      include: { orderItems: true }
    })
  }
}
