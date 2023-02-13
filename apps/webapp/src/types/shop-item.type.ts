import { Guitar } from '@guitar-shop/shared-types';

export type ShopItemType = Omit<Guitar, 'photo' | 'comments' | 'addedAt'>
  & {
  photo: string,
  comments: number[],
  addedAt: string,
};
