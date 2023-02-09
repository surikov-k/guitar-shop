import { Injectable } from '@nestjs/common';

import { CrudRepository } from '@guitar-shop/core';
import { ShopFileEntity } from './shop-file.entity';
import { File } from '@guitar-shop/shared-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ShopFileRepository
  implements CrudRepository<ShopFileEntity, number, File>
{
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: ShopFileEntity): Promise<File> {
    return this.prisma.file.create({
      data: { ...item.toObject() },
    });
  }

  destroy(): Promise<void> {
    return Promise.resolve(undefined);
  }

  public async findById(id: number): Promise<File | null> {
    return this.prisma.file.findFirst({
      where: { id },
    });
  }
}
