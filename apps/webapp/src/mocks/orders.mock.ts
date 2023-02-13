import { OrderType } from '../types';

export const ordersMock: OrderType[] = [
  {
    id: 1,
    userId: 1,
    orderItems: [
      {
        id: 1,
        shopItemId: 1,
        quantity: 2,
        price: 100,
        sum: 200,
      },
      {
        id: 2,
        shopItemId: 2,
        quantity: 1,
        price: 200,
        sum: 200,
      },
    ],
    totalPrice: 600,
    totalQuantity:3,
    createdAt: '2023-02-12T18:34:10.085Z'
  },
  {
    id: 2,
    userId: 2,
    orderItems: [
      {
        id: 3,
        shopItemId:3,
        quantity: 1,
        price: 100,
        sum: 100,
      },
      {
        id: 4,
        shopItemId: 2,
        quantity: 1,
        price: 200,
        sum: 200,
      },
    ],
    totalPrice: 300,
    totalQuantity:2,
    createdAt: '2023-02-12T18:34:10.185Z'
  }
]

