import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { fillObject } from '@guitar-shop/core';
import { ShopItemService } from './shop-item.service';
import { ShopItemRdo, ShopItemListRdo} from './rdo';
import { CreateShopItemDto, UpdateShopItemDto } from './dto';
import { ShopItemQuery } from './query';
import { CommentRdo } from '../item-comment/rdo';
import { CreateCommentDto } from '../item-comment/dto';

@ApiTags('shop-item')
@Controller('item')
export class ShopItemController {
  constructor(private readonly shopItemService: ShopItemService) {}

  @Get()
  public async index(@Query() query: ShopItemQuery) {
    const items = await this.shopItemService.getAll(query);
    return items.map((item) => fillObject(ShopItemListRdo, item));
  }

  @Get('/:id')
  public async get(@Param('id') id: number){
    const item = await this.shopItemService.get(id);
    return fillObject(ShopItemRdo, item)
  }


  @Post('/:id/comments')
  public async createComment(
    @Param('id') shopItemId: number,
    @Body() dto: CreateCommentDto) {
    const userId = 1;
    const comment = this.shopItemService.createComment(userId, shopItemId, dto);

    return fillObject(CommentRdo, comment);
  }

  @Get('/:id/comments')
  public async getComments(@Param('id') id: number) {
    const comments = await this.shopItemService.getComments(id);
    return comments.map((comment) => fillObject(CommentRdo, comment));
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

  @Delete('/:id')
  public async delete(@Param('id') id: number) {
    return this.shopItemService.delete(id);
  }
}
