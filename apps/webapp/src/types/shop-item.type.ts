import { Guitar } from '@guitar-shop/shared-types';
import { GuitarTypeRus } from './guitar-type-rus.enum';

export type ShopItemType = Omit<Guitar, 'photo' | 'comments' | 'addedAt' | 'type'>
  & {
  photo: string,
  commentsNumber: number,
  addedAt: string,
  type: GuitarTypeRus
};
