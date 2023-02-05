import { Expose, Type } from 'class-transformer';

import { Prisma } from '@prisma/client';
import { Comment, GuitarType, StringNumber } from '@guitar-shop/shared-types';

export class ShopItemRdo {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public addedAt: string;

  @Expose()
  public photo: string;

  @Expose()
  public type: GuitarType;

  @Expose()
  public code: string;

  @Expose()
  public stringsNumber: StringNumber;

  @Expose()
  @Type(() => Number)
  public price: Prisma.Decimal;

  @Expose()
  public comments: Comment[];
}
