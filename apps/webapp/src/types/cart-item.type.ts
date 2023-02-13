import { OrderItem } from '@guitar-shop/shared-types';

export type CartItemType = Pick<OrderItem, 'shopItemId' | 'quantity'>
