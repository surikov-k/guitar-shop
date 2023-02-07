import { Entity } from '@guitar-shop/core';
import { Order, OrderItem } from '@guitar-shop/shared-types';

export class ShopOrderEntity implements Entity<ShopOrderEntity>, Order {
  createdAt: Date;
  id: number;
  userId: number;
  orderItems: OrderItem[];
  totalPrice: number;
  totalQuantity: number;

  constructor(order: Order) {
    this.fillEntity(order);
  }

  fillEntity(order: Order) {
    this.userId = order.userId;
    this.createdAt = order.createdAt;
    this.id = order.id;
    this.orderItems = order.orderItems;
    this.totalPrice = order.totalPrice;
    this.totalQuantity = order.totalQuantity;
  }

  toObject(): ShopOrderEntity {
    return {
      ...this,
      orderItems: this.orderItems.map(({ id }) => ({ id }))
    };
  }
}
