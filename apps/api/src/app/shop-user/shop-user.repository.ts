import { CrudRepository } from '@guitar-shop/core';
import { ShopUserEntity } from './shop-user.entity';
import { User } from '@guitar-shop/shared-types';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopUserRepository implements CrudRepository<ShopUserEntity, number, User> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: ShopUserEntity): Promise<User> {
    return this.prisma.user.create({
      data: { ...item.toObject() }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.user.delete({
      where: { id }
    })
  }

  public async findById(id: number): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: { id }
    })
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: { email }
    })
  }

  public async update(id: number, item: ShopUserEntity): Promise<User> {
    return Promise.resolve(undefined);
  }

}
