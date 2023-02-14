import { createReducer } from '@reduxjs/toolkit';

import { CartItemType, CommentType, OrderType, ShopItemType } from '../types';
import { loadItemComments, loadOrders, loadShopItems, requireAuthorization, saveUsername, setError } from './actions';
import { AuthStatus } from '../constants';

const initialState: {
  shopItems: ShopItemType[];
  comments: CommentType[],
  cart: CartItemType[];
  orders: OrderType[];
  authStatus: AuthStatus;
  username: string;
  error: string | null;
} = {
  shopItems: [],
  cart: [],
  comments: [],
  orders: [],
  authStatus: AuthStatus.Unknown,
  username: '',
  error: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadShopItems, (state, action) => {
    state.shopItems = action.payload;
  })
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(saveUsername, (state, action) => {
      state.username = action.payload;
    })
    .addCase(loadItemComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadOrders,(state, action) => {
      state.orders = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
});
