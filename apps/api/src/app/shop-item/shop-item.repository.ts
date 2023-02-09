import { Injectable } from '@nestjs/common';

import { CrudRepository } from '@guitar-shop/core';
import { Guitar } from '@guitar-shop/shared-types';
import { ShopItemEntity } from './shop-item.entity';
import { PrismaService } from '../prisma/prisma.service';
import { ShopItemQuery } from './query';

@Injectable()
export class ShopItemRepository
  implements CrudRepository<ShopItemEntity, number, Guitar>
{
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: ShopItemEntity): Promise<Guitar> {
    const entityData = item.toObject();
    return this.prisma.shopItem.create({
      data: {
        ...entityData,
        comments: {
          connect: [],
        },
      },
      include: {
        comments: true,
        photo: true,
      },
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.shopItem.delete({ where: { id } });
  }

  public async findById(id: number): Promise<Guitar | null> {
    return this.prisma.shopItem.findFirst({
      where: { id },
      include: {
        comments: true,
        photo: true,
      },
    });
  }

  public async find(query: ShopItemQuery): Promise<Guitar[]> {
    const { limit, type, strings, sort, direction, page } = query;

    const getSortOption = (type: ShopItemQuery['sort']) => {
      const sortOption = {
        price: { price: direction },
        added: { addedAt: direction },
        rating: { rating: direction },
      };
      return sortOption[type];
    };

    return this.prisma.shopItem.findMany({
      take: limit,
      where: {
        type,
        stringsNumber: strings,
      },
      include: {
        comments: true,
        photo: true,
      },
      orderBy: [getSortOption(sort)],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
  }

  public async update(id: number, item: ShopItemEntity): Promise<Guitar> {
    const entityData = item.toObject();
    const { photo } = entityData;
    return this.prisma.shopItem.update({
      where: { id },
      data: {
        ...entityData,
        comments: {
          connect: [...entityData.comments],
        },
        photo: {
          connect: photo ? { id: photo.id } : entityData.photo,
        },
      },
      include: {
        comments: true,
        photo: true,
      },
    });
  }
}
