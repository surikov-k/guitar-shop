import { IsNumber, Min } from 'class-validator';
import { DoesShopItemExist } from '../../common/validators';
import { OrderItemError } from '../order-item.constants';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemDto {
  @ApiProperty({
    description: 'Shop item ID',
    example: '12',
  })
  @DoesShopItemExist({
    message: OrderItemError.WRONG_SHOP_ITEM
  })
  @IsNumber()
  shopItemId: number


  @ApiProperty({
    description: 'Quantity',
    example: '2',
  })
  @IsNumber()
  @Min(1, {
    message: OrderItemError.INCORRECT_QUANTITY
  })
  quantity: number
}
