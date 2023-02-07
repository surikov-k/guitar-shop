import { Entity } from '@guitar-shop/core';
import { OrderItem } from '@guitar-shop/shared-types';

export class OrderItemEntity implements Entity<OrderItemEntity>, OrderItem {
  id: number;
  price: number;
  quantity: number;
  shopItemId: number;
  sum: number;

  constructor(orderItem: OrderItem) {
    this.fillEntity(orderItem);
  }

  fillEntity(orderItem: OrderItem) {
    this.price = orderItem.price;
    this.quantity = orderItem.quantity;
    this.shopItemId = orderItem.shopItemId;
    this.sum = this.price * this.quantity;
  }

  toObject(): OrderItemEntity {
    return { ...this };
  }
}
