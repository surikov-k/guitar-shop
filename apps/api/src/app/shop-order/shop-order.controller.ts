import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { fillObject } from '@guitar-shop/core';
import { ShopOrderService } from './shop-order.service';
import { CreateOrderDto } from './dto';
import { OrderRdo } from './rdo/order.rdo';
import { OrderQuery } from './query';

@ApiTags('order')
@Controller('order')
export class ShopOrderController {
  constructor(private readonly orderService: ShopOrderService) {}

  @Post()
  @ApiResponse({
    type: OrderRdo,
    status: HttpStatus.CREATED,
    description: 'The order was created',
  })
  public async create(@Body() dto: CreateOrderDto) {
    const userId = 1;
    const order = await this.orderService.create(userId, dto);
    return fillObject(OrderRdo, order);
  }


  @Get()
  @ApiResponse({
    type: [OrderRdo],
    status: HttpStatus.OK,
    description: 'The orders list was found',
  })
  public async index(@Query() query: OrderQuery) {
    const orders = await this.orderService.getAll(query);
    return orders.map((order) => fillObject(OrderRdo, order));
  }


  @Get('/:id')
  @ApiResponse({
    type: OrderRdo,
    status: HttpStatus.OK,
    description: 'The order was found',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'The order wasn\'t found',
  })
  public async get(@Param('id') id: number) {
    const order = await this.orderService.get(id);
    return fillObject(OrderRdo, order);
  }


  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The order was deleted',
  })
  public async delete(@Param('id') id: number) {
    await this.orderService.delete(id);
  }
}
