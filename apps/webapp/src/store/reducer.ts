import { createReducer } from '@reduxjs/toolkit';

import { CartItemType, CommentType, OrderType, ShopItemType } from '../types';
import {
  loadItemComments,
  loadOrders,
  loadShopItems,
  postItemComment,
  requireAuthorization,
  saveUser,
  setError
} from './actions';
import { AuthStatus } from '../constants';
import { User } from '@guitar-shop/shared-types';

const initialState: {
  shopItems: ShopItemType[];
  comments: CommentType[],
  cart: CartItemType[];
  orders: OrderType[];
  authStatus: AuthStatus;
  user: User | null;
  error: string | null;
} = {
  shopItems: [],
  cart: [],
  comments: [],
  orders: [],
  authStatus: AuthStatus.Unknown,
  user: null,
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
    .addCase(saveUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadItemComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(postItemComment, (state, action) => {
      state.comments = [...state.comments, action.payload]
    })
    .addCase(loadOrders,(state, action) => {
      state.orders = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
});
