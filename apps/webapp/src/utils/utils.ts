import { GuitarTypeRus, ShopItemType } from '../types';
import { GuitarType } from '@guitar-shop/shared-types';

const guitarTypeMap: {[key: string]: GuitarTypeRus} = {
  [GuitarType.Acoustic]: GuitarTypeRus.Acoustic,
  [GuitarType.Electric]: GuitarTypeRus.Electric,
  [GuitarType.Ukulele]: GuitarTypeRus.Ukulele,
}

export const adaptShopItem = (shopItem: any): ShopItemType => ({
  ...shopItem,
  type: guitarTypeMap[shopItem.type],
  commentsNumber: shopItem.comments
})
