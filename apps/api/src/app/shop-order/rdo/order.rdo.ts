import { Expose, Type } from 'class-transformer';
import { OrderItemRdo } from '../../order-item/rdo';
import { ApiProperty } from '@nestjs/swagger';

export class OrderRdo {
  @ApiProperty({
    description: 'Order ID',
    example: '1',
  })
  @Expose()
  id: number;

  @ApiProperty({
    description: 'User ID',
    example: '1',
  })
  @Expose()
  userId: number;

  @ApiProperty({
    description: 'Order item',
    example: '',
  })
  @Expose()
  @Type(() => OrderItemRdo)
  orderItems: OrderItemRdo[];

  @ApiProperty({
    description: 'Total order price',
    example: '1000',
  })
  @Expose()
  totalPrice: number;

  @ApiProperty({
    description: 'Total items in the order',
    example: '5',
  })
  @Expose()
  totalQuantity: number;

  @ApiProperty({
    description: 'Order creation date',
    example: '2023-02-05T14:34:17',
  })
  @Expose()
  createdAt: Date;
}
