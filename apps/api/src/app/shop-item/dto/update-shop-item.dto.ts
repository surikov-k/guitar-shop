import { PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateShopItemDto } from './create-shop-item.dto';

export class UpdateShopItemDto extends PartialType(CreateShopItemDto) {
  @IsOptional()
  rating: number
}
