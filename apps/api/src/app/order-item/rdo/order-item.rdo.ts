import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class OrderItemRdo {
  @ApiProperty({
    description: 'Shop item ID',
    example: '12',
  })
  @Expose()
  shopItemId: number;


  @ApiProperty({
    description: 'Quantity',
    example: '2',
  })
  @Expose()
  quantity: number;

  @ApiProperty({
    description: 'Shop item price',
    example: '200',
  })
  @Expose()
  price: number;


  @ApiProperty({
    description: 'Total price',
    example: '400',
  })
  @Expose()
  sum: number;
}
