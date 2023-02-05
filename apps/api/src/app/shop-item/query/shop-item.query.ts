import { Transform } from 'class-transformer';
import { IsIn, IsNumber, IsOptional } from 'class-validator';

import { GuitarType, StringNumber } from '@guitar-shop/shared-types';
import { ShopItemError, ShopItemQueryDefault } from '../shop-item.constants';
import { normalizeGuitarType } from '@guitar-shop/core';

export class ShopItemQuery {
  @Transform(({ value }) => parseInt(value, 10) || ShopItemQueryDefault.ITEMS_PER_PAGE as number)
  @IsNumber()
  @IsOptional()
  public limit = ShopItemQueryDefault.ITEMS_PER_PAGE as number;


  @Transform(({ value }) => parseInt(value, 10) || 1)
  @IsNumber()
  @IsOptional()
  public page: number;


  @Transform(({ value }) => normalizeGuitarType(value))
  @IsOptional()
  @IsIn(['Electric', 'Acoustic', 'Ukulele'], {
    message: ShopItemError.WRONG_TYPE
  })
  public type: GuitarType;


  @Transform(({ value }) => parseInt(value, 10))
  @IsOptional()
  @IsIn([4, 6, 7, 12], {
    message: ShopItemError.INCORRECT_STINGS_NUMBER
  })
  public strings: StringNumber;


  @IsOptional()
  @IsIn(['price', 'rating', 'added'])
  public sort: 'price' | 'rating' | 'added' = ShopItemQueryDefault.SORTED_BY_ADDED_AT


  @IsOptional()
  @IsIn(['asc', 'desc'])
  public direction: 'desc' | 'asc' = ShopItemQueryDefault.SORT_DIRECTION_DESC;
}
