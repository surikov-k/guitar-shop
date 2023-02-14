import { createAction } from '@reduxjs/toolkit';
import { CommentType, OrderType, ShopItemType } from '../types';
import { AuthStatus } from '../constants';

export const loadShopItems = createAction<ShopItemType[]>('data/loadShopItems');

export const requireAuthorization = createAction<AuthStatus>(
  'user/requireAuthorization'
);

export const saveUsername = createAction<string>(
  'user/saveUsername'
);

export const loadItemComments =
  createAction<CommentType[]>('data/loadComments');

export const loadOrders = createAction<OrderType[]>('data/loadOrders');

export const setError = createAction<string | null>('app/setError')
