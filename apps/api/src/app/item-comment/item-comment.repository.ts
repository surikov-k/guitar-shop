import { Injectable } from '@nestjs/common';

import { CrudRepository } from '@guitar-shop/core';
import { Comment } from '@guitar-shop/shared-types';
import { ItemCommentEntity } from './item-comment.entity';
import { PrismaService } from '../prisma/prisma.service';
import { COMMENTS_LIMIT } from './item-content.constants';

@Injectable()
export class ItemCommentRepository implements CrudRepository<ItemCommentEntity, number, Comment> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: ItemCommentEntity): Promise<Comment> {
    return this.prisma.comment.create({
      data: { ...item.toObject() }
    })

  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.comment.delete({
      where: { id }
    })
  }

  public async destroyMany(ids: number[]) {
    await this.prisma.comment.deleteMany({
      where: { id: { in: ids } }
    })
  }

  public async findById(id: number): Promise<Comment | null> {
    return this.prisma.comment.findFirst({
      where: { id }
    })
  }

  public async findByItemId(shopItemId: number) {
    return this.prisma.comment.findMany({
      take: COMMENTS_LIMIT,
      where: { shopItemId },
      orderBy: [
        {createdAt: 'desc'}
      ]
    })
  }
}
