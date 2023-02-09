import { Entity } from '@guitar-shop/core';
import {
  Comment,
  Guitar,
  GuitarType,
  StringNumber,
  File,
} from '@guitar-shop/shared-types';

export class ShopItemEntity implements Entity<ShopItemEntity>, Guitar {
  public addedAt: Date;
  public code: string;
  public comments: Comment[];
  public description: string;
  public id: number;
  public name: string;
  public photo: File;
  public price: number;
  public rating: number;
  public stringsNumber: StringNumber;
  public type: GuitarType;

  constructor(shopItem: Guitar) {
    this.fillEntity(shopItem);
  }

  fillEntity(shopItem: Guitar) {
    this.addedAt = shopItem.addedAt ? shopItem.addedAt : new Date();
    this.code = shopItem.code;
    this.comments = shopItem.comments ? shopItem.comments : [];
    this.photo = shopItem.photo;
    this.description = shopItem.description;
    this.name = shopItem.name;
    this.price = shopItem.price;
    this.rating = shopItem.rating;
    this.stringsNumber = shopItem.stringsNumber;
    this.type = shopItem.type;
  }

  toObject(): ShopItemEntity {
    return {
      ...this,
      comments: this.comments.map(({ id }) => ({ id })),
      photo: this.photo === null ? undefined : this.photo,
    };
  }
}
