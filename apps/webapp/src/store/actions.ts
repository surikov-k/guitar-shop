import { createAction } from '@reduxjs/toolkit';
import { ShopItemType } from '../types';

export const loadShopItems = createAction<ShopItemType[]>('shopItems/load')
