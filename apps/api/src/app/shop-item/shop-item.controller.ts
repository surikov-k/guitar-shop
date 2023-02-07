import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { fillObject } from '@guitar-shop/core';
import { ShopItemService } from './shop-item.service';
import { ShopItemListRdo, ShopItemRdo } from './rdo';
import { CreateShopItemDto, UpdateShopItemDto } from './dto';
import { ShopItemQuery } from './query';
import { CommentRdo } from '../item-comment/rdo';
import { CreateCommentDto } from '../item-comment/dto';
import { ShopItemIdValidationPipe } from '../common/pipes';

@ApiTags('shop-item')
@Controller('item')
export class ShopItemController {
  constructor(private readonly shopItemService: ShopItemService) {}

  @Get()
  @ApiResponse({
    type: [ShopItemListRdo],
    status: HttpStatus.OK,
    description: 'The list of shop items is found',
  })
  public async index(@Query() query: ShopItemQuery) {
    const items = await this.shopItemService.getAll(query);
    return items.map((item) => fillObject(ShopItemListRdo, item));
  }

  @Get('/:id')
  @ApiResponse({
    type: ShopItemRdo,
    status: HttpStatus.OK,
    description: 'The shop item is found',
  })
  public async get(@Param('id', ShopItemIdValidationPipe) id: number) {
    const item = await this.shopItemService.get(id);
    return fillObject(ShopItemRdo, item)
  }

  @Post('/:id/comments')
  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.CREATED,
    description: 'Comment is created',
  })
  @HttpCode(HttpStatus.CREATED)
  public async createComment(
    @Param('id', ShopItemIdValidationPipe) shopItemId: number,
    @Body() dto: CreateCommentDto) {
    const userId = 1;
    const comment = this.shopItemService.createComment(userId, shopItemId, dto);

    return fillObject(CommentRdo, comment);
  }

  @Get('/:id/comments')
  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.OK,
    description: 'Comment is found',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Comment is not found',
  })
  public async getComments(@Param('id', ShopItemIdValidationPipe) id: number) {
    const comments = await this.shopItemService.getComments(id);
    return comments.map((comment) => fillObject(CommentRdo, comment));
  }

  @Post()
  @ApiResponse({
    type: ShopItemRdo,
    status: HttpStatus.CREATED,
    description: 'Shop item is created',
  })
  public async create(
    @Body() dto: CreateShopItemDto,
  ) {
    const item = await this.shopItemService.create(dto);
    return fillObject(ShopItemRdo, item);
  }

  @Patch('/:id')
  @ApiResponse({
    type: ShopItemRdo,
    description: 'Shop item is updated',
  })
  public async update(
    @Param('id', ShopItemIdValidationPipe) id: number,
    @Body() dto: UpdateShopItemDto
  ) {
    const item = await this.shopItemService.update(id, dto);
    return fillObject(ShopItemRdo, item);
  }

  @Delete('/:id')
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Shop item is deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id', ShopItemIdValidationPipe) id: number) {
    return this.shopItemService.delete(id);
  }
}
