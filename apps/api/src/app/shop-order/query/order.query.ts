import { IsISO8601, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { Transform } from 'class-transformer';

import { OrderQueryDefault } from '../shop-order.constants';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class OrderQuery {

  @ApiPropertyOptional({
    description: 'Filter list by the order price'
  })
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  @IsOptional()
  @IsPositive()
  price: number;


  @ApiPropertyOptional({
    description: 'Filter list by the order creation date'
  })
  @Transform(({ value }) => new Date(value).toISOString().substring(0, 10))
  @IsISO8601()
  @IsOptional()
  date: string;


  @ApiPropertyOptional({
    description: 'A limit of the orders per page ',
    default: OrderQueryDefault.ITEMS_PER_PAGE
  })
  @Transform(({ value }) => parseInt(value, 10) || OrderQueryDefault.ITEMS_PER_PAGE as number)
  @IsNumber()
  @IsOptional()
  limit: number = OrderQueryDefault.ITEMS_PER_PAGE as number


  @ApiPropertyOptional({
    description: 'A page of the orders list ',
    default: 1
  })
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  @IsOptional()
  page: number
}
