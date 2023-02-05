import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { fillObject } from '@guitar-shop/core';
import { ShopItemService } from './shop-item.service';
import { ShopItemRdo } from './rdo';
import { CreateShopItemDto, UpdateShopItemDto } from './dto';
import { ShopItemQuery } from './query';

@ApiTags('shop-item')
@Controller('item')
export class ShopItemController {
  constructor(private readonly shopItemService: ShopItemService) {}

  @Get()
  public async index(@Query() query: ShopItemQuery) {
    const items = await this.shopItemService.getAll(query);
    return items.map((item) => fillObject(ShopItemRdo, item));
  }

  @Get('/:id')
  public async get(@Param('id') id: number){
    const item = await this.shopItemService.get(id);
    return fillObject(ShopItemRdo, item)
  }

  @Post()
  public async create(
    @Body() dto: CreateShopItemDto,
  ) {
    const item = await this.shopItemService.create(dto);
    return fillObject(ShopItemRdo, item);
  }

  @Patch('/:id')
  public async update(
    @Param('id') id: number,
    @Body() dto: UpdateShopItemDto
  ){
    const item = await this.shopItemService.update(id, dto);
    return fillObject(ShopItemRdo, item);
  }
}
