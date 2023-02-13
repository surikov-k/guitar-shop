import { ShopItemType } from '../../types';
import { StarRating } from '../star-rating';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { ModalContext } from '../../contexts';
import { useContext } from 'react';
import { ModalCartDelete } from '../modal-cart-delete';

type AdminShopItemProps = {
  shopItem: ShopItemType
}

export function AdminShopItem({ shopItem }: AdminShopItemProps) {
  const {
    id,
    photo,
    name,
    type,
    rating,
    addedAt,
    price
  } = shopItem;

  const {open} = useContext(ModalContext);

  const date = new Date(addedAt);
  return (
    <li className="catalog-item">
      <div className="catalog-item__data">
        <img
          src={`assets/img/content/${photo}`}
          srcSet={`assets/img/content/${photo}@2x.png 2x`}
          width="36"
          height="93"
          alt={name}/>
        <div className="catalog-item__data-wrapper">
          <p className="catalog-item__data-title">{type} {name}</p>
          <div className="rate catalog-item__data-rate">
            <StarRating
              rating={rating}
              size={14}/>
          </div>
          <p className="catalog-item__data-date">Дата добавления {new Intl.DateTimeFormat('ru-RU').format(date)}</p>
          <p className="catalog-item__data-price">{price} ₽</p>
        </div>
      </div>
      <div className="catalog-item__buttons">
        <Link
          className="button button--small button--black-border"
          to={AppRoute.EditItem.replace(':id', String(id))}
          aria-label="Редактировать товар">Редактировать
        </Link>
        <button
          onClick={() => {
            open(<ModalCartDelete shopItem={shopItem}/>)
          }}
          className="button button--small button--black-border"
          aria-label="Удалить товар">Удалить
        </button>
      </div>
    </li>
  );
}
