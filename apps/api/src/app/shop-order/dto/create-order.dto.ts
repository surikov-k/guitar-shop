import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { CreateOrderItemDto } from '../../order-item/dto/create-order-item.dto';
import { OrderError } from '../shop-order.constants';

export class CreateOrderDto {
  @ApiProperty({
    type: [CreateOrderItemDto],
    description: 'List of order items',
    example: '',
  })
  @ValidateNested({
    each: true
  })
  @Type(() => CreateOrderItemDto)
  @ArrayMinSize(1, {
    message: OrderError.EMPTY_LIST
  })
  orderItems: CreateOrderItemDto[];
}
