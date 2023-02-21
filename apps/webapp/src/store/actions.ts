import { createAction } from '@reduxjs/toolkit';
import { CommentType, OrderType, ShopItemType } from '../types';
import { AuthStatus } from '../constants';
import { User } from '@guitar-shop/shared-types';

export const loadShopItems = createAction<ShopItemType[]>('data/loadShopItems');

export const requireAuthorization = createAction<AuthStatus>(
  'user/requireAuthorization'
);

export const saveUser = createAction<User | null>(
  'user/saveUsername'
);

export const loadItemComments =
  createAction<CommentType[]>('data/loadComments');

export const postItemComment = createAction<CommentType>('data/postComment')

export const loadOrders = createAction<OrderType[]>('data/loadOrders');

export const setError = createAction<string | null>('app/setError')
