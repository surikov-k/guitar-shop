import { Order } from '@guitar-shop/shared-types';

export type OrderType = Omit<Order, 'createdAt'> & { createdAt: string}
