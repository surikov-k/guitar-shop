import {
  ArgumentMetadata,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { ShopOrderRepository } from '../../app/shop-order/shop-order.repository';

const ORDER_NOT_FOUND = 'Order not found';

@Injectable()
export class OrderIdValidationPipe implements PipeTransform {
  constructor(private readonly orderRepository: ShopOrderRepository) {}

  async transform(value: number, { type }: ArgumentMetadata) {
    if (type !== 'param') {
      throw new Error('This pipe must be used only with params!');
    }
    const item = await this.orderRepository.findById(value);

    if (!item) {
      throw new NotFoundException(ORDER_NOT_FOUND);
    }
    return value;
  }
}
