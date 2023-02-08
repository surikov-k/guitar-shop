import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { fillObject } from '@guitar-shop/core';
import { ShopOrderService } from './shop-order.service';
import { CreateOrderDto } from './dto';
import { OrderRdo } from './rdo/order.rdo';
import { OrderQuery } from './query';
import { AdminGuard, JwtAuthGuard } from '../../common/guards';
import { OrderIdValidationPipe } from '../../common/pipes/order-id-validation.pipe';
import { GetCurrentUserId } from '../../common/decorators';

@ApiTags('order')
@Controller('order')
export class ShopOrderController {
  constructor(private readonly orderService: ShopOrderService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    type: OrderRdo,
    status: HttpStatus.CREATED,
    description: 'The order was created',
  })
  public async create(
    @Body() dto: CreateOrderDto,
    @GetCurrentUserId() userId: number
  ) {
    const order = await this.orderService.create(userId, dto);
    return fillObject(OrderRdo, order);
  }

  @Get()
  @UseGuards(AdminGuard)
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
  @UseGuards(AdminGuard)
  @ApiResponse({
    type: OrderRdo,
    status: HttpStatus.OK,
    description: 'The order was found',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "The order wasn't found",
  })
  public async get(@Param('id', OrderIdValidationPipe) id: number) {
    const order = await this.orderService.get(id);
    return fillObject(OrderRdo, order);
  }

  @Delete('/:id')
  @UseGuards(AdminGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The order was deleted',
  })
  public async delete(@Param('id', OrderIdValidationPipe) id: number) {
    await this.orderService.delete(id);
  }
}
