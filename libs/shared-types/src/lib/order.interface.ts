import { OrderItem } from './order-item.interface';

export interface Order {
  id?: number;
  userId: number;
  orderItems: OrderItem[];
  totalPrice: number;
  totalQuantity: number;
  createdAt?: Date;
}
