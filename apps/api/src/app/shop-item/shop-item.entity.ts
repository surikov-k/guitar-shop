import { Entity } from '@guitar-shop/core';
import { Comment, Guitar, GuitarType, StringNumber } from '@guitar-shop/shared-types';
import { Prisma } from '@prisma/client';

export class ShopItemEntity implements Entity<ShopItemEntity>, Guitar {
  public addedAt: Date;
  public code: string;
  public comments: Comment[];
  public description: string;
  public id: number;
  public name: string;
  public photo: string;
  public price: Prisma.Decimal;
  public stringsNumber: StringNumber;
  public type: GuitarType;

  constructor(shopItem: Guitar) {
    this.fillEntity(shopItem);
  }

  fillEntity(entity: Guitar) {
    this.addedAt = entity.addedAt ? entity.addedAt : new Date();
    this.code = entity.code;
    this.comments = [];
    this.description = entity.description;
    this.name = entity.name;
    this.photo = entity.photo;
    this.price = new Prisma.Decimal(entity.price);
    this.stringsNumber = entity.stringsNumber;
    this.type = entity.type;
  }

  toObject(): ShopItemEntity {
    return {
      ...this,
      comments: this.comments.map(({ id }) => ({ id }))
    };
  }
}
