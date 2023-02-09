import { Entity } from '@guitar-shop/core';
import { File } from '@guitar-shop/shared-types';

export class ShopFileEntity implements Entity<ShopFileEntity>, File {
  filename: string;
  id: number;
  shopItemId: number;
  userId: number;

  constructor(file: File) {
    this.fillEntity(file);
  }

  fillEntity(file: File) {
    this.filename = file.filename;
    this.id = file.id;
    this.shopItemId = file.shopItemId;
    this.userId = file.userId;
  }

  toObject(): ShopFileEntity {
    return { ...this };
  }
}
