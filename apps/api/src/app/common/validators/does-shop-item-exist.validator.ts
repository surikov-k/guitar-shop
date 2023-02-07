import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator';
import { Injectable } from '@nestjs/common';

import { ShopItemRepository } from '../../shop-item/shop-item.repository';

@ValidatorConstraint({ async: true })
@Injectable()
export class DoesShopItemExistConstraint implements ValidatorConstraintInterface {
  constructor(private readonly shopItemRepository: ShopItemRepository) {}

  async validate(shopItemId: number): Promise<boolean> {
    const shopItem = await this.shopItemRepository.findById(shopItemId);
    return !!shopItem;
  }
}

export function DoesShopItemExist(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: DoesShopItemExistConstraint,
    });
  }
}
