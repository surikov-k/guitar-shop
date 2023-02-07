import { IsISO8601, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { Transform } from 'class-transformer';
import { OrderQueryDefault } from '../shop-order.constants';

export class OrderQuery {
  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  @IsOptional()
  @IsPositive()
  price: number;

  @Transform(({ value }) => new Date(value).toISOString().substring(0, 10))
  @IsISO8601()
  @IsOptional()
  date: string;

  @Transform(({ value }) => parseInt(value, 10) || OrderQueryDefault.ITEMS_PER_PAGE)
  @IsNumber()
  @IsOptional()
  limit: number

  @Transform(({ value }) => parseInt(value, 10))
  @IsNumber()
  @IsOptional()
  page: number
}
