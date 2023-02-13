import { createReducer } from '@reduxjs/toolkit';

import { CartItemType, OrderType, ShopItemType } from '../types';
import { loadShopItems } from './actions';
import { shopItemsMock } from '../mocks/shop-items.mock';
import { cartMock } from '../mocks/cart.mock';
import { ordersMock } from '../mocks/orders.mock';

const initialState: {
  shopItems: ShopItemType[];
  cart: CartItemType[];
  orders: OrderType[];
} = {
  shopItems: shopItemsMock,
  cart: cartMock,
  orders: ordersMock,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadShopItems, (state, action) => {
    state.shopItems = action.payload;
  });
});
